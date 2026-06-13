"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "history", title: "歷史秘密", emoji: "🏰" },
  { id: "glass-floor", title: "高空玻璃走廊", emoji: "🪟" },
  { id: "engine-rooms", title: "蒸汽機房", emoji: "⚙️" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function TowerBridgePage() {
  const [activeSection, setActiveSection] = useState("history");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200 hover:text-white hover:bg-blue-800/80"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-blue-800/50 px-4 py-2 rounded-full hover:bg-blue-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            🌉 英倫美學 · 泰晤士河畔
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            泰晤士河上的藍色童話：倫敦塔橋
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">深度打卡與高空玻璃走廊攻略</h2>
          <p className="text-blue-300">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=1200&q=80"
            alt="倫敦塔橋夜景"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-300 text-sm mb-12">
          ▲ 落成於 1894 年、結合了維多利亞哥德式城堡與現代懸索橋工藝的工業傑作 —— 倫敦塔橋
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="history">
            如果說大笨鐘代表了倫敦沉穩復古的紳士面貌，那麼橫跨在泰晤士河（River Thames）下游的<strong>倫敦塔橋（Tower Bridge）</strong>，則無疑是這座城市最浪漫的藍色童話。這座擁有兩座宏偉哥德式城堡塔樓、並由標誌性淡藍色鋼鐵骨架連接的巨型開啟橋，落成於 1894 年。每當龐大的橋面在液壓動力驅動下緩緩向兩側高高升起，讓巨大的帆船或遊輪穿過河面，那副畫面完美融合了維多利亞時代的工業力量與英倫美學。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度走上這座倫敦地標，解鎖它常年被外國旅客誤會的經典趣事，挑戰離地 42 米的高空玻璃走廊，並奉上攝影師私藏的兩大絕佳河畔拍照機位！
          </p>

          <h2>🇬🇧 霧都的鋼鐵奇蹟：倫敦塔橋的 3 大歷史秘密</h2>

          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🎵 「London Bridge is Falling Down」唱的其實不是它？
            </h4>
            <p className="text-blue-100">
              這絕對是全倫敦最無奈、最廣為人知的旅遊大誤區！無數人從小聽著英文童謠《倫敦橋倒了》長大，來到這裏看到這座美麗雄偉的雙塔大橋，都會興奮地大喊：「哇！這就是倫敦橋！」—— <strong>錯！這座橋叫「倫敦塔橋」（Tower Bridge）</strong>。至於真正的「倫敦橋 (London Bridge)」，其實位於它的上游不遠處，外觀非常樸素，只是一座普通的現代水泥平橋。據說當年曾有位美國富豪出高價買下舊倫敦橋打算運回美國，運到之後才發現自己誤把樸素的倫敦橋當成了精美的倫敦塔橋，成為一時笑談。
            </p>
          </div>

          <h3 id="glass-floor">1. 離地 42 米的刺激體驗 —— 高空玻璃走廊（The Glass Floor）</h3>
          <p>
            來到塔橋，除了在下層的行人路漫步，你還可以買票進入塔橋內部，乘搭電梯登上連接兩座塔樓的<strong>高空露天雙層人行天橋</strong>。幾年前，這裏鋪設了一段長 11 米、寬 1.8 米的<strong>全透明玻璃走廊</strong>！站在離地 42 米、清澈透光的玻璃上，你可以徹底俯瞰腳下泰晤士河上穿梭的遊船，以及像火柴盒一樣駛過的倫敦紅色雙層巴士和黑色計程車，刺激感滿分！
          </p>

          <h3 id="engine-rooms">2. 維多利亞時代的黑色心臟 —— 蒸汽機房（Engine Rooms）</h3>
          <p>
            在參觀完玻璃走廊後，順著指定路線下塔，你會來到位於橋底南岸的「維多利亞蒸汽機房」。在古代，塔橋重達上千噸的巨大橋面能夠在短短一分鐘內完全升起，全靠這裏巨大的燃煤蒸汽機驅動液壓系統。如今這裡完整保留了當年精美、擦得鋥亮的巨大齒輪、燃煤爐和蒸汽泵，散發著強烈的工業「蒸汽龐克（Steampunk）」美學，非常值得一看。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1200&q=80"
              alt="倫敦塔橋側面"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-blue-300 text-sm mt-4 mb-8">
              ▲ 南岸草地是攝影師最愛的私藏機位，最能拍出悠閒與宏偉的強烈對比
            </p>
          </div>

          <h2 id="photo-spots">📸 攝影師指南：如何拍出刷爆社交媒體的塔橋大片</h2>
          <p>
            倫敦塔橋體積極其龐大，站在橋上很難拍全它的全貌。想要拍出高級的同框照，這兩個位於河岸兩側的機位才是精華：
          </p>
          <ul className="space-y-4 text-blue-100">
            <li className="flex gap-3">
              <span className="text-blue-400 text-xl">📍</span>
              <span><strong>南岸綠茵野餐位 —— 倫敦市政廳（City Hall）草地：</strong><br/>從倫敦塔橋順著南岸步道步行 2 分鐘，來到這片寬闊的斜坡綠草地。你可以隨意坐或躺在草地上，將相機放低，利用綠草作為前景仰拍。這裡剛好可以完整地拍到塔橋最完美的正面斜對角全景，是拍攝文藝感網美大片的無冕之王。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 text-xl">📍</span>
              <span><strong>北岸完美幾何相框 —— 倫敦塔古老石拱門（Tower of London Wall）：</strong><br/>走到北岸鄰近歷史悠久的「倫敦塔」古城堡外牆。這裏有一排古老的中世紀石頭拱窗。你可以在拱窗前駐足，利用黑暗的古老石磚作為天然的對稱相框，將外面現代亮麗、淡藍色的倫敦塔橋精緻地框在正中央，拍出極具歷史穿越感的視覺大片。</span>
            </li>
          </ul>

          <div id="tips" className="bg-gradient-to-br from-blue-900/60 to-cyan-900/50 border border-blue-400/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 倫敦塔橋 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex gap-3">
                <span className="text-blue-400">🎟️</span>
                <span><strong>普通過橋完全免費！登頂才需買票：</strong>如果你只是想從橋上的行人路走過去、或者跟塔橋合照，這裏是<strong>完全免費、24小時開放的交通要道</strong>。只有你想登上塔樓、走高空玻璃走廊以及參觀蒸汽機房，才需要購買官方的 "Tower Bridge Ticket"（成人票約 12-13 英鎊），建議提前在官網預約定時門票。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">⏰</span>
                <span><strong>查看「開橋時間表 (Bridge Lift Times)」：</strong>倫敦塔橋至今仍然是一座運作中的開啟橋！平均每週會有幾次因為大型船隻通過而「開橋」。大橋打開的過程非常壯觀，兩岸會臨時交通管制，所有的巴士汽車會停下來靜靜等待。出發前強烈建議去<strong>倫敦塔橋官方網站查看當天的 Bridge Lift Times</strong>，如果能碰上開橋的瞬間，絕對是旅程中最幸運的事！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🌬️</span>
                <span><strong>小心河畔妖風與溫差：</strong>泰晤士河畔常年風力極其強勁（特別是站在橋中央以及高空天橋上），即使是夏天，風吹過來也帶有絲絲涼意。出發前往塔橋拍照時，請務必帶備一件防風外套，不然分分鐘會被吹到頭痛。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🚇</span>
                <span><strong>交通方式：</strong>乘搭倫敦地鐵 Circle 或 District 線至 <strong>Tower Hill（倫敦塔站）</strong>。出站後順著指示牌穿過歷史悠久的倫敦塔古堡花園，步行約 5-8 分鐘即可直接來到大橋的北岸起點。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">📍 地址</span>
              <p className="text-blue-100 text-sm mt-1">Tower Bridge Rd, London SE1 2UP</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">🕐 開放時間</span>
              <p className="text-blue-100 text-sm mt-1">9:30-17:30（登塔）</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">💰 費用</span>
              <p className="text-blue-100 text-sm mt-1">成人約 £12-13</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">🚇 交通</span>
              <p className="text-blue-100 text-sm mt-1">地鐵 Tower Hill 站</p>
            </div>
          </div>


          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="tower-bridge" />
    </div>
  );
}