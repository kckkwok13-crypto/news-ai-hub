"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🕰️" },
  { id: "history", title: "歷史密碼", emoji: "🔑" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "parliament", title: "國會大廈", emoji: "🏛️" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["倫敦", "英國", "打卡"];

export default function BigBenPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 text-white">
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            🏴 英倫風情 · 帝國地標
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            聆聽英倫的時光心跳
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">倫敦大笨鐘（Big Ben）深度打卡與泰晤士河散策攻略</h2>
          <p className="text-slate-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80"
            alt="倫敦大笨鐘"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-slate-500 text-sm mb-12">
          ▲ 歷經數年匠心大修、重現普魯士藍與金箔光芒的倫敦永恆圖騰 —— 大笨鐘
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果說有一座建築，單憑它那沉穩悠揚的鐘聲就能代表整個英國，那絕對非矗立在泰晤士河畔的<strong>大笨鐘（Big Ben / 正式名稱為伊麗莎白塔 Elizabeth Tower）</strong>莫屬。這座落成於 1859 年的哥德復興式巨型時鐘塔，高 96 米，幾百年間默默見證了日不落帝國的風雨變遷。
          </p>
          <p>
            前幾年大笨鐘經歷了歷史上最漫長、最精細的五年大維修，當它終於在世人面前揭開面紗，重現當年維多利亞時代經典的普魯士藍指針與純金金箔時，那份優雅與莊嚴再度驚艷了全球。
          </p>

          <div id="history" className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⏰ 霧都的精準計時：大笨鐘的 3 大歷史密碼
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. 「大笨鐘」其實不是這座塔的名字？</h4>
            <p className="text-slate-300">
              這是一個非常經典的旅遊誤區！我們平日口中所叫的「大笨鐘」，其實既不是指這座美麗的石塔，也不是指外面的四面時鐘，而是藏在塔樓內部、重達 13.7 噸的<strong>巨型青銅正點報時鐘（The Great Bell）</strong>！至於這座鐘樓塔本身，在 2012 年為了慶祝英女王伊麗莎白二世登基六十週年，已經正式更名為<strong>「伊麗莎白塔」（Elizabeth Tower）</strong>。不過因為大笨鐘這個名字太深入民心，大家還是習慣這樣親切地稱呼它。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. 精準度的秘密 —— 居然是用「舊便士硬幣」來調節？</h4>
            <p className="text-slate-300">
              大笨鐘以其驚人的精準度聞名於世，即使歷經二戰德軍轟炸，它的誤差也從未超過一秒。但你知道它是如何調節速度的嗎？大笨鐘的鐘擺頂端放置了一疊<strong>英國舊版的一便士硬幣（Pennies）</strong>！如果時鐘走快了或走慢了，鐘錶師就會走上幾百級樓梯，在鐘擺上增加或拿走一枚硬幣。增加一枚硬幣會使鐘擺的重心微調，從而每天改變時鐘速度約 0.4 秒。這種傳統而奇妙的手動微調法一直沿用至今。
            </p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                ✨ 夜幕限定：大笨鐘頂端的「綠色艾爾頓燈」（Ayrton Light）
              </h4>
              <p className="text-slate-300">
                當夜幕低垂，大笨鐘的四面乳白色玻璃錶盤會亮起溫柔的金黃色燈光。而如果你細心留意塔樓的最頂端，有時會亮起一盞神祕的<strong>綠色燈光</strong>。這盞燈被稱為「艾爾頓燈」，它的作用非常有趣：只要英國國會（Palace of Westminster）在日落後仍在挑燈夜戰開會，這盞綠燈就會一直亮起，告訴全倫敦市民「議員們正在為國家工作」。
              </p>
            </div>
          </div>

          <h2 id="photo-spots">📸 攝影師私藏：大笨鐘 4 大終極打卡機位</h2>
          <p>
            大笨鐘周邊長年人潮洶湧，想要拍出刷爆社交媒體的英倫大片，以下四個角度請一定要收藏好：
          </p>

          <h3>① 西敏橋上（Westminster Bridge）—— 經典動態流線</h3>
          <p>
            站在橋上的行人路靠國會大廈那一側。這裡是最經典的視角，你可以拍到大笨鐘與泰晤士河的完美同框。如果使用慢快門，還能捕捉到倫敦經典紅色雙層巴士（Red Double-Decker Bus）化作一道紅色流光劃過大笨鐘腳下的震撼畫面。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
              alt="倫敦夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4 mb-8">
              ▲ 泰晤士河畔的經典倫敦夜景，大笨鐘與國會大廈在夜幕中閃耀
            </p>
          </div>

          <h3>② 大中央喬治街（Great George St）—— 紅色電話亭同框</h3>
          <p>
            往西敏寺方向走一點，在 Great George Street 附近有幾座整齊排列的<strong>英倫經典紅色電話亭</strong>。把相機放低，利用電話亭作為鮮艷的前景框住遠處的大笨鐘，這是全倫敦最具代表性的雙重英倫符號同框位！
          </p>

          <h3>③ 泰晤士河南岸拱門（St Thomas' Hospital 橋底）—— 復古幾何相框</h3>
          <p>
            走過西敏橋來到南岸（倫敦眼那一側），在橋底隱藏著一個由綠色植物和石頭砌成的<strong>古老拱門通道</strong>。站在拱門深處往對岸拍去，黑暗的拱門輪廓剛好變成一個天然的復古幾何相框，將明亮的大笨鐘完美框在正中央，意境滿分！
          </p>

          <div id="parliament" className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🏛️ 順游加碼：如何走進國會大廈內部
            </h3>
            <p className="text-slate-300">
              大笨鐘連接著宏偉的西敏宮（國會大廈）。雖然大笨鐘內部目前只開放給英國居民預約攀登，但作為外國遊客，你絕對可以<strong>買票進入國會大廈內部參觀</strong>！裡面擁有上百年歷史的西敏廳（Westminster Hall）、金碧輝煌的上议院與下议院。看著電視裡議員們激烈辯論的綠色長椅真實呈現在眼前，那種歷史厚重感絕對會讓你大開眼界。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 倫敦大笨鐘 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400">🎟️</span>
                <span><strong>提早網上預約國會門票：</strong>如果你想進國會大廈內部，務必提前 1-2 個月在英國國會官網購買 "Palace of Westminster Tour" 門票（可選擇語音導覽或人工導覽），現場排隊非常浪費時間。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>注意橋上的「猜波仔」騙局：</strong>在西敏橋上（大笨鐘正前方），常年有許多外籍團伙擺攤玩「三個杯猜小球/小玉米」的賭博遊戲。這<strong>100%是連環偷竊與詐騙團伙</strong>！周邊圍觀起哄落注的全部是他們的同伙「托」，千萬不要湊熱鬧，更不要落注，否則包包隨時會被割開。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌅</span>
                <span><strong>最佳夜拍時間：</strong>推薦在<strong>日落後的半小時（藍調時刻 Blue Hour）</strong>前來。這時候天空呈現深邃的皇家藍，而大笨鐘與西敏橋的燈光剛好全開，金黃與深藍的強烈對比拍出來的夜景最為迷人。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>交通方式：</strong>極其便利！乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>。出站時順著月台的巨型鋼鐵扶手電梯往上走，一走出地面，大笨鐘巨大的身影就會在距離你不到十米的位置直接震撼現身！</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">📍 地址</span>
              <p className="text-slate-300 text-sm mt-1">Westminster, London SW1A 0AA</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">🕐 開放時間</span>
              <p className="text-slate-300 text-sm mt-1">國會導覽 9:15-16:30</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">💰 費用</span>
              <p className="text-slate-300 text-sm mt-1">國會導覽 約 £30 起</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">⭐ 評分</span>
              <p className="text-slate-300 text-sm mt-1">4.8/5.0（89,234 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">🚇 交通</span>
              <p className="text-slate-300 text-sm mt-1">地鐵 Westminster 站</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
              <span className="text-blue-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-slate-300 text-sm mt-1">1-2小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              👇 你最想在西敏橋上拍一張紅色巴士與大笨鐘的合照，還是想在泰晤士河畔聽一場正點的鐘聲迴盪呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          {/* Star Rating */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="big-ben" />
          </div>

          {/* Social Share */}
          <div className="bg-slate-800/60 rounded-2xl p-6 my-10 border border-slate-700/50">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🕰️ 聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略"
            />
          </div>

          {/* Favorite Button */}
          <div className="flex justify-center my-8">
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 flex items-center gap-4">
              <span className="text-slate-300">加入心願清單：</span>
              <FavoriteButton slug="big-ben" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug="big-ben" currentTags={currentTags} />
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="big-ben" />
</div>
  );
}