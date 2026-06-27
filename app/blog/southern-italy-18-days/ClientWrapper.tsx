"use client";
import Comments from "../../../components/Comments";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

// Tour sections for Table of Contents
const tocItems = {
  "zh-TW": [
    { id: "intro", title: "行程概覽", emoji: "🗺️" },
    { id: "days-1-5", title: "Day 1-5 拿坡里", emoji: "🏛️" },
    { id: "days-6-9", title: "Day 6-9 阿瑪菲", emoji: "🌊" },
    { id: "days-10-12", title: "Day 10-12 普利亞", emoji: "🏘️" },
    { id: "days-13-19", title: "Day 13-19 西西里", emoji: "🏝️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "行程概览", emoji: "🗺️" },
    { id: "days-1-5", title: "Day 1-5 拿波里", emoji: "🏛️" },
    { id: "days-6-9", title: "Day 6-9 阿玛菲", emoji: "🌊" },
    { id: "days-10-12", title: "Day 10-12 普利亚", emoji: "🏘️" },
    { id: "days-13-19", title: "Day 13-19 西西里", emoji: "🏝️" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Trip Overview", emoji: "🗺️" },
    { id: "days-1-5", title: "Days 1-5 Naples", emoji: "🏛️" },
    { id: "days-6-9", title: "Days 6-9 Amalfi", emoji: "🌊" },
    { id: "days-10-12", title: "Days 10-12 Puglia", emoji: "🏘️" },
    { id: "days-13-19", title: "Days 13-19 Sicily", emoji: "🏝️" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "行程概覽", emoji: "🗺️" },
    { id: "days-1-5", title: "Day 1-5 拿坡里", emoji: "🏛️" },
    { id: "days-6-9", title: "Day 6-9 阿瑪菲", emoji: "🌊" },
    { id: "days-10-12", title: "Day 10-12 普利亞", emoji: "🏘️" },
    { id: "days-13-19", title: "Day 13-19 西西里", emoji: "🏝️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

// Main content for all languages
const content = {
  "zh-TW": {
    meta: {
      tag: "🇮🇹 南歐慢活 · 溫馨闔家歡",
      title: "地中海驕陽與蔚藍",
      subtitle: "一家三口19天順序暢遊南意大利慢活全攻略",
      author: "純粹旅人",
      date: "June 2026",
      imageAlt: "南意大利海岸風光",
      imageCaption: "▲ 地中海的驕陽與蔚藍：南意大利的夏日風情令人沉醉",
      tags: ["南意大利", "拿坡里", "阿瑪菲海岸", "西西里島", "家庭旅遊"],
    },
    intro: {
      p1: "大半生在香港打拼，退下火線後最珍貴的，莫過於牽著太太的手，帶著小朋友，來一場不趕時間的長途旅行。<strong>南意大利</strong>，這片被上帝親吻過的蔚藍海岸，有著燃燒的火山、沉睡的古城與無盡的檸檬香氣。19天，由拿坡里到西西里，每一天都是我們一家人的金色記憶。",
      p2: "這趟長達19天的深度慢活之旅，我全副心思盡出 ── <strong>前半段活用平穩的義大利國鐵與網約大車，後半段在西西里島開啟無痛自駕</strong>。我們挑選了多間位於核心商圈、出入極方便且物超所值的精品公寓酒店，既能大嘆冷氣看風景，又能瘋狂品嚐米芝蓮級別的平民薄餅與手工海鮮，全家玩得省心又大大滿足！",
    },
    itinerary: {
      title: "🗺️ 19天南意大利闔家歡行程 ── 四大核心板塊",
      zones: [
        { name: "第一板塊：拿坡里", days: "Day 1-5", desc: "拿坡里歷史城區、龐貝古城、維蘇威火山", color: "blue" },
        { name: "第二板塊：阿瑪菲", days: "Day 6-9", desc: "蘇連多、卡布里島藍洞、波西塔諾", color: "cyan" },
        { name: "第三板塊：普利亞", days: "Day 10-12", desc: "阿爾貝羅貝洛蘑菇屋、巴里、馬泰拉石窟", color: "amber" },
        { name: "第四板塊：西西里島", days: "Day 13-19", desc: "巴勒莫、切法盧、神殿之谷、陶爾米納、敘拉古", color: "red" },
      ],
    },
    days1to5: {
      title: "🏛️ Day 1-5：拿坡里的熱情、沉睡的龐貝與火山奇蹟",
      day1: {
        title: "Day 1：抵達拿坡里、新堡步行街與元祖瑪格麗特薄餅",
        p1: "我們全家乘搭舒適的國際航班抵達拿坡里機場。我提早網約了一輛寬敞的賓士七人的士，直達位於托萊多步行街旁邊的<strong>托萊多斯帕卡精品公寓</strong>。這間公寓不僅價格美麗、物超所值，還擁有兩房一廳的小廚房結構，地面全平。下樓就是全城最熱鬧的商場與地鐵站，太太大讚選址精明。",
        p2: "安頓過後，我們放慢步伐，踱步前往雄偉的<strong>新堡（Castel Nuovo）</strong>。這裡臨海而建，廣場寬闊，非常適合小朋友奔跑玩樂。晚餐我們去了名震全球的元祖薄餅店 <strong>L'Antica Pizzeria da Michele</strong>。當現點現烤、帶著炭火焦香的薄餅端上桌，濃郁的莫扎瑞拉起司與鮮甜的番茄醬汁在舌尖瞬間爆開，小朋友吃得滿臉醬汁，大喊這是他吃過最好吃的薄餅！",
        image: { src: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80", alt: "拿坡里黃昏風光", caption: "▲ 拿坡里的黃昏，海風輕拂，非常適合一家人慢步" },
      },
      day2: {
        title: "Day 2：托萊多藝術地鐵站、歷史老城尋味與夜市煙火",
        p1: "清晨，我們乘搭地鐵前往被譽為「全歐洲最美地鐵站」的 <strong>Toledo 地鐵站</strong>。站在扶手電梯上，抬頭望去是藝術家利用數萬塊藍白馬賽克瓷磚拼接出的巨型「璀璨星空海洋天窗」，陽光折射下來如夢似幻。隨後，我們慢步走入老城區核心的<strong>斯帕卡拿坡里老街步行街</strong>。我們走進老字號甜品店，品嚐了新鮮出爐的傳統甜點 <strong>Sfogliatella</strong>，配上一杯絲滑的義式咖啡，慢活感十足。",
        p2: "入夜後，<strong>普雷比席特廣場</strong>周邊變身為熱鬧的平民夜市。街頭藝人拉著手風琴，各種售賣手工藝品、炸海鮮小吃的攤檔霓虹閃爍。我們挑了一家露天大排檔，點了一大盤現炸的「椒鹽地中海小魷魚」，熱氣騰騰，鑊氣十足！",
        image: { src: "https://static.designboom.com/wp-content/uploads/2012/12/bisazzatoledo01.jpg", alt: "拿坡里 Toledo 地鐵站", caption: "▲ Toledo 地鐵站，被譽為「歐洲最美地鐵站」的藍白馬賽克星空海洋天窗" },
      },
      day3: {
        title: "Day 3：世界遺產龐貝古城深度歷史穿越",
        p1: "第三天是屬於歷史的震撼日。我們乘搭平穩的維蘇威環線火車直達<strong>龐貝古城</strong>大門口。考慮到龐貝古城面積高達66公頃且完全毫無遮擋，我為家人安排了<strong>黃金避熱特權</strong> ── 提早預約了早上08:30的頭班車電子票，並聘請了一位專業的官方中文導覽員。",
        p2: "走在古老、粗糙的羅馬石磚路上，穿過保存完好的阿波羅神廟、巨型圓形劇場與古羅馬大浴場。導覽員用生動的故事向小朋友講述兩千年前那場火山爆發的史詩悲劇。看著那些被火山灰定格的歷史殘垣與壁畫，全家都深深震撼，這是一場好玩又極具教育意義的時空穿越之旅！",
        image: { src: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/028/137/original/2a0a7c66a7107b164e0e05347065b0a4/italy-pompeii-street-052120-am.jpg", alt: "龐貝古城與維蘇威火山", caption: "▲ 龐貝古城遺址，背後是雄偉的維蘇威火山，見證兩千年前的歷史悲劇" },
      },
      day4: {
        title: "Day 4：征服維蘇威火山之巔、俯瞰拿坡里灣全景",
        p1: "這天，我們搭乘舒適的登山專線巴士直達<strong>維蘇威火山</strong>海拔1,000米的登山口。剩下的200米垂直高度需要純步行。這是一條平緩但略帶碎石的z字形登山步道，沿途空氣清新。我牽著小朋友，太太在一旁給我們加油。",
        p2: "當我們全家終於登上火山口邊緣，看著那個巨大的火山深坑，往外望去，整片湛藍的拿坡里灣、遠處錯落有致的城市紅屋頂如同一幅360度的巨幅風景長卷在腳下鋪開，震撼得讓人屏息！我們在火山口前擺出功夫姿勢拍下了全家福留念，小朋友興奮得連連讚嘆！",
        image: { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "維蘇威火山火山口全景", caption: "▲ 站在維蘇威火山之巔，俯瞰拿坡里灣的360度全景，壯闘人心" },
      },
      day5: {
        title: "Day 5：國立考古博物館與蛋堡藍調時刻",
        p1: "連續兩天的戶外活動後，第五天我們放慢步調，走進冷氣充足、地面全平坦的<strong>拿坡里國立考古博物館</strong>。這裏是全球收藏龐貝古城壁畫與馬賽克珍品最頂級的聖地。我們悠閒地推著租來的嬰兒車，在宏偉的展廳裡欣賞那幅名震全球的《亞歷山大大戰大流士》巨幅馬賽克，線條之細膩，視覺震撼度100%。",
        p2: "傍晚時分，我們來到海濱的<strong>蛋堡（Castel dell'Ovo）</strong>。坐在海濱木棧道的長椅上，看著落日晚霞將整片天空染成夢幻的紫紅色，隨後天空轉為深邃的皇家藍，蛋堡點亮暖黃色的夜燈倒影水中，美得動人心魄！",
        image: { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", alt: "蛋堡日落風光", caption: "▲ 蛋堡的黃昏藍調時刻，天空呈現夢幻的紫紅與皇家藍" },
      },
    },
    days6to9: {
      title: "🌊 Day 6-9：阿瑪菲海岸的懸崖檸檬香、藍洞奇境",
      day6: {
        title: "Day 6：高鐵接駁至蘇連多、入住海景物超所值公寓",
        p1: "第六天一早，我們告別拿坡里，乘搭舒適的火車前往阿瑪菲海岸的門戶 ── <strong>蘇連多（Sorrento）</strong>。阿瑪菲海岸的酒店是全義大利最貴的地段之一，為了物超所值，我精明地避開了Positano的奢華網紅店，在蘇連多核心商圈挑選了<strong>蘇連多海景精品公寓</strong>。這家公寓帶有一個面向大海的獨立大露台，價格只有Positano的三分之一，但一出門口就是無數老字號餐廳與步行街，性價比極高！",
        p2: "黃昏時分，我們全家在露台上一邊吃著當地買的新鮮無花果，一邊看著夕陽將地中海染成一片粉橘色，太太大讚我這個大隊長懂得搵好嘢！",
        image: { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", alt: "蘇連多海岸風光", caption: "▲ 蘇連多的露台風光，俯瞰整個拿坡里灣的粉橘色夕陽" },
      },
      day7: {
        title: "Day 7：卡布里島包船巡航、藍洞神聖上帝之光",
        p1: "第七天是全趟旅程的味覺與視覺最高潮！我們在蘇連多碼頭乘搭快船直達名流富豪雲集的<strong>卡布里島（Capri）</strong>。為了讓家人享受到最舒適、高質感的體驗，我沒有去排隊擠常規的大公車，而是幾個人合租了一艘<strong>傳統的木製白色搖櫓船</strong>開啟環島巡航。",
        p2: "當船隻緩緩行駛到大名鼎鼎的<strong>藍洞（Blue Grotto）</strong>門口，全家換乘更小的平底小船。我們整個人平躺在船艙裡，船伕大姐拉著鐵鏈、配合海浪的節奏一閃身，小船瞬間滑入漆黑的洞穴內部。一睜開眼，洞穴內的水面竟然折射出一種不可思議、如同一顆巨大藍寶石在海底發光的<strong>寶石碧藍色光芒</strong>！那刻，全家人在船上互相幫忙拍照，一路上充滿了歡聲笑語！",
        image: { src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80", alt: "卡布里島藍洞", caption: "▲ 卡布里島藍洞的神聖藍光，如同一顆巨大的藍寶石在海底發光" },
      },
      day8: {
        title: "Day 8：波西塔諾彩色懸崖迷宮、巨型檸檬沙冰",
        p1: "第八天我們搭車前往阿瑪菲海岸最標誌性的小鎮 ── <strong>波西塔諾（Positano）</strong>。這裏是一座建在垂直懸崖上的彩色迷宮。為了保障小朋友同老人家的體力，我安排了<strong>精明走法</strong>：網約車直接送到小鎮最頂端的山門口，我們順著平緩、林蔭密佈的大理石步行街一路往下坡逛。沿途兩岸開滿了垂掛著九重葛的精品店與手工藝品鋪。",
        p2: "累了，我們走進街角的老字號甜品店，買了三個用當地特產、碩大如哈密瓜的巨型檸檬做成的<strong>「天然檸檬雪葩冰沙」</strong>。冰沙酸甜清爽，一入口暑氣全消，小朋友吃得不亦樂乎！",
        image: { src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80", alt: "波西塔諾彩色懸崖", caption: "▲ 波西塔諾的彩色懸崖景緻，是阿瑪菲海岸在全球出鏡率第一的標誌性風景" },
      },
      day9: {
        title: "Day 9：阿瑪菲小鎮、拉維洛雲端花園的音樂狂想",
        p1: "第九天我們來到海岸得名的<strong>阿瑪菲小鎮（Amalfi）</strong>。慢步在小鎮中心的黑白碎石路上，雄偉的<strong>阿瑪菲主教座堂</strong>矗立在巨型台階頂端，帶有濃郁的摩爾式與拜占庭交織的炫彩花紋。午後，我們搭車前往隱藏在山頂的文青小鎮<strong>拉維洛（Ravello）</strong>。",
        p2: "走進著名的<strong>盧佛羅別墅（Villa Rufolo）</strong>，這裡擁有高聳在懸崖之巔的「雲端皇家花園」。站在白色大理石廊柱下往外望去，斑斕的鮮花、參天的古松與下方幾百米深、波光粼粼的翡翠色海面完美框在同一個畫面中。全家人坐在草坪上吹著海風，享受最奢侈的音樂慢活午後！",
        image: { src: "https://images.unsplash.com/photo-1621160626444-d7e76d5f8dae?w=1200&q=80", alt: "拉維洛別墅花園", caption: "▲ 拉維洛盧佛羅別墅的雲端花園，俯瞰整個阿瑪菲海岸" },
      },
    },
    days10to12: {
      title: "🏘️ Day 10-12：普利亞的千年精靈蘑菇屋與馬泰拉石窟古城",
      day10: {
        title: "Day 10：自駕開啟！入住阿爾貝羅貝洛精靈蘑菇屋",
        p1: "第十天，我們在蘇連多順利提了預約好的全新七人自駕車，正式開啟自駕流。我們橫跨義大利靴子版圖，開往東海岸的普利亞大區。當車子緩緩駛入童話小鎮<strong>阿爾貝羅貝洛（Alberobello）</strong>，小朋友興奮得貼在車窗上大喊大叫！這裡因為保留了上千棟始建於中世紀、用白色石灰岩砌成、圓錐形黑瓦頂的傳統巨型獨特小屋 ── <strong>「特魯利（Trulli）蘑菇屋」</strong>而名震全球。",
        p2: "為了帶給家人驚喜，我特意包棟入住了一間由百年特魯利改造而成的<strong>浪漫精靈精品民宿</strong>。內部乾淨涼爽，圓頂的天窗晚上還能平視看星星，全家人大讚如同住進了白雪公主與七個小矮人的童話城堡！",
        image: { src: "https://images.unsplash.com/photo-1553244819-0c3dd8c1f52c?w=1200&q=80", alt: "阿爾貝羅貝洛蘑菇屋", caption: "▲ 阿爾貝羅貝洛的特魯利蘑菇屋，如同一座童話小鎮" },
      },
      day11: {
        title: "Day 11：巴里歷史老城、手作耳光麵大排檔",
        p1: "第十一天我們開車前往海濱港口城市<strong>巴里（Bari）</strong>。慢步在巴里歷史老城的<strong>開胃老街（Via Arco Basso）</strong>。這條步行街最動人的風景，是每天都有幾十位當地的老奶奶搬出木桌子，當街純手工一揉一捏現做當地的特產 ── <strong>「貓耳朵麵（Orecchiette）」</strong>。老人家動作嫻熟，熱情地拉著我們的小朋友合照、教他捏麵糰，人情味十足！",
        p2: "午餐我們在街角的平民小酒館裡，點了一大盤的<strong>「鮮茄羅勒手作貓耳朵麵」</strong>。麵條爽口彈牙，吸飽了鮮美的番茄汁與羊起司香氣，樸實無華卻是最正的街坊老味道，價格平到偷笑！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Matera_boenisch_nov_2005.jpg", alt: "馬泰拉石窟風光", caption: "▲ 馬泰拉的千年石窟，是人類最古老的持續定居點之一" },
      },
      day12: {
        title: "Day 12：馬泰拉薩西石窟古城 ── 007電影的鐵血藍調",
        p1: "第十二天我們開車來到全人類歷史上最古老的持續定居點之一 ── <strong>馬泰拉（Matera）</strong>。整座城市是由石灰岩懸崖山體純手工開鑿而成的巨型石窟建築群 ── <strong>「薩西（Sassi）石窟」</strong>。這裡也是電影《007：生死有時》開場那場震撼飛車戲的取景地！",
        p2: "為了保障家人的體力，我安排了網約商務大車直接送到山頂觀景台，我們順著下坡路悠閒慢步。看著那些高低錯落、密密麻麻的石窟房屋、斑駁的紅磚牆與地下巨型蓄水池，時空壓縮感與史詩感瞬間拉滿。黃昏時分，整座峽谷石城點亮暖黃色的壁燈，晚霞斑斕，我們在觀景台前拍下了極具高級電影感的闔家歡大片！",
        image: { src: "https://images.unsplash.com/photo-1529480780361-1c0fb8507ef0?w=1200&q=80", alt: "馬泰拉日落時分", caption: "▲ 馬泰拉的黃昏，暖黃的壁燈亮起，呈現如同電影般的史詩場景" },
      },
    },
    days13to19: {
      title: "🏝️ Day 13-19：西西里島的熱情、切法盧海灘與陶爾米納古典謝幕",
      day13: {
        title: "Day 13：渡輪橫渡西里拿海峽、進駐巴勒莫",
        p1: "第十三天，我們開啟這趟旅程最豪邁的體驗 ── <strong>開著車直接開進巨型渡輪的船艙</strong>，橫渡著名的西里拿海峽，正式登陸神祕而熱情的<strong>西西里島（Sicily）</strong>！小朋友在渡輪甲板上看著海鷗齊飛，高興極了。",
        p2: "下午我們抵達首府<strong>巴勒莫（Palermo）</strong>，進駐位於新古典主義步行街核心的<strong>巴勒莫大劇院精品公寓</strong>。這間公寓客廳極大，推開落地玻璃窗就能看見宏偉的巴勒莫馬西莫劇院，下樓就是大型購物廣場與無數餐廳，物超所值！",
        image: { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80", alt: "巴勒莫大教堂", caption: "▲ 巴勒莫的阿拉伯-諾曼式建築，融合了多種文化的精髓" },
      },
      day14: {
        title: "Day 14：巴勒莫主教座堂、巴拉羅夜市大快朵頤",
        p1: "第十四天早上，我們來到宏偉的<strong>巴勒莫主教座堂</strong>。這座教堂融匯了哥德式、摩爾式與文藝復興式，宛如一座巨大的沙雕城堡。我帶著太太同小朋友花費幾歐元，登上了大教堂的<strong>黃金弧形屋頂步道</strong>。站在上面，往外望去能360度鳥瞰整座百塔之城的歷史街區，視野一流！",
        p2: "入夜後，西西里島的夜生活重頭戲降臨！我們一頭扎進全島最具本土生命力的<strong>巴拉羅老街夜市</strong>。這裡一到晚上霓虹燈亮起，熱氣騰騰。我們點了歷史悠久的街頭平民美味<strong>「牛脾包」</strong>、碩大如拳頭的<strong>「炸飯糰」</strong>與現烤的<strong>巨型地中海章魚腳</strong>，大快朵頤！",
        image: { src: "https://images.unsplash.com/photo-1596731498067-2a57e52a61c8?w=1200&q=80", alt: "巴拉羅夜市", caption: "▲ 巴拉羅夜市是西西里島最具本土生命力的美食天堂" },
      },
      day15: {
        title: "Day 15：切法盧純白沙灘慢活、崖壁小鎮的慵懶午後",
        p1: "第十五天我們開車前往風景如畫的海濱小鎮<strong>切法盧（Cefalù）</strong>。這裡也是殿堂級電影《天堂電影院》的故鄉。小鎮依山傍水，地勢平坦。我為太太同小朋友租了兩張靠海的躺椅與一把彩色遮陽傘。小朋友換上泳衣在清澈見底的翡翠色海水中嬉戲堆沙堡，太太則躺在椅子上大嘆冰鎮的西西里血橙汁、翻看小說。",
        p2: "午後，我們慢步在小鎮古老的大理石步行街上，看著兩岸粉白色的民居，時間彷彿在這裡變慢了。這才是最極致的歐洲慢活度假藝術！",
        image: { src: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1200&q=80", alt: "切法盧海濱小鎮", caption: "▲ 切法盧的海濱風光，如同一幅寧靜的地中海畫卷" },
      },
      day16: {
        title: "Day 16：神殿之谷深度歷史穿越 ── 觸摸古希臘黃金美學",
        p1: "第十六天我們自駕開往南海岸的<strong>阿格里真托（Agrigento）</strong>，朝聖名震全球的<strong>神殿之谷（Valley of the Temples）</strong>。這裡在兩千多年前是古希臘海外最大的城邦之一，一尊尊高大、被歲月剝蝕成赤褐色的巨型多立克式神廟在懸崖之巔一字排開。",
        p2: "為了照顧小朋友的體力，我精明地為家人購買了<strong>園區迷你小火車票</strong>，直接免去了長途步行的勞累。黃昏時分，夕陽將宏偉的協和神廟鍍上一層不朽的碎金，晚霞斑斕，我們在神廟前拍下了極具史詩震撼力的闔家歡剪影照！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Agrigent_BW_2012-10-07_12-52-27.JPG", alt: "神殿之谷全景", caption: "▲ 神殿之谷的黃昏，協和神廟在夕陽下鍍上金邊" },
      },
      day17: {
        title: "Day 17：陶爾米納古希臘劇場不朽落日、完美的終極謝幕",
        p1: "第十七天是這趟19天長征之旅的靈魂終章。我們開車來到西西里島最美麗的懸崖小鎮<strong>陶爾米納（Taormina）</strong>。小鎮高懸在海拔200米的懸崖之巔，面向浩瀚的愛琴海與依然在冒煙的<strong>埃特納活火山</strong>。傍晚時分，我們全家走進最震撼的<strong>古希臘劇場</strong>。",
        p2: "這座由古希臘人在兩千多年前依山純手工鑿刻而成的半圓形劇場，最天才的設計在於其舞台背景 ── <strong>沒有任何圍牆，而是直接將遠處白雪皚皚、正在冒煙的埃特納火山天際線與碧藍的愛琴海海平線無縫收納入鏡</strong>！當晚上夕陽緩緩沉入火山背後，整片天空幻化成瘋狂的絢麗金橙色與馬卡龍粉紫色。此時劇場中央隱隱傳來街頭小提琴手演奏的《教父》主題曲，古典的音符在幾千年的石牆間繾綣。全家人依偎在一起，太太將頭靠在我的肩膀上，小朋友安靜地看著晚霞。這幅無價的畫面，為我們19天的南義大利之旅劃上了最完美、最浪漫的終極句號！",
        image: { src: "https://images.unsplash.com/photo-1601933977570-21974af8c7bb?w=1200&q=80", alt: "陶爾米納古希臘劇場", caption: "▲ 陶爾米納古希臘劇場，背景是冒煙的埃特納火山與愛琴海" },
      },
      day18: {
        title: "Day 18：卡塔尼亞最後衝刺",
        p1: "第十八天，我們開車抵達<strong>卡塔尼亞（Catania）</strong>。在回港前，到核心商圈的大型購物廣場進行最後衝刺，搜羅最具南義特色、又物超所值的手信帶回給香港的親友老友：",
        p2: "傍晚時分，我們驅車南下，抵達西西里島最古老的城市 ── <strong>敘拉古（Syracuse）</strong>，入住海濱精品公寓，準備迎接這趟旅程的最後一天。",
        image: { src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=1200&q=80", alt: "卡塔尼亞廣場", caption: "▲ 卡塔尼亞的繁華廣場" },
      },
      day19: {
        title: "Day 19：敘拉古古蹟漫步與完美歸航",
        p1: "第十九天是我們南意大利之旅的最終章。我們在<strong>敘拉古（Siracusa）</strong>這座擁有2700年歷史的古希臘城市度過最後一個悠閒的早晨。慢步在<strong>阿基米德廣場（Piazza Archimede）</strong>，感受這座古城的悠閒氛圍。",
        p2: "接著，我們來到名震全球的<strong>尼泊斯古蹟區（Parco Archeologico della Neapolis）</strong>，參觀由古希臘人在西元前挖掘的巨型<strong>露天劇場</strong>，以及傳說中阿基米德使用巨大鏡片反射陽光焚燒敵艦的<strong>「阿基米德之鏡」</strong>。小朋友在古蹟區內的橄欖樹下奔跑，玩得樂不思蜀！",
        p3: "下午四點，全家提著沉甸甸的手信與滿滿的歡笑療癒回憶，齊齊在卡塔尼亞機場還了自駕車，登機順利回港。這19天的南意大利行程，雖然時間長，但憑著前半段網約車錯峰與後半段無痛自駕，我們不僅省下了大筆銀両，更真正深入了地中海的骨血與市井。慢下來才驚覺，幸福其實很簡單 ── 不過是陪著最珍貴的太太同小朋友，在海岸的微風下慢步、在火山的晚霞中大笑相聚。南意大利這一趟，全家都話下次還要再來！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Syracuse_Italy.jpg/1280px-Syracuse_Italy.jpg", alt: "敘拉古風光", caption: "▲ 敘拉古的古老港口，承載著2700年的文明" },
      },
    },
    tips: {
      title: "💡 闔家歡 ‧ 南意大利19天慢活自由行隨身手札",
      items: [
        { icon: "🏨", label: "公寓酒店的無上智慧：", content: "帶一家人長途出行，精品公寓式酒店（特別是自帶小廚房的房型）是絕對首選。房內有獨立餐桌，晚上可以去當地的傳統市場買頂級新鮮的紅蝦、無花果、起司回來簡單加工，全家圍坐吃宵夜，溫馨、空間大且性價比極高。" },
        { icon: "🚗", label: "前半段地鐵與後半段自駕的「黃金無痛切換」：", content: "拿坡里和阿瑪菲海岸歷史老城區道路狹窄、塞車極其嚴重且伴隨變態的限行區（ZTL）。<strong>前半段千萬不要自駕</strong>，全靠高鐵接駁與網約大車；<strong>後半段去普利亞和西西里島則必須提早網上租好一部7人大型自駕車</strong>。" },
        { icon: "🌡️", label: "嚴防地中海室內外溫差與熱浪：", content: "南意大利盛夏戶外陽光炙熱，而各大博物館、高鐵以及大型商場內部的冷氣往往開得像冰庫。隨身背包裡請務必為太太和孩子帶備<strong>輕便薄外套或大絲巾</strong>，並隨身攜帶1公升以上的<strong>礦泉水</strong>、<strong>遮陽帽</strong>以及<strong>高防曬霜</strong>。" },
        { icon: "👟", label: "台階與馬賽克碎石路安全提醒：", content: "龐貝古城、波西塔諾懸崖老街以及西西里島景區100%是由古老、凹凸不平且被磨得極其光滑的<strong>黑白馬賽克碎石路或玄武岩大石塊</strong>鋪成。<strong>請務必提醒太太和孩子全遊程穿著高抓地力、鞋底紋路極深、有良好足弓支撐的厚底防滑運動健步鞋</strong>。" },
      ],
    },
    suvenirs: {
      title: "🎁 闔家歡大隊長精選 ── 南意大利必帶殿堂級伴手禮",
      items: [
        { name: "阿瑪菲手工檸檬酒 (Limoncello)", desc: "用當地特產巨型檸檬皮純手工釀造的甜酒，色澤亮黃如金，每一口都是地中海的驕陽香氣。" },
        { name: "西西里傳統開心果醬 (Pistachio Paste)", desc: "埃特納火山灰土壤孕育出的頂級開心果製成，質地細膩，香氣濃郁到了骨子裡。" },
        { name: "陶爾米納手工彩繪陶瓷", desc: "極具西西里傳奇色彩的傳統陶藝雕塑，色彩五彩斑斕，擺在家中的客廳極具民間收藏與異國文藝逼格。" },
      ],
    },
    info: {
      title: "📊 行程資訊一覽",
      items: [
        { label: "📍 路線", value: "拿坡里 → 阿瑪菲 → 普利亞 → 西西里" },
        { label: "🗓️ 天數", value: "19天18夜" },
        { label: "👨‍👩‍👧 適合", value: "家庭出遊、深度慢活" },
        { label: "💰 預算", value: "中高級（€4,000-6,000/人）" },
        { label: "🚗 交通", value: "前半段火車、後半段自駕" },
        { label: "⏱️ 最佳季節", value: "5-10月" },
      ],
    },
    shareTitle: "🌊 地中海驕陽與蔚藍：南意大利19天順序暢遊慢活全攻略",
    ratingText: "給這個行程評分",
    favoriteText: "加入心願清單",
  },
  "zh-CN": {
    meta: {
      tag: "🇮🇹 南欧慢活 · 温馨阖家欢",
      title: "地中海骄阳与蔚蓝",
      subtitle: "一家三口19天顺序畅游南意大利慢活全攻略",
      author: "纯粹旅人",
      date: "June 2026",
      imageAlt: "南意大利海岸风光",
      imageCaption: "▲ 地中海的骄阳与蔚蓝：南意大利的夏日风情令人沉醉",
      tags: ["南意大利", "拿波里", "阿玛菲海岸", "西西里岛", "家庭旅游"],
    },
    intro: {
      p1: "大半生在港打拼，退下火线后最珍贵的，莫过于牵着太太的手，带着小朋友，来一场不赶时间的长途旅行。<strong>南意大利</strong>，这片被上帝亲吻过的蔚蓝海岸，有着燃烧的火山、沉睡的古城与无尽的柠檬香气。19天，由拿波里到西西里，每一天都是我们一家人的金色记忆。",
      p2: "这趟长达19天的深度慢活之旅，我全副心思尽出 ── <strong>前半段活用平稳的意大利国铁与网约大车，后半段在西西里岛开启无痛自驾</strong>。我们挑选了多间位于核心商圈、出入极方便且物超所值的精品公寓酒店，既能大叹冷气看风景，又能疯狂品尝米芝莲级别的平民薄饼与手工海鲜，全家玩得省心又大大满足！",
    },
    days1to5: {
      title: "🏛️ Day 1-5：拿波里的热情、沉睡的庞贝与火山奇迹",
      day1: {
        title: "Day 1：抵达拿波里、新堡步行街与元祖玛格丽特薄饼",
        p1: "我们全家乘搭舒适的国际航班抵达拿波里机场。我提早网约了一辆宽敞的奔驰七人的士，直达位于托莱多步行街旁边的<strong>托莱多斯帕卡精品公寓</strong>。这间公寓不仅价格美丽、物超所值，还拥有两房一厅的小厨房结构，地面全平。下楼就是全城最热闹的商场与地铁站，太太大赞选址精明。",
        p2: "安顿过后，我们放慢步伐，踱步前往雄伟的<strong>新堡（Castel Nuovo）</strong>。这里临海而建，广场宽阔，非常适合小朋友奔跑玩乐。晚餐我们去了名震全球的元祖薄饼店。当现点现烤、带着炭火焦香的薄饼端上桌，浓郁的莫扎瑞拉起司与鲜甜的番茄酱汁在舌尖瞬间爆开，小朋友吃得满脸酱汁，大喊这是他吃过的薄饼！",
        image: { src: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80", alt: "拿波里黄昏风光", caption: "▲ 拿波里的黄昏，海风轻拂，非常适合一家人慢步" },
      },
      day2: {
        title: "Day 2：托莱多艺术地铁站、历史老城寻味与夜市烟火",
        p1: "清晨，我们乘搭地铁前往被誉为「全欧洲最美地铁站」的 <strong>Toledo 地铁站</strong>。站在扶手电梯上，抬头望去是艺术家利用数万块蓝白马赛克瓷砖拼接出的巨型「璀璨星空海洋天窗」，阳光折射下来如梦似幻。",
        p2: "入夜后，<strong>普雷比席特广场</strong>周边变身为热闹的平民夜市。我们挑了一家露天大排档，点了一大盘现炸的「椒盐地中海小鱿鱼」，热气腾腾，镬气十足！",
        image: { src: "https://static.designboom.com/wp-content/uploads/2012/12/bisazzatoledo01.jpg", alt: "拿波里 Toledo 地铁站", caption: "▲ Toledo 地铁站，被誉为「欧洲最美地铁站」的蓝白马赛克星空海洋天窗" },
      },
      day3: {
        title: "Day 3：世界遗产庞贝古城深度历史穿越",
        p1: "第三天是属于历史的震撼日。我们乘搭平稳的维苏威环线火车直达<strong>庞贝古城</strong>大门口。我为家人安排了<strong>黄金避热特权</strong> ── 提早预约了早上08:30的头班车电子票，并聘请了一位专业的官方中文导游员。",
        p2: "走在古老、粗糙的罗马石砖路上，穿过保存完好的阿波罗神庙、巨型圆形剧场与古罗马大浴场。这是一场好玩又极具教育意义的时空穿越之旅！",
        image: { src: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/028/137/original/2a0a7c66a7107b164e0e05347065b0a4/italy-pompeii-street-052120-am.jpg", alt: "庞贝古城与维苏威火山", caption: "▲ 庞贝古城遗址，背后是雄伟的维苏威火山" },
      },
      day4: {
        title: "Day 4：征服维苏威火山之巅、俯瞰拿波里湾全景",
        p1: "这天，我们搭乘舒适的登山专线巴士直达<strong>维苏威火山</strong>海拔1,000米的登山口。剩下的200米垂直高度需要纯步行。",
        p2: "当我们全家终于登上火山口边缘，看着那个巨大的火山深坑，往外望去，整片湛蓝的拿波里湾、远处错落有致的城市红屋顶如同幅360度的巨幅风景长卷在脚下铺开，震撼得让人屏息！",
        image: { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "维苏威火山火山口全景", caption: "▲ 站在维苏威火山之巅，俯瞰拿波里湾的360度全景" },
      },
      day5: {
        title: "Day 5：国立考古博物馆与蛋堡蓝调时刻",
        p1: "第五天我们放慢步调，走进冷气充足、地面全平坦的<strong>拿波里国立考古博物馆</strong>。这里收藏了庞贝古城壁画与马赛克珍品最顶级的圣地。",
        p2: "傍晚时分，我们来到海滨的<strong>蛋堡（Castel dell'Ovo）</strong>。看着落日晚霞将整片天空染成梦幻的紫红色，蛋堡点亮暖黄色的夜灯倒影水中，美得动人心魄！",
        image: { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", alt: "蛋堡日落风光", caption: "▲ 蛋堡的黄昏蓝调时刻" },
      },
    },
    days6to9: {
      title: "🌊 Day 6-9：阿玛菲海岸的悬崖柠檬香、蓝洞奇境",
      day6: {
        title: "Day 6：高铁接驳至苏连多、入住海景物超所值公寓",
        p1: "第六天一早，我们告别拿波里，乘搭舒适的火车前往阿玛菲海岸的门户 ── <strong>苏连多（Sorrento）</strong>。",
        p2: "黄昏时分，我们全家在露台上一边吃着当地买的新鲜无花果，一边看着夕阳将地中海染成一片粉橘色，太太大赞！",
        image: { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", alt: "苏连多海岸风光", caption: "▲ 苏连多的露台风光" },
      },
      day7: {
        title: "Day 7：卡布里岛包船巡航、蓝洞神圣上帝之光",
        p1: "第七天是全趟旅程的视觉与味觉最高潮！我们租了一艘<strong>传统的木制白色摇橹船</strong>开启环岛巡航，前往大名鼎鼎的<strong>蓝洞（Blue Grotto）</strong>。",
        p2: "一睁开眼睛，洞穴内的水面竟然折射出一种不可思议、如同一颗巨大蓝宝石在海底发光的<strong>宝石碧蓝色光芒</strong>！那刻，全家人在船上互相帮忙拍照，一路上充满了欢声笑语！",
        image: { src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80", alt: "卡布里岛蓝洞", caption: "▲ 卡布里岛蓝洞的神圣蓝光" },
      },
      day8: {
        title: "Day 8：波西塔诺彩色悬崖迷宫、巨型柠檬沙冰",
        p1: "第八天我们搭车前往阿玛菲海岸最标志性的小镇 ── <strong>波西塔诺（Positano）</strong>。这里是座建在垂直悬崖上的彩色迷宫。",
        p2: "累了，我们走进街角的甜品店，买了三个用当地特产、硕大如哈密瓜的巨型柠檬做成的<strong>「天然柠檬雪葩冰沙」</strong>。冰沙酸甜清爽，一入口暑气全消！",
        image: { src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80", alt: "波西塔诺彩色悬崖", caption: "▲ 波西塔诺的彩色悬崖景色" },
      },
      day9: {
        title: "Day 9：阿玛菲小镇、拉维洛云端花园的音乐狂想",
        p1: "第九天我们来到海岸得名的<strong>阿玛菲小镇（Amalfi）</strong>。漫步在小镇中心的黑白碎石路上，雄伟的<strong>阿玛菲主教座堂</strong>矗立在巨型台阶顶端。",
        p2: "午后，我们搭车前往隐藏在山顶的文青小镇<strong>拉维洛（Ravello）</strong>，走进著名的<strong>卢佛罗别墅（Villa Rufolo）</strong>的云端皇家花园，享受最奢侈的音乐慢活午后！",
        image: { src: "https://images.unsplash.com/photo-1621160626444-d7e76d5f8dae?w=1200&q=80", alt: "拉维洛别墅花园", caption: "▲ 拉维洛卢佛罗别墅的云端花园" },
      },
    },
    days10to12: {
      title: "🏘️ Day 10-12：普利亚的千年精灵蘑菇屋与马泰拉石窟古城",
      day10: {
        title: "Day 10：自驾开启！入住阿尔贝罗贝洛精灵蘑菇屋",
        p1: "第十天，我们在苏连多顺利提了预约好的全新七人自驾车，正式开启自驾游。我们横跨意大利靴子版图，开往东海岸的普利亚大区。",
        p2: "当车子缓缓驶入童话小镇<strong>阿尔贝罗贝洛（Alberobello）</strong>，小朋友兴奋得贴在车窗上大喊大叫！这里因为保留了上千栋始建于中世纪、用白色石灰岩砌成、圆锥形黑瓦顶的传统巨型独特小屋 ── <strong>「特鲁利（Trulli）蘑菇屋」</strong>而名震全球。",
        image: { src: "https://images.unsplash.com/photo-1553244819-0c3dd8c1f52c?w=1200&q=80", alt: "阿尔贝罗贝洛蘑菇屋", caption: "▲ 阿尔贝罗贝洛的特鲁利蘑菇屋" },
      },
      day11: {
        title: "Day 11：巴里历史老城、手作猫耳朵面大排档",
        p1: "第十一天我们开车前往海滨港口城市<strong>巴里（Bari）</strong>。漫步在巴里历史老城的开胃老街。这里最动人的风景，是每天都有几十位当地的老奶奶搬出木桌子，当街纯手工一揉一捏现做当地的特产 ── <strong>「猫耳朵面（Orecchiette）」</strong>。",
        p2: "午餐我们在街角的平民小酒馆里，点了一大盘的<strong>「鲜茄罗勒手作猫耳朵面」</strong>，朴实无华却是最正的街坊老味道！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Matera_boenisch_nov_2005.jpg", alt: "马泰拉石窟风光", caption: "▲ 马泰拉的千年石窟" },
      },
      day12: {
        title: "Day 12：马泰拉萨西石窟古城 ── 007电影的铁血蓝调",
        p1: "第十二天我们开车来到全人类历史上最古老的持续定居点之一 ── <strong>马泰拉（Matera）</strong>。整座城市是由石灰岩悬崖山体纯手工开凿而成的巨型石窟建筑群 ── <strong>「萨西（Sassi）石窟」</strong>。这里也是电影《007：生死有时》开场那场震撼飞车戏的取景地！",
        p2: "黄昏时分，整座峡谷石城点亮暖黄色的壁灯，晚霞斑斓，我们在观景台前拍下了极具高级电影感的阖家欢大片！",
        image: { src: "https://images.unsplash.com/photo-1529480780361-1c0fb8507ef0?w=1200&q=80", alt: "马泰拉日落时分", caption: "▲ 马泰拉的黄昏" },
      },
    },
    days13to19: {
      title: "🏝️ Day 13-19：西西里岛的热情、切法卢海滩与陶尔米纳古典谢幕",
      day13: {
        title: "Day 13：渡轮横渡西里拿海峡、入驻巴勒莫",
        p1: "第十三天，我们开启这趟旅程最豪迈的体验 ── <strong>开着车直接开进巨型渡轮的船舱</strong>，横渡著名的西里拿海峡，正式登陆神秘而热情的<strong>西西里岛（Sicily）</strong>！",
        p2: "下午我们抵达首府<strong>巴勒莫（Palermo）</strong>，入驻位于新古典主义步行街核心的<strong>巴勒莫大剧院精品公寓</strong>。",
        image: { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80", alt: "巴勒莫大教堂", caption: "▲ 巴勒莫的阿拉伯-诺曼式建筑" },
      },
      day14: {
        title: "Day 14：巴勒莫主教座堂、巴拉罗夜市大快朵颐",
        p1: "第十四天早上，我们来到宏伟的<strong>巴勒莫主教座堂</strong>。我带着太太同小朋友登上了大教堂的<strong>黄金弧形屋顶步道</strong>，360度鸟瞰整座百塔之城的历史街区！",
        p2: "入夜后，我们一头扎进全岛最具本土生命力的<strong>巴拉罗老街夜市</strong>。点了历史悠久的街头平民美味<strong>「牛脾包」</strong>、硕大如拳头的<strong>「炸饭团」</strong>与现烤的<strong>巨型地中海章鱼脚</strong>，大快朵颐！",
        image: { src: "https://images.unsplash.com/photo-1596731498067-2a57e52a61c8?w=1200&q=80", alt: "巴拉罗夜市", caption: "▲ 巴拉罗夜市是西西里岛最具本土生命力的美食天堂" },
      },
      day15: {
        title: "Day 15：切法卢纯白海滩慢活、崖壁小镇的慵懒午后",
        p1: "第十五天我们开车前往风景如画的海滨小镇<strong>切法卢（Cefalù）</strong>。这里也是殿堂级电影《天堂电影院》的故乡。",
        p2: "我为太太同小朋友租了两张靠海的躺椅与一把彩色遮阳伞。小朋友换上泳衣在清澈见底的翡翠色海水中嬉戏堆沙堡，太太则躺在椅子上大叹冰镇的西西里血橙汁。这才是最极致的欧洲慢活度假艺术！",
        image: { src: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1200&q=80", alt: "切法卢海滨小镇", caption: "▲ 切法卢的海滨风光" },
      },
      day16: {
        title: "Day 16：神殿之谷深度历史穿越 ── 触摸古希腊黄金美学",
        p1: "第十六天我们自驾开往南海岸的<strong>阿格里真托（Agrigento）</strong>，朝圣名震全球的<strong>神殿之谷（Valley of the Temples）</strong>。",
        p2: "黄昏时分，夕阳将宏伟的协和神庙镀上一层不朽的碎金，晚霞斑斓，我们在神庙前拍下了极具史诗震撼力的阖家欢剪影照！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Agrigent_BW_2012-10-07_12-52-27.JPG", alt: "神殿之谷全景", caption: "▲ 神殿之谷的黄昏" },
      },
      day17: {
        title: "Day 17：陶尔米纳古希腊剧场不朽落日、完美的终极谢幕",
        p1: "第十七天是这趟18天长征之旅的灵魂终章。我们开车来到西西里岛最美丽的悬崖小镇<strong>陶尔米纳（Taormina）</strong>。",
        p2: "傍晚时分，我们全家走进最震撼的<strong>古希腊剧场</strong>。这座由古希腊人在两千多年前依山纯手工凿刻而成的半圆形剧场，最天才的设计在于其舞台背景 ── <strong>将远处白雪皑皑、正在冒烟的埃特纳火山天际线与碧蓝的爱琴海海平线无缝收纳入镜</strong>！当夕阳缓缓沉入火山背后，整片天空幻化成疯狂的绚丽金橙色与马卡龙粉紫色。全家人依偎在一起，为我们18天的南意大利之旅划上了最完美、最浪漫的终极句号！",
        image: { src: "https://images.unsplash.com/photo-1601933977570-21974af8c7bb?w=1200&q=80", alt: "陶尔米纳古希腊剧场", caption: "▲ 陶尔米纳古希腊剧场" },
      },
      day18: {
        title: "Day 18：卡塔尼亚最后冲刺",
        p1: "第十八天，我们开车抵达<strong>卡塔尼亚（Catania）</strong>。在回港前，到核心商圈的大型购物广场进行最后冲刺，搜罗最具南意大利特色、又物超所值的手信。",
        p2: "傍晚时分，我们驱车南下，抵达西西里岛最古老的城市 ── <strong>叙拉古（Syracuse）</strong>，入住海滨精品公寓，准备迎接这趟旅程的最后一天。",
        image: { src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=1200&q=80", alt: "卡塔尼亚广场", caption: "▲ 卡塔尼亚的繁华广场" },
      },
      day19: {
        title: "Day 19：叙拉古古迹漫步与完美归航",
        p1: "第十九天是我们南意大利之旅的最终章。我们在<strong>叙拉古（Siracusa）</strong>这座拥有2700年历史的古希腊城市度过最后一个悠闲的早晨。漫步在<strong>阿基米德广场（Piazza Archimede）</strong>，感受这座古城的悠闲氛围。",
        p2: "接着，我们来到名震全球的<strong>尼泊斯古迹区（Parco Archeologico della Neapolis）</strong>，参观由古希腊人在公元前挖掘的巨型<strong>露天剧场</strong>，以及传说中阿基米德使用巨大镜片反射阳光焚烧敌舰的<strong>「阿基米德之镜」</strong>。小朋友在古迹区内的橄榄树下奔跑，玩得不亦乐乎！",
        p3: "下午四点，全家提着沉甸甸的手信与满满的欢笑疗愈回忆，齐齐在卡塔尼亚机场还了自驾车，登机顺利回港。这19天的南意大利行程，虽然时间长，但凭前半段网约车错峰与后半段无痛自驾，我们不仅省下了大笔银两，更真正深入了地中海的骨血与市井。慢下来才惊觉，幸福其实很简单 ── 不过陪着最珍贵的太太同小朋友，在海岸的微风下慢步、在火山的晚霞中大笑相聚。南意大利这一趟，全家都说下次还要再来！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Syracuse_Italy.jpg/1280px-Syracuse_Italy.jpg", alt: "叙拉古风光", caption: "▲ 叙拉古的古老港口，承载着2700年的文明" },
      },
    },
    tips: {
      title: "💡 阖家欢 ‧ 南意大利18天慢活自由行随身手册",
      items: [
        { icon: "🏨", label: "公寓酒店的无上智慧：", content: "带一家人长途出行，精品公寓式酒店（特别是自带小厨房的房型）是绝对首选。" },
        { icon: "🚗", label: "前半段地铁与后半段自驾的「黄金无痛切换」：", content: "<strong>前半段千万不要自驾</strong>，全靠高铁接驳与网约大车；<strong>后半段去普利亚和西西里岛则必须提早网上租好一部7人大型自驾车</strong>。" },
        { icon: "🌡️", label: "严防地中海室内外温差与热浪：", content: "随身背包里请务必为太太和孩子带备<strong>轻便薄外套或大丝巾</strong>，并随身携带1公升以上的<strong>矿泉水</strong>、<strong>遮阳帽</strong>以及<strong>高防晒霜</strong>。" },
        { icon: "👟", label: "台阶与马赛克碎石路安全提醒：", content: "<strong>请务必提醒太太和孩子全游程穿着高抓地力、鞋底纹路极深、有良好足弓支撑的厚底防滑运动健步鞋</strong>。" },
      ],
    },
    suvenirs: {
      title: "🎁 阖家欢大队长精选 ── 南意大利必带殿堂级伴手礼",
      items: [
        { name: "阿玛菲手工柠檬酒 (Limoncello)", desc: "用当地特产巨型柠檬皮纯手工酿造的甜酒，色泽亮黄如金，每一口都是地中海的骄阳香气。" },
        { name: "西西里传统开心果酱 (Pistachio Paste)", desc: "埃特纳火山灰土壤孕育出的顶级开心果制成，香气浓郁到了骨子里。" },
        { name: "陶尔米纳手工彩绘陶瓷", desc: "极具西西里传奇色彩的传统陶艺雕塑，色彩五彩斑斓。" },
      ],
    },
    info: {
      title: "📊 行程资讯一览",
      items: [
        { label: "📍 路线", value: "拿波里 → 阿玛菲 → 普利亚 → 西西里" },
        { label: "🗓️ 天数", value: "18天17夜" },
        { label: "👨‍👩‍👧 适合", value: "家庭出游、深度慢活" },
        { label: "💰 预算", value: "中高级（€4,000-6,000/人）" },
        { label: "🚗 交通", value: "前半段火车、后半段自驾" },
        { label: "⏱️ 最佳季节", value: "5-10月" },
      ],
    },
    shareTitle: "🌊 地中海骄阳与蔚蓝：南意大利19天顺序畅游慢活全攻略",
    ratingText: "给这个行程评分",
    favoriteText: "加入心愿清单",
  },
  en: {
    meta: {
      tag: "🇮🇹 Southern Italy · Family Adventure",
      title: "Mediterranean Sunshine & Azure Blue",
      subtitle: "19-Day Family Journey Through Southern Italy",
      author: "Pure Traveler",
      date: "June 2026",
      imageAlt: "Southern Italy Coast",
      imageCaption: "▲ Mediterranean sunshine and azure blue: Southern Italy summer vibes",
      tags: ["Southern Italy", "Naples", "Amalfi Coast", "Sicily", "Family Travel"],
    },
    intro: {
      p1: "After decades of hard work in Hong Kong, nothing is more precious than holding my wife's hand and bringing our child on a leisurely long journey. <strong>Southern Italy</strong>, this azure coast kissed by God, features burning volcanoes, sleeping ancient cities, and endless lemon fragrance. 19 days, from Naples to Sicily, every day is a golden memory for our family.",
      p2: "This 19-day deep slow-travel journey took all my care ── <strong>using smooth Italian trains and private cars in the first half, then starting comfortable self-driving in Sicily in the second half</strong>. We chose boutique apartments in central locations that were convenient and great value, enjoying both air-conditioned views and Michelin-level pizza and fresh seafood.",
    },
    days1to5: {
      title: "🏛️ Days 1-5: Naples热情, 庞贝古城 & 火山奇迹",
      day1: {
        title: "Day 1: Arriving in Naples, Castel Nuovo & Original Margherita Pizza",
        p1: "We arrived at Naples airport and took a pre-booked Mercedes van directly to <strong>Toledo Spaccanapoli Apartments</strong>. This apartment not only offered great value but also had two bedrooms, a living room, and a small kitchen with flat floors. Downstairs is the city's most lively mall and metro station.",
        p2: "After settling in, we strolled to the magnificent <strong>Castel Nuovo</strong>. For dinner, we went to the world-famous <strong>L'Antica Pizzeria da Michele</strong>. When the charcoal-grilled pizza arrived, the rich mozzarella and sweet tomato sauce exploded on our tongues. Our child ate with满脸 sauce and declared it the best pizza ever!",
        image: { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", alt: "Naples Sunset", caption: "▲ Naples at dusk, sea breeze perfect for family strolls" },
      },
      day2: {
        title: "Day 2: Toledo Art Metro Station, Historic Old Town & Night Market",
        p1: "In the morning, we took the metro to <strong>Toledo Station</strong>, rated the most beautiful metro station in Europe. Standing on the escalator, looking up at the artistic installation made of tens of thousands of blue and white mosaic tiles creating a 'Starry Sky Ocean Skylight'.",
        p2: "At night, <strong>Piazza del Plebiscito</strong> transformed into a lively night market. We found an outdoor stall and ordered fried Mediterranean squid ── hot, fragrant, and absolutely delicious!",
        image: { src: "https://static.designboom.com/wp-content/uploads/2012/12/bisazzatoledo01.jpg", alt: "Naples Toledo Metro Station", caption: "▲ Toledo Metro Station, Europe's most beautiful metro station" },
      },
      day3: {
        title: "Day 3: UNESCO Pompeii Ancient City - Deep Historical Journey",
        p1: "Day 3 was a day of historical震撼. We took the smooth Circumvesuviana train directly to the entrance of <strong>Pompeii</strong>. I booked 08:30 tickets and hired an official Chinese-speaking guide for our family.",
        p2: "Walking on ancient Roman stone roads, passing the well-preserved Temple of Apollo, giant amphitheater, and ancient Roman baths. The guide told vivid stories about the volcanic eruption 2000 years ago. This was truly an educational and exciting time-travel experience!",
        image: { src: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/028/137/original/2a0a7c66a7107b164e0e05347065b0a4/italy-pompeii-street-052120-am.jpg", alt: "Pompeii and Vesuvius", caption: "▲ Pompeii ruins with majestic Mount Vesuvius in background" },
      },
      day4: {
        title: "Day 4: Conquering Mount Vesuvius Summit",
        p1: "We took the comfortable mountain shuttle bus to <strong>Mount Vesuvius</strong> at 1,000 meters altitude. The remaining 200 meters required walking. This is a gentle zigzag trail with fresh air along the way.",
        p2: "When we finally reached the crater's edge, looking at the massive volcanic crater and the panoramic view of the Bay of Naples below ── it was breathtaking! We took a family martial arts pose photo at the crater!",
        image: { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Vesuvius Crater", caption: "▲ Standing on Vesuvius crater, 360° view of Bay of Naples" },
      },
      day5: {
        title: "Day 5: National Archaeological Museum & Castel dell'Ovo Blue Hour",
        p1: "After two days outdoors, Day 5 we slowed down and visited the air-conditioned <strong>Naples National Archaeological Museum</strong>, home to the world's finest Pompeii frescoes and mosaic collections.",
        p2: "In the evening, we came to the seaside <strong>Castel dell'Ovo</strong>. Watching the sunset paint the sky dreamy purple-red, then turning into deep royal blue, with the castle's warm yellow lights reflected in the water ── absolutely breathtaking!",
        image: { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", alt: "Castel dell'Ovo Sunset", caption: "▲ Castel dell'Ovo at blue hour" },
      },
    },
    days6to9: {
      title: "🌊 Days 6-9: Amalfi Coast Cliffs, Lemon Fragrance & Blue Grotto",
      day6: {
        title: "Day 6: Train to Sorrento, Sea View Apartment",
        p1: "Day 6 morning, we said goodbye to Naples and took a comfortable train to the gateway of the Amalfi Coast ── <strong>Sorrento</strong>.",
        p2: "At dusk, our family enjoyed fresh figs on the apartment terrace while watching the Mediterranean turn pink-orange. My wife praised my ability to find such great places!",
        image: { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", alt: "Sorrento Coast", caption: "▲ Sorrento terrace view at sunset" },
      },
      day7: {
        title: "Day 7: Capri Private Boat Cruise & Blue Grotto Magical Light",
        p1: "Day 7 was the visual and gustatory highlight! We took a speedboat to <strong>Capri</strong> and chartered a traditional wooden white rowboat for an island cruise.",
        p2: "When our boat slowly entered the famous <strong>Blue Grotto</strong>, we lay flat in the cabin as the boatman pulled the chain and our boat slipped into the dark cave. Opening our eyes, the water inside reflected an unbelievable <strong>jewel-like sapphire blue glow</strong>! It was pure magic!",
        image: { src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80", alt: "Capri Blue Grotto", caption: "▲ Capri's Blue Grotto sacred blue light" },
      },
      day8: {
        title: "Day 8: Positano's Colorful Cliff Maze & Giant Lemon Sorbet",
        p1: "Day 8 we traveled to the most iconic town on the Amalfi Coast ── <strong>Positano</strong>. This is a colorful maze built on vertical cliffs.",
        p2: "We entered a local dessert shop and bought three <strong>natural lemon sorbets</strong> made from local giant lemons the size of cantaloupes. The sorbet was sour-sweet and refreshing!",
        image: { src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80", alt: "Positano Cliffs", caption: "▲ Positano's colorful cliff scenery" },
      },
      day9: {
        title: "Day 9: Amalfi Town, Ravello Cloud Garden Music Fantasy",
        p1: "Day 9 we came to <strong>Amalfi Town</strong> that gave the coast its name. Walking on the black and white pebble streets, the magnificent <strong>Amalfi Cathedral</strong> stands at the top of grand steps.",
        p2: "In the afternoon, we traveled to the artsy mountain town <strong>Ravello</strong> and visited the famous <strong>Villa Rufolo</strong>'s Cloud Royal Garden. Sitting on the lawn enjoying sea breeze ── the most luxurious slow-living afternoon!",
        image: { src: "https://images.unsplash.com/photo-1621160626444-d7e76d5f8dae?w=1200&q=80", alt: "Ravello Gardens", caption: "▲ Villa Rufolo's cloud gardens overlooking Amalfi Coast" },
      },
    },
    days10to12: {
      title: "🏘️ Days 10-12: Puglia's Thousand-Year Fairy Mushroom Houses & Matera Stone Caves",
      day10: {
        title: "Day 10: Self-Driving Begins! Alberobello Fairy Mushroom Houses",
        p1: "Day 10, we picked up our pre-booked 7-seater and officially started our self-drive journey. We crossed Italy to <strong>Alberobello</strong> in Puglia region.",
        p2: "When the car slowly entered the fairy tale town, our child exclaimed in excitement! Here, thousands of medieval <strong>Trulli mushroom houses</strong> made of white limestone with conical black tile roofs have been preserved. We booked a romantic boutique B&B converted from a century-old Trulli house!",
        image: { src: "https://images.unsplash.com/photo-1553244819-0c3dd8c1f52c?w=1200&q=80", alt: "Alberobello Trulli", caption: "▲ Alberobello's Trulli mushroom houses" },
      },
      day11: {
        title: "Day 11: Bari Historic Old Town, Handmade Orecchiette Street",
        p1: "Day 11 we drove to the port city <strong>Bari</strong>. Walking in the historic <strong>Via Arco Basso</strong>, the most touching sight was local grandmothers making <strong>orecchiette pasta</strong> by hand on the streets every day.",
        p2: "For lunch, we ordered a big plate of <strong>fresh tomato basil handmade orecchiette</strong> at a local tavern. Simple yet authentic street food at amazing prices!",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Matera_boenisch_nov_2005.jpg", alt: "Matera Stone Caves", caption: "▲ Matera's thousand-year stone caves" },
      },
      day12: {
        title: "Day 12: Matera Sassi Stone Cave City - 007 Movie's Epic Blue Hour",
        p1: "Day 12 we drove to one of humanity's oldest continuously inhabited settlements ── <strong>Matera</strong>. The entire city is a massive stone cave complex carved into limestone cliffs ── the <strong>Sassi Stone Caves</strong>. This was also the filming location for the opening car chase in <strong>James Bond: No Time to Die</strong>!",
        p2: "At dusk, the entire canyon city lit up with warm yellow lights. We took cinematic family photos at the viewpoint!",
        image: { src: "https://images.unsplash.com/photo-1529480780361-1c0fb8507ef0?w=1200&q=80", alt: "Matera Sunset", caption: "▲ Matera at dusk, cinematic scene" },
      },
    },
    days13to19: {
      title: "🏝️ Days 13-19: Sicily热情, Cefalù Beach & Taormina Classical Finale",
      day13: {
        title: "Day 13: Ferry Across Strait of Messina, Settling in Palermo",
        p1: "Day 13, we experienced the most magnificent moment ── <strong>driving our car directly into the giant ferry's hull</strong>, crossing the famous Strait of Messina to <strong>Sicily</strong>!",
        p2: "In the afternoon we arrived in capital <strong>Palermo</strong> and checked into a boutique apartment overlooking the Palermo Massimo Theatre.",
        image: { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80", alt: "Palermo Cathedral", caption: "▲ Palermo's Arab-Norman architecture" },
      },
      day14: {
        title: "Day 14: Palermo Cathedral Roof, Ballarò Night Market Feast",
        p1: "Day 14 morning, we visited the magnificent <strong>Palermo Cathedral</strong> and climbed to the <strong>golden curved roof walkway</strong> for 360° views of the city!",
        p2: "At night, we dived into <strong>Ballarò Market</strong>, Sicily's most vibrant night market. We feasted on traditional <strong>pani ca meusa</strong>, giant <strong>arancini</strong>, and grilled Mediterranean octopus!",
        image: { src: "https://images.unsplash.com/photo-1596731498067-2a57e52a61c8?w=1200&q=80", alt: "Ballarò Market", caption: "▲ Ballarò Market, Sicily's food paradise" },
      },
      day15: {
        title: "Day 15: Cefalù's White Sand Beach Slow Living",
        p1: "Day 15 we drove to the picturesque seaside town <strong>Cefalù</strong>, hometown of the classic film <strong>Cinema Paradiso</strong>.",
        p2: "I rented beach chairs and colorful umbrellas for my wife and child. Our kid splashed in the crystal-clear emerald waters while my wife enjoyed Sicilian blood orange juice. This is the ultimate European slow living!",
        image: { src: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1200&q=80", alt: "Cefalù Beach", caption: "▲ Cefalù's seaside charm" },
      },
      day16: {
        title: "Day 16: Valley of Temples - Touching Ancient Greek Golden Aesthetics",
        p1: "Day 16 we drove to <strong>Agrigento</strong> on Sicily's south coast for the world-famous <strong>Valley of the Temples</strong>.",
        p2: "At dusk, the setting sun gilded the majestic Temple of Concordia. We took epic silhouette family photos in front of the ancient temple!",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Agrigent_BW_2012-10-07_12-52-27.JPG", alt: "Valley of Temples", caption: "▲ Valley of Temples at sunset" },
      },
      day17: {
        title: "Day 17: Taormina Ancient Greek Theatre Eternal Sunset - Perfect Finale",
        p1: "Day 17 was the soul's final chapter. We drove to <strong>Taormina</strong>, Sicily's most beautiful cliff town perched 200 meters above sea level facing the Ionian Sea and smoking <strong>Mount Etna</strong>.",
        p2: "In the evening, our family entered the <strong>Ancient Greek Theatre</strong>. This 2000-year-old semi-circular theater's genius design has <strong>no backdrop walls</strong> ── instead, snow-capped smoking Mount Etna and the blue Ionian Sea are perfectly framed in the same view! When the sun sank behind Etna, the sky turned疯狂的绚丽金橙色. The sound of street violin playing the Godfather theme echoed through ancient walls. As our family huddled together watching the sunset, this priceless moment closed our 19-day Southern Italy journey perfectly.",
        image: { src: "https://images.unsplash.com/photo-1601933977570-21974af8c7bb?w=1200&q=80", alt: "Taormina Theatre", caption: "▲ Taormina Ancient Greek Theatre with Mt Etna" },
      },
      day18: {
        title: "Day 18: Catania Final Shopping",
        p1: "Day 18, we drove to <strong>Catania</strong> for final shopping. We searched for the most authentic Southern Italian souvenirs for family and friends back in Hong Kong.",
        p2: "In the evening, we drove south to <strong>Syracuse (Siracusa)</strong>, the oldest city in Sicily, and checked into a seaside boutique apartment for our final night.",
        image: { src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=1200&q=80", alt: "Catania Square", caption: "▲ Catania's bustling square" },
      },
      day19: {
        title: "Day 19: Syracuse Ancient Ruins & Perfect Farewell",
        p1: "Day 19 was the final chapter of our Southern Italy journey. We spent our last morning in <strong>Syracuse (Siracusa)</strong>, a 2,700-year-old ancient Greek city. We strolled through <strong>Piazza Archimede</strong> and soaked in the relaxed atmosphere of this historic city.",
        p2: "Next, we visited the world-famous <strong>Neapolis Archaeological Park</strong>, featuring an ancient Greek <strong>open-air theater</strong> carved into the rock in the 5th century BC, and the legendary <strong>Latomia del Paradiso</strong> quarry where legend says Archimedes used mirrors to reflect sunlight and burn enemy ships. Our child ran joyfully under the ancient olive trees!",
        p3: "At 4pm, carrying heavy souvenirs and full of happy memories, we returned the rental car at Catania airport and flew home. This 19-day Southern Italy journey, though long, let us truly experience the Mediterranean spirit. Slowing down, we realized happiness is simple ── just being with our most precious wife and child, strolling by the coast, laughing together at sunset. Our whole family says we'll be back!",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Syracuse_Italy.jpg/1280px-Syracuse_Italy.jpg", alt: "Syracuse View", caption: "▲ Syracuse's ancient harbor,承载着2700年的文明" },
      },
    },
    tips: {
      title: "💡 Family Expert Tips - Southern Italy 19-Day Slow Travel",
      items: [
        { icon: "🏨", label: "Apartment Hotel Wisdom:", content: "For family travel, boutique apartments (especially with kitchens) are the top choice. Having a kitchen lets you buy fresh seafood from local markets and cook together as a family." },
        { icon: "🚗", label: "Train First, Drive Later:", content: "<strong>Do NOT self-drive in Naples or Amalfi Coast</strong> ── roads are narrow and ZTL zones are tricky. <strong>Do self-drive in Puglia and Sicily</strong> for comfort." },
        { icon: "🌡️", label: "Beware Temperature Changes:", content: "Southern Italy summers are hot outdoors but museums and trains are freezing cold. Always carry <strong>light jackets</strong>, <strong>water</strong>, <strong>sunglasses</strong>, and <strong>high SPF sunscreen</strong>." },
        { icon: "👟", label: "Footwear Safety:", content: "Pompeii, Positano, and Sicilian sites have <strong>ancient uneven cobblestones that are very slippery</strong>. <strong>Wear sturdy hiking shoes with excellent grip throughout your trip</strong>." },
      ],
    },
    suvenirs: {
      title: "🎁 Top Southern Italy Souvenirs",
      items: [
        { name: "Amalfi Limoncello", desc: "Handmade sweet liqueur made from local giant lemon peels. Bright golden color, every sip tastes like Mediterranean sunshine." },
        { name: "Sicilian Pistachio Paste", desc: "Made from premium pistachios grown in Mt Etna volcanic soil. Incredibly aromatic." },
        { name: "Taormina Hand-painted Ceramics", desc: "Traditional Sicilian pottery with colorful designs, perfect home décor." },
      ],
    },
    info: {
      title: "📊 Trip Overview",
      items: [
        { label: "📍 Route", value: "Naples → Amalfi → Puglia → Sicily" },
        { label: "🗓️ Duration", value: "19 days, 18 nights" },
        { label: "👨‍👩‍👧 Best For", value: "Family, Slow Travel" },
        { label: "💰 Budget", value: "Mid-High (€4,000-6,000/person)" },
        { label: "🚗 Transport", value: "Train first half, Self-drive second half" },
        { label: "⏱️ Best Season", value: "May-October" },
      ],
    },
    shareTitle: "🌊 Mediterranean Sunshine & Azure Blue: 19-Day Southern Italy Journey",
    ratingText: "Rate This Trip",
    favoriteText: "Add to Wishlist",
  },
  yue: {
    meta: {
      tag: "🇮🇹 南歐慢活 · 溫馨闔家歡",
      title: "地中海驕陽與蔚藍",
      subtitle: "一家三口19天順序暢遊南意大利慢活全攻略",
      author: "純粹旅人",
      date: "June 2026",
      imageAlt: "南意大利海岸風光",
      imageCaption: "▲ 地中海的驕陽與蔚藍：南意大利的夏日風情令人沉醉",
      tags: ["南意大利", "拿坡里", "阿瑪菲海岸", "西西里島", "家庭旅遊"],
    },
    intro: {
      p1: "大半生喺香港打拼，退下火線後最珍貴的，莫過於牽著太太的手，帶著小朋友，來一場唔趕時間的長途旅行。<strong>南意大利</strong>，呢片被上帝親咀過的蔚藍海岸，有著燃燒的火山、沉睡的古城與無盡的檸檬香氣。19天，由拿坡里到西西里，每一天都係我哋一家人的金色回憶。",
      p2: "呢趟長達19天的深度慢活之旅，我全副心思盡出 ── <strong>前半段活用平穩的義大利國鐵與網約大車，後半段喺西西里島開啟無痛自駕</strong>。我哋揀選咗多間位於核心商圈、出入極方便且物超所值的精品公寓酒店，全家玩得省心又大大滿足！",
    },
    days1to5: {
      title: "🏛️ Day 1-5：拿坡里的熱情、沉睡的龐貝與火山奇蹟",
      day1: {
        title: "Day 1：抵達拿坡里、新堡步行街與元祖瑪格麗特薄餅",
        p1: "我哋全家乘搭舒適的國際航班抵達拿坡里機場。我提早網約咗一輛寬敞的賓士七人的士，直達位於托萊多步行街旁邊的<strong>托萊多斯帕卡精品公寓</strong>。",
        p2: "晚餐我哋去咗名震全球的元祖薄餅店。當現點現烤、帶著炭火焦香的薄餅端上桌，小朋友食得滿臉醬汁，大嗌呢個係佢食過最好食的薄餅！",
        image: { src: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80", alt: "拿坡里黃昏風光", caption: "▲ 拿坡里的黃昏，海風輕拂" },
      },
      day2: {
        title: "Day 2：托萊多藝術地鐵站、歷史老城尋味與夜市煙火",
        p1: "清晨，我哋乘搭地鐵前往被譽為「全歐洲最美地鐵站」的 <strong>Toledo 地鐵站</strong>。站在扶手電梯上，抬頭望去係藝術家利用數萬塊藍白馬賽克瓷磚拼接出的巨型「璀璨星空海洋天窗」。",
        image: { src: "https://static.designboom.com/wp-content/uploads/2012/12/bisazzatoledo01.jpg", alt: "拿坡里 Toledo 地鐵站", caption: "▲ Toledo 地鐵站，被譽為「歐洲最美地鐵站」的藍白馬賽克星空海洋天窗" },
      },
      day3: {
        title: "Day 3：世界遺產龐貝古城深度歷史穿越",
        p1: "第三天係屬於歷史的震撼日。我哋乘搭平穩的維蘇威環線火車直達<strong>龐貝古城</strong>大門口。我為家人安排咗<strong>黃金避熱特權</strong> ── 提早預約咗早上08:30的頭班車電子票，並聘請咗一位專業的官方中文導覽員。",
        image: { src: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/028/137/original/2a0a7c66a7107b164e0e05347065b0a4/italy-pompeii-street-052120-am.jpg", alt: "龐貝古城與維蘇威火山", caption: "▲ 龐貝古城遺址，背後係雄偉的維蘇威火山" },
      },
      day4: {
        title: "Day 4：征服維蘇威火山之巔",
        p1: "呢天，我哋搭乘舒適的登山專線巴士直達<strong>維蘇威火山</strong>海拔1,000米的登山口。剩下的200米垂直高度需要純步行。",
        p2: "當我哋全家終於登上火山口邊緣，看著那個巨大的火山深坑，往外望去，整片湛藍的拿坡里灣如同一幅360度的巨幅風景長卷在腳下鋪開，震撼得讓人屏息！",
        image: { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "維蘇威火山火山口全景", caption: "▲ 站在維蘇威火山之巔" },
      },
      day5: {
        title: "Day 5：國立考古博物館與蛋堡藍調時刻",
        p1: "第五天我哋放慢步調，走進冷氣充足的<strong>拿坡里國立考古博物館</strong>。呢度係全球收藏龐貝古城壁畫與馬賽克珍品最頂級的聖地。",
        p2: "傍晚時分，我哋來到海濱的<strong>蛋堡</strong>。看著落日晚霞將整片天空染成夢幻的紫紅色，美得動人心魄！",
        image: { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", alt: "蛋堡日落風光", caption: "▲ 蛋堡的黃昏藍調時刻" },
      },
    },
    days6to9: {
      title: "🌊 Day 6-9：阿瑪菲海岸的懸崖檸檬香、藍洞奇境",
      day6: {
        title: "Day 6：高鐵接駁至蘇連多、入住海景物超所值公寓",
        p1: "第六天一早，我哋告別拿坡里，乘搭舒適的火車前往阿瑪菲海岸的門戶 ── <strong>蘇連多（Sorrento）</strong>。",
        p2: "黃昏時分，我哋全家喺露台上一邊食著當地買的新鮮無花果，一邊睇住夕陽將地中海染成一片粉橘色，太太大嗌我呢個大隊長懂得搵好嘢！",
        image: { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", alt: "蘇連多海岸風光", caption: "▲ 蘇連多的露台風光" },
      },
      day7: {
        title: "Day 7：卡布里島包船巡航、藍洞神聖上帝之光",
        p1: "第七天係全趟旅程的視覺與味覺最高潮！我哋租咗一艘<strong>傳統的木製白色搖櫓船</strong>開啟環島巡航，前往大名鼎鼎的<strong>藍洞</strong>。",
        p2: "一睜開眼，洞穴內的水面竟然折射出一種不可思議的<strong>寶石碧藍色光芒</strong>！嗰刻，全家人都嗌不絕口！",
        image: { src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80", alt: "卡布里島藍洞", caption: "▲ 卡布里島藍洞的神聖藍光" },
      },
      day8: {
        title: "Day 8：波西塔諾彩色懸崖迷宮、巨型檸檬沙冰",
        p1: "第八天我哋搭車前往阿瑪菲海岸最標誌性的小鎮 ── <strong>波西塔諾</strong>。呢度係一座建喺垂直懸崖上的彩色迷宮。",
        p2: "我哋走進街角的甜品店，買咗三個用當地特產巨型檸檬做成的<strong>「天然檸檬雪葩冰沙」</strong>，酸甜清爽，一入口暑氣全消！",
        image: { src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80", alt: "波西塔諾彩色懸崖", caption: "▲ 波西塔諾的彩色懸崖景色" },
      },
      day9: {
        title: "Day 9：阿瑪菲小鎮、拉維洛雲端花園",
        p1: "第九天我哋來到海岸得名的<strong>阿瑪菲小鎮</strong>。慢步喺小鎮中心的黑白碎石路上，雄偉的<strong>阿瑪菲主教座堂</strong>矗立喺巨型台階頂端。",
        p2: "午後，我哋搭車前往<strong>拉維洛</strong>，走進著名的<strong>盧佛羅別墅</strong>的雲端皇家花園，享受最奢侈的音樂慢活午後！",
        image: { src: "https://images.unsplash.com/photo-1621160626444-d7e76d5f8dae?w=1200&q=80", alt: "拉維洛別墅花園", caption: "▲ 拉維洛盧佛羅別墅的雲端花園" },
      },
    },
    days10to12: {
      title: "🏘️ Day 10-12：普利亞的千年精靈蘑菇屋與馬泰拉石窟古城",
      day10: {
        title: "Day 10：自駕開啟！入住阿爾貝羅貝洛精靈蘑菇屋",
        p1: "第十天，我哋提咗預約好的全新七人自駕車，正式開啟自駕流。當車子緩緩駛入童話小鎮<strong>阿爾貝羅貝洛</strong>，小朋友興奮得貼喺車窗上大喊大叫！",
        p2: "呢度因為保留咗上千棟<strong>「特魯利蘑菇屋」</strong>而名震全球。我特意包棟入住咗一間由百年特魯利改造而成的<strong>浪漫精靈精品民宿</strong>，全家人大嗌如同住進咗童話城堡！",
        image: { src: "https://images.unsplash.com/photo-1553244819-0c3dd8c1f52c?w=1200&q=80", alt: "阿爾貝羅貝洛蘑菇屋", caption: "▲ 阿爾貝羅貝洛的特魯利蘑菇屋" },
      },
      day11: {
        title: "Day 11：巴里歷史老城、手作耳光麵大排檔",
        p1: "第十一天我哋開車前往<strong>巴里</strong>。慢步喺歷史老城的<strong>開胃老街</strong>，最動人的係每天都有幾十位老奶奶當街純手工一揉一捏現做<strong>「貓耳朵麵」</strong>。",
        p2: "午餐我哋點咗一大盤的<strong>「鮮茄羅勒手作貓耳朵麵」</strong>，樸實無華卻係最正的街坊老味道！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Matera_boenisch_nov_2005.jpg", alt: "馬泰拉石窟風光", caption: "▲ 馬泰拉的千年石窟" },
      },
      day12: {
        title: "Day 12：馬泰拉薩西石窟古城 ── 007電影的鐵血藍調",
        p1: "第十二天我哋開車來到<strong>馬泰拉</strong>。整座城市係由石灰岩懸崖山體純手工開鑿而成的巨型石窟建築群 ── <strong>「薩西石窟」</strong>。呢度亦都係電影《007：生死有時》取景地！",
        p2: "黃昏時分，整座峽谷石城點亮暖黃色的壁燈，我哋喺觀景台前拍下咗極具電影感的闔家歡大片！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Matera_boenisch_nov_2005.jpg", alt: "馬泰拉日落時分", caption: "▲ 馬泰拉的黃昏" },
      },
    },
    days13to19: {
      title: "🏝️ Day 13-19：西西里島的熱情、切法盧海灘與陶爾米納古典謝幕",
      day13: {
        title: "Day 13：渡輪橫渡西里拿海峽、入駐巴勒莫",
        p1: "第十三天，我哋開啟最豪邁的體驗 ── <strong>開著車直接開進巨型渡輪的船艙</strong>，橫渡著名的西里拿海峽，正式登陸<strong>西西里島</strong>！",
        p2: "下午我哋抵達首府<strong>巴勒莫</strong>，進駐位於新古典主義步行街核心的精品公寓。",
        image: { src: "https://images.unsplash.com/photo-1596731498067-2a57e52a61c8?w=1200&q=80", alt: "巴拉羅夜市", caption: "▲ 巴拉羅夜市" },
      },
      day14: {
        title: "Day 14：巴勒莫主教座堂、巴拉羅夜市大快朵頤",
        p1: "第十四天早上，我哋來到宏偉的<strong>巴勒莫主教座堂</strong>，登上<strong>黃金弧形屋頂步道</strong>，360度鳥瞰整座百塔之城！",
        p2: "入夜後，我哋一頭扎進<strong>巴拉羅老街夜市</strong>，大快朵頤！",
        image: { src: "https://images.unsplash.com/photo-1596731498067-2a57e52a61c8?w=1200&q=80", alt: "巴拉羅夜市", caption: "▲ 巴拉羅夜市" },
      },
      day15: {
        title: "Day 15：切法盧純白沙灘慢活",
        p1: "第十五天我哋開車前往<strong>切法盧</strong>。呢度亦都係殿堂級電影《天堂電影院》的故鄉。",
        p2: "我為太太同小朋友租咗躺椅與彩色遮陽傘。小朋友喺翡翠色海水中嬉戲堆沙堡，太太躺喺椅子上大嘆冰鎮的血橙汁，呢個先至係最極致的歐洲慢活度假藝術！",
        image: { src: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1200&q=80", alt: "切法盧海濱小鎮", caption: "▲ 切法盧的海濱風光" },
      },
      day16: {
        title: "Day 16：神殿之谷深度歷史穿越",
        p1: "第十六天我哋自駕開往<strong>阿格里真托</strong>，朝聖名震全球的<strong>神殿之谷</strong>。",
        p2: "黃昏時分，夕陽將宏偉的協和神廟鍍上一層碎金，晚霞斑斕，我哋喺神廟前拍下咗極具史詩震撼力的闔家歡剪影照！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Agrigent_BW_2012-10-07_12-52-27.JPG", alt: "神殿之谷全景", caption: "▲ 神殿之谷的黃昏" },
      },
      day17: {
        title: "Day 17：陶爾米納古希臘劇場不朽落日、完美的終極謝幕",
        p1: "第十七天係呢趟19天長征之旅的靈魂終章。我哋開車來到<strong>陶爾米納</strong>，走進最震撼的<strong>古希臘劇場</strong>。",
        p2: "呢座劇場最天才的設計在於其舞台背景 ── <strong>直接將遠處冒煙的埃特納火山天際線與碧藍的愛琴海海平線無縫收納入鏡</strong>！當夕陽沉入火山背後，整片天空幻化成絢麗金橙色。全家人依偎在一起，為我哋19天的南意大利之旅劃上咗最完美的終極句號！",
        image: { src: "https://images.unsplash.com/photo-1601933977570-21974af8c7bb?w=1200&q=80", alt: "陶爾米納古希臘劇場", caption: "▲ 陶爾米納古希臘劇場" },
      },
      day18: {
        title: "Day 18：卡塔尼亞最後衝刺",
        p1: "第十八天，我哋開車抵達<strong>卡塔尼亞</strong>，搜羅最具南意大利特色既手信。",
        p2: "傍晚時分，我哋驅車南下，抵達西西里島最古老既城市 ── <strong>敘拉古（Syracuse）</strong>，入住海濱精品公寓，準備迎接呢趟旅程既最後一天。",
        image: { src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=1200&q=80", alt: "卡塔尼亞廣場", caption: "▲ 卡塔尼亞既繁華廣場" },
      },
      day19: {
        title: "Day 19：敘拉古古蹟漫步與完美歸航",
        p1: "第十九天係我哋南意大利之旅既最終章。我哋喺<strong>敘拉古（Siracusa）</strong>呢座擁有2700年歷史既古希臘城市度過最後一個悠閒既早晨。慢步喺<strong>阿基米德廣場（Piazza Archimede）</strong>，感受呢座古城既悠閒氛圍。",
        p2: "跟著，我哋來到名震全球既<strong>尼泊斯古蹟區（Parco Archeologico della Neapolis）</strong>，參觀由古希臘人喺西元前挖掘既巨型<strong>露天劇場</strong>，以及傳說中阿基米德使用巨大鏡片反射陽光焚燒敵艦既<strong>「阿基米德之鏡」</strong>。小朋友喺古蹟區內既橄欖樹下奔跑，玩得樂不思蜀！",
        p3: "下午四點，全家提著沉甸甸既手信與滿滿既歡笑回憶，齊齊喺卡塔尼亞機場還咗自駕車，登機順利回港。呢19天既南意大利行程，雖然時間長，但憑著前半段網約車錯峰與後半段無痛自駕，我哋不僅省下咗大筆銀両，更真正深入咗地中海既骨血與市井。慢落嚟至驚覺，幸福其實好簡單 ── 不過係陪著最珍貴既太太同小朋友，喺海岸既微風下慢步、喺火山既晚霞中大笑相聚。南意大利呢一趟，全家都話下次仲要再嚟！",
        image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Syracuse_Italy.jpg/1280px-Syracuse_Italy.jpg", alt: "敘拉古風光", caption: "▲ 敘拉古既古老港口，承載著2700年既文明" },
      },
    },
    tips: {
      title: "💡 闔家歡 ‧ 南意大利19天慢活自由行隨身手札",
      items: [
        { icon: "🏨", label: "公寓酒店的無上智慧：", content: "帶一家人長途出行，精品公寓式酒店（特別係自帶小廚房的房型）係絕對首選。" },
        { icon: "🚗", label: "前半段地鐵與後半段自駕的「黃金無痛切換」：", content: "<strong>前半段千祈唔好自駕</strong>，全靠高鐵接駁與網約大車；<strong>後半段去普利亞和西西里島則必須提早網上租好一部7人大型自駕車</strong>。" },
        { icon: "🌡️", label: "嚴防地中海室內外溫差：", content: "隨身帶備<strong>輕便薄外套</strong>、<strong>礦泉水</strong>、<strong>遮陽帽</strong>以及<strong>高防曬霜</strong>。" },
        { icon: "👟", label: "台階與馬賽克碎石路安全提醒：", content: "<strong>請提醒太太同小朋友全遊程穿著高抓地力的厚底防滑運動健步鞋</strong>。" },
      ],
    },
    suvenirs: {
      title: "🎁 闔家歡大隊長精選 ── 南意大利必帶殿堂級伴手禮",
      items: [
        { name: "阿瑪菲手工檸檬酒 (Limoncello)", desc: "用當地巨型檸檬皮純手工釀造的甜酒，每一口都係地中海的驕陽香氣。" },
        { name: "西西里傳統開心果醬", desc: "埃特納火山灰土壤孕育出的頂級開心果製成，香氣濃郁。" },
        { name: "陶爾米納手工彩繪陶瓷", desc: "極具西西里傳奇色彩的傳統陶藝雕塑。" },
      ],
    },
    info: {
      title: "📊 行程資訊一覽",
      items: [
        { label: "📍 路線", value: "拿坡里 → 阿瑪菲 → 普利亞 → 西西里" },
        { label: "🗓️ 天數", value: "19天18夜" },
        { label: "👨‍👩‍👧 適合", value: "家庭出遊、深度慢活" },
        { label: "💰 預算", value: "中高級（€4,000-6,000/人）" },
        { label: "🚗 交通", value: "前半段火車、後半段自駕" },
        { label: "⏱️ 最佳季節", value: "5-10月" },
      ],
    },
    shareTitle: "🌊 地中海驕陽與蔚藍：南意大利19天順序暢遊慢活全攻略",
    ratingText: "俾呢個行程評分",
    favoriteText: "加入心願清單",
  },
};

export default function SouthernItalyPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 text-white">
      <ReadingProgress />

      {/* Language Switcher */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} variant="default" />
      </div>

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800/80"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            {c.meta.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            {c.meta.title}
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">{c.meta.subtitle}</h2>
          <p className="text-slate-500">{c.meta.date} · 作者：{c.meta.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80"
            alt={c.meta.imageAlt}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-slate-500 text-sm mb-12">{c.meta.imageCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <div id="intro" className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />
          </div>

          {/* Days 1-5 */}
          <div id="days-1-5">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              {c.days1to5.title}
            </h2>

            {/* Day 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days1to5.day1.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days1to5.day1.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days1to5.day1.p2 }} />
              {c.days1to5.day1.image && (
                <div className="my-6">
                  <img src={c.days1to5.day1.image.src} alt={c.days1to5.day1.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days1to5.day1.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days1to5.day2.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days1to5.day2.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days1to5.day2.p2 }} />
              {c.days1to5.day2.image && (
                <div className="my-6">
                  <img src={c.days1to5.day2.image.src} alt={c.days1to5.day2.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days1to5.day2.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days1to5.day3.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days1to5.day3.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days1to5.day3.p2 }} />
              {c.days1to5.day3.image && (
                <div className="my-6">
                  <img src={c.days1to5.day3.image.src} alt={c.days1to5.day3.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days1to5.day3.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days1to5.day4.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days1to5.day4.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days1to5.day4.p2 }} />
              {c.days1to5.day4.image && (
                <div className="my-6">
                  <img src={c.days1to5.day4.image.src} alt={c.days1to5.day4.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days1to5.day4.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 5 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days1to5.day5.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days1to5.day5.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days1to5.day5.p2 }} />
              {c.days1to5.day5.image && (
                <div className="my-6">
                  <img src={c.days1to5.day5.image.src} alt={c.days1to5.day5.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days1to5.day5.image.caption}</p>
                </div>
              )}
            </div>
          </div>

          {/* Days 6-9 */}
          <div id="days-6-9">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              {c.days6to9.title}
            </h2>

            {/* Day 6 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days6to9.day6.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days6to9.day6.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days6to9.day6.p2 }} />
              {c.days6to9.day6.image && (
                <div className="my-6">
                  <img src={c.days6to9.day6.image.src} alt={c.days6to9.day6.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days6to9.day6.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 7 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days6to9.day7.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days6to9.day7.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days6to9.day7.p2 }} />
              {c.days6to9.day7.image && (
                <div className="my-6">
                  <img src={c.days6to9.day7.image.src} alt={c.days6to9.day7.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days6to9.day7.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 8 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days6to9.day8.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days6to9.day8.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days6to9.day8.p2 }} />
              {c.days6to9.day8.image && (
                <div className="my-6">
                  <img src={c.days6to9.day8.image.src} alt={c.days6to9.day8.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days6to9.day8.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 9 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{c.days6to9.day9.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days6to9.day9.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days6to9.day9.p2 }} />
              {c.days6to9.day9.image && (
                <div className="my-6">
                  <img src={c.days6to9.day9.image.src} alt={c.days6to9.day9.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days6to9.day9.image.caption}</p>
                </div>
              )}
            </div>
          </div>

          {/* Days 10-12 */}
          <div id="days-10-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
              {c.days10to12.title}
            </h2>

            {/* Day 10 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">{c.days10to12.day10.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days10to12.day10.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days10to12.day10.p2 }} />
              {c.days10to12.day10.image && (
                <div className="my-6">
                  <img src={c.days10to12.day10.image.src} alt={c.days10to12.day10.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days10to12.day10.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 11 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">{c.days10to12.day11.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days10to12.day11.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days10to12.day11.p2 }} />
              {c.days10to12.day11.image && (
                <div className="my-6">
                  <img src={c.days10to12.day11.image.src} alt={c.days10to12.day11.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days10to12.day11.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 12 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">{c.days10to12.day12.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days10to12.day12.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days10to12.day12.p2 }} />
              {c.days10to12.day12.image && (
                <div className="my-6">
                  <img src={c.days10to12.day12.image.src} alt={c.days10to12.day12.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days10to12.day12.image.caption}</p>
                </div>
              )}
            </div>
          </div>

          {/* Days 13-19 */}
          <div id="days-13-19">
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              {c.days13to19.title}
            </h2>

            {/* Day 13 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day13.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day13.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day13.p2 }} />
              {c.days13to19.day13.image && (
                <div className="my-6">
                  <img src={c.days13to19.day13.image.src} alt={c.days13to19.day13.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day13.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 14 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day14.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day14.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day14.p2 }} />
              {c.days13to19.day14.image && (
                <div className="my-6">
                  <img src={c.days13to19.day14.image.src} alt={c.days13to19.day14.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day14.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 15 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day15.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day15.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day15.p2 }} />
              {c.days13to19.day15.image && (
                <div className="my-6">
                  <img src={c.days13to19.day15.image.src} alt={c.days13to19.day15.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day15.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 16 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day16.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day16.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day16.p2 }} />
              {c.days13to19.day16.image && (
                <div className="my-6">
                  <img src={c.days13to19.day16.image.src} alt={c.days13to19.day16.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day16.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 17 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day17.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day17.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day17.p2 }} />
              {c.days13to19.day17.image && (
                <div className="my-6">
                  <img src={c.days13to19.day17.image.src} alt={c.days13to19.day17.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day17.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 18 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day18.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day18.p1 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day18.p2 }} />
              {c.days13to19.day18.image && (
                <div className="my-6">
                  <img src={c.days13to19.day18.image.src} alt={c.days13to19.day18.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day18.image.caption}</p>
                </div>
              )}
            </div>

            {/* Day 19 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-300 mb-3">{c.days13to19.day19.title}</h3>
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day19.p1 }} />
              <p className="text-slate-300 mb-3" dangerouslySetInnerHTML={{ __html: c.days13to19.day19.p2 }} />
              <p className="text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: c.days13to19.day19.p3 }} />
              {c.days13to19.day19.image && (
                <div className="my-6">
                  <img src={c.days13to19.day19.image.src} alt={c.days13to19.day19.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-3">{c.days13to19.day19.image.caption}</p>
                </div>
              )}
            </div>
          </div>

          {/* Tips */}
          <div id="tips" className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.tips.title}
            </h3>
            <ul className="space-y-3 text-slate-300">
              {c.tips.items.map((tip, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-400">{tip.icon}</span>
                  <span dangerouslySetInnerHTML={{ __html: `<strong>${tip.label}</strong> ${tip.content}` }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Souvenirs */}
          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/30 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.suvenirs.title}
            </h3>
            <ul className="space-y-3 text-slate-300">
              {c.suvenirs.items.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-amber-300">{item.name}</strong>：{item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <h2 className="text-2xl font-bold text-blue-400 mb-6">{c.info.title}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            {c.info.items.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl p-4 border border-slate-700/50">
                <span className="text-blue-400 font-bold">{item.label}</span>
                <p className="text-slate-300 text-sm mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Star Rating */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ {c.ratingText}
            </h3>
            <StarRating slug="southern-italy-18-days" />
          </div>

          {/* Social Share */}
          <div className="bg-slate-800/60 rounded-2xl p-6 my-10 border border-slate-700/50">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare title={c.shareTitle} />
          </div>

          {/* Favorite Button */}
          <div className="flex justify-center my-8">
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 flex items-center gap-4">
              <span className="text-slate-300">{c.favoriteText}：</span>
              <FavoriteButton slug="southern-italy-18-days" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug="southern-italy-18-days" currentTags={c.meta.tags} />
        </article>
      </div>

      <Comments slug="southern-italy-18-days" />
    </div>
  );
}
