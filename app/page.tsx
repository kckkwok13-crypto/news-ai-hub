'use client'

import { useState, useEffect, useCallback } from "react";
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
type Category = "finance" | "crypto" | "business" | "technology" | "astronomy" | "mystery" | "health" | "gaming" | "food" | "travel" | "ai_art" | "art" | "data_journalism";

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
  { id: "finance", icon: "💰", color: "bg-green-500", label_zh: "財經", label_en: "Finance" },
  { id: "crypto", icon: "₿", color: "bg-orange-500", label_zh: "加密幣", label_en: "Crypto" },
  { id: "business", icon: "💼", color: "bg-purple-500", label_zh: "商業", label_en: "Business" },
  { id: "technology", icon: "🚀", color: "bg-indigo-500", label_zh: "科技", label_en: "Tech" },
  { id: "astronomy", icon: "🔭", color: "bg-violet-500", label_zh: "天文", label_en: "Astronomy" },
  { id: "mystery", icon: "🔮", color: "bg-purple-600", label_zh: "神秘學", label_en: "Mystic" },
  { id: "health", icon: "🏥", color: "bg-red-500", label_zh: "健康", label_en: "Health" },
  { id: "gaming", icon: "🎮", color: "bg-cyan-500", label_zh: "遊戲", label_en: "Gaming" },
  { id: "food", icon: "🍜", color: "bg-yellow-500", label_zh: "美食", label_en: "Food" },
  { id: "travel", icon: "✈️", color: "bg-teal-500", label_zh: "旅遊", label_en: "Travel" },
  { id: "ai_art", icon: "🤖", color: "bg-pink-500", label_zh: "AI藝術", label_en: "AI Art" },
  { id: "art", icon: "🎨", color: "bg-rose-500", label_zh: "藝術", label_en: "Art" },
  { id: "data_journalism", icon: "📊", color: "bg-cyan-600", label_zh: "數據新聞 24h熱門", label_en: "Data 24h Trending" },
];

const EDITOR_PICKS = {
  "zh-TW": {
    "sectionTitle": "📝 Editor's Pick",
    "sectionSubtitle": "Original Analysis",
    "readTime": "Reading time",
    "minutes": "min",
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
        "tag": "深度分析"
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
        "tag": "編輯觀點"
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
        "tag": "獨家評論"
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
        "tag": "深度分析"
      },
      {
        "id": "ep-5",
        "title": "穩定幣大戰：誰能笑到最後？",
        "category": "加密貨幣",
        "emoji": "🪙",
        "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
        "excerpt": "當傳統銀行、加密原生公司、科技巨頭全部湧入穩定幣賽道，這場戰爭將如何改變我們的貨幣體系？",
        "readTime": 11,
        "link": "/editorial/stablecoin-war",
        "tag": "熱門話題"
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
        "tag": "深度分析"
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
        "tag": "科技展望"
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
        "tag": "趨勢分析"
      }
    ]
  },
  "en": {
    "sectionTitle": "📝 Editor's Pick",
    "sectionSubtitle": "Original Analysis",
    "readTime": "Read time",
    "minutes": "min",
    "articles": [
      {
        "id": "ep-1",
        "title": "Bitcoin ETF Approval: Market Shift",
        "category": "Crypto",
        "emoji": "₿",
        "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
        "excerpt": "The approval of spot Bitcoin ETFs marks the dissolution of the once insurmountable gap between traditional finance and crypto.",
        "readTime": 12,
        "link": "/editorial/bitcoin-etf-deep-analysis",
        "tag": "Deep Dive"
      },
      {
        "id": "ep-2",
        "title": "Ethical Boundaries of AI News",
        "category": "Tech",
        "emoji": "🤖",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        "excerpt": "Is the soul of journalism being lost to efficiency? Exploring the ethical boundaries of AI-assisted news translation.",
        "readTime": 10,
        "link": "/editorial/ai-translation-ethics",
        "tag": "Opinion"
      }
    ]
  },
  "zh-CN": {
    "sectionTitle": "📝 编辑精选",
    "sectionSubtitle": "深度原创分析",
    "readTime": "阅读时间",
    "minutes": "分钟",
    "articles": [
      { "id": "ep-1", "title": "比特币ETF获批后：市场结构性改变", "category": "加密货币", "emoji": "₿", "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800", "excerpt": "比特币现货ETF的批准不仅是监管的胜利，更标志着传统金融与加密市场之间那道曾经不可逾越的鸿沟正在加速消亡。", "readTime": 12, "link": "/editorial/bitcoin-etf-deep-analysis", "tag": "深度分析" },
      { "id": "ep-2", "title": "AI 翻译新闻的伦理边界：平衡技术与原创", "category": "科技评论", "emoji": "🤖", "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", "excerpt": "当AI能够在数秒內将一篇外语新闻翻译成简体中文，新闻的本质是否正在被稀释？我们必须深入探讨这场技术变革。", "readTime": 10, "link": "/editorial/ai-translation-ethics", "tag": "编辑观点" },
      { "id": "ep-3", "title": "新闻App的AI分析功能：人与算法的真相博弈", "category": "科技评论", "emoji": "⚖️", "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", "excerpt": "当演算法可以瞬间总结全球新闻，“人性”与“效率”之间的取舍，究竟谁更能代表真相？", "readTime": 11, "link": "/editorial/twohumans-vs-ai-analysis", "tag": "独家评论" },
      { "id": "ep-4", "title": "全球央行数字货币竞赛：美元霸权的进化？", "category": "财经深度", "emoji": "🏦", "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800", "excerpt": "从中国的数字人民币到欧洲央行的数字欧元，各国央行正在加速布局。这场竞赛将如何重塑金融秩序？", "readTime": 10, "link": "/editorial/cbdc-global-race", "tag": "深度分析" },
      { "id": "ep-5", "title": "稳定币大战：谁能笑到最后？", "category": "加密货币", "emoji": "🪙", "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800", "excerpt": "当传统银行、加密原生公司、科技巨头全部湧入稳定币赛道，这场战争将如何改变我们的货币体系？", "readTime": 11, "link": "/editorial/stablecoin-war", "tag": "热门话题" },
      { "id": "ep-6", "title": "DeFi 深度指南：金融民主化还是泡沫？", "category": "金融科技", "emoji": "💱", "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800", "excerpt": "无需许可、无须审核、24/7 运作。DeFi 正试图将华尔街搬到区块链上，但风险同样巨大。", "readTime": 13, "link": "/editorial/decentralized-finance-guide", "tag": "深度分析" },
      { "id": "ep-7", "title": "AI 图像生成器：创意产业的毁灭者？", "category": "AI应用", "emoji": "🎨", "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", "excerpt": "当任何人都可以通过文字描述生成专业级插画，传统艺术家的价值该如何重新定义？", "readTime": 9, "link": "/editorial/ai-image-generators", "tag": "科技展望" },
      { "id": "ep-8", "title": "Web3 游戏的未来：所有权的觉醒", "category": "区块链", "emoji": "🎮", "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", "excerpt": "区块链游戏经历了暴利炒作与崩溃后，正在回归游戏的本质：好玩。玩游戏不再只是消费。", "readTime": 11, "link": "/editorial/web3-gaming-future", "tag": "趋势分析" }
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
    bias: "立場分析", impact: "深度解讀", digestTitle: "今日 AI 深度日報",
    sentimentTitle: "情緒追蹤", impactClose: "關閉解讀",
    biasTypes: { pro_western: "親西方", neutral: "中立", pro_china: "親華", optimism: "市場樂觀" },
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
    bias: "立场分析", impact: "深度解读", digestTitle: "今日 AI 深度日报",
    sentimentTitle: "情绪追踪", impactClose: "关闭解读",
    biasTypes: { pro_western: "亲西方", neutral: "中立", pro_china: "亲华", optimism: "市场乐观" },
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
    bias: "Bias Analysis", impact: "Contextual Impact", digestTitle: "Today's AI Daily Digest",
    sentimentTitle: "Sentiment Trends", impactClose: "Close Analysis",
    biasTypes: { pro_western: "Pro-Western", neutral: "Neutral", pro_china: "Pro-China", optimism: "Optimistic" },
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
  const [isTravelGuide, setIsTravelGuide] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  
  // Travel filter states
  const [travelCountryFilter, setTravelCountryFilter] = useState<string>('all');
  const [travelCityFilter, setTravelCityFilter] = useState<string>('all');
  const [travelAreaFilter, setTravelAreaFilter] = useState<string>('all');
  const [travelTypeFilter, setTravelTypeFilter] = useState<string>('all');
  const [citySummaries, setCitySummaries] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [countrySummaries, setCountrySummaries] = useState<any[]>([]);
  const [placeTypes, setPlaceTypes] = useState<string[]>([]);
  
  // Data journalism filter states
  const [dataJournalismSub, setDataJournalismSub] = useState<string>('gdp');
  const [dataJournalismSubs, setDataJournalismSubs] = useState<any[]>([]);
  const [isDataJournalism, setIsDataJournalism] = useState(false);

  // AdSense state
  const adsenseClient = typeof window !== 'undefined' 
    ? (window as any).__ADSENSE_CLIENT__ || process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-4745583996243741"
    : "ca-pub-4745583996243741";
  const adSlotLeaderboard = process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD || "YOUR_LEADERBOARD_AD_SLOT_ID";
  const adSlotInArticle = process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || "YOUR_INARTICLE_AD_SLOT_ID";
  const adSlotRectangle = process.env.NEXT_PUBLIC_AD_SLOT_RECTANGLE || "YOUR_RECTANGLE_AD_SLOT_ID";

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
    if (!isInitial || news.length === 0) {
      setLoading(true);
    }

    console.log('[fetchNews] Starting fetch, isInitial:', isInitial, 'current news count:', news.length);

    setError("")
    try {
      const url = `/api/news-feed?category=${category}&lang=${lang}&t=${Date.now()}${category === 'travel' && travelCountryFilter !== 'all' ? `&country=${travelCountryFilter}` : ''}${category === 'travel' && travelCityFilter !== 'all' ? `&city=${travelCityFilter}` : ''}${category === 'data_journalism' ? `&sub=${dataJournalismSub}` : ''}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success && data.items && data.items.length > 0) {
        console.log('[NewsFeed] Fetched', data.items.length, 'items');
        setIsTravelGuide(data.isTravelGuide || false);
        setNews(data.items);
        // Capture travel-specific data
        if (data.citySummaries) setCitySummaries(data.citySummaries);
        if (data.countries) setCountries(data.countries);
        if (data.countrySummaries) setCountrySummaries(data.countrySummaries);
        // Auto-expand first travel card when entering travel
        if (data.isTravelGuide && data.items?.length > 0) {
          setExpandedId(data.items[0].title);
        }
        if (data.placeTypes) setPlaceTypes(data.placeTypes);
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
        // No items returned, show error
        console.log('[NewsFeed] No items or error:', { success: data.success, items: data.items, error: data.error });
        setError(data.error || "No news available");
      }
    } catch (err) {
      console.error("Fetch news failed", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [category, lang, travelCountryFilter, travelCityFilter, travelAreaFilter, dataJournalismSub]);

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

  // Initial fetch on mount - separate effect to ensure it runs
  useEffect(() => {
    console.log('[Initial] Component mounted, fetching news...');
    fetchNews(true);
  }, []); // Run only on mount - fetchNews is memoized so this is safe

  // Category/lang change effect - refetch when these change
  useEffect(() => {
    // Skip on mount (handled by initial effect)
    console.log('[Category/Lang changed], fetching news...');
    fetchNews(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, lang, dataJournalismSub]); // fetchNews is memoized with these deps

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => fetchNews(false), 30000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]); // Only depend on autoRefresh

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
    // Travel hierarchical filter: country → city → area
    if (category === 'travel') {
      if (travelCountryFilter !== 'all' && n.country_id !== travelCountryFilter) return false;
      if (travelCityFilter !== 'all' && n.city_id !== travelCityFilter) return false;

    }
    if (!search) return true;
    const q = search.toLowerCase();
    return (n.title_translated || n.title).toLowerCase().includes(q) ||
           n.title.toLowerCase().includes(q) ||
           (n.desc_translated || n.desc).toLowerCase().includes(q);
  });

  const displayNews = showSaved ? filteredNews.filter(n => savedIds.has(n.title)) : filteredNews;

  // Derive available cities and areas from the news data based on selected country
  const derivedAvailableCities = travelCountryFilter !== 'all'
    ? (citySummaries || []).filter((c: any) => c.country_id === travelCountryFilter)
    : [];
  const selectedCityData = derivedAvailableCities.find((c: any) => c.id === travelCityFilter);
  const derivedAvailableAreas = selectedCityData?.areas || [];

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
        setIsTravelGuide(data.isTravelGuide || false);
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

      {/* Hero Banner - NEW */}
      <div className={`w-full overflow-hidden ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Left: Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl md:text-3xl">🌍</span>
                <h1 className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  NewsFlow
                </h1>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"}`}>
                  v2.0
                </span>
              </div>
              <p className={`text-base md:text-lg mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {lang === "en" ? "Real-time translation · AI analysis · Multi-category global news" : "Real-time translation · AI Analysis · 多元分類"}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setShowSaved(false); setCategory("finance"); }}
                  className="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition"
                >
                  💰 {lang === "en" ? "Browse News" : "開始睇新聞"}
                </button>
                <Link
                  href="/blog"
                  className="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg hover:opacity-90 transition flex items-center gap-2"
                >
                  📖 {lang === "en" ? "Travel Blog" : "旅遊Blog"}
                </Link>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex gap-4 md:gap-6 flex-shrink-0">
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>13</div>
                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{lang === "en" ? "Categories" : "分類"}</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>3</div>
                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{lang === "en" ? "Languages" : "語言"}</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold text-teal-400`}>∞</div>
                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{lang === "en" ? "Daily Updates" : "每日更新"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Deep Daily - Page Top Section (replaces modal) */}
      {aiSummary && (
        <div className={`w-full rounded-2xl p-6 mb-6 ${darkMode ? "bg-gray-900 border border-gray-700" : "bg-white shadow-lg border border-gray-200"}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse" />
            <h2 className="text-base md:text-sm font-bold uppercase tracking-widest text-blue-500">{t.digestTitle || "今日 AI 深度日報"}</h2>
          </div>
          <p className={`text-lg md:text-xl font-medium leading-relaxed ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            {lang === "en" ? aiSummary.summary_en : aiSummary.summary_zh}
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <p className="text-xs font-semibold mb-2 text-gray-500 uppercase tracking-tighter">{t.sentimentTitle || "情緒追蹤"}</p>
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex">
                <div style={{ width: `${aiSummary.sentiment?.positive || 0}%` }} className="h-full bg-green-500" />
                <div style={{ width: `${aiSummary.sentiment?.neutral || 0}%` }} className="h-full bg-gray-400" />
                <div style={{ width: `${aiSummary.sentiment?.negative || 0}%` }} className="h-full bg-red-500" />
              </div>
            </div>
          </div>

          {/* News Details List with Links */}
          {aiSummary.details && aiSummary.details.length > 0 && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <p className="text-xs font-semibold mb-3 text-gray-400 uppercase tracking-wider">{t.bias || "立場分析"} · {t.impact || "深度解讀"}</p>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {aiSummary.details.map((detail: any, idx: number) => {
                  const newsItem = displayNews.find((n: any) => n.id === detail.id) || displayNews[idx];
                  return (
                    <div key={idx} className={`p-3 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium leading-snug ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{detail.headline}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${detail.bias === "pro_western" ? "bg-blue-500/20 text-blue-400" : detail.bias === "pro_china" ? "bg-red-500/20 text-red-400" : detail.bias === "optimism" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                              {t.biasTypes[detail.bias as keyof typeof t.biasTypes] || detail.bias}
                            </span>
                            {detail.sentiment && (
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${detail.sentiment > 0 ? "bg-green-500/20 text-green-400" : detail.sentiment < 0 ? "bg-red-500/20 text-red-400" : "bg-gray-500/20 text-gray-400"}`}>
                                {detail.sentiment > 0 ? "📈" : detail.sentiment < 0 ? "📉" : "➖"}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {newsItem?.link && (
                            <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 text-xs whitespace-nowrap">
                              {t.readMore} →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Trending Topics */}
          {aiSummary.trends && aiSummary.trends.length > 0 && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <p className="text-xs font-semibold mb-3 text-gray-400 uppercase tracking-wider">{t.trend || "熱門話題"}</p>
              <div className="flex flex-wrap gap-2">
                {aiSummary.trends.slice(0, 8).map((trend: string, idx: number) => (
                  <span key={idx} className={`text-xs px-3 py-1.5 rounded-full ${darkMode ? "bg-gray-800 text-gray-300 border border-gray-700" : "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                    #{trend}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

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

      {/* Editor's Picks - Hero Card Layout */}
      {(() => {
        const ep = EDITOR_PICKS[lang];
        const heroArticle = ep.articles[0];
        const gridArticles = ep.articles.slice(1, 7);
        return (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Edit3 size={20} className="text-amber-500" />
                <h2 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{ep.sectionTitle}</h2>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-50 text-amber-600"}`}>
                {ep.sectionSubtitle}
              </span>
            </div>

            {/* Hero Card - Featured Article */}
            <a
              href={heroArticle.link}
              className={`block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group mb-4 ${darkMode ? "bg-gray-800 border border-gray-700 hover:border-amber-500/50" : "bg-white border border-gray-200 hover:border-amber-400 shadow-lg hover:shadow-amber-100"}`}
            >
              <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
                <img src={heroArticle.image} alt={heroArticle.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">{heroArticle.tag}</span>
                    <span className="text-white/80 text-sm">{heroArticle.readTime} min read</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{heroArticle.title}</h3>
                  <p className="text-white/80 text-sm md:text-base line-clamp-2 hidden md:block">{heroArticle.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-2xl">{heroArticle.emoji}</span>
                    <span className="text-white/70 text-sm">{heroArticle.category}</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Grid Layout for Remaining Articles */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gridArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  className={`block rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group ${darkMode ? "bg-gray-800 border border-gray-700 hover:border-amber-500/50" : "bg-white border border-gray-200 hover:border-amber-400 hover:shadow-amber-100"}`}
                >
                  {article.image && (
                    <div className="aspect-video bg-gradient-to-br from-amber-900/20 to-gray-900/40 relative overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">{article.emoji}</span>
                      <span className={`text-[10px] font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{article.category}</span>
                    </div>
                    <h3 className={`text-xs font-bold leading-snug mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors ${darkMode ? "text-gray-100" : "text-gray-800"}`}>{article.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-500 text-[10px] font-semibold">{article.readTime} min</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${darkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-50 text-amber-600"}`}>{article.tag}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-6 text-center">
              <a href="/editorial" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${darkMode ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" : "bg-amber-50 text-amber-600 hover:bg-amber-100"}`}>
                {lang === "en" ? "View All Editorial Articles →" : "查看所有Editor's Pick文章 →"}
              </a>
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
              <button key={c.id} onClick={() => { setCategory(c.id); setShowSaved(false); }} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap snap-start transition-all flex-shrink-0 ${showSaved ? "" : category === c.id ? `${c.color} text-white shadow-lg` : darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                <span className="text-base">{c.icon}</span> <span>{c.label_zh}</span>
              </button>
            ))}
          </div>
        </div>


        {/* Travel Country/City Filter - Mobile - Sticky */}
        {category === 'travel' && isTravelGuide && (
          <div className="md:hidden sticky top-[116px] z-20 -mx-4 px-4 pt-2 mb-3 backdrop-blur-xl bg-black/80">
            {/* Country Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              <button
                onClick={() => { setTravelCountryFilter('all'); setTravelCityFilter('all'); }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                  travelCountryFilter === 'all'
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                    : darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                <span>🌏</span><span>全部國家</span>
              </button>
              {countrySummaries.map((country: any) => (
                <button
                  key={country.id}
                  onClick={() => { setTravelCountryFilter(country.id); setTravelCityFilter('all'); }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                    travelCountryFilter === country.id
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                      : darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  <span>{country.emoji}</span><span>{country.name_zh}</span>
                </button>
              ))}
            </div>
            {/* City Selector - only show when country is selected */}
            {travelCountryFilter !== 'all' && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory mt-2">
                <button
                  onClick={() => setTravelCityFilter('all')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                    travelCityFilter === 'all'
                      ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg"
                      : darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  <span>🏙️</span><span>全部城市</span>
                </button>
                {derivedAvailableCities.map((city: any) => (
                  <button
                    key={city.id}
                    onClick={() => setTravelCityFilter(city.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap snap-start transition-all flex-shrink-0 ${
                      travelCityFilter === city.id
                        ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg"
                        : darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <span>{city.emoji}</span><span>{city.name_zh}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${travelCityFilter === city.id ? "bg-white/20" : darkMode ? "bg-gray-600" : "bg-gray-200"}`}>
                      {city.placeCount}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Travel Country/City Filter - Desktop */}
        {category === 'travel' && isTravelGuide && (
          <div className="hidden md:flex flex-col gap-3 mb-6 p-4 rounded-2xl ${darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'}">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>🌏 國家</span>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => { setTravelCountryFilter('all'); setTravelCityFilter('all'); }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    travelCountryFilter === 'all'
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                      : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <span>全部</span>
                </button>
                {countrySummaries.map((country: any) => (
                  <button
                    key={country.id}
                    onClick={() => { setTravelCountryFilter(country.id); setTravelCityFilter('all'); }}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      travelCountryFilter === country.id
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                        : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <span>{country.emoji}</span><span>{country.name_zh}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${travelCountryFilter === country.id ? "bg-white/20" : darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      {country.cityCount}城
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* City Row - only show when country selected */}
            {travelCountryFilter !== 'all' && (
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>🏙️ 城市</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setTravelCityFilter('all')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      travelCityFilter === 'all'
                        ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg"
                        : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <span>全部</span>
                  </button>
                  {derivedAvailableCities.map((city: any) => (
                    <button
                      key={city.id}
                      onClick={() => setTravelCityFilter(city.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        travelCityFilter === city.id
                          ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-white shadow-lg"
                          : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <span>{city.emoji}</span><span>{city.name_zh}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${travelCityFilter === city.id ? "bg-white/20" : darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                        {city.placeCount}地
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Blog placeholder indicator */}
            {category === 'travel' && (
              <div className={`text-xs px-3 py-2 rounded-lg ${darkMode ? 'bg-amber-900/20 text-amber-400 border border-amber-700/30' : 'bg-amber-50 text-amber-600 border border-amber-200'}`}>
                💡 Blog 功能：選擇城市後可查看/編輯旅遊blog文章
              </div>
            )}
          </div>
        )}

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
          <button onClick={() => { setShowSaved(v => !v); setCategory('finance'); }} className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all ${showSaved ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
            <Star size={18} /> {showSaved ? t.allNews : t.savedNews}
            {showSaved && savedIds.size > 0 && <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">{savedIds.size}</span>}
          </button>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => { setCategory(c.id); setShowSaved(false); }} className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all ${showSaved ? "" : category === c.id ? `${c.color} text-white shadow-lg` : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
              <span className="text-lg">{c.icon}</span> <span className="hidden md:inline">{lang === "en" ? c.label_en : c.label_zh}</span>
            </button>
          ))}
          {/* Blog link in category bar */}
          <Link href="/blog" className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-base font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg hover:opacity-90`}>
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
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{showSaved ? t.noSaved : t.noResults}</p>
            <p className={`text-sm mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>debug: news={news.length}, displayNews={displayNews.length}, showSaved={showSaved.toString()}, error={error}</p>
          </div>
        )}

        {!loading && displayNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayNews.flatMap((item, i) => {
              const isRead = readIds.has(item.title);
              const isSaved = savedIds.has(item.title);
              const details = Array.isArray(aiSummary?.details)
                ? aiSummary.details.find((d: any) => d.id === item.id)
                : null;

              const newsCard = (
                <div key={`card-${i}`} onClick={() => { toggleRead(item.title); }} className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${getCardBg(isRead)} border ${darkMode ? "hover:border-blue-500/50" : "hover:border-blue-300"}`}>
                  {isTravelGuide && item.img_url ? (
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img src={`${item.img_url}`} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3">
                        <span className="text-3xl">{item.city_emoji || '🌏'}</span>
                        <div className="ml-2">
                          <span className="text-white font-bold text-sm">{item.city || ''}</span>
                          <span className="text-gray-300 text-xs block">{item.area || ''}</span>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); if(item.link) window.open(item.link, '_blank'); }}
                          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition"
                          title="Open in Google"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </button>
                      </div>
                    </div>
                  ) : item.img_url ? (
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img src={`${item.img_url}`} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {item.link && (
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(item.link, '_blank'); }}
                          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
                          title="Open article"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className={`h-32 md:h-40 flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-100 to-purple-100"}`}>
                      <span className="text-5xl md:text-6xl opacity-30">📰</span>
                    </div>
                  )}
                  
                  {/* Top-right action buttons (bookmark, share only) */}
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <button onClick={e => { e.stopPropagation(); toggleSaved(item.title); }} className="p-2.5 rounded-xl bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm shadow-lg">
                      {isSaved ? <BookmarkCheck size={18} className="text-yellow-400" /> : <Bookmark size={18} />}
                    </button>
                    <button
                          onClick={e => { e.stopPropagation(); setAiInlineItem(prev => prev === item.title ? null : item.title); if(aiInlineItem !== item.title) analyzeWithAIHost(item); }}
                          className={`p-2.5 rounded-xl backdrop-blur-sm shadow-lg ${aiInlineItem === item.title ? "bg-green-500 text-white" : "bg-green-500/80 text-white hover:bg-green-500"}`}
                          title={t.analysis}
                        >
                          <span className="text-sm">{aiInlineItem === item.title ? "✕" : "💬"}</span>
                    </button>
                  </div>
                  
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs md:text-sm px-3 py-1 rounded-full ${darkMode ? "bg-gray-700/80 text-gray-400" : "bg-gray-100 text-gray-500"}`}>{item.source}</span>
                      {isSaved && <span className="text-sm">📌</span>}
                    </div>
                    <h3 className={`text-base md:text-lg font-bold leading-snug mb-2 line-clamp-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {item.translated && item.title_translated ? item.title_translated : item.title}
                    </h3>
                    {/* Read More with original link */}
                    {item.link ? (
                      <a 
                        href={item.link}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={e => e.stopPropagation()} 
                        className={`text-xs px-2 py-1 rounded mb-2 inline-block ${darkMode ? "bg-gray-700 text-gray-400 hover:bg-gray-600" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
                      >
                        {(() => { try { const u = new URL(item.link); return `${u.hostname}${u.pathname.length > 15 ? '...' : ''}` } catch { return t.readMore } })()}
                      </a>
                    ) : (
                      <span className={`text-xs px-2 py-1 rounded mb-2 inline-block ${darkMode ? "bg-gray-700 text-gray-500" : "bg-gray-200 text-gray-400"}`}>
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

                    {/* Expanded Travel Card - blog style */}
                    {isTravelGuide && expandedId === item.title && (
                      <div className={`p-4 rounded-xl mb-3 ${darkMode ? "bg-teal-900/30 border border-teal-600/40" : "bg-teal-50 border border-teal-200"}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{item.city_emoji || '✈️'}</span>
                          <span className={`font-bold text-sm ${darkMode ? "text-teal-400" : "text-teal-600"}`}>{item.city} · {item.area}</span>
                        </div>
                        {item.blog_content && (
                          <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{item.blog_content}</p>
                        )}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          {item.address && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">📍 地址</span>
                              <span className="opacity-80">{item.address}</span>
                            </div>
                          )}
                          {item.hours && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">🕐 營業時間</span>
                              <span className="opacity-80">{item.hours}</span>
                            </div>
                          )}
                          {item.price_range && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">💰 消費</span>
                              <span className="opacity-80">{item.price_range}</span>
                            </div>
                          )}
                          {item.rating && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">⭐ 評分</span>
                              <span className="opacity-80">{item.rating}/5.0 {item.review_count && <span className="opacity-60">({item.review_count})</span>}</span>
                            </div>
                          )}
                          {item.duration && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">⏱️ 建議遊覽</span>
                              <span className="opacity-80">{item.duration}</span>
                            </div>
                          )}
                          {item.transit && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">🚇 交通</span>
                              <span className="opacity-80">{item.transit}</span>
                            </div>
                          )}
                          {item.cost_level && (
                            <div className={`text-xs p-2.5 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}>
                              <span className="font-semibold block mb-0.5">💵 消費水平</span>
                              <span className="opacity-80">{item.cost_level === 'free' ? '免費' : item.cost_level === 'low' ? '低 ($)' : item.cost_level === 'medium' ? '中 ($$)' : item.cost_level === 'high' ? '高 ($$$)' : '豪華 ($$$$)'}</span>
                            </div>
                          )}
                        </div>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.map((tag: string, idx: number) => (
                              <span key={idx} className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-teal-800 text-teal-300" : "bg-teal-100 text-teal-600"}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {item.tips && item.tips.length > 0 && (
                          <div className={`text-xs p-3 rounded-lg mb-3 ${darkMode ? "bg-yellow-900/30 border border-yellow-700/40" : "bg-yellow-50 border border-yellow-200"}`}>
                            <span className="font-semibold block mb-2">💡 實用提示</span>
                            <ul className="space-y-1">
                              {item.tips.map((tip: string, idx: number) => (
                                <li key={idx} className="opacity-80">• {tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.type && (
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-teal-800 text-teal-300" : "bg-teal-100 text-teal-600"}`}>
                              {item.type === 'attraction' ? '🗺️ 景點' : item.type === 'food' ? '🍜 美食' : item.type === 'activity' ? '🎯 活動' : '🛍️ 購物'}
                            </span>
                          </div>
                        )}
                        {item.blog_content && (
                          <a 
                            href={item.blog_slug ? `/blog/${item.blog_slug}` : '#'}
                            onClick={e => { if (!item.blog_slug) e.preventDefault(); }}
                            className="mt-3 w-full py-2.5 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white"
                          >
                            📖 閱讀完整Blog →
                          </a>
                        )}
                      </div>
                    )}

                    {/* Card content */}
                    <div className="mt-3 flex items-center gap-2">
                      {item.source && (
                        <span className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium ${darkMode ? "bg-gray-700/60 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                          {item.source}
                        </span>
                      )}
                      {item.translated && (
                        <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">✓ Translated</span>
                      )}
                      {item.translationError && (
                        <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">⚠ Translation failed</span>
                      )}
                    </div>

                    <p className={`text-xs md:text-sm mt-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{formatDate(item.pubDate)}</p>
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
          </div>
        )}

        {/* Mobile Travel Blog CTA - shown when no travel news */}
        {category === 'travel' && displayNews.length === 0 && !loading && (
          <div className={`w-full rounded-2xl p-8 text-center ${darkMode ? "bg-gray-900 border border-gray-700" : "bg-white shadow-lg border border-gray-200"}`}>
            <div className="text-5xl mb-4">✈️</div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {lang === "en" ? "Explore Travel Destinations" : "探索全球旅遊目的地"}
            </h3>
            <p className={`text-base mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {lang === "en" ? "Discover travel guides, city blogs, and insider tips" : "發掘旅遊指南、城市Blog及實用資訊"}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold hover:opacity-90 transition"
            >
              📖 {lang === "en" ? "Visit Travel Blog" : "前往旅遊Blog"}
            </Link>
          </div>
        )}
      </main>

      <footer className={`mt-12 py-10 text-center border-t ${darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"}`}>
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base font-medium">
          <Link href="/blog" className="hover:text-teal-400 transition-colors uppercase tracking-wider">📖 旅遊Blog / Travel</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors uppercase tracking-wider">關於我們 / About</Link>
          <Link href="/editorial-policy" className="hover:text-blue-500 transition-colors uppercase tracking-wider">編輯政策 / Editorial</Link>
          <Link href="/privacy" className="hover:text-blue-500 transition-colors uppercase tracking-wider">隱私政策 / Privacy</Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors uppercase tracking-wider">服務條款 / Terms</Link>
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

      