export const generateMetadata = () => {
  return {
    title: "AI翻譯新聞的倫理邊界",
    description: "當AI能夠在幾秒鐘內將一篇外語新聞翻譯成十幾種語言時，新聞的本質是否正在被稀釋？",
    openGraph: {
      title: "AI翻譯新聞的倫理邊界",
      description: "技術便利與原創價值，點樣取平衡？",
    },
  };
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">📝 編輯觀點 · 6分鐘閱讀</p>

        <h1 className="text-3xl font-bold mt-4 mb-6">AI翻譯新聞的倫理邊界：我們如何在使用技術便利與保護原創價值之間取得平衡？</h1>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">⚠️ 本文代表編輯部立場，歡迎討論但請理性發言。</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          我自己每日都會用AI翻譯睇外國新聞，但係當我哋自己做緊一個新聞平台嘅時候，
          就發現呢個問題真係唔可以避。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🤖 我哋用AI做啲乜？</h2>
        <p className="mb-4">
          坦白講，NewsFlow目前主要係用AI做翻譯同摘要。
          即係話我哋唔係話自己採訪新聞，而係將外國嘅資訊翻譯成中文俾讀者。
          呢個做法喺外國媒體都好普遍，只不過佢哋多數會聘請翻譯員，
          我哋選擇用AI代替 —— 性價比高之餘，速度快好多。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">⚖️ 倫理問題喺邊？</h2>
        <p className="mb-4">
          但係問題嚟喇。如果我哋將一篇外國新聞翻譯完就當係自己嘅內容，
          咁樣係唔係等於呃緊讀者？ 讀者會以為我哋有駐外記者，
          但係其實我哋只係掂咗幾下鍵盤。
        </p>
        <p className="mb-4">
          另一個問題係譯名。 「Bitcoin」叫 「比特幣」定 「加密貨幣」？
          「Federal Reserve」叫 「美聯儲」定 「聯邦儲備局」？
          呢啲選擇往往反映緊一種立場，我哋用AI翻譯嘅時候，
          呢啲 「人味」就會被algorithm冲淡。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">💡 我哋點樣做？</h2>
        <p className="mb-4">
          我哋嘅做法係：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>每一篇翻譯新聞都會標明係翻譯，並附上原文連結</li>
          <li>「編輯精選」系列係我哋自己撰寫嘅原創內容，呢啲我哋會明確標示</li>
          <li>我哋嘗試保留多啲原文嘅語氣同立場，唔會完全中文化</li>
          <li>如果讀者發現翻譯有問題，可以回饋俾我哋</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">🎯 結語</h2>
        <p className="mb-4">
          我覺得AI翻譯係工具，唔係代替品。
          用得恰當可以幫到更多人接觸資訊，用得唔好就會變成呃人。
          作為一個新聞平台，我哋希望做到嘅係 —— 
          用AI做翻譯，但係用人腦做把關。
          起碼我哋係咁相信嘅。
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-gray-700 text-sm">
            你對AI翻譯新聞有乜睇法？ 歡迎喺下面留言，或者email俾我哋。
          </p>
        </div>
      </article>
    </main>
  );
}