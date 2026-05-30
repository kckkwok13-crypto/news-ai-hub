'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Filter, 
  Sparkles, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  Tag,
  Globe
} from 'lucide-react'

type Lang = 'zh-TW' | 'en' | 'zh-CN'

const TRANSLATIONS = {
  'zh-TW': {
    title: "深度 原創 分析",
    subtitle: "由專業編輯團隊執筆，深耕科技、金融、AI 及區塊鏈領域，為您解碼複雜世界背後的底層邏輯。",
    search: "搜尋深度文章...",
    categories: "索引分類",
    all: "全部",
    featured: "精選文章",
    readTime: "分鐘閱讀",
    readFull: "閱讀全文",
    readMore: "閱讀更多",
    noFound: "未找到相關文章",
    clear: "清除全部",
    ready: "準備好深入洞察了嗎？",
    ctaDesc: "我們的「編輯精選」系列致力於提供最高質量的原創分析。我們拒絕碎片化信息，堅持深度思考的力量。",
    backHome: "返回主頁",
    subscribe: "每週訂閱",
    original: "原創專欄"
  },
  'en': {
    title: "Deep Original Analysis",
    subtitle: "Authored by a professional editorial team, specializing in technology, finance, AI, and blockchain to decode the underlying logic of a complex world.",
    search: "Search deep articles...",
    categories: "Categories",
    all: "All",
    featured: "Featured",
    readTime: "min read",
    readFull: "Read Full Article",
    readMore: "Read More",
    noFound: "No articles found",
    clear: "Clear All",
    ready: "Ready for Deep Insights?",
    ctaDesc: "Our 'Editor's Pick' series provides strictly verified, logically sound original analysis. We reject fragmented info and believe in deep thinking.",
    backHome: "Back to Home",
    subscribe: "Subscribe Weekly",
    original: "Original Editorial"
  },
  'zh-CN': {
    title: "深度 原创 分析",
    subtitle: "由专业编辑团队执笔，深耕科技、金融、AI 及区块链领域，为您解码复杂世界背後的底层逻辑。",
    search: "搜索深度文章...",
    categories: "索引分类",
    all: "全部",
    featured: "精选文章",
    readTime: "分钟阅读",
    readFull: "阅读全文",
    readMore: "阅读更多",
    noFound: "未找到相关文章",
    clear: "清除全部",
    ready: "准备好深入洞察了吗？",
    ctaDesc: "我们的“编辑精选”系列致力于提供最高质量的原创分析。我们拒绝碎片化信息，坚持深度思考的力量。",
    backHome: "返回主页",
    subscribe: "每周订阅",
    original: "原创专栏"
  }
}

const EDITORIAL_ARTICLES = [
  {
    id: 'bitcoin-etf',
    emoji: '₿',
    readTime: 10,
    date: '2026-05-28',
    link: '/editorial/bitcoin-etf-deep-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '比特幣ETF獲批後：加密貨幣市場結構性改變的深度分析', category: '加密貨幣', excerpt: '比特幣現貨ETF的批准不僅是監管的勝利，更標誌著傳統金融與加密市場之間那道曾經不可逾越的鴻溝正在加速消亡。' },
      'en': { title: 'AFTER BITCOIN ETF APPROVAL', category: 'Crypto', excerpt: 'The approval of spot Bitcoin ETFs is not just a regulatory victory; it marks the accelerating dissolution of the once insurmountable gap.' },
      'zh-CN': { title: '比特币ETF获批后：加密货币市场结构性改变的深度分析', category: '加密货币', excerpt: '比特币现货ETF的批准不仅是监管的胜利，更标志着传统金融与加密市场之间那道曾经不可逾越的鸿沟正在加速消亡。' }
    }
  },
  {
    id: 'ai-translation',
    emoji: '🤖',
    readTime: 9,
    date: '2026-05-25',
    link: '/editorial/ai-translation-ethics',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'AI 翻譯新聞的倫理邊界：平衡技術與原創', category: '科技評論', excerpt: '當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？' },
      'en': { title: 'AI TRANSLATION ETHICS', category: 'Tech Opinion', excerpt: 'As AI translates news in seconds, is the essence of journalism being diluted? Exploring the ethical boundaries.' },
      'zh-CN': { title: 'AI 翻译新闻的伦理边界', category: '科技评论', excerpt: '当AI能够在数秒内将一篇英文新闻翻译成简体中文，新闻的本质是否正在被稀释？' }
    }
  },
  {
    id: 'twohumans-ai',
    emoji: '⚖️',
    readTime: 11,
    date: '2026-05-20',
    link: '/editorial/twohumans-vs-ai-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '新聞App的AI分析功能：人與算法的博弈', category: '科技評論', excerpt: '當演算法可以瞬間總結全球新聞，「人性」與「效率」之間的取捨，究竟誰更能代表真相？' },
      'en': { title: 'TWOHUMANS VS AI ANALYSIS', category: 'Tech Opinion', excerpt: 'When algorithms can instantly summarize global news, who represents the truth: humans or AI?' },
      'zh-CN': { title: '新闻App的AI分析功能', category: '科技评论', excerpt: '当算法可以瞬间总结全球新闻，“人性”与“效率”之间的取舍，究竟谁更能代表真相？' }
    }
  },
  {
    id: 'cbdc-race',
    emoji: '🏦',
    readTime: 10,
    date: '2026-05-15',
    link: '/editorial/cbdc-global-race',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '全球央行數字貨幣競賽：美元霸權的進化？', category: '金融', excerpt: '各國央行正在加速布局數字貨幣。這場競賽將如何重塑全球金融秩序？' },
      'en': { title: 'CBDC GLOBAL RACE', category: 'Finance', excerpt: 'Central banks are accelerating digital currency layout. How will this reshape global finance?' },
      'zh-CN': { title: '全球央行数字货币竞赛', category: '金融', excerpt: '各国央行正在加速布局数字货币。这场竞赛将如何重塑全球金融秩序？' }
    }
  }
  // I will add the remaining articles dynamically or keep them consistent with the update script
];

// Add the rest from slugs
const slugs = [
  'stablecoin-war', 'decentralized-finance-guide', 'ai-image-generators', 'web3-gaming-future', 
  'metaverse-workplace', 'quantum-computing-ai', 'space-tourism-future', 'sustainable-crypto', 
  'regenerative-ai', 'tech-giants-ai-race', 'creator-economy-web3', 'neural-interface-future', 
  'web3-nft-winter', 'ai-job-revolution', 'ai-healthcare-revolution', 'ev-market-analysis'
];

slugs.forEach((slug, idx) => {
  const emojiMap: any = { 
    'stablecoin': '🪙', 'finance': '💱', 'image': '🎨', 'gaming': '🎮', 
    'metaverse': '🏢', 'quantum': '⚛️', 'space': '🚀', 'sustainable': '🌱',
    'regenerative': '⚖️', 'tech-giants': '🏆', 'creator': '✍️', 'neural': '🧠',
    'web3-nft': '🌐', 'ai-job': '🤖', 'ai-healthcare': '🏥', 'ev-market': '🚗'
  };
  const categoryMap: any = {
    'stablecoin': '加密貨幣', 'finance': '金融科技', 'image': 'AI應用', 'gaming': '區塊鏈',
    'metaverse': '科技職場', 'quantum': '前沿科技', 'space': '太空科技', 'sustainable': '環境科技',
    'regenerative': 'AI倫理', 'tech-giants': '科技評論', 'creator': '區塊鏈', 'neural': '前沿科技',
    'web3-nft': '區塊鏈', 'ai-job': '科技評論', 'ai-healthcare': '健康科技', 'ev-market': '商業分析'
  };
  
  let emoji = '📝';
  let category = '深度分析';
  for (let key in emojiMap) if (slug.includes(key)) emoji = emojiMap[key];
  for (let key in categoryMap) if (slug.includes(key)) category = categoryMap[key];

  EDITORIAL_ARTICLES.push({
    id: `ep-${idx + 5}`,
    emoji,
    readTime: 10,
    date: '2026-05-10',
    link: `/editorial/${slug}`,
    featured: false,
    image: `https://images.unsplash.com/photo-${1451187580459 + idx}?w=800&q=80`,
    translations: {
      'zh-TW': { title: slug.replace(/-/g, ' ').toUpperCase(), category, excerpt: '深入探討該領域的技術變革與未來商業邏輯。' },
      'en': { title: slug.replace(/-/g, ' ').toUpperCase(), category: 'Deep Dive', excerpt: 'In-depth analysis of technological shifts and future business logic.' },
      'zh-CN': { title: slug.replace(/-/g, ' ').toUpperCase(), category, excerpt: '深入探讨该领域的技术变革与未来商业逻辑。' }
    }
  });
});

export default function EditorialPage() {
  const [lang, setLang] = useState<Lang>('zh-TW')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = TRANSLATIONS[lang]

  const categories = useMemo(() => {
    const cats = new Set(EDITORIAL_ARTICLES.map(a => a.translations[lang].category))
    return Array.from(cats)
  }, [lang])

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(article => {
      const trans = article.translations[lang]
      const matchesSearch = trans.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trans.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === '全部' || trans.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory, lang])

  const featuredArticle = EDITORIAL_ARTICLES.find(a => a.featured)

  if (!mounted) return <div className="min-h-screen bg-[#0a0a0b]" />

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100 font-sans selection:bg-amber-500/30 pb-20">
      {/* Floating Language Selector */}
      <div className="fixed top-6 right-6 z-[100] flex items-center gap-2 p-1.5 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
        {(['zh-TW', 'en', 'zh-CN'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => { setLang(l); setActiveCategory('全部'); }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 ${lang === l ? 'bg-amber-500 text-black shadow-lg scale-105' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'en' ? 'EN' : '简体'}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b] z-10" />
          <img 
            src={featuredArticle?.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'} 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Hero background"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <Sparkles size={14} className="animate-pulse" />
            {t.original}
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase text-balance leading-none">
            {t.title}
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="relative w-full md:w-[28rem] group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-amber-500/50 focus:ring-8 focus:ring-amber-500/5 transition-all text-white placeholder-gray-600 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Index Classification Bar */}
        <div className="sticky top-20 z-40 mb-16 py-6 bg-[#0a0a0b]/90 backdrop-blur-xl border-y border-white/5 -mx-6 px-6">
          <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex-shrink-0 flex items-center gap-2 pr-6 border-r border-white/10 text-gray-500">
              <Filter size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">{t.categories}</span>
            </div>
            <button 
              onClick={() => setActiveCategory('全部')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === '全部' ? 'bg-amber-500 text-black shadow-[0_10px_20_rgba(245,158,11,0.2)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {t.all}
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? 'bg-amber-500 text-black shadow-[0_10px_20_rgba(245,158,11,0.2)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        {activeCategory === '全部' && searchQuery === '' && featuredArticle && (
          <div className="mb-24 group">
            <Link href={featuredArticle.link}>
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/40">
                <img src={featuredArticle.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={featuredArticle.translations[lang].title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                  <div className="flex flex-wrap items-center gap-4 text-amber-500 text-[10px] md:text-xs font-black mb-6">
                    <span className="px-4 py-1.5 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/20 tracking-[0.2em] uppercase">{t.featured}</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 uppercase tracking-widest"><Clock size={14} /> {featuredArticle.readTime} {t.readTime}</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 uppercase tracking-widest"><Calendar size={14} /> {featuredArticle.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-[1.1] tracking-tighter group-hover:text-amber-400 transition-colors text-balance">
                    {featuredArticle.translations[lang].title}
                  </h2>
                  <p className="text-gray-400 md:text-xl max-w-2xl line-clamp-2 mb-8 font-light leading-relaxed">
                    {featuredArticle.translations[lang].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white text-lg font-black group-hover:gap-5 transition-all">
                    {t.readFull} <ArrowRight size={24} className="text-amber-500" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              const trans = article.translations[lang]
              return (
                <article key={article.id} className="group relative flex flex-col h-full bg-[#111112] rounded-[2rem] overflow-hidden border border-white/5 hover:border-amber-500/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)] hover:-translate-y-3">
                  <Link href={article.link} className="block aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={article.image || `https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800`} 
                      alt={trans.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                        <Tag size={12} className="text-amber-500" />
                        {trans.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111112] to-transparent opacity-60" />
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} {lang === 'en' ? 'MIN' : '分鐘'}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-5 leading-tight group-hover:text-amber-400 transition-colors line-clamp-2">
                      {trans.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-8 line-clamp-3 font-light">
                      {trans.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link href={article.link} className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                        {t.readMore} <ChevronRight size={18} className="text-amber-500" />
                      </Link>
                      <span className="text-3xl filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">{article.emoji}</span>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="col-span-full py-32 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 mb-8 border border-white/5">
                <BookOpen size={48} className="text-gray-700" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{t.noFound}</h3>
              <p className="text-gray-500 text-lg font-light">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveCategory('全部'); setSearchQuery(''); }}
                className="mt-10 px-8 py-3 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors"
              >
                {t.clear}
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 relative rounded-[3rem] overflow-hidden p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 animate-gradient-x" />
          <div className="relative bg-[#0a0a0b] rounded-[2.9rem] p-12 md:p-20 text-center border border-white/5">
            <Sparkles size={48} className="text-amber-500 mx-auto mb-10 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              {t.ready}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/" className="px-12 py-5 rounded-2xl bg-amber-500 text-black font-black uppercase tracking-widest text-sm hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(245,158,11,0.3)]">
                {t.backHome}
              </Link>
              <button className="px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
