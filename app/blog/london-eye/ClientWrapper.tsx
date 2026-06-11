"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "history", title: "歷史密碼", emoji: "🔮" },
  { id: "capsules", title: "太空艙秘密", emoji: "🛸" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "sunset", title: "日落攻略", emoji: "🌅" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function LondonEyePage() {
  const [activeSection, setActiveSection] = useState("history");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-pink-900/95 to-purple-800/95 backdrop-blur-xl border border-pink-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-pink-500/10">
          <h3 className="text-sm font-bold text-pink-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30"
                      : "text-pink-200 hover:text-white hover:bg-pink-800/80"
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
          className="inline-flex items-center gap-2 text-pink-400 hover:text-white mb-8 transition-colors bg-pink-800/50 px-4 py-2 rounded-full hover:bg-pink-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-pink-500/30">
            🎡 英倫現代 · 泰晤士河畔
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-rose-300 bg-clip-text text-transparent">
            轉動在千禧年的浪漫：倫敦眼
          </h1>
          <h2 className="text-xl text-pink-400 font-semibold mb-4">終極打卡與高空落日觀景攻略</h2>
          <p className="text-pink-300">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG"
            alt="倫敦眼"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-pink-300 text-sm mb-12">
          ▲ 為了迎接千禧年而建、高達 135 米的全球首座巨型觀景摩天輪 —— 倫敦眼
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="history">
            如果說大笨鐘與國會大廈是倫敦沉穩、不朽的古典靈魂，那麼佇立在泰晤士河正對岸、宛如一隻巨型懸浮車輪的<strong>倫敦眼（The London Eye / 又稱千禧之輪 Millennium Wheel）</strong>，就是這座城市最摩登、最魔幻的現代眼睛。這座高達 135 米的巨型摩天輪，在 2000 年落成時曾是全球最大的摩天輪。當它以每秒 0.26 米的治癒速度緩緩轉動，帶你升上泰晤士河的上空，整個倫敦的天際線在腳下 360 度無死角地慢慢鋪開，那一刻的震撼與浪漫，簡直無可比擬。
          </p>
          <p>
            今日呢篇 Blog 就帶大家登上這座英倫超級地標，解鎖它背後一些非常有趣的數字冷知識，奉上攝影師私藏的兩大絕美拍照機位，並送上防排隊的無痛全攻略！
          </p>

          <h2>🔮 緩慢轉動的摩天輪：倫敦眼的 3 大歷史密碼</h2>

          <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🇬🇧 居然是個「臨時工」？差點被拆除的命運
            </h4>
            <p className="text-pink-100">
              你很難想像，如今貴為倫敦第一大收費觀光景點的倫敦眼，<strong>當初居然被規劃為只保留 5 年的「臨時建築」</strong>！當時倫敦政府只是想建一座地標來慶祝千禧年的到來，打算在 2005 年將其拆除。結果因為它落成後太受全球旅客歡迎，每天門庭若市，更瘋狂為倫敦帶來旅遊收益。最後，地方政府在強大輿論下決定給它頒發永久許可證，倫敦眼這才得以永久保留，成為泰晤士河畔不可或缺的風景。
            </p>
          </div>

          <h3 id="capsules">1. 消失的「13號」太空艙之謎</h3>
          <p>
            倫敦眼一共有 <strong>32個</strong> 標誌性的全玻璃封閉式流線型「太空艙（Capsules）」，每個太空艙可以容納約 25 名遊客。但如果你細心觀察每一隻太空艙上的編號，會驚奇地發現居然<strong>有 33 號，但卻找不到 13 號</strong>！這是因為西方文化中認為 "13" 是一個極度不吉利的數字。為了顧及遊客的心情與信仰，設計師特意跳過了 13 號，將第 13 個座艙直接編為 14 號，這也是英式幽默與貼心的一面。
          </p>

          <h3>2. 為什麼 32 個太空艙代表了整個倫敦？</h3>
          <p>
            為什麼不是 30 個或 35 個，偏偏精準地設計成 32 個太空艙呢？這背後其實隱藏著一個政治幾何學：32 這個數字完美代表了<strong>倫敦的 32 個行政區（London Boroughs）</strong>！坐上太空艙，就彷彿承載著整個倫敦的榮耀升上夜空。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
              alt="倫敦眼與西敏橋"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-pink-300 text-sm mt-4 mb-8">
              ▲ 西敏橋（Westminster Bridge）上，最經典的新舊倫敦符號碰撞視角
            </p>
          </div>

          <h2 id="photo-spots">📸 攝影師私藏：如何拍出刷爆社交媒體的「倫敦眼大片」</h2>
          <p>
            倫敦眼體積極其龐大，站在它正下方的草地上（Jubilee Gardens）往往只能拍到一小段局部的鐵架。想要拍到完美的同框照，這兩個機位才是精華：
          </p>
          <ul className="space-y-4 text-pink-100">
            <li className="flex gap-3">
              <span className="text-pink-400 text-xl">📍</span>
              <span><strong>西敏橋中段（Westminster Bridge）：新舊完美同框</strong><br/>走出 Westminster 地鐵站後踏上西敏橋。站在橋的行人路上、往倫敦眼方向步行約一分鐘。這裡擁有最完美的視覺壓縮感，你可以利用西敏橋古典的綠色鐵欄杆和復古路燈作為前景，將龐大現代的倫敦眼完整地框入鏡頭，拍出新舊倫敦強烈對比的英倫風大片。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400 text-xl">📍</span>
              <span><strong>維多利亞堤岸步道（Victoria Embankment）：隔岸靜謐全景</strong><br/>走到泰晤士河的對岸（大笨鐘那一側）沿著河岸步道往大橋方向散步。這裡人潮相對稀少，你可以利用河岸的古老石牆和沿路延伸的英倫行道樹作為構圖。每到入夜後，對岸倫敦眼的彩色燈光完美倒影在波光粼粼的泰晤士河面上，拍出來的照片帶有一種浪漫、深邃的歐式氛圍。</span>
            </li>
          </ul>

          <h2 id="sunset">🌅 自由行金律：挑選最完美的「轉動 30 分鐘」</h2>
          <p>
            倫敦眼轉完一圈大約需要 <strong>30分鐘</strong>。想要將這半小時發揮到極致，<strong>最完美的進場時間是「黃昏日落前 15 分鐘」</strong>！這樣一來，當你的太空艙缓缓升向最高點時，你剛好可以欣賞到整個倫敦被漫天粉橘色夕陽晚霞籠罩的溫柔瞬間；而當太空艙開始後半段下降時，天色剛好步入藍調（Blue Hour），大笨鐘、國會大廈、西敏橋的暖黃色夜燈會在眼皮底下紛紛點亮。這 30 分鐘，你同時體驗到了白晝、黃昏與倫敦繁華的夜景，絕對值回票價！
          </p>

          <div id="tips" className="bg-gradient-to-br from-pink-900/60 to-purple-900/50 border border-pink-400/30 rounded-2xl p-6 my-10">
            <h3 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 倫敦眼 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex gap-3">
                <span className="text-pink-400">🎟️</span>
                <span><strong>魔鬼排隊守則：絕對要買「快速通關門票 (Fast Track)」！</strong><br/>倫敦眼長年高居倫敦排隊最恐怖景點的分秒榜首。如果現場買普通票（Standard Ticket），旺季排隊往往需要 1.5 至 2 小時。強烈建議多花十多英鎊在官網或者旅遊平台提前購買「Fast Track 快速通關定時門票」，有專用通道，基本上 10 分鐘內就能進艙，省下的時間可以用來逛更多景點！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400">🎁</span>
                <span><strong>推薦購買聯票（Combo Tickets）：</strong>倫敦眼與旁邊的「倫敦地牢 (The London Dungeon)」、「倫敦水族館」以及「杜莎夫人蠟像館」屬於同一個娛樂集團。如果你計劃去其中幾個，購買聯票可以省下高達 30% 嘅門票費用，非常划算。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400">🛸</span>
                <span><strong>太空艙內完全不晃，請放心：</strong>許多恐高的朋友會擔心安全。倫敦眼的太空艙採用了高科技的內置微電腦平衡液壓系統，無論轉到什麼角度，座艙的地板都會<strong>百分之百保持水平且完全不會搖晃</strong>，艙內中央還設有舒適的木質長椅，非常安全舒服。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400">🚇</span>
                <span><strong>交通方式：</strong>乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>，出站後走過西敏橋，步行約 5 分鐘即可抵達；或者搭到 <strong>Waterloo（滑鐵盧站）</strong>，出站後順著 South Bank（南岸）方向步行 5 分鐘即達。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-pink-800/60 to-purple-800/60 rounded-xl p-4 border border-pink-700/50">
              <span className="text-pink-400 font-bold">📍 地址</span>
              <p className="text-pink-100 text-sm mt-1">Riverside Building, County Hall, London SE1 7PB</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/60 to-purple-800/60 rounded-xl p-4 border border-pink-700/50">
              <span className="text-pink-400 font-bold">🕐 開放時間</span>
              <p className="text-pink-100 text-sm mt-1">10:00-18:00（季節性調整）</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/60 to-purple-800/60 rounded-xl p-4 border border-pink-700/50">
              <span className="text-pink-400 font-bold">💰 費用</span>
              <p className="text-pink-100 text-sm mt-1">成人約 £30-40</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/60 to-purple-800/60 rounded-xl p-4 border border-pink-700/50">
              <span className="text-pink-400 font-bold">🚇 交通</span>
              <p className="text-pink-100 text-sm mt-1">地鐵 Westminster 站</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-pink-100 text-lg mb-4">
              👇 留言分享：你更想在粉橘色的夕陽下漫步泰晤士河畔，還是渴望和最愛的人在倫敦眼的太空艙裡看一場整點的繁華夜景呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-pink-800/60 border border-pink-700/50 rounded-xl px-4 py-3 text-white placeholder-pink-300 focus:outline-none focus:border-pink-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
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
      <Comments slug="london-eye" />
    </div>
  );
}