"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🌊" },
    { id: "glico", title: "固力果跑跑人", emoji: "🏃" },
    { id: "signs", title: "立體招牌", emoji: "🎯" },
    { id: "cruise", title: "水上觀光船", emoji: "⛵" },
    { id: "food", title: "必吃美食", emoji: "🍡" },
    { id: "houchi", title: "法善寺横丁", emoji: "🏮" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🌊" },
    { id: "glico", title: "固力果跑跑人", emoji: "🏃" },
    { id: "signs", title: "立体招牌", emoji: "🎯" },
    { id: "cruise", title: "水上观光船", emoji: "⛵" },
    { id: "food", title: "必吃美食", emoji: "🍡" },
    { id: "houchi", title: "法善寺横丁", emoji: "🏮" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🌊" },
    { id: "glico", title: "Glico Runner", emoji: "🏃" },
    { id: "signs", title: "Neon Signs", emoji: "🎯" },
    { id: "cruise", title: "River Cruise", emoji: "⛵" },
    { id: "food", title: "Must-Eat Food", emoji: "🍡" },
    { id: "houchi", title: "Hozenji Yokocho", emoji: "🏮" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🌊" },
    { id: "glico", title: "固力果跑跑人", emoji: "🏃" },
    { id: "signs", title: "立體招牌", emoji: "🎯" },
    { id: "cruise", title: "水上觀光船", emoji: "⛵" },
    { id: "food", title: "必吃美食", emoji: "🍡" },
    { id: "houchi", title: "法善寺横丁", emoji: "🏮" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: {
      tag: "🌊 大阪美食",
      title: "大阪不夜城：道頓堀運河（Dotonbori）",
      subtitle: "吃貨與霓虹夜景的天堂",
      author: "純粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "道頓堀運河夜景",
      imageCaption: "▲ 夜幕下的道頓堀運河，霓虹燈光與運河倒影構成大阪最標誌性的夜景",
      p1: "如果說東京的代表是冷靜有序的澀谷十字路口，咁大阪嘅代表就一定是熱情奔放、香氣四溢的<strong>道頓堀運河（Dotonbori Canal）</strong>！呢條開鑿於17世紀的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。兩旁鋪天蓋地的立體巨型招牌、閃爍的霓虹燈投射喺水面上，構成咗大阪最標誌性的夜景。",
      p2: "無論你想搵頂級的關西平民美食，定係想感受最地道的大阪熱情，跟住呢篇 Blog 帶你深度解鎖道頓堀運河的必玩、必食亮點！",
    },
    sections: [
      {
        id: "glico",
        title: "🌃 道頓堀運河的 3 大經典體驗",
        items: [
          {
            subtitle: "1. 戎橋上與「固力果跑跑人」擺同一個 Pose！",
            content: "橫跨運河的「戎橋」是全個區域最熱鬧的中心點。站在橋上，你就可以正面迎向那面陪伴了大阪幾十年的<strong>固力果跑跑人廣告牌</strong>。每當夜幕低垂，廣告牌的背景會不斷變換，展示跑跑人跑過世界各地的場景。來到這裡，記得入鄉隨俗，舉起雙手、抬起一隻腳，拍一張標準嘅大阪打卡相！",
            image: {
              src: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
              alt: "道頓堀運河夜景",
              caption: "▲ 霓虹璀璨的道頓堀運河夜景，完美展現大阪的熱鬧繁華",
            },
          },
          {
            subtitle: "2. 誇張度爆表！立體巨型招牌大巡禮",
            content: "道頓堀沿街的店舖完全將「招牌文化」發揮到極致。你會見到會動的<strong>「蟹道樂」大螃蟹</strong>、目光兇狠的<strong>「元祖炸串」達摩大叔</strong>、巨大的<strong>章魚燒模型</strong>，甚至是一整條從牆壁飛踩出來的巨龍！呢啲極具視覺衝擊的招牌，完美展現咗大阪人幽默又誇張的商業美學。",
            image: {
              src: "https://images.unsplash.com/photo-1764069139303-72ce3e24ebbf?w=1200&q=80",
              alt: "道頓堀霓虹夜景",
              caption: "▲ 運河沿岸的霓虹燈光與建築倒影相互輝映，呈現迷離的夜色氛圍",
            },
          },
          {
            subtitle: "3. 乘搭「道頓堀水上觀光船」—— 浪漫夜航",
            content: "想用最舒服的角度欣賞運河？咁就一定要去「太左衛門橋」乘搭黃色的<strong>水上觀光船（Tombori River Cruise）</strong>。全程大約20分鐘，活力十足的導覽員會用充滿魔性的關西腔為大家介紹沿途的9座橋樑。當船隻緩緩駛過固力果廣告牌下方時，全船人一齊揮手，氣氛簡直一流！",
          },
        ],
      },
    ],
    food: {
      id: "food",
      title: "🐙 吃貨天堂：道頓堀必吃三大平民美食",
      items: [
        { emoji: "🍡", name: "章魚燒 (Takoyaki)", desc: "道頓堀是章魚燒的激戰區！首推「本家大章魚」或「章魚燒道樂 Wanaka」，外皮微酥、內裏爆漿，裡面的章魚塊大到讓人滿足。" },
        { emoji: "🥞", name: "大阪燒 (Okonomiyaki)", desc: "一定要試試歷史悠久的「美津の」或者「千房」，看著師傅在鐵板上把高麗菜、麵糊和五花肉煎得金黃，最後淋上濃郁美乃滋和柴魚片，香氣撲鼻！" },
        { emoji: "🍜", name: "金龍拉麵", desc: "榻榻米座席配上屋頂巨龍招牌，提供濃郁的豚骨拉麵，最正的是泡菜、韭菜和蒜泥都是免費無限添加。" },
      ],
    },
    houchi: {
      id: "houchi",
      title: "📸 攝影師秘境：法善寺橫丁",
      content: "喺喧鬧的道頓堀運河步行唔使3分鐘，隱藏著一條彷彿時空凍結的青石板小巷 —— <strong>法善寺橫丁</strong>。這裡保留了江戶時代的小酒館風情，巷尾供奉著全身長滿綠色青苔的「水掛不動尊」。信眾參拜時會往神像身上潑水祈福，夜晚油燈亮起時，這裡靜謐的氛圍與運河的浮華形成極大對比，非常適合拍照。",
    },
    tips: {
      id: "tips",
      title: "💡 道頓堀 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "水上觀光船優惠：", content: "如果你購買了<strong>「大阪周遊卡 (Osaka Amazing Pass)」</strong>，可以免費兌換道頓堀水上觀光船的船票（原價1000日圓），非常划算！建議下午先去換好晚上的夜航船票。" },
        { icon: "🌙", label: "避開人潮時間：", content: "道頓堀白天相對冷清，大部分店舖在中午甚至傍晚才營業。最佳到訪時間為<strong>晚上19:00至22:00</strong>，這時候霓虹燈全開，氣氛最正。" },
        { icon: "🚇", label: "交通方式：", content: "搭乘地下鐵御堂筋線、四橋線、千日前線至「難波站（Namba）」，從14號出口步行約3-5分鐘即可到達運河戎橋。" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "1 Chome Dotonbori, Chuo Ward, Osaka" },
        { label: "🕐 開放時間", value: "24小時開放（店舖約11:00-23:00）" },
        { label: "💰 費用", value: "免費參觀" },
        { label: "⭐ 評分", value: "4.5/5.0（67,891 評論）" },
        { label: "🚇 交通", value: "大阪Metro 難波站 步行5分鐘" },
        { label: "⏱️ 建議遊覽", value: "2-3小時" },
      ],
    },
  },
  "zh-CN": {
    meta: {
      tag: "🌊 大阪美食",
      title: "大阪不夜城：道顿堀运河（Dotonbori）",
      subtitle: "吃货与霓虹夜景的天堂",
      author: "纯粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "道顿堀运河夜景",
      imageCaption: "▲ 夜幕下的道顿堀运河，霓虹灯光与运河倒影构成大阪最标志性的夜景",
      p1: "如果说东京的代表是冷静有序的涩谷十字路口，那么大阪的代表就一定是热情奔放、香气四溢的<strong>道顿堀运河（Dotonbori Canal）</strong>！这条开凿于17世纪的古老运河，现今已经蜕变成全日本最夸张、最迷幻的娱乐与美食重镇。两旁铺天盖地的立体巨型招牌、闪烁的霓虹灯投射在水面上，构成了大阪最标志性的夜景。",
      p2: "无论你想找顶级的关西平民美食，还是想感受最地道的大阪热情，跟着这篇 Blog 带你深度解锁道顿堀运河的必玩、必食亮点！",
    },
    sections: [
      {
        id: "glico",
        title: "🌃 道顿堀运河的 3 大经典体验",
        items: [
          {
            subtitle: "1. 戎桥上与「固力果跑跑人」摆同一个 Pose！",
            content: "横跨运河的「戎桥」是整个区域最热闹的中心点。站在桥上，你就可以正面迎向那面陪伴了大坂几十年的<strong>固力果跑跑人广告牌</strong>。每当夜幕低垂，广告牌的背景会不断变换，展示跑跑人跑过世界各地的场景。来到这里，记得入乡随俗，举起双手、抬起一只脚，拍一张标准的大坂打卡照！",
            image: {
              src: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
              alt: "道顿堀运河夜景",
              caption: "▲ 霓虹璀璨的道顿堀运河夜景，完美展现大阪的热闹繁华",
            },
          },
          {
            subtitle: "2. 夸张度爆表！立体巨型招牌大巡礼",
            content: "道顿堀沿街的店铺完全将「招牌文化」发挥到极致。你会见到会动的<strong>「蟹道乐」大螃蟹</strong>、目光凶狠的<strong>「元祖炸串」达摩大叔</strong>、巨大的<strong>章鱼烧模型</strong>，甚至是一条从墙壁飞踩出来的巨龙！这些极具视觉冲击的招牌，完美展现了大坂人幽默又夸张的商业美学。",
            image: {
              src: "https://images.unsplash.com/photo-1764069139303-72ce3e24ebbf?w=1200&q=80",
              alt: "道顿堀霓虹夜景",
              caption: "▲ 运河沿岸的霓虹灯光与建筑倒影相互辉映，呈现迷离的夜色氛围",
            },
          },
          {
            subtitle: "3. 搭乘「道顿堀水上观光船」—— 浪漫夜航",
            content: "想用最舒服的角度欣赏运河？那就一定要去「太左卫门桥」搭乘黄色的<strong>水上观光船（Tombori River Cruise）</strong>。全程大约20分钟，活力十足的导览员会用充满魔性的关西腔为大家介绍沿途的9座桥梁。当船只缓缓驶过固力果广告牌下方时，全船人一起挥手，气氛简直一流！",
          },
        ],
      },
    ],
    food: {
      id: "food",
      title: "🐙 吃货天堂：道顿堀必吃三大平民美食",
      items: [
        { emoji: "🍡", name: "章鱼烧 (Takoyaki)", desc: "道顿堀是章鱼烧的激战区！首推「本家大章鱼」或「章鱼烧道乐 Wanaka」，外皮微酥、内心爆浆，里面的章鱼块大到让人满足。" },
        { emoji: "🥞", name: "大阪烧 (Okonomiyaki)", desc: "一定要试试历史悠久的「美津の」或「千房」，看着师傅在铁板上把高丽菜、面糊和五花肉煎得金黄，最后淋上浓郁美乃滋和柴鱼片，香气扑鼻！" },
        { emoji: "🍜", name: "金龙拉面", desc: "榻榻米座席配上屋顶巨龙招牌，提供浓郁的豚骨拉面，最正的是泡菜、韭菜和蒜泥都是免费无限添加。" },
      ],
    },
    houchi: {
      id: "houchi",
      title: "📸 摄影师秘境：法善寺横丁",
      content: "在热闹的道顿堀运河步行不用3分钟，隐藏着一条仿佛时空冻结的青石板小巷 —— <strong>法善寺横丁</strong>。这里保留了江户时代的小酒馆风情，巷尾供奉着全身长满绿色青苔的「水挂不动尊」。信众参拜时会往神像身上泼水祈福，夜晚油灯亮起时，这里静谧的氛围与运河的浮华形成极大对比，非常适合拍照。",
    },
    tips: {
      id: "tips",
      title: "💡 道顿堀 旅游实用小贴士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "水上观光船优惠：", content: "如果你购买了<strong>「大阪周游卡 (Osaka Amazing Pass)」</strong>，可以免费兑换道顿堀水上观光船的船票（原價1000日圆），非常划算！建议下午先去换好晚上的夜航船票。" },
        { icon: "🌙", label: "避开人潮时间：", content: "道顿堀白天相对冷清，大部分店铺在中午甚至傍晚才营业。最佳到访时间为<strong>晚上19:00至22:00</strong>，这时候霓虹灯全开，气氛最正。" },
        { icon: "🚇", label: "交通方式：", content: "搭乘地铁御堂筋线、四桥线、千日前线至「难波站（Namba）」，从14号出口步行约3-5分钟即可到达运河戎桥。" },
      ],
    },
    info: {
      title: "📊 景点资讯一览",
      items: [
        { label: "📍 地址", value: "1 Chome Dotonbori, Chuo Ward, Osaka" },
        { label: "🕐 开放时间", value: "24小时开放（店铺约11:00-23:00）" },
        { label: "💰 费用", value: "免费参观" },
        { label: "⭐ 评分", value: "4.5/5.0（67,891 评论）" },
        { label: "🚇 交通", value: "大阪Metro 难波站 步行5分钟" },
        { label: "⏱️ 建议游览", value: "2-3小时" },
      ],
    },
  },
  en: {
    meta: {
      tag: "🌊 Osaka Food & Culture",
      title: "Osaka's Eternal Night: Dotonbori Canal Guide",
      subtitle: "Food Paradise & Neon Night View",
      author: "Pure Traveler",
      date: "May 2026",
    },
    intro: {
      imageAlt: "Dotonbori Canal Night View",
      imageCaption: "▲ Dotonbori at night — Osaka's most iconic夜景",
      p1: "If Tokyo is represented by the orderly Shibuya Crossing, then Osaka is definitely embodied by the passionate, aroma-filled <strong>Dotonbori Canal</strong>! This ancient canal, dug in the 17th century, has transformed into Japan's most flamboyant and psychedelic entertainment and food destination. The overwhelming 3D巨型看板, glittering neon lights reflected on the water — this is Osaka's most iconic night view.",
      p2: "Whether you're hunting for the best Kansai soul food or want to soak up Osaka's vibrant energy, this blog takes you on a deep dive into Dotonbori's must-see attractions and must-eat treats!",
    },
    sections: [
      {
        id: "glico",
        title: "🌃 3 Must-Try Experiences at Dotonbori",
        items: [
          {
            subtitle: "1. Strike the Glico Pose on Ebisubashi Bridge!",
            content: "The 'Ebisubashi' bridge spanning the canal is the heart of Dotonbori. Standing on the bridge, you'll face the iconic <strong>Glico runner sign</strong> that has watched over Osaka for decades. As night falls, the sign's background constantly changes, showing the runner sprinting through famous locations worldwide. Remember to follow the local tradition: raise both hands, lift one foot, and snap your signature Osaka photo!",
            image: {
              src: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
              alt: "Dotonbori Canal Night View",
              caption: "▲ The dazzling Dotonbori nightscape, showcasing Osaka's vibrant energy",
            },
          },
          {
            subtitle: "2. Over-the-Top 3D Giant Billboards Tour",
            content: "Dotonbori's shops have elevated 'sign culture' to an art form. You'll spot the <strong>mechanical crab</strong> at Kani Doraku, the fierce-looking <strong>G。元祖炸串 Daruma</strong>, massive <strong>takoyaki models</strong>, even a dragon bursting out from a wall! These visually striking signs perfectly embody Osaka's humorous and over-the-top commercial aesthetic.",
            image: {
              src: "https://images.unsplash.com/photo-1764069139303-72ce3e24ebbf?w=1200&q=80",
              alt: "Dotonbori Neon Night",
              caption: "▲ Neon lights and building reflections dance on the canal's surface",
            },
          },
          {
            subtitle: "3. Tombori River Cruise — Romantic Night Sail",
            content: "Want the most comfortable view of the canal? Head to 'Tawaramachi Bridge' to board the yellow <strong>Tombori River Cruise</strong>. The 20-minute journey features energetic guides speaking in charismatic Kansai dialect, introducing the 9 bridges along the route. When the boat glides beneath the Glico sign, everyone waves together — the atmosphere is incredible!",
          },
        ],
      },
    ],
    food: {
      id: "food",
      title: "🐙 Foodie Paradise: Dotonbori's Top 3 Must-Eat Street Foods",
      items: [
        { emoji: "🍡", name: "Takoyaki (Octopus Balls)", desc: "Dotonbori is the ultimate takoyaki battlefield! Top picks include 'Honke Main Tako' or 'Wanaka'. Crispy outside, molten inside, with generous chunks of octopus that are truly satisfying." },
        { emoji: "🥞", name: "Okonomiyaki (Osaka Pancake)", desc: "Try the legendary 'Mizuno' or 'Chibo' — watch the chef sizzle cabbage, batter, and pork belly on the hot plate until golden, then drizzle with rich mayo and bonito flakes. Irresistible aroma!" },
        { emoji: "🍜", name: "Kintara Ramen", desc: "Tatami seating under a rooftop dragon sign, serving rich tonkotsu ramen. The best part: kimchi, leeks, and garlic are all-you-can-add for free!" },
      ],
    },
    houchi: {
      id: "houchi",
      title: "📸 Photographer's Secret: Hozenji Yokocho",
      content: "Just 3 minutes from bustling Dotonbori lies a cobblestone alley frozen in time — <strong>Hozenji Yokocho</strong>. This lane preserves Edo-era izakaya charm, with the moss-covered <strong>Mizukake Fudo</strong> statue at its end. Visitors splash water on the deity for good fortune, and when lanterns light up at night, this tranquil pocket creates a stunning contrast with the canal's glamour — perfect for photos!",
    },
    tips: {
      id: "tips",
      title: "💡 Dotonbori Travel Tips",
      items: [
        { icon: "🎟️", label: "River Cruise Discount:", content: "With the <strong>Osaka Amazing Pass</strong>, you can get a FREE ticket for the Tombori River Cruise (normally ¥1,000)! I recommend exchanging your ticket in the afternoon for an evening sailing." },
        { icon: "🌙", label: "Best Time to Visit:", content: "Dotonbori is quiet during the day — most shops don't open until afternoon or evening. The <strong>optimal visiting window is 19:00-22:00</strong>, when all neon lights are blazing and the atmosphere is electric." },
        { icon: "🚇", label: "Getting There:", content: "Take the Osaka Metro Midosuji, Yotsubashi, or Sennichimae lines to <strong>Namba Station</strong>. Exit from Gate 14 and walk 3-5 minutes to Ebisubashi Bridge." },
      ],
    },
    info: {
      title: "📊 Quick Info",
      items: [
        { label: "📍 Address", value: "1 Chome Dotonbori, Chuo Ward, Osaka" },
        { label: "🕐 Hours", value: "24 hours (shops 11:00-23:00)" },
        { label: "💰 Price", value: "Free to explore" },
        { label: "⭐ Rating", value: "4.5/5.0 (67,891 reviews)" },
        { label: "🚇 Metro", value: "Namba Station, 5 min walk" },
        { label: "⏱️ Visit", value: "2-3 hours" },
      ],
    },
  },
  yue: {
    meta: {
      tag: "🌊 大阪美食",
      title: "大阪不夜城：道頓堀運河（Dotonbori）",
      subtitle: "吃貨與霓虹夜景的天堂",
      author: "純粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "道頓堀運河夜景",
      imageCaption: "▲ 夜幕下的道頓堀運河，霓虹燈光與運河倒影構成大阪最標誌性的夜景",
      p1: "如果說東京的代表係冷靜有序的澀谷十字路口，咁大阪嘅代表就一定係熱情奔放、香氣四溢的<strong>道頓堀運河（Dotonbori Canal）</strong>！呢條開鑿於17世紀的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。兩旁鋪天蓋地的立體巨型招牌、閃爍的霓虹燈投射喺水面上，構成咗大阪最標誌性的夜景。",
      p2: "無論你想搵頂級的關西平民美食，定係想感受最地道的大阪熱情，跟住呢篇 Blog 帶你深度解鎖道頓堀運河的必玩、必食亮點！",
    },
    sections: [
      {
        id: "glico",
        title: "🌃 道頓堀運河的 3 大經典體驗",
        items: [
          {
            subtitle: "1. 戎橋上與「固力果跑跑人」擺同一個 Pose！",
            content: "橫跨運河的「戎橋」係全個區域最熱鬧的中心點。站在橋上，你就可以正面迎向嗰面陪伴了大坂幾十年的<strong>固力果跑跑人廣告牌</strong>。每當夜幕低垂，廣告牌的背景會不斷變換，展示跑跑人跑過世界各地的場景。來到呢度，記得入鄉隨俗，舉起雙手、抬起一隻腳，影一張標準的大坂打卡相！",
            image: {
              src: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
              alt: "道頓堀運河夜景",
              caption: "▲ 霓虹璀璨的道頓堀運河夜景，完美展現大阪的熱鬧繁華",
            },
          },
          {
            subtitle: "2. 誇張度爆表！立體巨型招牌大巡禮",
            content: "道頓堀沿街的店舖完全將「招牌文化」發揮到極致。你會見到會動的<strong>「蟹道樂」大螃蟹</strong>、目光兇狠的<strong>「元祖炸串」達摩大叔</strong>、巨大的<strong>章魚燒模型</strong>，甚至係一條從牆壁飛踩出來的巨龍！呢啲極具視覺衝擊的招牌，完美展現咗大坂人幽默又誇張的商業美學。",
            image: {
              src: "https://images.unsplash.com/photo-1764069139303-72ce3e24ebbf?w=1200&q=80",
              alt: "道頓堀霓虹夜景",
              caption: "▲ 運河沿岸的霓虹燈光與建築倒影相互輝映，呈現迷離的夜色氛圍",
            },
          },
          {
            subtitle: "3. 乘搭「道頓堀水上觀光船」—— 浪漫夜航",
            content: "想用最舒服的角度欣賞運河？咁就一定要去「太左衛門橋」乘搭黃色的<strong>水上觀光船（Tombori River Cruise）</strong>。全程大約20分鐘，活力十足的導覽員會用充滿魔性的關西腔為大家介紹沿途的9座橋樑。當船隻緩緩駛過固力果廣告牌下方時，全船人一齊揮手，氣氛簡直一流！",
          },
        ],
      },
    ],
    food: {
      id: "food",
      title: "🐙 吃貨天堂：道頓堀必吃三大平民美食",
      items: [
        { emoji: "🍡", name: "章魚燒 (Takoyaki)", desc: "道頓堀係章魚燒的激戰區！首推「本家大章魚」或「章魚燒道樂 Wanaka」，外皮微酥、內裏爆漿，裡面的章魚塊大到讓人滿足。" },
        { emoji: "🥞", name: "大阪燒 (Okonomiyaki)", desc: "一定要試試歷史悠久的「美津の」或者「千房」，睇住師傅喺鐵板上把高麗菜、麵糊同五花肉煎得金黃，最後淋上濃郁美乃滋和柴魚片，香氣撲鼻！" },
        { emoji: "🍜", name: "金龍拉麵", desc: "榻榻米座席配上屋頂巨龍招牌，提供濃郁的豚骨拉麵，最正的就係泡菜、韭菜和蒜泥都係免費無限添加。" },
      ],
    },
    houchi: {
      id: "houchi",
      title: "📸 攝影師秘境：法善寺橫丁",
      content: "喺喧鬧的道頓堀運河步行唔使3分鐘，隱藏著一條彷彿時空凍結的青石板小巷 —— <strong>法善寺橫丁</strong>。呢度保留了江戶時代的小酒館風情，巷尾供奉著全身長滿綠色青苔的「水掛不動尊」。信眾參拜時會往神像身上潑水祈福，夜晚油燈亮起時，呢度靜謐的氛圍與運河的浮華形成極大對比，非常適合拍照。",
    },
    tips: {
      id: "tips",
      title: "💡 道頓堀 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "水上觀光船優惠：", content: "如果你購買了<strong>「大阪周遊卡 (Osaka Amazing Pass)」</strong>，可以免費兌換道頓堀水上觀光船的船票（原價1000日圓），非常划算！建議下午先去換好晚上的夜航船票。" },
        { icon: "🌙", label: "避開人潮時間：", content: "道頓堀白天相對冷清，大部分店舖喺中午甚至傍晚先至營業。最佳到訪時間為<strong>晚上19:00至22:00</strong>，呢個時候霓虹燈全開，氣氛最正。" },
        { icon: "🚇", label: "交通方式：", content: "搭乘地下鐵御堂筋線、四橋線、千日前線至「難波站（Namba）」，從14號出口步行約3-5分鐘即可到達運河戎橋。" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "1 Chome Dotonbori, Chuo Ward, Osaka" },
        { label: "🕐 開放時間", value: "24小時開放（店舖約11:00-23:00）" },
        { label: "💰 費用", value: "免費參觀" },
        { label: "⭐ 評分", value: "4.5/5.0（67,891 評論）" },
        { label: "🚇 交通", value: "大阪Metro 難波站 步行5分鐘" },
        { label: "⏱️ 建議遊覽", value: "2-3小時" },
      ],
    },
  },
};

export default function DotonboriPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const c = content[lang];
  const toc = tocItems[lang];
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} variant="minimal" />
      </div>

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-cyan-500/10">
          <h3 className="text-sm font-bold text-cyan-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-zinc-800/80"
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
          href="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-cyan-500/30">
            {c.meta.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            {c.meta.title}
          </h1>
          <h2 className="text-xl text-cyan-400 font-semibold mb-4">{c.meta.subtitle}</h2>
          <p className="text-zinc-500">{c.meta.date} · 作者：{c.meta.author}</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80"
          alt={c.intro.imageAlt}
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-cyan-500/20"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">{c.intro.imageCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />

          {c.sections.map((section) => (
            <div key={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <h3>{item.subtitle}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  {item.image && (
                    <div className="my-8">
                      <img src={item.image.src} alt={item.image.alt} className="w-full rounded-2xl mb-4" />
                      <p className="text-center text-zinc-500 text-sm mb-8">{item.image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div id={c.food.id} className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.food.title}
            </h4>
            <div className="space-y-4">
              {c.food.items.map((item, idx) => (
                <div key={idx} className="bg-zinc-800/50 rounded-xl p-4">
                  <p className="text-cyan-300 font-bold mb-1">{item.emoji} {item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id={c.houchi.id}>{c.houchi.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.houchi.content }} />

          <div id={c.tips.id} className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.tips.title}
            </h3>
            <ul className="space-y-3">
              {c.tips.items.map((tip, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-cyan-400">{tip.icon}</span>
                  <span className="text-zinc-300"><strong>{tip.label}</strong><span dangerouslySetInnerHTML={{ __html: tip.content }} /></span>
                </li>
              ))}
            </ul>
          </div>

          <h2>{c.info.title}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            {c.info.items.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
                <span className="text-cyan-400 font-bold">{item.label}</span>
                <p className="text-zinc-300 text-sm mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <Comments slug="dotonbori" />
    </div>
  );
}
