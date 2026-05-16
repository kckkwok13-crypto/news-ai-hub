import Link from "next/link";
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
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 w-56 shadow-2xl">
          <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                    activeSection === id
                      ? "bg-green-600 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>{emoji}</span>
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
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">
            🌲 東京市中心的森林秘境：明治神宮深度半日遊攻略
          </h1>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg"
          alt="明治神宮大鳥居"
          className="w-full rounded-xl mb-4"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 矗立於參道入口、極具震撼力的台灣檜木大鳥居，高12米、寬17米
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            緊鄰著潮流發源地原宿與竹下通，很難想像只要走過一條橋，就能瞬間從喧囂的都市切換到蟬鳴鳥叫的原始森林。這裏就是<strong>明治神宮（Meiji Jingu）</strong>。它不僅是東京必去的景點，更是供奉明治天皇與昭憲皇太后靈位、地位崇高的神道教聖地。
          </p>
          <p>
            今天這篇Blog就帶大家深入走訪這座佔地高達 70 公頃的人造神祕森林，解鎖那些走過路過極易錯過的隱藏亮點與旅行故事！
          </p>

          <h2 id="torii">隱藏在參道上的 3 個歷史秘密</h2>
          
          <h3>1. 全日本最大的木造鳥居 —— 來自台灣的緣分</h3>
          <p>
            進入神宮後，最引人注目的就是位於南參道與北參道交會處的「大鳥居」。這座鳥居高 12 米、寬 17 米，是全日本最大的木造明神鳥居。值得一提的是，這座巨大的鳥居所使用的木材，是源自台灣阿里山高達 1200 年樹齡的巨型檜木，來到這裏不妨抬頭感受它的莊嚴與歷史厚重感。
          </p>

          <h3>2. 百年不對稱的秘密：傳說中的 88 度彎道</h3>
          <p>
            當你漫步在碎石參道時，會發現路線並不是一條直線。在接近正殿時，參道會有一個接近直角的轉彎。據說這個彎道精準地測量為 <strong>88度</strong>（而非90度），在漢字中「八」代表著四面八方、開闊與吉利。設計師故意不弄成直角，是為了讓信眾在轉彎時能漸漸調適心情，懷著崇敬的心迎接神明。
          </p>

          <div className="my-8">
            <img
              src="https://dashboard.japantravel.com/photo/poi-8-214215/1440x960!/tokyo-meiji-jingu-shrine-214215.webp"
              alt="清酒桶與葡萄酒桶牆"
              className="w-full rounded-xl mb-4"
            />
            <p className="text-center text-zinc-500 text-sm mb-8">
              ▲ 代表和洋折衷、極具文化特色的清酒與葡萄酒桶牆
            </p>
          </div>

          <h3 id="sake">3. 東西文化交融：清酒桶與西洋葡萄酒桶</h3>
          <p>
            在南參道兩旁，一邊排列著各個酒廠奉納、色彩斑斕的日本清酒菰樽（Kodotaru）；而對面居然罕見地出現了法國勃艮第產區的西洋葡萄酒桶！這是因為明治天皇在位時极力推行「明治維新」，積極吸收西方文化，他本身也非常喜愛飲用葡萄酒，因此這裡才留下了這幅和洋並存的獨特奇觀。
          </p>

          <div className="bg-green-900/20 border border-green-700/40 rounded-xl p-6 my-8">
            <h4 className="text-green-400 font-bold mb-3">🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？</h4>
            <p className="text-zinc-300">
              明治神宮是日本年輕人舉辦傳統婚禮的夢幻聖地。如果運氣好，在週末的上午前往，你很有機會在正殿前的廣場目睹一場傳統的「神前結婚式」—— 新娘身穿純白的「白無垢」，在神職人員與巫女的引領下緩步前行。現場氣氛極其莊重肅穆，是非常珍貴的文化體驗。
            </p>
          </div>

          <h2 id="well">🍀 內苑散策：清正之井與明治神宮御苑</h2>
          <p>
            如果你有額外的時間，非常推薦花 500 日圓門票進入「明治神宮御苑」。這裡在江戶時代曾是加藤家和伊伊家的庭園。裡面隱藏著全東京最知名的開運能量景點 —— <strong>「清正之井」</strong>（Kiyomasa's Well）。這是一口由名將加藤清正挖掘的古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！
          </p>

          <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-6 my-8" id="tips">
            <h3 className="text-amber-400 font-bold mb-4">💡 明治神宮 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3 text-zinc-300">
              <li><strong>開放時間：</strong>明治神宮的開門與關門時間是跟隨「太陽升落」而每個月變動的。基本上日出開門、日落關門，去之前記得先上官網確認當月時間。</li>
              <li><strong>參拜禮儀：</strong>走在參道上時，記得**走兩側**。因為參道的正中央（稱為「正中」）是留給神明通行的。經過大鳥居時，也可以微微鞠躬以示敬意。</li>
              <li><strong>交通方式：</strong>搭乘 JR 山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行 1 分鐘即可到達神宮入口（神宮橋）。</li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">📍 地址</span>
              <p className="text-zinc-300 text-sm mt-1">1-1 Yoyogikamizonocho, Shibuya, Tokyo</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">🕐 開放時間</span>
              <p className="text-zinc-300 text-sm mt-1">日出至日落（每季不同）</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">💰 費用</span>
              <p className="text-zinc-300 text-sm mt-1">免費（御苑另需 ¥500）</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">⭐ 評分</span>
              <p className="text-zinc-300 text-sm mt-1">4.8/5.0（41,205 評論）</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">🚇 交通</span>
              <p className="text-zinc-300 text-sm mt-1">JR山手線 原宿站 步行1分鐘</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <span className="text-green-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-zinc-300 text-sm mt-1">1-2小時</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}