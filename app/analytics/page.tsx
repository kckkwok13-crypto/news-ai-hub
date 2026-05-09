'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts'

// Mock data for demonstration - replace with actual API calls
const generateMockData = () => {
  const categories = ['finance', 'crypto', 'business', 'technology', 'astronomy', 'mystery', 'podcast']
  const categoryNames = ['財經', '加密幣', '商業', '科技', '天文', '神秘學', '網台']
  
  // Weekly news volume
  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const day = ['一', '二', '三', '四', '五', '六', '日'][i]
    return {
      day: `週${day}`,
      finance: Math.floor(Math.random() * 50) + 20,
      crypto: Math.floor(Math.random() * 40) + 10,
      business: Math.floor(Math.random() * 35) + 15,
      technology: Math.floor(Math.random() * 45) + 25,
    }
  })

  // Sentiment distribution
  const sentimentData = [
    { name: '正面', value: Math.floor(Math.random() * 30) + 40, color: '#22c55e' },
    { name: '中性', value: Math.floor(Math.random() * 20) + 30, color: '#6b7280' },
    { name: '負面', value: Math.floor(Math.random() * 15) + 10, color: '#ef4444' },
  ]

  // Category distribution
  const categoryDistribution = categories.map((cat, i) => ({
    name: categoryNames[i],
    value: Math.floor(Math.random() * 100) + 50,
    fill: ['#22c55e', '#f97316', '#a855f7', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][i]
  }))

  // Top keywords
  const keywords = [
    { keyword: '比特幣', count: 156, trend: '+12%' },
    { keyword: 'AI', count: 142, trend: '+8%' },
    { keyword: '美股', count: 98, trend: '+5%' },
    { keyword: '利率', count: 87, trend: '-3%' },
    { keyword: 'NASA', count: 76, trend: '+15%' },
    { keyword: '以太坊', count: 65, trend: '+7%' },
    { keyword: '科技股', count: 58, trend: '+2%' },
    { keyword: '區塊鏈', count: 52, trend: '+9%' },
    { keyword: '太空', count: 45, trend: '+18%' },
    { keyword: 'NFT', count: 38, trend: '-5%' },
  ]

  // Multi-perspective analysis mock
  const perspectives = [
    { 
      role: '阿傑 (分析師)',
      avatar: '👨‍💼',
      color: 'blue',
      views: [
        { aspect: '宏觀經濟', score: 75, description: '全球經濟復甦跡象明顯，但仍需關注通脹壓力' },
        { aspect: '技術面', score: 68, description: '科技板塊持續強勢，半導體需求暢旺' },
        { aspect: '風險評估', score: 62, description: '地緣政治風險上升，建議謹慎操作' },
      ]
    },
    { 
      role: '小婷 (策略師)',
      avatar: '👩‍💻',
      color: 'pink',
      views: [
        { aspect: '市場情緒', score: 72, description: '投資者情緒偏向樂觀，但需警惕回調' },
        { aspect: '資金流向', score: 85, description: '機構資金持續流入科技及新能源板塊' },
        { aspect: '機會捕捉', score: 78, description: '加密市場出現低位吸納機會' },
      ]
    },
    { 
      role: '老陳 (統計學家)',
      avatar: '📊',
      color: 'green',
      views: [
        { aspect: '數據置信度', score: 89, description: '樣本量充足，統計顯著性 p<0.05' },
        { aspect: '相關係數', score: 0.72, description: '比特幣與納指相關性顯著增強' },
        { aspect: '預測區間', score: 82, description: '下周市場有 68% 概率維持區間震盪' },
      ]
    },
  ]

  // Statistical metrics
  const stats = {
    totalNews: 2847,
    avgSentiment: 0.42,
    sentimentStdDev: 0.28,
    confidenceInterval: [0.38, 0.46],
    sampleSize: 1250,
    correlationCoefficient: 0.72,
    pValue: 0.023,
    chiSquare: 12.47,
  }

  return { weeklyData, sentimentData, categoryDistribution, keywords, perspectives, stats }
}

export default function AnalyticsPage() {
  const [data, setData] = useState<ReturnType<typeof generateMockData> | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'perspectives' | 'statistics'>('overview')
  const [selectedNews, setSelectedNews] = useState<any>(null)

  useEffect(() => {
    setData(generateMockData())
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray-400 hover:text-white text-sm">← 返回</Link>
            <div className="text-2xl">📊</div>
            <div>
              <h1 className="text-xl font-bold text-white">數據分析中心</h1>
              <p className="text-xs text-gray-400">NewsFlow Analytics</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistical Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard title="總新聞量" value={data.stats.totalNews.toLocaleString()} icon="📰" />
          <StatCard title="平均情感" value={data.stats.avgSentiment.toFixed(2)} icon="😊" />
          <StatCard title="相關係數" value={`r=${data.stats.correlationCoefficient}`} icon="📈" />
          <StatCard title="顯著性" value={`p=${data.stats.pValue}`} icon="🎯" sub={`(< 0.05)`} />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(['overview', 'perspectives', 'statistics'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'overview' ? '📊 總覽' : tab === 'perspectives' ? '🤖 多角度分析' : '📐 統計學'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Weekly Trend Chart */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-6">📈 每週新聞趨勢</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="finance" fill="#22c55e" name="財經" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="crypto" fill="#f97316" name="加密幣" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="technology" fill="#3b82f6" name="科技" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sentiment & Category Distribution */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sentiment Pie Chart */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-6">😊 情感分佈</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center text-sm text-gray-400">
                  基於 {data.stats.sampleSize.toLocaleString()} 樣本
                </div>
              </div>

              {/* Category Distribution */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-6">📊 類別分佈</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.categoryDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis type="number" stroke="#9ca3af" />
                      <YAxis dataKey="name" type="category" stroke="#9ca3af" width={80} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px' }}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {data.categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Top Keywords */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-6">🔥 熱門關鍵詞</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {data.keywords.map((kw, i) => (
                  <div key={i} className="bg-gray-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">#{kw.keyword}</div>
                    <div className="text-white font-bold">{kw.count}</div>
                    <div className={`text-xs ${kw.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {kw.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Perspectives Tab - Multi-angle AI Analysis */}
        {activeTab === 'perspectives' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">🤖 多角度 AI 分析</h3>
              <p className="text-gray-400 text-sm mb-6">
                同一篇新聞，從不同專業角度分析，提供更全面的觀點
              </p>
            </div>

            {data.perspectives.map((perspective, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{perspective.avatar}</div>
                  <div>
                    <h4 className={`font-bold ${
                      perspective.color === 'blue' ? 'text-blue-400' :
                      perspective.color === 'pink' ? 'text-pink-400' : 'text-green-400'
                    }`}>{perspective.role}</h4>
                    <p className="text-gray-500 text-sm">專業觀點分析</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {perspective.views.map((view, vIdx) => (
                    <div key={vIdx} className="bg-gray-700/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{view.aspect}</span>
                        <span className={`text-2xl font-bold ${
                          perspective.color === 'blue' ? 'text-blue-400' :
                          perspective.color === 'pink' ? 'text-pink-400' : 'text-green-400'
                        }`}>
                          {typeof view.score === 'number' && view.score > 1 
                            ? `${view.score}%` 
                            : `r=${view.score}`}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{view.description}</p>
                      <div className="mt-2 h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            perspective.color === 'blue' ? 'bg-blue-500' :
                            perspective.color === 'pink' ? 'bg-pink-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${typeof view.score === 'number' && view.score > 1 ? view.score : view.score * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Tab - Statistical Back up */}
        {activeTab === 'statistics' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-6">📐 統計學分析</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Confidence Interval */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-4">📊 置信區間 (Confidence Interval)</h4>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {data.stats.confidenceInterval[0]} - {data.stats.confidenceInterval[1]}
                  </div>
                  <p className="text-gray-400 text-sm">
                    我們有 95% 的信心認為總體平均值落在這個區間內
                  </p>
                  <div className="mt-4 h-4 bg-gray-600 rounded-full relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                      style={{ width: '30%' }}
                    />
                    <div 
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white"
                      style={{ left: `${40 + (data.stats.avgSentiment - data.stats.confidenceInterval[0]) / (data.stats.confidenceInterval[1] - data.stats.confidenceInterval[0]) * 20}%` }}
                    />
                  </div>
                </div>

                {/* P-Value Explanation */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-4">🎯 P 值 (P-Value)</h4>
                  <div className="text-3xl font-bold text-green-400 mb-2">p = {data.stats.pValue}</div>
                  <p className="text-gray-400 text-sm">
                    p 值小於 0.05，表示結果具有統計顯著性
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      data.stats.pValue < 0.05 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {data.stats.pValue < 0.05 ? '✓ 顯著' : '✗ 不顯著'}
                    </span>
                    <span className="text-gray-500 text-sm">
                      顯著性水平 α = 0.05
                    </span>
                  </div>
                </div>

                {/* Correlation Coefficient */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-4">📈 皮爾森相關係數</h4>
                  <div className="text-3xl font-bold text-purple-400 mb-2">r = {data.stats.correlationCoefficient}</div>
                  <p className="text-gray-400 text-sm">
                    比特幣價格與納斯達克指數呈強正相關
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-gray-500 text-sm">-1</span>
                    <div className="flex-1 h-2 bg-gradient-to-r from-red-500 via-gray-500 to-green-500 rounded-full" />
                    <span className="text-gray-500 text-sm">+1</span>
                    <div 
                      className="w-3 h-3 bg-white rounded-full absolute"
                      style={{ left: `${50 + data.stats.correlationCoefficient * 40}%` }}
                    />
                  </div>
                </div>

                {/* Chi-Square Test */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-4">📊 卡方檢定 (Chi-Square)</h4>
                  <div className="text-3xl font-bold text-orange-400 mb-2">χ² = {data.stats.chiSquare}</div>
                  <p className="text-gray-400 text-sm">
                    自由度 df = 4，檢定類別與情感之独立性
                  </p>
                  <div className="mt-4 text-xs text-gray-500">
                    臨界值 (α=0.05, df=4) = 9.488
                  </div>
                </div>
              </div>

              {/* Sample Size & Standard Deviation */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{data.stats.sampleSize.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">樣本大小 (n)</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">σ = {data.stats.sentimentStdDev}</div>
                  <div className="text-gray-400 text-sm">標準差 (Std Dev)</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">x̄ = {data.stats.avgSentiment}</div>
                  <div className="text-gray-400 text-sm">平均值 (Mean)</div>
                </div>
              </div>
            </div>

            {/* Formula Reference */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">📚 統計公式參考</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-blue-400 font-mono mb-2">置信區間</div>
                  <div className="text-gray-300">x̄ ± z(α/2) × (σ/√n)</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-blue-400 font-mono mb-2">皮爾森相關係數</div>
                  <div className="text-gray-300">r = Σ(x-x̄)(y-ȳ) / √[Σ(x-x̄)²Σ(y-ȳ)²]</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-blue-400 font-mono mb-2">標準差</div>
                  <div className="text-gray-300">σ = √[Σ(x-x̄)²/n]</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-blue-400 font-mono mb-2">卡方統計量</div>
                  <div className="text-gray-300">χ² = Σ[(O-E)²/E]</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, sub }: { title: string; value: string; icon: string; sub?: string }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
      <div className="flex items-center gap-2 mb-2">
        <span>{icon}</span>
        <span className="text-gray-400 text-sm">{title}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    </div>
  )
}