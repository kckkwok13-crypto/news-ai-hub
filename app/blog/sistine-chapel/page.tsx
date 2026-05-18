"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "世紀壁畫", emoji: "🎨" },
  { id: "genesis", title: "創世紀", emoji: "👆" },
  { id: "last-judgment", title: "最後審判", emoji: "⚖️" },
  { id: "rules", title: "鐵律禁忌", emoji: "🚨" },
  { id: "tips", title: "實用攻略", emoji: "💡" },
];

export default function SistineChapelPage() {
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
    <div className="min-h-screen bg-[#fcfaf7] text-[#2b2d42]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f0e6ef] to-[#fcfaf7] backdrop-blur-xl border border-[#b392ac]/40 rounded-2xl p-5 w-60 shadow-2xl shadow-[#735d78]/10">
          <h3 className="text-sm font-bold text-[#735d78] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#735d78] to-[#b392ac] text-white shadow-lg shadow-[#735d78]/30"
                      : "text-[#735d78]/70 hover:text-[#735d78] hover:bg-[#f0e6ef]"
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
          className="inline-flex items-center gap-2 text-[#735d78] hover:text-[#5d4780] mb-8 transition-colors bg-[#f0e6ef] px-4 py-2 rounded-full hover:bg-[#e6d8e6] border border-[#b392ac]/30"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b-2 border-[#b392ac]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#735d78] to-[#b392ac] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#735d78]/30">
            🎨 藝術朝聖 · 梵蒂岡密境
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1d2d44] leading-tight">
            🏛️ 神之筆觸的震撼：西斯汀小堂米開朗基羅壁畫全攻略
          </h1>
          <h2 className="text-xl text-[#735d78] font-semibold mb-4">Sistine Chapel</h2>
          <p className="text-[#8d99ae]">May 2026 · 作者：純粹旅人</p>
        </header>

        {/* Manga Character */}
        <div className="flex justify-center -mt-4 mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl shadow-xl shadow-[#735d78]/30 border-4 border-[#b392ac]/40">
            🎨
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#735d78]/20">
          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
            alt="西斯汀小堂穹頂壁畫"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#8d99ae] text-sm mb-12">
          ▲ 米開朗基羅獨自仰頭奮鬥四載完成的世紀天頂畫 —— 《創世紀》（Genesis）
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro">
            如果說教宗駐地的梵蒂岡是天主教的心臟，那麼位於梵蒂岡博物館最深處的簡樸天主教小堂 —— <strong>西斯汀小堂（Cappella Sistina / Sistine Chapel）</strong>，就是整個人類藝術史上最璀璨的皇冠。這裏不僅是紅衣主教團秘密選舉新教宗（Conclave）的神聖場所，更因為文藝復興巨匠<strong>米開朗基羅（Michelangelo）</strong>留下的兩幅不朽壁畫神作，而成為全世界藝術愛好者一生必去一次的終極聖殿。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度解讀壁畫背後的歷史與藝術密碼，傳授現場參觀的黃金聖經，並送上絕對不能踩雷的「魔鬼規則」指南！
          </p>

          <h2 id="genesis" className="text-[#1d2d44] text-2xl font-bold border-b-2 border-[#735d78] pb-2 mt-10 mb-4">🎨 世紀天才的靈魂吶喊：2 大必看神級壁畫</h2>
          
          <h3 className="text-[#3d5a80] text-xl font-semibold border-l-4 border-[#1d2d44] pl-3 mt-6 mb-3">1. 穹頂畫《創世紀》—— 指尖相觸的永恆瞬間</h3>
          <p>
            西斯汀小堂最著名的莫過於天頂畫《創世紀》。公元 1508 年，原本是雕刻家的米開朗基羅被教宗強烈要求繪製這面長 40 米、寬 14 米的巨大穹頂。他拒絕了助手的幫忙，獨自一人在高聳的鷹架上，長年累月仰著頭、任憑顏料滴落在臉上，近乎失明地畫下了 9 幅聖經故事與 300 多個人物。最核心的一幅<strong>《創造亞當》 (The Creation of Adam)</strong>，上帝與亞當那即將觸碰卻留有微小縫隙的指尖，完美詮釋了生命與神性的誕生，震撼了後世五百年。
          </p>

          <h3 id="last-judgment" className="text-[#3d5a80] text-xl font-semibold border-l-4 border-[#1d2d44] pl-3 mt-6 mb-3">2. 祭壇畫《最後的審判》—— 悲壯與救贖的史詩</h3>
          <p>
            在畫完天頂畫 24 年後，歷經滄桑的米開朗基羅再度回到小堂，在祭壇正後方的整面大牆上創作了《最後的審判》(The Last Judgment)。畫面中基督威嚴地舉起手，決定人類的升天與下地獄。整幅畫充滿了動盪、力量與悲壯美。<strong>藝術細節：</strong>你可以細心尋找被剝皮的聖巴多羅買，他手上拿著的那張人皮面具，據說正是米開朗基羅當年在極度痛苦中畫下的自我肖像。
          </p>

          {/* Vatican Museums Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
              alt="西斯汀小堂內部壁畫全景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#8d99ae] text-sm mt-4 mb-8">
              ▲ 西斯汀小堂內部全景，仰望穹頂感受米開朗基羅筆下的神之國度
            </p>
          </div>

          {/* Warning Box */}
          <div id="rules" className="bg-[#fff5f5] border-l-5 border-[#e63946] p-5 rounded-r-lg my-10">
            <h4 className="text-[#e63946] font-bold text-lg mb-3">🚨 鐵律警告：西斯汀小堂內「兩大最高禁忌」！</h4>
            <p className="mb-3">西斯汀小堂的參觀規則全歐洲最為嚴厲，現場會有數十名保安極其嚴格地監督。進去前請務必將以下兩點刻進腦海，否則會被立刻驅逐出場：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>絕對嚴禁拍照與錄影（NO PHOTO）：</strong>無論是否開啟閃光燈、無論是用單反還是手機、甚至是偷偷拍一秒，都是<strong>絕對禁止</strong>的！這是為了保護脆弱的古老壁畫免受光線損害，同時保持宗教聖地的莊嚴。</li>
              <li><strong>絕對保持徹底肅靜（SILENCE）：</strong>小堂內禁止任何交談、私語或導覽解說。保安會不停用擴音器嚴厲地發出 <em>"Silence!"</em> 同 <em>"No photo!"</em> 的警告。來到這裡，請用你的眼睛和心靈去感受藝術的震撼。</li>
            </ul>
          </div>

          <h2 id="tips" className="text-[#1d2d44] text-2xl font-bold border-b-2 border-[#735d78] pb-2 mt-10 mb-4">🗺️ 自由行金律：如何規劃最完美的「朝聖黃金路線」</h2>
          <p>
            西斯汀小堂沒有獨立門票，它包含在<strong>梵蒂岡博物館 (Vatican Museums)</strong> 的門票之內。因為博物館面積龐大，如果沿著普通路線慢慢看，走到最深處的西斯汀小堂時往往已經精疲力竭、且人群爆滿。<strong>聰明人的黃金走法：</strong>早上進館後，直接無視沿途的其他展廳，順著指示牌上的 "Short Route to Sistine Chapel"（快捷路線）一路快步直奔小堂！趁旅行團大軍未到，在清靜的小堂內靜坐 20 分鐘，細細仰望天頂，才不虛此行。之後再倒回去慢慢參觀地圖廊和拉斐爾畫室。
          </p>

          {/* Tips Panel */}
          <div className="bg-[#1d2d44] text-[#f1faee] p-6 rounded-lg my-10 shadow-xl">
            <h3 className="text-[#a8dadc] font-bold text-lg mb-4 border-b border-[#457b9d] pb-2">💡 西斯汀小堂 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>服裝檢查（Dress Code）：</strong>與曼谷大皇宮類似，這裏同樣有嚴格的宗教服裝限制：肩膀和膝蓋絕對不能外露。嚴禁穿小背心、吊帶衫、超短裙或短褲進場。</li>
              <li><strong>必須提前 1-2 個月官網預訂：</strong>現場排隊買票的隊伍往往長達數公里，圍繞著梵蒂岡城牆繞幾圈，夏天甚至會曬到中暑。請務必提前在梵蒂岡博物館官網預約「定時入場門票 (Timed Entrance Ticket)」。</li>
              <li><strong>交通方式：</strong>乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong> 或 <strong>Cipro 站</strong>，出站後步行約 10 分鐘即可抵達梵蒂岡博物館的入口大門。</li>
            </ul>
          </div>

          <p className="text-center font-bold text-[#1d2d44] text-lg mt-12 mb-8">
            👇 留言分享：雖然現場完全不能留影，但你認為米開朗基羅用靈魂畫下的震撼，會永遠烙印在你的腦海中嗎？
          </p>
        </article>
      </div>
    </div>
  );
}