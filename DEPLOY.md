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

## 五、自定义域名（把站点从 /Zenith/ 搬到域名根目录）

### 关键概念

项目站点 `https://lcxmell.github.io/Zenith/` 之所以带 `/Zenith/` 前缀，是因为**“仓库名”就是路径**。
一旦给这个仓库的 Pages 配上自定义域名（例如 `www.zenith-logistics.com`），GitHub 会把这个站点的根变成
`https://www.zenith-logistics.com/`，**`/Zenith/` 前缀随即消失**，旧地址 301 跳转到新域名根。

所以配自定义域名时，构建 base 必须从 `/Zenith/` 改成 `/`，否则 JS/CSS 会去请求
`https://www.zenith-logistics.com/Zenith/assets/...` 而 404，页面继续白屏。

本仓库已经做了**自动判断**（`.github/workflows/deploy-pages.yml` 的 `Resolve base path` 步骤）：

| 条件 | base | 站点根 |
| --- | --- | --- |
| 仓库变量 `PAGES_CUSTOM_DOMAIN` 非空 | `/` | 自定义域名根 |
| 仓库里存在 `public/CNAME` | `/` | 自定义域名根 |
| 两者都没有（当前状态） | `/Zenith/` | `https://lcxmell.github.io/Zenith/` |
| 手动 Run workflow 时填 `base` | 用填的值 | 按需 |

### 操作步骤（以自有域名 `DOMAIN` 为例）

> 现状记录：2026-11-12 已把 Pages 的自定义域名设为 `www.zenithlog.cn`（`https_enforced: true`，证书 approved），
> 仓库变量 `PAGES_CUSTOM_DOMAIN=www.zenithlog.cn`，构建 base = `/`。
> 线上：<https://www.zenithlog.cn/>；旧地址 `https://lcxmell.github.io/Zenith/` 301 跳转过去。
> 若以后不再用自定义域名，把该变量删掉并重建即可回到 `/Zenith/` 模式。

**顺序必须是“先 DNS → 再 Custom domain → 同时设变量 → 重建”，中间的窗口期新老地址都会短暂不可用。**
最容易踩的坑：只改了 Custom domain 没设 `PAGES_CUSTOM_DOMAIN`，于是构建仍是 `/Zenith/` 前缀，
资源请求变成 `https://DOMAIN/Zenith/assets/...` → 404 → 白屏。反过来（变量设了、域名没生效）则旧地址白屏。
另外 Pages 分发约需 1-3 分钟，刚部署完可能仍返回旧 HTML，属正常。

1. **DNS 记录**（域名托管在 Cloudflare 时，先点成灰色云 = DNS only，否则证书校验会失败/绕圈）

   | 类型 | 名称 | 值 |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `lcxmell.github.io` |

   只要 `www.DOMAIN` 也行：那就只加那条 CNAME。

2. **仓库 Settings → Pages → Custom domain** 填 `DOMAIN`（或 `www.DOMAIN`）→ Save。
   这一步会做 DNS 检查，通过后勾选 **Enforce HTTPS**（证书签发可能要等几分钟到 1 小时）。
3. **告诉构建“现在是根路径部署”**，二选一：
   - 仓库 Settings → Secrets and variables → Actions → **Variables** → New variable：
     名字 `PAGES_CUSTOM_DOMAIN`，值 `DOMAIN`（推荐，不改代码）；
   - 或者在仓库里加文件 `public/CNAME`，内容一行：`DOMAIN`。
4. **Actions → Deploy to GitHub Pages → Run workflow**（或随便 push 一次）重新构建。
   日志里会打印 `resolved base: /`，`Verify build output` 里的 `src="..."` 应该不带 `/Zenith/`。

也可以用 API 一次搞定（把 `DOMAIN` 换成真实域名）：

```bash
curl -X PUT -H "Authorization: Bearer $TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/repos/LCXmell/Zenith/pages \
     -d '{"build_type":"workflow","cname":"DOMAIN","https_enforced":true}'
```

### 另一种“https://lcxmell.github.io”根地址（一般不要选）

网上说的“改成 `https://lcxmell.github.io` 才能用”，指的是**用户站点**：把仓库**改名**为
`LCXmell.github.io`，它的 Pages 就发布在 `https://lcxmell.github.io/` 根目录，base 用 `/`。
代价：仓库名变、`/Zenith/` 这个地址直接失效、而且一个账号只能有一个这样的仓库（会顶掉其它站点的默认域名）。
有自有域名的话不需要走这一步。

### 排查清单

- 页面白屏 → 打开 DevTools，看 `assets/...js` 的请求是不是带了域名根路径；带 `/Zenith/` 说明 base 没切过来。
- Custom domain 报 `DNS check unsuccessful` → 记录还没生效（等 10 分钟）或 Cloudflare 还开着橙色云。
- 证书一直 pending → 先把域名从 Pages 里删掉、清 `public/CNAME`、重加一次。
- 换域名后 `/Zenith/news/xxx` 老链接 → 301 到 `https://DOMAIN/news/xxx`，靠 `404.html` 回退仍能打开。
