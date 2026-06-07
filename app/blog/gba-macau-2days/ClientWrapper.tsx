"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "出發", emoji: "✈️" },
  { id: "transport", title: "交通", emoji: "🚄" },
  { id: "hotel", title: "住宿", emoji: "🏨" },
  { id: "senado", title: "議事亭", emoji: "🏛️" },
  { id: "rua", title: "大三巴", emoji: "⛪" },
  { id: "taipa", title: "氹仔舊城", emoji: "🏘️" },
  { id: "food", title: "美食", emoji: "🍜" },
  { id: "casino", title: "娛樂場", emoji: "🎰" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function MacauPage() {
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
      { threshold: 0.2 }
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950/20 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-purple-500/10">
          <h3 className="text-sm font-bold text-purple-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
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
          className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/30">
            🌴 大灣區退休遊記
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
            澳門2天葡韻慢活之旅
          </h1>
          <h2 className="text-xl text-purple-400 font-semibold mb-4">大三巴尋古 · 氹仔舊城漫步 · 免費發財巴体验</h2>
          <p className="text-zinc-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1541599468348-e96984315921?w=1200&q=80"
          alt="澳門夜景"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-purple-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 澳門夜色，葡式建築與現代娛樂場的完美融合
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* 引言 */}
          <p id="intro" className="text-xl leading-relaxed text-gray-200 mb-8">
            過大海！呢個係老一輩香港人對去澳門嘅稱呼。澳門雖然細細，但係幾百年中西文化交融，令呢個地方有住獨一無二嘅魅力。對我呢個退休人士來說，澳門最大嘅吸引力係——免費發財巴來回、免費酒店飲品、性價比超高嘅葡國菜！
          </p>
          <p className="text-gray-300 mb-8">
            今次我用兩日一夜，走訪大三巴、議事亭前地、氹仔舊城、路氹城......帶你睇吓真正嘅葡韻風情！
          </p>

          {/* 交通攻略 */}
          <h2 id="transport" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🚄 由香港去澳門，你要知嘅嘢
          </h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-purple-300 mb-4">🚢 三種方法過大海</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">⛴️</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">高速船（最推薦）</h4>
                  <p className="text-gray-300 mb-2">香港港澳碼頭 → 澳門外港碼頭 / 氹仔碼頭</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 船程：約1小時</li>
                    <li>• 船費：普通位 HK$160-180 / 頭等位 HK$280-320</li>
                    <li>• 班次：每日約50班，15-30分鐘一班</li>
                    <li>• 適合：想快啲到、唔想塞車</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚌</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">港珠澳大橋穿梭巴（最抵）</h4>
                  <p className="text-gray-300 mb-2">香港口岸 → 澳門口岸</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約45分鐘</li>
                    <li>• 車費：HK$58-65（單程）</li>
                    <li>• 適合：想慳錢、行程彈性</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚗</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">自駕（最自由）</h4>
                  <p className="text-gray-300 mb-2">經港珠澳大橋自駕前往</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約1.5小時</li>
                    <li>• 橋費：來回約 HK$200</li>
                    <li>• 適合：想去多個地方、唔想受限於公共交通</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-purple-300 mb-4">澳門市內交通</h3>
          <p className="text-gray-300 mb-4">
            澳門地方細，主要景點步行都可以到。不過，如果你想慳腳骨力，可以搭：
          </p>
          <ul className="text-zinc-300 space-y-2 mb-8">
            <li>• 🚌 <strong>賭場免費巴士（發財巴）</strong>：各大娛樂場提供，免費來回關口、碼頭、酒店，非常方便！</li>
            <li>• 🚌 <strong>公共巴士</strong>：覆蓋全澳，車費 MOP 6（不設找續，建議用澳門通）</li>
            <li>• 🚕 <strong>的士</strong>：起步價 MOP 19，每200米 MOP 2.5</li>
          </ul>

          {/* 住宿推薦 */}
          <h2 id="hotel" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🏨 住宿推薦：邊度瞓邊度玩？
          </h2>

          <p className="text-gray-300 mb-6">
            澳門嘅酒店性價比超高！五星酒店平日一千蚊有交易，仲包早餐。如果你想試下發財巴嘅免費服務，記得入住路氹城嘅大型度假村。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏨</span>
                <div>
                  <span className="text-purple-400 font-bold text-lg">澳門銀河</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 路氹城，鄰近銀河賭場</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 MOP 800-1,500/晚（含早餐）</p>
              <p className="text-gray-300 text-sm">✨ 免費發財巴來回關口、碼頭，仲有天浪淘園免費水上設施！</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <span className="text-purple-400 font-bold text-lg">葡京人</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐ 四星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 路氹城，性價比高</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 MOP 400-800/晚</p>
              <p className="text-gray-300 text-sm">✨ 2021年新開，設施新淨，鄰近葡京人蔘茸免稅店</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎰</span>
                <div>
                  <span className="text-purple-400 font-bold text-lg">永利皇宮</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 路氹城，纜車直達</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 MOP 1,200-2,000/晚</p>
              <p className="text-gray-300 text-sm">✨ 免費纜車、免費表演湖、免費發財巴，性價比超高！</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌉</span>
                <div>
                  <span className="text-purple-400 font-bold text-lg">十六浦索菲特</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 澳門半島，議事亭附近</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 MOP 600-1,000/晚</p>
              <p className="text-gray-300 text-sm">✨ 地理位置超方便，步行可以去大三巴、議事亭</p>
            </div>
          </div>

          {/* 議事亭前地 */}
          <h2 id="senado" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🏛️ 議事亭前地：澳門的心臟地帶
          </h2>

          <p className="text-gray-300 mb-6">
            議事亭前地係澳門最核心嘅旅遊區域！呢個廣場由葡國人興建，地面用黑白碎石鋪成波浪形圖案，兩旁係葡式建築，充滿濃郁嘅歐陸風情。唔少遊客都會響呢度打卡影相。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80"
              alt="議事亭前地"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 議事亭前地的波浪形石板路，係澳門最具標誌性嘅畫面
            </p>
          .</div>

          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">🏛️ 必打卡景點</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• ⛲ <strong>議事亭前地廣場</strong>：黑白波浪石板路，兩旁葡式建築，聖誕節有燈飾</li>
              <li>• 🏛️ <strong>仁慈堂大樓</strong>：建於1569年，澳門最古老慈善機構</li>
              <li>• ⛪ <strong>玫瑰聖母堂</strong>：建於1587年，巴洛克式建築，室內非常精美</li>
              <li>• 📸 <strong>戀愛巷</strong>：一條粉色嘅小巷，距離大三巴約5分鐘路程</li>
              <li>• 🏪 <strong>手信街</strong>：議事亭去大三巴路上，全部都係杏仁餅、豬肉乾</li>
            </ul>
            <p className="text-purple-400 mt-4">💰 門票：免費 | ⏰ 全日開放</p>
          </div>

          {/* 大三巴 */}
          <h2 id="rua" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            ⛪ 大三巴牌坊：澳門的靈魂象徵
          </h2>

          <p className="text-gray-300 mb-6">
            大三巴牌坊係澳門最標誌性嘅建築！呢度係聖保祿學院嘅遺址，1637年建成，經歷過三次大火，僥倖保存咗正面石壁。牌坊上嘅浮雕精美絕倫，有住400多年歷史，係遊客必到嘅打卡聖地。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590735213920-9f4c5e16f1f5?w=1200&q=80"
              alt="大三巴牌坊"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 大三巴牌坊，澳門最具代表性嘅歷史建築
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">⛪ 遊覽重點</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🏛️ <strong>牌坊正面</strong>：三層浮雕，分別代表耶穌會、聖保祿學院、聖母</li>
              <li>• 🪦 <strong>地下墓穴</strong>：存放殉道者遺骸，有免費參觀時段</li>
              <li>• 🎨 <strong>天主教藝術博物館</strong>：收藏多件天主教藝術品，門票 MOP 15</li>
              <li>• 📸 <strong>最佳拍攝角度</strong>：牌坊右側斜路，可以影到完整牌坊</li>
              <li>• 🌳 <strong>戀愛巷</strong>：牌坊旁邊嘅粉色小巷，非常適合打卡</li>
            </ul>
            <p className="text-amber-400 mt-4">💰 門票：免費（博物館 MOP 15）| ⏰ 開放時間：9:00-18:00</p>
          </div>

          {/* 氹仔舊城 */}
          <h2 id="taipa" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🏘️ 氹仔舊城區：葡式建築的彩色世界
          </h2>

          <p className="text-gray-300 mb-6">
            氹仔舊城區係我今次旅程最驚喜嘅發現！呢度保留大量葡式建築，彩色外牆、瓷磚陽台、碎石小路......行行下，彷彿置身葡萄牙小鎮。最啱慢慢行、影相、歎咖啡。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80"
              alt="氹仔舊城"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 氹仔舊城的葡式建築，色彩繽紛，係打卡聖地
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-pink-400 font-bold mb-4 text-xl">🏘️ 必打卡地點</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🎨 <strong>官也街</strong>：氹仔最繁華嘅小食街，葡撻、豬扒包、木糠布甸應有盡有</li>
              <li>• 🏛️ <strong>龍環葡韻</strong>：五幢葡萄牙式別墅，現為住宅式博物館</li>
              <li>• ⛪ <strong>嘉模聖母堂</strong>：氹仔唯一嘅天主教堂，鵝黃色外牆非常靚</li>
              <li>• 🌳 <strong>氹仔花園</strong>：免費開放，有好靚嘅葡式涼亭</li>
              <li>• ☕ <strong>甜記咖啡室</strong>：老字號咖啡店，檀香茶同咖啡聞名</li>
            </ul>
            <p className="text-pink-400 mt-4">💰 門票：免費（龍環葡韻 MOP 5）| ⏰ 建議遊覽：2-3小時</p>
          </div>

          {/* 美食推介 */}
          <h2 id="food" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🍜 美食推介：葡撻、豬扒包、木糠布甸
          </h2>

          <p className="text-gray-300 mb-6">
            澳門美食係我今次旅程嘅另一個重點！葡撻、豬扒包、木糠布甸......全部都係必試嘅經典。氹仔官也街簡直係美食天堂，一條街可以試晒所有嘢！
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-red-400 font-bold mb-4 text-xl">🥐 必試美食</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl">🥐</div>
                <div>
                  <span className="text-white font-bold">安德魯餅店（路環總店）</span>
                  <p className="text-zinc-400 text-sm">澳門葡撻創始人，1989年創立</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：葡撻 MOP 10/個、芝士撻</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🥪</div>
                <div>
                  <span className="text-white font-bold">大利豬扒包（官也街）</span>
                  <p className="text-zinc-400 text-sm">炭烤豬扒包聞名，必食推介</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：豬扒包 MOP 30-40、雞蛋仔</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🍮</div>
                <div>
                  <span className="text-white font-bold">莫義記（官也街）</span>
                  <p className="text-zinc-400 text-sm">1935年老字號，木糠布甸創始店</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：木糠布甸 MOP 25、大菜糕</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🥮</div>
                <div>
                  <span className="text-white font-bold">咀香園餅家（議事亭）</span>
                  <p className="text-zinc-400 text-sm">澳門最大手信連鎖店</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：杏仁餅、牛肉乾、葡國雞罐頭</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="葡撻"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 澳門葡撻，外脆內嫩，焦糖香味令人回味無窮
            </p>
          </div>

          {/* 娛樂場 */}
          <h2 id="casino" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            🎰 路氹城娛樂場：免費體驗葡韻魅力
          </h2>

          <p className="text-gray-300 mb-6">
            雖然我唔係賭仔，但係澳門嘅娛樂場實在太有特色！路氹城各大度假村簡直係博物館級別——永利皇宮嘅纜車、威尼斯人嘅天空、倫敦人嘅英式風情......就算唔賭錢，都可以免費睇靚景！
          </p>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-cyan-400 font-bold mb-4 text-xl">🎰 免費打卡景點</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🚡 <strong>永利皇宮纜車</strong>：免費乘搭纜車俯瞰表演湖，黃昏時段最靚</li>
              <li>• 🏛️ <strong>威尼斯人</strong>：人造天空、貢多拉船，彷彿置身意大利</li>
              <li>• 🎭 <strong>倫敦人</strong>：倫敦巴士、國會大廈外牆，免費打卡</li>
              <li>• 🗼 <strong>巴黎人</strong>：縮小版巴黎鐵塔，夜景非常靚</li>
              <li>• 🌊 <strong>美獅美高梅</strong>：視博廣場天幕，免費睇show</li>
            </ul>
            <p className="text-cyan-400 mt-4">💰 門票：免費 | ⏰ 大部分24小時開放</p>
          </div>

          {/* 實用Tips */}
          <h2 id="tips" className="text-2xl font-bold text-purple-400 mt-12 mb-6 flex items-center gap-3">
            💡 實用小貼士（純粹旅人嘅私房分享）
          </h2>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">📱 必須知道嘅嘢</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-green-400">1️⃣</span>
                <span><strong>發財巴攻略</strong> - 各娛樂場嘅發財巴係免費嘅，只要話你去邊間酒店，就可以免費搭！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">2️⃣</span>
                <span><strong>兌換葡幣</strong> - 澳門幣同港幣係一比一，港幣通用，但係找續用葡幣</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">3️⃣</span>
                <span><strong>支付寶/微信</strong> - 大部分商戶都接受支付寶/微信，唔需要帶太多現金</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">4️⃣</span>
                <span><strong>免稅店</strong> - 葡京人嘅免稅店有好多化妝品、手錶，價錢比香港平</span>
              </li>
            </ul>
          </div>

          {/* 預算 */}
          <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">💰 預算參考（每人）</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">交通費（船票來回）</span>
                <p className="text-white font-bold text-lg">約 HK$320-360</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">酒店（1晚五星）</span>
                <p className="text-white font-bold text-lg">約 HK$600-1,000</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">餐飲（2日）</span>
                <p className="text-white font-bold text-lg">約 HK$300-500</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">手信</span>
                <p className="text-white font-bold text-lg">約 HK$200-400</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-500/20 rounded-lg text-center">
              <span className="text-purple-400 font-bold text-lg">💰 總預算：HK$1,500-2,500</span>
            </div>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">📝 遊記總結</h3>
            <p className="text-gray-300 mb-4">
              澳門係一個好適合退休人士慢活嘅地方！兩日一夜，我走訪咗議事亭前地、大三巴、氹仔舊城、路氹城......每一個地方都有佢獨特嘅葡韻風情。
            </p>
            <p className="text-gray-300 mb-4">
              最難忘嘅一定係氹仔舊城嘅彩色建築——行行下，彷彿置身葡萄牙小巷，影相打卡一流！
            </p>
            <p className="text-gray-300">
              下次，我會再去路環睇黑沙灘，或者去澳門半島睇東望洋燈塔！你呢？
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              👇 你去過澳門嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}