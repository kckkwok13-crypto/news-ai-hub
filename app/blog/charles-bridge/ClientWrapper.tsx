"use client";

import Comments from "@/components/Comments";

const tocItems = [
  { id: "intro", label: "走進歷史的脊樑" },
  { id: "numbers", label: "黃金密碼矩陣" },
  { id: "landmarks", label: "三大核心地標" },
  { id: "crowd", label: "人流大數據" },
  { id: "experience", label: "沉浸實感" },
  { id: "tips", label: "防坑手札" },
];

export default function CharlesBridgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
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
              "url('https://as1.ftcdn.net/v2/jpg/02/98/53/04/1000_F_298530452_hsRg2k4VaHvy5m1DFIs6Ui4NYKtr5OEc.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 rounded-full text-xs text-amber-300 uppercase tracking-widest mb-4">
              橫跨伏爾塔瓦河 ── 歷史的脊樑
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              東歐最美的黃金絲帶：布拉格查理大橋
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-amber-400">
                650年星象密碼與反思散策
              </span>
            </h1>
            <p className="text-white/80 italic">二零二六年盛夏 ‧ 第一身波希米亞暮色漫步與大數據解構</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Quote */}
        <section id="intro" className="mb-12">
          <blockquote className="bg-blue-900/30 border-l-4 border-amber-400 rounded-r-xl p-6 text-lg italic text-blue-100">
            <p className="mb-2">「莫札特說，布拉格的靈魂是用音符編織的；</p>
            <p>
              而當你站在查理大橋上，看著落日將 30 尊聖者雕像鍍上一層不朽的碎金，你才會明白：這座橋是布拉格最激昂、最繾綽的一段交響樂章。」
            </p>
          </blockquote>

          <p className="text-lg leading-relaxed text-white/90 mt-8">
            如果說布拉格城堡是波希米亞高傲的皇冠，那麼橫跨伏爾塔瓦河的<strong className="text-amber-400">查理大橋（Charles Bridge / Karlův most）</strong>，無疑就是這座歷史古城最溫柔的脊樑。這座始建於 1357 年的中世紀巨型砂岩石拱橋，長 516 米，寬約 10 米，由 16 個宏偉的橋拱支撐。它不僅連接著老城區與城堡區，更是一座<strong className="text-amber-400">名副其實的「露天巴洛克雕塑博物館」</strong>。
          </p>
        </section>

        {/* Section 1: Golden Number Matrix */}
        <section id="numbers" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📐</span>
            <span className="text-blue-300">查理大橋奠基「黃金密碼數字矩陣」</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">
            查理大橋的堅固流傳了六百多年，經歷無數次洪水而屹立不倒。傳說神聖羅馬帝國皇帝查理四世（Charles IV）在建造此橋時，極度迷戀星象與數秘學。他特意邀請占星術士精準計算出一個<strong className="text-amber-400">絕對對稱、蘊含宇宙能量的「奇數回文密碼」</strong>，並命令必須在這一組數字交匯的精確秒數放落第一塊奠基石。
          </p>

          {/* Number Matrix Visual */}
          <div className="bg-white/5 rounded-xl p-8 border border-blue-500/20 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="text-center">
                <div className="bg-blue-600/30 border border-blue-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-blue-300">1357</span>
                </div>
                <span className="text-xs text-white/60">年</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-orange-500/30 border border-orange-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-orange-300">9</span>
                </div>
                <span className="text-xs text-white/60">日</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-emerald-500/30 border border-emerald-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-emerald-300">7</span>
                </div>
                <span className="text-xs text-white/60">月</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-red-700/30 border border-red-500/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-red-300">5</span>
                </div>
                <span className="text-xs text-white/60">時</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-amber-500/30 border border-amber-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-amber-300">31</span>
                </div>
                <span className="text-xs text-white/60">分</span>
              </div>
              <span className="text-2xl text-white/40 mx-4">➡️</span>
              <div className="bg-amber-400/20 border border-amber-400/50 rounded-lg p-4 text-center">
                <span className="text-2xl font-mono font-bold text-amber-300 tracking-wider">1-3-5-7-9-7-5-3-1</span>
                <p className="text-xs text-white/60 mt-1">正讀反讀完全對稱</p>
              </div>
            </div>
            <p className="text-center text-sm text-white/50 mt-4">圖一：1357 年 7 月 9 日 5 點 31 分奠基回文數值矩陣</p>
          </div>

          <p className="text-lg text-white/80">
            這組驚人的數字順序為：<strong className="text-amber-400">1357（年）- 9（日）- 7（月）- 5（時）- 31（分）</strong>，連起來讀就是 <strong className="text-amber-400">1-3-5-7-9-7-5-3-1</strong>。中世紀的占星術認為，這種奇數金字塔結構的數字矩陣能為建築賦予神聖的對稱力量。
          </p>
        </section>

        {/* Section 2: Three Core Landmarks */}
        <section id="landmarks" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <span className="text-blue-300">三大核心防禦體系 ── 大橋美學地標立體分布</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">
            查理大橋兩端矗立著 30 尊栩栩如生的巴洛克聖人雕像，並由兩端宏偉的哥德式防禦塔樓拱衛。以下是大橋三大必看視覺地標：
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Landmark 1 */}
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 hover:bg-blue-900/50 transition-colors">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">老城橋塔</h3>
              <p className="text-amber-400 text-sm mb-3">Old Town Tower 【全歐最美哥德式塔樓】</p>
              <p className="text-white/70 text-sm">
                位於大橋東側，曾是防禦要塞。<strong className="text-amber-400">強烈推薦付費登頂</strong>，是拍攝大橋蜿蜒長卷的黃金制高點。
              </p>
            </div>

            {/* Landmark 2 */}
            <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 hover:bg-orange-900/50 transition-colors">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-orange-300 mb-2">聖尼波木克雕像</h3>
              <p className="text-amber-400 text-sm mb-3">St. John Nepomuk 【全大橋最靈驗明星聖像】</p>
              <p className="text-white/70 text-sm">
                第8根橋柱。聖人頭頂五顆星，<strong className="text-amber-400">摸一摸底座被擦得發亮的銅雕，傳說能帶你重返布拉格</strong>。
              </p>
            </div>

            {/* Landmark 3 */}
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 hover:bg-emerald-900/50 transition-colors">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-emerald-300 mb-2">小城橋塔</h3>
              <p className="text-amber-400 text-sm mb-3">Lesser Town 【雙子星要塞大門】</p>
              <p className="text-white/70 text-sm">
                位於大橋西側，連接著小城區。由<strong className="text-amber-400">一高一低兩座塔樓</strong>組成，充滿中世紀衛城要塞的威嚴。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 24-Hour Crowd Chart */}
        <section id="crowd" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <span className="text-blue-300">24小時遊客擁擠度與最佳「黃金攝影光線」大數據</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">
            查理大橋白天永遠是人潮洶湧的激戰區。為了幫大家拍出空靈、高質感的東歐大片，以下是<strong className="text-amber-400">「查理大橋24小時擁擠度與光線觀賞指數」</strong>大數據分析：
          </p>

          {/* Crowd Chart Visual */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-white/50">
                <span>100% (擠擁)</span>
                <span>50% (愜意)</span>
                <span>0%</span>
              </div>

              {/* Chart area */}
              <div className="absolute left-12 right-0 top-0 bottom-8">
                {/* Grid lines */}
                <div className="absolute left-0 right-0 top-1/4 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-3/4 border-t border-dashed border-white/10" />

                {/* Trend line - approximate */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 0,80 Q 20,50 35,20 T 55,15 Q 70,30 85,70 T 100,80"
                    fill="none"
                    stroke="#c0392b"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Sunrise highlight */}
                  <circle cx="8" cy="78" r="4" fill="#d4af37" />
                  <circle cx="8" cy="78" r="6" fill="none" stroke="#d4af37" strokeWidth="1" />
                  {/* Sunset highlight */}
                  <circle cx="70" cy="45" r="4" fill="#e07a5f" />
                  <circle cx="70" cy="45" r="6" fill="none" stroke="#e07a5f" strokeWidth="1" />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/50">
                  <span className="text-left">05:30<br/><span className="text-emerald-400">晨曦</span></span>
                  <span className="text-center">10:00<br/><span className="text-white/70">人潮</span></span>
                  <span className="text-right text-red-400 font-bold">14:00-17:00<br/>高峰</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-400" />
                <span className="text-sm text-white/70">🌅 晨霧丁達爾光</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-400" />
                <span className="text-sm text-white/70">🌇 絕美落日藍調</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: First Person Experience */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🌉</span>
            <span className="text-blue-300">第一身沉浸實感：在聖者雕像下聆聽伏爾塔瓦河的心跳</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">
            想要真正感受查理大橋的靈魂，你必須<strong className="text-amber-400">在清晨 05:30 爬出溫暖的被窩</strong>。此時的布拉格剛從睡夢中醒來，整座大橋被一層淡淡的薄霧籠罩。古老而粗糙的花崗岩石磚路泛著清冷的光澤，腳步聲在空曠的橋拱間激起幽深的回音。當第一縷金色的丁達爾晨曦穿透老城橋塔的哥德式飛簷，整條伏爾塔瓦河泛起鱗鱗波光，成群的白天鵝在如鏡的水面上優雅游弋，美得讓人窒息。
          </p>

          <div className="bg-orange-900/20 border-l-4 border-orange-400 rounded-r-xl p-6 mb-6">
            <p className="text-lg text-white/90">
              漫步到第 8 根橋柱前的<strong className="text-amber-400">聖尼波木克（St. John Nepomuk）雕像</strong>下。這位聖人因拒絕向國王透露王后懺悔的秘密，在此處被殘忍地投入滾滾河水中殉道。撫摸著雕像底座那塊被全球千百萬旅客雙手擦得金黃透亮的青銅浮雕，閉上雙眼，冰涼的銅質觸感傳來千年的歷史心跳。
            </p>
            <p className="text-lg text-white/90 mt-4">
              <strong className="text-amber-400">傳說只要誠心撫摸它，你此生便注定會再次重返布拉格</strong>，這份美麗的誓言是這座古橋贈予所有流浪者最浪漫的護身符。
            </p>
          </div>

          {/* Nightlife Highlight Box */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-400/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4">🌙 查理大橋繽紛夜生活：手風琴聲下的落日藍調與高空瞭望</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-2xl">🎷</span>
                <div>
                  <strong className="text-amber-400">老街頭藝人的黃昏交響樂：</strong>
                  傍晚 20:00 左右，當太陽緩緩沉入西面城堡區的山崗，大橋上會聚集全歐洲最高質量的街頭音樂家。爵士樂隊的薩克斯風、老藝人的手風琴聲在微風中交織，配合遠處城堡亮起的暖黃色夜燈，整座大橋變成了最浪漫的露天劇場。
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🗼</span>
                <div>
                  <strong className="text-amber-400">老城橋塔的「138級樓梯高空驚艷」：</strong>
                  黃昏時分，花費幾十克朗購買門票，挑戰攀登老城橋塔內部 <strong className="text-amber-400">138 級狹窄的螺旋石頭樓梯</strong>。當你推開頂層觀景台的木門，整條查理大橋如一條金色的絲帶在腳下 360 度鋪開，對岸城堡區的紅屋頂在深邃的藍調時刻（Blue Hour）波光粼粼，層次感強烈得讓人熱淚盈眶。
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Tips Panel */}
        <section id="tips" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-600/50">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              精明自遊 ‧ 查理大橋完美防坑隨身手札
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl">📸</span>
                <div>
                  <strong className="text-amber-400">攝影師私藏的「橋下白天鵝」完美機位：</strong>
                  <span className="text-white/80">想要拍到大橋與白天鵝同框的標誌性網美大片，不要站在大橋上面！<strong className="text-amber-400">最佳拍照點</strong>在小城區一側的河岸草坪 <em>Náplavka</em>。這裡聚集了上百隻溫馴的白天鵝，你可以帶一點麵包碎，以低角度仰拍，將白天鵝、伏爾塔瓦河與背後的查理大橋完美框在同一個畫面中。</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <strong className="text-amber-400">警惕橋上「套路小偷」與黑心畫家：</strong>
                  <span className="text-white/80">查理大橋白天人流密度極高，也是布拉格扒手（Pickpockets）的超級激戰區。當你抬頭看雕像或者聽街頭音樂忘乎所以時，<strong className="text-amber-400">背包請務必背在前面</strong>。另外，橋上的街頭畫家畫人像前，<strong className="text-amber-400">請務必用捷克克朗（CZK）確認好最終價格</strong>，提防歐元匯率陷阱。</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🚊</span>
                <div>
                  <strong className="text-amber-400">最佳交通接駁方式：</strong>
                  <span className="text-white/80">搭乘布拉格有軌電車 17、18 號線直達 <strong className="text-amber-400">Karlovy lázně 站</strong> 或者地鐵 A 線到 <strong className="text-amber-400">Staroměstská 站</strong> 下車，步行 3 分鐘即可直接步入老城橋塔大門，完全無痛開啟大橋散策。</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">👟</span>
                <div>
                  <strong className="text-amber-400">鞋履嚴格警告：</strong>
                  <span className="text-white/80">大橋橋面由中世紀不平整的粗糙玄武岩石磚鋪成。為了保護雙腳與提防扭傷，<strong className="text-amber-400">請務必穿著厚底、避震卓越的運動健步鞋</strong>，切勿穿薄底平底鞋或高跟鞋前來喔！</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">📍 基本資訊</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><strong className="text-amber-400">橋長：</strong>516 米</li>
              <li><strong className="text-amber-400">建造年份：</strong>1357 年</li>
              <li><strong className="text-amber-400">橋拱數量：</strong>16 個</li>
              <li><strong className="text-amber-400">雕像數量：</strong>30 尊巴洛克聖人雕像</li>
            </ul>
          </div>
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-3">🎯 打卡攻略</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><strong className="text-amber-400">最佳拍攝時間：</strong>清晨 05:30 或黃昏 20:30</li>
              <li><strong className="text-amber-400">必摸雕像：</strong>聖尼波木克（第8根橋柱）</li>
              <li><strong className="text-amber-400">推薦登塔：</strong>老城橋塔 138 級樓梯</li>
              <li><strong className="text-amber-400">白天鵝機位：</strong>小城區 Náplavka 河岸</li>
            </ul>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center py-8 border-t border-b border-amber-400/30">
          <p className="text-lg italic text-white/70">
            ─ 歲月流逝於河水，歷史鐫刻於砂岩。
            <br />
            願每位漫步古橋的旅人，都能在伏爾塔瓦河的夕陽下找到屬於自己的波希米亞夢。 ─
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <Comments slug="charles-bridge" />
        </div>
      </main>
    </div>
  );
}