# 數位敘事力期刊 - 技術實作指南
## Technical Implementation Guide

---

## 📋 目錄

1. [專案架構](#專案架構)
2. [技術棧選擇](#技術棧選擇)
3. [開發環境設定](#開發環境設定)
4. [專案結構](#專案結構)
5. [核心功能實作](#核心功能實作)
6. [部署與維護](#部署與維護)
7. [最佳實踐](#最佳實踐)

---

## 🏗️ 專案架構

### 推薦技術棧：Astro + Tailwind CSS

#### 為什麼選擇 Astro？

1. **極致效能**
   - 預設零JavaScript輸出
   - 靜態網站生成（SSG）
   - 自動部分水合（Partial Hydration）

2. **開發者體驗**
   - 支援多種框架組件（React, Vue, Svelte等）
   - 內建圖片優化
   - Markdown/MDX原生支援

3. **SEO友善**
   - 完全靜態HTML
   - 快速載入速度
   - 優秀的Core Web Vitals分數

4. **易於維護**
   - 簡潔的檔案結構
   - 基於檔案的路由
   - 清晰的資料流

#### 為什麼選擇 Tailwind CSS？

1. **快速開發**
   - 實用優先的CSS框架
   - 無需離開HTML
   - 豐富的預設樣式

2. **高度可定制**
   - 完整的設計系統
   - 簡單的主題配置
   - 易於擴展

3. **優秀效能**
   - 自動清除未使用的CSS
   - 極小的最終檔案大小
   - JIT（即時）編譯模式

---

## 🛠️ 開發環境設定

### 前置需求

```bash
# Node.js 版本
Node.js >= 18.14.1

# 套件管理器（擇一）
npm >= 9.0.0
pnpm >= 8.0.0  # 推薦
yarn >= 1.22.0
```

### 專案初始化

#### 選項 A: 使用 Astro CLI（推薦）

```bash
# 建立新的 Astro 專案
npm create astro@latest journal-of-digital-narrative

# 選擇模板
# ✔ Which template would you like to use?
#   > Blog template (recommended)

# 安裝相依套件
# ✔ Install dependencies? (Yes)

# 初始化 Git
# ✔ Initialize a new git repository? (Yes)

# 進入專案目錄
cd journal-of-digital-narrative

# 安裝 Tailwind CSS
npx astro add tailwind

# 安裝其他必要套件
npm install @astrojs/mdx @astrojs/sitemap @astrojs/rss
npm install -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

#### 選項 B: 手動設定

```bash
# 建立專案目錄
mkdir journal-of-digital-narrative
cd journal-of-digital-narrative

# 初始化 npm 專案
npm init -y

# 安裝 Astro
npm install astro

# 安裝 Tailwind CSS 及相關工具
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/typography @tailwindcss/forms

# 建立基本檔案結構
mkdir -p src/pages src/layouts src/components src/styles
touch astro.config.mjs tailwind.config.cjs
```

### 配置檔案

#### `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://journal-digital-narrative.com', // 替換為實際域名
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    }),
    mdx(),
    sitemap()
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
```

#### `tailwind.config.cjs`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 主色調
        primary: {
          50: '#E6F2F8',
          100: '#CCE5F1',
          200: '#99CBE3',
          300: '#66B1D5',
          400: '#3397C7',
          500: '#0891B2', // 主色
          600: '#06748E',
          700: '#05576A',
          800: '#033A47',
          900: '#021D23',
        },
        secondary: {
          50: '#EDE9FE',
          100: '#DBD3FD',
          200: '#B7A7FB',
          300: '#937BF9',
          400: '#6F4FF7',
          500: '#6B21A8', // 次色
          600: '#561A86',
          700: '#401465',
          800: '#2B0D43',
          900: '#150722',
        },
        accent: {
          50: '#FEF2E8',
          100: '#FDE5D1',
          200: '#FBCBA3',
          300: '#F9B175',
          400: '#F79747',
          500: '#EA580C', // 強調色
          600: '#BB460A',
          700: '#8C3507',
          800: '#5E2305',
          900: '#2F1202',
        },
        // 中性色
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif TC', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

#### `package.json` 腳本

```json
{
  "name": "journal-of-digital-narrative",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "astro check",
    "format": "prettier --write .",
    "lint": "eslint ."
  }
}
```

---

## 📁 專案結構

```
journal-of-digital-narrative/
├── public/                      # 靜態資源
│   ├── fonts/                   # 字體檔案
│   ├── images/                  # 圖片資源
│   │   ├── hero/
│   │   ├── articles/
│   │   └── icons/
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                  # 需要處理的資源
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── components/              # 組件
│   │   ├── common/              # 通用組件
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Tag.astro
│   │   │   └── Input.astro
│   │   ├── layout/              # 佈局組件
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navbar.astro
│   │   │   └── Sidebar.astro
│   │   ├── sections/            # 頁面區塊
│   │   │   ├── HeroSection.astro
│   │   │   ├── FeaturedArticles.astro
│   │   │   ├── AboutEditor.astro
│   │   │   ├── TopicsGrid.astro
│   │   │   └── NewsletterCTA.astro
│   │   └── ui/                  # UI組件
│   │       ├── ArticleCard.astro
│   │       ├── SearchBar.astro
│   │       └── SocialShare.astro
│   │
│   ├── content/                 # 內容集合
│   │   ├── config.ts            # 內容集合配置
│   │   ├── articles/            # 文章內容
│   │   │   ├── ai-in-education.md
│   │   │   ├── digital-tools.md
│   │   │   └── ...
│   │   └── pages/               # 靜態頁面內容
│   │       ├── about.md
│   │       └── contact.md
│   │
│   ├── layouts/                 # 頁面佈局
│   │   ├── BaseLayout.astro     # 基礎佈局
│   │   ├── ArticleLayout.astro  # 文章佈局
│   │   └── PageLayout.astro     # 一般頁面佈局
│   │
│   ├── pages/                   # 路由頁面
│   │   ├── index.astro          # 首頁
│   │   ├── about.astro          # 關於頁面
│   │   ├── articles/            # 文章列表與詳細頁
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── categories/          # 分類頁面
│   │   │   └── [category].astro
│   │   ├── search.astro         # 搜尋頁面
│   │   └── 404.astro            # 404頁面
│   │
│   ├── scripts/                 # JavaScript腳本
│   │   ├── animations.js        # 動畫效果
│   │   ├── search.js            # 搜尋功能
│   │   └── utils.js             # 工具函數
│   │
│   ├── styles/                  # 樣式檔案
│   │   ├── global.css           # 全域樣式
│   │   ├── typography.css       # 文字排版
│   │   └── utilities.css        # 工具類別
│   │
│   ├── types/                   # TypeScript類型定義
│   │   └── index.ts
│   │
│   └── utils/                   # 工具函數
│       ├── date.ts              # 日期處理
│       ├── string.ts            # 字串處理
│       └── seo.ts               # SEO工具
│
├── .gitignore
├── astro.config.mjs             # Astro配置
├── package.json
├── tailwind.config.cjs          # Tailwind配置
├── tsconfig.json                # TypeScript配置
└── README.md
```

---

## 🔧 核心功能實作

### 1. 內容集合配置

#### `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('吳奇'),
    category: z.enum([
      'ai-education',
      'digital-tools',
      'teaching-practice',
      'research',
      'cross-domain'
    ]),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articlesCollection,
};
```

### 2. 基礎佈局組件

#### `src/layouts/BaseLayout.astro`

```astro
---
import Header from '../components/layout/Header.astro';
import Footer from '../components/layout/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
}

const {
  title,
  description,
  image = '/images/og-default.jpg',
  canonicalURL = new URL(Astro.url.pathname, Astro.site),
} = Astro.props;

const siteTitle = '數位敘事力期刊 | Journal of Digital Narrative';
const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
---

<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />

    <!-- SEO Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(image, Astro.site)} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={new URL(image, Astro.site)} />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-gray-50 text-gray-900 antialiased">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />

    <script>
      // 滾動動畫觀察器
      const observeElements = () => {
        const elements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
      };

      // DOM載入完成後執行
      document.addEventListener('DOMContentLoaded', observeElements);
    </script>
  </body>
</html>
```

### 3. 首頁實作

#### `src/pages/index.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import HeroSection from '../components/sections/HeroSection.astro';
import FeaturedArticles from '../components/sections/FeaturedArticles.astro';
import AboutEditor from '../components/sections/AboutEditor.astro';
import TopicsGrid from '../components/sections/TopicsGrid.astro';
import NewsletterCTA from '../components/sections/NewsletterCTA.astro';
import { getCollection } from 'astro:content';

// 獲取精選文章
const allArticles = await getCollection('articles', ({ data }) => {
  return !data.draft;
});

const featuredArticles = allArticles
  .filter((article) => article.data.featured)
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
  .slice(0, 4);

const latestArticles = allArticles
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
  .slice(0, 6);
---

<BaseLayout
  title="首頁"
  description="數位敘事力期刊是一個專注於教育科技與數位敘事的知識分享平台，提供最新的教學工具、研究成果與實踐經驗。"
>
  <!-- Hero Section -->
  <HeroSection />

  <!-- Introduction Section -->
  <section class="py-20 bg-white" data-animate>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          用科技說故事，以敘事賦能教育
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed">
          數位敘事力期刊致力於分享教育科技領域的創新實踐與深度研究，
          為教育工作者提供最新的數位工具、教學方法與趨勢洞察。
        </p>
      </div>

      <!-- Statistics -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">100+</div>
          <div class="text-gray-600">發布文章</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">6</div>
          <div class="text-gray-600">主題領域</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">1.5K+</div>
          <div class="text-gray-600">社群追蹤</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-500 mb-2">20+</div>
          <div class="text-gray-600">舉辦活動</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Articles -->
  <FeaturedArticles articles={featuredArticles} />

  <!-- About the Editor -->
  <AboutEditor />

  <!-- Topics Grid -->
  <TopicsGrid />

  <!-- Latest Articles -->
  <section class="py-20 bg-gray-50" data-animate>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">最新文章</h2>
          <p class="text-gray-600">探索教育科技的最新趨勢與實踐</p>
        </div>
        <a
          href="/articles"
          class="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-2"
        >
          查看全部
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <article class="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
            <a href={`/articles/${article.slug}`}>
              {article.data.image && (
                <img
                  src={article.data.image.src}
                  alt={article.data.image.alt}
                  class="w-full aspect-video object-cover"
                />
              )}
              <div class="p-6">
                <div class="flex gap-2 mb-3">
                  {article.data.tags.slice(0, 2).map((tag) => (
                    <span class="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-500 transition-colors">
                  {article.data.title}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-2">
                  {article.data.description}
                </p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span>{article.data.author}</span>
                  <span>•</span>
                  <time datetime={article.data.publishDate.toISOString()}>
                    {new Intl.DateTimeFormat('zh-TW', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }).format(article.data.publishDate)}
                  </time>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>

  <!-- Newsletter CTA -->
  <NewsletterCTA />
</BaseLayout>
```

### 4. 文章詳細頁

#### `src/pages/articles/[slug].astro`

```astro
---
import { getCollection } from 'astro:content';
import ArticleLayout from '../../layouts/ArticleLayout.astro';

export async function getStaticPaths() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}

const { article } = Astro.props;
const { Content } = await article.render();
---

<ArticleLayout
  title={article.data.title}
  description={article.data.description}
  image={article.data.image?.src}
  publishDate={article.data.publishDate}
  author={article.data.author}
  category={article.data.category}
  tags={article.data.tags}
>
  <Content />
</ArticleLayout>
```

### 5. 搜尋功能實作

#### `src/scripts/search.js`

```javascript
// 簡易客戶端搜尋實作
import FlexSearch from 'flexsearch';

let searchIndex;
let articles = [];

// 初始化搜尋索引
export async function initSearch() {
  // 獲取所有文章資料
  const response = await fetch('/api/articles.json');
  articles = await response.json();

  // 建立索引
  searchIndex = new FlexSearch.Index({
    tokenize: 'forward',
    charset: 'latin:advanced',
    resolution: 9,
  });

  // 加入文章到索引
  articles.forEach((article, index) => {
    const searchText = `${article.title} ${article.description} ${article.tags.join(' ')}`;
    searchIndex.add(index, searchText);
  });
}

// 執行搜尋
export function search(query) {
  if (!query || !searchIndex) return [];

  const results = searchIndex.search(query);
  return results.map((index) => articles[index]);
}

// DOM 載入後初始化
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initSearch);
}
```

---

## 🚀 部署與維護

### 部署到 Vercel（推薦）

#### 步驟 1: 準備部署

```bash
# 確保專案可以正常建構
npm run build

# 測試建構結果
npm run preview
```

#### 步驟 2: 連接 GitHub

```bash
# 初始化 Git（如果還沒有）
git init
git add .
git commit -m "Initial commit"

# 連接到 GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 步驟 3: 在 Vercel 部署

1. 前往 [Vercel](https://vercel.com)
2. 點擊 "Add New Project"
3. 連接 GitHub 並選擇專案
4. Vercel 會自動偵測 Astro 專案
5. 點擊 "Deploy"

#### 環境變數設定（如需要）

```bash
# 在 Vercel Dashboard 設定
SITE_URL=https://your-domain.com
```

### 自動化部署

Vercel 會自動：
- ✅ 監聽 GitHub push
- ✅ 執行建構
- ✅ 部署到全球 CDN
- ✅ 提供預覽部署（PR）

### 效能優化檢查清單

部署後檢查：

```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=https://your-site.com

# WebPageTest
https://www.webpagetest.org/
```

---

## 📚 最佳實踐

### 1. 圖片優化

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero.jpg';
---

<!-- 使用 Astro Image 組件自動優化 -->
<Image
  src={heroImage}
  alt="Hero image"
  width={1920}
  height={1080}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

### 2. SEO 最佳化

```astro
---
// 自動生成 Sitemap
import { SEO } from 'astro-seo';
---

<SEO
  title="標題"
  description="描述"
  canonical="https://example.com"
  openGraph={{
    basic: {
      title: "標題",
      type: "website",
      image: "https://example.com/image.jpg",
    }
  }}
  twitter={{
    creator: "@twitter_handle",
    card: "summary_large_image",
  }}
/>
```

### 3. 效能監控

```javascript
// 加入 Web Vitals 追蹤
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // 發送到分析服務
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

## 🔒 安全性考量

### 1. 內容安全政策 (CSP)

```html
<!-- 在 BaseLayout 加入 CSP -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com;"
/>
```

### 2. 表單保護

```astro
<!-- 使用 Honeypot 防止垃圾訊息 -->
<form method="POST" action="/api/subscribe">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <!-- Honeypot 欄位（對使用者隱藏） -->
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off" />
  <button type="submit">訂閱</button>
</form>
```

---

## 📊 監控與分析

### Google Analytics 4 整合

```astro
---
// src/components/Analytics.astro
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

---

**文件版本**: 1.0
**建立日期**: 2025-11-09
**最後更新**: 2025-11-09

---

© 2025 數位敘事力期刊 (Journal of Digital Narrative)
