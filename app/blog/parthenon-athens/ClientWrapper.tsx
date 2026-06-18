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
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "architecture", title: "建築奇蹟", emoji: "📐" },
    { id: "history", title: "歷史命運", emoji: "🔑" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🏛️" },
    { id: "architecture", title: "建筑奇迹", emoji: "📐" },
    { id: "history", title: "历史命运", emoji: "🔑" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🏛️" },
    { id: "architecture", title: "Architectural Marvel", emoji: "📐" },
    { id: "history", title: "Historical Fate", emoji: "🔑" },
    { id: "tips", title: "Practical Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "architecture", title: "建築奇蹟", emoji: "📐" },
    { id: "history", title: "歷史命運", emoji: "🔑" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const tags = {
  "zh-TW": ["帕特農", "雅典", "希臘", "衛城", "古蹟"],
  "zh-CN": ["帕特农", "雅典", "希腊", "卫城", "古迹"],
  en: ["Parthenon", "Athens", "Greece", "Acropolis", "Heritage"],
  yue: ["帕特農", "雅典", "希臘", "衛城", "古蹟"],
};

const content = {
  "zh-TW": {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希臘 · 雅典",
    title: "黃金比例的永恆凝視",
    subtitle: "雅典衛城帕特農神廟（Parthenon）2500年建築幾何大數據攻略",
    author: "純粹旅人",
    heroCaption: "▲ 雅典衛城之巔的帕特農神廟，2500年來守望著西方文明的搖籃",
    quote: "「勒·柯比意說，帕特農神廟是地球上唯一無懈可擊的建築機器；而當你站在高聳的阿提卡懸崖之巔，看著那些在兩千五百年間被戰火、地震與硝煙剝蝕得斑駁的巨型潘特里克大理石柱，在愛琴海的烈日下折射出碎金，你才會明白：希臘人不用一根直線，卻創造了全宇宙最完美的視覺直線。」",
    intro: "如果說聖托里尼的伊亞落日燃燒了愛琴海最繾綽的浪漫，那麼巍然挺立在西方文明搖籃 ── 雅典衛城（Acropolis）最高峰的帕特農神廟（Parthenon），無疑就是整個人類古典美學史上無可撼動的理性王冠。這座始建於公元前 447 年、為了祭祀雅典娜女神而建的偉大神殿，已整整橫跨了 2,470 多年的歷史滄桑。",
    archTitle: "帕特農神廟三大無直線結構：光學視差修正大數據",
    arch1Title: "柱身隆起 (Entasis)",
    arch1Desc: "杜絕視覺「中間變細」。46根外側大理石柱，柱身在1/3高度處向外精確微拱6.5厘米，使遠觀無比挺拔。",
    arch2Title: "地基向上微弧拱起",
    arch2Desc: "杜絕視覺「中段下陷」。神廟底座基石四角偏低，正中心處向上隆起高達11厘米，以此營造完美地平線。",
    arch3Title: "石柱集聚內傾",
    arch3Desc: "宇宙金字塔交匯。所有巨柱皆非垂直，而是向中心微傾。若將軸線向上延伸，將在5000米高空聚於一點。",
    historyTitle: "2500年史詩劫難：神廟歷史命運演變",
    historyImageCaption: "▲ 從菲洛帕波斯山丘俯瞰衛城與愛琴海全景",
    historyText1: "帕特農神廟不僅是美學奇蹟，更是一面記錄了中歐、地中海文明交織衝突的黑色歷史鏡子。它在兩千多年裡頻繁轉變身份：",
    historyPeriod1: "900年",
    historyPeriod1Label: "古希臘異教神殿",
    historyPeriod2: "400年",
    historyPeriod2Label: "基督教天主堂",
    historyPeriod3: "250年",
    historyPeriod3Label: "奧斯曼清真寺",
    historyEvent: "1687年悲劇：威尼斯軍隊一發炮彈精確引爆了廟內的火藥，直接摧毀了其中心拱頂。",
    experienceTitle: "第一身沉浸實感：在金色陰影與千載歷史間站成永恆",
    experienceText1: "順著衛城西側陡峭、被兩千年來幾千萬雙鞋底磨得如同鏡面般光滑的花崗岩山道拾級而上，穿過氣勢磅礴的山門（Propylaea）。當你一腳踏上衛城山頂那片寬闊、荒涼的巨石荒原，那一整面歷經兩千載戰火硝煙、宏偉到不可思議的帕特農神廟主立面便排山倒海般在眼前鋪開。",
    experienceText2: "慢步走到神廟巨大的多立克柱廊下方。整座神廟全部採用產自雅典北部的潘特里克大理石（Pentelic Marble）手工砌成。這種大理石內含有極微量的鐵元素，在歷經2500年的風化氧化後，石表會泛出一層極其高貴、溫潤、如熟透了的麥穗般的黃金蜂蜜色澤。",
    recommendationTitle: "東道主私藏手信與衛城下步行街好去處",
    rec1Title: "普拉卡老城步行街（Plaka）",
    rec1Desc: "緊鄰衛城山腳下，雅典最古老、保存最完好的民國/古典騎樓街區。街道兩旁開滿了九重葛與露天咖啡廳，點一杯地道的希臘冰咖啡（Frappé），慢活感十足。",
    rec2Title: "衛城博物館 (Acropolis Museum)",
    rec2Desc: "入口天橋全部採用透明防彈玻璃，低頭就能平視腳下幾米深處正在發掘的古希臘古城遺址。館內 3 樓更是 1:1 複刻了帕特農神廟的命運石雕。",
    tipsTitle: "精明自遊：雅典衛城完美防坑與卡位隨身手札",
    tip1Emoji: "🎫",
    tip1Title: "100% 必須提前 2-4 星期網上預約門票：",
    tip1Desc: "為保護世界遺產，衛城實施每日總量管制與定時進場制！建議在官網提早買好早上 08:00-09:00 之間的第一批進場電子票，氣溫只有 24 度左右，旅行團大軍尚在酒店，你能拍到完全包場的無人神廟大片！",
    tip2Emoji: "📸",
    tip2Title: "「落日雙神廟同框」黃金機位：",
    tip2Desc: "最佳全景拍照點是位於衛城對面的菲洛帕波斯山丘（Philopappos Hill）。順著黃土步道步行 15 分鐘登頂，無須門票且毫無遮擋，可以用中長焦鏡頭將整座帕特農神廟完美框在落日藍調的愛琴海背景中。",
    tip3Emoji: "⚠️",
    tip3Title: "防滑與鞋履嚴格警告：",
    tip3Desc: "衛城山頂地面100% 是兩千年被數億名遊客雙腳摩擦得光滑如鏡的大理石巨石！不論晴雨都極度濕滑。請務必穿著高抓地力、鞋底紋路極深、厚底的防滑運動健步鞋！",
    tip4Emoji: "☀️",
    tip4Title: "防暑防曬大數據警告：",
    tip4Desc: "衛城山頂100% 毫無任何大樹或遮陽棚遮擋。夏季中午太陽直射時，大理石地面折射溫度可瞬間飆升至42 度以上！務必帶足 1 公升以上的礦泉水、防曬大帽子與太陽眼鏡。",
    infoTitle: "景點資訊一覽",
    infoAddress: "地址",
    infoAddressValue: "Acropolis of Athens, Athens 105 58, Greece",
    infoHours: "開放時間",
    infoHoursValue: "夏季 08:00-20:00 / 冬季 08:00-17:00",
    infoPrice: "費用",
    infoPriceValue: "€20（需提前網上預約）/ 每月首個周日免費",
    infoRating: "評分",
    infoRatingValue: "4.8/5.0（98,765 評論）",
    infoTransport: "交通",
    infoTransportValue: "地鐵至Acropolis站步行5分鐘",
    infoTime: "建議遊覽",
    infoTimeValue: "2-3小時",
    shareTitle: "分享給朋友",
    shareDefaultTitle: "🏛️ 黃金比例的永恆凝視：雅典衛城帕特農神廟2500年建築幾何大數據攻略",
    favoriteText: "加入心願清單：",
    footer: "幾何定格美學，黃金留存理智。願每位造訪西方文明搖籃的朋友，都能在衛城的皇家晨曦中找到屬於自己的永恆夢。",
    ratingTitle: "給這個景點評分",
  },
  "zh-CN": {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希腊 · 雅典",
    title: "黄金比例的永恒凝视",
    subtitle: "雅典卫城帕特农神庙（Parthenon）2500年建筑几何大数据攻略",
    author: "纯粹旅人",
    heroCaption: "▲ 雅典卫城之巅的帕特农神庙，2500年来守望着西方文明的摇篮",
    quote: "「勒·柯比意说，帕特农神庙是地球上唯一无懈可击的建筑机器；而当你站在高耸的阿提卡悬崖之巅，看着那些在两千五百年间被战火、地震与硝烟剥蚀得斑驳的巨型潘特里克大理石柱，在爱琴海的烈日下折射出碎金，你才会明白：希腊人不用一根直线，却创造了全宇宙最完美的视觉直线。」",
    intro: "如果说圣托里尼的伊亚落日燃烧了爱琴海最缱绻的浪漫，那么巍然挺立在西方文明摇篮 ── 雅典卫城（Acropolis）最高峰的帕特农神庙（Parthenon），无疑就是整个人类古典美学史上无可撼动的理性王冠。这座始建于公元前 447 年、为了祭祀雅典娜女神而建的伟大神殿，已整整横跨了 2,470 多年的历史沧桑。",
    archTitle: "帕特农神庙三大无直线结构：光学视差修正大数据",
    arch1Title: "柱身隆起 (Entasis)",
    arch1Desc: "杜绝视觉「中间变细」。46根外侧大理石柱，柱身在1/3高度处向外精确微拱6.5厘米，使远观无比挺拔。",
    arch2Title: "地基向上微弧拱起",
    arch2Desc: "杜绝视觉「中段下陷」。神庙底座基石四角偏低，正中心处向上隆起高达11厘米，以此营造完美地平线。",
    arch3Title: "石柱集聚内倾",
    arch3Desc: "宇宙金字塔交汇。所有巨柱皆非垂直，而是向中心微倾。若将轴线向上延伸，将在5000米高空聚于一点。",
    historyTitle: "2500年史诗劫难：神庙历史命运演变",
    historyImageCaption: "▲ 从菲洛帕波斯山丘俯瞰卫城与爱琴海全景",
    historyText1: "帕特农神庙不仅是美学奇迹，更是一面记录了中欧、地中海文明交织冲突的黑色历史镜子。它在两千多年里频繁转变身份：",
    historyPeriod1: "900年",
    historyPeriod1Label: "古希腊异教神殿",
    historyPeriod2: "400年",
    historyPeriod2Label: "基督教天主堂",
    historyPeriod3: "250年",
    historyPeriod3Label: "奥斯曼清真寺",
    historyEvent: "1687年悲剧：威尼斯军队一发炮弹精确引爆了庙内的火药，直接摧毁了其中心拱顶。",
    experienceTitle: "第一身沉浸实感：在金色阴影与千载历史间站成永恒",
    experienceText1: "顺着卫城西侧陡峭、被两千年来几千万双鞋底磨得如同镜面般光滑的花岗岩山道拾级而上，穿过气势磅礴的山门（Propylaea）。当你一脚踏上卫城山顶那片宽阔、荒凉的巨石荒原，那一整面历经两千载战火硝烟、宏伟到不可思议的帕特农神庙主立面便排山倒海般在眼前铺开。",
    experienceText2: "慢步走到神庙巨大的多立克柱廊下方。整座神庙全部采用产自雅典北部的潘特里克大理石（Pentelic Marble）手工砌成。这种大理石内含有极微量的铁元素，在历经2500年的风化氧化后，石表会泛出一层极其高贵、温润、如熟透了的麦穗般的黄金蜂蜜色泽。",
    recommendationTitle: "东道主私藏手信与卫城下步行街好去处",
    rec1Title: "普拉卡老城步行街（Plaka）",
    rec1Desc: "紧邻卫城山脚下，雅典最古老、保存最完好的民国/古典骑楼街区。街道两旁开满了九重葛与露天咖啡厅，点一杯地道的希腊冰咖啡（Frappé），慢活感十足。",
    rec2Title: "卫城博物馆 (Acropolis Museum)",
    rec2Desc: "入口天桥全部采用透明防弹玻璃，低头就能平视脚下几米深处正在发掘的古希腊古城遗址。馆内 3 楼更是 1:1 复刻了帕特农神庙的命运石雕。",
    tipsTitle: "精明自游：雅典卫城完美防坑与卡位随身手册",
    tip1Emoji: "🎫",
    tip1Title: "100% 必须提前 2-4 星期网上预约门票：",
    tip1Desc: "为保护世界遗产，卫城实施每日总量管制与定时进场制！建议在官网提前买好早上 08:00-09:00 之间的第一批进场电子票，气温只有 24 度左右，旅行团大军尚在酒店，你能拍到完全包场的无人神庙大片！",
    tip2Emoji: "📸",
    tip2Title: "「落日双神庙同框」黄金机位：",
    tip2Desc: "最佳全景拍照点是位于卫城对面的菲洛帕波斯山丘（Philopappos Hill）。顺着黄土步道步行 15 分钟登顶，无须门票且毫无遮挡，可以用中长焦镜头将整座帕特农神庙完美框在落日蓝调的爱琴海背景中。",
    tip3Emoji: "⚠️",
    tip3Title: "防滑与鞋履严格警告：",
    tip3Desc: "卫城山顶地面100% 是两千年被数亿名游客双脚摩擦得光滑如镜的大理石巨石！不论晴雨都极度湿滑。请务必穿着高抓地力、鞋底纹路极深、厚底的防滑运动健步鞋！",
    tip4Emoji: "☀️",
    tip4Title: "防暑防晒大数据警告：",
    tip4Desc: "卫城山顶100% 毫无任何大树或遮阳棚遮挡。夏季中午太阳直射时，大理石地面折射温度可瞬间飙升至42 度以上！务必带足 1 公升以上的矿泉水、防晒大帽子与太阳眼镜。",
    infoTitle: "景点资讯一览",
    infoAddress: "地址",
    infoAddressValue: "Acropolis of Athens, Athens 105 58, Greece",
    infoHours: "开放时间",
    infoHoursValue: "夏季 08:00-20:00 / 冬季 08:00-17:00",
    infoPrice: "费用",
    infoPriceValue: "€20（需提前网上预约）/ 每月首个周日免费",
    infoRating: "评分",
    infoRatingValue: "4.8/5.0（98,765 评论）",
    infoTransport: "交通",
    infoTransportValue: "地铁至Acropolis站步行5分钟",
    infoTime: "建议游览",
    infoTimeValue: "2-3小时",
    shareTitle: "分享给朋友",
    shareDefaultTitle: "🏛️ 黄金比例的永恒凝视：雅典卫城帕特农神庙2500年建筑几何大数据攻略",
    favoriteText: "加入心愿清单：",
    footer: "几何定格美学，黄金留存理智。愿每位造访西方文明摇篮的朋友，都能在卫城的皇家晨曦中找到属于自己的永恒梦。",
    ratingTitle: "给这个景点评分",
  },
  en: {
    backText: "Back to NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 Greece · Athens",
    title: "The Eternal Gaze of Golden Ratio",
    subtitle: "Athens Acropolis Parthenon: 2500 Years of Architectural Geometry & Big Data Guide",
    author: "Pure Traveler",
    heroCaption: "▲ The Parthenon atop the Acropolis, watching over the cradle of Western civilization for 2,500 years",
    quote: "「Le Corbusier said the Parthenon is the only flawless building machine on Earth; and when you stand atop the towering Attica cliffs watching those massive Pentelic marble columns, weathered by 2,500 years of war, earthquakes, and smoke, glinting gold under the Aegean sun, you understand: the Greeks created the perfect visual straight line without using a single straight line.」",
    intro: "If Santorini's Oia sunset burns with the most romantic passion of the Aegean, then the Parthenon standing proudly atop the Acropolis of Athens – the cradle of Western civilization – is undoubtedly the unshakeable rational crown of all human classical aesthetics. This magnificent temple built in 447 BC to worship Athena has spanned over 2,470 years of history.",
    archTitle: "Parthenon's Three Non-Straight Structures: Optical Illusion Correction Data",
    arch1Title: "Column Entasis",
    arch1Desc: "Preventing the 「middle thinness」 visual effect. The 46 outer marble columns precisely bulge outward by 6.5 cm at the 1/3 height, making them appear perfectly straight from distance.",
    arch2Title: "Curved Foundation",
    arch2Desc: "Preventing the 「middle sag」 visual effect. The temple's foundation corners are slightly lower, with the center raised by up to 11 cm, creating a perfect horizon.",
    arch3Title: "Inward Leaning Columns",
    arch3Desc: "Cosmic pyramid convergence. All massive columns lean inward toward the center. If extended upward, their axes would converge at a single point 5,000 meters high.",
    historyTitle: "2500 Years of Epic Trials: The Temple's Historical Fate",
    historyImageCaption: "▲ Panoramic view of the Acropolis and Aegean Sea from Philopappos Hill",
    historyText1: "The Parthenon is not only an aesthetic miracle but also a mirror recording the intertwined conflicts of Central European and Mediterranean civilizations. It has changed identities many times over two millennia:",
    historyPeriod1: "900 years",
    historyPeriod1Label: "Ancient Greek Pagan Temple",
    historyPeriod2: "400 years",
    historyPeriod2Label: "Christian Cathedral",
    historyPeriod3: "250 years",
    historyPeriod3Label: "Ottoman Mosque",
    historyEvent: "1687 Tragedy: A Venetian cannonball precisely hit and detonated the gunpowder stored inside, directly destroying its central dome.",
    experienceTitle: "First-Person Immersive: Standing Eternal Between Golden Shadows and Millennia of History",
    experienceText1: "Ascending the steep granite path on the Acropolis' west side, polished smooth like a mirror by millions of shoes over two millennia, passing through the magnificent Propylaea. When you step onto the vast, desolate rocky plateau of the Acropolis summit, the entire magnificent Parthenon facade unfolds before you like a wave.",
    experienceText2: "Strolling beneath the temple's massive Doric colonnade. The entire temple is hand-built using Pentelic Marble from northern Athens. This marble contains trace amounts of iron that, after 2,500 years of weathering and oxidation, gives the stone surface an extremely noble, warm golden honey color like ripe wheat.",
    recommendationTitle: "Local Tips: Souvenirs & Best Spots Below the Acropolis",
    rec1Title: "Plaka Old Town (Plaka)",
    rec1Desc: "Located at the foot of the Acropolis, Athens' oldest and best-preserved traditional/neoclassical shopping street. Streets lined with bougainvillea and outdoor cafés – order a authentic Greek Frappé for the ultimate slow-travel experience.",
    rec2Title: "Acropolis Museum",
    rec2Desc: "The entrance walkway uses transparent bulletproof glass – look down to see the ancient Greek city ruins being excavated meters below. The 3rd floor features a 1:1 replica of the Parthenon's fate sculptures.",
    tipsTitle: "Smart Travel: Acropolis Perfect Anti-Scam & Prime Spot Guide",
    tip1Emoji: "🎫",
    tip1Title: "100% Must Book Tickets Online 2-4 Weeks in Advance:",
    tip1Desc: "To protect this World Heritage site, the Acropolis implements daily capacity limits and timed entry! Book the first batch of tickets for 08:00-09:00 on the official website. Temperature is only around 24°C, tour groups are still at hotels – you can capture completely empty temple大片!",
    tip2Emoji: "📸",
    tip2Title: "「Sunset Dual Temple」Golden Photo Spot:",
    tip2Desc: "The best panoramic photo point is Philopappos Hill opposite the Acropolis. Walk 15 minutes up the dirt trail – no ticket needed, completely unobstructed. Use a medium-telephoto lens to frame the entire Parthenon against the sunset blue Aegean background.",
    tip3Emoji: "⚠️",
    tip3Title: "Strict Footwear Warning:",
    tip3Desc: "The Acropolis summit ground is 100% marble polished smooth as a mirror by hundreds of millions of visitors over two millennia! Extremely slippery in any weather. Always wear high-grip, deep-tread, thick-soled anti-slip athletic shoes!",
    tip4Emoji: "☀️",
    tip4Title: "Heat & Sun Protection Warning:",
    tip4Desc: "The Acropolis summit has 100% zero shade from trees or awnings. Summer noon sun reflection can instantly raise marble surface temperature above 42°C! Bring at least 1 liter of water, a wide-brim sun hat, and sunglasses.",
    infoTitle: "Attraction Information",
    infoAddress: "Address",
    infoAddressValue: "Acropolis of Athens, Athens 105 58, Greece",
    infoHours: "Hours",
    infoHoursValue: "Summer 08:00-20:00 / Winter 08:00-17:00",
    infoPrice: "Price",
    infoPriceValue: "€20 (advance booking required) / Free first Sunday of month",
    infoRating: "Rating",
    infoRatingValue: "4.8/5.0 (98,765 reviews)",
    infoTransport: "Transport",
    infoTransportValue: "Metro to Acropolis station, 5 min walk",
    infoTime: "Recommended Visit",
    infoTimeValue: "2-3 hours",
    shareTitle: "Share with Friends",
    shareDefaultTitle: "🏛️ The Eternal Gaze of Golden Ratio: Athens Acropolis Parthenon 2500-Year Guide",
    favoriteText: "Add to Wishlist:",
    footer: "Geometry freezes aesthetics, gold preserves reason. May every visitor to the cradle of Western civilization find their own eternal dream in the Acropolis' royal morning light.",
    ratingTitle: "Rate This Attraction",
  },
  yue: {
    backText: "返回 NewsFlow",
    blogText: "Blog",
    location: "🇬🇷 希臘 · 雅典",
    title: "黃金比例嘅永恆凝視",
    subtitle: "雅典衛城帕特農神廟（Parthenon）2500年建築幾何大數據攻略",
    author: "純粹旅人",
    heroCaption: "▲ 雅典衛城之巔嘅帕特農神廟，2500年嚟守望住西方文明嘅搖籃",
    quote: "「勒·柯比意話，帕特農神廟係地球上唯一無懈可擊嘅建築機器；而當你站在高聳嘅阿提卡懸崖之巔，睇住嗰啲喺兩千五百年間被戰火、地震同硝煙剝蝕得斑駁嘅巨型潘特里克大理石柱，喺愛琴海嘅烈日下折射出碎金，你先去明白：希臘人唔使用一根直線，卻創造咗全宇宙最完美嘅視覺直線。」",
    intro: "如果話聖托里尼嘅伊亞日落燃燒咗愛琴海最繾綣嘅浪漫，咁巍然挺立在西方文明搖籃 ── 雅典衛城（Acropolis）最高峰嘅帕特農神廟（Parthenon），無疑就係整个人類古典美學史上無可撼動嘅理性皇冠。呢座喺公元前447年起動工興建、為咗祭祀雅典娜女神而建嘅偉大神殿，已經橫跨咗2,470幾年嘅歷史滄桑。",
    archTitle: "帕特農神廟三大無直線結構：光學視差修正大數據",
    arch1Title: "柱身隆起 (Entasis)",
    arch1Desc: "杜絕視覺「中間變幼」。46根外側大理石柱，柱身喺1/3高度處向外精準微拱6.5厘米，令遠睇無比挺拔。",
    arch2Title: "地基向上微弧拱起",
    arch2Desc: "杜絕視覺「中段下陷」。神廟底座基石四角偏低，正中心處向上隆起高達11厘米，以此營造完美地平線。",
    arch3Title: "石柱集聚內傾",
    arch3Desc: "宇宙金字塔交匯。所有巨柱皆非垂直，而係向中心微傾。若將軸線向上延伸，將喺5000米高空聚於一點。",
    historyTitle: "2500年史詩劫難：神廟歷史命運演變",
    historyImageCaption: "▲ 從菲洛帕波斯山丘俯瞰衛城與愛琴海全景",
    historyText1: "帕特農神廟唔單止係美學奇蹟，更係一面記錄咗中歐、地中海文明交織衝突嘅黑色歷史鏡子。佢喺兩千幾年裡頻繁轉變身份：",
    historyPeriod1: "900年",
    historyPeriod1Label: "古希臘異教神殿",
    historyPeriod2: "400年",
    historyPeriod2Label: "基督教天主堂",
    historyPeriod3: "250年",
    historyPeriod3Label: "奧斯曼清真寺",
    historyEvent: "1687年悲劇：威尼斯軍隊一發炮彈精準引爆咗廟內嘅火藥，直接摧毀咗其中心拱頂。",
    experienceTitle: "第一身沉浸實感：喺金色陰影與千載歷史間站成永恆",
    experienceText1: "順住衛城西側陡峭、被兩千年嚟幾千萬雙鞋底磨得如同鏡面般光滑嘅花崗岩山道拾級而上，穿過氣勢磅礴嘅山門（Propylaea）。當你一腳踏上位於衛城山頂嗰片寬闊、荒涼嘅巨石荒原，嗰一整面歷經兩千載戰火硝煙、宏偉到不可思議嘅帕特農神廟主立面便排山倒海般喺眼前鋪開。",
    experienceText2: "慢步走到神廟巨大嘅多立克柱廊下方。整座神廟全部採用產自雅典北部嘅潘特里克大理石（Pentelic Marble）手工砌成。呢種大理石內含有極微量嘅鐵元素，喺歷經2500年嘅風化氧化後，石表會泛出一層極其高貴、溫潤、如熟透咗嘅麥穗般嘅黃金蜂蜜色澤。",
    recommendationTitle: "東道主私藏手信與衛城下步行街好去處",
    rec1Title: "普拉卡舊城步行街（Plaka）",
    rec1Desc: "緊鄰衛城山腳下，雅典最古老、保存最完好嘅民國/古典騎樓街區。街道兩旁開滿咗九重葛與露天咖啡廳，點一杯地道嘅希臘冰咖啡（Frappé），慢活感十足。",
    rec2Title: "衛城博物館 (Acropolis Museum)",
    rec2Desc: "入口天橋全部採用透明防彈玻璃，低頭就能平視腳下幾米深處正在發掘嘅古希臘古城遺址。館內3樓更是1:1複刻咗帕特農神廟嘅命運石雕。",
    tipsTitle: "精明自遊：雅典衛城完美防伏與卡位隨身手冊",
    tip1Emoji: "🎫",
    tip1Title: "100% 必須提前 2-4 星期網上預約門票：",
    tip1Desc: "為咗保護世界遺產，衛城實施每日總量管制與定時進場制！建議喺官網提前買好早上08:00-09:00之間嘅第一批進場電子票，氣溫只有24度左右，旅行團大軍尚喺酒店，你能拍到完全包場嘅無人大片！",
    tip2Emoji: "📸",
    tip2Title: "「日落雙神廟同框」黃金機位：",
    tip2Desc: "最佳全景拍照點係位於衛城對面嘅菲洛帕波斯山丘（Philopappos Hill）。順住黃土步道步行15分鐘登頂，無須門票且毫無遮擋，可以用中長焦鏡頭將整座帕特農神廟完美框喺日落藍調嘅愛琴海背景中。",
    tip3Emoji: "⚠️",
    tip3Title: "防滑與鞋履嚴格警告：",
    tip3Desc: "衛城山頂地面100%係兩千年被數億名遊客雙腳摩擦得光滑如鏡嘅大理石巨石！不論晴雨都極度濕滑。請務必著住高抓地力、鞋底紋路極深、厚底嘅防滑運動健步鞋！",
    tip4Emoji: "☀️",
    tip4Title: "防暑防曬大數據警告：",
    tip4Desc: "衛城山頂100%毫無任何大樹或遮陽棚遮擋。夏季中午太陽直射時，大理石地面折射溫度可瞬間飆升至42度以上！務必帶足1公升以上嘅礦泉水、防曬大帽子與太陽眼鏡。",
    infoTitle: "景點資訊一覽",
    infoAddress: "地址",
    infoAddressValue: "Acropolis of Athens, Athens 105 58, Greece",
    infoHours: "開放時間",
    infoHoursValue: "夏季 08:00-20:00 / 冬季 08:00-17:00",
    infoPrice: "費用",
    infoPriceValue: "€20（需提前網上預約）/ 每月首個周日免費",
    infoRating: "評分",
    infoRatingValue: "4.8/5.0（98,765 評論）",
    infoTransport: "交通",
    infoTransportValue: "地鐵至Acropolis站步行5分鐘",
    infoTime: "建議遊覽",
    infoTimeValue: "2-3小時",
    shareTitle: "分享俾朋友",
    shareDefaultTitle: "🏛️ 黃金比例嘅永恆凝視：雅典衛城帕特農神廟2500年建築幾何大數據攻略",
    favoriteText: "加入心願清單：",
    footer: "幾何定格美學，黃金留存理智。願每位造訪西方文明搖籃嘅朋友，都能在衛城嘅皇家晨曦中找到屬於自己嘅永恆夢。",
    ratingTitle: "俾呢個景點評分",
  },
};

export default function ParthenonPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("intro");
  const c = content[lang];
  const toc = tocItems[lang];
  const currentTags = tags[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900/50 to-slate-900/30 text-white">
      <ReadingProgress />
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-sky-800/95 to-blue-800/95 backdrop-blur-xl border border-sky-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-sky-500/10">
          <h3 className="text-sm font-bold text-sky-300 mb-4 flex items-center gap-2">
            📋 {lang === "en" ? "Contents" : "目錄導覽"}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/30"
                      : "text-sky-200/70 hover:text-white hover:bg-sky-700/50"
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
          className="inline-flex items-center gap-2 text-sky-300 hover:text-white mb-8 transition-colors bg-sky-800/30 px-4 py-2 rounded-full hover:bg-sky-700/50"
        >
          ← {c.backText}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 ml-6 transition-colors"
        >
          | {c.blogText}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-sky-500/30">
            {c.location}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-transparent">
            {c.title}
          </h1>
          <h2 className="text-xl text-sky-300 font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-sky-400">June 2026 · {c.author === "Pure Traveler" ? "Author: " : "作者："} {c.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/20">
          <img
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-sky-400 text-sm mb-12">{c.heroCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-8">
            <p className="text-sky-100 text-lg italic leading-relaxed border-l-4 border-orange-500/50 pl-6">
              {c.quote}
            </p>
          </div>

          <p id="intro">{c.intro}</p>

          <div id="architecture" className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-sky-300 font-bold mb-4 flex items-center gap-2 text-xl">
              📐 {c.archTitle}
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-800/40 to-blue-800/30 border border-sky-500/30 rounded-xl p-5">
                <h4 className="text-sky-300 font-bold mb-2">{c.arch1Title}</h4>
                <p className="text-sky-100/80 text-sm">{c.arch1Desc}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/40 to-red-800/30 border border-orange-500/30 rounded-xl p-5">
                <h4 className="text-orange-300 font-bold mb-2">{c.arch2Title}</h4>
                <p className="text-orange-100/80 text-sm">{c.arch2Desc}</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/40 to-amber-700/30 border border-yellow-500/30 rounded-xl p-5">
                <h4 className="text-yellow-300 font-bold mb-2">{c.arch3Title}</h4>
                <p className="text-yellow-100/80 text-sm">{c.arch3Desc}</p>
              </div>
            </div>
          </div>

          <h2 id="history">🔑 {c.historyTitle}</h2>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&q=80"
              alt="Athens Acropolis & Parthenon"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-sky-400 text-sm mt-4 mb-8">{c.historyImageCaption}</p>
          </div>

          <p>{c.historyText1}</p>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 border border-orange-700/30 rounded-xl p-5 my-8">
            <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
              📊 {lang === "en" ? "Parthenon Historical Identity Transitions" : "帕特農神廟歷代政教身份轉變"}
            </h3>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center p-3 bg-sky-500/20 rounded-lg">
                <p className="text-sky-300 font-bold">{c.historyPeriod1}</p>
                <p className="text-sky-100/70 text-xs">{c.historyPeriod1Label}</p>
              </div>
              <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                <p className="text-blue-300 font-bold">{c.historyPeriod2}</p>
                <p className="text-blue-100/70 text-xs">{c.historyPeriod2Label}</p>
              </div>
              <div className="text-center p-3 bg-orange-500/20 rounded-lg">
                <p className="text-orange-300 font-bold">{c.historyPeriod3}</p>
                <p className="text-orange-100/70 text-xs">{c.historyPeriod3Label}</p>
              </div>
            </div>
            <p className="text-orange-100/80 text-sm mt-4">{c.historyEvent}</p>
          </div>

          <h2>🏛️ {c.experienceTitle}</h2>

          <p>{c.experienceText1}</p>

          <p>{c.experienceText2}</p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              🎨 {c.recommendationTitle}
            </h3>
            <ul className="space-y-3 text-green-100/80">
              <li className="flex gap-3">
                <span className="text-orange-400">🏪</span>
                <span><strong>{c.rec1Title}:</strong> {c.rec1Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🏛️</span>
                <span><strong>{c.rec2Title}:</strong> {c.rec2Desc}</span>
              </li>
            </ul>
          </div>

          <h2 id="tips">💡 {c.tipsTitle}</h2>

          <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-sky-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">{c.tip1Emoji}</span>
                <span><strong>{c.tip1Title}</strong>{c.tip1Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">{c.tip2Emoji}</span>
                <span><strong>{c.tip2Title}</strong>{c.tip2Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">{c.tip3Emoji}</span>
                <span><strong>{c.tip3Title}</strong>{c.tip3Desc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">{c.tip4Emoji}</span>
                <span><strong>{c.tip4Title}</strong>{c.tip4Desc}</span>
              </li>
            </ul>
          </div>

          <h2>📊 {c.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">📍 {c.infoAddress}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoAddressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">🕐 {c.infoHours}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoHoursValue}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">💰 {c.infoPrice}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoPriceValue}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">⭐ {c.infoRating}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoRatingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">🚇 {c.infoTransport}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoTransportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">⏱️ {c.infoTime}</span>
              <p className="text-sky-100/80 text-sm mt-1">{c.infoTimeValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/20 border border-sky-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-sky-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ {c.ratingTitle}
            </h3>
            <StarRating slug="parthenon-athens" />
          </div>

          <div className="bg-sky-900/30 rounded-2xl p-6 my-10 border border-sky-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 {c.shareTitle}</h3>
            <SocialShare title={c.shareDefaultTitle} />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-sky-900/30 rounded-2xl p-6 border border-sky-700/30 flex items-center gap-4">
              <span className="text-sky-100/80">{c.favoriteText}</span>
              <FavoriteButton slug="parthenon-athens" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-sky-700/30 pt-8 mt-8">
            <p className="text-sky-400 italic text-center">{c.footer}</p>
          </div>

          <RelatedPosts currentSlug="parthenon-athens" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="parthenon-athens" />
    </div>
  );
}
