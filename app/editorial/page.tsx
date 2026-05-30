import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Original Analysis - NewsKing',
  description: 'Professional editorial team original analysis covering technology, finance, AI, blockchain and other fields.',
}

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
  },
  {
    id: 'decentralized-finance',
    title: '去中心化金融DeFi：銀行業務的革命還是投機的溫床？',
    category: '金融科技',
    emoji: '💱',
    readTime: 10,
    date: '2026-05-10',
    excerpt: '去中心化金融協議正在挑战传统银行系统，从借貨到衍生品交易，用户可以在无需中介的情況下進行金融活動。但高收益率是否建立在可持續的商業模式之上？',
    link: '/editorial/decentralized-finance-guide',
    featured: false,
  },
  {
    id: 'ai-image-generator',
    title: 'AI圖像生成器大爆發：Midjourney、DALL-E、Stable Diffusion如何改變創意產業？',
    category: 'AI應用',
    emoji: '🎨',
    readTime: 9,
    date: '2026-05-08',
    excerpt: '當任何人都可以通過文字描述在幾秒鐘內生成專業級圖像，傳統創意工作者如何生存？本文探討AI圖像生成技術對創意產業的衝擊與機遇。',
    link: '/editorial/ai-image-generators',
    featured: false,
  },
  {
    id: 'web3-gaming',
    title: 'Web3遊戲的未來：玩遊戲不再只是消費，而是賺錢？',
    category: '區塊鏈',
    emoji: '🎮',
    readTime: 10,
    date: '2026-05-06',
    excerpt: '區塊鏈遊戲正在重新定義玩家與開發者之間的關係。從「Play-to-Earn」到完全所有權的遊戲資產，Web3遊戲是否真的能夠創造可持續的經濟生態？',
    link: '/editorial/web3-gaming-future',
    featured: false,
  },
  {
    id: 'metaverse-workplace',
    title: '元宇宙工作場所：虛擬辦公室的崛起與人力資源管理的未來',
    category: '科技職場',
    emoji: '🏢',
    readTime: 9,
    date: '2026-05-04',
    excerpt: '新冠疫情加速了遠程辦公的普及，而元宇宙技術正在將這一趨勢推向新的維度。虛擬辦公室、數位孿生會議、沉浸式協作——未來的工作場所將是什麼樣子？',
    link: '/editorial/metaverse-workplace',
    featured: false,
  },
  {
    id: 'quantum-computing',
    title: '量子計算與AI：當兩大革命性技術結合會發生什麼？',
    category: '前沿科技',
    emoji: '⚛️',
    readTime: 10,
    date: '2026-05-02',
    excerpt: '量子計算機被譽為解決當前AI瓶頸的關鍵。從藥物開發到材料科學，量子AI的結合可能會徹底改變我們解決複雜問題的方式。但量子優勢何時才能真正實現？',
    link: '/editorial/quantum-computing-ai',
    featured: false,
  },
  {
    id: 'space-tourism',
    title: '太空旅遊的平民化：SpaceX、Blue Origin與維珍銀河誰能走得最遠？',
    category: '太空科技',
    emoji: '🚀',
    readTime: 9,
    date: '2026-04-30',
    excerpt: '從百萬美元到數十萬美元，太空旅遊的成本正在快速下降。但這項服務何時才能真正普及？商業太空飛行會成為新的航空產業，還是永遠是富人的遊戲？',
    link: '/editorial/space-tourism-future',
    featured: false,
  },
  {
    id: 'sustainable-crypto',
    title: '永續加密貨幣：區塊鏈如何實現碳中和承諾？',
    category: '環境科技',
    emoji: '🌱',
    readTime: 10,
    date: '2026-04-28',
    excerpt: '比特幣挖礦被指責為碳排放大戶，但新的共識機制正在改變這一切。從PoS到再生能源使用，加密貨幣產業如何回應環保批評並實現真正的可持續發展？',
    link: '/editorial/sustainable-crypto',
    featured: false,
  },
  {
    id: 'regenerative-ai',
    title: '生成式AI的倫理邊界：我們如何確保AI發展符合人類價值觀？',
    category: 'AI倫理',
    emoji: '⚖️',
    readTime: 10,
    date: '2026-04-26',
    excerpt: '當AI能夠生成足以欺騙人類的假新聞、假圖片和假視頻，社會需要建立新的規範框架。本文探討生成式AI帶來的挑戰以及可能的解決方案。',
    link: '/editorial/regenerative-ai',
    featured: false,
  },
  {
    id: 'tech-giants-ai',
    title: '科技巨頭的AI競賽：Google、Microsoft、Meta誰能勝出？',
    category: '科技評論',
    emoji: '🏆',
    readTime: 10,
    date: '2026-04-24',
    excerpt: '人工智能領域的競爭日益激烈，科技巨頭們都在爭奪AI霸主地位。本文分析Google、Microsoft、Meta在AI領域的優勢與挑戰。',
    link: '/editorial/tech-giants-ai-race',
    featured: false,
  },
  {
    id: 'creator-economy',
    title: '創作者經濟與Web3：去中心化的創作新時代',
    category: '區塊鏈',
    emoji: '✍️',
    readTime: 12,
    date: '2026-04-22',
    excerpt: '區塊鏈技術正在改變創作者與粉絲的關係，從贊助模式到代幣經濟，這場革命將重新定義創作的價值。',
    link: '/editorial/creator-economy-web3',
    featured: false,
  },
  {
    id: 'neural-interface',
    title: '神經接口的未來：人機融合的倫理與可能性',
    category: '前沿科技',
    emoji: '🧠',
    readTime: 11,
    date: '2026-04-20',
    excerpt: 'Neuralink等神經接口技術正在打開人機交互的新篇章。當大腦可以直接與電腦通信，人類將面臨怎樣的倫理抉擇？',
    link: '/editorial/neural-interface-future',
    featured: false,
  },
]

export default function EditorialPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Editor's Pick</h1>
        <p className="text-gray-600">Professional editorial team original analysis covering technology, finance, AI, blockchain and other fields.</p>
      </div>

      {/* Featured Articles */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDITORIAL_ARTICLES.filter(a => a.featured).map((article) => (
            <Link 
              key={article.id} 
              href={article.link}
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{article.emoji}</span>
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.readTime} min read</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">All Articles</h2>
        <div className="space-y-3">
          {EDITORIAL_ARTICLES.map((article) => (
            <Link 
              key={article.id} 
              href={article.link}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{article.emoji}</span>
                  <div>
                    <h3 className="font-medium">{article.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}分鐘</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>免責聲明：</strong>本文為編輯團隊原創觀點，僅供參考，不構成任何投資或決策建議。
        </p>
      </div>
    </main>
  )
}
