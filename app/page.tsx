'use client'

import { useState, useEffect, useCallback } from 'react'
import { 
  Globe, DollarSign, Bitcoin, MapPin, 
  Moon, Sun, Volume2, VolumeX, Bookmark, 
  BookmarkCheck, Share2, Bell, BellOff,
  TrendingUp, TrendingDown, Minus, Search,
  ChevronDown, ChevronUp, Heart, HeartOff,
  Languages, Zap, Clock, Filter, RefreshCw,
  Newspaper, BarChart3, Tag, ExternalLink, Languages as LangIcon
} from 'lucide-react'

// Types
interface NewsItem {
  id: string
  title: string
  title_zh: string
  desc: string
  desc_zh: string
  link: string
  pubDate: string
  img: string
  img_url: string
  source: string
}

interface Analysis {
  summary_zh: string
  summary_en: string
  categories: {name: string, count: number}[]
  sentiment: {positive: number, negative: number, neutral: number}
  trends: string[]
  highlights: string[]
}

// Language options
const LANG_OPTIONS = [
  { id: 'zh', flag: '🇭🇰', label: '中文' },
  { id: 'en', flag: '🇺🇸', label: 'English' },
]

// Categories
const CATEGORIES = [
  { id: 'world', icon: Globe, emoji: '🌍', label: { zh: '國際', en: 'World' }, color: 'from-blue-500 to-cyan-500' },
  { id: 'finance', icon: DollarSign, emoji: '💰', label: { zh: '財經', en: 'Finance' }, color: 'from-green-500 to-emerald-500' },
  { id: 'crypto', icon: Bitcoin, emoji: '₿', label: { zh: '加密幣', en: 'Crypto' }, color: 'from-orange-500 to-yellow-500' },
  { id: 'hk', icon: MapPin, emoji: '🇭🇰', label: { zh: '香港', en: 'HK' }, color: 'from-red-500 to-pink-500' },
]

export default function NewsHub() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')
  const [darkMode, setDarkMode] = useState(true)
  const [category, setCategory] = useState('world')
  const [news, setNews] = useState<NewsItem[]>([])
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set())
  const [keywords, setKeywords] = useState<string[]>([])
  const [newKeyword, setNewKeyword] = useState('')
  const [speakingId, setSpeakingId] = useState<string | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [autoTranslate, setAutoTranslate] = useState(true)
  const [translating, setTranslating] = useState(false)

  const t = (zh: string, en: string) => lang === 'zh' ? zh : en

  // Fetch news
  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/news-feed?category=${category}&translate=${autoTranslate}`)
      const data = await res.json()
      if (data.success) {
        setNews(data.items || [])
      } else {
        setError(data.error || 'Failed to fetch')
      }
    } catch (err) {
      setError('Network error')
    }
    setLoading(false)
  }, [category, autoTranslate])

  // Fetch AI analysis
  const fetchAnalysis = useCallback(async () => {
    if (news.length === 0) return
    try {
      const res = await fetch('/api/ai-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: news.slice(0, 10) })
      })
      const data = await res.json()
      if (data.success) {
        setAnalysis(data.analysis)
      }
    } catch (err) {
      console.error('Analysis failed:', err)
    }
  }, [news])

  useEffect(() => { fetchNews() }, [fetchNews])
  useEffect(() => { if (news.length > 0) fetchAnalysis() }, [fetchAnalysis])

  // TTS
  const speak = (id: string, text: string) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel()
      setSpeakingId(null)
    } else {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = lang === 'zh' ? 'zh-HK' : 'en-US'
      u.onend = () => setSpeakingId(null)
      window.speechSynthesis.speak(u)
      setSpeakingId(id)
    }
  }

  // Save/Share
  const toggleSave = (id: string) => {
    const s = new Set(savedIds)
    s.has(id) ? s.delete(id) : s.add(id)
    setSavedIds(s)
  }

  const share = async (item: NewsItem) => {
    if (navigator.share) {
      await navigator.share({ title: item.title, url: item.link })
    } else {
      await navigator.clipboard.writeText(item.link)
      alert(t('連結已複製', 'Link copied'))
    }
  }

  // Keywords
  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()])
      setNewKeyword('')
    }
  }
  const removeKeyword = (k: string) => setKeywords(keywords.filter(x => x !== k))

  // Filter news by keywords
  const filteredNews = keywords.length > 0 
    ? news.filter(n => keywords.some(k => 
        n.title.toLowerCase().includes(k.toLowerCase()) ||
        n.title_zh.includes(k) ||
        n.desc.toLowerCase().includes(k.toLowerCase()) ||
        n.desc_zh.includes(k)
      ))
    : news

  const formatDate = (d: string) => {
    try { return new Date(d).toLocaleString(lang === 'zh' ? 'zh-HK' : 'en-US') }
    catch { return d }
  }

  const getCardImage = (item: NewsItem) => item.img_url || `https://picsum.photos/seed/${item.id}/400/300`

  // Get display text based on language
  const getDisplayTitle = (item: NewsItem) => {
    if (lang === 'zh') {
      return item.title_zh || item.title
    }
    return item.title
  }

  const getDisplayDesc = (item: NewsItem) => {
    if (lang === 'zh') {
      return item.desc_zh || item.desc
    }
    return item.desc
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? 'bg-slate-900/80 border-b border-slate-700' : 'bg-white/80 border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              📰 News AI Hub
            </h1>
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex gap-1">
                {LANG_OPTIONS.map(l => (
                  <button key={l.id} onClick={() => setLang(l.id as 'zh'|'en')}
                    className={`px-2 py-1 rounded text-sm ${lang === l.id ? 'bg-blue-500 text-white' : darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    {l.flag}
                  </button>
                ))}
              </div>
              {/* Auto Translate Toggle */}
              <button onClick={() => setAutoTranslate(!autoTranslate)}
                className={`p-2 rounded-full ${autoTranslate ? 'bg-green-500 text-white' : darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}
                title={t('自動翻譯', 'Auto Translate')}>
                <LangIcon className="w-5 h-5" />
              </button>
              {/* Dark Mode */}
              <button onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'}`}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {/* Analysis Toggle */}
              <button onClick={() => setShowAnalysis(!showAnalysis)}
                className={`p-2 rounded-full ${showAnalysis ? 'bg-purple-500 text-white' : darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <BarChart3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCategory(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${category === c.id 
                    ? `bg-gradient-to-r ${c.color} text-white shadow-lg` 
                    : darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'}`}>
                <span className="text-lg">{c.emoji}</span>
                {t(c.label.zh, c.label.en)}
              </button>
            ))}
          </div>

          {/* Keyword Tracker */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input value={newKeyword} onChange={e => setNewKeyword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addKeyword()}
                placeholder={t('追蹤關鍵字...', 'Track keywords...')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm ${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-300'} border`}
              />
              <button onClick={addKeyword} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                <Bell className="w-4 h-4" />
              </button>
            </div>
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map(k => (
                  <span key={k} 
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    <Bell className="w-3 h-3" />
                    {k}
                    <button onClick={() => removeKeyword(k)} className="ml-1 hover:text-red-400">×</button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* AI Analysis Panel */}
        {showAnalysis && analysis && (
          <div className={`mb-6 p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'}`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              {t('AI 分析', 'AI Analysis')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Summary */}
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                <h3 className="font-semibold mb-2">{t('摘要', 'Summary')}</h3>
                <p className="text-sm leading-relaxed">{lang === 'zh' ? analysis.summary_zh : analysis.summary_en}</p>
              </div>
              {/* Sentiment */}
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                <h3 className="font-semibold mb-2">{t('情感分析', 'Sentiment')}</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{analysis.sentiment.positive}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Minus className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{analysis.sentiment.neutral}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    <span className="text-sm">{analysis.sentiment.negative}%</span>
                  </div>
                </div>
              </div>
              {/* Trends */}
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                <h3 className="font-semibold mb-2">{t('趨勢', 'Trends')}</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.trends.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/20 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
              {/* Highlights */}
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                <h3 className="font-semibold mb-2">{t('重點', 'Highlights')}</h3>
                <ul className="text-sm space-y-1">
                  {analysis.highlights.map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg">{t('載入新聞中...', 'Loading news...')}</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={fetchNews} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              {t('重試', 'Retry')}
            </button>
          </div>
        ) : (
          <>
            {/* Stats Bar */}
            <div className={`flex items-center justify-between mb-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <span>{t(`共 ${filteredNews.length} 則新聞`, `${filteredNews.length} articles`)}</span>
              {autoTranslate && (
                <span className="flex items-center gap-1 text-green-500">
                  <LangIcon className="w-4 h-4" />
                  {t('自動翻譯', 'Auto Translate')}
                </span>
              )}
              {keywords.length > 0 && (
                <span className="flex items-center gap-1">
                  <Filter className="w-4 h-4" />
                  {t(`篩選: ${keywords.join(', ')}`, `Filter: ${keywords.join(', ')}`)}
                </span>
              )}
            </div>

            {/* News Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((item, idx) => (
                <article 
                  key={item.id || idx}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                    ${darkMode ? 'bg-slate-800/60 hover:bg-slate-700/60' : 'bg-white hover:bg-slate-50 shadow-lg'}`}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img src={getCardImage(item)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button onClick={e => { e.stopPropagation(); toggleSave(item.id) }}
                        className={`p-2 rounded-full backdrop-blur-sm transition ${savedIds.has(item.id) ? 'bg-pink-500 text-white' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                        {savedIds.has(item.id) ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                      <button onClick={e => { e.stopPropagation(); share(item) }}
                        className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full text-xs bg-black/50 text-white backdrop-blur-sm">
                      {item.source}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
                      {getDisplayTitle(item)}
                    </h3>
                    <p className={`text-sm line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {getDisplayDesc(item)}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {formatDate(item.pubDate)}
                      </span>
                      <div className="flex gap-2">
                        <button onClick={() => speak(item.id, getDisplayTitle(item))}
                          className={`p-1.5 rounded-full transition ${speakingId === item.id ? 'bg-blue-500 text-white' : darkMode ? 'hover:bg-slate-600' : 'hover:bg-slate-200'}`}>
                          {speakingId === item.id ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400">
                          {t('閱讀', 'Read')} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className={`mt-12 py-6 text-center text-sm ${darkMode ? 'text-slate-500 border-t border-slate-800' : 'text-slate-400 border-t border-slate-200'}`}>
        <p>📰 News AI Hub • {t('智能新聞聚合平台', 'Smart News Aggregator')}</p>
        <p className="mt-1">Built with Next.js + Vercel</p>
      </footer>
    </div>
  )
}
