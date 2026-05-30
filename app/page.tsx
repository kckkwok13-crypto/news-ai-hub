'use client'

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Globe, BookOpen, Sun, Moon, Star, Search, Bell, Mail, X, ChevronDown, RefreshCw, ExternalLink, Bookmark, BookmarkCheck, Share2, TrendingUp, Zap, Menu, Play, Pause, Pen, Edit3, Sparkles, Clock, Calendar, Tag, ArrowRight } from "lucide-react";

type Lang = "zh-TW" | "zh-CN" | "en";
type Category = "finance" | "crypto" | "business" | "technology" | "astronomy" | "mystery" | "health" | "gaming" | "food" | "travel" | "ai_art" | "art" | "data_journalism";

interface NewsItem {
  id: string;
  title: string; title_translated: string; desc: string; desc_translated: string; link: string;
  pubDate: string; source: string; img: boolean; img_url: string;
  translated: boolean; translationError?: string;
  category?: string;
  sentiment?: string;
}

const LANG_OPTIONS: { id: Lang; flag: string; label: string }[] = [
  { id: 'zh-TW', flag: '🇭🇰', label: '繁體中文' },
  { id: 'zh-CN', flag: '🇨🇳', label: '简体中文' },
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

const ARTICLE_METADATA = [
  { id: "ep-1", emoji: "₿", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80", readTime: 10, link: "/editorial/bitcoin-etf-deep-analysis", date: "2026-05-28", tag_zh: "深度", tag_en: "Deep" },
  { id: "ep-2", emoji: "🤖", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", readTime: 9, link: "/editorial/ai-translation-ethics", date: "2026-05-25", tag_zh: "評論", tag_en: "Opinion" },
  { id: "ep-3", emoji: "⚖️", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", readTime: 11, link: "/editorial/twohumans-vs-ai-analysis", date: "2026-05-20", tag_zh: "熱門", tag_en: "Hot" },
  { id: "ep-4", emoji: "🏦", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80", readTime: 10, link: "/editorial/cbdc-global-race", date: "2026-05-15", tag_zh: "金融", tag_en: "Finance" },
  { id: "ep-5", emoji: "🪙", image: "https://images.unsplash.com/photo-1611974717482-7db00d98419c?w=800&q=80", readTime: 10, link: "/editorial/stablecoin-war", date: "2026-05-12", tag_zh: "趨勢", tag_en: "Trend" },
  { id: "ep-6", emoji: "💱", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80", readTime: 10, link: "/editorial/decentralized-finance-guide", date: "2026-05-10", tag_zh: "指南", tag_en: "Guide" },
  { id: "ep-7", emoji: "🎨", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", readTime: 9, link: "/editorial/ai-image-generators", date: "2026-05-08", tag_zh: "創意", tag_en: "Art" },
  { id: "ep-8", emoji: "🎮", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80", readTime: 10, link: "/editorial/web3-gaming-future", date: "2026-05-06", tag_zh: "遊戲", tag_en: "Gaming" },
  { id: "ep-9", emoji: "🏢", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80", readTime: 9, link: "/editorial/metaverse-workplace", date: "2026-05-04", tag_zh: "職場", tag_en: "Work" },
  { id: "ep-10", emoji: "⚛️", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", readTime: 10, link: "/editorial/quantum-computing-ai", date: "2026-05-02", tag_zh: "前沿", tag_en: "Future" },
];

const TITLES: Record<string, Record<string, string>> = {
  "ep-1": { "zh-TW": "比特幣ETF獲批後：市場結構性改變", "zh-CN": "比特币ETF获批后：市场结构性改变", "en": "Bitcoin ETF Approval: Market Shift" },
  "ep-2": { "zh-TW": "AI翻譯倫理：平衡技術與原創", "zh-CN": "AI翻译伦理：平衡技术与原创", "en": "AI Translation: Ethical Balance" },
  "ep-3": { "zh-TW": "新聞App的AI功能：人與算法", "zh-CN": "新闻App的AI功能：人与算法", "en": "AI in News: Humans vs Algorithms" },
  "ep-4": { "zh-TW": "全球CBDC競賽：重塑金融秩序", "zh-CN": "全球CBDC竞赛：重塑金融秩序", "en": "Global CBDC Race: New Financial Order" },
  "ep-5": { "zh-TW": "穩定幣大戰：誰能笑到最後", "zh-CN": "稳定币大战：谁能笑到最后", "en": "Stablecoin War: Who Wins?" },
  "ep-6": { "zh-TW": "DeFi深度指南：銀行業務革命", "zh-CN": "DeFi深度指南：银行业务革命", "en": "DeFi Guide: Banking Revolution" },
  "ep-7": { "zh-TW": "AI圖像生成：創意產業衝擊", "zh-CN": "AI图像生成：创意产业冲击", "en": "AI Image Gen: Creative Impact" },
  "ep-8": { "zh-TW": "Web3遊戲未來：可持續性探討", "zh-CN": "Web3游戏未来：可持续性探讨", "en": "Web3 Gaming: Sustainability" },
  "ep-9": { "zh-TW": "元宇宙職場：虛擬辦公室崛起", "zh-CN": "元宇宙职场：虚拟办公室崛起", "en": "Metaverse: Virtual Offices" },
  "ep-10": { "zh-TW": "量子計算與AI：革命性結合", "zh-CN": "量子计算与AI：革命性结合", "en": "Quantum & AI: Powerful Fusion" }
};

const LABELS = {
  "zh-TW": {
    title: "NewsFlow 全球資訊", stats_total: "總新聞數", stats_analyzed: "已分析", stats_today: "今日新增",
    searchPlaceholder: "搜尋新聞...", loading: "載入中...", noResults: "未找到新聞",
    saved: "已儲存", removed: "已移除", copied: "已複製連結",
    darkOn: "深色模式", darkOff: "淺色模式", subscribe: "訂閱",
    refresh: "刷新", autoRefresh: "自動刷新", trend: "熱門話題",
    analytics: "數據分析", viewAll: "查看全部 →", sectionTitle: "📝 精選專欄"
  },
  "zh-CN": {
    title: "NewsFlow 全球资讯", stats_total: "总新闻数", stats_analyzed: "已分析", stats_today: "今日新增",
    searchPlaceholder: "搜索新闻...", loading: "载入中...", noResults: "未找到新闻",
    saved: "已储存", removed: "已移除", copied: "已复制链接",
    darkOn: "深色模式", darkOff: "浅色模式", subscribe: "订阅",
    refresh: "刷新", autoRefresh: "自动刷新", trend: "热门话题",
    analytics: "数据分析", viewAll: "查看全部 →", sectionTitle: "📝 精选专栏"
  },
  "en": {
    title: "NewsFlow Global News", stats_total: "Total News", stats_analyzed: "Analyzed", stats_today: "New Today",
    searchPlaceholder: "Search news...", loading: "Loading...", noResults: "No results",
    saved: "Saved", removed: "Removed", copied: "Link copied",
    darkOn: "Dark Mode", darkOff: "Light Mode", subscribe: "Subscribe",
    refresh: "Refresh", autoRefresh: "Auto Refresh", trend: "Trending",
    analytics: "Analytics", viewAll: "View All →", sectionTitle: "📝 Editor's Pick"
  }
};

export default function NewsPage() {
  const [lang, setLang] = useState<Lang>("zh-TW");
  const [darkMode, setDarkMode] = useState(true);
  const [category, setCategory] = useState<Category>("finance");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState({ total: 154, analyzed: 85, today: 18 });
  const [mounted, setMounted] = useState(false);

  const t = LABELS[lang];

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/news-feed?category=${category}&lang=${lang}&t=${Date.now()}`);
      const data = await res.json();
      if (data.success && data.items) {
        setNews(data.items);
      }
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }, [category, lang]);

  useEffect(() => { 
    setMounted(true);
    fetchNews(); 
  }, [fetchNews]);

  const displayNews = useMemo(() => {
    return news.filter(n => (n.title_translated || n.title).toLowerCase().includes(search.toLowerCase()));
  }, [news, search]);

  const toggleSaved = (title: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌐</div>
            <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">NewsFlow</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/analytics" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-purple-600/10 text-purple-400 rounded-xl font-bold hover:bg-purple-600/20 transition">
              <TrendingUp size={18} /> {t.analytics}
            </Link>
            <div className="flex items-center bg-gray-800/50 rounded-xl p-1 border border-white/5">
              {LANG_OPTIONS.map(l => (
                <button key={l.id} onClick={() => setLang(l.id)} className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${lang === l.id ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}>
                  {l.id === 'zh-TW' ? '繁' : l.id === 'en' ? 'EN' : '简'}
                </button>
              ))}
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 bg-gray-800/50 rounded-xl text-yellow-400 border border-white/5">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Real-time Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: t.stats_total, value: stats.total, color: "text-blue-500", icon: "📰" },
            { label: t.stats_analyzed, value: stats.analyzed, color: "text-purple-500", icon: "🤖" },
            { label: t.stats_today, value: stats.today, color: "text-green-500", icon: "📅" }
          ].map((s, idx) => (
            <div key={idx} className={`p-6 rounded-[2rem] text-center border shadow-2xl transition-all duration-500 ${darkMode ? "bg-gray-900/50 border-white/5" : "bg-white border-gray-200"}`}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className={`text-3xl md:text-5xl font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Editor's Pick Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-xl"><Sparkles className="text-amber-500" size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">{t.sectionTitle}</h2>
            </div>
            <Link href="/editorial" className="text-sm font-black text-amber-500 uppercase tracking-widest hover:underline">{t.viewAll}</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ARTICLE_METADATA.map((meta: any) => (
              <a key={meta.id} href={meta.link} className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 shadow-2xl hover:-translate-y-2">
                <img src={meta.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest">{lang === 'en' ? meta.tag_en : meta.tag_zh}</span>
                  </div>
                  <h3 className="text-xs md:text-sm font-black text-white leading-tight line-clamp-3 group-hover:text-amber-400 transition-colors">
                    {TITLES[meta.id][lang]}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Category Tabs */}
        <div className="sticky top-24 z-40 bg-black/50 backdrop-blur-md py-4 mb-8 -mx-4 px-4 scrollbar-hide overflow-x-auto flex items-center gap-2">
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setCategory(c.id)} className={`px-5 py-2.5 rounded-2xl text-sm font-black whitespace-nowrap transition-all duration-300 ${category === c.id ? `${c.color} text-white shadow-xl scale-105` : "bg-gray-800/50 text-gray-400 hover:text-white"}`}>
              {c.icon} {lang === "en" ? c.label_en : c.label_zh}
            </button>
          ))}
        </div>

        {/* News Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="aspect-video bg-gray-800 animate-pulse rounded-[2.5rem]" />
            ))
          ) : displayNews.map((item, i) => (
            <div key={i} className={`group flex flex-col h-full rounded-[2.5rem] overflow-hidden border transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] ${darkMode ? "bg-gray-900/40 border-white/5 hover:border-blue-500/30" : "bg-white border-gray-200 hover:border-blue-300"}`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={item.img_url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">{item.source}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 mb-4 uppercase tracking-widest">
                  <Calendar size={12} /> {new Date(item.pubDate).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-black leading-snug mb-4 group-hover:text-blue-500 transition-colors line-clamp-2">
                  {item.title_translated || item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-8 font-light">
                  {item.desc_translated || item.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <a href={item.link} target="_blank" className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 hover:text-blue-400 flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </a>
                  <button onClick={() => toggleSaved(item.title)} className={`p-2.5 rounded-xl transition-all ${savedIds.has(item.title) ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-500 hover:text-white"}`}>
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
