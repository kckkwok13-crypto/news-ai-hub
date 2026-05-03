'use client'

import { useState, useEffect, useCallback, useRef } from "react";
import { Globe, BookOpen, Sun, Moon, Star, Search, Bell, Mail, X, ChevronDown, RefreshCw, Volume2, VolumeX, ExternalLink, Bookmark, BookmarkCheck, Share2, TrendingUp } from "lucide-react";

type Lang = "zh-TW" | "zh-CN" | "en";
type Category = "world" | "finance" | "crypto" | "hk" | "tw" | "china" | "business" | "technology";

interface NewsItem {
  title: string; title_zh: string; desc: string; desc_zh: string; link: string;
  pubDate: string; source: string; img: boolean; img_url: string;
  translated: boolean; translationError?: string;
}

const LANG_OPTIONS = [
  { id: "zh-TW" as Lang, label: "繁體", flag: "🇭🇰" },
  { id: "zh-CN" as Lang, label: "简体", flag: "🇨🇳" },
  { id: "en" as Lang, label: "English", flag: "🇺🇸" },
];

const CATEGORIES: { id: Category; icon: string; color: string }[] = [
  { id: "world", icon: "🌍", color: "bg-blue-500" },
  { id: "finance", icon: "💰", color: "bg-green-500" },
  { id: "crypto", icon: "₿", color: "bg-orange-500" },
  { id: "hk", icon: "🇭🇰", color: "bg-red-500" },
  { id: "tw", icon: "🌴", color: "bg-blue-400" },
  { id: "china", icon: "🐉", color: "bg-yellow-500" },
  { id: "business", icon: "💼", color: "bg-purple-500" },
  { id: "technology", icon: "🚀", color: "bg-indigo-500" },
];

const LABELS = {
  "zh-TW": {
    title: "NewsFlow 全球資訊", subtitle: "即時翻譯 · AI 分析 · 多元分類",
    searchPlaceholder: "搜尋新聞...", loading: "載入中...", noResults: "沒有找到新聞",
    saved: "已收藏", removed: "已移除", copied: "已複製連結", read: "已讀",
    darkOn: "深色模式", darkOff: "淺色模式",
    subscribe: "Email 訂閱", subscribeTitle: "每日精選摘要", subscribeDesc: "每天定時收到重點新聞摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即訂閱",
    subscribeSuccess: "訂閱成功！", subscribeError: "請輸入有效 Email",
    refresh: "刷新", autoRefresh: "自動刷新", refreshOff: "關閉自動刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI 摘要載入中...", keyAlert: "沒有 API Key，無法使用 AI 功能",
    trend: "熱門話題", related: "相關新聞",
    categories: {
      world: "國際", finance: "財經", crypto: "加密幣", hk: "香港", tw: "台灣", china: "中國", business: "商業", technology: "科技"
    },
    savedNews: "收藏", allNews: "全部", source: "來源",
    readMore: "閱讀更多", noSaved: "還沒有收藏的新聞", clearSaved: "清除全部",
    langChanged: "語言已切換", ttsOn: "朗讀中", ttsOff: "已停止朗讀",
    shareSuccess: "分享成功", emailRequired: "請輸入 Email 地址",
  },
  "zh-CN": {
    title: "NewsFlow 全球资讯", subtitle: "即时翻译 · AI 分析 · 多元分类",
    searchPlaceholder: "搜索新闻...", loading: "载入中...", noResults: "没有找到新闻",
    saved: "已收藏", removed: "已移除", copied: "已复制链接", read: "已读",
    darkOn: "深色模式", darkOff: "浅色模式",
    subscribe: "Email 订阅", subscribeTitle: "每日精选摘要", subscribeDesc: "每天定时收到重点新闻摘要",
    emailPlaceholder: "你的 Email", subscribeBtn: "立即订阅",
    subscribeSuccess: "订阅成功！", subscribeError: "请输入有效 Email",
    refresh: "刷新", autoRefresh: "自动刷新", refreshOff: "关闭自动刷新",
    aiSummary: "AI 智能摘要", noSummary: "AI 摘要载入中...", keyAlert: "没有 API Key，无法使用 AI 功能",
    trend: "热门话题", related: "相关新闻",
    categories: {
      world: "国际", finance: "财经", crypto: "加密币", hk: "香港", tw: "台湾", china: "中国", business: "商业", technology: "科技"
    },
    savedNews: "收藏", allNews: "全部", source: "来源",
    readMore: "阅读更多", noSaved: "还没有收藏的新闻", clearSaved: "清除全部",
    langChanged: "语言已切换", ttsOn: "朗读中", ttsOff: "已停止朗读",
    shareSuccess: "分享成功", emailRequired: "请输入 Email 地址",
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
      world: "World", finance: "Finance", crypto: "Crypto", hk: "Hong Kong", tw: "Taiwan", china: "China", business: "Business", technology: "Tech"
    },
    savedNews: "Saved", allNews: "All", source: "Source",
    readMore: "Read More", noSaved: "No saved news yet", clearSaved: "Clear All",
    langChanged: "Language changed", ttsOn: "Playing", ttsOff: "Stopped",
    shareSuccess: "Share success", emailRequired: "Please enter email address",
  },
};

export default function NewsPage() {
  const [lang, setLang] = useState<Lang>("zh-TW");
  const [darkMode, setDarkMode] = useState(true);
  const [category, setCategory] = useState<Category>("world");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [showSaved, setShowSaved] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [toast, setToast] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiSummary, setAiSummary] = useState<any>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const t = LABELS[lang];

  const speak = useCallback((item: NewsItem) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const text = lang === "en" ? item.title : (item.title_zh || item.title);
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang === "en" ? "en-US" : "zh-TW";
    utt.rate = 1;
    utt.onend = () => setSpeakingId(null);
    utt.onerror = () => setSpeakingId(null);
    speechRef.current = utt;
    setSpeakingId(item.title);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utt);
  }, [lang]);

  const stopSpeak = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeakingId(null);
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("savedNews");
    if (saved) setSavedIds(new Set(JSON.parse(saved)));
    const dark = localStorage.getItem("darkMode");
    if (dark) setDarkMode(dark === "true");
    const savedLang = localStorage.getItem("newsLang") as Lang;
    if (savedLang && ["zh-TW", "zh-CN", "en"].includes(savedLang)) setLang(savedLang);
  }, []);

  useEffect(() => {
    if (savedIds.size > 0) {
      localStorage.setItem("savedNews", JSON.stringify([...savedIds]));
    }
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("newsLang", lang);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchNews();
    if (autoRefresh) {
      const interval = setInterval(fetchNews, 300000);
      return () => clearInterval(interval);
    }
  }, [category, autoRefresh, lang]);

  useEffect(() => {
    if (news.length > 0) {
      fetchAiSummary();
    }
  }, [news.length, lang]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchNews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/news-feed?category=${category}&lang=${lang}`);
      const data = await res.json();
      if (data.success && data.items) {
        setNews(data.items);
      } else {
        setNews([]);
      }
    } catch {
      setError("Failed to load news");
    }
    setLoading(false);
  };

  const fetchAiSummary = async () => {
    setSummaryLoading(true);
    try {
      const visibleNews = showSaved
        ? news.filter(n => savedIds.has(n.title))
        : news;
      const toAnalyze = visibleNews.slice(0, 5);
      if (toAnalyze.length === 0) return;
      const body = {
        items: toAnalyze.map(n => ({
          title: n.title,
          title_zh: n.title_zh || n.title,
          desc: n.desc || "",
          desc_zh: n.desc_zh || "",
          source: n.source,
        })),
        lang,
      };
      const res = await fetch("/api/ai-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) setAiSummary(data);
    } catch { /* silent */ }
    setSummaryLoading(false);
  };

  const toggleSaved = (title: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(title)) { next.delete(title); setToast(t.removed); }
      else { next.add(title); setToast(t.saved); }
      return next;
    });
  };

  const toggleRead = (title: string) => {
    setReadIds(prev => { const next = new Set(prev); next.add(title); return next; });
    setExpandedId(title === expandedId ? null : title);
  };

  const shareNews = (item: NewsItem) => {
    if (navigator.share) {
      navigator.share({ title: item.title_zh || item.title, url: item.link });
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
    return (n.title_zh || n.title).toLowerCase().includes(q) ||
           n.title.toLowerCase().includes(q) ||
           (n.desc_zh || n.desc).toLowerCase().includes(q);
  });

  const displayNews = showSaved ? filteredNews.filter(n => savedIds.has(n.title)) : filteredNews;

  const getCardBg = (isRead: boolean) => {
    if (darkMode) return isRead ? "bg-gray-900/50 border-gray-700" : "bg-gray-800/90 border-gray-700";
    return isRead ? "bg-gray-100 border-gray-200" : "bg-white border-gray-200";
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-950" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`}>
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-2 rounded-xl shadow-lg text-sm font-medium bg-black/80 text-white/90 backdrop-blur-sm animate-fade-in">
          {toast}
        </div>
      )}

      {/* Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl ${darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"} border-b`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">NewsFlow</span>
              </div>
              <div className="hidden sm:block">
                <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{currentTime.toLocaleTimeString(lang === "en" ? "en-US" : lang === "zh-CN" ? "zh-CN" : "zh-TW", { hour: "2-digit", minute: "2-digit" })}</p>
                <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{currentTime.toLocaleDateString(lang === "en" ? "en-US" : lang === "zh-CN" ? "zh-CN" : "zh-TW", { weekday: "short", month: "short", day: "numeric" })}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Search Toggle */}
              <button onClick={() => setShowSearch(v => !v)} className={`p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-600"}`}>
                <Search size={18} />
              </button>

              {/* Dark Mode */}
              <button onClick={() => setDarkMode(v => !v)} className={`p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-yellow-400" : "hover:bg-gray-100 text-gray-600"}`}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Saved */}
              <button onClick={() => { setShowSaved(v => !v); setShowSaved ? fetchAiSummary() : null; }} className={`p-2 rounded-xl transition ${showSaved ? "bg-blue-500 text-white" : darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-600"}`}>
                <Bookmark size={18} />
              </button>

              {/* Subscribe */}
              <button onClick={() => setShowSubscribe(true)} className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${darkMode ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"}`}>
                📬 {t.subscribe}
              </button>

              {/* Language */}
              <div className="relative">
                <button onClick={() => setShowLangMenu(v => !v)} className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-medium transition ${darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {LANG_OPTIONS.find(l => l.id === lang)?.flag} {LANG_OPTIONS.find(l => l.id === lang)?.label} <ChevronDown size={12} />
                </button>
                {showLangMenu && (
                  <div className={`absolute right-0 mt-1 py-1 rounded-xl shadow-xl z-50 min-w-[120px] ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}>
                    {LANG_OPTIONS.map(l => (
                      <button key={l.id} onClick={() => { setLang(l.id); setShowLangMenu(false); setToast(t.langChanged); }} className={`w-full text-left px-3 py-2 text-sm hover:bg-opacity-50 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} ${lang === l.id ? (darkMode ? "text-blue-400" : "text-blue-600") : ""}`}>
                        {l.flag} {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mt-3 relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} size={16} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.searchPlaceholder} className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition ${darkMode ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500" : "bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-blue-400"}`} />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2"><X size={14} className={darkMode ? "text-gray-500" : "text-gray-400"} /></button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Subscribe Modal */}
      {showSubscribe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSubscribe(false)}>
          <div className={`w-full max-w-md rounded-2xl p-6 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{t.subscribeTitle}</h3>
              <button onClick={() => setShowSubscribe(false)}><X size={20} /></button>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.subscribeDesc}</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" value={subscribeEmail} onChange={e => setSubscribeEmail(e.target.value)} placeholder={t.emailPlaceholder} className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-50 border border-gray-200"}`} />
              <button type="submit" className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:opacity-90">{t.subscribeBtn}</button>
            </form>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* AI Summary */}
        {(summaryLoading || aiSummary) && (
          <div className={`mb-6 rounded-2xl p-5 ${darkMode ? "bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-800/50" : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"}`}>
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">🧠</span> {t.aiSummary}
              {summaryLoading && <span className="text-xs animate-pulse">...</span>}
            </h3>
            {aiSummary && (
              <div className="space-y-3">
                {aiSummary.summary_zh && <p className="text-sm leading-relaxed">{aiSummary.summary_zh}</p>}
                {aiSummary.summary_en && lang === "en" && <p className="text-sm leading-relaxed">{aiSummary.summary_en}</p>}
                {aiSummary.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {aiSummary.categories.map((c: string) => (
                      <span key={c} className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-indigo-800/60 text-indigo-300" : "bg-blue-100 text-blue-700"}`}>{c}</span>
                    ))}
                  </div>
                )}
                {aiSummary.highlights?.length > 0 && (
                  <div className="mt-2">
                    <span className="text-xs font-medium opacity-60">{t.trend}: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {aiSummary.highlights.map((h: string, i: number) => (
                        <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? "bg-yellow-900/40 text-yellow-400" : "bg-yellow-100 text-yellow-700"}`}>🔥 {h}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => { setCategory(c.id); setShowSaved(false); }} className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap transition-all ${showSaved ? "" : category === c.id ? `${c.color} text-white shadow-lg` : darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
              <span>{c.icon}</span> {(t.categories as any)[c.id] || c.id}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1.5">
            <button onClick={fetchNews} className={`p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`} title={t.refresh}>
              <RefreshCw size={16} />
            </button>
            <button onClick={() => setAutoRefresh(v => !v)} className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${autoRefresh ? "bg-green-500/20 text-green-500" : darkMode ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-400"}`}>
              {autoRefresh ? "🔄" : "⏸"} {autoRefresh ? t.autoRefresh : t.refreshOff}
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 animate-bounce">📡</div>
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>{t.loading}</p>
          </div>
        )}

        {/* No Results */}
        {!loading && displayNews.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>{t.noResults}</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && displayNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayNews.map((item, i) => {
              const isRead = readIds.has(item.title);
              const isSaved = savedIds.has(item.title);
              const isSpeakingThis = speakingId === item.title;
              return (
                <div key={i} onClick={() => toggleRead(item.title)} className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getCardBg(isRead)} border ${darkMode ? "hover:border-blue-600" : "hover:border-blue-300"}`}>
                  {/* Image */}
                  {item.img && item.img_url ? (
                    <div className="relative h-44 overflow-hidden">
                      <img src={item.img_url} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  ) : (
                    <div className={`h-32 flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-100 to-purple-100"}`}>
                      <span className="text-5xl opacity-30">📰</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={e => { e.stopPropagation(); speak(item); }} className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm" title={lang === "en" ? "Read aloud" : "朗讀"}>
                      {isSpeakingThis ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <button onClick={e => { e.stopPropagation(); toggleSaved(item.title); }} className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm">
                      {isSaved ? <BookmarkCheck size={14} className="text-yellow-400" /> : <Bookmark size={14} />}
                    </button>
                    <button onClick={e => { e.stopPropagation(); shareNews(item); }} className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm">
                      <Share2 size={14} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"}`}>{item.source}</span>
                      {isSaved && <span className="text-xs">📌</span>}
                    </div>

                    <h3 className={`text-sm font-semibold leading-snug mb-2 line-clamp-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {lang === "en" ? item.title : (item.title_zh || item.title)}
                    </h3>

                    {item.desc && (
                      <p className={`text-xs leading-relaxed line-clamp-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {lang === "en" ? item.desc : (item.desc_zh || item.desc)}
                      </p>
                    )}

                    {/* Expanded */}
                    {expandedId === item.title && (
                      <div className="mt-3 pt-3 border-t border-gray-700/50">
                        {item.desc && (
                          <p className={`text-xs leading-relaxed mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {lang === "en" ? item.desc : (item.desc_zh || item.desc)}
                          </p>
                        )}
                        <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition ${darkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-500 text-white hover:bg-blue-400"}`}>
                          {t.readMore} <ExternalLink size={12} />
                        </a>
                      </div>
                    )}

                    <p className={`text-xs mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{item.pubDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Speaking indicator */}
        {isSpeaking && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-white text-sm backdrop-blur-sm shadow-xl">
            <Volume2 size={16} className="animate-pulse" />
            <span>{t.ttsOn}</span>
            <button onClick={stopSpeak} className="ml-2 px-2 py-0.5 rounded-lg bg-white/20 hover:bg-white/30 text-xs">{t.ttsOff}</button>
          </div>
        )}
      </main>

      <footer className={`text-center py-6 text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
        NewsFlow · AI-Powered Global News
      </footer>
    </div>
  );
}