# 數位敘事力期刊網站 - 快速開始指南
## Quick Start Guide

---

## 🚀 5分鐘快速部署

### 方式一：使用 Vercel（最簡單，推薦）

#### 1. 前往 Vercel
訪問：https://vercel.com

#### 2. 使用 GitHub 登入
點擊 "Sign up with GitHub"

#### 3. 匯入專案
```
1. 點擊 "Add New Project"
2. 點擊 "Import Git Repository"
3. 選擇 "Journal-of-Digital-Narrative-Website"
4. 點擊 "Import"
```

#### 4. 配置設定（Vercel 會自動偵測）
```
Framework Preset: Astro ✅ (自動偵測)
Build Command: npm run build ✅
Output Directory: dist ✅
Install Command: npm install ✅
```

#### 5. 點擊 "Deploy"
等待 2-3 分鐘，完成！🎉

#### 6. 獲得網址
```
https://journal-digital-narrative.vercel.app
```

---

## 💻 本地開發測試

### 步驟 1: 安裝 Node.js
確保已安裝 Node.js >= 18.14.1
```bash
node --version  # 檢查版本
```

### 步驟 2: 複製專案
```bash
git clone https://github.com/YOUR_USERNAME/Journal-of-Digital-Narrative-Website.git
cd Journal-of-Digital-Narrative-Website
```

### 步驟 3: 安裝依賴
```bash
npm install
```

### 步驟 4: 啟動開發伺服器
```bash
npm run dev
```

### 步驟 5: 開啟瀏覽器
訪問：http://localhost:4321

---

## 🌐 設定自訂域名

### 在 Vercel Dashboard

1. **選擇專案** → Settings → Domains
2. **輸入域名**：`journal-digital-narrative.com`
3. **點擊 Add**

### 在域名提供商設定 DNS

**A Record:**
```
名稱: @
值: 76.76.21.21
```

**CNAME Record:**
```
名稱: www
值: cname.vercel-dns.com
```

### 等待生效
通常需要 24-48 小時

---

## 📝 常用指令

```bash
# 開發模式
npm run dev

# 建構網站
npm run build

# 預覽建構結果
npm run preview

# 檢查程式碼
npm run astro check
```

---

## 🎨 自訂網站內容

### 修改首頁標題
編輯：`src/pages/index.astro`
```astro
<h1>數位敘事力期刊</h1>
<!-- 改成你想要的標題 -->
```

### 修改顏色主題
編輯：`tailwind.config.cjs`
```javascript
colors: {
  primary: {
    500: '#0891B2', // 修改主色
  }
}
```

### 修改社群連結
編輯：`src/components/Footer.astro`
```javascript
const socialLinks = [
  {
    name: 'Instagram',
    url: 'YOUR_INSTAGRAM_URL', // 改成你的連結
  }
]
```

---

## 🐛 遇到問題？

### 建構失敗
```bash
# 清除快取並重新安裝
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 樣式沒有顯示
檢查 `src/styles/global.css` 是否被正確匯入

### 圖片無法載入
確保圖片放在 `public/` 資料夾中

---

## 📚 詳細文件

- 📖 [完整設計規劃](./DESIGN_PLAN.md)
- 🎨 [視覺設計規範](./VISUAL_DESIGN_SPECS.md)
- 💻 [技術實作指南](./TECHNICAL_GUIDE.md)
- 🚀 [部署指南](./DEPLOYMENT_GUIDE.md)

---

## ✅ 部署檢查清單

- [ ] 本地測試成功（`npm run dev`）
- [ ] 建構成功（`npm run build`）
- [ ] 預覽正常（`npm run preview`）
- [ ] 所有連結可點擊
- [ ] 圖片正常載入
- [ ] 手機版顯示正常
- [ ] 社群連結已更新

---

## 🎉 完成！

恭喜！您的網站已成功上線！

**下一步：**
- 📱 在多種裝置上測試
- 🔗 分享網站連結
- 📊 安裝 Google Analytics
- 📝 開始發布內容

---

**需要協助？**
- 📧 Email: [待補充]
- 💬 GitHub Issues: [專案 Issues 頁面]

---

© 2025 數位敘事力期刊 (Journal of Digital Narrative)
