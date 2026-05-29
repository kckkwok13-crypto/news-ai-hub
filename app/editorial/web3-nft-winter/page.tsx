import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 寒冬：NFT是否已經完結？',
  description: '從2021年的瘋狂炒賣到現在一地眼鏡碎，NFT市場究竟發生了什麼？我們可以從中學到什麼？一個曾經相信這個願景的人的反思。',
}

export default function Web3NFTWinter() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">區塊鏈</span>
            <span>Reading time: 9 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web3 寒冬：NFT是否已經完結？
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            坦白講，寫呢篇文對我嚟講有啲難。因為我曾經真心相信過NFT可以改變世界。
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-8 border border-indigo-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            2021年，我睇到有人喺NFT sale入面一分鐘賺幾十萬港紙。OpenSea日交易量幾億美金。一張JPEG圖可以賣過百萬。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            我忍唔住問身邊朋友：「你話NFT係咪真係改變互聯網嘅嘢？」
          </p>
          <p className="text-gray-700 leading-relaxed">
            佢答我：「你問錯問題了。你應該問：NFT係咪真係改變咗。」
          </p>
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">一、到底發生咗乜嘢？</h2>

        <div className="relative border-l-4 border-indigo-200 pl-6 space-y-8 mb-8">
          <div>
            <p className="text-sm font-bold text-indigo-600 mb-1">2021年頭 — 熱身期</p>
            <p className="text-gray-700">NFT仲係小眾話題，主要係加密 art 圈。入閘要魄力，因為主流社會仲未知呢樣嘢係乜。</p>
          </div>
          <div>
            <p className="text-sm font-bold text-purple-600 mb-1">2021年中 — 瘋狂期</p>
            <p className="text-gray-700">Beeple嘅JPEG賣咗6900萬美金。Everydays係拍賣行 Christie&apos;s 成交。每個人都想知：「點先可以整NFT？」</p>
          </div>
          <div>
            <p className="text-sm font-bold text-pink-600 mb-1">2022年 — 爆煲期</p>
            <p className="text-gray-700">炒作散去，大部\n\n\n多數NFT歸零。話「Web3會改變世界」嘅人發現自己買咗張JPEG。FTX爆煲凍過水，整個市場信心崩盤。</p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 mb-1">2023-2026 — 冰封期</p>
            <p className="text-gray-700">交易量跌至高峰期嘅5%以下。仍然堅守嘅，變晒「忠實信徒」或者「水魚」。</p>
          </div>
        </div>

        {/* What went wrong */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">二、點解搞成咁？</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          老實講，NFT失敗嘅原因可以分三層：
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-red-50 p-5 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-700 mb-3">🔺 第一層：外在因素</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>加密寒冬</strong>：比特幣由6萬跌到1萬幾，整個生態受影響</li>
              <li>• <strong>FTX事件</strong>：最大交易所之一突然爆煲</li>
              <li>• <strong>宏觀經濟</strong>：利息上升，資金流向保守</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
            <h3 className="font-bold text-yellow-700 mb-3">🔺 第二層：炒作反噬</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>PFP項目泛濫</strong>：10000張一樣嘅猿仔，點解可以賣咁貴？</li>
              <li>• <strong>鯨魚操控</strong>：大戶炒作後抛售，散戶接火棒</li>
              <li>• <strong>名人效應</strong>：Snapchat明星話「我話咩就升值」，跟嘅人都仆街</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-3">🔺 第三層：根本問題（最傷心）</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>多數NFT用途存疑</strong>：一張JPEG，點解要區塊鏈？</li>
              <li>• <strong>技術門檻太高</strong>：普通人根本唔知點拎NFT、點用wallet</li>
              <li>• <strong>承諾未兌現</strong>：Web3 social media未出現，GameFi未爆發</li>
            </ul>
          </div>
        </div>

        {/* Is it dead */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">三、NFT係咪已經玩完？</h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-8 border border-green-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            呢個係我身邊朋友最鍾意問嘅問題。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            我會答：「未死，但係變咗模樣。」
          </p>
          <p className="text-gray-700 leading-relaxed">
            NFT並未消失，只係走咗去佢真正有用嘅地方：
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <p className="text-2xl mb-2">🎫</p>
            <p className="font-bold text-gray-900 mb-1">演唱會門票</p>
            <p className="text-gray-600 text-sm">Taylor Swift、大牌明星已經用NFT做門票，防止黃牛</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <p className="text-2xl mb-2">📋</p>
            <p className="font-bold text-gray-900 mb-1">房地產契據</p>
            <p className="text-gray-600 text-sm">部分國家開始用區塊鏈做產權記錄</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <p className="text-2xl mb-2">🏆</p>
            <p className="font-bold text-gray-900 mb-1">運動員紀念品</p>
            <p className="text-gray-600 text-sm">NBA Top Shot仍然活跃，用戶仍然buy</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <p className="text-2xl mb-2">🎮</p>
            <p className="font-bold text-gray-900 mb-1">遊戲道具</p>
            <p className="text-gray-600 text-sm">真正嘅遊戲道具擁有權概念仍在</p>
          </div>
        </div>

        {/* What we learned */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">四、我哋學到啲乜？</h2>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="text-xl">1.</span>
            <p className="text-gray-700"><strong>技術需要場景，唔係場景需要技術</strong>。<br/><span className="text-gray-500 text-sm">唔係「區塊鏈可以改變世界」，而係「呢個問題區塊鏈可以幫手嗎？」</span></p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="text-xl">2.</span>
            <p className="text-gray-700"><strong>一分鐘幾十萬嘅嘢，唔係投資，係賭博</strong>。<br/><span className="text-gray-500 text-sm\">如果你唔理解你買緊乜，市場會教你。</span></p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="text-xl">3.</span>
            <p className="text-gray-700"><strong>願景同落地係兩回事</strong>。<br/><span className="text-gray-500 text-sm">Web3係未來，但係「未來」可能係20年後，唔係2年後。</span></p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="text-xl">4.</span>
            <p className="text-gray-700"><strong>長期價值先係真正價值</strong>。<br/><span className="text-gray-500 text-sm">而家仍然穩穩陣陣存在嘅區塊鏈項目，都係有真正用途嘅。</span></p>
          </div>
        </div>

        {/* My confession */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">五、寫俾曾經相信嘅我</h2>

        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            老實講，我唔後悔曾經相信NFT。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            因為嗰個信念，我學懂區塊鏈係點運作、智能合約係乜嘢、以太坊生態點運作。呢啲知識，而家仲係有用。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            NFT泡沫爆嘅時候，我損失咗一啲錢。但係我得到嘅，係對呢個行業更深嘅理解。
          </p>
          <p className="text-gray-700 leading-relaxed">
            呢個就係創新嘅代價。每一個成功嘅Uber背後，有十個失敗嘅 startup。每一個成功嘅區塊鏈應用背後，有一百個空氣幣。
          </p>
        </div>

        {/* Final thought */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl mb-8">
          <p className="text-lg leading-relaxed">
            Web3未死。<br/>
            佢只係冬眠緊，等真正有用嘅應用場景出現。<br/>
            而我，仲係選擇相信。
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mt-8">
          <p><strong>編輯觀點：</strong>本文反映作者個人觀察同反思，唔構成任何投資建議。加密貨幣同NFT投資涉及極高風險，請自行判斷。</p>
        </div>

        {/* Author box */}
        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
            ✍️
          </div>
          <div>
            <p className="font-semibold text-gray-900">NewsFlow 編輯部</p>
            <p className="text-sm text-gray-500">誠實觀察，不吹不黑</p>
          </div>
        </div>
      </article>
    </main>
  )
}
