"use client";

import Comments from "../../../components/Comments";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";

const shibuyaContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    crossing: string;
    scramble: string[];
    surround: Array<{ name: string; desc: string }>;
    tips: Array<{ icon: string; title: string; desc: string }>;
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
      region: "🌃 東京繁華",
      title: "走進世界最繁忙的十字路口",
      subtitle: "東京澀谷十字路口（Shibuya Crossing）全攻略！",
      heroCaption: "▲ 夜幕下的澀谷十字路口，來自四面八方的行人形成的「人流漩渦」是東京最具代表性的城市景觀",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🌍" },
      { id: "crossing", title: "十字路口", emoji: "🚶" },
      { id: "scramble", title: "隨機應變", emoji: "🎯" },
      { id: "surround", title: "周邊攻略", emoji: "🛍️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！這個每天都會上演「萬人過馬路」的繁忙路口，每次綠燈亮起，就會有數以千計的行人從四面八方同時穿越，形成一個獨一無二、令人血脈沸騰的「人流漩渦」。無論是白天還是深夜，這裡永遠都充滿著絡繹不絕的旅客與東京人。",
        "今天這篇Blog，就帶你深度攻略這個世界聞名的十字路口，從最佳拍攝位到周邊商場，全部一次過話你知！",
      ],
      crossing: "澀谷十字路口之所以聞名全世界，是因為它是全球最繁忙的行人穿越道。根據估計，每個綠燈周期大約有3,000人同時過馬路，而每日更有多達50萬人次經過這裡。當所有行人的步伐在同一瞬間由四面八方匯聚，形成一個好像漩渦這樣的奇觀，外國旅客第一次見到都會忍不住「嘩」一聲！",
      scramble: [
        "跟隨人流：不需要刻意等，等人群聚集到一定數量，綠燈一亮就跟大隊走。",
        "不要停在路中間：因為人實在太多，如果你停低會阻礙後面的人。",
        "交叉口中央有欄杆：如果綠燈響起你還未行完，可以在中間的安全島稍停。",
        "感受氣氛：試試在人潮最旺的時候行過去，體驗一下那種被千人包圍的快感！",
      ],
      surround: [
        { name: "🛍️ SHIBUYA109", desc: "東京辣妹時尚的地標，商場充斥着最新潮流款式與限定商品。" },
        { name: "🎮 澀谷Scramble Square", desc: "2019年新開的商業大樓，頂層有景觀台可以俯瞰整個十字路口！" },
        { name: "🍜 杵屋麵", desc: "百年歷史的日本橋蕎麥麵老店，經濟實惠又好食。" },
        { name: "☕ 星巴克澀谷店", desc: "二樓有落地玻璃窗，可以270度俯瞰十字路口，是最佳拍攝位！" },
      ],
      tips: [
        { icon: "📸", title: "最佳拍攝位", desc: "推薦去星巴克澀谷中央街店二樓，有落地大玻璃窗，可以影到整個十字路口的全景。" },
        { icon: "🌙", title: "夜間拍攝", desc: "夜晚的十字路口閃爍著東京的霓虹燈光，非常有未來感。建議帶備腳架或使用手持穩定器拍攝。" },
        { icon: "🚇", title: "交通方式", desc: "搭乘東京Metro地鐵副都心線、半藏門線、銀座線至「澀谷站」，從8號出口一出就到。" },
      ],
    },
    info: {
      address: "Shibuya Station, Shibuya, Tokyo",
      hours: "24小時開放",
      fee: "免費參觀",
      rating: "4.5/5.0（89,234評論）",
      transport: "東京Metro 澀谷站 步行1分鐘",
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
      region: "🌃 东京繁华",
      title: "走进世界最繁忙的十字路口",
      subtitle: "东京涩谷十字路口（Shibuya Crossing）全攻略！",
      heroCaption: "▲ 夜幕下的涩谷十字路口，来自四面八方的行人形成的「人流漩涡」是东京最具代表性的城市景观",
    },
    toc: [
      { id: "intro", title: "介绍", emoji: "🌍" },
      { id: "crossing", title: "十字路口", emoji: "🚶" },
      { id: "scramble", title: "随机应变", emoji: "🎯" },
      { id: "surround", title: "周边攻略", emoji: "🛍️" },
      { id: "tips", title: "实用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果要选一个最能代表现代东京、甚至全日本繁华景象的地标，涩谷十字路口（Shibuya Crossing）绝对当之无愧！这个每天都会上演「万人过马路」的繁忙路口，每次绿灯亮起，就会有数以千计的行人从四面八方同时穿越，形成一个独一无二、令人血脉沸腾的「人流漩涡」。无论是白天还是深夜，这里永远都充满了络绎不绝的旅客与东京人。",
        "今天这篇Blog，就带你深度攻略这个世界闻名的十字路口，从最佳拍摄位到周边商场，全部一次过告诉你！",
      ],
      crossing: "涩谷十字路口之所以闻名全世界，是因为它是全球最繁忙的行人穿越道。根据估计，每个绿灯周期大约有3,000人同时过马路，而每日更有多达50万人次经过这里。当所有行人的步伐在同一瞬间由四面八方汇聚，形成一个好像漩涡这样的奇观，外国旅客第一次见到都会忍不住「哇」一声！",
      scramble: [
        "跟随人流：不需要刻意等，等人群聚集到一定数量，绿灯一亮就跟大队走。",
        "不要停在路中间：因为人实在太多，如果你停住会阻碍后面的人。",
        "交叉口中央有栏杆：如果绿灯响起你还未走完，可以在中间的安全岛稍停。",
        "感受气氛：试试在人潮最旺的时候走过去，体验一下那种被千人包围的快感！",
      ],
      surround: [
        { name: "🛍️ SHIBUYA109", desc: "东京辣妹时尚的地标，商场充斥着最新潮流款式与限定商品。" },
        { name: "🎮 涩谷Scramble Square", desc: "2019年新开的商业大楼，顶层有景观台可以俯瞰整个十字路口！" },
        { name: "🍜 杵屋面", desc: "百年历史的日本桥荞麦面老店，经济实惠又好吃。" },
        { name: "☕ 星巴克涩谷店", desc: "二楼有落地玻璃窗，可以270度俯瞰十字路口，是最佳拍摄位！" },
      ],
      tips: [
        { icon: "📸", title: "最佳拍摄位", desc: "推荐去星巴克涩谷中央街店二楼，有落地大玻璃窗，可以拍到整个十字路口的全景。" },
        { icon: "🌙", title: "夜间拍摄", desc: "夜晚的十字路口闪烁着东京的霓虹灯光，非常有未来感。建议携带脚架或使用手持稳定器拍摄。" },
        { icon: "🚇", title: "交通方式", desc: "搭乘东京Metro地铁副都心线、半藏门线、银座线至「涩谷站」，从8号出口一出就到。" },
      ],
    },
    info: {
      address: "Shibuya Station, Shibuya, Tokyo",
      hours: "24小时开放",
      fee: "免费参观",
      rating: "4.5/5.0（89,234评论）",
      transport: "东京Metro 涩谷站 步行1分钟",
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
      region: "🌃 Tokyo Urban",
      title: "The World's Busiest Pedestrian Crossing",
      subtitle: "Complete Guide to Tokyo's Shibuya Crossing!",
      heroCaption: "▲ The Shibuya Crossing at night, where pedestrians from all directions create a mesmerizing 'human vortex' - Tokyo's most iconic urban landscape",
    },
    toc: [
      { id: "intro", title: "Introduction", emoji: "🌍" },
      { id: "crossing", title: "The Crossing", emoji: "🚶" },
      { id: "scramble", title: "How to Cross", emoji: "🎯" },
      { id: "surround", title: "Around the Area", emoji: "🛍️" },
      { id: "tips", title: "Travel Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "If you're looking for the most iconic symbol of modern Tokyo, the Shibuya Crossing (Shibuya Scramble Crossing) is absolutely it! Every day, this busy intersection puts on the 'thousands crossing' show - when the light turns green, thousands of pedestrians surge from all directions simultaneously, creating a unique and exhilarating 'human vortex'.",
        "In this blog, we'll take you through a deep guide of this world-famous crossing, from the best photo spots to the surrounding shopping areas!",
      ],
      crossing: "Shibuya Crossing is famous worldwide because it's the busiest pedestrian crossing on the planet. Estimates suggest about 3,000 people cross during each green light cycle, with up to 500,000 pedestrians passing through daily. When all these footsteps converge from all directions at once, it creates a vortex-like spectacle that makes first-time visitors gasp!",
      scramble: [
        "Follow the crowd: Don't wait - when a crowd gathers and the light turns green, just go with the flow.",
        "Don't stop in the middle: Because there are so many people, stopping blocks everyone behind you.",
        "There's a barrier in the center: If the light turns red before you finish crossing, you can pause at the safety island in the middle.",
        "Feel the atmosphere: Try crossing during peak hours and experience the thrill of being surrounded by a thousand people!",
      ],
      surround: [
        { name: "🛍️ SHIBUYA109", desc: "The hub of Tokyo'sgyaru (gal) fashion, packed with the latest trends and exclusive items." },
        { name: "🎮 Shibuya Scramble Square", desc: "A new commercial building opened in 2019, with an observation deck overlooking the entire crossing!" },
        { name: "🍜 Kineya", desc: "A century-old soba restaurant near Nihonbashi, affordable and delicious." },
        { name: "☕ Starbucks Shibuya", desc: "The second floor has floor-to-ceiling windows with 270-degree views of the crossing - the best photo spot!" },
      ],
      tips: [
        { icon: "📸", title: "Best Photo Spot", desc: "Head to the 2nd floor of Starbucks Shibuya Chuo Street branch for floor-to-ceiling windows and panoramic views." },
        { icon: "🌙", title: "Night Photography", desc: "The crossing at night glows with Tokyo's neon lights, creating a futuristic atmosphere. Bring a tripod or gimbal for steady shots." },
        { icon: "🚇", title: "Getting There", desc: "Take the Tokyo Metro Fukutoshin, Hanzomon, or Ginza lines to Shibuya Station, Exit 8." },
      ],
    },
    info: {
      address: "Shibuya Station, Shibuya, Tokyo",
      hours: "24 hours",
      fee: "Free",
      rating: "4.5/5.0 (89,234 reviews)",
      transport: "Tokyo Metro Shibuya Station, 1 min walk",
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
      region: "🌃 東京繁華",
      title: "行入全世界最繁忙的十字路口",
      subtitle: "東京澀谷十字路口（Shibuya Crossing）完全攻略！",
      heroCaption: "▲ 夜晚嘅澀谷十字路口，來自四面八方的行人形成嘅「人流漩渦」係東京最具代表性嘅城市景觀",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🌍" },
      { id: "crossing", title: "十字路口", emoji: "🚶" },
      { id: "scramble", title: "隨機應變", emoji: "🎯" },
      { id: "surround", title: "周邊攻略", emoji: "🛍️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果要揀一個最能代表現代東京、甚至全日本繁華景象嘅地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！呢個每日都會上演「萬人過馬路」嘅繁忙路口，每次綠燈著燈，就會有數以千計嘅行人從四面八方同時穿越，形成一個獨一無二、令人血脈沸騰嘅「人流漩渦」。無論係白天定係深夜，呢度永遠都充滿著絡繹不絕嘅旅客與東京人。",
        "今日呢篇Blog，就帶你深度攻略呢個世界聞名嘅十字路口，從最佳拍攝位到周邊商場，全部一次過話你知！",
      ],
      crossing: "澀谷十字路口之所以聞名全世界，係因為佢係全球最繁忙嘅行人穿越道。根據估計，每個綠燈周期大約有3,000人同時過馬路，而每日更有多達50萬人次經過呢度。當所有行人嘅步伐在同一瞬間由四面八方匯聚，形成一個好似漩渦咁嘅奇觀，外國旅客第一次見到都會忍唔住「嘩」一聲！",
      scramble: [
        "跟隨人流：唔需要刻意等，等人群聚集到一定數量，綠燈一亮就跟大隊走。",
        "唔好停喺路中間：因为人實在太多，如果你停低會阻礙後面嘅人。",
        "交叉口中央有欄杆：如果綠燈響起你仲未行完，可以喺中間嘅安全島稍停。",
        "感受氣氛：試下喺人流最旺嘅時候行過去，體驗吓嗰種被千人包圍嘅快感！",
      ],
      surround: [
        { name: "🛍️ SHIBUYA109", desc: "東京辣妹時尚嘅地標，商場充斥著最新潮流款式與限定商品。" },
        { name: "🎮 澀谷Scramble Square", desc: "2019年新開嘅商業大樓，頂層有景觀台可以俯瞰成個十字路口！" },
        { name: "🍜 杵屋麵", desc: "百年歷史嘅日本橋蕎麥麵老店，經濟實惠又好食。" },
        { name: "☕ 星巴克澀谷店", desc: "二樓有落地玻璃窗，可以270度俯瞰十字路口，係最佳拍攝位！" },
      ],
      tips: [
        { icon: "📸", title: "最佳拍攝位", desc: "推薦去星巴克澀谷中央街店二樓，有落地大玻璃窗，可以影到成個十字路口嘅全景。" },
        { icon: "🌙", title: "夜間拍攝", desc: "夜晚嘅十字路口閃爍著東京嘅霓虹燈光，非常有未來感。建議帶備腳架或者用手持穩定器拍攝。" },
        { icon: "🚇", title: "交通方式", desc: "搭乘東京Metro地鐵副都心線、半藏門線、銀座線至「澀谷站」，從8號出口一出就到。" },
      ],
    },
    info: {
      address: "Shibuya Station, Shibuya, Tokyo",
      hours: "24小時開放",
      fee: "免費參觀",
      rating: "4.5/5.0（89,234評論）",
      transport: "東京Metro 澀谷站 步行1分鐘",
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

export default function ShibuyaCrossingPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");
  const content = shibuyaContent[currentLang];

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center gap-2">
        <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} variant="minimal" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-4 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
          >
            {content.backHome}
          </Link>
          <span className="text-purple-400/50">{content.blog}</span>
        </div>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-purple-400 font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80"
          alt={content.meta.title}
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-purple-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://plus.unsplash.com/premium_photo-1766928979242-9750984909f7?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          {content.meta.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 mb-8">
            <h3 className="text-sm font-bold text-purple-400 mb-4 flex items-center gap-2">
              📋 {content.toc[0]?.title || "目錄導覽"}
            </h3>
            <ul className="space-y-1">
              {content.toc.map(({ id, title, emoji }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                      activeSection === id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
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

          <div id="intro">
            {content.sections.intro.map((text, i) => (
              <p key={i} className="mb-4">{text}</p>
            ))}
          </div>

          <h2 id="crossing">{content.toc[1]?.emoji} {content.toc[1]?.title}</h2>
          <p>{content.sections.crossing}</p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80"
              alt={content.meta.title}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 日間的十字路口，來自世界各地的旅客在此交匯
            </p>
          </div>

          <h2 id="scramble">{content.toc[2]?.emoji} {content.toc[2]?.title}</h2>
          <p>如果你第一次行呢個路口，可能會有啲不知所措。放心，等我哋教你！因為人流實在太多，東京人發展出一套獨特嘅「澀谷式過馬路」技巧：</p>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <ul className="space-y-3 text-zinc-300">
              {content.sections.scramble.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>

          <h2 id="surround">{content.toc[3]?.emoji} {content.toc[3]?.title}</h2>
          <p>行完十字路口，千祈唔好走！周邊仲有好多好嘢等緊你：</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {content.sections.surround.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
                <span className="text-purple-400 font-bold">{item.name}</span>
                <p className="text-zinc-300 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-10" id="tips">
            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 {content.toc[4]?.emoji} {content.toc[4]?.title}
            </h3>
            <ul className="space-y-3">
              {content.sections.tips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-purple-400">{tip.icon}</span>
                  <span className="text-zinc-300"><strong>{tip.title}：</strong>{tip.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2>{content.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.address}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.address}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.openingHours}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.hours}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.fee}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.fee}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.rating}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.rating}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.transport}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.transport}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">{content.visitDuration}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.duration}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="shibuya-crossing" />
    </div>
  );
}
