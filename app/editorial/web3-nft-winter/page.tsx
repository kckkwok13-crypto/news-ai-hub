export const generateMetadata = () => {
  return {
    title: "Web3 寒冬：NFT係咪已經玩完？",
    description: "從2021年嘅瘋狂炒賣到而家一地眼鏡碎，NFT市場究竟發生咗乜嘢？我哋可以從中學到啲乜？",
  };
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">📝 編輯精選 · 9分鐘閱讀</p>
        <h1 className="text-3xl font-bold mt-4 mb-6">Web3 寒冬：NFT係咪已經玩完？</h1>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">⚠️ 本文為編輯個人觀點，僅供參考。</p>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          我記得2021年嘅时候，Pringles可以將罐頭NFT拍賣到幾十萬，
          Bored Ape成員可以免費入會所，個個都話「NFT就係未來」。
          而家呢？OpenSea月流量跌九成，幾百萬買嘅猿猴而家可能值幾千港紙。
          老實講，我有朋友真係損晒——佢唔係投機者，係真心相信呢個願景嘅人。
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">🕯️ 點解會搞成咁？</h2>
        <p className="mb-4">
          我覺得係幾個原因夾埋一齊：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>FOMO心態</strong> ——個個都話「last chance to buy」，但係點解所有嘢都要炒？</li>
          <li><strong>沒有實際用例</strong> ——除咗炒賣，NFT可以做咩？冇人答得呢個問題</li>
          <li><strong>騙子太多</strong> —— Rug pull、pump and dump，令好多人對整個生態失去信心</li>
          <li><strong>宏觀經濟</strong> ——加息、加密寒冬，資金流向其他地方</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">🔮 係咪玩完？</h2>
        <p className="mb-4">
          我又唔覺得係完全玩完。我依然相信區塊鏈技術有佢嘅價值——
          數碼所有權、透明度、decentralization呢啲概念係有意義嘅。
        </p>
        <p className="mb-4">
          不過我開始明白一個道理：
          <strong>一項技術的價值唔在於炒作，而係在於佢真正解決咗乜嘢問題。</strong>
          ICO、DeFi、NFT、GameFi——每一個都解決咗某個問題，但係被過度炒作之後就變味了。
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">💭 我哋學到啲乜？</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>任何話「呢個一定漲」嘅人，你都要打個折扣</li>
          <li>認識你投資嘅嘢——唔係睇圖表，係理解背後嘅價值</li>
          <li>永遠留一手——唔好拎全部身家去博</li>
        </ul>
        <p className="mb-4">
          老實講，我依然有啲crypto持倉，但係我已經唔再assume任何嘢會只升不跌。
          呢個可能係最大嘅學習。
        </p>
        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <p className="text-gray-700 text-sm">
            <strong>你呢？你有冇NFT投資經驗？點睇Web3前景？</strong><br/>
            歡迎留言分享。
          </p>
        </div>
      </article>
    </main>
  );
}
