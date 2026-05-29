export const generateMetadata = () => {
  return {
    title: 'AI 翻譯新聞的倫理邊界',
    description: '當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？本文從編輯政策的角度出發，探討AI輔助翻譯的倫理邊界。',
  }
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">📝 編輯精選 · 7分鐘閱讀</p>
        
        <h1 className="text-3xl font-bold mt-4 mb-6">AI 翻譯新聞的倫理邊界：我們如何在使用技術便利與保護原創價值之間取得平衡？</h1>
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">⚠️ 本文為編輯團隊觀點，僅供參考。</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          人工智能技術的快速發展正在深刻改變新聞行業的運作方式。
          從翻譯到摘要，從配圖到推送，AI的應用場景日益廣泛。
          然而，當機器開始替代人類編輯完成這些工作時，我們需要思考：
          新聞的本質是否正在被稀釋？
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🤖 AI翻譯的便利與風險</h2>
        <p className="mb-4">
          AI翻譯工具使新聞內容能夠在數秒內跨越語言障礙，即時觸達更廣泛的讀者群體。
          這無疑提升了信息傳播的效率，但同時也帶來了準確性與語境的挑戰。
        </p>
        <p className="mb-4">
          機器翻譯往往能夠處理文字表面，卻難以捕捉文化內涵與情感細微之處。
          新聞報道中的一些微妙表達、雙關語或文化引用，可能在翻譯過程中流失或扭曲。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">⚖️ 原創價值的保護</h2>
        <p className="mb-4">
          新聞編輯的核心價值在於判斷、選擇與詮釋。
          這些工作需要人類編輯的專業知識、經驗與直覺。
          AI工具應當定位為人類編輯的輔助，而非替代。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">📋 我們的編輯政策</h2>
        <p className="mb-4">
          本平台採用AI翻譯作為初稿生成工具，但所有內容均需經過人類編輯審核把關。
          我們建立了嚴格的校對流程，確保譯文的準確性與可讀性。
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-gray-700 text-sm">
            <strong>結語：</strong>AI翻譯技術的發展為新聞行業帶來了新機遇，
            但人類編輯的專業判斷仍然不可替代。我們應當善用技術優勢，
            同時坚守新聞專業的核心價值。
          </p>
        </div>
      </article>
    </main>
  )
}
