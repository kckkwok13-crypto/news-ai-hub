"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "day3", title: "第三天", emoji: "🌙" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function HongKongPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-slate-800/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-56 shadow-xl shadow-amber-500/10">
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
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg shadow-amber-500/30"
                      : "text-gray-300 hover:text-amber-400 hover:bg-slate-700/50"
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
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-amber-500/20 border border-amber-500/30"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 text-center border border-amber-500/30 shadow-xl shadow-amber-500/10">
          <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            親友同遊 ‧ 玩轉香江
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-relaxed">
            東方之珠盡情歡聚：帶親戚老友三天兩夜玩轉香港全攻略
          </h1>
          <p className="text-gray-400 italic">二零二六年盛夏 ‧ 第一身精明東道主自由行記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/hongkong-harbour.jpg"
          alt="香港維多利亞港夜景"
          className="w-full rounded-2xl mb-6 shadow-xl shadow-amber-500/10"
        />
        <p className="text-center text-gray-400 text-sm mb-10">
          天星小輪與維港夜景，是無論來過香港多少次都必定要攜友重溫的靈魂畫面
        </p>

        {/* Intro Quote */}
        <div className="bg-slate-800/50 border-l-4 border-amber-500 pl-6 pr-4 py-4 rounded-r-xl mb-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            「難得親戚老友一班人話要嚟香港探我，作為東道主，最緊要安排得體、玩得盡興、最緊要係食得地道！香港酒店雖然貴，但只要用啱智慧，一樣可以搵到物超所值嘅海景落腳點。三天兩夜，出發！」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-gray-300 leading-loose mb-8 text-justify">
          親戚朋友難得拉大隊嚟香港玩，身為本地人，最頭痛嘅往往是住宿同行程規劃。人人皆知「香港寸金尺土，酒店特別貴」，一班人圍埋如果住得太差會失禮，住得太貴荷包又心痛。其實，只要避開傳統商業中心區嘅地段，香港隱藏著不少「物超所值」嘅高質素酒店。這趟三日兩夜嘅行程，我全副精明心思盡出，帶住大家坐叮叮車、欣賞維港夜景、逛爆滿鑊氣嘅廟街夜市，由傳統玩到新潮，親友個個豎起大拇指讚好！
        </p>

        <article className="prose prose-lg max-w-none text-gray-300">
          {/* ===== 落腳點 ===== */}
          <div className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">🏨 落腳點智慧：香港「物超所值」優質酒店推介</h3>
            <p className="text-gray-300 mb-4 text-justify">
              帶一班人出行，酒店一定要交通方便、乾淨，而且價格不能太離譜。這次我為親友精選了兩間物超所值嘅口袋名單：
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              <strong className="text-amber-400">第一間是位於港島區的北角海逸酒店。</strong>相比起銅鑼灣或中環，北角只需幾分鐘地鐵車程，但價格平了近三分之一！最正嘅是它面向維港，親友一開窗就能看到無敵大海景，樓下步行一分鐘就是地鐵站和電車總站，老人家出入完全不費力。
            </p>
            <p className="text-gray-300 text-justify">
              <strong className="text-amber-400">第二個選擇是位於九龍核心的佐敦木的地酒店 (Hotel Madera Hong Kong)。</strong>這是一間隱藏在市中心的精品酒店，房間空間在香港市區來說算得上是「非常寬敞」，設計極具現代感，頂樓更設有一個高空全景吧。最重要嘅是，一出門口就是無數老字號茶餐廳，行去旺角或尖沙咀都只需十多分鐘，性價比極高，讓親戚們大讚我這個東道主懂得搵好嘢！
            </p>
          </div>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/30 pb-3">
            🌅 第一天：港島復古叮叮車、天星小輪與廟街夜市鑊氣
          </h2>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            第一天中午接了親友到酒店安頓後，我們展開了最經典、最省錢嘅老香港體驗 ── <strong className="text-amber-400">乘搭「叮叮車」電車</strong>。一班人坐在雙層電車的上層靠窗位置，吹著微風，看著中環與灣仔的摩天大樓與古老街景在眼前如電影般掠過，每人只需幾塊錢，卻好玩得不得了。我們在金鐘下车，步行前往中環花園道，乘搭全新翻新的<strong className="text-amber-400">山頂纜車</strong>登上太平山頂。當纜車以凌空角度爬升，兩旁的摩天大樓瞬間傾斜，一班朋友興奮得驚呼連連。站在凌霄閣頂端，俯瞰整個維多利亞港的壯麗全景，親友直言「這趟香港行，值了！」
          </p>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            傍晚，我們從中環天星碼頭乘搭百年歷史的<strong className="text-amber-400">天星小輪</strong>渡海前往尖沙咀。幾塊錢的海上航程，卻能近距離欣賞全世界最美麗的城市天際線。下船後，慢步在<strong className="text-amber-400">尖沙咀海濱長廊與星光大道</strong>，和李小龍銅像合照，正好碰上晚上八點的「幻彩詠香江」燈光音樂騷，極之震撼。
          </p>

          <div className="my-10">
            <img
              src="/images/starferry-harbour.jpg"
              alt="天星小輪與維港夜景"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-400 text-sm mt-4">
              天星小輪與維港夜景，是無論來過香港多少次都必定要攜友重溫的靈魂畫面
            </p>
          </div>

          <p className="text-gray-300 leading-loose mb-8 text-justify">
            入夜後，一班人嘅「夜生活」絕對不能錯過充滿香港靈魂的<strong className="text-amber-400">廟街夜市</strong>！現在的廟街加入了全新的「食街」元素，變得非常熱鬧。我們挑了一家最出名的平民大排檔，在路邊的大圓桌坐下。我幫大家點了幾道最具「鑊氣」的招牌特色菜：招牌的<strong className="text-amber-400">「避風塘炒辣蟹」</strong>，蟹肉鮮甜，滿滿的蒜酥香辣過癮；還有熱氣騰騰的<strong className="text-amber-400">「廟街興記煲仔飯」</strong>，炭火逼出焦香的鍋巴，淋上甜豉油，香氣四溢；再配上一大盤<strong className="text-amber-400">「椒鹽瀨尿蝦」</strong>和東風螺。一班親友圍坐在一起，喝著大牌檔的冰鎮藍妹啤酒，吹著夜風聊天，這種最地道、最痛快的香港夜生活，讓每個人都大呼過癮！
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/30 pb-3">
            ☀️ 第二天：黃大仙求福、旺角步行街玩樂與西九龍高空日落
          </h2>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            第二天的清晨，早茶文化是招待親友的重頭戲。我帶大夥兒前往旺角老字號的<strong className="text-amber-400">倫敦大酒樓</strong>。這裏依舊保留了全香港少見的<strong className="text-amber-400">「傳統推車仔」飲茶文化</strong>。當大叔大嫲推著冒著白煙的點心車穿梭，老友記們一擁而上「搶點心」，好玩極了！點心極之出色：必吃<strong className="text-amber-400">「鮮蝦鵪鶉蛋燒賣」</strong>、湯汁濃郁的<strong className="text-amber-400">「豉汁蒸排骨」</strong>，以及新鮮出爐、外皮酥脆的<strong className="text-amber-400">「酥皮叉燒酥」</strong>和<strong className="text-amber-400">「古法馬拉糕」</strong>。一邊飲著壽眉，一邊體驗這種即將消失的港式情懷，親友們都覺得新鮮感滿分。
          </p>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            吃飽後，早上先去香火鼎盛的<strong className="text-amber-400">黃大仙祠</strong>為家人祈福求平安。午後，我們一頭扎進全香港最熱鬧的<strong className="text-amber-400">旺角女人街與西洋菜南街步行街</strong>。這裡不僅是買手信、平價潮流玩物的天堂，更是體驗香港高密度都市活力嘅好去處。我們逛了專賣動漫潮流玩物的信和中心，親友中的年輕人買到失控；累了就走進街角的老字號茶餐廳，吃一個外脆內軟的<strong className="text-amber-400">菠蘿油</strong>，配一杯絲滑濃郁的<strong className="text-amber-400">冰鎮絲襪奶茶</strong>，這便是最正宗的港式下午茶。
          </p>

          <div className="my-10">
            <img
              src="/images/westkowloon-sunset.jpg"
              alt="西九文化區日落"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-400 text-sm mt-4">
              西九文化區的遼闊草坪，是近年香港最受歡迎、最能飽覽維港日落的新興文青好去處
            </p>
          </div>

          <p className="text-gray-300 leading-loose mb-8 text-justify">
            傍晚時分，我帶大家來到近年香港最矚目的地標 ── <strong className="text-amber-400">西九文化區藝術公園</strong>。這裡擁有全香港最寬闊的海濱草坪。我們隨意在草地上席地而坐，正對著維港西面的海平線。看著落日晚霞將天空染成一片粉橘色，現代化的M+博物館同香港故宮文化博物館在身後矗立，環境舒服得不得了。晚餐我們安排在鄰近的尖沙咀吃正宗的<strong className="text-amber-400">深井陳記燒鵝</strong>，皮脆肉嫩，鵝汁拌飯，簡直是極品美味。
          </p>

          {/* ===== 第三天 ===== */}
          <h2 id="day3" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/30 pb-3">
            🌙 第三天：大館歷史穿越、深水埗平民尋味與手信完美歸航
          </h2>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            第三天的行程，我們來到港島區近年大熱的文化保育景點 ── <strong className="text-amber-400">大館（舊中區警署）</strong>。這裡由百年前的古老監獄與警署改造成藝術園區，紅磚牆與現代鋼鐵結構交織，極具視覺衝擊。我和親友們穿梭在狹窄的舊牢房裡，體驗了一把當年的歷史穿越感，好玩之餘又極具教育意義。隨後順道乘坐全亞洲最長的<strong className="text-amber-400">中環半山自動扶手電梯</strong>，一路上俯瞰蘇豪區的異國情調。
          </p>

          {/* 手信推介框 */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">🌙 東道主私藏手信與平民好去處指南</h3>
            <p className="text-gray-300 mb-4 text-justify">
              臨行前，少不了要帶親友去搜羅最具香港特色、又物超所值的手信。我帶大夥兒去了<strong className="text-amber-400">深水埗老街</strong>，這裏是香港最平民化、最具本土生命力的地方：
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="text-justify">
                <strong className="text-amber-400">珍妮曲奇 (Jenny Bakery) 小熊餅乾：</strong>雖然排隊人多，但那款純手工製、牛油味極其濃郁、入口即化的四味曲奇，依然是親友帶回家送禮的無冕之王。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">深水埗「公和荳品廠」：</strong>帶親友現場吃一碗滑溜的百年傳承古法豆腐花，再買幾盒手工煎釀豆腐，價格平到偷笑，卻是最正直的街坊老味道。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">陳意齋手工零食：</strong>位於中環的老字號，它的「燕窩糕」、「薏米餅」同「蝦子札蹄」全香港獨家手工製作，古法秘製，最適合帶回去孝敬長輩。
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-loose mb-8 text-justify">
            下午四點，提著沉甸甸的手信與滿滿的歡笑回憶，我開車/打車送親友們前往高鐵站和機場。這三天兩夜的行程，雖然沒有入住昂貴的六星級酒店，但憑著精明的選址與地道的老廣玩法，我們不僅省下了大筆銀兩，更真正深入了香港的骨血與市井。慢下來才發現，香港最美的風景不僅是璀璨的霓虹，更是與最珍貴的親友老友一齊在大牌檔大口吃肉、在海邊吹風大笑的相聚時光。香港這趟行，大家約好下次還要再來！
          </p>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-amber-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/30 pb-3">
            💡 親友同遊 ‧ 香港精明自由行隨身手札
          </h2>

          <div className="bg-slate-800/80 border border-amber-500/30 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-gray-300">
              <li className="text-justify">
                <strong className="text-amber-400">精明交通必備：</strong>一到埗立刻幫每位親友購買一張「八達通」卡，或者綁定好手機支付寶/微信的「香港乘車碼」。不論是坐叮叮車、天星小輪還是港鐵，一刷即過，免去一班人在收銀機前數零錢的尷尬與浪費時間。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">大排檔與餐廳預位智慧：</strong>廟街大排檔（如興記）或深井燒鵝在週末晚上往往大排長龍。帶一班親戚同行最忌等太久，建議<strong className="text-amber-400">提早於傍晚 18:00 左右進場</strong>，不僅容易拿到大圓桌，上菜速度也快得多。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">長者與高低落差防護：</strong>香港老城區（如中環半山、大館附近）地形多山，階梯與斜坡極多。<strong className="text-amber-400">務必提醒親友穿著防滑、舒適的健步鞋</strong>。如果老人家走累了，在市區千萬不要省的士費，幾個人平攤的士費有時比坐地鐵還要方便省力。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">應對香港溫差：</strong>香港盛夏戶外炙熱，但地鐵、大商場以及酒樓內部的冷氣往往開得像北極冰庫（一熱一冷極易感冒）。請務必隨身背包裡為家人帶備一件<strong className="text-amber-400">薄外套或防風大絲巾</strong>。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 my-10">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              ─ 獅子山下，歡聚有時，慢活方知時光美。願親友情誼永固，期待我們下一站再出發！ ─
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              👇 你去過香港嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}