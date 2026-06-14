"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🏰" },
  { id: "history", title: "千年歷史", emoji: "🔑" },
  { id: "architecture", title: "建築亮點", emoji: "🧱" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["薩爾茨堡", "奧地利", "城堡", "打卡"];

export default function HohensalzburgFortressPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-zinc-900/50 to-slate-900/30 text-white">
      <ReadingProgress />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-stone-800/95 to-zinc-800/95 backdrop-blur-xl border border-stone-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-stone-500/10">
          <h3 className="text-sm font-bold text-stone-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-stone-500 to-zinc-500 text-white shadow-lg shadow-stone-500/30"
                      : "text-stone-300/70 hover:text-white hover:bg-stone-700/50"
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
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors bg-stone-800/30 px-4 py-2 rounded-full hover:bg-stone-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-500 to-zinc-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-stone-500/30">
            🇦🇹 奧地利 · 薩爾茨堡
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-stone-200 to-zinc-300 bg-clip-text text-transparent">
            俯瞰莫扎特故鄉的天際線
          </h1>
          <h2 className="text-xl text-stone-400 font-semibold mb-4">薩爾茨堡城堡（Hohensalzburg Fortress）深度遊覽全攻略</h2>
          <p className="text-stone-600">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-stone-500/20">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80"
            alt="薩爾茨堡城堡全景"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-stone-600 text-sm mb-12">
          ▲ 俯瞰薩爾茨堡舊城區的宏偉城堡，聳立於城北山丘之上超過900年
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            佇立於薩爾茨堡城北山丘之上，俯瞰著莫扎特故鄉的天際線，<strong>薩爾茨堡城堡（Hohensalzburg Fortress / Festung Hohensalzburg）</strong>猶如一隻沉睡的巨龍，守望著這座被阿爾卑斯山脈環繞的千年古城。這座始建於<strong>公元1077年</strong>的中世紀堡壘，是中歐最大、保存最完好的城堡之一，被譽為「鶴巢」。
          </p>
          <p>
            城堡依山而建，佔據了整個山頭，遠眺如同一頂金色的皇冠，與山下巴洛克風格的舊城區形成鮮明對比。無論是從城堡俯瞰薩爾茨堡全景，還是漫步於城堡厚重的城牆之間，都能感受到這座「永不陷落之城」的歷史氣息。
          </p>

          <div id="history" className="bg-gradient-to-br from-stone-900/50 to-zinc-900/40 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⏰ 跨越千年的守望：薩爾茨堡城堡的 4 大歷史篇章
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. 建城起源：主教權力的象徵（1077-1500）</h4>
            <p className="text-stone-100/80">
              薩爾茨堡城堡由當時的總主教格布哈德·馮·霍赫斯塔特下令興建，目的是抵禦外部威脅並展示教會的世俗權力。在接下來的400多年間，城堡不斷擴建，逐漸成為薩爾茨堡總主教最重要的根據地與權力象徵。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. 黃金時代：金牛的建造</h4>
            <p className="text-stone-100/80">
              15世紀末至16世紀初，城堡迎來了最繁榮的時期。1500年，總主教萊昂哈德·馮·基希斯豪森對城堡進行了大規模改造，建造了著名的「金牛」（Golden Roof），這也成為城堡最具標誌性的象徵。
            </p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-600/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                ✨ 建築奇蹟：900年未被攻破的防禦工事
              </h4>
              <p className="text-stone-100/80">
                薩爾茨堡城堡歷史上從未被任何軍隊攻破！這要歸功於其獨特的地理優勢——三面懸崖、一面深溝，以及厚達5米的城牆。即使在1622年至1803年的宗教戰爭期間，城堡依然固若金湯。
              </p>
            </div>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">3. 拿破崙時代：法軍短暫佔領</h4>
            <p className="text-stone-100/80">
              1800年，拿破崙的軍隊首次包圍了薩爾茨堡城堡。雖然城堡最終向法軍投降，但這是城堡歷史上唯一一次被外軍佔領的記錄。拿破崙撤退後，城堡逐漸失去了軍事要塞的功能，開始轉型為文化與旅遊目的地。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">4. 現代重生：世界文化遺產</h4>
            <p className="text-stone-100/80">
              20世紀初，城堡被改建為博物館，並於1996年與薩爾茨堡舊城區一同被聯合國教科文組織列為世界文化遺產。如今，城堡每年吸引超過30萬遊客前來參觀，是奧地利最受歡迎的歷史景點之一。
            </p>
          </div>

          <h2 id="architecture">🧱 必看亮點：城堡建築與內部設施</h2>
          <p>
            薩爾茨堡城堡佔地面積達30,000平方米，擁有花園、教堂、博物館、展覽廳等多種設施。以下是遊客最不能錯過的亮點：
          </p>

          <h3>金牛（Golden Roof / Goldenes Dächel）</h3>
          <p>
            建於1500年的金牛是城堡最具標誌性的建築元素。這座2.5米寬、1米深的鍍金陽台由總主教萊昂哈德·馮·基希斯豪森下令建造，用於慶祝其就任總主教10週年。金牛採用了當時最先進的鍍金工藝，至今依然閃耀著金光。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80"
              alt="薩爾茨堡城市風光"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-600 text-sm mt-4 mb-8">
              ▲ 從城堡俯瞰薩爾茨堡舊城區，莫扎特廣場與銀色穹頂清晰可見
            </p>
          </div>

          <h3>城堡博物館</h3>
          <p>城堡內設有多個主題博物館，包括：</p>
          <ul>
            <li><strong>皇家公寓（Royal Apartments）</strong>：展示中世紀貴族的生活場景，包括華麗的卧室、宴會廳與禮拜堂</li>
            <li><strong>兵器博物館（Armoury）</strong>：收藏了超過200件中世紀武器與盔甲</li>
            <li><strong>木偶博物館（Puppet Museum）</strong>：展出從16世紀到現代的各式木偶</li>
            <li><strong>恐龍與礦物展</strong>：展示當地發現的恐龍化石與珍貴礦物</li>
          </ul>

          <h3>城堡教堂（Castle Church / Burgkapelle）</h3>
          <p>
            建於16世紀的城堡教堂是城堡的精神中心。教堂採用了哥德式與文藝復興風格混合的建築設計，內部裝飾華麗，值得細細品味。
          </p>

          <h3>城堡纜車（Funicular Railway）</h3>
          <p>
            這條建於1892年的山地纜車從山腳直達城堡大門，全長約200米，垂直落差約75米。纜車每5分鐘一班，單程約需1分鐘。
          </p>

          <h2 id="photo-spots">📸 攝影師私藏：薩爾茨堡城堡 4 大終極打卡機位</h2>

          <h3>① 城堡花園觀景台——經典城堡全景</h3>
          <p>
            進入城堡後，沿著主通道走到盡頭，就是城堡花園。這裡設有多個觀景台，可以俯瞰整個薩爾茨堡舊城區與远处的阿尔卑斯山脈。建議在清晨或傍晚拍攝。
          </p>

          <h3>② 城牆東北角——城堡與雪山同框</h3>
          <p>
            沿著城堡外牆走到東北角，這裡可以將城堡建築與背景中的阿尔卑斯山脈一同收入鏡頭。使用廣角鏡頭拍攝，可以獲得極具衝擊力的畫面。
          </p>

          <h3>③ 城堡纜車站平台——上下山的電影感</h3>
          <p>
            乘坐纜車上山時，在纜車即將到達城堡站時回望，可以拍到纜車纜繩與薩爾茨堡城市天際線的完美結合。
          </p>

          <h3>④ 舊城區仰望——仰視城堡雄姿</h3>
          <p>
            走下山後，在舊城區的馬卡特廣場或糧食大街抬頭仰望城堡。使用長焦鏡頭壓縮透視，可以拍出城堡巍峨聳立的震撼畫面。
          </p>

          <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/40 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 薩爾茨堡城堡 旅遊實用小貼士
            </h3>
            <ul className="space-y-3 text-stone-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>門票資訊：</strong>城堡有多種票種可選，包括纜車來回 + 城堡參觀、僅城堡參觀。建議提前在官網預訂。成人標準票約 €15-20 起。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">⏰</span>
                <span><strong>開放時間：</strong>城堡全年開放，夏季（4月-10月）為 09:00-19:00，冬季（11月-3月）為 09:30-17:00。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌅</span>
                <span><strong>最佳拍攝時間：</strong>建議在清晨或黃昏前來拍攝。清晨遊客稀少，黃昏則可以拍到城堡亮燈的夢幻夜景。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>交通方式：</strong>從薩爾茨堡火車總站乘搭1號、2號或3號有軌電車至 Mozartsteg 站，然後步行至城堡纜車站。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🥾</span>
                <span><strong>步行登山：</strong>如果不乘纜車，也可以沿著城堡步道徒步上山，全程約需15-20分鐘。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">📍 地址</span>
              <p className="text-stone-100/80 text-sm mt-1">Mönchsberg 34, 5020 Salzburg, Austria</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">🕐 開放時間</span>
              <p className="text-stone-100/80 text-sm mt-1">夏季 09:00-19:00<br/>冬季 09:30-17:00</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">💰 費用</span>
              <p className="text-stone-100/80 text-sm mt-1">纜車+城堡 約 €15-20 起<br/>僅城堡 約 €10-15</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">⭐ 評分</span>
              <p className="text-stone-100/80 text-sm mt-1">4.7/5.0（42,567 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">🚇 交通</span>
              <p className="text-stone-100/80 text-sm mt-1">有軌電車至 Mozartsteg 站</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-stone-100/80 text-sm mt-1">3-4小時</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-stone-900/30 to-zinc-900/20 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="hohensalzburg-fortress" />
          </div>

          <div className="bg-stone-900/30 rounded-2xl p-6 my-10 border border-stone-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🏰 俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡深度遊覽全攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-stone-900/30 rounded-2xl p-6 border border-stone-700/30 flex items-center gap-4">
              <span className="text-stone-100/80">加入心願清單：</span>
              <FavoriteButton slug="hohensalzburg-fortress" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="hohensalzburg-fortress" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="hohensalzburg-fortress" />
    </div>
  );
}