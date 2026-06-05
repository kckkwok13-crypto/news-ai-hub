"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🗼" },
  { id: "photo-spots", title: "拍攝機位", emoji: "📸" },
  { id: "sparkle", title: "閃爍燈光", emoji: "✨" },
  { id: "climb", title: "登塔體驗", emoji: "🧗" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function EiffelTowerPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
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
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>
        
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            🗼 歐洲漫遊 · 法式美學
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent">
            遇見巴黎的浪漫定義：艾菲爾鐵塔
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">深度打卡與登塔全攻略</h2>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
            alt="艾菲爾鐵塔 Paris"
            className="w-full h-96 object-cover"
          />
        </div>
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 矗立於戰神廣場、優雅迎接塞納河微風的巴黎精神象徵 —— 艾菲爾鐵塔
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            海明威曾說：「如果你夠幸運，年輕時待過巴黎，那麼巴黎將永遠跟隨著你，因為她是一場流動的饗宴。」而喺呢場饗宴當中，最耀眼的主角絕對非<strong>艾菲爾鐵塔（Eiffel Tower）</strong>莫屬。這座，為了 1889 年世界博覽會而建的鏤空鋼鐵巨塔，雖然曾被當年的巴黎文人批判為「鋼鐵怪物」，但如今它已成為全球公認最浪漫的時尚地標。
          </p>
          <p>
            無論你是第一次踏上花都巴黎，還是想再次重溫它的優雅，跟著這篇 Blog，我們不單要親臨塔下，更要帶你解鎖攝影師最愛的絕佳觀景位與夢幻點燈時刻！
          </p>

          <h2 id="photo-spots">📸 攝影師私藏：3 大拍攝鐵塔的頂級機位</h2>
          
          <h3>1. 夏樂宮（Trocadéro）—— 完美的正面明信片視角</h3>
          <p>
            位於塞納河對岸的夏樂宮平台，是公認拍攝艾菲爾鐵塔最完整、最宏偉的地方。因為地勢較高，你可以毫無遮擋地將整座鐵塔與前方的噴泉花園一同收入鏡頭。<strong>拍攝貼士：</strong>這裡非常適合拍攝人像大片，建議清晨前來，不僅能避開遊客，還能拍到晨霧籠罩鐵塔的唯美畫面。
          </p>

          <h3>2. 戰神廣場（Champ de Mars）—— 愜意的法式野餐機位</h3>
          <p>
            鐵塔下方延伸出去的一大片綠茵草地就是戰神廣場。買一條法式長棍麵包（Baguette）、一盒草莓和一瓶白葡萄酒，像巴黎人一樣隨意地躺在草地上仰望鐵塔。在這裡用相機捕捉由草地、散步的途人與高聳鐵塔構成的畫面，最能展現巴黎隨性浪漫的生活感。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
              alt="巴黎市景夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 俯瞰夜幕下的巴黎市區，萬家燈火與埃菲爾鐵塔的璀璨燈光交相輝映
            </p>
          </div>

          <h3>3. 德比爾哈克姆橋（Pont de Bir-Hakeim）—— 電影感鋼鐵對稱美</h3>
          <p>
            這座雙層橋樑是電影《盜夢空間》（Inception）的經典取景地。上層行駛地鐵，下層則是行人與單車徑。站在橋中央那排極具幾何美感的鋼鐵立柱之間，將鏡頭對準延伸的走廊，旁邊襯托著遠處的鐵塔，拍出來的照片帶有一種無與倫比的文藝電影感。
          </p>

          <div id="sparkle" className="bg-gradient-to-br from-amber-900/30 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ✨ 璀璨限定：震撼心靈的「閃爍燈光騷」（Diamond Sparkle）
            </h4>
            <p className="text-zinc-300">
              每當夜幕低垂，鐵塔會亮起溫暖的金黃色燈光。但真正的魔法發生在<strong>入夜後的每個整點</strong>（例如晚上 21:00、22:00），鐵塔會準時上演持續 5 分鐘的「鑽石閃爍騷」！成千上萬個白色 LED 燈泡同時像鑽石般瘋狂閃爍，整座鋼鐵架構瞬間變得無比靈動，現場往往會引來無數旅客的驚嘆與歡呼，浪漫指數徹底破表！
            </p>
          </div>

          <h2 id="climb">🧗‍♂️ 登塔體驗：兩種俯瞰巴黎天際線的方式</h2>
          <p>
            來到鐵塔，除了遠觀，更強烈建議預約登塔！鐵塔分為三層，你可以選擇乘搭經典的透明玻璃升降機直達頂端，或者挑戰自己的體力 —— 步行 674 級樓梯登上第二層。站在觀景台上，凱旋門、香榭麗舍大道、塞納河上的遊船全部盡收眼底，巴黎這座城市的放射狀都市規劃會完美呈現在你眼前。
          </p>

          <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/30 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 艾菲爾鐵塔 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>絕對要提早訂票：</strong>艾菲爾鐵塔是全球最熱門的景點之一，現場排隊往往需要 2 小時以上。強烈建議<strong>提前 2-3 個月</strong>在官網預約門票（可選擇登頂 Top 或是到第二層 Second Floor）。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🌅</span>
                <span><strong>最佳造訪時間：</strong>推薦預約<strong>黃昏前 1 小時</strong>登塔。這樣你就可以在塔上同時欣賞到白天的全景、浪漫的日落晚霞，以及整個巴黎夜幕低垂、萬家燈火點亮的震撼瞬間。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🚇</span>
                <span><strong>交通方式：</strong>乘搭地鐵 6 號線至「Trocadéro 站」下班（從夏樂宮開始逛），或者乘搭 RER C 線至「Champ de Mars Tour Eiffel 站」，出站步行約 5 分鐘。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">📍 地址</span>
              <p className="text-zinc-300 text-sm mt-1">Champ de Mars, 5 Avenue Anatole France, Paris</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">🕐 開放時間</span>
              <p className="text-zinc-300 text-sm mt-1">9:30-23:45（登塔至23:00）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">💰 費用</span>
              <p className="text-zinc-300 text-sm mt-1">成人 €28.3 起（電梯登頂）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">⭐ 評分</span>
              <p className="text-zinc-300 text-sm mt-1">4.7/5.0（156,892 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">🚇 交通</span>
              <p className="text-zinc-300 text-sm mt-1">地鐵6號線 Trocadéro 站</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-zinc-300 text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-zinc-300 text-lg mb-4">
              👇 如果去巴黎，你最想和誰一起在鐵塔下看一場整點的鑽石閃爍騷呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
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
    </div>
  );
}