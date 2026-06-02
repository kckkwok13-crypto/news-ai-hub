'use client'

import { ChevronLeft, Shield, Eye, Cookie, Users, Database, AlertTriangle, FileText, Mail } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返回首頁
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-3">
            <Shield className="w-10 h-10 text-blue-400" />
            隱私政策
          </h1>
          <p className="text-gray-400">NewsFlow 隱私保護說明</p>
          <p className="text-sm text-gray-500 mt-2">最後更新日期：2025年1月</p>
        </header>

        <section className="mb-12">
          <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">重要提示</h3>
                <p className="text-gray-300">
                  NewsFlow 是一個 AI 驅動的新聞資訊彙總平台。我們不複製或儲存新聞文章的完整內容，
                  所有新聞版權歸原創媒體所有。我們主要收集的是您使用本網站時自動生成的技術數據。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            一、信息收集
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                1.1 您主動提供的信息
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>訂閱信息：</strong>當您訂閱我們的 Email 新聞服務時，我們會收集您的電子郵件地址</li>
                <li><strong>聯絡表單：</strong>當您通過聯絡表單提交訊息時，我們會收集您的姓名和電子郵件</li>
                <li><strong>評論反饋：</strong>您自願提供的任何其他信息</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-400" />
                1.2 自動收集的信息
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>瀏覽器信息：</strong>瀏覽器類型、版本和設置</li>
                <li><strong>設備信息：</strong>設備類型、操作系統、屏幕分辨率</li>
                <li><strong>訪問日誌：</strong>訪問時間、停留時間、點擊的頁面</li>
                <li><strong>IP 地址：</strong>用於地理位置分析和安全監控</li>
                <li><strong>Cookie 數據：</strong>用於記住您的偏好設置</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-400" />
            二、信息使用
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">我們收集的信息用於以下目的：</p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                提供和維護我們的服務
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                發送您訂閱的新聞資訊 Email
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                回應您的諮詢和請求
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                分析網站使用情況以改善用戶體驗
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                防止欺詐和確保網站安全
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                展示相關廣告以支持網站運營
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                遵守法律義務
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Cookie className="w-6 h-6 text-orange-400" />
            三、Cookie 政策
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">3.1 我們使用的 Cookie 類型</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-blue-400 mb-2">必要的 Cookie</h4>
                <p className="text-sm text-gray-400">確保網站基本功能正常運作</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-green-400 mb-2">偏好的 Cookie</h4>
                <p className="text-sm text-gray-400">記住您的語言和主題設置</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-purple-400 mb-2">分析的 Cookie</h4>
                <p className="text-sm text-gray-400">幫助我們了解用戶如何與網站互動</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-orange-400 mb-2">廣告的 Cookie</h4>
                <p className="text-sm text-gray-400">用於展示相關廣告（由第三方廣告平台設置）</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" />
            四、信息安全
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">我們採用適當的安全措施保護您的信息：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                使用 HTTPS 加密傳輸
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                安全的伺服器存儲
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                限制員工訪問權限
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                定期安全審計
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            五、您的權利
          </h2>

          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">根據適用的數據保護法律，您有以下權利：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-blue-400 mb-2">訪問權</h4>
                <p className="text-sm text-gray-400">了解我們持有關於您的哪些信息</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-green-400 mb-2">更正權</h4>
                <p className="text-sm text-gray-400">要求更正不正確的信息</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-orange-400 mb-2">刪除權</h4>
                <p className="text-sm text-gray-400">要求刪除您的個人信息</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-700/50">
                <h4 className="font-bold text-purple-400 mb-2">數據可移植性</h4>
                <p className="text-sm text-gray-400">獲取您的信息的副本</p>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              如需行使這些權利，請聯絡我們：<a href="mailto:kckkwok13@gmail.com" className="text-blue-400 hover:underline">kckkwok13@gmail.com</a>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-400" />
            六、聯絡我們
          </h2>

          <div className="p-6 rounded-2xl bg-green-900/20 border border-green-700/50">
            <p className="text-gray-300 mb-4">
              如果您對本隱私政策有任何疑問或疑慮，請聯絡我們：
            </p>
            <p className="text-gray-300">
              <strong className="text-green-400">Email：</strong>
              <a href="mailto:kckkwok13@gmail.com" className="text-blue-400 hover:underline ml-2">kckkwok13@gmail.com</a>
            </p>
            <p className="text-gray-400 mt-4 text-sm">我們會在 24 小時內回覆您的查詢。</p>
          </div>
        </section>

        <div className="mt-12 p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
          <p className="text-gray-400 text-center">
            本隱私政策與我們的 <Link href="/terms" className="text-blue-400 hover:underline">服務條款</Link> 共同構成您與 NewsFlow 之間關於隱私的完整協議。
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
