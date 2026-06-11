"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🏛️" },
  { id: "architecture", title: "建築亮點", emoji: "⚔️" },
  { id: "hypogeum", title: "地下室", emoji: "🕳️" },
  { id: "photo-spot", title: "拍攝機位", emoji: "📸" },
  { id: "tickets", title: "購票攻略", emoji: "🎟️" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function ColosseumPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#3e2723]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#fbe9e7] to-[#faf6f0] backdrop-blur-xl border border-[#8b4513]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#8b4513]/10">
          <h3 className="text-sm font-bold text-[#8b4513] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white shadow-lg shadow-[#8b4513]/30"
                      : "text-[#3e2723]/70 hover:text-[#3e2723] hover:bg-[#f1e7dd]"
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
          href="/blog"
          className="inline-flex items-center gap-2 text-[#8b4513] hover:text-[#5d4037] mb-8 transition-colors bg-[#f1e7dd] px-4 py-2 rounded-full hover:bg-[#e8ddd4] border border-[#8b4513]/20"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b-2 border-[#8b4513]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#8b4513]/30">
            🏛️ 歐洲世界遺產 · 義大利歷史
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5d4037]">
            穿越千年的帝國史詩：羅馬鬥獸場（Colosseum）深度打卡與無痛購票全攻略
          </h1>
          <p className="text-[#bcaaa4]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#8b4513]/20">
          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
            alt="羅馬鬥獸場"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#795548] text-sm mb-12">
          ▲ 公元 80 年落成、名列新世界七大奇蹟之一的古羅馬精神圖騰 —— 羅馬鬥獸場
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#3e2723] text-justify text-lg leading-9">
            如果世界歷史是一本厚重的書，咁羅馬絕對是其中最驚心動魄的章節；而最能代表這個古老帝國榮耀與殘酷的地方，莫過於矗立在市中心的<strong>羅馬鬥獸場（Colosseum）</strong>。這座歷經近兩千年風雨、地震與戰火洗禮的圓形競技場，以其精妙的建築結構同血腥的歷史故事，成為每位來到義大利的旅人不可不去的朝聖地。
          </p>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            今日呢篇 Blog 就帶大家揭開這座石頭建築背後的血淚故事，解鎖攝影師最愛的私藏巨片拍攝機位，並奉上最實用的避坑防牛購票指南！
          </p>

          <h2 id="architecture" className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
            ⚔️ 走進競技場：3 大必看歷史亮點
          </h2>
          
          <h3 className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
            1. 宏偉的「四層拱門外牆」—— 古羅馬建築工藝的巔峰
          </h3>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            站在鬥獸場外，最震撼的就是那面高達 48 米的外牆。古羅馬建築師極具巧思，由下至上分別採用了三種不同風格的柱子：第一層是樸素的<strong>多立克式 (Doric)</strong>，第二層是優雅有捲雲紋的<strong>愛奧尼克式 (Ionic)</strong>，第三層則是奢華雕花的<strong>科林斯式 (Corinthian)</strong>。這種幾何學與層次感的分佈，影響了後世兩千年的西方建築美學。
          </p>

          <h3 id="hypogeum" className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
            2. 地底地下室（Hypogeum）—— 殘酷機關的發源地
          </h3>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            走進內部，你會發現競技場中央的木製舞台地板早已腐朽消失，露出底下密密麻麻、如同迷宮般的隔間。這裏就是「地下室」。當年這裏關押著即將上場的奴隸、死囚以及各種從非洲運來的猛獸。地底設有精密的手動升降機機關，可以在決鬥進行時，突然將獅子或獵豹從地板暗門升至地面，給觀眾帶來最血腥的視覺刺激。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80"
              alt="羅馬鬥獸場內部"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#795548] text-sm mt-4 mb-8">
              ▲ 位於地鐵站出口上方平台的私藏機位，能拍出人與古蹟近距離同框的絕佳效果
            </p>
          </div>

          <h3 id="photo-spot" className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
            3. 私藏最佳拍攝機位 —— 地鐵站出口上方平台
          </h3>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            想拍到沒有遊客干擾、又能與整座鬥獸場完美同框的照片？絕佳的位置不在競技場正門口，而是搭地鐵 B 線到 <strong>Colosseo 站</strong> 出來後，沿著右手邊的樓梯往上走，來到位於馬路邊的石牆平台。這裡地勢較高，剛好與鬥獸場的中層平行。你可以坐在寬闊的古老石磚牆上，以整座龐大的建築作為背景，拍出極具視覺衝擊的電影感大片！
          </p>

          <div className="bg-[#fbe9e7] border-l-5 border-[#ff5722] p-6 my-10 rounded-r-xl">
            <h4 className="text-[#d84315] font-bold mb-4 text-xl flex items-center gap-2">
              🎪 歷史冷知識：這裡居然上演過「模擬海戰」？
            </h4>
            <p className="text-[#3e2723] text-lg leading-9">
              據史料記載，在鬥獸場剛落成初期的元老院慶典中，羅馬人甚至拆除了地板，引進附近的地下水將整個競技場中央灌滿，變成一個人工湖！他們安排了真正的戰船在裡面進行實兵對抗的「模擬海戰」(Naumachia)。古羅馬人為了追求娛樂的極致，其瘋狂與工程技術簡直超乎想像。
            </p>
          </div>

          <h2 id="tickets" className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
            🎟️ 自由行必讀：如何實現「無痛無排隊」進場
          </h2>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            羅馬鬥獸場長年高居全球排隊最誇張的景點前三名，如果現場排隊買票，動輒要浪費 2-3 個小時。<strong>唯一解法是提前網上預約。</strong>鬥獸場的門票是實名制的，通常會提前 30 天在官方網站開放預訂。購買普通套票（Full Experience Ticket）不僅可以進入鬥獸場，還包含了旁邊的<strong>古羅馬廣場 (Roman Forum)</strong> 和 <strong>帕拉蒂尼山 (Palatine Hill)</strong>，絕對可以玩足大半日！
          </p>

          <div className="bg-[#3e2723] text-[#efebe9] p-6 my-10 rounded-xl shadow-2xl">
            <h3 className="text-[#ffb74d] font-bold mb-4 text-xl border-b border-[#5d4037] pb-2">
              💡 羅馬鬥獸場 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="border-b border-[#5d4037] pb-3">
                <strong className="text-[#ffb74d]">嚴防小偷與黃牛：</strong>鬥獸場周邊是羅馬扒手（Pickpockets）的超級激戰區，背包一定要背在前面。另外，門口會有許多穿著古羅馬武士服裝的人熱情邀你合照，拍完後會開出高價索取小費，如果不想花冤枉錢，請微笑拒絕。
              </li>
              <li className="border-b border-[#5d4037] pb-3">
                <strong className="text-[#ffb74d]">最佳觀賞時間：</strong>推薦選擇<strong>下午 15:30 之後</strong>進場。這時候的歐洲太陽開始西斜，陽光會穿透斗獸場無數個拱門洞口，照亮內部的斷壁殘垣，逆光拍起照來非常有神祕、神聖的氛圍。
              </li>
              <li>
                <strong className="text-[#ffb74d]">交通方式：</strong>最簡單直接！乘搭羅馬地鐵 B 線（Metropolitana Linea B）至 <strong>Colosseo 站</strong>，一出站抬頭，巨大的鬥獸場就會直接震撼地呈現在你眼前！
              </li>
            </ul>
          </div>

          <h2 className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">📍 地址</span>
              <p className="text-[#5d4037] text-sm mt-1">Piazza del Colosseo, Rome</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">🕐 開放時間</span>
              <p className="text-[#5d4037] text-sm mt-1">8:30-19:00</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">💰 費用</span>
              <p className="text-[#5d4037] text-sm mt-1">€16 起（包含古羅馬廣場）</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">⭐ 評分</span>
              <p className="text-[#5d4037] text-sm mt-1">4.8/5.0（98,234 評論）</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">🚇 交通</span>
              <p className="text-[#5d4037] text-sm mt-1">Metro B線 Colosseo站</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#5d4037] text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-[#f1e7dd] border border-[#8b4513]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#8b4513] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#3e2723] text-lg mb-4">
              👇 留言分享：如果穿越回古羅馬，你會有勇氣踏入這個熱血與殘酷交織的競技場嗎？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-[#d7ccc8] rounded-xl px-4 py-3 text-[#3e2723] placeholder-[#bcaaa4] focus:outline-none focus:border-[#8b4513] transition-colors"
              />
              <button className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="colosseum" />
    </div>
  );
}
