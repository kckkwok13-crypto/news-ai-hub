"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "history", title: "歷史秘密", emoji: "🏰" },
    { id: "glass-floor", title: "高空玻璃走廊", emoji: "🪟" },
    { id: "engine-rooms", title: "蒸汽機房", emoji: "⚙️" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "history", title: "历史秘密", emoji: "🏰" },
    { id: "glass-floor", title: "高空玻璃走廊", emoji: "🪟" },
    { id: "engine-rooms", title: "蒸汽机房", emoji: "⚙️" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "history", title: "History", emoji: "🏰" },
    { id: "glass-floor", title: "Glass Floor", emoji: "🪟" },
    { id: "engine-rooms", title: "Engine Rooms", emoji: "⚙️" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "history", title: "歷史秘密", emoji: "🏰" },
    { id: "glass-floor", title: "高空玻璃走廊", emoji: "🪟" },
    { id: "engine-rooms", title: "蒸汽機房", emoji: "⚙️" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: "🌉 英倫美學 · 泰晤士河畔",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "泰晤士河上的藍色童話：倫敦塔橋",
    subtitle: "深度打卡與高空玻璃走廊攻略",
    date: "June 2026 · 作者：純粹旅人",
    heroCaption: "▲ 落成於 1894 年、結合了維多利亞哥德式城堡與現代懸索橋工藝的工業傑作 —— 倫敦塔橋",
    intro: `如果說大笨鐘代表了倫敦沉穩復古的紳士面貌，那麼橫跨在泰晤士河（River Thames）下游的<strong>倫敦塔橋（Tower Bridge）</strong>，則無疑是這座城市最浪漫的藍色童話。這座擁有兩座宏偉哥德式城堡塔樓、並由標誌性淡藍色鋼鐵骨架連接的巨型開啟橋，落成於 1894 年。每當龐大的橋面在液壓動力驅動下緩緩向兩側高高升起，讓巨大的帆船或遊輪穿過河面，那副畫面完美融合了維多利亞時代的工業力量與英倫美學。`,
    intro2: "今日呢篇 Blog 就帶大家深度走上這座倫敦地標，解鎖它常年被外國旅客誤會的經典趣事，挑戰離地 42 米的高空玻璃走廊，並奉上攝影師私藏的兩大絕佳河畔拍照機位！",
    historyTitle: "🇬🇧 霧都的鋼鐵奇蹟：倫敦塔橋的 3 大歷史秘密",
    mythTitle: "🎵 「London Bridge is Falling Down」唱的其實不是它？",
    mythContent: "這絕對是全倫敦最無奈、最廣為人知的旅遊大誤區！無數人從小聽著英文童謠《倫敦橋倒了》長大，來到這裏看到這座美麗雄偉的雙塔大橋，都會興奮地大喊：「哇！這就是倫敦橋！」—— <strong>錯！這座橋叫「倫敦塔橋」（Tower Bridge）</strong>。至於真正的「倫敦橋 (London Bridge)」，其實位於它的上游不遠處，外觀非常樸素，只是一座普通的現代水泥平橋。據說當年曾有位美國富豪出高價買下舊倫敦橋打算運回美國，運到之後才發現自己誤把樸素的倫敦橋當成了精美的倫敦塔橋，成為一時笑談。",
    glassTitle: "1. 離地 42 米的刺激體驗 —— 高空玻璃走廊（The Glass Floor）",
    glassContent: "來到塔橋，除了在下層的行人路漫步，你還可以買票進入塔橋內部，乘搭電梯登上連接兩座塔樓的<strong>高空露天雙層人行天橋</strong>。幾年前，這裏鋪設了一段長 11 米、寬 1.8 米的<strong>全透明玻璃走廊</strong>！站在離地 42 米、清澈透光的玻璃上，你可以徹底俯瞰腳下泰晤士河上穿梭的遊船，以及像火柴盒一樣駛過的倫敦紅色雙層巴士和黑色計程車，刺激感滿分！",
    engineTitle: "2. 維多利亞時代的黑色心臟 —— 蒸汽機房（Engine Rooms）",
    engineContent: "在參觀完玻璃走廊後，順著指定路線下塔，你會來到位於橋底南岸的「維多利亞蒸汽機房」。在古代，塔橋重達上千噸的巨大橋面能夠在短短一分鐘內完全升起，全靠這裏巨大的燃煤蒸汽機驅動液壓系統。如今這裡完整保留了當年精美、擦得鋥亮的巨大齒輪、燃煤爐和蒸汽泵，散發著強烈的工業「蒸汽龐克（Steampunk）」美學，非常值得一看。",
    internalCaption: "▲ 南岸草地是攝影師最愛的私藏機位，最能拍出悠閒與宏偉的強烈對比",
    photoTitle: "📸 攝影師指南：如何拍出刷爆社交媒體的塔橋大片",
    photoIntro: "倫敦塔橋體積極其龐大，站在橋上很難拍全它的全貌。想要拍出高級的同框照，這兩個位於河岸兩側的機位才是精華：",
    spot1Title: "南岸綠茵野餐位 —— 倫敦市政廳（City Hall）草地：",
    spot1Content: "從倫敦塔橋順著南岸步道步行 2 分鐘，來到這片寬闊的斜坡綠草地。你可以隨意坐或躺在草地上，將相機放低，利用綠草作為前景仰拍。這裡剛好可以完整地拍到塔橋最完美的正面斜對角全景，是拍攝文藝感網美大片的無冕之王。",
    spot2Title: "北岸完美幾何相框 —— 倫敦塔古老石拱門（Tower of London Wall)：",
    spot2Content: "走到北岸鄰近歷史悠久的「倫敦塔」古城堡外牆。這裏有一排古老的中世紀石頭拱窗。你可以在拱窗前駐足，利用黑暗的古老石磚作為天然的對稱相框，將外面現代亮麗、淡藍色的倫敦塔橋精緻地框在正中央，拍出極具歷史穿越感的視覺大片。",
    tipsTitle: "倫敦塔橋 旅遊實用小貼士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "普通過橋完全免費！登頂才需買票：",
    tip1Content: "如果你只是想從橋上的行人路走過去、或者跟塔橋合照，這裏是<strong>完全免費、24小時開放的交通要道</strong>。只有你想登上塔樓、走高空玻璃走廊以及參觀蒸汽機房，才需要購買官方的 \"Tower Bridge Ticket\"（成人票約 12-13 英鎊），建議提前在官網預約定時門票。",
    tip2Emoji: "⏰",
    tip2Title: "查看「開橋時間表 (Bridge Lift Times)」：",
    tip2Content: "倫敦塔橋至今仍然是一座運作中的開啟橋！平均每週會有幾次因為大型船隻通過而「開橋」。大橋打開的過程非常壯觀，兩岸會臨時交通管制，所有的巴士汽車會停下來靜靜等待。出發前強烈建議去<strong>倫敦塔橋官方網站查看當天的 Bridge Lift Times</strong>，如果能碰上開橋的瞬間，絕對是旅程中最幸運的事！",
    tip3Emoji: "🌬️",
    tip3Title: "小心河畔妖風與溫差：",
    tip3Content: "泰晤士河畔常年風力極其強勁（特別是站在橋中央以及高空天橋上），即使是夏天，風吹過來也帶有絲絲涼意。出發前往塔橋拍照時，請務必帶備一件防風外套，不然分分鐘會被吹到頭痛。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "乘搭倫敦地鐵 Circle 或 District 線至 <strong>Tower Hill（倫敦塔站）</strong>。出站後順著指示牌穿過歷史悠久的倫敦塔古堡花園，步行約 5-8 分鐘即可直接來到大橋的北岸起點。",
    info1Label: "📍 地址",
    info1Content: "Tower Bridge Rd, London SE1 2UP",
    info2Label: "🕐 開放時間",
    info2Content: "9:30-17:30（登塔）",
    info3Label: "💰 費用",
    info3Content: "成人約 £12-13",
    info4Label: "🚇 交通",
    info4Content: "地鐵 Tower Hill 站",
    tocTitle: "目錄導覽",
  },
  "zh-CN": {
    meta: "🌉 英伦美学 · 泰晤士河畔",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "泰晤士河上的蓝色童话：伦敦塔桥",
    subtitle: "深度打卡与高空玻璃走廊攻略",
    date: "June 2026 · 作者：纯粹旅人",
    heroCaption: "▲ 落成于 1894 年、结合了维多利亚哥德式城堡与现代悬索桥工艺的工业杰作 —— 伦敦塔桥",
    intro: `如果说大笨钟代表了伦敦沉稳复古的绅士面貌，那么横跨在泰晤士河（River Thames）下游的<strong>伦敦塔桥（Tower Bridge）</strong>，无疑是这座城市最浪漫的蓝色童话。这座拥有两座宏伟哥德式城堡塔楼、并由标志性淡蓝色钢铁骨架连接的巨型开启桥，落成于 1894 年。每当庞大的桥面在液压动力驱动下缓缓向两侧高高升起，让巨大的帆船或游轮穿过河面，那副画面完美融合了维多利亚时代的工业力量与英伦美学。`,
    intro2: "今天这篇 Blog 就带大家深度走上这座伦敦地标，解锁它常年被外国旅客误会的经典趣事，挑战离地 42 米的高空玻璃走廊，并送上摄影师私藏的两大绝佳河畔拍照机位！",
    historyTitle: "🇬🇧 雾都的钢铁奇迹：伦敦塔桥的 3 大历史秘密",
    mythTitle: "🎵 「London Bridge is Falling Down」唱的其实不是它？",
    mythContent: "这绝对是全伦敦最无奈、最广为人知的旅游大误区！无数人从小听着英文童谣《伦敦桥倒了》长大，来到这里看到这座美丽雄伟的双塔大桥，都会兴奋地大喊：「哇！这就是伦敦桥！」—— <strong>错！这叫「伦敦塔桥」（Tower Bridge）</strong>。至于真正的「伦敦桥 (London Bridge)」，其实位于它的上游不远处，外观非常朴素，只是一座普通的现代水泥平桥。据说当年曾有位美国富豪出高价买下旧伦敦桥打算运回美国，运到之后才发现自己误把朴素的伦敦桥当成了精美的伦敦塔桥，成为一时笑谈。",
    glassTitle: "1. 离地 42 米的刺激体验 —— 高空玻璃走廊（The Glass Floor）",
    glassContent: "来到塔桥，除了在下层的行人路漫步，你还可以买票进入塔桥内部，搭乘电梯登上连接两座塔楼的<strong>高空露天双层人行天桥</strong>。几年前，这里铺设了一段长 11 米、宽 1.8 米的<strong>全透明玻璃走廊</strong>！站在离地 42 米、清澈透光的玻璃上，你可以彻底俯瞰脚下泰晤士河上穿梭的游船，以及像火柴盒一样驶过的伦敦红色双层巴士和黑色出租车，刺激感满分！",
    engineTitle: "2. 维多利亚时代的黑色心脏 —— 蒸汽机房（Engine Rooms）",
    engineContent: "在参观完玻璃走廊后，顺着指定路线下塔，你会来到位于桥底南岸的「维多利亚蒸汽机房」。在古代，塔桥重达上千吨的巨大桥面能够在一分钟内完全升起，全靠这里巨大的燃煤蒸汽机驱动液压系统。如今这里完整保留了当年精美、擦得锃亮的巨大齿轮、燃煤炉和蒸汽泵，散发着强烈的工业「蒸汽朋克（Steampunk）」美学，非常值得一看。",
    internalCaption: "▲ 南岸草地是摄影师最爱的私藏机位，最能拍出悠闲与宏伟的强烈对比",
    photoTitle: "📸 摄影师指南：如何拍出刷爆社交媒体的塔桥大片",
    photoIntro: "伦敦塔桥体积极其庞大，站在桥上很难拍全它的全貌。想要拍出高级的同框照，这两个位于河岸两侧的机位才是精华：",
    spot1Title: "南岸绿茵野餐位 —— 伦敦市政厅（City Hall）草地：",
    spot1Content: "从伦敦塔桥顺着南岸步道步行 2 分钟，来到这片宽阔的斜坡绿地。你可以随意坐或躺在草地上，将相机放低，利用绿草作为前景仰拍。这里刚好可以完整地拍到塔桥最完美的正面斜对角全景，是拍摄文艺感网红大片的的无冕之王。",
    spot2Title: "北岸完美几何相框 —— 伦敦塔古老石拱门（Tower of London Wall)：",
    spot2Content: "走到北岸邻近历史悠久的「伦敦塔」古城堡外墙。这里有一排古老的中世纪石头拱窗。你可以在拱窗前驻足，利用黑暗的古老石砖作为天然的对称相框，将外面现代亮丽、淡蓝色的伦敦塔桥精致地框在正中央，拍出极具历史穿越感的视觉大片。",
    tipsTitle: "伦敦塔桥 旅游实用小贴士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "普通过桥完全免费！登顶才需买票：",
    tip1Content: "如果你只是想从桥上的行人路走过去、或者跟塔桥合照，这里是<strong>完全免费、24小时开放的交通要道</strong>。只有你想登上塔楼、走高空玻璃走廊以及参观蒸汽机房，才需要购买官方的 \"Tower Bridge Ticket\"（成人票约 12-13 英镑），建议提前在官网预约定时门票。",
    tip2Emoji: "⏰",
    tip2Title: "查看「开桥时间表 (Bridge Lift Times)」：",
    tip2Content: "伦敦塔桥至今仍然是一座运作中的开启桥！平均每周会有几次因为大型船只通过而「开桥」。大桥打开的过程非常壮观，两岸会临时交通管制，所有的巴士汽车会停下来静静等待。出发前强烈建议去<strong>伦敦塔桥官方网站查看当天的 Bridge Lift Times</strong>，如果能碰上开桥的瞬间，绝对是旅程中最幸运的事！",
    tip3Emoji: "🌬️",
    tip3Title: "小心河畔妖风与温差：",
    tip3Content: "泰晤士河畔常年风力极其强劲（特别是站在桥中央以及高空天桥上），即使是夏天，风吹过来也带有丝丝凉意。出发前往塔桥拍照时，请务必带备一件防风外套，不然分分钟会被吹到头痛。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "乘坐伦敦地铁 Circle 或 District 线至 <strong>Tower Hill（伦敦塔站）</strong>。出站后顺着指示牌穿过历史悠久的伦敦塔古堡花园，步行约 5-8 分钟即可直接来到大桥的北岸起点。",
    info1Label: "📍 地址",
    info1Content: "Tower Bridge Rd, London SE1 2UP",
    info2Label: "🕐 开放时间",
    info2Content: "9:30-17:30（登塔）",
    info3Label: "💰 费用",
    info3Content: "成人约 £12-13",
    info4Label: "🚇 交通",
    info4Content: "地铁 Tower Hill 站",
    tocTitle: "目录导览",
  },
  en: {
    meta: "🌉 British Aesthetics · Thames Riverside",
    backText: "← Back to Newsflow",
    blogText: "| Blog",
    title: "The Blue Fairy Tale on the Thames: London Tower Bridge",
    subtitle: "Complete Guide: Glass Floor Walkway & Photo Spots",
    date: "June 2026 · Author: Pure Traveler",
    heroCaption: "▲ Completed in 1894, combining Victorian Gothic castle towers with modern suspension bridge engineering — London Tower Bridge",
    intro: `If Big Ben represents London's dignified vintage gentleman, then the <strong>Tower Bridge</strong> spanning the lower Thames is undoubtedly this city's most romantic blue fairy tale. This massive bascule bridge with two magnificent Gothic castle towers connected by iconic light blue steel framework was completed in 1894. When the enormous bridge deck slowly rises on both sides powered by hydraulic pressure, allowing giant sailing ships or cruise liners to pass through, the scene perfectly blends Victorian industrial power with British aesthetics.`,
    intro2: "Today this Blog takes you deep onto this London landmark, unlocking popular tourist misconceptions, challenging the 42-meter-high glass floor walkway, and sharing two secret riverside photo spots!",
    historyTitle: "🇬🇧 Steel Miracle in the Fog City: 3 Historical Secrets of Tower Bridge",
    mythTitle: "🎵 Is 'London Bridge is Falling Down' NOT About This Bridge?",
    mythContent: "This is definitely London's most无奈、最 widespread tourist misconception! Countless people grew up hearing the English nursery rhyme 'London Bridge is Falling Down,' and when they see this beautiful twin-tower bridge, they excitedly shout: 'Wow! This is London Bridge!' — <strong>Wrong! This bridge is called 'Tower Bridge'</strong>. As for the real 'London Bridge,' it actually sits upstream — a plain modern concrete flat bridge. Legend has it an American tycoon once paid a high price to buy the old London Bridge and ship it to America, only to discover he'd mistaken the plain bridge for the elaborate Tower Bridge!",
    glassTitle: "1. 42-Meter Thrill — The Glass Floor Walkway",
    glassContent: "Beyond walking on the lower pedestrian walkway, you can buy a ticket to enter Tower Bridge and take the elevator to the <strong>high-altitude open-air double-decker pedestrian bridge</strong> connecting the two towers. A few years ago, an <strong>11-meter-long, 1.8-meter-wide fully transparent glass floor</strong> was installed! Standing on the 42-meter-high crystal-clear glass, you can completely overlook cruise ships shuttling on the Thames below, and London red double-decker buses and black taxis looking like toy cars — thrilling beyond measure!",
    engineTitle: "2. Victorian Era's Black Heart — Engine Rooms",
    engineContent: "After visiting the glass floor, follow the route down to the bridge, and you'll reach the 'Victorian Engine Rooms' on the south bank below the bridge. In ancient times, the bridge's massive deck weighing over a thousand tons could fully open within one minute, all powered by huge coal-fired steam engines driving the hydraulic system. Today the beautifully polished giant gears, coal furnaces, and steam pumps are completely preserved, radiating strong industrial 'Steampunk' aesthetics — very worth seeing!",
    internalCaption: "▲ South bank grass is photographers' favorite secret spot, best for capturing the stark contrast between tranquility and grandeur",
    photoTitle: "📸 Photographer's Guide: How to Shoot Viral Tower Bridge Photos",
    photoIntro: "Tower Bridge is enormous, and standing on it makes it hard to capture its full scope. To get stunning photos, these two riverside spots are the essence:",
    spot1Title: "South Bank Green Picnic Spot — City Hall Grass:",
    spot1Content: "Walk 2 minutes from Tower Bridge along the south bank walkway to this wide sloping green grass. Sit or lie on the grass and place your camera low, using the green as a foreground for upward shots. Here you can perfectly capture the bridge's ideal front diagonal panorama — the undisputed king for artistic Instagram shots.",
    spot2Title: "North Bank Perfect Geometric Frame — Tower of London Stone Arch:",
    spot2Content: "Walk to the north bank near the historic 'Tower of London' castle exterior. Here there's a row of ancient medieval stone arched windows. Stand before the archway and use the dark ancient stone bricks as a natural symmetrical frame, placing the modern, beautiful light blue Tower Bridge perfectly centered — creating a historically transcendent visual masterpiece.",
    tipsTitle: "Tower Bridge Travel Tips",
    tip1Emoji: "🎟️",
    tip1Title: "Crossing is FREE! Only pay to go up:",
    tip1Content: "If you just want to walk across the pedestrian walkway or take photos with the bridge, it's <strong>completely free, open 24 hours</strong>. Only if you want to climb the towers, walk the glass floor, and visit the Engine Rooms do you need to buy the official 'Tower Bridge Ticket' (about £12-13 for adults). Book timed tickets in advance on the website.",
    tip2Emoji: "⏰",
    tip2Title: "Check 'Bridge Lift Times':",
    tip2Content: "Tower Bridge is still an operating bascule bridge! Several times per week on average, the bridge 'opens' for large ships to pass. The process is spectacular — all traffic is temporarily halted while buses and cars wait quietly. Before departing, strongly recommend checking the <strong>Tower Bridge official website for today's Bridge Lift Times</strong>. If you catch a bridge lift, it's the luckiest moment of your trip!",
    tip3Emoji: "🌬️",
    tip3Title: "Beware Riverside Winds & Temperature Changes:",
    tip3Content: "The Thames riverside has extremely strong winds year-round (especially standing in the bridge center and high walkway). Even in summer, the wind carries chills. When heading to Tower Bridge for photos, please bring a windbreaker, or you might literally get a headache from the wind!",
    tip4Emoji: "🚇",
    tip4Title: "Getting There:",
    tip4Content: "Take London Underground Circle or District line to <strong>Tower Hill station</strong>. Exit and follow signs through the historic Tower of London castle gardens, about 5-8 minutes walk to the north bank entrance of the bridge.",
    info1Label: "📍 Address",
    info1Content: "Tower Bridge Rd, London SE1 2UP",
    info2Label: "🕐 Hours",
    info2Content: "9:30-17:30 (Tower)",
    info3Label: "💰 Price",
    info3Content: "Adults approx £12-13",
    info4Label: "🚇 Transport",
    info4Content: "Tube Tower Hill",
    tocTitle: "Table of Contents",
  },
  yue: {
    meta: "🌉 英倫美學 · 泰晤士河畔",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "泰晤士河上的藍色童話：倫敦塔橋",
    subtitle: "深度打卡與高空玻璃走廊攻略",
    date: "June 2026 · 作者：純粹旅人",
    heroCaption: "▲ 落成於 1894 年、結合了維多利亞哥德式城堡與現代懸索橋工藝的工業傑作 —— 倫敦塔橋",
    intro: `如果話大笨鐘代表咗倫敦沉穩復古的紳士面貌，咁橫跨响泰晤士河（River Thames）下游的<strong>倫敦塔橋（Tower Bridge）</strong>，則無疑係呢座城市最浪漫的藍色童話。呢座擁有兩座宏偉哥德式城堡塔樓、並由標誌性淡藍色鋼鐵骨架連接的巨型開啟橋，落成於 1894 年。每當龐大的橋面响液壓動力驅動下緩緩向兩側高高升起，讓巨大的帆船或遊輪穿過河面，嗰副畫面完全融合咗維多利亞時代的工業力量與英倫美學。`,
    intro2: "今日呢篇 Blog 就帶大家深度走上呢座倫敦地標，解鎖佢常年被外國旅客誤會的經典趣事，挑戰離地 42 米的高空玻璃走廊，並奉上攝影師私藏的兩大絕佳河畔拍照機位！",
    historyTitle: "🇬🇧 霧都的鋼鐵奇蹟：倫敦塔橋的 3 大歷史秘密",
    mythTitle: "🎵 「London Bridge is Falling Down」唱嘅其實唔係佢？",
    mythContent: "呢個絕對係全倫敦最無奈、最廣為人知的旅遊大誤區！無數人從小聽著英文童謠《倫敦橋倒咗》長大，來到呢度睇到呢座美麗雄偉的雙塔大橋，都會興奮地大喊：「哇！呢個就係倫敦橋！」—— <strong>錯！呢座橋叫「倫敦塔橋」（Tower Bridge）</strong>。至於真正的「倫敦橋 (London Bridge)」，其實位於佢的上游不遠處，外觀非常樸素，只係一座普通的現代水泥平橋。據說當年曾有位美國富豪出高價買下舊倫敦橋打算運回美國，運到之後先發現自己誤把樸素的倫敦橋當成咗精美的倫敦塔橋，成為一時笑談。",
    glassTitle: "1. 離地 42 米的刺激體驗 —— 高空玻璃走廊（The Glass Floor）",
    glassContent: "來到塔橋，除咗响下層的行人路漫步，你仲可以買飛進入塔橋內部，乘搭電梯登上連接兩座塔樓的<strong>高空露天雙層人行天橋</strong>。幾年前，呢度鋪設咗一段長 11 米、寬 1.8 米的<strong>全透明玻璃走廊</strong>！站在離地 42 米、清澈透光的玻璃上，你可以完全俯瞰腳下泰晤士河上穿梭的遊船，以及似火柴盒一樣駛過的倫敦紅色雙層巴士和黑色計程車，刺激感滿分！",
    engineTitle: "2. 維多利亞時代的黑色心臟 —— 蒸汽機房（Engine Rooms）",
    engineContent: "响參觀完玻璃走廊後，順著指定路線落塔，你會來到位於橋底南岸的「維多利亞蒸汽機房」。响古代，塔橋重達上千噸的巨大橋面能夠响短短一分鐘內完全升起，全靠呢度巨大的燃煤蒸汽機驅動液壓系統。如今呢度完整保留咗當年精美、擦得鋥亮的巨大齒輪、燃煤爐和蒸汽泵，散發著強烈的工業「蒸汽龐克（Steampunk）」美學，非常值得一看。",
    internalCaption: "▲ 南岸草地係攝影師最愛的私藏機位，最能影出悠閒與宏偉的強烈對比",
    photoTitle: "📸 攝影師指南：如何影出刷爆社交媒體的塔橋大片",
    photoIntro: "倫敦塔橋體積極其龐大，站在橋上很難影全佢的全貌。想要影出高級的同框照，呢兩個位於河岸兩側的機位先至係精華：",
    spot1Title: "南岸綠茵野餐位 —— 倫敦市政廳（City Hall）草地：",
    spot1Content: "從倫敦塔橋順著南岸步道行 2 分鐘，來到呢片寬闊的斜坡綠草地。你可以隨意坐或躺在草地上，將相機放低，利用綠草作為前景仰拍。呢度剛好可以完整地影到塔橋最完美的正面斜對角全景，係拍攝文藝感網美大片的無冕之王。",
    spot2Title: "北岸完美幾何相框 —— 倫敦塔古老石拱門（Tower of London Wall)：",
    spot2Content: "行到北岸鄰近歷史悠久的「倫敦塔」古城堡外牆。呢度有一排古老的中世紀石頭拱窗。你可以响拱窗前駐足，利用黑暗的古老石磚作為天然的對稱相框，將外面現代亮麗、淡藍色的倫敦塔橋精緻地框响正中央，影出極具歷史穿越感的視覺大片。",
    tipsTitle: "倫敦塔橋 旅遊實用小貼士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "普通過橋完全免費！登頂先至需買飛：",
    tip1Content: "如果你淨係想從橋上的行人路行過去、或者同塔橋合照，呢度係<strong>完全免費、24小時開放的交通要道</strong>。只有你想登上塔樓、行高空玻璃走廊以及參觀蒸汽機房，先至需要購買官方的 \"Tower Bridge Ticket\"（成人飛約 12-13 英鎊），建議提前响官網預約定時門票。",
    tip2Emoji: "⏰",
    tip2Title: "查看「開橋時間表 (Bridge Lift Times)」：",
    tip2Content: "倫敦塔橋至今仍然係一座運作中的開啟橋！平均每週會有幾次因為大型船隻通過而「開橋」。大橋打開的過程非常壯觀，兩岸會臨時交通管制，所有的巴士汽車會停下來靜靜等待。出發前強烈建議去<strong>倫敦塔橋官方網站查看當天的 Bridge Lift Times</strong>，如果能碰上開橋的瞬間，絕對係旅程中最幸運的事！",
    tip3Emoji: "🌬️",
    tip3Title: "小心河畔妖風與溫差：",
    tip3Content: "泰晤士河畔常年風力極其強勁（特別係站在橋中央以及高空天橋上），即使係夏天，風吹過來都帶有絲絲涼意。出發前往塔橋影相時，請務必帶備一件防風外套，否則分分鐘會被吹到頭痛。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "乘搭倫敦地鐵 Circle 或 District 線至 <strong>Tower Hill（倫敦塔站）</strong>。出站後順著指示牌穿過歷史悠久的倫敦塔古堡花園，行約 5-8 分鐘即可直接來到大橋的北岸起點。",
    info1Label: "📍 地址",
    info1Content: "Tower Bridge Rd, London SE1 2UP",
    info2Label: "🕐 開放時間",
    info2Content: "9:30-17:30（登塔）",
    info3Label: "💰 費用",
    info3Content: "成人約 £12-13",
    info4Label: "🚇 交通",
    info4Content: "地鐵 Tower Hill 站",
    tocTitle: "目錄導覽",
  },
};

export default function TowerBridgePage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("history");

  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            📋 {c.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200 hover:text-white hover:bg-blue-800/80"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-blue-800/50 px-4 py-2 rounded-full hover:bg-blue-700/50"
        >
          {c.backText}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          {c.blogText}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            {c.meta}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            {c.title}
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-blue-300">{c.date}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-300 text-sm mb-12">
          {c.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="history" dangerouslySetInnerHTML={{ __html: c.intro }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro2 }} />

          <h2>{c.historyTitle}</h2>

          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.mythTitle}
            </h4>
            <p className="text-blue-100" dangerouslySetInnerHTML={{ __html: c.mythContent }} />
          </div>

          <h3 id="glass-floor">{c.glassTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: c.glassContent }} />

          <h3 id="engine-rooms">{c.engineTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: c.engineContent }} />

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1200&q=80"
              alt={c.title}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-blue-300 text-sm mt-4 mb-8">
              {c.internalCaption}
            </p>
          </div>

          <h2 id="photo-spots">{c.photoTitle}</h2>
          <p>{c.photoIntro}</p>
          <ul className="space-y-4 text-blue-100">
            <li className="flex gap-3">
              <span className="text-blue-400 text-xl">📍</span>
              <span><strong>{c.spot1Title}</strong><br/>{c.spot1Content}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 text-xl">📍</span>
              <span><strong>{c.spot2Title}</strong><br/>{c.spot2Content}</span>
            </li>
          </ul>

          <div id="tips" className="bg-gradient-to-br from-blue-900/60 to-cyan-900/50 border border-blue-400/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.tipsTitle}
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex gap-3">
                <span className="text-blue-400">{c.tip1Emoji}</span>
                <span><strong>{c.tip1Title}</strong>{c.tip1Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">{c.tip2Emoji}</span>
                <span><strong>{c.tip2Title}</strong>{c.tip2Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">{c.tip3Emoji}</span>
                <span><strong>{c.tip3Title}</strong>{c.tip3Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">{c.tip4Emoji}</span>
                <span><strong>{c.tip4Title}</strong>{c.tip4Content}</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">{c.info1Label}</span>
              <p className="text-blue-100 text-sm mt-1">{c.info1Content}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">{c.info2Label}</span>
              <p className="text-blue-100 text-sm mt-1">{c.info2Content}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">{c.info3Label}</span>
              <p className="text-blue-100 text-sm mt-1">{c.info3Content}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-blue-900/60 rounded-xl p-4 border border-blue-700/50">
              <span className="text-blue-400 font-bold">{c.info4Label}</span>
              <p className="text-blue-100 text-sm mt-1">{c.info4Content}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="tower-bridge" />
    </div>
  );
}