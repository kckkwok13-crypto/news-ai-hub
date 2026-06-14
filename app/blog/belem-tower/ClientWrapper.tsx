'use client';

import Link from 'next/link';

export default function ClientWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-red-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>返回 NewsFlow</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            🏰 世界文化遺產 ── 麥哲倫的遠征港
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-red-300 bg-clip-text text-transparent">
            大航海時代的蔚藍起點
          </h1>
          <h2 className="text-xl text-white/80 font-semibold mb-4">葡萄牙里斯本貝倫塔（Torre de Belém）500年星海密碼與深度慢活攻略</h2>
          <p className="text-white/60">July 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Torre_de_Bel%C3%A9m%2C_Lisbon_39.jpg/1280px-Torre_de_Bel%C3%A9m%2C_Lisbon_39.jpg"
            alt="里斯本貝倫塔"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-white/60 text-sm mb-12">
          ▲ 扼守特茹河入海口的貝倫塔，曼努埃爾式石雕在夕陽下熠熠生輝，見證大航海時代的輝煌
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-900/50 to-red-900/40 border border-yellow-500/30 rounded-2xl p-6 my-8">
            <p className="text-white text-lg italic leading-relaxed border-l-4 border-yellow-500 pl-6">
              「佩索阿寫道，我的靈魂是一口被海風吹開的深井；而當你站在里斯本貝倫塔的木質棧橋上，看著潮水拍打著雕刻了香蕉、渾天儀與十字架的白堊岩碉堡，遠處大西洋的天際線與落日熔金交織，你才會明白：這不是一座普通的防禦塔，而是達伽馬、麥哲倫出海遠征、將全世界連成一體的終極起航點。」
            </p>
          </div>

          <p id="intro">
            如果說辛特拉的佩納宮展現了葡萄牙王室最極致浪漫的童話幻想，那麼扼守在首都里斯本特茹河（Tejo）入海口絕對核心的<strong>貝倫塔（Belém Tower / Torre de Belém）</strong>，無疑就是這個昔日海上霸主最偉大、最驕傲的歷史脊樑。這座落成於 1519 年（正值大航海帝國極盛期）的江海碉堡，融匯了獨一無二的<strong>「曼努埃爾式（Manueline）航海美學」</strong>。它不僅是一座堅固的要塞，更是一件被大西洋海風雕琢了 500 年的無價藝術品。今天這篇 Blog，我將帶上最鮮艷斑斕的南歐調色盤與全方位的結構數據圖表，帶大家深度解構這座「海中瞭望台」背後的歷史大數據密碼！
          </p>

          <h2 id="structure" className="text-white">📊 貝倫塔四大核心區域立體分布</h2>

          <p>
            貝倫塔結構極具特色，由一個延伸至河中央的防禦性「六角形炮台底座」以及一棟 4 層高、帶有精美露台的「方形防禦塔樓」拼接而成。由於內部空間極度狹窄且旋轉樓梯實施嚴格的單向人流限流，為了防止大家在密密麻麻的地牢與露台間行錯路，我們首先透過彩色幾何矩陣，來視覺化這座世界文化遺產的 4 大核心展區：
          </p>

          <div className="bg-slate-800/50 border border-blue-500/30 rounded-2xl p-6 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-5">
                <h3 className="text-blue-400 font-bold text-lg mb-3">🔵 六角炮台底座</h3>
                <p className="text-white/80 text-sm mb-2">【17門重型青銅大炮】</p>
                <p className="text-white/60 text-sm">延伸至江面的半封閉防禦工事，每個圓形炮眼都曾直面進犯艦隊。</p>
              </div>
              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-5">
                <h3 className="text-red-400 font-bold text-lg mb-3">🔴 國王大廳露台</h3>
                <p className="text-white/80 text-sm mb-2">【威尼斯雙層拱廊】</p>
                <p className="text-white/60 text-sm">塔樓2樓。擁有極精美的南歐鏤空拱廊石窗，是往外拍攝海景的黃金位。</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-5">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">🟡 頂層瞭望天台</h3>
                <p className="text-white/80 text-sm mb-2">【35米凌空大白角】</p>
                <p className="text-white/60 text-sm">順著人流管制螺旋梯登頂，角落設有摩爾式圓頂哨所，將航海紀念碑盡收。</p>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-5">
                <h3 className="text-green-400 font-bold text-lg mb-3">🟢 潮汐水下地牢</h3>
                <p className="text-white/80 text-sm mb-2">【黑色歷史的控訴】</p>
                <p className="text-white/60 text-sm">位於底座下方。曾作為政治犯監獄，漲潮時海水會直接淹至犯人胸口。</p>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-4">圖一：葡萄牙里斯本貝倫塔（Belém Tower）內部與外部核心展區功能分布矩陣圖</p>
          </div>

          <h2 id="architecture" className="text-white">📐 石頭上的航海日誌 ── 曼努埃爾式5大裝飾符號</h2>

          <p>
            貝倫塔之所以能名列世界文化遺產，在於它是全歐洲最純粹的<strong>「曼努埃爾式建築」</strong>代表。這種大航海時代特有的美學風格，將海洋、船隻與遠征發現的非洲/亞洲珍奇元素，直接用純手工雕刻在堅硬的石灰岩上，堪稱「刻在石頭上的帝國史詩」。
          </p>

          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-600/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold mb-4">曼努埃爾式手工石雕航海符號分佈數據</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">粗巨石雕船繩</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{width: '40%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">40%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">天文渾天儀</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-yellow-500 h-full rounded-full" style={{width: '25%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">25%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">基督騎士團十字架</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{width: '20%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">20%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">非洲「犀牛」石雕</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full" style={{width: '10%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">10%</div>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-4">圖二：貝倫塔外牆曼努埃爾式航海與地理發現裝飾符號大數據比例</p>
          </div>

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Torre_de_Belem_-Belem_Tower-_%28Detail%29_%2847286446831%29.jpg/960px-Torre_de_Belem_-Belem_Tower-_%28Detail%29_%2847286446831%29.jpg"
              alt="貝倫塔曼努埃爾式石雕細節"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-white/60 text-sm mt-4 mb-8">
              ▲ 貝倫塔細節：精雕細琢的曼努埃爾式航海裝飾，展現大航海時代的輝煌工藝
            </p>
          </div>

          <h2 id="experience" className="text-white">🏰 第一身沉浸實感：在木棧道與海浪拍岸間見證不朽</h2>

          <p>
            乘搭著名的里斯本復古電車 15E 號線在 <strong>Pedrouços 站</strong> 下車，順著開闊、棕櫚樹搖曳的貝倫海濱大道踱步前進。當你拐過最後一片綠地，那一整座孤懸在特茹河碧綠波濤中央、被大西洋強烈海風吹拂了五百載的純白色石灰岩古堡，便排山倒海般在眼前鋪開。這是一座浮在海面上的中世紀王冠。踏上延伸至海中央的復古木質步行棧道，腳下是隆隆拍岸的白浪，耳邊是一群群海鷗的啼鳴，空氣中全是帶着淡淡鹹味的大西洋潮水香氣，極其治癒。
          </p>

          <p>
            走進內部狹窄的方形塔樓，順著每次僅容一人通過的極陡螺旋石頭樓梯登上 3 樓的<strong>「國王大廳露台」</strong>。這裡擁有典型的威尼斯式雙層鏤空拱廊石窗。當傍晚 19:30 左右，大西洋溫柔的夕陽緩緩沉入西面地平線，落日熔金，整片天空幻化成瘋狂的絢麗金橙色。你可以透過精美鏤空的石雕窗框往外望去，遠處宏偉的4月25日大橋（Ponte 25 de Abril）與巨型的航海紀念碑在金色的餘暉中拉出長長的剪影，晚霞斑斕。
          </p>

          <div className="bg-gradient-to-br from-yellow-900/40 to-red-900/40 border border-yellow-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">🌸 舌尖與手信老饕發現：貝倫區2大殿堂級百年老店</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-red-400 font-semibold mb-2">貝倫百年葡撻老店 (Pastéis de Belém)</h4>
                <p className="text-white/80">始於 1837 年，<strong>全球正宗葡撻的絕對發源地</strong>！相傳當年是由隔壁熱羅尼莫斯修道院的修女手工研發的秘方。這裡的葡撻酥皮呈螺旋狀，咬下去發出極致清脆的酥響，內餡蛋香濃郁、燙口綿密，面上撒上一把香草粉與肉桂粉，配上一杯老派黑咖啡，甜美到了靈魂深處！</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold mb-2">葡萄牙手工沙丁魚罐頭 (Conserveira de Lisboa)</h4>
                <p className="text-white/80">如果想帶最具南歐海洋特色的物超所值手信，一定要去百年老手信鋪買幾盒用復古彩繪紙手工包裹的「茄汁辣味沙丁魚罐頭」。魚肉極其肥美，帶回家配手工麵包，是一絕的美味。</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-slate-900/60 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">💡 精明自遊 ‧ 貝倫塔無痛暢玩生存隨身手札</h3>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">不要盲目排隊登頂內部</h4>
                <p className="text-white/70 text-sm">貝倫塔目前實施嚴格的內部限流（每次僅允許約150人進入）。高峰期排隊登頂往往需要耗費1小時以上，且內部房間家具早已洗劫一空。如果體力有限或排隊太長，完全無須花錢買票進入內部！因為貝倫塔最完美的100%精華美學全在<strong>外部的曼努埃爾石雕與海濱棧道上</strong>。</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">📸 攝影師私藏的「浮城夕陽」黃金日落機位</h4>
                <p className="text-white/70 text-sm">想要拍到貝倫塔孤懸海面、自帶電影感的經典大片，不要站在木棧道上拍（人流太多且角度太近）。<strong>最佳全景拍照點</strong>是位於大橋東側約50米處的海灘石堤邊。黃昏時分，此時大西洋潮水上漲，大半個炮台底座沒入特茹河中，你可以放低相機鏡頭貼近水面，以中長焦段仰拍。</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">🚇 交通接駁無痛方案</h4>
                <p className="text-white/70 text-sm">在里斯本老城廣場（商業廣場 / Praça do Comércio）直接乘搭 <strong>15E 號復古有軌電車</strong>，或者在 Cais do Sodré 火車站乘搭火車至 <strong>Belém 站</strong> 下車，順著平坦的海濱棧道步行10分鐘即可直達。</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">👟 鞋履與海風禦寒莊嚴警告</h4>
                <p className="text-white/70 text-sm">貝倫區的海濱大道全是由葡萄牙傳統、凹凸不平且被磨得極其光滑的<strong>黑白馬賽克碎石路（Calçada Portuguesa）</strong>鋪成。請穿著高抓地力、鞋底防滑性能卓越的厚底運動健步鞋，並隨身帶備一件薄風衣外套，提防海風吹到頭痛著涼喔！</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 py-8 border-t border-white/20">
            <p className="text-white/60 italic">
              ─ 船繩留存野心，海風吹過世紀。願每位漫步大西洋畔的旅人，都能在貝倫塔的熔金晚霞中找到內心久違的開闊。 ─
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
