"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🌅" },
    { id: "spots", title: "打卡位", emoji: "📸" },
    { id: "experience", title: "實地遊覽", emoji: "🇬🇷" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🌅" },
    { id: "spots", title: "打卡位", emoji: "📸" },
    { id: "experience", title: "实地游览", emoji: "🇬🇷" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🌅" },
    { id: "spots", title: "Photo Spots", emoji: "📸" },
    { id: "experience", title: "Experience", emoji: "🇬🇷" },
    { id: "tips", title: "Practical Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🌅" },
    { id: "spots", title: "打卡位", emoji: "📸" },
    { id: "experience", title: "實地遊覽", emoji: "🇬🇷" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const tags = {
  "zh-TW": ["聖托里尼", "伊亞", "希臘", "日落", "愛琴海"],
  "zh-CN": ["圣托里尼", "伊亚", "希腊", "日落", "爱琴海"],
  en: ["Santorini", "Oia", "Greece", "Sunset", "Aegean"],
  yue: ["聖托里尼", "伊亞", "希臘", "日落", "愛琴海"],
};

const content = {
  "zh-TW": {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希臘 · 聖托里尼",
    title: "愛琴海燃燒的終極終章",
    subtitle: "希臘聖托里尼伊亞（Oia）落日熔金大數據與極致慢活攻略",
    author: "純粹旅人",
    heroCaption: "▲ 伊亞小鎮的標誌性藍頂教堂，白牆與蔚藍圓頂在愛琴海陽光下熠熠生輝",
    quote: "「荷馬在《奧德賽》裡寫道，愛琴海是『葡萄酒色的海洋』；而當你站在伊亞的拜占庭城堡廢墟之巔，看著太陽將純白色的風車、藍頂教堂與一望無際的火山懸崖瞬間染成瘋狂的絢麗金橙，你才會明白：這是一場全人類一生中必須共同朝聖一次的宇宙級視覺謝幕。」",
    intro: "如果說雅典的衛城展現了古希臘理性與石頭的永恆神話，那麼懸掛在聖托里尼島（Santorini）最北端、如瀑布般傾瀉在 300 米高的火山絕壁之上的伊亞（Oia）小鎮，無疑就是這座藍白海島最唯美、最令人屏息的靈魂名片。這裡的代名詞是 ── 「全球最美落日」。當火紅的太陽沉入湛藍的基克拉澤斯海面，整座懸崖大理石步道會響起雷鳴般的掌聲與歡呼。",
    spotsTitle: "伊亞落日三大核心黃金打卡位",
    spot1Title: "拜占庭城堡廢墟",
    spot1Desc: "位於小鎮最西端，可完美同時將大風車、火山灣與夕陽沒入海畔收納入鏡。360度落日完美制高點。",
    spot2Title: "經典三大藍頂教堂",
    spot2Desc: "位於小鎮中心。黃昏時白牆被晚霞鍍成粉紅色，與蔚藍圓頂形成強烈對比。國家地理雜誌封面取景地。",
    spot3Title: "阿莫迪港口 (Amoudi Bay)",
    spot3Desc: "順著 300 級台階而下，在海畔吃著現捕明火烤魷魚，一邊平視太陽沉入愛琴海。海鮮大排檔平視海畔。",
    experienceTitle: "第一身沉浸實感：在藍頂與火海交織間見證奇蹟",
    experienceImageCaption: "▲ 夕陽沉入愛琴海的壯觀瞬間，整座伊亞懸崖響起經久不息的掌聲",
    experienceText1: "順著依山而建、光潔如鏡的純白色大理石主步行道踱步前進，每拐過一個街角，一整片湛藍得不帶一絲雜質的愛琴海便在 300 米高的懸崖下方排山倒海般平鋪開來。這裡是一座白色的垂直迷宮。",
    experienceText2: "傍晚 19:40，當太陽漸漸沉向海平線，大自然最放肆的調色盤正式啟動。原本純白色的懸崖洞穴屋、風車與外側露天台，在金黃色的「黃金時刻（Golden Hour）」照耀下，被齊刷刷地鍍上了一層耀眼奪目的碎金。",
    spectrumTitle: "伊亞落日「天空色彩光譜分佈」",
    spectrum1Title: "黃金時刻 (前20分)",
    spectrum1Desc: "亮黃與香檳金鍍滿懸崖",
    spectrum2Title: "熔金火海 (落海5分)",
    spectrum2Desc: "火紅烈焰吞噬海平線",
    spectrum3Title: "粉紅餘暉 (落海後10分)",
    spectrum3Desc: "夢幻棉花糖紫粉色染紅雲海",
    spectrum4Title: "皇家藍調 (最後5分)",
    spectrum4Desc: "深邃神聖藍（Blue Hour）亮燈",
    experienceText3: "當太陽最終化為一團熾熱的熔金，不偏不倚地沒入遠方深藍色的海畔中央，整座伊亞懸崖會瞬間響起經久不息的掌聲、口哨聲與碰杯聲，那種全人類超越國界、對大自然崇高美學的集體致敬，直擊心靈，震撼得讓人头皮發麻。",
    foodTitle: "食貨老饕推介：伊亞懸崖與港灣的 2 大物超所值舌尖發現",
    food1Title: "阿莫迪港口的海畔海鮮大排檔",
    food1Desc: "黃昏前順著 300 級之字形石階走下火山懸崖底部的阿莫迪港口。桌椅直接架在清澈見底的海水邊，點一隻明火炭烤的巨型章魚腳，肉質極其彈牙且帶有焦香。",
    food2Title: "希臘地道「Moussaka」與羊起司沙律",
    food2Desc: "在小鎮老街的傳統酒館（Taverna）裡，吃一份用茄子、碎肉與厚厚起司烘烤而成的 Moussaka，起司香氣濃郁。",
    tipsTitle: "精明自遊：伊亞落日完美防坑與卡位隨身手札",
    tip1Title: "城堡廢墟提早 2 小時「絕對卡位」",
    tip1Desc: "拜占庭城堡廢墟空間極小，旺季（6月-9月）必須提早於落日時間前 2 小時抵達現場卡位！",
    tip2Title: "花錢買輕鬆的「日落景觀餐廳」高級智慧",
    tip2Desc: "提前 1 個月預訂能看見西面風車落日的懸崖餐廳（如 Kastro Oia Restaurant 或 Sunset Ammoudi），能優雅地嘆著海風、喝著香檳平視全球最美落日。",
    tip3Title: "利用「早鳥晨曦包場」拍無人藍頂照",
    tip3Desc: "早上 07:00-09:00 之間的伊亞是一座完全空靈的「純白靜謐之城」，想要拍到背景完全乾淨、最標誌性的藍頂教堂與風車大片，清晨是最佳時機。",
    tip4Title: "防滑與鞋履莊嚴警告",
    tip4Desc: "主要街道是由古老火山大理石板鋪成，請務必穿著高抓地力、鞋底防滑性能卓越的運動健步鞋！",
    infoTitle: "景點資訊一覽",
    infoAddress: "地址",
    infoAddressValue: "Oia, Santorini 847 02, Greece",
    infoHours: "開放時間",
    infoHoursValue: "全天候開放 / 建議清晨或傍晚遊覽",
    infoPrice: "費用",
    infoPriceValue: "小鎮參觀免費 / 景觀餐廳低消 €50+",
    infoRating: "評分",
    infoRatingValue: "4.9/5.0（89,432 評論）",
    infoTransport: "交通",
    infoTransportValue: "從費拉乘巴士約30分鐘",
    infoTime: "建議遊覽",
    infoTimeValue: "半天至一天",
    shareTitle: "分享給朋友",
    shareDefaultTitle: "🌅 愛琴海燃燒的終極終章：希臘聖托里尼伊亞落日熔金攻略",
    favoriteText: "加入心願清單：",
    footer: "歲月流逝於海浪，熔金落幕於愛琴。願每位造訪這片藍白淨土的旅人，都能在伊亞的極致晚霞中找到屬於自己的浪漫夢。",
    ratingTitle: "給這個景點評分",
  },
  "zh-CN": {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希腊 · 圣托里尼",
    title: "爱琴海燃烧的终极终章",
    subtitle: "希腊圣托里尼伊亚（Oia）落日熔金大数据与极致慢活攻略",
    author: "纯粹旅人",
    heroCaption: "▲ 伊亚小镇的标志性蓝顶教堂，白墙与蔚蓝圆顶在爱琴海阳光下熠熠生辉",
    quote: "「荷马在《奥德赛》里写道，爱琴海是『葡萄酒色的海洋』；而当你站在伊亚的拜占庭城堡废墟之巅，看着太阳将纯白色的风车、蓝顶教堂与一望无际的火山悬崖瞬间染成疯狂的绚丽金橙，你才会明白：这是一场全人类一生中必须共同朝圣一次的宇宙级视觉谢幕。」",
    intro: "如果说雅典的卫城展现了古希腊理性与石头的永恒神话，那么悬挂在圣托里尼岛（Santorini）最北端、如瀑布般倾泻在 300 米高的火山绝壁之上的伊亚（Oia）小镇，无疑就是这座蓝白海岛最唯美、最令人屏息的灵魂名片。这里的代名词是 ── 「全球最美落日」。当火红的太阳沉入湛蓝的基克拉泽斯海面，整座悬崖大理石步道会响起雷鸣般的掌声与欢呼。",
    spotsTitle: "伊亚落日三大核心黄金打卡位",
    spot1Title: "拜占庭城堡废墟",
    spot1Desc: "位于小镇最西端，可完美同时将大风车、火山湾与夕阳没入海畔收纳入镜。360度落日完美制高点。",
    spot2Title: "经典三大蓝顶教堂",
    spot2Desc: "位于小镇中心。黄昏时白墙被晚霞镀成粉红色，与蔚蓝圆顶形成强烈对比。国家地理杂志封面取景地。",
    spot3Title: "阿莫迪港口 (Amoudi Bay)",
    spot3Desc: "顺着 300 级台阶而下，在海畔吃着现捕明火烤鱿鱼，一边平视太阳沉入爱琴海。海鲜大排档平视海畔。",
    experienceTitle: "第一身沉浸实感：在蓝顶与火海交织间见证奇迹",
    experienceImageCaption: "▲ 夕阳沉入爱琴海的壮观瞬间，整座伊亚悬崖响起经久不息的掌声",
    experienceText1: "顺着依山而建、光洁如镜的纯白色大理石主步行道踱步前进，每拐过一个街角，一整片湛蓝得不带一丝杂质的爱琴海便在 300 米高的悬崖下方排山倒海般平铺开来。这里是一座白色的垂直迷宫。",
    experienceText2: "傍晚 19:40，当太阳渐渐沉向海平线，大自然最放肆的调色盘正式启动。原本纯白色的悬崖洞穴屋、风车与外侧露天台，在金黄色的「黄金时刻（Golden Hour）」照耀下，被齐刷刷地镀上了一层耀眼夺目的碎金。",
    spectrumTitle: "伊亚落日「天空色彩光谱分布」",
    spectrum1Title: "黄金时刻 (前20分)",
    spectrum1Desc: "亮黄与香槟金镀满悬崖",
    spectrum2Title: "熔金火海 (落海5分)",
    spectrum2Desc: "火红烈焰吞噬海平线",
    spectrum3Title: "粉红余晖 (落海后10分)",
    spectrum3Desc: "梦幻棉花糖紫粉色染红云海",
    spectrum4Title: "皇家蓝调 (最后5分)",
    spectrum4Desc: "深邃神圣蓝（Blue Hour）亮灯",
    experienceText3: "当太阳最终化为一团炽热的熔金，不偏不倚地没入远方深蓝色的海畔中央，整座伊亚悬崖会瞬间响起经久不息的掌声、口哨声与碰杯声，那种全人类超越国界、对大自然崇高美学的集体致敬，直击心灵，震撼得让人头皮发麻。",
    foodTitle: "食货老饕推介：伊亚悬崖与港湾的 2 大物超所值舌尖发现",
    food1Title: "阿莫迪港口的海畔海鲜大排档",
    food1Desc: "黄昏前顺着 300 级之字形石阶走下火山悬崖底部的阿莫迪港口。桌椅直接架在清澈见底的海水边，点一只明火炭烤的巨型章鱼脚，肉质极其弹牙且带有焦香。",
    food2Title: "希腊地道「Moussaka」与羊起司沙律",
    food2Desc: "在小镇老街的传统酒馆（Taverna）里，吃一份用茄子、碎肉与厚厚的起司烘烤而成的 Moussaka，起司香气浓郁。",
    tipsTitle: "精明自游：伊亚落日完美防坑与卡位随身手册",
    tip1Title: "城堡废墟提早 2 小时「绝对卡位」",
    tip1Desc: "拜占庭城堡废墟空间极小，淡季（6月-9月）必须提早于落日时间前 2 小时抵达现场卡位！",
    tip2Title: "花钱买轻松的「日落景观餐厅」高级智慧",
    tip2Desc: "提前 1 个月预订能看见西面风车落日的悬崖餐厅（如 Kastro Oia Restaurant 或 Sunset Ammoudi），能优雅地叹着海风、喝着香槟平视全球最美落日。",
    tip3Title: "利用「早鸟晨曦包场」拍无人蓝顶照",
    tip3Desc: "早上 07:00-09:00 之间的伊亚是一座完全空灵的「纯白静谧之城」，想要拍到背景完全干净、最标志性的蓝顶教堂与风车大片，清晨是最佳时机。",
    tip4Title: "防滑与鞋履庄严警告",
    tip4Desc: "主要街道是由古老火山大理石板铺成，请务必穿着高抓地力、鞋底防滑性能卓越的运动健步鞋！",
    infoTitle: "景点资讯一览",
    infoAddress: "地址",
    infoAddressValue: "Oia, Santorini 847 02, Greece",
    infoHours: "开放时间",
    infoHoursValue: "全天候开放 / 建议清晨或傍晚游览",
    infoPrice: "费用",
    infoPriceValue: "小镇参观免费 / 景观餐厅低消 €50+",
    infoRating: "评分",
    infoRatingValue: "4.9/5.0（89,432 评论）",
    infoTransport: "交通",
    infoTransportValue: "从费拉乘巴士约30分钟",
    infoTime: "建议游览",
    infoTimeValue: "半天至一天",
    shareTitle: "分享给朋友",
    shareDefaultTitle: "🌅 爱琴海燃烧的终极终章：希腊圣托里尼伊亚落日熔金攻略",
    favoriteText: "加入心愿清单：",
    footer: "岁月流逝于海浪，熔金落幕于爱琴。愿每位造访这片蓝白净土的旅人，都能在伊亚的极致晚霞中找到属于自己的浪漫梦。",
    ratingTitle: "给这个景点评分",
  },
  en: {
    backText: "Back to NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 Greece · Santorini",
    title: "The Ultimate Finale of the Burning Aegean Sea",
    subtitle: "Santorini Oia Sunset: Golden Fire Data & Ultimate Slow Travel Guide",
    author: "Pure Traveler",
    heroCaption: "▲ The iconic blue-domed church in Oia town, white walls and azure domes glisten under Aegean sunlight",
    quote: "「Homer wrote in the Odyssey that the Aegean is the 'wine-dark sea'; and when you stand atop the Byzantine castle ruins in Oia watching the sun transform pure white windmills, blue-domed churches, and endless volcanic cliffs into疯狂绚丽金橙, you understand: this is a cosmic-level visual finale that all humanity must pilgrimage to at least once in their lifetime.」",
    intro: "If the Athens Acropolis embodies ancient Greek rationality and eternal stone mythology, then Oia – perched at Santorini's northernmost tip, cascading down 300-meter volcanic cliffs like a waterfall – is undoubtedly this blue-and-white island's most beautiful, most breathtaking soul card. Its synonym is ── 「World's Most Beautiful Sunset.」 When the fiery sun sinks into the sapphire Cyclades Sea, the entire marble cliffside promenade erupts in thunderous applause and cheers.",
    spotsTitle: "Oia Sunset Three Core Golden Photo Spots",
    spot1Title: "Byzantine Castle Ruins",
    spot1Desc: "Located at the westernmost point of town, perfectly frames the windmill, volcanic bay, and sunset setting into the sea. 360-degree sunset vantage point.",
    spot2Title: "Classic Three Blue-Domed Churches",
    spot2Desc: "Located in the town center. At dusk, white walls are gilded pink by the sunset, creating dramatic contrast with azure domes. National Geographic cover location.",
    spot3Title: "Amoudi Bay",
    spot3Desc: "Descend 300 steps to eat freshly grilled octopus at the seaside. Watch the sun sink into the Aegean at eye level. Seafood taverna at sea level.",
    experienceTitle: "First-Person Immersive: Witnessing Miracles Between Blue Domes and Sea of Fire",
    experienceImageCaption: "▲ The spectacular moment the sunset sinks into the Aegean, applause echoes across Oia's cliffs",
    experienceText1: "Strolling along the mirror-smooth pure white marble main pathway built into the mountainside, every corner reveals another breathtaking panoramic view of the pure Aegean Sea 300 meters below. This is a white vertical labyrinth.",
    experienceText2: "At 19:40, as the sun gradually descends toward the horizon, nature's boldest palette officially begins. The originally pure white cliffside cave houses, windmills, and outdoor terraces are all gilded in brilliant, eye-catching gold under the Golden Hour light.",
    spectrumTitle: "Oia Sunset 「Sky Color Spectrum Distribution」",
    spectrum1Title: "Golden Hour (First 20 min)",
    spectrum1Desc: "Bright yellow & champagne gold cover the cliffs",
    spectrum2Title: "Molten Gold Sea of Fire (5 min into sea)",
    spectrum2Desc: "Fiery red flames devour the horizon",
    spectrum3Title: "Pink Afterglow (10 min after sea)",
    spectrum3Desc: "Dreamy cotton-candy purple-pink blushes the clouds",
    spectrum4Title: "Royal Blue Hour (Final 5 min)",
    spectrum4Desc: "Deep sacred blue (Blue Hour) lights up",
    experienceText3: "When the sun finally becomes a ball of炽热的熔金 and precisely sinks into the center of the distant deep blue sea, Oia's cliffs instantly erupt in thunderous applause, whistles, and clinking glasses. That cross-border, universal tribute to nature's sublime aesthetics hits the soul so powerfully it's mind-blowing.",
    foodTitle: "Foodie Recommendations: 2 Amazing Value Discoveries at Oia Cliffs & Bay",
    food1Title: "Amoudi Bay Seafood Taverna",
    food1Desc: "Before dusk, descend the 300 zigzag stone steps to Amoudi Bay at the volcanic cliff's base. Tables directly on crystal-clear water. Order charcoal-grilled giant octopus – extremely chewy with smoky char.",
    food2Title: "Greek Authentic Moussaka & Feta Salad",
    food2Desc: "At traditional tavernas in the old town, try Moussaka – baked layers of eggplant, minced meat, and thick cheese. Rich, aromatic cheese flavor.",
    tipsTitle: "Smart Travel: Oia Sunset Perfect Anti-Scam & Prime Spot Guide",
    tip1Title: "Arrive at Castle Ruins 2 Hours Early for Prime Spots",
    tip1Desc: "Byzantine castle ruins have very limited space. During peak season (June-September), you MUST arrive 2 hours before sunset to secure a spot!",
    tip2Title: "Worth the Splurge: Sunset View Restaurant",
    tip2Desc: "Book cliffside restaurants with western windmill sunset views 1 month in advance (like Kastro Oia or Sunset Ammoudi). Enjoy the world's most beautiful sunset while sipping champagne in the sea breeze.",
    tip3Title: "Use Early Bird Morning for Empty Blue Dome Shots",
    tip3Desc: "Between 07:00-09:00, Oia is a completely serene 'white quiet city.' For perfectly clean backgrounds of iconic blue-dome churches and windmills, morning is the best time.",
    tip4Title: "Strict Anti-Slip Footwear Warning",
    tip4Desc: "Main streets are paved with ancient volcanic marble slabs. ALWAYS wear high-grip, excellent traction athletic shoes!",
    infoTitle: "Attraction Information",
    infoAddress: "Address",
    infoAddressValue: "Oia, Santorini 847 02, Greece",
    infoHours: "Hours",
    infoHoursValue: "Open 24/7 / Best at dawn or dusk",
    infoPrice: "Price",
    infoPriceValue: "Free to visit town / View restaurants min €50+",
    infoRating: "Rating",
    infoRatingValue: "4.9/5.0 (89,432 reviews)",
    infoTransport: "Transport",
    infoTransportValue: "30 min bus from Fira",
    infoTime: "Recommended Visit",
    infoTimeValue: "Half day to full day",
    shareTitle: "Share with Friends",
    shareDefaultTitle: "🌅 The Ultimate Finale of the Burning Aegean: Santorini Oia Sunset Guide",
    favoriteText: "Add to Wishlist:",
    footer: "Time flows in the waves, molten gold ends in the Aegean. May every pilgrim to this blue-white paradise find their own romantic dream in Oia's ultimate evening glow.",
    ratingTitle: "Rate This Attraction",
  },
  yue: {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希臘 · 聖托里尼",
    title: "愛琴海燃燒嘅終極終章",
    subtitle: "希臘聖托里尼伊亞（Oia）日落熔金大數據與極致慢活攻略",
    author: "純粹旅人",
    heroCaption: "▲ 伊亞小鎮嘅標誌性藍頂教堂，白牆與蔚藍圓頂喺愛琴海陽光下熠熠生輝",
    quote: "「荷馬喺《奧德賽》裡寫道，愛琴海係『葡萄酒色嘅海洋』；而當你站在伊亞嘅拜占庭城堡廢墟之巔，睇住太陽將純白色嘅風車、藍頂教堂與一望無際嘅火山懸崖瞬間染成瘋狂嘅絢麗金橙，你先至會明白：呢係一場全人類一生中必須共同朝聖一次嘅宇宙級視覺謝幕。」",
    intro: "如果話雅典嘅衛城展現咗古希臘理性與石頭嘅永恆神話，咁懸掛喺聖托里尼島（Santorini）最北端、如瀑布般傾瀉喺300米高嘅火山絕壁之上嘅伊亞（Oia）小鎮，無疑就係呢座藍白海島最唯美、最令人屏息嘅靈魂名片。呢度嘅代名詞係 ── 「全球最美日落」。當火紅嘅太陽沉入湛藍嘅基克拉澤斯海面，整座懸崖大理石步道會響起雷鳴般嘅掌聲與歡呼。",
    spotsTitle: "伊亞日落三大核心黃金打卡位",
    spot1Title: "拜占庭城堡廢墟",
    spot1Desc: "位於小鎮最西端，可完美同時將大風車、火山灣與夕陽沒入海畔收納入鏡。360度日落完美制高點。",
    spot2Title: "經典三大藍頂教堂",
    spot2Desc: "位於小鎮中心。黃昏時白牆被晚霞鍍成粉紅色，與蔚藍圓頂形成強烈對比。國家地理雜誌封面取景地。",
    spot3Title: "阿莫迪港口 (Amoudi Bay)",
    spot3Desc: "順住300級台階而下，喺海畔食住現捕明火烤魷魚，一邊平視太陽沉入愛琴海。海鮮大排檔平視海畔。",
    experienceTitle: "第一身沉浸實感：喺藍頂與火海交織間見證奇蹟",
    experienceImageCaption: "▲ 夕陽沉入愛琴海嘅壯觀瞬間，整座伊亞懸崖響起經久不息嘅掌聲",
    experienceText1: "順住依山而建、光潔如鏡嘅純白色大理石主步行道踱步前進，每拐過一個街角，一整片湛藍得唔帶一絲雜質嘅愛琴海便喺300米高嘅懸崖下方排山倒海般平鋪開來。呢度係一座白色嘅垂直迷宮。",
    experienceText2: "傍晚19:40，當太陽漸漸沉向海平線，大自然最放肆嘅調色盤正式啟動。本來純白色嘅懸崖洞穴屋、風車與外側露天台，喺金黃色嘅「黃金時刻（Golden Hour）」照耀下，被齊刷刷地鍍上一層耀眼奪目嘅碎金。",
    spectrumTitle: "伊亞日落「天空色彩光譜分佈」",
    spectrum1Title: "黃金時刻 (前20分)",
    spectrum1Desc: "亮黃與香檳金鍍滿懸崖",
    spectrum2Title: "熔金火海 (落海5分)",
    spectrum2Desc: "火紅烈焰吞噬海平線",
    spectrum3Title: "粉紅餘暉 (落海後10分)",
    spectrum3Desc: "夢幻棉花糖紫粉色染紅雲海",
    spectrum4Title: "皇家藍調 (最後5分)",
    spectrum4Desc: "深邃神聖藍（Blue Hour）亮燈",
    experienceText3: "當太陽最終化為一團熾熱嘅熔金，不偏不倚地沒入遠方深藍色嘅海畔中央，整座伊亞懸崖會瞬間響起經久不息嘅掌聲、口哨聲與碰杯聲，嗰種全人類超越國界、對大自然崇高美學嘅集體致敬，直擊心靈，震撼得令人头皮发麻。",
    foodTitle: "食貨老饕推介：伊亞懸崖與港灣嘅2大物超所值舌尖發現",
    food1Title: "阿莫迪港口嘅海畔海鮮大排檔",
    food1Desc: "黃昏前順住300級之字形石階走下火山懸崖底部嘅阿莫迪港口。桌椅直接架喺清澈見底嘅海水邊，點一隻明火炭烤嘅巨型章魚腳，肉質極其彈牙且帶有焦香。",
    food2Title: "希臘地道「Moussaka」與羊起司沙律",
    food2Desc: "喺小鎮老街嘅傳統酒館（Taverna）裡面，食一份用茄子、碎肉與厚厚起司烘烤而成嘅Moussaka，起司香氣濃郁。",
    tipsTitle: "精明自遊：伊亞日落完美防伏與卡位隨身手冊",
    tip1Title: "城堡廢墟提早2小時「絕對卡位」",
    tip1Desc: "拜占庭城堡廢墟空間極細，旺季（6月-9月）必須提早於日落時間前2小時抵達現場卡位！",
    tip2Title: "花錢買輕鬆嘅「日落景觀餐廳」高級智慧",
    tip2Desc: "提前1個月預訂能睇見西面風車日落嘅懸崖餐廳（如Kastro Oia Restaurant或Sunset Ammoudi），能優雅地嘆住海風、飲住香檳平視全球最美日落。",
    tip3Title: "利用「早鳥晨曦包場」影無人大藍頂照",
    tip3Desc: "早上07:00-09:00之間嘅伊亞係一座完全空靈嘅「純白靜謐之城」，想要影到背景完全乾淨、最標誌性嘅藍頂教堂與風車大片，清晨係最佳時機。",
    tip4Title: "防滑與鞋履莊嚴警告",
    tip4Desc: "主要街道係由古老火山大理石板鋪成，請務必著住高抓地力、鞋底防滑性能卓越嘅運動健步鞋！",
    infoTitle: "景點資訊一覽",
    infoAddress: "地址",
    infoAddressValue: "Oia, Santorini 847 02, Greece",
    infoHours: "開放時間",
    infoHoursValue: "全天候開放 / 建議清晨或傍晚遊覽",
    infoPrice: "費用",
    infoPriceValue: "小鎮參觀免費 / 景觀餐廳低消€50+",
    infoRating: "評分",
    infoRatingValue: "4.9/5.0（89,432 評論）",
    infoTransport: "交通",
    infoTransportValue: "從費拉乘巴士約30分鐘",
    infoTime: "建議遊覽",
    infoTimeValue: "半天至一天",
    shareTitle: "分享俾朋友",
    shareDefaultTitle: "🌅 愛琴海燃燒嘅終極終章：希臘聖托里尼伊亞日落熔金攻略",
    favoriteText: "加入心願清單：",
    footer: "歲月流逝於海浪，熔金落幕於愛琴。願每位造訪呢片藍白淨土嘅旅人，都能在伊亞嘅極致晚霞中找到屬於自己嘅浪漫夢。",
    ratingTitle: "俾呢個景點評分",
  },
};

export default function SantoriniOiaPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("intro");
  const c = content[lang];
  const toc = tocItems[lang];
  const currentTags = tags[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900/50 to-slate-900/30 text-white">
      <ReadingProgress />
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-800/95 to-indigo-800/95 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-300 mb-4 flex items-center gap-2">
            📋 {lang === "en" ? "Contents" : "目錄導覽"}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200/70 hover:text-white hover:bg-blue-700/50"
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
          className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors bg-blue-800/30 px-4 py-2 rounded-full hover:bg-blue-700/50"
        >
          ← {c.backText}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 ml-6 transition-colors"
        >
          | {c.blogText}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            {c.location}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            {c.title}
          </h1>
          <h2 className="text-xl text-blue-300 font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-blue-400">June 2026 · {c.author === "Pure Traveler" ? "Author: " : "作者："} {c.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-400 text-sm mb-12">{c.heroCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-8">
            <p className="text-blue-100 text-lg italic leading-relaxed border-l-4 border-orange-500/50 pl-6">
              {c.quote}
            </p>
          </div>

          <p id="intro">{c.intro}</p>

          <div id="spots" className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-300 font-bold mb-4 flex items-center gap-2 text-xl">
              📸 {c.spotsTitle}
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-800/40 to-indigo-800/30 border border-blue-500/30 rounded-xl p-5">
                <h4 className="text-blue-300 font-bold mb-2">{c.spot1Title}</h4>
                <p className="text-blue-100/80 text-sm">{c.spot1Desc}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/40 to-amber-800/30 border border-orange-500/30 rounded-xl p-5">
                <h4 className="text-orange-300 font-bold mb-2">{c.spot2Title}</h4>
                <p className="text-orange-100/80 text-sm">{c.spot2Desc}</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/40 to-yellow-700/30 border border-yellow-500/30 rounded-xl p-5">
                <h4 className="text-yellow-300 font-bold mb-2">{c.spot3Title}</h4>
                <p className="text-yellow-100/80 text-sm">{c.spot3Desc}</p>
              </div>
            </div>
          </div>

          <h2 id="experience">🇬🇷 {c.experienceTitle}</h2>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80"
              alt="Santorini Sunset"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-blue-400 text-sm mt-4 mb-8">{c.experienceImageCaption}</p>
          </div>

          <p>{c.experienceText1}</p>

          <p>{c.experienceText2}</p>

          <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/30 border border-orange-700/30 rounded-xl p-5 my-8">
            <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
              🌅 {c.spectrumTitle}
            </h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-3 bg-yellow-500/20 rounded-lg">
                <p className="text-yellow-300 font-bold">{c.spectrum1Title}</p>
                <p className="text-yellow-100/70 text-xs">{c.spectrum1Desc}</p>
              </div>
              <div className="text-center p-3 bg-orange-500/20 rounded-lg">
                <p className="text-orange-300 font-bold">{c.spectrum2Title}</p>
                <p className="text-orange-100/70 text-xs">{c.spectrum2Desc}</p>
              </div>
              <div className="text-center p-3 bg-pink-500/20 rounded-lg">
                <p className="text-pink-300 font-bold">{c.spectrum3Title}</p>
                <p className="text-pink-100/70 text-xs">{c.spectrum3Desc}</p>
              </div>
              <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                <p className="text-blue-300 font-bold">{c.spectrum4Title}</p>
                <p className="text-blue-100/70 text-xs">{c.spectrum4Desc}</p>
              </div>
            </div>
          </div>

          <p>{c.experienceText3}</p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              🐙 {c.foodTitle}
            </h3>
            <ul className="space-y-3 text-green-100/80">
              <li className="flex gap-3">
                <span className="text-orange-400">🚢</span>
                <span><strong>{c.food1Title}:</strong> {c.food1Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">🍖</span>
                <span><strong>{c.food2Title}:</strong> {c.food2Desc}</span>
              </li>
            </ul>
          </div>

          <h2 id="tips">💡 {c.tipsTitle}</h2>

          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-blue-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🏰</span>
                <span><strong>{c.tip1Title}:</strong> {c.tip1Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🍷</span>
                <span><strong>{c.tip2Title}:</strong> {c.tip2Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">📸</span>
                <span><strong>{c.tip3Title}:</strong> {c.tip3Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>{c.tip4Title}:</strong> {c.tip4Desc}</span>
              </li>
            </ul>
          </div>

          <h2>📊 {c.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">📍 {c.infoAddress}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoAddressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">🕐 {c.infoHours}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoHoursValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">💰 {c.infoPrice}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoPriceValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⭐ {c.infoRating}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoRatingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">✈️ {c.infoTransport}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoTransportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⏱️ {c.infoTime}</span>
              <p className="text-blue-100/80 text-sm mt-1">{c.infoTimeValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ {c.ratingTitle}
            </h3>
            <StarRating slug="santorini-oia" />
          </div>

          <div className="bg-blue-900/30 rounded-2xl p-6 my-10 border border-blue-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 {c.shareTitle}</h3>
            <SocialShare title={c.shareDefaultTitle} />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30 flex items-center gap-4">
              <span className="text-blue-100/80">{c.favoriteText}</span>
              <FavoriteButton slug="santorini-oia" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-blue-700/30 pt-8 mt-8">
            <p className="text-blue-400 italic text-center">{c.footer}</p>
          </div>

          <RelatedPosts currentSlug="santorini-oia" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="santorini-oia" />
    </div>
  );
}
