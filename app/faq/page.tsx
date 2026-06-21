import { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';

export const metadata: Metadata = {
  title: '常見問題 FAQ | NewsFlow',
  description: '關於NewsFlow網站使用、訂閱服務、內容版權等常見問題的詳細解答。',
  keywords: ['FAQ', '常見問題', '幫助中心', '使用指南'],
};

const faqData = [
  {
    question: 'NewsFlow是什麼類型的網站？',
    answer: 'NewsFlow是一個AI驅動的智能新聞聚合平台，同時收錄純粹旅人的原創深度遊記，涵蓋大灣區退休遊、日本、歐洲等旅遊攻略。我們致力於為讀者提供高質量、有價值的內容。',
  },
  {
    question: '網站上的文章內容是原創的嗎？',
    answer: '是的，NewsFlow網站上的所有遊記和原創內容均由純粹旅人團隊親身體驗後撰寫，保證內容的原創性和真實性。我們重視內容質量，反對抄襲和盜用他人內容。',
  },
  {
    question: '如何訂閱電子報？',
    answer: '您可以在網站上找到我們的電子報訂閱窗口，輸入您的電子郵件地址即可訂閱。訂閱後，您將定期收到我們的最新文章通知和獨家內容。我們尊重您的隱私，不會發送垃圾郵件。',
  },
  {
    question: '如何在網站上搜索內容？',
    answer: '您可以使用網站右上角的搜索功能來查找感興趣的文章。只需點擊搜索圖標，輸入關鍵詞即可快速找到相關內容。',
  },
  {
    question: '網站支持哪些語言？',
    answer: 'NewsFlow主要提供繁體中文內容，同時部分文章配有英文翻譯或摘要，方便不同語言背景的讀者閱讀。',
  },
  {
    question: '我可以轉載或分享網站內容嗎？',
    answer: '未經授權，我們不允許轉載或盜用網站內容。如果您希望分享我們的文章，請使用文章底部的分享功能或附上原文連結。我們支持合理引用，但請尊重版權。',
  },
  {
    question: '如何在手機上獲得最佳閱讀體驗？',
    answer: 'NewsFlow網站採用響應式設計，完全適配各種設備。如果您使用的是iOS或Android設備，建議將本網站添加到主屏幕，以便快速訪問。',
  },
  {
    question: '網站使用Cookie嗎？',
    answer: '是的，我們使用Cookie來改善用戶體驗，包括記住您的偏好設置和登錄狀態。您可以在瀏覽器設置中管理Cookie偏好。如需了解更多，請查閱我們的隱私政策。',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[{ label: 'FAQ', href: '/faq' }]}
          />
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            常見問題
            <span className="text-2xl ml-3">FAQ</span>
          </h1>
          <p className="text-slate-400 text-lg">
            找到你問題的答案
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-medium list-none">
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
                <svg
                  className="w-6 h-6 text-slate-400 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                <div className="pl-11">
                  {faq.answer}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-2">
            還有其他問題？
          </h3>
          <p className="text-slate-400 mb-4">
            如果你在這裡找不到答案，歡迎聯絡我們
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-xl transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  );
}
