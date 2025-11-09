# 數位敘事力期刊 - 視覺設計規範
## Visual Design Specifications

---

## 🎨 完整視覺設計系統

### 色彩使用指南

#### 主色調應用場景

**深藍色系 (#1A365D, #2C5282)**
```
✓ 導覽列背景
✓ 主要標題文字
✓ Footer背景
✓ 專業性內容區塊
✓ 按鈕主要樣式
```

**青色系 (#0891B2, #06B6D4)**
```
✓ 連結文字
✓ 科技相關圖標
✓ 強調性邊框
✓ 載入動畫
✓ 進度指示器
✓ 懸停狀態
```

**紫色系 (#6B21A8, #7C3AED)**
```
✓ AI相關標籤
✓ 創新主題標記
✓ 特殊功能區塊
✓ 漸變背景元素
```

**橙色系 (#EA580C, #F97316)**
```
✓ CTA主按鈕
✓ 重要通知
✓ 高亮標記
✓ 緊急訊息
```

#### 色彩組合範例

**組合 1: 專業學術風格**
```
背景: #FFFFFF
主文字: #1F2937
標題: #1A365D
強調: #0891B2
CTA: #EA580C
```

**組合 2: 科技創新風格**
```
背景: linear-gradient(135deg, #1A365D 0%, #0891B2 100%)
主文字: #FFFFFF
標題: #FFFFFF
強調: #F97316
卡片背景: rgba(255, 255, 255, 0.95)
```

**組合 3: 溫暖親切風格**
```
背景: #F3F4F6
主文字: #374151
標題: #1A365D
強調: #7C3AED
次要: #F97316
```

### 字體排版詳細規範

#### 中文排版示例

```
H1 標題範例
數位敘事力期刊
字體: Noto Sans TC Bold
大小: 48px / 3rem
行高: 1.2
字重: 700
字距: -0.02em

H2 標題範例
用科技說故事，以敘事賦能教育
字體: Noto Sans TC Medium
大小: 36px / 2.25rem
行高: 1.3
字重: 500
字距: -0.01em

內文範例
這是一個專注於教育科技與數位敘事的知識分享平台，我們致力於為教育工作者提供最新的教學工具、研究成果與實踐經驗。
字體: Noto Sans TC Regular
大小: 16px / 1rem
行高: 1.75
字重: 400
字距: 0
```

#### 英文排版示例

```
H1 Title Example
Journal of Digital Narrative
字體: Inter Bold
大小: 48px / 3rem
行高: 1.2
字重: 700
字距: -0.02em

H2 Subtitle Example
Empowering Education through Digital Storytelling
字體: Inter SemiBold
大小: 36px / 2.25rem
行高: 1.3
字重: 600
字距: -0.01em

Body Text Example
A platform dedicated to educational technology and digital narrative, providing teachers with the latest tools, research, and practical experiences.
字體: Inter Regular
大小: 16px / 1rem
行高: 1.6
字重: 400
字距: 0
```

### 組件設計規範

#### 1. 按鈕組件 (Buttons)

**主要按鈕 (Primary Button)**
```css
.btn-primary {
  background: linear-gradient(135deg, #EA580C 0%, #F97316 100%);
  color: #FFFFFF;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(234, 88, 12, 0.25);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(234, 88, 12, 0.35);
}
```

**次要按鈕 (Secondary Button)**
```css
.btn-secondary {
  background: transparent;
  color: #0891B2;
  padding: 12px 32px;
  border: 2px solid #0891B2;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #0891B2;
  color: #FFFFFF;
}
```

**文字按鈕 (Text Button)**
```css
.btn-text {
  background: transparent;
  color: #0891B2;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.btn-text:hover {
  color: #06B6D4;
  text-decoration: underline;
}
```

#### 2. 卡片組件 (Cards)

**文章卡片 (Article Card)**
```css
.article-card {
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

.article-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-card-image {
  transform: scale(1.05);
}

.article-card-content {
  padding: 24px;
}

.article-card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 12px;
  line-height: 1.4;
}

.article-card-excerpt {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-card-meta {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #9CA3AF;
}
```

**特色卡片 (Featured Card)**
```css
.featured-card {
  background: linear-gradient(135deg, #1A365D 0%, #0891B2 100%);
  border-radius: 16px;
  padding: 48px;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  transform: translate(50%, -50%);
}
```

#### 3. 導覽列 (Navigation)

**桌面版導覽**
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.navbar-logo {
  font-size: 24px;
  font-weight: 700;
  color: #1A365D;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: 32px;
  list-style: none;
}

.navbar-link {
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

.navbar-link:hover {
  color: #0891B2;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0891B2;
  transition: width 0.3s ease;
}

.navbar-link:hover::after {
  width: 100%;
}
```

#### 4. 標籤組件 (Tags/Badges)

**主題標籤**
```css
.tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tag-ai {
  background: rgba(107, 33, 168, 0.1);
  color: #6B21A8;
  border: 1px solid rgba(107, 33, 168, 0.3);
}

.tag-ai:hover {
  background: #6B21A8;
  color: #FFFFFF;
}

.tag-tech {
  background: rgba(8, 145, 178, 0.1);
  color: #0891B2;
  border: 1px solid rgba(8, 145, 178, 0.3);
}

.tag-tech:hover {
  background: #0891B2;
  color: #FFFFFF;
}

.tag-teaching {
  background: rgba(234, 88, 12, 0.1);
  color: #EA580C;
  border: 1px solid rgba(234, 88, 12, 0.3);
}

.tag-teaching:hover {
  background: #EA580C;
  color: #FFFFFF;
}
```

#### 5. 表單組件 (Forms)

**輸入框**
```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  color: #1F2937;
  background: #FFFFFF;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #0891B2;
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.input::placeholder {
  color: #9CA3AF;
}
```

**文字區域**
```css
.textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  color: #1F2937;
  background: #FFFFFF;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.textarea:focus {
  outline: none;
  border-color: #0891B2;
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}
```

### 動畫效果庫

#### 淡入動畫
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

#### 滑入動畫
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight 0.6s ease-out;
}
```

#### 縮放動畫
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.4s ease-out;
}
```

#### 脈動效果
```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### 首頁區塊詳細設計

#### Hero Section 設計規範

**桌面版 (Desktop)**
```
高度: 100vh (全屏)
背景: 漸變 + 動態粒子效果
佈局: 置中對齊

元素層次:
1. 背景層: 漸變色 (深藍→青色)
2. 粒子動畫層: 浮動粒子
3. 內容層: 標題、副標題、CTA按鈕
4. 裝飾層: 幾何圖形

標題樣式:
- 字體大小: 64px
- 字重: Bold
- 顏色: 白色
- 陰影: 0 2px 10px rgba(0,0,0,0.2)
- 動畫: 淡入 + 向上滑入

副標題樣式:
- 字體大小: 24px
- 字重: Medium
- 顏色: rgba(255,255,255,0.9)
- 動畫延遲: 0.2s

CTA按鈕:
- 樣式: 主要按鈕 + 次要按鈕
- 間距: 16px
- 動畫延遲: 0.4s

向下捲動指示器:
- 位置: 底部中央
- 動畫: 上下浮動
- 顏色: 白色半透明
```

**行動版 (Mobile)**
```
高度: 100vh
佈局: 垂直置中

標題樣式:
- 字體大小: 36px
- 行高: 1.2
- 左右padding: 24px

副標題樣式:
- 字體大小: 18px
- 行高: 1.5

CTA按鈕:
- 佈局: 垂直堆疊
- 全寬按鈕
- 間距: 12px
```

#### 文章卡片網格設計

**桌面版佈局**
```
容器寬度: 1280px (max-width)
網格: 3欄
間距: 32px
卡片比例: 1:1.2

大型特色卡片:
- 佔據: 2欄寬度
- 圖片比例: 16:9
- 標題大小: 28px

中型卡片:
- 佔據: 1欄寬度
- 圖片比例: 4:3
- 標題大小: 20px
```

**平板版佈局**
```
網格: 2欄
間距: 24px

大型特色卡片:
- 佔據: 2欄寬度（全寬）
```

**行動版佈局**
```
網格: 1欄
間距: 16px
全寬卡片
```

### 響應式圖片規範

#### 圖片尺寸建議

```
Hero背景圖:
- Desktop: 2560x1440px
- Tablet: 1536x1024px
- Mobile: 828x1792px

文章封面圖:
- Large: 1200x675px (16:9)
- Medium: 800x600px (4:3)
- Small: 600x600px (1:1)
- Thumbnail: 400x225px

頭像圖片:
- Large: 400x400px
- Medium: 200x200px
- Small: 100x100px

圖標:
- SVG優先（可縮放）
- PNG備用: 24x24, 32x32, 48x48, 64x64
```

#### 圖片優化規範

```
格式選擇:
- 照片: WebP (備用 JPEG)
- 插圖: SVG (備用 PNG)
- 圖標: SVG
- 動畫: GIF → 轉換為 WebM/MP4

壓縮品質:
- Hero圖: 85%
- 文章圖: 80%
- 縮圖: 75%

響應式載入:
<picture>
  <source media="(min-width: 1024px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 640px)" srcset="medium.webp" type="image/webp">
  <source srcset="small.webp" type="image/webp">
  <img src="fallback.jpg" alt="描述文字" loading="lazy">
</picture>
```

### 無障礙設計檢查清單

#### 色彩對比
```
✓ 主文字對背景: 對比度 ≥ 4.5:1
✓ 大字體對背景: 對比度 ≥ 3:1
✓ 圖標對背景: 對比度 ≥ 3:1
✓ 按鈕對背景: 對比度 ≥ 4.5:1
```

#### 鍵盤導覽
```
✓ Tab鍵順序邏輯
✓ Focus狀態清晰可見
✓ Skip to content連結
✓ 鍵盤快捷鍵支援
```

#### 螢幕閱讀器
```
✓ 所有圖片有alt文字
✓ 連結文字描述清晰
✓ 標題層級正確（H1-H6）
✓ ARIA標籤適當使用
✓ 表單標籤清楚關聯
```

#### 可讀性
```
✓ 字體大小 ≥ 16px
✓ 行高 ≥ 1.5
✓ 行寬 ≤ 80字元
✓ 允許文字縮放至200%
```

### 效能預算

#### 頁面大小限制
```
首頁:
- HTML: < 50KB
- CSS: < 100KB
- JS: < 150KB
- 圖片: < 500KB
- 總計: < 800KB

文章頁:
- HTML: < 30KB
- CSS: < 100KB
- JS: < 150KB
- 圖片: < 300KB
- 總計: < 600KB
```

#### 載入時間目標
```
First Contentful Paint: < 1.5s
Largest Contentful Paint: < 2.5s
Time to Interactive: < 3.0s
Total Blocking Time: < 300ms
Cumulative Layout Shift: < 0.1
```

### 列印樣式

```css
@media print {
  /* 隱藏不需要的元素 */
  .navbar,
  .footer,
  .sidebar,
  .social-share,
  .comments {
    display: none !important;
  }

  /* 調整版面 */
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
  }

  /* 確保連結可見 */
  a {
    color: #000;
    text-decoration: underline;
  }

  /* 顯示連結URL */
  a[href^="http"]:after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }

  /* 分頁控制 */
  h1, h2, h3 {
    page-break-after: avoid;
  }

  img {
    max-width: 100% !important;
    page-break-inside: avoid;
  }
}
```

---

## 📐 設計網格系統

### 桌面版網格 (Desktop Grid)
```
容器最大寬度: 1280px
欄數: 12欄
欄寬: 64px
間距: 32px
左右邊距: 48px
```

### 平板版網格 (Tablet Grid)
```
容器寬度: 100%
欄數: 8欄
間距: 24px
左右邊距: 32px
```

### 行動版網格 (Mobile Grid)
```
容器寬度: 100%
欄數: 4欄
間距: 16px
左右邊距: 24px
```

---

## 🎯 設計交付物清單

### 設計檔案
- [ ] Figma設計檔（包含所有頁面）
- [ ] 設計系統元件庫
- [ ] 圖標資源包（SVG格式）
- [ ] 色彩變數檔案
- [ ] 字體檔案

### 設計文件
- [x] 視覺設計規範（本文件）
- [x] 網站設計規劃書
- [ ] 響應式設計指南
- [ ] 動畫設計規範
- [ ] 品牌使用指南

### 開發資源
- [ ] CSS變數檔案
- [ ] Tailwind配置檔
- [ ] 組件程式碼範本
- [ ] SVG圖標程式碼
- [ ] 動畫CSS/JS程式碼

---

**文件版本**: 1.0
**建立日期**: 2025-11-09
**最後更新**: 2025-11-09

---

© 2025 數位敘事力期刊 (Journal of Digital Narrative)
