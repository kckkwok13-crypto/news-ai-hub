export const generateMetadata = () => {
  return {
    title: "全球央行數字貨幣競賽：CBDC時代的貨幣主權與隱私反思",
    description: "從數字人民幣到數字歐元，全球各國央行正在加速探索數字貨幣的可能性。",
    openGraph: {
      title: "全球CBDC競賽：你的錢將會點樣？",
      description: "央行數字貨幣唔只係科技，仲關乎privacy同埋你對政府嘅信任。",
    },
  };
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">📝 獨家評論 · 10分鐘閱讀</p>

        <h1 className="text-3xl font-bold mt-4 mb-6">全球央行數字貨幣競賽：CBDC時代的貨幣主權與隱私反思</h1>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">⚠️ 本文為評論性質，分析各國CBDC發展趨勢，唔代表任何政治立場。</p>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          你有冇諗過，有一日你嘅money唔再係現金，而係一堆數據？
          听起来有啲cyberpunk，但係呢件事可能比你想象中近。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🏛️ 乜係CBDC？</h2>
        <p className="mb-4">
          CBDC全寫係 Central Bank Digital Currency，即是話 「中央銀行發行嘅數字貨幣」。
          佢唔係加密貨幣，唔係比特幣呢啲由算法計算出嚟嘅嘢，
          而係由國家央行直接發行同埋擔保嘅數字版現金。
          你 可以理解為 —— 數字版嘅人民幣、美元、歐元。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🇨🇳 數字人民幣走得最前</h2>
        <p className="mb-4">
          中國係全球最大經濟體入面走得最前嘅。
          數字人民幣（e-CNY）已經喺多個城市試點，
          甚至喺北京冬奧個陣有埋國際版。
        </p>
        <p className="mb-4">
          但係讲真，e-CNY最大嘅問題係 —— 隱私。
          因為佢係由政府發行，理論上政府可以追蹤每一筆交易。
          你好難像現金咁樣，話 「我買咗乜唔關你事」。
          呢個係一啲人對CBDC最大嘅擔憂。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">🇪🇺 歐洲點樣做？</h2>
        <p className="mb-4">
          歐洲央行最近先開始認真研究數字歐元，
          而且佢哋好強調隱私保護。
          歐洲人似乎想做到 —— euro係數字版，但係保障等同現金。
          即係話，小額交易可以匿名，但係大額就走唔甩。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">💸 對我哋意味啲乜？</h2>
        <p className="mb-4">
          如果CBDC普及，以下幾個情況可能會發生：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>無現金社會加速到來：</strong> 現金慢慢消失，你嘅每一筆消費都有紀錄</li>
          <li><strong>貨幣政策更精準：</strong> 央行可以直接影響你使幾多錢，唔需要通過銀行</li>
          <li><strong>金融歧視可能出現：</strong> 政府可以設置某些貨幣嘅使用範圍</li>
          <li><strong>隱私界線重新定義：</strong> 我哋對 「私隱」嘅理解可能需要重新調整</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">🤔 我點睇？</h2>
        <p className="mb-4">
          老實講，我對CBDC係有少少擔心，但係唔覺得可以完全拒絕。
          數字化係大趨勢，問題係我哋點樣喺方便同隱私之間揾到平衡。
        </p>
        <p className="mb-4">
          作為普通人，我哋能夠做嘅係 —— 關注呢個議題，
          了解自己嘅權利，唔好完全依賴單一嘅支付方式。
          現金之所以重要，唔只係因為方便，仲因為佢係最後一道隱私屏障。
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <p className="text-gray-700 text-sm">
            <strong>你點睇CBDC？</strong> 你覺得隱私重要啲，定係方便重要啲？
            歡迎分享你嘅睇法。
          </p>
        </div>
      </article>
    </main>
  );
}