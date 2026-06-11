"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "🌆" },
  { id: "day3", title: "第三天", emoji: "🌴" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function ZhuhaiPage() {
  const [activeSection, setActiveSection] = useState("day1");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-slate-900/95 to-teal-900/95 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-5 w-56 shadow-2xl shadow-teal-500/10">
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
                      ? "bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
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
          className="inline-flex items-center gap-2 text-teal-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-500 shadow-2xl shadow-teal-500/20">
          <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            銀髮北上 ‧ 百島度假
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100 leading-relaxed">
            慢活海濱：一個退休人的珠海三日度假隨筆
          </h1>
          <p className="text-slate-400 italic">二零二六年盛夏 ‧ 第一身輕鬆自由行記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/zhuhai-lovers-road.jpg"
          alt="珠海情侶路"
          className="w-full rounded-2xl mb-6 shadow-2xl shadow-teal-500/20"
        />
        <p className="text-center text-slate-500 text-sm mb-10">
          珠海情侶路的絕美海岸線，是珠海最溫柔浪漫的城市名片
        </p>

        {/* Ad Banner - After Hero */}
        <div className="my-8 flex justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '728px', height: '90px' }}
            data-ad-client="ca-pub-4745583996243741"
            data-ad-slot="7843298765"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        {/* Intro Quote */}
        <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/20 border-l-4 border-teal-600 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-slate-300 text-lg leading-relaxed">
            「大半生都在同喧囂塞車玩遊戲，退下火線後，最奢侈嘅就是時間。今次經由港珠澳大橋一橋直達，不趕景點，只想在微涼嘅海風中慢步情侶路、泡泡溫泉、聽聽海浪，品味屬於珠海嘅浪漫與煙火氣。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-slate-300 leading-loose mb-8 text-justify">
          自從步入隨心所欲嘅退休生活，日子過得越來越通透。身邊老友常問，北上度假除了擠滿人嘅大商場，還有哪裡好去？其實鄰近嘅珠海，正是一個極之適合我地銀髮一族「慢步度假」嘅花園城市。這趟三日兩夜嘅休閒行，我按照自己嘅養生節奏，看海、飲茶、逛平民夜市、泡海洋溫泉，重新找回生活本該有嘅悠閒與舒泰。
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌅 第一天：舒適抵埗、情侶路聽海與老字號粵菜
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            年紀大咗，旅行最忌舟車勞頓。早上十點，我由香港口岸出發，乘搭<strong className="text-teal-400">港珠澳大橋「金巴」</strong>，大約四十分鐘就無痛直達珠海口岸。一路上看著宏偉的大橋凌空橫跨伶仃洋，氣勢磅礴，令人心曠神怡。過關後，我隨手用手機打個的士前往酒店。珠海馬路寬闊平坦，綠樹成蔭，出行全靠的士或無障礙設施完善嘅巴士，對膝頭哥一般般嘅長者來說，完全沒有負擔。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            今次嘅落腳點，我挑選了坐落喺吉大核心海濱的<strong className="text-teal-400">珠海怡景灣大酒店</strong>（或是情侶路旁的<strong className="text-teal-400">情侶路海景酒店</strong>）。這家老牌五星級酒店雖然帶有歲月痕跡，但勝在面朝大海，窗外就是一望無際嘅港珠澳大橋海景。放下行李，在房間小憩喝杯熱茶，下樓便是大名鼎鼎的<strong className="text-teal-400">情侶路海濱棧道</strong>。清晨與傍晚嘅海風溫涼舒適，慢步到珠海嘅城市徽章<strong className="text-teal-400">「珠海漁女」</strong>像前，看著海浪拍打礁石，沒有鬧市嘅催促，只有大自然嘅治癒。
          </p>

          <div className="my-10">
            <img
              src="/images/zhuhai-fisher-girl.jpg"
              alt="珠海漁女"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              珠海漁女雕像靜靜守護著這片海灣，散發著寧靜溫馨的度假氣息
            </p>
          </div>

          <p className="text-slate-300 leading-loose mb-8 text-justify">
            晚餐時間，我踱步前往本地老字號<strong className="text-teal-400">金悅軒海鮮酒家</strong>。退休後最懂美食精髓，這裏的粵菜火候極足。點了一份招牌的<strong className="text-teal-400">「清蒸深海石斑魚」</strong>，魚肉剛好熟透，鮮嫩彈牙；再配一盤老廣傳統的<strong className="text-teal-400">「鮮蝦膠釀脆皮大腸」</strong>與經典<strong className="text-teal-400">「金牌燒鵝」</strong>，外皮酥脆，鵝油甘香。一邊吃著地道粵菜，一邊透過巨型落地玻璃窗看著港珠澳大橋紛紛亮起璀璨的夜燈，這份「夜生活」古典而優雅。
          </p>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌆 第二天：老街坊飲早茶、日月貝歌劇院與平民海鮮夜市
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            第二天的清晨，自然醒來，這天嘅第一件正經事就是去「飲早茶」。我特意去了本地長者最愛嘅老牌茶樓<strong className="text-teal-400">新海利酒家</strong>。坐在寬敞的圓桌邊，點一壺鐵觀音，慢慢享受我們退休人獨有的悠閒。新海利的點心做得極之傳統：必點<strong className="text-teal-400">「醬汁蒸鳳爪」</strong>，燉得軟爛入味，入口即化，最適合我們長者；還有大方塞滿鮮蝦肉的<strong className="text-teal-400">「金沙紅米腸」</strong>，外軟內脆，層次分明；再加一碗綿密清甜的<strong className="text-teal-400">「陳皮紅豆沙」</strong>，暖胃又潤肺。看著大廳裡街坊四鄰一邊飲茶一邊搖扇傾偈，充滿了濃濃的市井溫情。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            午後，搭的士前往野狸島上的<strong className="text-teal-400">珠海大劇院（日月貝）</strong>。這座建在海上的歌劇院由一大一小兩隻純白色的「貝殼」組成，在藍天碧海的襯托下現代感十足。劇院周邊是一條規劃得極好的海濱步行街，地面完全平坦，沒有惱人的階梯。我們在這裡散散步、吹吹海風，累了就在海邊的咖啡廳點一杯熱茶，欣賞黑色貢多拉與帆船穿梭，十分愜意。如果還有童心，還可以順遊鄰近復古建築群的<strong className="text-teal-400">圓明新園</strong>，漫步亭台樓閣，全然不費腳力。
          </p>

          <div className="my-10">
            <img
              src="/images/zhuhai-opera.jpg"
              alt="日月貝劇院"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              日月貝劇院在夕陽下的身影，現代與古典大海美學的完美交融
            </p>
          </div>

          {/* 宵夜推介框 */}
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-3 text-xl">🌙 宵夜熱點：南屏與夏灣夜市的平民煙火</h3>
            <p className="text-slate-300 mb-4 text-justify">
              到了晚上，如果想感受最地道的珠海夜生活，一定要去逛夜市食宵夜。我特意去了本地人极力推介的<strong className="text-teal-400">夏灣夜市與南屏步行街</strong>。每當夜幕低垂，一排排移動美食車整齊劃一地進場，熱氣騰騰嘅「鑊氣」最撫人心。退休人腸胃要顧，以下幾樣街坊美食溫和又鮮甜：
            </p>
            <ul className="space-y-4 text-slate-300">
              <li className="text-justify">
                <strong className="text-teal-400">本地正宗「明火炭燒生蠔」：</strong>橫琴生蠔肥美碩大，鋪滿鮮打的蒜蓉與一點點辣椒，炭火一逼，蠔汁鮮甜，一口咬下去滿嘴都是大海的肥美。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">潮汕生滾「砂鍋海鮮粥」：</strong>現點現熬的粥底完全見不到米粒，綿密如絲，裡面大方地放入鮮蝦、蟹件同黃花魚，臨起鍋撒上一把冬菜與香菜，暖胃易消化，鮮美到了心底。
              </li>
              <li className="text-justify">
                <strong className="text-teal-400">平民步行街「順德雙皮奶」：</strong>在南屏步行街的老店裡點一碗熱雙皮奶，奶香濃郁，面上那一層厚厚的奶皮滑溜順喉，甜度剛剛好，是最療癒的睡前甜品。
              </li>
            </ul>
          </div>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 第三天 ===== */}
          <h2 id="day3" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌴 第三天：慢遊古村溫泉，尋回健康的真諦
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            旅程嘅最後一天，我決定安排一個養生大節目。早晨乘車前往珠海西區的<strong className="text-teal-400">御溫泉度假村</strong>（或是鄰近老城區的<strong className="text-teal-400">海泉灣海洋溫泉</strong>）。這裡開創了中國溫泉旅遊的先河，最吸引我嘅是它那充滿盛唐及和風中式古典韻味的露天溫泉池。溫泉水是罕見的優質海洋地熱水，富含多種對長者關節、心血管極有裨益的礦物質。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            老榕樹下，白霧裊裊。我換上輕便的浴袍，依序泡了「名酒湯」、「薑湯」與「人參湯」。每泡十五分鐘，就坐在岸邊的竹椅上喝一杯免費的熱涼茶。看著四周木質結構的亭台樓閣，聽著遠處的古箏樂音，大半生累積下來的腰酸背痛彷彿在一瞬間被溫熱的泉水徹底洗淨，身心舒暢。
          </p>

          <div className="my-10">
            <img
              src="/images/zhuhai-hotspring.jpg"
              alt="珠海溫泉"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              御溫泉度假村的日式露天溫泉，在園林景色中放鬆身心
            </p>
          </div>

          <p className="text-slate-300 leading-loose mb-8 text-justify">
            臨行前，在度假村內的「小湯鎮」老街上，吃了一碗地道的<strong className="text-teal-400">手工竹昇麵</strong>。看著師傅現場用大竹竿壓製麵團，煮出來的麵條爽口彈牙，配上幾塊燜得軟爛入味的南乳豬手，大飽口福。下午四點，提著在北山村老街買的手工點心和滿滿的療癒回憶，再次坐車前往港珠澳大橋珠海口岸，輕鬆踏上回港的高鐵/金巴之旅。慢下來，才發現這座花園城市的幸福，原來如此簡單。
          </p>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-teal-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            💡 銀髮智囊 ‧ 珠海慢活自由行隨身手札
          </h2>

          <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-slate-200">
              <li className="text-justify">
                <strong className="text-amber-400">酒店與溫泉選擇：</strong>如果喜歡看海和交通便利，吉大或香洲情侶路旁的酒店是首選（去日月貝、漁女都極近）。如果此行專為「養生泡湯」，建議第二晚直接入住御溫泉度假村，裡面全平地設計，對長者全天候無障礙照顧。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">打車與支付智慧：</strong>建議出發前在手機下載好「美團」或「高德地圖」App 方便隨時叫的士，並綁定好香港電子錢包。珠海的士司機對長者普遍十分禮貌，免去街頭日曬雨淋等車的辛苦。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">防滑與鞋履警告：</strong>海濱棧道、日月貝周邊以及圓明新園的石磚路，在雨後或者清晨海霧大時容易濕滑。請務必穿著<strong className="text-teal-400">一雙防滑、有良好足弓支撐的運動健步鞋</strong>，行路步履放慢。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">防曬與防風增減衣物：</strong>珠海作為海濱城市，海邊（特別是情侶路和野狸島）長年風力較大且陽光炙熱。出門請隨身帶備<strong className="text-teal-400">防曬遮陽帽</strong>、<strong className="text-teal-400">太陽眼鏡</strong>以及一件<strong className="text-teal-400">薄風衣外套</strong>，提防海風吹到頭痛著涼。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <p className="text-slate-300 text-lg leading-relaxed text-center italic">
              ─ 歲月留痕，慢活方知海闊天空。願每位退下火線的老朋友，都能在旅途中找到自己的節奏。 ─
            </p>
          </div>

          {/* Ad Banner - Before Comments */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/20 border border-teal-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              👇 你去過珠海嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
      <Comments slug="gba-zhuhai-3days" />
    </div>
  );
}