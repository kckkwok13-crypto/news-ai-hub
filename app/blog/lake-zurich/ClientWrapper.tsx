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
    { id: "intro", title: "介紹", emoji: "🏞️" },
    { id: "nature", title: "自然風光", emoji: "🌊" },
    { id: "activities", title: "活動體驗", emoji: "🚢" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🏞️" },
    { id: "nature", title: "自然風光", emoji: "🌊" },
    { id: "activities", title: "活動體驗", emoji: "🚢" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🏞️" },
    { id: "nature", title: "自然风光", emoji: "🌊" },
    { id: "activities", title: "活动体验", emoji: "🚢" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🏞️" },
    { id: "nature", title: "Nature", emoji: "🌊" },
    { id: "activities", title: "Activities", emoji: "🚢" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
};

const currentTags = ["蘇黎世", "瑞士", "湖泊", "打卡"];

const tContent = {
  yue: {
    region: "🇨🇭 瑞士 · 蘇黎世",
    title: "阿爾卑斯山下的翡翠淚珠",
    subtitle: "瑞士蘇黎世湖（Zürichsee）深度遊覽與湖畔散策攻略",
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
    heroCaption: "▲ 阿爾卑斯山倒映在蘇黎世湖的翡翠碧波之中，如詩如畫的湖畔風光",
    introP1: "當你站在蘇黎世湖畔，望向遠處阿爾卑斯山的雪峰倒映在平靜如鏡的湖面上，你會明白為什麼這裡被稱為「歐洲最宜居的城市」。<strong>蘇黎世湖（Zürichsee）</strong>是瑞士最著名的湖泊之一，佔地約88平方公里，最深處達136米。",
    introP2: "蘇黎世湖與蘇黎世城市融為一體，湖畔兩岸分佈著古老的教堂、繁華的商業街與寧靜的住宅區。無論是乘坐傳統蒸汽船遊湖、在湖畔咖啡館悠閒度過一個下午，都能讓你感受到這座城市獨有的浪漫與活力。",
    natureTitle: "🌊 大自然的鬼斧神工：蘇黎世湖的 4 大自然奇觀",
    nature1Title: "1. 阿爾卑斯山的倒影",
    nature1P: "蘇黎世湖最令人驚嘆的景觀之一，就是阿爾卑斯山的壯麗倒影。當清晨的薄霧籠罩湖面，或黃昏的夕陽染紅天際，雪山峰頂與湖面倒影融為一體，形成一幅天然的山水畫卷。",
    nature2Title: "2. 獨特的冰川湖泊",
    nature2P: "蘇黎世湖是典型的冰川湖泊，約在15,000年前的冰河時期形成。湖水由阿爾卑斯山的冰川融水彙聚而成，因此水質極為純淨，能見度可達10米以上。",
    ecoFact: "✨ 生態天堂：湖畔的野生動物！蘇黎世湖畔是多種野生動物的棲息地。在湖邊的蘆葦叢中，經常可以看到白天鵝、黑天鵝、野鴨等水鳥悠然覓食。",
    nature3Title: "3. 四季變幻的湖畔風光",
    nature3P: "春天，湖畔櫻花盛開；夏天，碧波蕩漾，帆船點點；秋天，紅葉倒映水中；冬天，若運氣好，還能看到阿爾卑斯山披上白雪的壯觀景象。",
    nature4Title: "4. 湖畔花園與公園",
    nature4P: "蘇黎世湖畔分佈著多個美麗的公園和花園。湖畔公園（Seepark）種植了大量玫瑰和杜鵑花，是市民休閒的好去處。",
    actTitle: "🚢 必玩體驗：蘇黎世湖的 4 大經典活動",
    act1Title: "① 乘坐蒸汽船遊湖",
    act1P: "蘇黎世湖上有多家傳統蒸汽船提供遊湖服務。其中最著名的<strong>蒸汽船「城市巴塞爾號」（Stadt Basel）</strong>建於1914年，至今仍在使用。建議選擇2-3小時的航線，環湖一圈的線路最為經典。",
    imgCaption: "▲ 蘇黎世湖上的傳統蒸汽船，緩緩駛過寧靜的湖面",
    act2Title: "② 湖畔騎單車",
    act2P: "蘇黎世湖畔設有完善的單車道，全長約120公里，沿途風光旖旎。你可以租借單車，從蘇黎世市中心出發，沿湖濱一路向北騎行，途經美麗的湖畔小鎮。",
    act3Title: "③ 湖畔游泳",
    act3P: "夏季（6月-9月）是蘇黎世湖游泳的最佳時節。蘇黎世湖畔設有多個公共游泳場，提供更衣室、淋浴和救生員服務。在清澈的湖水中暢游，同時欣賞阿爾卑斯山的美景。",
    act4Title: "④ 湖畔美食",
    act4P: "蘇黎世湖畔分佈著許多優雅的餐廳和咖啡館，提供地道瑞士美食和國際料理。你可以選擇享用瑞士火鍋（Fondue）或品嚐新鮮的蘇黎世湖鱒魚。",
    photoTitle: "📸 攝影師私藏：蘇黎世湖 4 大終極打卡機位",
    spot1Title: "① 蘇黎世湖畔長廊——經典湖景",
    spot1P: "蘇黎世市中心的湖畔長廊是拍攝蘇黎世湖最經典的位置。清晨或傍晚時分，可以使用廣角鏡頭拍攝湖面與阿爾卑斯山的全景。",
    spot2Title: "② 利馬特河河口——雙河交匯",
    spot2P: "利馬特河（Limmat）從蘇黎世湖流出，在河口處形成一道獨特的景觀。站在橋上，可以拍到湖水流入河道的壯觀場面。",
    spot3Title: "③ 蘇黎世歌劇院廣場——城市倒影",
    spot3P: "蘇黎世歌劇院（Opernhaus）前的廣場是拍攝湖面倒影的絕佳位置。當湖面平靜無風時，整個城市的天際線都會倒映在水中。",
    spot4Title: "④ 湖上日出——金色時刻",
    spot4P: "清晨5-6點來到湖畔，面對東方拍攝日出。陽光逐漸照亮阿爾卑斯山的雪峰，倒映在平靜的湖面上，金色的光線與翡翠般的湖水交相輝映。",
    tipsTitle: "💡 蘇黎世湖 旅遊實用小貼士",
    tip1Label: "船遊票價",
    tip1P: "單程票約 CHF 8-15，環湖票（含蒸汽船）約 CHF 45-60。建議購買<strong>蘇黎世卡（Zürich Card）</strong>，可免費乘坐公共交通和船遊。",
    tip2Label: "交通方式",
    tip2P: "從蘇黎世火車總站步行約10分鐘即可到達湖畔。也可乘搭有軌電車2號或5號線至 Bürkliplatz 站。",
    tip3Label: "游泳資訊",
    tip3P: "夏季水溫約20-24度，適合游泳。湖畔有多個免費和收費的公共游泳場。",
    tip4Label: "單車租借",
    tip4P: "湖畔單車道全線約120公里，建議安排半天時間。",
    tip5Label: "最佳遊覽時間",
    tip5P: "5月-10月是最佳遊覽季節，其中6月-8月天氣最穩定。",
    addressValue: "Bahnhofstrasse / Bürkliplatz, 8001 Zürich, Switzerland",
    hours24: "湖畔全天候開放<br/>船遊 09:00-18:00",
    feeValue: "湖畔免費<br/>船遊 CHF 8-60",
    ratingValue: "4.8/5.0（89,234 評論）",
    transportValue: "電車至 Bürkliplatz 站",
    durationValue: "3-5小時",
    shareTitleText: "🏞️ 阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖深度遊覽攻略",
  },
  "zh-TW": {
    region: "🇨🇭 瑞士 · 蘇黎世",
    title: "阿爾卑斯山下的翡翠淚珠",
    subtitle: "瑞士蘇黎世湖（Zürichsee）深度遊覽與湖畔散策攻略",
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
    heroCaption: "▲ 阿爾卑斯山倒映在蘇黎世湖的翡翠碧波之中，如詩如畫的湖畔風光",
    introP1: "當你站在蘇黎世湖畔，望向遠處阿爾卑斯山的雪峰倒映在平靜如鏡的湖面上，你會明白為什麼這裡被稱為「歐洲最宜居的城市」。<strong>蘇黎世湖（Zürichsee）</strong>是瑞士最著名的湖泊之一，佔地約88平方公里，最深處達136米。",
    introP2: "蘇黎世湖與蘇黎世城市融為一體，湖畔兩岸分佈著古老的教堂、繁華的商業街與寧靜的住宅區。無論是乘坐傳統蒸汽船遊湖、在湖畔咖啡館悠閒度過一個下午，都能讓你感受到這座城市獨有的浪漫與活力。",
    natureTitle: "🌊 大自然的鬼斧神工：蘇黎世湖的 4 大自然奇觀",
    nature1Title: "1. 阿爾卑斯山的倒影",
    nature1P: "蘇黎世湖最令人驚嘆的景觀之一，就是阿爾卑斯山的壯麗倒影。當清晨的薄霧籠罩湖面，或黃昏的夕陽染紅天際，雪山峰頂與湖面倒影融為一體，形成一幅天然的山水畫卷。",
    nature2Title: "2. 獨特的冰川湖泊",
    nature2P: "蘇黎世湖是典型的冰川湖泊，約在15,000年前的冰河時期形成。湖水由阿爾卑斯山的冰川融水彙聚而成，因此水質極為純淨，能見度可達10米以上。",
    ecoFact: "✨ 生態天堂：湖畔的野生動物！蘇黎世湖畔是多種野生動物的棲息地。在湖邊的蘆葦叢中，經常可以看到白天鵝、黑天鵝、野鴨等水鳥悠然覓食。",
    nature3Title: "3. 四季變幻的湖畔風光",
    nature3P: "春天，湖畔櫻花盛開；夏天，碧波蕩漾，帆船點點；秋天，紅葉倒映水中；冬天，若運氣好，還能看到阿爾卑斯山披上白雪的壯觀景象。",
    nature4Title: "4. 湖畔花園與公園",
    nature4P: "蘇黎世湖畔分佈著多個美麗的公園和花園。湖畔公園（Seepark）種植了大量玫瑰和杜鵑花，是市民休閒的好去處。",
    actTitle: "🚢 必玩體驗：蘇黎世湖的 4 大經典活動",
    act1Title: "① 乘坐蒸汽船遊湖",
    act1P: "蘇黎世湖上有多家傳統蒸汽船提供遊湖服務。其中最著名的<strong>蒸汽船「城市巴塞爾號」（Stadt Basel）</strong>建於1914年，至今仍在使用。建議選擇2-3小時的航線，環湖一圈的線路最為經典。",
    imgCaption: "▲ 蘇黎世湖上的傳統蒸汽船，緩緩駛過寧靜的湖面",
    act2Title: "② 湖畔騎單車",
    act2P: "蘇黎世湖畔設有完善的單車道，全長約120公里，沿途風光旖旎。你可以租借單車，從蘇黎世市中心出發，沿湖濱一路向北騎行，途經美麗的湖畔小鎮。",
    act3Title: "③ 湖畔游泳",
    act3P: "夏季（6月-9月）是蘇黎世湖游泳的最佳時節。蘇黎世湖畔設有多個公共游泳場，提供更衣室、淋浴和救生員服務。在清澈的湖水中暢游，同時欣賞阿爾卑斯山的美景。",
    act4Title: "④ 湖畔美食",
    act4P: "蘇黎世湖畔分佈著許多優雅的餐廳和咖啡館，提供地道瑞士美食和國際料理。你可以選擇享用瑞士火鍋（Fondue）或品嚐新鮮的蘇黎世湖鱒魚。",
    photoTitle: "📸 攝影師私藏：蘇黎世湖 4 大終極打卡機位",
    spot1Title: "① 蘇黎世湖畔長廊——經典湖景",
    spot1P: "蘇黎世市中心的湖畔長廊是拍攝蘇黎世湖最經典的位置。清晨或傍晚時分，可以使用廣角鏡頭拍攝湖面與阿爾卑斯山的全景。",
    spot2Title: "② 利馬特河河口——雙河交匯",
    spot2P: "利馬特河（Limmat）從蘇黎世湖流出，在河口處形成一道獨特的景觀。站在橋上，可以拍到湖水流入河道的壯觀場面。",
    spot3Title: "③ 蘇黎世歌劇院廣場——城市倒影",
    spot3P: "蘇黎世歌劇院（Opernhaus）前的廣場是拍攝湖面倒影的絕佳位置。當湖面平靜無風時，整個城市的天際線都會倒映在水中。",
    spot4Title: "④ 湖上日出——金色時刻",
    spot4P: "清晨5-6點來到湖畔，面對東方拍攝日出。陽光逐漸照亮阿爾卑斯山的雪峰，倒映在平靜的湖面上，金色的光線與翡翠般的湖水交相輝映。",
    tipsTitle: "💡 蘇黎世湖 旅遊實用小貼士",
    tip1Label: "船遊票價",
    tip1P: "單程票約 CHF 8-15，環湖票（含蒸汽船）約 CHF 45-60。建議購買<strong>蘇黎世卡（Zürich Card）</strong>，可免費乘坐公共交通和船遊。",
    tip2Label: "交通方式",
    tip2P: "從蘇黎世火車總站步行約10分鐘即可到達湖畔。也可乘搭有軌電車2號或5號線至 Bürkliplatz 站。",
    tip3Label: "游泳資訊",
    tip3P: "夏季水溫約20-24度，適合游泳。湖畔有多個免費和收費的公共游泳場。",
    tip4Label: "單車租借",
    tip4P: "湖畔單車道全線約120公里，建議安排半天時間。",
    tip5Label: "最佳遊覽時間",
    tip5P: "5月-10月是最佳遊覽季節，其中6月-8月天氣最穩定。",
    addressValue: "Bahnhofstrasse / Bürkliplatz, 8001 Zürich, Switzerland",
    hours24: "湖畔全天候開放<br/>船遊 09:00-18:00",
    feeValue: "湖畔免費<br/>船遊 CHF 8-60",
    ratingValue: "4.8/5.0（89,234 評論）",
    transportValue: "電車至 Bürkliplatz 站",
    durationValue: "3-5小時",
    shareTitleText: "🏞️ 阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖深度遊覽攻略",
  },
  "zh-CN": {
    region: "🇨🇭 瑞士 · 苏黎世",
    title: "阿尔卑斯山下的翡翠泪珠",
    subtitle: "瑞士苏黎世湖（Zürichsee）深度游览与湖畔漫步攻略",
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
    heroCaption: "▲ 阿尔卑斯山倒映在苏黎世湖的翡翠碧波之中，如诗如画的湖畔风光",
    introP1: "当你站在苏黎世湖畔，望向远处阿尔卑斯山的雪峰倒映在平静如镜的湖面上，你会明白为什么这里被称为「欧洲最宜居的城市」。<strong>苏黎世湖（Zürichsee）</strong>是瑞士最著名的湖泊之一，占地约88平方公里，最深处达136米。",
    introP2: "苏黎世湖与苏黎世城市融为一体，湖畔两岸分布着古老的教堂、繁华的商业街与宁静的住宅区。无论是乘坐传统蒸汽船游湖、在湖畔咖啡馆悠闲度过一个下午，都能让你感受到这座城市独有的浪漫与活力。",
    natureTitle: "🌊 大自然的鬼斧神工：苏黎世湖的 4 大自然奇观",
    nature1Title: "1. 阿尔卑斯山的倒影",
    nature1P: "苏黎世湖最令人惊叹的景观之一，就是阿尔卑斯山的壮丽倒影。当清晨的薄雾笼罩湖面，或黄昏的夕阳染红天际，雪山峰顶与湖面倒影融为一体，形成一幅天然的山水画卷。",
    nature2Title: "2. 独特的冰川湖泊",
    nature2P: "苏黎世湖是典型的冰川湖泊，约在15,000年前的冰河时期形成。湖水由阿尔卑斯山的冰川融水汇聚而成，因此水质极为纯净，能见度可达10米以上。",
    ecoFact: "✨ 生态天堂：湖畔的野生动物！苏黎世湖畔是多种野生动物的栖息地。在湖边的芦苇丛中，经常可以看到白天鹅、黑天鹅、野鸭等水鸟悠然觅食。",
    nature3Title: "3. 四季变幻的湖畔风光",
    nature3P: "春天，湖畔樱花盛开；夏天，碧波荡漾，帆船点点；秋天，红叶倒映水中；冬天，若运气好，还能看到阿尔卑斯山披上白雪的壮观景象。",
    nature4Title: "4. 湖畔花园与公园",
    nature4P: "苏黎世湖畔分布着多个美丽的公园和花园。湖畔公园（Seepark）种植了大量玫瑰和杜鹃花，是市民休闲的好去处。",
    actTitle: "🚢 必玩体验：苏黎世湖的 4 大经典活动",
    act1Title: "① 乘坐蒸汽船游湖",
    act1P: "苏黎世湖上有多家传统蒸汽船提供游湖服务。其中最著名的<strong>蒸汽船「城市巴塞尔号」（Stadt Basel）</strong>建于1914年，至今仍在使用。建议选择2-3小时的航线，环湖一圈的线路最为经典。",
    imgCaption: "▲ 苏黎世湖上的传统蒸汽船，缓缓驶过宁静的湖面",
    act2Title: "② 湖畔骑单车",
    act2P: "苏黎世湖畔设有完善的单车道，全长约120公里，沿途风光旖旎。你可以租借单车，从苏黎世市中心出发，沿湖畔一路向北骑行，途经美丽的湖畔小镇。",
    act3Title: "③ 湖畔游泳",
    act3P: "夏季（6月-9月）是苏黎世湖游泳的最佳时节。苏黎世湖畔设有多个公共游泳场，提供更衣室、淋浴和救生员服务。在清澈的湖水中畅游，同时欣赏阿尔卑斯山的美景。",
    act4Title: "④ 湖畔美食",
    act4P: "苏黎世湖畔分布着许多优雅的餐厅和咖啡馆，提供地道瑞士美食和国际料理。你可以选择享用瑞士火锅（Fondue）或品尝新鲜的苏黎世湖鳟鱼。",
    photoTitle: "📸 摄影师私藏：苏黎世湖 4 大终极打卡机位",
    spot1Title: "① 苏黎世湖畔长廊——经典湖景",
    spot1P: "苏黎世市中心的湖畔长廊是拍摄苏黎世湖最经典的位置。清晨或傍晚时分，可以使用广角镜头拍摄湖面与阿尔卑斯山的全景。",
    spot2Title: "② 利马特河河口——双河交汇",
    spot2P: "利马特河（Limmat）从苏黎世湖流出，在河口处形成一道独特的景观。站在桥上，可以拍到湖水流入河道的壮观场面。",
    spot3Title: "③ 苏黎世歌剧院广场——城市倒影",
    spot3P: "苏黎世歌剧院（Opernhaus）前的广场是拍摄湖面倒影的绝佳位置。当湖面平静无风时，整个城市的天际线都会倒映在水中。",
    spot4Title: "④ 湖上日出——金色时刻",
    spot4P: "清晨5-6点来到湖畔，面对东方拍摄日出。阳光逐渐照亮阿尔卑斯山的雪峰，倒映在平静的湖面上，金色的光线与翡翠般的湖水交相辉映。",
    tipsTitle: "💡 苏黎世湖 旅游实用小贴士",
    tip1Label: "船游票价",
    tip1P: "单程票约 CHF 8-15，环湖票（含蒸汽船）约 CHF 45-60。建议购买<strong>苏黎世卡（Zürich Card）</strong>，可免费乘坐公共交通和船游。",
    tip2Label: "交通方式",
    tip2P: "从苏黎世火车总站步行约10分钟即可到达湖畔。也可搭乘有轨电车2号或5号线至 Bürkliplatz 站。",
    tip3Label: "游泳资讯",
    tip3P: "夏季水温约20-24度，适合游泳。湖畔有多个免费和收费的公共游泳场。",
    tip4Label: "单车租借",
    tip4P: "湖畔单车道全线约120公里，建议安排半天时间。",
    tip5Label: "最佳游览时间",
    tip5P: "5月-10月是最佳游览季节，其中6月-8月天气最稳定。",
    addressValue: "Bahnhofstrasse / Bürkliplatz, 8001 Zürich, Switzerland",
    hours24: "湖畔全天候开放<br/>船游 09:00-18:00",
    feeValue: "湖畔免费<br/>船游 CHF 8-60",
    ratingValue: "4.8/5.0（89,234 评论）",
    transportValue: "电车至 Bürkliplatz 站",
    durationValue: "3-5小时",
    shareTitleText: "🏞️ 阿尔卑斯山下的翡翠泪珠：瑞士苏黎世湖深度游览攻略",
  },
  en: {
    region: "🇨🇭 Switzerland · Zurich",
    title: "The Emerald Tear Drop Under the Alps",
    subtitle: "Complete Guide to Lake Zurich (Zürichsee)",
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
    heroCaption: "▲ The Alps reflected in Lake Zurich's emerald waters, a picturesque lakeside scenery",
    introP1: "When you stand by Lake Zurich and gaze at the snow-capped peaks of the Alps reflected in the mirror-like surface, you'll understand why this place is called 'Europe's most livable city'. <strong>Lake Zurich (Zürichsee)</strong> is one of Switzerland's most famous lakes, covering approximately 88 square kilometers with a maximum depth of 136 meters.",
    introP2: "Lake Zurich blends seamlessly with the city of Zurich, with ancient churches, bustling commercial streets, and peaceful residential areas lining both shores. Whether taking a traditional steamboat cruise, enjoying a leisurely afternoon at a lakeside café, or cycling along the waterfront, you'll feel the unique romance and vitality of this city.",
    natureTitle: "🌊 Nature's Masterpiece: 4 Natural Wonders of Lake Zurich",
    nature1Title: "1. Reflection of the Alps",
    nature1P: "One of the most stunning views at Lake Zurich is the magnificent reflection of the Alps. When morning mist covers the lake or evening sunset paints the sky red, the snow-capped peaks and their reflections merge into a natural landscape painting.",
    nature2Title: "2. Unique Glacial Lake",
    nature2P: "Lake Zurich is a typical glacial lake formed approximately 15,000 years ago during the Ice Age. The lake water comes from glacial meltwater from the Alps, making it extremely pure with visibility reaching over 10 meters.",
    ecoFact: "✨ Ecological Paradise: Wildlife by the Lake! Lake Zurich is home to various wildlife. In the reed beds by the lake, you can often see swans, ducks, and other water birds leisurely feeding.",
    nature3Title: "3. Seasonal Lakeside Scenery",
    nature3P: "In spring, cherry blossoms bloom by the lake; in summer, blue waves ripple with sailboats; in autumn, red leaves reflect in the water; in winter, if you're lucky, you can see the Alps covered in white snow.",
    nature4Title: "4. Lakeside Gardens and Parks",
    nature4P: "Lake Zurich is lined with beautiful parks and gardens. Seepark features numerous roses and azaleas, making it a favorite spot for locals to relax.",
    actTitle: "🚢 Must-Do Experiences: 4 Classic Activities at Lake Zurich",
    act1Title: "① Steamboat Cruise",
    act1P: "Lake Zurich has several traditional steamboats and modern passenger vessels. The most famous, <strong>SS Stadt Basel</strong>, built in 1914, is still in operation today. A 2-3 hour cruise around the lake is highly recommended.",
    imgCaption: "▲ Traditional steamboat on Lake Zurich, gliding peacefully across the calm waters",
    act2Title: "② Lakeside Cycling",
    act2P: "Lake Zurich features a well-developed cycling path of approximately 120 kilometers. You can rent a bike in downtown Zurich and cycle northward along the lakeside, passing through beautiful lakeside towns.",
    act3Title: "③ Lake Swimming",
    act3P: "Summer (June-September) is the best time for swimming in Lake Zurich. Public swimming areas offer changing rooms, showers, and lifeguard services. Swimming in the clear water while enjoying views of the Alps is a memorable experience.",
    act4Title: "④ Lakeside Dining",
    act4P: "Lake Zurich is lined with elegant restaurants and cafés serving authentic Swiss cuisine and international dishes. You can enjoy Swiss fondue, raclette, or fresh Lake Zurich trout at waterside restaurants.",
    photoTitle: "📸 Photographer's Secrets: 4 Ultimate Photo Spots at Lake Zurich",
    spot1Title: "① Zurich Lakeside Promenade — Classic Lake View",
    spot1P: "The lakeside promenade from Bahnhofstrasse to Bürkliplatz is the most classic location for photographing Lake Zurich. Use a wide-angle lens during early morning or evening for panoramic shots of the lake and Alps.",
    spot2Title: "② Limmat River Mouth — Confluence of Two Rivers",
    spot2P: "The Limmat River flows out of Lake Zurich, creating a unique landscape at its mouth. Standing on the bridge, you can capture the dramatic scene of lake water flowing into the river.",
    spot3Title: "③ Opera House Square — City Reflections",
    spot3P: "The square in front of Zurich Opera House is an excellent spot for capturing lake reflections. When the water is calm, the entire city skyline reflects in the water, creating a symmetrical masterpiece.",
    spot4Title: "④ Lake Sunrise — Golden Hour",
    spot4P: "For photography enthusiasts, don't miss the sunrise at Lake Zurich. Arrive at 5-6 AM and face east to photograph the sunrise. The golden light illuminating the snow-capped Alps, reflected in the calm lake waters, is breathtaking.",
    tipsTitle: "💡 Lake Zurich Travel Tips",
    tip1Label: "Cruise Fares",
    tip1P: "One-way tickets approximately CHF 8-15, round-trip tickets (including steamboat) approximately CHF 45-60. The <strong>Zürich Card</strong> is recommended for free public transport and cruises.",
    tip2Label: "Transportation",
    tip2P: "A 10-minute walk from Zurich Hauptbahnhof to the lakeside. Tram lines 2 or 5 to Bürkliplatz station are also options.",
    tip3Label: "Swimming Info",
    tip3P: "Summer water temperature is approximately 20-24°C, suitable for swimming. There are several free and paid public swimming areas by the lake.",
    tip4Label: "Bike Rental",
    tip4P: "The lakeside cycling path is approximately 120 kilometers. Plan half a day for cycling.",
    tip5Label: "Best Time to Visit",
    tip5P: "May to October is the best season, with June-August having the most stable weather for swimming and outdoor activities.",
    addressValue: "Bahnhofstrasse / Bürkliplatz, 8001 Zürich, Switzerland",
    hours24: "Lakeside: 24 hours<br/>Cruises: 09:00-18:00",
    feeValue: "Lakeside: Free<br/>Cruises: CHF 8-60",
    ratingValue: "4.8/5.0 (89,234 reviews)",
    transportValue: "Tram to Bürkliplatz",
    durationValue: "3-5 hours",
    shareTitleText: "🏞️ The Emerald Tear Drop Under the Alps: Complete Lake Zurich Guide",
  },
};

export default function LakeZurichPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950/50 to-teal-950/30 text-white">
      <ReadingProgress />
      <TravelLanguageSelector />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-900/95 to-cyan-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            {tc.tocTitle}
          </h3>
          <ul className="space-y-1">
            {tocItems[lang].map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200/70 hover:text-white hover:bg-blue-800/50"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-blue-900/30 px-4 py-2 rounded-full hover:bg-blue-800/50"
        >
          {tc.backHome}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          {t.blog}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            {tc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            {tc.title}
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">{tc.subtitle}</h2>
          <p className="text-blue-600">June 2026 · {tc.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
            alt={tc.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-600 text-sm mb-12">
          {tc.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: tc.introP1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: tc.introP2 }}></p>

          <div id="nature" className="bg-gradient-to-br from-blue-900/50 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.natureTitle}
            </h3>
            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.nature1Title}</h4>
            <p className="text-blue-100/80" dangerouslySetInnerHTML={{ __html: tc.nature1P }}></p>
            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.nature2Title}</h4>
            <p className="text-blue-100/80" dangerouslySetInnerHTML={{ __html: tc.nature2P }}></p>
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border border-cyan-500/30 rounded-xl p-5 my-6">
              <p className="text-blue-100/80" dangerouslySetInnerHTML={{ __html: tc.ecoFact }}></p>
            </div>
            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.nature3Title}</h4>
            <p className="text-blue-100/80" dangerouslySetInnerHTML={{ __html: tc.nature3P }}></p>
            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.nature4Title}</h4>
            <p className="text-blue-100/80" dangerouslySetInnerHTML={{ __html: tc.nature4P }}></p>
          </div>

          <h2 id="activities" dangerouslySetInnerHTML={{ __html: tc.actTitle }}></h2>
          <h3>{tc.act1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.act1P }}></p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"
              alt={tc.title}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-center text-blue-600 text-sm mt-4 mb-8">
              {tc.imgCaption}
            </p>
          </div>

          <h3>{tc.act2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.act2P }}></p>
          <h3>{tc.act3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.act3P }}></p>
          <h3>{tc.act4Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.act4P }}></p>

          <h2 id="photo-spots" dangerouslySetInnerHTML={{ __html: tc.photoTitle }}></h2>
          <h3>{tc.spot1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot1P }}></p>
          <h3>{tc.spot2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot2P }}></p>
          <h3>{tc.spot3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot3P }}></p>
          <h3>{tc.spot4Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.spot4P }}></p>

          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.tipsTitle}
            </h3>
            <ul className="space-y-3 text-blue-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>{tc.tip1Label}：</strong>{tc.tip1P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🚆</span>
                <span><strong>{tc.tip2Label}：</strong>{tc.tip2P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🏊</span>
                <span><strong>{tc.tip3Label}：</strong>{tc.tip3P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚴</span>
                <span><strong>{tc.tip4Label}：</strong>{tc.tip4P}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">☀️</span>
                <span><strong>{tc.tip5Label}：</strong>{tc.tip5P}</span>
              </li>
            </ul>
          </div>

          <h2 dangerouslySetInnerHTML={{ __html: tc.infoTitle }}></h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.address}</span>
              <p className="text-blue-100/80 text-sm mt-1">{tc.addressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.hours}</span>
              <p className="text-blue-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.hours24 }}></p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.fee}</span>
              <p className="text-blue-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.feeValue }}></p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.rating}</span>
              <p className="text-blue-100/80 text-sm mt-1">{tc.ratingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.transport}</span>
              <p className="text-blue-100/80 text-sm mt-1">{tc.transportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">{tc.duration}</span>
              <p className="text-blue-100/80 text-sm mt-1">{tc.durationValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.ratingTitle}
            </h3>
            <StarRating slug="lake-zurich" />
          </div>

          <div className="bg-blue-900/30 rounded-2xl p-6 my-10 border border-blue-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">{tc.shareTitle}</h3>
            <SocialShare title={tc.shareTitleText} />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30 flex items-center gap-4">
              <span className="text-blue-100/80">{tc.favoriteText}</span>
              <FavoriteButton slug="lake-zurich" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="lake-zurich" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="lake-zurich" />
    </div>
  );
}