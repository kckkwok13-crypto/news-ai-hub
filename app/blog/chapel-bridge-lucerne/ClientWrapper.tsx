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
    { id: "intro", title: "介紹", emoji: "🌉" },
    { id: "history", title: "歷史故事", emoji: "🔑" },
    { id: "paintings", title: "橋上油畫", emoji: "🎨" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🌉" },
    { id: "history", title: "歷史故事", emoji: "🔑" },
    { id: "paintings", title: "橋上油畫", emoji: "🎨" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🌉" },
    { id: "history", title: "历史故事", emoji: "🔑" },
    { id: "paintings", title: "桥上油画", emoji: "🎨" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🌉" },
    { id: "history", title: "History", emoji: "🔑" },
    { id: "paintings", title: "Paintings", emoji: "🎨" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
};

const currentTags = ["琉森", "瑞士", "廊橋", "打卡"];

const tContent = {
  yue: {
    region: "🇨🇭 瑞士 · 琉森湖畔",
    title: "歐洲最古老嘅廊橋",
    subtitle: "瑞士琉森卡貝爾橋（Kapellbrücke）深度遊覽攻略",
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
    heroCaption: "▲ 琉森湖畔的卡貝爾橋，紅色橋身在夕陽下熠熠生輝，橋下水塔倒影如詩如畫",
    introP1: "當你第一次看到<strong>卡貝爾橋（Kapellbrücke / Chapel Bridge）</strong>時，一定會被這座獨特的紅色木橋所吸引。這座建於<strong>1333年</strong>的木製廊橋是歐洲現存最古老的橋樑之一，全長204米，跨越羅伊斯河（Reuss）連接琉森舊城區與新城區。",
    introP2: "卡貝爾橋不僅是琉森的城市象徵，更是瑞士最著名的旅遊景點之一。橋上懸掛著120幅三角形油畫，描繪著琉森的歷史與瑞士的聖人故事。1993年，一場大火嚴重損毀了橋樑，現今遊客看到的橋樑是按原樣重建的。",
    historyTitle: "🔑 跨越700年的守望：卡貝爾橋的 4 大歷史篇章",
    history1Title: "1. 建橋初衷：防衛與通道",
    history1P: "卡貝爾橋由琉森城市防衛系統的一部分，由建築師瓦爾特·呂姆巴赫（Walter Rümlang）設計建造。橋的中間設有一個小禮拜堂（Kapelle），供奉著聖佩德羅（St. Peter），這也是橋名「卡貝爾」的由來。",
    history2Title: "2. 橋上油畫：琉森的百科全書",
    history2P: "17世紀初，人們在橋樑的橫樑上懸掛了112幅三角形油畫，描繪琉森的歷史事件、宗教故事和守護聖人。這些油畫被稱為「琉森的百科全書」，是了解這座城市歷史的重要窗口。",
    fireFact: "✨ 浴火重生：1993年大火重建！1993年1月17日，一場大火幾乎完全摧毀了卡貝爾橋。這場火災被認為是人為縱火，至今仍未破案。瑞士政府投入了大量資源重建這座歷史橋樑。",
    history3Title: "3. 水塔：千年堡壘的見證",
    history3P: "與卡貝爾橋相連的水塔建於14世紀初，是琉森城市防衛系統的一部分。這座八角形的石塔高34米，曾用作檔案室、監獄和金庫。現今，水塔內設有城市歷史博物館。",
    history4Title: "4. 現代地標：琉森的城市名片",
    history4P: "如今的卡貝爾橋是琉森最重要的旅遊景點，每年吸引超過150萬遊客前來參觀。夜幕降臨後，橋身上的暖色燈光照亮河面，倒影如夢似幻，是拍攝夜景的絕佳地點。",
    paintingsTitle: "🎨 橋上油畫：120幅畫作訴說歷史",
    paintingsIntro: "卡貝爾橋最引以為傲的特色之一，就是橋身上懸掛的三角形油畫。這些油畫創作於17世紀初，原本有158幅，現在僅存112幅，加上橋中段禮拜堂的油畫，總共約120幅。油畫內容主要分為三個主題：",
    imgCaption: "▲ 從卡貝爾橋上遠眺琉森舊城區的紅瓦屋頂與遠處的皮拉圖斯山",
    paint1Title: "宗教聖人故事",
    paint1P: "大部分油畫描繪了瑞士和琉森的守護聖人故事，包括聖萊奧加里（St. Leodegar）、聖莫里斯（St. Mauritius）等。這些油畫具有濃厚的宗教色彩，是當時藝術家對宗教信仰的表達。",
    paint2Title: "琉森歷史事件",
    paint2P: "部分油畫描繪了琉森城市發展的歷史瞬間，包括1386年的森帕赫戰役（Battle of Sempach）等重要歷史事件。這些畫作成為了研究琉森歷史的珍貴資料。",
    paint3Title: "寓言與道德故事",
    paint3P: "橋上還有一些油畫描繪了古希臘羅馬神話中的寓言故事，以及教導人們道德品格的圖像。這些畫作反映了17世紀歐洲社會的價值觀和審美趣味。",
    photoTitle: "📸 攝影師私藏：卡貝爾橋 4 大終極打卡機位",
    spot1Title: "① 羅伊斯河對岸——經典全景拍攝",
    spot1P: "站在羅伊斯河對岸的堤岸上，使用廣角鏡頭拍攝卡貝爾橋全景。這是卡貝爾橋最經典的拍攝角度，可以同時拍到紅色橋身、綠色屋頂和水塔的倒影。",
    spot2Title: "② 橋面上——走入畫中",
    spot2P: "走上卡貝爾橋，站在橋面中央往兩端拍攝，可以獲得極具縱深感的畫面。橋上的木製橫樑和油畫都是拍攝的好素材。建議使用超廣角鏡頭。",
    spot3Title: "③ 水塔前——古堡與廊橋",
    spot3P: "在橋的南端水塔前拍攝，可以獲得橋樑與水塔同框的經典畫面。夜幕降臨後，這裡的夜景更為動人，暖色燈光將古堡與橋樑照亮。",
    spot4Title: "④ 遊船上——水上視角",
    spot4P: "乘坐琉森湖遊船從水面視角拍攝卡貝爾橋，是最獨特的拍攝方式之一。從水上仰望橋身，可以拍到橋拱在水面的倒影，形成完美的對稱畫面。",
    tipsTitle: "💡 卡貝爾橋 旅遊實用小貼士",
    tip1Label: "門票資訊",
    tip1P: "卡貝爾橋本身免費參觀。橋邊的水塔博物館需要購票參觀，成人約 CHF 5-8。建議購買琉森城市卡，可免費參觀多個景點。",
    tip2Label: "遊船體驗",
    tip2P: "琉森湖遊船會經過卡貝爾橋。建議乘坐1小時的短程遊船，在橋下穿過時拍攝。遊船票價約 CHF 30-50。",
    tip3Label: "最佳拍攝時間",
    tip3P: "建議在清晨（7-9點）或傍晚（日落前1小時）前來拍攝。清晨遊客稀少，傍晚光線動人。夜晚橋身有照明，也是拍夜景的好時機。",
    tip4Label: "交通方式",
    tip4P: "從琉森火車總站步行約10分鐘即可到達卡貝爾橋。也可乘搭有軌電車1號或2號至 Schwanenplatz 站。",
    tip5Label: "周邊順遊",
    tip5P: "卡貝爾橋周邊景點豐富，包括獅子紀念碑、冰川花園博物館、琉森湖畔等。建議安排半天時間慢慢遊覽。",
    addressValue: "Kapellbrücke, 6004 Luzern, Switzerland",
    hours24: "全天候開放<br/>建議遊覽時間 30-60分鐘",
    feeValue: "橋身免費參觀<br/>水塔博物館 CHF 5-8",
    ratingValue: "4.7/5.0（76,543 評論）",
    transportValue: "火車總站步行10分鐘",
    durationValue: "1-2小時",
    shareTitleText: "🌉 歐洲最古老的廊橋：瑞士琉森卡貝爾橋深度遊覽攻略",
  },
  "zh-TW": {
    region: "🇨🇭 瑞士 · 琉森湖畔",
    title: "歐洲最古老的廊橋",
    subtitle: "瑞士琉森卡貝爾橋（Kapellbrücke）深度遊覽攻略",
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
    heroCaption: "▲ 琉森湖畔的卡貝爾橋，紅色橋身在夕陽下熠熠生輝，橋下水塔倒影如詩如畫",
    introP1: "當你第一次看到<strong>卡貝爾橋（Kapellbrücke / Chapel Bridge）</strong>時，一定會被這座獨特的紅色木橋所吸引。這座建於<strong>1333年</strong>的木製廊橋是歐洲現存最古老的橋樑之一，全長204米，跨越羅伊斯河（Reuss）連接琉森舊城區與新城區。",
    introP2: "卡貝爾橋不僅是琉森的城市象徵，更是瑞士最著名的旅遊景點之一。橋上懸掛著120幅三角形油畫，描繪著琉森的歷史與瑞士的聖人故事。1993年，一場大火嚴重損毀了橋樑，現今遊客看到的橋樑是按原樣重建的。",
    historyTitle: "🔑 跨越700年的守望：卡貝爾橋的 4 大歷史篇章",
    history1Title: "1. 建橋初衷：防衛與通道",
    history1P: "卡貝爾橋由琉森城市防衛系統的一部分，由建築師瓦爾特·呂姆巴赫（Walter Rümlang）設計建造。橋的中間設有一個小禮拜堂（Kapelle），供奉著聖佩德羅（St. Peter），這也是橋名「卡貝爾」的由來。",
    history2Title: "2. 橋上油畫：琉森的百科全書",
    history2P: "17世紀初，人們在橋樑的橫樑上懸掛了112幅三角形油畫，描繪琉森的歷史事件、宗教故事和守護聖人。這些油畫被稱為「琉森的百科全書」，是了解這座城市歷史的重要窗口。",
    fireFact: "✨ 浴火重生：1993年大火重建！1993年1月17日，一場大火幾乎完全摧毀了卡貝爾橋。這場火災被認為是人為縱火，至今仍未破案。瑞士政府投入了大量資源重建這座歷史橋樑。",
    history3Title: "3. 水塔：千年堡壘的見證",
    history3P: "與卡貝爾橋相連的水塔建於14世紀初，是琉森城市防衛系統的一部分。這座八角形的石塔高34米，曾用作檔案室、監獄和金庫。現今，水塔內設有城市歷史博物館。",
    history4Title: "4. 現代地標：琉森的城市名片",
    history4P: "如今的卡貝爾橋是琉森最重要的旅遊景點，每年吸引超過150萬遊客前來參觀。夜幕降臨後，橋身上的暖色燈光照亮河面，倒影如夢似幻，是拍攝夜景的絕佳地點。",
    paintingsTitle: "🎨 橋上油畫：120幅畫作訴說歷史",
    paintingsIntro: "卡貝爾橋最引以為傲的特色之一，就是橋身上懸掛的三角形油畫。這些油畫創作於17世紀初，原本有158幅，現在僅存112幅，加上橋中段禮拜堂的油畫，總共約120幅。油畫內容主要分為三個主題：",
    imgCaption: "▲ 從卡貝爾橋上遠眺琉森舊城區的紅瓦屋頂與遠處的皮拉圖斯山",
    paint1Title: "宗教聖人故事",
    paint1P: "大部分油畫描繪了瑞士和琉森的守護聖人故事，包括聖萊奧加里（St. Leodegar）、聖莫里斯（St. Mauritius）等。這些油畫具有濃厚的宗教色彩，是當時藝術家對宗教信仰的表達。",
    paint2Title: "琉森歷史事件",
    paint2P: "部分油畫描繪了琉森城市發展的歷史瞬間，包括1386年的森帕赫戰役（Battle of Sempach）等重要歷史事件。這些畫作成為了研究琉森歷史的珍貴資料。",
    paint3Title: "寓言與道德故事",
    paint3P: "橋上還有一些油畫描繪了古希臘羅馬神話中的寓言故事，以及教導人們道德品格的圖像。這些畫作反映了17世紀歐洲社會的價值觀和審美趣味。",
    photoTitle: "📸 攝影師私藏：卡貝爾橋 4 大終極打卡機位",
    spot1Title: "① 羅伊斯河對岸——經典全景拍攝",
    spot1P: "站在羅伊斯河對岸的堤岸上，使用廣角鏡頭拍攝卡貝爾橋全景。這是卡貝爾橋最經典的拍攝角度，可以同時拍到紅色橋身、綠色屋頂和水塔的倒影。",
    spot2Title: "② 橋面上——走入畫中",
    spot2P: "走上卡貝爾橋，站在橋面中央往兩端拍攝，可以獲得極具縱深感的畫面。橋上的木製橫樑和油畫都是拍攝的好素材。建議使用超廣角鏡頭。",
    spot3Title: "③ 水塔前——古堡與廊橋",
    spot3P: "在橋的南端水塔前拍攝，可以獲得橋樑與水塔同框的經典畫面。夜幕降臨後，這裡的夜景更為動人，暖色燈光將古堡與橋樑照亮。",
    spot4Title: "④ 遊船上——水上視角",
    spot4P: "乘坐琉森湖遊船從水面視角拍攝卡貝爾橋，是最獨特的拍攝方式之一。從水上仰望橋身，可以拍到橋拱在水面的倒影，形成完美的對稱畫面。",
    tipsTitle: "💡 卡貝爾橋 旅遊實用小貼士",
    tip1Label: "門票資訊",
    tip1P: "卡貝爾橋本身免費參觀。橋邊的水塔博物館需要購票參觀，成人約 CHF 5-8。建議購買琉森城市卡，可免費參觀多個景點。",
    tip2Label: "遊船體驗",
    tip2P: "琉森湖遊船會經過卡貝爾橋。建議乘坐1小時的短程遊船，在橋下穿過時拍攝。遊船票價約 CHF 30-50。",
    tip3Label: "最佳拍攝時間",
    tip3P: "建議在清晨（7-9點）或傍晚（日落前1小時）前來拍攝。清晨遊客稀少，傍晚光線動人。夜晚橋身有照明，也是拍夜景的好時機。",
    tip4Label: "交通方式",
    tip4P: "從琉森火車總站步行約10分鐘即可到達卡貝爾橋。也可乘搭有軌電車1號或2號至 Schwanenplatz 站。",
    tip5Label: "周邊順遊",
    tip5P: "卡貝爾橋周邊景點豐富，包括獅子紀念碑、冰川花園博物館、琉森湖畔等。建議安排半天時間慢慢遊覽。",
    addressValue: "Kapellbrücke, 6004 Luzern, Switzerland",
    hours24: "全天候開放<br/>建議遊覽時間 30-60分鐘",
    feeValue: "橋身免費參觀<br/>水塔博物館 CHF 5-8",
    ratingValue: "4.7/5.0（76,543 評論）",
    transportValue: "火車總站步行10分鐘",
    durationValue: "1-2小時",
    shareTitleText: "🌉 歐洲最古老的廊橋：瑞士琉森卡貝爾橋深度遊覽攻略",
  },
  "zh-CN": {
    region: "🇨🇭 瑞士 · 卢塞恩湖畔",
    title: "欧洲最古老的廊桥",
    subtitle: "瑞士卢塞恩卡贝尔桥（Kapellbrücke）深度游览攻略",
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
    heroCaption: "▲ 卢塞恩湖畔的卡贝尔桥，红色桥身在夕阳下熠熠生辉，桥下水塔倒影如诗如画",
    introP1: "当你第一次看到<strong>卡贝尔桥（Kapellbrücke / Chapel Bridge）</strong>时，一定会被这座独特的红色木桥所吸引。这座建于<strong>1333年</strong>的木制廊桥是欧洲现存最古老的桥梁之一，全长204米，跨越罗伊斯河（Reuss）连接卢塞恩旧城区与新城区。",
    introP2: "卡贝尔桥不仅是卢塞恩的城市象征，更是瑞士最著名的旅游景点之一。桥上悬挂着120幅三角形油画，描绘着卢塞恩的历史与瑞士的圣人故事。1993年，一场大火严重损毁了桥梁，现今游客看到的桥梁是按原样重建的。",
    historyTitle: "🔑 跨越700年的守望：卡贝尔桥的 4 大历史篇章",
    history1Title: "1. 建桥初衷：防卫与通道",
    history1P: "卡贝尔桥由卢塞恩城市防卫系统的一部分，由建筑师瓦尔特·吕姆巴赫（Walter Rümlang）设计建造。桥的中间设有一个小礼拜堂（Kapelle），供奉着圣佩德罗（St. Peter），这也是桥名「卡贝尔」的由来。",
    history2Title: "2. 桥上油画：卢塞恩的百科全书",
    history2P: "17世纪初，人们在桥梁的横梁上悬挂了112幅三角形油画，描绘卢塞恩的历史事件、宗教故事和守护圣人。这些油画被称为「卢塞恩的百科全书」，是了解这座城市历史的重要窗口。",
    fireFact: "✨ 浴火重生：1993年大火重建！1993年1月17日，一场大火几乎完全摧毁了卡贝尔桥。这场火灾被认为是人为纵火，至今仍未破案。瑞士政府投入了大量资源重建这座历史桥梁。",
    history3Title: "3. 水塔：千年堡垒的见证",
    history3P: "与卡贝尔桥相连的水塔建于14世纪初，是卢塞恩城市防卫系统的一部分。这座八角形的石塔高34米，曾用作档案室、监狱和金库。现今，水塔内设有城市历史博物馆。",
    history4Title: "4. 现代地标：卢塞恩的城市名片",
    history4P: "如今的卡贝尔桥是卢塞恩最重要的旅游景点，每年吸引超过150万游客前来参观。夜幕降临后，桥身上的暖色灯光照亮河面，倒影如梦似幻，是拍摄夜景的绝佳地点。",
    paintingsTitle: "🎨 桥上油画：120幅画作诉说历史",
    paintingsIntro: "卡贝尔桥最引以为傲的特色之一，就是桥身上悬挂的三角形油画。这些油画创作于17世纪初，原本有158幅，现在仅存112幅，加上桥中段礼拜堂的油画，总共约120幅。油画内容主要分为三个主题：",
    imgCaption: "▲ 从卡贝尔桥上远眺卢塞恩旧城区的红瓦屋顶与远处的皮拉图斯山",
    paint1Title: "宗教圣人故事",
    paint1P: "大部分油画描绘了瑞士和卢塞恩的守护圣人故事，包括圣莱奥加里（St. Leodegar）、圣莫里斯（St. Mauritius）等。这些油画具有浓厚的宗教色彩，是当时艺术家对宗教信仰的表达。",
    paint2Title: "卢塞恩历史事件",
    paint2P: "部分油画描绘了卢塞恩城市发展的历史瞬间，包括1386年的森帕赫战役（Battle of Sempach）等重要历史事件。这些画作成为了研究卢塞恩历史的珍贵资料。",
    paint3Title: "寓言与道德故事",
    paint3P: "桥上还有一些油画描绘了古希腊罗马神话中的寓言故事，以及教导人们道德品格的图像。这些画作反映了17世纪欧洲社会的价值观和审美趣味。",
    photoTitle: "📸 摄影师私藏：卡贝尔桥 4 大终极打卡机位",
    spot1Title: "① 罗伊斯河对岸——经典全景拍摄",
    spot1P: "站在罗伊斯河对岸的堤岸上，使用广角镜头拍摄卡贝尔桥全景。这是卡贝尔桥最经典的拍摄角度，可以同时拍到红色桥身、绿色屋顶和水塔的倒影。",
    spot2Title: "② 桥面上——走入画中",
    spot2P: "走上卡贝尔桥，站在桥面中央往两端拍摄，可以获得极具纵深感的画面。桥上的木制横梁和油画都是拍摄的好素材。建议使用超广角镜头。",
    spot3Title: "③ 水塔前——古堡与廊桥",
    spot3P: "在桥的南端水塔前拍摄，可以获得桥梁与水塔同框的经典画面。夜幕降临后，这里的夜景更为动人，暖色灯光将古堡与桥梁照亮。",
    spot4Title: "④ 游船上——水上视角",
    spot4P: "乘坐卢塞恩湖游船从水面视角拍摄卡贝尔桥，是最独特的拍摄方式之一。从水上仰望桥身，可以拍到桥拱在水面的倒影，形成完美的对称画面。",
    tipsTitle: "💡 卡贝尔桥 旅游实用小贴士",
    tip1Label: "门票资讯",
    tip1P: "卡贝尔桥本身免费参观。桥边的水塔博物馆需要购票参观，成人约 CHF 5-8。建议购买卢塞恩城市卡，可免费参观多个景点。",
    tip2Label: "游船体验",
    tip2P: "卢塞恩湖游船会经过卡贝尔桥。建议乘坐1小时的短程游船，在桥下穿过时拍摄。游船票价约 CHF 30-50。",
    tip3Label: "最佳拍摄时间",
    tip3P: "建议在清晨（7-9点）或傍晚（日落前1小时）前来拍摄。清晨游客稀少，傍晚光线动人。夜晚桥身有照明，也是拍夜景的好时机。",
    tip4Label: "交通方式",
    tip4P: "从卢塞恩火车总站步行约10分钟即可到达卡贝尔桥。也可搭乘有轨电车1号或2号至 Schwanenplatz 站。",
    tip5Label: "周边顺游",
    tip5P: "卡贝尔桥周边景点丰富，包括狮子纪念碑、冰川花园博物馆、卢塞恩湖畔等。建议安排半天时间慢慢游览。",
    addressValue: "Kapellbrücke, 6004 Luzern, Switzerland",
    hours24: "全天候开放<br/>建议游览时间 30-60分钟",
    feeValue: "桥身免费参观<br/>水塔博物馆 CHF 5-8",
    ratingValue: "4.7/5.0（76,543 评论）",
    transportValue: "火车总站步行10分钟",
    durationValue: "1-2小时",
    shareTitleText: "🌉 欧洲最古老的廊桥：瑞士卢塞恩卡贝尔桥深度游览攻略",
  },
  en: {
    region: "🇨🇭 Switzerland · Lake Lucerne",
    title: "Europe's Oldest Covered Bridge",
    subtitle: "Complete Guide to Chapel Bridge (Kapellbrücke) Lucerne",
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
    heroCaption: "▲ Chapel Bridge on Lake Lucerne, the red bridge shining under the sunset with the water tower reflection",
    introP1: "When you first see <strong>Chapel Bridge (Kapellbrücke)</strong>, you will surely be attracted by this unique red wooden bridge. Built in <strong>1333</strong>, this wooden covered bridge is one of the oldest surviving bridges in Europe, spanning 204 meters across the Reuss River, connecting Lucerne's Old Town with the New Town.",
    introP2: "Chapel Bridge is not only Lucerne's city symbol but also one of Switzerland's most famous tourist attractions. The bridge displays 120 triangular paintings depicting Lucerne's history and Swiss saint stories. In 1993, a devastating fire heavily damaged the bridge, and the current structure is a faithful reconstruction.",
    historyTitle: "🔑 700 Years of Vigilance: 4 Historical Chapters of Chapel Bridge",
    history1Title: "1. Original Purpose: Defense and Passage",
    history1P: "Chapel Bridge was part of Lucerne's city defense system, designed by architect Walter Rümlang. The middle of the bridge houses a small chapel (Kapelle) dedicated to St. Peter, which is where the bridge gets its name 'Chapel Bridge'. The covered design allowed pedestrians to cross the river without getting wet.",
    history2Title: "2. Bridge Paintings: Lucerne's Encyclopedia",
    history2P: "In the early 17th century, 112 triangular paintings were hung on the bridge's crossbeams, depicting Lucerne's historical events, religious stories, and patron saints. These paintings are called 'Lucerne's Encyclopedia' and are an important window into the city's history.",
    fireFact: "✨ Phoenix Rising: 1993 Fire Reconstruction! On January 17, 1993, a fire nearly completely destroyed Chapel Bridge. The fire is believed to be arson and remains unsolved. Switzerland invested significant resources to rebuild this historic bridge, hiring traditional carpenters using original techniques.",
    history3Title: "3. Water Tower: Witness to a Thousand Years",
    history3P: "The octagonal water tower connected to Chapel Bridge was built in the early 14th century as part of Lucerne's city defense system. This 34-meter tall stone tower was used as an archive, prison, and treasury. Today, it houses the City History Museum.",
    history4Title: "4. Modern Landmark: Lucerne's City Card",
    history4P: "Today, Chapel Bridge is Lucerne's most important tourist attraction, attracting over 1.5 million visitors annually. At night, warm lighting illuminates the bridge over the river, creating dreamlike reflections - a perfect spot for night photography.",
    paintingsTitle: "🎨 Bridge Paintings: 120 Artworks Telling History",
    paintingsIntro: "One of Chapel Bridge's proudest features is the triangular paintings hanging on the structure. Created in the early 17th century, there were originally 158 paintings, now only 112 remain, plus the paintings in the mid-bridge chapel, totaling about 120 works.",
    imgCaption: "▲ Looking from Chapel Bridge towards Lucerne Old Town's red-tiled rooftops and distant Mt. Pilatus",
    paint1Title: "Religious Saint Stories",
    paint1P: "Most paintings depict the stories of Swiss and Lucerne's patron saints, including St. Leodegar and St. Mauritius. These paintings have strong religious connotations, expressing the religious faith of artists at that time.",
    paint2Title: "Lucerne Historical Events",
    paint2P: "Some paintings depict historical moments in Lucerne's development, including the important 1386 Battle of Sempach. These paintings have become precious materials for studying Lucerne's history.",
    paint3Title: "Fables and Moral Stories",
    paint3P: "The bridge also features paintings depicting fables from Greek and Roman mythology, as well as images teaching moral character. These works reflect the values and aesthetic tastes of 17th century European society.",
    photoTitle: "📸 Photographer's Secrets: 4 Ultimate Photo Spots at Chapel Bridge",
    spot1Title: "① Across the Reuss River — Classic Panorama",
    spot1P: "Stand on the embankment across the Reuss River and shoot the full Chapel Bridge panorama with a wide-angle lens. This is the most classic angle, capturing the red bridge, green roof, and water tower reflection together. Best during early morning or evening.",
    spot2Title: "② On the Bridge — Walking Into the Painting",
    spot2P: "Walk onto Chapel Bridge and stand in the center, shooting towards either end for a dramatic sense of depth. The wooden crossbeams and paintings are great subjects. Use an ultra-wide lens for the best effect.",
    spot3Title: "③ In Front of Water Tower — Castle and Bridge",
    spot3P: "Shoot from in front of the southern water tower for the classic shot of bridge and tower together. At night, the scene is even more enchanting with warm lighting illuminating the ancient fortress and bridge.",
    spot4Title: "④ From the Boat — Water Perspective",
    spot4P: "The most unique perspective is shooting Chapel Bridge from a Lake Lucerne cruise boat. Looking up at the bridge from the water, you can capture the bridge arches' reflection, creating perfect symmetry. Sunset cruises are highly recommended.",
    tipsTitle: "💡 Chapel Bridge Travel Tips",
    tip1Label: "Ticket Information",
    tip1P: "Chapel Bridge itself is free to visit. The nearby Water Tower Museum (Weierturm) requires paid entry, about CHF 5-8 for adults. The Lucerne City Card is recommended for free access to multiple attractions.",
    tip2Label: "Cruise Experience",
    tip2P: "Lake Lucerne cruises pass under Chapel Bridge. A 1-hour short cruise is recommended for photography. Cruise tickets are approximately CHF 30-50.",
    tip3Label: "Best Photography Time",
    tip3P: "Early morning (7-9 AM) or evening (1 hour before sunset) is recommended. Fewer tourists in the morning, magical light in the evening. Night photography is also great with bridge illumination.",
    tip4Label: "Transportation",
    tip4P: "A 10-minute walk from Lucerne Hauptbahnhof to Chapel Bridge. Tram lines 1 or 2 to Schwanenplatz station are also options.",
    tip5Label: "Nearby Attractions",
    tip5P: "Chapel Bridge has rich nearby attractions including the Lion Monument, Glacier Garden Museum, and Lake Lucerne. Half a day is recommended for a thorough visit.",
    addressValue: "Kapellbrücke, 6004 Luzern, Switzerland",
    hours24: "Open 24 hours<br/>Recommended visit: 30-60 minutes",
    feeValue: "Bridge: Free<br/>Water Tower Museum: CHF 5-8",
    ratingValue: "4.7/5.0 (76,543 reviews)",
    transportValue: "10 min walk from train station",
    durationValue: "1-2 hours",
    shareTitleText: "🌉 Europe's Oldest Covered Bridge: Complete Chapel Bridge Lucerne Guide",
  },
};

export default function ChapelBridgeLucernePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-amber-950/50 to-yellow-950/30 text-white">
      <ReadingProgress />
      <TravelLanguageSelector />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-orange-900/95 to-amber-900/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-orange-500/10">
          <h3 className="text-sm font-bold text-orange-400 mb-4 flex items-center gap-2">
            {tc.tocTitle}
          </h3>
          <ul className="space-y-1">
            {tocItems[lang].map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                      : "text-orange-200/70 hover:text-white hover:bg-orange-800/50"
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
          className="inline-flex items-center gap-2 text-orange-400 hover:text-white mb-8 transition-colors bg-orange-900/30 px-4 py-2 rounded-full hover:bg-orange-800/50"
        >
          {tc.backHome}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-400 mb-8 ml-6 transition-colors"
        >
          {t.blog}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/30">
            {tc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-yellow-300 bg-clip-text text-transparent">
            {tc.title}
          </h1>
          <h2 className="text-xl text-orange-400 font-semibold mb-4">{tc.subtitle}</h2>
          <p className="text-orange-600">June 2026 · {tc.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/CH.LU.Luzern_Kapellbr%C3%BCcke_01_16x9-R_16384x9216.jpg/1280px-CH.LU.Luzern_Kapellbr%C3%BCcke_01_16x9-R_16384x9216.jpg"
            alt={tc.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-orange-600 text-sm mb-12">
          {tc.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: tc.introP1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: tc.introP2 }}></p>

          <div id="history" className="bg-gradient-to-br from-orange-900/50 to-amber-900/40 border border-orange-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.historyTitle}
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.history1Title}</h4>
            <p className="text-orange-100/80" dangerouslySetInnerHTML={{ __html: tc.history1P }}></p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.history2Title}</h4>
            <p className="text-orange-100/80" dangerouslySetInnerHTML={{ __html: tc.history2P }}></p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <p className="text-orange-100/80" dangerouslySetInnerHTML={{ __html: tc.fireFact }}></p>
            </div>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.history3Title}</h4>
            <p className="text-orange-100/80" dangerouslySetInnerHTML={{ __html: tc.history3P }}></p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.history4Title}</h4>
            <p className="text-orange-100/80" dangerouslySetInnerHTML={{ __html: tc.history4P }}></p>
          </div>

          <h2 id="paintings" dangerouslySetInnerHTML={{ __html: tc.paintingsTitle }}></h2>
          <p dangerouslySetInnerHTML={{ __html: tc.paintingsIntro }}></p>

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/00_0237_Kapellbr%C3%BCcke_-_Wasserturm.jpg/960px-00_0237_Kapellbr%C3%BCcke_-_Wasserturm.jpg"
              alt={tc.title}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-center text-orange-600 text-sm mt-4 mb-8">
              {tc.imgCaption}
            </p>
          </div>

          <h3>{tc.paint1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.paint1P }}></p>

          <h3>{tc.paint2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.paint2P }}></p>

          <h3>{tc.paint3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.paint3P }}></p>

          <h2 id="photo-spots" dangerouslySetInnerHTML={{ __html: tc.photoTitle }}></h2>

          <h3>{tc.spot1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot1P }}></p>

          <h3>{tc.spot2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot2P }}></p>

          <h3>{tc.spot3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot3P }}></p>

          <h3>{tc.spot4Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot4P }}></p>

          <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/40 border border-orange-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.tipsTitle}
            </h3>
            <ul className="space-y-3 text-orange-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>{tc.tip1Label}：</strong>{tc.tip1P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🚢</span>
                <span><strong>{tc.tip2Label}：</strong>{tc.tip2P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">📸</span>
                <span><strong>{tc.tip3Label}：</strong>{tc.tip3P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>{tc.tip4Label}：</strong>{tc.tip4P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🏨</span>
                <span><strong>{tc.tip5Label}：</strong>{tc.tip5P}</span>
              </li>
            </ul>
          </div>

          <h2 dangerouslySetInnerHTML={{ __html: tc.infoTitle }}></h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.address}</span>
              <p className="text-orange-100/80 text-sm mt-1">{tc.addressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.hours}</span>
              <p className="text-orange-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.hours24 }}></p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.fee}</span>
              <p className="text-orange-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.feeValue }}></p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.rating}</span>
              <p className="text-orange-100/80 text-sm mt-1">{tc.ratingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.transport}</span>
              <p className="text-orange-100/80 text-sm mt-1">{tc.transportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/60 rounded-xl p-4 border border-orange-700/30">
              <span className="text-orange-400 font-bold">{tc.duration}</span>
              <p className="text-orange-100/80 text-sm mt-1">{tc.durationValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/20 border border-orange-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.ratingTitle}
            </h3>
            <StarRating slug="chapel-bridge-lucerne" />
          </div>

          <div className="bg-orange-900/30 rounded-2xl p-6 my-10 border border-orange-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">{tc.shareTitle}</h3>
            <SocialShare
              title={tc.shareTitleText}
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-orange-900/30 rounded-2xl p-6 border border-orange-700/30 flex items-center gap-4">
              <span className="text-orange-100/80">{tc.favoriteText}</span>
              <FavoriteButton slug="chapel-bridge-lucerne" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="chapel-bridge-lucerne" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="chapel-bridge-lucerne" />
    </div>
  );
}