"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "forest", title: "仿生森林", emoji: "🌲" },
  { id: "facades", title: "兩大立面", emoji: "⚔️" },
  { id: "light-show", title: "光影魔術", emoji: "🎨" },
  { id: "photo-spots", title: "拍照機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function SagradaFamiliaPage() {
  const [activeSection, setActiveSection] = useState("forest");

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
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-amber-50/95 to-orange-100/95 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-200/50"
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
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors bg-amber-100 px-4 py-2 rounded-full hover:bg-amber-200"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            🦎 西班牙加泰隆尼亞 · 高第瘋狂美學
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            上帝的建築巨作
          </h1>
          <h2 className="text-xl text-amber-700 font-semibold mb-4">巴塞隆納聖家堂（Sagrada Família）百年未完工的奇幻光影全攻略</h2>
          <p className="text-stone-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="/images/sagrada-familia-hero.jpg"
            alt="聖家堂"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-stone-500 text-sm mb-12">
          ▲ 始建於 1882 年、人類歷史上唯一一座「未完工」就被列入世界文化遺產的傳奇奇蹟 —— 聖家堂
        </p>

        <article className="prose prose-stone prose-lg max-w-none">
          <p id="intro">
            如果世界建築是一座浩瀚的星空，那麼加泰隆尼亞建築鬼才安東尼·高第（Antoni Gaudí）無疑就是其中最瘋狂、最耀眼的那顆彗星；而他傾注了 43 年心血、甚至連遺體都安葬於此的終極神作，就是矗立在巴塞隆納市中心的<strong>聖家堂（Sagrada Família / 聖家族大教堂）</strong>。這座已經建造了 140 多年、至今仍未完全竣工的魔幻聖殿，徹底顛覆了所有人對「教堂」的刻板印象。高第曾說：「直線屬於人類，而曲線屬於上帝。」當你親自站在這座沒有直線、佈滿奇異仿生雕刻的巨作面前，那種超脫現實的視覺震撼，絕對會讓你头皮发麻。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度走入這個上帝的建築夢境，解鎖兩大經典立面的藝術秘密，傳授大殿內「彩色交響樂」的夢幻拍攝時刻，並送上絕對要提早搶票的生存指南！
          </p>

          <h2 id="forest">🌲 東方奇幻森林：大殿內不可思議的立體仿生學</h2>
          <p>
            走進聖家堂大殿內部，你不會看到傳統歐洲教堂那種沉重、壓抑的十字石柱；相反，映入眼簾的是一片無邊無際的<strong>石頭原始森林</strong>！高第巧妙地模仿了自然界的樹木，大殿內無數根粗壯的石柱在頂端如同樹枝般分叉伸展，穩穩地托起上方如繁星點點的交錯穹頂。走在其中，就彷彿漫步在一個充滿神聖禪意的巨型熱帶雨林，人類的想像力在這裡被發揮到了極致。
          </p>

          <div id="light-show" className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-orange-600 font-bold mb-4 flex items-center gap-2 text-xl">
              🎨 絕美點燈騷：當「上帝之光」打翻了造物主的調色盤
            </h4>
            <p className="text-stone-700">
              聖家堂內部的靈魂，絕對是兩側鋪天蓋地的馬賽克彩色玻璃窗。高第是一位天才的光影魔術師，他將玻璃窗設計成不對稱的色彩光譜：
            </p>
            <ul className="space-y-3 text-stone-700 mt-4">
              <li className="flex gap-3">
                <span className="text-blue-500 text-xl">🌅</span>
                <span><strong>東側（誕生立面一側）：</strong>採用了清爽的<strong>藍、綠、青色調</strong>玻璃，每當清晨太陽升起，冷色調的光線傾瀉而下，象徵著生命的誕生、晨曦與希望。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 text-xl">🌇</span>
                <span><strong>西側（受難立面一側）：</strong>則採用了濃烈的<strong>橘、紅、黃色調</strong>玻璃。每當黃昏落日餘暉穿透玻璃，整座大殿瞬間被點燃成一片火紅與溫暖的金黃交織。<strong>最佳參觀時間：</strong>強烈建議預約<strong>下午 15:30 至 17:30 之間</strong>進場，這時候的日落西斜角度最完美，陽光會將繽紛的玻璃色彩 1:1 投影在白色的石柱與地面上，整座森林流光溢彩，美得讓人想落淚！</span>
              </li>
            </ul>
          </div>

          <h2 id="facades">⚔️ 生死兩重天：深度解讀 2 大標誌性立面</h2>
          <p>
            聖家堂的外觀由三個宏偉的立面組成，目前已完工並開放參觀的有兩大截然相反的靈魂：
          </p>

          <div className="bg-stone-100 border border-stone-300 rounded-2xl p-6 my-6">
            <h3 className="text-amber-700 font-bold mb-3">① 誕生立面（Nativity Façade）—— 繁複熱烈的生命頌歌</h3>
            <p className="text-stone-700">
              位於東側，這是唯一在高第生前親自監督完成的立面。外牆的雕刻極其繁複、厚重，遠看就像是用泥土堆砌、正在溶化的奇異城堡；但近看會發現佈滿了栩栩如生的動植物、聖經故事人物以及繁盛的常春藤。這裡充滿了加泰隆尼亞大自然的朝氣，歌頌著基督的降生與萬物的繁衍。
            </p>
          </div>

          <div className="bg-stone-100 border border-stone-300 rounded-2xl p-6 my-6">
            <h3 className="text-stone-700 font-bold mb-3">② 受難立面（Passion Façade）—— 冰冷痛苦的幾何線條</h3>
            <p className="text-stone-700">
              位於西側，由後世藝術家接手打造。與誕生立面的繁複熱烈完全相反，這裡採用了大量簡潔、粗獷、甚至帶有稜角的<strong>現代幾何學立體線條</strong>。雕像神情悲壯、骨瘦如柴，完美刻畫了耶穌受難時的痛苦、沉重與死亡的冰冷氣氛。外牆上還刻有一個奇妙的「16宮格數學魔方」，無論橫、直、斜加起來的數字都是 33，正好代表耶穌受難去世時的年齡，細思極恐。
            </p>
          </div>

          <div className="my-8">
            <img
              src="/images/sagrada-familia-interior.jpg"
              alt="聖家堂內部"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4 mb-8">
              ▲ 聖家堂大殿內部的仿生石柱森林，如繁星般的交錯穹頂
            </p>
          </div>

          <h2 id="photo-spots">📸 攝影師指南：如何拍出最完整的「聖家堂全景」</h2>
          <p>
            由於聖家堂體積無比龐大且高聳入雲，站在教堂正下方的馬路上哪怕用廣角鏡頭也只能拍到局部。想要拍到驚艷朋友圈的完美全景，唯一的私藏機位就在大門正對面的<strong>高第廣場（Plaça de Gaudí）</strong>。走到花園小湖水池的對岸，將相機放低貼近水面，利用平靜的湖水作為天然的鏡面，你就可以將整座宏偉的聖家堂和它五彩斑斕的夜燈倒影完美拍入同一個畫面，如夢似幻。
          </p>

          <div id="tips" className="bg-gradient-to-br from-stone-800 to-stone-900 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 聖家堂 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>魔鬼搶票守則：必須提前 3-4 星期官網預訂！</strong><br/>聖家堂**現場是不設任何實體售票處的**，所有門票必須提前在聖家堂官方 App 或網站上實名預約。如果你想體驗「登塔 (Tower Visit)」，名額更加是極少，旺季往往提前一個月就被瘋狂搶空！如果行程定了，請立馬去官網搶票。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🏔️</span>
                <span><strong>選擇哪一個塔樓登頂？</strong><br/>推薦選擇<strong>「誕生立面塔樓 (Nativity Tower)」</strong>。一來這是高第大師的親手遺作，二來登頂後，你可以走過連接雙塔的狹窄石橋，近距離看清外牆那些精美的水果馬賽克裝飾，最後順著高第標誌性的「仿生蝸牛螺旋石梯」步行下塔，體驗非常奇妙。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">📱</span>
                <span><strong>免費導覽 App 記得下載：</strong>購買門票時已自動包含官方語音導覽（包含非常標準的粵語/國語/英語解說）。進場前記得先在手機下載好官方 "Sagrada Família" App，並帶備耳機。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🚇</span>
                <span><strong>交通方式：</strong>搭乘巴塞隆納地鐵 L2（紫線）或 L5（藍線）直接在 <strong>Sagrada Família 站</strong> 出站，一走出地鐵口抬頭，這座百年魔幻巨作就會直接震撼地聳立在你眼前！</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">📍 地址</span>
              <p className="text-stone-700 text-sm mt-1">Carrer de Mallorca, 401, Barcelona</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🕐 開放時間</span>
              <p className="text-stone-700 text-sm mt-1">9:00-20:00（季節性調整）</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">💰 費用</span>
              <p className="text-stone-700 text-sm mt-1">成人約 €26-40</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🚇 交通</span>
              <p className="text-stone-700 text-sm mt-1">地鐵 L2/L5 Sagrada Família</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-400/50 rounded-2xl p-6 my-10">
            <h3 className="text-amber-700 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-stone-700 text-lg mb-4">
              👇 留言分享：你更想在午後看一場震撼心靈的「溫暖晚霞光影騷」，還是渴望挑戰那段階梯狹窄嘅蝸牛螺旋登頂塔樓呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white/80 border border-amber-300 rounded-xl px-4 py-3 text-stone-800 placeholder-amber-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="sagrada-familia" />
</div>
  );
}