"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🛍️" },
  { id: "beauty", title: "美妝聖地", emoji: "💄" },
  { id: "fashion", title: "潮人服飾", emoji: "👗" },
  { id: "food", title: "夜市美食", emoji: "🍢" },
  { id: "money", title: "換錢攻略", emoji: "💰" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function MyeongdongPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-pink-950 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-rose-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-rose-500/10">
          <h3 className="text-sm font-bold text-rose-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30"
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
          href="/"
          className="inline-flex items-center gap-2 text-rose-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-rose-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>
        
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-rose-500/30">
            🛍️ 首爾自由行 · 購物天堂
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-rose-200 to-pink-300 bg-clip-text text-transparent">
            首爾潮流不夜城：明洞購物街
          </h1>
          <h2 className="text-xl text-rose-400 font-semibold mb-4">Myeongdong 終極狂歡攻略！美妝、美食、換錢全包辦</h2>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-rose-500/20">
          <img
            src="https://cdn.tacdn.com/media/attractions-splice-spp-674x446/07/98/66/66.jpg"
            alt="明洞購物街"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://ik.imagekit.io/tvlk/dam/i/01k7gzsx91r8kxnymnjqc2rq8d.jpeg";
            }}
          />
        </div>
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 集結韓國最新潮流、美妝與街頭美食於一身的首爾心臟地帶 —— 明洞
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果話去東京一定要行澀谷，咁去首爾就絕對唔可以錯過<strong>明洞購物街（Myeongdong）</strong>！呢度係首爾最具代表性嘅超級商圈，無論係最新上架的 K-Beauty 護膚美妝、韓國本土設計師服飾、定係令人垂涎三尺的街頭小食，明洞通通都可以一站式滿足你。近年明洞更進駐咗好多超大型旗艦店同文創概念店，活力量直逼爆錶！
          </p>
          <p>
            第一次去首爾驚行到迷路？跟住呢篇 Blog，帶你深度掃街，解鎖明洞最值得行、值得食的精華重點！
          </p>

          <h2 id="beauty">💄 狂歡明洞：3 大必逛核心亮點</h2>
          
          <h3>1. K-Beauty 美妝聖地 —— 旗艦店贈品拿不完</h3>
          <p>
            明洞絕對係貪靚一族的「美妝黑洞」。從 Olive Young 旗艦店（全韓國生意最好的分店，足足有幾層樓高！）、Innisfree、SULWHASOO 到各種小眾潮流品牌，全部整齊排列喺主街同巷弄。喺呢度買美妝，店員最鍾意大方送小樣同試用裝，行一圈絕對收穫滿滿！<strong>購物小貼士：</strong>好多舖頭都提供即店退稅（Tax Refund）服務，買嘢時還記得隨身帶埋護照啊！
          </p>

          <h3>2. 潮人服飾與巨大文創地標</h3>
          <p>
            除咗化妝品，明洞的服裝店都好好行。大型的 ALAND 雲集咗幾百個韓國新晉設計師品牌，由復古 Y2K 到極簡冷淡風都有。另外，唔好忘記去同 <strong>LINE FRIENDS 門口隻巨型熊大（Brown）</strong> 合照，或者去新開的時尚運動品牌旗艦店打卡，保證你行到對腳軟！
          </p>

          <div className="my-8">
            <img
              src="https://cdn.shopify.com/s/files/1/0557/4269/3571/files/Myeongdong_food_market.jpg?v=1738732897"
              alt="明洞街頭美食"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://roamingsonaa.com/wp-content/uploads/2023/09/myeongdong-night-market-street-food-stands.jpg";
              }}
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 每到傍晚準時營業的明洞夜市，是吃貨們的宵夜天堂
            </p>
          </div>

          <h2 id="food">🍢 吃貨注意：明洞夜市必吃街頭美食</h2>
          <p>
            每到下午四、五點左右，明洞主街中央就會神奇地變身成一條長長的美食街。幾十檔小食車一字排開，香氣撲鼻，真係減肥人士的大敵！
          </p>

          <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 my-10">
            <h4 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🔥 小編私心推介：不踩雷四大熱門小食
            </h4>
            <div className="space-y-4">
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-rose-300 font-bold mb-1">🧀 芝士烤年糕 (Baked Cheese串)</p>
                <p className="text-zinc-400 text-sm">年糕同厚切莫札瑞拉起司相間串起，喺鐵板上烤到外焦內軟，最後淋上濃郁的煉奶，甜甜鹹鹹仲會拉絲，超治癒！</p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-rose-300 font-bold mb-1">🥚 明洞雞蛋糕 (Gyeran-ppang)</p>
                <p className="text-zinc-400 text-sm">傳統的韓式小食，蛋糕仔上面直接打入一整隻雞蛋烘烤，蛋香四溢，口感綿密。</p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-rose-300 font-bold mb-1">🦞 豪華烤龍蝦</p>
                <p className="text-zinc-400 text-sm">近年超人氣的高級街頭小食！喺新鮮龍蝦肉上鋪滿厚厚的芝士，用噴槍直接炙燒，雖然價錢貴少少，但打卡同味道都一流。</p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-rose-300 font-bold mb-1">🥟 明洞餃子 (Myeongdong Kyoja)</p>
                <p className="text-zinc-400 text-sm">如果想坐低食餐正餐，一定要去連續多年榮獲米芝蓮必比登推介的「明洞餃子」，佢哋的刀削麵同皮薄餡靚的蒸餃，湯頭濃郁，絕對令人回味無窮。</p>
              </div>
            </div>
          </div>

          <h2 id="money">💰 自由行秘笈：全首爾換錢最划算的地方</h2>
          <p>
            嚟首爾玩，大家都知唔需要喺機場換太多韓幣。因為全首爾匯率最好的換錢所就喺明洞！沿著明洞中國大使館嗰條巷仔行，會見到大名鼎鼎的<strong>「大使館換錢所」</strong>同<strong>「一品香換錢所」</strong>。去呢度換錢，匯率往往比其他地方好很多。建議大家帶港幣或者美金直接去到明洞才大額兌換。
          </p>

          <div className="bg-gradient-to-br from-rose-900/40 to-pink-900/30 border border-rose-500/30 rounded-2xl p-6 my-10" id="tips">
            <h3 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 明洞 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-rose-400">🌅</span>
                <span className="text-zinc-300"><strong>最佳到訪時間：</strong>建議<strong>下午 16:00 之後</strong>前來。呢個時候美妝店、潮流服飾店開齊之餘，街頭美食攤檔亦都啱啱擺好陣勢，成條街燈火通明，氣氛最熱鬧。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">🧳</span>
                <span className="text-zinc-300"><strong>行李寄存好幫手：</strong>明洞站地鐵站內有好多自動行李儲物櫃（Locker）。如果你係最後一日朝早退房想嚟做最後衝刺，可以將行李直接鎖喺地鐵站，咁就可以兩手空空、無拘無束咁瘋狂血拼啦！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-400">🚇</span>
                <span className="text-zinc-300"><strong>交通方式：</strong>乘搭首爾地鐵 4 號線至「明洞站（Myeongdong）」，從 5、6、7 或 8 號出口出站，一上到地面就已經係熱鬧的購物商圈。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">📍 地址</span>
              <p className="text-zinc-300 text-sm mt-1">Myeongdong, Jung-gu, Seoul, South Korea</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">🕐 開放時間</span>
              <p className="text-zinc-300 text-sm mt-1">約 10:00-22:00（各店不同）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">💰 消費</span>
              <p className="text-zinc-300 text-sm mt-1">視乎購物而定</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">⭐ 評分</span>
              <p className="text-zinc-300 text-sm mt-1">4.3/5.0（67,892 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">🚇 交通</span>
              <p className="text-zinc-300 text-sm mt-1">首爾地鐵4號線 明洞站 6號出口</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-rose-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-zinc-300 text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/20 border border-rose-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-rose-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-zinc-300 text-lg mb-4">
              👇 你去明洞最鍾意買邊個牌子的美妝？定係有邊一款街頭小食係你每次去都必食的呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
            <script type="text/javascript">
              var infolinks_pid = 3445528;
              var infolinks_wsid = 0;
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>
        </article>
      </div>
    </div>
  );
}