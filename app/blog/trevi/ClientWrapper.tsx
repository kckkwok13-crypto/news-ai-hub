"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "⛲" },
  { id: "architecture", title: "巴洛克美學", emoji: "🔱" },
  { id: "wishing", title: "許願傳說", emoji: "🔮" },
  { id: "photo-spot", title: "拍攝攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function TreviFountainPage() {
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
    <div className="min-h-screen bg-[#f7fbe] text-[#2c3e50]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#e6f2ff] to-[#f7fbe] backdrop-blur-xl border border-[#3a86c8]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#3a86c8]/10">
          <h3 className="text-sm font-bold text-[#3a86c8] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#3a86c8] to-[#5a9fd4] text-white shadow-lg shadow-[#3a86c8]/30"
                      : "text-[#2c3e50]/70 hover:text-[#1a365d] hover:bg-[#e6f2ff]"
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
          className="inline-flex items-center gap-2 text-[#3a86c8] hover:text-[#1a365d] mb-8 transition-colors bg-[#e6f2ff] px-4 py-2 rounded-full hover:bg-[#d0e8ff] border border-[#3a86c8]/20"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b-2 border-[#3a86c8]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a86c8] to-[#5a9fd4] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#3a86c8]/30">
            ⛲ 歐洲浪漫行 · 羅馬地標
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a365d]">
            把心願留給羅馬：特萊維噴泉深度打卡與完美許願全攻略
          </h1>
          <h2 className="text-xl text-[#3a86c8] font-semibold mb-4">全球最著名的巴洛克式許願池</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#3a86c8]/20">
          <img
            src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80"
            alt="特萊維噴泉"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1607028693938-e63250910b2d?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#4a5568] text-sm mb-12">
          ▲ 電影《羅馬假期》（Roman Holiday）的浪漫縮影 —— 全球最著名的巴洛克式許願池
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify text-lg leading-9">
            如果說羅馬鬥獸場展現了歷史的殘酷與史詩，那麼隱藏在錯綜複雜小巷中的<strong>特萊維噴泉（Fontana di Trevi / 俗稱羅馬許願池）</strong>，則承載了這座城市所有的浪漫與溫柔。這座落成於 1762 年的巨型巴洛克風格噴泉，高 26 米、寬 49 米，氣勢磅礡。當你穿過狹窄的街道，耳邊傳來隆隆的水聲，眼前的視野突然豁然開朗，那一面如交響樂般震撼的大理石群雕與湛藍清澈的泉水，絕對會讓你屏住呼吸。
          </p>
          <p className="text-[#2c3e50] text-justify text-lg leading-9">
            今日呢篇 Blog 就帶大家深度鑑賞這座藝術巔峰之作，傳授最正宗的「投幣許願大法」，並送上避開人潮與防範小偷的超強自由行秘笈！
          </p>

          <h2 id="architecture" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            🔱 巴洛克美學：3 大必看雕像歷史密碼
          </h2>
          
          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#3a86c8] pl-4">
            1. 正中央的主角 —— 威風凜凜的「海神」
          </h3>
          <p className="text-[#2c3e50] text-justify text-lg leading-9">
            整個噴泉的背景是宏偉的波利宮（Palazzo Poli）凱旋門，而站在正中央宮殿神龕裏的，就是古羅馬神話中的<strong>海神涅普頓 (Neptune)</strong>。他身披戰袍，右手揮舞，神態威嚴，彷彿正在指揮着前方澎湃咆哮的泉水，展現出巴洛克藝術最核心的「動態美感」。
          </p>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#3a86c8] pl-4">
            2. 左右兩側的馴馬神職 —— 象徵海洋的兩種性格
          </h3>
          <p className="text-[#2c3e50] text-justify text-lg leading-9">
            在海神腳下，有兩位手拉着帶翼海馬的半人半魚神職。細心觀察會發現：左邊的那匹海馬桀驁不馴，神職正竭力馴服它，這象徵着<strong>暴風雨中波濤洶湧的海洋</strong>；而右邊的那匹海馬則溫順乖巧，象徵着<strong>風平浪靜、祥和的海洋</strong>。這對比極具戲劇張力。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1607028693938-e63250910b2d?w=1200&q=80"
              alt="特萊維噴泉夜景"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1660864112847-f34b0ef9c27a?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#4a5568] text-sm mt-4 mb-8">
              ▲ 夕陽西下，噴泉亮起淡黃色夜燈，主角背對鏡頭站在許願池最前排的石階邊，右手正準備向後拋出硬幣的側影
            </p>
          </div>

          <div className="bg-[#f0f7ff] border border-[#b3d7ff] p-6 my-10 rounded-xl">
            <h4 className="text-[#1a365d] font-bold mb-4 text-xl flex items-center gap-2">
              🔮 浪漫傳說：正宗「羅馬許願池」投幣三部曲
            </h4>
            <p className="text-[#2c3e50] text-lg leading-9 mb-4">
              據說只要按照正確的方法在特萊維噴泉許願，願望就一定會實現。傳說中的投幣規則非常有趣：
            </p>
            <ol className="text-[#2c3e50] text-lg leading-9 space-y-3 pl-6 list-decimal list-inside">
              <li><strong>第一枚硬幣：</strong>必須背對噴泉，右手拿著硬幣，從<strong>左肩膀上方</strong>往後投入池中。這代表著「你此生一定會再次回到羅馬」。</li>
              <li><strong>第二枚硬幣：</strong>如果你想祈求愛情，投下第二枚硬幣，代表你將會「遇見一段浪漫的義大利戀情，或與心上人修成正果」。</li>
              <li><strong>第三枚硬幣：</strong>代表著「希望能順利結婚或離婚」（笑）。</li>
            </ol>
            <p className="text-[#4a5568] text-sm mt-4 italic">
              💡 小貼士：據統計，許願池每天能撈出高達 3000 歐元的硬幣！這些錢全部分分秒秒由羅馬市政府收集，用作慈善用途（資助當地的流浪漢與貧困家庭），所以你的許願同時也在做善事喔！
            </p>
          </div>

          <h2 id="wishing" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            📸 避坑防牛：如何拍出無人的「包場」神級大片
          </h2>
          <p className="text-[#2c3e50] text-justify text-lg leading-9">
            因為許願池不收門票且 24 小時開放，從中午到深夜這裡永遠擠得水洩不通、連站腳的地方都沒有。想要拍到像電影《羅馬假期》那樣乾淨純粹的畫面，唯一的秘籍就是<strong>「清晨 6:30 至 7:30 前來」</strong>！這時候羅馬剛甦醒，白色的雕像在晨光下顯得格外聖潔，而且完全沒有人，你可以在最前排肆意變換姿勢拍照！
          </p>

          <h2 id="photo-spot" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            🍦 順道必吃：百年冰淇淋名店
          </h2>
          <p className="text-[#2c3e50] text-justify text-lg leading-9">
            來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>"Giolitti"</strong> 或者 <strong>"Gelateria San Crispino"</strong> 買一杯正宗的義大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！
          </p>

          <div className="bg-[#1a365d] text-[#f7fafc] p-6 my-10 rounded-xl shadow-2xl">
            <h3 className="text-[#cbd5e0] font-bold mb-4 text-xl border-b border-[#2b6cb0] pb-2">
              💡 特萊維噴泉 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="border-b border-[#2b6cb0] pb-3">
                <strong className="text-[#90cdf4]">嚴防扒手與坐姿限制：</strong>這裡人潮極度密集，是全羅馬小偷、扒手最喜歡下手的地方，許願和拍照時請務必看管好財物。另外，為了保護古蹟，<strong>絕對不可以坐在噴泉的白色大理石邊沿</strong>，周邊隨時有警察吹哨子警告或罰款，請大家注意喔！
              </li>
              <li className="border-b border-[#2b6cb0] pb-3">
                <strong className="text-[#90cdf4]">順道必吃 Gelato：</strong>來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>"Giolitti"</strong> 或者 <strong>"Gelateria San Crispino"</strong> 買一杯正宗的義大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！
              </li>
              <li>
                <strong className="text-[#90cdf4]">交通方式：</strong>乘搭羅馬地鐵 A 線（Linea A）至 <strong>Barberini 站</strong>，出站後跟著指示牌步行約 8-10 分鐘穿過幽靜小巷即可抵達。
              </li>
            </ul>
          </div>

          <h2 className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">📍 地址</span>
              <p className="text-[#2c3e50] text-sm mt-1">Piazza di Trevi, Rome</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">🕐 開放時間</span>
              <p className="text-[#2c3e50] text-sm mt-1">24小時開放</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">💰 費用</span>
              <p className="text-[#2c3e50] text-sm mt-1">免費（許願需硬幣）</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">⭐ 評分</span>
              <p className="text-[#2c3e50] text-sm mt-1">4.7/5.0（76,543 評論）</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">🚇 交通</span>
              <p className="text-[#2c3e50] text-sm mt-1">Metro A線 Barberini站</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2c3e50] text-sm mt-1">30分鐘</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-[#f0f7ff] border border-[#3a86c8]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#3a86c8] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#2c3e50] text-lg mb-4">
              👇 留言分享：如果你手裡有一枚硬幣，你最想背著特萊維噴泉許下什麼願望呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-[#b3d7ff] rounded-xl px-4 py-3 text-[#2c3e50] placeholder-[#94a3b8] focus:outline-none focus:border-[#3a86c8] transition-colors"
              />
              <button className="bg-gradient-to-r from-[#3a86c8] to-[#5a9fd4] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="trevi" />
</div>
  );
}