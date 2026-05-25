'use client'

import { ChevronLeft, FileText, Shield, AlertCircle, Mic, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          返回首頁
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            編輯政策
          </h1>
          <p className="text-xl text-gray-400">
            NewsFlow Editorial Policy — 最後更新：2025年1月
          </p>
        </header>

        {/* Important Disclaimer */}
        <section className="mb-12">
          <div className="p-6 rounded-2xl bg-amber-900/20 border border-amber-700/50 text-gray-300">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-amber-400 mb-3">重要聲明</h2>
                <p className="text-gray-300">
                  <strong>NewsFlow 不是新聞網站。</strong> 我們是一個資訊彙總平台，使用 AI 技術為用戶總結新聞要點。 
                  我們不會複製、儲存或重新發布任何新聞文章的完整內容。所有新聞內容的版權歸各自媒體原作者或新聞機構所有。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" />
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

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            編輯標準
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
              <h3 className="font-bold text-white mb-3">✅ 我們做的事情</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>使用 AI 總結新聞要點和精華，幫助用戶快速了解資訊</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>提供新聞原始連結，引導用戶到原創媒體閱讀完整內容</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>展示來自不同來源的新聞標題和摘要</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>提供旅遊指南、數據新聞等原創欄目</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>對 AI 生成的摘要進行人工審核，確保準確性</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
              <h3 className="font-bold text-white mb-3">❌ 我們不做的事情</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>複製或儲存新聞文章的完整內容</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>冒充原創新聞媒體</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>捏造或篡改新聞事實</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>未經授權使用版權內容</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Usage Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mic className="w-6 h-6 text-purple-400" />
            AI 使用政策
          </h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>
              NewsFlow 使用 AI 技術增強用戶體驗，但我們明確區分 AI 生成內容和人類編輯內容：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>AI 摘要：</strong>使用 AI 生成的新聞摘要會清晰標註，並說明是「由 AI 輔助生成」</li>
              <li><strong>事實核查：</strong>AI 生成的摘要會經過人工審核，確保資訊準確</li>
              <li><strong>立場中立：</strong>我們致力保持客觀、中立的態度，不偏袒任何政治立場</li>
              <li><strong>局限性說明：</strong>AI 分析僅供參考，不代表 NewsFlow 立場</li>
            </ul>
            <p>
              如果發現 AI 生成的內容有任何問題，歡迎聯絡我們糾正。
            </p>
          </div>
        </section>

        {/* Copyright */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 版權聲明</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300 space-y-4">
            <p>
              NewsFlow 尊重知識產權。我們的服務基於以下版權原則：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>所有新聞內容的版權歸各自媒體原作者或新聞機構所有</li>
              <li>我們只使用新聞報道的標題、摘要和要點，不複製完整內容</li>
              <li>所有新聞報道均附有原始連結，用戶可點擊閱讀完整內容</li>
              <li>如有版權侵權問題，我們承諾在接到通知後 48 小時內刪除相關內容</li>
            </ul>
            <p className="text-blue-400">
              如有任何版權問題，請聯絡：kckkwok13@gmail.com
            </p>
          </div>
        </section>

        {/* How to Verify */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔍 如何驗證資訊</h2>
          <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-gray-300">
            <p className="mb-4">
              我們鼓勵用戶批判性思考，並通過以下方式驗證資訊：
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>點擊新聞卡片上的連結，閱讀原始報道</li>
              <li>交叉比對多個新聞來源</li>
              <li>注意新聞發布的時間，確認是否為最新資訊</li>
              <li>留意新聞來源的可信度</li>
              <li>如有疑問，歡迎聯絡我們查詢</li>
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <div className="p-6 rounded-2xl bg-blue-900/20 border border-blue-700/50 text-gray-300">
            <h2 className="text-xl font-bold text-blue-400 mb-4">📧 聯絡編輯團隊</h2>
            <p>
              如果你對我們的編輯政策有任何問題或建議，歡迎聯絡我們：
            </p>
            <p className="mt-2 text-blue-400">
              Email：kckkwok13@gmail.com
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}