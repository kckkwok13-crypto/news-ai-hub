"use client";

import Link from "next/link";

import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌅" },
  { id: "history", title: "歷史傳奇", emoji: "💎" },
  { id: "photo", title: "攝影攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function PonteVecchioPage() {
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
        
        <header className="text-center py-12 border-b-2 border-[#d9a05b]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#8b4513]/30">
            🌅 文藝復興浪漫 · 翡冷翠散策
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5d4037] leading-tight">
            🌅 繾綣阿諾河的黃昏浪漫：佛羅倫斯老橋（Ponte Vecchio）深度散策與打卡攻略
          </h1>
          <p className="text-[#bcaaa4]">發布日期：2026年5月 · 作者：純粹旅人</p>
        </header>

        {/* Hero Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#8b4513]/20">
          <img
            src="https://images.unsplash.com/photo-1568162647192-4f4dd46d57b8?w=1200&q=80"
            alt="佛羅倫斯老橋黃昏全景"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1629739180299-f6b9c57d319d?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#795548] text-sm mb-12">
          ▲ 橫跨阿諾河、逃過二戰戰火洗禮的歐洲最古老石造拱橋 —— 佛羅倫斯老橋
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#3e2723] text-justify text-lg leading-9">
            如果說聖母百花大教堂是佛羅倫斯高高在上的華麗皇冠，那麼橫跨在阿諾河（Arno）上、散發著淡淡煙火氣與復古浪漫的<strong>老橋（Ponte Vecchio / 維奇歐橋）</strong>，就是這座城市最溫柔的靈魂。這座建於 1345 年的古老三拱石橋，是佛羅倫斯現存最古老的橋樑。最奇特的是，橋上兩側建滿了密密麻麻、向河面懸空延伸的彩色小木屋，遠看就像童話裡的積木世界，在夕陽下美得讓人心醉。
          </p>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            今日呢篇 Blog 就帶大家漫步這條文藝復興時期的「珠寶黃金橋」，揭開它在歷史洪流中得以倖存的奇蹟故事，並奉上攝影師私藏的黃昏落日拍攝機位！
          </p>

          <h2 id="history" className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
            💎 歷史與奢華交織：老橋的 3 個傳奇故事
          </h2>
          
          <h3 className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
            1. 二戰中唯一倖存的奇蹟 —— 希特勒留下的「仁慈」
          </h3>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            在第二次世界大戰末期（1944年），撤退的德軍為了阻擋盟軍進攻，狠心炸毀了佛羅倫斯阿諾河上所有古老的橋樑，但唯獨留下了老橋。傳說是因為當時德軍指揮官（甚至是希特勒本人）曾來到這裏，被老橋無與倫比的美麗所震撼，認為毀壞它是對人類文明的犯罪，於是下令保留。老橋這才得以奇蹟般完整地矗立至今。
          </p>

          <h3 className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
            2. 百年珠寶街的前世今生 —— 從臭氣熏天到金碧輝煌
          </h3>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            今日行喺老橋上，兩旁全是一間間精緻古典的<strong>高級珠寶店、金銀首飾鋪</strong>。但你很難想像，在 16 世紀之前，這裏其實是喧鬧、臭氣熏天的生肉和皮革市場。當時的屠夫直接把不要的廢料和血水倒進阿諾河，引來極大的味道。直到美第奇家族的斐迪南一世大公實在忍受不了，便下令「只有金匠和珠寶商才能在橋上營業」，老橋這才搖身一變，成為全歐洲最奢華的橋樑。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1549897526-a3b97de1b7a5?w=1200&q=80"
              alt="老橋珠寶店"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1713341085351-163f3d537f98?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#795548] text-sm mt-4 mb-8">
              ▲ 橋上兩旁的珠寶店與小木屋，是老橋最迷人的風景
            </p>
          </div>

          <div className="bg-[#fdf6ee] border-l-5 border-[#d9a05b] p-6 my-10 rounded-r-xl">
            <h4 className="text-[#5d4037] font-bold mb-4 text-xl flex items-center gap-2">
              👑 貴族的特權通道 —— 隱密的天空之城「瓦薩里走廊」
            </h4>
            <p className="text-[#3e2723] text-lg leading-9">
              如果你仔細觀察老橋二樓頂部，會發現有一排整齊的小窗戶一直延伸到河對岸。這是一條長達 1 公里的秘密空中通道 —— <strong>瓦薩里走廊 (Corridoio Vasariano)</strong>。1565 年，統治佛羅倫斯的美第奇家族為了在住處（碧提宮）與辦公地點（烏菲茲美術館）之間安全、秘密地通行，而不必與底层的平民百姓接觸，特意建造了這條走廊。貴族們一邊在上頭散步，一邊透過小窗欣賞下方的阿諾河風景，極盡奢華。
            </p>
          </div>

          <h2 id="photo" className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
            📸 攝影師指南：如何拍出老橋最完美的「黃昏大片」
          </h2>
          <p className="text-[#3e2723] text-justify text-lg leading-9">
            老橋本身是一座購物街，當你置身橋上時，很難拍出它標誌性的積木懸空全景。想要拍出令人屏息的浪漫照片，以下兩個機位才是精華：
          </p>
          <ul className="text-[#3e2723] text-lg leading-9 space-y-4 mb-8 list-disc pl-6">
            <li>
              <strong>黃金正側面機位：恩慈橋（Ponte Santa Trinita）</strong><br />
              走到老橋下游鄰近的「恩慈橋」上。每到黃昏，站在這裡往老橋方向望去，剛好可以將整座老橋的三拱結構、彩色木屋、以及完美的落日餘暉一次過全部收入鏡頭，這裡是拍老橋夕陽全景的無冕之王。
            </li>
            <li>
              <strong>塞納河畔延伸街景：Lungarno Acciaiuoli 河岸步道</strong><br />
              沿著阿諾河北岸的步道漫步，利用河岸護欄作為線條延伸，將老橋作為背景。當老橋兩旁的珠寶店在入夜後紛紛亮起金黃色的燈光，水面波光粼粼，拍出來的照片帶有一種老派歐洲電影的微醺感。
            </li>
          </ul>

          <div className="bg-[#3e2723] text-[#efebe9] p-6 my-10 rounded-xl shadow-2xl">
            <h3 className="text-[#d9a05b] font-bold mb-4 text-xl border-b border-[#5d4037] pb-2">
              💡 佛羅倫斯老橋 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="border-b border-[#5d4037] pb-3">
                <strong className="text-[#d9a05b]">防盜重要警告：</strong>老橋常年擠滿了來自世界各地的旅客，特別是橋中央大家停下來看街頭藝人表演、看落日的時候，<strong>這裡也是扒手（Pickpockets）最活躍的溫床</strong>。請務必將包包背在前面，隨時看管好自己的財物。
              </li>
              <li className="border-b border-[#5d4037] pb-3">
                <strong className="text-[#d9a05b]">享受浪漫的夜幕：</strong>強烈建議在<strong>日落後半小時內（藍調時刻）</strong>前往老橋。這時候白天的喧囂褪去，橋中央常常會有浪漫的意大利街頭樂隊彈奏結他唱歌。買一球義大利手工冰淇淋（Gelato），坐在石欄杆邊吹著阿諾河的微風聽歌，絕對是翡冷翠之旅最療癒的時光。
              </li>
              <li>
                <strong className="text-[#d9a05b]">交通方式：</strong>佛羅倫斯老城完全適合步行。從領主廣場（Piazza della Signoria）或烏菲茲美術館出發，順著人群往河邊步行只需 2 分鐘，即可直接踏上這座百年老橋。
              </li>
            </ul>
          </div>

          <h2 className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">📍 地址</span>
              <p className="text-[#5d4037] text-sm mt-1">Ponte Vecchio, Florence</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">🕐 開放時間</span>
              <p className="text-[#5d4037] text-sm mt-1">24小時開放（店舖約10:00-19:00）</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">💰 費用</span>
              <p className="text-[#5d4037] text-sm mt-1">免費參觀</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">⭐ 評分</span>
              <p className="text-[#5d4037] text-sm mt-1">4.7/5.0（45,678 評論）</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">🚇 交通</span>
              <p className="text-[#5d4037] text-sm mt-1">步行即可（老城中心）</p>
            </div>
            <div className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
              <span className="text-[#8b4513] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#5d4037] text-sm mt-1">1-2小時</p>
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
            <Giscus />
          </div>


        </article>
      </div>
    </div>
  );
}