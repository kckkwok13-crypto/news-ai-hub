"use client";

import Link from "next/link";

import BlogComments from "@/components/BlogComments";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "📖" },
  { id: "torii", title: "大鳥居", emoji: "⛩️" },
  { id: "sake", title: "酒桶牆", emoji: "🍶" },
  { id: "well", title: "清正之井", emoji: "💧" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function MeijiShrinePage() {
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
    <div className="min-h-screen bg-[#fbfbf9] text-[#2c3e50]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#4a7c59]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#4a7c59]/10">
          <h3 className="text-sm font-bold text-[#4a7c59] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white shadow-lg shadow-[#4a7c59]/30"
                      : "text-[#2c3e50]/70 hover:text-[#1a2a3a] hover:bg-[#e8eaed]"
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
          className="inline-flex items-center gap-2 text-[#4a7c59] hover:text-[#1a2a3a] mb-8 transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#4a7c59]/20"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#4a7c59]/30">
            🌲 東京神社
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            東京市中心的森林秘境：明治神宮
          </h1>
          <h2 className="text-xl text-[#4a7c59] font-semibold mb-4">深度半日遊攻略</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#4a7c59]/20">
          <img
            src="https://images.unsplash.com/photo-1682744210484-5f23d77b21c7?w=1200&q=80"
            alt="明治神宮大鳥居"
            className="w-full"
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          ▲ 矗立於參道入口、極具震撼力的台灣檜木大鳥居，高12米、寬17米
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify">
            緊鄰著潮流發源地原宿與竹下通，很難想像只要走過一條橋，就能瞬間從喧囂的都市切換到蟬鳴鳥叫的原始森林。這裏就是<strong>明治神宮（Meiji Jingu）</strong>。它不僅是東京必去的景點，更是供奉明治天皇與昭憲皇太后靈位、地位崇高的神道教聖地。
          </p>
          <p className="text-[#2c3e50] text-justify">
            今天這篇Blog就帶大家深入走訪這座佔地高達 70 公頃的人造神祕森林，解鎖那些走過路過極易錯過的隱藏亮點與旅行故事！
          </p>

          <h2 id="torii" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">隱藏在參道上的 3 個歷史秘密</h2>
          
          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">1. 全日本最大的木造鳥居 —— 來自台灣的緣分</h3>
          <p className="text-[#2c3e50] text-justify">
            進入神宮後，最引人注目的就是位於南參道與北參道交會處的「大鳥居」。這座鳥居高 12 米、寬 17 米，是全日本最大的木造明神鳥居。值得一提的是，這座巨大的鳥居所使用的木材，是源自台灣阿里山高達 1200 年樹齡的巨型檜木，來到這裏不妨抬頭感受它的莊嚴與歷史厚重感。
          </p>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">2. 百年不對稱的秘密：傳說中的 88 度彎道</h3>
          <p className="text-[#2c3e50] text-justify">
            當你漫步在碎石參道時，會發現路線並不是一條直線。在接近正殿時，參道會有一個接近直角的轉彎。據說這個彎道精準地測量為 <strong>88度</strong>（而非90度），在漢字中「八」代表著四面八方、開闊與吉利。設計師故意不弄成直角，是為了讓信眾在轉彎時能漸漸調適心情，懷著崇敬的心迎接神明。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1682744210484-5f23d77b21c7?w=1200&q=80"
              alt="清酒桶與葡萄酒桶牆"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 代表和洋折衷、極具文化特色的清酒與葡萄酒桶牆
            </p>
          </div>

          <h3 id="sake" className="text-[#2c3e50] text-xl font-semibold mt-8">3. 東西文化交融：清酒桶與西洋葡萄酒桶</h3>
          <p className="text-[#2c3e50] text-justify">
            在南參道兩旁，一邊排列著各個酒廠奉納、色彩斑斕的日本清酒菰樽（Kodotaru）；而對面居然罕見地出現了法國勃艷第產區的西洋葡萄酒桶！這是因為明治天皇在位時极力推行「明治維新」，積極吸收西方文化，他本身也非常喜愛飲用葡萄酒，因此這裡才留下了這幅和洋並存的獨特奇觀。
          </p>

          <div className="bg-[#f4f6f9] border-l-4 border-[#4a7c59] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#4a7c59] font-bold mb-3 text-xl">🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？</h4>
            <p className="text-[#2c3e50]">
              明治神宮是日本年輕人舉辦傳統婚禮的夢幻聖地。如果運氣好，在週末的上午前往，你很有機會在正殿前的廣場目睹一場傳統的「神前結婚式」—— 新娘身穿純白的「白無垢」，在神職人員與巫女的引領下緩步前行。現場氣氛極其莊重肅穆，是非常珍貴的文化體驗。
            </p>
          </div>

          <h2 id="well" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">🍀 內苑散策：清正之井與明治神宮御苑</h2>
          <p className="text-[#2c3e50] text-justify">
            如果你有額外的時間，非常推薦花 500 日圓門票進入「明治神宮御苑」。這裡在江戶時代曾是加藤家和伊伊家的庭園。裡面隱藏著全東京最知名的開運能量景點 —— <strong>「清正之井」</strong>（Kiyomasa's Well）。這是一口由名將加藤清正挖掘的古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！
          </p>

          <div className="bg-[#4a7c59] text-white p-6 my-10 rounded-xl" id="tips">
            <h3 className="font-bold mb-4 text-xl">💡 明治神宮 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3">
              <li><strong>開放時間：</strong>明治神宮的開門與關門時間是跟隨「太陽升落」而每個月變動的。基本上日出開門、日落關門，去之前記得先上官網確認當月時間。</li>
              <li><strong>參拜禮儀：</strong>走在參道上時，記得**走兩側**。因為參道的正中央（稱為「正中」）是留給神明通行的。經過大鳥居時，也可以微微鞠躬以示敬意。</li>
              <li><strong>交通方式：</strong>搭乘 JR 山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行 1 分鐘即可到達神宮入口（神宮橋）。</li>
            </ul>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">📍 地址</span>
              <p className="text-[#2c3e50] text-sm mt-1">1-1 Yoyogikamizonocho, Shibuya, Tokyo</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">🕐 開放時間</span>
              <p className="text-[#2c3e50] text-sm mt-1">日出至日落（每季不同）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">💰 費用</span>
              <p className="text-[#2c3e50] text-sm mt-1">免費（御苑另需 ¥500）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">⭐ 評分</span>
              <p className="text-[#2c3e50] text-sm mt-1">4.8/5.0（41,205 評論）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">🚇 交通</span>
              <p className="text-[#2c3e50] text-sm mt-1">JR山手線 原宿站 步行1分鐘</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2c3e50] text-sm mt-1">1-2小時</p>
            </div>
          </div>

          {/* Giscus Comments */}
          <div className="bg-[#f1e7dd] border border-[#8b4513]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#8b4513] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#3e2723] text-lg mb-4">
              👇 留言分享：你的旅程心得或問題！
            </p>
            <Giscus
    repo="kckkwok13-crypto/news-ai-hub"
    repoId="1227822003"
    category="Announcements"
    categoryId="DIC_kwDONz6bPM4CnWN7"
    mapping="pathname"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="light"
    lang="zh-TW"
    loading="lazy"
  />
          </div>


        </article>
      </div>
    </div>
  );
}