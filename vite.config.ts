/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tsconfigPaths()];
  return plugins;
}

// GitHub Pages 的项目站点挂在子路径下：https://<user>.github.io/<repo>/
// 构建时必须给 /assets、/images 等绝对路径加上该前缀，否则资源 404、页面白屏。
// 换成自定义域名（根路径部署）时把 PUBLIC_BASE 设为 "/" 即可，无需改其它代码。
// dev 仍然是 http://localhost:3000/，只有 build / preview 使用该前缀。
const buildBase = process.env.PUBLIC_BASE || "/Zenith/";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? buildBase : "/",
  plugins: getPlugins(),
}));
