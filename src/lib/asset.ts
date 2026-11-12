/**
 * 把 public 目录下的绝对路径（/images/xxx.jpg）转成带部署前缀的路径。
 *
 * GitHub Pages 项目站点的根是 /Zenith/ 而不是 /，写死 /images/... 会 404。
 * Vite 通过 base 配置注入 import.meta.env.BASE_URL（构建时为 "/Zenith/"）。
 */
const BASE = import.meta.env.BASE_URL || "/";

export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${BASE.replace(/\/+$/, "/")}${path.replace(/^\/+/, "")}`;
}
