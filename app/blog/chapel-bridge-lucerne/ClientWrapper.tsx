"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌉" },
  { id: "history", title: "歷史故事", emoji: "🔑" },
  { id: "paintings", title: "橋上油畫", emoji: "🎨" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["琉森", "瑞士", "廊橋", "打卡"];

export default function ChapelBridgeLucernePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-amber-950/50 to-yellow-950/30 text-white">
      <ReadingProgress />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-orange-900/95 to-amber-900/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-orange-500/10">
          <h3 className="text-sm font-bold text-orange-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                      : "text-orange-200/70 hover:text-white hover:bg-orange-800/50"
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
          className="inline-flex items-center gap-2 text-orange-400 hover:text-white mb-8 transition-colors bg-orange-900/30 px-4 py-2 rounded-full hover:bg-orange-800/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/30">
            🇨🇭 瑞士 · 琉森湖畔
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-yellow-300 bg-clip-text text-transparent">
            歐洲最古老的廊橋
          </h1>
          <h2 className="text-xl text-orange-400 font-semibold mb-4">瑞士琉森卡貝爾橋（Kapellbrücke）深度遊覽攻略</h2>
          <p className="text-orange-600">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kapellbruecke.JPG/1280px-Kapellbruecke.JPG"
            alt="琉森卡貝爾橋"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-orange-600 text-sm mb-12">
          ▲ 琉森湖畔的卡貝爾橋，紅色橋身在夕陽下熠熠生輝，橋下水塔倒影如詩如畫
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            當你第一次看到<strong>卡貝爾橋（Kapellbrücke / Chapel Bridge）</strong>時，一定會被這座獨特的紅色木橋所吸引。這座建於<strong>1333年</strong>的木製廊橋是歐洲現存最古老的橋樑之一，全長204米，跨越羅伊斯河（Reuss）連接琉森舊城區與新城區。橋身上覆蓋著陡峭的綠色三角形木瓦屋頂，在藍天白雲下顯得格外醒目。
          </p>
          <p>
            卡貝爾橋不僅是琉森的城市象徵，更是瑞士最著名的旅遊景點之一。橋上懸掛著120幅三角形油畫，描繪著琉森的歷史與瑞士的聖人故事。1993年，一場大火嚴重損毀了橋樑，現今遊客看到的橋樑是按原樣重建的。如今，卡貝爾橋與鄰近的水塔（Tower）一同構成了琉森最具標誌性的景觀。
          </p>

          <div id="history" className="bg-gradient-to-br from-orange-900/50 to-amber-900/40 border border-orange-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🔑 跨越700年的守望：卡貝爾橋的 4 大歷史篇章
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. 建橋初衷：防衛與通道</h4>
            <p className="text-orange-100/80">
              卡貝爾橋由琉森城市防衛系統的一部分，由建築師瓦爾特·呂姆巴赫（Walter Rümlang）設計建造。橋的中間設有一個小禮拜堂（Kapelle），供奉著聖佩德羅（St. Peter），這也是橋名「卡貝爾」的由來。橋樑的通道設計讓行人可以在不被雨水淋濕的情況下穿過河流。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. 橋上油畫：琉森的百科全書</h4>
            <p className="text-orange-100/80">
              17世紀初，人們在橋樑的橫樑上懸掛了112幅三角形油畫，描繪琉森的歷史事件、宗教故事和守護聖人。橋的中段還設有一個小型禮拜堂，展示著宗教壁畫。這些油畫被稱為「琉森的百科全書」，是了解這座城市歷史的重要窗口。
            </p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                ✨ 浴火重生：1993年大火重建
              </h4>
              <p className="text-orange-100/80">
                1993年1月17日，一場大火幾乎完全摧毀了卡貝爾橋。這場火災被認為是人為縱火，至今仍未破案。瑞士政府投入了大量資源重建這座歷史橋樑，聘請了傳統木匠使用原始技術進行修復。重建工程於1994年完工，現在的卡貝爾橋在結構上更加堅固，同時保留了原有的歷史風貌。
              </p>
            </div>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">3. 水塔：千年堡壘的見證</h4>
            <p className="text-orange-100/80">
              與卡貝爾橋相連的水塔建於14世紀初，是琉森城市防衛系統的一部分。這座八角形的石塔高34米，曾用作檔案室、監獄和金庫。現今，水塔內設有城市歷史博物館，展示琉森在中世紀的繁榮與輝煌。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">4. 現代地標：琉森的城市名片</h4>
            <p className="text-orange-100/80">
              如今的卡貝爾橋是琉森最重要的旅遊景點，每年吸引超過150萬遊客前來參觀。橋樑兩側設有多家咖啡館和商店，是遊客休閒購物的好去處。夜幕降臨後，橋身上的暖色燈光照亮河面，倒影如夢似幻，是拍攝夜景的絕佳地點。
            </p>
          </div>

          <h2 id="paintings">🎨 橋上油畫：120幅畫作訴說歷史</h2>
          <p>
            卡貝爾橋最引以為傲的特色之一，就是橋身上懸掛的三角形油畫。這些油畫創作於17世紀初，原本有158幅，現在僅存112幅，加上橋中段禮拜堂的油畫，總共約120幅。油畫內容主要分為三個主題：
          </p>

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kapellbr%C3%BCcke_%26_H%C3%A4user_am_Rathausquai_in_Luzern_%282013%29.jpg/1280px-Kapellbr%C3%BCcke_%26_H%C3%A4user_am_Rathausquai_in_Luzern_%282013%29.jpg"
              alt="琉森卡貝爾橋與水塔"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-orange-600 text-sm mt-4 mb-8">
              ▲ 從卡貝爾橋上遠眺琉森舊城區的紅瓦屋頂與遠處的皮拉圖斯山
            </p>
          </div>

          <h3>宗教聖人故事</h3>
          <p>
            大部分油畫描繪了瑞士和琉森的守護聖人故事，包括聖萊奧加里（St. Leodegar）、聖莫里斯（St. Mauritius）等。這些油畫具有濃厚的宗教色彩，是當時藝術家對宗教信仰的表達。
          </p>

          <h3>琉森歷史事件</h3>
          <p>
            部分油畫描繪了琉森城市發展的歷史瞬間，包括1386年的森帕赫戰役（Battle of Sempach）等重要歷史事件。這些畫作成為了研究琉森歷史的珍貴資料。
          </p>

          <h3>寓言與道德故事</h3>
          <p>
            橋上還有一些油畫描繪了古希臘羅馬神話中的寓言故事，以及教導人們道德品格的圖像。這些畫作反映了17世紀歐洲社會的價值觀和審美趣味。
          </p>

          <h2 id="photo-spots">📸 攝影師私藏：卡貝爾橋 4 大終極打卡機位</h2>

          <h3>① 羅伊斯河對岸——經典全景拍攝</h3>
          <p>
            站在羅伊斯河對岸的堤岸上，使用廣角鏡頭拍攝卡貝爾橋全景。這是卡貝爾橋最經典的拍攝角度，可以同時拍到紅色橋身、綠色屋頂和水塔的倒影。建議在清晨或傍晚拍攝，光線最為柔和。
          </p>

          <h3>② 橋面上——走入畫中</h3>
          <p>
            走上卡貝爾橋，站在橋面中央往兩端拍攝，可以獲得極具縱深感的畫面。橋上的木製橫樑和油畫都是拍攝的好素材。建議使用超廣角鏡頭，可以拍出橋樑的宏偉氣勢。
          </p>

          <h3>③ 水塔前——古堡與廊橋</h3>
          <p>
            在橋的南端水塔前拍攝，可以獲得橋樑與水塔同框的經典畫面。夜幕降臨後，這裡的夜景更為動人，暖色燈光將古堡與橋樑照亮，倒映在平靜的河面上。
          </p>

          <h3>④ 遊船上——水上視角</h3>
          <p>
            乘坐琉森湖遊船從水面視角拍攝卡貝爾橋，是最獨特的拍攝方式之一。從水上仰望橋身，可以拍到橋拱在水面的倒影，形成完美的對稱畫面。建議選擇日落時分的航班，可以拍到金色夕陽下的橋樑剪影。
          </p>

          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/40 border border-orange-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 卡貝爾橋 旅遊實用小貼士
            </h3>
            <ul className="space-y-3 text-orange-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>門票資訊：</strong>卡貝爾橋本身免費參觀。橋邊的水塔博物館（Weierturm）需要購票參觀，成人約 CHF 5-8。建議購買琉森城市卡，可免費參觀多個景點。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🚢</span>
                <span><strong>遊船體驗：</strong>琉森湖遊船會經過卡貝爾橋。建議乘坐1小時的短程遊船，在橋下穿過時拍攝。遊船票價約 CHF 30-50，建議提前預訂。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">📸</span>
                <span><strong>最佳拍攝時間：</strong>建議在清晨（7-9點）或傍晚（日落前1小時）前來拍攝。清晨遊客稀少，傍晚光線動人。夜晚橋身有照明，也是拍夜景的好時機。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>交通方式：</strong>從琉森火車總站步行約10分鐘即可到達卡貝爾橋。也可乘搭有軌電車1號或2號至<strong>Schwanenplatz</strong>站。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🏨</span>
                <span><strong>周邊順遊：</strong>卡貝爾橋周邊景點豐富，包括獅子紀念碑、冰川花園博物館、琉森湖畔等。建議安排半天時間慢慢遊覽。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">📍 地址</span>
              <p className="text-orange-100/80 text-sm mt-1">Kapellbrücke, 6004 Luzern, Switzerland</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">🕐 開放時間</span>
              <p className="text-orange-100/80 text-sm mt-1">全天候開放<br/>建議遊覽時間 30-60分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">💰 費用</span>
              <p className="text-orange-100/80 text-sm mt-1">橋身免費參觀<br/>水塔博物館 CHF 5-8</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">⭐ 評分</span>
              <p className="text-orange-100/80 text-sm mt-1">4.7/5.0（76,543 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">🚇 交通</span>
              <p className="text-orange-100/80 text-sm mt-1">火車總站步行10分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-orange-100/80 text-sm mt-1">1-2小時</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/20 border border-orange-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="chapel-bridge-lucerne" />
          </div>

          <div className="bg-orange-900/30 rounded-2xl p-6 my-10 border border-orange-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🌉 歐洲最古老的廊橋：瑞士琉森卡貝爾橋深度遊覽攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-orange-900/30 rounded-2xl p-6 border border-orange-700/30 flex items-center gap-4">
              <span className="text-orange-100/80">加入心願清單：</span>
              <FavoriteButton slug="chapel-bridge-lucerne" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="chapel-bridge-lucerne" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="chapel-bridge-lucerne" />
    </div>
  );
}