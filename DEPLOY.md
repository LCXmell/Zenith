# 部署说明（GitHub Pages）

线上地址：<https://lcxmell.github.io/Zenith/>

## 一、为什么之前在 GitHub Pages 上是白屏

1. **发布的是源码，不是构建产物。** 仓库 Settings → Pages 之前用的是 “Deploy from a branch: master / (root)”，
   于是 `https://lcxmell.github.io/Zenith/` 返回的是项目根目录那份开发版 `index.html`，
   里面写着 `<script type="module" src="/src/main.tsx">` —— 浏览器不能执行 `.tsx`，`#root` 永远是空的。
2. **即使构建了也会白屏：缺少子路径 base。** 项目站点的根是 `/Zenith/`，而 Vite 默认 `base: "/"`，
   `index.html` 里的 `/assets/xxx.js`、页面里的 `/images/xxx.jpg` 都会请求到 `https://lcxmell.github.io/assets/...`（404）。
3. **没有 SPA 回退。** 这个站是 React Router 的 BrowserRouter，直接刷新 `/Zenith/news/xxx` 时
   GitHub Pages 找不到该文件会返回 404 页面。

## 二、本仓库现在的做法

| 问题 | 处理 |
| --- | --- |
| 发布构建产物 | `.github/workflows/deploy-pages.yml`：push 到 `master/main` 后自动 `pnpm build:pages` 并把 `dist/static` 作为 Pages artifact 发布 |
| 子路径 base | `vite.config.ts` 里 `base = process.env.PUBLIC_BASE || "/Zenith/"`（dev 仍为 `/`） |
| 静态图片路径 | `src/lib/asset.ts` 的 `asset()` 用 `import.meta.env.BASE_URL` 拼前缀，页面里所有 `/images/...` 都走它 |
| 路由 basename | `src/main.tsx`：`BrowserRouter basename={import.meta.env.BASE_URL}` |
| 深链接刷新 404 | `scripts/postbuild.mjs` 复制 `index.html` → `404.html`，并写入 `.nojekyll` |
| 构建脚本跨平台 | `scripts/clean.mjs` 替代 `rm -rf`；`npm run build` / `pnpm build` 在 Windows、Linux 上一致 |

## 三、上线步骤（只需做一次设置）

1. 提交并推送代码：

   ```bash
   git add -A
   git commit -m "chore: 迁移到 GitHub Pages（base=/Zenith/ + Actions 部署 + SPA 404 回退）"
   git push origin master
   ```

2. 打开仓库 **Settings → Pages → Build and deployment → Source**，把 `Deploy from a branch`
   改成 **`GitHub Actions`**（这一步必须做，否则仍会去发布分支根目录的源码）。
3. 打开 **Actions** 页看 `Deploy to GitHub Pages` 跑完（约 1-2 分钟），再访问
   <https://lcxmell.github.io/Zenith/>。若浏览器有缓存，强制刷新（Ctrl+F5）。

## 四、本地验证

```bash
npm install         # 或 pnpm install
npm run build       # 产物在 dist/static，index.html 里资源已带 /Zenith/ 前缀
npm run preview:pages   # 模拟 GitHub Pages：http://localhost:4180/Zenith/
npm run dev         # 开发服务器：http://localhost:3000/
```

## 五、以后换自定义域名（根路径部署）

在仓库根目录执行构建时把 `PUBLIC_BASE` 设为 `/`，或在 workflow 里给 Build 步骤加环境变量：

```yaml
- name: Build
  run: pnpm build:pages
  env:
    PUBLIC_BASE: /
```

同时记得在 Pages 里配置 Custom domain，代码不需要再改。
