"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "highlights", title: "核心看點", emoji: "⚔️" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "haunted", title: "靈異傳說", emoji: "👻" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function EdinburghCastlePage() {
  const [activeSection, setActiveSection] = useState("highlights");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-stone-800/95 to-red-900/95 backdrop-blur-xl border border-red-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-red-500/10">
          <h3 className="text-sm font-bold text-red-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-500/30"
                      : "text-red-200 hover:text-white hover:bg-red-800/80"
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
          className="inline-flex items-center gap-2 text-red-400 hover:text-white mb-8 transition-colors bg-red-800/50 px-4 py-2 rounded-full hover:bg-red-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-red-300 hover:text-red-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-red-500/30">
            🏰 中世紀史詩 · 蘇格蘭高地大門
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-amber-300 bg-clip-text text-transparent">
            矗立在火山岩上的蘇格蘭之魂
          </h1>
          <h2 className="text-xl text-red-400 font-semibold mb-4">愛丁堡城堡（Edinburgh Castle）深度打卡與避坑全攻略</h2>
          <p className="text-red-300">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
          <img
            src="https://cdn.britannica.com/24/94424-050-6302BA2E/Edinburgh-Castle-Scotland.jpg"
            alt="愛丁堡城堡"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-red-300 text-sm mb-12">
          ▲ 名列聯合國教科文組織世界文化遺產、守護蘇格蘭千年的軍事要塞 —— 愛丁堡城堡
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果說倫敦是一首優雅的古典交響樂，那麼蘇格蘭的首府愛丁堡（Edinburgh）就是一本充滿魔法與史詩黑歷史的厚重羊皮書；而這本書最驚心動魄的封面，莫過於高高矗立在死火山岩頂端的<strong>愛丁堡城堡（Edinburgh Castle）</strong>。這座由大自然火山岩屏障與人類鋼鐵意志交織而成的黑色古堡，高居城市最高點，幾百年間默默見證了蘇格蘭與英格蘭無數次的血腥戰爭。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度征服這座堅不可摧的王室堡壘，解鎖內部不可不知的兩大至高國寶，並奉上攝影師私藏的兩大絕美拍照機位！
          </p>

          <h2 id="highlights">⚔️ 鐵血王權的圖騰：愛丁堡城堡 3 大核心看點</h2>

          <div className="bg-gradient-to-r from-amber-900/40 to-red-900/30 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              👑 蘇格蘭不朽之寶：「命運之石」與最古老皇冠
            </h4>
            <p className="text-amber-100">
              走進城堡內部的王宮（Royal Palace），這裡保存著全蘇格蘭最神聖的國寶 —— <strong>「蘇格蘭之光 (The Honours of Scotland)」</strong>，即蘇格蘭的皇冠、權杖與寶劍。而旁邊擺放著的那塊看似普通、呈長方形的粉紅色砂岩，就是傳奇的<strong>「命運之石」（Stone of Scone / Stone of Destiny）</strong>！幾個世紀以來，歷代蘇格蘭國王都必須坐在這塊石頭上舉行加冕儀式。
            </p>
          </div>

          <h3>下午一點鐘大砲（One O'Clock Gun）</h3>
          <p>
            每天（除星期日、耶穌受難日和聖誕節外）的<strong>下午 13:00 準時</strong>，城堡北側的米爾斯山砲台（Mills Mount Battery）都會傳出一聲震耳欲聾的轟鳴！這就是著名的「一點鐘大砲」儀式。這個傳統始於 1861 年，最初是為了讓福斯灣（Firth of Forth）上的航海船隻可以精準對時。如今，這項儀式由帥氣的蘇格蘭皇家砲兵親自操作，成為遊客最喜歡駐足觀看的軍事互動表演。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1200&q=80"
              alt="愛丁堡城市景觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-red-300 text-sm mt-4 mb-8">
              ▲ 從城堡俯瞰愛丁堡老城错落有致的哥德式尖頂屋頂
            </p>
          </div>

          <h2 id="photo-spots">📸 私藏最佳拍攝機位：兩大頂級拍照位</h2>
          <p>
            城堡內部宏偉，但因為置身其中，很難拍出它鶴立雞群、矗立在火山岩絕壁上的史詩全景。這裡推薦兩個頂級拍照位：
          </p>
          <ul className="space-y-4 text-red-100">
            <li className="flex gap-3">
              <span className="text-amber-400 text-xl">📍</span>
              <span><strong>綠意仰拍全景 —— 王子街花園（Princes Street Gardens）：</strong><br/>走到城堡山腳下的花園草地上。將相機放低，利用草地上的復古噴泉、大樹和盛開的鮮花作為前景往上仰拍，整座城堡岩巨型的黑色峭壁與上方的古老城牆會完美同框，拍出來的照片空間壓縮感與魔幻感極強。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 text-xl">📍</span>
              <span><strong>文藝復興街道夾縫 —— 皇家哩大道小巷（The Royal Mile Closes）：</strong><br/>在城堡正對面的皇家哩大道，隱藏著無數古老窄長、被稱為 "Close" 的意式石磚小巷（如 <em>Lady Stair's Close</em>）。在小巷的石拱門出入口，利用黑暗的幾何牆壁作為天然相框，將陽光照耀或霧氣籠罩下的愛丁堡城堡精緻地框在正中央。</span>
            </li>
          </ul>

          <div id="haunted" className="bg-gradient-to-r from-stone-800/60 to-slate-800/50 border border-red-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 text-xl">
              👻 靈異冷知識：全英國「最鬧鬼」的城堡？
            </h3>
            <p className="text-red-100">
              擁有幾百年戰爭、囚禁與黑死病歷史的愛丁堡城堡，被公認為全英國「超自然現象」最活躍的地標之一！傳說在城堡幽深的地道裡，長年迴盪著幾百年前神祕失蹤的「無頭鼓手（Headless Drummer）」沉穩的鼓聲，以及孤獨風笛手的哀怨樂音。甚至在 2001 年，一隊科學家曾在城堡內進行了英國歷史上最大規模的超自然科學調查，不少隊員經歷了莫名的降溫與被觸碰感。
            </p>
          </div>

          <h2>🎟️ 自由行必讀：如何無痛避免「吃了閉門羹」</h2>
          <p>
            愛丁堡城堡是全蘇格蘭第一大熱門景點，其門票政策非常嚴格。<strong>現場是完全不設售票處、買不到當天即場門票的！</strong> 所有的門票必須提前在愛丁堡城堡官方網站上進行定時預約。尤其是在每年的 8 月「愛丁堡國際藝穗節（Edinburgh Fringe）」和「皇家愛丁堡軍樂節（Royal Edinburgh Military Tattoo）」期間，古羅馬/蘇格蘭風笛軍樂隊會在城堡前廣場進行全歐最震撼的演出，這時候的門票往往會提前 2 個月被搶購一空，請務必提早規劃！
          </p>

          <div id="tips" className="bg-gradient-to-br from-stone-800/80 to-red-900/70 border border-red-400/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 愛丁堡城堡 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400">🧥</span>
                <span><strong>嚴防蘇格蘭「妖風」與低溫：</strong>愛丁堡城堡位於海拔 130 多米的死火山岩之巔，四周無遮挡，直接迎向從北海吹過來的強烈陣風。**這裡的風力極其恐怖**，即使是炎熱的 7、8 月夏天，一旦陰天颳風，體感溫度也會瞬間跌破 10 度。請務必帶備一件<strong>防風防水、帶帽的厚外套（Windbreaker）</strong>。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🆓</span>
                <span><strong>免費參觀全城鳥瞰：</strong>走上城堡外圍的大砲觀景台（Battery Platforms），這裡不需要額外買票，就可以 360 度無死角地俯瞰整座愛丁堡老城错落有致的哥德式尖頂屋頂、新城的喬治亞式建築，以及遠處波光粼粼的福斯灣海景，是全城最頂級的觀景平台。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🛍️</span>
                <span><strong>順遊皇家哩大道：</strong>城堡的正門口就是大名鼎鼎的「皇家哩大道 (The Royal Mile)」的起點。離開城堡後，順著這條青石板路往下走，兩旁開滿了售賣正宗蘇格蘭羊絨圍巾（Cashmere）、威士忌酒辦以及吹著風笛穿著格子裙的街頭藝人，非常好逛。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🚇</span>
                <span><strong>交通方式：</strong>不論是搭乘火車抵達愛丁堡威瓦利火車站（Edinburgh Waverley），還是搭乘機場巴士抵達市中心，出站後抬頭看著城堡的方向，沿著石階路往山上步行約 10-15 分鐘即可直達城堡廣場。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-stone-700/60 to-red-800/60 rounded-xl p-4 border border-red-700/50">
              <span className="text-amber-400 font-bold">📍 地址</span>
              <p className="text-amber-100 text-sm mt-1">Castlehill, Edinburgh EH1 2NG</p>
            </div>
            <div className="bg-gradient-to-br from-stone-700/60 to-red-800/60 rounded-xl p-4 border border-red-700/50">
              <span className="text-amber-400 font-bold">🕐 開放時間</span>
              <p className="text-amber-100 text-sm mt-1">9:30-18:00（季節性調整）</p>
            </div>
            <div className="bg-gradient-to-br from-stone-700/60 to-red-800/60 rounded-xl p-4 border border-red-700/50">
              <span className="text-amber-400 font-bold">💰 費用</span>
              <p className="text-amber-100 text-sm mt-1">成人約 £18-20</p>
            </div>
            <div className="bg-gradient-to-br from-stone-700/60 to-red-800/60 rounded-xl p-4 border border-red-700/50">
              <span className="text-amber-400 font-bold">⚠️ 重要提醒</span>
              <p className="text-amber-100 text-sm mt-1">必須提前網上預訂</p>
            </div>
          </div>


          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="edinburgh-castle" />
    </div>
  );
}