'use client'

import { ChevronLeft, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返去首頁
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-10 h-10 text-blue-500" />
            <h1 className="text-4xl font-extrabold">隱私政策</h1>
          </div>
          <p className="text-slate-400">最後更新日期：2026年5月3日</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. 資訊收集</h2>
            <p>NewsFlow 可能會收集以下資訊：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>日誌數據：</strong> 當你訪問我哋嘅網站時，我哋嘅伺服器可能會自動記錄你瀏覽器發送嘅標準資訊，包括 IP 地址、瀏覽器類型同版本、訪問嘅頁面、訪問時間同日期等。</li>
              <li><strong>Cookies：</strong> 我哋使用 Cookies 嚟改善用戶體驗、分析流量同提供個性化廣告。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. 資訊使用</h2>
            <p>收集到嘅資訊將用於：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>提供、運作同維護我哋嘅服務。</li>
              <li>改進、個性化同擴展我哋嘅服務。</li>
              <li>了解同分析你如何使用我哋嘅服務。</li>
              <li>開發新產品、服務、功能同特性。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Google AdSense 與廣告</h2>
            <p>我哋使用第三方供應商（包括 Google）喺我哋嘅網站上投放廣告。Google 使用 Cookies（例如 DoubleClick Cookie）根據用戶以前對我哋網站或其他網站嘅訪問嚟向用戶投放廣告。</p>
            <p className="mt-2">用戶可以通過訪問 <a href="https://adssettings.google.com" className="text-blue-400 underline">廣告設置</a> 嚟選擇停用個性化廣告。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. 第三方鏈接</h2>
            <p>我哋嘅網站包含指向外部網站嘅鏈接。請注意，我哋對呢啲網站嘅內容或隱私做法不承擔任何責任。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. 聯繫我哋</h2>
            <p>如果你對本隱私政策有任何疑問，請聯繫我哋：</p>
            <p className="mt-2 text-blue-400">kckkwok13@gmail.com</p>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© 2026 NewsFlow · AI-Powered Global News</p>
        </footer>
      </div>
    </div>
  )
}
