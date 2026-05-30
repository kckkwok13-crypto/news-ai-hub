'use client'

import { useState, useMemo } from 'react'
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
  Tag
} from 'lucide-react'

const EDITORIAL_ARTICLES = [
  {
    id: 'bitcoin-etf',
    title: '比特幣ETF獲批後：加密貨幣市場結構性改變的深度分析',
    category: '加密貨幣',
    emoji: '₿',
    readTime: 10,
    date: '2026-05-28',
    excerpt: '比特幣現貨ETF的批准不僅是監管的勝利，更標誌著傳統金融與加密市場之間那道曾經不可逾越的鴻溝正在加速消亡。本文深入探討ETF獲批對機構入場、流動性結構、以太坊生態、以及個人投資者的長遠影響。',
    link: '/editorial/bitcoin-etf-deep-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'ai-translation-ethics',
    title: 'AI 翻譯新聞的倫理邊界：我們如何在使用技術便利與保護原創價值之間取得平衡？',
    category: '科技評論',
    emoji: '🤖',
    readTime: 9,
    date: '2026-05-25',
    excerpt: '當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？本文從編輯政策的角度出發，探討AI輔助翻譯的倫理邊界。',
    link: '/editorial/ai-translation-ethics',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'twohumans-vs-ai',
    title: '新聞App的AI分析功能：兩個不同背景的人 VS 一個AI，你信哪個？',
    category: '科技評論',
    emoji: '⚖️',
    readTime: 11,
    date: '2026-05-20',
    excerpt: '從ChatGPT到Claude，從Gemini到各式各樣的AI工具，我們正在經歷一場前所未有的資訊革命。然而，當演算法可以瞬間總結全球新聞，「人性」與「效率」之間的取捨，究竟誰更能代表真相？',
    link: '/editorial/twohumans-vs-ai-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'cbdc',
    title: '全球央行數字貨幣競賽：美元霸權的終結還是進化？',
    category: '金融',
    emoji: '🏦',
    readTime: 10,
    date: '2026-05-15',
    excerpt: '從中國的數字人民幣到歐洲央行的數字歐元，各國央行正在加速布局數字貨幣。這場競賽將如何重塑全球金融秩序？',
    link: '/editorial/cbdc-global-race',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'stablecoin',
    title: '穩定幣大戰：USDT/USDC/USDJ誰能笑到最後？',
    category: '加密貨幣',
    emoji: '🪙',
    readTime: 11,
    date: '2026-05-12',
    excerpt: '當傳統銀行、加密原生公司、科技巨頭全部湧入穩定幣賽道，這場沒有硝煙的戰爭將如何改變我們的貨幣體系？三大玩家各自的優勢與隱憂，一次過拆解。',
    link: '/editorial/stablecoin-war',
    featured: true,
    image: 'https://images.unsplash.com/photo-1611974717482-7db00d98419c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'decentralized-finance',
    title: '去中心化金融DeFi：銀行業務的革命還是投機的溫床？',
    category: '金融科技',
    emoji: '💱',
    readTime: 10,
    date: '2026-05-10',
    excerpt: '去中心化金融協議正在挑戰傳統銀行系統。從借貸到衍生品交易，用戶可以在無需中介的情況下進行金融活動。',
    link: '/editorial/decentralized-finance-guide',
    featured: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'ai-image-generator',
    title: 'AI圖像生成器大爆發：Midjourney、DALL-E、Stable Diffusion如何改變創意產業？',
    category: 'AI應用',
    emoji: '🎨',
    readTime: 9,
    date: '2026-05-08',
    excerpt: '當任何人都可以通過文字描述在幾秒鐘內生成專業級圖像，傳統創意工作者如何生存？',
    link: '/editorial/ai-image-generators',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'web3-gaming',
    title: 'Web3遊戲的未來：玩遊戲不再只是消費，而是賺錢？',
    category: '區塊鏈',
    emoji: '🎮',
    readTime: 10,
    date: '2026-05-06',
    excerpt: '區塊鏈遊戲正在重新定義玩家與開發者之間的關係。從「Play-to-Earn」到完全所有權的遊戲資產。',
    link: '/editorial/web3-gaming-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'metaverse-workplace',
    title: '元宇宙工作場所：虛擬辦公室的崛起與人力資源管理的未來',
    category: '科技職場',
    emoji: '🏢',
    readTime: 9,
    date: '2026-05-04',
    excerpt: '虛擬辦公室、數位孿生會議、沉浸式協作——未來的工作場所將是什麼樣子？',
    link: '/editorial/metaverse-workplace',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'quantum-computing',
    title: '量子計算與AI：當兩大革命性技術結合會發生什麼？',
    category: '前沿科技',
    emoji: '⚛️',
    readTime: 10,
    date: '2026-05-02',
    excerpt: '量子計算機被譽為解決當前AI瓶頸的關鍵。量子AI的結合可能會徹底改變我們解決複雜問題的方式。',
    link: '/editorial/quantum-computing-ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'space-tourism',
    title: '太空旅遊的平民化：SpaceX、Blue Origin與維珍銀河誰能走得最遠？',
    category: '太空科技',
    emoji: '🚀',
    readTime: 9,
    date: '2026-04-30',
    excerpt: '從百萬美元到數十萬美元，太空旅遊的成本正在快速下降。但這項服務何時才能真正普及？',
    link: '/editorial/space-tourism-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'sustainable-crypto',
    title: '永續加密貨幣：區塊鏈如何實現碳中和承諾？',
    category: '環境科技',
    emoji: '🌱',
    readTime: 10,
    date: '2026-04-28',
    excerpt: '比特幣挖礦被指責為碳排放大戶，但新的共識機制正在改變這一切。',
    link: '/editorial/sustainable-crypto',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'regenerative-ai',
    title: '生成式AI的倫理邊界：我們如何確保AI發展符合人類價值觀？',
    category: 'AI倫理',
    emoji: '⚖️',
    readTime: 10,
    date: '2026-04-26',
    excerpt: '當AI能夠生成足以欺騙人類的假新聞、假圖片和假視頻，社會需要建立新的規範框架。',
    link: '/editorial/regenerative-ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'tech-giants-ai',
    title: '科技巨頭的AI競賽：Google、Microsoft、Meta誰能勝出？',
    category: '科技評論',
    emoji: '🏆',
    readTime: 10,
    date: '2026-04-24',
    excerpt: '人工智能領域的競爭日益激烈，科技巨頭們都在爭奪AI霸主地位。',
    link: '/editorial/tech-giants-ai-race',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'creator-economy',
    title: '創作者經濟與Web3：去中心化的創作新時代',
    category: '區塊鏈',
    emoji: '✍️',
    readTime: 12,
    date: '2026-04-22',
    excerpt: '區塊鏈技術正在改變創作者與粉絲的關係，這場革命將重新定義創作的價值。',
    link: '/editorial/creator-economy-web3',
    featured: false,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'neural-interface',
    title: '神經接口的未來：人機融合的倫理與可能性',
    category: '前沿科技',
    emoji: '🧠',
    readTime: 11,
    date: '2026-04-20',
    excerpt: 'Neuralink等神經接口技術正在打開人機交互的新篇章。',
    link: '/editorial/neural-interface-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
  },
]

const CATEGORIES = Array.from(new Set(EDITORIAL_ARTICLES.map(a => a.category)))

export default function EditorialPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === '全部' || article.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const featuredArticle = EDITORIAL_ARTICLES.find(a => a.featured)

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100 font-sans selection:bg-amber-500/30 pb-20">
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
            Original Editorial
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase">
            EDITOR&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 italic">PICK</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Professional analysis from our editorial team, decoding the complex logic behind technology, finance, AI and blockchain.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="relative w-full md:w-[28rem] group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search articles..."
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
              <span className="text-xs font-bold uppercase tracking-widest">Categories</span>
            </div>
            <button 
              onClick={() => setActiveCategory('全部')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === '全部' ? 'bg-amber-500 text-black shadow-[0_10px_20_rgba(245,158,11,0.2)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
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
        {activeCategory === '全部' && searchQuery === '' && (
          <div className="mb-24 group">
            <Link href={featuredArticle?.link || '#'}>
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/40">
                <img src={featuredArticle?.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={featuredArticle?.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                  <div className="flex flex-wrap items-center gap-4 text-amber-500 text-[10px] md:text-xs font-black mb-6">
                    <span className="px-4 py-1.5 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/20 tracking-[0.2em] uppercase">精選文章</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300"><Clock size={14} /> {featuredArticle?.readTime} MIN READ</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300"><Calendar size={14} /> {featuredArticle?.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-[1.1] tracking-tighter group-hover:text-amber-400 transition-colors text-balance">
                    {featuredArticle?.title}
                  </h2>
                  <p className="text-gray-400 md:text-xl max-w-2xl line-clamp-2 mb-8 font-light leading-relaxed">
                    {featuredArticle?.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white text-lg font-black group-hover:gap-5 transition-all">
                    閱讀全文 <ArrowRight size={24} className="text-amber-500" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article key={article.id} className="group relative flex flex-col h-full bg-[#111112] rounded-[2rem] overflow-hidden border border-white/5 hover:border-amber-500/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)] hover:-translate-y-3">
                <Link href={article.link} className="block aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={article.image || `https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800`} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                      <Tag size={12} className="text-amber-500" />
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111112] to-transparent opacity-60" />
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} MIN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-5 leading-tight group-hover:text-amber-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-8 line-clamp-3 font-light">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link href={article.link} className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ChevronRight size={18} className="text-amber-500" />
                    </Link>
                    <span className="text-3xl filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">{article.emoji}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 mb-8 border border-white/5">
                <BookOpen size={48} className="text-gray-700" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">No articles found</h3>
              <p className="text-gray-500 text-lg font-light">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveCategory('全部'); setSearchQuery(''); }}
                className="mt-10 px-8 py-3 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors"
              >
                Clear All
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
              Ready for <span className="text-amber-500 italic">Deep</span> Insights?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Our &quot;Editor&apos;s Pick&quot; series provides strictly verified, logically sound original analysis. 
              We reject fragmented info and believe in the power of deep thinking.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/" className="px-12 py-5 rounded-2xl bg-amber-500 text-black font-black uppercase tracking-widest text-sm hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(245,158,11,0.3)]">
                Back to Home
              </Link>
              <button className="px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                Subscribe Weekly
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
