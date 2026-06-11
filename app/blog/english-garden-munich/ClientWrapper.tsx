"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "experiences", title: "經典體驗", emoji: "🌊" },
  { id: "photography", title: "攝影攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function EnglishGardenMunichPage() {
  const [activeSection, setActiveSection] = useState("experiences");

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-emerald-50/95 to-green-100/95 backdrop-blur-xl border border-emerald-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-emerald-500/10">
          <h3 className="text-sm font-bold text-emerald-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                      : "text-emerald-700 hover:text-emerald-900 hover:bg-emerald-200/50"
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
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 mb-8 transition-colors bg-emerald-100 px-4 py-2 rounded-full hover:bg-emerald-200"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-emerald-500/30">
            🌲 德意志漫遊 · 綠意城市公園
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            城市中心的自然狂歡
          </h1>
          <h2 className="text-xl text-emerald-700 font-semibold mb-4">慕尼黑英國花園（Englischer Garten）深度散策與冰川衝浪攻略</h2>
          <p className="text-stone-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20">
          <img
            src="https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1200&q=80"
            alt="慕尼黑英國花園"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-stone-500 text-sm mb-12">
          ▲ 佔地高達 3.7 平方公里、面積甚至超越紐約中央公園嘅全歐洲最大城市公園 —— 英國花園
        </p>

        <article className="prose prose-stone prose-lg max-w-none">
          <p id="intro">
            如果說瑪利亞廣場展現了慕尼黑古典而繁華的中世紀靈魂，那麼位於老城東北側、廣袤無垠的<strong>英國花園（Englischer Garten / English Garden）</strong>，則是這座德國南部大城最放鬆、最親近大自然的呼吸之肺。這座始建於 1789 年的巨型公園，之所以叫「英國花園」，是因為它採用了維多利亞時代崇尚大自然、不拘泥於幾何線條的英國鄉村園林風格。在這裡，你可以躺在草地上野餐，看著天鵝在湖面游弋，甚至能目睹一場奇幻的「城市河道衝浪」，充滿了不可思議的活力！
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度走入這個慕尼黑的第一大花園綠洲，解鎖不可錯過的兩大靈魂地標，並奉上近距離拍攝衝浪大片嘅私藏指南！
          </p>

          <h2 id="experiences">🌊 綠野仙蹤與冰川衝浪：英國花園 3 大經典體驗</h2>

          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-slate-800 font-bold mb-4 flex items-center gap-2 text-xl">
              🏄‍♂️ 離海千里之外嘅奇蹟 —— 艾斯巴赫河「人工冰川衝浪」（Eisbachwelle）
            </h4>
            <p className="text-stone-700">
              這絕對是全歐洲、甚至全世界最瘋狂嘅城市街頭奇觀！在英國花園最南端的入口處（緊鄰藝術之家博物館），有一條叫艾斯巴赫（Eisbach）的急流冰川小河。因為河床落差，在橋底冷不防形成了一個高約 1 米的<strong>永久性急流逆向沖天人工巨浪</strong>！幾十年間，這裡變成了全球滑浪好手的「朝聖天堂」。無論春夏秋冬甚至是大雪紛飛的嚴冬，你都會看到穿著防寒潛水衣、抱著衝浪板的型男索女在這裡排隊，一個接一個跳進狹窄的河道中逆流激浪、大展身手！站在上方的石橋上向下看，激起的水花甚至會拍打到你的臉上，視覺震撼力與動感直逼爆錶！
            </p>
          </div>

          <h3>1. 圓頂希臘神廟（Monopteros）—— 360 度鳥瞰綠海的制高點</h3>
          <p>
            散步穿過開闊的草坪，你會看到一座矗立在小山丘上的白色圓形希臘式涼亭 —— Monopteros。這座落成於 1836 年的古典新古典主義建築，是花園裡的制高點。強烈建議走上山丘！站在石柱廊下，你可以 360 度無遮擋地飽覽腳下如汪洋大海般的翠綠森林與草地，遠處還能隱隱望見慕尼黑老城教堂的洋蔥頭尖頂，這裡是拍攝文藝治癒風人像照片的無冕之王。
          </p>

          <h3>2. 古典中國塔（Chinesischer Turm）—— 在全城最大啤酒花園喝一杯</h3>
          <p>
            很難想像在德國古老的公園中央，居然聳立著一座高達 25 米、全木造的<strong>五層精緻中國古塔</strong>！這座塔建於 1789 年，當年歐洲貴族極度迷戀神祕的東方中國風，於是便依葫蘆畫瓢蓋了這座高塔。如今中國塔圍繞著全慕尼黑第二大、可容納高達 7000 人的<strong>巨型露天啤酒花園 (Beer Garden)</strong>！每到週末，高塔二樓會有傳統的巴伐利亞銅管樂隊現場吹奏歡快的樂章，你可以像當地人一樣，買一公升皇家生啤酒，配上一隻巨大的德式椒鹽卷餅（Prezel），在樹蔭下享受最豪邁嘅巴伐利亞午後生活。
          </p>

          <div className="my-8">
            <img
              src="/images/english-garden-second.jpg"
              alt="慕尼黑城市景觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4 mb-8">
              ▲ 近距離捕捉艾斯巴赫河（Eisbachwelle）上滑浪好手英姿的完美瞬間
            </p>
          </div>

          <h2 id="photography">📸 攝影師私藏：如何拍出衝浪手最完美的「電影感動態大片」</h2>
          <p>
            想要拍到高清、不模糊且充滿視覺張力的衝浪照片，最佳的位置就在馬路邊的 <strong>Prinzregentenstraße 大橋上</strong>（即急流浪正上方）。你可以將相機調整到<strong>「運動/連拍模式 (Burst Mode)」</strong>，並將快門速度提高到 1/1000 秒以上，這樣就能精準定格水花飛濺的每一顆水珠。如果想拍出人像大片，可以走到河岸兩側的岩石邊，利用低角度仰拍，將衝浪手和飛濺的急流作為背景，拍出來的照片空間壓縮感與流線感瞬間拉滿！
          </p>

          <div id="tips" className="bg-gradient-to-br from-slate-800 to-emerald-900 border border-emerald-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 英國花園 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-4 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">⚠️</span>
                <span><strong>普通遊客千萬不要擅自下河衝浪（極度危險）：</strong>雖然看別人衝浪非常治癒，但艾斯巴赫河的流速極其恐怖，且河底怪石嶙峋、空間狹窄。這裡只允許<strong>經驗極其豐富、技術高超的專業衝浪者</strong>下水。過去曾發生過遊客擅自下水游泳而被捲入橋底溺水的悲劇，大家在岸邊圍觀鼓掌拍照就好，千萬不要玩命喔！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🕶️</span>
                <span><strong>防範夏日「天體營」視覺衝擊：</strong>德國擁有一種非常獨特且受法律保護的「天體自由文化（FKK / Freikörperkultur）」。在炎熱的 7、8 月盛夏，英國花園中段的草坪上（特別是 Schönfeldwiese 草地），會有許多當地市民赤身裸體、旁若無人地躺在草地上曬日光浴。如果你不小心路過，請保持禮貌與平常心，<strong>並且嚴格禁止將鏡頭對準裸曬的人群拍照</strong>，以尊重他人的私隱與當地文化。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🚴</span>
                <span><strong>公園體積巨大，強烈建議租單車逛：</strong>英國花園佔地極廣，南北長度達 5.5 公里！如果全靠雙腿步行逛完，對腳絕對會廢掉。建議在慕尼黑市中心租一輛共享單車（如 MVG Rad）或者電子滑板車進園。公園內鋪設了非常完美的單車專用徑，踏著單車在樹蔭和溪流邊兜風，體驗非常一流。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🚇</span>
                <span><strong>交通方式：</strong>極其便利。如果想去看<strong>街頭衝浪</strong>，搭乘地鐵 U4/U5 線至 <strong>Lehel 站</strong>，出站後步行約 5 分鐘即可抵達；如果想直接去<strong>中國塔啤酒花園</strong>或希臘神廟，可以搭乘地鐵 U3/U6 線至 <strong>Giselastraße 站</strong> 或 <strong>Universität（大學站）</strong> 下車，步行約 8-10 分鐘即可步入花園綠色屏障。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-300">
              <span className="text-emerald-700 font-bold">📍 地址</span>
              <p className="text-stone-700 text-sm mt-1">Englischer Garten, München</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-300">
              <span className="text-emerald-700 font-bold">🕐 開放時間</span>
              <p className="text-stone-700 text-sm mt-1">24 小時開放</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-300">
              <span className="text-emerald-700 font-bold">🏄‍♂️ 衝浪地點</span>
              <p className="text-stone-700 text-sm mt-1">Eisbachwelle, 藝術之家旁</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-300">
              <span className="text-emerald-700 font-bold">🚇 交通</span>
              <p className="text-stone-700 text-sm mt-1">U4/U5 Lehel 站</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center my-10">
            <p className="text-white text-xl mb-4">
              👇 留言分享：你更想在中國木塔下聽著巴伐利亞銅管樂暢飲一公升生啤，還是渴望親眼看看熱血震撼嘅城市衝浪奇觀呢？
            </p>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="english-garden-munich" />
</div>
  );
}