# 數位敘事力期刊網站 - 部署指南
## Deployment Guide

---

## 📋 目錄

1. [部署前準備](#部署前準備)
2. [本地開發環境設定](#本地開發環境設定)
3. [Vercel 部署（推薦）](#vercel-部署)
4. [Netlify 部署](#netlify-部署)
5. [GitHub Pages 部署](#github-pages-部署)
6. [自訂域名設定](#自訂域名設定)
7. [環境變數配置](#環境變數配置)
8. [常見問題排除](#常見問題排除)

---

## 🚀 部署前準備

### 檢查清單

在開始部署之前，請確認以下項目：

- ✅ Node.js >= 18.14.1 已安裝
- ✅ Git 已安裝並配置
- ✅ GitHub 帳號已建立
- ✅ 專案已推送到 GitHub 儲存庫
- ✅ 本地測試已通過

### 系統需求

```bash
Node.js: >= 18.14.1
npm: >= 9.0.0 (或 pnpm >= 8.0.0)
Git: >= 2.0.0
```

---

## 💻 本地開發環境設定

### 步驟 1: 複製專案

```bash
# 複製專案（如果還沒有）
git clone https://github.com/your-username/Journal-of-Digital-Narrative-Website.git
cd Journal-of-Digital-Narrative-Website
```

### 步驟 2: 安裝依賴

```bash
# 使用 npm
npm install

# 或使用 pnpm（推薦，更快）
pnpm install

# 或使用 yarn
yarn install
```

### 步驟 3: 啟動開發伺服器

```bash
# 使用 npm
npm run dev

# 或使用 pnpm
pnpm dev

# 或使用 yarn
yarn dev
```

開啟瀏覽器訪問：`http://localhost:4321`

### 步驟 4: 建構專案測試

```bash
# 建構專案
npm run build

# 預覽建構結果
npm run preview
```

---

## 🌐 Vercel 部署（推薦）

Vercel 是 Astro 官方推薦的部署平台，提供最佳效能與開發體驗。

### 為什麼選擇 Vercel？

- ⚡ 自動偵測 Astro 專案
- 🚀 全球 CDN 加速
- 🔄 自動化 CI/CD
- 📊 內建分析工具
- 💰 免費方案充足

### 部署步驟

#### 方式 1: 透過 Vercel Dashboard（推薦）

1. **前往 Vercel 並登入**
   - 訪問 [vercel.com](https://vercel.com)
   - 使用 GitHub 帳號登入

2. **匯入專案**
   ```
   1. 點擊 "Add New Project"
   2. 點擊 "Import Git Repository"
   3. 選擇你的 GitHub 儲存庫
   4. 點擊 "Import"
   ```

3. **配置專案**
   ```
   Project Name: journal-of-digital-narrative
   Framework Preset: Astro (自動偵測)
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **部署**
   ```
   點擊 "Deploy" 按鈕
   等待 2-3 分鐘完成建構
   ```

5. **完成！**
   - 部署成功後會獲得一個 `.vercel.app` 域名
   - 例如：`journal-digital-narrative.vercel.app`

#### 方式 2: 透過 Vercel CLI

```bash
# 1. 安裝 Vercel CLI
npm install -g vercel

# 2. 登入 Vercel
vercel login

# 3. 部署專案
vercel

# 4. 生產環境部署
vercel --prod
```

### 自動部署設定

Vercel 會自動：
- ✅ 監聽 GitHub 的 push 事件
- ✅ 自動建構並部署
- ✅ 為每個 Pull Request 建立預覽部署
- ✅ 主分支更新時自動部署到生產環境

---

## 🎯 Netlify 部署

### 部署步驟

#### 方式 1: 透過 Netlify Dashboard

1. **前往 Netlify 並登入**
   - 訪問 [netlify.com](https://netlify.com)
   - 使用 GitHub 帳號登入

2. **匯入專案**
   ```
   1. 點擊 "Add new site" > "Import an existing project"
   2. 選擇 "Deploy with GitHub"
   3. 授權 Netlify 訪問 GitHub
   4. 選擇你的儲存庫
   ```

3. **配置建構設定**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **部署**
   ```
   點擊 "Deploy site"
   等待建構完成
   ```

#### 方式 2: 透過 Netlify CLI

```bash
# 1. 安裝 Netlify CLI
npm install -g netlify-cli

# 2. 登入 Netlify
netlify login

# 3. 初始化專案
netlify init

# 4. 部署
netlify deploy --prod
```

### 建立 `netlify.toml` 配置檔

在專案根目錄建立 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

[build.environment]
  NODE_VERSION = "18"
```

---

## 📄 GitHub Pages 部署

### 配置 Astro

修改 `astro.config.mjs`：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/Journal-of-Digital-Narrative-Website',
  // ... 其他配置
});
```

### 建立 GitHub Actions 工作流程

建立 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 啟用 GitHub Pages

1. 前往 GitHub 儲存庫
2. Settings > Pages
3. Source 選擇 "GitHub Actions"
4. 推送程式碼觸發部署

---

## 🌐 自訂域名設定

### Vercel 自訂域名

1. **在 Vercel Dashboard 中**
   ```
   1. 選擇你的專案
   2. 前往 "Settings" > "Domains"
   3. 輸入你的域名（例如：journal-digital-narrative.com）
   4. 點擊 "Add"
   ```

2. **配置 DNS**

   在你的域名提供商（如 Cloudflare, GoDaddy）設定：

   **A Record:**
   ```
   Name: @
   Value: 76.76.21.21
   ```

   **CNAME Record:**
   ```
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **等待 DNS 生效**
   - 通常需要 24-48 小時
   - Vercel 會自動配置 SSL 憑證

### Netlify 自訂域名

1. **在 Netlify Dashboard 中**
   ```
   1. 選擇你的網站
   2. 前往 "Domain settings"
   3. 點擊 "Add custom domain"
   4. 輸入你的域名
   ```

2. **配置 DNS**

   **A Record:**
   ```
   Name: @
   Value: 75.2.60.5
   ```

   **CNAME Record:**
   ```
   Name: www
   Value: [your-site-name].netlify.app
   ```

---

## 🔐 環境變數配置

### 在 Vercel 設定環境變數

1. 前往專案 Settings > Environment Variables
2. 新增變數：

```
SITE_URL=https://your-domain.com
PUBLIC_GA_ID=G-XXXXXXXXXX (如果使用 Google Analytics)
```

### 在 Netlify 設定環境變數

1. 前往 Site settings > Environment variables
2. 新增變數（同上）

### 在專案中使用環境變數

```javascript
// astro.config.mjs
export default defineConfig({
  site: import.meta.env.SITE_URL || 'http://localhost:4321',
});
```

---

## 🎨 建構優化

### 確保最佳效能

在部署前檢查：

```bash
# 1. 建構專案
npm run build

# 2. 檢查建構輸出
ls -lh dist/

# 3. 分析效能
npm run preview
# 在瀏覽器中開啟開發者工具 > Lighthouse
```

### 優化檢查清單

- ✅ 圖片已優化（WebP 格式）
- ✅ 未使用的 CSS 已移除
- ✅ JavaScript 已最小化
- ✅ 字體已優化載入
- ✅ SEO meta tags 已設定
- ✅ Sitemap 已生成

---

## 🔍 SEO 設定

### 生成 Sitemap

Astro 會自動生成 sitemap（如果已安裝 `@astrojs/sitemap`）

檢查 `https://your-domain.com/sitemap-index.xml`

### 提交到搜尋引擎

**Google Search Console:**
1. 前往 [search.google.com/search-console](https://search.google.com/search-console)
2. 新增網站
3. 驗證擁有權
4. 提交 Sitemap

**Bing Webmaster Tools:**
1. 前往 [bing.com/webmasters](https://www.bing.com/webmasters)
2. 新增網站
3. 提交 Sitemap

---

## 🐛 常見問題排除

### 問題 1: 建構失敗 - "Module not found"

**解決方法:**
```bash
# 清除快取並重新安裝
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 問題 2: 樣式沒有載入

**可能原因:**
- Tailwind CSS 配置錯誤
- CSS 路徑問題

**解決方法:**
```bash
# 檢查 tailwind.config.cjs
# 確保 content 路徑正確
content: ['./src/**/*.{astro,html,js,jsx,md,mdx}']

# 檢查 global.css 是否正確匯入
```

### 問題 3: 圖片無法顯示

**解決方法:**
```astro
<!-- 使用 public 資料夾的圖片 -->
<img src="/images/example.jpg" alt="Example" />

<!-- 或使用 Astro Image -->
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.jpg';
---
<Image src={myImage} alt="Example" />
```

### 問題 4: 404 頁面未正確顯示

**解決方法:**
創建 `src/pages/404.astro`：

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="404 - 頁面不存在">
  <h1>404 - 找不到頁面</h1>
  <a href="/">返回首頁</a>
</BaseLayout>
```

### 問題 5: Vercel 部署超時

**解決方法:**
```json
// vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "maxDuration": 60
      }
    }
  ]
}
```

---

## 📊 效能監控

### 設定 Google Analytics

1. 建立 `src/components/Analytics.astro`：

```astro
---
const GA_ID = import.meta.env.PUBLIC_GA_ID;
---

{GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
    <script define:vars={{ GA_ID }}>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', GA_ID);
    </script>
  </>
)}
```

2. 在 `BaseLayout.astro` 中引入：

```astro
---
import Analytics from '../components/Analytics.astro';
---

<head>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <Analytics />
</body>
```

### Vercel Analytics

```bash
# 安裝 Vercel Analytics
npm install @vercel/analytics

# 在 BaseLayout.astro 中加入
import { inject } from '@vercel/analytics';
inject();
```

---

## 🔄 持續部署流程

### 推薦的 Git 工作流程

```bash
# 1. 建立新功能分支
git checkout -b feature/new-feature

# 2. 開發並測試
npm run dev

# 3. 提交變更
git add .
git commit -m "feat: add new feature"

# 4. 推送到 GitHub
git push origin feature/new-feature

# 5. 建立 Pull Request
# 在 GitHub 上建立 PR

# 6. 審查並合併到 main
# Vercel/Netlify 會自動部署
```

### 版本標籤

```bash
# 建立版本標籤
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

---

## 📝 部署檢查清單

### 部署前

- [ ] 本地測試通過
- [ ] 建構成功（`npm run build`）
- [ ] 預覽正常（`npm run preview`）
- [ ] 所有連結可點擊
- [ ] 圖片正常載入
- [ ] 響應式設計正常
- [ ] SEO meta tags 設定完成
- [ ] Lighthouse 分數 > 90

### 部署後

- [ ] 網站可正常訪問
- [ ] SSL 憑證已啟用（HTTPS）
- [ ] 自訂域名已設定
- [ ] Google Analytics 正常運作
- [ ] Sitemap 可訪問
- [ ] 404 頁面正常顯示
- [ ] 社群媒體連結正確
- [ ] 表單功能正常

---

## 🎓 進階設定

### 啟用 Brotli 壓縮（Vercel）

Vercel 預設啟用，無需額外配置。

### 啟用 HTTP/2 推送

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Link",
          "value": "</fonts/inter.woff2>; rel=preload; as=font; crossorigin"
        }
      ]
    }
  ]
}
```

### 設定 CSP (Content Security Policy)

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
  },
});
```

---

## 📞 需要協助？

### 官方文件

- [Astro 官方文件](https://docs.astro.build/)
- [Vercel 文件](https://vercel.com/docs)
- [Netlify 文件](https://docs.netlify.com/)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)

### 社群資源

- [Astro Discord](https://astro.build/chat)
- [GitHub Issues](https://github.com/your-username/Journal-of-Digital-Narrative-Website/issues)

---

## 🎉 恭喜！

您的網站已成功部署！

**下一步：**
- 📱 在多種裝置上測試
- 📊 監控網站效能
- 🔄 定期更新內容
- 💡 收集使用者反饋
- 🚀 持續優化改進

---

**文件版本**: 1.0
**建立日期**: 2025-11-09
**最後更新**: 2025-11-09

---

© 2025 數位敘事力期刊 (Journal of Digital Narrative)
