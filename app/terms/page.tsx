'use client'

import { ChevronLeft, FileText, Scale, AlertTriangle, ExternalLink, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返回首頁
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-3">
            <Scale className="w-10 h-10 text-purple-400" />
            服務條款
          </h1>
          <p className="text-gray-400">NewsFlow 使用條款與條件</p>
          <p className="text-sm text-gray-500 mt-2">最後更新日期：2025年1月</p>
        </header>

        {/* Important Notice */}
        <section className="mb-12">
          <div className="p-6 rounded-2xl bg-red-900/20 border border-red-700/50">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">重要提示</h3>
                <p className="text-gray-300">
                  使用 NewsFlow 即表示您同意遵守這些條款。如果您不同意這些條款，請勿使用本網站。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Acceptance */}
<section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" />
            一、條款接受
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300">
              通過訪問或使用 NewsFlow 網站（以下簡稱「本網站」或「服務」），您同意受這些服務條款和我們的<a href="/privacy" className="text-blue-400 hover:underline">隱私政策</a>的約束。
              這些條款適用於所有訪問者和用戶。
            </p>
          </div>
        </section>

        {/* Section 2: Service Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-400" />
            二、服務描述
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">NewsFlow 是什麼？</strong>
            </p>
            <p className="text-gray-300 mb-4">
              NewsFlow 是一個 AI 驅動的智能新聞資訊彙總平台。我們的服務包括：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong>AI 新聞摘要：</strong>使用 AI 技術自動分析和總結新聞要點</li>
              <li><strong>多語言翻譯：</strong>支援繁體中文、簡體中文和英文即時翻譯</li>
              <li><strong>數據新聞：</strong>追蹤和可視化經濟、數據等資訊</li>
              <li><strong>旅遊指南：</strong>提供熱門旅遊城市的詳細指南</li>
              <li><strong>新聞分類：</strong>涵蓋科技、財經、遊戲、美食、旅遊等多個領域</li>
            </ul>
          </div>
        </section>

        {/* Section 3: User Obligations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-400" />
            三、用戶義務
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">作為 NewsFlow 的用戶，您同意：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong>合法使用：</strong>僅將本網站用於合法目的</li>
              <li><strong>真實信息：</strong>提供真實、準確、完整的個人信息</li>
              <li><strong>帳戶安全：</strong>維護您的帳戶安全，及時更新密碼</li>
              <li><strong>遵守法律：</strong>遵守所有適用的當地、國家和國際法律</li>
              <li><strong>尊重他人：</strong>尊重其他用戶，不騷擾、誹謗或侵犯他人權利</li>
              <li><strong>禁止濫用：</strong>不從事任何可能損害本網站的活動</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            四、知識產權
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">4.1 我們的內容</h3>
              <p className="text-gray-300">
                本網站及其原始內容、特性和「外觀和感覺」歸 NewsFlow 及其許可方所有，並受版權、商標、專利和其他知識產權法律的保護。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">4.2 新聞內容版權說明</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>本網站僅使用 AI 摘要新聞要點</li>
                <li>所有新聞標題、連結及圖片版權歸各原始來源所有</li>
                <li>我們不複製完整的新聞內容</li>
                <li>所有新聞文章均附有原始連結，用戶可點擊閱讀完整內容</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">4.3 商标</h3>
              <p className="text-gray-300">
「NewsFlow」名稱、標誌和所有相關名稱、標誌、產品和服務名稱均為 NewsFlow 的商譽。未經授權使用這些商标是嚴格禁止的。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: AI Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-cyan-400" />
            五、AI 內容說明
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">AI 生成的摘要僅供參考，不構成投資建議或專業意見。</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>AI 分析不代表 NewsFlow 的立場</li>
              <li>我們致力保持客觀、中立的態度</li>
              <li>所有 AI 生成的摘要均經過人工審核</li>
              <li>我們鼓勵用戶點擊新聞連結閱讀原始報道</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Third-Party Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" />
            六、第三方連結
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              本網站包含指向第三方網站（特別是新聞來源網站）的連結。這些連結僅為方便您而提供。
            </p>
            <div className="p-4 rounded-xl bg-yellow-900/20 border border-yellow-700/50">
              <p className="text-yellow-400 font-bold mb-2">⚠️ 警告</p>
              <p className="text-gray-300">
                我們無法控制第三方網站的內容、隱私政策或實踐。訪問這些網站的風險由您自行承擔。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
<AlertTriangle className="w-6 h-6 text-yellow-400" />
            七、免責聲明
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              <strong className="text-yellow-400">重要：</strong>本網站及其內容按「原樣」和「可用」提供，不提供任何明示或暗示的保證。
            </p>
            <p className="text-gray-300">
              NewsFlow 明確否認對服務的準確性、可靠性或 AI 生成內容的絕對準確性作出任何保證。
              您理解並同意您自行承擔使用本網站和服務的風險。
            </p>
          </div>
        </section>

        {/* Section 8: Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-red-400" />
            八、責任限制
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300">
              在法律允許的最大範圍內，NewsFlow 不對任何直接的、間接的、附帶的、特殊的、懲戒性的或懲罰性的損害賠償承擔責任，
              包括但不限於利潤損失、數據損失或聲譽損失。
            </p>
          </div>
        </section>

        {/* Section 9: Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-400" />
            九、終止條款
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">由您終止：</strong>您可以隨時停止使用本網站。取消 Email 訂閱即可終止該服務。
            </p>
            <p className="text-gray-300">
              <strong className="text-white">由我們終止：</strong>我們可能出於以下原因終止或暫停您的訪問：違反這些條款、從事非法活動、或出於安全原因。
            </p>
          </div>
        </section>

        {/* Section 10: Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-400" />
            十、適用法律
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300">
              這些條款受香港特別行政區法律管轄，並按其解釋。如有任何爭議，您不可撤銷地同意香港法院的專屬管轄權。
            </p>
          </div>
        </section>

        {/* Section 11: Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-green-400" />
            十一、聯絡我們
          </h2>

          <div className="p-6 rounded-2xl bg-green-900/20 border border-green-700/50">
            <p className="text-gray-300 mb-4">
              如果您對這些服務條款有任何疑問，請聯絡我們：
            </p>
            <p className="text-gray-300">
              <strong className="text-green-400">Email：</strong>
              <a href="mailto:kckkwok13@gmail.com" className="text-blue-400 hover:underline ml-2">kckkwok13@gmail.com</a>
            </p>
            <p className="text-gray-400 mt-4 text-sm">我們會在 24 小時內回覆您的查詢。</p>
          </div>
        </section>

        {/* Related Links */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
          <p className="text-gray-400 text-center">
            這些條款與我們的 <Link href="/privacy" className="text-blue-400 hover:underline">隱私政策</Link> 共同構成您與 NewsFlow 之間關於使用本網站的完整協議。
          </p>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>NewsFlow · AI 驅動的智能新聞平台</p>
          <p className="mt-2 text-sm">
            <Link href="/" className="hover:text-gray-400">首頁</Link> ·
            <Link href="/about" className="hover:text-gray-400 ml-2">關於我們</Link> ·
            <Link href="/privacy" className="hover:text-gray-400 ml-2">隱私政策</Link> ·
            <Link href="/terms" className="hover:text-gray-400 ml-2">服務條款</Link> ·
            <Link href="/contact" className="hover:text-gray-400 ml-2">聯絡我們</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
