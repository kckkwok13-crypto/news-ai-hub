"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "出發", emoji: "✈️" },
  { id: "transport", title: "交通", emoji: "🚄" },
  { id: "hotel", title: "住宿", emoji: "🏨" },
  { id: "beijinglu", title: "北京路", emoji: "🏛️" },
  { id: "food", title: "美食", emoji: "🍜" },
  { id: "shangxiajiu", title: "上下九", emoji: "🛍️" },
  { id: "cantontower", title: "廣州塔", emoji: "🗼" },
  { id: "nightlife", title: "夜生活", emoji: "🌃" },
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
            廣州3天慢活遊
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">北京路尋古 · 上下九淘貨 · 珠江夜遊</h2>
          <p className="text-zinc-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
          alt="廣州夜景"
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
            深圳飲完早茶，我就轉場去廣州。呢個城市，係嶺南文化嘅發源地，有住2000多年歷史，但同時又係中國南大門嘅商業中心。對我呢個退休人士來說，廣州最大嘅吸引力就係——平、靚、正！無論係飲茶、逛街定係睇夜景，樣樣都係性價比之王。
          </p>
          <p className="text-gray-300 mb-8">
            今次我用三日兩夜，慢慢品味呢座千年商都。分享一下我嘅深度攻略，等你都可以嚟一場話走就走嘅廣州之旅。
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
                  <p className="text-gray-300 mb-2">香港西九龍 → 廣州南站</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約1小時</li>
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

              <div className="flex gap-4">
                <div className="text-3xl">⛴️</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">渡輪（最有feel）</h4>
                  <p className="text-gray-300 mb-2">香港港澳碼頭 → 蓮花山碼頭 → 番禺</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 船程：約1.5小時</li>
                    <li>• 船費：約HK$280-350</li>
                    <li>• 適合：想體驗吓水路風光、順路去長隆</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚗</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">自駕（最自由）</h4>
                  <p className="text-gray-300 mb-2">經港珠澳大橋直達廣州</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約2.5小時</li>
                    <li>• 路費：約HK$300-400（來回橋費）</li>
                    <li>• 適合：一家大細、帶長者、想靈活出行</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1596976786543-3093fe87dc3c?w=1200&q=80"
              alt="高鐵列車"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 高鐵直達，舒適快捷，1小時穿梭深港穗三地
            </p>
          </div>

          <h3 className="text-xl font-bold text-amber-300 mb-4">廣州市內交通</h3>
          <p className="text-gray-300 mb-4">
            廣州地鐵非常方便，基本上市內所有景點都可以坐地鐵到達。我建議購買「嶺南通」卡，或者直接用支付寶/微信嘅乘車碼。另外，廣州仲有一樣嘢好正——BRT快速公交！坐佢哋嗰啲「巨無霸」巴士，穿梭市區又平又方便。
          </p>
          <p className="text-gray-300 mb-4">
            如果想去遠啲，例如長隆野生動物園或者蓮花山，可以考慮租車自駕，或者用滴滴叫車。廣州嘅滴滴司機服務態度好好，而且價錢比香港平三分之二。
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
                  <span className="text-amber-400 font-bold text-lg">廣州白天鵝賓館</span>
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
                  <span className="text-amber-400 font-bold text-lg">廣州四季酒店</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 天河區，珠江新城</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 1,200/晚</p>
              <p className="text-gray-300 text-sm">✨  位於IFC大廈，70樓無邊際泳池，俯瞰成個珠江新城！</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏯</span>
                <div>
                  <span className="text-amber-400 font-bold text-lg">荔枝灣別院</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐ 四星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 荔灣區，荔枝灣涌旁</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 500/晚</p>
              <p className="text-gray-300 text-sm">✨ 嶺南園林風格，環境清幽，適合慢活度假！</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏠</span>
                <div>
                  <span className="text-amber-400 font-bold text-lg">長隆熊貓酒店</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐ 主題酒店</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 番禺區，長隆旅遊度假區</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 700/晚</p>
              <p className="text-gray-300 text-sm">✨ 熊貓主題房間，小朋友最愛！免費出入野生動物園！</p>
            </div>
          </div>

          {/* 北京路 */}
          <h2 id="beijinglu" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🏛️ 北京路：千年古道遇上潮流商圈
          </h2>

          <p className="text-gray-300 mb-6">
            嚟到廣州，必到北京路！呢度係廣州最繁華嘅商業步行街，但佢唔只係購物天堂，地下仲保存住千年古道遺址——五代十國、宋、元、明、清五個朝代嘅路面疊加喺埋一齊，非常震撼！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80"
              alt="北京路步行街"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 北京路步行街，繁華與歷史交融嘅都市名片
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            我行行下，發現北京路兩旁有好多老字號——致美齋醬園、皇上皇臘味、李佔記鐘錶......全部都係幾十年歷史。行到餓喇，我梗係去試下街邊嘅鮮蝦雲吞！一碗滿滿十幾粒，RMB 15有找，真係平靚正。
          </p>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">💡 純粹旅人嘅北京路購物心得</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🛍️ <strong>北京路天河城</strong>：大型商場，國際品牌應有盡有</li>
              <li>• 🏺 <strong>千年古道博物館</strong>：免費參觀！地下玻璃地板可以睇到歷史路面</li>
              <li>• 🍜 <strong>街邊小食</strong>：牛雜、魚蛋、雞蛋仔、咖喱魚丸......全部RMB 10有找</li>
              <li>• 📚 <strong>聯合書店</strong>：文青必去，三層高嘅文學書籍天堂</li>
              <li>• 🎭 <strong>粵劇藝術博物館</strong>：夜晚有免費粵劇表演，順路可以去荔枝灣涌睇燈</li>
            </ul>
          </div>

          {/* 美食推介 */}
          <h2 id="food" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🍜 美食推介：喺廣州，點可以唔飲茶？
          </h2>

          <p className="text-gray-300 mb-6">
            嚟到廣州，飲茶係指定動作！但係你知唔知，廣州飲茶有好多學問？蝦餃、燒賣、叉燒包、蛋撻、蘿蔔糕......全部都係經典。不過我最鍾意嘅，係嗰啲隱藏喺街坊之間嘅老字號茶樓——冇咁多名氣，但係出品先至係最正嘅！
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-red-400 font-bold mb-4 text-xl">🍵 Day 1 早餐：陶陶居（第十甫路總店）</h3>
            <p className="text-gray-300 mb-4">
              呢間係廣州最老牌嘅茶樓之一，1880年已經存在！我朝早9點去到，已經排晒長龍。不過等位係值得嘅——
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥟</span>
                <span className="text-zinc-300">陶陶居百年燒賣王 - 皮薄餡靚，一口一隻</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥮</span>
                <span className="text-zinc-300">鮮蝦腐皮卷 - 外脆內軟，蝦肉爽口彈牙</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍮</span>
                <span className="text-zinc-300">芒果凍布甸 - 入口即化，甜而不膩</span>
              </div>
              <p className="text-amber-400 font-bold mt-2">💰 人均約 RMB 80-120（已含茶位費）</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold mb-4 text-xl">🦐 Day 1 午餐：黃沙水產批發市場</h3>
            <p className="text-gray-300 mb-4">
              呢度係華南最大嘅水產批發市場！自己揀海鮮，搵附近酒樓加工，價錢平到你唔信——
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦀</span>
                <span className="text-zinc-300">大閘蟹 - RMB 30/隻（時令）</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦐</span>
                <span className="text-zinc-300">白灼蝦 - RMB 40/斤，新鮮到仲喺度郁</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐚</span>
                <span className="text-zinc-300">粉絲蒸扇貝 - RMB 15/隻，蒜蓉香到流口水</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦆</span>
                <span className="text-zinc-300">白切鵝 - RMB 50/例，皮爽肉滑</span>
              </div>
              <p className="text-amber-400 font-bold mt-2">💰 加工費約 RMB 10-20/道，人均約 RMB 100-150 食到扶牆走</p>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80"
              alt="粵式點心"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 粵式早茶，一盅兩件，嘆世界！
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">🥢 Day 2 午餐：惠食佳（濱江路）</h3>
            <p className="text-gray-300 mb-4">
              呢間係《舌尖上的中國》訪問過嘅名店！佢哋嘅招牌係——
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐟</span>
                <span className="text-zinc-300">火焰鵝 - 必點！鵝肉用酒點火燒，香氣四溢</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥘</span>
                <span className="text-zinc-300">順德魚生 - 薄切魚片，配十幾種配料撈埋一齊</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍲</span>
                <span className="text-zinc-300">桑拿雞 - 用桑葉墊底蒸，雞肉嫩滑多汁</span>
              </div>
              <p className="text-amber-400 font-bold mt-2">💰 人均約 RMB 150-200</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">🍮 Day 2 下午茶：順記冰室 + 達楊原味燉品</h3>
            <p className="text-gray-300 mb-4">
              上下九附近有兩間必試嘅老字號——
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍨</span>
                <span className="text-zinc-300"><strong>順記冰室</strong> - 椰汁西米露、芒果雪糕係招牌，1943年已經存在</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥣</span>
                <span className="text-zinc-300"><strong>達楊原味燉品</strong> - 椰子燉雞湯、燉鵝腎、燉牛三星，平時RMB 15-25一碗</span>
              </div>
              <p className="text-amber-400 font-bold mt-2">✨ 建議兩間一齊試，一份甜品一份燉湯，正！</p>
            </div>
          </div>

          {/* 上下九 */}
          <h2 id="shangxiajiu" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🛍️ 上下九步行街：老廣州嘅集體回憶
          </h2>

          <p className="text-gray-300 mb-6">
            上下九步行街係广州最具岭南特色的商业街，全长约1公里。这里骑楼林立，汇集了广州传统美食和老字号商铺，是体验老广州风情的必到之处。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80"
              alt="上下九步行街"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 上下九步行街，百年骑楼建筑群诉说着广州的商业传奇
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">🛒 上下九必逛老字號</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🏪 <strong>蓮香樓</strong> - 1889年老字號，蓮蓉月餅係鎮店之寶</li>
              <li>• 🥮 <strong>陶陶居</strong> - 經典粵菜，百年老店（另一間分店）</li>
              <li>• 🧇 <strong>南信牛奶甜品專家</strong> - 雙皮奶、姜撞奶係招牌，1943年創立</li>
              <li>• 🍜 <strong>銀記腸粉店</strong> - 布拉腸粉嘅發明者，叉燒腸、鮮蝦腸係必點</li>
              <li>• 🦆 <strong>皇上皇</strong> - 臘味專家，臘腸、臘肉、臘鴨全部自己醃製</li>
              <li>• 🧧 <strong>趣香餅家</strong> - 嫁女餅、老婆餅、老公餅，一站式買齊</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-pink-400 font-bold mb-4 text-xl">💝 伴手禮攻略</h3>
            <p className="text-gray-300 mb-4">走之前梗係要帶啲手信返去啦！</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-pink-400 font-bold">🥮 餅食類</span>
                <p className="text-zinc-300 text-sm mt-1">蓮香樓月餅、趣香嫁女餅、皇上皇臘味</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-pink-400 font-bold">🍬 糖果類</span>
                <p className="text-zinc-300 text-sm mt-1">咀香園杏仁餅、雞仔餅、老婆餅</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-pink-400 font-bold">🍵 茶葉類</span>
                <p className="text-zinc-300 text-sm mt-1">英德紅茶、鳳凰單樅、嶺南花茶</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-pink-400 font-bold">🏺 工藝品</span>
                <p className="text-zinc-300 text-sm mt-1">廣繡、牙雕、玉石工藝品（可以去華林寺玉器街）</p>
              </div>
            </div>
          </div>

          {/* 廣州塔 */}
          <h2 id="cantontower" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🗼 廣州塔（小蠻腰）：俯瞰花城的最佳位置
          </h2>

          <p className="text-gray-300 mb-6">
            夜晚，我搭地鐵去珠江新城，就係為咗睇廣州塔！呢座600米高嘅電視塔，係广州城市地标，因為外形似足女性身材綽號「小蠻腰」。我建議黄昏時分去買票，一邊睇日落一邊睇埋夜景，性價比最高！
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
                <p className="text-zinc-300 text-sm mt-1">旋轉餐廳，一邊食buffet一邊360度睇成個廣州，預約制</p>
                <p className="text-amber-400 text-sm">💰 自助晚餐約 RMB 500-800/人</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🎢 488觀景平台（433F）</span>
                <p className="text-zinc-300 text-sm mt-1">室內最高點，透明地板可以睇到下面，膽小者慎入</p>
                <p className="text-amber-400 text-sm">💰 門票約 RMB 150-200/人</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-cyan-400 font-bold">🚡 極速雲霄（速降式索道）</span>
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

          {/* 夜生活 */}
          <h2 id="nightlife" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3">
            🌃 廣州夜生活：越夜越精彩
          </h2>

          <p className="text-gray-300 mb-6">
            廣州嘅夜生活比你想象中更加豐富！無論你想靜靜地欣賞江景，定係想感受年輕人嘅夜蒲文化，廣州都可以滿足到你。
          </p>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">🚢 珠江夜遊</h3>
            <div className="space-y-3">
              <p className="text-gray-300 mb-4">珠江夜遊係廣州最經典嘅夜間活動！乘船遊覽珠江，途經白天鵝賓館、海珠橋、解放橋、廣州塔......兩岸璀璨燈光盡收眼底。</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <span className="text-zinc-300">航班時間：19:00-21:30（每30分鐘一班）</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-zinc-300">普通船票：RMB 80-150/人</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍽️</span>
                <span className="text-zinc-300">自助餐船：RMB 200-400/人（包buffet）</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">🍢 夜市美食</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏮</span>
                <div>
                  <span className="text-orange-400 font-bold">北京路夜市</span>
                  <p className="text-zinc-300 text-sm">地鐵公園前站，傍晚6點後開檔</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍜</span>
                <div>
                  <span className="text-orange-400 font-bold">荔灣坊深夜食堂</span>
                  <p className="text-zinc-300 text-sm">荔枝灣涌旁，老字號通宵營業，凌晨2點仲有得食</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦐</span>
                <div>
                  <span className="text-orange-400 font-bold">海珠路海鮮燒烤街</span>
                  <p className="text-zinc-300 text-sm">凌晨時分仍然熱鬧，海鮮燒烤、砂鍋粥應有盡有</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-blue-400 font-bold mb-4 text-xl">🎸 夜蒲勝地</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <span className="text-blue-400 font-bold">珠江琶醍啤酒文化創意藝術區</span>
                  <p className="text-zinc-300 text-sm">舊廠房改建，前衛酒吧、餐廳雲集，現場音樂表演</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍺</span>
                <div>
                  <span className="text-blue-400 font-bold">天環廣場酒吧街</span>
                  <p className="text-zinc-300 text-sm">天河區中心，精釀啤酒、威士忌吧、紅酒莊</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <div>
                  <span className="text-blue-400 font-bold">中華廣場KTV</span>
                  <p className="text-zinc-300 text-sm">唱K聖地，房間費平、歌曲夠新、酒水便宜</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80"
              alt="珠江夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 珠江夜遊，欣賞兩岸璀璨燈光，感受花城魅力
            </p>
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
                <span><strong>滴滴出行</strong> - 叫車必備，價錢透明，司機服務態度好好</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">3️⃣</span>
                <span><strong>百度地圖/高德地圖</strong> - 地鐵導航、公交線路必備</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">4️⃣</span>
                <span><strong>大眾點評</strong> - 搵餐廳、睇評價、買優惠券</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">⚠️ 通關提醒</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ 身份證+回鄉證/護照必備</li>
              <li>⏰ 各大口岸開放時間不同，建議提前查詢</li>
              <li>💡 建議開通漫遊或購買內地電話卡（支付寶需要驗證）</li>
              <li>⚠️ 高鐵票建議提前預訂，尤其週末及假期</li>
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
                <span className="text-gray-300 text-sm">餐飲（3日）</span>
                <p className="text-white font-bold text-lg">約 HK$300-500</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-gray-300 text-sm">門票/玩樂</span>
                <p className="text-white font-bold text-lg">約 HK$150-300</p>
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
              廣州係一個好適合退休人士慢活嘅城市！交通方便、美食多、消費平，而且文化底蘊深厚。呢三日兩夜，我飲咗早茶、行咗步行街、睇咗小蠻腰夜景、食咗海鮮大餐......每一樣都係性價比之王！
            </p>
            <p className="text-gray-300 mb-4">
              最難忘嘅一定係嗰碗凌晨兩點喺荔枝灣涌隔夜舔嘅燉品——椰子燉雞湯，一口落去，滋潤到入心。
            </p>
            <p className="text-gray-300">
              下次，我會再去順德，試下佢哋聞名天下嘅雙皮奶同埋魚生！你呢？
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