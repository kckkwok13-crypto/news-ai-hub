"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "prepare", title: "出發準備", emoji: "⚙️" },
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "☀️" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function DongguanPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-gray-800">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-xl border border-emerald-200 rounded-2xl p-5 w-56 shadow-xl shadow-emerald-200/30">
          <h3 className="text-sm font-bold text-emerald-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
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
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-white mb-8 transition-colors bg-emerald-100 px-4 py-2 rounded-full hover:bg-emerald-600"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-400 shadow-xl shadow-emerald-200/30">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            銀齡行腳 ‧ 莞邑古韻
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-relaxed">
            莞邑餘慶：一個退休人的東莞兩日水鄉慢活隨筆
          </h1>
          <p className="text-emerald-100 italic">二零二六年仲夏 ‧ 第一身老派慢活自由行記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/dongguan-keyuan.jpg"
          alt="東莞可園"
          className="w-full rounded-2xl mb-6 shadow-xl shadow-emerald-200/30"
        />
        <p className="text-center text-gray-500 text-sm mb-10">
          東莞可園的園林設計精巧「小巧玲瓏」，是第一天慢活行程的最佳起點
        </p>

        {/* Intro Quote */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-gray-700 text-lg leading-relaxed">
            「大半生聽人講東莞，總覺得這裏只有工廠與喧囂。退下火線後親自前來，才驚覺這裏藏著極美嘅嶺南園林、百年古村與溫潤嘅水鄉煙火。不趕時間，兩天一夜，剛好可以細細品味。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-gray-700 leading-loose mb-8 text-justify">
          自從過咗不受時間拘束嘅退休生活，最鍾意嘅旅行方式就是「去熟知嘅地方尋未知嘅景」。東莞這座城市，距離香港極近，卻長年被外人低估。這趟兩日一夜嘅莞邑慢活行，我撇開了所有走馬看花嘅旅遊景點，全憑一雙腳、一壺茶，行古村、嘆早茶、逛老街步行街、睇光明路夜市，重新找回大半生未曾細品嘅老廣州/老東莞慢活滋味。
        </p>

        <article className="prose prose-lg max-w-none">
          {/* ===== 出發準備 ===== */}
          <h2 id="prepare" className="text-2xl font-bold text-emerald-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            ⚙️ 出發準備：長者嘅「省力、養生」行住智慧
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            老人家出門，交通最講求「快與穩」。早上十點，我由香港西九龍站坐<strong className="text-emerald-600">高鐵直達東莞南站</strong>（或者虎門站），車程只需半小時多點，車廂平穩，最適合我們膝頭哥一般般嘅長者。到埗後，市內出行我全靠<strong className="text-emerald-600">地鐵與的士</strong>相結合。東莞近年地鐵網絡規劃得極好，主要景點都有無障礙電梯；而在歷史老城區，因為巷弄縱橫，行到攰時隨手打個的士，收費相宜，直接送到目的地門口，非常省心。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            至於落腳嘅酒店，我挑選了位於市中心、毗鄰東莞新風貌的<strong className="text-emerald-600">東莞旗峰山鉑爾曼酒店</strong>（或是毗鄰可園的老牌精緻酒店）。這家酒店掩映在旗峰山腳下的綠樹林蔭中，帶有一種嶺南中式庭園嘅幽靜。清晨或傍晚，可以和老伴在酒店花園漫步，空氣中隱隱帶著山林的清香，沒有鬧市嘅尾氣喧囂，對睡眠質素要求高嘅退休人士嚟講，十分舒泰。
          </p>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-emerald-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            第一天：可園嘅嶺南詩意、老字號飲茶與光明路夜市煙火
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            第一天中午到埗後，第一件事就是去「嘆茶」。我特意去了本地老字號<strong className="text-emerald-600">花園粥城</strong>（或老莞城茶樓）。東莞人飲茶講求實惠與原汁原味。老派茶樓有幾樣東西是必點嘅：第一是<strong className="text-emerald-600">「莞香大包」</strong>，麵皮鬆軟，內餡有汁又有鑊氣；第二是極具東莞水鄉特色的<strong className="text-emerald-600">「蟛蜞粥」</strong>或是綿密的<strong className="text-emerald-600">「鮮淡菜鹹排骨粥」</strong>，粥底熬得不見米粒，鮮甜無比，暖胃又易消化。還有必點的<strong className="text-emerald-600">「乾蒸燒賣」</strong>和<strong className="text-emerald-600">「酥皮雞蛋撻」</strong>，一邊喝著普洱，一邊看著窗外慢悠悠嘅城市節奏，心境頓時寬廣不少。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            午後，步行前往嶺南四大園林之一的<strong className="text-emerald-600">東莞可園</strong>。可園面積雖然不大，但設計精巧絕倫，正如前人所說「邀山閣上邀山，可亭座下可亭」。踩在古老嘅青磚麻石路上，穿過迴廊水榭，看著池塘裡金魚游弋、荷花展顏，老伴拉著我拍照，完全沒有商業景區的催促，極之適合我們長者慢步品味。隨後我們踱步到旁邊的<strong className="text-emerald-600">莞城振興路與中興路老街步行街</strong>。這裡保留了大量的民國騎樓建築，雖然外牆略顯斑駁，但開滿了老字號中藥鋪、補鞋鋪與手工藤編店，散發著濃濃的舊時光氣息。
          </p>

          <div className="my-10">
            <img
              src="/images/dongguan-keyuan.jpg"
              alt="東莞可園"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              東莞可園的園林設計精巧「小巧玲瓏」，是第一天慢活行程的最佳起點
            </p>
          </div>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            入夜後，東莞嘅「夜生活」對我們而言，不是歌舞昇平，而是最具人間煙火氣的<strong className="text-emerald-600">光明路夜市</strong>。每當華燈初上，整條老街擺滿了密密麻麻的小吃攤檔。退休人腸胃要顧，我們特意品嚐了幾樣極具人情味的老字號宵夜：一碗<strong className="text-emerald-600">「莞城湯粉」</strong>，用的是當地特有的細米粉，湯底用大地魚和豬骨熬足大半天，清甜無比；再來一份現點現炊的<strong className="text-emerald-600">「老友記豬腸粉」</strong>，淋上香濃的芝麻醬與秘製醬油，滑溜順喉。街邊熱氣騰騰的燒蠔和雞蛋仔香氣交織，看著年輕人朝氣蓬勃的面孔，老夫老妻也彷彿年輕了十歲。
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-emerald-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            第二天：南社明清古村落、水鄉風情與歸真
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            第二天的清晨，在旗峰山的鳥鳴聲中醒來。吃過清淡的早餐後，我們乘車前往茶山鎮的<strong className="text-emerald-600">南社明清古村落</strong>。這是一座擁有八百年歷史的古老村落，相比起江浙水鄉的過度商業化，這裡保留了大量原汁原味的謝氏宗族謝氏祠堂與古民居建築。一條清澈的古運河貫穿全村，兩岸全是由紅荔枝木與青磚砌成的老房子。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            在古村裡慢步，最吸引我嘅是那隨處可見嘅<strong className="text-emerald-600">「紅石牆基」</strong>與百年老榕樹。阿公阿嫲坐在榕樹下搖扇乘涼、用純正的莞邑方言傾偈，自得其樂。我們沿著平緩的河岸棧道漫步，撫摸著那些被歲月剝蝕、長滿青苔的古牆，心中不由得讚嘆前人對家族血脈與宗族傳統的那份虔誠。走累了，我們在河邊的老店裡點了一份東莞著名的手作手信 ── <strong className="text-emerald-600">「麥芽糖柚皮」</strong>與現做的<strong className="text-emerald-600">「陰菜牛腱湯」</strong>。陰菜是東莞特有的干醃蘿蔔，煲出來的湯水清熱潤肺、滋陰下氣，喝下去喉嚨無比舒服，最適合我們這個年紀養生。
          </p>

          {/* 手信與玩樂推薦 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <h3 className="text-amber-700 font-bold mb-3 text-xl">🌙 退休人嘅東莞手信與玩樂發現</h3>
            <p className="text-gray-700 mb-4 text-justify">
              兩天一夜的慢活行接近尾聲，回家前少不了要為街坊老友帶點心意。退休人不愛去大商場嘅連鎖店，這幾樣傳統味道才最得人心：
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-emerald-600">「厚街臘腸」與鴨腳包：</strong>東莞厚街的臘腸小巧玲瓏，俗稱「豆豉腸」。用純豬肉手工作，肥瘦適中，帶有濃郁的山西汾酒香氣，蒸飯一絕。
              </li>
              <li className="text-justify">
                <strong className="text-emerald-600">「道滘裹蒸粽」：</strong>水鄉道滘的傳統名產，裡面裹滿了綠豆、鹹蛋黃、湘蓮和肥美五花肉，經過十幾個小時明火煨煮，入口即化，粽葉香氣入骨。
              </li>
              <li className="text-justify">
                <strong className="text-emerald-600">休閒玩樂推薦 ── 慢遊松山湖「歐洲小鎮」：</strong>如果第二天下午還有餘力，可以去松山湖畔散步。那裡有一片華為仿照歐洲各國小鎮建造的建築群，依山傍水，環境極之優美，踏著單車或慢步在湖邊吹風，舒服又不費力。
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            下午四點，提著沉甸甸的手信與滿滿的療癒回憶，我們再次坐上的士前往高鐵站。這兩天一夜的東莞行程，沒有工業區的機器轟鳴，只有可園的荷風、南社古村的榕蔭與光明路老街的湯粉香。慢下來，才發現東莞這卷嶺南水鄉嘅長卷，原來可以讀得如此舒心與安詳。
          </p>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-emerald-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            💡 銀髮智囊 ‧ 東莞慢活自由行隨身手札
          </h2>

          <div className="bg-emerald-100 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-amber-600">住宿與清幽環境：</strong>東莞馬路寬闊、綠化率極高。長者出行首選東城區旗峰山附近，開門見綠，環境安靜；若喜歡歷史文化，住在莞城區老城區附近則更方便步行逛街。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">防滑與鞋履警告：</strong>南社明清古村落及老街步行街多為古老嘅青石板、紅石磚路。雨後或清晨潮濕時容易打滑。<strong className="text-emerald-600">請務必穿著一雙防滑、有良好足弓支撐嘅運動健步鞋</strong>。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">善用長者優惠：</strong>東莞許多公辦的文化景點、博物館（如可園、鴉片戰爭博物館、東莞展覽館等）對 60 歲或 65 歲以上長者都設有半價甚至<strong className="text-emerald-600">完全免費</strong>的門票福利，購票前台記得出示回鄉證或身份證明文件。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">防暑與防冷氣溫差：</strong>南方仲夏時節室外陽光炙熱，而地鐵及大茶樓內的冷氣往往開得極大。出門隨身背包裡最好帶備一把<strong className="text-emerald-600">輕便晴雨傘</strong>以及一件<strong className="text-emerald-600">薄風衣外套</strong>，提防著涼中暑。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center italic">
              ─ 步履緩緩，歲月悠悠。願每位退下火線的老朋友，都能在莞邑的林蔭下找到屬於自己的慢活節奏。 ─
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 my-10">
            <h3 className="text-emerald-700 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              👇 你去過東莞嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-emerald-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}