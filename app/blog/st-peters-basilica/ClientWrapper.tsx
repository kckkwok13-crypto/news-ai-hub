"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🏛️" },
  { id: "treasures", title: "鎮殿之寶", emoji: "⚜️" },
  { id: "climb", title: "登頂攻略", emoji: "🧗" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function StPetersBasilicaPage() {
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
    <div className="min-h-screen bg-[#faf9f6] text-[#2b2b2b]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f1ea] to-[#faf9f6] backdrop-blur-xl border border-[#c5a059]/40 rounded-2xl p-5 w-60 shadow-2xl shadow-[#af8b44]/10">
          <h3 className="text-sm font-bold text-[#af8b44] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#1a2530] to-[#c5a059] text-white shadow-lg shadow-[#c5a059]/30"
                      : "text-[#1a2530]/70 hover:text-[#1a2530] hover:bg-[#f4f1ea]"
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
          className="inline-flex items-center gap-2 text-[#af8b44] hover:text-[#8b7355] mb-8 transition-colors bg-[#f4f1ea] px-4 py-2 rounded-full hover:bg-[#ede5d5] border border-[#c5a059]/30"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12 border-b-2 border-[#c5a059]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a2530] to-[#af8b44] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#c5a059]/30">
            🏛️ 世紀建築 · 藝術朝聖
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2530] leading-tight">
            ⚜️ 登臨信仰與藝術的最高峰：聖伯多祿大殿深度探秘與登頂攻略
          </h1>
          <h2 className="text-xl text-[#af8b44] font-semibold mb-4">St. Peter's Basilica</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#c5a059]/20">
          <img
            src="https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80"
            alt="聖伯多祿大殿穹頂鳥瞰"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-[#5c6b73] text-sm mb-12">
          ▲ 站在大殿巨型穹頂之巔，俯瞰由貝尼尼設計、如兩隻巨大手臂環抱的「聖伯多祿廣場」鑰匙造型全景
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro">
            無論你是否擁有天主教信仰，當你踏入<strong>聖伯多祿大殿（St. Peter's Basilica / 又稱聖彼得大教堂）</strong>的那一刻，那種直擊心靈的宏偉與神聖感，絕對會讓你目瞪口呆。這座歷時 120 年才建造完成、可容納超過六萬人的天主教朝聖狂熱中心，是全球面積最大、地位最神聖的教堂。這裏集合了文藝復興與巴洛克時期無數大師（布拉曼特、拉斐爾、米開朗基羅、貝尼尼）的畢生心血，是當之無愧的藝術與建築奇蹟。
          </p>
          <p>
            今天呢篇 Blog 就帶大家走進這座宗教聖殿，解鎖三大「鎮殿之寶」的歷史細節，並送上完美的「登頂俯瞰上帝視角」超實用購票與排隊攻略！
          </p>

          <h2 id="treasures" className="text-[#1a2530] text-2xl font-bold border-b-2 border-[#c5a059] pb-2 mt-10 mb-4">
            ⚜️ 朝聖大師足跡：不可不知的三大鎮殿之寶
          </h2>
          <p>
            穿過宏偉的大門步入大殿，高聳的穹頂、繁複的金箔與五彩斑斕的巨幅馬賽克壁畫交織在一起。在這裏，有三件殿堂級藝術品你一定要停下腳步細細品味：
          </p>

          <div className="bg-[#f4f1ea] border-l-5 border-[#c5a059] p-5 rounded-r-lg my-8">
            <h4 className="text-[#1a2530] font-bold text-lg mb-3">1. 米開朗基羅 24 歲神作 —— 《哀悼基督》（Pietà）</h4>
            <p>
              位於大殿右手邊的第一個小堂裏，護欄後保護著米開朗基羅最溫柔的雕刻傑作。他用堅硬的大理石，雕刻出聖母瑪利亞懷抱著剛從十字架上放下的基督。聖母神情悲傷而祥和，其衣服的褶皺與基督大理石肌肉的鬆弛感，細緻得如同真實肌膚。<strong>歷史祕辛：</strong>這也是米開朗基羅一生中**唯一一件有親筆簽名**的作品（簽在聖母胸前的衣帶上）。
            </p>
          </div>

          <h3 className="text-[#34495e] text-xl font-semibold border-l-4 border-[#c5a059] pl-3 mt-6 mb-3">2. 貝尼尼萬鈞雷霆之作 —— 《青銅華蓋》（Baldacchino）</h3>
          <p>
            正對著大殿正中央、位於祭壇上方的是高達 29 米（相當於 10 層樓高）的巨型青銅華蓋。這座由巴洛克大師貝尼尼設計的傑作，用了足足 37 噸青銅打造（材料甚至取自羅馬萬神殿）。它四根螺旋狀的巨柱直插雲霄，頂部雕刻著華麗的浮雕與天使，華蓋正下方就是聖伯多祿（聖彼得）的陵墓所在地，氣勢驚人。
          </p>

          <h3 className="text-[#34495e] text-xl font-semibold border-l-4 border-[#c5a059] pl-3 mt-6 mb-3">3. 聖伯多祿寶座（Cathedra Petri） —— 聖光下的榮耀</h3>
          <p>
            緊鄰華蓋後方的祭壇深處，同樣是由貝尼尼設計的聖伯多祿寶座。鍍金的青銅寶座被四位教會聖師高高托起，而最上方是一面極其精美的黃色透光彩色玻璃，中央雕刻著一隻象徵聖靈的白鴿。每當下午陽光穿透這面玻璃灑落在大殿內，金光四射，彷彿神蹟降臨。
          </p>

          {/* Interior Light Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80"
              alt="大殿內部聖光"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#5c6b73] text-sm mt-4 mb-8">
              ▲ 午後陽光形成巨大的「上帝之光」（耶穌光），從米開朗基羅設計的巨型天窗傾瀉而下
            </p>
          </div>

          <h2 id="climb" className="text-[#1a2530] text-2xl font-bold border-b-2 border-[#c5a059] pb-2 mt-10 mb-4">
            🧗‍♂️ 終極冒險：挑戰 551 級樓梯！聖殿登頂指南
          </h2>
          <p>
            來到聖伯多祿大殿，除了在地面的大殿參拜，最精彩的體驗莫過於**「挑戰登頂 (Cupola Climb)」**！登頂分為兩個階段：你可以選擇乘搭電梯或者純步行先來到穹頂底部的內部看台，在這裡你可以近距離俯瞰大殿內部，並看清那些在地面看不清的巨幅馬賽克拼貼畫。接著，你必須踏上最後 320 級**越來越窄、甚至需要側身前行的傾斜迴旋石梯**。當你終於推開大門來到露天觀景台，眼前那一幅全無遮擋、向著羅馬無限延伸的壯麗全景，絕對會讓你覺得大汗淋漓的攀登完全物超所值！
          </p>

          {/* Tips Panel */}
          <div id="tips" className="bg-[#1a2530] text-[#f8fafc] p-6 rounded-lg my-10 shadow-xl">
            <h3 className="text-[#c5a059] font-bold text-lg mb-4 border-b border-[#334155] pb-2">
              💡 聖伯多祿大殿 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>大殿免費！但必須提早排隊：</strong>聖伯多祿大殿本身是**完全免費參觀**的。但也正因如此，廣場上的安檢隊伍每天都人山人海，繞著廣場排幾圈。<strong>強烈建議在早上 7:00 至 7:30 抵達廣場</strong>，這時候幾乎不需要排隊，進場最無痛！</li>
              <li><strong>服裝限制極度嚴格：</strong>與梵蒂岡博物館和西斯汀小堂一樣，短褲、迷你裙、吊帶背心一律不准入內。肩膀和膝蓋必須完全遮蓋，現場檢查非常嚴格。</li>
              <li><strong>登頂購票須知：</strong>登頂是需要另外付費的（乘搭電梯至半山再爬樓梯約 10 歐元；全程純爬樓梯約 8 歐元）。登頂售票處位於進大殿安檢後的右手邊，目前現場只接受現金或部分信用卡。</li>
              <li><strong>交通方式：</strong>乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong>，出站後跟著指示牌步行約 10-12 分鐘即可穿過協和大道抵達聖伯多祿廣場。</li>
            </ul>
          </div>

          <p className="text-center font-bold text-[#af8b44] text-lg mt-12 mb-8">
            👇 留言分享：你更想欣賞米開朗基羅二十多歲時雕刻的《哀悼基督》，還是想挑戰那 551 級狹窄的登頂樓梯呢？
          </p>
        </article>
      </div>
    </div>
  );
}
