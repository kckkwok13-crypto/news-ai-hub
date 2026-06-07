"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";

const blogData: Record<string, any> = {
  "shibuya-crossing": {
    title: "🌍 走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    date: "May 2026",
    heroImage: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    heroCaption: "▲ 俯瞰澀谷十字路口——繁忙時段每次轉燈就有約2,500人同時橫過",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "spot1", title: "SHIBUYA SKY", emoji: "🏔️" },
      { id: "spot2", title: "星巴克窗口位", emoji: "☕" },
      { id: "spot3", title: "聯絡通道秘境", emoji: "🚶" },
    ],
    activeColor: "blue",
    content: [
      { type: "p", id: "intro", text: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，<strong>澀谷十字路口（Shibuya Crossing）</strong>絕對當之無愧！每次綠燈一亮，成千上萬的人潮從四面八方湧入，卻又能神奇地錯身而過、亂中有序。" },
      { type: "p", text: "不論你是第一次去東京，還是已經去過無數次，這個十字路口都有種讓人百看不厭的魔力。今天這篇Blog就帶大家全方位解鎖澀谷十字路口，還會附上最頂級的打卡拍照位！" },
      { type: "h2", text: "終極打卡位推薦" },
      { type: "h3", text: "1. SHIBUYA SKY（澀谷上空）—— 終極上帝視角" },
      { type: "p", id: "spot1", text: "目前東京最紅的觀景台。你可以從離地約229米的露天平台，徹底俯瞰整個澀谷十字路口，甚至還能遠眺富士山。一定要提前在網上預約黃昏時段的門票，那時的色溫拍起來最美！" },
      { type: "h3", text: "2. 星巴克澀谷 tsutaya 店 —— 經典二樓窗口位" },
      { type: "image", src: "https://images.unsplash.com/photo-1737639824682-60b7edf3dd3d?w=1200&q=80", alt: "澀谷夜景霓虹燈光", caption: "▲ 夜晚的澀谷，霓虹燈光與人潮交織成賽博朋克風情" },
      { type: "h3", text: "3. 澀谷車站聯絡通道 —— 免費的在地人秘境" },
      { type: "image", src: "https://images.unsplash.com/photo-1603666659847-43cffb58a176?w=1200&q=80", alt: "澀谷十字路口繁忙場面", caption: "▲ 人潮湧動的澀谷十字路口全景" },
      { type: "p", id: "spot3", text: "連接JR澀谷站和井之頭線的行人通道，有一整面大玻璃。這裡不用花一分錢，就能拍到非常壯觀的十字路口全景。" },
    ],
    infoCards: [
      { label: "📍 地址", value: "Shibuya, Tokyo" },
      { label: "🕐 開放時間", value: "24小時" },
      { label: "💰 費用", value: "免費" },
      { label: "⭐ 評分", value: "4.7/5.0 (52,389 評論)" },
      { label: "🚇 交通", value: "JR山手線 澀谷站 B3出口" },
      { label: "⏱️ 建議遊覽", value: "30分鐘至1小時" },
    ],
  },
  "meiji-shrine": {
    title: "🌲 東京市中心的森林秘境：明治神宮深度半日遊攻略",
    date: "May 2026 · 作者：純粹旅人",
    heroImage: "https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg",
    heroCaption: "▲ 矗立於參道入口、極具震撼力的台灣檜木大鳥居，高12米、寬17米",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "torii", title: "大鳥居", emoji: "⛩️" },
      { id: "sake", title: "酒桶牆", emoji: "🍶" },
      { id: "well", title: "清正之井", emoji: "💧" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "green",
    content: [
      { type: "p", id: "intro", text: "緊鄰著潮流發源地原宿與竹下通，很難想像只要走過一條橋，就能瞬間從喧囂的都市切換到蟬鳴鳥叫的原始森林。這裏就是<strong>明治神宮（Meiji Jingu）</strong>。它不僅是東京必去的景點，更是供奉明治天皇與昭憲皇太后靈位、地位崇高的神道教聖地。" },
      { type: "p", text: "今天這篇Blog就帶大家深入走訪這座佔地高達 70 公頃的人造神祕森林，解鎖那些走過路過極易錯過的隱藏亮點與旅行故事！" },
      { type: "h2", text: "隱藏在參道上的 3 個歷史秘密" },
      { type: "h3", text: "1. 全日本最大的木造鳥居 —— 來自台灣的緣分" },
      { type: "p", id: "torii", text: "進入神宮後，最引人注目的就是位於南參道與北參道交會處的「大鳥居」。這座鳥居高 12 米、寬 17 米，是全日本最大的木造明神鳥居。值得一提的是，這座巨大的鳥居所使用的木材，是源自台灣阿里山高達 1200 年樹齡的巨型檜木，來到這裏不妨抬頭感受它的莊嚴與歷史厚重感。" },
      { type: "h3", text: "2. 百年不對稱的秘密：傳說中的 88 度彎道" },
      { type: "p", text: "當你漫步在碎石參道時，會發現路線並不是一條直線。在接近正殿時，參道會有一個接近直角的轉彎。據說這個彎道精準地測量為 <strong>88度</strong>（而非90度），在漢字中「八」代表著四面八方、開闊與吉利。設計師故意不弄成直角，是為了讓信眾在轉彎時能漸漸調適心情，懷著崇敬的心迎接神明。" },
      { type: "image", src: "https://dashboard.japantravel.com/photo/poi-8-214215/1440x960!/tokyo-meiji-jingu-shrine-214215.webp", alt: "清酒桶與葡萄酒桶牆", caption: "▲ 代表和洋折衷、極具文化特色的清酒與葡萄酒桶牆" },
      { type: "h3", text: "3. 東西文化交融：清酒桶與西洋葡萄酒桶" },
      { type: "p", id: "sake", text: "在南參道兩旁，一邊排列著各個酒廠奉納、色彩斑斕的日本清酒菰樽（Kodotaru）；而對面居然罕見地出現了法國勃艮第產區的西洋葡萄酒桶！這是因為明治天皇在位時极力推行「明治維新」，積極吸收西方文化，他本身也非常喜愛飲用葡萄酒，因此這裡才留下了這幅和洋並存的獨特奇觀。" },
      { type: "highlight", title: "🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？", text: "明治神宮是日本年輕人舉辦傳統婚禮的夢幻聖地。如果運氣好，在週末的上午前往，你很有機會在正殿前的廣場目睹一場傳統的「神前結婚式」—— 新娘身穿純白的「白無垢」，在神職人員與巫女的引領下緩步前行。現場氣氛極其莊重肅穆，是非常珍貴的文化體驗。" },
      { type: "h2", text: "🍀 內苑散策：清正之井與明治神宮御苑" },
      { type: "p", id: "well", text: "如果你有額外的時間，非常推薦花 500 日圓門票進入「明治神宮御苑」。這裡在江戶時代曾是加藤家和伊伊家的庭園。裡面隱藏著全東京最知名的開運能量景點 —— <strong>「清正之井」</strong>（Kiyomasa's Well）。這是一口由名將加藤清正挖掘的古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！" },
      { type: "tips", title: "💡 明治神宮 旅遊實用小貼士 (Travel Tips)", items: ["<strong>開放時間：</strong>明治神宮的開門與關門時間是跟隨「太陽升落」而每個月變動的。基本上日出開門、日落關門，去之前記得先上官網確認當月時間。", "<strong>參拜禮儀：</strong>走在參道上時，記得走兩側。因為參道的正中央（稱為「正中」）是留給神明通行的。經過大鳥居時，也可以微微鞠躬以示敬意。", "<strong>交通方式：</strong>搭乘 JR 山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行 1 分鐘即可到達神宮入口（神宮橋）。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "1-1 Yoyogikamizonocho, Shibuya, Tokyo" },
      { label: "🕐 開放時間", value: "日出至日落（每季不同）" },
      { label: "💰 費用", value: "免費（御苑另需 ¥500）" },
      { label: "⭐ 評分", value: "4.8/5.0（41,205 評論）" },
      { label: "🚇 交通", value: "JR山手線 原宿站 步行1分鐘" },
      { label: "⏱️ 建議遊覽", value: "1-2小時" },
    ],
  },
  "sensoji": {
    title: "🏮 東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    date: "May 2026 · 作者：純粹旅人",
    heroImage: "https://live.staticflickr.com/6552/6972841610_e3c87b77f4_b.jpg",
    heroCaption: "▲ 寫著「雷門」二字的巨大紅燈籠，是無數旅客對東京的第一印象",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "kaminarimon", title: "雷門", emoji: "🏮" },
      { id: "nakamise", title: "仲見世通", emoji: "🍡" },
      { id: "hondo", title: "本堂", emoji: "⛩️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "red",
    content: [
      { type: "p", id: "intro", text: "如果想在現代化的東京尋找一抹傳統的江戶風情，<strong>淺草寺（Sensō-ji）</strong>絕對是不可錯過的第一站。創建於公元 628 年的淺草寺，是東京都內最古老的寺廟。這裡常年香火鼎盛，無論是莊嚴的佛教建築，還是充滿下町活力的商店街，都讓人彷彿穿越時空，回到了數百年前的江戶時代。" },
      { type: "p", text: "今天這篇Blog就為大家整理了淺草寺的經典必看亮點、傳統參拜與求籤流程，帶你玩轉這個東京最經典的地標！" },
      { type: "h2", text: "🗺️ 淺草寺經典散策路線：從雷門走到本堂" },
      { type: "h3", text: "1. 第一站：震撼力十足的「雷門」與巨大燈籠" },
      { type: "p", id: "kaminarimon", text: "淺草寺的正門就是大名鼎鼎的「雷門」（正式名稱為風雷神門）。門的右側供奉著風神，左側則是雷神。而正中央懸掛著那個重達 700 公斤的巨大紅燈籠，是由松下電器（Panasonic）創辦人松下幸之助在病癒後奉納的。<strong>拍照小貼士：</strong>走到燈籠正下方抬頭看，底部雕刻了一條栩栩如生的飛龍，非常精緻！" },
      { type: "h3", text: "2. 第二站：好吃好逛的「仲見世通」商店街" },
      { type: "p", id: "nakamise", text: "穿過雷門，迎接你的是一條長約 250 米的「仲見世通」。這是日本最古老的商店街之一，兩旁開滿了售賣傳統手工藝品、紀念品以及各式江戶小食的店舖。在這裡，你可以品嚐到現烤的<strong>人形燒</strong>、香脆的<strong>仙貝</strong>以及色彩繽紛的<strong>吉備糰子</strong>。" },
      { type: "image", src: "https://live.staticflickr.com/7372/9096936531_e3c87b77f4_b.jpg", alt: "仲見世通與寶藏門", caption: "▲ 宏偉的寶藏門與左側高聳的五重塔互相輝映" },
      { type: "h3", text: "3. 第三站：本堂參拜與常香爐的神秘力量" },
      { type: "p", id: "hondo", text: "穿過第二道大門「寶藏門」後，就會看到供奉本尊聖觀音菩薩的「本堂」（大殿）。在進入本堂前，你會經過一個煙霧繚繞的<strong>常香爐</strong>。日本信眾相信，將香爐排出的煙霧撥到自己身上，能夠驅除百病、帶來智慧與健康。來到這裡記得學著當地人，把福氣「撥」向自己喔！" },
      { type: "highlight", title: "🔮 實用教學：淺草寺「觀音靈籤」求籤步驟", text: "淺草寺的「觀音靈籤」非常有名，據說這裡抽到「凶」的機率相對比較高，但不用擔心，這才是最真實的指引！求籤流程如下：1. 在心裡默默向觀音菩薩許願、詢問你想請教的事情。2. 投入 100 日圓硬幣到油錢箱。3. 拿起木製籤筒，誠心搖晃直到其中一根籤「御籤」從小孔掉出。4. 看清楚數字，到對應的小木櫃抽屜中拿取你的籤詩。5. 如果是吉：把喜悅帶回家；如果是凶：別擔心！將籤詩摺好，綁在寺廟專用的鐵架上，代表將厄運留在寺廟，由神明為你化解。" },
      { type: "h2", text: "🗼 隱藏加碼：新舊交織的絕佳拍照位" },
      { type: "p", text: "在淺草寺境內，你可以拍到一個非常奇妙的畫面 —— 古色古香的<strong>五重塔</strong>與現代科技感十足的<strong>東京晴空塔（Tokyo Skytree）</strong>同框！這種歷史與現代在空中交匯的強烈對比，是淺草獨有的浪漫景致，千萬不要錯過這個構圖。" },
      { type: "tips", title: "💡 淺草寺 旅遊實用小貼士 (Travel Tips)", items: ["<strong>開放時間：</strong>淺草寺境內是 24 小時免費開放的。不過本堂的開門時間為每日早上 6:00（10月至3月為6:30）至傍晚 17:00。", "<strong>強烈推薦夜遊：</strong>每天日落後至晚上 23:00，雷門、寶藏門、五重塔和本堂都會亮起金黃色的燈光。此時遊客散去，散步起來非常舒服，拍起照來更有一種神祕而莊嚴的美感！", "<strong>交通方式：</strong>搭乘東京地下鐵銀座線、都營淺草線或東武晴空塔線至「淺草站」，步行約 5 分鐘即可抵達雷門。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "2-3-1 Asakusa, Taito City, Tokyo" },
      { label: "🕐 開放時間", value: "境內24小時 / 本堂 6:00-17:00" },
      { label: "💰 費用", value: "免費" },
      { label: "⭐ 評分", value: "4.6/5.0（89,432 評論）" },
      { label: "🚇 交通", value: "東京Metro 淺草站 步行5分鐘" },
      { label: "⏱️ 建議遊覽", value: "1-2小時" },
    ],
  },
};

export default function BlogContent({ slug }: { slug: string }) {
  const [activeSection, setActiveSection] = useState("intro");
  const blog = blogData[slug];

  useEffect(() => {
    if (!blog) return;
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

    blog.tocItems.forEach(({ id }: { id: string }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blog]);

  // Initialize Google AdSense
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.log('AdSense initialization skipped');
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const colorClasses: Record<string, { active: string; default: string }> = {
    blue: { active: "bg-blue-600 text-white", default: "text-zinc-400 hover:text-white hover:bg-zinc-800" },
    green: { active: "bg-green-600 text-white", default: "text-zinc-400 hover:text-white hover:bg-zinc-800" },
    red: { active: "bg-red-600 text-white", default: "text-zinc-400 hover:text-white hover:bg-zinc-800" },
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">← 返回 Blog</Link>
        </div>
      </div>
    );
  }

  const colors = colorClasses[blog.activeColor] || colorClasses.blue;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 w-56 shadow-2xl">
          <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {blog.tocItems.map(({ id, title, emoji }: { id: string; title: string; emoji: string }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${activeSection === id ? colors.active : colors.default}`}
                >
                  <span>{emoji}</span>
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
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-zinc-500">{blog.date}</p>
        </header>

        <img
          src={blog.heroImage}
          alt={blog.title}
          className="w-full rounded-xl mb-4"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">{blog.heroCaption}</p>

        {/* Ad Banner - After Hero */}
        <div className="my-8 flex justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '728px', height: '90px' }}
            data-ad-client="ca-pub-4745583996243741"
            data-ad-slot="7843298765"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          {blog.content.map((item: any, index: number) => {
            switch (item.type) {
              case "p":
                return <p key={index} id={item.id} dangerouslySetInnerHTML={{ __html: item.text }} />;
              case "h2":
                return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-white">{item.text}</h2>;
              case "h3":
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-zinc-200">{item.text}</h3>;
              case "image":
                return (
                  <div key={index} className="my-8">
                    <img src={item.src} alt={item.alt} className="w-full rounded-xl mb-4" />
                    <p className="text-center text-zinc-500 text-sm">{item.caption}</p>
                  </div>
                );
              case "highlight":
                return (
                  <div key={index} className="bg-green-900/20 border border-green-700/40 rounded-xl p-6 my-8">
                    <h4 className="text-green-400 font-bold mb-3">{item.title}</h4>
                    <p className="text-zinc-300">{item.text}</p>
                  </div>
                );
              case "tips":
                return (
                  <div key={index} className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-6 my-8">
                    <h3 className="text-amber-400 font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-3 text-zinc-300">
                      {item.items.map((tip: string, i: number) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />
                      ))}
                    </ul>
                  </div>
                );
              default:
                return null;
            }
          })}

          {/* Ad Banner - Before Info Cards */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            {blog.infoCards.map((card: { label: string; value: string }, index: number) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-green-400 font-bold">{card.label}</span>
                <p className="text-zinc-300 text-sm mt-1">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Ad Banner - After Info Cards */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
        </article>

        {/* Related Posts / Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← 返回全部遊記
          </Link>
        </div>
      </div>
    </div>
  );
}