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
          <p className="text-slate-400">最後更新日期：2026年5月16日</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. 資訊收集</h2>
            <p>NewsFlow 可能會收集以下資訊：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>日誌數據：</strong> 當你訪問我哋嘅網站時，我哋的伺服器可能會自動記錄你瀏覽器發送的標準資訊，包括 IP 地址、瀏覽器類型同版本、訪問的頁面、訪問時間同日期等。</li>
              <li><strong>Cookies：</strong> 我哋使用 Cookies 來改善用戶體驗、分析流量同提供個性化廣告。Cookies 是儲存喺你設備上的小文件，可以記住你 的偏好設置同登錄狀態。</li>
              <li><strong>本地存儲 (Local Storage)：</strong> 我哋使用瀏覽器本地存儲來保存你 的收藏、新聞偏好設置同其他個性化設置。</li>
              <li><strong>設備資訊：</strong> 我哋可能會收集設備類型、操作系統、瀏覽器資訊等，以優化你 的瀏覽體驗。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cookies 的使用</h2>
            <p>我哋使用以下類型的 Cookies：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>必要性 Cookies：</strong> 這些 Cookies 對於網站的基本功能係必需的，例如用戶登錄、購物車同安全功能。</li>
              <li><strong>分析性 Cookies：</strong> 這些 Cookies 幫助我哋了解訪問者如何同網站互動，以便我哋可以改進網站性能和用戶體驗。</li>
              <li><strong>功能性 Cookies：</strong> 這些 Cookies 記住你的偏好設置（如語言同主題選擇），提供更個性化的體驗。</li>
              <li><strong>廣告性 Cookies：</strong> 這些 Cookies 用於顯示相關廣告。我哋使用 Google AdSense 來展示廣告，Google 可能會使用 Cookies 來根據你以前對我哋網站或其他網站的訪問記錄來投放個性化廣告。</li>
            </ul>
            <p className="mt-4">你可以通過瀏覽器設置來管理或拒絕 Cookies。但請注意，停用某些 Cookies 可能會影響網站的功能。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. 資訊使用</h2>
            <p>收集到的資訊將用於：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>提供、運作同維護我哋的服務。</li>
              <li>改進、個性化同擴展我哋的服務。</li>
              <li>了解同分析你如何使用我哋的服務。</li>
              <li>開發新產品、服務、功能同特性。</li>
              <li>為你提供客戶支援服務。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Google AdSense 與廣告</h2>
            <p>我哋使用第三方供應商（包括 Google）喺我哋的網站上投放廣告。Google 使用 Cookies（例如 DoubleClick Cookie）根據用戶以前對我哋網站或其他網站的訪問記錄來向用戶投放廣告。</p>
            <p className="mt-2">這些 Cookies 使 Google 能夠根據你的興趣向你展示相關廣告。我哋使用這些廣告收入來支持網站的運營和發展。</p>
            <p className="mt-2">你可以通過訪問 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">廣告設置</a> 來管理你的廣告偏好或停用個性化廣告。</p>
            <p className="mt-2">你也可以訪問 <a href="https://www.google.com/about/company/user-choices/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">廣告選擇退出頁面</a> 來拒絕第三方供應商使用 Cookies 進行個性化廣告。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. 第三方服務</h2>
            <p>我哋可能會使用以下第三方服務：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Google Analytics：</strong> 用於分析網站流量和使用情況。</li>
              <li><strong>Google AdSense：</strong> 用於展示相關廣告。</li>
              <li><strong>OpenRouter AI：</strong> 用於 AI 新聞分析和摘要功能。</li>
              <li><strong>RSS 源：</strong> 我哋的服務聚合來自 various 新聞媒體的 RSS 源。我哋不對這些外部網站的隱私做法負責。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. 第三方鏈接</h2>
            <p>我哋的網站包含指向外部網站的鏈接，包括新聞來源網站。請注意，我哋對這些網站的內容或隱私做法不承擔任何責任。建議你在訪問這些網站時查閱它們的隱私政策。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. 數據安全</h2>
            <p>我哋致力於保護你 的個人資訊。我哋使用各種安全措施來確保你數據的安全性，包括加密傳輸、安全伺服器和定期安全審計。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. 你的權利</h2>
            <p>你擁有以下權利：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>訪問你 的個人資訊。</li>
              <li>更正不正確的個人資訊。</li>
              <li>刪除你的個人資訊。</li>
              <li>選擇退出接收促銷訊息。</li>
              <li>管理你的廣告偏好。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. 兒童隱私</h2>
            <p>我哋的服務不面向 13 歲以下的兒童。我哋不會故意收集 13 歲以下兒童的個人資訊。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. 政策的變更</h2>
            <p>我哋可能會不時更新本隱私政策。我哋會通過喺網站上發布更新後的政策來通知你任何重大變更。我建議你定期查閱本頁面以了解最新資訊。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. 聯繫我哋</h2>
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
