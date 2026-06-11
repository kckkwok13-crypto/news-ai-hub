"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "prepare", title: "行前準備", emoji: "⚙️" },
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "🌆" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function MacauPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50 text-gray-800">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-xl border border-blue-200 rounded-2xl p-5 w-56 shadow-xl shadow-blue-200/30">
          <h3 className="text-sm font-bold text-blue-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
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
          className="inline-flex items-center gap-2 text-blue-600 hover:text-white mb-8 transition-colors bg-blue-100 px-4 py-2 rounded-full hover:bg-blue-600"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-400 shadow-xl shadow-blue-200/30">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            銀齡慢活 ‧ 濠江拾遺
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-relaxed">
            鏡海留影：一個退休人的澳門兩日葡韻慢活隨筆
          </h1>
          <p className="text-blue-100 italic">二零二六年盛夏 ‧ 老派自由行深度記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/macau-skyline-twilight.jpg"
          alt="澳門夜景"
          className="w-full rounded-2xl mb-6 shadow-xl shadow-blue-200/30"
        />
        <p className="text-center text-gray-500 text-sm mb-10">
          澳門夜色，葡式建築與霓虹燈光相映成趣
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
        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-gray-700 text-lg leading-relaxed">
            「過咗辛勞半生嘅歲月，如今旅行不再追求景點打卡。提著輕便行李，坐上金巴，只為去澳門尋找那一塊斑駁嘅馬賽克碎石路、一盞溫潤嘅葡撻，同埋屬於老街坊嘅一杯早茶。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-gray-700 leading-loose mb-8 text-justify">
          自從過咗無重擔嘅退休生活，最鍾意就是隨心出發。以前嚟澳門總是以為只有賭場與人潮，行色匆匆。這次我給自己規劃了一個兩日一夜嘅「葡韻慢活自由行」。不趕時間，順著歷史嘅紋理，在南歐風情與中式市井之間踱步，驚覺這座小城對於我們銀髮一族來說，真是一個養心、養胃、又好行嘅後花園。
        </p>

        <article className="prose prose-lg max-w-none">
          {/* ===== 行前準備 ===== */}
          <h2 id="prepare" className="text-2xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            ⚙️ 行前籌劃：長者嘅輕鬆出行智慧
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            年紀大咗，出門旅行最緊要不勞累。交通方面，現在由港珠澳大橋乘搭<strong className="text-blue-600">「金巴」直達澳門邊檢大樓</strong>十分方便，過關後直接轉乘的士或者各大酒店嘅免費接駁巴士（發財車），免去舟車勞頓。在澳門市內，氹仔那邊我全靠<strong className="text-blue-600">澳門輕軌</strong>，站點新穎、全無障礙，而且對長者有票價優惠，坐在車廂內還可以居高臨下欣賞金光大道嘅現代繁華；而行老城區時，因為多斜坡小巷，膝頭哥不宜過度操勞，最聰明嘅做法就是<strong className="text-blue-600">善用的士</strong>，收費公道，免卻爬坡之苦。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            在挑選住宿時，我放棄了那些金碧輝煌但大到行路都迷路的新型賭場酒店，挑選了位於老城區中心、極具歷史情懷的<strong className="text-blue-600">澳門新中央酒店</strong>（或是位於新口岸環境清幽的<strong className="text-blue-600">萊斯酒店</strong>）。新中央酒店近年重新翻修，完美保留了上世紀二、三十年代的復古裝潢，一出門口就是著名的議事亭前地，十分適合我們隨時回房小憩、喝杯熱茶，這才是真正屬於退休人的慢活步調。
          </p>

          <div className="my-10">
            <img
              src="/images/portuguese-square.jpg"
              alt="葡式碎石路"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              老城區的葡式建築與黑白碎石路，交織出一段大半個世紀前的濠江舊夢
            </p>
          </div>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            🌅 第一天：老字號嘆早茶、葡韻漫步與金光璀璨夜生活
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            早晨十一點來到澳門，第一件事當然是去「嘆早茶」。老街坊极力推薦我去位於十月初五街的<strong className="text-blue-600">大龍鳳茶樓</strong>。這是一間擁有超過八十年歷史的老字號，走進去，頭頂懸掛著懷舊雀籠，四周是斑駁的字畫，退休後最享受這種不趕時間的市井氣息。老茶樓的點心真材實料：必點<strong className="text-blue-600">「鵪鶉蛋燒賣」</strong>，如今在香港已很難食到這般懷舊滋味；還有<strong className="text-blue-600">「古法糯米雞」</strong>，荷葉香氣完全滲透進糯米中，軟糯溫胃。這裡最特別的是午後會有本地粵劇名伶現場唱曲，一邊飲著普洱，一邊聽著《鳳閣恩仇未了情》，簡直是人生一大享受。
          </p>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            午後，搭的士來到氹仔的<strong className="text-blue-600">龍環葡韻住宅式博物館</strong>。這裡環境清幽極了，五棟薄荷綠色的葡萄牙式住宅別墅排開，窗前是一片濕地公園。在參天古樹的樹蔭下慢步，看著對岸威尼斯人的繁華，這邊卻獨享一份安詳。隨後順著平緩的自動步行系統（對長者非常省力）踱步至<strong className="text-blue-600">官也街步行街</strong>。兩旁全是充滿香氣的手信鋪與百年老店。在街角買了一盞<strong className="text-blue-600">「安德魯餅店」</strong>現烤的西餅葡撻，酥皮層層鬆脆，內餡蛋香濃郁、燙口綿密，甜而不膩，配上一杯黑咖啡，這便是最好的休閒下午茶。
          </p>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            到了晚上，退休人的「夜生活」不求燈紅酒綠，但求視覺的震撼。我坐上輕軌前往路氹金光大道，步行在金沙城與倫敦人之間的行人天橋。入夜後，<strong className="text-blue-600">澳門倫敦人的大笨鐘與威尼斯人運河</strong>璀璨亮燈，金碧輝煌得彷彿將整個歐洲搬了過來。晚餐我選在官也街附近的<strong className="text-blue-600">「波爾圖葡國餐」</strong>，點了一份味道溫和的<strong className="text-blue-600">「葡式咖哩椰汁雞」</strong>與<strong className="text-blue-600">「馬介休球」</strong>。馬介休魚肉與薯蓉揉合得恰到好處，外脆內軟，配上一口紅酒，微醺之中看著濠江夜色，感嘆生活的美好。
          </p>

          {/* Ad Banner - Between Day 1 and Day 2 */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            🌆 第二天：十月初五街煙火夜市、手信尋味與歸真
          </h2>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            第二天的清晨，我選擇回到半島的老街。如果想避開大三巴那種擠擁的人潮，聰明的長者會像我一樣，清晨九點來到<strong className="text-blue-600">大三巴牌坊</strong>前。此時旅行團未到，陽光斜射在精美的石雕上，四下無人，唯有白鴿飛過。我們不盲目攀爬陡峭的炮台山，而是在下方靜靜欣賞這座十七世紀的聖保祿教堂遺址，拍張乾淨、大氣的照片，感受歷史的肅穆。
          </p>

          <div className="my-10">
            <img
              src="/images/macau-ruins-stpaul.jpg"
              alt="大三巴牌坊"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-500 text-sm mt-4">
              清晨的大三巴牌坊，展現出其最本真、最具靈魂的巴洛克史詩感
            </p>
          </div>

          <p className="text-gray-700 leading-loose mb-6 text-justify">
            隨後，我順著草堆街漫步到<strong className="text-blue-600">康公廟前地</strong>。這裡一帶是澳門傳統的街坊腹地。每逢週末或特定節日，這裡入夜後更會有熱鬧的<strong className="text-blue-600">康公夜市</strong>（或新馬路市集），擺滿了本地街坊的炭燒豬頸肉、煎蠔餅與懷舊麥芽糖，充滿了久違的童年煙火氣。而白天的十月初五街同樣精彩，我來到了老字號<strong className="text-blue-600">「滄洲咖啡小食」</strong>，吃一碗滾燙生滾的牛肉通粉，買一個本地人譽為全澳第一的<strong className="text-blue-600">「酥皮雞蛋撻」</strong>，它的酥皮是用中式油酥的做法，層次比葡撻更分明，入口即化。
          </p>

          {/* 美食推介框 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <h3 className="text-amber-700 font-bold mb-3 text-xl">🌙 退休人嘅澳門手信與玩樂發現</h3>
            <p className="text-gray-700 mb-4 text-justify">
              來到旅程的尾聲，不免要為家中的老友記與兒孫帶點心意。退休人不愛去人擠人的連鎖店，老街坊帶路才找得到真味道：
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-blue-600">最記（或最香）餅家嘅手工炭燒杏仁餅：</strong>隱藏在紅窗門街的巷弄中，遠遠就能聞到木炭烘烤的香氣。師傅現場用木模壓製，裡面夾著甘香的肥肉（冰肉）與粒粒碎杏仁，吃起來帶有一股獨特的炭香味，絕非機器製造可比。
              </li>
              <li className="text-justify">
                <strong className="text-blue-600">晃記餅家嘅肉切酥與老婆餅：</strong>位於氹仔官也街，這家百年老字號至今不設試食、不開分店。它的肉切酥鹹甜帶南乳香，薄脆爽口，是配普洱茶的絕品。
              </li>
              <li className="text-justify">
                <strong className="text-blue-600">慢活玩樂推薦 ── 坐一趟東望洋燈塔纜車：</strong>如果還有體力，可以去二龍喉公園坐全球最短的登山纜車，只需花費幾元澳門幣，兩分鐘即可輕鬆登頂，俯瞰全澳門的市井景致，舒服又不費腳力。
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-loose mb-8 text-justify">
            下午四點，提著沉甸甸的手信與滿滿的回憶，再次坐上的士前往港珠澳大橋口岸。這兩天一夜的行程，沒有賭場的喧鬧，只有葡韻的晚風與老街的茶香。慢下來，才發現澳門這卷嶺南與西洋交織的歷史長卷，原來可以讀得如此有滋有味。
          </p>

          {/* Ad Banner - Before Tips */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-3 border-b border-amber-300 pb-3">
            💡 銀髮智囊 ‧ 澳門慢活自由行隨身手札
          </h2>

          <div className="bg-blue-100 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-gray-700">
              <li className="text-justify">
                <strong className="text-amber-600">住宿地點的考量：</strong>長者出行如果喜歡熱鬧和古蹟，新中央酒店或十六浦附近是首選，出門平坦好行。如果喜歡清幽海景，新口岸的萊斯酒店（羅馬宮廷風）非常安靜，適合靜心修養。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">交通卡小智慧：</strong>建議一到埗就購買一張「澳門通 (Macau Pass)」或者準備好支付寶/微信支付。坐巴士或輕軌只需一刷，省去在大熱天尋找零錢的煩惱，且長者乘車更有優惠。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">避開石板路滑倒：</strong>澳門許多老街（如大三巴斜巷、瘋堂斜巷）是由光滑的葡式碎石鋪成，下雨天或者清晨有晨露時容易滑倒。請務必穿著高抓地力的健步鞋，行路時步履放慢。
              </li>
              <li className="text-justify">
                <strong className="text-amber-600">體力與休息規劃：</strong>老城區地形多山。建議每參觀完一個景點（例如大三巴或議事亭前地），就近找一家茶餐廳、甜品店（如義順牛奶公司）坐下吃碗雙皮奶，<strong className="text-blue-600">每走45分鐘休息15分鐘</strong>，才是最健康的慢活節奏。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center italic">
              ─ 歲月漫漫，步履緩緩。願每位退下火線的老朋友，都能在濠江的晚風中找到屬於自己的悠閒。 ─
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
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-10">
            <h3 className="text-blue-700 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              👇 你去過澳門嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="gba-macau-2days" />
</div>
  );
}