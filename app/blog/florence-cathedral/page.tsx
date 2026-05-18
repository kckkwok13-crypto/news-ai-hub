"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "architecture", title: "建築奇蹟", emoji: "📐" },
  { id: "dome", title: "布魯內萊斯基圓頂", emoji: "🧱" },
  { id: "baptistry", title: "聖若望洗禮堂", emoji: "🚪" },
  { id: "photography", title: "攝影攻略", emoji: "📸" },
  { id: "climbing", title: "登頂攻略", emoji: "🧗" },
  { id: "tips", title: "實用貼士", emoji: "💡" },
];

export default function FlorenceCathedralPage() {
  const [activeSection, setActiveSection] = useState("architecture");

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
    <div className="min-h-screen bg-[#faf8f5] text-[#2b2d42]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#e8f0ec] to-[#faf8f5] backdrop-blur-xl border border-[#1b4d3e]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#1b4d3e]/10">
          <h3 className="text-sm font-bold text-[#1b4d3e] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#1b4d3e] to-[#2d6a4f] text-white shadow-lg shadow-[#1b4d3e]/30"
                      : "text-[#1b4d3e]/70 hover:text-[#1b4d3e] hover:bg-[#e8f0ec]"
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
          className="inline-flex items-center gap-2 text-[#1b4d3e] hover:text-[#0d3320] mb-8 transition-colors bg-[#e8f0ec] px-4 py-2 rounded-full hover:bg-[#d8e8dc] border border-[#1b4d3e]/30"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b-3 border-[#1b4d3e]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1b4d3e] to-[#2d6a4f] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#1b4d3e]/30">
            🧱 文藝復興搖籃 · 意大利遺產
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1b4d3e] leading-tight">
            🏛️ 文藝復興的紅色奇蹟：佛羅倫斯聖母百花大教堂（Duomo）深度打卡與極限登頂全攻略
          </h1>
          <h2 className="text-xl text-[#c05640] font-semibold mb-4">Cattedrale di Santa Maria del Fiore</h2>
          <p className="text-[#8d99ae]">May 2026 · 作者：純粹旅人</p>
        </header>

        {/* Manga Character */}
        <div className="flex justify-center -mt-4 mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-6xl shadow-xl shadow-[#1b4d3e]/30 border-4 border-[#c05640]/40">
            🧱
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#1b4d3e]/20">
          <img
            src="https://images.unsplash.com/photo-1543429258-49a7a091da1d?w=1200src="https://aws-tiqets-cdn.imgix.net/images/content/954532f348e247b3a8ba8397038d2a11.jpg?auto=format&fit=crop"q=80"
            alt="佛羅倫斯聖母百花大教堂全景"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1543429258-49a7a091da1d?w=1200e.currentTarget.src = "https://cdn.britannica.com/59/179059-050-62BD6102/Cathedral-of-Santa-Maria-del-Fiore-Florence.jpg";q=80";
            }}
          />
        </div>
        <p className="text-center text-[#8d99ae] text-sm mb-12">
          ▲ 名列世界五大天主教堂之一、文藝復興建築史巔峰神作 —— 聖母百花大教堂
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="architecture">
            徐志摩曾將這座城市浪漫地翻譯為「翡冷翠」，而當你真正站在<strong>佛羅倫斯聖母百花大教堂（Cattedrale di Santa Maria del Fiore / 俗稱 Duomo）</strong>門前，看著它由純白、粉紅、墨綠三色大理石縱橫交錯拼貼而成的奢華外牆，你就會明白這個名字有多貼切。這座始建於 1296 年的教堂，不僅是佛羅倫斯無可爭議的精神地標，它那龐大的紅色八角形磚造圓頂，更是敲響文藝復興時代的第一聲鐘響。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度走入這座大理石奇蹟，解鎖建築史上最不可思議的圓頂傳奇，並奉上攝影師私藏的拍照視角與極限登頂無痛搶票攻略！
          </p>

          <h2 id="dome" className="text-[#1b4d3e] text-2xl font-bold border-b-2 border-[#c05640] pb-2 mt-10 mb-4">📐 建築史上的不可能任務：2 大核心藝術亮點</h2>
          
          <div className="bg-[#fdf5f2] border-l-5 border-[#c05640] p-5 rounded-r-lg my-8">
            <h4 className="text-[#1b4d3e] font-bold text-lg mb-3">🧱 布魯內萊斯基的孤傲傳奇 —— 「無木架」大圓頂</h4>
            <p className="text-[#2b2d42]">
              在 15 世紀初，百花大教堂主體早已完工，卻留下了一個直徑達 43.7 米的巨大天窗 —— 因為當時全歐洲根本沒有人知道如何在不使用木材支撐架的情況下，建造出如此龐大的穹頂。最後由天才建築師<strong>布魯內萊斯基 (Brunelleschi)</strong> 揭開謎底。他採用了天才般的「魚骨人字形」磚塊排列法，讓磚塊自身互相支撐受力。在完全沒有搭建內部木架的情況下，耗時 16 年打造出這座至今仍是全球最大的磚造穹頂，堪稱神蹟。
            </p>
          </div>

          <h3 className="text-[#2b2d42] text-xl font-semibold border-l-4 border-[#1b4d3e] pl-3 mt-8 mb-4">1. 穹頂內部巨幅壁畫 —— 《末日審判》（The Last Judgment）</h3>
          <p>
            雖然大教堂地面的內部空間相對樸素，但只要你一抬頭，圓頂內部高高在上的巨大壁畫絕對會讓你震撼不已。這幅由瓦薩里和祖卡里共同绘制的《末日審判》，面積高達 3600 平方米。如果你選擇登頂，在攀爬的過程中會經過壁畫正下方的透明玻璃懸空看台，你可以近距離看清壁畫中天使、聖人與地獄惡魔栩栩如生的痛苦與狂喜神情。
          </p>

          <h3 id="baptistry" className="text-[#2b2d42] text-xl font-semibold border-l-4 border-[#1b4d3e] pl-3 mt-8 mb-4">2. 聖若望洗禮堂 —— 驚艷米開朗基羅的《天堂之門》</h3>
          <p>
            教堂正對面，是一座呈八角形的聖若望洗禮堂。這裏最出名的就是正對大教堂的那扇青銅鍍金大門。這是雕刻家吉貝爾蒂耗時 27 年完成的浮雕極品，上面用完美的透視法刻畫了十幅聖經舊約故事。連後來的藝術大師米開朗基羅看到後都由衷讚嘆：<strong>「這簡直精美得足以作為天堂的大門！」</strong>（注：現外面展出的是高精度複製品，真品保存在大教堂博物館內）。
          </p>

          {/* Michelangelo Terrace Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1543429258-49a7a091da1d?w=1200src="https://cdn.britannica.com/59/179059-050-62BD6102/Cathedral-of-Santa-Maria-del-Fiore-Florence.jpg"q=80"
              alt="百花大教堂內部穹頂壁畫"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://i.pinimg.com/originals/03/ce/e5/03cee54bebd23fbee73cb0b73e6151e8.jpg";
              }}
            />
            <p className="text-center text-[#8d99ae] text-sm mt-4 mb-8">
              ▲ 聖母百花大教堂的經典視角，三色大理石外牆與紅磚圓頂構成翡冷翠的天際線
            </p>
          </div>

          <h2 id="photography" className="text-[#1b4d3e] text-2xl font-bold border-b-2 border-[#c05640] pb-2 mt-10 mb-4">📸 攝影師私藏：大教堂完美的同框拍照位</h2>
          <p>
            由於大教堂體積無比龐大，而在它周邊的百花廣場（Piazza del Duomo）卻非常狹窄，在地面使用手機很難拍全它的全貌。這裡推薦兩個頂級拍照位：
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li><strong>近距離震撼街景：</strong>走到兩側的巷子（例如 <em>Via dei Servi</em> 街道）。從古老狹窄的意大利小巷延伸出去，盡頭剛好探出龐大紅磚圓頂的側影，拍出來的照片空間壓縮感與層次感極強。</li>
            <li><strong>絕美全景日落：</strong>黃昏時搭乘巴士或步行登上老城對岸的 <strong>米開朗基羅廣場 (Piazzale Michelangelo)</strong>。這裡可以毫無遮擋地看見聖母百花大教堂在整座翡冷翠城中鶴立雞群的史詩全景。</li>
          </ul>

          <h2 id="climbing" className="text-[#1b4d3e] text-2xl font-bold border-b-2 border-[#c05640] pb-2 mt-10 mb-4">🧗‍♂️ 挑戰 463 級窄梯！「極限登頂」生存指南</h2>
          <p>
            想要征服這座大教堂，你有兩個選擇：<strong>登上大圓頂 (Cupola)</strong> 或者 <strong>登上喬托鐘樓 (Giotto's Campanile / 414級台階)</strong>。最熱門的絕對是登大圓頂。攀爬的通道藏在雙層穹頂的夾層之中，石梯極其狹窄、陡峭，部分路段甚至需要手腳並用或傾斜身體。當你大汗淋漓地推開頂部最後一道艙門，踏上露天看台，整座文藝復興之城的紅磚屋頂在眼前如畫卷般鋪開，那一刻的治癒，絕對永生難忘！
          </p>

          {/* Tips Panel */}
          <div id="tips" className="bg-[#1b4d3e] text-[#f1faee] p-6 rounded-lg my-10 shadow-xl">
            <h3 className="text-[#ffb74d] font-bold text-lg mb-4 border-b border-[#2d6a4f] pb-2">💡 聖母百花大教堂 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>魔鬼搶票守則（必須提前 1 個月）：</strong>大教堂地面的內部是免費排隊參觀的。但是！想要登大圓頂、登鐘樓、參觀洗禮堂和博物館，必須購買官方套票（推薦包含圓頂的 Brunelleschi Pass，約 30 歐元）。圓頂登頂是<strong>嚴格實名預約制且每天限額</strong>的，旺季往往提前 3-4 星期搶空，現場完全無票，請務必提早網上預約！</li>
              <li><strong>服裝同樣嚴格：</strong>大教堂地面內部和登頂安檢都有服裝限制，嚴禁穿著無袖背心、小吊帶或高過膝蓋的短褲短裙，進場前請準備好絲巾或長袖外套。</li>
              <li><strong>如何無痛避開人潮：</strong>大教堂廣場整天都擠滿了人。如果你想拍到外牆清靜的大片，建議在<strong>清晨 7:00 之前抵達廣場</strong>。這時候鴿子剛飛起，第一縷陽光照在粉綠相間的大理石外牆上，美得讓人心碎。</li>
              <li><strong>交通方式：</strong>佛羅倫斯老城區範圍很小，從中央火車站（Firenze Santa Maria Novella）出站後，跟著人群步行約 10 分鐘即可直接步入百花大教堂廣場。</li>
            </ul>
          </div>

          <p className="text-center font-bold text-[#c05640] text-lg mt-12 mb-8">
            👇 留言分享：面對那 463 級狹窄到需要側身的陡峭石梯，你有信心和勇氣去征服這個文藝復興的圓頂奇蹟嗎？
          </p>
        </article>
      </div>
    </div>
  );
}