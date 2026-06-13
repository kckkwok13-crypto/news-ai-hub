'use client'

import { ChevronLeft, Sparkles, Shield, Users, Heart, Code, Globe, Mic, BarChart3, FileText, Newspaper, Radio, BookOpen, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返回首頁
        </Link>

        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            關於 NewsKingdom
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            你的智能新聞嚮導 — 薈萃全球資訊，用 AI 為你深度解讀每一個重要故事
          </p>
        </header>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-blue-400" />
            我們的使命
          </h2>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              NewsKingdom 是一個 AI 驅動的智能新聞平台，每日為你精選來自 Bloomberg、MarketWatch、Investing.com、CNBC、BBC 等權威媒體的最新資訊。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我們的使命係幫你在資訊爆炸的時代，快速掌握全球動態。我哋唔只係資訊嘅搬運工，更係你嘅新聞嚮導，用 AI 為你分析、總結、翻譯，讓你唔使睇完全部新聞就知道今日發生咩事。
            </p>
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            核心服務
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <Mic className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">AI 新聞主播</h3>
              <p className="text-gray-400">
                我哋的 AI 雙主持人會以生動有趣嘅對話形式，為你深入分析每日新聞大事。唔使睇長文，聽幾分鐘就知事件來龍去脈。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <Globe className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">智能翻譯</h3>
              <p className="text-gray-400">
                一鍵將英文新聞翻譯成繁體中文，打破語言障礙。無論係 Bloomberg 嘅財經分析，定係 BBC 嘅國際新聞，全部即刻變中文。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <BarChart3 className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">數據新聞</h3>
              <p className="text-gray-400">
                追蹤 GDP、數碼經濟、人口統計、AI 發展等官方數據，以互動圖表呈現，幫你用數字理解世界。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <BookOpen className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">深度專題</h3>
              <p className="text-gray-400">
                我哋的編輯團隊為你準備深度分析文章，涵蓋財經投資、健康養生、加密貨幣、AI 科技等熱門話題，全部附有數據圖表。
              </p>
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-400" />
            新聞分類
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💰', name: '財經投資', color: 'from-yellow-500 to-amber-600' },
              { icon: '🏥', name: '健康養生', color: 'from-green-500 to-emerald-600' },
              { icon: '🔭', name: '天文探索', color: 'from-blue-500 to-indigo-600' },
              { icon: '🔮', name: '神秘世界', color: 'from-purple-500 to-violet-600' },
              { icon: '🎮', name: '電玩遊戲', color: 'from-cyan-500 to-teal-600' },
              { icon: '🎨', name: '藝術文化', color: 'from-pink-500 to-rose-600' },
              { icon: '💼', name: '商業科技', color: 'from-indigo-500 to-blue-600' },
              { icon: '🍜', name: '美食天地', color: 'from-orange-500 to-amber-600' },
              { icon: '✈️', name: '旅遊探索', color: 'from-teal-500 to-cyan-600' },
              { icon: '🤖', name: 'AI 科技', color: 'from-rose-500 to-pink-600' },
              { icon: '₿', name: '加密貨幣', color: 'from-amber-500 to-yellow-600' },
              { icon: '📊', name: '數據新聞', color: 'from-violet-500 to-purple-600' },
            ].map((cat) => (
              <div key={cat.name} className={`p-4 rounded-xl bg-gradient-to-r ${cat.color} bg-opacity-20 border border-gray-700 text-center`}>
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-400" />
            旅遊指南
          </h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              除咗新聞資訊，NewsKingdom 仲為你準備咗詳盡嘅旅遊指南。我哋涵蓋日本、歐洲多個熱門城市，包括東京、巴黎、倫敦、巴塞羅那、羅馬、慕尼黑、柏林等。
            </p>
            <p className="text-gray-400 text-sm">
              每篇旅遊指南都包含景點介紹、交通指引、美食推薦、拍攝技巧、遊覽時間建議等實用資訊，全部由編輯團隊實地考察後撰寫。
            </p>
          </div>
        </section>

        {/* Podcast Feature */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Radio className="w-6 h-6 text-pink-400" />
            AI 播客功能
          </h2>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-700/50">
            <p className="text-gray-300 mb-4">
              NewsKingdom 獨家提供 AI 播客生成功能。我哋的 AI 主持人會為你朗讀新聞摘要，你唔使自己睇，一邊做運動、搭車、一邊聽新聞就得。
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
              <li>支援多種語音風格（活潑、沉穩、新聞主播）</li>
              <li>可以調整播報速度</li>
              <li>自動生成章節標記，方便跳轉</li>
              <li>支援下載離線收聽</li>
            </ul>
          </div>
        </section>

        {/* Platform Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">✨ 平台特色</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700">
              <Sparkles className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">智能總結</h3>
              <p className="text-sm text-gray-400">AI 自動生成新聞要點，幾秒鐘掌握重點</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700">
              <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">來源可靠</h3>
              <p className="text-sm text-gray-400">精選 Bloomberg、CNBC、BBC 等權威媒體</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700">
              <Heart className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">用戶至上</h3>
              <p className="text-sm text-gray-400">根據你的興趣推薦相關內容</p>
            </div>
          </div>
        </section>

        {/* Copyright Notice */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            版權說明
          </h2>
          <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50 text-gray-300 space-y-4">
            <p>
              <strong className="text-yellow-400">重要聲明：</strong>NewsKingdom 是一個新聞資訊聚合平台，並非新聞網站。我哋唔會複製、儲存或重新發布任何新聞文章嘅完整內容。
            </p>
            <p>
              我哋的服務包括：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>使用 AI 為你總結新聞要點同精華</li>
              <li>提供新聞連結，引導你到原創媒體閱讀完整內容</li>
              <li>展示來自不同來源的新聞標題、摘要同圖片</li>
              <li>所有新聞內容的版權歸各自媒體原作者或新聞機構所有</li>
            </ul>
            <p className="text-amber-400">
              如有任何媒體對內容版權有疑問，請聯絡我哋，我哋會立即移除相關內容。
            </p>
          </div>
        </section>

        {/* AI Disclosure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">🤖 AI 服務說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>NewsKingdom 使用 AI 技術提供以下服務：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>智能翻譯：</strong>將英文新聞翻譯成繁體中文</li>
              <li><strong>AI 摘要：</strong>自動生成新聞要點總結</li>
              <li><strong>新聞主播：</strong>AI 雙主持人以對話形式解讀新聞</li>
              <li><strong>播客生成：</strong>將新聞轉換為語音播報</li>
              <li><strong>數據分析：</strong>統計分析同可視化圖表</li>
            </ul>
            <p className="text-sm text-gray-400">
              我哋的 AI 分析僅供參考，不代表 NewsKingdom 的立場。我哋致力保持客觀、中立的態度。
            </p>
          </div>
        </section>

        {/* Ad Disclosure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📢 廣告說明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>
              NewsKingdom 展示 Google AdSense 廣告以支持網站運營成本。所有廣告內容由 Google 廣告平台提供，我哋不對廣告內容負責。
            </p>
            <p>
              廣告會以「Advertisement」標記清楚標示，與編輯內容分開。我哋確保廣告唔會影響新聞資訊的準確性同公正性。
            </p>
            <p className="text-amber-400">
              如果你發現任何問題廣告，請聯絡我哋，我哋會向 Google 報告處理。
            </p>
          </div>
        </section>

        {/* Privacy & Terms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📋 相關政策</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/privacy" className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors text-center">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">私隱政策</h3>
              <p className="text-sm text-gray-400">了解我哋如何處理你的個人資料</p>
            </Link>
            <Link href="/terms" className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors text-center">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">使用條款</h3>
              <p className="text-sm text-gray-400">使用本網站前請先閱讀條款</p>
            </Link>
          </div>
        </section>

        {/* Editorial Policy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📰 編輯政策</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>
              NewsKingdom 的編輯團隊致力於為用戶提供高質量、可靠的新聞資訊服務：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>所有新聞來源均為知名、可靠嘅媒體機構</li>
              <li>AI 生成的摘要均經過基本的事實核查</li>
              <li>我哋保持編輯獨立性，不受廣告商影響</li>
              <li>如發現錯誤，會及時更正並說明</li>
              <li>深度專題文章均標明資料來源</li>
            </ul>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            編輯團隊
          </h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p className="mb-6">
              NewsKingdom 由專業編輯團隊營運，團隊成員擁有多年媒體、資訊科技同數據分析經驗。我哋的目標係為用戶提供最佳嘅新聞閱讀體驗。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">📰</div>
                <h3 className="font-bold text-white text-sm mb-1">新聞主編</h3>
                <p className="text-xs text-gray-400">新聞來源審核、內容質量把關</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="font-bold text-white text-sm mb-1">AI 內容主任</h3>
                <p className="text-xs text-gray-400">AI 摘要流程監督、質量控制</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-700/30">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-bold text-white text-sm mb-1">數據分析師</h3>
                <p className="text-xs text-gray-400">數據新聞、視覺化圖表製作</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">📧 聯絡方式</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p className="mb-4">
              如果你有任何問題、建議或反饋，歡迎聯絡我哋：
            </p>
            <div className="space-y-3">
              <p className="text-blue-400">
                <strong>Email：</strong>kckkwok13@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                我哋通常會在 1-2 個工作日內回覆你。
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p className="text-lg font-medium text-gray-300 mb-2">NewsKingdom</p>
          <p>© 2026 NewsKingdom · AI 驅動的智能新聞平台</p>
          <p className="mt-2 text-sm">
            所有新聞版權歸各媒體原作者所有 | 網站內容僅供參考
          </p>
        </footer>
      </div>
    </div>
  )
}