export interface AIToolPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  icon: string;
  accent: string;
  image: string;
  category: string;
  readingTime: number;
  featured?: boolean;
}

export const aiToolPosts: AIToolPost[] = [
  {
    slug: "chatgpt-prompt-engineering",
    title: "ChatGPT提示詞工程完整指南：如何問對問題",
    excerpt: "同樣是問ChatGPT，為什麼別人得到的效果比你更好？本文教你提示詞工程的技巧。",
    content: `
## 什麼是提示詞工程？

提示詞工程（Prompt Engineering）是設計和優化輸入給AI的文本，以獲得期望輸出的一門藝術和科學。

## 為什麼重要？

- 好的提示詞可以提高輸出質量80%
- 節省時間和成本
- 開啟AI的全部潛力

## 提示詞基本結構

### 1. 角色定義
\`\`\`
你是一位專業的[職業]，有[年]年經驗...
\`\`\`

### 2. 任務描述
\`\`\`
我需要你幫我完成[具體任務]...
\`\`\`

### 3. 格式要求
\`\`\`
請用以下格式回答：
1.
2.
3.
\`\`\`

### 4. 限制條件
\`\`\`
- 字數限制：[數字]
- 語言：[語言]
- 受眾：[人群]
\`\`\`

## 高級技巧

### 1. Few-shot Learning
\`\`\`
示例1：輸入 → 輸出
示例2：輸入 → 輸出
現在請完成：輸入 →
\`\`\`

### 2. Chain of Thought
\`\`\`
讓AI一步步思考，不要直接給答案
"請逐步分析這個問題"
\`\`\`

### 3. 迭代優化
\`\`\`
第一次回答後：
"這個很好，但請更詳細地解釋第2點"
\`\`\`

### 4. 上下文注入
\`\`\`
"基於之前的對話..."
"請繼續..."
\`\`\`

## 常見場景提示詞

### 寫作助手
\`\`\`
作為專業文案，幫我撰寫[類型]文章：
- 主題：
- 目標讀者：
- 風格：
- 字數：
\`\`\`

### 翻譯
\`\`\`
你是一位專業譯員，請將以下中文翻譯成英文：
- 保留語氣
- 符合外國人習慣
- 避免中式英語
\`\`\`

### 編程
\`\`\`
作為資深開發者，請幫我：
1. 審查以下代碼
2. 找出問題
3. 提供優化建議
\`\`\`

### 分析
\`\`\`
請分析以下數據：
- 找出關鍵趨勢
- 提供洞察
- 建議行動方案
\`\`\`

## 常見錯誤

❌ **太模糊**
"幫我寫東西" → ✅ "幫我寫100字的LinkedIn帖子，主題是..."

❌ **缺乏背景**
"翻譯這個" → ✅ "翻譯成商務英語，用於向投資者展示"

❌ **沒有格式**
"回答問題" → ✅ "請用bullet points回答，每點不超過20字"

## 總結

提示詞工程不是一次性技能，需要不斷練習和優化：
- ✅ 清晰具體
- ✅ 提供上下文
- ✅ 指定格式
- ✅ 迭代優化
- ✅ 多練習

掌握提示詞工程，讓ChatGPT成為你的超級助理！
    `,
    date: "2026-06-10",
    tags: ["ChatGPT", "AI工具", "提示詞", "效率", "人工智能"],
    icon: "🤖",
    accent: "from-purple-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "chatgpt",
    readingTime: 10,
    featured: true
  },
  {
    slug: "ai-productivity-tools-2026",
    title: "2026年必備AI工具：打工人的效率神器",
    excerpt: "2026年有哪些AI工具可以大幅提升工作效率？本文推薦20+實用AI工具，涵蓋各個場景。",
    content: `
## 為什麼要使用AI工具？

- 提升工作效率300%
- 減少重複性工作
- 專注更有價值的事

## 寫作與內容創作

### 1. ChatGPT
- 萬能助手
- 寫作、翻譯、分析
- 適合各類任務

### 2. Claude
- 擅長長文本
- 創意寫作
- 深度分析

### 3. Notion AI
- 筆記整理
- 會議紀要
- 項目管理

### 4. Jasper
- 營銷文案
- 社交媒體
- SEO文章

## 圖像與設計

### 5. Midjourney
- 藝術創作
- 概念設計
- 插畫生成

### 6. DALL-E 3
- 商業圖片
- Logo設計
- 產品圖

### 7. Canva AI
- 簡報設計
- 社交圖片
- 影片剪輯

### 8. Adobe Firefly
- 圖片編輯
- 風格遷移
- 文字效果

## 影片與多媒體

### 9. Runway
- 影片編輯
- 特效添加
- 背景移除

### 10. ElevenLabs
- 語音合成
- 多語言配音
- 聲音克隆

### 11. HeyGen
- 數字人
- 影片旁白
- 多語言

## 數據分析

### 12. Microsoft Copilot
- Excel分析
- 數據可視化
- Power BI

### 13. Tableau AI
- 商業智能
- 趨勢預測
- 報告生成

### 14. ChatPDF
- PDF總結
- 文獻分析
- 快速查找

## 生產力工具

### 15. Otter.ai
- 會議記錄
- 語音轉文字
- 自動生成摘要

### 16. Motion
- 智能日程
- 項目管理
- 時間優化

### 17. Tome
- AI簡報
- 故事創作
- 視覺設計

## 學習與研究

### 18. Perplexity
- 智能搜索
- 深度研究
- 引用來源

### 19. Elicit
- 學術研究
- 文獻回顧
- 假設生成

### 20. Rewind
- 記憶搜索
- 會議回顧
- 自動記錄

## 如何選擇AI工具？

### 考慮因素
1. **用途**：明確你的需求
2. **價格**：免費vs付費
3. **學習成本**：易用性
4. **整合性**：與現有工具配合

### 建議
- 先從免費工具開始
- 選擇1-2個深入使用
- 不要追逐所有新工具
- 專注提升工作效率

## 總結

AI工具不是要取代你，而是幫你：
- ✅ 自動化重複工作
- ✅ 節省時間
- ✅ 提升質量
- ✅ 專注價值

選擇適合自己的工具，持續學習！
    `,
    date: "2026-06-08",
    tags: ["AI工具", "效率", "生產力", "2026", "人工智能"],
    icon: "⚡",
    accent: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    category: "productivity",
    readingTime: 12
  },
  {
    slug: "midjourney-beginners",
    title: "Midjourney完全教程：從新手到高手",
    excerpt: "如何使用Midjourney生成令人驚艷的圖片？本文涵蓋基本操作到高級技巧。",
    content: `
## 什麼是Midjourney？

Midjourney是一個AI圖像生成工具，可以根據文字描述生成高質量的圖片。

## 開始使用

### 1. 進入Discord
- 加入Midjourney服務器
- 進入新手頻道

### 2. 基本指令
- \`/imagine\`：開始生成
- \`/help\`：獲取幫助
- \`/info\`：查看帳戶

### 3. 輸入提示詞
\`\`\`
/imagine a beautiful sunset over the ocean, photorealistic, 8k
\`\`\`

## 提示詞結構

### 基本格式
\`\`\`
[主體] + [風格] + [環境] + [光線] + [質量]
\`\`\`

### 示例
\`\`\`
a cute cat sitting on a velvet cushion, soft pastel colors, cozy living room, warm sunset light, hyperrealistic, 8k resolution, detailed fur
\`\`\`

## 常用參數

### --ar (長寬比)
- \`--ar 16:9\`：寬屏幕
- \`--ar 9:16\`：豎屏
- \`--ar 1:1\`：方形

### --v (版本)
- \`--v 5.2\`：最新版本
- \`--v 5.1\`：上一版本
- \`--v 4\`：經典版本

### --s (風格化)
- \`--s 100\`：低風格化
- \`--s 500\`：中等
- \`--s 1000\`：高風格化

### --q (質量)
- \`--q 1\`：標準
- \`--q 2\`：高質量（雙倍時間）

## 高級技巧

### 1. 參考圖片
\`\`\`
/imagine [prompt] --iw 0.5
\`\`\`
\`-iw\` 控制參考強度

### 2. 圖片混合
\`/blend\` 可以混合多張圖片

### 3. Zoom功能
- \`/zoom 2x\`：2倍放大
- \`/zoom 1.5x\`：1.5倍放大

### 4. Pan功能
- 左移、右移、上移、下移

### 5. Vary功能
- \`V\`：生成4個變化
- \`Vary Region\`：局部變化

## 常用風格提示詞

### 攝影風格
\`\`\`
portrait photography, 85mm lens, f/1.8, natural lighting, professional studio
\`\`\`

### 藝術風格
\`\`\`
oil painting, impressionism, Claude Monet style, soft brushstrokes
\`\`\`

### 數字藝術
\`\`\`
digital art, cyberpunk, neon lights, futuristic city, 8k, detailed
\`\`\`

### 動漫風格
\`\`\`
anime style, Studio Ghibli, Hayao Miyazaki, beautiful landscape, cinematic
\`\`\`

## 常見問題

**Q: 如何提高生成質量？**
A: 使用詳細描述，添加質量參數如8k、detailed等

**Q: 為什麼生成的圖片不像預期？**
A: 嘗試更具體的描述，使用英文

**Q: 如何避免版權問題？**
A: 使用原創提示詞，避免模仿特定藝術家風格

## 總結

Midjourney是強大的AI工具：
- ✅ 從簡單描述開始
- ✅ 不斷優化提示詞
- ✅ 使用參數調整
- ✅ 多練習多嘗試

創作出令人驚艷的作品！
    `,
    date: "2026-06-06",
    tags: ["Midjourney", "AI繪圖", "圖像生成", "人工智能", "教程"],
    icon: "🎨",
    accent: "from-pink-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    category: "image",
    readingTime: 11
  },
  {
    slug: "claude-ai-guide",
    title: "Claude AI完整攻略：比ChatGPT更強大的助手",
    excerpt: "Claude如何幫助你工作和生活？本文詳細介紹Claude的功能和使用技巧。",
    content: `
## 什麼是Claude？

Claude是由Anthropic開發的AI助手，專注於安全、有幫助的AI交互。

## Claude的獨特優勢

### 1. 長文本處理
- 可以處理200K token
- 適合分析長文檔
- 總結一本書沒問題

### 2. 安全可靠
- 拒絕有害請求
- 尊重用戶隱私
- 透明的思維過程

### 3. 創意思維
- 創意寫作能力強
- 頭腦風暴好幫手
- 故事創作一流

## 開始使用

### 基本操作
1. 訪問 claude.ai
2. 創建帳戶
3. 開始對話

### 界面功能
- **Chat**：普通對話
- **Projects**：項目管理
- **Tools**：內置工具

## 核心功能

### 1. 寫作助手
- 撰寫文章、郵件、報告
- 校對潤色
- 多語言翻譯

### 2. 編程幫手
- 代碼審查
- Bug修復
- 架構建議

### 3. 分析研究
- 數據分析
- 文獻總結
- 報告撰寫

### 4. 創意發想
- 頭腦風暴
- 故事創作
- 品牌命名

## 高級功能

### Artifacts
- 即時生成代碼
- 可視化展示
- 互動式內容

### Projects
- 保存對話上下文
- 長期項目管理
- 團隊協作

### Tools
- Web搜索
- 圖片分析
- PDF閱讀

## 使用技巧

### 1. 清晰的角色設定
\`\`\`
你是一位資深的產品經理，專注於用戶體驗...
\`\`\`

### 2. 結構化輸入
\`\`\`
目標：[具體目標]
限制：[時間/成本等]
格式：[期望格式]
\`\`\`

### 3. 迭代優化
\`\`\`
"這個方案不錯，但請簡化..."
\`\`\`

### 4. 使用Projects
- 創建項目文件夾
- 上傳相關資料
- 長期追蹤

## 實際應用場景

### 寫郵件
\`\`\`
幫我寫一封郵件給團隊，宣布新產品上線...
\`\`\`

### 代碼審查
\`\`\`
審查以下代碼，找出安全問題...
\`\`\`

### 數據分析
\`\`\`
分析以下銷售數據，找出趨勢...
\`\`\`

### 創意發想
\`\`\`
頭腦風暴10個情人節營銷創意...
\`\`\`

## Claude vs ChatGPT

| 場景 | Claude | ChatGPT |
|------|--------|---------|
| 長文檔 | ✅ 強 | ⚠️ 弱 |
| 創意寫作 | ✅ 強 | ⚠️ 中 |
| 編程 | ⚠️ 中 | ✅ 強 |
| 安全 | ✅ 強 | ⚠️ 中 |

## 總結

Claude是強大的AI助手：
- ✅ 長文本處理能力
- ✅ 安全可靠
- ✅ 創意思維
- ✅ 多功能應用

建議同時使用ChatGPT和Claude，互補優勢！
    `,
    date: "2026-06-04",
    tags: ["Claude", "AI助手", "人工智能", "效率", "ChatGPT"],
    icon: "💬",
    accent: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    category: "assistant",
    readingTime: 10
  },
  {
    slug: "notion-ai-workflow",
    title: "Notion AI工作流：打造你的第二個大腦",
    excerpt: "如何用Notion AI打造高效的個人知識管理系統？本文分享實用的工作流程和模板。",
    content: `
## 為什麼要用Notion？

- 筆記、任務、項目一站式管理
- 強大的模板系統
- AI助手提升效率
- 免費使用

## Notion AI功能

### 1. AI Writing
- 自動補全文字
- 改善寫作風格
- 生成內容大綱

### 2. AI Q&A
- 問答功能
- 總結內容
- 提取重點

### 3. AI Edit
- 翻譯
- 潤色
- 縮寫/擴展

## 打造第二個大腦

### 1. 收集 (Capture)
- 快速記錄想法
- 網頁剪藏
- 語音備忘

### 2. 組織 (Organize)
- 分類標籤
- 建立關聯
- 定期整理

### 3. 處理 (Process)
- AI總結要點
- 提取行動
- 設定提醒

### 4. 回顧 (Review)
- 每週回顧
- 月度總結
- 持續優化

## 必備模板

### 1. 每日工作流
- 晨間規劃
- 任務清單
- 晚間回顧

### 2. 項目管理
- 看板視圖
- 里程碑追蹤
- 團隊協作

### 3. 知識庫
- 分類整理
- 搜索功能
- AI總結

### 4. 讀書筆記
- 書籍資料
- 重點摘錄
- 讀後感

### 5. 目標追蹤
- 設定目標
- 進度記錄
- 定期回顧

## AI工作流示例

### 會議記錄
1. 用Otter.ai錄音轉文字
2. 複製到Notion
3. 用AI總結重點
4. 提取行動項目

### 文章閱讀
1. 用Reader保存文章
2. 用AI總結核心內容
3. 建立相關筆記
4. 連結相關資料

### 項目策劃
1. 用AI頭腦風暴
2. 建立大綱
3. 填充內容
4. 設定任務

## 高級技巧

### 1. 雙向連結
\`[[page name]]\` 建立頁面連結

### 2. 模板按鈕
創建可重複使用的模板

### 3. 自動化
- 設定觸發條件
- 自動執行任務
- 減少重複工作

### 4. 協作功能
- 團隊空間
- 權限管理
- 實時同步

## 總結

Notion + AI = 超強大腦：
- ✅ 一站式管理
- ✅ AI提升效率
- ✅ 靈活自定義
- ✅ 持續優化

從今天開始，打造你的第二個大腦！
    `,
    date: "2026-06-02",
    tags: ["Notion", "AI工具", "知識管理", "效率", "工作流"],
    icon: "📝",
    accent: "from-gray-500 to-slate-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "workflow",
    readingTime: 9
  },
  {
    slug: "ai-video-editing",
    title: "AI影片剪輯入門：用科技提升創作效率",
    excerpt: "2026年有哪些AI工具可以幫助影片剪輯？從剪輯到配音，全面提升效率。",
    content: `
## 為什麼要用AI影片工具？

- 剪輯時間減少70%
- 不需要專業技能
- 成本大幅降低
- 創意不受限

## AI影片剪輯工具

### 1. Runway ML
**功能：**
- 智能剪輯
- 特效添加
- 背景移除
- 風格遷移

**適合：** 創意短片、社交媒體

### 2. CapCut
**功能：**
- 自動字幕
- 智能降噪
- 轉場效果
- 免費使用

**適合：** TikTok、Instagram

### 3. Descript
**功能：**
- 文字編輯影片
- 錄屏轉影片
- AI配音

**適合：** 教程、podcast

## AI配音工具

### 4. ElevenLabs
**功能：**
- 克隆聲音
- 多語言配音
- 情感控制
- 專業品質

**適合：** 影片旁白、課程

### 5. HeyGen
**功能：**
- 數字人
- AI主播
- 多語言
- 自定義形象

**適合：** 營銷、培訓

### 6. Speechify
**功能：**
- 文字轉語音
-  audiobook製作
- 多語言

**適合：** 有聲書、學習

## AI字幕工具

### 7. Veed.io
**功能：**
- 自動生成字幕
- 翻譯字幕
- 多種格式
- 免費使用

**適合：** YouTube、課程

### 8. Rev
**功能：**
- 人工+AI結合
- 99%準確率
- 快速交付

**適合：** 專業項目

## AI腳本工具

### 9. Jasper
**功能：**
- 腳本生成
- 創意發想
- SEO優化

**適合：** 營銷影片

### 10. ChatGPT
**功能：**
- 腳本大綱
- 對話生成
- 校對潤色

**適合：** 各類腳本

## 完整工作流

### Step 1: 腳本
1. 用ChatGPT生成腳本
2. 人工校對調整
3. 定稿

### Step 2: 錄製
1. AI配音或自己錄製
2. 使用提詞器App
3. 確保畫質清晰

### Step 3: 剪輯
1. 雲端剪輯平台
2. AI自動剪輯
3. 人工調整

### Step 4: 後製
1. AI添加特效
2. 自動字幕
3. 背景音樂

### Step 5: 發布
1. 多平台發布
2. 適配不同格式
3. 分析數據優化

## 實用技巧

### 1. 提詞器
- Teleprompter App
- 自定義滾動速度
- 字體大小可調

### 2. 背景
- 虛擬背景
- AI背景替換
- 乾淨整潔即可

### 3. 燈光
- 環形燈
- 自然光優先
- 避免背光

### 4. 音頻
- 領夾麥克風
- AI降噪
- 清晰的聲音

## 總結

AI工具讓影片創作變得簡單：
- ✅ 降低門檻
- ✅ 提升效率
- ✅ 節省成本
- ✅ 創意無限

從今天開始，用AI提升你的影片質量！
    `,
    date: "2026-05-31",
    tags: ["AI影片", "剪輯", "配音", "YouTube", "社交媒體"],
    icon: "🎬",
    accent: "from-red-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    category: "video",
    readingTime: 11
  }
];