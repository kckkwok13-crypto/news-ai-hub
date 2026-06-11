"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function FoshanPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-red-50 text-gray-800">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-xl border border-red-200 rounded-2xl p-5 w-56 shadow-xl shadow-red-200/30">
          <h3 className="text-sm font-bold text-red-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/30"
                      : "text-gray-600 hover:text-red-700 hover:bg-red-50"
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
          className="inline-flex items-center gap-2 text-red-600 hover:text-white mb-8 transition-colors bg-red-100 px-4 py-2 rounded-full hover:bg-red-600"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-400 shadow-xl shadow-red-200/30">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            老友同遊 ‧ 禪城尋味
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-relaxed">
            老友記齊齊出發：佛山兩日一夜功夫與順德美食慢活隨筆
          </h1>
          <p className="text-red-200 italic">二零二六年盛夏 ‧ 第一身結伴同行自由行記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/foshan-zumiao.jpg"
          alt="佛山祖廟"
          className="w-full rounded-2xl mb-6 shadow-xl shadow-red-200/30"
        />
        <p className="text-center text-gray-500 text-sm mb-10">
          佛山祖廟的傳統醒獅與武術表演，是第一天行程中最具朝氣、最不容錯過的視覺盛宴
        </p>

        {/* Intro Quote */}
        <div className="bg-red-50 border-l-4 border-red-600 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-gray-700 text-lg leading-relaxed">
            「退休後最開心嘅事，莫過於約埋大半生相識嘅幾位知心老友，撇開兒孫，自由自在話走就走。今次我地一班人揀了底穩深厚、有功夫又有無盡美食嘅佛山，兩天一夜，一路開懷大笑，一路尋味嶺南。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-gray-700 leading-loose mb-8 text-justify">
          常言道「獨樂樂不如眾樂樂」，退下火線之後，日子清閒了，最難得就是一班老朋友依然身體健康、志同道合。平時在香港飲茶聚會總覺得時間不夠，這次我們幾個人一拍即合，決定北上佛山來一趟兩日一夜嘅深度慢活與玩樂自由行。佛山（古稱禪城）是黃飛鴻與李小龍嘅故鄉，除了滿街嘅武術歷史，更有吃不盡的粵菜精髓。一班老友同行，步伐依舊悠閒，但熱鬧程度卻翻了倍！
        </p>

        <article className="prose prose-lg max-w-none">
          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-red-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            🌅 第一天：無痛出發、嶺南天地慢步與夜市鑊氣
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            我們幾位老友記出行，最緊要交通「不折騰、不費力」。早上十點，我們在香港西九龍站坐<strong className="text-red-600">高鐵直達廣州南站，隨即直接在站內無縫轉乘「廣佛線」地鐵直達佛山市中心</strong>，全程不出一小時多點，平穩舒適，大家在車廂裡已經傾到停不下來。在佛山市內，因為我們有幾個人同行，最聰明、最划算嘅做法就是<strong className="text-red-600">直接用手機網約大車（的士）</strong>，平攤下來每人只需幾塊錢，直接送到景點大門口，完全免去了老人家轉車攀爬之苦。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            今次嘅落腳點，我為大家挑選了位於禪城核心的<strong className="text-red-600">佛山馬哥孛羅酒店</strong>。這家酒店地點絕佳，下樓出門就是大名鼎鼎的「嶺南天地」步行街和祖廟，對我們隨時想回房小憩、喝杯熱茶的老友記來說，簡直是無上嘅貼心。酒店房間寬敞，床鋪極之舒適，站在高層還可以俯瞰老城區錯落有致的青磚瓦頂。
          </p>

          <div className="my-10">
            <img
              src="/images/foshan-zumiao.jpg"
              alt="佛山祖廟"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              佛山祖廟的傳統醒獅與武術表演，是第一天行程中最具朝氣、最不容錯過的視覺盛宴
            </p>
          </div>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            放下行李，我們第一站直奔傳奇的<strong className="text-red-600">佛山祖廟</strong>。這裡不僅是古建築嘅寶庫，更是黃飛鴻與葉問嘅紀念館所在地。最貼心嘅是，每天中午這裏都有正宗的<strong className="text-red-600">黃飛鴻武術與嶺南醒獅表演</strong>！伴隨著震耳欲聾的鑼鼓聲，色彩斑斕的醒獅在懸空嘅梅花樁上高低騰挪，做出眨眼、搔癢等維妙維肖的動作，最後一躍採青，精彩絕倫！我們幾位老友看得熱血沸騰，一邊拍掌一邊大喊喝彩，彷彿回到了大半個世紀前的廟會時光。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            從祖廟出來，大夥兒步入毗鄰的<strong className="text-red-600">嶺南天地步行街</strong>。這裡由大片清代嶺南大屋與鑊耳牆古建築群改造而成，地面平坦，林蔭密佈，極之好行。我們幾個人一邊逛著精緻的陶瓷公仔鋪，一邊開心地聊天。累了，就走進老字號<strong className="text-red-600">「民信老鋪」</strong>（或仁信老鋪），每人點一碗正宗的<strong className="text-red-600">「順德雙皮奶」</strong>和薑汁撞奶。這裏之雙皮奶用的是純水牛奶，面上結著厚厚一層奶皮，入口香濃滑溜，甜度對我們長者而言剛剛好，老友記們吃得讚不絕口。
          </p>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            入夜後，一班老友嘅「夜生活」自然是要尋覓最接地氣的煙火氣。我們搭的士前往禪城著名的<strong className="text-red-600">創意產業園夜市</strong>（或是文沙路夜市）。這裡一到晚上熱鬧非凡，各種霓虹燈帶與露天音樂交織。我們挑了一家平民大排檔，點了幾道東莞/佛山極具「鑊氣」的順德菜：招牌的<strong className="text-red-600">「順德魚生」</strong>（不習慣生食的老友則點了清蒸大河鮮）、焦香多汁的<strong className="text-red-600">「大良炸牛奶」</strong>、以及經典的<strong className="text-red-600">「順德拆魚羹」</strong>。拆魚羹熬得奶白綿密，裡面滿滿都是細緻的魚肉絲與勝瓜絲，溫胃易消化。老朋友們圍坐在一起，喝著當地的生啤酒，吹著微涼的晚風，天南海北地暢談大半生嘅往事，這份愜意，千金不換。
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-red-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            ☀️ 第二天：老字號純手工嘆早茶、逢簡水鄉慢遊與手信尋味
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            第二天的清晨，老友記們不睡懶覺，因為今天我們要去體驗佛山最頂級的「飲茶文化」。我們特意打車前往位於順德區（或老禪城）的老字號茶樓──<strong className="text-red-600">東城酒家</strong>（或是南國酒家）。一班老朋友圍坐大圓桌，沏上一壺濃郁的普洱，慢慢「嘆」老廣州最正宗的一盅兩件。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            這裏的點心全手工製作，極顯心思。我為大夥兒點了幾樣必吃招牌：第一是<strong className="text-red-600">「鮮蝦韭黃布拉腸」</strong>，粉皮薄如蟬翼，滑溜順口；第二是我們這個年紀最愛的懷舊點心<strong className="text-red-600">「香芋蒸排骨」</strong>與<strong className="text-red-600">「醬汁鮮竹卷」</strong>，腐皮吸飽了鮮美的湯汁，軟糯入味；當然少不了佛山特產<strong className="text-red-600">「柱侯牛腩麵」</strong>和新鮮出爐的<strong className="text-red-600">「順德倫教糕」</strong>，糕身帶有獨特的微酸清甜與綿密氣孔，彈牙不黏齒。一班老友一邊夾點心，一邊大讚「這才是真正嘅老味道！」吃得舒心又滿足。
          </p>

          <div className="my-10">
            <img
              src="/images/foshan-zumiao.jpg"
              alt="逢簡水鄉"
              className="w-full rounded-2xl grayscale"
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              順德逢簡水鄉的依依小橋流水，是老友同遊、拍照留念最療癒的江南卷軸
            </p>
          </div>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            飲飽茶後，下午我們乘車前往有「嶺南周莊」之稱的<strong className="text-red-600">逢簡水鄉</strong>。這裡遠離都市喧囂，古老的桑基魚塘與小橋流水交織。最適合一班老友嘅「好玩節目」，莫過於<strong className="text-red-600">幾個人合租一艘傳統的木製搖櫓船（烏篷船）</strong>。我們坐在船艙裡，兩岸是參天的古榕樹和斑駁的明清古祠堂，船伕大姐一邊搖槳一邊哼著小調，清風徐來，水波不興。大家在船上互相幫忙拍照，擺出各種功夫姿勢，一路上充滿了歡聲笑語，好玩得不得了。
          </p>

          {/* 手信與玩樂推薦 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <h3 className="text-red-700 font-bold mb-3 text-xl">🌙 老友同遊手信與玩樂美食指南</h3>
            <p className="text-gray-700 mb-4 text-justify">
              臨行回家前，大夥兒少不了要到老街尋覓地道手信，帶回家給家人或留作紀念。這幾樣東東最具佛山特色：
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-red-600">盲公餅：</strong>佛山最著名、擁有兩百年歷史的傳統糕點。用炒米粉、花生、芝麻與豬肉手工烘烤而成，甘香酥脆，咬下去滿口生香。
              </li>
              <li className="text-justify">
                <strong className="text-red-600">大良蹦砂：</strong>順德大良的傳統小吃，外形像一隻美麗的蝴蝶。用麵粉、南乳與糖鹽炸至金黃，口感香脆，帶有濃郁的南乳甘香，是配普洱茶的絕品。
              </li>
              <li className="text-justify">
                <strong className="text-red-600">石灣公仔（陶瓷）：</strong>如果喜歡文玩，在祖廟周邊可以買一尊精緻的「石灣公仔」陶塑，人物面部表情栩栩如生，極具嶺南民間收藏價值。
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            下午四點，一班老友記提著沉甸甸的手信與滿滿的歡笑回憶，齊齊來到順德站或佛山西站坐上回港的高鐵。這兩天一夜的行程，有醒獅的熱血、大排檔的痛快、搖櫓船的悠閒與老茶樓的茶香。慢下來才發現，旅行最美的風景，不僅是沿途的嶺南風情，更是大半生過去後，身邊依然有一班陪你一齊笑、一齊瘋、一齊尋味嘅知心老友。佛山這趟行，真係值了！
          </p>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-red-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            💡 老友同遊 ‧ 佛山慢活自由行隨身手札
          </h2>

          <div className="bg-red-100 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-amber-600">一班人出行住宿秘笈：</strong>強烈推薦住在禪城區的「嶺南天地」附近（如馬哥孛羅酒店或東瑞酒店），一出門口就是平地步行街與無數茶餐廳。晚上大夥兒聊到多晚，都能安步當車走回酒店，極之安全方便。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">網約車分攤智慧：</strong>佛山各大景點（如禪城祖廟到順德水鄉）之間有一定距離。一班朋友出行（4人左右）<strong className="text-red-600">最聰明的交通方式就是用「滴滴出行」叫一部七人商務車或大型的士</strong>。不僅免去長者在烈日下等車、轉地鐵的辛苦，平攤下來車費比坐地鐵還要划算！
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">防滑與鞋履提醒：</strong>祖廟內部、嶺南天地步行街以及逢簡水鄉多為古老的石磚路和麻石台階，雨後或者清晨潮濕時容易打滑。<strong className="text-red-600">請務必提醒同行的老友記一齊穿著防滑、寬鬆的運動健步鞋</strong>。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">劇場與溫差防護：</strong>佛山夏季陽光炙熱，而祖廟博物館、各大茶樓及地鐵內部的冷氣往往開得像冰庫。隨身背包裡最好帶備一把<strong className="text-red-600">輕便晴雨傘</strong>以及一件<strong className="text-red-600">薄風衣外套/大絲巾</strong>，方便隨時增減，提防一冷一熱著涼感冒。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center italic">
              ─ 執子之手，老友同行，慢活方知歲月美。願大夥兒友情永固，精神矍鑠，下一站我們再出發！ ─
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-10">
            <h3 className="text-red-700 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              👇 你去過佛山嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-red-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="gba-foshan-2days" />
</div>
  );
}