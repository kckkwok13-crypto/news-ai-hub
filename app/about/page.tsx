'use client'

import { useState } from 'react'
import { ChevronLeft, Zap, Shield, Users, Sparkles, BookOpen, Heart, Code } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [darkMode] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返回首頁
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            關於 NewsFlow
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            NewsFlow 係一個 AI 驅動嘅智能新聞平台，專注於為你精選同總結有價值嘅資訊，節省你嘅時間。
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <Sparkles className="w-10 h-10 text-yellow-400 mb-4" />
            <h2 className="text-xl font-bold mb-3">AI 智能總結</h2>
            <p className="text-gray-400">
              利用先進 AI 技術自動分析同總結新聞重點，幫你喺資訊爆炸嘅時代快速掌握重點。
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <BookOpen className="w-10 h-10 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold mb-3">多元話題</h2>
            <p className="text-gray-400">
              涵蓋科技、財經、遊戲、美食、旅遊、天文、藝術等多個領域，滿足你嘅多元興趣。
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <Shield className="w-10 h-10 text-green-400 mb-4" />
            <h2 className="text-xl font-bold mb-3">版權合規</h2>
            <p className="text-gray-400">
              我哋只係用 AI 總結新聞要點，所有新聞內容版權歸各自媒體原作者所有，我哋唔會複制或儲存完整內容。
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <Heart className="w-10 h-10 text-red-400 mb-4" />
            <h2 className="text-xl font-bold mb-3">用戶至上</h2>
            <p className="text-gray-400">
              我哋致力為你提供最佳嘅新聞閱讀體驗，根據你嘅興趣偏好推薦相關內容。
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📋 版權說明</h2>
          <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50 text-gray-300 space-y-4">
            <p>
              <strong className="text-yellow-400">重要提示：</strong>NewsFlow 唔係新聞網站，我哋唔會複制、儲存或重新發布任何新聞文章嘅完整內容。
            </p>
            <p>
              我哋嘅服務係：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>使用 AI 為你總結新聞要點同精華</li>
              <li>提供新聞連結，引導你到原創媒體閱讀完整內容</li>
              <li>根據你嘅興趣偏好推薦相關話題</li>
              <li>展示來自不同來源嘅新聞標題同摘要</li>
            </ul>
            <p>
              所有新聞內容嘅版權歸各自媒體原作者或新聞機構所有。任何人員、商業實體或媒體如有任何版權問題，請聯絡我哋，我哋會立即刪除相關內容。
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">🤖 AI 服務說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>
              NewsFlow 使用 AI 技術為你提供以下服務：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>智能摘要：</strong>AI 自動生成新聞要點總結</li>
              <li><strong>多角度分析：</strong>從唔同立場解讀新聞事件</li>
              <li><strong>趨勢追蹤：</strong>分析新聞趨勢同熱點話題</li>
              <li><strong>情緒分析：</strong>追蹤新聞情緒變化</li>
              <li><strong>統計報告：</strong>提供數據分析同可視化圖表</li>
            </ul>
            <p>
              我哋嘅 AI 分析僅供參考，唔代表我哋立場。我哋致力保持客觀、中立嘅態度。
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📌 廣告說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p>
              NewsFlow 可能會展示第三方廣告，以支持我哋嘅運營成本。所有廣告內容由第三方廣告平台提供，我哋唔對廣告內容負責。
            </p>
            <p className="mt-4">
              如果你發現任何問題廣告或有不當內容，請聯絡我哋，我哋會盡快處理。
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 我哋嘅價值</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold mb-2">節省時間</h3>
              <p className="text-sm text-gray-400">AI 總結幫你快速了解新聞重點</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">興趣導向</h3>
              <p className="text-sm text-gray-400">根據你嘅興趣推薦相關內容</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">數據洞察</h3>
              <p className="text-sm text-gray-400">統計分析助你了解新聞趨勢</p>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 NewsFlow · AI 驅動的智能新聞平台</p>
          <p className="mt-2 text-sm">
            所有新聞版權歸各媒體原作者所有 | 網站內容僅供參考
          </p>
        </footer>
      </div>
    </div>
  )
}