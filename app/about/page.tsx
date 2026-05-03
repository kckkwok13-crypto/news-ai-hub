'use client'

import { useState } from 'react'
import { ChevronLeft, Globe, Zap, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [darkMode] = useState(true)

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返去首頁
        </Link>

        <header className="mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            關於 NewsFlow
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            NewsFlow 係一個由 AI 驅動嘅全球新聞聚合平台，旨在為用戶提供最快、最準、最全面嘅資訊體驗。
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
            <Zap className="w-10 h-10 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-3">AI 驅動</h2>
            <p className="text-slate-400">利用先進嘅 AI 技術，自動總結新聞重點，幫你喺資訊爆炸嘅時代節省時間。</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
            <Globe className="w-10 h-10 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-3">全球視野</h2>
            <p className="text-slate-400">匯集全球頂尖媒體來源，包括 BBC、Bloomberg、Reuters 等，確保你掌握第一手國際資訊。</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
            <Shield className="w-10 h-10 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-3">客觀中立</h2>
            <p className="text-slate-400">我哋致力於呈現多元觀點，減少資訊繭房嘅影響，提供更平衡嘅新聞視角。</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
            <Users className="w-10 h-10 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-3">在地情懷</h2>
            <p className="text-slate-400">特別關注香港及亞洲地區嘅財經、科技動態，為本地用戶提供最有價值嘅內容。</p>
          </div>
        </div>

        <section className="prose prose-invert max-w-none text-slate-300">
          <h2 className="text-3xl font-bold text-white mb-6">我哋嘅使命</h2>
          <p className="mb-4">
            喺呢個假新聞同資訊泛濫嘅年代，獲取高品質嘅資訊變得前所未有咁重要。NewsFlow 嘅使命係通過科技力量，將複雜嘅全球動態轉化為易於理解、即時更新嘅內容。
          </p>
          <p>
            無論係加密貨幣嘅波動、國際政局嘅轉變，定係本地財經嘅脈搏，NewsFlow 都會係你最可靠嘅資訊夥伴。
          </p>
        </section>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© 2026 NewsFlow · AI-Powered Global News</p>
        </footer>
      </div>
    </div>
  )
}
