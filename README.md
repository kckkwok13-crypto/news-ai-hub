# 旅遊王國 | Travel Kingdom - 純粹旅人原創深度遊記

🌏 **一個退休旅遊愛好者的原創深度遊記平台**

[English](#english) | [繁體中文](#繁體中文)

---

<a name="english"></a>

## 🚀 Deployment Guide

### Quick Deploy to Vercel

**Option 1: Via Git (Recommended)**
1. Push this code to your GitHub/GitLab repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

**Option 2: Manual Deploy**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Connect Custom Domain (newskingdom.store)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `newskingdom.store`
3. Configure DNS:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or add A record: `@` → `76.76.21.21`
4. Wait for SSL certificate (automatic)

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🌏 目的地探索 | 亞洲、歐洲、大灣區旅遊攻略 |
| 📖 原創遊記 | 32+ 國家、69+ 遊記、128+ 城市 |
| 🛠️ 旅行工具 | 簽證、匯率、天氣、預算計算 |
| 📱 響應式設計 | 完美適配桌面和移動設備 |
| 🔍 SEO 優化 | 符合 Google AdSense 標準 |

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Push to Git (auto-deploys to Vercel)
git push
```

---

## 📄 License

MIT License

---

<a name="繁體中文"></a>

## 🚀 部署指南

### 快速部署到 Vercel

**方法一：通過 Git 部署（推薦）**
1. 將此代碼推送到您的 GitHub/GitLab 倉庫
2. 前往 [vercel.com](https://vercel.com)
3. 點擊 "New Project"
4. 導入您的倉庫
5. Vercel 會自動檢測 Next.js
6. 點擊 "Deploy"

**方法二：手動部署**
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登錄
vercel login

# 部署
vercel --prod
```

### 連接自訂域名 (newskingdom.store)

1. 前往 Vercel Dashboard → 您的項目 → Settings → Domains
2. 添加 `newskingdom.store`
3. 配置 DNS：
   - 添加 CNAME 記錄：`www` → `cname.vercel-dns.com`
   - 或添加 A 記錄：`@` → `76.76.21.21`
4. 等待 SSL 證書（自動）

---

## 🎯 功能特色

| 功能 | 描述 |
|------|------|
| 🌏 目的地探索 | 亞洲、歐洲、大灣區旅遊攻略 |
| 📖 原創遊記 | 32+ 國家、69+ 遊記、128+ 城市 |
| 🛠️ 旅行工具 | 簽證、匯率、天氣、預算計算 |
| 📱 響應式設計 | 完美適配桌面和移動設備 |
| 🔍 SEO 優化 | 符合 Google AdSense 標準 |

---

## 🛠️ 開發

```bash
# 安裝依賴
npm install

# 本地開發
npm run dev

# 構建生產版本
npm run build

# 推送到 Git（自動部署到 Vercel）
git push
```

---

## 📄 許可證

MIT License
