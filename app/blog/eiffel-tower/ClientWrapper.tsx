"use client";

import Comments from "../../../components/Comments";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";

// Multi-language content
const eiffelTowerContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    photoSpots: {
      title: string;
      spots: Array<{ name: string; title: string; content: string }>;
    };
    sparkle: { title: string; content: string };
    climb: { title: string; content: string };
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
      region: "🗼 歐洲漫遊 · 法式美學",
      title: "遇見巴黎的浪漫定義：艾菲爾鐵塔",
      subtitle: "深度打卡與登塔全攻略",
      heroCaption: "▲ 矗立於戰神廣場、優雅迎接塞納河微風的巴黎精神象徵 —— 艾菲爾鐵塔",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🗼" },
      { id: "photo-spots", title: "拍攝機位", emoji: "📸" },
      { id: "sparkle", title: "閃爍燈光", emoji: "✨" },
      { id: "climb", title: "登塔體驗", emoji: "🧗" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "海明威曾說：「如果你夠幸運，年輕時待過巴黎，那麼巴黎將永遠跟隨著你，因為她是一場流動的饗宴。」而在這場饗宴當中，最耀眼的主角絕對非艾菲爾鐵塔（Eiffel Tower）莫屬。這座，為了1889年世界博覽會而建的鏤空鋼鐵巨塔，雖然曾被當年的巴黎文人批判為「鋼鐵怪物」，但如今它已成為全球公認最浪漫的時尚地標。",
        "無論你是第一次踏上花都巴黎，還是想再次重溫它的優雅，跟著這篇Blog，我們不單要親臨塔下，更要帶你解鎖攝影師最愛的絕佳觀景位與夢幻點燈時刻！",
      ],
      photoSpots: {
        title: "📸 攝影師私藏：3 大拍攝鐵塔的頂級機位",
        spots: [
          {
            name: "夏樂宮（Trocadéro）",
            title: "完美的正面明信片視角",
            content: "位於塞納河對岸的夏樂宮平台，是公認拍攝艾菲爾鐵塔最完整、最宏偉的地方。因為地勢較高，你可以毫無遮擋地將整座鐵塔與前方的噴泉花園一同收入鏡頭。拍攝貼士：這裡非常適合拍攝人像大片，建議清晨前來，不僅能避開遊客，還能拍到晨霧籠罩鐵塔的唯美畫面。"
          },
          {
            name: "戰神廣場（Champ de Mars）",
            title: "愜意的法式野餐機位",
            content: "鐵塔下方延伸出去的一大片綠茵草地就是戰神廣場。買一條法式長棍麵包（Baguette）、一盒草莓和一瓶白葡萄酒，像巴黎人一樣隨意地躺在草地上仰望鐵塔。在這裡用相機捕捉由草地、散步的途人與高聳鐵塔構成的畫面，最能展現巴黎隨性浪漫的生活感。"
          },
          {
            name: "德比爾哈克姆橋（Pont de Bir-Hakeim）",
            title: "電影感鋼鐵對稱美",
            content: "這座雙層橋樑是電影《盜夢空間》（Inception）的經典取景地。上層行駛地鐵，下層則是行人與單車徑。站在橋中央那排極具幾何美感的鋼鐵立柱之間，將鏡頭對準延伸的走廊，旁邊襯托著遠處的鐵塔，拍出來的照片帶有一種無與倫比的文藝電影感。"
          }
        ]
      },
      sparkle: {
        title: "✨ 璀璨限定：震撼心靈的「閃爍燈光騷」（Diamond Sparkle）",
        content: "每當夜幕低垂，鐵塔會亮起溫暖的金黃色燈光。但真正的魔法發生在入夜後的每個整點（例如晚上21:00、22:00），鐵塔會準時上演持續5分鐘的「鑽石閃爍騷」！成千上萬個白色LED燈泡同時像鑽石般瘋狂閃爍，整座鋼鐵架構瞬間變得無比靈動，現場往往會引來無數旅客的驚嘆與歡呼，浪漫指數徹底破表！"
      },
      climb: {
        title: "🧗‍♂️ 登塔體驗：兩種俯瞰巴黎天際線的方式",
        content: "來到鐵塔，除了遠觀，更強烈建議預約登塔！鐵塔分為三層，你可以選擇乘搭經典的透明玻璃升降機直達頂端，或者挑戰自己的體力——步行674級樓梯登上第二層。站在觀景台上，凱旋門、香榭麗舍大道、塞納河上的遊船全部盡收眼底，巴黎這座城市的放射狀都市規劃會完美呈現在你眼前。"
      },
      tips: [
        "絕對要提早訂票：艾菲爾鐵塔是全球最熱門的景點之一，現場排隊往往需要2小時以上。強烈建議提前2-3個月在官網預約門票（可選擇登頂Top或是到第二層Second Floor）。",
        "最佳造訪時間：推薦預約黃昏前1小時登塔。這樣你就可以在塔上同時欣賞到白天的全景、浪漫的日落晚霞，以及整個巴黎夜幕低垂、萬家燈火點亮的震撼瞬間。",
        "交通方式：乘搭地鐵6號線至「Trocadéro站」下班（從夏樂宮開始逛），或者乘搭RER C線至「Champ de Mars Tour Eiffel站」，出站步行約5分鐘。"
      ]
    },
    info: {
      address: "Champ de Mars, 5 Avenue Anatole France, Paris",
      hours: "9:30-23:45（登塔至23:00）",
      fee: "成人 €28.3 起（電梯登頂）",
      rating: "4.7/5.0（156,892 評論）",
      transport: "地鐵6號線 Trocadéro 站",
      duration: "2-3小時"
    }
  },
  "zh-CN": {
    meta: {
      region: "🗼 欧洲漫游 · 法式美学",
      title: "遇见巴黎的浪漫定义：埃菲尔铁塔",
      subtitle: "深度打卡与登塔全攻略",
      heroCaption: "▲ 矗立于战神广场、优雅迎接塞纳河微风的巴黎精神象征 —— 埃菲尔铁塔",
    },
    toc: [
      { id: "intro", title: "介绍", emoji: "🗼" },
      { id: "photo-spots", title: "拍摄机位", emoji: "📸" },
      { id: "sparkle", title: "闪烁灯光", emoji: "✨" },
      { id: "climb", title: "登塔体验", emoji: "🧗" },
      { id: "tips", title: "实用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "海明威曾说：「如果你够幸运，年轻时待过巴黎，那么巴黎将永远跟随着你，因为她是一场流动的飨宴。」而在这场飨宴当中，最耀眼的主角绝对非埃菲尔铁塔（Eiffel Tower）莫属。这座，为了1889年世界博览会而建的镂空钢铁巨塔，虽然曾被当年的巴黎文人批判为「钢铁怪物」，但如今它已成为全球公认最浪漫的时尚地标。",
        "无论你是第一次踏上花都巴黎，还是想再次重温它的优雅，跟着这篇Blog，我们不单要亲临塔下，更要带你解锁摄影师最爱的绝佳观景点与梦幻点灯时刻！",
      ],
      photoSpots: {
        title: "📸 摄影师私藏：3 大拍摄铁塔的顶级机位",
        spots: [
          {
            name: "夏乐宫（Trocadéro）",
            title: "完美的正面明信片视角",
            content: "位于塞纳河对岸的夏乐宫平台，是公认拍摄埃菲尔铁塔最完整、最宏伟的地方。因为地势较高，你可以毫无遮挡地将整座铁塔与前方的喷泉花园一同收入镜头。拍摄贴士：这里非常适合拍摄人像大片，建议清晨前来，不仅能避开游客，还能拍到晨雾笼罩铁塔的唯美画面。"
          },
          {
            name: "战神广场（Champ de Mars）",
            title: "惬意的法式野餐机位",
            content: "铁塔下方延伸出去的一大片绿茵草地就是战神广场。买一条法式长棍面包（Baguette）、一盒草莓和一瓶白葡萄酒，像巴黎人一样随意地躺在草地上仰望铁塔。在这里用相机捕捉由草地、散步的游人与高耸铁塔构成的画面，最能展现巴黎随性浪漫的生活感。"
          },
          {
            name: "德比尔哈克姆桥（Pont de Bir-Hakeim）",
            title: "电影感钢铁对称美",
            content: "这座双层桥梁是电影《盗梦空间》（Inception）的经典取景地。上层行驶地铁，下层则是行人与单车道。站在桥中央那排极具几何美感的钢铁立柱之间，将镜头对准延伸的走廊，旁边衬托着远处的铁塔，拍出来的照片带有一种无与伦比的文艺电影感。"
          }
        ]
      },
      sparkle: {
        title: "✨ 璀璨限定：震撼心灵的「闪烁灯光秀」（Diamond Sparkle）",
        content: "每当夜幕低垂，铁塔会亮起温暖的金黄色灯光。但真正的魔法发生在入夜后的每个整点（例如晚上21:00、22:00），铁塔会准时上演持续5分钟的「钻石闪烁秀」！成千上万个白色LED灯泡同时像钻石般疯狂闪烁，整座钢铁架构瞬间变得无比灵动，现场往往会引来无数旅客的惊叹与欢呼，浪漫指数彻底破表！"
      },
      climb: {
        title: "🧗‍♂️ 登塔体验：两种俯瞰巴黎天际线的方式",
        content: "来到铁塔，除了远观，更强烈建议预约登塔！铁塔分为三层，你可以选择乘搭经典的透明玻璃升降机直达顶端，或者挑战自己的体力——步行674级楼梯登上第二层。站在观景台上，凯旋门、香榭丽舍大道、塞纳河上的游船全部尽收眼底，巴黎这座城市的放射状都市规划会完美呈现在你眼前。"
      },
      tips: [
        "绝对要提早订票：埃菲尔铁塔是全球最热门的景点之一，现场排队往往需要2小时以上。强烈建议提前2-3个月在官网预约门票（可选择登顶Top或到第二层Second Floor）。",
        "最佳造访时间：推荐预约黄昏前1小时登塔。这样你就可以在塔上同时欣赏到白天的全景、浪漫的日落晚霞，以及整个巴黎夜幕低垂、万家灯火点亮的震撼瞬间。",
        "交通方式：乘搭地铁6号线至「Trocadéro站」下班（从夏乐宫开始逛），或者乘搭RER C线至「Champ de Mars Tour Eiffel站」，出站步行约5分钟。"
      ]
    },
    info: {
      address: "Champ de Mars, 5 Avenue Anatole France, Paris",
      hours: "9:30-23:45（登塔至23:00）",
      fee: "成人 €28.3 起（电梯登顶）",
      rating: "4.7/5.0（156,892 评论）",
      transport: "地铁6号线 Trocadéro 站",
      duration: "2-3小时"
    }
  },
  en: {
    meta: {
      region: "🗼 European Journey · French Aesthetics",
      title: "The Definition of Parisian Romance: Eiffel Tower",
      subtitle: "Complete Guide for Photography & Tower Climbing",
      heroCaption: "▲ Standing proudly on the Champ de Mars, elegantly greeting the breezes of the Seine — the Eiffel Tower, symbol of Paris",
    },
    toc: [
      { id: "intro", title: "Introduction", emoji: "🗼" },
      { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
      { id: "sparkle", title: "Light Show", emoji: "✨" },
      { id: "climb", title: "Climbing", emoji: "🧗" },
      { id: "tips", title: "Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "Hemingway wrote: 'If you are lucky enough to have lived in Paris as a young man, then for the rest of your life it will always be with you, for Paris is a moveable feast.' And in this grand feast, the most dazzling star is undoubtedly the Eiffel Tower. This latticed iron giant, built for the 1889 World's Fair, was once criticized by Parisian intellectuals as an 'eyesore of steel,' but today it has become the world's most recognized symbol of romance.",
        "Whether you're visiting the City of Light for the first time or returning to relive its elegance, this blog will not only take you beneath the tower but also reveal the secret photo spots loved by photographers and the magical lighting moments you can't miss!"
      ],
      photoSpots: {
        title: "📸 Photographer's Secrets: Top 3 Photo Spots for the Eiffel Tower",
        spots: [
          {
            name: "Trocadéro",
            title: "The Perfect Postcard View",
            content: "The Trocadéro esplanade across the Seine is widely regarded as the best place to photograph the Eiffel Tower. Because it's elevated, you can capture the entire tower with the fountain gardens in the foreground. Photography tip: This spot is perfect for portrait photos. We recommend coming early in the morning to avoid crowds and capture misty morning scenes around the tower."
          },
          {
            name: "Champ de Mars",
            title: "The Perfect Picnic Spot",
            content: "The vast green lawn extending from the tower is the Champ de Mars. Buy a French baguette, a box of strawberries, and a bottle of white wine, then lie on the grass like Parisians do, gazing up at the tower. Capturing the scene with the grass, strolling visitors, and the towering iron structure creates the most authentic Parisian romantic atmosphere."
          },
          {
            name: "Pont de Bir-Hakeim",
            title: "Cinematic Symmetry",
            content: "This double-deck bridge was the iconic filming location for the movie 'Inception.' The upper level carries the metro while the lower level is for pedestrians and cyclists. Stand between the geometric steel pillars at the bridge's center, point your camera at the extending walkway, with the tower in the distance — the result is an unparalleled artistic, cinematic photograph."
          }
        ]
      },
      sparkle: {
        title: "✨ Limited Time Magic: The Dazzling 'Diamond Sparkle' Light Show",
        content: "When night falls, the tower illuminates with warm golden lights. But the real magic happens at every hour after dark (e.g., 9 PM, 10 PM), when the tower puts on a 5-minute 'Diamond Sparkle' show! Thousands of white LED bulbs sparkle like diamonds simultaneously, transforming the entire steel structure into something magical. The scene inevitably draws gasps and cheers from visitors — romance level: maximum!"
      },
      climb: {
        title: "🧗‍♂️ Tower Experience: Two Ways to Behold the Parisian Skyline",
        content: "When visiting the tower, we highly recommend booking a climb! The tower has three levels — you can take the classic transparent glass elevator to the summit, or challenge yourself by climbing 674 steps to the second floor. From the observation deck, the Arc de Triomphe, Champs-Élysées, and boats on the Seine all come into view. The radial urban planning of Paris unfolds perfectly before your eyes."
      },
      tips: [
        "Book tickets in advance: The Eiffel Tower is one of the world's most popular attractions. Queues can exceed 2 hours. We strongly recommend booking tickets 2-3 months in advance on the official website (choose Summit or Second Floor).",
        "Best time to visit: We recommend booking your climb for 1 hour before sunset. This way, you can enjoy panoramic views by day, the romantic sunset glow, and the breathtaking moment when all of Paris lights up at night.",
        "Transportation: Take Metro Line 6 to 'Trocadéro' station (start your visit at the Trocadéro), or take RER Line C to 'Champ de Mars Tour Eiffel' station, about 5 minutes' walk away."
      ]
    },
    info: {
      address: "Champ de Mars, 5 Avenue Anatole France, Paris",
      hours: "9:30-23:45 (Last climb: 23:00)",
      fee: "Adults from €28.3 (Elevator to summit)",
      rating: "4.7/5.0 (156,892 reviews)",
      transport: "Metro Line 6, Trocadéro Station",
      duration: "2-3 hours"
    }
  },
  yue: {
    meta: {
      region: "🗼 歐洲漫遊 · 法式美學",
      title: "遇見巴黎嘅浪漫定義：艾菲爾鐵塔",
      subtitle: "深度打卡與登塔全攻略",
      heroCaption: "▲ 矗立於戰神廣場、優雅迎接塞納河微風嘅巴黎精神象徵 —— 艾菲爾鐵塔",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "🗼" },
      { id: "photo-spots", title: "拍攝機位", emoji: "📸" },
      { id: "sparkle", title: "閃爍燈光", emoji: "✨" },
      { id: "climb", title: "登塔體驗", emoji: "🧗" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "海明威曾話：「如果你夠幸運，年輕時待過巴黎，咁巴黎將永遠跟隨著你，因為佢係一場流動嘅饗宴。」而喺呢場饗宴當中，最耀眼嘅主角絕對非艾菲爾鐵塔（Eiffel Tower）莫屬。呢座，為咗1889年世界博覽會而建嘅鏤空鋼鐵巨塔，雖然曾經被當年嘅巴黎文人批判為「鋼鐵怪物」，但係如今佢已成為全球公認最浪漫嘅時尚地標。",
        "無論你係第一次踏足花都巴黎，定係想再次重溫佢嘅優雅，跟住呢篇Blog，我哋唔單止要親臨塔下，更要帶你解鎖攝影師最愛嘅絕佳觀景位與夢幻點燈時刻！",
      ],
      photoSpots: {
        title: "📸 攝影師私藏：3 大拍攝鐵塔嘅頂級機位",
        spots: [
          {
            name: "夏樂宮（Trocadéro）",
            title: "完美嘅正面明信片視角",
            content: "位於塞納河對岸嘅夏樂宮平台，係公認拍攝艾菲爾鐵塔最完整、最宏偉嘅地方。因為地勢較高，你可以毫無遮擋地將整座鐵塔與前方嘅噴泉花園一同收入鏡頭。拍攝貼士：呢度非常適合拍攝人像大片，建議清晨前來，不單止能避開遊客，仲能影到晨霧籠罩鐵塔嘅唯美畫面。"
          },
          {
            name: "戰神廣場（Champ de Mars）",
            title: "愜意嘅法式野餐機位",
            content: "鐵塔下方延伸出去嘅一大片綠茵草地就係戰神廣場。買一條法式長棍麵包（Baguette）、一盒草莓同一瓶白葡萄酒，好似巴黎人一樣随意噉躺在草地上仰望鐵塔。喺呢度用相機捕捉由草地、散步嘅途人與高聳鐵塔構成嘅畫面，最能展現巴黎隨性浪漫嘅生活感。"
          },
          {
            name: "德比爾哈克姆橋（Pont de Bir-Hakeim）",
            title: "電影感鋼鐵對稱美",
            content: "呢座雙層橋樑係電影《盜夢空間》（Inception）嘅經典取景地。上層行駛地鐵，下層就係行人與單車徑。站在橋中央嗰排極具幾何美感嘅鋼鐵立柱之間，將鏡頭對準延伸嘅走廊，旁邊襯托著遠處嘅鐵塔，拍出嚟嘅照片帶有一種無與倫比嘅文藝電影感。"
          }
        ]
      },
      sparkle: {
        title: "✨ 璀璨限定：震撼心靈嘅「閃爍燈光騷」（Diamond Sparkle）",
        content: "每當夜幕低垂，鐵塔會亮起溫暖嘅金黃色燈光。但係真正嘅魔法發生喺入夜後嘅每個整點（例如晚上21:00、22:00），鐵塔會準時上演持續5分鐘嘅「鑽石閃爍騷」！成千上萬個白色LED燈泡同時像鑽石般瘋狂閃爍，整座鋼鐵架構瞬間變得無比靈動，現場往往會引來無數旅客嘅驚嘆與歡呼，浪漫指數徹底破表！"
      },
      climb: {
        title: "🧗‍♂️ 登塔體驗：兩種俯瞰巴黎天際線嘅方式",
        content: "來到鐵塔，除咗遠觀，更強烈建議預約登塔！鐵塔分為三層，你可以選擇乘搭經典嘅透明玻璃升降機直達頂端，或者挑戰自己嘅體力——步行674級樓梯登上第二層。站在觀景台上，凱旋門、香榭麗舍大道、塞納河上嘅遊船全部盡收眼底，巴黎呢座城市嘅放射狀都市規劃會完美呈現喺你眼前。"
      },
      tips: [
        "絕對要提早訂票：艾菲爾鐵塔係全球最熱門嘅景點之一，現場排隊往往需要2小時以上。強烈建議提前2-3個月喺官網預約門票（可選擇登頂Top或到第二層Second Floor）。",
        "最佳造訪時間：推薦預約黃昏前1小時登塔。咁樣你就可以喺塔上同時欣賞到白天的全景、浪漫的日落晚霞，以及成個巴黎夜幕低垂、萬家燈火點亮嘅震撼瞬間。",
        "交通方式：乘搭地鐵6號線至「Trocadéro站」下班（從夏樂宮開始逛），或者乘搭RER C線至「Champ de Mars Tour Eiffel站」，出站步行約5分鐘。"
      ]
    },
    info: {
      address: "Champ de Mars, 5 Avenue Anatole France, Paris",
      hours: "9:30-23:45（登塔至23:00）",
      fee: "成人 €28.3 起（電梯登頂）",
      rating: "4.7/5.0（156,892 評論）",
      transport: "地鐵6號線 Trocadéro 站",
      duration: "2-3小時"
    }
  }
};

export default function EiffelTowerPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");

  const content = eiffelTowerContent[currentLang];
  const lastUpdated = "2026-07-11";
  const tocItems = content.toc;

  useEffect(() => {
    const saved = localStorage.getItem("travel_language") as TravelLanguage;
    if (saved && eiffelTowerContent[saved]) {
      setCurrentLang(saved);
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getBackText = () => {
    switch(currentLang) {
      case "en": return "← Back to Blog";
      case "zh-CN": return "← 返回博客";
      case "yue": return "← 返回博客";
      default: return "← 返回 Newsflow";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              📋 {currentLang === "en" ? "Contents" : "目錄導覽"}
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
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30"
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
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-white transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
          >
            {getBackText()}
          </Link>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
        </div>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-zinc-500">May 2026 · {currentLang === "en" ? "Author: Pure Traveler" : currentLang === "zh-CN" ? "作者：纯粹旅人" : currentLang === "yue" ? "作者：純粹旅人" : "作者：純粹旅人"}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
            alt={content.meta.title}
            className="w-full h-96 object-cover"
          />
        </div>
        <p className="text-center text-zinc-500 text-sm mb-12">
          {content.meta.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            {content.sections.intro[0]}
          </p>
          <p>
            {content.sections.intro[1]}
          </p>

          <h2 id="photo-spots">{content.sections.photoSpots.title}</h2>

          {content.sections.photoSpots.spots.map((spot, index) => (
            <div key={index}>
              <h3>{index + 1}. {spot.name} —— {spot.title}</h3>
              <p>{spot.content}</p>
            </div>
          ))}

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=80"
              alt="Paris night view"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ {currentLang === "en" ? "Panoramic view of Paris at night with twinkling city lights" : "俯瞰夜幕下的巴黎市區，萬家燈火與埃菲爾鐵塔的璀璨燈光交相輝映"}
            </p>
          </div>

          <div id="sparkle" className="bg-gradient-to-br from-amber-900/30 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {content.sections.sparkle.title}
            </h4>
            <p className="text-zinc-300">
              {content.sections.sparkle.content}
            </p>
          </div>

          <h2 id="climb">{content.sections.climb.title}</h2>
          <p>
            {content.sections.climb.content}
          </p>

          <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/30 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 {currentLang === "en" ? "Travel Tips" : currentLang === "zh-CN" ? "旅游实用小贴士" : currentLang === "yue" ? "旅遊實用小貼士" : "艾菲爾鐵塔 旅遊實用小貼士"}
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>{currentLang === "en" ? "Book in advance:" : currentLang === "zh-CN" ? "提前订票：" : "絕對要提早訂票："}</strong>{content.sections.tips[0]}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🌅</span>
                <span><strong>{currentLang === "en" ? "Best time:" : currentLang === "zh-CN" ? "最佳造访时间：" : "最佳造訪時間："}</strong>{content.sections.tips[1]}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">🚇</span>
                <span><strong>{currentLang === "en" ? "Transportation:" : currentLang === "zh-CN" ? "交通方式：" : "交通方式："}</strong>{content.sections.tips[2]}</span>
              </li>
            </ul>
          </div>

          <h2>📊 {currentLang === "en" ? "Attraction Information" : "景點資訊一覽"}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">📍 {currentLang === "en" ? "Address" : "地址"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.address}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">🕐 {currentLang === "en" ? "Hours" : "開放時間"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.hours}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">💰 {currentLang === "en" ? "Fee" : "費用"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.fee}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">⭐ {currentLang === "en" ? "Rating" : "評分"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.rating}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">🚇 {currentLang === "en" ? "Transport" : "交通"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.transport}</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-amber-400 font-bold">⏱️ {currentLang === "en" ? "Duration" : "建議遊覽"}</span>
              <p className="text-zinc-300 text-sm mt-1">{content.info.duration}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="eiffel-tower" />
    </div>
  );
}
