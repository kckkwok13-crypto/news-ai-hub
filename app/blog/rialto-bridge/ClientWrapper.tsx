"use client";

import Link from "next/link";
import { useState } from "react";
import Comments from "@/components/Comments";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌅" },
  { id: "history", title: "歷史秘密", emoji: "🏗️" },
  { id: "photography", title: "攝影攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function RialtoBridgePage() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="/images/rialto-bridge-hero.jpg"
          alt="里奧托橋黃昏日落"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/30 text-blue-200 text-sm mb-4">
            🌊 水上都市 · 浪漫橋樑
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            繾綣大運河的黃昏餘暉：威尼斯里奧托橋（Rialto Bridge）深度打卡與唯美日落攻略
          </h1>
          <p className="text-slate-300">發布日期：2026年6月 · 作者：純粹旅人</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <div className="bg-slate-800 rounded-xl p-6 mb-10">
          <h2 className="text-white text-lg font-semibold mb-4">📑 文章目錄</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tocItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1400&q=80"
              alt="里奧托橋黃昏全景"
              className="w-full h-80 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&q=80";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-sm">
                被譽為「大運河上的白色巨龍」、威尼斯歷史最悠久且最著名的文藝復興石橋 —— 里奧托橋
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section id="intro" className="mb-16">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            如果說聖馬可廣場是威尼斯華麗的會客廳，那麼橫跨在巨型S形大運河（Grand Canal）最窄處的
            <strong className="text-blue-400">里奧托橋（Rialto Bridge / 又譯雷雅托橋）</strong>
            ，就是這座水上都市最充滿生活朝氣的心臟。這座落成於 1591 年的白色大理石單拱石橋，在長達幾百年的歲月裡，
            曾是唯一一座可以徒步橫跨大運河的橋樑。它那獨特的 V 字形雙排商店拱廊設計，不僅是文藝復興時期的建築奇蹟，
            更是全威尼斯欣賞大運河日落最浪漫的無冕之王。
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            今日呢篇 Blog 就帶大家深度漫步這座「大運河新娘」，解鎖它背後的建築傳奇與文學故事，
            並送上攝影師私藏的避開人潮日落打卡位！
          </p>
        </section>

        {/* History Section */}
        <section id="history" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>🏗️</span> 璀璨的海洋貿易核心：里奧托橋的 3 大歷史秘密
          </h2>

          <div className="space-y-8">
            {/* Secret 1 */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                1. 打敗米開朗基羅的設計 —— 備受質疑的建築奇蹟
              </h3>
              <p className="text-slate-300 leading-relaxed">
                在 16 世紀前，這裏原本是一座木橋，但因為常年貿易繁重導致坍塌了幾次。威尼斯政府決定公開招標建造石橋，
                當年連文藝復興巨匠米開朗基羅、建築大師帕拉底歐都提交了設計圖。最後，政府居然選擇了名字非常有趣的本土設計師
                <strong className="text-amber-400">「安東尼·達·蓬特」（Antonio da Ponte，名字意思正是「橋樑安東尼」）</strong>。
                當時無數專家斷言這座沒有中央橋墩的單拱巨大石橋會在幾年內倒塌，
                但蓬特用完美的幾何力學狠狠打了所有人的臉 —— 四百多年過去了，老橋依舊巍然屹立。
              </p>
            </div>

            {/* Secret 2 */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                2. 莎士比亞筆下的威尼斯華爾街 —— 里奧托市場 (Mercato di Rialto)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                在莎士比亞的名劇《威尼斯商人》中，主角經常問一句：
                <em className="text-amber-300">「里奧托有什麼新聞嗎？」</em>
                因為在威尼斯共和國全盛時期，里奧托橋周邊就是整個地中海的金融與貿易中心！時至今日，穿過橋頭就能抵達擁有千年歷史的
                <strong className="text-blue-400">里奧托魚市場與蔬果市場</strong>。
                每天清晨，新鮮的海鮮與托斯卡尼運來的蔬果在這裡卸貨，充滿了地道而充滿活力的下町風情。
              </p>
            </div>

            {/* Secret 3 */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                3. 橋中有橋：全世界最奢華的拱廊購物街
              </h3>
              <p className="text-slate-300 leading-relaxed">
                里奧托橋的設計非常絕妙，它不僅是一條通道，更是一條空中商業街！整座橋被兩排精緻的大理石拱廊分成三條通道：
                中間的大通道兩旁開滿了售賣威尼斯手工面具、穆拉諾（Murano）彩色玻璃工藝品以及高檔絲綢的店鋪。
                而在拱廊的外側，還有兩條貼近河面的觀景通道，設計巧奪天工。
              </p>
            </div>
          </div>

          {/* Second Image */}
          <div className="mt-10 mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/rialto-bridge-second.jpg"
                alt="里奧托橋全景"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm">
                  站在橋頂中央，將威尼斯大運河最優雅的S型弧度與宮殿群盡收眼底
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Tips */}
        <section id="photography" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>📸</span> 攝影師私藏：如何捕捉最完美、乾淨的「大運河S型日落」
          </h2>

          <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl p-8 border border-amber-600/30">
            <p className="text-slate-300 text-lg mb-6">
              里奧托橋因為太出名，黃昏時分橋頂中央往往擠滿了觀看日落的遊客。想要拍出高級的同框大片，
              這裡推薦兩個隱秘機位：
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <h4 className="text-xl font-semibold text-amber-400 mb-3">
                  🏢 天台包場機位 —— T Fondaco dei Tedeschi 德國商行觀景台
                </h4>
                <p className="text-slate-300">
                  這家就在里奧托橋旁邊的頂級百貨公司，其頂樓擁有一個
                  <strong className="text-amber-300">免費開放的 360 度紅色木製天台</strong>
                  （需提前在官網預約）。站在這裡，你可以從高空徹底俯瞰里奧托橋那道完美的白色弧線，
                  以及整條大運河被夕陽染成金黃色的震撼全景！
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
                <h4 className="text-xl font-semibold text-amber-400 mb-3">
                  🌅 文藝復興河岸側拍：Riva del Vin 碼頭步道
                </h4>
                <p className="text-slate-300">
                  走到大運河南岸的餐廳步道上，利用岸邊整齊排列的木樁作為前景側拍老橋。
                  當夜晚橋上的大理石拱門亮起暖黃色的夜燈，水面倒影著璀璨霓虹，
                  畫面充滿了意式微醺的復古浪漫。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gondola Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🚢</span> 自由行必讀：如何最浪漫地「穿過」里奧托橋
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            除了在橋上走，最完美的威尼斯體驗絕對是從橋下穿過！如果預算充足，可以在黃昏時花費約
            <strong className="text-amber-400"> 80-100 歐元</strong>租一艘
            <strong className="text-blue-400">黑色貢多拉（Gondola）</strong>，
            當船夫搖著槳、哼著意大利民謠帶你緩緩駛過里奧托橋巨大的石拱底座時，仰望那精美的浮雕，浪漫指數徹底破表。
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            如果想經濟實惠，乘搭<strong className="text-blue-400">1 號水上巴士（Vaporetto）</strong>
            坐在露天船頭，同樣能享受到極具視覺衝擊的穿橋體驗。
          </p>
        </section>

        {/* Travel Tips */}
        <section id="tips" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>💡</span> 里奧托橋 旅遊實用小貼士 (Travel Tips)
          </h2>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 shadow-2xl">
            <div className="grid gap-6">
              {/* Tip 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">小心海鷗與貴重財物</h4>
                <p className="text-slate-300">
                  與聖馬可廣場一樣，里奧托橋周邊常年遊客極度密集，是扒手下手的高危區。
                  另外，大運河邊的海鷗極其精明，如果你手裡拿著薄餅（Pizza）或者手工雪糕（Gelato）
                  在橋邊拍照，牠們隨時會從空中高速俯衝將食物叼走，拍照時記得抓緊食物喔！
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">避開人潮黃金時間</h4>
                <p className="text-slate-300">
                  如果想拍到完全沒有遊客、清靜精緻的大理石橋身，建議在
                  <strong className="text-amber-300">早上 7:00 左右前來</strong>。
                  這時候運河上只有送貨的木船，晨霧初散，整座石橋散發著宛如與世隔絕的古典美。
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">周邊平價美食推介</h4>
                <p className="text-slate-300">
                  老橋附近有許多開在巷弄裏的 "Bacaro"（威尼斯傳統小酒館）。進去點一杯當地的有氣白葡萄酒
                  <strong className="text-amber-300">"Spritz"</strong>，
                  再配上幾塊 1-2 歐元的<strong className="text-amber-300">"Cicchetti"</strong>
                  （威尼斯式小麵包塔，上面鋪滿鱈魚醬或火腿），坐在河邊階梯上享用，
                  這才是最地道的大阪/威尼斯式慢生活。
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="text-lg font-semibold text-amber-400 mb-2">交通方式</h4>
                <p className="text-slate-300">
                  乘搭威尼斯 ACTV 水上巴士 <strong className="text-amber-300">1 號或 2 號線</strong>，
                  直接在 <strong className="text-blue-400">Rialto 站</strong> 下船，
                  一出碼頭右手邊就是里奧托橋的起點。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-slate-800 rounded-xl p-5 text-center border border-slate-700">
            <div className="text-2xl mb-2">📍</div>
            <div className="text-slate-400 text-sm">位置</div>
            <div className="text-white font-semibold">大運河最窄處</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 text-center border border-slate-700">
            <div className="text-2xl mb-2">🏗️</div>
            <div className="text-slate-400 text-sm">建成年份</div>
            <div className="text-white font-semibold">1591年</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 text-center border border-slate-700">
            <div className="text-2xl mb-2">🎫</div>
            <div className="text-slate-400 text-sm">過橋費用</div>
            <div className="text-white font-semibold">免費</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 text-center border border-slate-700">
            <div className="text-2xl mb-2">⭐</div>
            <div className="text-slate-400 text-sm">評分</div>
            <div className="text-white font-semibold">4.8/5</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center mb-16">
          <p className="text-white text-xl mb-4">
            👇 留言分享：你更想站在德國商行天台俯瞰整座白色老橋，
            還是坐著貢多拉從它的巨大石拱下浪漫穿過呢？
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 hover:underline">
            ← 返回 Blog 列表
          </Link>
        </div>
      </div>

      {/* Comments Section */}
      <Comments slug="rialto-bridge" />
    </div>
  );
}