"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "序言", emoji: "🏰" },
  { id: "cathedral", title: "聖維特大教堂", emoji: "⛪" },
  { id: "golden", title: "黃金巷", emoji: "✨" },
  { id: "palace", title: "舊皇宮", emoji: "👑" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function PragueCastlePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-950 to-indigo-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-purple-900/95 to-violet-900/95 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-purple-500/10">
          <h3 className="text-sm font-bold text-purple-300 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-purple-200 hover:text-white hover:bg-purple-800/80"
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
          className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors bg-purple-900/30 px-4 py-2 rounded-full hover:bg-purple-900/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 ml-4 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/30">
            🏰 捷克布拉格 · 波希米亞皇宮
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent">
            查理四世的黃金夢
          </h1>
          <h2 className="text-xl text-purple-300 font-semibold mb-4">布拉格城堡（Prague Castle）世界最大古堡群深度攻略</h2>
          <p className="text-purple-400">June 2026 · 作者：歷史旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
          <img
            src="https://c8.alamy.com/comp/MXMW07/aerial-view-on-prague-castle-and-saint-vitus-cathedral-czech-republic-panoramic-view-from-airplane-in-sunny-day-MXMW07.jpg"
            alt="布拉格城堡航拍全景"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
        </div>
        <p className="text-center text-purple-400 text-sm mb-12">
          ▲ 俯瞰伏爾塔瓦河西岸 ── 佔地 70,000 平方米的全球最大古堡建築群
        </p>

        <article className="prose prose-purple prose-lg max-w-none">
          <div id="intro" className="mb-8">
            <p>
              如果說巴黎的靈魂藏在塞納河畔，那麼捷克布拉格的傲骨，毫無疑問挺立在伏爾塔瓦河西岸的山崗之巔 ── <strong>布拉格城堡（Pražský hrad）</strong>。根據健力士世界紀錄大全統計，它是<strong>全球規模最大的連體古堡建築群</strong>。
            </p>
            <p>
              這座始建於公元 880 年的皇家聖地，歷經了羅曼式、哥德式、文藝復興式及巴洛克式千年的層疊洗禮。今天這篇 Blog，我將帶上最絢麗的調色盤與全方位的數據，帶大家深度解構這座歷史與視覺的終極盛宴！
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-violet-900/30 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">🏰</span> 布拉格城堡 · 基本數據
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-purple-900/30 rounded-lg p-3">
                <span className="text-purple-400">佔地面積</span>
                <p className="text-white font-semibold">70,000 平方米</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <span className="text-purple-400">城堡長度</span>
                <p className="text-white font-semibold">約 570 米</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <span className="text-purple-400">始建年份</span>
                <p className="text-white font-semibold">公元 880 年</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <span className="text-purple-400">建築風格</span>
                <p className="text-white font-semibold">羅曼/哥德/巴洛克</p>
              </div>
            </div>
          </div>

          <h2 id="cathedral">⛪ 聖維特主教座堂：慕夏彩繪玻璃下的千年史詩</h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://storyofprague.cz/wp-content/uploads/2023/11/st-vitus-cathedral-interior.jpg"
              alt="聖維特主教座堂內部"
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-purple-400 text-sm mt-3">
              ▲ 陽光穿透慕夏彩繪玻璃 ── 紅、藍、金、紫交織的炫目光影
            </p>
          </div>

          <p>
            走進教堂內部，陽光正好穿透二十世紀捷克新藝術運動大師<strong>慕夏（Alphonse Mucha）</strong>親手繪製的「聖西里爾與聖美多迪烏斯」彩繪玻璃窗。無數種由紅、藍、金、紫拼接而成的絢麗光暈，如夢似幻地潑灑在冰冷的哥德式花崗岩石柱上。
          </p>
          <p>
            那一刻，色彩與光影不再只是裝飾，而變成了中世紀神學最放肆、最唯美的具象化表達。單單是坐在大堂後方的長椅上凝望這抹光影半小時，這趟波希米亞之旅便已物超所值。
          </p>

          <h2 id="golden">✨ 黃金巷：卡夫卡的童話小屋與免費特權</h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/Prague_-_Zlata_ulicka.jpg"
              alt="黃金巷五彩小屋"
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-purple-400 text-sm mt-3">
              ▲ 夕陽下的黃金巷 ── 22 號藍色小屋曾是卡夫卡的閉關寫作地
            </p>
          </div>

          <p>
            一整排繽紛矮房組成的<strong>黃金巷（Golden Lane）</strong>，是城堡內最具童話色彩的角落。其中<strong>22 號藍色小屋</strong>為大文豪卡夫卡當年閉關寫作之地。
          </p>

          <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/30 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-amber-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🌅</span> 隱藏版奢華：17:00 後免費進場特權
            </h4>
            <p className="text-amber-100">
              很多人不知道，每天 17:00（冬季 16:00）之後，黃金巷的官方檢票亭會關閉。此時任何人都可以免費走入黃金巷！雖然小房子內部的展品不開放，但此時夕陽西下，繽紛的童話小屋亮起溫暖的黃色壁燈，空無一人的石板路上只有你自己的腳步聲，浪漫得一塌糊塗。
            </p>
          </div>

          <h2 id="palace">👑 舊皇宮：維拉迪斯拉夫大廳的騎士傳奇</h2>

          <p>
            <strong>維拉迪斯拉夫大廳（Vladislav Hall）</strong>是中世紀全歐洲最大的無柱拱頂大廳。據記載，這裡曾可容納騎士策馬進場比武，場面浩大。如今，這座大廳仍是捷克總統舉行國宴的地方，繼續書寫著皇室的輝煌篇章。
          </p>

          <h2 id="tips">💡 布拉格城堡 旅遊實用小貼士 (Expert Travel Tips)</h2>

          <div className="bg-gradient-to-br from-purple-800 to-violet-900 border border-purple-500/30 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-purple-100">
              <li className="flex gap-3">
                <span className="text-purple-300 text-xl">🚇</span>
                <span><strong>聰明交通路線：</strong>大部分遊客都會選擇搭乘有軌電車 22 號線在 <strong>Pražský hrad 站</strong> 下車從正門進，這導致正門安檢處永遠大排長龍。<strong>最精明的走法</strong>是搭地鐵 A 線到 <strong>Malostranská 站</strong>，順著「城堡東側舊階梯」一路往上逛。這邊安檢速度極快，而且沿途俯瞰老城區的視野是全園最棒的！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-300 text-xl">🎫</span>
                <span><strong>門票選擇（推薦 Main Circuit）：</strong>城堡目前主推<strong>「城堡基本套票」</strong>（成人票價約 450 克朗）。該套票已完美涵蓋了聖維特大教堂、舊皇宮、聖喬治大殿與黃金巷這四大精華景點，性價比極高。門票有效期長達 2 天，不需要在一天內匆忙趕完。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-300 text-xl">👮</span>
                <span><strong>衛兵交接儀式：</strong>城堡每天每小時都有衛兵換崗，但最隆重、帶有軍樂隊伴奏的<strong>大交接儀式精確發生在每日中午 12:00</strong>，地點在第一庭院。想要佔據最前排的拍照機位，必須在 11:40 前抵達守候。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-300 text-xl">👟</span>
                <span><strong>穿著建議：</strong>整個城堡區由古老、粗糙且高低不平的波希米亞花崗岩石磚鋪成。請務必穿著<strong>抓地力佳、厚底的運動健步鞋</strong>。女士們請將高跟鞋留在酒店房間。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-gradient-to-br from-purple-800/60 to-violet-900/60 rounded-xl p-4 border border-purple-500/30">
              <span className="text-purple-300 font-bold">📍 地址</span>
              <p className="text-purple-100 text-sm mt-1">Hradčany, 119 08 Prague 1</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/60 to-violet-900/60 rounded-xl p-4 border border-purple-500/30">
              <span className="text-purple-300 font-bold">🕐 開放時間</span>
              <p className="text-purple-100 text-sm mt-1">6:00-22:00（夏季）</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/60 to-violet-900/60 rounded-xl p-4 border border-purple-500/30">
              <span className="text-purple-300 font-bold">💰 費用</span>
              <p className="text-purple-100 text-sm mt-1">約 450 克朗（Main Circuit）</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/60 to-violet-900/60 rounded-xl p-4 border border-purple-500/30">
              <span className="text-purple-300 font-bold">⚠️ 重要提醒</span>
              <p className="text-purple-100 text-sm mt-1">建議提前網上預訂</p>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>

      {/* Comments Section */}
      <Comments slug="prague-castle" />
    </div>
  );
}
