"use client";

import Comments from "@/components/Comments";

const tocItems = [
  { id: "intro", label: "帝國的黃金夏日" },
  { id: "rooms", label: "1441間房間" },
  { id: "timeline", label: "歷史時間軸" },
  { id: "crowd", label: "人流大數據" },
  { id: "experience", label: "沉浸實感" },
  { id: "tips", label: "防坑手札" },
];

export default function SchonbrunnPalacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-red-950 to-yellow-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed top-20 right-4 z-50 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
          <h3 className="text-sm font-bold text-amber-400 mb-3">📋 文章導覽</h3>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-xs text-white/70 hover:text-amber-400 transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header with Hero Image */}
      <header className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.muvamo.com/wp-content/uploads/2024/12/schoenbrunn-park-58-scaled.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-950/90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-red-900/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs text-amber-300 uppercase tracking-widest mb-4">
              哈布斯堡王朝 ‧ 活生生的帝國史詩
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              帝國的黃金夏日：維也納美泉宮
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-amber-400">
                1441間房的皇家大數據與深度攻略
              </span>
            </h1>
            <p className="text-white/80 italic">二零二六年盛夏 ‧ 第一身皇家宮廷漫步與圖表分析</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Quote */}
        <section id="intro" className="mb-12">
          <blockquote className="bg-red-900/30 border-l-4 border-amber-400 rounded-r-xl p-6 text-lg italic text-red-100">
            <p className="mb-2">「如果凡爾賽宮象徵着太陽王的絕對狂妄，</p>
            <p>
              那麼美泉宮則凝聚了哈布斯堡王朝最繾綣、最傳奇的家族記憶。當你漫步在巴洛克花園的噴泉邊，每一片落葉都彷彿在低吟着茜茜公主與弗蘭茨皇帝那段被歷史定格的哀歌。」
            </p>
          </blockquote>

          <p className="text-lg leading-relaxed text-white/90 mt-8">
            如果說維也納的霍夫堡皇宮是哈布斯堡波瀾壯闊的權力中樞，那麼位於城市西南部的<strong className="text-amber-400">美泉宮（Schönbrunn Palace）</strong>，無疑就是這座音樂之都最溫柔、最耀眼的皇家明珠。這座落成於 1749 年的巨型巴洛克宮殿建築群，總面積高達 <strong className="text-amber-400">1.8 平方公里（約 186 公頃）</strong>，甚至擁有全球最古老的動物園。
          </p>
        </section>

        {/* Section 1: 1441 Rooms */}
        <section id="rooms" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="text-red-300">1,441間房間的奧秘 ── 核心收費展廳立體分布圖</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">
            美泉宮規模宏大，內部共擁有高達 <strong className="text-amber-400">1,441 個房間</strong>，但其中僅有 45 個房間對公眾開放參觀。以下是美泉宮最核心的收費與打卡地標：
          </p>

          {/* Four Core Areas Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Area 1: Great Gallery */}
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 hover:bg-red-900/50 transition-colors">
              <h3 className="text-xl font-bold text-red-300 mb-2">大彼得大廳 (Great Gallery)</h3>
              <p className="text-amber-400 text-sm mb-3">【帝國國宴與舞廳】</p>
              <p className="text-white/70 text-sm">
                長 40 米，滿布奢華金箔與水晶吊燈。曾是維也納會議期間各國元首熱舞地。
              </p>
            </div>

            {/* Area 2: Millions Room */}
            <div className="bg-amber-700/30 border border-amber-500/30 rounded-xl p-6 hover:bg-amber-700/50 transition-colors">
              <h3 className="text-xl font-bold text-amber-300 mb-2">百萬大廳 (Millions Room)</h3>
              <p className="text-amber-400 text-sm mb-3">【全球最貴私人客廳】</p>
              <p className="text-white/70 text-sm">
                牆壁鋪滿極珍貴的印度帕利桑德紅木，並鑲嵌無價的中式波斯細密畫。
              </p>
            </div>

            {/* Area 3: Gloriette */}
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 hover:bg-emerald-900/50 transition-colors">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">凱旋門 (Gloriette)</h3>
              <p className="text-amber-400 text-sm mb-3">【後山皇家制高點】</p>
              <p className="text-white/70 text-sm">
                矗立在山丘之巔的希臘式宏偉廊柱。內置皇家咖啡廳，可完美俯瞰美泉宮全景。
              </p>
            </div>

            {/* Area 4: Mirror Room */}
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 hover:bg-blue-900/50 transition-colors">
              <h3 className="text-xl font-bold text-blue-300 mb-2">鏡廳 (Mirror Room)</h3>
              <p className="text-amber-400 text-sm mb-3">【莫札特神童傳奇】</p>
              <p className="text-white/70 text-sm">
                公元 1762 年，年僅 6 歲的音樂神童莫札特曾在此為瑪麗亞女王單獨演奏。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section id="timeline" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">⏳</span>
            <span className="text-red-300">哈布斯堡王朝的權力中樞 ── 兩大傳奇人物歷史時間軸</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">
            美泉宮的靈魂由兩位大名鼎鼎的女性統治者所塑造：第一位是哈布斯堡王朝唯一的女性君主 ──「奧地利國母」瑪麗亞·特蕾莎，她下令將宮殿外牆漆成經典的「美泉黃」；第二位則是名震全球、美麗動人卻一生悲劇的茜茜公主（Empress Sisi）。
          </p>

          {/* Timeline Visual */}
          <div className="bg-white/5 rounded-xl p-8 border border-amber-400/20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-amber-400/30 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <div className="bg-red-800/30 border border-red-500/50 rounded-lg p-4">
                      <span className="text-amber-400 font-bold">1743 - 1749年</span>
                      <p className="text-white/80 text-sm mt-1">瑪麗亞·特蕾莎大舉擴建美泉宮</p>
                      <p className="text-red-300 text-xs italic">巴洛克黃金期</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-amber-400 z-10" />
                  <div className="flex-1" />
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-6">
                  <div className="flex-1" />
                  <div className="w-4 h-4 bg-emerald-600 rounded-full border-2 border-amber-400 z-10" />
                  <div className="flex-1 text-left">
                    <div className="bg-emerald-800/30 border border-emerald-500/50 rounded-lg p-4">
                      <span className="text-amber-400 font-bold">1854年</span>
                      <p className="text-white/80 text-sm mt-1">茜茜公主與弗蘭茨皇帝在此成婚</p>
                      <p className="text-emerald-300 text-xs italic">茜茜公主進駐</p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <div className="bg-blue-800/30 border border-blue-500/50 rounded-lg p-4">
                      <span className="text-amber-400 font-bold">1918年</span>
                      <p className="text-white/80 text-sm mt-1">卡爾一世退位，哈布斯堡王朝謝幕</p>
                      <p className="text-blue-300 text-xs italic">帝國終章</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-amber-400 z-10" />
                  <div className="flex-1" />
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-white/50 mt-6">見證了神聖羅馬帝國與奧匈帝國的興衰落幕</p>
          </div>
        </section>

        {/* Section 3: Crowd Chart */}
        <section id="crowd" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <span className="text-red-300">一日遊「觀光客流量與無痛避堵」大數據動態折線圖</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">
            作為全奧地利參觀人數第一的頂級地標，美泉宮每天早上十點起就會湧入恐怖的歐美旅行團大軍。以下是<strong className="text-amber-400">「美泉宮24小時擁擠度與觀賞舒適度」</strong>大數據分析：
          </p>

          {/* Crowd Chart Visual */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-white/50">
                <span>100% (極擁擠)</span>
                <span>50% (舒適)</span>
                <span>0%</span>
              </div>

              {/* Chart area */}
              <div className="absolute left-12 right-0 top-0 bottom-8">
                {/* Grid lines */}
                <div className="absolute left-0 right-0 top-1/4 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-3/4 border-t border-dashed border-white/10" />

                {/* Trend line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 0,75 Q 20,55 35,20 T 55,15 Q 70,45 85,85 T 100,90"
                    fill="none"
                    stroke="#c0392b"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Best early window */}
                  <circle cx="12" cy="70" r="4" fill="#f4cb43" />
                  <circle cx="12" cy="70" r="6" fill="none" stroke="#f4cb43" strokeWidth="1" />
                  {/* Sunset window */}
                  <circle cx="70" cy="55" r="4" fill="#f4cb43" />
                  <circle cx="70" cy="55" r="6" fill="none" stroke="#f4cb43" strokeWidth="1" />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/50">
                  <span className="text-left">08:00<br/><span className="text-emerald-400">開門</span></span>
                  <span className="text-center">10:30<br/><span className="text-white/70">團客</span></span>
                  <span className="text-right text-red-400 font-bold">12:00-14:30<br/>最高峰</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-400" />
                <span className="text-sm text-white/70">🌅 晨曦包場窗口</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-400" />
                <span className="text-sm text-white/70">🌇 夕陽餘暉窗口</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: First Person Experience */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🏰</span>
            <span className="text-red-300">第一身沉浸實感：在「美泉黃」與中式洛可可間觸摸歷史</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">
            走出地鐵 U4 線美泉宮站，順著寬闊的皇家林蔭大道步行五分鐘，那一整面高大、連綿不斷的巴洛克式「美泉黃」宮殿主立面便排山倒海般在眼前鋪開。這種獨特的暖黃色調，在維也納澄澈的藍天襯托下，散發著一種極其高雅、溫潤且不失威嚴的帝國風骨。
          </p>

          <p className="text-lg text-white/80 mb-6">
            當漫步到禁止拍照的內部核心 ── <strong className="text-amber-400">「百萬大廳（Millions Room）」</strong>。這裡被公認為全歐洲最完美、最奢華的中西合璧宮廷藝術傑作。牆壁鋪滿了從印度與巴西進口、無比珍貴的帕利桑德紅木，並由皇家工匠純手工雕刻出繁複的金色巴洛克相框，相框內精緻地鑲嵌著 139 幅歷史悠久的古代波斯細密畫。
          </p>

          {/* Photography Tips Highlight Box */}
          <div className="bg-amber-900/20 border-l-4 border-amber-400 rounded-r-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4">📸 攝影師不藏私：美泉宮三大絕美拍照與玩樂機位</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-2xl">⛲</span>
                <div>
                  <strong className="text-amber-400">海神噴泉（Neptune Fountain）與宮殿對稱側拍：</strong>
                  位於巴洛克花園的盡頭。走到巨大的大理石海神雕像後方，將相機放低貼近水面，利用噴泉飛濺的水花與水面作為天然前景，可以將整座巍峨的「美泉黃」宮殿主體完美收納進鏡頭！
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🌅</span>
                <div>
                  <strong className="text-amber-400">凱旋門（Gloriette）草坪的「落日全景畫卷」：</strong>
                  順著 z 字形的碎石路爬上後山山頂。站在白色大理石廊柱的凱旋門下往北望去，黃昏時分，夕陽將整座美泉宮、遠處維也納市中心的聖斯蒂芬大教堂尖塔全部鍍上一層碎金。
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <strong className="text-amber-400">皇家溫室棕櫚屋（Palmenhaus）：</strong>
                  位於花園西側，這是一座由純鋼骨與巨大玻璃拼接而成的十九世紀新藝術運動風格溫室，裡面長滿了參天熱帶植物，拍起照來充滿了復古的綠意美感。
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Tips Panel */}
        <section id="tips" className="mb-16 scroll-mt-24">
          <div className="bg-red-900/80 rounded-xl p-8 border border-red-600/50">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              歐行智囊 ‧ 美泉宮無痛暢玩生存隨身手札
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl">🎫</span>
                <div>
                  <strong className="text-amber-400">100% 必須提前 2-4 星期官網預訂定時門票：</strong>
                  <span className="text-white/80">美泉宮每日嚴格限流，<strong className="text-amber-400">現場排隊買票在旺季基本上是買不到當天好時段的</strong>。官網有兩種主要票制：<strong className="text-amber-400">Imperial Tour（22個房間）</strong>和<strong className="text-amber-400">Grand Tour（40個房間）</strong>。大數據強烈推介買 Grand Tour（成人約 29-32 歐元），因為只有 Grand Tour 才能進到靈魂的「百萬大廳」和弗蘭茨皇帝的私人密室，性價比高達 99%。</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <strong className="text-amber-400">避開大軍的「兩頭甜」路線智慧：</strong>
                  <span className="text-white/80">大數據顯示，旅行團最集中的時間是 10:30-15:00。<strong className="text-amber-400">最精明的避堵玩法</strong>是：買早上 08:15 第一批進場的 Grand Tour 電子票，此時寢宮內空無一人，你可以安靜地聽導覽；半小時逛完室內後，大軍剛好進場，而你已經來到空曠的戶外花園和後山凱旋門，完美錯峰！</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🚂</span>
                <div>
                  <strong className="text-amber-400">後山爬坡的體力救星 ── 皇家迷你小火車 (Panorama Train)：</strong>
                  <span className="text-white/80">從宮殿大門走到山頂的凱旋門有一段長達 1 公里、坡度達 30 度的碎石斜坡。園區內每 30 分鐘有一班<strong className="text-amber-400">彩色全景小火車（Panorama Train）</strong>，花費幾歐元購買全天日票即可無限次乘搭，直接送到山頂，非常省力。</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">👟</span>
                <div>
                  <strong className="text-amber-400">鞋履與服裝嚴格警告：</strong>
                  <span className="text-white/80">美泉宮巴洛克花園面積相當於 100 多個足球場，地面 100% 是由細碎、粗糙的白砂石鋪成。<strong className="text-amber-400">請務必穿著厚底、避震卓越的運動健步鞋</strong>，切勿穿平底薄鞋或高跟鞋前來喔！</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-3">📍 基本資訊</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><strong className="text-amber-400">建造年份：</strong>1749 年落成</li>
              <li><strong className="text-amber-400">房間數量：</strong>1,441 個（僅 45 個開放）</li>
              <li><strong className="text-amber-400">佔地面積：</strong>1.8 平方公里（186 公頃）</li>
              <li><strong className="text-amber-400">門票：</strong>Grand Tour 約 29-32 歐元</li>
            </ul>
          </div>
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-3">🎯 打卡攻略</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><strong className="text-amber-400">最佳進場：</strong>早上 08:15 第一批</li>
              <li><strong className="text-amber-400">必看展廳：</strong>百萬大廳（Grand Tour）</li>
              <li><strong className="text-amber-400">推薦登頂：</strong>凱旋門（Gloriette）</li>
              <li><strong className="text-amber-400">省力神器：</strong>全景小火車日票</li>
            </ul>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center py-8 border-t border-b border-amber-400/30">
          <p className="text-lg italic text-white/70">
            ─ 歲月流逝於泉水，帝國鐫刻於宮牆。
            <br />
            願每位漫步維也納的旅人，都能在美泉宮的夕陽下找到屬於自己的皇家夢。 ─
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <Comments slug="schonbrunn-palace" />
        </div>
      </main>
    </div>
  );
}