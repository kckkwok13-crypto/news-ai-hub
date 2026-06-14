"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState, useEffect } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";
import TravelLanguageSelector from "../../components/TravelLanguageSelector";
import { getTranslation, TravelLanguage } from "../../data/travelTranslations";

const tocItems = {
  yue: [
    { id: "intro", title: "介紹", emoji: "🏰" },
    { id: "history", title: "千年歷史", emoji: "🔑" },
    { id: "architecture", title: "建築亮點", emoji: "🧱" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🏰" },
    { id: "history", title: "千年歷史", emoji: "🔑" },
    { id: "architecture", title: "建築亮點", emoji: "🧱" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🏰" },
    { id: "history", title: "千年历史", emoji: "🔑" },
    { id: "architecture", title: "建筑亮点", emoji: "🧱" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🏰" },
    { id: "history", title: "Millennium History", emoji: "🔑" },
    { id: "architecture", title: "Architecture", emoji: "🧱" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
};

const currentTags = ["薩爾茨堡", "奧地利", "城堡", "打卡"];

const tContent = {
  yue: {
    region: "🇦🇹 奧地利 · 薩爾茨堡",
    title: "俯瞰莫扎特故鄉的天際線",
    subtitle: "薩爾茨堡城堡（Hohensalzburg Fortress）深度遊覽全攻略",
    author: "作者：純粹旅人",
    backHome: "← 返回 NewsFlow",
    tocTitle: "📋 目錄導覽",
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    hours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    duration: "⏱️ 建議遊覽",
    ratingTitle: "⭐ 俾呢個景點評分",
    shareTitle: "📤 分享畀朋友",
    favoriteText: "加入心願清單：",
    heroCaption: "▲ 俯瞰薩爾茨堡舊城區的宏偉城堡，聳立於城北山丘之上超過900年",
    introP1: "佇立於薩爾茨堡城北山丘之上，俯瞰著莫扎特故鄉的天際線，<strong>薩爾茨堡城堡（Hohensalzburg Fortress）</strong>猶如一隻沉睡的巨龍，守望著這座被阿爾卑斯山脈環繞的千年古城。這座始建於<strong>公元1077年</strong>的中世紀堡壘，是中歐最大、保存最完好的城堡之一。",
    introP2: "城堡依山而建，佔據了整個山頭，遠眺如同一頂金色的皇冠。無論是從城堡俯瞰薩爾茨堡全景，還是漫步於城堡厚重的城牆之間，都能感受到這座「永不陷落之城」的歷史氣息。",
    historyTitle: "⏰ 跨越千年的守望：薩爾茨堡城堡的 4 大歷史篇章",
    historyP1: "薩爾茨堡城堡由當時的總主教格布哈德·馮·霍赫斯塔特下令興建，目的是抵禦外部威脅並展示教會的世俗權力。在接下來的400多年間，城堡不斷擴建，逐漸成為薩爾茨堡總主教最重要的根據地與權力象徵。",
    historyP2: "15世紀末至16世紀初，城堡迎來了最繁榮的時期。1500年，總主教萊昂哈德·馮·基希斯豪森對城堡進行了大規模改造，建造了著名的「金牛」（Golden Roof）。",
    fortressFact: "✨ 建築奇蹟：900年未被攻破的防禦工事！薩爾茨堡城堡歷史上從未被任何軍隊攻破！這要歸功於其獨特的地理優勢——三面懸崖、一面深溝，以及厚達5米的城牆。",
    historyP3: "1800年，拿破崙的軍隊首次包圍了薩爾茨堡城堡。雖然城堡最終向法軍投降，但這是城堡歷史上唯一一次被外軍佔領的記錄。",
    historyP4: "20世紀初，城堡被改建為博物館，並於1996年與薩爾茨堡舊城區一同被聯合國教科文組織列為世界文化遺產。如今，城堡每年吸引超過30萬遊客前來參觀。",
    archTitle: "🧱 必看亮點：城堡建築與內部設施",
    archIntro: "薩爾茨堡城堡佔地面積達30,000平方米，擁有花園、教堂、博物館、展覽廳等多種設施。",
    goldenRoof: "金牛（Golden Roof）",
    goldenRoofP: "建於1500年的金牛是城堡最具標誌性的建築元素。這座2.5米寬、1米深的鍍金陽台由總主教萊昂哈德·馮·基希斯豪森下令建造，用於慶祝其就任總主教10週年。",
    imgCaption: "▲ 城堡內院與聖喬治禮拜堂，融合哥德式與文藝復興風格的華麗裝飾",
    museumTitle: "城堡博物館",
    museumIntro: "城堡內設有多個主題博物館，包括：",
    museum1: "<strong>皇家公寓（Royal Apartments）</strong>：展示中世紀貴族的生活場景",
    museum2: "<strong>兵器博物館（Armoury）</strong>：收藏了超過200件中世紀武器與盔甲",
    museum3: "<strong>木偶博物館（Puppet Museum）</strong>：展出從16世紀到現代的各式木偶",
    museum4: "<strong>恐龍與礦物展</strong>：展示當地發現的恐龍化石與珍貴礦物",
    churchTitle: "城堡教堂（Castle Church）",
    churchP: "建於16世紀的城堡教堂是城堡的精神中心。教堂採用了哥德式與文藝復興風格混合的建築設計，內部裝飾華麗，值得細細品味。",
    funicularTitle: "城堡纜車（Funicular Railway）",
    funicularP: "這條建於1892年的山地纜車從山腳直達城堡大門，全長約200米，垂直落差約75米。纜車每5分鐘一班，單程約需1分鐘。",
    photoTitle: "📸 攝影師私藏：薩爾茨堡城堡 4 大終極打卡機位",
    spot1Title: "① 城堡花園觀景台——經典城堡全景",
    spot1P: "進入城堡後，沿著主通道走到盡頭，就是城堡花園。這裡設有多個觀景台，可以俯瞰整個薩爾茨堡舊城區與遠處的阿爾卑斯山脈。建議在清晨或傍晚拍攝。",
    spot2Title: "② 城牆東北角——城堡與雪山同框",
    spot2P: "沿著城堡外牆走到東北角，這裡可以將城堡建築與背景中的阿爾卑斯山脈一同收入鏡頭。使用廣角鏡頭拍攝，可以獲得極具衝擊力的畫面。",
    spot3Title: "③ 城堡纜車站平台——上下山的電影感",
    spot3P: "乘坐纜車上山時，在纜車即將到達城堡站時回望，可以拍到纜車纜繩與薩爾茨堡城市天際線的完美結合。",
    spot4Title: "④ 舊城區仰望——仰視城堡雄姿",
    spot4P: "走下山後，在舊城區的馬卡特廣場或糧食大街抬頭仰望城堡。使用長焦鏡頭壓縮透視，可以拍出城堡巍峨聳立的震撼畫面。",
    tipsTitle: "💡 薩爾茨堡城堡 旅遊實用小貼士",
    tip1Label: "門票資訊",
    tip1P: "城堡有多種票種可選，包括纜車來回 + 城堡參觀、僅城堡參觀。建議提前在官網預訂。成人標準票約 €15-20 起。",
    tip2Label: "開放時間",
    tip2P: "城堡全年開放，夏季（4月-10月）為 09:00-19:00，冬季（11月-3月）為 09:30-17:00。",
    tip3Label: "最佳拍攝時間",
    tip3P: "建議在清晨或黃昏前來拍攝。清晨遊客稀少，黃昏則可以拍到城堡亮燈的夢幻夜景。",
    tip4Label: "交通方式",
    tip4P: "從薩爾茨堡火車總站乘搭1號、2號或3號有軌電車至 Mozartsteg 站，然後步行至城堡纜車站。",
    tip5Label: "步行登山",
    tip5P: "如果不乘纜車，也可以沿著城堡步道徒步上山，全程約需15-20分鐘。",
    addressValue: "Mönchsberg 34, 5020 Salzburg, Austria",
    hours24: "夏季 09:00-19:00 / 冬季 09:30-17:00",
    feeValue: "纜車+城堡 約 €15-20 起 / 僅城堡 約 €10-15",
    ratingValue: "4.7/5.0（42,567 評論）",
    transportValue: "有軌電車至 Mozartsteg 站",
    durationValue: "3-4小時",
    shareTitleText: "🏰 俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡深度遊覽全攻略",
  },
  "zh-TW": {
    region: "🇦🇹 奧地利 · 薩爾茨堡",
    title: "俯瞰莫扎特故鄉的天際線",
    subtitle: "薩爾茨堡城堡（Hohensalzburg Fortress）深度遊覽全攻略",
    author: "作者：純粹旅人",
    backHome: "← 返回 NewsFlow",
    tocTitle: "📋 目錄導覽",
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    hours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    duration: "⏱️ 建議遊覽",
    ratingTitle: "⭐ 給這個景點評分",
    shareTitle: "📤 分享給朋友",
    favoriteText: "加入心願清單：",
    heroCaption: "▲ 俯瞰薩爾茨堡舊城區的宏偉城堡，聳立於城北山丘之上超過900年",
    introP1: "佇立於薩爾茨堡城北山丘之上，俯瞰著莫扎特故鄉的天際線，<strong>薩爾茨堡城堡（Hohensalzburg Fortress）</strong>猶如一隻沉睡的巨龍，守望著這座被阿爾卑斯山脈環繞的千年古城。這座始建於<strong>公元1077年</strong>的中世紀堡壘，是中歐最大、保存最完好的城堡之一。",
    introP2: "城堡依山而建，佔據了整個山頭，遠眺如同一頂金色的皇冠。無論是從城堡俯瞰薩爾茨堡全景，還是漫步於城堡厚重的城牆之間，都能感受到這座「永不陷落之城」的歷史氣息。",
    historyTitle: "⏰ 跨越千年的守望：薩爾茨堡城堡的 4 大歷史篇章",
    historyP1: "薩爾茨堡城堡由當時的總主教格布哈德·馮·霍赫斯塔特下令興建，目的是抵禦外部威脅並展示教會的世俗權力。在接下來的400多年間，城堡不斷擴建，逐漸成為薩爾茨堡總主教最重要的根據地與權力象徵。",
    historyP2: "15世紀末至16世紀初，城堡迎來了最繁榮的時期。1500年，總主教萊昂哈德·馮·基希斯豪森對城堡進行了大規模改造，建造了著名的「金牛」（Golden Roof）。",
    fortressFact: "✨ 建築奇蹟：900年未被攻破的防禦工事！薩爾茨堡城堡歷史上從未被任何軍隊攻破！這要歸功於其獨特的地理優勢——三面懸崖、一面深溝，以及厚達5米的城牆。",
    historyP3: "1800年，拿破崙的軍隊首次包圍了薩爾茨堡城堡。雖然城堡最終向法軍投降，但這是城堡歷史上唯一一次被外軍佔領的記錄。",
    historyP4: "20世紀初，城堡被改建為博物館，並於1996年與薩爾茨堡舊城區一同被聯合國教科文組織列為世界文化遺產。如今，城堡每年吸引超過30萬遊客前來參觀。",
    archTitle: "🧱 必看亮點：城堡建築與內部設施",
    archIntro: "薩爾茨堡城堡佔地面積達30,000平方米，擁有花園、教堂、博物館、展覽廳等多種設施。",
    goldenRoof: "金牛（Golden Roof）",
    goldenRoofP: "建於1500年的金牛是城堡最具標誌性的建築元素。這座2.5米寬、1米深的鍍金陽台由總主教萊昂哈德·馮·基希斯豪森下令建造，用於慶祝其就任總主教10週年。",
    imgCaption: "▲ 城堡內院與聖喬治禮拜堂，融合哥德式與文藝復興風格的華麗裝飾",
    museumTitle: "城堡博物館",
    museumIntro: "城堡內設有多個主題博物館，包括：",
    museum1: "<strong>皇家公寓（Royal Apartments）</strong>：展示中世紀貴族的生活場景",
    museum2: "<strong>兵器博物館（Armoury）</strong>：收藏了超過200件中世紀武器與盔甲",
    museum3: "<strong>木偶博物館（Puppet Museum）</strong>：展出從16世紀到現代的各式木偶",
    museum4: "<strong>恐龍與礦物展</strong>：展示當地發現的恐龍化石與珍貴礦物",
    churchTitle: "城堡教堂（Castle Church）",
    churchP: "建於16世紀的城堡教堂是城堡的精神中心。教堂採用了哥德式與文藝復興風格混合的建築設計，內部裝飾華麗，值得細細品味。",
    funicularTitle: "城堡纜車（Funicular Railway）",
    funicularP: "這條建於1892年的山地纜車從山腳直達城堡大門，全長約200米，垂直落差約75米。纜車每5分鐘一班，單程約需1分鐘。",
    photoTitle: "📸 攝影師私藏：薩爾茨堡城堡 4 大終極打卡機位",
    spot1Title: "① 城堡花園觀景台——經典城堡全景",
    spot1P: "進入城堡後，沿著主通道走到盡頭，就是城堡花園。這裡設有多個觀景台，可以俯瞰整個薩爾茨堡舊城區與遠處的阿爾卑斯山脈。建議在清晨或傍晚拍攝。",
    spot2Title: "② 城牆東北角——城堡與雪山同框",
    spot2P: "沿著城堡外牆走到東北角，這裡可以將城堡建築與背景中的阿爾卑斯山脈一同收入鏡頭。使用廣角鏡頭拍攝，可以獲得極具衝擊力的畫面。",
    spot3Title: "③ 城堡纜車站平台——上下山的電影感",
    spot3P: "乘坐纜車上山時，在纜車即將到達城堡站時回望，可以拍到纜車纜繩與薩爾茨堡城市天際線的完美結合。",
    spot4Title: "④ 舊城區仰望——仰視城堡雄姿",
    spot4P: "走下山後，在舊城區的馬卡特廣場或糧食大街抬頭仰望城堡。使用長焦鏡頭壓縮透視，可以拍出城堡巍峨聳立的震撼畫面。",
    tipsTitle: "💡 薩爾茨堡城堡 旅遊實用小貼士",
    tip1Label: "門票資訊",
    tip1P: "城堡有多種票種可選，包括纜車來回 + 城堡參觀、僅城堡參觀。建議提前在官網預訂。成人標準票約 €15-20 起。",
    tip2Label: "開放時間",
    tip2P: "城堡全年開放，夏季（4月-10月）為 09:00-19:00，冬季（11月-3月）為 09:30-17:00。",
    tip3Label: "最佳拍攝時間",
    tip3P: "建議在清晨或黃昏前來拍攝。清晨遊客稀少，黃昏則可以拍到城堡亮燈的夢幻夜景。",
    tip4Label: "交通方式",
    tip4P: "從薩爾茨堡火車總站乘搭1號、2號或3號有軌電車至 Mozartsteg 站，然後步行至城堡纜車站。",
    tip5Label: "步行登山",
    tip5P: "如果不乘纜車，也可以沿著城堡步道徒步上山，全程約需15-20分鐘。",
    addressValue: "Mönchsberg 34, 5020 Salzburg, Austria",
    hours24: "夏季 09:00-19:00 / 冬季 09:30-17:00",
    feeValue: "纜車+城堡 約 €15-20 起 / 僅城堡 約 €10-15",
    ratingValue: "4.7/5.0（42,567 評論）",
    transportValue: "有軌電車至 Mozartsteg 站",
    durationValue: "3-4小時",
    shareTitleText: "🏰 俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡深度遊覽全攻略",
  },
  "zh-CN": {
    region: "🇦🇹 奥地利 · 萨尔茨堡",
    title: "俯瞰莫扎特故乡的天际线",
    subtitle: "萨尔茨堡城堡（Hohensalzburg Fortress）深度游览全攻略",
    author: "作者：纯粹旅人",
    backHome: "← 返回 NewsFlow",
    tocTitle: "📋 目录导览",
    infoTitle: "📊 景点资讯一览",
    address: "📍 地址",
    hours: "🕐 开放时间",
    fee: "💰 费用",
    rating: "⭐ 评分",
    transport: "🚇 交通",
    duration: "⏱️ 建议游览",
    ratingTitle: "⭐ 给这个景点评分",
    shareTitle: "📤 分享给朋友",
    favoriteText: "加入心愿清单：",
    heroCaption: "▲ 俯瞰萨尔茨堡旧城区的宏伟城堡，耸立于城北山丘之上超过900年",
    introP1: "伫立于萨尔茨堡城北山丘之上，俯瞰着莫扎特故乡的天际线，<strong>萨尔茨堡城堡（Hohensalzburg Fortress）</strong>犹如一只沉睡的巨龙，守望着这座被阿尔卑斯山脉环绕的千年古城。这座始建于<strong>公元1077年</strong>的中世纪堡垒，是中欧最大、保存最完好的城堡之一。",
    introP2: "城堡依山而建，占据了整个山头，远眺如同一顶金色的皇冠。无论是俯瞰萨尔茨堡全景，还是漫步于城堡厚重的城墙之间，都能感受到这座「永不陷落之城」的历史气息。",
    historyTitle: "⏰ 跨越千年的守望：萨尔茨堡城堡的 4 大历史篇章",
    historyP1: "萨尔茨堡城堡由当时的总主教格布哈德·冯·霍赫斯塔特下令兴建，目的是抵御外部威胁并展示教会的世俗权力。在接下来的400多年间，城堡不断扩建，逐渐成为萨尔茨堡总主教最重要的根据地与权力象征。",
    historyP2: "15世纪末至16世纪初，城堡迎来了最繁荣的时期。1500年，总主教莱昂哈德·冯·基希斯豪森对城堡进行了大规模改造，建造了著名的「金牛」（Golden Roof）。",
    fortressFact: "✨ 建筑奇迹：900年未被攻破的防御工事！萨尔茨堡城堡历史上从未被任何军队攻破！这要归功于其独特的地理优势——三面悬崖、一面深沟，以及厚达5米的城墙。",
    historyP3: "1800年，拿破仑的军队首次包围了萨尔茨堡城堡。虽然城堡最终向法军投降，但这是城堡历史上唯一一次被外军占领的记录。",
    historyP4: "20世纪初，城堡被改建为博物馆，并于1996年与萨尔茨堡旧城区一同被联合国教科文组织列为世界文化遗产。如今，城堡每年吸引超过30万游客前来参观。",
    archTitle: "🧱 必看亮点：城堡建筑与内部设施",
    archIntro: "萨尔茨堡城堡占地面积达30,000平方米，拥有花园、教堂、博物馆、展览厅等多种设施。",
    goldenRoof: "金牛（Golden Roof）",
    goldenRoofP: "建于1500年的金牛是城堡最具标志性的建筑元素。这座2.5米宽、1米深的镀金阳台由总主教莱昂哈德·冯·基希斯豪森下令建造，用于庆祝其就任总主教10周年。",
    imgCaption: "▲ 城堡内院与圣乔治礼拜堂，融合哥特式与文艺复兴风格的华丽装饰",
    museumTitle: "城堡博物馆",
    museumIntro: "城堡内设有多个主题博物馆，包括：",
    museum1: "<strong>皇家公寓（Royal Apartments）</strong>：展示中世纪贵族的生活场景",
    museum2: "<strong>兵器博物馆（Armoury）</strong>：收藏了超过200件中世纪武器与盔甲",
    museum3: "<strong>木偶博物馆（Puppet Museum）</strong>：展出从16世纪到现代的各种木偶",
    museum4: "<strong>恐龙与矿物展</strong>：展示当地发现的恐龙化石与珍贵矿物",
    churchTitle: "城堡教堂（Castle Church）",
    churchP: "建于16世纪的城堡教堂是城堡的精神中心。教堂采用了哥特式与文艺复兴风格混合的建筑设计，内部装饰华丽，值得细细品味。",
    funicularTitle: "城堡缆车（Funicular Railway）",
    funicularP: "这条建于1892年的山地缆车从山脚直达城堡大门，全长约200米，垂直落差约75米。缆车每5分钟一班，单程约需1分钟。",
    photoTitle: "📸 摄影师私藏：萨尔茨堡城堡 4 大终极打卡机位",
    spot1Title: "① 城堡花园观景台——经典城堡全景",
    spot1P: "进入城堡后，沿着主通道走到尽头，就是城堡花园。这里设有多处观景台，可以俯瞰整个萨尔茨堡旧城区与远处的阿尔卑斯山脉。建议在清晨或傍晚拍摄。",
    spot2Title: "② 城墙东北角——城堡与雪山同框",
    spot2P: "沿着城堡外墙走到东北角，这里可以将城堡建筑与背景中的阿尔卑斯山脉一同收入镜头。使用广角镜头拍摄，可以获得极具冲击力的画面。",
    spot3Title: "③ 城堡缆车站平台——上下山的电影感",
    spot3P: "乘坐缆车上山时，在缆车即将到达城堡站时回望，可以拍到缆车缆绳与萨尔茨堡城市天际线的完美结合。",
    spot4Title: "④ 旧城区仰望——仰视城堡雄姿",
    spot4P: "走下山后，在旧城区的马卡特广场或粮食大街抬头仰望城堡。使用长焦镜头压缩透视，可以拍出城堡巍峨耸立的震撼画面。",
    tipsTitle: "💡 萨尔茨堡城堡 旅游实用小贴士",
    tip1Label: "门票资讯",
    tip1P: "城堡有多种票种可选，包括缆车来回 + 城堡参观、仅城堡参观。建议提前在官网预订。成人标准票约 €15-20 起。",
    tip2Label: "开放时间",
    tip2P: "城堡全年开放，夏季（4月-10月）为 09:00-19:00，冬季（11月-3月）为 09:30-17:00。",
    tip3Label: "最佳拍摄时间",
    tip3P: "建议在清晨或黄昏前来拍摄。清晨游客稀少，黄昏则可以拍到城堡亮灯的梦幻夜景。",
    tip4Label: "交通方式",
    tip4P: "从萨尔茨堡火车总站搭乘1号、2号或3号有轨电车至 Mozartsteg 站，然后步行至城堡缆车站。",
    tip5Label: "步行登山",
    tip5P: "如果不乘缆车，也可以沿着城堡步道徒步上山，全程约需15-20分钟。",
    addressValue: "Mönchsberg 34, 5020 Salzburg, Austria",
    hours24: "夏季 09:00-19:00 / 冬季 09:30-17:00",
    feeValue: "缆车+城堡 约 €15-20 起 / 仅城堡 约 €10-15",
    ratingValue: "4.7/5.0（42,567 评论）",
    transportValue: "有轨电车至 Mozartsteg 站",
    durationValue: "3-4小时",
    shareTitleText: "🏰 俯瞰莫扎特故乡的天际线：萨尔茨堡城堡深度游览全攻略",
  },
  en: {
    region: "🇦🇹 Austria · Salzburg",
    title: "The Skyline Over Mozart's Hometown",
    subtitle: "Complete Guide to Hohensalzburg Fortress",
    author: "Author: Pure Traveler",
    backHome: "← Back to NewsFlow",
    tocTitle: "📋 Table of Contents",
    infoTitle: "📊 Attraction Information",
    address: "📍 Address",
    hours: "🕐 Opening Hours",
    fee: "💰 Fee",
    rating: "⭐ Rating",
    transport: "🚇 Transport",
    duration: "⏱️ Suggested Visit",
    ratingTitle: "⭐ Rate this attraction",
    shareTitle: "📤 Share with friends",
    favoriteText: "Add to wishlist:",
    heroCaption: "▲ The majestic fortress overlooking Salzburg's old town, standing on the north hill for over 900 years",
    introP1: "Perched on the northern hill of Salzburg, overlooking the skyline of Mozart's hometown, <strong>Hohensalzburg Fortress</strong> lies like a sleeping dragon, watching over this thousand-year-old city surrounded by the Alps. Built in <strong>1077 AD</strong>, this medieval fortress is one of the largest and best-preserved castles in Central Europe.",
    introP2: "Built against the mountain, the fortress occupies the entire hilltop. Whether gazing at the panoramic view of Salzburg from the castle or walking through its massive walls, you can feel the historical atmosphere of this 'impenetrable city'.",
    historyTitle: "⏰ A Millennium of Vigilance: 4 Historical Chapters of Hohensalzburg",
    historyP1: "Hohensalzburg Fortress was commissioned by Archbishop Gebhard von Hohenzollern to defend against external threats and demonstrate the church's secular power. Over the next 400 years, the castle was continuously expanded, becoming the most important stronghold and symbol of power for the Archbishops of Salzburg.",
    historyP2: "From the late 15th to early 16th century, the fortress experienced its most prosperous period. In 1500, Archbishop Leonhard von Keutschach carried out a major renovation, constructing the famous 'Golden Roof' (Golden Roof / Goldenes Dächel).",
    fortressFact: "✨ Architectural Wonder: 900 years unconquered! Hohensalzburg Fortress has never been captured by any army in history! This is thanks to its unique geographical advantage—three sides of cliffs, one side of a deep moat, and walls up to 5 meters thick.",
    historyP3: "In 1800, Napoleon's army first besieged Hohensalzburg Fortress. Although the fortress eventually surrendered to the French, this was the only time in history that it was occupied by foreign troops.",
    historyP4: "In the early 20th century, the fortress was converted into a museum, and in 1996, it was listed as a UNESCO World Heritage Site together with Salzburg's Old Town. Today, the fortress attracts over 300,000 visitors annually.",
    archTitle: "🧱 Must-See Highlights: Castle Architecture & Facilities",
    archIntro: "Hohensalzburg Fortress covers an area of 30,000 square meters, featuring gardens, churches, museums, and exhibition halls.",
    goldenRoof: "Golden Roof",
    goldenRoofP: "Built in 1500, the Golden Roof is the most iconic architectural element of the fortress. This 2.5-meter-wide, 1-meter-deep gilded balcony was commissioned by Archbishop Leonhard von Keutschach to celebrate his 10th anniversary as archbishop.",
    imgCaption: "▲ The castle courtyard and St. George's Chapel, blending Gothic and Renaissance ornate decoration",
    museumTitle: "Castle Museums",
    museumIntro: "The castle features several themed museums:",
    museum1: "<strong>Royal Apartments</strong>: Displaying medieval aristocratic lifestyle scenes",
    museum2: "<strong>Armoury</strong>: Housing over 200 pieces of medieval weapons and armor",
    museum3: "<strong>Puppet Museum</strong>: Exhibits of various puppets from the 16th century to modern times",
    museum4: "<strong>Dinosaur & Mineral Exhibition</strong>: Displays of dinosaur fossils and precious minerals found locally",
    churchTitle: "Castle Church (Burgkapelle)",
    churchP: "The castle church, built in the 16th century, is the spiritual center of the fortress. The church features a mixed Gothic and Renaissance architectural design with ornate interiors.",
    funicularTitle: "Funicular Railway",
    funicularP: "This mountain funicular, built in 1892, runs from the foot of the mountain to the castle gate, covering about 200 meters with a vertical drop of about 75 meters. The funicular runs every 5 minutes, with a journey time of about 1 minute.",
    photoTitle: "📸 Photographer's Secrets: 4 Ultimate Photo Spots at Hohensalzburg",
    spot1Title: "① Castle Garden Viewpoint — Classic Fortress Panorama",
    spot1P: "After entering the fortress, follow the main path to the end to reach the castle garden. There are several viewpoints offering panoramic views of Salzburg's Old Town and the distant Alps. Best visited during early morning or evening.",
    spot2Title: "② Northeast Corner — Fortress with Snowy Mountains",
    spot2P: "Walk along the outer walls to the northeast corner, where you can capture the fortress architecture with the Alps in the background. Using a wide-angle lens creates dramatic, impactful shots.",
    spot3Title: "③ Funicular Station Platform — Cinematic Mountain Views",
    spot3P: "When taking the funicular up the mountain, look back just before arriving at the castle station to capture the cable car ropes with the Salzburg skyline in perfect composition.",
    spot4Title: "④ Old Town View — Looking Up at the Fortress",
    spot4P: "After walking down, look up at the fortress from Makart Square or Getreidegasse in the Old Town. Using a telephoto lens to compress perspective creates a stunning view of the towering fortress.",
    tipsTitle: "💡 Hohensalzburg Fortress Travel Tips",
    tip1Label: "Ticket Information",
    tip1P: "The fortress offers various ticket options, including round-trip funicular + castle visit, or castle visit only. Booking online in advance is recommended. Adult standard tickets start from €15-20.",
    tip2Label: "Opening Hours",
    tip2P: "The fortress is open year-round: 09:00-19:00 in summer (April-October), 09:30-17:00 in winter (November-March).",
    tip3Label: "Best Photography Time",
    tip3P: "Early morning or before dusk is recommended. Fewer tourists in the morning, while dusk offers magical night shots with the fortress illuminated.",
    tip4Label: "Transportation",
    tip4P: "Take tram lines 1, 2, or 3 from Salzburg Hauptbahnhof to Mozartsteg station, then walk to the funicular station.",
    tip5Label: "Hiking Up",
    tip5P: "If you prefer not to take the funicular, you can hike up the castle trail, which takes about 15-20 minutes.",
    addressValue: "Mönchsberg 34, 5020 Salzburg, Austria",
    hours24: "Summer 09:00-19:00 / Winter 09:30-17:00",
    feeValue: "Funicular+Castle ~€15-20 / Castle only ~€10-15",
    ratingValue: "4.7/5.0 (42,567 reviews)",
    transportValue: "Tram to Mozartsteg station",
    durationValue: "3-4 hours",
    shareTitleText: "🏰 The Skyline Over Mozart's Hometown: Complete Hohensalzburg Fortress Guide",
  },
};

export default function HohensalzburgFortressPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const saved = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (saved) setLang(saved);
    const handler = (e: any) => setLang(e.detail);
    window.addEventListener("travel-lang-change", handler);
    return () => window.removeEventListener("travel-lang-change", handler);
  }, []);

  const t = getTranslation(lang);
  const tc = tContent[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-zinc-900/50 to-slate-900/30 text-white">
      <ReadingProgress />
      <TravelLanguageSelector />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-stone-800/95 to-zinc-800/95 backdrop-blur-xl border border-stone-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-stone-500/10">
          <h3 className="text-sm font-bold text-stone-400 mb-4 flex items-center gap-2">
            {tc.tocTitle}
          </h3>
          <ul className="space-y-1">
            {tocItems[lang].map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-stone-500 to-zinc-500 text-white shadow-lg shadow-stone-500/30"
                      : "text-stone-300/70 hover:text-white hover:bg-stone-700/50"
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
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors bg-stone-800/30 px-4 py-2 rounded-full hover:bg-stone-700/50"
        >
          {tc.backHome}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-400 mb-8 ml-6 transition-colors"
        >
          {t.blog}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-500 to-zinc-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-stone-500/30">
            {tc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-stone-200 to-zinc-300 bg-clip-text text-transparent">
            {tc.title}
          </h1>
          <h2 className="text-xl text-stone-400 font-semibold mb-4">{tc.subtitle}</h2>
          <p className="text-stone-600">June 2026 · {tc.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-stone-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Salzburg_-_Festung_Hohensalzburg.JPG/1280px-Salzburg_-_Festung_Hohensalzburg.JPG"
            alt={tc.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-stone-600 text-sm mb-12">
          {tc.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: tc.introP1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: tc.introP2 }}></p>

          <div id="history" className="bg-gradient-to-br from-stone-900/50 to-zinc-900/40 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.historyTitle}
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. {lang === "en" ? "Origins: Symbol of Archbishop's Power (1077-1500)" : lang === "zh-CN" ? "建城起源：主教权力的象徵（1077-1500）" : "建城起源：主教權力的象徵（1077-1500）"}</h4>
            <p className="text-stone-100/80" dangerouslySetInnerHTML={{ __html: tc.historyP1 }}></p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. {lang === "en" ? "Golden Age: The Golden Roof" : lang === "zh-CN" ? "黄金时代：金牛的建造" : "黃金時代：金牛的建造"}</h4>
            <p className="text-stone-100/80" dangerouslySetInnerHTML={{ __html: tc.historyP2 }}></p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-600/30 rounded-xl p-5 my-6">
              <p className="text-stone-100/80" dangerouslySetInnerHTML={{ __html: tc.fortressFact }}></p>
            </div>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">3. {lang === "en" ? "Napoleonic Era: Brief French Occupation" : lang === "zh-CN" ? "拿破仑时代：法军短暂占领" : "拿破崙時代：法軍短暫佔領"}</h4>
            <p className="text-stone-100/80" dangerouslySetInnerHTML={{ __html: tc.historyP3 }}></p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">4. {lang === "en" ? "Modern Revival: World Cultural Heritage" : lang === "zh-CN" ? "现代重生：世界文化遗产" : "現代重生：世界文化遺產"}</h4>
            <p className="text-stone-100/80" dangerouslySetInnerHTML={{ __html: tc.historyP4 }}></p>
          </div>

          <h2 id="architecture" dangerouslySetInnerHTML={{ __html: tc.archTitle }}></h2>
          <p dangerouslySetInnerHTML={{ __html: tc.archIntro }}></p>

          <h3>{tc.goldenRoof}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.goldenRoofP }}></p>

          <div className="my-8">
            <img
              src="/images/travel/hohensalzburg-courtyard.jpg"
              alt={tc.title}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-center text-stone-600 text-sm mt-4 mb-8">
              {tc.imgCaption}
            </p>
          </div>

          <h3>{tc.museumTitle}</h3>
          <p>{tc.museumIntro}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: tc.museum1 }}></li>
            <li dangerouslySetInnerHTML={{ __html: tc.museum2 }}></li>
            <li dangerouslySetInnerHTML={{ __html: tc.museum3 }}></li>
            <li dangerouslySetInnerHTML={{ __html: tc.museum4 }}></li>
          </ul>

          <h3>{tc.churchTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.churchP }}></p>

          <h3>{tc.funicularTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.funicularP }}></p>

          <h2 id="photo-spots" dangerouslySetInnerHTML={{ __html: tc.photoTitle }}></h2>

          <h3>{tc.spot1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot1P }}></p>

          <h3>{tc.spot2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot2P }}></p>

          <h3>{tc.spot3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot3P }}></p>

          <h3>{tc.spot4Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot4P }}></p>

          <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/40 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.tipsTitle}
            </h3>
            <ul className="space-y-3 text-stone-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>{tc.tip1Label}：</strong>{tc.tip1P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">⏰</span>
                <span><strong>{tc.tip2Label}：</strong>{tc.tip2P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌅</span>
                <span><strong>{tc.tip3Label}：</strong>{tc.tip3P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>{tc.tip4Label}：</strong>{tc.tip4P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🥾</span>
                <span><strong>{tc.tip5Label}：</strong>{tc.tip5P}</span>
              </li>
            </ul>
          </div>

          <h2 dangerouslySetInnerHTML={{ __html: tc.infoTitle }}></h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.address}</span>
              <p className="text-stone-100/80 text-sm mt-1">{tc.addressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.hours}</span>
              <p className="text-stone-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.hours24 }}></p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.fee}</span>
              <p className="text-stone-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.feeValue }}></p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.rating}</span>
              <p className="text-stone-100/80 text-sm mt-1">{tc.ratingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.transport}</span>
              <p className="text-stone-100/80 text-sm mt-1">{tc.transportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900/50 to-zinc-900/60 rounded-xl p-4 border border-stone-700/30">
              <span className="text-stone-400 font-bold">{tc.duration}</span>
              <p className="text-stone-100/80 text-sm mt-1">{tc.durationValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-stone-900/30 to-zinc-900/20 border border-stone-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-stone-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.ratingTitle}
            </h3>
            <StarRating slug="hohensalzburg-fortress" />
          </div>

          <div className="bg-stone-900/30 rounded-2xl p-6 my-10 border border-stone-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">{tc.shareTitle}</h3>
            <SocialShare
              title={tc.shareTitleText}
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-stone-900/30 rounded-2xl p-6 border border-stone-700/30 flex items-center gap-4">
              <span className="text-stone-100/80">{tc.favoriteText}</span>
              <FavoriteButton slug="hohensalzburg-fortress" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="hohensalzburg-fortress" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="hohensalzburg-fortress" />
    </div>
  );
}