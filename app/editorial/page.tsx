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
    subtitle: "由专业编辑团队执笔，深耕科技、金融、AI 及区块链领域，为您解码复杂世界背后的底层逻辑。",
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
    id: 'space-tourism',
    emoji: '🚀',
    readTime: 9,
    date: '2026-04-30',
    link: '/editorial/space-tourism-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '太空旅遊的平民化：SpaceX、Blue Origin與維珍銀河誰能走得最遠？', category: '太空科技', excerpt: '從百萬美元到數十萬美元，太空旅遊的成本正在快速下降。但這項服務何時才能真正普及？' },
      'en': { title: 'Democratizing Space Tourism: SpaceX, Blue Origin vs Virgin Galactic', category: 'Space Tech', excerpt: 'With costs dropping from millions to hundreds of thousands, when will space travel go mainstream?' },
      'zh-CN': { title: '太空旅游的平民化：SpaceX、Blue Origin与维珍银河谁能走得最远？', category: '太空科技', excerpt: '从百万美元到数十万美元，太空旅游的成本正在快速下降。但这项服务何时才能真正普及？' }
    }
  },
  {
    id: 'sustainable-crypto',
    emoji: '🌱',
    readTime: 10,
    date: '2026-04-28',
    link: '/editorial/sustainable-crypto',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '永續加密貨幣：區塊鏈如何實現碳中和承諾？', category: '環境科技', excerpt: '比特幣挖礦被指責為碳排放大戶，但新的共識機制正在改變這一切。' },
      'en': { title: 'Sustainable Crypto: How Blockchain Can Achieve Carbon Neutrality', category: 'Green Tech', excerpt: 'Bitcoin mining is often blamed for emissions, but new consensus mechanisms are changing that.' },
      'zh-CN': { title: '永续加密货币：区块链如何实现碳中和承诺？', category: '环境科技', excerpt: '比特币挖矿被指责为碳排放大户，但新的共识机制正在改变这一切。' }
    }
  },
  {
    id: 'creator-economy',
    emoji: '✍️',
    readTime: 12,
    date: '2026-04-22',
    link: '/editorial/creator-economy-web3',
    featured: false,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '創作者經濟與Web3：去中心化的創作新時代', category: '區塊鏈', excerpt: '區塊鏈技術正在改變創作者與粉絲的關係，這場革命將重新定義創作的價值。' },
      'en': { title: 'Creator Economy and Web3: A New Era of Decentralized Content', category: 'Blockchain', excerpt: 'Blockchain is transforming creator-fan relationships and redefining creative value.' },
      'zh-CN': { title: '创作者经济与Web3：去中心化的创作新时代', category: '区块链', excerpt: '区块链技术正在改变创作者与粉丝的关系，这场革命将重新定义创作的价值。' }
    }
  },
  {
    id: 'neural-interface',
    emoji: '🧠',
    readTime: 11,
    date: '2026-04-20',
    link: '/editorial/neural-interface-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '神經接口的未來：人機融合的倫理與可能性', category: '前沿科技', excerpt: 'Neuralink等技術正在打開人機交互新篇章。當大腦可直接與電腦通信，倫理抉擇將至。' },
      'en': { title: 'Future of Neural Interfaces: Ethics and Possibilities of Human-Machine Fusion', category: 'Frontier Tech', excerpt: 'Tech like Neuralink is opening a new chapter in HCI. Ethical choices loom large.' },
      'zh-CN': { title: '神经接口的未来：人机融合的伦理与可能性', category: '前沿科技', excerpt: 'Neuralink等技术正在打开人机交互新篇章。当大脑可直接与电脑通信，伦理抉择将至。' }
    }
  },
  {
    id: 'web3-nft-winter',
    emoji: '🌐',
    readTime: 9,
    date: '2026-04-18',
    link: '/editorial/web3-nft-winter',
    featured: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'Web3 寒冬：NFT係咪已經玩完？', category: '區塊鏈', excerpt: '從2021年的瘋狂炒賣到現在一地眼鏡碎，NFT市場究竟發生了什麼？' },
      'en': { title: 'Web3 Winter: Is the NFT Hype Over?', category: 'Blockchain', excerpt: 'From the 2021 craze to today\'s market slump, what really happened to the NFT market?' },
      'zh-CN': { title: 'Web3 寒冬：NFT是不是已经玩完？', category: '区块链', excerpt: '从2021年的疯狂炒卖到现在一地眼镜碎，NFT市场究竟发生了什么？' }
    }
  },
  {
    id: 'web3-gaming',
    emoji: '🎮',
    readTime: 10,
    date: '2026-05-06',
    link: '/editorial/web3-gaming-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'Web3遊戲的未來：玩遊戲不再只是消費，而是賺錢？', category: '區塊鏈', excerpt: '區塊鏈遊戲正在重新定義玩家與開發者之間的關係。從「Play-to-Earn」到完全所有權的遊戲資產。' },
      'en': { title: 'Future of Web3 Gaming: Is Playing Games No Longer Just Consumption, But Earning?', category: 'Blockchain', excerpt: 'Blockchain games are redefining player-developer relationships through Play-to-Earn models.' },
      'zh-CN': { title: 'Web3游戏的未来：玩游戏不再只是消费，而是赚钱？', category: '区块链', excerpt: '区块链游戏正在重新定义玩家与开发者之间的关系。从"Play-to-Earn"到完全所有权的游戏资产。' }
    }
  },
  {
    id: 'metaverse-workplace',
    emoji: '🏢',
    readTime: 9,
    date: '2026-05-04',
    link: '/editorial/metaverse-workplace',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '元宇宙工作場所：虛擬辦公室的崛起與人力資源管理的未來', category: '科技職場', excerpt: '遠程辦公的普及，而元宇宙技術正在將這一趨勢推向新的維度。虛擬辦公室將是什麼樣子？' },
      'en': { title: 'Metaverse Workplace: Rise of Virtual Offices and the Future of HR Management', category: 'Tech Career', excerpt: 'Metaverse tech is pushing remote work into new dimensions. What will virtual offices look like?' },
      'zh-CN': { title: '元宇宙工作场所：虚拟办公室的崛起与人力资源管理的未来', category: '科技职场', excerpt: '远程办公的普及，而元宇宙技术正在将这一趋势推向新的维度。虚拟办公室将是什么样子？' }
    }
  },
  {
    id: 'ev-market',
    emoji: '🚗',
    readTime: 11,
    date: '2026-04-12',
    link: '/editorial/ev-market-analysis',
    featured: false,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '電動車市場大洗牌：特斯拉、比亞迪與小米的世紀對決', category: '商業分析', excerpt: '隨著小米等科技巨頭入場，全球電動車市場正經歷一場前所未有的格局變動。' },
      'en': { title: 'EV Market Reshuffle: Tesla, BYD, and Xiaomi\'s Century Battle', category: 'Business', excerpt: 'With tech giants like Xiaomi entering the fray, the global EV market is facing a radical shift.' },
      'zh-CN': { title: '电动车市场大洗牌：特斯拉、比亚迪与小米的世纪对决', category: '商业分析', excerpt: '随着小米等科技巨头入场，全球电动车市场正经历一场前所未有的格局变动。' }
    }
  }
]

export default function EditorialPage() {
  const [lang, setLang] = useState<Lang>('zh-TW')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

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

      {/* Back to Home Link */}
      <div className="fixed top-6 left-6 z-[100]">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-2xl rounded-xl border border-white/10 text-gray-400 hover:text-white transition-all text-xs font-medium">
          ← Back to Home
        </Link>
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
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 italic px-2" : ""}>
                {word} 
              </span>
            ))}
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
        <div className="sticky top-0 z-40 mb-16 py-6 bg-[#0a0a0b]/90 backdrop-blur-xl border-y border-white/5 -mx-6 px-6">
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
              {t.ready.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'deep' || word === '深入' ? "text-amber-500 italic px-2" : ""}>
                  {word} 
                </span>
              ))}
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
