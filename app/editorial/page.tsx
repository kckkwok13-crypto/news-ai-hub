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
    readTime: 8,
    date: '2026-05-28',
    excerpt: '比特幣現貨ETF的批准不僅是監管的勝利，更標誌著傳統金融與加密市場之間那道曾經不可逾越的鴻溝正在加速消亡。',
    link: '/editorial/bitcoin-etf-deep-analysis',
    featured: true,
  },
  {
    id: 'ai-translation-ethics',
    title: 'AI 翻譯新聞的倫理邊界：我們如何在使用技術便利與保護原創價值之間取得平衡？',
    category: '科技評論',
    emoji: '🤖',
    readTime: 7,
    date: '2026-05-25',
    excerpt: '當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？本文從編輯政策的角度出發，探討AI輔助翻譯的倫理邊界。',
    link: '/editorial/ai-translation-ethics',
    featured: true,
  },
  {
    id: 'twohumans-vs-ai',
    title: '新聞App的AI分析功能：兩個人 VS 一個AI，你信哪個？',
    category: '科技評論',
    emoji: '⚖️',
    readTime: 10,
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
    readTime: 9,
    date: '2026-05-15',
    excerpt: '從中國的數字人民幣到歐央行的數字歐元，各國央行正在加速布局數字貨幣。這場競賽將如何重塑全球金融秩序？',
    link: '/editorial/cbdc-global-race',
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
