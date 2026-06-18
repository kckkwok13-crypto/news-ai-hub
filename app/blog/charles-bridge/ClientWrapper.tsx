"use client";

import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", label: "走進歷史的脊樑" },
    { id: "numbers", label: "黃金密碼矩陣" },
    { id: "landmarks", label: "三大核心地標" },
    { id: "crowd", label: "人流大數據" },
    { id: "experience", label: "沉浸實感" },
    { id: "tips", label: "防坑手札" },
  ],
  "zh-CN": [
    { id: "intro", label: "走进历史的脊梁" },
    { id: "numbers", label: "黄金密码矩阵" },
    { id: "landmarks", label: "三大核心地标" },
    { id: "crowd", label: "人流大数据" },
    { id: "experience", label: "沉浸实感" },
    { id: "tips", label: "防坑手册" },
  ],
  en: [
    { id: "intro", label: "Walking the Spine of History" },
    { id: "numbers", label: "Golden Number Matrix" },
    { id: "landmarks", label: "Three Core Landmarks" },
    { id: "crowd", label: "Crowd Analytics" },
    { id: "experience", label: "Immersive Experience" },
    { id: "tips", label: "Travel Tips" },
  ],
  yue: [
    { id: "intro", label: "走進歷史嘅脊樑" },
    { id: "numbers", label: "黃金密碼矩陣" },
    { id: "landmarks", label: "三大核心地標" },
    { id: "crowd", label: "人流大數據" },
    { id: "experience", label: "沉浸實感" },
    { id: "tips", label: "防伏手冊" },
  ],
};

const content = {
  "zh-TW": {
    meta: "橫跨伏爾塔瓦河 ── 歷史的脊樑",
    headerTag: "橫跨伏爾塔瓦河 ── 歷史的脊樑",
    title: "東歐最美的黃金絲帶：布拉格查理大橋",
    subtitle: "650年星象密碼與反思散策",
    date: "二零二六年盛夏 ‧ 第一身波希米亞暮色漫步與大數據解構",
    quote: "「莫札特說，布拉格的靈魂是用音符編織的；而當你站在查理大橋上，看著落日將 30 尊聖者雕像鍍上一層不朽的碎金，你才會明白：這座橋是布拉格最激昂、最繾綽的一段交響樂章。」",
    intro: "如果說布拉格城堡是波希米亞高傲的皇冠，那麼橫跨伏爾塔瓦河的查理大橋（Charles Bridge / Karlův most），無疑就是這座歷史古城最溫柔的脊樑。這座始建於 1357 年的中世紀巨型砂岩石拱橋，長 516 米，寬約 10 米，由 16 個宏偉的橋拱支撐。它不僅連接著老城區與城堡區，更是一座名副其实的「露天巴洛克雕塑博物館」。",
    numbersTitle: "查理大橋奠基「黃金密碼數字矩陣」",
    numbersIntro: "查理大橋的堅固流傳了六百多年，經歷無數次洪水而屹立不倒。傳說神聖羅馬帝國皇帝查理四世（Charles IV）在建造此橋時，極度迷戀星象與數秘學。他特意邀請占星術士精準計算出一個絕對對稱、蘊含宇宙能量的「奇數回文密碼」，並命令必須在這一組數字交匯的精確秒數放落第一塊奠基石。",
    numbersDetail: "這組驚人的數字順序為：1357（年）- 9（日）- 7（月）- 5（時）- 31（分），連起來讀就是 1-3-5-7-9-7-5-3-1。中世紀的占星術認為，這種奇數金字塔結構的數字矩陣能為建築賦予神聖的對稱力量。",
    chartCaption: "圖一：1357 年 7 月 9 日 5 點 31 分奠基回文數值矩陣",
    landmarksTitle: "三大核心防禦體系 ── 大橋美學地標立體分布",
    landmarksIntro: "查理大橋兩端矗立著 30 尊栩栩如生的巴洛克聖人雕像，並由兩端宏偉的哥德式防禦塔樓拱衛。以下是大橋三大必看視覺地標：",
    landmark1Title: "老城橋塔",
    landmark1Sub: "Old Town Tower 【全歐最美哥德式塔樓】",
    landmark1Desc: "位於大橋東側，曾是防禦要塞。強烈推薦付費登頂，是拍攝大橋蜿蜒長卷的黃金制高點。",
    landmark2Title: "聖尼波木克雕像",
    landmark2Sub: "St. John Nepomuk 【全大橋最靈驗明星聖像】",
    landmark2Desc: "第8根橋柱。聖人頭頂五顆星，摸一摸底座被擦得發亮的銅雕，傳說能帶你重返布拉格。",
    landmark3Title: "小城橋塔",
    landmark3Sub: "Lesser Town 【雙子星要塞大門】",
    landmark3Desc: "位於大橋西側，連接著小城區。由一高一低兩座塔樓組成，充滿中世紀衛城要塞的威嚴。",
    crowdTitle: "24小時遊客擁擠度與最佳「黃金攝影光線」大數據",
    crowdIntro: "查理大橋白天永遠是人潮洶湧的激戰區。為了幫大家拍出空靈、高質感的東歐大片，以下是「查理大橋24小時擁擠度與光線觀賞指數」大數據分析：",
    experienceTitle: "第一身沉浸實感：在聖者雕像下聆聽伏爾塔瓦河的心跳",
    experienceText1: "想要真正感受查理大橋的靈魂，你必須在清晨 05:30 爬出溫暖的被窩。此時的布拉格剛從睡夢中醒來，整座大橋被一層淡淡的薄霧籠罩。古老而粗糙的花崗岩石磚路泛著清冷的光澤，腳步聲在空曠的橋拱間激起幽深的回音。當第一縷金色的丁達爾晨曦穿透老城橋塔的哥德式飛簷，整條伏爾塔瓦河泛起鱗鱗波光，成群的白天鵝在如鏡的水面上優雅游弋，美得讓人窒息。",
    experienceText2: "漫步到第 8 根橋柱前的聖尼波木克（St. John Nepomuk）雕像下。這位聖人因拒絕向國王透露王后懺悔的秘密，在此處被殘忍地投入滾滾河水中殉道。撫摸著雕像底座那塊被全球千百萬旅客雙手擦得金黃透亮的青銅浮雕，閉上雙眼，冰涼的銅質觸感傳來千年的歷史心跳。",
    experienceText3: "傳說只要誠心撫摸它，你此生便注定會再次重返布拉格，這份美麗的誓言是這座古橋贈予所有流浪者最浪漫的護身符。",
    nightlifeTitle: "查理大橋繽紛夜生活：手風琴聲下的落日藍調與高空瞭望",
    nightlife1Title: "老街頭藝人的黃昏交響樂：",
    nightlife1Desc: "傍晚 20:00 左右，當太陽緩緩沉入西面城堡區的山崗，大橋上會聚集全歐洲最高質量的街頭音樂家。爵士樂隊的薩克斯風、老藝人的手風琴聲在微風中交織，配合遠處城堡亮起的暖黃色夜燈，整座大橋變成了最浪漫的露天劇場。",
    nightlife2Title: "老城橋塔的「138級樓梯高空驚艷」：",
    nightlife2Desc: "黃昏時分，花費幾十克朗購買門票，挑戰攀登老城橋塔內部 138 級狹窄的螺旋石頭樓梯。當你推開頂層觀景台的木門，整條查理大橋如一條金色的絲帶在腳下 360 度鋪開，對岸城堡區的紅屋頂在深邃的藍調時刻（Blue Hour）波光粼粼，層次感強烈得讓人熱淚盈眶。",
    tipsTitle: "精明自遊 ‧ 查理大橋完美防坑隨身手札",
    tip1Title: "攝影師私藏的「橋下白天鵝」完美機位：",
    tip1Desc: "想要拍到大橋與白天鵝同框的標誌性網美大片，不要站在大橋上面！最佳拍照點在小城區一側的河岸草坪 Náplavka。這裡聚集了上百隻溫馴的白天鵝，你可以帶一點麵包碎，以低角度仰拍，將白天鵝、伏爾塔瓦河與背後的查理大橋完美框在同一個畫面中。",
    tip2Title: "警惕橋上「套路小偷」與黑心畫家：",
    tip2Desc: "查理大橋白天人流密度極高，也是布拉格扒手（Pickpockets）的超級激戰區。當你抬頭看雕像或者聽街頭音樂忘乎所以時，背包請務必背在前面。另外，橋上的街頭畫家畫人像前，請務必用捷克克朗（CZK）確認好最終價格，提防歐元匯率陷阱。",
    tip3Title: "最佳交通接駁方式：",
    tip3Desc: "搭乘布拉格有軌電車 17、18 號線直達 Karlovy lázně 站 或者地鐵 A 線到 Staroměstská 站 下車，步行 3 分鐘即可直接步入老城橋塔大門，完全無痛開啟大橋散策。",
    tip4Title: "鞋履嚴格警告：",
    tip4Desc: "大橋橋面由中世紀不平整的粗糙玄武岩石磚鋪成。為了保護雙腳與提防扭傷，請務必穿著厚底、避震卓越的運動健步鞋，切勿穿薄底平底鞋或高跟鞋前來喔！",
    info1Title: "基本資訊",
    info1Items: ["橋長：516 米", "建造年份：1357 年", "橋拱數量：16 個", "雕像數量：30 尊巴洛克聖人雕像"],
    info2Title: "打卡攻略",
    info2Items: ["最佳拍攝時間：清晨 05:30 或黃昏 20:30", "必摸雕像：聖尼波木克（第8根橋柱）", "推薦登塔：老城橋塔 138 級樓梯", "白天鵝機位：小城區 Náplavka 河岸"],
    footer: "歲月流逝於河水，歷史鐫刻於砂岩。願每位漫步古橋的旅人，都能在伏爾塔瓦河的夕陽下找到屬於自己的波希米亞夢。",
    tocTitle: "文章導覽",
    yAxisLabels: { high: "100% (擠擁)", mid: "50% (愜意)", low: "0%" },
    xAxisLabels: { dawn: "晨曦", midday: "人潮", peak: "高峰" },
    legendLabels: { sunrise: "晨霧丁達爾光", sunset: "絕美落日藍調" },
  },
  "zh-CN": {
    meta: "横跨伏尔塔瓦河 ── 历史的脊梁",
    headerTag: "横跨伏尔塔瓦河 ── 历史的脊梁",
    title: "东欧最美的黄金丝带：布拉格查理大桥",
    subtitle: "650年星象密码与反思散策",
    date: "二零二六年盛夏 ‧ 第一身波希米亚暮色漫步与大数据解构",
    quote: "「莫扎特说，布拉格的灵魂是用音符编织的；而当你站在查理大桥上，看着落日将 30 尊圣者雕像镀上一层不朽的碎金，你才会明白：这座桥是布拉格最激昂、最缱绻的一段交响乐章。」",
    intro: "如果说布拉格城堡是波希米亚高傲的皇冠，那么横跨伏尔塔瓦河的查理大桥（Charles Bridge / Karlův most），无疑就是这座历史古城最温柔的脊梁。这座始建于 1357 年的中世纪巨型砂岩石拱桥，长 516 米，宽约 10 米，由 16 个宏伟的桥拱支撑。它不仅连接着老城区与城堡区，更是一座名副其实的「露天巴洛克雕塑博物馆」。",
    numbersTitle: "查理大桥奠基「黄金密码数字矩阵」",
    numbersIntro: "查理大桥的坚固流传了六百多年，经历无数次洪水而屹立不倒。传说神圣罗马帝国皇帝查理四世（Charles IV）在建造此桥时，极度迷恋星象与数秘学。他特意邀请占星术士精准计算出一个绝对对称、蕴含宇宙能量的「奇数回文密码」，并命令必须在这一组数字交汇的精确秒数放落第一块奠基石。",
    numbersDetail: "这组惊人的数字顺序为：1357（年）- 9（日）- 7（月）- 5（时）- 31（分），连起来读就是 1-3-5-7-9-7-5-3-1。中世纪的占星术认为，这种奇数金字塔结构的数字矩阵能为建筑赋予神圣的对称力量。",
    chartCaption: "图一：1357 年 7 月 9 日 5 点 31 分奠基回文数值矩阵",
    landmarksTitle: "三大核心防御体系 ── 大桥美学地标立体分布",
    landmarksIntro: "查理大桥两端矗立着 30 尊栩栩如生的巴洛克圣人雕像，并由两端宏伟的哥特式防御塔楼拱卫。以下是大桥三大必看视觉地标：",
    landmark1Title: "老城桥塔",
    landmark1Sub: "Old Town Tower 【全欧最美哥特式塔楼】",
    landmark1Desc: "位于大桥东侧，曾是防御要塞。强烈推荐付费登顶，是拍摄大桥蜿蜒长卷的黄金制高点。",
    landmark2Title: "圣尼波木克雕像",
    landmark2Sub: "St. John Nepomuk 【全大桥最灵验明星圣像】",
    landmark2Desc: "第8根桥柱。圣人头顶五颗星，摸一摸底座被擦得发亮的铜雕，传说能带你重返布拉格。",
    landmark3Title: "小城桥塔",
    landmark3Sub: "Lesser Town 【双子星要塞大门】",
    landmark3Desc: "位于大桥西侧，连接着小城区。由一高一低两座塔楼组成，充满中世纪卫城要塞的威严。",
    crowdTitle: "24小时游客拥挤度与最佳「黄金摄影光线」大数据",
    crowdIntro: "查理大桥白天永远是人潮汹涌的激战区。为了帮大家拍出空灵、高质量的东欧大片，以下是「查理大桥24小时拥挤度与光线观赏指数」大数据分析：",
    experienceTitle: "第一身沉浸实感：在圣者雕像下聆听伏尔塔瓦河的心跳",
    experienceText1: "想要真正感受查理大桥的灵魂，你必须在清晨 05:30 爬出温暖的被窝。此时的布拉格刚从睡梦中醒来，整座大桥被一层淡淡的薄雾笼罩。古老而粗糙的花岗岩石砖路泛着清冷的光泽，脚步声在空旷的桥拱间激起幽深的回音。当第一缕金色的丁达尔晨曦穿透老城桥塔的哥特式飞檐，整条伏尔塔瓦河泛起粼粼波光，成群的白天鹅在如镜的水面上优雅游弋，美得让人窒息。",
    experienceText2: "漫步到第 8 根桥柱前的圣尼波木克（St. John Nepomuk）雕像下。这位圣人因拒绝向国王透露王后忏悔的秘密，在此地被残忍地投入滚滚河水中殉道。抚摸着雕像底座那块被全球千百万旅客双手擦得金黄透亮的青铜浮雕，闭上双眼，冰凉的铜质触感传来千年的历史心跳。",
    experienceText3: "传说只要诚心抚摸它，你此生便注定会再次重返布拉格，这份美丽的誓言是这座古桥赠予所有流浪者最浪漫的护身符。",
    nightlifeTitle: "查理大桥缤纷夜生活：手风琴声下的落日蓝调与高空眺望",
    nightlife1Title: "老街头艺人的黄昏交响乐：",
    nightlife1Desc: "傍晚 20:00 左右，当太阳缓缓沉入西面城堡区的山岗，大桥上会聚集全欧洲最高质量的街头音乐家。爵士乐队的萨克斯风、老艺人的手风琴声在微风中交织，配合远处城堡亮起的暖黄色夜灯，整座大桥变成了最浪漫的露天剧场。",
    nightlife2Title: "老城桥塔的「138级楼梯高空惊艳」：",
    nightlife2Desc: "黄昏时分，花费几十克朗购买门票，挑战攀登老城桥塔内部 138 级狭窄的螺旋石头楼梯。当你推开顶层观景台的木门，整条查理大桥如一条金色的丝带在脚下 360 度铺开，对岸城堡区的红屋顶在深邃的蓝调时刻（Blue Hour）波光粼粼，层次感强烈得让人热泪盈眶。",
    tipsTitle: "精明自游 ‧ 查理大桥完美防坑随身手册",
    tip1Title: "摄影师私藏的「桥下白天鹅」完美机位：",
    tip1Desc: "想要拍到大桥与白天鹅同框的标志性网红大片，不要站在大桥上面！最佳拍照点在小城区一侧的河岸草坪 Náplavka。这里聚集了上百只温驯的白天鹅，你可以带一点面包碎，以低角度仰拍，将白天鹅、伏尔塔瓦河与背后的查理大桥完美框在同一个画面中。",
    tip2Title: "警惕桥上「套路小偷」与黑心画家：",
    tip2Desc: "查理大桥白天人流密度极高，也是布拉格扒手（Pickpockets）的超级激战区。当你抬头看雕像或者听街头音乐忘乎所以时，背包请务必背在前面。另外，桥上的街头画家画人像前，请务必用捷克克朗（CZK）确认好最终价格，提防欧元汇率陷阱。",
    tip3Title: "最佳交通接驳方式：",
    tip3Desc: "搭乘布拉格有轨电车 17、18 号线直达 Karlovy lázně 站 或者地铁 A 线到 Staroměstská 站 下车，步行 3 分钟即可直接步入老城桥塔大门，完全无痛开启大桥散策。",
    tip4Title: "鞋履严格警告：",
    tip4Desc: "大桥桥面由中世纪不平整的粗糙玄武岩石砖铺成。为了保护双脚与提防扭伤，请务必穿着厚底、避震卓越的运动健步鞋，切勿穿薄底平底鞋或高跟鞋前来喔！",
    info1Title: "基本信息",
    info1Items: ["桥长：516 米", "建造年份：1357 年", "桥拱数量：16 个", "雕像数量：30 尊巴洛克圣人雕像"],
    info2Title: "打卡攻略",
    info2Items: ["最佳拍摄时间：清晨 05:30 或黄昏 20:30", "必摸雕像：圣尼波木克（第8根桥柱）", "推荐登塔：老城桥塔 138 级楼梯", "白天鹅机位：小城区 Náplavka 河岸"],
    footer: "岁月流逝于河水，历史镌刻于砂岩。愿每位漫步古桥的旅人，都能在伏尔塔瓦河的夕阳下找到属于自己的波希米亚梦。",
    tocTitle: "文章导览",
    yAxisLabels: { high: "100% (拥挤)", mid: "50% (惬意)", low: "0%" },
    xAxisLabels: { dawn: "晨曦", midday: "人流", peak: "高峰" },
    legendLabels: { sunrise: "晨雾丁达尔光", sunset: "绝美落日蓝调" },
  },
  en: {
    meta: "Spanning the Vltava River ── The Spine of History",
    headerTag: "Spanning the Vltava River ── The Spine of History",
    title: "The Most Beautiful Golden Ribbon of Eastern Europe: Prague Charles Bridge",
    subtitle: "650 Years of Celestial Codes and Reflective Strolls",
    date: "Summer 2026 ‧ First-Person Bohemian Twilight Walk & Big Data Analysis",
    quote: "「Mozart said the soul of Prague is woven with musical notes; and when you stand on Charles Bridge watching the sunset gild 30 saint statues with immortal gold dust, you'll understand: this bridge is Prague's most passionate and most tender symphony.」",
    intro: "If Prague Castle is Bohemia's proud crown, then Charles Bridge spanning the Vltava River is undoubtedly the most tender spine of this historic city. This medieval sandstone arch bridge built in 1357 is 516 meters long, about 10 meters wide, supported by 16 magnificent arches. It not only connects the Old Town with the Castle District but is also a true 「Open-Air Baroque Sculpture Museum.」",
    numbersTitle: "Charles Bridge Foundation 「Golden Numeric Palindrome Matrix」",
    numbersIntro: "Charles Bridge has stood firm for over 600 years, surviving countless floods. Legend has it that Holy Roman Emperor Charles IV was deeply fascinated by astronomy and numerology when building this bridge. He invited astrologers to precisely calculate an 「odd-number palindrome code」 of absolute symmetry containing cosmic energy, and commanded that the first foundation stone must be laid at the exact second when all these numbers converged.",
    numbersDetail: "This astonishing sequence of numbers is: 1357 (year) - 9 (day) - 7 (month) - 5 (hour) - 31 (minute), reading as 1-3-5-7-9-7-5-3-1. Medieval astrologers believed this odd-number pyramid structure could endow buildings with sacred symmetrical power.",
    chartCaption: "Figure 1: Foundation Palindrome Numeric Matrix at 5:31 on July 9, 1357",
    landmarksTitle: "Three Core Defense Systems ── Bridge Aesthetic Landmark Distribution",
    landmarksIntro: "Charles Bridge is flanked by 30 lifelike Baroque saint statues and guarded by magnificent Gothic defense towers at both ends. Here are the three essential visual landmarks:",
    landmark1Title: "Old Town Bridge Tower",
    landmark1Sub: "Old Town Tower 【Most Beautiful Gothic Tower in Europe】",
    landmark1Desc: "Located on the east side of the bridge, once a defensive fortress. Highly recommend paying to climb to the top – it's the golden vantage point for capturing the winding bridge panorama.",
    landmark2Title: "St. John Nepomuk Statue",
    landmark2Sub: "St. John Nepomuk 【Most Miraculous Star Saint on the Bridge】",
    landmark2Desc: "The 8th pier. The saint has five stars above his head – touching the polished bronze relief on its base is said to guarantee your return to Prague.",
    landmark3Title: "Lesser Town Bridge Tower",
    landmark3Sub: "Lesser Town 【Twin Star Fortress Gate】",
    landmark3Desc: "Located on the west side, connecting to the Lesser Town. Composed of one tall and one short tower, full of medieval citadel fortress grandeur.",
    crowdTitle: "24-Hour Tourist Density & Best 「Golden Photography Light」 Big Data",
    crowdIntro: "Charles Bridge is always a battleground of crowds during the day. To help you capture ethereal, high-quality Eastern European大片, here is the 「Charles Bridge 24-Hour Crowd Density & Light Viewing Index」 big data analysis:",
    experienceTitle: "First-Person Immersive Experience: Listening to the Heartbeat of the Vltava Beneath Saint Statues",
    experienceText1: "To truly feel the soul of Charles Bridge, you must drag yourself out of your warm bed at 05:30. Prague is just waking from its slumber, the entire bridge shrouded in a light mist. The ancient rough granite cobblestones glisten with cold light, footsteps echoing deeply through the empty arches. When the first golden Tyndall morning light penetrates the Gothic flying buttresses of the Old Town Bridge Tower, the entire Vltava River shimmers with light, and flocks of white swans glide gracefully on mirror-like waters – breathtakingly beautiful.",
    experienceText2: "Stroll to the St. John Nepomuk statue at the 8th pier. This saint was martyred here for refusing to reveal the queen's confessional secrets to the king, cruelly thrown into the rushing waters. Touch the bronze relief at the statue's base that millions of travelers have polished gold with their hands. Close your eyes – the cool bronze touch conveys a thousand years of historical heartbeat.",
    experienceText3: "Legend says if you sincerely touch it, you are destined to return to Prague in this lifetime. This beautiful vow is the most romantic talisman this ancient bridge gifts to all wanderers.",
    nightlifeTitle: "Charles Bridge Vibrant Nightlife: Sunset Blues Under Accordion Music & High-Altitude Viewing",
    nightlife1Title: "Old Street Performers' Twilight Symphony:",
    nightlife1Desc: "Around 20:00 in the evening, as the sun slowly sets behind the western castle hills, the bridge fills with the highest quality street musicians in Europe. Jazz saxophone and elderly accordionists' music interweave in the breeze, accompanied by the warm yellow night lights of the distant castle. The entire bridge transforms into the most romantic open-air theater.",
    nightlife2Title: "Old Town Bridge Tower's 「138-Step High-Altitude Stunning View」:",
    nightlife2Desc: "At dusk, spend a few dozen korunas to buy a ticket and challenge the 138 narrow spiral stone stairs inside the Old Town Bridge Tower. When you push open the wooden door to the top observation deck, the entire Charles Bridge unfolds like a golden ribbon at your feet in 360 degrees, while the red rooftops of the castle district glitter in the deep Blue Hour – so emotionally overwhelming.",
    tipsTitle: "Smart Travel ‧ Charles Bridge Perfect Anti-Scam Pocket Guide",
    tip1Title: "Photographers' Secret 「Bridge Below White Swan」 Perfect Spot:",
    tip1Desc: "To capture iconic influencer大片 of the bridge with white swans, don't stand on the bridge! The best photo spot is the riverside lawn on the Lesser Town side at Náplavka. Hundreds of tame white swans gather here. Bring some breadcrumbs and shoot from a low angle to frame the swans, Vltava River, and Charles Bridge perfectly in one shot.",
    tip2Title: "Beware of 「Trick Pickpockets」 and Dishonest Artists:",
    tip2Desc: "Charles Bridge has extremely high daytime foot traffic and is a major battleground for Prague pickpockets. When looking up at statues or getting lost in street music, always keep your backpack in front. Also, before having street artists draw your portrait, always confirm the final price in Czech Koruna (CZK) to avoid euro exchange rate traps.",
    tip3Title: "Best Transportation Options:",
    tip3Desc: "Take Prague tram lines 17 or 18 directly to Karlovy lázně stop, or metro Line A to Staroměstská station, then walk 3 minutes to enter the Old Town Bridge Tower entrance – completely painless.",
    tip4Title: "Strict Footwear Warning:",
    tip4Desc: "The bridge surface is made of uneven rough basalt cobblestones from medieval times. To protect your feet and prevent sprains, always wear thick-soled, excellent cushioning athletic shoes. Never wear thin-soled flats or high heels!",
    info1Title: "Basic Information",
    info1Items: ["Bridge Length: 516 meters", "Built: 1357", "Arch Count: 16", "Statue Count: 30 Baroque saint statues"],
    info2Title: "Photo Spots Guide",
    info2Items: ["Best Shooting Time: 05:30 AM or 20:30 PM", "Must-Touch Statue: St. John Nepomuk (8th pier)", "Recommended Tower Climb: Old Town Tower 138 steps", "White Swan Spot: Náplavka riverside"],
    footer: "Time flows in the river, history carved in sandstone. May every wanderer walking this ancient bridge find their own Bohemian dream beneath the Vltava sunset.",
    tocTitle: "Article Guide",
    yAxisLabels: { high: "100% (Crowded)", mid: "50% (Relaxed)", low: "0%" },
    xAxisLabels: { dawn: "Dawn", midday: "Crowds", peak: "Peak" },
    legendLabels: { sunrise: "Morning Mist Tyndall Light", sunset: "Beautiful Sunset Blues" },
  },
  yue: {
    meta: "橫跨伏爾塔瓦河 ── 歷史嘅脊樑",
    headerTag: "橫跨伏爾塔瓦河 ── 歷史嘅脊樑",
    title: "東歐最美嘅黃金絲帶：布拉格查理大橋",
    subtitle: "650年星象密碼與反思散策",
    date: "二零二六年盛夏 ‧ 第一身波希米亞暮色漫步與大數據解構",
    quote: "「莫札特話，布拉格嘅靈魂係用音符編織嘅；而當你站在查理大橋上，睇住日落將30尊聖者雕像鍍上一層唔朽嘅碎金，你先至會明白：呢座橋係布拉格最激昂、最繾綣嘅一段交響樂章。」",
    intro: "如果話布拉格城堡係波希米亞傲慢嘅皇冠，咁橫跨伏爾塔瓦河嘅查理大橋（Charles Bridge / Karlův most），無疑就係呢座歷史古城最溫柔嘅脊樑。呢座喺1357年起動工興建嘅中世紀巨型砂岩石拱橋，長516米，闊約10米，由16個宏偉嘅橋拱支撐。佢唔單止連接住舊城區同城堡區，仲係一座名符其實嘅「露天巴洛克雕塑博物館」。",
    numbersTitle: "查理大橋奠基「黃金密碼數字矩陣」",
    numbersIntro: "查理大橋嘅堅固流傳咗六百幾年，經歷無數次洪水都屹立不倒。傳說神聖羅馬帝國皇帝查理四世（Charles IV）起呢座橋嗰時，超級迷戀星象同數秘學。佢特意請占星術士精準計算出一個絕對對稱、蘊含宇宙能量嘅「奇數回文密碼」，並命令必須喺呢組數字交匯嘅精確秒數放落第一塊奠基石。",
    numbersDetail: "呢組驚人嘅數字順序係：1357（年）- 9（日）- 7（月）- 5（時）- 31（分），連埋讀就係 1-3-5-7-9-7-5-3-1。中世紀嘅占星術認為，呢種奇數金字塔結構嘅數字矩陣能為建築賦予神聖嘅對稱力量。",
    chartCaption: "圖一：1357 年 7 月 9 日 5 點 31 分奠基回文數值矩陣",
    landmarksTitle: "三大核心防禦體系 ── 大橋美學地標立體分布",
    landmarksIntro: "查理大橋兩端矗立住30尊栩栩如生嘅巴洛克聖人雕像，並由兩端宏偉嘅哥德式防禦塔樓拱衛。以下係大橋三大必睇視覺地標：",
    landmark1Title: "舊城橋塔",
    landmark1Sub: "Old Town Tower 【全歐最美哥德式塔樓】",
    landmark1Desc: "位於大橋東側，曾經係防禦要塞。強烈建議俾錢登頂，係拍攝大橋蜿蜒長卷嘅黃金制高點。",
    landmark2Title: "聖尼波木克雕像",
    landmark2Sub: "St. John Nepomuk 【全大橋最靈驗明星聖像】",
    landmark2Desc: "第8根橋柱。聖人頭頂五粒星，摸一摸底座被擦得發亮嘅銅雕，傳說能帶你重返布拉格。",
    landmark3Title: "小城橋塔",
    landmark3Sub: "Lesser Town 【雙子星要塞大門】",
    landmark3Desc: "位於大橋西側，連接住小城區。由一高一低兩座塔樓組成，充滿中世紀衛城要塞嘅威嚴。",
    crowdTitle: "24小時遊客擁擠度與最佳「黃金攝影光線」大數據",
    crowdIntro: "查理大橋白天永遠係人潮洶湧嘅激戰區。為咗幫大家拍出空靈、高質感嘅東歐大片，以下係「查理大橋24小時擁擠度與光線觀賞指數」大數據分析：",
    experienceTitle: "第一身沉浸實感：在聖者雕像下聆聽伏爾塔瓦河嘅心跳",
    experienceText1: "想要真正感受查理大橋嘅靈魂，你必須喺清晨05:30爬出溫暖嘅被竇。呢個時候嘅布拉格啱啱從睡夢中醒來，整座大橋被一層淡淡嘅薄霧籠罩住。古老而粗糙嘅花崗岩石磚路泛著清冷嘅光澤，腳步聲喺空曠嘅橋拱間激起幽深嘅回音。當第一縷金色嘅丁達爾晨曦穿透舊城橋塔嘅哥德式飛簷，整條伏爾塔瓦河泛起粼粼波光，成群嘅白天鵝喺如鏡嘅水面上優雅游弋，美得令人窒息。",
    experienceText2: "漫步到第8根橋柱前嘅聖尼波木克（St. John Nepomuk）雕像下。呢位聖人因拒絕向國王透露王后懺悔嘅秘密，喺呢處被殘忍咁投入滾滾河水中殉道。撫摸住雕像底座嗰塊被全球千萬旅客雙手擦得金黃透亮嘅青銅浮雕，閉上雙眼，冰涼嘅銅質觸感傳來千年嘅歷史心跳。",
    experienceText3: "傳說只要誠心撫摸佢，你今生便注定會再次重返布拉格，呢份美麗嘅誓言係呢座古橋贈予所有流浪者最浪漫嘅護身符。",
    nightlifeTitle: "查理大橋繽紛夜生活：手風琴聲下嘅日落藍調與高空瞭望",
    nightlife1Title: "老街頭藝人嘅黃昏交響樂：",
    nightlife1Desc: "傍晚20:00左右，當太陽慢慢沉入西面城堡區嘅山崗，大橋上會聚集全歐洲最高質量嘅街頭音樂家。爵士樂隊嘅薩克斯風、老藝人嘅手風琴聲喺微風中交織，配合遠處城堡亮起嘅暖黃色夜燈，整座大橋變成咗最浪漫嘅露天劇場。",
    nightlife2Title: "舊城橋塔嘅「138級樓梯高空驚艷」：",
    nightlife2Desc: "黃昏時分，花幾十克朗買飛，挑戰攀登舊城橋塔內部138級狹窄嘅螺旋石頭樓梯。當你推開頂層觀景台嘅木門，整條查理大橋如一條黃金絲帶喺腳下360度鋪開，對岸城堡區嘅紅屋頂喺深邃嘅藍調時刻（Blue Hour）波光粼粼，層次感強烈得令人熱淚盈眶。",
    tipsTitle: "精明自遊 ‧ 查理大橋完美防伏隨身手冊",
    tip1Title: "攝影師私藏嘅「橋下白天鵝」完美機位：",
    tip1Desc: "想要拍到大橋與白天鵝同框嘅標誌性網紅大片，唔好站在大橋上面！最佳拍照點喺小城區一側嘅河岸草坪Náplavka。呢度聚集咗上百隻溫馴嘅白天鵝，你可以帶少少麵包碎，以低角度仰拍，將白天鵝、伏爾塔瓦河與背後嘅查理大橋完美框喺同一個畫面中。",
    tip2Title: "警惕橋上「套路小偷」與黑心畫家：",
    tip2Desc: "查理大橋白天人流密度極高，亦都係布拉格扒手（Pickpockets）嘅超級激戰區。當你抬頭睇雕像或者聽街頭音樂忘形時，背囊請務必孭喺前面。另外，橋上嘅街頭畫家畫人像前，請務必用捷克克朗（CZK）確認好最終價格，提防歐元匯率陷阱。",
    tip3Title: "最佳交通接駁方式：",
    tip3Desc: "搭乘布拉格有軌電車17、18號線直達Karlovy lázně站或者地鐵A線到Staroměstská站落車，步行3分鐘即可直接步入舊城橋塔大門，完全無痛開啟大橋散策。",
    tip4Title: "鞋履嚴格警告：",
    tip4Desc: "大橋橋面由中世紀不平整嘅粗糙玄武岩石磚鋪成。為咗保護雙腳與防範扭傷，請務必著住厚底、避震卓越嘅運動健步鞋，切勿著薄底平底鞋或高跟鞋前來喔！",
    info1Title: "基本資訊",
    info1Items: ["橋長：516 米", "建造年份：1357 年", "橋拱數量：16 個", "雕像數量：30 尊巴洛克聖人雕像"],
    info2Title: "打卡攻略",
    info2Items: ["最佳拍攝時間：清晨05:30或黃昏20:30", "必摸雕像：聖尼波木克（第8根橋柱）", "推薦登塔：舊城橋塔138級樓梯", "白天鵝機位：小城區Náplavka河岸"],
    footer: "歲月流逝於河水，歷史鐫刻於砂岩。願每位漫步古橋嘅旅人，都能在伏爾塔瓦河嘅夕陽下搵到自己嘅波希米亞夢。",
    tocTitle: "文章導覽",
    yAxisLabels: { high: "100% (擠擁)", mid: "50% (愜意)", low: "0%" },
    xAxisLabels: { dawn: "晨曦", midday: "人流", peak: "高峰" },
    legendLabels: { sunrise: "晨霧丁達爾光", sunset: "絕美日落藍調" },
  },
};

export default function CharlesBridgePage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const c = content[lang];
  const toc = tocItems[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed top-20 right-4 z-50 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
          <h3 className="text-sm font-bold text-amber-400 mb-3">📋 {c.tocTitle}</h3>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-xs text-white/70 hover:text-amber-400 transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header with Hero Image */}
      <header className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://as1.ftcdn.net/v2/jpg/02/98/53/04/1000_F_298530452_hsRg2k4VaHvy5m1DFIs6Ui4NYKtr5OEc.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 rounded-full text-xs text-amber-300 uppercase tracking-widest mb-4">
              {c.headerTag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              {c.title}
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-amber-400">
                {c.subtitle}
              </span>
            </h1>
            <p className="text-white/80 italic">{c.date}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Quote */}
        <section id="intro" className="mb-12">
          <blockquote className="bg-blue-900/30 border-l-4 border-amber-400 rounded-r-xl p-6 text-lg italic text-blue-100">
            <p className="mb-2">{c.quote.split('「')[1]?.split('」')[0]?.split('；')[0]}</p>
            <p>{c.quote.split('；')[1]?.split('」')[0]}</p>
          </blockquote>

          <p className="text-lg leading-relaxed text-white/90 mt-8">
            {c.intro}
          </p>
        </section>

        {/* Section 1: Golden Number Matrix */}
        <section id="numbers" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📐</span>
            <span className="text-blue-300">{c.numbersTitle}</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">{c.numbersIntro}</p>

          {/* Number Matrix Visual */}
          <div className="bg-white/5 rounded-xl p-8 border border-blue-500/20 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="text-center">
                <div className="bg-blue-600/30 border border-blue-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-blue-300">1357</span>
                </div>
                <span className="text-xs text-white/60">{lang === "yue" ? "年" : lang === "en" ? "Year" : "年"}</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-orange-500/30 border border-orange-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-orange-300">9</span>
                </div>
                <span className="text-xs text-white/60">{lang === "yue" ? "日" : lang === "en" ? "Day" : "日"}</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-emerald-500/30 border border-emerald-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-emerald-300">7</span>
                </div>
                <span className="text-xs text-white/60">{lang === "yue" ? "月" : lang === "en" ? "Month" : "月"}</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-red-700/30 border border-red-500/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-red-300">5</span>
                </div>
                <span className="text-xs text-white/60">{lang === "yue" ? "時" : lang === "en" ? "Hour" : "时"}</span>
              </div>
              <span className="text-2xl text-white/40">-</span>
              <div className="text-center">
                <div className="bg-amber-500/30 border border-amber-400/50 rounded-lg p-4 mb-2">
                  <span className="text-4xl font-bold text-amber-300">31</span>
                </div>
                <span className="text-xs text-white/60">{lang === "yue" ? "分" : lang === "en" ? "Min" : "分"}</span>
              </div>
              <span className="text-2xl text-white/40 mx-4">➡️</span>
              <div className="bg-amber-400/20 border border-amber-400/50 rounded-lg p-4 text-center">
                <span className="text-2xl font-mono font-bold text-amber-300 tracking-wider">1-3-5-7-9-7-5-3-1</span>
                <p className="text-xs text-white/60 mt-1">{lang === "en" ? "Palindromic symmetry" : "正讀反讀完全對稱"}</p>
              </div>
            </div>
            <p className="text-center text-sm text-white/50 mt-4">{c.chartCaption}</p>
          </div>

          <p className="text-lg text-white/80">{c.numbersDetail}</p>
        </section>

        {/* Section 2: Three Core Landmarks */}
        <section id="landmarks" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <span className="text-blue-300">{c.landmarksTitle}</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">{c.landmarksIntro}</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 hover:bg-blue-900/50 transition-colors">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">{c.landmark1Title}</h3>
              <p className="text-amber-400 text-sm mb-3">{c.landmark1Sub}</p>
              <p className="text-white/70 text-sm">{c.landmark1Desc}</p>
            </div>

            <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 hover:bg-orange-900/50 transition-colors">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-orange-300 mb-2">{c.landmark2Title}</h3>
              <p className="text-amber-400 text-sm mb-3">{c.landmark2Sub}</p>
              <p className="text-white/70 text-sm">{c.landmark2Desc}</p>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 hover:bg-emerald-900/50 transition-colors">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-emerald-300 mb-2">{c.landmark3Title}</h3>
              <p className="text-amber-400 text-sm mb-3">{c.landmark3Sub}</p>
              <p className="text-white/70 text-sm">{c.landmark3Desc}</p>
            </div>
          </div>
        </section>

        {/* Section 3: 24-Hour Crowd Chart */}
        <section id="crowd" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <span className="text-blue-300">{c.crowdTitle}</span>
          </h2>

          <p className="text-lg text-white/80 mb-8">{c.crowdIntro}</p>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="relative h-64">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-white/50">
                <span>{c.yAxisLabels.high}</span>
                <span>{c.yAxisLabels.mid}</span>
                <span>{c.yAxisLabels.low}</span>
              </div>

              <div className="absolute left-12 right-0 top-0 bottom-8">
                <div className="absolute left-0 right-0 top-1/4 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/10" />
                <div className="absolute left-0 right-0 top-3/4 border-t border-dashed border-white/10" />

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 0,80 Q 20,50 35,20 T 55,15 Q 70,30 85,70 T 100,80"
                    fill="none"
                    stroke="#c0392b"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="8" cy="78" r="4" fill="#d4af37" />
                  <circle cx="8" cy="78" r="6" fill="none" stroke="#d4af37" strokeWidth="1" />
                  <circle cx="70" cy="45" r="4" fill="#e07a5f" />
                  <circle cx="70" cy="45" r="6" fill="none" stroke="#e07a5f" strokeWidth="1" />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/50">
                  <span className="text-left">05:30<br/><span className="text-emerald-400">{c.xAxisLabels.dawn}</span></span>
                  <span className="text-center">10:00<br/><span className="text-white/70">{c.xAxisLabels.midday}</span></span>
                  <span className="text-right text-red-400 font-bold">14:00-17:00<br/>{c.xAxisLabels.peak}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-400" />
                <span className="text-sm text-white/70">🌅 {c.legendLabels.sunrise}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-400" />
                <span className="text-sm text-white/70">🌇 {c.legendLabels.sunset}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: First Person Experience */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🌉</span>
            <span className="text-blue-300">{c.experienceTitle}</span>
          </h2>

          <p className="text-lg text-white/80 mb-6">{c.experienceText1}</p>

          <div className="bg-orange-900/20 border-l-4 border-orange-400 rounded-r-xl p-6 mb-6">
            <p className="text-lg text-white/90">{c.experienceText2}</p>
            <p className="text-lg text-white/90 mt-4">{c.experienceText3}</p>
          </div>

          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-400/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4">🌙 {c.nightlifeTitle}</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-2xl">🎷</span>
                <div>
                  <strong className="text-amber-400">{c.nightlife1Title}</strong>
                  {c.nightlife1Desc}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🗼</span>
                <div>
                  <strong className="text-amber-400">{c.nightlife2Title}</strong>
                  {c.nightlife2Desc}
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Tips Panel */}
        <section id="tips" className="mb-16 scroll-mt-24">
          <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-600/50">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              {c.tipsTitle}
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl">📸</span>
                <div>
                  <strong className="text-amber-400">{c.tip1Title}</strong>
                  <span className="text-white/80">{c.tip1Desc}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <strong className="text-amber-400">{c.tip2Title}</strong>
                  <span className="text-white/80">{c.tip2Desc}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🚊</span>
                <div>
                  <strong className="text-amber-400">{c.tip3Title}</strong>
                  <span className="text-white/80">{c.tip3Desc}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">👟</span>
                <div>
                  <strong className="text-amber-400">{c.tip4Title}</strong>
                  <span className="text-white/80">{c.tip4Desc}</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">📍 {c.info1Title}</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {c.info1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-3">🎯 {c.info2Title}</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {c.info2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center py-8 border-t border-b border-amber-400/30">
          <p className="text-lg italic text-white/70">{c.footer}</p>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <Comments slug="charles-bridge" />
        </div>
      </main>
    </div>
  );
}
