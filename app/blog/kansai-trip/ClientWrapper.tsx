"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

const tocItems = [
  { id: "intro", title: "行程概覽", emoji: "🗾" },
  { id: "day1", title: "第一天", emoji: "📍" },
  { id: "day2", title: "第二天", emoji: "📍" },
  { id: "day3", title: "第三天", emoji: "📍" },
  { id: "day4", title: "第四天", emoji: "📍" },
  { id: "day5", title: "第五天", emoji: "📍" },
  { id: "day6", title: "第六天", emoji: "📍" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function KansaiTripPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments?slug=kansai-trip");
      const data = await res.json();
      if (data.comments) setComments(data.comments);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "kansai-trip",
          author: "家人旅人",
          content: newComment,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setComments([data.comment, ...comments]);
        setNewComment("");
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Failed to submit comment", err);
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-950">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-emerald-900/95 to-teal-800/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-emerald-500/10">
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
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      : "text-emerald-200/80 hover:text-white hover:bg-emerald-800/50"
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
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-white mb-8 transition-colors bg-emerald-800/30 px-4 py-2 rounded-full hover:bg-emerald-700/30"
        >
          ← 返回 Blog
        </Link>

        {/* Hero Header */}
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-emerald-500/30">
            🏯 關西深度遊
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            關西和風漫步：一家人的大阪、京都、神戶六日慢活與商圈全攻略
          </h1>
          <h2 className="text-xl text-emerald-400 font-semibold mb-4">京阪神 6 天 5 夜家庭慢活之旅</h2>
          <p className="text-emerald-300/70">二零二六年仲夏 · 純粹旅人 · 一家大隊長自由行記述</p>
        </header>

        {/* Hero Image */}
        <div className="my-8 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20">
          <img
            src="/images/kansai-kansai-hero.jpg"
            alt="京都清水寺"
            className="w-full h-72 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kiyomizu.jpg";
            }}
          />
        </div>
        <p className="text-center text-emerald-300/60 text-sm mb-12">
          ▲ 京都清水寺的千年木構舞台，俯瞰古都的極致風光
        </p>

        {/* Introduction Quote */}
        <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-12">
          <p className="text-emerald-100 text-lg italic leading-relaxed">
            「平日工作忙碌，退下火線後最珍貴的就是陪家人。今次帶着屋企人老少大隊長暢遊日本關西。不走回頭路、不趕鴨子，用最舒服的交通與高CP值的商圈住宿，享受屬於我們一家人的幸福時光。」
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* Section 1: Overview */}
          <section id="intro" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>🗾</span> 行宿智慧：跨城交通與「物超所值」商圈酒店
            </h2>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              帶一家人跨城，交通第一講求「平穩、直達、免搬行李」。我們從關西機場到埗後，全靠
              <strong className="text-emerald-400">JR特急「Haruka」與「利木津巴士」</strong>
              。跨城去京都或神戶，我選擇了
              <strong className="text-emerald-400">JR新快速列車或是的高速電鐵</strong>
              ，位置寬敞、班次極密。在市區老街或爬坡段，我更是毫不猶豫
              <strong className="text-emerald-400">靈活運用網約的士（如Uber/GO App）</strong>
              ，幾個人平攤車費與香港相若，卻能直接送到景點門口，完全免去了家人在鐵路站內迷路與長途步行的折騰。
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              至於最頭痛的「落腳點」，為了物超所值且兼顧全家人的空間需求，我放棄了市中心狹窄的標準雙人房，在大阪挑選了位於核心商圈的
              <strong className="text-emerald-400">大阪心齋橋 MIMARU（美滿如家）公寓式酒店</strong>
              。MIMARU這類公寓酒店房間非常寬敞，內置小廚房與大圓桌，晚上全家人可以圍坐在一起吃宵夜聊天。而且下樓步行兩分鐘就是心齋橋步行街與地鐵站，旁邊商場林立，價格平攤下來比連鎖酒店划算得多！
            </p>
          </section>

          {/* Day 1 */}
          <section id="day1" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第一天：抵達大阪、心齋橋步行街慢逛與道頓堀水上驚喜
            </h2>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              第一天中午由關西機場乘坐特急直達市中心酒店。安頓過後，我們放慢步調，下樓直接開逛全港人最愛的大阪
              <strong className="text-emerald-400">心齋橋步行街</strong>
              。這裡設有全封閉的巨型遮陽拱頂，不論晴雨都十分好行。一班人一邊走着，一邊逛着林立的藥妝店和特色雜貨鋪。隨後，我們來到旁邊的
              <strong className="text-emerald-400">大丸百貨（Daimaru）與 PARCO 百貨廣場</strong>
              ，商場現代化且冷氣充足，老人家也能在舒適的休息區坐坐，各取所需。
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              入夜後，大阪的「夜生活」主角非
              <strong className="text-emerald-400">道頓堀</strong>
              莫屬。霓虹燈牌在運河兩岸亮起，巨大的固力果跑跑人霓虹招牌前擠滿了人。我們全家不擠人群，而是選擇了最省力、最優雅的玩樂方式 ── 乘搭
              <strong className="text-emerald-400">道頓堀觀光水上觀光船</strong>
              。二十分鐘的航程，坐在船上吹着晚風，從運河低角度欣賞兩岸璀璨的招牌倒影，好玩又舒服。晚餐我們在河畔的老字號
              <strong className="text-emerald-400">「蟹道樂」</strong>
              享用精緻的螃蟹會席料理，螃蟹刺身與炭火燒蟹腿肉質鮮甜，對長者而言極易消化，全家人吃得津津有味。
            </p>
          </section>

          {/* Day 2 */}
          <section id="day2" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第二天：京都古都穿越、金閣寺與清水寺平緩漫步
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/kansai-kinkakuji.jpg"
                alt="金閣寺"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://www.japan-guide.com/g18/3908_top.jpg";
                }}
              />
              <p className="text-center text-emerald-300/60 text-sm py-3 bg-emerald-900/20">
                ▲ 金閣寺的金箔舍利殿在藍天白雲下熠熠生輝，倒影於鏡湖池中
              </p>
            </div>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              第二天一早，我們乘搭火車直達古都京都。為了保障家人的體力，我們直接在京都站包了一輛的士。第一站來到世界文化遺產
              <strong className="text-emerald-400">金閣寺（鹿苑寺）</strong>
              。這座矗立在鏡湖池畔、外牆鋪滿純金金箔的舍利殿，在藍天白雲與翠綠松柏的襯托下倒影水中，金碧輝煌得如同畫卷。這裡的參觀步道全部由細碎的砂石平地鋪成，全無階梯，非常適合全家人悠閒漫步拍大片。
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              午後，我們前往大名鼎鼎的
              <strong className="text-emerald-400">清水寺與二年坂、三年坂步行街</strong>
              。雖然清水寺建在山坡上，但我們聰明地坐的士直達最頂端的山門口，順着下坡路一路往下逛，這樣就能
              <strong className="text-emerald-400">完美避開了辛苦爬坡的台階</strong>
              。一路上，古色古香的日式木造町屋開滿了抹茶鋪與手工藝品店。我們走進老字號茶屋，每人吃一碗香濃的宇治抹茶芭菲與軟糯的
              <strong className="text-emerald-400">「京糰子」</strong>
              ，享受愜意的日式下午茶。晚餐安排在祇園吃正宗的
              <strong className="text-emerald-400">湯豆腐料理與懷石料理</strong>
              ，清清淡淡，最懂養生之道。
            </p>
          </section>

          {/* Day 3 */}
          <section id="day3" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第三天：京都嵐山竹林仙境、野宮神社與嵯峨野小火車
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/kansai-arashiyama.jpg"
                alt="嵐山竹林"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://www.jrailpass.com/blog/wp-content/uploads/2016/05/arashiyama-bamboo-grove-kyoto-e1466611768221.jpg";
                }}
              />
              <p className="text-center text-emerald-300/60 text-sm py-3 bg-emerald-900/20">
                ▲ 嵐山竹林小徑，高聳的翠竹遮天蔽日，微風吹過傳來沙沙的竹濤聲
              </p>
            </div>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              第三天是屬於京都大自然的治癒日。我們來到風景如畫的
              <strong className="text-emerald-400">嵐山</strong>
              。清晨的嵐山遊人尚少，我們牽着家人漫步在著名的
              <strong className="text-emerald-400">渡月橋</strong>
              畔，看着保津川的潺潺流水。隨後踱步走入著名的
              <strong className="text-emerald-400">嵯峨野竹林小徑</strong>
              。高聳入雲的翠竹遮天蔽日，微風吹過傳來沙沙的竹濤聲，環境幽靜極了。小徑旁的
              <strong className="text-emerald-400">野宮神社</strong>
              黑木鳥居極具歷史感，大夥兒在這裡為家人的健康虔誠祈福。
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              中午，我們安排了全家最期待的玩樂節目 ── 乘搭
              <strong className="text-emerald-400">嵯峨野浪漫小火車（Torokko Train）</strong>
              。復古的蒸汽小火車沿着陡峭的保津川峽谷緩緩行駛，窗外是怪石嶙峋與茂密的森林。當火車駛過鐵橋，司機還會貼心地慢速行駛讓全家人拍照，車廂內充滿了歡聲笑語。午餐我們在嵐山老街吃了一碗熱騰騰的
              <strong className="text-emerald-400">「鯡魚蕎麥麵」</strong>
              ，麵條爽口，鯡魚燜得酥軟骨酥，暖心又暖胃。
            </p>

            {/* Food Highlight Box */}
            <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-xl p-6 my-8">
              <h3 className="text-emerald-400 font-bold text-lg mb-3 flex items-center gap-2">
                🌙 關西平民夜生活：大阪法善寺橫丁與黑門市場夜市煙火
              </h3>
              <p className="text-emerald-100/80 mb-4">
                回到大阪的晚上，如果想帶家人感受最地道的日本夜市煙火氣，這兩個隱藏在市中心的好去處千萬別錯過：
              </p>
              <ul className="space-y-3 text-emerald-100/80">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">法善寺橫丁：</strong>
                    一條隱藏在難波商圈背後的青石板老街。兩旁開滿了掛着紅燈籠的復古居酒屋。街心的法善寺守護着滿身青苔的「水掛不動尊」，全家人入鄉隨俗上前潑水祈福，拍照極具江戶風情。
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">黑門市場：</strong>
                    傍晚的黑門市場部分攤檔會變身夜市。我們大快朵頤了現點現烤的
                    <strong className="text-emerald-400">「黑毛和牛串燒」</strong>
                    ，油脂甘香入口即化；還有碩大肥美的
                    <strong className="text-emerald-400">「炭燒帆立貝」</strong>
                    與現切的鮮金槍魚刺身。大口吃肉，熱氣騰騰，最撫人心。
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Day 4 */}
          <section id="day4" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第四天：神戶港灣浪漫、北野異人館與物超所值「神戶牛」大餐
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/kansai-kobe.jpg"
                alt="神戶港夜景"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://live.staticflickr.com/5665/23557746365_eeaf08109e_b.jpg";
                }}
              />
              <p className="text-center text-emerald-300/60 text-sm py-3 bg-emerald-900/20">
                ▲ 神戶港灣的璀璨夜景，紅色港口塔與 Mosaic 摩天輪在夜色中熠熠生輝
              </p>
            </div>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              第四天我們將目光投向了充滿異國情調的港口城市 ──
              <strong className="text-emerald-400">神戶（Kobe）</strong>
              。由大阪坐火車只需半小時。早上我們先搭車前往山坡上的
              <strong className="text-emerald-400">北野異人館街</strong>
              。這裡在明治時代是外國領事和商人的聚居地，一棟棟帶有小花園的歐式紅磚別墅（如風見雞館、萌黃之館）錯落有致。我們在充滿星巴克復古概念店的紅磚洋房裡喝杯咖啡，拍起照來彷彿置身於歐洲小鎮。
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              中午是這趟旅程的味覺高潮！來到神戶，怎能不吃大名鼎鼎的
              <strong className="text-emerald-400">神戶牛肉（Kobe Beef）</strong>
              ？為了物超所值，我沒有挑選觀光客滿座的貴價店，而是提早預約了三宮商圈的老字號鐵板燒
              <strong className="text-emerald-400">「Mouriya」</strong>
              。師傅在我們大圓桌前的鐵板上熟練地煎烤着頂級神戶牛排。當牛肉表面煎得金黃，內裡肉質呈現完美粉紅色，放入口中，極致的牛油香氣伴隨着肉汁在舌尖瞬間爆開，全家人驚呼「太美味了！」
            </p>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              飽餐後，傍晚我們來到
              <strong className="text-emerald-400">神戶港海濱樂園（Harborland）</strong>
              。這裡擁有大型的購物廣場
              <strong className="text-emerald-400">UMIE 與 Mosaic 馬賽克商場</strong>
              ，平坦好行。入夜後，紅色的神戶港口塔與巨大的神戶海洋博物館亮起璀璨的霓虹夜燈。全家人坐在海濱木棧道上，看着巨大的遊輪緩緩進港，海風溫涼，這份神戶獨有的港灣夜生活，浪漫到了極致。
            </p>
          </section>

          {/* Day 5 */}
          <section id="day5" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第五天：大阪城公園歷史登高、梅田藍天大廈空中走廊與藍調夜景
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/kansai-osaka-castle.jpg"
                alt="大阪城"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://osakacastle.org/wp-content/uploads/2025/01/Osaka-Castle-Spring-2.jpg";
                }}
              />
              <p className="text-center text-emerald-300/60 text-sm py-3 bg-emerald-900/20">
                ▲ 大阪城天守閣在護城河之巔巍然矗立，白牆綠瓦、飛簷鍍金，氣勢磅礴
              </p>
            </div>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              第五天我們回到大阪，進行最後的商圈大滿足。早上先去宏偉的
              <strong className="text-emerald-400">大阪城公園</strong>
              。我們貼心地為家人購買了
              <strong className="text-emerald-400">園區小火車票</strong>
              ，直接免去從公園門口步行到天守閣的長途勞累。矗立在巨型護城河之巔的天守閣白牆綠瓦、飛簷鍍金，氣勢磅礴。我們乘電梯登上天守閣頂層，遠眺整座大阪市的繁華全景，老人家看得連連讚嘆。
            </p>
            <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/kansai-umeda.jpg"
                alt="梅田藍天大廈"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/2018_Umeda_Sky_Building.jpg";
                }}
              />
              <p className="text-center text-emerald-300/60 text-sm py-3 bg-emerald-900/20">
                ▲ 梅田藍天大廈的空中庭園展望台，173米高空俯瞰整個大阪市璀璨夜景
              </p>
            </div>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              午後，我們一頭扎進全日本最發達的商圈 ──
              <strong className="text-emerald-400">梅田商圈（Umeda）</strong>
              。這裡大型商場多不勝數，如
              <strong className="text-emerald-400">Grand Front Osaka、LUCUA、以及大丸百貨梅田店</strong>
              。傍晚，我帶大家登上鄰近的
              <strong className="text-emerald-400">梅田藍天大廈（Umeda Sky Building）</strong>
              ，乘搭那條宛如時光隧道的懸空電梯登上離地173米的
              <strong className="text-emerald-400">空中庭園展望台</strong>
              。當夜幕低垂，360度的露天環形走廊下，整個大阪市上萬盞璀璨的夜燈如星河般在腳下鋪開，震撼得讓人屏息。
            </p>
          </section>

          {/* Day 6 */}
          <section id="day6" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📅</span> 第六天：臨空城 Outlets 瘋狂採購與手信完美歸航
            </h2>
            <p className="text-emerald-100/90 leading-relaxed mb-4">
              旅程的最後一天，我們不把行程排滿。退房後，我們乘搭火車提早抵達關西機場對岸的
              <strong className="text-emerald-400">臨空城 Outlets（Rinku Premium Outlets）</strong>
              。這是一座極具美國西海岸風情的大型露天購物廣場，地面完全平坦，行李可以妥當寄存。這裡聚集了上百家國際與日本本土品牌，價格常年有折扣，是我們回港前最後衝刺、搜羅物超所值手信的絕佳好去處！
            </p>

            {/* Souvenir Highlight */}
            <div className="bg-amber-900/30 border border-amber-600/50 rounded-xl p-6 my-8">
              <h3 className="text-amber-400 font-bold text-lg mb-3 flex items-center gap-2">
                🎁 關西必帶 ── 隊長精選地道伴手禮
              </h3>
              <ul className="space-y-3 text-emerald-100/80">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-amber-300">京都「呼吸巧克力」與北山茶之菓：</strong>
                    京都宇治抹茶製成的貓舌餅乾夾着濃郁的白巧克力，甜度高雅，送禮首選。
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-amber-300">神戶 Frantz 魔法壺布丁：</strong>
                    小巧精緻的素燒陶壺裡盛着三層口感的滑溜布丁，奶油濃郁，焦糖微苦，是日本甜品的極品。
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-amber-300">大阪「551蓬萊肉包」：</strong>
                    全手工現做，內餡豬肉洋蔥多汁甘甜，外皮鬆軟，是帶回港在飛機上或回家蒸食的平民美味。
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-emerald-100/90 leading-relaxed">
              下午四點，全家提着沉甸甸的手信與滿滿的歡笑回憶，齊齊在關西機場登機回港。這六天五夜的跨城之旅，我們沒有像年輕人般特種兵趕路，但凭着精明的商圈公寓選址與舒適的交通銜接，既省下了昂貴的開銷，更真正深入了關西的傳統與市井。慢下來才驚覺，幸福其實很簡單 ── 不過是陪着最珍貴的屋企人，在京都的竹林下漫步、在神戶港的晚風中大笑相聚。關西這一趟，全家都話下次還要再來！
            </p>
          </section>

          {/* Travel Tips */}
          <section id="tips" className="mb-12">
            <div className="bg-emerald-800/50 rounded-2xl p-8 border border-emerald-600/30">
              <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                💡 家族同遊 · 關西慢活自由行隨身手札
              </h2>
              <ul className="space-y-4 text-emerald-100/90">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">公寓酒店的無上智慧：</strong>
                    帶一家人出行，MIMARU這類精品公寓式酒店是首選。房內有獨立餐桌與小廚房，晚上去黑門市場或便利店買和牛、水果回來加工，全家圍坐吃宵夜，溫馨、空間大且性價比極高。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">交通卡與ICOCA卡：</strong>
                    一到埗立刻幫每位家人購買一張關西通用「ICOCA卡」，或者準備好手機綁定。無論是搭JR、的高速、阪神還是市內巴士，一刷即過，免去一班人在售票機前數硬幣、浪費時間的尷尬。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">台階與斜坡防護：</strong>
                    清水寺、二年坂及嵐山部分小徑多為古老石磚路。
                    <strong className="text-amber-300">請務必提醒同行的老人家和家人穿著防滑、寬鬆的運動健步鞋</strong>
                    。如果爬坡累了，在市區千萬不要省網約的士費（GO App），幾個人平攤往往比坐地鐵更舒適省力。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">●</span>
                  <div>
                    <strong className="text-emerald-300">嚴防室內外溫差：</strong>
                    日本夏季戶外陽光炙熱，而各大商場、高速電鐵以及新幹線內部的冷氣往往開得極大。隨身背包裡最好為老人家帶備一件
                    <strong className="text-amber-300">輕便薄外套或大絲巾</strong>
                    ，提防着涼感冒。
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
          <div className="bg-emerald-800/30 rounded-xl p-5 text-center border border-emerald-700/30">
            <div className="text-2xl mb-2">🗾</div>
            <div className="text-emerald-400 text-sm">目的地</div>
            <div className="text-white font-semibold">大阪 · 京都 · 神戶</div>
          </div>
          <div className="bg-emerald-800/30 rounded-xl p-5 text-center border border-emerald-700/30">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-emerald-400 text-sm">行程</div>
            <div className="text-white font-semibold">6天5夜</div>
          </div>
          <div className="bg-emerald-800/30 rounded-xl p-5 text-center border border-emerald-700/30">
            <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
            <div className="text-emerald-400 text-sm">類型</div>
            <div className="text-white font-semibold">家庭慢活遊</div>
          </div>
          <div className="bg-emerald-800/30 rounded-xl p-5 text-center border border-emerald-700/30">
            <div className="text-2xl mb-2">⭐</div>
            <div className="text-emerald-400 text-sm">評分</div>
            <div className="text-white font-semibold">4.9/5</div>
          </div>
        </div>

        {/* Comments Section */}
        <section className="bg-emerald-800/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">💬 留言分享</h3>

          <form onSubmit={handleSubmitComment} className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="分享你的關西遊記..."
              className="w-full bg-emerald-900/50 text-white rounded-xl p-4 mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting || !newComment.trim()}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {isSubmitting ? "發布中..." : "發布留言"}
              </button>
              {submitStatus === "success" && (
                <span className="text-green-400">✅ 留言已發布！</span>
              )}
              {submitStatus === "error" && (
                <span className="text-red-400">❌ 發布失敗，請重試</span>
              )}
            </div>
          </form>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-emerald-300/50 text-center py-8">暫時未有留言，開始分享你的遊記吧！</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-emerald-900/30 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-emerald-400 font-semibold">{comment.author}</span>
                    <span className="text-emerald-500/50 text-sm">{comment.createdAt}</span>
                  </div>
                  <p className="text-emerald-100/80">{comment.content}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center mb-12">
          <p className="text-white text-xl mb-4">
            👇 留言分享：你更想帶家人漫步嵐山竹林，還是在神戶港享受浪漫夜景呢？
          </p>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 hover:underline">
            ← 返回 Blog 列表
          </Link>
        </div>
      </div>
    </div>
  );
}