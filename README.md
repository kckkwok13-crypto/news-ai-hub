# News AI Hub

智能新聞聚合平台 - AI-powered News Aggregator

## 🚀 部署到 Vercel

### 方法一：一鍵部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/news-vercel)

### 方法二：手動部署

#### 1. 推送到 GitHub

```bash
# 初始化 git
cd news-vercel
git init
git add .
git commit -m "Initial commit"

# 創建 GitHub repo 並推送
gh repo create news-vercel --public --source=. --push
# 或者手動添加 remote
git remote add origin https://github.com/your-username/news-vercel.git
git push -u origin main
```

#### 2. 連接 Vercel

1. 去 [vercel.com](https://vercel.com) 登入（可用 GitHub 帳號）
2. 點擊 "Add New Project"
3. 選擇你嘅 `news-vercel` repo
4. 直接點擊 "Deploy"

#### 3. 完成！

Vercel 會自動：
- 偵測 Next.js
- 安裝依賴
- 構建並部署
- 給你一個 `xxx.vercel.app` 域名

---

## 🔧 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 打開 http://localhost:3000
```

---

## ✨ 功能

| 功能 | 說明 |
|------|------|
| 🌍 多分類 | 國際、財經、加密幣、香港 |
| 🧠 AI 分析 | 摘要、情感、趨勢 |
| 🌐 多語言 | 中文 / English |
| 🌙 深色模式 | 護眼主題 |
| 🔊 語音朗讀 | TTS 支援 |
| 🔖 收藏功能 | 儲存感興趣新聞 |
| 🔔 關鍵字追蹤 | 篩選特定話題 |
| 📱 響應式 | 支援手機、平板、電腦 |

---

## 📁 項目結構

```
news-vercel/
├── app/
│   ├── layout.tsx        # 頁面佈局
│   ├── page.tsx          # 主頁面
│   ├── globals.css       # 全局樣式
│   └── api/
│       ├── news-feed/    # 新聞 API
│       │   └── route.ts
│       └── ai-summary/   # AI 分析 API
│           └── route.ts
├── public/               # 靜態資源
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎨 自訂

### 添加新聞來源

編輯 `app/api/news-feed/route.ts`：

```typescript
const RSS_SOURCES = {
  world: [
    { url: 'https://your-rss-feed.com/rss', source: 'Your Source' },
    // ...
  ],
}
```

### 添加新分類

編輯 `app/page.tsx`：

```typescript
const CATEGORIES = [
  { id: 'world', icon: Globe, emoji: '🌍', label: { zh: '國際', en: 'World' }, color: 'from-blue-500 to-cyan-500' },
  // 添加更多...
]
```

---

## 💰 商業化建議

| 方案 | 說明 |
|------|------|
| 廣告 | 加入 Google AdSense |
| 訂閱 | 付費會員功能 |
| API | 提供 API 給開發者 |
| 白標 | 幫企業定製版本 |

---

## 📄 License

MIT
