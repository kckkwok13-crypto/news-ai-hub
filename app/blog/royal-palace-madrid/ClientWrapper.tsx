"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "highlights", title: "皇宮亮點", emoji: "👑" },
  { id: "photo-spots", title: "拍照攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function RoyalPalaceMadridPage() {
  const [activeSection, setActiveSection] = useState("highlights");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-stone-100">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-amber-50/95 to-yellow-100/95 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-200/50"
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors bg-amber-100 px-4 py-2 rounded-full hover:bg-amber-200"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            🏛️ 歐洲王室 · 帝國遺產
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            走進西歐最大的奢華宮殿
          </h1>
          <h2 className="text-xl text-amber-700 font-semibold mb-4">馬德里皇宮（Royal Palace of Madrid）深度打卡與無痛避坑攻略</h2>
          <p className="text-stone-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80"
            alt="馬德里皇宮"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-stone-500 text-sm mb-12">
          ▲ 佔地高達 135,000 平方米、名列西歐最大規模皇室宮殿的建築奇蹟 —— 馬德里皇宮
        </p>

        <article className="prose prose-stone prose-lg max-w-none">
          <p id="intro">
            很多人提到歐洲最奢華的宮殿，第一時間總會想到法國的凡爾賽宮。但你知道嗎？論建築面積，西班牙波旁王朝的<strong>馬德里皇宮（Royal Palace of Madrid / Palacio Real）</strong>足足是凡爾賽宮的兩倍大！它是目前<strong>西歐面積最大的活體皇家宮殿</strong>。雖然現任西班牙國王費利佩六世一家平時居住在郊區的薩蘇埃拉宮，但這裡依然是舉辦國家級國宴、外國元首進見與重大王室慶典的神聖法定居所。它那鋪天蓋地的金箔壁畫、巴洛克群雕與無價的室內珍藏，奢華得讓人歎為觀止。
          </p>
          <p>
            今天這篇 Blog 就帶大家深度走入這座充滿西班牙帝國榮耀的東方宮殿，解鎖那段從火災中重生的傳奇故事，並送上防排隊與周邊必去的夕陽拍照打卡攻略！
          </p>

          <h2 id="highlights">👑 帝國的黄金殿堂：皇宮內 3 大不可錯過的視覺震撼</h2>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-slate-800 font-bold mb-4 flex items-center gap-2 text-xl">
              🔥 從灰燼中重生的奇蹟 —— 菲利普五世的文藝復興夢
            </h4>
            <p className="text-stone-700">
              這座皇宮的所在地，最初在 9 世紀是摩爾人建造的古老防禦堡壘（Alcázar）。但在 1734 年的聖誕夜，一場連續燒了四天四夜的離奇大火將原本的木造舊皇宮徹底燒成廢墟。當時極具雄心的國王菲利普五世隨即下令：「我們要用純石頭、磚塊建造一座<strong>絕對燒不掉的全新奢華皇宮</strong>！」於是，這座完全不使用任何木材支撐、全部由花崗岩和大理石堆砌而成的巴洛克式現代奇蹟，才得以在老城誕生。
            </p>
          </div>

          <h3>全歐最震撼的「帝王主樓梯」（Grand Staircase）</h3>
          <p>
            走進皇宮內部，<strong>這裏也是整個建築唯一允許遊客公開拍照的地方</strong>！這座由大師薩巴蒂尼設計的巨型主樓梯，由整塊巨大的西班牙天然大理石雕刻而成。台階寬闊而低平，據說是為了讓當年身穿沉重盔甲和華麗宮廷禮服的貴族們能走得無比優雅。當你順著樓梯往上走，抬頭就會看到畫家謝亞維托創作的巨幅天頂壁畫《宗教受到西班牙保護》，在金碧輝煌的浮雕襯托下，每一步都彷彿踏在歷史的史詩裡。
          </p>

          <h3>璀璨至極的王座廳（Throne Room）與 2500 盞時鐘</h3>
          <p>
            穿過樓梯進入禁止拍照的內部展廳（記得用眼睛狠狠記住！）。「王座廳」是皇宮的核心，這裡保留了卡洛斯三世時期的巴洛克原貌。牆壁鋪滿了奢華的紅色意大利天鵝絨，天頂是威尼斯大師提香的巨幅濕壁畫，而兩隻純金雕刻的守護獅子拱衛著國王與王后的寶座。另外，皇宮內還散落著全歐洲最頂級的<strong>2500 盞古董鐘錶收藏</strong>，行在其中會聽到無數古董鐘錶同時發出滴答滴答的歷史心跳聲。
          </p>

          <h3>驚艷感官的「瓷器廳」（Porcelain Room）</h3>
          <p>
            這是整個皇宮裡最讓人驚嘆、最瘋狂的房間！卡洛斯三世因為極度迷戀瓷器，下令將這間私人客廳的<strong>四面牆壁、甚至連天花板，全部貼滿了色彩斑斕的皇家帕蒂納瓷器浮雕</strong>！瓷器上雕刻著精美的中國風植物、猴子、水果與藤蔓，在巨大的水晶吊燈折射下，整間房波光粼粼，魔幻奇特到了極點。
          </p>

          <div className="my-8">
            <img
              src="/images/royal-palace-madrid-second.jpg"
              alt="馬德里城市景觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4 mb-8">
              ▲ 從德波神廟山丘遠眺馬德里皇宮，是全城公認最完美的落日全景機位
            </p>
          </div>

          <h2 id="photo-spots">📸 攝影師私藏：如何拍出皇宮最完美的「落日黃金騷」</h2>
          <p>
            由於皇宮內部展廳嚴格禁止任何攝影，想要拍出驚艷朋友圈的宮殿大片，秘碼在於<strong>「走出皇宮拍外觀與落日」</strong>。這裡推薦兩個頂級拍照位：
          </p>
          <ul className="space-y-4 text-stone-700">
            <li className="flex gap-3">
              <span className="text-amber-500 text-xl">📍</span>
              <span><strong>古典對稱相框：阿穆德納聖母主教座堂（Catedral de la Almudena）拱門</strong><br/>皇宮的正對面就是宏偉的主教座堂。站在教堂一側的古典白色迴廊拱門下往皇宮方向拍去。黑暗的拱門輪廓剛好變成一個天然的幾何相框，將明亮巨大的馬德里皇宮完美框在正中央，層次感與儀式感瞬間拉滿。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 text-xl">📍</span>
              <span><strong>絕美全景日落：德波神廟山丘（Templo de Debod Park）</strong><br/>黃昏時分，步行至鄰近的德波神廟公園山頂。這裡地勢極高，往皇宮方向望去，剛好可以毫無遮擋地俯瞰整座馬德里皇宮和皇家歌劇院巍然矗立在曼薩納雷斯河谷之巔。當夕陽將天空染成粉橘色，皇宮的暖黃色夜燈紛紛點亮，畫卷美得動人心魄。</span>
            </li>
          </ul>

          <div id="tips" className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 馬德里皇宮 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>魔鬼排隊守則：絕對要提前 2-3 星期官網預訂「定時門票」！</strong><br/>馬德里皇宮每天都有無數旅行團大軍湧入，如果現場排隊買票，在烈日下暴曬 1.5 至 2 小時是常態。強烈建議提前在西班牙皇家遺產官網（Patrimonio Nacional）買好定時電子門票（成人票約 12-14 歐元）。進場時有專用的網購通道，基本上 5 分鐘內就能無痛進場！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🆓</span>
                <span><strong>免費參觀祕笈（歐盟/部分身份限定）：</strong>每週一至週四的下午（17:00-19:00，冬季為16:00-18:00），皇宮會對歐盟公民、拉美公民以及部分符合條件的國際遊客開放<strong>免費進場</strong>。但這時候的排隊人潮極其恐怖，如果你只有短短幾天假期，不建議為了省門票而浪費幾個小時在烈日下排隊。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">📷</span>
                <span><strong>進場安檢與拍照禁忌：</strong>進場需要經過嚴格的機場級安全檢查，大背包（大於30x30cm）必須寄存。再次提醒：<strong>一離開主樓梯進入大殿展廳，一律嚴格禁止拿出手機或相機拍照</strong>，保安人員會非常嚴厲地監督，請大家共同守護歷史文物喔！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🚇</span>
                <span><strong>交通方式：</strong>搭乘馬德里地鐵 2 號線（L2）或 5 號線（L5）直接在 <strong>Ópera（歌劇院站）</strong> 出站，出站後順著皇家歌劇院步行穿過美麗的東方廣場（Plaza de Oriente），步行約 3 分鐘即可直達皇宮兵器廣場。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">📍 地址</span>
              <p className="text-stone-700 text-sm mt-1">C. de Bailén, s/n, Madrid</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🕐 開放時間</span>
              <p className="text-stone-700 text-sm mt-1">10:00-20:00（季節性調整）</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">💰 費用</span>
              <p className="text-stone-700 text-sm mt-1">成人約 €12-14</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🚇 交通</span>
              <p className="text-stone-700 text-sm mt-1">地鐵 L2/L5 Ópera 站</p>
            </div>
          </div>


          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="royal-palace-madrid" />
    </div>
  );
}