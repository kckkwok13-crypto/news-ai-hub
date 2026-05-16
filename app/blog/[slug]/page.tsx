import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "📖" },
  { id: "spot1", title: "SHIBUYA SKY", emoji: "🏔️" },
  { id: "spot2", title: "星巴克窗口位", emoji: "☕" },
  { id: "spot3", title: "聯絡通道秘境", emoji: "🚶" },
];

export default function ShibuyaCrossingPage() {
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
                      ? "bg-blue-600 text-white"
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
            🌍 走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！
          </h1>
          <p className="text-zinc-500">May 2026</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80"
          alt="俯瞰澀谷十字路口人潮"
          className="w-full rounded-xl mb-4"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 俯瞰澀谷十字路口——繁忙時段每次轉燈就有約2,500人同時橫過
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，<strong>澀谷十字路口（Shibuya Crossing）</strong>絕對當之無愧！每次綠燈一亮，成千上萬的人潮從四面八方湧入，卻又能神奇地錯身而過、亂中有序。
          </p>
          <p>
            不論你是第一次去東京，還是已經去過無數次，這個十字路口都有種讓人百看不厭的魔力。今天這篇Blog就帶大家全方位解鎖澀谷十字路口，還會附上最頂級的打卡拍照位！
          </p>

          <h2 id="spot1">終極打卡位推薦</h2>
          
          <h3>1. SHIBUYA SKY（澀谷上空）—— 終極上帝視角</h3>
          <p>
            目前東京最紅的觀景台。你可以從離地約229米的露天平台，徹底俯瞰整個澀谷十字路口，甚至還能遠眺富士山。一定要提前在網上預約黃昏時段的門票，那時的色溫拍起來最美！
          </p>

          <h3 id="spot2">2. 星巴克澀谷 tsutaya 店 —— 經典二樓窗口位</h3>
          <img
            src="https://images.unsplash.com/photo-1737639824682-60b7edf3dd3d?w=1200&q=80"
            alt="澀谷夜景霓虹燈光"
            className="w-full rounded-xl mb-4"
          />
          <p className="text-center text-zinc-500 text-sm mb-8">
            ▲ 夜晚的澀谷，霓虹燈光與人潮交織成賽博朋克風情
          </p>

          <h3 id="spot3">3. 澀谷車站聯絡通道 —— 免費的在地人秘境</h3>
          <img
            src="https://images.unsplash.com/photo-1603666659847-43cffb58a176?w=1200&q=80"
            alt="澀谷十字路口繁忙場面"
            className="w-full rounded-xl mb-4"
          />
          <p className="text-center text-zinc-500 text-sm mb-8">
            ▲ 人潮湧動的澀谷十字路口全景
          </p>
          <p>
            連接JR澀谷站和井之頭線的行人通道，有一整面大玻璃。這裡不用花一分錢，就能拍到非常壯觀的十字路口全景。
          </p>
        </article>
      </div>
    </div>
  );
}