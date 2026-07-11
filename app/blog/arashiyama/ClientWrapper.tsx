"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage, languageInfo } from "../../data/travelTranslations";

// Article-specific content in multiple languages
const arashiyamaContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    bamboo: { title: string; content: string[] };
    nomiya: { title: string; content: string[] };
    bridge: { title: string; content: string[] };
    train: { title: string; content: string[] };
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
}> = {
  "zh-TW": {
    meta: {
      region: "🎋 京都大自然",
      title: "京都避世仙境：嵐山竹林小徑",
      subtitle: "深度散策！尋找那一抹翠綠與心靈寧靜",
      heroCaption: "▲ 置身於被日本環境省評選為「環境省選定聲音風景100選」之一的嵯峨野竹林小徑",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🎋" },
      { id: "bamboo", title: "竹林小徑", emoji: "🎍" },
      { id: "nomiya", title: "野宮神社", emoji: "⛩️" },
      { id: "bridge", title: "渡月橋", emoji: "🌉" },
      { id: "train", title: "小火車", emoji: "🚂" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想暫時遠離都市的喧囂，尋找一個能讓靈魂呼吸的地方，京都的嵐山（Arashiyama）絕對是首選。而在嵐山眾多美景當中，最令人心馳神往的，莫過於那條彷彿通往異次元世界的竹林小徑（Bamboo Grove）。當微風吹過，千萬竿翠竹隨風搖曳，發出沙沙的輕響，那一瞬間的空靈與療癒，真的能撫平所有的疲憊。",
        "今天這篇Blog就帶大家漫步這條傳說中的綠色隧道，並附上周邊必訪的經典路線與完美避開人潮的實用攻略！",
      ],
      bamboo: {
        title: "嵯峨野竹林小徑 —— 走進大自然的綠色屏障",
        content: [
          "這條小徑長約 400 米，從天龍寺北側一直延伸到大河內山莊附近。道路兩旁長滿了挺拔筆直的野宮竹，它們高聳得幾乎遮天蔽日，把外界的光線過濾成溫和的淡綠色。",
          "心靈體驗：來到這裡不妨閉上眼睛，細心聆聽竹葉摩擦的聲音與竹竿撞擊的沉穩聲響，這裡可是被評為日本百大最想保留的聲音風景之一呢。",
        ],
      },
      nomiya: {
        title: "野宮神宮 —— 隱藏竹林中的結緣與學業聖地",
        content: [
          "順著竹林小徑前行，你會遇見一座精緻古樸的神社 —— 野宮神社。這裏最出名的是它擁有全日本最古老、保留了樹皮的木造「黑木鳥居」。神社規模雖小，但香火極盛，這裡供奉的「野宮大黑天」據說祈求姻緣（良緣）超級靈驗；而一旁的「龜石」更傳說只要一邊撫摸一邊許願，願望在一年內就會實現！",
        ],
      },
      bridge: {
        title: "渡月橋 —— 飽覽嵐山山水畫卷",
        content: [
          "在進入竹林前或離開後，必定會經過這座跨越桂川的渡月橋。這座橋的名字非常浪漫，源於龜山天皇曾讚嘆月亮移動時就如同「月亮正在渡橋」一般。站在橋上，清澈的江水在腳下流淌，遠處是綿延不絕的嵐山山脈，春天賞櫻、夏天翠綠、秋天漫山紅葉、冬天銀裝素裹，四季皆美得像一幅潑墨山水畫。",
        ],
      },
      train: {
        title: "加碼體驗：嵯峨野觀光小火車 (Sagano Romantic Train)",
        content: [
          "來到嵐山，非常強烈推薦順道搭乘紅黃相間的「嵐山小火車」！這是一條沿著保津川溪谷行駛的復古鐵道，全長 7.3 公里。沿途你可以一邊吹著山風，一邊欣賞溪谷的奇岩怪石與急流。建議可以在「小火車嵐山站」下车，步行一分鐘就能無縫接軌直接進入竹林小徑！",
        ],
      },
      tips: [
        "黃金防人潮時間：由於竹林小徑全天免費開放，這裡日校時間通常人山人海。如果想拍到完全冇人、極具禪意的空靈大片，唯一的秘诀就是清晨 7:30 之前抵達！這時候的晨光剛灑落，竹林散發著淡淡的霧氣，美得無法言喻。",
        "順遊天龍寺：竹林小徑的起點就在世界文化遺產「天龍寺」的北門。建議可以購買天龍寺「曹源池庭園」的門票，欣賞完完美的借景枯山水園林後，直接從北門出站進入竹林，路線最順暢。",
        "交通方式：從京都站出發最快的方法是搭乘 JR 山手/山陰本草（嵯峨野線）至「嵯峨嵐山站」，出站步行約 10-15 分鐘即可抵達竹林。",
      ],
    },
    info: {
      address: "Kyoto, Ukyo Ward, Arashiyama",
      hours: "24小時開放（免費）",
      fee: "竹林免費 / 天龍寺 ¥500",
      rating: "4.7/5.0（56,321 評論）",
      transport: "JR 嵯峨嵐山站 步行10分鐘",
      duration: "2-3小時",
    },
  },
  "zh-CN": {
    meta: {
      region: "🎋 京都大自然",
      title: "京都避世仙境：岚山竹林小径",
      subtitle: "深度散步！寻找那一抹翠绿与心灵宁静",
      heroCaption: "▲ 置身于被日本环境省评选为「环境省选定声音风景100选」之一的嵯峨野竹林小径",
    },
    toc: [
      { id: "intro", title: "介绍", emoji: "🎋" },
      { id: "bamboo", title: "竹林小径", emoji: "🎍" },
      { id: "nomiya", title: "野宫神社", emoji: "⛩️" },
      { id: "bridge", title: "渡月桥", emoji: "🌉" },
      { id: "train", title: "小火车", emoji: "🚂" },
      { id: "tips", title: "实用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想暂时远离都市的喧嚣，寻找一个能让灵魂呼吸的地方，京都的岚山（Arashiyama）绝对是首选。而在岚山众多美景当中，最令人心驰神往的，莫过于那条仿佛通往异次元世界的竹林小径（Bamboo Grove）。当微风吹过，千万竿翠竹随风摇曳，发出沙沙的轻响，那一瞬间的空灵与疗愈，真的能抚平所有的疲惫。",
        "今天这篇Blog就带大家漫步这条传说中的绿色隧道，并附上周边必访的经典路线与完美避开人潮的实用攻略！",
      ],
      bamboo: {
        title: "嵯峨野竹林小径 —— 走进大自然的绿色屏障",
        content: [
          "这条小径长约400米，从天龙寺北侧一直延伸到大河内山庄附近。道路两旁长满了挺拔笔直的野宫竹，它们高耸得几乎遮天蔽日，把外界的光线过滤成温和的淡绿色。",
          "心灵体验：来到这里不妨闭上眼睛，细心聆听竹叶摩擦的声音与竹竿撞击的沉稳声响，这里可是被评为日本百大最想保留的声音风景之一呢。",
        ],
      },
      nomiya: {
        title: "野宫神社 —— 隐藏在竹林中的结缘与学业圣地",
        content: [
          "顺着竹林小径前行，你会遇见一座精致古朴的神社——野宫神社。这里最出名的是它拥有全日本最古老、保留了树皮的木造「黑木鸟居」。神社规模虽小，但香火极盛，这里供奉的「野宫大黑天」据说祈求姻缘（良缘）超级灵验；而一旁的「龟石」更传说只要一边抚摸一边许愿，愿望在一年内就会实现！",
        ],
      },
      bridge: {
        title: "渡月桥 —— 饱览岚山山水画卷",
        content: [
          "在进入竹林前或离开后，必定会经过这座跨越桂川的渡月桥。这座桥的名字非常浪漫，源于龟山天皇曾赞叹月亮移动时就如同「月亮正在渡桥」一般。站在桥上，清澈的江水在脚下流淌，远处是绵延不绝的岚山山脉，春天赏樱、夏天翠绿、秋天漫山红叶、冬天银装素裹，四季皆美得像一幅泼墨山水画。",
        ],
      },
      train: {
        title: "加码体验：嵯峨野观光小火车 (Sagano Romantic Train)",
        content: [
          "来到岚山，非常强烈推荐顺道乘坐红黄相间的「岚山小火车」！这是一条沿着保津川溪谷行驶的复古铁道，全长7.3公里。沿途你可以一边吹着山风，一边欣赏溪谷的奇岩怪石与急流。建议可以在「小火车岚山站」下车，步行一分钟就能无缝接轨直接进入竹林小径！",
        ],
      },
      tips: [
        "黄金防人潮时间：由于竹林小径全天免费开放，这里日间时间通常人山人海。如果想拍到完全无人、极具禅意的空灵大片，唯一的秘诀就是清晨7:30之前抵达！这时候的晨光刚洒落，竹林散发着淡淡的雾气，美得无法言喻。",
        "顺游天龙寺：竹林小径的起点就在世界文化遗产「天龙寺」的北门。建议可以购买天龙寺「曹源池庭园」的门票，欣赏完完美的借景枯山水园林后，直接从北门出站进入竹林，路线最顺畅。",
        "交通方式：从京都站出发最快的方法是乘坐JR山手/山阴本线（嵯峨野线）至「嵯峨岚山站」，出站步行约10-15分钟即可抵达竹林。",
      ],
    },
    info: {
      address: "Kyoto, Ukyo Ward, Arashiyama",
      hours: "24小时开放（免费）",
      fee: "竹林免费 / 天龙寺 ¥500",
      rating: "4.7/5.0（56,321 评论）",
      transport: "JR 嵯峨岚山站 步行10分钟",
      duration: "2-3小时",
    },
  },
  en: {
    meta: {
      region: "🎋 Kyoto Nature",
      title: "Kyoto's Hidden Paradise: Arashiyama Bamboo Grove",
      subtitle: "Deep Walk! Finding the Emerald Green and Spiritual Tranquility",
      heroCaption: "▲ Experience the Sagano Bamboo Grove, selected by Japan's Ministry of Environment as one of the 'Top 100 Soundscape Locations'",
    },
    toc: [
      { id: "intro", title: "Introduction", emoji: "🎋" },
      { id: "bamboo", title: "Bamboo Path", emoji: "🎍" },
      { id: "nomiya", title: "Nonomiya Shrine", emoji: "⛩️" },
      { id: "bridge", title: "Togetsukyo Bridge", emoji: "🌉" },
      { id: "train", title: "Train", emoji: "🚂" },
      { id: "tips", title: "Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "If you want to temporarily escape the hustle and bustle of the city and find a place where your soul can breathe, Kyoto's Arashiyama is definitely the top choice. Among all the beautiful scenery in Arashiyama, nothing is more enchanting than the Bamboo Grove (Bamboo Path) that seems to lead to another world. When the breeze blows, thousands of green bamboo stalks sway gently, creating a soft rustling sound—the ethereal and healing atmosphere can truly soothe all fatigue.",
        "Today, this blog will take you on a walk through this legendary green tunnel, with essential routes around the area and practical tips to avoid the crowds!",
      ],
      bamboo: {
        title: "Sagano Bamboo Grove — Step into Nature's Green Barrier",
        content: [
          "This path stretches about 400 meters, extending from the north side of Tenryu-ji Temple to near Okochi Sanso Villa. Both sides of the path are lined with tall, straight nOyomiya bamboo, towering so high they almost block out the sky, filtering the outside light into a gentle pale green.",
          "Spiritual Experience: When you come here, try closing your eyes and listening carefully to the sound of bamboo leaves rubbing together and the steady knocking of bamboo stalks—this place has been rated as one of the top 100 soundscapes in Japan that people most want to preserve!",
        ],
      },
      nomiya: {
        title: "Nonomiya Shrine — Hidden Romance and Academic Sanctuary in the Bamboo Forest",
        content: [
          "Walking along the bamboo path, you'll encounter an exquisite and rustic shrine—Nonomiya Shrine. Its most famous feature is Japan's oldest kuroki torii gate made of bark-covered wood. Although small in scale, it's extremely popular, with Nonomiya Daikokuten believed to be especially effective for prayers for good relationships (romance); and the nearby 'Turtle Stone' is said to grant wishes within a year if you touch it while making a wish!",
        ],
      },
      bridge: {
        title: "Togetsukyo Bridge — Admire Arashiyama's Landscape Painting",
        content: [
          "Before entering or after leaving the bamboo grove, you'll inevitably pass this bridge spanning the Katsura River. The bridge has a romantic name, originating from Emperor Kameyama's admiration of the moon moving as if 'the moon is crossing the bridge.' Standing on the bridge, clear river water flows beneath your feet, and in the distance are the continuous Arashiyama mountains—beautiful in all four seasons: cherry blossoms in spring, lush greenery in summer, autumn leaves covering the mountains, and silver-white snow in winter—each like a traditional Chinese ink painting.",
        ],
      },
      train: {
        title: "Bonus Experience: Sagano Scenic Railway (Sagano Romantic Train)",
        content: [
          "When visiting Arashiyama, it's highly recommended to take the red and yellow 'Arashiyama Scenic Train'! This is a vintage railway running along the Hozugawa River valley, stretching 7.3 kilometers. Along the way, you can enjoy the mountain breeze while admiring the strange rocks and rapids of the valley. It's suggested to get off at 'Arashiyama Station for the Scenic Train' and walk just one minute to seamlessly connect to the bamboo grove!",
        ],
      },
      tips: [
        "Golden Time to Avoid Crowds: Since the bamboo grove is open 24/7 for free, it's usually packed during daytime. If you want to take completely empty, zen-like photos, the only secret is to arrive before 7:30 AM! At this time, the morning light has just fallen, the bamboo grove is shrouded in light mist—unbelievably beautiful.",
        "Visit Tenryu-ji: The starting point of the bamboo path is at the north gate of World Heritage Site Tenryu-ji Temple. We recommend purchasing a ticket for the 'Sogenchi Garden,' and after enjoying the perfect Japanese rock garden, you can directly exit from the north gate into the bamboo grove for the smoothest route.",
        "Transportation: The fastest way from Kyoto Station is to take the JR Sanin Main Line (Sagano Line) to 'Saga-Arashiyama Station,' then walk about 10-15 minutes to reach the bamboo grove.",
      ],
    },
    info: {
      address: "Kyoto, Ukyo Ward, Arashiyama",
      hours: "24 hours (Free)",
      fee: "Bamboo Grove Free / Tenryu-ji ¥500",
      rating: "4.7/5.0 (56,321 reviews)",
      transport: "JR Saga-Arashiyama Stn, 10min walk",
      duration: "2-3 hours",
    },
  },
  yue: {
    meta: {
      region: "🎋 京都大自然",
      title: "京都避世仙境：嵐山竹林小徑",
      subtitle: "深度散策！尋找嗰一抹翠綠與心靈寧靜",
      heroCaption: "▲ 置身於被日本環境省評選為「環境省選定聲音風景100選」之一的嵯峨野竹林小徑",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🎋" },
      { id: "bamboo", title: "竹林小徑", emoji: "🎍" },
      { id: "nomiya", title: "野宮神社", emoji: "⛩️" },
      { id: "bridge", title: "渡月橋", emoji: "🌉" },
      { id: "train", title: "小火車", emoji: "🚂" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想暫時遠離都市嘅喧囂，搵一個可以俾靈魂呼吸嘅地方，京都嘅嵐山（Arashiyama）絕對係首選。而喺嵐山眾多美景當中，最令人心馳神往嘅，莫過於嗰條彷彿通往異次元世界嘅竹林小徑（Bamboo Grove）。當微風吹過，千萬竿翠竹隨風搖曳，發出沙沙嘅輕響，嗰一瞬間嘅空靈與療癒，真係能夠撫平所有嘅疲憊。",
        "今日呢篇Blog就帶大家漫步呢條傳說中嘅綠色隧道，並附上周邊必訪嘅經典路線與完美避開人潮嘅實用攻略！",
      ],
      bamboo: {
        title: "嵯峨野竹林小徑 —— 走進大自然嘅綠色屏障",
        content: [
          "呢條小徑長約400米，從天龍寺北側一直延伸到大河內山莊附近。道路兩旁長滿咗挺拔筆直嘅野宮竹，佢哋高聳得幾乎遮天蔽日，把外界嘅光線過濾成溫和嘅淡綠色。",
          "心靈體驗：來到呢度不妨閉上眼睛，細心聆聽竹葉摩擦嘅聲音與竹竿撞擊嘅沉穩聲響，呢度可是被評為日本百大最想保留嘅聲音風景之一呢。",
        ],
      },
      nomiya: {
        title: "野宮神宮 —— 隱藏竹林中嘅結緣與學業聖地",
        content: [
          "順著竹林小徑前行，你會遇見一座精緻古樸嘅神社——野宮神社。呢度最出名嘅係佢擁有全日本最古老、保留了樹皮嘅木造「黑木鳥居」。神社規模雖小，但香火極盛，呢度供奉嘅「野宮大黑天」據說祈求姻緣（良緣）超級靈驗；而一旁嘅「龜石」更傳說只要一邊撫摸一邊許願，願望喺一年內就會實現！",
        ],
      },
      bridge: {
        title: "渡月橋 —— 飽覽嵐山山水畫卷",
        content: [
          "喺進入竹林前或離開後，必定會經過呢座跨越桂川嘅渡月橋。呢座橋嘅名字非常浪漫，源於龜山天皇曾讚嘆月亮移動時就如同「月亮正在渡橋」一般。站在橋上，清澈嘅江水喺腳下流淌，遠處係綿延不絕嘅嵐山山脈，春天賞櫻、夏天翠綠、秋天漫山紅葉、冬天銀裝素裹，四季皆美得像一幅潑墨山水畫。",
        ],
      },
      train: {
        title: "加碼體驗：嵯峨野觀光小火車 (Sagano Romantic Train)",
        content: [
          "來到嵐山，非常強烈推薦順道搭乘紅黃相間嘅「嵐山小火車」！呢係一條沿著保津川溪谷行駛嘅復古鐵道，全長7.3公里。沿途你可以一邊吹著山風，一邊欣賞溪谷嘅奇岩怪石與急流。建議可以喺「小火車嵐山站」落車，步行一分鐘就能無縫接軌直接進入竹林小徑！",
        ],
      },
      tips: [
        "黃金防人潮時間：由於竹林小徑全天免費開放，呢度日校時間通常人山人海。如果想影到完全冇人、極具禪意嘅空靈大片，唯一嘅秘诀就係清晨7:30之前抵達！呢個時候嘅晨光剛灑落，竹林散發著淡淡嘅霧氣，美得無法言喻。",
        "順遊天龍寺：竹林小徑嘅起點就在世界文化遺產「天龍寺」嘅北門。建議可以購買天龍寺「曹源池庭園」嘅門票，欣賞完完美嘅借景枯山水園林後，直接從北門出站進入竹林，路線最順暢。",
        "交通方式：從京都站出發最快嘅方法係搭乘JR山手/山陰本草（嵯峨野線）至「嵯峨嵐山站」，出站步行約10-15分鐘即可抵達竹林。",
      ],
    },
    info: {
      address: "Kyoto, Ukyo Ward, Arashiyama",
      hours: "24小時開放（免費）",
      fee: "竹林免費 / 天龍寺 ¥500",
      rating: "4.7/5.0（56,321 評論）",
      transport: "JR 嵯峨嵐山站 步行10分鐘",
      duration: "2-3小時",
    },
  },
};

const arashiyamaImages = [
  "https://photo53.com/img/chikurin15.jpg",
  "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
  "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
];

export default function ArashiyamaPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");

  const content = arashiyamaContent[currentLang];
  const lastUpdated = "2026-07-11";
  const tocItems = content.toc;

  useEffect(() => {
    // Load saved language
    const saved = localStorage.getItem("travel_language") as TravelLanguage;
    if (saved && arashiyamaContent[saved]) {
      setCurrentLang(saved);
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#2c3e50]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#4a7c59]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#4a7c59]/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[#4a7c59] flex items-center gap-2">
              📋 {content.meta.region.includes("京都") || content.meta.region.includes("Kyoto") ? "目錄導覽" : "目錄導覽"}
            </h3>
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} variant="minimal" />
          </div>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
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
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4a7c59] hover:text-[#1a2a3a] transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#4a7c59]/20"
          >
            ← {currentLang === "en" ? "Back to Blog" : currentLang === "zh-CN" ? "返回博客" : currentLang === "yue" ? "返回博客" : "返回 Blog"}
          </Link>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
        </div>

        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#4a7c59]/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-[#4a7c59] font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-[#94a3b8]">May 2026 · Last Updated: 2026-07-11 · {currentLang === "en" ? "Author: Pure Traveler" : currentLang === "zh-CN" ? "作者：纯粹旅人" : currentLang === "yue" ? "作者：純粹旅人" : "作者：純粹旅人"}</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#4a7c59]/20">
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
            alt={content.meta.title}
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          {content.meta.heroCaption}
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify">
            {content.sections.intro[0]}
          </p>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.intro[1]}
          </p>

          <h2 id="bamboo" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">
            🍃 {currentLang === "en" ? "Arashiyama Walk" : currentLang === "zh-CN" ? "嵐山散策" : "嵐山散策"}：{currentLang === "en" ? "3 Must-Visit Core Attractions" : "不可錯過的 3 大核心景點"}
          </h2>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.bamboo.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.bamboo.content[0]}
          </p>
          <p className="text-[#2c3e50] text-justify">
            <strong>{currentLang === "en" ? "Spiritual Experience:" : currentLang === "zh-CN" ? "心灵体验：" : currentLang === "yue" ? "心靈體驗：" : "心靈體驗："}</strong>
            {content.sections.bamboo.content[1]}
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80"
              alt="Arashiyama Bamboo"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ {currentLang === "en" ? "Morning light filtering through the towering green bamboo grove" : currentLang === "zh-CN" ? "晨光穿透兩側高聳入雲的翠綠竹林" : "晨光穿透兩側高聳入雲的翠綠竹林"}
            </p>
          </div>

          <h3 id="nomiya" className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.nomiya.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.nomiya.content[0]}
          </p>

          <h3 id="bridge" className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.bridge.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.bridge.content[0]}
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
              alt="Togetsukyo Bridge"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ {currentLang === "en" ? "The Togetsukyo Bridge spanning the Katsura River, Arashiyama's most iconic postcard view" : currentLang === "zh-CN" ? "橫跨桂川的渡月橋，是嵐山最具代表性的風景明信片" : "橫跨桂川的渡月橋，是嵐山最具代表性的風景明信片"}
            </p>
          </div>

          <div className="bg-[#f4f6f9] border-l-4 border-[#4a7c59] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#4a7c59] font-bold mb-4 text-xl">🚂 {content.sections.train.title}</h4>
            <p className="text-[#2c3e50] mb-4">
              {content.sections.train.content[0]}
            </p>
          </div>

          <div className="bg-[#4a7c59] text-white p-6 my-10 rounded-xl" id="tips">
            <h3 className="font-bold mb-4 text-xl">💡 {currentLang === "en" ? "Travel Tips" : currentLang === "zh-CN" ? "旅遊實用小貼士" : "旅遊實用小貼士"}</h3>
            <ul className="space-y-3">
              <li><strong>{currentLang === "en" ? "Golden Time to Avoid Crowds:" : currentLang === "zh-CN" ? "黃金防人潮時間：" : currentLang === "yue" ? "黃金防人潮時間：" : "黃金防人潮時間："}</strong>{content.sections.tips[0]}</li>
              <li><strong>{currentLang === "en" ? "Visit Tenryu-ji:" : currentLang === "zh-CN" ? "順遊天龍寺：" : currentLang === "yue" ? "順遊天龍寺：" : "順遊天龍寺："}</strong>{content.sections.tips[1]}</li>
              <li><strong>{currentLang === "en" ? "Transportation:" : currentLang === "zh-CN" ? "交通方式：" : currentLang === "yue" ? "交通方式：" : "交通方式："}</strong>{content.sections.tips[2]}</li>
            </ul>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">{content.meta.region.includes("京都") || content.meta.region.includes("Kyoto") ? "📊 景點資訊一覽" : "📊 景點資訊一覽"}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "📍 Address" : currentLang === "zh-CN" ? "📍 地址" : "📍 地址"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.address}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "🕐 Hours" : currentLang === "zh-CN" ? "🕐 開放時間" : "🕐 開放時間"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.hours}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "💰 Fee" : currentLang === "zh-CN" ? "💰 費用" : "💰 費用"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.fee}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "⭐ Rating" : currentLang === "zh-CN" ? "⭐ 評分" : "⭐ 評分"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.rating}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "🚇 Transport" : currentLang === "zh-CN" ? "🚇 交通" : "🚇 交通"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.transport}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">{currentLang === "en" ? "⏱️ Duration" : currentLang === "zh-CN" ? "⏱️ 建議遊覽" : "⏱️ 建議遊覽"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.duration}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <script type="text/javascript">
              {`var infolinks_pid = 3445528; var infolinks_wsid = 0;`}
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>
        </article>
      </div>

      {/* Comments Section */}
      <Comments slug="arashiyama" />
    </div>
  );
}
