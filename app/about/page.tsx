'use client'

import { ChevronLeft, Sparkles, Shield, Users, Heart, Code, Globe, Mic, BarChart3, FileText } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
            NewsFlow 是一個 AI 驅動的智能新聞平台，專注於為你精選同總結有價值的資訊，節省你的時間。
          </p>
        </header>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            我們的服務
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <Mic className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">AI 新聞分析</h3>
              <p className="text-gray-400">
                利用先進 AI 技術自動分析同總結新聞重點，以雙主持人對話形式為你深入解讀新聞事件，幫你在資訊爆炸的時代快速掌握重點。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <Globe className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">多語言翻譯</h3>
              <p className="text-gray-400">
                支援繁體中文、簡體中文同英文即時翻譯，打破語言障礙，讓你輕鬆閱讀全球資訊。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <BarChart3 className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">數據新聞</h3>
              <p className="text-gray-400">
                追蹤 GDP、數碼經濟、人口統計等官方數據，以可視化方式呈現複雜的經濟指標。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <FileText className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">旅遊指南</h3>
              <p className="text-gray-400">
                為你整理東京、巴黎、首爾等熱門旅遊城市的詳細指南，包括景點、美食、交通實用資訊。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            平台特色
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <Sparkles className="w-10 h-10 text-yellow-400 mb-4" />
              <h2 className="text-xl font-bold mb-3">AI 智能總結</h2>
              <p className="text-gray-400">
                利用先進 AI 技術自動分析同總結新聞重點，幫你喺資訊爆炸的時代快速掌握重點。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <FileText className="w-10 h-10 text-blue-400 mb-4" />
              <h2 className="text-xl font-bold mb-3">多元話題</h2>
              <p className="text-gray-400">
                涵蓋科技、財經、遊戲、美食、旅遊、天文、藝術等多個領域，滿足你的多元興趣。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <Shield className="w-10 h-10 text-green-400 mb-4" />
              <h2 className="text-xl font-bold mb-3">版權合規</h2>
              <p className="text-gray-400">
                我哋只係用 AI 總結新聞要點，所有新聞內容版權歸各自媒體原作者所有，我哋唔會複製或儲存完整內容。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <Heart className="w-10 h-10 text-red-400 mb-4" />
              <h2 className="text-xl font-bold mb-3">用戶至上</h2>
              <p className="text-gray-400">
                我哋致力為你提供最佳的、新聞閱讀體驗，根據你的興趣偏好推薦相關內容。
              </p>
            </div>
          </div>
        </section>

        {/* Original Content Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            原創內容聲明
          </h2>
          <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50 text-gray-300 space-y-4">
            <p>
              <strong className="text-yellow-400">重要提示：</strong>NewsFlow 不是新聞網站，我哋不會複製、儲存或重新發布任何新聞文章的完整內容。
            </p>
            <p>
              我哋的服務是：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>使用 AI 為你總結新聞要點同精華</li>
              <li>提供新聞連結，引導你到原創媒體閱讀完整內容</li>
              <li>根據你的興趣偏好推薦相關話題</li>
              <li>展示來自不同來源的、新聞標題同摘要</li>
              <li>提供旅遊指南、數據新聞等原創欄目</li>
            </ul>
            <p>
              所有新聞內容的版權歸各自媒體原作者或新聞機構所有。任何人員、商業實體或媒體如有任何版權問題，請聯絡我哋，我哋會立即刪除相關內容。
            </p>
          </div>
        </section>

        {/* AI Service */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">🤖 AI 服務說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>NewsFlow 使用 AI 技術為你提供以下服務：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>智能摘要：</strong>AI 自動生成新聞要點總結</li>
              <li><strong>雙主持人分析：</strong>以對話形式深入解讀新聞事件</li>
              <li><strong>多角度分析：</strong>從不同立場解讀新聞事件</li>
              <li><strong>立場分析：</strong>追蹤新聞來源立場同情緒變化</li>
              <li><strong>統計報告：</strong>提供數據分析同可視化圖表</li>
            </ul>
            <p>
              我哋的 AI 分析僅供參考，不代表我哋立場。我哋致力保持客觀、中立的態度。
            </p>
          </div>
        </section>

        {/* Ad Disclosure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📌 廣告說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p>
              NewsFlow 可能會展示第三方廣告，以支持我哋的運營成本。所有廣告內容由第三方廣告平台提供，我哋不對廣告內容負責。
            </p>
            <p className="mt-4">
              如果你發現任何問題廣告或有不當內容，請聯絡我哋，我哋會盡快處理。
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 我哋的價值</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold mb-2">節省時間</h3>
              <p className="text-sm text-gray-400">AI 總結幫你快速了解新聞重點</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">興趣導向</h3>
              <p className="text-sm text-gray-400">根據你的興趣推薦相關內容</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">數據洞察</h3>
              <p className="text-sm text-gray-400">統計分析助你了解新聞趨勢</p>
            </div>
          </div>
        </section>

        {/* Team/Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            NewsFlow 編輯團隊
          </h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p className="mb-6">
              NewsFlow 由專業編輯團隊營運，致力於為用戶提供高質量的新聞資訊服務。我們的團隊成員擁有多年媒體、資訊科技和數據分析經驗。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">📰</div>
                <h3 className="font-bold text-white text-sm mb-1">主編</h3>
                <p className="text-xs text-gray-400">新聞來源審核、內容質量把關</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="font-bold text-white text-sm mb-1">AI 內容主任</h3>
                <p className="text-xs text-gray-400">AI 摘要流程監督、事實核查</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-bold text-white text-sm mb-1">數據分析師</h3>
                <p className="text-xs text-gray-400">數據新聞、視覺化圖表</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-amber-400">
              <strong>注意：</strong>NewsFlow 的新聞內容由編輯團隊負責，所有 AI 輔助生成的摘要均經過人工審核，確保資訊的準確性和可靠性。旅遊指南內容則由獨立作者提供。
            </p>
          </div>
        </section>

        {/* About the Author - Travel Content Only */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">👤 旅遊內容作者：純粹旅人</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-4xl shadow-lg">
                🌍
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">純粹旅人 Pure Traveler</h3>
                <p className="text-sm text-emerald-400 mb-3">旅行博主 · 攝影愛好者 · 文字工作者</p>
                <p className="mb-4">
                  你好！我係「純粹旅人」，一個熱愛探索世界每個角落嘅旅行者。我相信最好的旅行體驗，
                  唔係打卡式嘅走馬觀花，而係用心感受每一個城市的溫度、每一條街道的故事。
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="text-amber-400">📸 旅行攝影</span>
                  <span className="text-blue-400">✈️ 深度遊記</span>
                  <span className="text-purple-400">📚 文化探索</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  <strong>聲明：</strong>純粹旅人僅負責 NewsFlow 的旅遊指南內容（blog 目錄下的旅行文章）。新聞資訊彙總服務由 NewsFlow 編輯團隊獨立營運。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📧 聯絡方式</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p className="mb-4">
              NewsFlow 由獨立的個人開發者創建和維護。這是一個興趣項目，致力於為用戶提供便捷的新聞閱讀體驗。
            </p>
            <p className="text-blue-400">
              聯絡 Email：kckkwok13@gmail.com
            </p>
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
