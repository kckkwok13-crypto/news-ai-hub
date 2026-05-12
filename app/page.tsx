'use client'

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Globe, BookOpen, Sun, Moon, Star, Search, Bell, Mail, X, ChevronDown, RefreshCw, ExternalLink, Bookmark, BookmarkCheck, Share2, TrendingUp, Zap, Menu, Play, Pause } from "lucide-react";

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

const LABELS = {
  "zh-TW": {
    title: "NewsFlow 全球資訊", subtitle: "即時翻譯 · AI 分析 · 多元分類",
    searchPlaceholder: "搜尋新聞...", loading: "載入緊...", noResults: "冇新聞",
    saved: "已經儲起咗", removed: "已移除", copied: "已複製連結", read: "睇下",
    darkOn: "深色模式", darkOff: "淺色模式",
    subscribe: "Email 訂閱", subscribeTitle: "每日精選摘要", subscribeDesc: "每天定時收到重點新聞摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即訂閱",
    subscribeSuccess: "訂閱成功咗！", subscribeError: "請輸入有效 Email",
    refresh: "刷新", autoRefresh: "自動刷新", refreshOff: "關閉自動刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI 摘要載入緊...", keyAlert: "沒有 API Key，無法使用 AI 功能",
    trend: "熱門話題", related: "相關新聞",
    categories: {
      finance: "財經", crypto: "加密幣", business: "商業", technology: "科技",
      health: "健康", gaming: "遊戲", food: "美食", travel: "旅遊",
      ai: "AI藝術", art: "藝術", astronomy: "天文", mystery: "神秘學", data_journalism: "數據新聞 24h熱門"
    },
    bias: "立場分析", impact: "深度解讀", digestTitle: "今日 AI 深度日報",
    sentimentTitle: "情緒追蹤", impactClose: "關閉解讀",
    biasTypes: { pro_western: "親西方", neutral: "中立", pro_china: "親華", optimism: "市場樂觀" },
    menu: "目錄", close: "關閉", all: "全部", analysis: "AI 分析",
    savedNews: "收藏", allNews: "全部", source: "來源",
    readMore: "閱讀更多", noSaved: "還沒有收藏的新聞", clearSaved: "清除全部",
    langChanged: "語言已切換",
    shareSuccess: "分享成功", emailRequired: "請輸入 Email 地址"
  },
  "zh-CN": {
    title: "NewsFlow 全球资讯", subtitle: "即时翻译 · AI 分析 · 多元分类",
    searchPlaceholder: "搜索新闻...", loading: "载入中...", noResults: "没有找到新闻",
    saved: "已收藏", removed: "已移除", copied: "已复制链接", read: "已读",
    darkOn: "浅色模式", darkOff: "深色模式",
    subscribe: "Email 订阅", subscribeTitle: "每日精选摘要", subscribeDesc: "每天定时收到重点新闻摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即订阅",
    subscribeSuccess: "订阅成功！", subscribeError: "请输入有效 Email",
    refresh: "刷新", autoRefresh: "自动刷新", refreshOff: "关闭自动刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI 摘要载入中...", keyAlert: "没有 API Key，无法使用 AI 功能",
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
    menu: "目录", close: "关闭", all: "全部", analysis: "AI 分析"
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
    aiSummary: "AI Summary", noSummary: "AI Summary loading...", keyAlert: "No API Key, AI features unavailable",
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
  const [showImpactId, setShowImpactId] = useState<string | null>(null);
  
  // Travel filter states
  const [travelCityFilter, setTravelCityFilter] = useState<string>('all');
  const [travelTypeFilter, setTravelTypeFilter] = useState<string>('all');
  const [citySummaries, setCitySummaries] = useState<any[]>([]);
  const [placeTypes, setPlaceTypes] = useState<string[]>([]);

  // AdSense state
  const adsenseClient = typeof window !== 'undefined' 
    ? (window as any).__ADSENSE_CLIENT__ || process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-4745583996243741"
    : "ca-pub-4745583996243741";
  const adSlotLeaderboard = "1234567890"; // Replace with your actual ad slot ID
  const adSlotInArticle = "0987654321";  // Replace with your actual ad slot ID

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
    if (isInitial && news.length > 0) {
    } else {
      setLoading(true);
    }
    
    // Clear cache before fetching to ensure fresh data
    try {
      localStorage.removeItem(`news_cache_${category}_${lang}`);
    } catch (e) {}
    
    setError("")
    try {
      const url = `/api/news-feed?category=${category}&lang=${lang}&t=${Date.now()}${category === 'travel' && travelCityFilter !== 'all' ? `&city=${travelCityFilter}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success && data.items) {
        setIsTravelGuide(data.isTravelGuide || false);
        setNews(data.items);
        // Capture travel-specific data
        if (data.citySummaries) setCitySummaries(data.citySummaries);
        if (data.placeTypes) setPlaceTypes(data.placeTypes);
        localStorage.setItem(`news_cache_${category}_${lang}`, JSON.stringify(data.items));
      } else {
        if (news.length === 0) setNews([]);
        setError(data.error || "Failed to load news");
      }
    } catch (err) {
      console.error("Fetch news failed", err);
      if (news.length === 0) setError("Network error");
    } finally {
      setLoading(false);
    }
  }, [category, lang, news.length, travelCityFilter]);

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

  useEffect(() => {
    fetchNews(true);
    if (autoRefresh) {
      const interval = setInterval(() => fetchNews(false), 120000);
      return () => clearInterval(interval);
    }
  }, [category, autoRefresh, lang]);

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

  const filteredNews = news.filter(n => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (n.title_translated || n.title).toLowerCase().includes(q) ||
           n.title.toLowerCase().includes(q) ||
           (n.desc_translated || n.desc).toLowerCase().includes(q);
  });

  const displayNews = showSaved ? filteredNews.filter(n => savedIds.has(n.title)) : filteredNews;

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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-950" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`}>
      {toast && (
        <div className="fixed top-4 right-4 z-[100] px-5 py-3 rounded-2xl shadow-2xl text-base font-medium bg-black/90 text-white/90 backdrop-blur-sm animate-fade-in">
          {toast}
        </div>
      )}

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

      {showSubscribe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSubscribe(false)}>
          <div className={`w-full max-w-md rounded-3xl p-8 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">{t.subscribeTitle}</h3>
              <button onClick={() => setShowSubscribe(false)} className={`p-2 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}><X size={20} /></button>
            </div>
            <p className={`text-base mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.subscribeDesc}</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input type="email" value={subscribeEmail} onChange={e => setSubscribeEmail(e.target.value)} placeholder={t.emailPlaceholder} className={`w-full px-5 py-4 rounded-2xl text-base outline-none ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-50 border border-gray-200"}`} />
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl text-base font-bold hover:opacity-90">{t.subscribeBtn}</button>
            </form>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-6">
        {aiSummary && (
          <div className={`mb-8 p-6 md:p-8 rounded-3xl ${darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white shadow-xl"} border relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <BookOpen size={80} />
            </div>
            <div className="relative z-10">
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
                <div className="flex flex-wrap gap-2">
                  {aiSummary.trends?.map((trend: string) => (
                    <span key={trend} className={`px-4 py-1.5 rounded-full text-sm font-bold ${darkMode ? "bg-blue-900/40 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
                      # {trend}
                    </span>
                  ))}
                </div>
              </div>
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
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => fetchNews(false)} className={`p-3 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`} title={t.refresh}>
              <RefreshCw size={18} />
            </button>
            <button onClick={() => setAutoRefresh(v => !v)} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${autoRefresh ? "bg-green-500/20 text-green-500" : darkMode ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-400"}`}>
              {autoRefresh ? "🔄" : "⏸"} {autoRefresh ? t.autoRefresh : t.refreshOff}
            </button>
          </div>
        </div>

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
          </div>
        )}

        {!loading && displayNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayNews.map((item, i) => {
              const isRead = readIds.has(item.title);
              const isSaved = savedIds.has(item.title);
              const details = Array.isArray(aiSummary?.details) 
                ? aiSummary.details.find((d: any) => d.id === item.id)
                : null;

              return (
                <div key={i} onClick={() => toggleRead(item.title)} className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${getCardBg(isRead)} border ${darkMode ? "hover:border-blue-500/50" : "hover:border-blue-300"}`}>
                  {isTravelGuide && item.img_url ? (
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img src={`${item.img_url}`} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3">
                        <span className="text-3xl">{item.city_emoji || '🌏'}</span>
                        <div className="ml-2">
                          <span className="text-white font-bold text-sm">{item.city || ''}</span>
                          <span className="text-gray-300 text-xs block">{item.area || ''}</span>
                        </div>
                      </div>
                    </div>
                  ) : item.img_url ? (
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img src={`${item.img_url}`} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  ) : (
                    <div className={`h-32 md:h-40 flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-100 to-purple-100"}`}>
                      <span className="text-5xl md:text-6xl opacity-30">📰</span>
                    </div>
                  )}
                  
                  {/* Always visible on mobile */}
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <button onClick={e => { e.stopPropagation(); analyzeWithAIHost(item); }} className="p-2.5 rounded-xl bg-purple-500/90 text-white hover:bg-purple-500 backdrop-blur-sm shadow-lg" title={t.analysis}>
                      <Zap size={18} />
                    </button>
                    <button onClick={e => { e.stopPropagation(); toggleSaved(item.title); }} className="p-2.5 rounded-xl bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm shadow-lg">
                      {isSaved ? <BookmarkCheck size={18} className="text-yellow-400" /> : <Bookmark size={18} />}
                    </button>
                    <button onClick={e => { e.stopPropagation(); shareNews(item); }} className="p-2.5 rounded-xl bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm shadow-lg">
                      <Share2 size={18} />
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
                    <a 
                      href={item.link || `https://www.google.com/search?q=${encodeURIComponent(item.title_translated || item.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={e => e.stopPropagation()} 
                      className={`text-xs px-2 py-1 rounded mb-2 inline-block ${darkMode ? "bg-gray-700 text-gray-400 hover:bg-gray-600" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
                    >
                      {t.readMore}
                    </a>
                    
                    {details && (
                      <div className={`p-3 rounded-xl mb-3 ${darkMode ? "bg-blue-900/30 border border-blue-700/50" : "bg-blue-50 border border-blue-200"}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-blue-500">🤖 {t.analysis}</span>
                        </div>
                        <p className={`text-xs leading-relaxed line-clamp-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {item.translated && item.desc_translated ? item.desc_translated : item.desc}
                        </p>
                        <button onClick={e => { e.stopPropagation(); setShowImpactId(item.id); }} className={`mt-3 w-full py-2.5 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 ${darkMode ? "bg-blue-900/40 text-blue-400 hover:bg-blue-900/60" : "bg-blue-100 text-blue-600 hover:bg-blue-200"}`}>
                          <Zap size={16} /> {t.impact || "深度解讀"}
                        </button>
                      </div>
                    )}

                    {showImpactId === item.id && (
                      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setShowImpactId(null)}>
                        <div className={`max-w-md w-full p-8 rounded-3xl shadow-2xl ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`} onClick={e => e.stopPropagation()}>
                          <div className="text-blue-500 mb-4"><Zap size={40} /></div>
                          <h4 className="text-xl font-bold mb-4">{t.impact || "深度解讀"}</h4>
                          <p className={`text-base leading-relaxed mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {details?.impact}
                          </p>
                          <button onClick={() => setShowImpactId(null)} className="w-full py-4 bg-blue-600 text-white rounded-2xl text-lg font-bold hover:bg-blue-500 transition">
                            {t.impactClose || "關閉解讀"}
                          </button>
                        </div>
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
                      </div>
                    )}

                    <p className={`text-xs md:text-sm mt-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{formatDate(item.pubDate)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {aiHostItem && (
          <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-t from-purple-950/98 to-purple-900/95 backdrop-blur-xl border-t border-purple-500/30 p-6 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    🤖 {t.analysis}
                    {aiHostData?.isDemo && <span className="text-xs bg-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full">示範模式</span>}
                  </h3>
                  <p className="text-sm text-purple-200 mt-1 line-clamp-1">
                    {aiHostItem.title_translated || aiHostItem.title}
                  </p>
                </div>
                <button 
                  onClick={() => { setAiHostItem(null); setAiHostData(null); setAiHostError(""); }} 
                  className="text-gray-300 hover:text-white p-3 rounded-xl bg-gray-800"
                >
                  <X size={20} />
                </button>
              </div>
              
              {aiHostLoading ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-300"></div>
                  <span className="mt-4 text-lg text-purple-200">AI 分析緊...</span>
                  <span className="text-sm text-purple-300 mt-1">大約需要 10-20 秒</span>
                </div>
              ) : aiHostError ? (
                <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-5">
                  <p className="text-red-200 mb-4 text-lg">❌ {aiHostError}</p>
                  <button 
                    onClick={() => analyzeWithAIHost(aiHostItem)}
                    className="px-5 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 flex items-center gap-2 transition text-base font-medium"
                  >
                    <RefreshCw size={18} /> 重試
                  </button>
                </div>
              ) : aiHostData ? (
                <>
                  <div className="bg-black/40 rounded-2xl p-5 mb-5 max-h-[50vh] overflow-y-auto">
                    <div className="text-white leading-relaxed whitespace-pre-wrap text-base">
                      {aiHostData.analysis?.split('\n').map((line: string, i: number) => {
                        const isMale = line.startsWith('阿傑:') || line.startsWith('Jack:');
                        const isFemale = line.startsWith('小婷:') || line.startsWith('Emma:');
                        return (
                          <p key={i} className={`mb-3 ${isMale ? 'text-blue-300' : isFemale ? 'text-pink-300' : 'text-white'}`}>
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <button 
                    onClick={() => { setAiHostItem(null); setAiHostData(null); }} 
                    className="w-full py-4 bg-purple-500 text-white rounded-2xl text-lg font-bold hover:bg-purple-600 transition"
                  >
                    {lang === 'en' ? 'Close' : '關閉'}
                  </button>
                </>
              ) : null}
            </div>
          </div>
        )}
      </main>

      <footer className={`mt-12 py-10 text-center border-t ${darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"}`}>
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base font-medium">
          <Link href="/about" className="hover:text-blue-500 transition-colors uppercase tracking-wider">關於我們 / About</Link>
          <Link href="/privacy" className="hover:text-blue-500 transition-colors uppercase tracking-wider">隱私政策 / Privacy</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors uppercase tracking-wider">聯繫我們 / Contact</Link>
        </div>
        <p className="text-base mb-3">NewsFlow · AI-Powered Global News © 2026</p>
        <p className="text-xs text-gray-600 dark:text-gray-500 max-w-2xl mx-auto px-4">
          ⚠️ 版權聲明：本網站僅使用 AI 摘要新聞要點，所有新聞標題、連結及圖片版權歸各原始來源所有。我們不複製完整內容，僅供信息聚合用途。
        </p>
      </footer>

      {/* AdSense Leaderboard Banner - Header Below */}
      <div className="w-full flex justify-center py-3">
        <div className="w-full max-w-[728px] h-[90px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '728px', height: '90px' }}
            data-ad-client={adsenseClient}
            data-ad-slot={adSlotLeaderboard}
            data-ad-format="horizontal"
          />
        </div>
      </div>

      {/* AdSense In-Feed Ads - Between News Cards */}
      <div className="w-full max-w-6xl mx-auto px-4 my-6">
        <div className="w-full h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '250px' }}
            data-ad-client={adsenseClient}
            data-ad-slot={adSlotInArticle}
            data-ad-format="in-article"
          />
        </div>
      </div>

      {/* AdSense Rectangle - Sidebar / Mobile Banner */}
      <div className="w-full flex justify-center py-3">
        <div className="w-full max-w-[336px] h-[280px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '336px', height: '280px' }}
            data-ad-client={adsenseClient}
            data-ad-slot={adSlotInArticle}
            data-ad-format="rectangle"
          />
        </div>
      </div>
    </div>
  );
}