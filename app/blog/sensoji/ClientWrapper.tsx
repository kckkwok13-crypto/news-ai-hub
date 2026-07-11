"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import YouTubeEmbed from "../../components/YouTubeEmbed";

// Multi-language content
const sensojiContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    route: {
      title: string;
      kaminarimon: { title: string; content: string };
      nakamise: { title: string; content: string };
      hondo: { title: string; content: string };
    };
    fortune: { title: string; steps: string[] };
    photo: { title: string; content: string };
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
      region: "🏮 東京寺廟",
      title: "東京最古老寺廟：淺草寺（Sensō-ji）",
      subtitle: "深度一日遊全攻略",
      heroCaption: "▲ 淺草寺宏偉的寶藏門，展現江戶時代的莊嚴風貌",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "kaminarimon", title: "雷門", emoji: "🏮" },
      { id: "nakamise", title: "仲見世通", emoji: "🍡" },
      { id: "hondo", title: "本堂", emoji: "⛩️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想在現代化的東京尋找一抹傳統的江戶風情，淺草寺（Sensō-ji）絕對是不可錯過的第一站。創建於公元628年的淺草寺，是東京都內最古老的寺廟。這裡常年香火鼎盛，無論是莊嚴的佛教建築，還是充滿下町活力的商店街，都讓人彷彿穿越時空，回到了數百年前的江戶時代。",
        "今天這篇Blog就為大家整理了淺草寺的經典必看亮點、傳統參拜與求籤流程，帶你玩轉這個東京最經典的地標！"
      ],
      route: {
        title: "🗺️ 淺草寺經典散策路線：從雷門走到本堂",
        kaminarimon: {
          title: "第一站：震撼力十足的「雷門」與巨大燈籠",
          content: "淺草寺的正門就是大名鼎鼎的「雷門」（正式名稱為風雷神門）。門的右側供奉著風神，左側則是雷神。而正中央懸掛著那個重達700公斤的巨大紅燈籠，是由松下電器（Panasonic）創辦人松下幸之助在病癒後奉納的。拍照小貼士：走到燈籠正下方抬頭看，底部雕刻了一條栩栩如生的飛龍，非常精緻！"
        },
        nakamise: {
          title: "第二站：好吃好逛的「仲見世通」商店街",
          content: "穿過雷門，迎接你的是一條長約250米的「仲見世通」。這是日本最古老的商店街之一，兩旁開滿了售賣傳統手工藝品、紀念品以及各式江戶小食的店舖。在這裡，你可以品嚐到現烤的人形燒、香脆的仙貝以及色彩繽紛的吉備糰子。"
        },
        hondo: {
          title: "第三站：本堂參拜與常香爐的神秘力量",
          content: "穿過第二道大門「寶藏門」後，就會看到供奉本尊聖觀音菩薩的「本堂」（大殿）。在進入本堂前，你會經過一個煙霧繚繞的常香爐。日本信眾相信，將香爐排出的煙霧撥到自己身上，能夠驅除百病、帶來智慧與健康。來到這裡記得學著當地人，把福氣「撥」向自己喔！"
        }
      },
      fortune: {
        title: "🔮 實用教學：淺草寺「觀音靈籤」求籤步驟",
        steps: [
          "在心裡默默向觀音菩薩許願、詢問你想請教的事情。",
          "投入100日圓硬幣到油錢箱。",
          "拿起木製籤筒，誠心搖晃直到其中一根籤「御籤」從小孔掉出。",
          "看清籤上的數字，到對應的小木櫃抽屜中拿取你的籤詩。",
          "如果是吉：把喜悅帶回家；如果是凶：別擔心！將籤詩摺好，綁在寺廟專用的鐵架上，代表將厄運留在寺廟，由神明為你化解。"
        ]
      },
      photo: {
        title: "🗼 隱藏加碼：新舊交織的絕佳拍照位",
        content: "在淺草寺境內，你可以拍到一個非常奇妙的畫面——古色古香的五重塔與現代科技感十足的東京晴空塔（Tokyo Skytree）同框！這種歷史與現代在空中交匯的強烈對比，是淺草獨有的浪漫景致，千萬不要錯過這個構圖。"
      },
      tips: [
        "開放時間：淺草寺境內是24小時免費開放的。不過本堂的開門時間為每日早上6:00（10月至3月為6:30）至傍晚17:00。",
        "強烈推薦夜遊：每天日落後至晚上23:00，雷門、寶藏門，五重塔和本堂都會亮起金黃色的燈光。此時遊客散去，散步起來非常舒服，拍起照來更有一種神祕而莊嚴的美感！",
        "交通方式：搭乘東京地下鐵銀座線、都營淺草線或東武晴空塔線至「淺草站」，步行約5分鐘即可抵達雷門。"
      ]
    },
    info: {
      address: "2-3-1 Asakusa, Taito City, Tokyo",
      hours: "境內24小時 / 本堂 6:00-17:00",
      fee: "免費",
      rating: "4.6/5.0（89,432 評論）",
      transport: "東京Metro 淺草站 步行5分鐘",
      duration: "1-2小時"
    }
  },
  "zh-CN": {
    meta: {
      region: "🏮 东京寺庙",
      title: "东京最古老寺庙：浅草寺（Sensō-ji）",
      subtitle: "深度一日游全攻略",
      heroCaption: "▲ 浅草寺宏伟的宝藏门，展现江户时代的庄严风貌",
    },
    toc: [
      { id: "intro", title: "介绍", emoji: "📖" },
      { id: "kaminarimon", title: "雷门", emoji: "🏮" },
      { id: "nakamise", title: "仲见世通", emoji: "🍡" },
      { id: "hondo", title: "本堂", emoji: "⛩️" },
      { id: "tips", title: "实用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想在现代化的东京寻找一抹传统的江户风情，浅草寺（Sensō-ji）绝对是不可错过的第一站。创建于公元628年的浅草寺，是东京都内最古老的寺庙。这里常年香火鼎盛，无论是庄严的佛教建筑，还是充满下町活力的商店街，都让人仿佛穿越时空，回到了数百年前的江户时代。",
        "今天这篇Blog就为大家整理了浅草寺的经典必看亮点、传统参拜与求签流程，带你玩转这个东京最经典的地标！"
      ],
      route: {
        title: "🗺️ 浅草寺经典散步路线：从雷门走到本堂",
        kaminarimon: {
          title: "第一站：震撼力十足的「雷门」与巨大灯笼",
          content: "浅草寺的正门就是大名鼎鼎的「雷门」（正式名称为风雷神门）。门的右侧供奉着风神，左侧则是雷神。而正中央悬挂着那个重达700公斤的巨大红灯笼，是由松下电器（Panasonic）创始人松下幸之助在病愈后奉纳的。拍照小贴士：走到灯笼正下方抬头看，底部雕刻了一条栩栩如生的飞龙，非常精致！"
        },
        nakamise: {
          title: "第二站：好吃好逛的「仲见世通」商店街",
          content: "穿过雷门，迎接你的是一条长约250米的「仲见世通」。这是日本最古老的商店街之一，两旁开满了售卖传统手工艺品、纪念品以及各式江户小食的店铺。在这里，你可以品尝到现烤的人形烧、香脆的仙贝以及色彩缤纷的吉备团子。"
        },
        hondo: {
          title: "第三站：本堂参拜与常香炉的神秘力量",
          content: "穿过第二道大门「宝藏门」后，就会看到供奉本尊圣观音菩萨的「本堂」（大殿）。在进入本堂前，你会经过一个烟雾缭绕的常香炉。日本信众相信，将香炉排出的烟雾拨到自己身上，能够驱除百病、带来智慧与健康。来到这里记得学着当地人，把福气「拨」向自己喔！"
        }
      },
      fortune: {
        title: "🔮 实用教学：浅草寺「观音灵签」求签步骤",
        steps: [
          "在心里默默向观音菩萨许愿、询问你想请教的事情。",
          "投入100日圆硬币到油钱箱。",
          "拿起木制签筒，诚心摇晃直到其中一根签「御签」从小孔掉出。",
          "看清签上的数字，到对应的小木柜抽屉中拿取你的签诗。",
          "如果是吉：把喜悦带回家；如果是凶：别担心！将签诗折好，绑在寺庙专用的铁架上，代表将厄运留在寺庙，由神明为你化解。"
        ]
      },
      photo: {
        title: "🗼 隐藏加码：新旧交织的绝佳拍照位",
        content: "在浅草寺境内，你可以拍到一个非常奇妙的画面——古色古香的五重塔与现代科技感十足的东京晴空塔（Tokyo Skytree）同框！这种历史与现代在空中交汇的强烈对比，是浅草独有的浪漫景致，千万不要错过这个构图。"
      },
      tips: [
        "开放时间：浅草寺境内是24小时免费开放的。不过本堂的开门时间为每日早上6:00（10月至3月为6:30）至傍晚17:00。",
        "强烈推荐夜游：每天日落后至晚上23:00，雷门、宝藏门，五重塔和本堂都会亮起金黄色的灯光。此时游客散去，散步起来非常舒服，拍起照来更有一种神秘而庄严的美感！",
        "交通方式：搭乘东京地下铁银座线、都营浅草线或东武晴空塔线至「浅草站」，步行约5分钟即可抵达雷门。"
      ]
    },
    info: {
      address: "2-3-1 Asakusa, Taito City, Tokyo",
      hours: "境内24小时 / 本堂 6:00-17:00",
      fee: "免费",
      rating: "4.6/5.0（89,432 评论）",
      transport: "东京Metro 浅草站 步行5分钟",
      duration: "1-2小时"
    }
  },
  en: {
    meta: {
      region: "🏮 Tokyo Temple",
      title: "Tokyo's Oldest Temple: Senso-ji",
      subtitle: "Complete One-Day Guide",
      heroCaption: "▲ The magnificent Kaminarimon Gate of Senso-ji, showcasing the grandeur of the Edo period",
    },
    toc: [
      { id: "intro", title: "Introduction", emoji: "📖" },
      { id: "kaminarimon", title: "Kaminarimon", emoji: "🏮" },
      { id: "nakamise", title: "Nakamise", emoji: "🍡" },
      { id: "hondo", title: "Main Hall", emoji: "⛩️" },
      { id: "tips", title: "Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "If you want to find a touch of traditional Edo charm in modern Tokyo, Senso-ji is absolutely the first stop you shouldn't miss. Founded in 628 AD, Senso-ji is the oldest temple in Tokyo. Always bustling with worshippers, whether it's the solemn Buddhist architecture or the lively shopping street full of Shitamachi energy, it makes you feel like you've traveled back in time to the Edo period hundreds of years ago.",
        "Today, this blog will give you a complete guide on Senso-ji's must-see highlights, traditional worship procedures, and fortune-telling steps — let's explore Tokyo's most iconic landmark together!"
      ],
      route: {
        title: "🗺️ Classic Walking Route: From Kaminarimon to the Main Hall",
        kaminarimon: {
          title: "Stop 1: The Stunning 'Kaminarimon' Gate and Giant Lantern",
          content: "The main entrance to Senso-ji is the famous Kaminarimon (Thunder Gate). The right side houses the Wind God, and the left side houses the Thunder God. In the center hangs the massive red lantern weighing 700 kg, dedicated by Konosuke Matsushita, founder of Panasonic, after recovering from illness. Photography tip: Stand directly under the lantern and look up — there's a lifelike flying dragon carved at the bottom, incredibly intricate!"
        },
        nakamise: {
          title: "Stop 2: The Delicious Nakamise Shopping Street",
          content: "Passing through Kaminarimon, you'll be greeted by Nakamise Street, stretching about 250 meters. This is one of Japan's oldest shopping streets, lined with shops selling traditional handicrafts, souvenirs, and various Edo-era snacks. Here you can taste freshly baked Ningyo-yaki, crispy Senbei, and colorful Kibi-dango."
        },
        hondo: {
          title: "Stop 3: Main Hall Worship and the Mystical Power of the incense Burner",
          content: "After passing through the second gate, the Hozomon (Treasure Gate), you'll see the Main Hall ( Hondō ) where the main deity, Saint Kannon Bodhisattva, is enshrined. Before entering the Main Hall, you'll pass by a perpetually smoke-filled incense burner. Japanese worshippers believe that waving the incense smoke toward yourself can ward off illness and bring wisdom and health. Remember to follow the locals and 'wave' the fortune onto yourself!"
        }
      },
      fortune: {
        title: "🔮 How to Get a Fortune: Senso-ji Omikuji Steps",
        steps: [
          "Silently make a wish and ask the Kannon Bodhisattva your question in your heart.",
          "Drop a 100 yen coin into the offering box.",
          "Pick up the wooden shake box and gently shake until one '御籤' (fortune stick) falls out from the hole.",
          "Note the number on the stick and retrieve your fortune slip from the corresponding drawer.",
          "If it's good luck: take the joy home. If it's bad luck: don't worry! Fold the slip and tie it to the temple's designated metal rack, signifying you leave the misfortune at the temple for the gods to resolve."
        ]
      },
      photo: {
        title: "🗼 Hidden Bonus: Perfect Photo Spot Blending Old and New",
        content: "Within Senso-ji's grounds, you can capture an incredibly magical scene — the ancient Five-Story Pagoda alongside the ultra-modern Tokyo Skytree! This striking contrast where history and modernity meet in the sky is unique to Asakusa. Don't miss this composition!"
      },
      tips: [
        "Opening hours: The Senso-ji grounds are open 24/7 for free. However, the Main Hall opens daily from 6:00 AM (6:30 AM from October to March) to 5:00 PM.",
        "Highly recommend night visit: From sunset until 11 PM, Kaminarimon, Hozomon, the Five-Story Pagoda, and the Main Hall are all illuminated with golden lights. At this time, tourists have dispersed, making it perfect for a peaceful stroll and capturing mysterious, solemn photos!",
        "Transportation: Take the Tokyo Metro Ginza Line, Toei Asakusa Line, or Tobu Skytree Line to 'Asakusa Station,' about 5 minutes' walk to Kaminarimon."
      ]
    },
    info: {
      address: "2-3-1 Asakusa, Taito City, Tokyo",
      hours: "Grounds: 24/7 / Main Hall: 6:00-17:00",
      fee: "Free",
      rating: "4.6/5.0 (89,432 reviews)",
      transport: "Tokyo Metro Asakusa Stn, 5min walk",
      duration: "1-2 hours"
    }
  },
  yue: {
    meta: {
      region: "🏮 東京寺廟",
      title: "東京最古老寺廟：淺草寺（Sensō-ji）",
      subtitle: "深度一日遊全攻略",
      heroCaption: "▲ 淺草寺宏偉嘅寶藏門，展現江戶時代嘅莊嚴風貌",
    },
    toc: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "kaminarimon", title: "雷門", emoji: "🏮" },
      { id: "nakamise", title: "仲見世通", emoji: "🍡" },
      { id: "hondo", title: "本堂", emoji: "⛩️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    sections: {
      intro: [
        "如果想在現代化嘅東京搵一抹傳統嘅江戶風情，淺草寺（Sensō-ji）絕對係唔可以錯過嘅第一站。創建於公元628年嘅淺草寺，係東京都內最古老嘅寺廟。呢度常年香火鼎盛，無論係莊嚴嘅佛教建築，定係充滿下町活力嘅商店街，都令人彷彿穿越時空，回到咗數百年前嘅江戶時代。",
        "今日呢篇Blog就為大家整理咗淺草寺嘅經典必看亮點、傳統參拜與求籤流程，帶你玩轉呢個東京最經典嘅地標！"
      ],
      route: {
        title: "🗺️ 淺草寺經典散策路線：從雷門走到本堂",
        kaminarimon: {
          title: "第一站：震撼力十足嘅「雷門」與巨大燈籠",
          content: "淺草寺嘅正門就係大名鼎鼎嘅「雷門」（正式名稱為風雷神門）。門嘅右側供奉著風神，左側就係雷神。而正中央懸掛住嗰個重達700公斤嘅巨大紅燈籠，係由松下電器（Panasonic）創辦人松下幸之助喺病癒後奉納嘅。影相小貼士：走到燈籠正下方抬頭睇，底部雕刻咗一條栩栩如生嘅飛龍，非常精緻！"
        },
        nakamise: {
          title: "第二站：好食好逛嘅「仲見世通」商店街",
          content: "穿過雷門，迎接你嘅係一條長約250米嘅「仲見世通」。呢係日本最古老嘅商店街之一，兩旁開滿咗售賣傳統手工藝品、紀念品以及各式江戶小食嘅店舖。喺呢度，你可以品嚐到現烤嘅人形燒、香脆嘅仙貝以及色彩繽紛嘅吉備糰子。"
        },
        hondo: {
          title: "第三站：本堂參拜與常香爐嘅神秘力量",
          content: "穿過第二道大門「寶藏門」後，就會見到供奉本尊聖觀音菩薩嘅「本堂」（大殿）。喺進入本堂前，你會經過一個煙霧繚繞嘅常香爐。日本信眾相信，將香爐排出嘅煙霧撥到自己身上，能夠驅除百病、帶來智慧與健康。來到呢度記得學著當地人，把福氣「撥」向自己喔！"
        }
      },
      fortune: {
        title: "🔮 實用教學：淺草寺「觀音靈籤」求籤步驟",
        steps: [
          "喺心裡默默向觀音菩薩許願、詢問你想請教嘅事情。",
          "投入100日圓硬幣到油錢箱。",
          "拿起木製籤筒，誠心搖晃直到其中一根籤「御籤」從小孔掉出。",
          "睇清籤上嘅數字，到對應嘅小木櫃抽屜中拿取你嘅籤詩。",
          "如果係吉：把喜悅帶回家；如果係凶：唔好擔心！將籤詩摺好，綁喺寺廟專用嘅鐵架上，代表將厄運留在寺廟，由神明為你化解。"
        ]
      },
      photo: {
        title: "🗼 隱藏加碼：新舊交織嘅絕佳拍攝位",
        content: "喺淺草寺境內，你可以影到一個非常奇妙嘅畫面——古色古香嘅五重塔與現代科技感十足嘅東京晴空塔（Tokyo Skytree）同框！呢種歷史與現代喺空中交匯嘅強烈對比，係淺草獨有嘅浪漫景致，千祈唔好錯過呢個構圖。"
      },
      tips: [
        "開放時間：淺草寺境內係24小時免費開放嘅。不過本堂嘅開門時間為每日早上6:00（10月至3月為6:30）至傍晚17:00。",
        "強烈推薦夜遊：每日日落後至晚上23:00，雷門、寶藏門，五重塔和本堂都會亮起金黃色嘅燈光。呢個時候遊客散去，散步起來非常舒服，拍起照來更有一種神祕而莊嚴嘅美感！",
        "交通方式：搭乘東京地下鐵銀座線、都營淺草線或東武晴空塔線至「淺草站」，步行約5分鐘即可抵達雷門。"
      ]
    },
    info: {
      address: "2-3-1 Asakusa, Taito City, Tokyo",
      hours: "境內24小時 / 本堂 6:00-17:00",
      fee: "免費",
      rating: "4.6/5.0（89,432 評論）",
      transport: "東京Metro 淺草站 步行5分鐘",
      duration: "1-2小時"
    }
  }
};

export default function SensojiPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");

  const content = sensojiContent[currentLang];
  const lastUpdated = "2026-07-11";
  const tocItems = content.toc;

  useEffect(() => {
    const saved = localStorage.getItem("travel_language") as TravelLanguage;
    if (saved && sensojiContent[saved]) {
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
      default: return "← 返回 Blog";
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#2c3e50]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#b8975a]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#b8975a]/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[#b8975a] flex items-center gap-2">
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
                      ? "bg-gradient-to-r from-[#b8975a] to-[#d4a574] text-white shadow-lg shadow-[#b8975a]/30"
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
            className="inline-flex items-center gap-2 text-[#b8975a] hover:text-[#1a2a3a] transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#b8975a]/20"
          >
            {getBackText()}
          </Link>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
        </div>

        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b8975a] to-[#d4a574] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#b8975a]/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-[#b8975a] font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-[#94a3b8]">May 2026 · Last Updated: 2026-07-11 · {currentLang === "en" ? "Author: Pure Traveler" : currentLang === "zh-CN" ? "作者：纯粹旅人" : currentLang === "yue" ? "作者：純粹旅人" : "作者：純粹旅人"}</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#b8975a]/20">
          <img
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80"
            alt={content.meta.title}
            className="w-full"
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

          <YouTubeEmbed videoId="rseB7XMoFRs" title="淺草寺雷門與仲見世通" />

          <h2 id="kaminarimon" className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">
            {content.sections.route.title}
          </h2>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.route.kaminarimon.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.route.kaminarimon.content}
          </p>

          <h3 id="nakamise" className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.route.nakamise.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.route.nakamise.content}
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1628523197648-74f46812c7d7?w=1200&q=80"
              alt="Nakamise Street"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ {currentLang === "en" ? "The bustling Nakamise shopping street lined with shops" : "仲見世通兩旁店鋪林立、人山人海的熱鬧景象"}
            </p>
          </div>

          <h3 id="hondo" className="text-[#2c3e50] text-xl font-semibold mt-8">{content.sections.route.hondo.title}</h3>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.route.hondo.content}
          </p>

          <div className="bg-[#f4f6f9] border-l-4 border-[#1a2a3a] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#b8975a] font-bold mb-3 text-xl">{content.sections.fortune.title}</h4>
            <ol className="list-decimal list-inside space-y-2 text-[#2c3e50]">
              {content.sections.fortune.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">{content.sections.photo.title}</h2>
          <p className="text-[#2c3e50] text-justify">
            {content.sections.photo.content}
          </p>

          <div className="bg-[#1a2a3a] text-[#f8fafc] p-6 my-10 rounded-xl" id="tips">
            <h3 className="text-[#b8975a] font-bold mb-4 text-xl">
              💡 {currentLang === "en" ? "Travel Tips" : currentLang === "zh-CN" ? "旅游实用小贴士" : currentLang === "yue" ? "旅遊實用小貼士" : "淺草寺 旅遊實用小貼士"}
            </h3>
            <ul className="space-y-3 text-[#f8fafc]">
              <li><strong>{currentLang === "en" ? "Hours:" : "開放時間："}</strong>{content.sections.tips[0]}</li>
              <li><strong>{currentLang === "en" ? "Night visit:" : "強烈推薦夜遊："}</strong>{content.sections.tips[1]}</li>
              <li><strong>{currentLang === "en" ? "Transportation:" : "交通方式："}</strong>{content.sections.tips[2]}</li>
            </ul>
          </div>

          <YouTubeEmbed videoId="8j-nmwy0RN4" title="淺草寺夜景風光" />

          <h2 className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">
            📊 {currentLang === "en" ? "Attraction Information" : "景點資訊一覽"}
          </h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">📍 {currentLang === "en" ? "Address" : "地址"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.address}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">🕐 {currentLang === "en" ? "Hours" : "開放時間"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.hours}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">💰 {currentLang === "en" ? "Fee" : "費用"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.fee}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">⭐ {currentLang === "en" ? "Rating" : "評分"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.rating}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">🚇 {currentLang === "en" ? "Transport" : "交通"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.transport}</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">⏱️ {currentLang === "en" ? "Duration" : "建議遊覽"}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{content.info.duration}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="sensoji" />
    </div>
  );
}
