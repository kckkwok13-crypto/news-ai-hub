'use client'

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Globe, BookOpen, Sun, Moon, Star, Search, Bell, Mail, X, ChevronDown, RefreshCw, ExternalLink, Bookmark, BookmarkCheck, Share2, TrendingUp, Zap, Menu, Play, Pause, Pen, Edit3 } from "lucide-react";

// In-Feed Ad component - shows between news cards
function InFeedAd({ index }: { index: number }) {
  return (
    <div className="w-full py-4 col-span-1 md:col-span-2 lg:col-span-3">
      <div className="bg-gradient-to-r from-blue-900/30 via-slate-800/50 to-purple-900/30 border border-slate-700/50 rounded-xl p-4">
        <div className="text-center text-slate-500 text-xs mb-2">Advertisement</div>
        <div className="h-[100px] md:h-[120px] bg-slate-800/30 rounded-lg flex items-center justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '120px' }}
            data-ad-client="ca-pub-4745583996243741"
            data-ad-slot="YOUR_INARTICLE_AD_SLOT_ID"
            data-ad-format="fluid"
            data-layout="in-article"
          />
        </div>
      </div>
    </div>
  );
}

type Lang = "zh-TW" | "zh-CN" | "en";
type Category = "finance" | "crypto" | "business" | "technology" | "astronomy" | "mystery" | "health" | "gaming" | "food" | "ai_art" | "art" | "data_journalism";

interface TravelPlace {
  id: string;
  name: string;
  desc: string;
  type: string;
  image: string;
}

interface TravelGuide {
  id: string;
  name: string;
  emoji: string;
  places: TravelPlace[];
}

interface NewsItem {
  id: string;
  title: string; title_translated: string; desc: string; desc_translated: string; link: string;
  pubDate: string; source: string; img: boolean; img_url: string;
  translated: boolean; translationError?: string;
  // Travel guide fields
  emoji?: string;
  name?: string;
  places?: TravelPlace[];
  city?: string;
  city_zh?: string;
  city_id?: string;
  city_en?: string;
  city_emoji?: string;
  country?: string;
  country_zh?: string;
  country_id?: string;
  city_description?: string;
  area?: string;
  area_zh?: string;
  rating?: string;
  review_count?: string;
  best_time?: string;
  best_season?: string;
  avg_temp?: string;
  price_range?: string;
  cost_level?: string;
  address?: string;
  hours?: string;
  description?: string;
  blog_content?: string;
  blog_slug?: string;
  type?: string;
  duration?: string;
  transit?: string;
  tags?: string[];
  tips?: string[];
  related_places?: Array<{ name: string; name_zh: string; type: string }>;
}

const LANG_OPTIONS: { id: Lang; flag: string; label: string }[] = [
  { id: 'zh-TW', flag: '🇭🇰', label: '廣東話' },
  { id: 'zh-CN', flag: '🇨🇳', label: '简体' },
  { id: 'en', flag: '🇺🇸', label: 'English' },
];

const CATEGORIES: { id: Category; icon: string; color: string; label_zh: string; label_en: string }[] = [
  { id: "health", icon: "🏥", color: "bg-green-500", label_zh: "健康養生", label_en: "Health" },
  { id: "astronomy", icon: "🔭", color: "bg-blue-500", label_zh: "天文探索", label_en: "Astronomy" },
  { id: "mystery", icon: "🔮", color: "bg-purple-500", label_zh: "神秘世界", label_en: "Mystery" },
  { id: "gaming", icon: "🎮", color: "bg-cyan-500", label_zh: "電玩遊戲", label_en: "Gaming" },
  { id: "art", icon: "🎨", color: "bg-pink-500", label_zh: "藝術文化", label_en: "Art" },
  { id: "finance", icon: "💰", color: "bg-yellow-500", label_zh: "財經投資", label_en: "Finance" },
  { id: "business", icon: "💼", color: "bg-indigo-500", label_zh: "商業科技", label_en: "Business" },
  { id: "food", icon: "🍜", color: "bg-orange-500", label_zh: "美食天地", label_en: "Food" },
  { id: "ai_art", icon: "🤖", color: "bg-rose-500", label_zh: "AI科技", label_en: "AI Tech" },
  { id: "crypto", icon: "₿", color: "bg-amber-500", label_zh: "加密貨幣", label_en: "Crypto" },
  { id: "data_journalism", icon: "📊", color: "bg-violet-500", label_zh: "數據新聞", label_en: "Data" },
];

// Category gradient presets for selected state
const CATEGORY_GRADIENTS: Record<string, string> = {
  health: "from-green-500 to-emerald-600",
  astronomy: "from-blue-500 to-indigo-600",
  mystery: "from-purple-500 to-violet-600",
  gaming: "from-cyan-500 to-teal-600",
  art: "from-pink-500 to-rose-600",
  finance: "from-yellow-500 to-amber-600",
  business: "from-indigo-500 to-blue-600",
  food: "from-orange-500 to-amber-600",
  ai_art: "from-rose-500 to-pink-600",
  crypto: "from-amber-500 to-yellow-600",
  data_journalism: "from-violet-500 to-purple-600",
};

const getCategoryGradient = (id: string): string => CATEGORY_GRADIENTS[id] || "from-blue-500 to-purple-500";

// Sample news for demo - Focus on Health, Astronomy, Mystery, Gaming, Art
const SAMPLE_NEWS: NewsItem[] = [
  {
    id: "sample-1",
    title: "NASA發現新類地行星：或許有生命存在",
    title_translated: "NASA Discovers New Earth-like Planet: Possible Life",
    desc: "韋伯太空望遠鏡發現一顆位於宜居帶的岩石行星，大氣層含有水蒸氣及二氧化碳，可能是人類迄今最有希望發現外星生命的目標。",
    desc_translated: "Webb telescope discovered a rocky planet in the habitable zone with water vapor and CO2 in its atmosphere - the most promising target for finding extraterrestrial life.",
    link: "https://example.com/exoplanet",
    pubDate: new Date().toISOString(),
    source: "天文探索",
    img: true,
    img_url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
    translated: true,
  },
  {
    id: "sample-2",
    title: "最新研究：呢款超級食物可以延緩衰老",
    title_translated: "Research: This Superfood Can Slow Down Aging",
    desc: "哈佛大學研究發現，每日食用特定超級食物可以顯著延長端粒長度，延緩細胞衰老。營養師教你點樣將佢融入日常飲食。",
    desc_translated: "Harvard research shows daily consumption of this superfood can significantly extend telomere length, slowing cellular aging. Nutritionists show how to incorporate it.",
    link: "https://example.com/superfood-aging",
    pubDate: new Date(Date.now() - 3600000).toISOString(),
    source: "健康養生",
    img: true,
    img_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    translated: true,
  },
  {
    id: "sample-3",
    title: "埃及金字塔神秘通道：考古學家嘅最新發現",
    title_translated: "Egypt Pyramid Secret Passage: Archaeologists' Latest Discovery",
    desc: "考古學家喺大金字塔內發現一條從未被人類所知嘅隱藏通道，裡面可能藏有圖坦卡門法老嘅秘密寶藏。",
    desc_translated: "Archaeologists discovered a hidden passage never known to humans inside the Great Pyramid, possibly containing the secret treasures of Pharaoh Tutankhamun.",
    link: "https://example.com/pyramid-secret",
    pubDate: new Date(Date.now() - 7200000).toISOString(),
    source: "神秘世界",
    img: true,
    img_url: "https://images.unsplash.com/photo-1503177119275-0aa255b9d6c9?w=800",
    translated: true,
  },
  {
    id: "sample-4",
    title: "2026年最受期待嘅遊戲大作搶先睇",
    title_translated: "Most Anticipated Games of 2026 - Preview",
    desc: "PlayStation、Xbox、PC三大平台即將推出多款備受矚目嘅3A大作，包括神秘海域新作、星空續作，以及一款革命性嘅開放世界RPG。",
    desc_translated: "PlayStation, Xbox, and PC are launching highly anticipated AAA titles including new Uncharted, Starfield sequel, and a revolutionary open-world RPG.",
    link: "https://example.com/games-2026",
    pubDate: new Date(Date.now() - 10800000).toISOString(),
    source: "電玩遊戲",
    img: true,
    img_url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    translated: true,
  },
  {
    id: "sample-5",
    title: "梵高真跡首次喺亞洲展出：東京限定一個月",
    title_translated: "Van Gogh Originals Debut in Asia: Tokyo Limited One Month",
    desc: "東京國立美術館獲得機會展出多幅梵高真跡，包括《星空》同《向日葵》。呢次係香港、新加坡、台北都冇嘅獨家機會。",
    desc_translated: "Tokyo National Museum secured the opportunity to display multiple Van Gogh originals including 'Starry Night' and 'Sunflowers'. Exclusive to Tokyo for one month.",
    link: "https://example.com/van-gogh-tokyo",
    pubDate: new Date(Date.now() - 14400000).toISOString(),
    source: "藝術文化",
    img: true,
    img_url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    translated: true,
  },
  {
    id: "sample-6",
    title: "硅谷工程師分享：點樣透過冥想提升專注力",
    title_translated: "Silicon Valley Engineer: How Meditation Boosted My Focus",
    desc: "一位前Google工程師放棄百萬年薪，轉而研究冥想與大腦訓練。佢嘅方法已幫助過萬人提升專注力，減少焦慮。",
    desc_translated: "A former Google engineer gave up a million-dollar salary to study meditation and brain training. His method has helped over 10,000 people improve focus and reduce anxiety.",
    link: "https://example.com/meditation-engineer",
    pubDate: new Date(Date.now() - 18000000).toISOString(),
    source: "健康養生",
    img: true,
    img_url: "https://images.unsplash.com/photo-1506126613408-eca07ce5f3e3?w=800",
    translated: true,
  },
  {
    id: "sample-7",
    title: "銀河系中心發現超大黑洞：質量為太陽100萬倍",
    title_translated: "Milky Way Center Discovery: Supermassive Black Hole Found",
    desc: "天文學家確認銀河系中心存在一個超大質量黑洞，其引力場影響周圍數百顆恆星嘅運行軌跡。",
    desc_translated: "Astronomers confirmed a supermassive black hole at the Milky Way's center, its gravitational field affecting the orbits of hundreds of surrounding stars.",
    link: "https://example.com/black-hole",
    pubDate: new Date(Date.now() - 21600000).toISOString(),
    source: "天文探索",
    img: true,
    img_url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800",
    translated: true,
  },
  {
    id: "sample-8",
    title: "深海探險家發現失落的亞特蘭提斯城？",
    title_translated: "Deep Sea Explorer Discovers Lost Atlantis?",
    desc: "一位深海探險家喺大西洋海底發現疑似古代城市遺蹟，結構與柏拉圖描述嘅亞特蘭提斯高度吻合。",
    desc_translated: "A deep-sea explorer discovered suspected ancient city ruins in the Atlantic Ocean with structures highly matching Plato's description of Atlantis.",
    link: "https://example.com/atlantis-discovery",
    pubDate: new Date(Date.now() - 25200000).toISOString(),
    source: "神秘世界",
    img: true,
    img_url: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
    translated: true,
  },
];

const EDITOR_PICKS = {
  "zh-TW": {
    "sectionTitle": "📝 Editor's Pick",
    "sectionSubtitle": "精選原創",
    "readTime": "閱讀時間",
    "minutes": "分鐘",
    "viewAll": "查看全部文章 →",
    "savedSuccess": "已收藏文章",
    "savedRemoved": "已取消收藏",
    "shareSuccess": "已複製連結",
    "articles": [
      {
        "id": "ep-1",
        "title": "比特幣ETF獲批後：市場結構性改變",
        "category": "加密貨幣",
        "emoji": "₿",
        "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "比特幣現貨ETF的批准不僅是監管的勝利，更標誌著傳統金融與加密市場之間那道曾經不可逾越的鴻溝正在加速消亡。",
        "readTime": 12,
        "link": "/editorial/bitcoin-etf-deep-analysis",
        "tag": "深度分析",
        "featured": true
      },
      {
        "id": "ep-2",
        "title": "AI 翻譯新聞的倫理邊界：平衡技術與原創",
        "category": "科技評論",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "excerpt": "當AI能夠在數秒內將一篇外語新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？我們必須深入探討這場技術變革。",
        "readTime": 10,
        "link": "/editorial/ai-translation-ethics",
        "tag": "編輯觀點",
        "featured": false
      },
      {
        "id": "ep-3",
        "title": "新聞App的AI分析功能：人與算法的真相博弈",
        "category": "科技評論",
        "emoji": "⚖️",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "當演算法可以瞬間總結全球新聞，「人性」與「效率」之間的取捨，究竟誰更能代表真相？",
        "readTime": 11,
        "link": "/editorial/twohumans-vs-ai-analysis",
        "tag": "獨家評論",
        "featured": true
      },
      {
        "id": "ep-4",
        "title": "全球央行數字貨幣競賽：美元霸權的進化？",
        "category": "財經深度",
        "emoji": "🏦",
        "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
        "excerpt": "從中國的數字人民幣到歐洲央行的數字歐元，各國央行正在加速布局。這場競賽將如何重塑金融秩序？",
        "readTime": 10,
        "link": "/editorial/cbdc-global-race",
        "tag": "深度分析",
        "featured": false
      },
      {
        "id": "ep-5",
        "title": "穩定幣大戰：誰能笑到最後？",
        "category": "加密貨幣",
        "emoji": "🪙",
        "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
        "excerpt": "當傳統銀行、加密原生公司、科技巨頭全部湧入穩定幣賽道，這場戰爭將如何改變我們的貨幣體系？",
        "readTime": 11,
        "link": "/editorial/stablecoin-war",
        "tag": "熱門話題",
        "featured": false
      },
      {
        "id": "ep-6",
        "title": "DeFi 深度指南：金融民主化還是泡沫？",
        "category": "金融科技",
        "emoji": "💱",
        "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        "excerpt": "無需許可、無須審核、24/7 運作。DeFi 正試圖將華爾街搬到區塊鏈上，但風險同樣巨大。",
        "readTime": 13,
        "link": "/editorial/decentralized-finance-guide",
        "tag": "深度分析",
        "featured": false
      },
      {
        "id": "ep-7",
        "title": "AI 圖像生成器：創意產業的毀滅者？",
        "category": "AI應用",
        "emoji": "🎨",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        "excerpt": "當任何人都可以通過文字描述生成專業級插畫，傳統藝術家的價值該如何重新定義？",
        "readTime": 9,
        "link": "/editorial/ai-image-generators",
        "tag": "科技展望",
        "featured": false
      },
      {
        "id": "ep-8",
        "title": "Web3 遊戲的未來：所有權的覺醒",
        "category": "區塊鏈",
        "emoji": "🎮",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "區塊鏈遊戲經歷了暴利炒作與崩潰後，正在回歸遊戲的本質：好玩。玩遊戲不再只是消費。",
        "readTime": 11,
        "link": "/editorial/web3-gaming-future",
        "tag": "趨勢分析",
        "featured": false
      },
      {
        "id": "ep-9",
        "title": "以太坊升級後：Layer 2 生態爆發元年",
        "category": "區塊鏈",
        "emoji": "🔷",
        "image": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "以太坊完成升級後，Layer 2 解決方案迎來爆發式增長。Arbitrum、Optimism、zkSync 百花齊放，費用降低 100 倍，用戶體驗全面提升。",
        "readTime": 11,
        "link": "/editorial/ethereum-layer2-explosion",
        "tag": "技術分析",
        "featured": false
      },
      {
        "id": "ep-10",
        "title": "輝達的AI晶片帝國：黃仁勳的下一個十年",
        "category": "科技評論",
        "emoji": "🔋",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        "excerpt": "輝達市值突破萬億美元，GPU 需求遠超供應。黃仁勳如何構建 AI 晶片帝國？這場算力戰爭將如何重塑全球科技格局？",
        "readTime": 12,
        "link": "/editorial/nvidia-ai-chip-empire",
        "tag": "商業洞察",
        "featured": false
      },
      {
        "id": "ep-11",
        "title": "香港加密貨幣政策：亞洲 Web3 中心之爭",
        "category": "加密貨幣",
        "emoji": "🏙️",
        "image": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=800",
        "excerpt": "香港開放散戶加密交易，致力打造亞洲 Web3 中心。新加坡、迪拜、東京，谁能在這場監管競賽中脫穎而出？",
        "readTime": 10,
        "link": "/editorial/hongkong-crypto-policy",
        "tag": "政策解讀",
        "featured": false
      },
      {
        "id": "ep-12",
        "title": "AI Agent 時代：從聊天機器人到智能助理",
        "category": "AI應用",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        "excerpt": "ChatGPT 開啟 AI 新時代，但真正的變革是 AI Agent。它們能自主規劃、執行任務、調用工具。你的下一位同事可能是 AI。",
        "readTime": 13,
        "link": "/editorial/ai-agent-era",
        "tag": "深度分析",
        "featured": true
      },
      {
        "id": "ep-13",
        "title": "ESG 投資浪潮：永續金融的新常態",
        "category": "財經深度",
        "emoji": "🌱",
        "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
        "excerpt": "環境、社會與公司治理成為投資新標準。貝萊德、先鋒等巨頭押注永續金融，碳中和目標如何影響資本市場走向？",
        "readTime": 11,
        "link": "/editorial/esg-investment-wave",
        "tag": "投資策略",
        "featured": false
      }
    ]
  },
  "en": {
    "sectionTitle": "📝 Editor's Pick",
    "sectionSubtitle": "Original Analysis",
    "readTime": "Reading time",
    "minutes": "min",
    "viewAll": "View All Articles →",
    "savedSuccess": "Article saved",
    "savedRemoved": "Removed from saved",
    "shareSuccess": "Link copied",
    "articles": [
      {
        "id": "ep-1",
        "title": "Bitcoin ETF Approval: Market Shift",
        "category": "Crypto",
        "emoji": "₿",
        "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "The approval of spot Bitcoin ETFs marks the dissolution of the once insurmountable gap between traditional finance and crypto.",
        "readTime": 12,
        "link": "/editorial/bitcoin-etf-deep-analysis",
        "tag": "Deep Dive",
        "featured": true
      },
      {
        "id": "ep-2",
        "title": "Ethical Boundaries of AI News",
        "category": "Tech",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Is the soul of journalism being lost to efficiency? Exploring the ethical boundaries of AI-assisted news translation.",
        "readTime": 10,
        "link": "/editorial/ai-translation-ethics",
        "tag": "Opinion",
        "featured": false
      },
      {
        "id": "ep-3",
        "title": "Human vs AI Analysis",
        "category": "Tech",
        "emoji": "⚖️",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "When algorithms can summarize global news instantly, who better represents the truth?",
        "readTime": 11,
        "link": "/editorial/twohumans-vs-ai-analysis",
        "tag": "Exclusive",
        "featured": true
      },
      {
        "id": "ep-4",
        "title": "Global CBDC Race",
        "category": "Finance",
        "emoji": "🏦",
        "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
        "excerpt": "From China's digital yuan to Europe's digital euro, central banks are accelerating their plans.",
        "readTime": 10,
        "link": "/editorial/cbdc-global-race",
        "tag": "Deep Dive",
        "featured": false
      },
      {
        "id": "ep-5",
        "title": "Stablecoin Wars",
        "category": "Crypto",
        "emoji": "🪙",
        "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
        "excerpt": "When traditional banks, crypto companies, and tech giants all flood the stablecoin track.",
        "readTime": 11,
        "link": "/editorial/stablecoin-war",
        "tag": "Trending",
        "featured": false
      },
      {
        "id": "ep-6",
        "title": "DeFi Deep Guide",
        "category": "FinTech",
        "emoji": "💱",
        "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Permissionless, unmediated, 24/7. DeFi is trying to move Wall Street to the blockchain.",
        "readTime": 13,
        "link": "/editorial/decentralized-finance-guide",
        "tag": "Deep Dive",
        "featured": false
      },
      {
        "id": "ep-7",
        "title": "AI Image Generators",
        "category": "AI",
        "emoji": "🎨",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        "excerpt": "When anyone can generate professional-grade illustrations through text descriptions.",
        "readTime": 9,
        "link": "/editorial/ai-image-generators",
        "tag": "Tech Outlook",
        "featured": false
      },
      {
        "id": "ep-8",
        "title": "Web3 Gaming Future",
        "category": "Blockchain",
        "emoji": "🎮",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "After blockchain gaming experienced hype and collapse, it's returning to the essence of gaming.",
        "readTime": 11,
        "link": "/editorial/web3-gaming-future",
        "tag": "Trend",
        "featured": false
      },
      {
        "id": "ep-9",
        "title": "Ethereum Layer 2 Explosion",
        "category": "Blockchain",
        "emoji": "🔷",
        "image": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Post-Merge Ethereum sees Layer 2 solutions explode. Arbitrum, Optimism, zkSync competing for dominance.",
        "readTime": 11,
        "link": "/editorial/ethereum-layer2-explosion",
        "tag": "Tech Analysis",
        "featured": false
      },
      {
        "id": "ep-10",
        "title": "NVIDIA's AI Chip Empire",
        "category": "Tech",
        "emoji": "🔋",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        "excerpt": "NVIDIA crosses $1 trillion market cap. Jensen Huang's vision for AI computing dominance.",
        "readTime": 12,
        "link": "/editorial/nvidia-ai-chip-empire",
        "tag": "Business Insight",
        "featured": false
      },
      {
        "id": "ep-11",
        "title": "Hong Kong Crypto Policy",
        "category": "Crypto",
        "emoji": "🏙️",
        "image": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Hong Kong opens retail crypto trading, competing for Asia's Web3 hub status with Singapore and Dubai.",
        "readTime": 10,
        "link": "/editorial/hongkong-crypto-policy",
        "tag": "Policy",
        "featured": false
      },
      {
        "id": "ep-12",
        "title": "AI Agent Era",
        "category": "AI",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Beyond chatbots - AI Agents that can plan, execute tasks, and use tools autonomously.",
        "readTime": 13,
        "link": "/editorial/ai-agent-era",
        "tag": "Deep Dive",
        "featured": true
      },
      {
        "id": "ep-13",
        "title": "ESG Investment Wave",
        "category": "Finance",
        "emoji": "🌱",
        "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
        "excerpt": "Environmental, Social, Governance becoming the new investment standard. How green finance reshapes markets.",
        "readTime": 11,
        "link": "/editorial/esg-investment-wave",
        "tag": "Investment",
        "featured": false
      }
    ]
  },
  "zh-CN": {
    "sectionTitle": "📝 编辑精选",
    "sectionSubtitle": "深度原创",
    "readTime": "阅读时间",
    "minutes": "分钟",
    "viewAll": "查看全部文章 →",
    "savedSuccess": "已收藏文章",
    "savedRemoved": "已取消收藏",
    "shareSuccess": "已复制链接",
    "articles": [
      {
        "id": "ep-1",
        "title": "比特币ETF获批后：市场结构性改变",
        "category": "加密货币",
        "emoji": "₿",
        "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "比特币现货ETF的批准不仅是监管的胜利，更标志着传统金融与加密市场之间那道曾经不可逾越的鸿沟正在加速消亡。",
        "readTime": 12,
        "link": "/editorial/bitcoin-etf-deep-analysis",
        "tag": "深度分析",
        "featured": true
      },
      {
        "id": "ep-2",
        "title": "AI 翻译新闻的伦理边界：平衡技术与原创",
        "category": "科技评论",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "excerpt": "当AI能够在数秒内将一篇外语新闻翻译成简体中文，新闻的本质是否正在被稀释？我们必须深入探讨这场技术变革。",
        "readTime": 10,
        "link": "/editorial/ai-translation-ethics",
        "tag": "编辑观点",
        "featured": false
      },
      {
        "id": "ep-3",
        "title": "新闻App的AI分析功能：人与算法的真相博弈",
        "category": "科技评论",
        "emoji": "⚖️",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "当演算法可以瞬间总结全球新闻，「人性」与「效率」之间的取舍，究竟谁更能代表真相？",
        "readTime": 11,
        "link": "/editorial/twohumans-vs-ai-analysis",
        "tag": "独家评论",
        "featured": true
      },
      {
        "id": "ep-4",
        "title": "全球央行数字货币竞赛：美元霸权的进化？",
        "category": "财经深度",
        "emoji": "🏦",
        "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
        "excerpt": "从中国的数字人民币到欧洲央行的数字欧元，各国央行正在加速布局。这场竞赛将如何重塑金融秩序？",
        "readTime": 10,
        "link": "/editorial/cbdc-global-race",
        "tag": "深度分析",
        "featured": false
      },
      {
        "id": "ep-5",
        "title": "稳定币大战：谁能笑到最后？",
        "category": "加密货币",
        "emoji": "🪙",
        "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
        "excerpt": "当传统银行、加密原生公司、科技巨头全部涌入稳定币赛道，这场战争将如何改变我们的货币体系？",
        "readTime": 11,
        "link": "/editorial/stablecoin-war",
        "tag": "热门话题",
        "featured": false
      },
      {
        "id": "ep-6",
        "title": "DeFi 深度指南：金融民主化还是泡沫？",
        "category": "金融科技",
        "emoji": "💱",
        "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        "excerpt": "无需许可、无须审核、24/7 运作。DeFi 正试图将华尔街搬到区块链上，但风险同样巨大。",
        "readTime": 13,
        "link": "/editorial/decentralized-finance-guide",
        "tag": "深度分析",
        "featured": false
      },
      {
        "id": "ep-7",
        "title": "AI 图像生成器：创意产业的毁灭者？",
        "category": "AI应用",
        "emoji": "🎨",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        "excerpt": "当任何人都可以通过文字描述生成专业级插画，传统艺术家的价值该如何重新定义？",
        "readTime": 9,
        "link": "/editorial/ai-image-generators",
        "tag": "科技展望",
        "featured": false
      },
      {
        "id": "ep-8",
        "title": "Web3 游戏的未来：所有权的觉醒",
        "category": "区块链",
        "emoji": "🎮",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        "excerpt": "区块链游戏经历了暴利炒作与崩溃后，正在回归游戏的本质：好玩。玩游戏不再只是消费。",
        "readTime": 11,
        "link": "/editorial/web3-gaming-future",
        "tag": "趋势分析",
        "featured": false
      },
      {
        "id": "ep-9",
        "title": "以太坊升级后：Layer 2 生态爆发元年",
        "category": "区块链",
        "emoji": "🔷",
        "image": "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "以太坊完成升级后，Layer 2 解决方案迎来爆发式增长。Arbitrum、Optimism、zkSync 百花齐放，费用降低 100 倍，用户体验全面提升。",
        "readTime": 11,
        "link": "/editorial/ethereum-layer2-explosion",
        "tag": "技术分析",
        "featured": false
      },
      {
        "id": "ep-10",
        "title": "英伟达的AI芯片帝国：黄仁勋的下一个十年",
        "category": "科技评论",
        "emoji": "🔋",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        "excerpt": "英伟达市值突破万亿美元，GPU 需求远超供应。黄仁勋如何构建 AI 芯片帝国？这场算力战争将如何重塑全球科技格局？",
        "readTime": 12,
        "link": "/editorial/nvidia-ai-chip-empire",
        "tag": "商业洞察",
        "featured": false
      },
      {
        "id": "ep-11",
        "title": "香港加密货币政策：亚洲 Web3 中心之争",
        "category": "加密货币",
        "emoji": "🏙️",
        "image": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=800",
        "excerpt": "香港开放散户加密交易，致力于打造亚洲 Web3 中心。新加坡、迪拜、东京，谁在这场监管竞赛中脱颖而出？",
        "readTime": 10,
        "link": "/editorial/hongkong-crypto-policy",
        "tag": "政策解读",
        "featured": false
      },
      {
        "id": "ep-12",
        "title": "AI Agent 时代：从聊天机器人到智能助理",
        "category": "AI应用",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        "excerpt": "ChatGPT 开启 AI 新时代，但真正的变革是 AI Agent。它们能自主规划、执行任务、调用工具。你的下一位同事可能是 AI。",
        "readTime": 13,
        "link": "/editorial/ai-agent-era",
        "tag": "深度分析",
        "featured": true
      },
      {
        "id": "ep-13",
        "title": "ESG 投资浪潮：永续金融的新常态",
        "category": "财经深度",
        "emoji": "🌱",
        "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
        "excerpt": "环境、社会与公司治理成为投资新标准。贝莱德、先锋等巨头押注永续金融，碳中和目标如何影响资本市场走向？",
        "readTime": 11,
        "link": "/editorial/esg-investment-wave",
        "tag": "投资策略",
        "featured": false
      }
    ]
  }
};

const LABELS = {
  "zh-TW": {
    title: "NewsFlow 全球資訊", subtitle: "Real-time translation · AI Analysis · 多元分類",
    searchPlaceholder: "搜尋新聞...", loading: "載入緊...", noResults: "冇新聞",
    saved: "已經儲起咗", removed: "已移除", copied: "已複製連結", read: "睇下",
    darkOn: "深色模式", darkOff: "淺色模式",
    subscribe: "Email 訂閱", subscribeTitle: "每日精選摘要", subscribeDesc: "每天定時收到重點新聞摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即訂閱",
    subscribeSuccess: "訂閱成功咗！", subscribeError: "請輸入有效 Email",
    refresh: "刷新", autoRefresh: "自動刷新", refreshOff: "關閉自動刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI Summary載入緊...", keyAlert: "AI 分析功能正常運行中",
    trend: "熱門話題", related: "相關新聞",
    categories: {
      finance: "財經", crypto: "加密幣", business: "商業", technology: "科技",
      health: "健康", gaming: "遊戲", food: "美食", travel: "旅遊",
      ai: "AI藝術", art: "藝術", astronomy: "天文", mystery: "神秘學", data_journalism: "數據新聞 24h熱門"
    },
    impactClose: "關閉解讀",
    menu: "目錄", close: "關閉", all: "全部", analysis: "AI Analysis",
    savedNews: "收藏", allNews: "全部", source: "來源",
    readMore: "閱讀更多", noSaved: "還沒有收藏的新聞", clearSaved: "清除全部",
    langChanged: "語言已切換",
    shareSuccess: "分享成功", emailRequired: "請輸入 Email 地址"
  },
  "zh-CN": {
    title: "NewsFlow 全球资讯", subtitle: "即时翻译 · AI Analysis · 多元分类",
    searchPlaceholder: "搜索新闻...", loading: "载入中...", noResults: "没有找到新闻",
    saved: "已收藏", removed: "已移除", copied: "已复制链接", read: "已读",
    darkOn: "浅色模式", darkOff: "深色模式",
    subscribe: "Email 订阅", subscribeTitle: "每日精选摘要", subscribeDesc: "每天定时收到重点新闻摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即订阅",
    subscribeSuccess: "订阅成功！", subscribeError: "请输入有效 Email",
    refresh: "刷新", autoRefresh: "自动刷新", refreshOff: "关闭自动刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI Summary载入中...", keyAlert: "AI 分析功能正常运行中",
    trend: "热门话题", related: "相关新闻",
    categories: {
      finance: "財經", crypto: "加密幣", business: "商業", technology: "科技",
      health: "健康", gaming: "遊戲", food: "美食", travel: "旅遊",
      ai: "AI藝術", art: "藝術", astronomy: "天文", mystery: "神秘學", data_journalism: "數據新聞 24h熱門"
    },
    savedNews: "收藏", allNews: "全部", source: "来源",
    readMore: "阅读更多", noSaved: "还没有收藏的新闻", clearSaved: "清除全部",
    langChanged: "语言已切换",
    shareSuccess: "分享成功", emailRequired: "请输入 Email 地址",
    impactClose: "关闭解读",
    menu: "目录", close: "关闭", all: "全部", analysis: "AI Analysis"
  },
  "en": {
    title: "NewsFlow Global News", subtitle: "Real-time Translation · AI Analysis · Multi-category",
    searchPlaceholder: "Search news...", loading: "Loading...", noResults: "No news found",
    saved: "Saved", removed: "Removed", copied: "Link copied", read: "Read",
    darkOn: "Dark Mode", darkOff: "Light Mode",
    subscribe: "Email Subscribe", subscribeTitle: "Daily Digest", subscribeDesc: "Get daily news highlights delivered to your inbox",
    emailPlaceholder: "Your Email", subscribeBtn: "Subscribe Now",
    subscribeSuccess: "Subscribed!", subscribeError: "Please enter a valid email",
    refresh: "Refresh", autoRefresh: "Auto Refresh", refreshOff: "Turn Off Auto Refresh",
    aiSummary: "AI Summary", noSummary: "AI Summary loading...", keyAlert: "AI features running normally",
    trend: "Trending Topics", related: "Related News",
    categories: {
      finance: "財經", crypto: "加密幣", business: "商業", technology: "科技",
      health: "健康", gaming: "遊戲", food: "美食", travel: "旅遊",
      ai: "AI藝術", art: "藝術", astronomy: "天文", mystery: "神秘學", data_journalism: "數據新聞 24h熱門"
    },
    savedNews: "Saved", allNews: "All", source: "Source",
    readMore: "Read More", noSaved: "No saved news yet", clearSaved: "Clear All",
    langChanged: "Language changed",
    shareSuccess: "Share success", emailRequired: "Please enter email address",
    impactClose: "Close Analysis",
    menu: "Menu", close: "Close", all: "All", analysis: "AI Analysis"
  },
};

export default function NewsPage() {
  const [lang, setLang] = useState<Lang>("zh-TW");
  const [darkMode, setDarkMode] = useState(true);
  const [category, setCategory] = useState<Category>("finance");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [aiHostItem, setAiHostItem] = useState<any>(null);
  const [aiHostLoading, setAiHostLoading] = useState(false);
  const [aiHostData, setAiHostData] = useState<any>(null);
  const [aiHostError, setAiHostError] = useState<string>("");
  const [aiInlineItem, setAiInlineItem] = useState<string | null>(null);

  const analyzeWithAIHost = async (item: any) => {
    setAiHostItem(item);
    setAiHostLoading(true);
    setAiHostData(null);
    setAiHostError("");
    
    try {
      const res = await fetch('/api/ai-host', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: item.title_translated || item.title, 
          desc: item.desc_translated || item.desc,
          source: item.source,
          lang: lang
        })
      });
      
      const data = await res.json();
      
      if (data.success && data.analysis) {
        setAiHostData({ 
          item: item, 
          analysis: data.analysis,
          isDemo: data.isDemo || false
        });
      } else {
        setAiHostError(data.error || "分析失敗，請稍後再試");
      }
    } catch (err: any) {
      console.error('AI Host analysis failed', err);
      setAiHostError("網絡錯誤，請檢查連線後重試");
    }
    
    setAiHostLoading(false);
  };

  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [showSaved, setShowSaved] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [toast, setToast] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiSummary, setAiSummary] = useState<any>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  // Data journalism filter states
  const [dataJournalismSub, setDataJournalismSub] = useState<string>('gdp');
  const [dataJournalismSubs, setDataJournalismSubs] = useState<any[]>([]);
  const [isDataJournalism, setIsDataJournalism] = useState(false);

  // Pagination state - Mobile optimized
  const [displayCount, setDisplayCount] = useState(6);

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll event listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // AdSense state
  const adsenseClient = typeof window !== 'undefined'
    ? (window as any).__ADSENSE_CLIENT__ || process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-4745583996243741"
    : "ca-pub-4745583996243741";
  const adSlotLeaderboard = process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD || "YOUR_LEADERBOARD_AD_SLOT_ID";
  const adSlotInArticle = process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || "YOUR_INARTICLE_AD_SLOT_ID";
  const adSlotRectangle = process.env.NEXT_PUBLIC_AD_SLOT_RECTANGLE || "YOUR_RECTANGLE_AD_SLOT_ID";

  // Hot News Carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  // Push ad slots after mount
  useEffect(() => {
    const tryPushAds = () => {
      if (typeof (window as any).adsbygoogle !== 'undefined') {
        try {
          (window as any).adsbygoogle.push({});
        } catch (e) { /* ignore */ }
      }
    };
    // Try multiple times as script loads async
    const timer = setTimeout(tryPushAds, 2000);
    const timer2 = setTimeout(tryPushAds, 5000);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, [news.length]);

  const t = LABELS[lang];

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      if (isNaN(date.getTime())) return dateStr
      const now = new Date()
      // If date is in the future, show "just now" instead
      if (date.getTime() > now.getTime() + 24 * 60 * 60 * 1000) {
        if (lang === 'zh-TW' || lang === 'zh-CN') return '最近'
        return 'Just now'
      }
      return date.toLocaleDateString(lang === "en" ? "en-US" : lang === "zh-CN" ? "zh-CN" : "zh-TW", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return dateStr
    }
  }

  useEffect(() => {
    const cached = localStorage.getItem(`news_cache_${category}_${lang}`);
    if (cached) {
      try {
        setNews(JSON.parse(cached));
      } catch (e) {
        console.error("Cache parse error", e);
      }
    }
    
    const saved = localStorage.getItem("savedNews");
    if (saved) setSavedIds(new Set(JSON.parse(saved)));
    
    const dark = localStorage.getItem("darkMode");
    if (dark) setDarkMode(dark === "true");
    
    const savedLang = localStorage.getItem("newsLang") as Lang;
    if (savedLang && ["zh-TW", "zh-CN", "en"].includes(savedLang)) setLang(savedLang);
  }, [category, lang]);

  const fetchNews = useCallback(async (isInitial = false) => {
    // Always set loading for fresh fetches, only skip if we have data and it's an initial call
    // Note: We use setLoading first to ensure loading state is set
    setLoading(true);

    console.log('[fetchNews] Starting fetch, isInitial:', isInitial);

    setError("")
    try {
      const url = `/api/news-feed?category=${category}&lang=${lang}&t=${Date.now()}${category === 'data_journalism' ? `&sub=${dataJournalismSub}` : ''}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success && data.items && data.items.length > 0) {
        console.log('[NewsFeed] Fetched', data.items.length, 'items');
        setNews(data.items);
        // Store in cache for offline use
        try {
          localStorage.setItem(`news_cache_${category}_${lang}`, JSON.stringify(data.items));
        } catch (e) {}
        // Capture data journalism subcategory data
        if (data.isDataJournalism) {
          setIsDataJournalism(true)
          if (data.subcategories) setDataJournalismSubs(data.subcategories)
          if (data.subcategory) setDataJournalismSub(data.subcategory)
        } else {
          setIsDataJournalism(false)
        }
      } else {
        // No items returned, try to load from cache for SEO fallback
        console.log('[NewsFeed] No items returned, checking cache for fallback');
        const cacheKey = `news_cache_${category}_${lang}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          try {
            const cachedItems = JSON.parse(cached);
            if (cachedItems && cachedItems.length > 0) {
              console.log('[NewsFeed] Using', cachedItems.length, 'cached items for SEO fallback');
              setNews(cachedItems);
              // Clear error since we have cached content
              setError("");
            } else {
              setError(data.error || "No news available");
            }
          } catch (e) {
            setError(data.error || "No news available");
          }
        } else {
          setError(data.error || "No news available");
        }
      }
    } catch (err) {
      console.error("Fetch news failed, trying cache for fallback", err);
      // Try to load from cache on network error
      const cacheKey = `news_cache_${category}_${lang}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const cachedItems = JSON.parse(cached);
          if (cachedItems && cachedItems.length > 0) {
            console.log('[NewsFeed] Using', cachedItems.length, 'cached items after network error');
            setNews(cachedItems);
            setError(""); // Clear error since we have cached content
          } else {
            setError("Network error. Please try again.");
          }
        } catch (e) {
          setError("Network error. Please try again.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [category, lang, dataJournalismSub]);

  const fetchAiSummary = useCallback(async () => {
    if (news.length === 0) return;
    setSummaryLoading(true);
    try {
      const res = await fetch('/api/ai-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: news.slice(0, 10), lang })
      });
      const data = await res.json();
      if (data.success && data.analysis) {
        setAiSummary(data.analysis);
      }
    } catch (err) {
      console.error('Analysis failed:', err);
    } finally {
      setSummaryLoading(false);
    }
  }, [news, lang]);

  // Initial fetch on mount - use ref to ensure single execution
  const initializedRef = useRef(false);
  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      console.log('[Mount] Initial fetch triggered');
      fetchNews(true);
    } else {
      // Fetch new news when category changes
      fetchNews(false);
    }
  }, [fetchNews, category]);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => fetchNews(false), 30000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, fetchNews]);

  useEffect(() => {
    if (news.length > 0) {
      fetchAiSummary();
    }
  }, [news.length, lang]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toggleSaved = (title: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(title)) { next.delete(title); setToast(t.removed); }
      else { next.add(title); setToast(t.saved); }
      localStorage.setItem("savedNews", JSON.stringify([...next]));
      return next;
    });
  };

  const toggleRead = (title: string) => {
    setReadIds(prev => { const next = new Set(prev); next.add(title); return next; });
    setExpandedId(title === expandedId ? null : title);
  };

  const shareNews = (item: NewsItem) => {
    if (navigator.share) {
      navigator.share({ title: item.title_translated || item.title, url: item.link });
    } else {
      navigator.clipboard.writeText(item.link);
      setToast(t.copied);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail.includes("@")) { setToast(t.subscribeError); return; }
    setToast(t.subscribeSuccess);
    setSubscribeEmail("");
    setShowSubscribe(false);
  };

  const filteredNews = news.filter((n: NewsItem) => {
    // Search filter
    if (!search) return true;
    const q = search.toLowerCase();
    return (n.title_translated || n.title).toLowerCase().includes(q) ||
           n.title.toLowerCase().includes(q) ||
           (n.desc_translated || n.desc).toLowerCase().includes(q);
  });

  const allDisplayNews = showSaved ? filteredNews.filter(n => savedIds.has(n.title)) : (filteredNews.length > 0 ? filteredNews : SAMPLE_NEWS);
  const displayNews = allDisplayNews.slice(0, displayCount);
  const hasMoreNews = allDisplayNews.length > displayCount;

  // Get hot news (top 5 news with images) - must be after displayNews
  const hotNews = displayNews.filter(n => n.img_url).slice(0, 5);

  // Hot News Carousel auto-rotation - must be after hotNews declaration
  useEffect(() => {
    if (carouselPaused || hotNews.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % hotNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselPaused, hotNews.length]);

  // Reset carousel when news changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [category]);

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(6);
  }, [category]);

  const getCardBg = (isRead: boolean) => {
    if (darkMode) return isRead ? "bg-gray-900/50 border-gray-700" : "bg-gray-800/90 border-gray-700";
    return isRead ? "bg-gray-100 border-gray-200" : "bg-white border-gray-200";
  };

  // Language change handler - clear cache and force refresh
  const handleLangChange = (newLang: Lang) => {
    // Clear all news caches for this category
    ['zh-TW', 'zh-CN', 'en'].forEach(l => {
      try {
        localStorage.removeItem(`news_cache_${category}_${l}`);
      } catch (e) {}
    });
    
    setLang(newLang);
    localStorage.setItem("newsLang", newLang);
    setShowLangMenu(false);
    setToast(t.langChanged);
    
    // Force refresh with new language
    setTimeout(() => {
      setLoading(true);
      fetch(`/api/news-feed?category=${category}&lang=${newLang}&t=${Date.now()}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.items) {
            setNews(data.items);
            localStorage.setItem(`news_cache_${category}_${newLang}`, JSON.stringify(data.items));
          }
        })
        .catch(err => console.error('Force refresh failed:', err))
        .finally(() => setLoading(false));
    }, 100);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}>
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-700 p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">{t.menu}</h2>
              <button onClick={() => setShowMobileMenu(false)} className="p-2 rounded-xl bg-gray-800 text-white">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-3 mb-8">
              <button onClick={() => { setDarkMode(v => !v); setShowMobileMenu(false); }} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gray-800 text-white text-lg font-medium">
                {darkMode ? <Sun size={24} /> : <Moon size={24} />} {darkMode ? t.darkOn : t.darkOff}
              </button>
              <button onClick={() => { setShowSaved(v => !v); setShowMobileMenu(false); }} className={`w-full flex items-center gap-4 p-4 rounded-2xl text-lg font-medium ${showSaved ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}>
                <Bookmark size={24} /> {t.savedNews} {savedIds.size > 0 && <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-sm">{savedIds.size}</span>}
              </button>
              <button onClick={() => { setShowSubscribe(true); setShowMobileMenu(false); }} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-medium">
                <Mail size={24} /> {t.subscribe}
              </button>
              <Link href="/blog" onClick={() => setShowMobileMenu(false)} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-lg font-medium">
                <BookOpen size={24} /> {lang === "en" ? "Travel Blog" : "旅遊Blog"}
              </Link>
            </div>
            
            {/* Mobile categories */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 text-white">{lang === 'en' ? 'Categories' : '分類'}</h3>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setCategory(cat.id); setShowMobileMenu(false); }}
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 p-2 transition-all ${category === cat.id ? cat.color + " text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="text-xs font-semibold text-center leading-tight">{cat.label_zh}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{lang === 'en' ? 'Language' : '語言'}</h3>
              <div className="space-y-2">
                {LANG_OPTIONS.map(l => (
                  <button key={l.id} onClick={() => { setLang(l.id); setShowMobileMenu(false); }} className={`w-full text-left p-4 rounded-2xl text-lg font-medium flex items-center gap-3 ${lang === l.id ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"}`}>
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Stats Bar */}
      <div className={`py-2 px-4 ${darkMode ? "bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50" : "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"} border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>🟢 Live Updates</span>
            </div>
            <div className={`hidden md:flex items-center gap-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              <span>📰 <strong className={darkMode ? "text-gray-200" : "text-gray-700"}>{displayNews.length}</strong> 新聞</span>
              <span>🌍 <strong className={darkMode ? "text-gray-200" : "text-gray-700"}>13</strong> 分類</span>
              <span>🗣️ <strong className={darkMode ? "text-gray-200" : "text-gray-700"}>3</strong> 語言</span>
              <span>📊 <strong className={darkMode ? "text-gray-200" : "text-gray-700"}>∞</strong> 每日更新</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              {new Date().toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit' })} 更新
            </span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-40 backdrop-blur-xl ${darkMode ? "bg-gray-900/90 border-gray-800" : "bg-white/90 border-gray-200"} border-b`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowMobileMenu(true)} className={`p-2 rounded-xl md:hidden ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                <Menu size={24} />
              </button>
              <div className="text-2xl md:text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">NewsFlow</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setShowSearch(v => !v)} className={`p-3 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-600"}`}>
                <Search size={20} />
              </button>
              <button onClick={() => setDarkMode(v => !v)} className={`p-3 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-yellow-400" : "hover:bg-gray-100 text-gray-600"}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setShowSaved(v => !v)} className={`p-3 rounded-xl transition ${showSaved ? "bg-blue-500 text-white" : darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-600"}`}>
                <Bookmark size={20} />
              </button>
              <button onClick={() => setShowSubscribe(true)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${darkMode ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"}`}>
                📬 {t.subscribe}
              </button>
              <Link href="/analytics" className={`px-3 py-2 rounded-xl text-sm font-medium transition ${darkMode ? "bg-purple-600 hover:bg-purple-500 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"}`}>
                📊 分析
              </Link>
              <Link href="/blog" className={`px-3 py-2 rounded-xl text-sm font-medium transition bg-gradient-to-r from-teal-600 to-emerald-600 hover:opacity-90 text-white flex items-center gap-1.5`}>
                <BookOpen size={16} /> 博客
              </Link>
              <Link href="/finance" className={`px-3 py-2 rounded-xl text-sm font-medium transition bg-gradient-to-r from-yellow-600 to-amber-600 hover:opacity-90 text-white flex items-center gap-1.5`}>
                💰 財經
              </Link>
              <Link href="/health" className={`px-3 py-2 rounded-xl text-sm font-medium transition bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-white flex items-center gap-1.5`}>
                ❤️ 健康
              </Link>
              <Link href="/food" className={`px-3 py-2 rounded-xl text-sm font-medium transition bg-gradient-to-r from-orange-600 to-red-600 hover:opacity-90 text-white flex items-center gap-1.5`}>
                🍜 美食
              </Link>
              <Link href="/ai-tools" className={`px-3 py-2 rounded-xl text-sm font-medium transition bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white flex items-center gap-1.5`}>
                🤖 AI工具
              </Link>
              <div className="relative">
                <button onClick={() => setShowLangMenu(v => !v)} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition ${darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {LANG_OPTIONS.find(l => l.id === lang)?.flag}
                </button>
                {showLangMenu && (
                  <div className={`absolute right-0 mt-2 py-2 rounded-xl shadow-2xl z-50 min-w-[140px] ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}>
                    {LANG_OPTIONS.map(l => (
                      <button key={l.id} onClick={() => handleLangChange(l.id)} className={`w-full text-left px-4 py-3 text-base hover:bg-opacity-50 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} ${lang === l.id ? (darkMode ? "text-blue-400" : "text-blue-600") : ""}`}>
                        {l.flag} {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex md:hidden items-center gap-1">
              <button onClick={() => setShowSearch(v => !v)} className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                <Search size={20} />
              </button>
              <button onClick={() => setDarkMode(v => !v)} className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setShowSaved(v => !v)} className={`p-2 rounded-xl ${showSaved ? "bg-blue-500 text-white" : darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                <Bookmark size={20} />
              </button>
              <button onClick={() => setShowSubscribe(true)} className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600"}`}>
                <Mail size={20} />
              </button>
              <Link href="/analytics" className={`p-2 rounded-xl ${darkMode ? "bg-purple-600 text-white" : "bg-purple-500 text-white"}`}>
                <TrendingUp size={20} />
              </Link>
            </div>
          </div>

          {showSearch && (
            <div className="mt-3 relative">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} size={18} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.searchPlaceholder} className={`w-full pl-11 pr-10 py-4 rounded-2xl text-base outline-none transition ${darkMode ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500" : "bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-blue-400"}`} />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2"><X size={18} className={darkMode ? "text-gray-500" : "text-gray-400"} /></button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Travel Blog Banner */}
      <Link href="/blog" className="block w-full">
        <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"
            alt="NewsFlow Travel Blog"
            className="w-full h-full object-cover hover:opacity-90 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
            <div className="text-2xl md:text-3xl mb-1">✈️ NewsFlow Travel Blog</div>
            <p className="text-sm md:text-base text-white/90 mb-3">用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍</p>
            <span className="inline-block w-fit px-4 py-1.5 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition">
              📖 閱讀最新文章
            </span>
          </div>
        </div>
      </Link>

      {/* 精彩專題 Section - Glamorous Version */}
      <div className="mt-8 px-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-3">
            <span className="text-2xl animate-pulse">✨</span>
            <span>精彩專題</span>
            <span className="text-2xl animate-pulse">✨</span>
          </h2>
          <Link href="/finance" className="text-sm text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1 group">
            <span>查看全部</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Glamorous Featured Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Finance Section - Golden Glamour */}
          <Link href="/finance" className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-900/60 via-amber-900/40 to-orange-900/60 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-500 p-5 md:p-6 h-full min-h-[180px] md:min-h-[200px] flex flex-col items-center justify-center text-center">
              {/* Animated Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer" />

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/50 rounded-full animate-float" />
              <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-float-delayed" />

              {/* Icon Container with Glow */}
              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-2xl blur-xl group-hover:bg-yellow-400/50 transition-all duration-500" />
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-yellow-400/30">
                  <span className="text-4xl md:text-5xl filter drop-shadow-lg">💰</span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">財經投資</h3>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">市場分析</p>

              {/* Hover Reveal */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>探索更多</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Health Section - Emerald Elegance */}
          <Link href="/health" className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/60 via-emerald-900/40 to-teal-900/60 border border-green-500/30 hover:border-green-400/60 transition-all duration-500 p-5 md:p-6 h-full min-h-[180px] md:min-h-[200px] flex flex-col items-center justify-center text-center">
              {/* Animated Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-shimmer" />

              {/* Floating Particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-green-400/50 rounded-full animate-float" />
              <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-float-delayed" />

              {/* Icon Container with Glow */}
              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 bg-green-400/30 rounded-2xl blur-xl group-hover:bg-green-400/50 transition-all duration-500" />
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-green-400/30">
                  <span className="text-4xl md:text-5xl filter drop-shadow-lg">🏥</span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-green-300 transition-colors">健康養生</h3>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">生活品質</p>

              {/* Hover Reveal */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>探索更多</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Food Section - Warm Sunset */}
          <Link href="/food" className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900/60 via-red-900/40 to-pink-900/60 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 p-5 md:p-6 h-full min-h-[180px] md:min-h-[200px] flex flex-col items-center justify-center text-center">
              {/* Animated Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-shimmer" />

              {/* Floating Particles */}
              <div className="absolute top-6 right-4 w-2 h-2 bg-orange-400/50 rounded-full animate-float" />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-float-delayed" />

              {/* Icon Container with Glow */}
              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 bg-orange-400/30 rounded-2xl blur-xl group-hover:bg-orange-400/50 transition-all duration-500" />
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-orange-400/30">
                  <span className="text-4xl md:text-5xl filter drop-shadow-lg">🍜</span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">美食天地</h3>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">舌尖享受</p>

              {/* Hover Reveal */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>探索更多</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* AI Tools Section - Futuristic Cyber */}
          <Link href="/ai-tools" className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/60 via-purple-900/40 to-pink-900/60 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 p-5 md:p-6 h-full min-h-[180px] md:min-h-[200px] flex flex-col items-center justify-center text-center">
              {/* Animated Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />

              {/* Floating Particles */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-cyan-400/50 rounded-full animate-float" />
              <div className="absolute bottom-10 left-4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float-delayed" />

              {/* Icon Container with Glow */}
              <div className="relative mb-4 md:mb-5">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-2xl blur-xl group-hover:bg-cyan-400/50 transition-all duration-500" />
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-cyan-400/30">
                  <span className="text-4xl md:text-5xl filter drop-shadow-lg">🤖</span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">AI 工具</h3>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">智能助手</p>

              {/* Hover Reveal */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>探索更多</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </div>

      {/* AI Host Loading Modal */}
      {aiHostLoading && aiHostItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className={`max-w-md w-full p-8 rounded-3xl shadow-2xl ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 animate-bounce">🎙️</div>
              <h3 className="text-xl font-bold mb-2">{lang === "en" ? "AI Analysis" : "AI Analysis中"}</h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                {aiHostItem.title_translated || aiHostItem.title}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ width: "60%" }} />
              </div>
              <p className={`text-xs mt-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {lang === "en" ? "Generating..." : "Generating..."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* AI Host Dialog Modal */}
      {(aiHostData || aiHostError) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => { setAiHostData(null); setAiHostError(""); setAiHostItem(null); }}>
          <div 
            className={`max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`} 
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl">🎙️</div>
                <div>
                  <h3 className="text-lg font-bold">{lang === "en" ? "AI News Analysis" : "AI 新聞對話分析"}</h3>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.analysis}</p>
                </div>
              </div>
              <button 
                onClick={() => { setAiHostData(null); setAiHostError(""); setAiHostItem(null); }} 
                className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <X size={20} />
              </button>
            </div>

            {/* News Title */}
            <div className={`p-4 rounded-xl mb-6 ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}>
              <p className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {aiHostItem?.title_translated || aiHostItem?.title}
              </p>
            </div>

            {/* Error */}
            {aiHostError && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 mb-6">
                <p className="text-red-400 text-center">{aiHostError}</p>
              </div>
            )}

            {/* Dialog Content */}
            {aiHostData?.analysis && (
              <div className="space-y-4">
                {aiHostData.analysis.split('\n').filter((line: string) => line.trim()).map((line: string, i: number) => {
                  const isMale = line.match(/^(Jack|Analyst A|Jack:|Analyst A:)/i);
                  const isFemale = line.match(/^(Emma|Analyst B|Emma:|Analyst B:)/i);
                  const isHost = isMale || isFemale;
                  
                  return (
                    <div key={i} className={`flex items-start gap-3 ${isHost ? "" : "ml-4"}`}>
                      {isMale && <span className="text-2xl">🎙️</span>}
                      {isFemale && <span className="text-2xl">🎙️</span>}
                      {!isHost && <span className="text-lg">•</span>}
                      <div className={`flex-1 ${isHost ? "" : "italic"}`}>
                        <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} leading-relaxed`}>{line}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Demo Badge */}
            {aiHostData?.isDemo && (
              <div className="mt-6 p-3 rounded-xl bg-yellow-500/20 border border-yellow-500/40">
                <p className="text-xs text-yellow-400 text-center">
                  ⚠️ {lang === "en" ? "AI Analysis Active - Local Mode" : "AI 分析功能已啟動 - 本地模式"}
                </p>
              </div>
            )}

            {/* Return to card list button */}
            <button
              onClick={() => { setAiHostData(null); setAiHostError(""); setAiHostItem(null); }}
              className="mt-4 w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition"
            >
              <ExternalLink size={16} /> {lang === "en" ? "Return to Card List" : "返回卡片列表"}
            </button>

            {/* Close Button */}
            <button 
              onClick={() => { setAiHostData(null); setAiHostError(""); setAiHostItem(null); }} 
              className="w-full mt-4 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl text-base font-bold hover:opacity-90 transition"
            >
              {lang === "en" ? "Close" : "關閉"}
            </button>
          </div>
        </div>
      )}

      {/* Subscribe Modal */}
      {showSubscribe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowSubscribe(false)}>
          <div
            className={`max-w-md w-full rounded-3xl p-8 shadow-2xl ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{t.subscribe}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.subscribeTitle}</p>
                </div>
              </div>
              <button
                onClick={() => setShowSubscribe(false)}
                className={`p-2 rounded-xl ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <X size={20} />
              </button>
            </div>

            <p className={`text-sm mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.subscribeDesc}</p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={subscribeEmail}
                onChange={e => setSubscribeEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className={`w-full px-4 py-4 rounded-xl text-base outline-none transition ${darkMode ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500" : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500"}`}
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-bold hover:opacity-90 transition"
              >
                {t.subscribeBtn}
              </button>
            </form>

            <p className={`text-xs text-center mt-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              {lang === "en" ? "We respect your privacy. Unsubscribe anytime." : "我們尊重您的隱私，隨時可取消訂閱。"}
            </p>
          </div>
        </div>
      )}

      {/* 深度專題 Section - Featured Editorial Articles */}
      <section className={`mb-8 px-4 max-w-6xl mx-auto ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-white via-gray-50 to-white"} rounded-3xl p-6 md:p-8 shadow-2xl border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <span className="animate-pulse">✨</span>
            <span>深度專題分析</span>
            <span className="animate-pulse">✨</span>
          </h2>
          <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>專業數據 · 統計圖表 · 深度解讀</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* 投資趨勢 Article Card */}
          <a href="/editorial/global-investment-trends-2026.html" className={`group block p-5 md:p-6 rounded-2xl ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-yellow-500/50" : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-yellow-400/50"} transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                📊
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 font-medium">2026最新</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">投資理財</span>
                </div>
                <h3 className={`font-bold text-base md:text-lg mb-1 group-hover:text-yellow-400 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}>
                  2026年全球投資趨勢深度分析
                </h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} line-clamp-2`}>
                  比特幣$105,000、AI投資熱潮、穩定幣$1兆美元、機構化投資
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>📅 2026年6月</span>
                  <span>⏱️ 15分鐘</span>
                </div>
              </div>
            </div>
          </a>

          {/* 健康養生 Article Card */}
          <a href="/editorial/health-wellness-2026.html" className={`group block p-5 md:p-6 rounded-2xl ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-green-500/50" : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-400/50"} transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                🏥
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">2026最新</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">健康養生</span>
                </div>
                <h3 className={`font-bold text-base md:text-lg mb-1 group-hover:text-green-400 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}>
                  2026年全球健康養生趨勢分析
                </h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} line-clamp-2`}>
                  $5.02兆健康市場、女性長壽、精準健康革命
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>📅 2026年6月</span>
                  <span>⏱️ 18分鐘</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Hot News Carousel - Only show when we have news with images */}
      {hotNews.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🔥</span>
            <h2 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              {lang === "en" ? "Hot News" : "熱門新聞"}
            </h2>
            <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-red-500/20 text-red-400" : "bg-red-50 text-red-600"}`}>
              {lang === "en" ? "LIVE" : "直播"}
            </span>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden group"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            {/* Main Carousel */}
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
              {hotNews.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${idx === carouselIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <img
                    src={item.img_url}
                    alt={item.title_translated || item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-white/20 text-white" : "bg-white/90 text-gray-900"}`}>
                        {item.source}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? "bg-red-500 text-white" : "bg-red-500 text-white"}`}>
                        🔥 {lang === "en" ? "Hot" : "熱門"}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-red-300 transition-colors">
                      {item.title_translated || item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white/80 text-sm line-clamp-1 max-w-[70%]">
                        {item.desc_translated || item.desc}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${darkMode ? "bg-white/20 hover:bg-white/30 text-white" : "bg-white/90 hover:bg-white text-gray-900"}`}
                        >
                          {lang === "en" ? "Read More →" : "閱讀全文 →"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              {hotNews.length > 1 && (
                <>
                  <button
                    onClick={() => setCarouselIndex(prev => (prev - 1 + hotNews.length) % hotNews.length)}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all z-20 ${darkMode ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm" : "bg-white/80 hover:bg-white text-gray-900"} opacity-0 group-hover:opacity-100`}
                  >
                    <ChevronDown className="rotate-90" size={24} />
                  </button>
                  <button
                    onClick={() => setCarouselIndex(prev => (prev + 1) % hotNews.length)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all z-20 ${darkMode ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm" : "bg-white/80 hover:bg-white text-gray-900"} opacity-0 group-hover:opacity-100`}
                  >
                    <ChevronDown className="-rotate-90" size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Dot Indicators */}
            {hotNews.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {hotNews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === carouselIndex ? "w-6 bg-white" : "bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Editor's Picks - Enhanced with Interactive Features */}
      {(() => {
        const ep = EDITOR_PICKS[lang];
        const heroArticle = ep.articles[0];
        const gridArticles = ep.articles.slice(1, 13);

        // Handle save editorial article
        const handleSaveEditorial = (e: React.MouseEvent, articleId: string) => {
          e.preventDefault();
          e.stopPropagation();
          toggleSaved(articleId);
        };

        // Handle share editorial article
        const handleShareEditorial = (e: React.MouseEvent, article: any) => {
          e.preventDefault();
          e.stopPropagation();
          const url = `${window.location.origin}${article.link}`;
          if (navigator.share) {
            navigator.share({ title: article.title, url });
          } else {
            navigator.clipboard.writeText(url);
            setToast(ep.shareSuccess);
          }
        };

        return (
          <section className="mb-8">
            {/* Header with View All Button */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Edit3 size={20} className="text-amber-500" />
                  <h2 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{ep.sectionTitle}</h2>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-50 text-amber-600"}`}>
                  {ep.sectionSubtitle}
                </span>
              </div>
              <a href="/editorial" className={`text-sm font-medium hover:underline ${darkMode ? "text-amber-400" : "text-amber-600"}`}>
                {ep.viewAll}
              </a>
            </div>

            {/* Hero Card - Featured Article with Interactive Actions */}
            <div className="relative rounded-2xl overflow-hidden mb-4 group">
              <a href={heroArticle.link} className={`block transition-all duration-300 hover:shadow-2xl ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200 shadow-lg"}`}>
                <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
                  <img src={heroArticle.image} alt={heroArticle.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Featured Badge */}
                  {heroArticle.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        ⭐ {lang === "en" ? "Featured" : lang === "zh-CN" ? "精选" : "精選"}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">{heroArticle.tag}</span>
                      <span className="px-3 py-1 bg-black/40 text-white/90 text-xs rounded-full backdrop-blur-sm flex items-center gap-1">
                        ⏱️ {heroArticle.readTime} {lang === "en" ? "min read" : "分鐘閱讀"}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">{heroArticle.title}</h3>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2 hidden md:block">{heroArticle.excerpt}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-2xl">{heroArticle.emoji}</span>
                      <span className="text-white/70 text-sm">{heroArticle.category}</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Action Buttons - Floating */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  onClick={(e) => handleSaveEditorial(e, heroArticle.id)}
                  className={`p-2.5 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${darkMode ? "bg-gray-800/80 hover:bg-gray-700 text-gray-300" : "bg-white/90 hover:bg-white text-gray-600"} ${savedIds.has(heroArticle.id) ? "text-red-500" : ""}`}
                  title={savedIds.has(heroArticle.id) ? ep.savedRemoved : ep.savedSuccess}
                >
                  <BookmarkCheck size={18} className={savedIds.has(heroArticle.id) ? "fill-current" : ""} />
                </button>
                <button
                  onClick={(e) => handleShareEditorial(e, heroArticle)}
                  className={`p-2.5 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${darkMode ? "bg-gray-800/80 hover:bg-gray-700 text-gray-300" : "bg-white/90 hover:bg-white text-gray-600"}`}
                  title={ep.shareSuccess}
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Grid Layout for Remaining Articles - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {gridArticles.map((article) => (
                <div key={article.id} className={`relative rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg group ${darkMode ? "bg-gray-800 border border-gray-700 hover:border-amber-500/50" : "bg-white border border-gray-200 hover:border-amber-400 hover:shadow-amber-100"}`}>
                  <a href={article.link} className="block">
                    {/* Thumbnail Image */}
                    {article.image && (
                      <div className="aspect-video bg-gradient-to-br from-amber-900/20 to-gray-900/40 relative overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Featured Badge - Small */}
                        {article.featured && (
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold rounded-full shadow">
                              ⭐
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-3">
                      {/* Category & Emoji */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-sm">{article.emoji}</span>
                        <span className={`text-[10px] font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{article.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-sm font-bold leading-snug mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors ${darkMode ? "text-gray-100" : "text-gray-800"}`}>{article.title}</h3>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between">
                        <span className="text-amber-500 text-[10px] font-semibold flex items-center gap-1">
                          ⏱️ {article.readTime} {lang === "en" ? "min" : "分鐘"}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${darkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-50 text-amber-600"}`}>{article.tag}</span>
                      </div>
                    </div>
                  </a>

                  {/* Action Buttons - Compact */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button
                      onClick={(e) => handleSaveEditorial(e, article.id)}
                      className={`p-1.5 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${darkMode ? "bg-gray-800/90 hover:bg-gray-700 text-gray-300" : "bg-white/90 hover:bg-white text-gray-600"} ${savedIds.has(article.id) ? "text-red-500" : ""}`}
                    >
                      <BookmarkCheck size={14} className={savedIds.has(article.id) ? "fill-current" : ""} />
                    </button>
                    <button
                      onClick={(e) => handleShareEditorial(e, article)}
                      className={`p-1.5 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${darkMode ? "bg-gray-800/90 hover:bg-gray-700 text-gray-300" : "bg-white/90 hover:bg-white text-gray-600"}`}
                    >
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}

            <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Mobile Categories - Horizontal scrollable tabs - Sticky */}
        <div className="md:hidden sticky top-[72px] z-30 -mx-4 px-4 pt-3 pb-2 backdrop-blur-xl bg-black/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            <button onClick={() => { setShowSaved(v => !v); setCategory('finance'); }} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap snap-start transition-all flex-shrink-0 ${showSaved ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
              <Star size={14} /> {showSaved ? t.allNews : t.savedNews}
              {showSaved && savedIds.size > 0 && <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px]">{savedIds.size}</span>}
            </button>
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => { setCategory(c.id); setShowSaved(false); }} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap snap-start transition-all flex-shrink-0 ${showSaved ? "" : category === c.id ? `bg-gradient-to-r ${getCategoryGradient(c.id)} text-white shadow-lg` : darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                <span className="text-base">{c.icon}</span> <span>{c.label_zh}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Data Journalism Subcategory Filter - Sticky */}
        {category === 'data_journalism' && dataJournalismSubs.length > 0 && (
          <div className="md:hidden sticky top-[116px] z-20 -mx-4 px-4 pt-2 mb-3 backdrop-blur-xl bg-black/80">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              {dataJournalismSubs.map((sub: any) => (
                <button
                  key={sub.id}
                  onClick={() => setDataJournalismSub(sub.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                    dataJournalismSub === sub.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                      : darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  <span className="text-sm">{sub.emoji}</span>
                  <span>{sub.name_zh}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${dataJournalismSub === sub.id ? "bg-white/20" : darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    {sub.sourceCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Categories */}
        <div className="hidden md:flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <button onClick={() => { setShowSaved(v => !v); setCategory('finance'); }} className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all ${showSaved ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25" : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105" : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105"}`}>
            <Star size={18} /> {showSaved ? t.allNews : t.savedNews}
            {showSaved && savedIds.size > 0 && <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">{savedIds.size}</span>}
          </button>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => { setCategory(c.id); setShowSaved(false); }} className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all hover:scale-105 ${showSaved ? "" : category === c.id ? `bg-gradient-to-r ${getCategoryGradient(c.id)} text-white shadow-lg shadow-${c.id}/25` : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}>
              <span className="text-lg">{c.icon}</span> <span className="hidden md:inline">{lang === "en" ? c.label_en : c.label_zh}</span>
            </button>
          ))}
          {/* Blog link in category bar */}
          <Link href="/blog" className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg hover:opacity-90 hover:scale-105`}>
            <BookOpen size={18} /> <span className="hidden md:inline">{lang === "en" ? "Blog" : "旅遊Blog"}</span>
            <span className="md:hidden"><BookOpen size={18} /></span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => fetchNews(false)} className={`p-3 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`} title={t.refresh}>
              <RefreshCw size={18} />
            </button>
            <button onClick={() => setAutoRefresh(v => !v)} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${autoRefresh ? "bg-green-500/20 text-green-500" : darkMode ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-400"}`}>
              {autoRefresh ? "🔄" : "⏸"} {autoRefresh ? t.autoRefresh : t.refreshOff}
            </button>
          </div>
        </div>

        {/* Data Journalism Subcategory Filter Tabs */}
        {category === 'data_journalism' && dataJournalismSubs.length > 0 && (
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${darkMode ? "bg-cyan-600 text-white" : "bg-cyan-100 text-cyan-700"}`}>
              📊 {lang === "en" ? "Subcategories" : "子分類"}
            </div>
            {dataJournalismSubs.map((sub: any) => (
              <button
                key={sub.id}
                onClick={() => setDataJournalismSub(sub.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                  dataJournalismSub === sub.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span className="text-base">{sub.emoji}</span>
                <span>{lang === "en" ? sub.name : sub.name_zh}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${dataJournalismSub === sub.id ? "bg-white/20" : darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                  {sub.sourceCount}
                </span>
              </button>
            ))}
          </div>
        )}

        {aiSummary && aiSummary.trends && aiSummary.trends.length > 0 && (
          <div className="mb-4 -mx-4 px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ${darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                🔥 {lang === "en" ? "Trending" : "熱門"}
              </span>
              {aiSummary.trends.slice(0, 8).map((trend: string) => (
                <button
                  key={trend}
                  onClick={() => {
                    setSearch(trend);
                    setShowSaved(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                    search === trend
                      ? "bg-blue-500 text-white"
                      : darkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  # {trend}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-bounce">📡</div>
            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.loading}</p>
          </div>
        )}

        {!loading && displayNews.length === 0 && (
          <div className="text-center py-20 px-4">
            <div className="text-6xl mb-4">{showSaved ? '📌' : '🔍'}</div>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {showSaved ? t.noSaved : (error ? "暫時無法載入新聞" : t.noResults)}
            </h2>
            <p className={`text-base mb-6 max-w-md mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {showSaved
                ? "您還沒有收藏任何文章"
                : "我們正在為您整理最新資訊，請瀏覽其他分類或稍後再回來"}
            </p>
            {/* SEO-friendly category suggestions */}
            {!showSaved && (
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Link href="/blog" className={`px-4 py-2 rounded-full text-sm font-medium transition ${darkMode ? "bg-teal-600 hover:bg-teal-500 text-white" : "bg-teal-100 hover:bg-teal-200 text-teal-700"}`}>
                  📖 旅遊Blog
                </Link>
                <Link href="/editorial" className={`px-4 py-2 rounded-full text-sm font-medium transition ${darkMode ? "bg-purple-600 hover:bg-purple-500 text-white" : "bg-purple-100 hover:bg-purple-200 text-purple-700"}`}>
                  📝 深度分析
                </Link>
                <Link href="/finance" className={`px-4 py-2 rounded-full text-sm font-medium transition ${darkMode ? "bg-yellow-600 hover:bg-yellow-500 text-white" : "bg-yellow-100 hover:bg-yellow-200 text-yellow-700"}`}>
                  💰 財經投資
                </Link>
                <Link href="/health" className={`px-4 py-2 rounded-full text-sm font-medium transition ${darkMode ? "bg-green-600 hover:bg-green-500 text-white" : "bg-green-100 hover:bg-green-200 text-green-700"}`}>
                  ❤️ 健康養生
                </Link>
              </div>
            )}
            {!showSaved && error && (
              <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {error} — 系統將自動嘗試恢復最新內容
              </p>
            )}
          </div>
        )}

        {!loading && displayNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 lg:gap-8 px-0 md:px-2 lg:px-0">
            {displayNews.flatMap((item, i) => {
              const isRead = readIds.has(item.title);
              const isSaved = savedIds.has(item.title);
              const details = Array.isArray(aiSummary?.details)
                ? aiSummary.details.find((d: any) => d.id === item.id)
                : null;

              const newsCard = (
                <div key={`card-${i}`} onClick={() => { toggleRead(item.title); }} className={`group relative overflow-hidden transition-all duration-300 md:rounded-3xl md:border ${darkMode ? "md:hover:border-blue-500/50" : "md:hover:border-blue-300"} ${
                  // Mobile: flat design with dividers
                  i > 0 ? 'border-b border-gray-200 dark:border-gray-800' : ''
                } ${
                  // Mobile: no shadow/bg, Desktop: card styling
                  darkMode
                    ? 'md:bg-gray-800/90 md:border-gray-700 md:shadow-xl md:hover:shadow-2xl'
                    : 'md:bg-white md:border-gray-200 md:shadow-md md:hover:shadow-xl'
                }`}>
                  {item.img_url ? (
                    <div className="relative aspect-[16/9] md:aspect-video bg-gray-900 overflow-hidden">
                      <img src={`${item.img_url}`} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {item.link && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(item.link, '_blank'); }}
                          className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
                          title="Open article"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={`aspect-video flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-100 to-purple-100"}`}>
                      <span className="text-5xl md:text-6xl opacity-30">📰</span>
                    </div>
                  )}

                  {/* Top-right action buttons (bookmark, share only) - Improved for mobile */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button onClick={e => { e.stopPropagation(); toggleSaved(item.title); }} className="p-3 rounded-xl bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center">
                      {isSaved ? <BookmarkCheck size={20} className="text-yellow-400" /> : <Bookmark size={20} />}
                    </button>
                    <button
                          onClick={e => { e.stopPropagation(); setAiInlineItem(prev => prev === item.title ? null : item.title); if(aiInlineItem !== item.title) analyzeWithAIHost(item); }}
                          className={`p-3 rounded-xl backdrop-blur-sm shadow-lg min-w-[48px] min-h-[48px] flex items-center justify-center ${aiInlineItem === item.title ? "bg-green-500 text-white" : "bg-green-500/80 text-white hover:bg-green-500"}`}
                          title={t.analysis}
                        >
                          <span className="text-lg">{aiInlineItem === item.title ? "✕" : "💬"}</span>
                    </button>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-3 md:mb-4 pt-0 md:pt-2">
                      <span className={`text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full ${darkMode ? "bg-gray-700/80 text-gray-400" : "bg-gray-100 text-gray-500"}`}>{item.source}</span>
                      {isSaved && <span className="text-lg">📌</span>}
                    </div>
                    <h3 className={`text-base md:text-lg font-bold leading-relaxed mb-3 md:mb-4 mt-0 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {item.translated && item.title_translated ? item.title_translated : item.title}
                    </h3>
                    {/* Auto-show summary - no click needed - More visible on mobile */}
                    {(item.desc_translated || item.desc) && (
                      <div className={`text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-medium ${darkMode ? "text-gray-300 bg-gray-700/50 p-3 rounded-xl" : "text-gray-600 bg-gray-100 p-3 rounded-xl"}`}>
                        <span className="text-xs font-semibold opacity-60 block mb-2">📋 摘要</span>
                        {(item.desc_translated || item.desc)}
                      </div>
                    )}
                    {/* Read More with original link - Improved for mobile */}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className={`text-sm px-4 py-2.5 rounded-xl mb-3 inline-block font-medium transition ${darkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-500 text-white hover:bg-blue-400"}`}
                      >
                        📖 {(() => { try { const u = new URL(item.link); return `${u.hostname}${u.pathname.length > 15 ? '...' : ''}` } catch { return lang === "en" ? "Read More" : "閱讀全文" } })()}
                      </a>
                    ) : (
                      <span className={`text-sm px-4 py-2.5 rounded-xl mb-3 inline-block ${darkMode ? "bg-gray-700 text-gray-500" : "bg-gray-200 text-gray-400"}`}>
                        {t.readMore}
                      </span>
                    )}

                    {/* Inline AI Discussion - Jack/Emma Style */}
                    {aiInlineItem === item.title && aiHostData && (
                      <div className={`mt-3 p-3 rounded-xl ${darkMode ? "bg-gray-800/80 border border-green-500/30" : "bg-gray-50 border border-green-200"}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm">💬</span>
                          <span className={`text-xs font-medium ${darkMode ? "text-green-400" : "text-green-600"}`}>AI Discussion</span>
                          {aiHostLoading && <span className="text-xs animate-pulse">{lang === "en" ? "Generating..." : "Generating..."}</span>}
                        </div>
                        {aiHostData.analysis && (
                          <div className="space-y-2">
                            {aiHostData.analysis.split('\n').filter((line: string) => line.trim()).slice(0, 4).map((line: string, i: number) => {
                              const isMale = line.match(/^(Jack|Analyst A|Jack:|Analyst A:)/i);
                              const isFemale = line.match(/^(Emma|Analyst B|Emma:|Analyst B:)/i);
                              const isHost = isMale || isFemale;
                              const speaker = isMale ? "Jack" : isFemale ? "Emma" : "";
                              const text = line.replace(/^(Jack|Emma|Analyst A|Analyst B)[：:]?\s*/i, "");
                              return (
                                <div key={i} className={`flex items-start gap-2 ${!isHost ? "ml-4" : ""}`}>
                                  {isHost && <span className={`text-xs font-bold w-8 ${isMale ? "text-blue-400" : "text-pink-400"}`}>{speaker}</span>}
                                  {!isHost && <span className="text-xs text-gray-500 w-8">💭</span>}
                                  <p className={`text-xs leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{text}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {aiHostData.isDemo && (
                          <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"} italic`}>AI Analysis Demo — 請配置 OPENAI_API_KEY</p>
                        )}
                      </div>
                    )}

                    {/* Card footer - Mobile friendly */}
                    <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.translated && (
                          <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">✓ 已翻譯</span>
                        )}
                        {item.translationError && (
                          <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">⚠ 翻譯失敗</span>
                        )}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{formatDate(item.pubDate)}</p>
                    </div>
                  </div>
                </div>
              );

              // Insert In-Feed Ad every 6 items (after items 6, 12, 18, etc.)
              const items: any[] = [];
              const adAfterIndex = 5; // Insert ad after 6th item (0-indexed)
              if ((i + 1) % 6 === 0 && i < displayNews.length - 1) {
                items.push(
                  newsCard,
                  <InFeedAd key={`ad-${i}`} index={i / 6} />
                );
              } else {
                items.push(newsCard);
              }
              return items;
            })}

            {/* Load More Button - Inside grid container */}
            {hasMoreNews && (
              <div className="mt-8 text-center px-4">
                <button
                  onClick={() => setDisplayCount(prev => prev + 6)}
                  className="w-full max-w-md mx-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  Load More ({allDisplayNews.length - displayCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className={`mt-12 py-10 text-center border-t ${darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"}`}>
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base font-medium">
          <Link href="/blog" className="hover:text-teal-400 transition-colors uppercase tracking-wider">📖 旅遊Blog / Travel</Link>
          <Link href="/finance" className="hover:text-yellow-400 transition-colors uppercase tracking-wider">💰 財經 / Finance</Link>
          <Link href="/health" className="hover:text-green-400 transition-colors uppercase tracking-wider">❤️ 健康 / Health</Link>
          <Link href="/food" className="hover:text-orange-400 transition-colors uppercase tracking-wider">🍜 美食 / Food</Link>
          <Link href="/ai-tools" className="hover:text-purple-400 transition-colors uppercase tracking-wider">🤖 AI工具 / AI Tools</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors uppercase tracking-wider">關於我們 / About</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors uppercase tracking-wider">聯繫我們 / Contact</Link>
        </div>
        <p className="text-base mb-3">NewsFlow · AI-Powered Global News © 2026</p>
        <p className="text-xs text-gray-600 dark:text-gray-500 max-w-2xl mx-auto px-4">
          ⚠️ 版權聲明：本網站僅使用 AI Summary新聞要點，所有新聞標題、連結及圖片版權歸各原始來源所有。我們不複製完整內容，僅供信息聚合用途。
        </p>
      </footer>
    </div>
  );
}

      