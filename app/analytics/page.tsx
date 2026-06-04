'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, Users, Clock, BarChart3, Calculator, AlertCircle, Info } from 'lucide-react'

// Dynamically import Recharts to avoid SSR issues
const DynamicBarChart = dynamic(() => import('recharts').then(mod => ({ default: mod.BarChart })), { ssr: false })
const DynamicBar = dynamic(() => import('recharts').then(mod => ({ default: mod.Bar })), { ssr: false })
const DynamicXAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false })
const DynamicYAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false })
const DynamicCartesianGrid = dynamic(() => import('recharts').then(mod => ({ default: mod.CartesianGrid })), { ssr: false })
const DynamicTooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false })
const DynamicPieChart = dynamic(() => import('recharts').then(mod => ({ default: mod.PieChart })), { ssr: false })
const DynamicPie = dynamic(() => import('recharts').then(mod => ({ default: mod.Pie })), { ssr: false })
const DynamicCell = dynamic(() => import('recharts').then(mod => ({ default: mod.Cell })), { ssr: false })
const DynamicResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false })

// Statistical functions
function mean(arr: number[]): number {
  return arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
}

function variance(arr: number[]): number {
  if (arr.length === 0) return 0
  const m = mean(arr)
  return arr.reduce((sum, val) => sum + Math.pow(val - m, 2), 0) / arr.length
}

function stdDev(arr: number[]): number {
  return Math.sqrt(variance(arr))
}

// Confidence Interval (95%)
function confidenceInterval(arr: number[]): { lower: number; upper: number; margin: number } {
  if (arr.length < 2) return { lower: 0, upper: 0, margin: 0 }
  const m = mean(arr)
  const s = stdDev(arr)
  const n = arr.length
  const t = 1.96 // approx for 95% CI with large n
  const margin = t * s / Math.sqrt(n)
  return { lower: m - margin, upper: m + margin, margin }
}

// P-value (simplified - probability of seeing this result or more extreme)
function pValue(observations: number[], expected: number): number {
  const n = observations.length
  if (n === 0) return 1
  const obsMean = mean(observations)
  const diff = Math.abs(obsMean - expected)
  const se = stdDev(observations) / Math.sqrt(n)
  if (se === 0) return 1
  const z = diff / se
  return 2 * (1 - normalCDF(Math.abs(z)))
}

function normalCDF(z: number): number {
  const a1 = 0.254829592, a2 = -0.32252431, a3 = 0.049867347, a4 = -0.00326813, a5 = 0.0000487411
  const p = 0.3275911
  const sign = z < 0 ? -1 : 1
  z = Math.abs(z) / Math.sqrt(2)
  const t = 1 / (1 + p * z)
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t) + a2) * t * Math.exp(-z * z)
  return 0.5 * (1 + sign * y)
}

// Pearson Correlation Coefficient
function correlation(x: number[], y: number[]): number {
  if (x.length !== y.length || x.length < 2) return 0
  const n = x.length
  const meanX = mean(x)
  const meanY = mean(y)
  let num = 0, denX = 0, denY = 0
  for (let i = 0; i < n; i++) {
    num += (x[i] - meanX) * (y[i] - meanY)
    denX += Math.pow(x[i] - meanX, 2)
    denY += Math.pow(y[i] - meanY, 2)
  }
  const den = Math.sqrt(denX * denY)
  return den === 0 ? 0 : num / den
}

// Chi-Square Test
function chiSquareTest(observed: number[], expected: number[]): { chiSquare: number; pValue: number; significant: boolean } {
  if (observed.length !== expected.length || observed.length === 0) {
    return { chiSquare: 0, pValue: 1, significant: false }
  }
  let chiSq = 0
  for (let i = 0; i < observed.length; i++) {
    if (expected[i] > 0) {
      chiSq += Math.pow(observed[i] - expected[i], 2) / expected[i]
    }
  }
  const df = observed.length - 1
  const pVal = 1 - gammaCDF(chiSq / 2, df / 2)
  return { chiSquare: chiSq, pValue: pVal, significant: pVal < 0.05 }
}

function gammaCDF(x: number, a: number): number {
  if (x === 0) return 0
  if (a <= 0) return 0
  // Simple approximation for gamma CDF
  let sum = 0
  for (let k = 0; k < a; k++) {
    sum += Math.pow(x, k) / factorial(k)
  }
  return Math.exp(-x) * sum
}

function factorial(n: number): number {
  if (n <= 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) result *= i
  return result
}

export default function AnalyticsPage() {
  const [weeklyData, setWeeklyData] = useState<any[]>([])
  const [categoryData, setCategoryData] = useState<any[]>([])
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated news data (in production, this would come from your API)
    const generateData = () => {
      // Weekly news count (last 12 weeks)
      const weeks = []
      const now = new Date()
      for (let i = 11; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - i * 7)
        weeks.push({
          week: `W${12 - i}`,
          date: date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' }),
          count: Math.floor(Math.random() * 50) + 20,
          analyzed: Math.floor(Math.random() * 30) + 10
        })
      }
      setWeeklyData(weeks)

      // Category distribution
      const categories = [
        { name: '💰 財經', value: 28, color: '#10b981' },
        { name: '₿ 加密貨幣', value: 18, color: '#f59e0b' },
        { name: '🚀 科技', value: 22, color: '#3b82f6' },
        { name: '🔭 天文', value: 8, color: '#8b5cf6' },
        { name: '🔮 神秘學', value: 6, color: '#ec4899' },
        { name: '🏥 健康', value: 10, color: '#ef4444' },
        { name: '🎬 娛樂', value: 8, color: '#06b6d4' },
      ]
      setCategoryData(categories)

      // Calculate statistics
      const counts = weeks.map(w => w.count)
      const analyzedCounts = weeks.map(w => w.analyzed)

      const ci = confidenceInterval(counts)
      const pVal = pValue(counts, mean(counts))
      const corr = correlation(counts, analyzedCounts)

      // Chi-square test: observed vs expected (均匀分布)
      const expected = counts.map(() => mean(counts))
      const chiResult = chiSquareTest(counts, expected)

      setStats({
        totalArticles: counts.reduce((a, b) => a + b, 0),
        avgPerWeek: mean(counts).toFixed(1),
        stdDev: stdDev(counts).toFixed(2),
        ci95: { lower: ci.lower.toFixed(1), upper: ci.upper.toFixed(1), margin: ci.margin.toFixed(1) },
        pValue: pVal.toFixed(4),
        correlation: corr.toFixed(3),
        chiSquare: chiResult.chiSquare.toFixed(3),
        chiPValue: chiResult.pValue.toFixed(4),
        isSignificant: chiResult.significant
      })
    }

    generateData()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">📊</div>
            <div>
              <h1 className="text-xl font-bold text-white">數據分析中心</h1>
              <p className="text-xs text-gray-400">AI 新聞趨勢與統計分析</p>
            </div>
          </div>
          <a href="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
            ← 返回首頁
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon="📰" label="總新聞數" value={stats?.totalArticles || 0} />
          <StatCard icon="📈" label="每週平均" value={stats?.avgPerWeek || 0} />
          <StatCard icon="📉" label="標準差" value={stats?.stdDev || 0} />
          <StatCard icon="🔗" label="相關係數" value={stats?.correlation || 0} highlight />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Weekly Trend */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart3 size={20} /> 每週新聞趨勢
            </h3>
            <DynamicResponsiveContainer width="100%" height={300}>
              <DynamicBarChart data={weeklyData}>
                <DynamicCartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <DynamicXAxis dataKey="week" stroke="#9ca3af" fontSize={12} />
                <DynamicYAxis stroke="#9ca3af" fontSize={12} />
                <DynamicTooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <DynamicBar dataKey="count" fill="#3b82f6" name="新聞數量" radius={[4, 4, 0, 0]} />
                <DynamicBar dataKey="analyzed" fill="#8b5cf6" name="已分析" radius={[4, 4, 0, 0]} />
              </DynamicBarChart>
            </DynamicResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <PieChart /> 分類分佈
            </h3>
            <DynamicResponsiveContainer width="100%" height={300}>
              <DynamicPieChart>
                <DynamicPie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <DynamicCell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </DynamicPie>
                <DynamicTooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                />
              </DynamicPieChart>
            </DynamicResponsiveContainer>
          </div>
        </div>

        {/* Statistical Analysis */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Calculator size={20} /> 統計學分析
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Confidence Interval */}
            <div className="bg-gray-700/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <TrendingUp size={20} className="text-blue-400" />
                </div>
                <h4 className="font-semibold text-white">95% 置信區間</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">下限:</span>
                  <span className="text-white font-mono">{stats?.ci95?.lower}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">上限:</span>
                  <span className="text-white font-mono">{stats?.ci95?.upper}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">誤差範圍:</span>
                  <span className="text-blue-400 font-mono">±{stats?.ci95?.margin}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                真正的平均值有 95% 機會落在 {stats?.ci95?.lower} - {stats?.ci95?.upper} 之間
              </p>
            </div>

            {/* P-Value */}
            <div className="bg-gray-700/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <AlertCircle size={20} className="text-purple-400" />
                </div>
                <h4 className="font-semibold text-white">P 值</h4>
              </div>
              <div className="text-3xl font-bold text-white font-mono mb-2">
                {stats?.pValue}
              </div>
              <div className={`text-sm ${parseFloat(stats?.pValue) < 0.05 ? 'text-green-400' : 'text-yellow-400'}`}>
                {parseFloat(stats?.pValue) < 0.05 ? '✓ 統計顯著' : '⚠ 接近顯著邊緣'}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                P &lt; 0.05 表示結果具有統計顯著性
              </p>
            </div>

            {/* Correlation */}
            <div className="bg-gray-700/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users size={20} className="text-green-400" />
                </div>
                <h4 className="font-semibold text-white">相關係數</h4>
              </div>
              <div className="text-3xl font-bold text-white font-mono mb-2">
                r = {stats?.correlation}
              </div>
              <div className="text-sm text-gray-300">
                {parseFloat(stats?.correlation) > 0.7 ? '📗 強正相關' :
                 parseFloat(stats?.correlation) > 0.3 ? '📙 中等正相關' :
                 parseFloat(stats?.correlation) > -0.3 ? '📘 弱相關' :
                 '📕 負相關'}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                r &gt; 0.7 表示新聞數量與分析數量高度相關
              </p>
            </div>

            {/* Chi-Square */}
            <div className="bg-gray-700/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Calculator size={20} className="text-orange-400" />
                </div>
                <h4 className="font-semibold text-white">卡方檢定</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">χ²:</span>
                  <span className="text-white font-mono">{stats?.chiSquare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">P 值:</span>
                  <span className="text-white font-mono">{stats?.chiPValue}</span>
                </div>
                <div className={`text-sm ${stats?.isSignificant ? 'text-green-400' : 'text-yellow-400'}`}>
                  {stats?.isSignificant ? '✓ 分布不均勻' : '⚠ 分布接近均勻'}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                檢定每週新聞數量是否符合均勻分佈
              </p>
            </div>
          </div>
        </div>

        {/* Topic Suggestions */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Info size={20} /> 推薦主題（廣告友好）
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: '💻', name: '科技', desc: 'AI、軟件、硬件' },
              { icon: '💰', name: '財經', desc: '股市、投資、加密幣' },
              { icon: '🔭', name: '天文', desc: 'NASA、宇宙探索' },
              { icon: '🔮', name: '神秘學', desc: '超自然、未解之謎' },
              { icon: '🏥', name: '健康', desc: '醫學、養生、運動' },
              { icon: '🎮', name: '遊戲', desc: '電競、RPG、主機遊戲' },
              { icon: '🎬', name: '娛樂', desc: '電影、音樂、明星' },
              { icon: '🍜', name: '美食', desc: '食譜、餐廳、烹飪' },
              { icon: '✈️', name: '旅遊', desc: '景點攻略、旅行见闻' },
              { icon: '🎨', name: '藝術', desc: '設計、插画、摄影' },
              { icon: '📱', name: '手機', desc: 'iPhone、Android、新機' },
              { icon: '🤖', name: 'AI', desc: 'ChatGPT、機械人、技術' },
            ].map((topic) => (
              <div key={topic.name} className="bg-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-700/50 transition cursor-pointer">
                <div className="text-2xl mb-1">{topic.icon}</div>
                <div className="text-white font-medium text-sm">{topic.name}</div>
                <div className="text-gray-500 text-xs">{topic.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <h4 className="text-yellow-400 font-semibold mb-2">⚠️ 版權聲明</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            本網站僅使用 AI 技術對新聞進行摘要與分析，所有新聞標題、連結及圖片版權歸各原始新聞來源所有。
            我們不複製或儲存完整新聞內容，仅提取关键信息生成简短摘要，供用户参考。
            如有任何版权问题，请联系相应新闻来源。本网站仅供信息聚合与 AI 分析用途。
          </p>
        </div>
      </div>
    </main>
  )
}

function StatCard({ icon, label, value, highlight }: { icon: string; label: string; value: any; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'bg-purple-600/20 border-purple-500/50' : 'bg-gray-800/50 border-gray-700'}`}>
      <div className="flex items-center gap-2 mb-1">
        <span>{icon}</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <div className={`text-2xl font-bold ${highlight ? 'text-purple-400' : 'text-white'}`}>
        {value}
      </div>
    </div>
  )
}
