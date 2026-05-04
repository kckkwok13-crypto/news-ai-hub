# NewsFlow - AI-Powered Global News Aggregator 🌐

[English below](#english)

## 🚀 部署指南

### 必要設置

#### 1️⃣ 設定 OpenRouter API Key（AI 功能）

**方法一：Vercel Dashboard（推薦）**
1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇 `news-ai-hub` 項目
3. 前往 **Settings** → **Environment Variables**
4. 添加：
   - **Name**: `OPENROUTER_API_KEY`
   - **Value**: 你的 OpenRouter API Key（從 https://openrouter.ai/ 獲取）
5. 點擊 **Save**
6. 前往 **Deployments**，點擊 **Redeploy**

**方法二：本地開發**
```bash
echo "OPENROUTER_API_KEY=你的API_KEY" > .env.local
npm run dev
```

---

## 🎯 功能

| 功能 | 說明 |
|------|------|
| 🌍 多來源新聞 | 薈萃 50+ 新聞源，涵蓋國際、財經、加密幣、香港、台灣、中國、商業、科技、天文學、神秘學 |
| 🗣️ 雙語翻譯 | 廣東話 / English 实时翻译 |
| 🎙️ AI 網台分析 | 主持人風格深度分析、立場偵測、影響評估 |
| 📊 情緒追蹤 | 正面/負面/中立 情緒分析 |
| 🧭 立場分析 | 親中、親美、親歐等立場偵測 |
| 🔍 多元化觀點 | 減少資訊繭房，提供平衡視角 |
| 📱 黑暗模式 | 保護眼睛嘅深色主題 |
| 🔔 自訂關鍵字追蹤 | 追蹤你感興趣嘅話題 |
| 💾 收藏功能 | 收藏新聞離線閱讀 |

---

## 🛠️ 開發

```bash
# 安裝依賴
npm install

# 本地開發
npm run dev

# 構建生產版本
npm run build

# 推送更改
git push
```

---

## 🌐 新聞來源

| 分類 | 來源 |
|------|------|
| 國際 | BBC World, NYTimes, Al Jazeera, DW, SCMP |
| 財經 | Yahoo Finance, MarketWatch, Investing.com, Nikkei Asia, CNBC |
| 加密幣 | CoinTelegraph, CoinDesk, CryptoPanic |
| 香港 | Google News HK, SCMP HK |
| 港股 | Google News HK (股票相關) |
| 台灣 | Google News TW |
| 中國 | Google News China |
| 商業 | Reuters, Nikkei Asia, Investing.com |
| 科技 | TechCrunch, The Verge, Wired |
| 天文學 | Space.com, NASA, Universe Today |
| 神秘學 | Unexplained Mysteries, ScienceAlert |
| Podcast | Nature Podcast, Science Podcast, NASA, Tech Podcasts |

---

## 📄 许可证

MIT License

---

<a name="english"></a>

## 🇭🇰 NewsFlow - AI-Powered Global News Aggregator

## 🚀 Deployment Guide

### Required Setup

#### 1️⃣ Set OpenRouter API Key (for AI features)

**Method 1: Vercel Dashboard (Recommended)**
1. Login to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select `news-ai-hub` project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `OPENROUTER_API_KEY`
   - **Value**: Your OpenRouter API Key (get from https://openrouter.ai/)
5. Click **Save**
6. Go to **Deployments** → **Redeploy**

**Method 2: Local Development**
```bash
echo "OPENROUTER_API_KEY=your_api_key" > .env.local
npm run dev
```

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🌍 Multi-source News | 50+ news sources covering World, Finance, Crypto, HK, TW, China, Business, Tech, Astronomy, Mystery |
| 🗣️ Bilingual Translation | Cantonese / English real-time translation |
| 🎙️ AI Host Analysis | Host style analysis, bias detection, impact assessment |
| 📊 Emotion Tracking | Positive/Negative/Neutral sentiment analysis |
| 🧭 Stance Analysis | Pro-China, Pro-Western, etc. detection |
| 🔍 Diverse Perspectives | Reduce filter bubble, balanced viewpoints |
| 📱 Dark Mode | Eye-friendly dark theme |
| 🔔 Custom Keyword Tracking | Track topics you're interested in |
| 💾 Bookmark | Save news for offline reading |

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Push changes
git push
```

---

## 📄 License

MIT License
