import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '穩定幣大戰：USDT/USDC/USDJ誰能笑到最後？',
  description: '當傳統銀行、加密原生公司、科技巨頭全部湧入穩定幣賽道，這場沒有硝煙的戰爭將如何改變我們的貨幣體系？三大玩家各自的優勢與隱憂，一次過拆解。',
}

export default function StablecoinWar() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">加密貨幣</span>
            <span>Reading time: 10 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            穩定幣大戰：USDT/USDC/USDJ誰能笑到最後？
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            如果你以為加密貨幣只係比特幣、以太坊嘅世界，咁你可能錯過咗一場更接地氣嘅戰爭——穩定幣。
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-8 border border-green-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            上個禮拜，我去咗一間茶餐廳，聽到隔籬枱兩個後生仔喺度討論：「你用邊隻穩定幣？USDT定USDC？」
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            哦，原來穩定幣已經唔再只係幣圈嘅嘢。越嚟越多普通人，無論係想做跨境匯款、定係想喺高通脹時期保值，都開始留意穩定幣。
          </p>
          <p className="text-gray-700 leading-relaxed">
            但係，究竟邊隻 stablecoin 最穩陣？呢個問題，我研究咗好耐。
          </p>
        </div>

        {/* What is stablecoin */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">一、穩定幣係乜嘢？</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          簡單嚟講，穩定幣係一種同現實世界貨幣掛鈎嘅加密貨幣。最常見嘅係同美元掛鈎，1 USDC 或 1 USDJ 就等於 1 美元。
        </p>

        <div className="bg-blue-50 p-5 rounded-xl mb-8">
          <h3 className="font-bold text-blue-800 mb-3">為乜嘢需要穩定幣？</h3>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>• <strong>跨境匯款</strong>：傳統匯款可能要幾日，穩定幣幾分鐘到</li>
            <li>• <strong>避險</strong>：加密貨幣大跌時，換入穩定幣暫時泊岸</li>
            <li>• <strong>DeFi 用途</strong>：喺去中心化金融入面做抵押品、交易對</li>
            <li>• <strong>日常支付</strong>：部分國家已經有人用穩定幣網購</li>
          </ul>
        </div>

        {/* Three players */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">二、三大玩家點樣分工？</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🟡</span>
              <div>
                <p className="font-bold text-gray-900 text-xl">USDT（Tether）</p>
                <p className="text-sm text-gray-500">市場佔有率第一位</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              呢個係最早出世嘅穩定幣，老大哥來的。市值幾百億美金，幾乎每個交易所都支持。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-800 text-sm mb-1">✅ 優勢</p>
                <p className="text-gray-600 text-xs">流動性最高、支援最廣、歷史最耐</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-semibold text-red-800 text-sm mb-1">⚠️ 隱憂</p>
                <p className="text-gray-600 text-xs">爭議最多（儲備透明度、訴訟歷史）</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔵</span>
              <div>
                <p className="font-bold text-gray-900 text-xl">USDC（Circle）</p>
                <p className="text-sm text-gray-500">機構最愛</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              由Coinbase同高盛支持，透明度較高，定期由會計師事務所審計。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-800 text-sm mb-1">✅ 優勢</p>
                <p className="text-gray-600 text-xs">儲備透明、機構信任、監管合規</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-semibold text-red-800 text-sm mb-1">⚠️ 隱憂</p>
                <p className="text-gray-600 text-xs">矽谷銀行事件曾經引發信心危機</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🟣</span>
              <div>
                <p className="font-bold text-gray-900 text-xl">USDJ（Justin 幣？）</p>
                <p className="text-sm text-gray-500">新勢力</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              其實 USDJ 係由 TRON 區塊鏈創辦人孫宇晨發起嘅 stablecoin，透過 TRON 網絡轉帳，費用極低。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-800 text-sm mb-1">✅ 優勢</p>
                <p className="text-gray-600 text-xs">轉帳速度快、費用平、主打新興市場</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-semibold text-red-800 text-sm mb-1">⚠️ 隱憂</p>
                <p className="text-gray-600 text-xs">創辦人爭議頗多、歷史較短</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why banks care */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">三、點解傳統銀行又要嚟參一腳？</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          你可能以為銀行會抗拒穩定幣，但係近年佢哋反而係度積極開發自己嘅版本。
        </p>

        <div className="bg-yellow-50 p-5 rounded-xl mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>JP Morgan、摩根大通</strong>推出咗自己嘅區塊鏈支付網絡。<br/>
            <strong>Visa、Mastercard</strong>已經支援穩定幣支付。<br/>
            <strong>香港、新加坡</strong>監管機構開始發 stablecoin 牌照。
          </p>
          <p className="text-gray-700 leading-relaxed">
            佢哋唔係抗拒，而係想分一杯羹。
          </p>
        </div>

        {/* Future */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">四、誰能笑到最後？</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          老實講，呢個問題冇人答到你。但係我可以分享我嘅觀察：
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-xl">1.</span>
            <p className="text-gray-700"><strong>USDT/USDC 唔會消失</strong>，因為網絡效應太強。但係佢哋嘅優勢會慢慢被蠶食。</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">2.</span>
            <p className="text-gray-700"><strong>監管合規會係關鍵</strong>。邊個能够拿到最多牌照，邊個就贏。</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">3.</span>
            <p className="text-gray-700"><strong>銀行穩定幣可能係黑馬</strong>。如果傳統銀行認真做，佢哋嘅信用背書可能更吸引保守用家。</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">4.</span>
            <p className="text-gray-700"><strong>最終可能係多幣種共存</strong>。好似而家現金有唔同面值一樣，穩定幣世界都會有多種選擇。</p>
          </div>
        </div>

        {/* My take */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">五、我嘅建議</h2>

        <div className="bg-gray-100 p-6 rounded-xl mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            如果你係普通用家，想用穩定幣做跨境匯款或者暫時泊岸：
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• 用 <strong>USDC</strong> 如果你注重透明度同合規</li>
            <li>• 用 <strong>USDT</strong> 如果你需要最高嘅流動性同支援</li>
            <li>• 留意你嘅國家是否允許使用穩定幣</li>
            <li>• 小額試驗，唔好一次過放大量資金</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mt-8">
          <p><strong>編輯觀點：</strong>穩定幣市場變化極快，本文祇反映撰寫時嘅情況。投資涉及風險，請自行研究同判斷。</p>
        </div>

        {/* Author box */}
        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
            ✍️
          </div>
          <div>
            <p className="font-semibold text-gray-900">NewsFlow 編輯部</p>
            <p className="text-sm text-gray-500">專注加密貨幣觀察，用淺白語言解釋複雜話題</p>
          </div>
        </div>
      </article>
    </main>
  )
}
