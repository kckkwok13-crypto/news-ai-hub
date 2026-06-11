"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function HumenPage() {
  const [activeSection, setActiveSection] = useState("day1");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 text-gray-100">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-slate-800/95 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-5 w-56 shadow-xl shadow-teal-500/10">
          <h3 className="text-sm font-bold text-teal-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 shadow-lg shadow-teal-500/30"
                      : "text-gray-300 hover:text-teal-400 hover:bg-slate-700/50"
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
          className="inline-flex items-center gap-2 text-teal-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-teal-500/20 border border-teal-500/30"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 text-center border border-teal-500/30 shadow-xl shadow-teal-500/10">
          <div className="inline-block bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            一人背包行 ‧ 尋味東莞
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-relaxed">
            獨闖煙雨伶仃：一個人的虎門兩日歷史與商圈慢活隨筆
          </h1>
          <p className="text-gray-400 italic">二零二六年盛夏 ‧ 第一身自由行深度記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/gba-humen-fort.jpg"
          alt="虎門威遠炮台"
          className="w-full rounded-2xl mb-6 shadow-xl shadow-teal-500/10"
        />
        <p className="text-center text-gray-400 text-sm mb-10">
          威武的虎門大橋與銷煙池，留著近代歷史開篇時最震撼的民族記憶
        </p>

        {/* Intro Quote */}
        <div className="bg-slate-800/50 border-l-4 border-teal-500 pl-6 pr-4 py-4 rounded-r-xl mb-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            「大半生習慣了熱鬧與遷就，退休後反而迷上了獨行。帶上一個背包，一張高鐵票，來到伶仃洋畔的虎門。兩天一夜，按著自己嘅心意，看銷煙歷史，逛繁華商圈，品味一個人嘅絕對自由。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-gray-300 leading-loose mb-8 text-justify">
          自從步入無憂無慮嘅退休時光，我特別享受「一個人說走就走」的清靜。身邊老友常覺得，一個人旅行未免孤單。其實不然，獨行最美妙的地方，在於你擁有了時間的絕對控制權 ── 想在哪裡駐足就在哪裡驻足，累了就找家茶樓喝茶，晚上隨心去逛夜市。東莞虎門，這個以前在歷史書上讀過無數次的地方，原來不僅有沉甸甸的民族往事，更是一座極其現代化、商圈林立、充滿人間煙火氣的休閒小城。兩天一夜，不趕行程，一切剛剛好。
        </p>

        <article className="prose prose-lg max-w-none text-gray-300">
          {/* ===== 出發與落腳 ===== */}
          <div className="bg-slate-800/50 border border-teal-500/20 rounded-2xl p-6 my-8">
            <h3 className="text-teal-400 font-bold mb-4 text-xl">⚙️ 出發與落腳：一個人的精明行、住智慧</h3>
            <p className="text-gray-300 mb-4 text-justify">
              獨自出門，交通第一講求「高效率、不折騰」。早上十點，我由香港西九龍站坐上<strong className="text-teal-400">高鐵直達虎門站</strong>，車程僅需 38 分鐘！到埗後，前往市區主要景點或商圈，我全靠<strong className="text-teal-400">網約的士（滴滴）與市內巴士</strong>相結合。一人出行，網約車隨叫隨到，省去了在大熱天四處問路、等車的折騰。而且虎門的主要景點之間距離適中，打車收費相宜，對我們銀髮一族的精力和體力而言非常友善。
            </p>
            <p className="text-gray-300 text-justify">
              在挑選住宿時，一個人的原則是「高CP值、位於核心商圈、出入方便」。我挑選了位於虎門大道核心地段的<strong className="text-teal-400">東莞虎門美思威爾頓酒店</strong>（或是位於萬達廣場旁的<strong className="text-teal-400">美豪麗致酒店</strong>）。威爾頓酒店高聳入雲，是虎門的標誌性地標，頂層的 360 度旋轉餐廳視野極佳。最重要嘅是，酒店下樓步行幾分鐘就是大型購物廣場和著名的黃河時裝城，無論是吃飯、逛街還是坐車都極其便利，性價比極高。
            </p>
          </div>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-teal-500/30 pb-3">
            🌅 第一天：重溫近代史詩、萬達廣場慢逛與光明路夜市鑊氣
          </h2>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            第一天中午抵埗後，我一腳踏進了歷史的洪流 ── <strong className="text-teal-400">鴉片戰爭博物館（林則徐銷煙池舊址）</strong>。作為一個人在虎門的第一站，這裡的震撼力無與倫比。漫步在綠樹成蔭的園區裡，看著那兩個當年震驚中外的銷煙池舊址，以及一尊尊帶著歷史彈痕、面朝大海的古老青銅鐵炮，耳邊彷彿還能聽見百年前的隆隆炮聲。一個人慢慢走、細細看館內的歷史文物和蠟像，沒有人催促，這種與歷史無聲對話的感覺，是團隊旅遊絕對無法給予的深刻體驗。
          </p>

          <div className="my-10">
            <img
              src="/images/gba-humen-fort.jpg"
              alt="虎門威遠炮台"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-400 text-sm mt-4">
              威武的虎門大橋與銷煙池，留著近代歷史開篇時最震撼的民族記憶
            </p>
          </div>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            午後，我搭的士回歸現代，前往虎門近年最繁華的<strong className="text-teal-400">虎門萬達廣場與天虹購物中心</strong>。這是一座極其龐大、現代化的綜合商場。退休人最享受這種冷氣充足、地面全平坦、好行又不費腳力的環境。我在商場裡慢悠悠地逛了半天，看著裡面琳瑯滿目的現代店鋪。累了，就走進老字號茶樓點了一壺醇厚的熟普洱，要了一份東莞傳統的<strong className="text-teal-400">「鮮蝦腸粉」</strong>、醬汁蒸鳳爪和外脆內嫩的<strong className="text-teal-400">「手作大良炸牛奶」</strong>。一個人的圓桌，邊飲茶邊看著落地玻璃窗外廣場上嬉戲的小孩和散步的街坊，市井的安詳讓人無比舒適。
          </p>

          <p className="text-gray-300 leading-loose mb-8 text-justify">
            入夜後，虎門嘅「夜生活」對我這個獨行俠而言，最佳去處莫過於充滿市井溫情與鑊氣的<strong className="text-teal-400">執信路與光明路夜市步行街</strong>。每當霓虹燈亮起，整條老街擺滿了綿延數百米的美食攤檔。退休人腸胃要顧，以下幾樣地道街頭宵夜溫和、鮮美又極之易消化：
          </p>

          {/* 夜市美食推介框 */}
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-teal-400 font-bold mb-4 text-xl">🌙 獨行俠嘅虎門夜市美食地圖</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="text-justify">
                <strong className="text-teal-400">老莞城「傳統明火白沙臘味飯」：</strong>用虎門特產的白沙臘腸鋪在絲苗米上用小砂鍋現煲，臘油完全滲透進米飯中，金黃焦香，油潤而不膩。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">生滾「虎門膏蟹麻蝦粥」：</strong>現點現熬的粥底完全見不到米粒，極之綿密。裡面大方地放入一整隻本地肥美的膏蟹和鮮甜的麻蝦，臨起鍋撒上一把蔥花與冬菜，每一口都是綿長的鮮甜，暖胃又好消化。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">傳統手工「糖不甩」與薑汁雙皮奶：</strong>在執信路步行街的老店裡，吃一碗熱呼呼的雙皮奶。奶香極濃，淡淡的薑辣味最適合深夜散步後暖胃驅寒。
              </li>
            </ul>
          </div>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-teal-500/30 pb-3">
            ☀️ 第二天：海防威嚴沙角炮台、時裝城步行街與手信完美歸航
          </h2>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            第二天的清晨，自然醒來。我乘車前往位於海邊的<strong className="text-teal-400">沙角炮台</strong>（或是威遠炮台）。這裏剛好位於珠江口的咽喉要道。慢步在古老的瀕海花崗岩城牆上，身旁是保存完好的「「白草鼻」、「捕魚台」等清代古炮台。抬頭望去，宏偉的<strong className="text-teal-400">虎門大橋</strong>凌空橫跨浩瀚的伶仃洋，現代建築的宏偉與中世紀古炮台的滄桑在同一個鏡頭裡交織，空間壓縮感與史詩感瞬間拉滿。我找路人幫忙拍了一張與大橋同框的照片，在海風吹拂下，心中一片豁達。
          </p>

          <p className="text-gray-300 leading-loose mb-6 text-justify">
            午後，我來到了全中國最著名的服裝集散地 ── <strong className="text-teal-400">黃河時裝城與富民服裝步行街</strong>。雖然我不打算大肆採購，但來到這裡，走在延綿幾個街區、充滿活力的服飾步行街上，看著滿街琳瑯滿目的潮流服飾與講價聲，那種撲面而來的商業生命力，十分好玩。
          </p>

          {/* 手信推介框 */}
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-teal-400 font-bold mb-4 text-xl">🎁 獨行俠精選 ── 虎門必帶地道手信</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="text-justify">
                <strong className="text-teal-400">白沙油鴨（臘鴨）：</strong>虎門白沙村的傳統名產，歷史悠久。鴨體肥瘦適中，皮薄肉嫩，帶有獨特的臘香與淡淡的酒香，冬天蒸飯或者炒芥蘭是一絕。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">東莞面豉醬：</strong>老莞城傳統手工釀造的麵豉醬，豆香濃郁，鹹甜適中，用來蒸排骨或者燜大魚，能瞬間帶出食材的嶺南鮮甜。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">手作新村腐竹：</strong>純手工柴火熬製的豆皮豆竹，豆香正規，久煮不爛，是帶回家給家人打邊爐或煲糖水的上等健康食材。
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-loose mb-8 text-justify">
            下午四點，背著裝滿地道手信的背包，我再次坐上的士前往虎門高鐵站。這兩天一夜的行程，沒有走馬看花的疲累，只有銷煙池畔的沉思、大劇院/萬達廣場的悠閒、沙角海風的豁達，與光明路夜市那一碗暖胃的蟹膏粥。慢下來才驚覺，一個人的旅行，原來可以過得如此精緻、從容與安詳。虎門這一趟，真係值了！
          </p>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-teal-500/30 pb-3">
            💡 獨行俠 ‧ 虎門慢活自由行隨身手札
          </h2>

          <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-gray-300">
              <li className="text-justify">
                <strong className="text-teal-400">住宿與商圈選擇小智慧：</strong>一人出行，強烈推薦住在黃河時裝城或萬達廣場附近。一來周邊全是平坦的現代化人行道，二來下樓就是大型商場，即使深夜一個人去逛夜市、吃宵夜都極之安全、熱鬧，交通也最便利。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">網約車App要準備好：</strong>虎門的服裝貿易發達，上下班高峰期商業區容易塞車。一人出行最聰明的方法是靈活運用「美團打車」或「高德地圖」App 叫的士，司機普遍對港人十分熱情，省去街頭日曬雨淋等車的辛苦。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">防滑與鞋履提醒：</strong>沙角炮台、威遠炮台內部多為古老的花崗岩石階與瀕海碎石路，雨後或者海霧大時容易滑倒。<strong className="text-teal-400">請務必穿著一雙抓地力好、舒適的運動健步鞋</strong>，行路步履放慢。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">防曬與隨身裝備：</strong>虎門作為海濱港口，海邊炮台景區四周毫無遮擋，陽光炙熱且海風較大。出門隨身背包裡最好帶備一把<strong className="text-teal-400">輕便晴雨傘</strong>、<strong className="text-teal-400">遮陽帽</strong>以及一件<strong className="text-teal-400">薄風衣外套</strong>，方便隨時增減衣物，提防著涼。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6 my-10">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              ─ 歲月漫漫，獨行方知天地寬。願每位退下火線的老朋友，都能在旅途中找到屬於自己的從容。 ─
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-slate-800/50 border border-teal-500/20 rounded-2xl p-6 my-10">
            <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              👇 你去過虎門嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="gba-humen-2days" />
    </div>
  );
}