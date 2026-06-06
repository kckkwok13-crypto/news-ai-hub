"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "landmarks", title: "廣場地標", emoji: "⚙️" },
  { id: "beer", title: "啤酒文化", emoji: "🍺" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function MarienplatzMunichPage() {
  const [activeSection, setActiveSection] = useState("landmarks");

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
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-stone-50/95 to-amber-100/95 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
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
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/30"
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-red-500/30">
            🦁 德意志漫遊 · 巴伐利亞古韻
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            走進巴伐利亞的心臟
          </h1>
          <h2 className="text-xl text-amber-700 font-semibold mb-4">慕尼黑瑪利亞廣場（Marienplatz）深度打卡與百年木偶鐘全攻略</h2>
          <p className="text-stone-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1590618552334-4c8e2c21b4f9?w=1200&q=80"
            alt="慕尼黑瑪利亞廣場"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1569254994521-35a4dd6972b5?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-stone-500 text-sm mb-12">
          ▲ 自 1158 年起便守護著慕尼黑、凝聚了無數巴伐利亞歷史與市集活力嘅核心 —— 瑪利亞廣場
        </p>

        <article className="prose prose-stone prose-lg max-w-none">
          <p id="intro">
            如果說新天鵝堡是巴伐利亞童話的封面，那麼位於首府慕尼黑市中心的<strong>瑪利亞廣場（Marienplatz）</strong>，無疑就是這座南部大城最活力澎湃嘅心臟。這座始建於 1158 年的古老廣場，幾百年來默默見證了慕尼黑從一個小小的鹽貿集散地，蛻變成今日高科技與德意志傳統完美融合的國際大都市。每當老城區的陽光灑落喺黑灰色嘅新哥德式尖頂上，廣場上街頭藝人的風琴聲與百年木偶鐘的樂音交織，那份熱鬧、醇厚嘅德式風情，絕對會讓你深深著迷。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度走入這個慕尼黑的第一客廳，解鎖新市政廳牆壁上的歷史密碼，傳授登高飽覽阿爾卑斯山遠景嘅秘密機位，並奉上喝正宗巴伐利亞黑啤不踩雷嘅實用攻略！
          </p>

          <h2 id="landmarks">⚙️ 中世紀的精工魔法：瑪利亞廣場 3 大必看地標</h2>

          <h3>1. 新市政廳（Neues Rathaus）—— 令人屏息的哥德式巨作</h3>
          <p>
            矗立在廣場北側、佔據了最主要視覺的，是一座極具震撼力的新哥德式龐大建築 —— 新市政廳。它的正面外牆上裝飾著無數尊雕刻精美的巴伐利亞國王、神話英雄和聖人雕像。整座建築雖然看起來歷史悠久，但其實是在 20 世紀初才完全落成的。大樓中央那座高達 85 米的巨型鐘樓，是全老城最不容忽視的巍峨天際線。
          </p>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-slate-800 font-bold mb-4 flex items-center gap-2 text-xl">
              🎭 歷史定格：全德國最大嘅「百年木偶壁鐘騷」（Glockenspiel）
            </h4>
            <p className="text-stone-700">
              新市政廳鐘樓中部，懸掛著大名鼎鼎、由 43 個鐘鑼和 32 個與真人同等大小的木偶組成的<strong>壁鐘音樂騷 (Glockenspiel)</strong>。這個傳統樂音已經轉動了一百多年，每天中午 <strong>11:00、12:00（以及夏季5月至10月的17:00）</strong>，當音樂準時響起，這些彩色木偶就會開始緩緩轉動，分上下兩層上演巴伐利亞歷史故事：
            </p>
            <ul className="space-y-3 text-stone-700 mt-4">
              <li className="flex gap-3">
                <span className="text-amber-500 text-xl">📍</span>
                <span><strong>上層：</strong>再現了 1568 年威廉五世公爵舉辦的奢華皇家騎士婚禮與馬上長槍比武。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 text-xl">📍</span>
                <span><strong>下層：</strong>則表演了著名的「桶匠之舞」（Schäfflertanz）。傳說在 1517 年慕尼黑爆發恐怖的黑死病瘟疫，疫情結束後，勇敢的製桶工匠們最先來到瑪利亞廣場跳舞，以此宣告災難過去、為全城重拾歡樂與希望。音樂騷最後，最頂端的一隻金色小公雞還會拍打翅膀啼叫三聲，非常逗趣治癒！</span>
              </li>
            </ul>
          </div>

          <h3>2. 聖母教堂（Frauenkirche）—— 標誌性嘅雙洋蔥頭圓頂</h3>
          <p>
            從廣場往西走幾步，就會看到兩座高達 99 米、頂著綠色「洋蔥頭」雙塔的巨型紅磚建築，這就是慕尼黑的主座教堂 —— 聖母教堂。這兩座洋蔥頭塔樓是慕尼黑最無可爭議的城市徽章。走進教堂大門的地板上，有一個著名的黑色腳印，被傳說為<strong>「惡魔的腳印」（Teufelstritt）</strong>，據說當年建築師與惡魔打賭，利用視覺死角蓋了一座「看不到窗戶的教堂」來欺騙惡魔，惡魔發現上當後憤怒地在地面踩下了這個腳印，極具神祕傳奇色彩。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1569254994521-35a4dd6972b5?w=1200&q=80"
              alt="慕尼黑城市景觀"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1590618552334-4c8e2c21b4f9?w=1200&q=80";
              }}
            />
            <p className="text-center text-stone-500 text-sm mt-4 mb-8">
              ▲ 攝影師天堂 —— 挑戰聖彼得教堂 306 級木樓梯換來的上帝視角全景
            </p>
          </div>

          <h3>3. 私藏最佳拍攝機位 —— 老彼得教堂鐘樓（St. Peter&apos;s Church）</h3>
          <p>
            瑪利亞廣場非常開闊，但站在地面很難拍全市政廳宏偉的正面與高聳的鐘樓。想要拍出刷爆社交媒體的風光大片，唯一的秘訣就在廣場南側的<strong>老彼得教堂 (St. Peter)</strong>。這是慕尼黑最古老的教堂。你可以購買幾歐元的門票，挑戰<strong>純手動攀爬 306 級狹窄、古老的木製迴旋樓梯</strong>。當你大汗淋漓地推開頂層圍欄天台，整座瑪利亞廣場、新市政廳的巍峨正面會在正對面以絕美的透視角度鋪開，天氣晴朗時甚至能遠眺遠處白雪皚皚的阿爾卑斯山脈，驚艷指数徹底破表！
          </p>

          <h2 id="beer">🍺 自由行饕客必讀：在不夜城喝一杯最正宗的巴伐利亞黑啤</h2>
          <p>
            逛完廣場拍完美照，雙腿累了？這時候最地道的慕尼黑式生活，就是去喝啤酒！從瑪利亞廣場步行不到 5 分鐘，就能抵達全德國最傳奇、創立於 1589 年的皇家宮廷啤酒屋 <strong>HB (Hofbräuhaus)</strong>。走進可以容納幾千人的巨型拱頂大廳，耳邊是傳統巴伐利亞管樂隊（Blaskapelle）現場吹奏的歡快銅管樂，侍應手裡抱著十幾杯巨型啤酒穿梭。記得點一杯 1 公升巨型生黑啤酒（Dunkel），再配上一份烤得外脆內嫩的<strong>巴伐利亞脆皮豬肘（Schweinshaxe）</strong>同巨型心形椒鹽卷餅（Prezel），大口吃肉大口喝酒，這才是最地道的德意志豪邁浪漫！
          </p>

          <div id="tips" className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 瑪利亞廣場 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-4 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🎟️</span>
                <span><strong>提早 15 分鐘在廣場搶佔「看鐘好位置」：</strong>每天中午木偶鐘表演時，新市政廳正前方會瞬間被成千上萬的旅客擠得水洩不通。想要拍到清晰的木偶轉動特寫，建議提前 15-20 分鐘抵達廣場，站在<strong>廣場中央偏西側（靠近瑪利亞圓柱一側）</strong>，這個角度抬頭拍攝鐘樓中部最為完美。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">⚠️</span>
                <span><strong>嚴防廣場扒手與「簽名」騙局：</strong>雖然德國治安相對不錯，但瑪利亞廣場人潮極度密集，也是小偷扒手下手的高危區，特別是大家抬頭看木偶鐘忘乎所以的那 10 分鐘，請務必把背包背在前面。另外，如果遇到有年輕人拿著板夾熱情走過來邀請你為「殘疾人/慈善機構簽名支持」，<strong>請立刻嚴肅無視走開</strong> —— 這是歐洲經典的連環騙局，一旦你簽了名，他們會幾個人圍著你強行索取數十歐元的「強迫捐款」。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🎄</span>
                <span><strong>絕美聖誕限定：</strong>如果你是在每年的 11 月底至 12 月 24 日前來，瑪利亞廣場會變身成全德國最浪漫、歷史最悠久的<strong>「慕尼黑聖誕市集 (Christkindlmarkt)」</strong>！巨大的聖誕樹亮起上萬盞夜燈，一排排木屋攤檔售賣著熱騰騰、加了香料嘅熱紅酒（Glühwein）和傳統薑餅，氣氛溫馨到了極點。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 text-xl">🚇</span>
                <span><strong>交通方式：</strong>極其便利，完全不需要動腦。慕尼黑的地鐵（U-Bahn）L3/L6 線以及老城所有的城際快鐵（S-Bahn）全部交匯於正下方的 <strong>Marienplatz 站</strong>。一走出地鐵扶手電梯，宏偉的新市政廳外牆就會在距離你不到五米的位置直接震撼現身！</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">📍 地址</span>
              <p className="text-stone-700 text-sm mt-1">Marienplatz, München</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🕐 開放時間</span>
              <p className="text-stone-700 text-sm mt-1">廣場全天開放</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🎭 木偶鐘表演</span>
              <p className="text-stone-700 text-sm mt-1">11:00 / 12:00 / 17:00</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">🚇 交通</span>
              <p className="text-stone-700 text-sm mt-1">U-Bahn / S-Bahn Marienplatz</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl p-8 text-center my-10">
            <p className="text-white text-xl mb-4">
              👇 留言分享：你更想坐在廣場邊聽著百年木偶鐘聲喝一杯醇厚黑啤，還是想挑戰那 306 級樓梯去征服阿爾卑斯山腳下的老城天際線呢？
            </p>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    </div>
  );
}