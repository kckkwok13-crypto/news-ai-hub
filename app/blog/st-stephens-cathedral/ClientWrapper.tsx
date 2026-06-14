"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";
import TravelLanguageSelector from "../../components/TravelLanguageSelector";
import { getTranslation, TravelLanguage } from "../../data/travelTranslations";

const tocItems = {
  yue: [
    { id: "intro", title: "介紹", emoji: "⛪" },
    { id: "history", title: "歷史密碼", emoji: "🔑" },
    { id: "tower", title: "登塔眺望", emoji: "🗼" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "⛪" },
    { id: "history", title: "歷史密碼", emoji: "🔑" },
    { id: "tower", title: "登塔眺望", emoji: "🗼" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "⛪" },
    { id: "history", title: "历史密码", emoji: "🔑" },
    { id: "tower", title: "登塔眺望", emoji: "🗼" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "⛪" },
    { id: "history", title: "History", emoji: "🔑" },
    { id: "tower", title: "Tower View", emoji: "🗼" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
};

const tContent = {
  yue: {
    region: "奧地利 · 維也納心臟",
    title: "聆聽維也納的心跳",
    subtitle: "聖斯蒂芬大教堂（Stephansdom）深度遊覽與周邊散策攻略",
    date: "June 2026",
    author: "作者：純粹旅人",
    heroCaption: "維也納市中心的天際線主宰——聖斯蒂芬大教堂的標誌性南塔與彩色瓦片屋頂",
    tags: ["維也納", "奧地利", "建築", "打卡"],
    intro1: `如果說有一座建築能代表維也納的灵魂，那一定是佇立於市中心格拉本大街（Graben）南端的<strong>聖斯蒂芬大教堂（Stephansdom / St. Stephen&apos;s Cathedral）</strong>。這座建於12世紀的羅馬式與哥德式混合建築，不僅是維也納總教區的主教座堂，更是哈布斯堡王朝數百年權力的精神象徵。教堂南塔高達136.44米，與北塔相映成趣，已成為維也納天際線最具辨識度的標誌。`,
    intro2: `走進教堂內部，你會被那高聳的廳柱、璀璨的彩色玻璃窗，以及莊嚴的氣氛所震撼。而登上343級台階登上南塔頂端，俯瞰整個維也納舊城區，更是每位旅人必打卡嘅體驗。無論你是否對建築或歷史有興趣，聖斯蒂芬大教堂都值得你花上半天時間細細品味。`,
    historyTitle: "世紀的疊加：聖斯蒂芬大教堂的 3 大歷史密碼",
    historySub1: "四個時代的建築疊加",
    historyText1: `聖斯蒂芬大教堂的獨特之處在於它是一部「活著的建築史書」。教堂分為四個主要部分，見證了四個不同時代的建築風格：<strong>12世紀的羅馬式地基</strong>、<strong>13世紀的哥德式合唱堂</strong>、<strong>15世紀壯觀的南塔</strong>，以及<strong>1945年戰後重建的北塔</strong>。走進教堂，你會發現不同時代的痕跡和諧共存，形成獨一無二的建築景觀。`,
    historySub2: "拿破崙與聖斯蒂芬大教堂",
    historyText2: `歷史上著名的<strong>拿破崙戰爭</strong>也與這座教堂有著戲劇性的聯繫。1805年，拿破崙在奧斯特里茨戰役擊敗俄奧聯軍後，曾在教堂廣場上檢閱軍隊。1809年，教堂在法軍轟炸中嚴重受損，北塔被大火焚毀。現在遊客看到的北塔頂部，就是戰後重建的成果。`,
    royalTitle: "皇家珍寶：地下墓穴與皇家棺材",
    royalText: `教堂地下墓穴安葬著多位哈布斯堡家族成員的內臟器官，而聖斯蒂芬大教堂亦收藏了大量中世紀珍貴文物，包括<strong>12世紀的銀聖物箱</strong>、<strong>15世紀的祭壇畫</strong>，以及一系列由神聖羅馬帝國皇帝捐贈的藝術品。`,
    towerTitle: "登塔眺望：俯瞰維也納全景",
    towerText1: `聖斯蒂芬大教堂的南塔是維也納最高的觀景點之一。遊客可以付費乘坐電梯（部分路段需步行）到達<strong>觀景台</strong>，360度俯瞰維也納舊城區、環城大道（Ringstrasse）的壯麗建築，以及遠處的維也納森林（Wienerwald）。`,
    towerText2: `塔頂的風景在日出、日落時分最為動人。如果時間允許，建議安排在傍晚时分登塔，看著夕陽將維也納染成金黃色，然後等待城市萬家燈火逐漸亮起。`,
    photoTitle: "攝影師私藏：聖斯蒂芬大教堂 4 大終極打卡機位",
    photoIntro: "聖斯蒂芬大教堂周邊是維也納最熱鬧的區域，想要拍出與眾不同的作品，以下四個角度請一定要收藏好：",
    photo1Title: "① 格拉本大街遠攝——壓縮透視的經典視角",
    photo1Text: `站在格拉本大街（Graben）南端往北拍，利用街道的透視效果，讓聖斯蒂芬大教堂的南塔成為畫面的視覺焦點。建議使用70-200mm長焦鏡頭拍攝，可以獲得極具壓縮感的透視效果。這也是維也納最經典的旅遊宣傳照角度。`,
    photo2Title: "② 教堂廣場低角度仰拍——震撼的透視衝擊",
    photo2Text: `走到教堂正門前的小廣場，把相機放低仰拍南塔。使用超廣角鏡頭可以拍出極具視覺衝擊力的照片，南塔仿佛要突破畫面直插雲霄。這種角度最能表現出教堂的雄偉與崇高。`,
    photo3Title: "③ 斯蒂芬廣場東側長廊——彩色瓦片屋頂特寫",
    photo3Text: `走到斯蒂芬廣場（Stephansplatz）東側的小巷，利用長焦鏡頭捕捉南塔上半部分的<strong>彩色幾何圖案瓦片屋頂</strong>。這是教堂最具辨識度的元素之一，由23萬片彩色瓷磚拼成，展現了高超的工藝水準。`,
    photo4Title: "④ 地下墓穴入口——神秘的中世紀氛圍",
    photo4Text: `購買教堂地下墓穴門票後，在入口台階處往內拍。這裡光線昏黃，石壁古舊，充滿神秘的中世紀氛圍。配合教堂內的莊嚴音樂，是拍攝人文風格照片的绝佳場所。`,
    photoCaption: "從格拉本大街遠眺聖斯蒂芬大教堂，南塔巍然聳立於維也納天際線",
    tipsTitle: "聖斯蒂芬大教堂 旅遊實用小貼士",
    tip1Title: "門票資訊",
    tip1Text: "教堂主體參觀免費，但登塔（電梯+樓梯混合）、地下墓穴、珍寶館需另外購票。推薦購買<strong>聯票</strong>（Combined Ticket），可參觀所有開放區域，成人約 €16 起。",
    tip2Title: "彌撒時間",
    tip2Text: "教堂平日有彌撒活動，參加時請保持安靜尊重。週日可能因禮儀活動部分區域關閉，建議提前查詢官方網站。",
    tip3Title: "最佳拍攝時間",
    tip3Text: "建議在<strong>清晨或傍晚</strong>前來。清晨廣場人流稀少，傍晚則可拍到金色夕陽下的南塔剪影。",
    tip4Title: "交通方式",
    tip4Text: "乘搭維也納地鐵 U1 或 U3 線至 <strong>Stephansplatz（斯蒂芬廣場站）</strong>，出口即達教堂廣場。從維也納火車總站（Hbf）步行約15分鐘亦可到達。",
    tip5Title: "穿著要求",
    tip5Text: "作為宗教場所，請穿著端莊。建議避免短褲、無袖上衣或暴露服裝。",
    infoTitle: "景點資訊一覽",
    address: "Stephansplatz 1, 1010 Wien, Austria",
    hours: "週一至週六 10:00-17:30<br/>週日及假日 13:00-17:30",
    fee: "教堂參觀免費<br/>聯票約 €16 起",
    rating: "4.8/5.0（67,892 評論）",
    transport: "地鐵 Stephansplatz 站",
    duration: "2-3小時",
    shareTitle: "⛪ 聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策攻略",
  },
  "zh-TW": {
    region: "奧地利 · 維也納心臟",
    title: "聆聽維也納的心跳",
    subtitle: "聖斯蒂芬大教堂（Stephansdom）深度遊覽與周邊散策攻略",
    date: "June 2026",
    author: "作者：純粹旅人",
    heroCaption: "維也納市中心的天際線主宰——聖斯蒂芬大教堂的標誌性南塔與彩色瓦片屋頂",
    tags: ["維也納", "奧地利", "建築", "打卡"],
    intro1: `如果說有一座建築能代表維也納的灵魂，那一定是佇立於市中心格拉本大街（Graben）南端的<strong>聖斯蒂芬大教堂（Stephansdom / St. Stephen&apos;s Cathedral）</strong>。這座建於12世紀的羅馬式與哥德式混合建築，不僅是維也納總教區的主教座堂，更是哈布斯堡王朝數百年權力的精神象徵。教堂南塔高達136.44米，與北塔相映成趣，已成為維也納天際線最具辨識度的標誌。`,
    intro2: `走進教堂內部，你會被那高聳的廳柱、璀璨的彩色玻璃窗，以及莊嚴的氣氛所震撼。而登上343級台階登上南塔頂端，俯瞰整個維也納舊城區，更是每位旅人必打卡嘅體驗。無論你是否對建築或歷史有興趣，聖斯蒂芬大教堂都值得你花上半天時間細細品味。`,
    historyTitle: "世紀的疊加：聖斯蒂芬大教堂的 3 大歷史密碼",
    historySub1: "四個時代的建築疊加",
    historyText1: `聖斯蒂芬大教堂的獨特之處在於它是一部「活著的建築史書」。教堂分為四個主要部分，見證了四個不同時代的建築風格：<strong>12世紀的羅馬式地基</strong>、<strong>13世紀的哥德式合唱堂</strong>、<strong>15世紀壯觀的南塔</strong>，以及<strong>1945年戰後重建的北塔</strong>。走進教堂，你會發現不同時代的痕跡和諧共存，形成獨一無二的建築景觀。`,
    historySub2: "拿破崙與聖斯蒂芬大教堂",
    historyText2: `歷史上著名的<strong>拿破崙戰爭</strong>也與這座教堂有著戲劇性的聯繫。1805年，拿破崙在奧斯特里茨戰役擊敗俄奧聯軍後，曾在教堂廣場上檢閱軍隊。1809年，教堂在法軍轟炸中嚴重受損，北塔被大火焚毀。現在遊客看到的北塔頂部，就是戰後重建的成果。`,
    royalTitle: "皇家珍寶：地下墓穴與皇家棺材",
    royalText: `教堂地下墓穴安葬著多位哈布斯堡家族成員的內臟器官，而聖斯蒂芬大教堂亦收藏了大量中世紀珍貴文物，包括<strong>12世紀的銀聖物箱</strong>、<strong>15世紀的祭壇畫</strong>，以及一系列由神聖羅馬帝國皇帝捐贈的藝術品。`,
    towerTitle: "登塔眺望：俯瞰維也納全景",
    towerText1: `聖斯蒂芬大教堂的南塔是維也納最高的觀景點之一。遊客可以付費乘坐電梯（部分路段需步行）到達<strong>觀景台</strong>，360度俯瞰維也納舊城區、環城大道（Ringstrasse）的壯麗建築，以及遠處的維也納森林（Wienerwald）。`,
    towerText2: `塔頂的風景在日出、日落時分最為動人。如果時間允許，建議安排在傍晚时分登塔，看著夕陽將維也納染成金黃色，然後等待城市萬家燈火逐漸亮起。`,
    photoTitle: "攝影師私藏：聖斯蒂芬大教堂 4 大終極打卡機位",
    photoIntro: "聖斯蒂芬大教堂周邊是維也納最熱鬧的區域，想要拍出與眾不同的作品，以下四個角度請一定要收藏好：",
    photo1Title: "① 格拉本大街遠攝——壓縮透視的經典視角",
    photo1Text: `站在格拉本大街（Graben）南端往北拍，利用街道的透視效果，讓聖斯蒂芬大教堂的南塔成為畫面的視覺焦點。建議使用70-200mm長焦鏡頭拍攝，可以獲得極具壓縮感的透視效果。這也是維也納最經典的旅遊宣傳照角度。`,
    photo2Title: "② 教堂廣場低角度仰拍——震撼的透視衝擊",
    photo2Text: `走到教堂正門前的小廣場，把相機放低仰拍南塔。使用超廣角鏡頭可以拍出極具視覺衝擊力的照片，南塔仿佛要突破畫面直插雲霄。這種角度最能表現出教堂的雄偉與崇高。`,
    photo3Title: "③ 斯蒂芬廣場東側長廊——彩色瓦片屋頂特寫",
    photo3Text: `走到斯蒂芬廣場（Stephansplatz）東側的小巷，利用長焦鏡頭捕捉南塔上半部分的<strong>彩色幾何圖案瓦片屋頂</strong>。這是教堂最具辨識度的元素之一，由23萬片彩色瓷磚拼成，展現了高超的工藝水準。`,
    photo4Title: "④ 地下墓穴入口——神秘的中世紀氛圍",
    photo4Text: `購買教堂地下墓穴門票後，在入口台階處往內拍。這裡光線昏黃，石壁古舊，充滿神秘的中世紀氛圍。配合教堂內的莊嚴音樂，是拍攝人文風格照片的绝佳場所。`,
    photoCaption: "從格拉本大街遠眺聖斯蒂芬大教堂，南塔巍然聳立於維也納天際線",
    tipsTitle: "聖斯蒂芬大教堂 旅遊實用小貼士",
    tip1Title: "門票資訊",
    tip1Text: "教堂主體參觀免費，但登塔（電梯+樓梯混合）、地下墓穴、珍寶館需另外購票。推薦購買<strong>聯票</strong>（Combined Ticket），可參觀所有開放區域，成人約 €16 起。",
    tip2Title: "彌撒時間",
    tip2Text: "教堂平日有彌撒活動，參加時請保持安靜尊重。週日可能因禮儀活動部分區域關閉，建議提前查詢官方網站。",
    tip3Title: "最佳拍攝時間",
    tip3Text: "建議在<strong>清晨或傍晚</strong>前來。清晨廣場人流稀少，傍晚則可拍到金色夕陽下的南塔剪影。",
    tip4Title: "交通方式",
    tip4Text: "乘搭維也納地鐵 U1 或 U3 線至 <strong>Stephansplatz（斯蒂芬廣場站）</strong>，出口即達教堂廣場。從維也納火車總站（Hbf）步行約15分鐘亦可到達。",
    tip5Title: "穿著要求",
    tip5Text: "作為宗教場所，請穿著端莊。建議避免短褲、無袖上衣或暴露服裝。",
    infoTitle: "景點資訊一覽",
    address: "Stephansplatz 1, 1010 Wien, Austria",
    hours: "週一至週六 10:00-17:30<br/>週日及假日 13:00-17:30",
    fee: "教堂參觀免費<br/>聯票約 €16 起",
    rating: "4.8/5.0（67,892 評論）",
    transport: "地鐵 Stephansplatz 站",
    duration: "2-3小時",
    shareTitle: "⛪ 聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策攻略",
  },
  "zh-CN": {
    region: "奥地利 · 维也纳心脏",
    title: "聆听维也纳的心跳",
    subtitle: "圣斯蒂芬大教堂（Stephansdom）深度游览与周边散策攻略",
    date: "June 2026",
    author: "作者：纯粹旅人",
    heroCaption: "维也纳市中心的 skyline 主宰——圣斯蒂芬大教堂的标志性南塔与彩色瓦片屋顶",
    tags: ["维也纳", "奥地利", "建筑", "打卡"],
    intro1: `如果说有一座建筑能代表维也纳的灵魂，那一定是伫立于市中心格拉本大街（Graben）南端的<strong>圣斯蒂芬大教堂（Stephansdom / St. Stephen&apos;s Cathedral）</strong>。这座建于12世纪的罗马式与哥特式混合建筑，不仅是维也纳总教区的主教座堂，更是哈布斯堡王朝数百年权力的精神象征。教堂南塔高达136.44米，与北塔相映成趣，已成为维也纳天际线最具辨识度的标志。`,
    intro2: `走进教堂内部，你会被那高耸的厅柱、璀璨的彩色玻璃窗，以及庄严的气氛所震撼。而登上343级台阶登上南塔顶端，俯瞰整个维也纳旧城区，更是每位旅人必打卡的体验。无论你是否对建筑或历史有兴趣，圣斯蒂芬大教堂都值得你花上半天时间细细品味。`,
    historyTitle: "世纪的叠加：圣斯蒂芬大教堂的 3 大历史密码",
    historySub1: "四个时代的建筑叠加",
    historyText1: `圣斯蒂芬大教堂的独特之处在于它是一部"活着的建筑史书"。教堂分为四个主要部分，见证了四个不同时代的建筑风格：<strong>12世纪的罗马式地基</strong>、<strong>13世纪的哥特式合唱堂</strong>、<strong>15世纪壮观的南塔</strong>，以及<strong>1945年战后重建的北塔</strong>。走进教堂，你会发现不同年代的痕迹和谐共存，形成独一无二的建筑景观。`,
    historySub2: "拿破仑与圣斯蒂芬大教堂",
    historyText2: `历史上著名的<strong>拿破仑战争</strong>也与这座教堂有着戏剧性的联系。1805年，拿破仑在奥斯特里茨战役击败俄奥联军后，曾在教堂广场上检阅军队。1809年，教堂在法军轰炸中严重受损，北塔被大火烧毁。现在游客看到的北塔顶部，就是战后重建的成果。`,
    royalTitle: "皇家珍宝：地下墓穴与皇家棺材",
    royalText: `教堂地下墓穴安葬着多位哈布斯堡家族成员的内脏器官，而圣斯蒂芬大教堂亦收藏了大量中世纪珍贵文物，包括<strong>12世纪的银圣物箱</strong>、<strong>15世纪的祭坛画</strong>，以及一系列由神圣罗马帝国皇帝捐赠的艺术品。`,
    towerTitle: "登塔眺望：俯瞰维也纳全景",
    towerText1: `圣斯蒂芬大教堂的南塔是维也纳最高的观景点之一。游客可以付费乘坐电梯（部分路段需步行）到达<strong>观景台</strong>，360度俯瞰维也纳旧城区、环城大道（Ringstrasse）的壮丽建筑，以及远处的维也纳森林（Wienerwald）。`,
    towerText2: `塔顶的风景在日出、日落时分最为动人。如果时间允许，建议安排在傍晚时分登塔，看着夕阳将维也纳染成金黄色，然后等待城市万家灯火逐渐亮起。`,
    photoTitle: "摄影师私藏：圣斯蒂芬大教堂 4 大终极打卡机位",
    photoIntro: "圣斯蒂芬大教堂周边是维也纳最热闹的区域，想要拍出与众不同的作品，以下四个角度请一定要收藏好：",
    photo1Title: "① 格拉本大街远摄——压缩透视的经典视角",
    photo1Text: `站在格拉本大街（Graben）南端往北拍，利用街道的透视效果，让圣斯蒂芬大教堂的南塔成为画面的视觉焦点。建议使用70-200mm长焦镜头拍摄，可以获得极具压缩感的透视效果。这也是维也纳最经典的旅游宣传照角度。`,
    photo2Title: "② 教堂广场低角度仰拍——震撼的透视冲击",
    photo2Text: `走到教堂正门前的小广场，把相机放低仰拍南塔。使用超广角镜头可以拍出极具视觉冲击力的照片，南塔仿佛要突破画面直插云霄。这种角度最能表现出教堂的雄伟与崇高。`,
    photo3Title: "③ 斯蒂芬广场东侧长廊——彩色瓦片屋顶特写",
    photo3Text: `走到斯蒂芬广场（Stephansplatz）东侧的小巷，利用长焦镜头捕捉南塔上半部分的<strong>彩色几何图案瓦片屋顶</strong>。这是教堂最具辨识度的元素之一，由23万片彩色瓷砖拼成，展现了高超的工艺水准。`,
    photo4Title: "④ 地下墓穴入口——神秘的中世纪氛围",
    photo4Text: `购买教堂地下墓穴门票后，在入口台阶处往内拍。这里光线昏黄，石壁古旧，充满神秘的中世纪氛围。配合教堂内的庄严音乐，是拍摄人文风格照片的绝佳场所。`,
    photoCaption: "从格拉本大街远眺圣斯蒂芬大教堂，南塔巍然耸立于维也纳天际线",
    tipsTitle: "圣斯蒂芬大教堂 旅游实用小贴士",
    tip1Title: "门票资讯",
    tip1Text: "教堂主体参观免费，但登塔（电梯+楼梯混合）、地下墓穴、珍宝馆需另外购票。推荐购买<strong>联票</strong>（Combined Ticket），可参观所有开放区域，成人约 €16 起。",
    tip2Title: "弥撒时间",
    tip2Text: "教堂平日有弥撒活动，参加时请保持安静尊重。周日可能因礼仪活动部分区域关闭，建议提前查询官方网站。",
    tip3Title: "最佳拍摄时间",
    tip3Text: "建议在<strong>清晨或傍晚</strong>前来。清晨广场人流稀少，傍晚则可拍到金色夕阳下的南塔剪影。",
    tip4Title: "交通方式",
    tip4Text: "搭乘维也纳地铁 U1 或 U3 线至 <strong>Stephansplatz（斯蒂芬广场站）</strong>，出口即达教堂广场。从维也纳火车总站（Hbf）步行约15分钟亦可到达。",
    tip5Title: "穿着要求",
    tip5Text: "作为宗教场所，请穿着端庄。建议避免短裤、无袖上衣或暴露服装。",
    infoTitle: "景点资讯一览",
    address: "Stephansplatz 1, 1010 Wien, Austria",
    hours: "周一至周六 10:00-17:30<br/>周日及假日 13:00-17:30",
    fee: "教堂参观免费<br/>联票约 €16 起",
    rating: "4.8/5.0（67,892 评论）",
    transport: "地铁 Stephansplatz 站",
    duration: "2-3小时",
    shareTitle: "⛪ 聆听维也纳的心跳：圣斯蒂芬大教堂深度游览与周边散策攻略",
  },
  en: {
    region: "Austria · Vienna Heart",
    title: "Listen to the Heartbeat of Vienna",
    subtitle: "St. Stephen's Cathedral (Stephansdom) In-Depth Tour & Surrounding Guide",
    date: "June 2026",
    author: "Author: Pure Traveler",
    heroCaption: "The skyline dominator of downtown Vienna — St. Stephen's Cathedral's iconic South Tower and colorful tiled roof",
    tags: ["Vienna", "Austria", "Architecture", "Photo Spot"],
    intro1: `If there's one building that represents the soul of Vienna, it must be the <strong>St. Stephen's Cathedral (Stephansdom)</strong> standing at the south end of Graben Street in the city center. This 12th-century Romanesque and Gothic hybrid structure is not only the main cathedral of the Archdiocese of Vienna but also the spiritual symbol of the Habsburg dynasty's centuries of power. The cathedral's South Tower rises to 136.44 meters, creating one of Vienna's most recognizable skylines alongside the North Tower.`,
    intro2: `Step inside the cathedral and you'll be awed by the towering pillars, dazzling stained glass windows, and solemn atmosphere. Climbing the 343 steps to the top of the South Tower for a panoramic view of Vienna's Old Town is an experience every traveler must have. Whether you're interested in architecture or history, St. Stephen's Cathedral deserves half a day of your time to savor.`,
    historyTitle: "Centuries of Layers: 3 Historical Secrets of St. Stephen's Cathedral",
    historySub1: "Four Eras of Architectural Superposition",
    historyText1: `What makes St. Stephen's Cathedral unique is that it's a "living architectural history book." The cathedral consists of four main sections, witnessing four different eras of architectural styles: <strong>12th-century Romanesque foundations</strong>, <strong>13th-century Gothic choir</strong>, <strong>15th-century magnificent South Tower</strong>, and <strong>post-war reconstructed North Tower from 1945</strong>. Walking through the cathedral, you'll find traces of different eras harmoniously coexisting, forming a one-of-a-kind architectural landscape.`,
    historySub2: "Napoleon and St. Stephen's Cathedral",
    historyText2: `The famous <strong>Napoleonic Wars</strong> also have a dramatic connection to this cathedral. In 1805, after defeating the Russian-Austrian coalition at the Battle of Austerlitz, Napoleon reviewed his troops on the cathedral square. In 1809, the cathedral was severely damaged by French bombardment, and the North Tower was destroyed by fire. The top of the North Tower that visitors see today is the result of post-war reconstruction.`,
    royalTitle: "Royal Treasures: Catacombs & Imperial Coffins",
    royalText: `The cathedral's catacombs house the internal organs of several Habsburg family members, while St. Stephen's Cathedral also houses a large collection of precious medieval artifacts, including <strong>12th-century silver reliquaries</strong>, <strong>15th-century altarpieces</strong>, and a series of artworks donated by Holy Roman Emperors.`,
    towerTitle: "Tower Views: Panoramic Vienna from Above",
    towerText1: `The South Tower of St. Stephen's Cathedral is one of Vienna's highest viewpoints. Visitors can pay to take the elevator (with some walking required) to the <strong>observation deck</strong>, enjoying 360-degree views of Vienna's Old Town, the magnificent buildings along the Ringstrasse, and the Vienna Woods (Wienerwald) in the distance.`,
    towerText2: `The views from the top are most stunning at sunrise and sunset. If time permits, we recommend arranging your tower visit for the evening, watching the sunset paint Vienna in golden hues, then waiting as the city's lights begin to glow.`,
    photoTitle: "Photographer's Secrets: 4 Ultimate Photo Spots at St. Stephen's Cathedral",
    photoIntro: "The area around St. Stephen's Cathedral is the liveliest part of Vienna. To capture unique shots, be sure to save these four angles:",
    photo1Title: "① Long Shot from Graben Street — Classic Compressed Perspective",
    photo1Text: `Stand at the south end of Graben Street looking north. Using the street's perspective effect, make the South Tower the visual focal point of your shot. We recommend using a 70-200mm telephoto lens for a highly compressed perspective. This is also Vienna's most classic travel promotional photo angle.`,
    photo2Title: "② Low-Angle Shot from Cathedral Square — Stunning Perspective Impact",
    photo2Text: `Go to the small square in front of the cathedral's main entrance and place your camera low to shoot upward at the South Tower. Using an ultra-wide-angle lens can create a visually striking image where the tower seems to pierce through the frame into the sky. This angle best showcases the cathedral's grandeur and sublimity.`,
    photo3Title: "③ East Side of Stephansplatz — Close-up of Colorful Tiled Roof",
    photo3Text: `Walk to the alley on the east side of Stephansplatz and use a telephoto lens to capture the <strong>colorful geometric patterned tiled roof</strong> of the upper South Tower. This is one of the cathedral's most recognizable features, composed of 230,000 colorful tiles showcasing superb craftsmanship.`,
    photo4Title: "④ Catacomb Entrance — Mysterious Medieval Atmosphere",
    photo4Text: `After purchasing your catacomb ticket, shoot toward the entrance from the entrance steps. The dim lighting, ancient stone walls, and mysterious medieval atmosphere, combined with solemn music inside the cathedral, make this an excellent location for capturing humanistic-style photographs.`,
    photoCaption: "Looking at St. Stephen's Cathedral from Graben Street, the South Tower stands tall against Vienna's skyline",
    tipsTitle: "St. Stephen's Cathedral Travel Tips",
    tip1Title: "Ticket Information",
    tip1Text: "Cathedral entry is free, but tower access (elevator + stairs), catacombs, and treasury require separate tickets. We recommend the <strong>Combined Ticket</strong>, which covers all accessible areas, starting at approximately €16 for adults.",
    tip2Title: "Mass Times",
    tip2Text: "The cathedral holds mass services on weekdays. Please maintain silence and respect during services. Some areas may be closed on Sundays due to liturgical activities — we recommend checking the official website in advance.",
    tip3Title: "Best Photography Time",
    tip3Text: "We recommend visiting <strong>early morning or evening</strong>. The square is less crowded in the morning, while evening visits allow you to capture the South Tower silhouette against the golden sunset.",
    tip4Title: "Transportation",
    tip4Text: "Take Vienna Metro <strong>U1 or U3</strong> to <strong>Stephansplatz station</strong> — the exit leads directly to the cathedral square. You can also walk from Vienna's main train station (Hbf) in about 15 minutes.",
    tip5Title: "Dress Code",
    tip5Text: "As a religious site, please dress modestly. Shorts, sleeveless tops, or revealing clothing are not recommended.",
    infoTitle: "Attraction Information",
    address: "Stephansplatz 1, 1010 Wien, Austria",
    hours: "Mon-Sat 10:00-17:30<br/>Sun & Holidays 13:00-17:30",
    fee: "Free entry to cathedral<br/>Combined ticket from €16",
    rating: "4.8/5.0 (67,892 reviews)",
    transport: "Metro Stephansplatz Station",
    duration: "2-3 hours",
    shareTitle: "⛪ Listen to Vienna's Heartbeat: St. Stephen's Cathedral In-Depth Tour & Guide",
  },
};

const currentTags = ["維也納", "奧地利", "建築", "打卡"];

export default function StStephensCathedralPage() {
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
  const toc = tocItems[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-950/50 to-red-950/30 text-white">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      <TravelLanguageSelector />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-amber-900/95 to-orange-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            {t.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-200/70 hover:text-white hover:bg-amber-800/50"
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
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-8 transition-colors bg-amber-900/30 px-4 py-2 rounded-full hover:bg-amber-800/50"
        >
          {t.backHome}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-400 mb-8 ml-6 transition-colors"
        >
          {t.blog}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            {tc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent">
            {tc.title}
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">{tc.subtitle}</h2>
          <p className="text-amber-700">{tc.date} · {tc.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80"
            alt="維也納聖斯蒂芬大教堂"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-amber-700 text-sm mb-12">
          {tc.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: tc.intro1 }} />
          <p dangerouslySetInnerHTML={{ __html: tc.intro2 }} />

          <div id="history" className="bg-gradient-to-br from-amber-900/50 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.historyTitle}
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.historySub1}</h4>
            <p className="text-amber-100/80" dangerouslySetInnerHTML={{ __html: tc.historyText1 }} />

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">{tc.historySub2}</h4>
            <p className="text-amber-100/80" dangerouslySetInnerHTML={{ __html: tc.historyText2 }} />

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                {tc.royalTitle}
              </h4>
              <p className="text-amber-100/80" dangerouslySetInnerHTML={{ __html: tc.royalText }} />
            </div>
          </div>

          <h2 id="tower">{tc.towerTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: tc.towerText1 }} />
          <p dangerouslySetInnerHTML={{ __html: tc.towerText2 }} />

          <h2 id="photo-spots">{tc.photoTitle}</h2>
          <p>{tc.photoIntro}</p>

          <h3>{tc.photo1Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.photo1Text }} />

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Wien_-_Stephansplatz_-_View_East_on_Stephansdom_-_S%C3%BCdturm_136%2C4_m_high.jpg/960px-Wien_-_Stephansplatz_-_View_East_on_Stephansdom_-_S%C3%BCdturm_136%2C4_m_high.jpg"
              alt="維也納城市景觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-amber-700 text-sm mt-4 mb-8">
              ▲ {tc.photoCaption}
            </p>
          </div>

          <h3>{tc.photo2Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.photo2Text }} />

          <h3>{tc.photo3Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.photo3Text }} />

          <h3>{tc.photo4Title}</h3>
          <p dangerouslySetInnerHTML={{ __html: tc.photo4Text }} />

          <div id="tips" className="bg-gradient-to-br from-amber-900/50 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.tipsTitle}
            </h3>
            <ul className="space-y-3 text-amber-100/80">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>{tc.tip1Title}:</strong> <span dangerouslySetInnerHTML={{ __html: tc.tip1Text }} /></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⛪</span>
                <span><strong>{tc.tip2Title}:</strong> <span dangerouslySetInnerHTML={{ __html: tc.tip2Text }} /></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌅</span>
                <span><strong>{tc.tip3Title}:</strong> <span dangerouslySetInnerHTML={{ __html: tc.tip3Text }} /></span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>{tc.tip4Title}:</strong> <span dangerouslySetInnerHTML={{ __html: tc.tip4Text }} /></span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">👔</span>
                <span><strong>{tc.tip5Title}:</strong> <span dangerouslySetInnerHTML={{ __html: tc.tip5Text }} /></span>
              </li>
            </ul>
          </div>

          <h2>{tc.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.address}</span>
              <p className="text-amber-100/80 text-sm mt-1">{tc.address}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.openingHours}</span>
              <p className="text-amber-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.hours }} />
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.fee}</span>
              <p className="text-amber-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.fee }} />
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.rating}</span>
              <p className="text-amber-100/80 text-sm mt-1">{tc.rating}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.transport}</span>
              <p className="text-amber-100/80 text-sm mt-1">{tc.transport}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">{t.visitDuration}</span>
              <p className="text-amber-100/80 text-sm mt-1">{tc.duration}</p>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          {/* Star Rating */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {t.ratingTitle}
            </h3>
            <StarRating slug="st-stephens-cathedral" />
          </div>

          {/* Social Share */}
          <div className="bg-amber-900/30 rounded-2xl p-6 my-10 border border-amber-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">{t.shareTitle}</h3>
            <SocialShare
              title={tc.shareTitle}
            />
          </div>

          {/* Favorite Button */}
          <div className="flex justify-center my-8">
            <div className="bg-amber-900/30 rounded-2xl p-6 border border-amber-700/30 flex items-center gap-4">
              <span className="text-amber-100/80">{t.favoriteText}</span>
              <FavoriteButton slug="st-stephens-cathedral" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug="st-stephens-cathedral" currentTags={tc.tags} />
        </article>
      </div>


        {/* Comments Section */}
      <Comments slug="st-stephens-cathedral" />
    </div>
  );
}