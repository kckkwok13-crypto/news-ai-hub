"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "出發", emoji: "✈️" },
  { id: "transport", title: "交通", emoji: "🚄" },
  { id: "hotel", title: "住宿", emoji: "🏨" },
  { id: "chenjia", title: "陳家祠", emoji: "🏛️" },
  { id: "shamian", title: "沙面島", emoji: "🏰" },
  { id: "food", title: "美食", emoji: "🍜" },
  { id: "yuexiu", title: "越秀公園", emoji: "🌳" },
  { id: "shibai", title: "石室教堂", emoji: "⛪" },
  { id: "lizhiwan", title: "荔枝灣", emoji: "🌸" },
  { id: "cantontower", title: "廣州塔", emoji: "🗼" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function GuangzhouPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-amber-950/20 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
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
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            🌴 大灣區退休遊記
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent">
            廣州3天嶺南文化之旅
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">陳家祠尋根 · 沙面島懷舊 · 白雲山登高</h2>
          <p className="text-zinc-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
          alt="廣州天際線"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-amber-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 珠江兩岸的璀璨夜色，小蠻腰與對岸的摩天大樓群相映成趣
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* 引言 */}
          <p id="intro" className="text-xl leading-relaxed text-gray-200 mb-8">
            深圳飲完早茶，我就轉場去廣州。呢個城市，係嶺南文化嘅發源地，有住2000多年歷史。作為中國唯一嘅嶺南文化中心，廣州有住自己獨特嘅建築、美食、語言同埋習俗。對我呢個退休人士來說，廣州最大嘅吸引力就係——美食多、景點靚、嘢去平！
          </p>
          <p className="text-gray-300 mb-8">
            今次我用三日兩夜，走訪陳家祠、沙面島、越秀公園、石室教堂、荔枝灣涌......帶你睇吓真正嘅嶺南風情！
          </p>

          {/* 交通攻略 */}
          <h2 id="transport" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🚄 由香港去廣州，你要知嘅嘢
          </h2>

          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-amber-300 mb-4">🚇 四種方法入廣州</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🚄</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">高鐵（最推薦）</h4>
                  <p className="text-gray-300 mb-2">香港西九龍 → 廣州南站 / 廣州東站</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約1小時（南站）或50分鐘（東站）</li>
                    <li>• 車費：約HK$230-260</li>
                    <li>• 適合：想去天河區、長隆野生動物園</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚇</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">直通巴（最方便）</h4>
                  <p className="text-gray-300 mb-2">港珠澳大橋 → 珠海 → 廣州</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約3小時</li>
                    <li>• 車費：約HK$150-200</li>
                    <li>• 適合：唔想轉車、一車直達市區</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-amber-300 mb-4">廣州市內交通</h3>
          <p className="text-gray-300 mb-4">
            廣州地鐵非常方便，地鐵1號線、2號線、5號線覆蓋晒所有主要景點。我建議下載「廣州地鐵」App，或者直接用支付寶/微信嘅乘車碼。另外，廣州仲有共享單車（美團、哈囉），短途出行好方便！
          </p>

          {/* 住宿推薦 */}
          <h2 id="hotel" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🏨 住宿推薦：邊度瞓邊度玩？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏨</span>
                <div>
                  <span className="text-amber-400 font-bold text-lg">白天鵝賓館</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 荔灣區，鄰近沙面島</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 800/晚（含早餐）</p>
              <p className="text-gray-300 text-sm">✨ 係中國第一間五星級涉外酒店，擁有絶美江景！</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <span className="text-amber-400 font-bold text-lg">廣州賓館</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐ 四星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 越秀區，靠近北京路</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 400/晚</p>
              <p className="text-gray-300 text-sm">✨ 1960年代嘅歷史建築，性價比超高！</p>
            </div>
          </div>

          {/* 陳家祠 */}
          <h2 id="chenjia" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🏛️ 陳家祠（陳氏書院）：嶺南建築藝術殿堂
          </h2>

          <p className="text-gray-300 mb-6">
            陳家祠係我今次旅程嘅第一站！呢度係廣東72縣陳氏家族合資興建嘅祠堂，入面保存住大量精美嘅木雕、磚雕、石雕、灰塑、陶塑......被譽為「嶺南建築藝術嘅明珠」。2002年被評為國家AAAA級旅遊景區，2008年更成為首批國家非物質文化遺產展示中心。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590735213920-9f4c5e16f1f5?w=1200&q=80"
              alt="陳家祠建築"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 陳家祠嘅精美灰塑同陶塑，展現嶺南建築工藝嘅巔峰
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">🏺 參觀重點</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🏛️ <strong>正門磚雕</strong>：六幅大型磚雕，雕刻歷史故事同花鳥蟲魚</li>
              <li>• 🪵 <strong>木雕樑架</strong>：19間屋嘅木雕，全部用貴重木材，精雕細琢</li>
              <li>• 🏺 <strong>聚賢堂</strong>：正堂，用於祭祀祖先同族宴</li>
              <li>• 🎨 <strong>民間工藝展</strong>：象牙雕、玉雕、廣繡、潮繡等傳統工藝品</li>
              <li>• 📚 <strong>書院建築</strong>：古代嶺南地區嘅教育機構，了解科舉制度</li>
            </ul>
            <p className="text-amber-400 mt-4">💰 門票：RMB 10（老人優惠 RMB 5）| ⏰ 開放時間：8:30-17:30</p>
          </div>

          {/* 沙面島 */}
          <h2 id="shamian" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🏰 沙面島：珠江口嘅歐陸風情
          </h2>

          <p className="text-gray-300 mb-6">
            沙面島係珠江沖積而成嘅小島，1860年代起就成為外國領事館同教堂嘅集中地。島上保留大量歐陸風情建築——巴洛克式、哥德式、新古典主義式......行行下，彷彿置身歐洲小鎮。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80"
              alt="沙面島建築"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 沙面島上充滿歐陸風情嘅建築，係打卡聖地
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-blue-400 font-bold mb-4 text-xl">🏛️ 必打卡建築</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• ⛪ <strong>露德聖母堂</strong>：哥德式天主教堂，1891年建成</li>
              <li>• 🏛️ <strong>海關館舍</strong>：俗稱「黃樓」，巴洛克建築風格</li>
              <li>• 🌳 <strong>沙面公園</strong>：有着過百年歷史嘅古樹，免費開放</li>
              <li>• 📸 <strong>沙面大街</strong>：兩旁歐式建築，最啱打卡</li>
              <li>• ☕ <strong>白天鵝賓館</strong>：中國第一間五星級涉外酒店，可以入去嘆杯咖啡</li>
            </ul>
            <p className="text-blue-400 mt-4">💰 門票：免費 | ⏰ 建議遊覽：2-3小時</p>
          </div>

          {/* 美食推介 */}
          <h2 id="food" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🍜 美食推介：喺廣州，點可以唔飲茶？
          </h2>

          <p className="text-gray-300 mb-6">
            嚟到廣州，飲茶係指定動作！但係你知唔知，廣州飲茶有好多學問？蝦餃、燒賣、叉燒包、蛋撻、蘿蔔糕......全部都係經典。
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-red-400 font-bold mb-4 text-xl">🍵 必試茶樓</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl">🥟</div>
                <div>
                  <span className="text-white font-bold">陶陶居（第十甫路總店）</span>
                  <p className="text-zinc-400 text-sm">1880年老字號，百年餅家轉型茶樓</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：陶陶居百年燒賣王、鮮蝦腐皮卷、芒果凍布甸</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🥟</div>
                <div>
                  <span className="text-white font-bold">蓮香樓</span>
                  <p className="text-zinc-400 text-sm">1889年老字號，上下九標誌性茶樓</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：蓮蓉月餅、蝦餃、叉燒包</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🥟</div>
                <div>
                  <span className="text-white font-bold">南園酒家</span>
                  <p className="text-zinc-400 text-sm">1960年代老字號，園林式酒家</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：潮汕滷味、蝦餃、XO醬炒蘿蔔糕</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold mb-4 text-xl">🦐 街邊美食</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥟</span>
                <span className="text-zinc-300"><strong>銀記腸粉</strong> - 布拉腸粉發明者，叉燒腸、鮮蝦腸 RMB 15-25</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍨</span>
                <span className="text-zinc-300"><strong>順記冰室</strong> - 椰汁西米露、芒果雪糕，1943年創立</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥣</span>
                <span className="text-zinc-300"><strong>達楊原味燉品</strong> - 椰子燉雞湯、燉鵝腎，RMB 15-25</span>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1563245372-f08721aef36d?w=1200&q=80"
              alt="粵式點心"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 一盅兩件，嘆世界！粵式早茶係嶺南文化嘅精髓
            </p>
          </div>

          {/* 越秀公園 */}
          <h2 id="yuexiu" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🌳 越秀公園：廣州的城市綠洲
          </h2>

          <p className="text-gray-300 mb-6">
            越秀公園係廣州最大嘅綜合性公園，入面有越秀山、鎮海樓（廣州博物館）、明代古城牆、四方砲台......唔單止係休閒好去處，仲係了解廣州歷史嘅重要場所。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1536052443615-08b1f36aa89d?w=1200&q=80"
              alt="越秀公園"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 越秀公園係廣州嘅「市肺」，市民晨運、散步嘅好去處
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">🏯 園內名勝</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🏛️ <strong>鎮海樓（廣州博物館）</strong>：建於明洪武十三年（1380年），俗稱「五層樓」，係廣州標誌性建築</li>
              <li>• 🧱 <strong>明代古城牆</strong>：廣州現存最完整嘅明代城牆，見證千年商都嘅變遷</li>
              <li>• 🗿 <strong>五羊石像</strong>：廣州城市標誌，五隻羊寓意「五羊銜穀，救護蒼生」</li>
              <li>• 💧 <strong>東秀湖</strong>：划艇、垂釣，湖邊仲有茶座可以嘆茶</li>
              <li>• 🌲 <strong>林木覆盖率</strong>：超過90%，係天然氧吧</li>
            </ul>
            <p className="text-green-400 mt-4">💰 門票：免費（博物館門票 RMB 10）| ⏰ 開放時間：6:00-21:00</p>
          </div>

          {/* 石室教堂 */}
          <h2 id="shibai" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            ⛪ 石室聖心大教堂：哥德式建築瑰寶
          </h2>

          <p className="text-gray-300 mb-6">
            石室聖心大教堂係東南亞最大嘅哥德式天主教堂，1863年由法國設計師設計，用咗25年先至建成。教堂全部用花崗岩砌成，所以又叫「石室」。室內彩色玻璃窗非常精美，陽光透入黎會見到七彩光芒！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
              alt="石室教堂"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 石室聖心大教堂，哥德式尖拱、彩色玻璃窗，非常壯觀
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">⛪ 參觀資訊</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🏛️ <strong>建築風格</strong>：哥德式，尖拱、飛扶壁、花崗岩外牆</li>
              <li>• 🪟 <strong>彩色玻璃窗</strong>：描繪聖經故事，陽光照射時非常夢幻</li>
              <li>• 📍 <strong>位置</strong>：一德路地鐵站附近，步行約5分鐘</li>
              <li>• ⏰ <strong>開放時間</strong>：週一至週六 9:00-11:30、14:30-17:00（週日做禮拜不開放）</li>
              <li>• ⚠️ <strong>溫馨提示</strong>：進入需要穿着得體，短褲短裙唔可以內進</li>
            </ul>
            <p className="text-purple-400 mt-4">💰 門票：免費 | 📸 最佳拍攝時間：下午3-4點陽光斜照</p>
          </div>

          {/* 荔枝灣涌 */}
          <h2 id="lizhiwan" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🌸 荔枝灣涌：嶺南水鄉風情
          </h2>

          <p className="text-gray-300 mb-6">
            荔枝灣涌係廣州最具嶺南水鄉風情嘅地方！呢度曾經係有錢人別墅區，依家經過保育活化，恢復咗昔日「一灣溪水綠，兩岸荔枝紅」嘅美景。夜遊荔枝灣涌，兩岸燈火通明，小橋流水，非常浪漫。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80"
              alt="荔枝灣涌"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 荔枝灣涌嘅夜景，小橋流水、嶺南建築，係打卡聖地
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-pink-400 font-bold mb-4 text-xl">🚢 遊覽建議</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🚢 <strong>荔枝灣遊船</strong>：乘坐小艇遊覽河涌，經過文塔、梁氏宗祠、小畫舫齋</li>
              <li>• 🏛️ <strong>文塔廣場</strong>：廣州现存唯一嘅清代文塔，供奉文昌帝君</li>
              <li>• 🍜 <strong>荔灣湧小食</strong>：艇仔粥、馬蹄糕、雲吞麵，全部係老字號</li>
              <li>• 🌙 <strong>夜遊荔枝灣</strong>：晚上7-9點係最佳時段，兩岸燈光靚到爆</li>
              <li>• 🎭 <strong>粵劇藝術博物館</strong>：免費參觀，晚上的確有粵劇表演</li>
            </ul>
            <p className="text-pink-400 mt-4">💰 遊船票價：RMB 30-50 | ⏰ 建議遊覽：1.5-2小時</p>
          </div>

          {/* 廣州塔 */}
          <h2 id="cantontower" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🗼 廣州塔（小蠻腰）：俯瞰花城的最佳位置
          </h2>

          <p className="text-gray-300 mb-6">
            夜晚，我當然要去睇廣州塔啦！呢座600米高嘅電視塔，係广州城市地标，因為外形似足女性身材綽號「小蠻腰」。建議黄昏時分去买票，一邊睇日落一邊睇埋夜景，性價比最高！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80"
              alt="廣州塔夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 小蠻腰的璀璨夜色，珠江兩岸的霓虹倒映水中
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-cyan-400 font-bold mb-4 text-xl">🎢 廣州塔遊玩攻略</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🍽️ 璇璣美食廊（107-108F）</span>
                <p className="text-zinc-300 text-sm mt-1">旋轉餐廳，一邊食buffet一邊360度睇成個廣州</p>
                <p className="text-amber-400 text-sm">💰 自助晚餐約 RMB 500-800/人</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🎢 488觀景平台（433F）</span>
                <p className="text-zinc-300 text-sm mt-1">室內最高點，透明地板可以睇到下面</p>
                <p className="text-amber-400 text-sm">💰 門票約 RMB 150-200/人</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🚡 極速雲霄</span>
                <p className="text-zinc-300 text-sm mt-1">全球最高的速降索道！32秒極速下降到地面</p>
                <p className="text-amber-400 text-sm">💰 約 RMB 200-300/人</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🌙 免費觀景攻略</span>
                <p className="text-zinc-300 text-sm mt-1">海心沙亞運公園可以免費睇到對岸嘅小蠻腰夜景</p>
                <p className="text-amber-400 text-sm">💰 完全免費！</p>
              </div>
            </div>
          </div>

          {/* 實用Tips */}
          <h2 id="tips" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            💡 實用小貼士（純粹旅人嘅私房分享）
          </h2>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">📱 必須下載的App</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-green-400">1️⃣</span>
                <span><strong>支付寶/微信支付</strong> - 廣州基本全部地方都唔收現金，必需！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">2️⃣</span>
                <span><strong>滴滴出行</strong> - 叫車必備，價錢透明</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">3️⃣</span>
                <span><strong>百度地圖/高德地圖</strong> - 地鐵導航、公交線路必備</span>
              </li>
            </ul>
          </div>

          {/* 預算 */}
          <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">💰 預算參考（每人）</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">交通費（高鐵來回）</span>
                <p className="text-white font-bold text-lg">約 HK$460-520</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">酒店（2晚）</span>
                <p className="text-white font-bold text-lg">約 HK$400-800</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">門票（陳家祠+鎮海樓）</span>
                <p className="text-white font-bold text-lg">約 HK$30-50</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">餐飲（3日）</span>
                <p className="text-white font-bold text-lg">約 HK$300-500</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-500/20 rounded-lg text-center">
              <span className="text-amber-400 font-bold text-lg">💰 總預算：HK$1,500-2,500</span>
            </div>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">📝 遊記總結</h3>
            <p className="text-gray-300 mb-4">
              廣州係一個好適合退休人士慢活嘅城市！三日兩夜，我走訪咗陳家祠、沙面島、越秀公園、石室教堂、荔枝灣涌......每一個地方都有佢獨特嘅嶺南風情。
            </p>
            <p className="text-gray-300 mb-4">
              最難忘嘅一定係凌晨兩點喺荔枝灣涌隔夜舔嘅艇仔粥——一碗熱辣辣嘅粥，配上油條、花生、魷魚絲，滋味到不得了。
            </p>
            <p className="text-gray-300">
              下次，我會再去白雲山登高，或者去佛山祖廟睇舞獅！你呢？
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              👇 你去過廣州嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}