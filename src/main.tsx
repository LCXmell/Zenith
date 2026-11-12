import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";

// GitHub Pages 项目站点挂在 /Zenith/ 子路径下，BrowserRouter 必须带上同样的 basename，
// 否则路由匹配不到 "/"，页面渲染为空白。
const basename = import.meta.env.BASE_URL.replace(/\/+$/, "");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
