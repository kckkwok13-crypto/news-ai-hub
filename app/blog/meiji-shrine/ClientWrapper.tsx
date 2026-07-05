"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import YouTubeEmbed from "../../components/YouTubeEmbed";

const meijiContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    torii: { title: string; content: string };
    sake: { title: string; content: string };
    well: { title: string; content: string };
    wedding: { title: string; content: string };
    tips: string[];
  };
  info: {
    address: string;
    hours: string;
    fee: string;
    rating: string;
    transport: string;
    duration: string;
  };
  backHome: string;
  blog: string;
  infoTitle: string;
  address: string;
  openingHours: string;
  fee: string;
  rating: string;
  transport: string;
  visitDuration: string;
}> = {
  "zh-TW": {
    backHome: "← 返回 Blog",
    blog: "| Blog",
    meta: {
      region: "🌲 東京神社",
      title: "東京市中心的森林秘境：明治神宮",
      subtitle: "深度半日遊攻略",
      heroCaption: "▲ 矗立於參道入口、極具震撼力的台灣檜木大鳥居，高12米、寬17米",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "torii", title: "大鳥居", emoji: "⛩️" },
      { id: "sake", title: "酒桶牆", emoji: "🍶" },
      { id: "well", title: "清正之井", emoji: "💧" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "緊鄰著潮流發源地原宿與竹下通，很難想像只要走過一條橋，就能瞬間從喧囂的都市切換到蟬鳴鳥叫的原始森林。這裏就是明治神宮（Meiji Jingu）。它不僅是東京必去的景點，更是供奉明治天皇與昭憲皇太后靈位、地位崇高的神道教聖地。",
        "今天這篇Blog就帶大家深入走訪這座佔地高達70公頃的人造神祕森林，解鎖那些走過路過極易錯過的隱藏亮點與旅行故事！",
      ],
      torii: {
        title: "1. 全日本最大的木造鳥居 —— 來自台灣的緣分",
        content: "進入神宮後，最引人注目的就是位於南參道與北參道交會處的「大鳥居」。這座鳥居高12米、寬17米，是全日本最大的木造明神鳥居。值得一提的是，這座巨大的鳥居所使用的木材，是源自台灣阿里山高達1200年樹齡的巨型檜木，來到這裏不妨抬頭感受它的莊嚴與歷史厚重感。",
      },
      sake: {
        title: "2. 百年不對稱的秘密：傳說中的88度彎道",
        content: "當你漫步在碎石參道時，會發現路線並不是一條直線。在接近正殿時，參道會有一個接近直角的轉彎。據說這個彎道精準地測量為88度（而非90度），在漢字中「八」代表著四面八方、開闊與吉利。設計師故意不弄成直角，是為了讓信眾在轉彎時能漸漸調適心情，懷著崇敬的心迎接神明。",
      },
      well: {
        title: "🍀 內苑散策：清正之井與明治神宮御苑",
        content: "如果你有額外的時間，非常推薦花500日圓門票進入「明治神宮御苑」。這裡在江戶時代曾是加藤家和伊伊家的庭園。裡面隱藏著全東京最知名的開運能量景點——「清正之井」（Kiyomasa's Well）。這是一口由名將加藤清正挖掘的古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！",
      },
      wedding: {
        title: "🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？",
        content: "明治神宮是日本年輕人舉辦傳統婚禮的夢幻聖地。如果運氣好，在週末的上午前往，你很有機會在正殿前的廣場目睹一場傳統的「神前結婚式」——新娘身穿純白的「白無垢」，在神職人員與巫女的引領下緩步前行。現場氣氛極其莊重肅穆，是非常珍貴的文化體驗。",
      },
      tips: [
        "開放時間：明治神宮的開門與關門時間是跟隨「太陽升落」而每個月變動的。基本上日出開門、日落關門，去之前記得先上官網確認當月時間。",
        "參拜禮儀：走在參道上時，記得走兩側。因為參道的正中央（稱為「正中」）是留給神明通行的。經過大鳥居時，也可以微微鞠躬以示敬意。",
        "交通方式：搭乘JR山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行1分鐘即可到達神宮入口（神宮橋）。",
      ],
    },
    info: {
      address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
      hours: "日出至日落（每季不同）",
      fee: "免費（御苑另需 ¥500）",
      rating: "4.8/5.0（41,205評論）",
      transport: "JR山手線 原宿站 步行1分鐘",
      duration: "1-2小時",
    },
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    openingHours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    visitDuration: "⏱️ 建議遊覽",
  },
  "zh-CN": {
    backHome: "← 返回 Blog",
    blog: "| Blog",
    meta: {
      region: "🌲 东京神社",
      title: "东京市中心的森林秘境：明治神宫",
      subtitle: "深度半日游攻略",
      heroCaption: "▲ 矗立于参道入口、极具震撼力的台湾扁柏大鸟居，高12米、宽17米",
    },
    toc: [
      { id: "intro", title: "介绍", emoji: "📖" },
      { id: "torii", title: "大鸟居", emoji: "⛩️" },
      { id: "sake", title: "酒桶墙", emoji: "🍶" },
      { id: "well", title: "清正之井", emoji: "💧" },
      { id: "tips", title: "实用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "紧邻着潮流发源地原宿与竹下通，很难想像只要走过一条桥，就能瞬间从喧嚣的都市切换到蝉鸣鸟叫的原始森林。这里就是明治神宫（Meiji Jingu）。它不仅是东京必去的景点，更是供奉明治天皇与昭宪皇太后灵位、地位崇高的神道教圣地。",
        "今天这篇Blog就带大家深入走访这座占地高达70公顷的人造神秘森林，解锁那些走过路过极易错过的隐藏亮点与旅行故事！",
      ],
      torii: {
        title: "1. 日本最大的木造鸟居 —— 来自台湾的缘分",
        content: "进入神宫后，最引人注目的就是位于南参道与北参道交会处的「大鸟居」。这座鸟居高12米、宽17米，是日本最大的木造明神鸟居。值得一提的是，这座巨大的鸟居所使用的木材，是源自台湾阿里山高达1200年树龄的巨形扁柏，来到这里不妨抬头感受它的庄严与历史厚重感。",
      },
      sake: {
        title: "2. 百年不对称的秘密：传说中的88度弯道",
        content: "当你漫步在碎石参道时，会发现路线并不是一条直线。在接近正殿时，参道会有一个接近直角的转弯。据说这个弯道精准地测量为88度（而非90度），在汉字中「八」代表着四面八方、开阔与吉利。设计师故意不弄成直角，是为了让学生在转弯时能渐渐调适心情，怀着崇敬的心迎接神明。",
      },
      well: {
        title: "🍀 内苑散策：清正之井与明治神宫御苑",
        content: "如果你有额外的时间，非常推荐花500日圆门票进入「明治神宫御苑」。这里在江户时代曾是加藤家和伊伊家的庭园。里面隐藏着全东京最知名的开运能量景点——「清正之井」（Kiyomasa's Well）。这是一口由名将加藤清正挖掘的古井，泉水四季不断，据说将井水照片设为手机桌面能带来好运呢！",
      },
      wedding: {
        title: "🕊️ 幸运限定：你有机会遇见「神前结婚式」吗？",
        content: "明治神宫是日本年轻人举办传统婚礼的梦幻圣地。如果运气好，在周末的上午前往，你很有机会在正殿前的广场目睹一场传统的「神前结婚式」——新娘身穿纯白的「白无垢」，在神职人员的引领下缓步前行。现场气氛极其庄重肃穆，是非常珍贵的文化体验。",
      },
      tips: [
        "开放时间：明治神宫的开门与关门时间是跟随「太阳升落」而每个月变动的。基本上日出开门、日落关门，去之前记得先上官网确认当月时间。",
        "参拜礼仪：走在参道上时，记得走两侧。因为参道的正中央（称为「正中」）是留给神明通行的。经过大鸟居时，也可以微微鞠躬以示敬意。",
        "交通方式：搭乘JR山手线至「原宿站」或东京地下铁至「明治神宫前站」，出站步行1分钟即可到达神宫入口（神宫桥）。",
      ],
    },
    info: {
      address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
      hours: "日出至日落（每季不同）",
      fee: "免费（御苑另需 ¥500）",
      rating: "4.8/5.0（41,205评论）",
      transport: "JR山手线 原宿站 步行1分钟",
      duration: "1-2小时",
    },
    infoTitle: "📊 景点资讯一览",
    address: "📍 地址",
    openingHours: "🕐 开放时间",
    fee: "💰 费用",
    rating: "⭐ 评分",
    transport: "🚇 交通",
    visitDuration: "⏱️ 建议游览",
  },
  en: {
    backHome: "← Back to Blog",
    blog: "| Blog",
    meta: {
      region: "🌲 Tokyo Shrine",
      title: "Tokyo's Forest Sanctuary: Meiji Shrine",
      subtitle: "Half-Day Deep Guide",
      heroCaption: "▲ The massive Taiwan cypress Torii gate at the entrance, standing 12m high and 17m wide - Japan's largest wooden Torii",
    },
    toc: [
      { id: "intro", title: "Introduction", emoji: "📖" },
      { id: "torii", title: "Great Torii", emoji: "⛩️" },
      { id: "sake", title: "Sake Barrels", emoji: "🍶" },
      { id: "well", title: "Kiyomasa's Well", emoji: "💧" },
      { id: "tips", title: "Travel Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "Just steps from trendy Harajuku and Takeshita Street, it's hard to believe that crossing one bridge transports you from bustling city to serene forest filled with birdsong. This is Meiji Jingu (Meiji Shrine) - not just a must-visit Tokyo attraction, but a sacred Shinto shrine dedicated to Emperor Meiji and Empress Shoken.",
        "In this blog, we'll take you deep into this 70-hectare man-made forest, uncovering hidden gems and travel stories that are easy to miss!",
      ],
      torii: {
        title: "1. Japan's Largest Wooden Torii Gate - A Taiwan Connection",
        content: "The most striking feature upon entering is the massive 'Great Torii' at the intersection of the South and North approach paths. Standing 12 meters high and 17 meters wide, it's Japan's largest wooden Meiji-style Torii gate. Interestingly, the timber came from 1,200-year-old cypress trees from Taiwan's Alishan. Take a moment to appreciate its grandeur and historical significance!",
      },
      sake: {
        title: "2. The Century-Old Secret: The 88-Degree Curve",
        content: "As you stroll along the gravel-covered paths, you'll notice the route isn't a straight line. Near the main hall, the path makes an almost right-angle turn. Legend has it this turn measures precisely 88 degrees (not 90). In Chinese characters, '8' represents all directions, openness, and good fortune. The designer purposely avoided a perfect right angle so worshippers could gradually adjust their mindset when turning.",
      },
      well: {
        title: "🍀 Inner Garden: Kiyomasa's Well & Meiji Shrine Gardens",
        content: "If you have extra time, we highly recommend entering the 'Meiji Jingu Gyoen' (Meiji Shrine Gardens) for ¥500. This was once the garden of the Kato and Ei families during the Edo period. Hidden here is Tokyo's most famous 'lucky energy spot' - 'Kiyomasa's Well' (Kiyomasa-no-Ido). This ancient well was dug by the famous warlord Kato Kiyomasa, and its spring water flows year-round. Legend says setting a photo of the well as your phone wallpaper brings good luck!",
      },
      wedding: {
        title: "🕊️ Lucky Encounter: Witness a Traditional Shinto Wedding?",
        content: "Meiji Shrine is a dream wedding venue for young Japanese couples. If you're lucky, visiting on a weekend morning, you might witness a traditional 'Shinkon-shiki' (Shinto wedding ceremony) at the main hall plaza - the bride in pure white 'shiromuku' ceremonial robes, led by priests and miko (shrine maidens). The atmosphere is solemn and dignified - a truly precious cultural experience!",
      },
      tips: [
        "Opening hours: Meiji Shrine opens at sunrise and closes at sunset, which changes monthly. Check the official website for current times before your visit.",
        "Etiquette: Walk on the sides of the path, not the center. The center (called 'seichu') is reserved for the deities. When passing through the great Torii, a slight bow shows respect.",
        "Getting there: Take the JR Yamanote Line to Harajuku Station or Tokyo Metro to Meiji-Jingumae Station, exit and walk 1 minute to the shrine entrance (Jingubashi Bridge).",
      ],
    },
    info: {
      address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
      hours: "Sunrise to sunset (varies by season)",
      fee: "Free (Gardens ¥500)",
      rating: "4.8/5.0 (41,205 reviews)",
      transport: "JR Yamanote Line Harajuku Sta. 1 min",
      duration: "1-2 hours",
    },
    infoTitle: "📊 Attraction Info",
    address: "📍 Address",
    openingHours: "🕐 Hours",
    fee: "💰 Fee",
    rating: "⭐ Rating",
    transport: "🚇 Transport",
    visitDuration: "⏱️ Suggested Visit",
  },
  yue: {
    backHome: "← 返回 Blog",
    blog: "| Blog",
    meta: {
      region: "🌲 東京神社",
      title: "東京市中心嘅森林秘境：明治神宮",
      subtitle: "深度半日遊攻略",
      heroCaption: "▲ 矗立於參道入口、極具震撼力嘅台灣檜木大鳥居，高12米、寬17米",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "torii", title: "大鳥居", emoji: "⛩️" },
      { id: "sake", title: "酒桶牆", emoji: "🍶" },
      { id: "well", title: "清正之井", emoji: "💧" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "緊鄰著潮流發源地原宿與竹下通，很難想像只要行過一條橋，就可以瞬間從喧囂嘅都市切換到蟬鳴鳥叫嘅原始森林。呢度就係明治神宮（Meiji Jingu）。佢唔單止係東京必去嘅景點，仲係供奉明治天皇與昭憲皇太后靈位、地位崇高嘅神道教聖地。",
        "今日呢篇Blog就帶大家深入走訪呢座佔地高達70公頃嘅人造神秘森林，解鎖嗰啲行過路過極易錯過嘅隱藏亮點與旅行故事！",
      ],
      torii: {
        title: "1. 日本最大嘅木造鳥居 —— 來自台灣嘅緣分",
        content: "進入神宮後，最引人注目嘅就係位於南參道與北參道交會處嘅「大鳥居」。呢座鳥居高12米、寬17米，係日本最大嘅木造明神鳥居。值得一提的是，呢座巨大嘅鳥居所使用嘅木材，係源自台灣阿里山高達1200年樹齡嘅巨型檜木，嚟到呢度不妨抬頭感受佢嘅莊嚴與歷史厚重感。",
      },
      sake: {
        title: "2. 百年唔對稱嘅秘密：傳說中嘅88度彎道",
        content: "當你漫步喺碎石參道時，會發現路線並唔係一條直線。喺接近正殿時，參道會有一個接近直角嘅轉彎。據說呢個彎道精準地測量為88度（而非90度），喺漢字中「八」代表著四面八方、開闊與吉利。設計師故意唔弄成直角，係為咗讓信眾喺轉彎時能漸漸調適心情，懷住崇敬嘅心迎接神明。",
      },
      well: {
        title: "🍀 內苑散策：清正之井與明治神宮御苑",
        content: "如果你有額外嘅時間，非常推薦花500日圓門票進入「明治神宮御苑」。呢度喺江戶時代曾係加藤家和伊伊家嘅庭園。入面隱藏著全東京最知名嘅開運能量景點 —— 「清正之井」（Kiyomasa's Well）。呢係一口由名將加藤清正挖掘嘅古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！",
      },
      wedding: {
        title: "🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？",
        content: "明治神宮係日本年輕人舉辦傳統婚禮嘅夢幻聖地。如果運氣好，喺週末嘅上午前往，你好有機會喺正殿前嘅廣場目睹一場傳統嘅「神前結婚式」—— 新娘身穿純白嘅「白無垢」，喺神職人員與巫女嘅引領下緩步前行。現場氣氛極其莊重肅穆，係非常珍貴嘅文化體驗。",
      },
      tips: [
        "開放時間：明治神宮嘅開門與關門時間係跟隨「太陽升落」而每個月變動嘅。基本日出開門、日落關門，去之前記得先上官網確認當月時間。",
        "參拜禮儀：行喺參道上時，記得行兩側。因為參道嘅正中央（稱為「正中」）係留給神明通行嘅。經過大鳥居時，也可以微微鞠躬以示敬意。",
        "交通方式：搭乘JR山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行1分鐘即可到達神宮入口（神宮橋）。",
      ],
    },
    info: {
      address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
      hours: "日出至日落（每季不同）",
      fee: "免費（御苑另需 ¥500）",
      rating: "4.8/5.0（41,205評論）",
      transport: "JR山手線 原宿站 步行1分鐘",
      duration: "1-2小時",
    },
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    openingHours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    visitDuration: "⏱️ 建議遊覽",
  },
};

export default function MeijiShrinePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");
  const content = meijiContent[currentLang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.toc.map(t => t.id);
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#2c3e50]">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center gap-2">
        <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} variant="minimal" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4a7c59] hover:text-[#1a2a3a] transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#4a7c59]/20"
          >
            {content.backHome}
          </Link>
          <span className="text-[#4a7c59]/50">{content.blog}</span>
        </div>

        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#4a7c59]/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-[#4a7c59] font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#4a7c59]/20">
          <img
            src="https://images.unsplash.com/photo-1682744210484-5f23d77b21c7?w=1200&q=80"
            alt={content.meta.title}
            className="w-full"
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          {content.meta.heroCaption}
        </p>

        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#4a7c59]/30 rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-bold text-[#4a7c59] mb-4 flex items-center gap-2">
            📋 {content.toc[0]?.title || "目錄導覽"}
          </h3>
          <ul className="space-y-1">
            {content.toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white shadow-lg shadow-[#4a7c59]/30"
                      : "text-[#2c3e50]/70 hover:text-[#1a2a3a] hover:bg-[#e8eaed]"
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <article className="prose prose-lg max-w-none">
          <div id="intro">
            {content.sections.intro.map((text, i) => (
              <p key={i} className="text-[#2c3e50] text-justify mb-4">{text}</p>
            ))}
          </div>

          <YouTubeEmbed videoId="fFMpQjh53KI" title="明治神宮神秘森林導覽" />

          <h2 id="torii" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">
            {content.toc[1]?.emoji} {content.sections.torii.title}
          </h2>
          <p className="text-[#2c3e50] text-justify">{content.sections.torii.content}</p>

          <h2 id="sake" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">
            {content.toc[2]?.emoji} {content.sections.sake.title}
          </h2>
          <p className="text-[#2c3e50] text-justify">{content.sections.sake.content}</p>

          <div className="bg-[#f4f6f9] border-l-4 border-[#4a7c59] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#4a7c59] font-bold mb-3 text-xl">{content.sections.wedding.title}</h4>
            <p className="text-[#2c3e50]">{content.sections.wedding.content}</p>
          </div>

          <h2 id="well" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">
            {content.toc[3]?.emoji} {content.sections.well.title}
          </h2>
          <p className="text-[#2c3e50] text-justify">{content.sections.well.content}</p>

          <div className="bg-[#4a7c59] text-white p-6 my-10 rounded-xl" id="tips">
            <h3 className="font-bold mb-4 text-xl">
              💡 {content.toc[4]?.emoji} {content.toc[4]?.title}
            </h3>
            <ul className="space-y-3">
              {content.sections.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

          <YouTubeEmbed videoId="fxAIBywb7Vk" title="明治神宮完整導覽" />

          <h2 className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">{content.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.address}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.address}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.openingHours}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.hours}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.fee}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.fee}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.rating}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.rating}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.transport}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.transport}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{content.visitDuration}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.duration}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="meiji-shrine" />
    </div>
  );
}
