// 构建后处理：让 dist/static 成为 GitHub Pages 可直接发布的静态站点
//
// 1) 复制 index.html -> 404.html
//    GitHub Pages 没有 SPA 回退，直接访问 /Zenith/news/xxx 会 404；
//    发布一份 404.html（内容与 index.html 相同）即可让 React Router 接管该路径。
// 2) 写入 .nojekyll，避免 Jekyll 忽略下划线开头的文件/目录。
// 3) 兼容旧的 Cloudflare 部署：把 package.json 和 build.flag 放到 dist 根。
import { copyFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, join } from "node:path";

const root = process.cwd();
const outDir = resolve(root, "dist/static");
const indexHtml = join(outDir, "index.html");

if (!existsSync(indexHtml)) {
  console.error(`[postbuild] 找不到构建产物: ${indexHtml}`);
  process.exit(1);
}

copyFileSync(indexHtml, join(outDir, "404.html"));
console.log("[postbuild] dist/static/404.html <- index.html");

writeFileSync(join(outDir, ".nojekyll"), "");
console.log("[postbuild] dist/static/.nojekyll");

const distRoot = resolve(root, "dist");
mkdirSync(distRoot, { recursive: true });
copyFileSync(resolve(root, "package.json"), join(distRoot, "package.json"));
writeFileSync(join(distRoot, "build.flag"), new Date().toISOString());
console.log("[postbuild] dist/package.json + dist/build.flag");
