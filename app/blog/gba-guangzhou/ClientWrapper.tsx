"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "prepare", title: "出發準備", emoji: "⚙️" },
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "day3", title: "第三天", emoji: "🌆" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function GuangzhouPage() {
  const [activeSection, setActiveSection] = useState("prepare");

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
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-emerald-950/30 to-stone-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-stone-900/95 to-stone-800/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-5 w-56 shadow-2xl shadow-emerald-500/10">
          <h3 className="text-sm font-bold text-emerald-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      : "text-stone-400 hover:text-white hover:bg-stone-800/80"
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
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-white mb-8 transition-colors bg-stone-800/50 px-4 py-2 rounded-full hover:bg-stone-700/50"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-500 shadow-2xl shadow-emerald-500/20">
          <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            銀髮悠遊 ‧ 嶺南隨筆
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-stone-100 leading-relaxed">
            慢活羊城：一個退休人的廣州三日文化行散記
          </h1>
          <p className="text-stone-400 italic">二零二六年盛夏 ‧ 第一身自由行記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/guangzhou-hero.jpg"
          alt="廣州天際線"
          className="w-full rounded-2xl mb-6 shadow-2xl shadow-emerald-500/20"
        />
        <p className="text-center text-stone-500 text-sm mb-10">
          珠江兩岸的璀璨夜色，小蠻腰與對岸的摩天大樓群相映成趣
        </p>

        {/* Intro Quote */}
        <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 border-l-4 border-emerald-600 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-stone-300 text-lg leading-relaxed">
            「大半生都在同時間賽跑，退下火線後，總算明白『慢』字嘅福氣。今次卸下行李，坐上高鐵，不趕景點，只為尋找記憶中那一抹悠閒嘅西關韻味與嶺南煙火。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-stone-300 leading-loose mb-8 text-justify">
          自從過咗朝九晚五、聽電話開會嘅日子，日子長咗，心境也寬咗。常聽身邊嘅老朋友話，想旅行又怕舟車勞頓。其實鄰近嘅廣州，正是一個適合我地銀髮一族放慢腳步、邊走邊食嘅好地方。這趟三日兩夜嘅羊城之旅，我撇開咗走馬看花嘅旅行團，按照自己嘅節奏，行青磚路、飲早茶、逛步行街、睇夜市，重新找回大半生未曾細品嘅嶺南慢生活。
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* ===== 出發準備 ===== */}
          <h2 id="prepare" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            ⚙️ 出發準備：退休人嘅行、住智慧
          </h2>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            年紀大咗，出門旅行第一講求「安穩與舒適」。交通方面，我選擇由香港西九龍站坐<strong className="text-emerald-400">高鐵直達廣州東站</strong>，一來免卻大巴嘅顛簸，二來車廂寬敞，可以起行活動筋骨。到埗後，市內出行我全靠<strong className="text-emerald-400">地鐵與的士</strong>相結合。廣州地鐵網絡極之發達，大部份站點都有完美嘅無障礙電梯，對我地膝頭哥一般般嘅長者十分友善；而當行到攰時，隨手用手機打個的士，收費相宜，直接送到目的地門口，省心省力。
          </p>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            至於「落腳點」嘅酒店，我精心挑選了位於荔灣區嘅<strong className="text-emerald-400">廣州白天鵝賓館</strong>。這間坐落喺沙面島上嘅老牌五星級酒店，對我們這個年代嘅人來說，有一種無可替代嘅情懷。它面向珠江，環境清幽。酒店大堂那座著名嘅「故鄉水」室內瀑布景致依舊，亭台樓閣，綠意盎然。住在沙面，早晚可以喺島上參天古樹下散步，沒有鬧市嘅喧囂，對睡眠質素要求高嘅退休人士嚟講，簡真是無上嘅享受。
          </p>

          <div className="my-10">
            <img
              src="/images/guangzhou-photo3.jpg"
              alt="白天鵝賓館園林景致"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4">
              白天鵝賓館的「故鄉水」，凝聚了幾代旅人的嶺南情懷與精緻園林美學
            </p>
          </div>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            第一天：一盅兩件嘅西關嘆活與璀璨夜生活
          </h2>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            清晨，不用設定鬧鐘，自然醒來。這天嘅重頭戲，是去體驗廣州人骨子裡嘅「飲茶文化」。我沒有去排那些網紅新派茶樓，而是踱步前往荔灣湖公園旁嘅老字號<strong className="text-emerald-400">泮溪酒家</strong>。退休後最幸福嘅莫過於不用同人擠時間，坐在臨湖嘅黑檀木雕花椅上，點一壺普洱，慢慢「嘆」我嘅一盅兩件。
          </p>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            廣州嘅點心確實精緻得像藝術品。老派茶樓有幾樣東西是必點嘅：第一是<strong className="text-emerald-400">「蟹黃乾蒸燒賣」</strong>，肉質彈牙有汁，頂頭帶一點點鮮蟹黃；第二是老廣傳統嘅<strong className="text-emerald-400">「泮塘馬蹄糕」</strong>，半透明嘅糕身裡夾著清甜爽口嘅鮮馬蹄碎，煎得雙面微黃，清熱潤肺；當然少不了<strong className="text-emerald-400">「蜜汁叉燒包」</strong>，麵皮爆口微露內餡，鬆軟不黏牙。一邊飲茶，一邊睇著窗外公園裡晨練、打太極、踢毽子嘅同齡人，這種市井嘅安詳，讓人心頭一暖。
          </p>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            午後，步行到旁邊嘅<strong className="text-emerald-400">永慶坊與上下九步行街</strong>。上下九是廣州極具代表性嘅老牌騎樓步行街，兩旁歷史悠久嘅中西合璧建築雖然略顯斑駁，但充滿了平民百姓嘅生活氣息。漫步在騎樓遮陽避雨嘅過道下，逛逛老字號綢緞鋪，累了就喺街角吃一碗<strong className="text-emerald-400">「順記冰室」</strong>傳統手打嘅椰子雪糕。隨後繞進永慶坊，參觀粵劇藝術博物館，亭台水榭間剛好有本地票友喺度「開局」唱粵曲，琴聲悠揚，跌宕起伏，我這個老樂迷忍不住駐足聽足大半個鐘，大飽耳福。
          </p>

          <p className="text-stone-300 leading-loose mb-8 text-justify">
            入夜後，廣州嘅「夜生活」對我們而言，不是酒吧迪波，而是迷人嘅珠江微風。我選擇了<strong className="text-emerald-400">珠江夜遊</strong>，在天字碼頭登上古色古香嘅遊船。船緩緩駛向海心沙，兩岸嘅摩天大樓與流光溢彩嘅<strong className="text-emerald-400">廣州塔（小蠻腰）</strong>在夜空中交相輝映。坐在甲板上，吹著溫涼嘅江風，看著這座古老商埠現代奢華嘅一面，不可謂不震撼。
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            第二天：雕樑畫棟的宗族史詩與夜市煙火
          </h2>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            第二天的行程，我留給了嶺南藝術嘅最高殿堂 —— <strong className="text-emerald-400">陳家祠（陳氏書院）</strong>。早晨嘅陽光剛好照亮中庭，避開了中午嘅酷熱。這座晚清時期嘅書院，最讓人驚嘆嘅是屋頂和牆壁上無處不在嘅<strong className="text-emerald-400">灰塑、陶塑與木雕</strong>。那些精細到連衣服褶皺都清晰可見嘅三國演義、八仙過海神話人物，在藍天白雲襯托下，栩栩如生。站在天井裡，看著錯落有致嘅庭院，不得不讚嘆前人對家族血脈與傳統工藝嘅那份虔誠與執著。
          </p>

          <div className="my-10">
            <img
              src="/images/guangzhou-photo1.jpg"
              alt="陳家祠木雕"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4">
              陳家祠繁複精絕的雕刻藝術，是嶺南民間工藝毫無保留的靈魂縮影
            </p>
          </div>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            從陳家祠出來，下午前往頗具民國文青氣息嘅<strong className="text-emerald-400">東山口</strong>。這裡曾是民國政要「東山少爺」聚居嘅紅磚洋房區。如今，這些百年老別墅被改造成精緻嘅茶室、畫廊和買手店。行喺綠樹成蔭嘅小巷裡，一邊是斑駁嘅歷史紅磚，一邊是充滿朝氣嘅年輕人，新舊交融，奇妙而和諧。我在一家靜謐嘅院落裡喝了一杯英式下午茶，靜靜地看了一下午書，享受久違嘅清閒。
          </p>

          {/* 夜市美食區塊 */}
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-3 text-xl">🌙 退休人嘅美食發現：寶業路與西華路夜市煙火</h3>
            <p className="text-stone-300 mb-4 text-justify">
              到了晚上，如果想感受廣州最接地氣嘅市井活力，一定要去逛夜市食宵夜。我特意去了本地人极力推介嘅<strong className="text-emerald-400">西華路與寶業路</strong>。這裡雖然不像大商場般高檔，但那份熱氣騰騰嘅「鑊氣」卻最撫人心。退休人腸胃要顧，以下幾樣街坊美食街知巷聞、溫和又美味：
            </p>
            <ul className="space-y-4 text-stone-300">
              <li className="text-justify">
                <strong className="text-emerald-400">「荔銀腸粉」嘅傳統明火布拉腸：</strong>麵皮薄如蟬翼，透著裡面粉嫩嘅牛肉和翠綠嘅韭黃，淋上帶點甜味嘅秘製豉油，滑溜順喉。
              </li>
              <li className="text-justify">
                <strong className="text-emerald-400">正宗西關「艇仔粥」：</strong>生滾粥底熬得完全不見米粒，綿密如絲，裡面大方地鋪滿了生魚片、鮮蝦仁、炸花生、魷魚絲和浮皮，最後撒上一把爽脆嘅油條碎，每一口都是綿長嘅鮮甜，暖胃又易消化。
              </li>
              <li className="text-justify">
                <strong className="text-emerald-400">達楊原味燉品嘅「原隻椰子燉竹絲雞」：</strong>用整隻老椰子作燉盅，清甜嘅椰子水混合了烏雞與藥材嘅精華，火候足，湯清肉嫩，最適合我們這個年紀補氣養生。
              </li>
            </ul>
          </div>

          {/* ===== 第三天 ===== */}
          <h2 id="day3" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            第三天：慢遊千年水鄉，回歸自然與真諦
          </h2>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            旅程嘅最後一天，我決定走遠一點，暫時告別市中心，乘的士前往番禺嘅<strong className="text-emerald-400">沙灣古鎮</strong>。這是一座擁有八百年歷史嘅古老嶺南水鄉，相比起名聲在外嘅周庄烏鎮，這裡保留了更多當地居民原汁原味嘅生活狀態。沒有嘈雜嘅商業叫賣，多的是阿公阿嫲坐在老榕樹下搖扇傾偈嘅自得其樂。
          </p>

          <p className="text-stone-300 leading-loose mb-6 text-justify">
            沙灣古鎮最吸引我嘅是它特有嘅<strong className="text-emerald-400">「蠔殼牆」</strong>。古建築牆體表面密密麻麻地鑲嵌著成千上萬隻巨大的生蠔殼。前人利用大海嘅饋贈，拌入青鹽、泥沙築牆，既能抵禦南方漫長雨季嘅潮濕，又能隔熱防火，冬暖夏涼。撫摸著那些被風雨剝蝕、凹凸不平嘅灰色蠔殼，我不由得由衷佩服嶺南先民與自然和諧共生嘅大智慧。
          </p>

          <div className="my-10">
            <img
              src="/images/guangzhou-photo2.jpg"
              alt="嶺南水鄉"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4">
              沙灣古鎮的嶺南水鄉風情，保留著原汁原味嘅生活狀態
            </p>
          </div>

          <p className="text-stone-300 leading-loose mb-8 text-justify">
            臨行前，在古鎮嘅老店裡吃了一碗現點現沖嘅<strong className="text-emerald-400">沙灣薑撞奶</strong>。看著店家熟練地將滾燙嘅鮮牛初乳從高處沖入盛有老薑汁嘅瓷碗中，靜置三分鐘，神奇地凝結成如豆腐花般細嫩嘅甜品。勺子放上去不沉，入口甜中帶辣，溫熱嘅薑汁順著食道流落胃部，一時間旅途嘅疲勞盡消，為這三天的羊城慢活之旅，畫上了一個圓滿、溫暖嘅句號。
          </p>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-emerald-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            💡 銀髮族 ‧ 廣州慢活自由行手札
          </h2>

          <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-stone-200">
              <li className="text-justify">
                <strong className="text-amber-400">酒店與住宿建議：</strong>對長者而言，沙面島（白天鵝賓館或周邊）是首選，清晨可以喺全封閉無車嘅島上散步慢跑。如果預算有限，選擇東山口或越秀公園附近嘅老牌酒店亦可，出門便是綠地，交通便利。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">防滑與鞋履：</strong>廣州嘅老街如上下九、陳家祠以及沙灣古鎮，多為古老嘅青石板路或麻石路，雨後容易濕滑。請務必穿著一雙防滑、寬鬆、有良好足弓支撐嘅<strong className="text-emerald-400">運動健步鞋</strong>。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">靈活運用優惠：</strong>長者出行記得隨身帶備身份證明文件。廣州許多公辦嘅博物館、歷史古蹟（如陳家祠、南越王墓等）對 60 或 65 歲以上長者都設有半價甚至<strong className="text-emerald-400">完全免費</strong>嘅門票優惠，進場前不妨多問一句售票處。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">隨身必備小物：</strong>南方天氣多變，室內商場與地鐵嘅冷氣往往開得極大，與戶外溫差明顯。隨身背包裡最好帶備一把<strong className="text-emerald-400">輕便晴雨傘</strong>以及一件<strong className="text-emerald-400">薄風衣外套</strong>，方便隨時增減衣物，提防著涼。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <p className="text-stone-300 text-lg leading-relaxed text-center italic">
              ─ 歲月留痕，慢活方知時光美。願每位退下火線嘅老朋友，都能在旅途中找到自己嘅節奏。 ─
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-stone-300 text-lg mb-4">
              👇 你去過廣州嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-stone-800/60 border border-stone-700/50 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}