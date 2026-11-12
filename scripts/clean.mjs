// 跨平台清理构建目录（替代 rm -rf，Windows 上也能跑）
import { rmSync } from "node:fs";
import { resolve } from "node:path";

const targets = process.argv.slice(2);
if (targets.length === 0) targets.push("dist");

for (const target of targets) {
  rmSync(resolve(process.cwd(), target), { recursive: true, force: true });
  console.log(`[clean] removed ${target}`);
}
