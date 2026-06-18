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

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🕰️" },
    { id: "history", title: "歷史密碼", emoji: "🔑" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "parliament", title: "國會大廈", emoji: "🏛️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🕰️" },
    { id: "history", title: "历史密码", emoji: "🔑" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "parliament", title: "国会大厦", emoji: "🏛️" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🕰️" },
    { id: "history", title: "History", emoji: "🔑" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "parliament", title: "Parliament", emoji: "🏛️" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🕰️" },
    { id: "history", title: "歷史密碼", emoji: "🔑" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "parliament", title: "國會大廈", emoji: "🏛️" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: {
      tag: "🏴 英倫風情 · 帝國地標",
      title: "聆聽英倫的時光心跳",
      subtitle: "倫敦大笨鐘（Big Ben）深度打卡與泰晤士河散策攻略",
      author: "純粹旅人",
      date: "June 2026",
      imageAlt: "倫敦大笨鐘",
      imageCaption: "▲ 歷經數年匠心大修、重現普魯士藍與金箔光芒的倫敦永恆圖騰 —— 大笨鐘",
      tags: ["倫敦", "英國", "打卡"],
    },
    intro: {
      p1: "如果說有一座建築，單憑它那沉穩悠揚的鐘聲就能代表整個英國，那絕對非矗立在泰晤士河畔的<strong>大笨鐘（Big Ben / 正式名稱為伊麗莎白塔 Elizabeth Tower）</strong>莫屬。這座落成於 1859 年的哥德復興式巨型時鐘塔，高 96 米，幾百年間默默見證了日不落帝國的風雨變遷。",
      p2: "前幾年大笨鐘經歷了歷史上最漫長，最精細的五年大維修，當它終於在世人面前揭開面紗，重現當年維多利亞時代經典的普魯士藍指針與純金金箔時，那份優雅與莊嚴再度驚艷了全球。",
    },
    history: {
      title: "⏰ 霧都的精準計時：大笨鐘的 3 大歷史密碼",
      secrets: [
        {
          subtitle: "1. 「大笨鐘」其實不是這座塔的名字？",
          content: "這是一個非常經典的旅遊誤區！我們平日口中所叫的「大笨鐘」，其實既不是指這座美麗的石塔，也不是指外面的四面時鐘，而是藏在塔樓內部、重達 13.7 噸的<strong>巨型青銅正點報時鐘（The Great Bell）</strong>！至於這座鐘樓塔本身，在 2012 年為了慶祝英女王伊麗莎白二世登基六十週年，已經正式更名為<strong>「伊麗莎白塔」（Elizabeth Tower）</strong>。不過因為大笨鐘這個名字太深入民心，大家還是習慣這樣親切地稱呼它。",
        },
        {
          subtitle: "2. 精準度的秘密 —— 居然是用「舊便士硬幣」來調節？",
          content: "大笨鐘以其驚人的精準度聞名於世，即使歷經二戰德軍轟炸，它的誤差也從未超過一秒。但你知道它是如何調節速度的嗎？大笨鐘的鐘擺頂端放置了一疊<strong>英國舊版的一便士硬幣（Pennies）</strong>！如果時鐘走快了或走慢了，鐘錶師就會走上幾百級樓梯，在鐘擺上增加或拿走一枚硬幣。增加一枚硬幣會使鐘擺的重心微調，從而每天改變時鐘速度約 0.4 秒。這種傳統而奇妙的手動微調法一直沿用至今。",
        },
      ],
      lightInfo: {
        title: "✨ 夜幕限定：大笨鐘頂端的「綠色艾爾頓燈」（Ayrton Light）",
        content: "當夜幕低垂，大笨鐘的四面乳白色玻璃錶盤會亮起溫柔的金黃色燈光。而如果你細心留意塔樓的最頂端，有時會亮起一盞神祕的<strong>綠色燈光</strong>。這盞燈被稱為「艾爾頓燈」，它的作用非常有趣：只要英國國會（Palace of Westminster）在日落後仍在挑燈夜戰開會，這盞綠燈就會一直亮起，告訴全倫敦市民「議員們正在為國家工作」。",
      },
    },
    photoSpots: {
      title: "📸 攝影師私藏：大笨鐘 4 大終極打卡機位",
      intro: "大笨鐘周邊長年人潮洶湧，想要拍出刷爆社交媒體的英倫大片，以下四個角度請一定要收藏好：",
      spots: [
        {
          name: "① 西敏橋上（Westminster Bridge）—— 經典動態流線",
          content: "站在橋上的行人路靠國會大廈那一側。這裡是最經典的視角，你可以拍到大笨鐘與泰晤士河的完美同框。如果使用慢快門，還能捕捉到倫敦經典紅色雙層巴士（Red Double-Decker Bus）化作一道紅色流光劃過大笨鐘腳下的震撼畫面。",
          image: {
            src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
            alt: "倫敦夜景",
            caption: "▲ 泰晤士河畔的經典倫敦夜景，大笨鐘與國會大廈在夜幕中閃耀",
          },
        },
        {
          name: "② 大中央喬治街（Great George St）—— 紅色電話亭同框",
          content: "往西敏寺方向走一點，在 Great George Street 附近有幾座整齊排列的<strong>英倫經典紅色電話亭</strong>。把相機放低，利用電話亭作為鮮艷的前景框住遠處的大笨鐘，這是全倫敦最具代表性的雙重英倫符號同框位！",
          image: null,
        },
        {
          name: "③ 泰晤士河南岸拱門（St Thomas' Hospital 橋底）—— 復古幾何相框",
          content: "走過西敏橋來到南岸（倫敦眼那一側），在橋底隱藏著一個由綠色植物和石頭砌成的<strong>古老拱門通道</strong>。站在拱門深處往對岸拍去，黑暗的拱門輪廓剛好變成一個天然的復古幾何相框，將明亮的大笨鐘完美框在正中央，意境滿分！",
          image: null,
        },
      ],
    },
    parliament: {
      title: "🏛️ 順游加碼：如何走進國會大廈內部",
      content: "大笨鐘連接著宏偉的西敏宮（國會大廈）。雖然大笨鐘內部目前只開放給英國居民預約攀登，但作為外國遊客，你絕對可以<strong>買票進入國會大廈內部參觀</strong>！裡面擁有上百年歷史的西敏廳（Westminster Hall）、金碧輝煌的上议院與下议院。看著電視裡議員們激烈辯論的綠色長椅真實呈現在眼前，那種歷史厚重感絕對會讓你大開眼界。",
    },
    tips: {
      title: "💡 倫敦大笨鐘 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "提早網上預約國會門票：", content: "如果你想進國會大廈內部，務必提前 1-2 個月在英國國會官網購買 \"Palace of Westminster Tour\" 門票（可選擇語音導覽或人工導覽），現場排隊非常浪費時間。" },
        { icon: "⚠️", label: "注意橋上的「猜波仔」騙局：", content: "在西敏橋上（大笨鐘正前方），常年有許多外籍團伙擺攤玩「三個杯猜小球/小玉米」的賭博遊戲。這<strong>100%是連環偷竊與詐騙團伙</strong>！周邊圍觀起哄落注的全部是他們的同伙「托」，千萬不要湊熱鬧，更不要落注，否則包包隨時會被割開。" },
        { icon: "🌅", label: "最佳夜拍時間：", content: "推薦在<strong>日落後的半小時（藍調時刻 Blue Hour）</strong>前來。這時候天空呈現深邃的皇家藍，而大笨鐘與西敏橋的燈光剛好全開，金黃與深藍的強烈對比拍出來的夜景最為迷人。" },
        { icon: "🚇", label: "交通方式：", content: "極其便利！乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>。出站時順著月台的巨型鋼鐵扶手電梯往上走，一走出地面，大笨鐘巨大的身影就會在距離你不到十米的位置直接震撼現身！" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Westminster, London SW1A 0AA" },
        { label: "🕐 開放時間", value: "國會導覽 9:15-16:30" },
        { label: "💰 費用", value: "國會導覽 約 £30 起" },
        { label: "⭐ 評分", value: "4.8/5.0（89,234 評論）" },
        { label: "🚇 交通", value: "地鐵 Westminster 站" },
        { label: "⏱️ 建議遊覽", value: "1-2小時" },
      ],
    },
    shareTitle: "🕰️ 聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略",
    ratingText: "給這個景點評分",
    favoriteText: "加入心願清單",
  },
  "zh-CN": {
    meta: {
      tag: "🏴 英伦风情 · 帝国地标",
      title: "聆听英伦的时光心跳",
      subtitle: "伦敦大笨钟（Big Ben）深度打卡与泰晤士河散策攻略",
      author: "纯粹旅人",
      date: "June 2026",
      imageAlt: "伦敦大笨钟",
      imageCaption: "▲ 历经数年匠心大修、重现普鲁士蓝与金箔光芒的伦敦永恒图腾 —— 大笨钟",
      tags: ["伦敦", "英国", "打卡"],
    },
    intro: {
      p1: "如果有一座建筑，单凭它那沉稳悠扬的钟声就能代表整个英国，那绝对非矗立在泰晤士河畔的<strong>大笨钟（Big Ben / 正式名称为伊丽莎白塔 Elizabeth Tower）</strong>莫属。这座落成于 1859 年的哥德复兴式巨型时钟塔，高 96 米，几百年间默默见证了日不落帝国的风雨变迁。",
      p2: "前几年大笨钟经历了历史上最漫长、最精细的五年大维修，当它终于在世人面前揭开面纱，重现当年维多利亚时代经典的普鲁士蓝指针与纯金金箔时，那份优雅与庄严再度惊艳了全球。",
    },
    history: {
      title: "⏰ 雾都的精准计时：大笨钟的 3 大历史密码",
      secrets: [
        {
          subtitle: "1. 「大笨钟」其实不是这座塔的名字？",
          content: "这是一个非常经典的旅游误区！我们平日口中的「大笨钟」，其实既不是指这座美丽的石塔，也不是指外面的四面时钟，而是藏在塔楼内部、重达 13.7 吨的<strong>巨型青铜整点报时钟（The Great Bell）</strong>！至于这座钟楼塔本身，在 2012 年为了庆祝英女王伊丽莎白二世登基六十周年，已经正式更名为<strong>「伊丽莎白塔」（Elizabeth Tower）</strong>。不过因为大笨钟这个名字太深入民心，大家还是习惯这样亲切地称呼它。",
        },
        {
          subtitle: "2. 精准度的秘密 —— 居然是用「旧便士硬币」来调节？",
          content: "大笨钟以其惊人的精准度闻名于世，即使历经二战德军轰炸，它的误差也从未超过一秒。但你知道它是如何调节速度的吗？大笨钟的钟摆顶端放置了一叠<strong>英国旧版的一便士硬币（Pennies）</strong>！如果时钟走快了或走慢了，钟表师就会走上几百级楼梯，在钟摆上增加或拿走一枚硬币。增加一枚硬币会使钟摆的重心微调，从而每天改变时钟速度约 0.4 秒。这种传统而奇妙的手动微调法一直沿用至今。",
        },
      ],
      lightInfo: {
        title: "✨ 夜幕限定：大笨钟顶端的「绿色艾尔顿灯」（Ayrton Light）",
        content: "当夜幕低垂，大笨钟的四面乳白色玻璃表盘会亮起温柔的金黄色灯光。而如果你细心留意塔楼的最高顶端，有时会亮起一盏神秘的<strong>绿色灯光</strong>。这盏灯被称为「艾尔顿灯」，它的作用非常有趣：只要英国国会（Palace of Westminster）在日落后仍在挑灯夜战开会，这盏绿灯就会一直亮起，告诉全伦敦市民「议员们正在为国家工作」。",
      },
    },
    photoSpots: {
      title: "📸 摄影师私藏：大笨钟 4 大终极打卡机位",
      intro: "大笨钟周边常年游客如云，想要拍出刷爆社交媒体的英伦大片，以下四个角度请一定要收藏好：",
      spots: [
        {
          name: "① 西敏桥上（Westminster Bridge）—— 经典动态流线",
          content: "站在桥上的人行道靠国会大厦那一侧。这里是最经典的视角，你可以拍到大笨钟与泰晤士河的完美同框。如果使用慢快门，还能捕捉到伦敦经典红色双层巴士（Red Double-Decker Bus）化作一道红色流光划过的大笨钟脚下震撼画面。",
          image: {
            src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
            alt: "伦敦夜景",
            caption: "▲ 泰晤士河畔的经典伦敦夜景，大笨钟与国会大厦在夜幕中闪耀",
          },
        },
        {
          name: "② 大中央乔治街（Great George St）—— 红色电话亭同框",
          content: "往西敏寺方向走一点，在 Great George Street 附近有几座整齐排列的<strong>英伦经典红色电话亭</strong>。把相机放低，利用电话亭作为鲜艳的前景框住远处的大笨钟，这是全伦敦最具代表性的双重英伦符号同框位！",
          image: null,
        },
        {
          name: "③ 泰晤士河南岸拱门（St Thomas' Hospital 桥底）—— 复古几何相框",
          content: "走过西敏桥来到南岸（伦敦眼那一侧），在桥底隐藏着一个由绿色植物和石头砌成的<strong>古老拱门通道</strong>。站在拱门深处往对岸拍去，黑暗的拱门轮廓刚好变成一个天然的复古几何相框，将明亮的大笨钟完美框在正中央，意境满分！",
          image: null,
        },
      ],
    },
    parliament: {
      title: "🏛️ 顺游加码：如何走进国会大厦内部",
      content: "大笨钟连接着宏伟的西敏宫（国会大厦）。虽然大笨钟内部目前只开放给英国居民预约攀登，但作为外国游客，你绝对可以<strong>买票进入国会大厦内部参观</strong>！里面拥有上百年历史的西敏厅（Westminster Hall）、金碧辉煌的上议院与下议院。看着电视里议员们激烈辩论的绿色长椅真实呈现在眼前，那种历史厚重感绝对会让你大开眼界。",
    },
    tips: {
      title: "💡 伦敦大笨钟 旅游实用小贴士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "提早网上预约国会门票：", content: "如果你想进国会大厦内部，务必提前 1-2 个月在英国国会官网购买 \"Palace of Westminster Tour\" 门票（可选择语音导览或人工导览），现场排队非常浪费时间。" },
        { icon: "⚠️", label: "注意桥上的「猜波仔」骗局：", content: "在西敏桥上（大笨钟正前方），常年有许多外籍团伙摆摊玩「三个杯猜小球/小玉米」的赌博游戏。这<strong>100%是连环盗窃与诈骗团伙</strong>！周边围观起哄下注的全部是他们的同伙「托」，千万不要凑热闹，更不要下注，否则包包随时会被割开。" },
        { icon: "🌅", label: "最佳夜拍时间：", content: "推荐在<strong>日落后的半小时（蓝调时刻 Blue Hour）</strong>前来。这时候天空呈现深邃的皇家蓝，而大笨钟与西敏桥的灯光刚好全开，金黄与深蓝的强烈对比拍出来的夜景最为迷人。" },
        { icon: "🚇", label: "交通方式：", content: "极其便利！搭乘伦敦地铁 Circle、District 或 Jubilee 线至 <strong>Westminster（西敏站）</strong>。出站时顺着站台的巨型钢铁扶手电梯往上走，一走出地面，大笨钟巨大的身影就会在距离你不到十米的位置直接震撼现身！" },
      ],
    },
    info: {
      title: "📊 景点资讯一览",
      items: [
        { label: "📍 地址", value: "Westminster, London SW1A 0AA" },
        { label: "🕐 开放时间", value: "国会导览 9:15-16:30" },
        { label: "💰 费用", value: "国会导览 约 £30 起" },
        { label: "⭐ 评分", value: "4.8/5.0（89,234 评论）" },
        { label: "🚇 交通", value: "地铁 Westminster 站" },
        { label: "⏱️ 建议游览", value: "1-2小时" },
      ],
    },
    shareTitle: "🕰️ 聆听英伦的时光心跳：伦敦大笨钟深度打卡与泰晤士河散策攻略",
    ratingText: "给这个景点评分",
    favoriteText: "加入心愿清单",
  },
  en: {
    meta: {
      tag: "🏴 British Heritage · Imperial Landmark",
      title: "Listen to London's Heartbeat",
      subtitle: "Big Ben Guide: Photo Spots & Thames Riverside Walk",
      author: "Pure Traveler",
      date: "June 2026",
      imageAlt: "Big Ben London",
      imageCaption: "▲ London's Eternal Icon — Big Ben, restored with Prussian Blue and Gold Leaf",
      tags: ["London", "UK", "Must-Visit"],
    },
    intro: {
      p1: "If there's one building whose steady, melodious chimes can represent all of Britain, it must be the <strong>Big Ben (officially Elizabeth Tower)</strong> standing proudly on the banks of the Thames. This Gothic Revival clock tower, completed in 1859, stands 96 meters tall and has silently witnessed the rise and fall of the British Empire for centuries.",
      p2: "After undergoing the longest and most meticulous restoration in its history a few years ago, Big Ben revealed itself to the world once again — with the classic Prussian Blue hands and pure gold leaf from Victoria's era restored to their former glory. That elegance and grandeur once again stunned the globe.",
    },
    history: {
      title: "⏰ Precision Timekeeping: 3 Historical Secrets of Big Ben",
      secrets: [
        {
          subtitle: "1. 'Big Ben' Isn't Actually the Name of the Tower?",
          content: "This is a classic travel misconception! What we casually call 'Big Ben' is actually neither the beautiful stone tower nor the four clock faces — it's the <strong>Great Bell</strong>, weighing 13.7 tons, housed inside the tower! As for the tower itself, it was officially renamed the <strong>Elizabeth Tower</strong> in 2012 to celebrate Queen Elizabeth II's Diamond Jubilee. However, since 'Big Ben' is so deeply rooted in public consciousness, everyone still uses this affectionate nickname.",
        },
        {
          subtitle: "2. The Secret of Precision — Using 'Old Pennies' to Adjust?",
          content: "Big Ben is world-famous for its incredible accuracy — even through WWII bombing raids, its error never exceeded one second. But do you know how it's adjusted? At the top of Big Ben's pendulum sits a stack of <strong>old British one-penny coins</strong>! If the clock runs fast or slow, clockmakers climb hundreds of steps to add or remove a coin from the pendulum. Adding one coin adjusts the pendulum's center of gravity, changing the clock's speed by about 0.4 seconds per day. This traditional and ingenious manual adjustment method is still used today.",
        },
      ],
      lightInfo: {
        title: "✨ Nighttime Exclusive: The 'Ayrton Light' at Big Ben's Summit",
        content: "When night falls, Big Ben's four milky-white glass clock faces glow with gentle golden light. But if you look carefully at the very top of the tower, you'll sometimes see a mysterious <strong>green light</strong> shining. This is the 'Ayrton Light' — its purpose is wonderfully peculiar: whenever the UK Parliament (Palace of Westminster) is in session after sunset, this green light stays lit to tell all of London that 'the MPs are working for the nation.'",
      },
    },
    photoSpots: {
      title: "📸 Photographer's Secrets: Big Ben's 4 Ultimate Photo Spots",
      intro: "Big Ben's surroundings are always bustling with crowds. To capture those Instagram-worthy British大片, make sure to bookmark these four angles:",
      spots: [
        {
          name: "① Westminster Bridge — Classic Dynamic Flow",
          content: "Stand on the pedestrian walkway on the Parliament side of Westminster Bridge. This is the most classic view where you can capture Big Ben perfectly framed with the Thames. Using a slow shutter, you can even catch London's iconic red double-decker buses leaving a streak of red light passing beneath Big Ben.",
          image: {
            src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
            alt: "London Night View",
            caption: "▲ Classic London night view by the Thames — Big Ben and the Palace of Westminster shining at night",
          },
        },
        {
          name: "② Great George Street — Red Phone Box Shot",
          content: "Walking a bit towards Westminster Abbey, you'll find several neatly arranged <strong>classic British red phone boxes</strong> near Great George Street. Place your camera low and use the phone box as a vibrant foreground to frame distant Big Ben. This is the most iconic double-British-symbol shot in all of London!",
          image: null,
        },
        {
          name: "③ St Thomas' Hospital Bridge Underpass — Vintage Geometric Frame",
          content: "Cross Westminster Bridge to the South Bank (London Eye side), and you'll discover a hidden <strong>ancient arched passage</strong> built with greenery and stone beneath the bridge. Stand deep inside the arch and photograph towards the opposite bank — the dark arch outline becomes a natural vintage geometric frame, perfectly centering bright Big Ben in the middle. Stunning!",
          image: null,
        },
      ],
    },
    parliament: {
      title: "🏛️ Bonus Tip: How to Tour Inside the Houses of Parliament",
      content: "Big Ben is connected to the magnificent Palace of Westminster. While Big Ben's interior is currently only open to UK residents by reservation, as a foreign tourist you can absolutely <strong>purchase tickets to tour the inside of the Houses of Parliament</strong>! Inside you'll find the historic Westminster Hall (over 900 years old), the magnificent House of Lords and House of Commons. Seeing those green benches where TV debates happen in real life — the sense of historical weight will truly blow your mind.",
    },
    tips: {
      title: "💡 Big Ben & Westminster Travel Tips",
      items: [
        { icon: "🎟️", label: "Book Parliament Tickets Online in Advance:", content: "If you want to tour inside the Houses of Parliament, be sure to book 'Palace of Westminster Tour' tickets 1-2 months in advance on the UK Parliament website. You can choose audio guides or guided tours — queuing on-site is a huge waste of time." },
        { icon: "⚠️", label: "Beware of 'Cup and Ball' Scams on the Bridge:", content: "On Westminster Bridge (right in front of Big Ben), there are always groups of foreigners running 'three cup/pea' gambling games. This is <strong>100% a ring of pickpockets and scammers</strong>! Everyone around cheering and betting are their accomplices. DO NOT participate — your bag could get slashed." },
        { icon: "🌅", label: "Best Time for Night Photography:", content: "I recommend arriving <strong>half an hour after sunset during Blue Hour</strong>. The sky takes on a deep royal blue while Big Ben and Westminster Bridge's lights are perfectly lit. The striking contrast between gold and deep blue creates the most magical night views." },
        { icon: "🚇", label: "Getting There:", content: "Super convenient! Take the London Underground Circle, District, or Jubilee line to <strong>Westminster station</strong>. Follow the massive steel escalators up from the platform, and as soon as you exit, Big Ben's towering presence will literally appear震撼ly less than ten meters away!" },
      ],
    },
    info: {
      title: "📊 Quick Info",
      items: [
        { label: "📍 Address", value: "Westminster, London SW1A 0AA" },
        { label: "🕐 Hours", value: "Parliament Tour 9:15-16:30" },
        { label: "💰 Price", value: "Parliament Tour from £30" },
        { label: "⭐ Rating", value: "4.8/5.0 (89,234 reviews)" },
        { label: "🚇 Transport", value: "Westminster Underground" },
        { label: "⏱️ Visit", value: "1-2 hours" },
      ],
    },
    shareTitle: "🕰️ Listen to London's Heartbeat: Big Ben Photo Spots & Thames Riverside Walk",
    ratingText: "Rate This Attraction",
    favoriteText: "Add to Wishlist",
  },
  yue: {
    meta: {
      tag: "🏴 英倫風情 · 帝國地標",
      title: "聆聽英倫的時光心跳",
      subtitle: "倫敦大笨鐘（Big Ben）深度打卡與泰晤士河散策攻略",
      author: "純粹旅人",
      date: "June 2026",
      imageAlt: "倫敦大笨鐘",
      imageCaption: "▲ 歷經數年匠心大修、重現普魯士藍與金箔光芒的倫敦永恆圖騰 —— 大笨鐘",
      tags: ["倫敦", "英國", "打卡"],
    },
    intro: {
      p1: "如果話有一座建築，單憑佢嗰沉穩悠揚的鐘聲就能代表成個英國，咁絕對非矗立在泰晤士河畔的<strong>大笨鐘（Big Ben / 正式名稱為伊麗莎白塔 Elizabeth Tower）</strong>莫屬。呢座落成於 1859 年的哥德復興式巨型時鐘塔，高 96 米，幾百年間默默見證了日不落帝國的風雨變遷。",
      p2: "前幾年大笨鐘經歷咗歷史上最漫長、最精細的五年大維修，當佢終於喺世人面前揭開面紗，重現當年維多利亞時代經典的普魯士藍指針與純金金箔時，嗰份優雅與莊嚴再度驚艷咗全球。",
    },
    history: {
      title: "⏰ 霧都的精準計時：大笨鐘的 3 大歷史密碼",
      secrets: [
        {
          subtitle: "1. 「大笨鐘」其實唔係呢座塔的名字？",
          content: "呢個係一個非常經典的旅遊誤區！我哋平日口中所叫的「大笨鐘」，其實唔係指呢座美麗的石塔，亦唔係指外面嗰四面時鐘，而係收藏喺塔樓內部、重達 13.7 噸的<strong>巨型青銅正點報時鐘（The Great Bell）</strong>！至於呢座鐘樓塔本身，喺 2012 年為咗慶祝英女王伊麗莎白二世登基六十週年，已經正式更名為<strong>「伊麗莎白塔」（Elizabeth Tower）</strong>。不過因為大笨鐘呢個名太深入民心，大家仲係習慣咁樣親切地稱呼佢。",
        },
        {
          subtitle: "2. 精準度的秘密 —— 居然係用「舊便士硬幣」嚟調節？",
          content: "大笨鐘以佢驚人的精準度聞名於世，即使歷經二戰德軍轟炸，佢的誤差亦從未超過一秒。但你知唔知佢係如何調節速度的？大笨鐘的鐘擺頂端放置咗一疊<strong>英國舊版的一便士硬幣（Pennies）</strong>！如果時鐘行快咗或行慢咗，鐘錶師就會走上幾百級樓梯，喺鐘擺上增加或拿走一枚硬幣。增加一枚硬幣會使鐘擺的重心微調，從而每日改變時鐘速度約 0.4 秒。呢種傳統而奇妙的手動微調法一直沿用至今。",
        },
      ],
      lightInfo: {
        title: "✨ 夜幕限定：大笨鐘頂端的「綠色艾爾頓燈」（Ayrton Light）",
        content: "當夜幕低垂，大笨鐘的四面乳白色玻璃錶盤會亮起溫柔的金黃色燈光。而如果你細心留意塔樓的最頂端，有時會亮起一盞神祕的<strong>綠色燈光</strong>。呢盞燈被稱為「艾爾頓燈」，佢的作用非常有趣：只要英國國會（Palace of Westminster）喺日落後仍在挑燈夜戰開會，呢盞綠燈就會一直亮起，告訴全倫敦市民「議員們正在為國家工作」。",
      },
    },
    photoSpots: {
      title: "📸 攝影師私藏：大笨鐘 4 大終極打卡機位",
      intro: "大笨鐘周邊長年人潮洶湧，想影出刷爆社交媒體的英倫大片，以下四個角度請一定要收藏好：",
      spots: [
        {
          name: "① 西敏橋上（Westminster Bridge）—— 經典動態流線",
          content: "站在橋上的行人路靠國會大廈嗰一側。呢度係最經典的視角，你可以影到大笨鐘與泰晤士河的完美同框。如果使用慢快門，仲能捕捉到倫敦經典紅色雙層巴士（Red Double-Decker Bus）化作一道紅色流光劃過大笨鐘腳下的震撼畫面。",
          image: {
            src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
            alt: "倫敦夜景",
            caption: "▲ 泰晤士河畔的經典倫敦夜景，大笨鐘與國會大廈喺夜幕中閃耀",
          },
        },
        {
          name: "② 大中央喬治街（Great George St）—— 紅色電話亭同框",
          content: "往西敏寺方向走一點，喺 Great George Street 附近有幾座整齊排列的<strong>英倫經典紅色電話亭</strong>。把相機放低，利用電話亭作為鮮艷的前景框住遠處的大笨鐘，呢係全倫敦最具代表性的雙重英倫符號同框位！",
          image: null,
        },
        {
          name: "③ 泰晤士河南岸拱門（St Thomas' Hospital 橋底）—— 復古幾何相框",
          content: "行過西敏橋嚟到南岸（倫敦眼嗰一側），喺橋底隱藏著一個由綠色植物和石頭砌成的<strong>古老拱門通道</strong>。站在拱門深處往對岸影去，黑暗的拱門輪廓剛好變成一個天然的復古幾何相框，將明亮的大笨鐘完美框喺正中央，意境滿分！",
          image: null,
        },
      ],
    },
    parliament: {
      title: "🏛️ 順遊加碼：如何走進國會大廈內部",
      content: "大笨鐘連接著宏偉的西敏宮（國會大廈）。雖然大笨鐘內部目前只開放給英國居民預約攀登，但作為外國遊客，你絕對可以<strong>買飛進入國會大廈內部參觀</strong>！裡面擁有上百年歷史的西敏廳（Westminster Hall）、金碧輝煌的上议院與下议院。睇住電視裡議員們激烈辯論的綠色長椅真實呈現在眼前，嗰種歷史厚重感絕對會讓你大開眼界。",
    },
    tips: {
      title: "💡 倫敦大笨鐘 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "提早網上預約國會門票：", content: "如果你想進國會大廈內部，務必提前 1-2 個月喺英國國會官網購買 \"Palace of Westminster Tour\" 門票（可選擇語音導覽或人工導覽），現場排隊非常浪費時間。" },
        { icon: "⚠️", label: "注意橋上的「猜波仔」騙局：", content: "喺西敏橋上（大笨鐘正前方），常年有許多外籍團伙擺攤玩「三個杯猜小球/小玉米」的賭博遊戲。呢<strong>100%係連環偷竊與詐騙團伙</strong>！周邊圍觀起哄落注的全部係佢哋的同伙「托」，千祈唔好湊熱鬧，更唔好落注，否則包包隨時會被割開。" },
        { icon: "🌅", label: "最佳夜拍時間：", content: "推薦喺<strong>日落後的半小時（藍調時刻 Blue Hour）</strong>前來。呢個時候天空呈現深邃的皇家藍，而大笨鐘與西敏橋的燈光剛好全開，金黃與深藍的強烈對比影出來的夜景最為迷人。" },
        { icon: "🚇", label: "交通方式：", content: "極其便利！乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>。出站時順著月台的巨型鋼鐵扶手電梯往上行，一走出地面，大笨鐘巨大的身影就會喺距離你唔到十米的位置直接震撼現身！" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Westminster, London SW1A 0AA" },
        { label: "🕐 開放時間", value: "國會導覽 9:15-16:30" },
        { label: "💰 費用", value: "國會導覽 約 £30 起" },
        { label: "⭐ 評分", value: "4.8/5.0（89,234 評論）" },
        { label: "🚇 交通", value: "地鐵 Westminster 站" },
        { label: "⏱️ 建議遊覽", value: "1-2小時" },
      ],
    },
    shareTitle: "🕰️ 聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略",
    ratingText: "給呢個景點評分",
    favoriteText: "加入心願清單",
  },
};

export default function BigBenPage() {
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
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} variant="minimal" />
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
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80"
            alt={c.meta.imageAlt}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-slate-500 text-sm mb-12">{c.meta.imageCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />

          <div id="history" className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.history.title}
            </h3>

            {c.history.secrets.map((secret, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-white mt-6 mb-3">{secret.subtitle}</h4>
                <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: secret.content }} />
              </div>
            ))}

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                {c.history.lightInfo.title}
              </h4>
              <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: c.history.lightInfo.content }} />
            </div>
          </div>

          <h2 id="photo-spots">{c.photoSpots.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.photoSpots.intro }} />

          {c.photoSpots.spots.map((spot, idx) => (
            <div key={idx}>
              <h3>{spot.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: spot.content }} />
              {spot.image && (
                <div className="my-8">
                  <img src={spot.image.src} alt={spot.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-slate-500 text-sm mt-4 mb-8">{spot.image.caption}</p>
                </div>
              )}
            </div>
          ))}

          <div id="parliament" className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.parliament.title}
            </h3>
            <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: c.parliament.content }} />
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 my-10">
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

          <h2>{c.info.title}</h2>
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
            <StarRating slug="big-ben" />
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
              <FavoriteButton slug="big-ben" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug="big-ben" currentTags={c.meta.tags} />
        </article>
      </div>

      <Comments slug="big-ben" />
    </div>
  );
}
