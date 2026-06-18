"use client";

import Comments from "@/components/Comments";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { TravelLanguage } from "@/data/travelTranslations";

// Multi-language content
const shenzhenContent: Record<TravelLanguage, {
  meta: {
    region: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
  toc: Array<{ id: string; title: string; emoji: string }>;
  sections: {
    intro: string[];
    transport: {
      title: string;
      content: string;
      metro: string;
    };
    hotel: {
      title: string;
      content: string;
    };
    dongmen: {
      title: string;
      content: string;
      tips: string[];
    };
    huaqiangbei: {
      title: string;
      content: string;
      spots: Array<{ name: string; content: string }>;
    };
    food: {
      title: string;
      content: string;
      day1lunch: { title: string; name: string; price: string; desc: string };
      day1dinner: { title: string; name: string; price: string; desc: string };
      day2lunch: { title: string; items: Array<{ name: string; desc: string }> };
    };
    bay: {
      title: string;
      content: string;
      tips: string[];
    };
    nightlife: {
      title: string;
      content: string;
      haian: { title: string; items: string[] };
      nightmarket: { title: string; items: string[] };
    };
    tips: {
      apps: string[];
      customs: string[];
      budget: Array<{ name: string; amount: string }>;
    };
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
      region: "🌴 大灣區退休遊記",
      title: "深圳2天慢活遊",
      subtitle: "東門老街懷舊 · 華強北科技尋寶 · 深圳灣日落",
      heroCaption: "▲ 深圳灣畔的璀璨夜色，對岸就是香港天水圍，兩地只係一橋之隔",
    },
    toc: [
      { id: "intro", title: "出發", emoji: "✈️" },
      { id: "transport", title: "交通", emoji: "🚄" },
      { id: "hotel", title: "住宿", emoji: "🏨" },
      { id: "dongmen", title: "東門老街", emoji: "🏪" },
      { id: "huaqiangbei", title: "華強北", emoji: "🔌" },
      { id: "food", title: "美食", emoji: "🍜" },
      { id: "bay", title: "深圳灣", emoji: "🌅" },
      { id: "nightlife", title: "夜生活", emoji: "🌃" },
      { id: "tips", title: "實用Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "退休後，我最鍾意就係揹住相機周圍走。今次試下用兩日時間，慢遊我地熟悉又陌生嘅深圳。羅湖過關，30分鐘就到，完全係「話走就走」嘅節奏。",
        "話說深圳呢個地方，對我哋香港人來說又近又遠。近，係因為只係一關之隔；遠，係因為好多人都只係去東門、華強北，未真正體驗過佢嘅魅力。今次，我就帶你用另一個角度睇深圳——慢活、深度、美食與日落。"
      ],
      transport: {
        title: "🚄 由香港去深圳，你要知嘅嘢",
        content: "兩種方法入深圳",
        metro: "東鐵直達（最方便）：羅湖口岸或落馬洲 → 深圳站（羅湖）。車程約45分鐘，車費約HK$35（使用八達通），適合想直接去東門、羅湖區域。",
        hsr: "高鐵（最快速）：香港西九龍 → 深圳北站。車程約14分鐘，車費約HK$75（需提前購票），適合趕時間、想去南山區。"
      },
      hotel: {
        title: "🏨 住宿推薦：邊度瞓邊度玩？",
        content: "推薦兩間適合退休人士嘅酒店：一係深圳瑞吉酒店，四星，約RMB 600/晚，近地鐵大劇院站，景觀絕佳可以睇到成個深圳天際線；二係深圳華僑城洲際大酒店，五星，約RMB 900/晚，南山區歡樂谷旁，有園林景觀，適合想慢慢歎。"
      },
      dongmen: {
        title: "🏪 東門老街：時光倒流30年",
        content: "一踏出羅湖地鐵站，我就坐地鐵去東門站。東門老街，係深圳最老牌嘅商業區，保存住好多80年代嘅痕跡。行行下，我突然有種時光倒流嘅感覺——舊式招牌、懷舊茶餐廳、仲有嗰種人山人海嘅旺氣。",
        tips: [
          "東門批發市場：呢度係淘寶貨源大本營，平靓正嘅衣服、飾品、精品應有盡有。",
          "記得講價：呢度仲係可以講價嘅！試下對半劈，通常都有驚喜。",
          "老式茶餐廳：一定要試下嗰度嘅港式奶茶同菠蘿油，舊香港嘅味道。",
          "打卡位：東門天桥係影靚相嘅最佳位置，可以影到成條街嘅霓虹夜景。"
        ]
      },
      huaqiangbei: {
        title: "🔌 華強北：亞洲科技心臟",
        content: "下午，我轉戰華強北。呢度係亞洲最大嘅電子產品批發市場，就算你唔係嚟買野，都一定要嚟開開眼界！最新款嘅手機殼、無線耳機、機械人、無人機、智能家居產品......全部都係最新科技，而且價錢比香港平30-50%。",
        spots: [
          { name: "📱 手機配件", content: "最新款式手機殼、耳機、充電線，價錢平到笑" },
          { name: "🤖 智能產品", content: "機械人、無人機、智能家居，全部係最新型號" },
          { name: "💻 電腦零件", content: "SSD、記憶卡、鍵盤滑鼠，砌機發燒友天堂" },
          { name: "🎁 科技禮品", content: "送禮自用兩相宜，價錢抵到爛" }
        ]
      },
      food: {
        title: "🍜 美食推介：食在深圳",
        content: "退休人士最關心嘅，除咗玩，就係食！深圳嘅美食性價比真係超高，以下係我今次試過覺得唔錯嘅地方：",
        day1lunch: { title: "Day 1 午餐：東門老街", name: "肥妹燒鵝店", price: "人均約RMB 60", desc: "必點：燒鵝瀨粉、叉燒飯，環境懷舊，性價比超高！" },
        day1dinner: { title: "Day 1 晚餐：海岸城", name: "悅海酒樓", price: "人均約RMB 150", desc: "必點：白切雞、蝦餃、鳳爪、正宗粵菜味道。環境舒適，適合慢慢歎！" },
        day2lunch: { title: "Day 2 午餐：華強北", items: [
          { name: "湘菜小館", desc: "正宗湖南味，酸辣過癮！人均約RMB 50" },
          { name: "港式茶餐廳", desc: "凍奶茶、菠蘿油，懷舊味道！人均約RMB 40" }
        ]}
      },
      bay: {
        title: "🌅 深圳灣：日落係為我而寫",
        content: "傍晚五點，我特意搭地鐵去深圳灣公園，趕上日落時分。呢個13公里長嘅海濱長廊，係我今次旅程嘅最大驚喜。我漫步喺海濱長廊，看住太陽慢慢降落。天色由橙轉紅，再由紅變紫，最後變成深藍色。對岸就係香港嘅天水圍、元朗，兩地只係一橋之隔，但風景就完全唔同。",
        tips: [
          "最佳時間：下午5:30-7:00係日落黃金時段",
          "最佳位置：海風廣場日落觀景台，可以影到成個深圳灣大橋",
          "幸運的話：有機會見到黑臉琵鷺！佢哋係冬候鳥，通常10月-3月最多",
          "租單車：可以喺園內租借單車，踩住單車睇日落，特別浪漫"
        ]
      },
      nightlife: {
        title: "🌃 深圳夜生活：越夜越精彩",
        content: "深圳嘅夜生活比香港更精彩，而且消費平一大截！",
        haian: { title: "🍺 海岸城商圈", items: [
          "大型商場雲集，國際品牌應有盡有",
          "酒吧街有多間精釀啤酒酒吧，外國風情浓厚",
          "KTV價錢比香港平一半！兩個人唱三個鐘都係RMB 150有找"
        ]},
        nightmarket: { title: "🍢 華強北夜市", items: [
          "華強北步行街，晚上8點後就開始熱鬧",
          "街頭小食推介：燒烤、串燒、煎餅果子、臭豆腐",
          "全部RMB 10有找，抵到爛！"
        ]}
      },
      tips: {
        apps: [
          "滴滴出行 - 叫車必備，價錢透明，司機服務態度好",
          "支付寶/微信支付 - 深圳大部分地方不接受現金，必需！",
          "百度地圖 - 比Google Maps準確，超好用！"
        ],
        customs: [
          "身份證+回鄉證/護照必備",
          "羅湖關口開放時間：06:30-00:00",
          "建議開通漫遊或購買內地電話卡",
          "週末羅湖關口人流較多，建議早上8點前過關"
        ],
        budget: [
          { name: "交通費（來回）", amount: "約 HK$70" },
          { name: "酒店（1晚）", amount: "約 HK$350-700" },
          { name: "餐飲（2日）", amount: "約 HK$200-300" },
          { name: "購物/特產", amount: "約 HK$100-200" }
        ]
      }
    },
    info: {
      address: "深圳市羅湖區/南山區",
      hours: "24小時",
      fee: "免費（部分景點除外）",
      rating: "4.5/5.0",
      transport: "羅湖/福田口岸 / 高鐵",
      duration: "2天1夜"
    }
  },
  "zh-CN": {
    meta: {
      region: "🌴 大湾区退休游记",
      title: "深圳2天慢活游",
      subtitle: "东门老街怀旧 · 华强北科技寻宝 · 深圳湾日落",
      heroCaption: "▲ 深圳湾畔的璀璨夜色，对岸就是香港天水围，两地只是一桥之隔",
    },
    toc: [
      { id: "intro", title: "出发", emoji: "✈️" },
      { id: "transport", title: "交通", emoji: "🚄" },
      { id: "hotel", title: "住宿", emoji: "🏨" },
      { id: "dongmen", title: "东门老街", emoji: "🏪" },
      { id: "huaqiangbei", title: "华强北", emoji: "🔌" },
      { id: "food", title: "美食", emoji: "🍜" },
      { id: "bay", title: "深圳湾", emoji: "🌅" },
      { id: "nightlife", title: "夜生活", emoji: "🌃" },
      { id: "tips", title: "实用Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "退休后，我最喜欢就是背着相机到处走。今次试下用两天时间，慢游我们熟悉又陌生的深圳。罗湖过关，30分钟就到，完全是「说走就走」的节奏。",
        "话说深圳这个地方，对我们香港人来说又近又远。近，是因为只隔一关之遥；远，是因为很多人都只是去东门、华强北，未真正体验过它的魅力。今次，我就带你用另一个角度睇深圳——慢活、深度、美食与日落。"
      ],
      transport: {
        title: "🚄 由香港去深圳，你需要知的",
        content: "两种方法入深圳",
        metro: "东铁直达（最方便）：罗湖口岸或落马洲 → 深圳站（罗湖）。车程约45分钟，车费约HK$35（使用八达通），适合想直接去东门、罗湖区域。",
        hsr: "高铁（最快速）：香港西九龙 → 深圳北站。车程约14分钟，车费约HK$75（需提前购票），适合赶时间、想去南山区。"
      },
      hotel: {
        title: "🏨 住宿推荐：哪里睡哪里玩？",
        content: "推荐两间适合退休人士的酒店：一是深圳瑞吉酒店，四星，约RMB 600/晚，近地铁大剧院站，景观绝佳可以睇到整个深圳天际线；二是深圳华侨城洲际大酒店，五星，约RMB 900/晚，南山区欢乐谷旁，有园林景观，适合想慢慢叹。"
      },
      dongmen: {
        title: "🏪 东门老街：时光倒流30年",
        content: "一踏出罗湖地铁站，我就坐地铁去东门站。东门老街，是深圳最老牌的商业区，保存住好多80年代的痕迹。行行下，我突然有种时光倒流的感觉——旧式招牌、怀旧茶餐厅、仲有那种人山人海的旺气。",
        tips: [
          "东门批发市场：呢度系淘宝货源大本营，平靓正的衣服、饰品、精品应有尽有。",
          "记得讲价：呢度仲系可以讲价嘅！试下对半劈，通常都有惊喜。",
          "老式茶餐厅：一定要试下嗰度的港式奶茶同菠萝油，旧香港的味道。",
          "打卡位：东门天桥系影靓相的最佳位置，可以影到成条街的霓虹夜景。"
        ]
      },
      huaqiangbei: {
        title: "🔌 华强北：亚洲科技心脏",
        content: "下午，我转战华强北。呢度系亚洲最大的电子产品批发市场，就算你唔系来买野，都一定要来开开眼界！最新款的手机壳、无线耳机、机械人、无人机、智能家居产品......全部都系最新科技，而且价钱比香港平30-50%。",
        spots: [
          { name: "📱 手机配件", content: "最新款式手机壳、耳机、充电线，价钱平到笑" },
          { name: "🤖 智能产品", content: "机械人、无人机、智能家居，全部系最新型号" },
          { name: "💻 电脑零件", content: "SSD、记忆卡、键盘鼠标，装机发烧友天堂" },
          { name: "🎁 科技礼品", content: "送礼自用两相宜，价钱抵到烂" }
        ]
      },
      food: {
        title: "🍜 美食推介：食在深圳",
        content: "退休人士最关心嘅，除咗玩，就系食！深圳的美食性价比真系超高，以下系我今次试过觉得唔错的地方：",
        day1lunch: { title: "Day 1 午餐：东门老街", name: "肥妹烧鹅店", price: "人均约RMB 60", desc: "必点：烧鹅濑粉、叉烧饭，环境怀旧，性价比超高！" },
        day1dinner: { title: "Day 1 晚餐：海岸城", name: "悦海酒楼", price: "人均约RMB 150", desc: "必点：白切鸡、虾饺、凤爪、正宗粤菜味道。环境舒适，适合慢慢叹！" },
        day2lunch: { title: "Day 2 午餐：华强北", items: [
          { name: "湘菜小馆", desc: "正宗湖南味，酸辣过瘾！人均约RMB 50" },
          { name: "港式茶餐厅", desc: "冻奶茶、菠萝油，怀旧味道！人均约RMB 40" }
        ]}
      },
      bay: {
        title: "🌅 深圳湾：日落是为我而写",
        content: "傍晚五点，我特意坐地铁去深圳湾公园，赶上日落时分。这个13公里长的海滨长廊，系我今次旅程的最大惊喜。我漫步在海滨长廊，看着太阳慢慢降落。天色由橙转红，再由红变紫，最后变成深蓝色。对岸就系香港的天水围、元朗，两地只是一桥之隔，但风景就完全不同。",
        tips: [
          "最佳时间：下午5:30-7:00系日落黄金时段",
          "最佳位置：海风广场日落观景台，可以影到整个深圳湾大桥",
          "幸运的话：有机会见到黑脸琵琶鹭！它们系冬候鸟，通常10月-3月最多",
          "租单车：可以在园内租借单车，踩住单车睇日落，特别浪漫"
        ]
      },
      nightlife: {
        title: "🌃 深圳夜生活：越夜越精彩",
        content: "深圳的夜生活比香港更精彩，而且消费平一大截！",
        haian: { title: "🍺 海岸城商圈", items: [
          "大型商场云集，国际品牌应有尽有",
          "酒吧街有多间精酿啤酒酒吧，外国风情浓厚",
          "KTV价钱比香港平一半！两个人唱三个钟都系RMB 150有找"
        ]},
        nightmarket: { title: "🍢 华强北夜市", items: [
          "华强北步行街，晚上8点后就开始热闹",
          "街头小吃推介：烧烤、串烧、煎饼果子、臭豆腐",
          "全部RMB 10有找，抵到烂！"
        ]}
      },
      tips: {
        apps: [
          "滴滴出行 - 叫车必备，价钱透明，司机服务态度好",
          "支付宝/微信支付 - 深圳大部分地方不接受现金，必需！",
          "百度地图 - 比Google Maps准确，超好用！"
        ],
        customs: [
          "身份证+回乡证/护照必备",
          "罗湖关口开放时间：06:30-00:00",
          "建议开通漫游或购买内地电话卡",
          "周末罗湖关口人流较多，建议早上8点前过关"
        ],
        budget: [
          { name: "交通费（来回）", amount: "约 HK$70" },
          { name: "酒店（1晚）", amount: "约 HK$350-700" },
          { name: "餐饮（2日）", amount: "约 HK$200-300" },
          { name: "购物/特产", amount: "约 HK$100-200" }
        ]
      }
    },
    info: {
      address: "深圳市罗湖区/南山区",
      hours: "24小时",
      fee: "免费（部分景点除外）",
      rating: "4.5/5.0",
      transport: "罗湖/福田口岸 / 高铁",
      duration: "2天1夜"
    }
  },
  en: {
    meta: {
      region: "🌴 Greater Bay Area Travel",
      title: "Shenzhen 2-Day Slow Travel Guide",
      subtitle: "Dongmen Old Street · Huaqiangbei Tech Treasure · Shenzhen Bay Sunset",
      heroCaption: "▲ The dazzling night view at Shenzhen Bay, with Hong Kong's Tin Shui Wai just across the bridge",
    },
    toc: [
      { id: "intro", title: "Start", emoji: "✈️" },
      { id: "transport", title: "Transport", emoji: "🚄" },
      { id: "hotel", title: "Hotel", emoji: "🏨" },
      { id: "dongmen", title: "Dongmen", emoji: "🏪" },
      { id: "huaqiangbei", title: "Huaqiangbei", emoji: "🔌" },
      { id: "food", title: "Food", emoji: "🍜" },
      { id: "bay", title: "Shenzhen Bay", emoji: "🌅" },
      { id: "nightlife", title: "Nightlife", emoji: "🌃" },
      { id: "tips", title: "Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "After retirement, my favorite activity is carrying my camera everywhere. This time, I decided to spend two days slowly exploring the Shenzhen we're both familiar with yet find somewhat unfamiliar. Crossing via Luohu, it takes just 30 minutes — truly a 'spontaneous trip' kind of convenience.",
        "Shenzhen, for us Hong Kong folks, is both close and far. Close because it's just one border crossing away; far because many only visit Dongmen or Huaqiangbei, never truly experiencing its charm. Today, I'll show you Shenzhen from another angle — slow living, depth, food, and sunsets."
      ],
      transport: {
        title: "🚄 Getting from Hong Kong to Shenzhen",
        content: "Two ways to reach Shenzhen",
        metro: "East Rail (Most Convenient): Lo Wu or Lok Ma Chau Border → Shenzhen Station (Luohu). Journey: ~45 min, Fare: ~HK$35 (with Octopus), Best for: Dongmen, Luohu area.",
        hsr: "High-Speed Rail (Fastest): Hong Kong West Kowloon → Shenzhen North Station. Journey: ~14 min, Fare: ~HK$75 (advance booking required), Best for: Those in a hurry, Nanshan area."
      },
      hotel: {
        title: "🏨 Hotel Recommendations",
        content: "Two recommended hotels for retirees: The St. Regis Shenzhen, 4-star, ~RMB 600/night, near Grand Theater Metro Station, with stunning views of the Shenzhen skyline; or Shenzhen Intercontinental华侨城洲际大酒店, 5-star, ~RMB 900/night, next to Happy Valley in Nanshan, with beautiful garden views, perfect for a leisurely stay."
      },
      dongmen: {
        title: "🏪 Dongmen Old Street: Time Travel 30 Years Back",
        content: "Stepping out of Luohu Metro, I took the train to Dongmen. Dongmen Old Street is Shenzhen's oldest commercial district, preserving many traces of the 1980s. Walking here, I suddenly felt like I had traveled back in time — old-style signage, nostalgic tea restaurants, and that bustling energy.",
        tips: [
          "Dongmen Wholesale Market: This is the source for Taobao goods — affordable, quality clothing, accessories, and trinkets.",
          "Remember to bargain: You can still haggle here! Try offering half price, often with surprising results.",
          "Old-style tea restaurant: Must-try Hong Kong-style milk tea and pineapple bun — authentic old Hong Kong taste.",
          "Photo spot: The Dongmen overpass is the best location for photos, capturing the neon-lit street at night."
        ]
      },
      huaqiangbei: {
        title: "🔌 Huaqiangbei: Asia's Tech Heart",
        content: "In the afternoon, I headed to Huaqiangbei. This is Asia's largest electronics wholesale market — even if you're not here to shop, you must visit just to see! The latest phone cases, wireless earphones, robots, drones, smart home products... all cutting-edge tech, and 30-50% cheaper than Hong Kong.",
        spots: [
          { name: "📱 Phone Accessories", content: "Latest phone cases, earphones, charging cables — prices will make you laugh" },
          { name: "🤖 Smart Products", content: "Robots, drones, smart home devices — all the latest models" },
          { name: "💻 Computer Parts", content: "SSD, memory cards, keyboards, mice — a paradise for PC builders" },
          { name: "🎁 Tech Gifts", content: "Great for gifts or personal use, unbelievably affordable" }
        ]
      },
      food: {
        title: "🍜 Food Guide: Eating in Shenzhen",
        content: "For retirees, besides playing, food is what we care about most! Shenzhen's food性价比 is truly excellent. Here are some places I tried and recommend:",
        day1lunch: { title: "Day 1 Lunch: Dongmen", name: "Fei Mei Roast Goose Shop", price: "~RMB 60/person", desc: "Must-order: Roast goose rice noodles, char siu rice — nostalgic setting, excellent value!" },
        day1dinner: { title: "Day 1 Dinner: Coastal City", name: "Yuehai Restaurant", price: "~RMB 150/person", desc: "Must-order: White-cut chicken, shrimp dumplings, phoenix claws — authentic Cantonese cuisine. Comfortable atmosphere!" },
        day2lunch: { title: "Day 2 Lunch: Huaqiangbei", items: [
          { name: "Hunan Kitchen", desc: "Authentic Hunan flavors, spicy and exciting! ~RMB 50/person" },
          { name: "Hong Kong-Style Tea Restaurant", desc: "Iced milk tea, pineapple bun, nostalgic taste! ~RMB 40/person" }
        ]}
      },
      bay: {
        title: "🌅 Shenzhen Bay: The Sunset Was Written for Me",
        content: "At 5 PM, I specifically took the metro to Shenzhen Bay Park to catch the sunset. This 13-kilometer waterfront promenade was the biggest surprise of my trip. I strolled along the boardwalk, watching the sun slowly descend. The sky changed from orange to red, then to purple, finally to deep blue. Across the water lies Hong Kong's Tin Shui Wai and Yuen Long — just a bridge apart, yet completely different scenery.",
        tips: [
          "Best time: 5:30-7:00 PM is the golden sunset hour",
          "Best spot: Sea Breeze Plaza sunset viewing platform, capturing the entire Shenzhen Bay Bridge",
          "If lucky: You might spot Black-faced Spoonbills! They're winter migrants, most common October-March",
          "Bike rental: Rent bikes in the park — cycling while watching the sunset is especially romantic"
        ]
      },
      nightlife: {
        title: "🌃 Shenzhen Nightlife: The Later, The Better",
        content: "Shenzhen's nightlife is even more exciting than Hong Kong's, with much cheaper prices!",
        haian: { title: "🍺 Coastal City District", items: [
          "Large shopping malls with international brands",
          "Bar street with many craft beer pubs, strong foreign atmosphere",
          "KTV is half the price of Hong Kong! Singing for 3 hours for 2 people is under RMB 150"
        ]},
        nightmarket: { title: "🍢 Huaqiangbei Night Market", items: [
          "Huaqiangbei Pedestrian Street gets lively after 8 PM",
          "Street food recommendations: BBQ, skewers, Jianbing, stinky tofu",
          "All under RMB 10 — incredibly affordable!"
        ]}
      },
      tips: {
        apps: [
          "DiDi - Essential for taxis, transparent pricing, great driver service",
          "Alipay/WeChat Pay - Most places in Shenzhen don't accept cash — essential!",
          "Baidu Maps - More accurate than Google Maps in China, super useful!"
        ],
        customs: [
          "ID card + Return Home Permit/Passport required",
          "Luohu Border hours: 06:30-00:00",
          "Recommend activating roaming or buying a mainland SIM card",
          "Weekends are busy at Luohu — suggest crossing before 8 AM"
        ],
        budget: [
          { name: "Transport (round trip)", amount: "~HK$70" },
          { name: "Hotel (1 night)", amount: "~HK$350-700" },
          { name: "Food (2 days)", amount: "~HK$200-300" },
          { name: "Shopping/Souvenirs", amount: "~HK$100-200" }
        ]
      }
    },
    info: {
      address: "Shenzhen Luohu/Nanshan District",
      hours: "24 hours",
      fee: "Free (some attractions excluded)",
      rating: "4.5/5.0",
      transport: "Luohu/Futian Border / High-Speed Rail",
      duration: "2 days, 1 night"
    }
  },
  yue: {
    meta: {
      region: "🌴 大灣區退休遊記",
      title: "深圳2天慢活遊",
      subtitle: "東門老街懷舊 · 華強北科技尋寶 · 深圳灣日落",
      heroCaption: "▲ 深圳灣畔的璀璨夜色，對岸就係香港天水圍，兩地只係一橋之隔",
    },
    toc: [
      { id: "intro", title: "出發", emoji: "✈️" },
      { id: "transport", title: "交通", emoji: "🚄" },
      { id: "hotel", title: "住宿", emoji: "🏨" },
      { id: "dongmen", title: "東門老街", emoji: "🏪" },
      { id: "huaqiangbei", title: "華強北", emoji: "🔌" },
      { id: "food", title: "美食", emoji: "🍜" },
      { id: "bay", title: "深圳灣", emoji: "🌅" },
      { id: "nightlife", title: "夜生活", emoji: "🌃" },
      { id: "tips", title: "實用Tips", emoji: "💡" },
    ],
    sections: {
      intro: [
        "退休後，我最鍾意就係揹住相機周圍走。今次試下用兩日時間，慢遊我地熟悉又陌生嘅深圳。羅湖過關，30分鐘就到，完全係「話走就走」嘅節奏。",
        "話說深圳呢個地方，對我哋香港人來說又近又遠。近，係因為只係一關之隔；遠，係因為好多人都只係去東門、華強北，未真正體驗過佢嘅魅力。今次，我就帶你用另一個角度睇深圳——慢活、深度、美食與日落。"
      ],
      transport: {
        title: "🚄 由香港去深圳，你要知嘅嘢",
        content: "兩種方法入深圳",
        metro: "東鐵直達（最方便）：羅湖口岸或落馬洲 → 深圳站（羅湖）。車程約45分鐘，車費約HK$35（使用八達通），適合想直接去東門、羅湖區域。",
        hsr: "高鐵（最快速）：香港西九龍 → 深圳北站。車程約14分鐘，車費約HK$75（需提前購票），適合趕時間、想去南山區。"
      },
      hotel: {
        title: "🏨 住宿推薦：邊度瞓邊度玩？",
        content: "推薦兩間適合退休人士嘅酒店：一係深圳瑞吉酒店，四星，約RMB 600/晚，近地鐵大劇院站，景觀絕佳可以睇到成個深圳天際線；二係深圳華僑城洲際大酒店，五星，約RMB 900/晚，南山區歡樂谷旁，有園林景觀，適合想慢慢歎。"
      },
      dongmen: {
        title: "🏪 東門老街：時光倒流30年",
        content: "一踏出羅湖地鐵站，我就坐地鐵去東門站。東門老街，係深圳最老牌嘅商業區，保存住好多80年代嘅痕跡。行行下，我突然有種時光倒流嘅感覺——舊式招牌、懷舊茶餐廳、仲有嗰種人山人海嘅旺氣。",
        tips: [
          "東門批發市場：呢度係淘寶貨源大本營，平靓正嘅衣服、飾品、精品應有盡有。",
          "記得講價：呢度仲係可以講價嘅！試下對半劈，通常都有驚喜。",
          "老式茶餐廳：一定要試下嗰度嘅港式奶茶同菠蘿油，舊香港嘅味道。",
          "打卡位：東門天桥係影靚相嘅最佳位置，可以影到成條街嘅霓虹夜景。"
        ]
      },
      huaqiangbei: {
        title: "🔌 華強北：亞洲科技心臟",
        content: "下午，我轉戰華強北。呢度係亞洲最大嘅電子產品批發市場，就算你唔係嚟買野，都一定要嚟開開眼界！最新款嘅手機殼、無線耳機、機械人、無人機、智能家居產品......全部都係最新科技，而且價錢比香港平30-50%。",
        spots: [
          { name: "📱 手機配件", content: "最新款式手機殼、耳機、充電線，價錢平到笑" },
          { name: "🤖 智能產品", content: "機械人、無人機、智能家居，全部係最新型號" },
          { name: "💻 電腦零件", content: "SSD、記憶卡、鍵盤滑鼠，砌機發燒友天堂" },
          { name: "🎁 科技禮品", content: "送禮自用兩相宜，價錢抵到爛" }
        ]
      },
      food: {
        title: "🍜 美食推介：食在深圳",
        content: "退休人士最關心嘅，除咗玩，就係食！深圳嘅美食性價比真係超高，以下係我今次試過覺得唔錯嘅地方：",
        day1lunch: { title: "Day 1 午餐：東門老街", name: "肥妹燒鵝店", price: "人均約RMB 60", desc: "必點：燒鵝瀨粉、叉燒飯，環境懷舊，性價比超高！" },
        day1dinner: { title: "Day 1 晚餐：海岸城", name: "悅海酒樓", price: "人均約RMB 150", desc: "必點：白切雞、蝦餃、鳳爪、正宗粵菜味道。環境舒適，適合慢慢歎！" },
        day2lunch: { title: "Day 2 午餐：華強北", items: [
          { name: "湘菜小館", desc: "正宗湖南味，酸辣過癮！人均約RMB 50" },
          { name: "港式茶餐廳", desc: "凍奶茶、菠蘿油，懷舊味道！人均約RMB 40" }
        ]}
      },
      bay: {
        title: "🌅 深圳灣：日落係為我而寫",
        content: "傍晚五點，我特意搭地鐵去深圳灣公園，趕上日落時分。呢個13公里長嘅海濱長廊，係我今次旅程嘅最大驚喜。我漫步喺海濱長廊，看住太陽慢慢降落。天色由橙轉紅，再由紅變紫，最後變成深藍色。對岸就係香港嘅天水圍、元朗，兩地只係一橋之隔，但風景就完全唔同。",
        tips: [
          "最佳時間：下午5:30-7:00係日落黃金時段",
          "最佳位置：海風廣場日落觀景台，可以影到成個深圳灣大橋",
          "幸運的話：有機會見到黑臉琵鷺！佢哋係冬候鳥，通常10月-3月最多",
          "租單車：可以喺園內租借單車，踩住單車睇日落，特別浪漫"
        ]
      },
      nightlife: {
        title: "🌃 深圳夜生活：越夜越精彩",
        content: "深圳嘅夜生活比香港更精彩，而且消費平一大截！",
        haian: { title: "🍺 海岸城商圈", items: [
          "大型商場雲集，國際品牌應有盡有",
          "酒吧街有多間精釀啤酒酒吧，外國風情浓厚",
          "KTV價錢比香港平一半！兩個人唱三個鐘都係RMB 150有找"
        ]},
        nightmarket: { title: "🍢 華強北夜市", items: [
          "華強北步行街，晚上8點後就開始熱鬧",
          "街頭小食推介：燒烤、串燒、煎餅果子、臭豆腐",
          "全部RMB 10有找，抵到爛！"
        ]}
      },
      tips: {
        apps: [
          "滴滴出行 - 叫車必備，價錢透明，司機服務態度好",
          "支付寶/微信支付 - 深圳大部分地方不接受現金，必需！",
          "百度地圖 - 比Google Maps準確，超好用！"
        ],
        customs: [
          "身份證+回鄉證/護照必備",
          "羅湖關口開放時間：06:30-00:00",
          "建議開通漫遊或購買內地電話卡",
          "週末羅湖關口人流較多，建議早上8點前過關"
        ],
        budget: [
          { name: "交通費（來回）", amount: "約 HK$70" },
          { name: "酒店（1晚）", amount: "約 HK$350-700" },
          { name: "餐飲（2日）", amount: "約 HK$200-300" },
          { name: "購物/特產", amount: "約 HK$100-200" }
        ]
      }
    },
    info: {
      address: "深圳市羅湖區/南山區",
      hours: "24小時",
      fee: "免費（部分景點除外）",
      rating: "4.5/5.0",
      transport: "羅湖/福田口岸 / 高鐵",
      duration: "2天1夜"
    }
  }
};

export default function ShenzhenPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [currentLang, setCurrentLang] = useState<TravelLanguage>("zh-TW");

  const content = shenzhenContent[currentLang];
  const tocItems = content.toc;

  useEffect(() => {
    const saved = localStorage.getItem("travel_language") as TravelLanguage;
    if (saved && shenzhenContent[saved]) {
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-orange-950/20 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-orange-500/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-orange-400 flex items-center gap-2">
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
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
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
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-white transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
          >
            {getBackText()}
          </Link>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
        </div>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/30">
            {content.meta.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent">
            {content.meta.title}
          </h1>
          <h2 className="text-xl text-orange-400 font-semibold mb-4">{content.meta.subtitle}</h2>
          <p className="text-zinc-500">June 2026 · {currentLang === "en" ? "Author: Pure Traveler" : currentLang === "zh-CN" ? "作者：纯粹旅人" : currentLang === "yue" ? "作者：純粹旅人" : "作者：純粹旅人"}</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200&q=80"
          alt={content.meta.title}
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-orange-500/20"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          {content.meta.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" className="text-xl leading-relaxed text-gray-200 mb-8">
            {content.sections.intro[0]}
          </p>
          <p className="text-gray-300 mb-8">
            {content.sections.intro[1]}
          </p>

          <h2 id="transport" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.transport.title}
          </h2>

          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-orange-300 mb-4">{content.sections.transport.content}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🚄</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{currentLang === "en" ? "East Rail (Most Convenient)" : "東鐵直達（最方便）"}</h4>
                  <p className="text-gray-300 mb-2">{currentLang === "en" ? "Lo Wu/Lok Ma Chau → Shenzhen Station (Luohu)" : "羅湖口岸或落馬洲 → 深圳站（羅湖）"}</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• {currentLang === "en" ? "Journey: ~45 min" : "車程：約45分鐘"}</li>
                    <li>• {currentLang === "en" ? "Fare: ~HK$35 (Octopus)" : "車費：約HK$35（使用八達通）"}</li>
                    <li>• {currentLang === "en" ? "Best for: Dongmen, Luohu area" : "適合：想直接去東門、羅湖區域"}</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🚅</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{currentLang === "en" ? "High-Speed Rail (Fastest)" : "高鐵（最快速）"}</h4>
                  <p className="text-gray-300 mb-2">Hong Kong West Kowloon → Shenzhen North</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• {currentLang === "en" ? "Journey: ~14 min" : "車程：約14分鐘"}</li>
                    <li>• {currentLang === "en" ? "Fare: ~HK$75 (advance booking)" : "車費：約HK$75（需提前購票）"}</li>
                    <li>• {currentLang === "en" ? "Best for: In a hurry, Nanshan area" : "適合：趕時間、想去南山區"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 id="dongmen" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.dongmen.title}
          </h2>
          <p className="text-gray-300 mb-6">{content.sections.dongmen.content}</p>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">💡 {currentLang === "en" ? "Shopping Tips" : "購物心得"}</h3>
            <ul className="space-y-3 text-zinc-300">
              {content.sections.dongmen.tips.map((tip, i) => <li key={i}>• {tip}</li>)}
            </ul>
          </div>

          <h2 id="huaqiangbei" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.huaqiangbei.title}
          </h2>
          <p className="text-gray-300 mb-6">{content.sections.huaqiangbei.content}</p>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-blue-400 font-bold mb-4 text-xl">{currentLang === "en" ? "Must-Visit Spots" : "必逛推介"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.sections.huaqiangbei.spots.map((spot, i) => (
                <div key={i} className="bg-zinc-800/50 rounded-lg p-4">
                  <span className="text-blue-400 font-bold">{spot.name}</span>
                  <p className="text-zinc-300 text-sm mt-1">{spot.content}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id="food" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.food.title}
          </h2>
          <p className="text-gray-300 mb-6">{content.sections.food.content}</p>

          <h2 id="bay" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.bay.title}
          </h2>
          <p className="text-gray-300 mb-6">{content.sections.bay.content}</p>

          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">📸 {currentLang === "en" ? "Photo Tips" : "打卡Tips"}</h3>
            <ul className="space-y-2 text-zinc-300">
              {content.sections.bay.tips.map((tip, i) => <li key={i}>• {tip}</li>)}
            </ul>
          </div>

          <h2 id="nightlife" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            {content.sections.nightlife.title}
          </h2>
          <p className="text-gray-300 mb-6">{content.sections.nightlife.content}</p>

          <h2 id="tips" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            💡 {currentLang === "en" ? "Practical Tips" : "實用小貼士"}
          </h2>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">{currentLang === "en" ? "Must-Download Apps" : "必須下載的App"}</h3>
            <ul className="space-y-3 text-zinc-300">
              {content.sections.tips.apps.map((app, i) => <li key={i}>• {app}</li>)}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 my-8">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">💰 {currentLang === "en" ? "Budget Reference (per person)" : "預算參考（每人）"}</h3>
            <div className="grid grid-cols-2 gap-4">
              {content.sections.tips.budget.map((item, i) => (
                <div key={i} className="bg-zinc-700/50 rounded-lg p-3">
                  <span className="text-gray-300 text-sm">{item.name}</span>
                  <p className="text-white font-bold text-lg">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      <Comments slug="gba-shenzhen" />
    </div>
  );
}
