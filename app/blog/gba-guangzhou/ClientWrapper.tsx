"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "day3", title: "第三天", emoji: "🌆" },
];

export default function GuangzhouPage() {
  const [activeSection, setActiveSection] = useState("day1");

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
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-56 shadow-2xl shadow-amber-500/10">
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
            廣州3天嶺南慢活之旅
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">由羅湖出發 · 一步一步走遍羊城</h2>
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
          <p className="text-xl leading-relaxed text-gray-200 mb-8">
            深圳飲完早茶，我就轉場去廣州。呢個城市，係嶺南文化嘅發源地，有住2000多年歷史。作為中國唯一嘅嶺南文化中心，廣州有住自己獨特嘅建築、美食、語言同埋習俗。對我呢個退休人士來說，廣州最大嘅吸引力就係——美食多、景點靚、嘢去平！
          </p>
          <p className="text-gray-300 mb-8">
            今次我用三日兩夜，由第一日行到第三日，帶你睇吓真正嘅嶺南風情！
          </p>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-3xl font-bold text-amber-400 mt-16 mb-8 flex items-center gap-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">1</span>
            第一天：陳家祠尋根 · 沙面島懷舊
          </h2>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🚄 早上：由深圳羅湖出發</h3>
          <p className="text-gray-300 mb-6">
            朝早八點，我響深圳羅湖口岸食完腸粉，就坐地鐵去福田口岸過關。深圳去廣州好方便，高鐵只係一個鐘頭就到。我買咗九點鐘嘅和諧號，五十幾分鐘就到達廣州南站。
          </p>
          <p className="text-gray-300 mb-8">
            出咗站，我買咗張嶺南互通卡（其實支付寶就得），就直接轉地鐵去陳家祠站。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🏛️ 上午：陳家祠（陳氏書院）</h3>
          <p className="text-gray-300 mb-6">
            陳家祠係我今次旅程嘅第一站！呢度係廣東72縣陳氏家族合資興建嘅祠堂，入面保存住大量精美嘅木雕、磚雕、石雕、灰塑、陶塑......被譽為「嶺南建築藝術嘅明珠」。行行吓，我影咗好多相，因為每一個角落都係藝術品。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590735213920-9f4c5e16f1f5?w=1200&q=80"
              alt="陳家祠建築裝飾"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 陳家祠嘅精美灰塑同陶塑，展現嶺南建築工藝嘅巔峰
            </p>
          </div>

          <p className="text-gray-300 mb-8">
            我響正門睇咗好耐，嗰六幅大型磚雕真係巧奪天工，有歷史故事、有花鳥蟲魚，睇到你唔舍得走。入面仲有聚賢堂，係以前祭祀祖先同族宴嘅地方，而家變成咗民間工藝展廳，有象牙雕、玉雕、廣繡、潮繡......全部都係國家非物質文化遺產！
          </p>

          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-amber-400 font-bold mb-2">💡 純粹旅人Tips</h4>
            <p className="text-zinc-300 text-sm">門票只係RMB 10，老人優惠RMB 5，開放時間8:30-17:30，建議預留兩小時慢慢睇。</p>
          </div>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🍜 午餐：陶陶居飲茶</h3>
          <p className="text-gray-300 mb-6">
            參觀完陳家祠，已經係中午十二點。我坐地鐵去上下九，準備去陶陶居第十甫路總店嘆茶。呢間係1880年老字號，響門口已經聞到蝦餃嘅香味。
          </p>
          <p className="text-gray-300 mb-8">
            我叫咗一壺普洱茶，點心就試咗陶陶居百年燒賣王、鮮蝦腐皮卷、芒果凍布甸......全部都係即叫即整，新鮮熱辣辣。食住嘢睇住窗外嘅荔枝灣路，感受吓老廣州嘅生活節奏，舒服！
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🏰 下午：沙面島</h3>
          <p className="text-gray-300 mb-6">
            食完午餐，我步行去沙面島。呢度係珠江沖積而成嘅小島，1860年代起就成為外國領事館同教堂嘅集中地。行上行下，兩旁全部都係歐陸風情建築——巴洛克式、哥德式、新古典主義式......彷彿置身歐洲小鎮。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80"
              alt="沙面島歐式建築"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 沙面島上充滿歐陸風情嘅建築，係打卡聖地
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我先去睇咗露德聖母堂，呢間係哥德式天主教堂，1891年建成，鵝黃色外牆非常靚。然後行去沙面大街，兩旁嘅古樹仲有過百年歷史，響樹蔭下散步，涼爽舒服。
          </p>
          <p className="text-gray-300 mb-8">
            我仲入咗白天鵝賓館嘆杯咖啡，呢間係中國第一間五星級涉外酒店，雖然房價貴，但係咖啡廳價錢合理，可以感受吓一流服務。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🌙 晚上：荔枝灣涌夜遊</h3>
          <p className="text-gray-300 mb-6">
            夜晚七點，我坐地鐵去荔枝灣涌。呢度係廣州最具嶺南水鄉風情嘅地方！經過保育活化，已經恢復咗昔日「一灣溪水綠，兩岸荔枝紅」嘅美景。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80"
              alt="荔枝灣涌夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 荔枝灣涌嘅夜景，小橋流水、嶺南建築，係打卡聖地
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我坐咗荔枝灣遊船，一邊吹住晚風，一邊睇住兩岸燈光。經過文塔、梁氏宗祠、小畫舫齋......導遊講解得好詳細，了解到好多嶺南歷史。
          </p>
          <p className="text-gray-300 mb-8">
            落船之後，我響附近嘅小食檔食咗碗艇仔粥——呢個係我今次旅程最難忘嘅味道！一碗熱辣辣嘅粥，配上油條、花生、魷魚絲，滋味到不得了。
          </p>

          <p className="text-gray-300 mb-4">
            今晚我入住咗靠近北京路嘅廣州賓館，係1960年代嘅歷史建築，性價比超高，一晚只係RMB 400。
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-3xl font-bold text-amber-400 mt-16 mb-8 flex items-center gap-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">2</span>
            第二天：越秀公園晨運 · 石室教堂打卡
          </h2>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🌳 早上：越秀公園晨運</h3>
          <p className="text-gray-300 mb-6">
            朝早六點，我已經起身去越秀公園晨運。呢個公園係廣州最大嘅綜合性公園，入面有越秀山、鎮海樓、明代古城牆......唔單止係休閒好去處，仲係了解廣州歷史嘅重要場所。
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

          <p className="text-gray-300 mb-6">
            我先去睇咗五羊石像——呢個係廣州城市標誌，五隻羊寓意「五羊銜穀，救護蒼生」，好多市民晨運完都會嚟呢度影相打卡。
          </p>
          <p className="text-gray-300 mb-8">
            然後行上山去鎮海樓，俗稱「五層樓」，係明洪武十三年（1380年）建成，係廣州標誌性建築。入面係廣州博物館，我響門口買咗張門票（RMB 10），慢慢睇咗成個上午。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">⛪ 下午：石室聖心大教堂</h3>
          <p className="text-gray-300 mb-6">
            午餐響北京路附近嘅酒樓解決，我叫咗個例牌燒味飯，RMB 25，好抵食。食完晏就坐地鐵去一德路，睇石室聖心大教堂。
          </p>
          <p className="text-gray-300 mb-6">
            呢間係東南亞最大嘅哥德式天主教堂，1863年由法國設計師設計，用咗25年先至建成。教堂全部用花崗岩砌成，所以又叫「石室」。
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

          <p className="text-gray-300 mb-6">
            我去嘅時候剛好係下午三點，陽光透入彩色玻璃窗，見到七彩光芒，非常夢幻！不過要留意，進入需要穿着得體，短褲短裙唔可以內進。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🛍️ 下午：北京路、上下九</h3>
          <p className="text-gray-300 mb-6">
            離開石室教堂，我坐地鐵去北京路。呢度係廣州最繁華嘅商業街，地下仲有千年古道遺址——行下行下就可以見到宋、元、明、清各朝代嘅路面層層疊加，非常有趣！
          </p>
          <p className="text-gray-300 mb-6">
            然後行去上下九步行街，呢度係老廣州嘅購物天堂，有好多老字號——蓮香樓、陶陶居、銀記腸粉......全部都可以一站式試勻。
          </p>
          <p className="text-gray-300 mb-8">
            我響順記冰室食咗個椰汁西米露，呢間係1943年創立，係老廣州集體回憶！仲有達楊原味燉品嘅椰子燉雞湯，一人一個椰子，熱辣辣咁捧住嚟飲，暖粒粒。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🌃 晚上：珠江夜遊</h3>
          <p className="text-gray-300 mb-6">
            夜晚八點，我響天字碼頭上咗珠江夜遊船。一邊睇住小蠻腰（廣州塔）嘅璀璨燈光，一邊睇住兩岸嘅霓虹倒映響珠江水面，非常浪漫。
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

          <p className="text-gray-300 mb-4">
            船程一個鐘頭，我全程響甲板上吹風影相，雖然有啲凍，但係值！如果你想慳錢，其實海心沙亞運公園可以免費睇到對岸嘅小蠻腰夜景，但係我覺得夜遊珠江係另一種體驗。
          </p>

          {/* ===== 第三天 ===== */}
          <h2 id="day3" className="text-3xl font-bold text-amber-400 mt-16 mb-8 flex items-center gap-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">3</span>
            第三天：白雲山登高 · 滿載而歸
          </h2>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🏔️ 早上：白雲山登高</h3>
          <p className="text-gray-300 mb-6">
            今日係旅程嘅最後一日，我決定去白雲山登高。白雲山係廣州最高峰，海拔382米，雖然唔算高，但係風景優美，空氣清新，非常適合晨運。
          </p>
          <p className="text-gray-300 mb-6">
            我坐地鐵去白雲文化廣場站，然後轉巴士去白雲山南門。門票只係RMB 5（老人優惠），我選擇坐纜車上山（單程RMB 25），再行路落山，比較舒服。
          </p>
          <p className="text-gray-300 mb-8">
            山頂廣場可以俯瞰成個廣州，見到密密麻麻嘅樓房、彎彎曲曲嘅珠江、仲有遠處嘅小蠻腰......對我呢個退休人士來說，真係心曠神怡。
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🍜 午餐：最後嘅嘆茶時光</h3>
          <p className="text-gray-300 mb-6">
            下山已經係中午，我坐地鐵去南園酒家嘆最後一頓午餐。呢間係1960年代老字號，係園林式酒家，我叫咗潮汕滷味、蝦餃、XO醬炒蘿蔔糕......全部都係經典粵菜。
          </p>
          <p className="text-gray-300 mb-6">
            食住嘢，我回味住今次旅程——陳家祠嘅精美雕刻、沙面島嘅歐陸風情、越秀公園嘅五羊石像、石室教堂嘅七彩光影、荔枝灣涌嘅水鄉夜色、珠江夜遊嘅浪漫......
          </p>
          <p className="text-gray-300 mb-8">
            廣州真係一個好值得慢慢品味嘅城市！
          </p>

          <h3 className="text-xl font-bold text-amber-300 mb-4">🚄 下午：回程</h3>
          <p className="text-gray-300 mb-6">
            下午三點，我坐高鐵回程。一個鐘頭就到深圳北站，然後轉地鐵回香港。今次廣州之旅，正式完美結束。
          </p>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">📝 遊記總結</h3>
            <p className="text-gray-300 mb-4">
              三日兩夜，我由陳家祠行到白雲山，由沙面島行到荔枝灣涌，每一個地方都有佢獨特嘅嶺南風情。
            </p>
            <p className="text-gray-300 mb-4">
              最難忘嘅一定係荔枝灣涌隔夜舔嘅艇仔粥——一碗熱辣辣嘅粥，配上油條、花生、魷魚絲，滋味到不得了。
            </p>
            <p className="text-gray-300">
              總預算大約 HK$1,500-2,500，包含交通費、住宿、餐飲、門票，性價比超高！
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