"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "architecture", title: "建築亮點", emoji: "⚔️" },
    { id: "hypogeum", title: "地下室", emoji: "🕳️" },
    { id: "photo-spot", title: "拍攝機位", emoji: "📸" },
    { id: "tickets", title: "購票攻略", emoji: "🎟️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🏛️" },
    { id: "architecture", title: "建筑亮点", emoji: "⚔️" },
    { id: "hypogeum", title: "地下室", emoji: "🕳️" },
    { id: "photo-spot", title: "拍摄机位", emoji: "📸" },
    { id: "tickets", title: "购票攻略", emoji: "🎟️" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🏛️" },
    { id: "architecture", title: "Architecture", emoji: "⚔️" },
    { id: "hypogeum", title: "Underground", emoji: "🕳️" },
    { id: "photo-spot", title: "Photo Spots", emoji: "📸" },
    { id: "tickets", title: "Tickets", emoji: "🎟️" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "architecture", title: "建築亮點", emoji: "⚔️" },
    { id: "hypogeum", title: "地下室", emoji: "🕳️" },
    { id: "photo-spot", title: "拍攝機位", emoji: "📸" },
    { id: "tickets", title: "購票攻略", emoji: "🎟️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: {
      tag: "🏛️ 歐洲世界遺產 · 義大利歷史",
      title: "穿越千年的帝國史詩：羅馬鬥獸場（Colosseum）深度打卡與無痛購票全攻略",
      subtitle: "深度打卡與無痛購票全攻略",
      author: "純粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "羅馬鬥獸場",
      imageCaption: "▲ 公元 80 年落成、名列新世界七大奇蹟之一的古羅馬精神圖騰 —— 羅馬鬥獸場",
      p1: "如果世界歷史是一本厚重的書，咁羅馬絕對是其中最驚心動魄的章節；而最能代表這個古老帝國榮耀與殘酷的地方，莫過於矗立在市中心的<strong>羅馬鬥獸場（Colosseum）</strong>。這座歷經近兩千年風雨、地震與戰火洗禮的圓形競技場，以其精妙的建築結構同血腥的歷史故事，成為每位來到義大利的旅人不可不去的朝聖地。",
      p2: "今日呢篇 Blog 就帶大家揭開這座石頭建築背後的血淚故事，解鎖攝影師最愛的私藏巨片拍攝機位，並奉上最實用的避坑防牛購票指南！",
    },
    sections: [
      {
        id: "architecture",
        title: "⚔️ 走進競技場：3 大必看歷史亮點",
        items: [
          {
            subtitle: "1. 宏偉的「四層拱門外牆」—— 古羅馬建築工藝的巔峰",
            content: "站在鬥獸場外，最震撼的就是那面高達 48 米的外牆。古羅馬建築師極具巧思，由下至上分別採用了三種不同風格的柱子：第一層是樸素的<strong>多立克式 (Doric)</strong>，第二層是優雅有捲雲紋的<strong>愛奧尼克式 (Ionic)</strong>，第三層則是奢華雕花的<strong>科林斯式 (Corinthian)</strong>。這種幾何學與層次感的分佈，影響了後世兩千年的西方建築美學。",
          },
          {
            subtitle: "2. 地底地下室（Hypogeum）—— 殘酷機關的發源地",
            content: "走進內部，你會發現競技場中央的木製舞台地板早已腐朽消失，露出底下密密麻麻、如同迷宮般的隔間。這裏就是「地下室」。當年這裏關押著即將上場的奴隸、死囚以及各種從非洲運來的猛獸。地底設有精密的手動升降機機關，可以在決鬥進行時，突然將獅子或獵豹從地板暗門升至地面，給觀眾帶來最血腥的視覺刺激。",
            image: {
              src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80",
              alt: "羅馬鬥獸場內部",
              caption: "▲ 位於地鐵站出口上方平台的私藏機位，能拍出人與古蹟近距離同框的絕佳效果",
            },
          },
          {
            subtitle: "3. 私藏最佳拍攝機位 —— 地鐵站出口上方平台",
            content: "想拍到沒有遊客干擾、又能與整座鬥獸場完美同框的照片？絕佳的位置不在競技場正門口，而是搭地鐵 B 線到 <strong>Colosseo 站</strong> 出來後，沿著右手邊的樓梯往上走，來到位於馬路邊的石牆平台。這裡地勢較高，剛好與鬥獸場的中層平行。你可以坐在寬闊的古老石磚牆上，以整座龐大的建築作為背景，拍出極具視覺衝擊的電影感大片！",
          },
        ],
      },
    ],
    funFact: {
      title: "🎪 歷史冷知識：這裡居然上演過「模擬海戰」？",
      content: "據史料記載，在鬥獸場剛落成初期的元老院慶典中，羅馬人甚至拆除了地板，引進附近的地下水將整個競技場中央灌滿，變成一個人工湖！他們安排了真正的戰船在裡面進行實兵對抗的「模擬海戰」(Naumachia)。古羅馬人為了追求娛樂的極致，其瘋狂與工程技術簡直超乎想像。",
    },
    tickets: {
      id: "tickets",
      title: "🎟️ 自由行必讀：如何實現「無痛無排隊」進場",
      content: "羅馬鬥獸場長年高居全球排隊最誇張的景點前三名，如果現場排隊買票，動輒要浪費 2-3 個小時。<strong>唯一解法是提前網上預約。</strong>鬥獸場的門票是實名制的，通常會提前 30 天在官方網站開放預訂。購買普通套票（Full Experience Ticket）不僅可以進入鬥獸場，還包含了旁邊的<strong>古羅馬廣場 (Roman Forum)</strong> 和 <strong>帕拉蒂尼山 (Palatine Hill)</strong>，絕對可以玩足大半日！",
    },
    tips: {
      title: "💡 羅馬鬥獸場 旅遊實用小貼士 (Travel Tips)",
      items: [
        {
          icon: "⚠️",
          label: "嚴防小偷與黃牛：",
          content: "鬥獸場周邊是羅馬扒手（Pickpockets）的超級激戰區，背包一定要背在前面。另外，門口會有許多穿著古羅馬武士服裝的人熱情邀你合照，拍完後會開出高價索取小費，如果不想花冤枉錢，請微笑拒絕。",
        },
        {
          icon: "🌅",
          label: "最佳觀賞時間：",
          content: "推薦選擇<strong>下午 15:30 之後</strong>進場。這時候的歐洲太陽開始西斜，陽光會穿透斗獸場無數個拱門洞口，照亮內部的斷壁殘垣，逆光拍起照來非常有神祕、神聖的氛圍。",
        },
        {
          icon: "🚇",
          label: "交通方式：",
          content: "最簡單直接！乘搭羅馬地鐵 B 線（Metropolitana Linea B）至 <strong>Colosseo 站</strong>，一出站抬頭，巨大的鬥獸場就會直接震撼地呈現在你眼前！",
        },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Piazza del Colosseo, Rome" },
        { label: "🕐 開放時間", value: "8:30-19:00" },
        { label: "💰 費用", value: "€16 起（包含古羅馬廣場）" },
        { label: "⭐ 評分", value: "4.8/5.0（98,234 評論）" },
        { label: "🚇 交通", value: "Metro B線 Colosseo站" },
        { label: "⏱️ 建議遊覽", value: "2-3小時" },
      ],
    },
  },
  "zh-CN": {
    meta: {
      tag: "🏛️ 欧洲世界遗产 · 意大利历史",
      title: "穿越千年的帝国史诗：罗马斗兽场（Colosseum）深度打卡与无痛购票全攻略",
      subtitle: "深度打卡与无痛购票全攻略",
      author: "纯粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "罗马斗兽场",
      imageCaption: "▲ 公元 80 年落成、位列新世界七大奇迹之一的古罗马精神图腾 —— 罗马斗兽场",
      p1: "如果说世界历史是一本厚重的书，那么罗马绝对是其中最惊心动魄的章节；而最能代表这个古老帝国荣耀与残酷的地方，莫过于矗立在市中心的<strong>罗马斗兽场（Colosseum）</strong>。这座历经近两千年风雨、地震与战火洗礼的圆形竞技场，以其精妙的建筑结构同血腥的历史故事，成为每位来到意大利的旅人不可不去的朝圣地。",
      p2: "今天这篇 Blog 就带大家揭开这座石头建筑背后的血泪故事，解锁摄影师最爱的私藏大片拍摄机位，并送上最实用的避坑防骗购票指南！",
    },
    sections: [
      {
        id: "architecture",
        title: "⚔️ 走进竞技场：3 大必看历史亮点",
        items: [
          {
            subtitle: "1. 宏伟的「四层拱门外墙」—— 古罗马建筑工艺的巅峰",
            content: "站在斗兽场外，最震撼的就是那面高达 48 米的外墙。古罗马建筑师极具巧思，由下至上分别采用了三种不同风格的柱子：第一层是朴素的<strong>多立克式 (Doric)</strong>，第二层是优雅有卷云纹的<strong>爱奥尼克式 (Ionic)</strong>，第三层则是奢华雕花的<strong>科林斯式 (Corinthian)</strong>。这种几何学与层次感的分布，影响了后世两千年的西方建筑美学。",
          },
          {
            subtitle: "2. 地下地下室（Hypogeum）—— 残酷机关的发源地",
            content: "走进内部，你会发现竞技场中央的木制舞台地板早已腐朽消失，露出底下密密麻麻、如同迷宫般的隔间。这里就是「地下室」。当年这里关押着即将上场的奴隶、死囚以及各种从非洲运来的猛兽。地下设有精密的手动升降机机关，可以在决斗进行时，突然将狮子或猎豹从地板暗门升至地面，给观众带来最血腥的视觉刺激。",
            image: {
              src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80",
              alt: "罗马斗兽场内部",
              caption: "▲ 位于地铁站出口上方平台的私藏机位，能拍出人与古迹近距离同框的绝佳效果",
            },
          },
          {
            subtitle: "3. 私藏最佳拍摄机位 —— 地铁站出口上方平台",
            content: "想拍到没有游客干扰、又能与整座斗兽场完美同框的照片？绝佳的位置不在竞技场正门口，而是搭地铁 B 线到 <strong>Colosseo 站</strong> 出来后，沿着右手边的楼梯往上走，来到位于马路边的大平台。这里地势较高，刚好与斗兽场的中层平行。你可以坐在宽阔的古老石砖墙上，以整座庞大的建筑作为背景，拍出极具视觉冲击的电影感大片！",
          },
        ],
      },
    ],
    funFact: {
      title: "🎪 历史冷知识：这里居然上演过「模拟海战」？",
      content: "据史料记载，在斗兽场刚落成初期的元老院庆典中，罗马人甚至拆除了地板，引进附近的地下水将整个竞技场中央灌满，变成一个人工湖！他们安排了真正的战船在里面进行实兵对抗的「模拟海战」(Naumachia)。古罗马人为了追求娱乐的极致，其疯狂与工程技术简直超乎想象。",
    },
    tickets: {
      id: "tickets",
      title: "🎟️ 自由行必读：如何实现「无痛无排队」进场",
      content: "罗马斗兽场长年高居全球排队最夸张的景点前三名，如果现场排队买票，动辄要浪费 2-3 个小时。<strong>唯一解法是提前网上预约。</strong>斗兽场的门票是实名制的，通常会提前 30 天在官方网站开放预订。购买普通套票（Full Experience Ticket）不仅可以进入斗兽场，还包含了旁边的<strong>古罗马广场 (Roman Forum)</strong> 和 <strong>帕拉蒂尼山 (Palatine Hill)</strong>，绝对可以玩足大半天！",
    },
    tips: {
      title: "💡 罗马斗兽场 旅游实用小贴士 (Travel Tips)",
      items: [
        {
          icon: "⚠️",
          label: "严防小偷与黄牛：",
          content: "斗兽场周边是罗马扒手（Pickpockets）的超级激战区，背包一定要背在前面。另外，门口会有许多穿着古罗马武士服装的人热情邀你合照，拍完后会开出高价索取小费，如果不想花冤枉钱，请微笑拒绝。",
        },
        {
          icon: "🌅",
          label: "最佳观赏时间：",
          content: "推荐选择<strong>下午 15:30 之后</strong>进场。这时候的欧洲太阳开始西斜，阳光会穿透斗兽场无数个拱门洞口，照亮内部的断壁残垣，逆光拍起照来非常有神秘、神圣的氛围。",
        },
        {
          icon: "🚇",
          label: "交通方式：",
          content: "最简单直接！搭乘罗马地铁 B 线（Metropolitana Linea B）至 <strong>Colosseo 站</strong>，一出站抬头，巨大的斗兽场就会直接震撼地呈现在你眼前！",
        },
      ],
    },
    info: {
      title: "📊 景点资讯一览",
      items: [
        { label: "📍 地址", value: "Piazza del Colosseo, Rome" },
        { label: "🕐 开放时间", value: "8:30-19:00" },
        { label: "💰 费用", value: "€16 起（包含古罗马广场）" },
        { label: "⭐ 评分", value: "4.8/5.0（98,234 评论）" },
        { label: "🚇 交通", value: "Metro B线 Colosseo站" },
        { label: "⏱️ 建议游览", value: "2-3小时" },
      ],
    },
  },
  en: {
    meta: {
      tag: "🏛️ European Heritage · Italian History",
      title: "A Millennium of Empire: Comprehensive Colosseum Guide",
      subtitle: "Photo Spots & Skip-the-Line Ticket Tips",
      author: "Pure Traveler",
      date: "May 2026",
    },
    intro: {
      imageAlt: "Colosseum",
      imageCaption: "▲ Completed in AD 80, one of the New Seven Wonders of the World — The Iconic Colosseum",
      p1: "If world history is a thick book, Rome is undoubtedly its most thrilling chapter. And nothing represents the glory and cruelty of this ancient empire more than the <strong>Colosseum</strong> standing in the heart of the city. This amphitheater, weathered by nearly two millennia of storms, earthquakes, and wars, with its ingenious architectural design and bloody tales, has become a pilgrimage site every visitor to Italy must experience.",
      p2: "Today, this blog will unveil the blood-and-tears stories behind this stone structure, reveal photographers' secret spots for epic shots, and provide the most practical ticketing guide to avoid the crowds!",
    },
    sections: [
      {
        id: "architecture",
        title: "⚔️ Inside the Arena: 3 Must-See Historical Highlights",
        items: [
          {
            subtitle: "1. Magnificent Four-Tiered Arches — Peak of Roman Architecture",
            content: "Standing outside the Colosseum, the most breathtaking sight is the 48-meter-high exterior wall. Roman architects showed remarkable ingenuity, using three distinct column styles from bottom to top: the plain <strong>Doric order</strong> on the first level, the elegant <strong>Ionic order</strong> with its scroll volutes on the second, and the ornate <strong>Corinthian order</strong> on the third. This geometric and layered design influenced Western architectural aesthetics for two millennia.",
          },
          {
            subtitle: "2. The Hypogeum — Origin of Cruel Mechanisms",
            content: "Inside, you'll discover that the wooden arena floor has long decayed away, revealing a maze-like network of chambers beneath. This is the 'Hypogeum.' Back in the day, this area housed slaves, condemned prisoners, and various exotic beasts transported from Africa. The underground featured sophisticated manual lift mechanisms that could suddenly raise lions or leopards through trapdoors during combat, delivering the most gruesome visual spectacles to the audience.",
            image: {
              src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80",
              alt: "Inside the Colosseum",
              caption: "▲ The secret photo spot on the platform above the metro station exit",
            },
          },
          {
            subtitle: "3. Secret Photo Spot — Platform Above Metro Station",
            content: "Want to capture photos without tourist crowds and with the entire Colosseum perfectly framed? The best location is not at the main entrance. Take Metro Line B to <strong>Colosseo station</strong>, then follow the stairs on your right up to the stone platform by the road. This elevated position aligns perfectly with the Colosseum's middle tier. Sit on the wide ancient stone wall with the massive structure as your backdrop for cinematic shots with incredible visual impact!",
          },
        ],
      },
    ],
    funFact: {
      title: "🎪 Fun Fact: Did You Know They Staged a 'Naval Battle' Here?",
      content: "Historical records reveal that during the inaugural celebrations at the Colosseum, Romans actually removed the floor and flooded the entire arena with water from nearby sources, creating an artificial lake! They arranged real warships for live combat — a 'Naval Battle' (Naumachia). The Romans' pursuit of extreme entertainment and their engineering prowess were truly extraordinary.",
    },
    tickets: {
      id: "tickets",
      title: "🎟️ Skip-the-Line Guide: How to Enter WITHOUT Queuing",
      content: "The Colosseum consistently ranks among the top 3 most crowded attractions worldwide. If you buy tickets on-site, be prepared to waste 2-3 hours waiting. <strong>The only solution is to book online in advance.</strong> Colosseum tickets are name-registered and typically open for booking 30 days ahead on the official website. The standard Full Experience Ticket grants access not only to the Colosseum but also includes the adjacent <strong>Roman Forum</strong> and <strong>Palatine Hill</strong> — easily half a day's worth of exploration!",
    },
    tips: {
      title: "💡 Colosseum Travel Tips",
      items: [
        {
          icon: "⚠️",
          label: "Beware of Pickpockets & Scammers:",
          content: "The Colosseum area is a hotspot for pickpockets. Keep your backpack in front of you at all times. Additionally, many people dressed as Roman gladiators near the entrance will eagerly invite you for photos, then demand expensive tips afterward. Smile and decline if you don't want to overpay.",
        },
        {
          icon: "🌅",
          label: "Best Time to Visit:",
          content: "I recommend entering <strong>after 3:30 PM</strong>. At this time, the European sun is setting, casting light through the countless archways, illuminating the ruins within with a mysterious, sacred atmosphere perfect for photography.",
        },
        {
          icon: "🚇",
          label: "Getting There:",
          content: "Most straightforward: Take <strong>Metro Line B</strong> to <strong>Colosseo station</strong>. Look up as soon as you exit — the magnificent Colosseum will appear right before you!",
        },
      ],
    },
    info: {
      title: "📊 Quick Info",
      items: [
        { label: "📍 Address", value: "Piazza del Colosseo, Rome" },
        { label: "🕐 Hours", value: "8:30-19:00" },
        { label: "💰 Price", value: "From €16 (incl. Roman Forum)" },
        { label: "⭐ Rating", value: "4.8/5.0 (98,234 reviews)" },
        { label: "🚇 Metro", value: "Line B, Colosseo Station" },
        { label: "⏱️ Visit", value: "2-3 hours" },
      ],
    },
  },
  yue: {
    meta: {
      tag: "🏛️ 歐洲世界遺產 · 意大利歷史",
      title: "穿越千年的帝國史詩：羅馬鬥獸場（Colosseum）深度打卡與無痛購票全攻略",
      subtitle: "深度打卡與無痛購票全攻略",
      author: "純粹旅人",
      date: "May 2026",
    },
    intro: {
      imageAlt: "羅馬鬥獸場",
      imageCaption: "▲ 公元 80 年落成、位列新世界七大奇蹟之一的古羅馬精神圖騰 —— 羅馬鬥獸場",
      p1: "如果說世界歷史係一本厚重的書，咁羅馬就絕對係其中最驚心動魄的章節；而最能代表呢個古老帝國榮耀與殘酷的地方，就莫過於矗立在市中心的<strong>羅馬鬥獸場（Colosseum）</strong>。呢座歷經近兩千年風雨、地震與戰火洗禮的圓形競技場，以其精妙的建築結構同血腥的歷史故事，成為每位來到意大利的旅人不可不去的朝聖地。",
      p2: "今日呢篇 Blog 就帶大家揭開呢座石頭建築背後的血淚故事，解鎖攝影師最愛的私藏大片拍攝機位，並送上最實用的避坑防騙購票指南！",
    },
    sections: [
      {
        id: "architecture",
        title: "⚔️ 走進競技場：3 大必看歷史亮點",
        items: [
          {
            subtitle: "1. 宏偉的「四層拱門外牆」—— 古羅馬建築工藝的巔峰",
            content: "站在鬥獸場外，最震撼的就係嗰面高達 48 米的外牆。古羅馬建築師極具巧思，由下至上分別採用了三種不同風格的柱子：第一層係樸素的<strong>多立克式 (Doric)</strong>，第二層係優雅有捲雲紋的<strong>愛奧尼克式 (Ionic)</strong>，第三層就係奢華雕花的<strong>科林斯式 (Corinthian)</strong>。呢種幾何學與層次感的分佈，影響了後世兩千年的西方建築美學。",
          },
          {
            subtitle: "2. 地下地下室（Hypogeum）—— 殘酷機關的發源地",
            content: "走進內部，你會發現競技場中央的木製舞台地板早已腐朽消失，露出底下密密麻麻、如同迷宮般的隔間。呢度就係「地下室」。當年呢度關押著即將上場的奴隸、死囚以及各種從非洲運來的猛獸。地下設有精密的手動升降機機關，可以在決鬥進行時，突然將獅子或獵豹從地板暗門升至地面，給觀眾帶來最血腥的視覺刺激。",
            image: {
              src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80",
              alt: "羅馬鬥獸場內部",
              caption: "▲ 位於地鐵站出口上方平台的私藏機位，能拍出人與古蹟近距離同框的絕佳效果",
            },
          },
          {
            subtitle: "3. 私藏最佳拍攝機位 —— 地鐵站出口上方平台",
            content: "想影到沒有遊客干擾、又能與整座鬥獸場完美同框的照片？絕佳的位置唔在競技場正門口，而係搭地鐵 B 線到 <strong>Colosseo 站</strong> 出來後，沿著右手邊的樓梯往上走，來到位於馬路邊的大平台。呢度地勢較高，剛好與鬥獸場的中層平行。你可以坐在寬闊的古老石磚牆上，以整座龐大的建築作為背景，影出極具視覺衝擊的電影感大片！",
          },
        ],
      },
    ],
    funFact: {
      title: "🎪 歷史冷知識：呢度居然上演過「模擬海戰」？",
      content: "據史料記載，在鬥獸場剛落成初期的元老院慶典中，羅馬人甚至拆除了地板，引進附近的地下水將整個競技場中央灌滿，變成一個人工湖！佢哋安排了真正的戰船喺裡面進行實兵對抗的「模擬海戰」(Naumachia)。古羅馬人為咗追求娛樂的極致，其瘋狂與工程技術簡直超乎想像。",
    },
    tickets: {
      id: "tickets",
      title: "🎟️ 自由行必讀：如何實現「無痛無排隊」進場",
      content: "羅馬鬥獸場長年高居全球排隊最誇張的景點前三名，如果現場排隊買票，動輒要浪費 2-3 個小時。<strong>唯一解法係提前網上預約。</strong>鬥獸場的門票係實名制的，通常會提前 30 天喺官方網站開放預訂。購買普通套票（Full Experience Ticket）不僅可以進入鬥獸場，仲包含了旁邊的<strong>古羅馬廣場 (Roman Forum)</strong> 同 <strong>帕拉蒂尼山 (Palatine Hill)</strong>，絕對可以玩足大半日！",
    },
    tips: {
      title: "💡 羅馬鬥獸場 旅遊實用小貼士 (Travel Tips)",
      items: [
        {
          icon: "⚠️",
          label: "嚴防小偷與黃牛：",
          content: "鬥獸場周邊係羅馬扒手（Pickpockets）的超級激戰區，背包一定要孭喺前面。另外，门口會有許多穿著古羅馬武士服裝的人熱情邀你合照，拍完後會開出高價索取小費，如果唔想花冤枉錢，請微笑拒絕。",
        },
        {
          icon: "🌅",
          label: "最佳觀賞時間：",
          content: "推薦選擇<strong>下午 15:30 之後</strong>進場。呢個時候的歐洲太陽開始西斜，陽光會穿透鬥獸場無數個拱門洞口，照亮內部的斷壁殘垣，逆光影相起來非常有神秘、神聖的氛圍。",
        },
        {
          icon: "🚇",
          label: "交通方式：",
          content: "最簡單直接！乘搭羅馬地鐵 B 線（Metropolitana Linea B）至 <strong>Colosseo 站</strong>，一出站抬頭，巨大的鬥獸場就會直接震撼地呈現在你眼前！",
        },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Piazza del Colosseo, Rome" },
        { label: "🕐 開放時間", value: "8:30-19:00" },
        { label: "💰 費用", value: "€16 起（包含古羅馬廣場）" },
        { label: "⭐ 評分", value: "4.8/5.0（98,234 評論）" },
        { label: "🚇 交通", value: "Metro B線 Colosseo站" },
        { label: "⏱️ 建議遊覽", value: "2-3小時" },
      ],
    },
  },
};

export default function ColosseumPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const c = content[lang];
  const toc = tocItems[lang];
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#3e2723]">
      {/* Language Switcher */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} variant="minimal" />
      </div>

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#fbe9e7] to-[#faf6f0] backdrop-blur-xl border border-[#8b4513]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#8b4513]/10">
          <h3 className="text-sm font-bold text-[#8b4513] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-[#3e2723]/70 hover:text-[#3e2723] hover:bg-[#f1e7dd]"
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
          className="inline-flex items-center gap-2 text-[#8b4513] hover:text-[#5d4037] mb-8 transition-colors bg-[#f1e7dd] px-4 py-2 rounded-full hover:bg-[#e8ddd4] border border-[#8b4513]/20"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12 border-b-2 border-[#8b4513]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b4513] to-[#a0522d] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#8b4513]/30">
            {c.meta.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5d4037]">
            {c.meta.title}
          </h1>
          <p className="text-[#bcaaa4]">{c.meta.date} · 作者：{c.meta.author}</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#8b4513]/20">
          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
            alt={c.intro.imageAlt}
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#795548] text-sm mb-12" dangerouslySetInnerHTML={{ __html: c.intro.imageCaption }} />

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#3e2723] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
          <p className="text-[#3e2723] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />

          {c.sections.map((section) => (
            <div key={section.id}>
              <h2 id={section.id} className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
                {section.title}
              </h2>
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-[#3e2723] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#8b4513] pl-4">
                    {item.subtitle}
                  </h3>
                  <p className="text-[#3e2723] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: item.content }} />
                  {item.image && (
                    <div className="my-8">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-full rounded-2xl"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80";
                        }}
                      />
                      <p className="text-center text-[#795548] text-sm mt-4 mb-8">{item.image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="bg-[#fbe9e7] border-l-5 border-[#ff5722] p-6 my-10 rounded-r-xl">
            <h4 className="text-[#d84315] font-bold mb-4 text-xl flex items-center gap-2">
              {c.funFact.title}
            </h4>
            <p className="text-[#3e2723] text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.funFact.content }} />
          </div>

          <h2 id={c.tickets.id} className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">
            {c.tickets.title}
          </h2>
          <p className="text-[#3e2723] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.tickets.content }} />

          <div className="bg-[#3e2723] text-[#efebe9] p-6 my-10 rounded-xl shadow-2xl">
            <h3 className="text-[#ffb74d] font-bold mb-4 text-xl border-b border-[#5d4037] pb-2">
              {c.tips.title}
            </h3>
            <ul className="space-y-4 text-lg">
              {c.tips.items.map((tip, idx) => (
                <li key={idx} className={idx < c.tips.items.length - 1 ? "border-b border-[#5d4037] pb-3" : ""}>
                  <strong className="text-[#ffb74d]">{tip.icon} {tip.label}</strong>
                  <span dangerouslySetInnerHTML={{ __html: tip.content }} />
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-[#5d4037] text-2xl font-bold border-b-2 border-[#8b4513] pb-2 mt-10 mb-6">{c.info.title}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            {c.info.items.map((item, idx) => (
              <div key={idx} className="bg-[#f1e7dd] rounded-xl p-4 border border-[#d7ccc8]">
                <span className="text-[#8b4513] font-bold">{item.label}</span>
                <p className="text-[#5d4037] text-sm mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <Comments slug="colosseum" />
    </div>
  );
}
