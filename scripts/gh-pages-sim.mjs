// 本地模拟 GitHub Pages 项目站点的行为，用于验证 base=/Zenith/ + 404.html 回退
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(process.cwd(), "dist/static");
const prefix = "/Zenith";
const port = Number(process.env.PORT || 4180);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

async function send(res, file, status = 200) {
  try {
    const buf = await readFile(file);
    res.writeHead(status, { "content-type": types[extname(file)] || "application/octet-stream" });
    res.end(buf);
    return true;
  } catch {
    return false;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === prefix) {
    res.writeHead(301, { location: `${prefix}/` });
    return res.end();
  }
  if (!pathname.startsWith(`${prefix}/`)) {
    res.writeHead(404, { "content-type": "text/plain" });
    return res.end("404 (outside base)");
  }

  const rel = pathname.slice(prefix.length + 1);
  const target = join(root, rel || "index.html");

  let ok = false;
  try {
    const s = await stat(target);
    if (s.isDirectory()) ok = await send(res, join(target, "index.html"));
    else ok = await send(res, target);
  } catch {
    ok = false;
  }
  if (ok) return;

  // GitHub Pages 真实行为：找不到文件时返回根目录 404.html（状态码 404）
  const fallback = await send(res, join(root, "404.html"), 404);
  if (!fallback) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404");
  }
}).listen(port, () => console.log(`gh-pages sim: http://localhost:${port}${prefix}/`));
