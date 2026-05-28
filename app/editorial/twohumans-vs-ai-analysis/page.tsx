export const generateMetadata = () => {
  return {
    title: "新聞App嘅AI分析功能：兩個人 VS 一個AI，你信邊個？",
    description: "客観分析係乜？以半導體超級週期新聞為例，拆解AI摘要功能嘅局限同可能性。",
    openGraph: {
      title: "AI分析功能：一個認真嘅問題",
      description: "當新聞App多咗個AI分析按鈕，佢究竟幫到你定害咗你？",
    },
  };
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">💬 吹水分享 · 8分鐘閱讀</p>

        <h1 className="text-3xl font-bold mt-4 mb-6">新聞App嘅AI分析功能：両個人 VS 一個AI，你信邊個？</h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-800 text-sm">
            🎯 話說回來，我喺一個財經新聞App度睇到面白い嘢：
            每篇新聞旁邊有個「AI分析」按鈕。
            綠色圈圈住嘅，就係呢個功能。
          </p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          你有冇用過呢類功能？例如Investing.com或者MarketWatch呢啲平台，
          宜家好多都加咗AI摘要話你知「重點係乜」。
          問題係 —— 你真係信佢？
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🔍 客観係乜意思？</h2>
        <p className="mb-4">
          喺粵語入邊，「客観」通常係指唔受情緒影響、跟事實行嘅分析。
          但係問題來咗 —— AI寫嘅嘢，係眀係客観？
        </p>
        <p className="mb-4">
          AI嘅訓練資料係人類寫嘅嘢，
          而人類嘅寫作本身就帶住某啲bias。
          就算AI盡量保持中立，佢都係學咗人类點 解讀新聞，
          而唔係眀無色彩地呈現事實。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">📰 以半導體超級週期為例</h2>
        <p className="mb-4">
          假設有一篇新聞話：「半導體超級週期即將來臨」
          —— AI嘅摘要可能會話：
          「分析師認為AI需求將推動半導體行業增長」
        </p>
        <p className="mb-4">
          但係，兩個唔同背景嘅人睇同一篇新聞，結論可以好唔同：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>一位基金經理：</strong> 首先會問「邊個分析師？」「佢嘅track record點？」「目標價係幾多？」</li>
          <li><strong>一位普通散投资者：</strong> 會問「我應該幾時入市？」「要揀邊隻股？」</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <p className="text-gray-700 text-sm">
            <strong>問題在於：</strong> AI只係比對說法，唔知道你係邊個，
            唔知道你用呢個資訊做乜，唔知道你承受幾大風險。
          </p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">🤖 AI分析好處係眀？</h2>
        <p className="mb-4">
          唔好自己鬧自己，AI分析都有可取之處：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>快：</strong> 三秒出結果，唔使睇成篇長文</li>
          <li><strong>客觀格式：</strong> 起碼知道有邊個觀點，幾個大字</li>
          <li><strong>英中對照：</strong> 方便中英文轉換</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">⚠️ 但係有幾個限制</h2>
        <p className="mb-4">
          <strong>1. 唔知你背景：</strong> 你係專業投資者定係普通散户？AI唔知道你需要乜。
        </p>
        <p className="mb-4">
          <strong>2. 唔知你目的：</strong> 想短炒，定係長渣？分析的嘢完全唔同。
        </p>
        <p className="mb-4">
          <strong>3. 唔知你承受能力：</strong> 每個人對風險嘅接受程度唔同，AI無法知道你蝕幾多錢會睡不着覺。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">💡 我點用法？</h2>
        <p className="mb-4">
          我自己嘅用法係 —— 用AI摘要做starting point，唔係final answer。
          睇完AI點話，我會自己諗：
          「等等，呢個分析師係眀嘅立場？」「佢係咪可能想我買嘢？」
          然後先去搵第二個來源比較吓。
        </p>
        <p className="mb-4">
          <strong>最基本嘅原則：唔好為咗方便而放棄思考。</strong>
          AI可以幫你慳時間，但係唔應該幫你慳判斷。
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">
            ⚠️ 本文只係分享個人看法，唔係任何投資建議。
            投資有風險，做決定之前請自己研究或者問專業人士。
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-gray-700 text-sm">
            <strong>你點睇新聞App嘅AI分析功能？</strong>
            你會信AI寫嘅摘要，定係自己睇原文？
            歡迎分享一下你嘅用法。
          </p>
        </div>
      </article>
    </main>
  );
}