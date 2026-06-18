"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "history", title: "歷史密碼", emoji: "🔮" },
    { id: "capsules", title: "太空艙秘密", emoji: "🛸" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "sunset", title: "日落攻略", emoji: "🌅" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "history", title: "历史密码", emoji: "🔮" },
    { id: "capsules", title: "太空舱秘密", emoji: "🛸" },
    { id: "photo-spots", title: "打卡机位", emoji: "📸" },
    { id: "sunset", title: "日落攻略", emoji: "🌅" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "history", title: "History", emoji: "🔮" },
    { id: "capsules", title: "Capsule Secrets", emoji: "🛸" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "sunset", title: "Sunset Guide", emoji: "🌅" },
    { id: "tips", title: "Tips", emoji: "💡" },
  ],
  yue: [
    { id: "history", title: "歷史密碼", emoji: "🔮" },
    { id: "capsules", title: "太空艙秘密", emoji: "🛸" },
    { id: "photo-spots", title: "打卡機位", emoji: "📸" },
    { id: "sunset", title: "日落攻略", emoji: "🌅" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: {
      tag: "🎡 英倫現代 · 泰晤士河畔",
      title: "轉動在千禧年的浪漫：倫敦眼",
      subtitle: "終極打卡與高空落日觀景攻略",
      author: "純粹旅人",
      date: "June 2026",
    },
    intro: {
      imageAlt: "倫敦眼",
      imageCaption: "▲ 為了迎接千禧年而建、高達 135 米的全球首座巨型觀景摩天輪 —— 倫敦眼",
      p1: "如果說大笨鐘與國會大廈是倫敦沉穩、不朽的古典靈魂，那麼佇立在泰晤士河正對岸、宛如一隻巨型懸浮車輪的<strong>倫敦眼（The London Eye / 又稱千禧之輪 Millennium Wheel）</strong>，就是這座城市最摩登、最魔幻的現代眼睛。這座高達 135 米的巨型摩天輪，在 2000 年落成時曾是全球最大的摩天輪。當它以每秒 0.26 米的治癒速度緩緩轉動，帶你升上泰晤士河的上空，整個倫敦的天際線在腳下 360 度無死角地慢慢鋪開，那一刻的震撼與浪漫，簡直無可比擬。",
      p2: "今日呢篇 Blog 就帶大家登上這座英倫超級地標，解鎖它背後一些非常有趣的數字冷知識，奉上攝影師私藏的兩大絕美拍照機位，並送上防排隊的無痛全攻略！",
    },
    sections: [
      {
        id: "history",
        title: "🔮 緩慢轉動的摩天輪：倫敦眼的 3 大歷史密碼",
        funFact: {
          title: "🇬🇧 居然是個「臨時工」？差點被拆除的命運",
          content: "你很難想像，如今貴為倫敦第一大收費觀光景點的倫敦眼，<strong>當初居然被規劃為只保留 5 年的「臨時建築」</strong>！當時倫敦政府只是想建一座地標來慶祝千禧年的到來，打算在 2005 年將其拆除。結果因為它落成後太受全球旅客歡迎，每天門庭若市，更瘋狂為倫敦帶來旅遊收益。最後，地方政府在強大輿論下決定給它頒發永久許可證，倫敦眼這才得以永久保留，成為泰晤士河畔不可或缺的風景。",
        },
        items: [
          {
            id: "capsules",
            subtitle: "1. 消失的「13號」太空艙之謎",
            content: "倫敦眼一共有 <strong>32個</strong> 標誌性的全玻璃封閉式流線型「太空艙（Capsules）」，每個太空艙可以容納約 25 名遊客。但如果你細心觀察每一隻太空艙上的編號，會驚奇地發現居然<strong>有 33 號，但卻找不到 13 號</strong>！這是因為西方文化中認為 \"13\" 是一個極度不吉利的數字。為了顧及遊客的心情與信仰，設計師特意跳過了 13 號，將第 13 個座艙直接編為 14 號，這也是英式幽默與貼心的一面。",
          },
          {
            subtitle: "2. 為什麼 32 個太空艙代表了整個倫敦？",
            content: "為什麼不是 30 個或 35 個，偏偏精準地設計成 32 個太空艙呢？這背後其實隱藏著一個政治幾何學：32 這個數字完美代表了<strong>倫敦的 32 個行政區（London Boroughs）</strong>！坐上太空艙，就彷彿承載著整個倫敦的榮耀升上夜空。",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
          alt: "倫敦眼與西敏橋",
          caption: "▲ 西敏橋（Westminster Bridge）上，最經典的新舊倫敦符號碰撞視角",
        },
      },
    ],
    photoSpots: {
      id: "photo-spots",
      title: "📸 攝影師私藏：如何拍出刷爆社交媒體的「倫敦眼大片」",
      intro: "倫敦眼體積極其龐大，站在它正下方的草地上（Jubilee Gardens）往往只能拍到一小段局部的鐵架。想要拍到完美的同框照，這兩個機位才是精華：",
      spots: [
        { icon: "📍", name: "西敏橋中段（Westminster Bridge）：新舊完美同框", desc: "走出 Westminster 地鐵站後踏上西敏橋。站在橋的行人路上、往倫敦眼方向步行約一分鐘。這裡擁有最完美的視覺壓縮感，你可以利用西敏橋古典的綠色鐵欄杆和復古路燈作為前景，將龐大現代的倫敦眼完整地框入鏡頭，拍出新舊倫敦強烈對比的英倫風大片。" },
        { icon: "📍", name: "維多利亞堤岸步道（Victoria Embankment）：隔岸靜謐全景", desc: "走到泰晤士河的對岸（大笨鐘那一側）沿著河岸步道往大橋方向散步。這裡人潮相對稀少，你可以利用河岸的古老石牆和沿路延伸的英倫行道樹作為構圖。每到入夜後，對岸倫敦眼的彩色燈光完美倒影在波光粼粼的泰晤士河面上，拍出來的照片帶有一種浪漫、深邃的歐式氛圍。" },
      ],
    },
    sunset: {
      id: "sunset",
      title: "🌅 自由行金律：挑選最完美的「轉動 30 分鐘」",
      content: "倫敦眼轉完一圈大約需要 <strong>30分鐘</strong>。想要將這半小時發揮到極致，<strong>最完美的進場時間是「黃昏日落前 15 分鐘」</strong>！這樣一來，當你的太空艙缓缓升向最高點時，你剛好可以欣賞到整個倫敦被漫天粉橘色夕陽晚霞籠罩的溫柔瞬間；而當太空艙開始後半段下降時，天色剛好步入藍調（Blue Hour），大笨鐘、國會大廈、西敏橋的暖黃色夜燈會在眼皮底下紛紛點亮。這 30 分鐘，你同時體驗到了白晝、黃昏與倫敦繁華的夜景，絕對值回票價！",
    },
    tips: {
      id: "tips",
      title: "💡 倫敦眼 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "魔鬼排隊守則：絕對要買「快速通關門票 (Fast Track)」！", desc: "倫敦眼長年高居倫敦排隊最恐怖景點的分秒榜首。如果現場買普通票（Standard Ticket），旺季排隊往往需要 1.5 至 2 小時。強烈建議多花十多英鎊在官網或者旅遊平台提前購買「Fast Track 快速通關定時門票」，有專用通道，基本上 10 分鐘內就能進艙，省下的時間可以用來逛更多景點！" },
        { icon: "🎁", label: "推薦購買聯票（Combo Tickets）：", desc: "倫敦眼與旁邊的「倫敦地牢 (The London Dungeon)」、「倫敦水族館」以及「杜莎夫人蠟像館」屬於同一個娛樂集團。如果你計劃去其中幾個，購買聯票可以省下高達 30% 嘅門票費用，非常划算。" },
        { icon: "🛸", label: "太空艙內完全不晃，請放心：", desc: "許多恐高的朋友會擔心安全。倫敦眼的太空艙採用了高科技的內置微電腦平衡液壓系統，無論轉到什麼角度，座艙的地板都會<strong>百分之百保持水平且完全不會搖晃</strong>，艙內中央還設有舒適的木質長椅，非常安全舒服。" },
        { icon: "🚇", label: "交通方式：", desc: "乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>，出站後走過西敏橋，步行約 5 分鐘即可抵達；或者搭到 <strong>Waterloo（滑鐵盧站）</strong>，出站後順著 South Bank（南岸）方向步行 5 分鐘即達。" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Riverside Building, County Hall, London SE1 7PB" },
        { label: "🕐 開放時間", value: "10:00-18:00（季節性調整）" },
        { label: "💰 費用", value: "成人約 £30-40" },
        { label: "🚇 交通", value: "地鐵 Westminster 站" },
      ],
    },
  },
  "zh-CN": {
    meta: {
      tag: "🎡 英伦现代 · 泰晤士河畔",
      title: "转动在千禧年的浪漫：伦敦眼",
      subtitle: "终极打卡与高空落日观景攻略",
      author: "纯粹旅人",
      date: "June 2026",
    },
    intro: {
      imageAlt: "伦敦眼",
      imageCaption: "▲ 为了迎接千禧年而建、高达 135 米的全球首座巨型观景摩天轮 —— 伦敦眼",
      p1: "如果说大笨钟与国会大厦是伦敦沉稳、不朽的古典灵魂，那么伫立在泰晤士河正对岸、宛如一只巨型悬浮车轮的<strong>伦敦眼（The London Eye / 又称千禧之轮 Millennium Wheel）</strong>，就是这座城市最摩登、最魔幻的现代眼睛。这座高达 135 米的巨型摩天轮，在 2000 年落成时曾是全球最大的摩天轮。当它以每秒 0.26 米的速度缓缓转动，带你升上泰晤士河的上空，整个伦敦的天际线在脚下 360 度无死角地慢慢铺开，那一刻的震撼与浪漫，简直无可比拟。",
      p2: "今天这篇 Blog 就带大家登上这座英伦超级地标，解锁它背后一些非常有趣的数字冷知识，送上摄影师私藏的两大绝美拍照机位，并奉上防排队的无痛全攻略！",
    },
    sections: [
      {
        id: "history",
        title: "🔮 缓慢转动的摩天轮：伦敦眼的 3 大历史密码",
        funFact: {
          title: "🇬🇧 居然是个「临时工」？差点被拆除的命运",
          content: "你很难想象，如今贵为伦敦第一大收费观光景点的伦敦眼，<strong>当初居然被规划为只保留 5 年的「临时建筑」</strong>！当时伦敦政府只是想建一座地标来庆祝千禧年的到来，打算在 2005 年将其拆除。结果因为它落成后太受全球旅客欢迎，每天门庭若市，更疯狂为伦敦带来旅游收益。最后，地方政府在强大舆论下决定给它颁发永久许可证，伦敦眼这才得以永久保留，成为泰晤士河畔不可或缺的风景。",
        },
        items: [
          {
            id: "capsules",
            subtitle: "1. 消失的「13号」太空舱之谜",
            content: "伦敦眼一共有 <strong>32个</strong> 标志性的全玻璃封闭式流线型「太空舱（Capsules）」，每个太空舱可以容纳约 25 名游客。但如果你细心观察每一只太空舱上的编号，会惊奇地发现居然<strong>有 33 号，但却找不到 13 号</strong>！这是因为西方文化中认为 \"13\" 是一个极度不吉利的数字。为了顾及游客的心情与信仰，设计师特意跳过了 13 号，将第 13 个座舱直接编为 14 号，这也是英式幽默与贴心的一面。",
          },
          {
            subtitle: "2. 为什么 32 个太空舱代表了整个伦敦？",
            content: "为什么不是 30 个或 35 个，偏偏精准地设计成 32 个太空舱呢？这背后其实隐藏着一个政治几何学：32 这个数字完美代表了<strong>伦敦的 32 个行政区（London Boroughs）</strong>！坐上太空舱，就仿佛承载着整个伦敦的荣耀升上夜空。",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
          alt: "伦敦眼与西敏桥",
          caption: "▲ 西敏桥（Westminster Bridge）上，最经典的新旧伦敦符号碰撞视角",
        },
      },
    ],
    photoSpots: {
      id: "photo-spots",
      title: "📸 摄影师私藏：如何拍出刷爆社交媒体的「伦敦眼大片」",
      intro: "伦敦眼体积极其庞大，站在它正下方的草地上（Jubilee Gardens）往往只能拍到一小段局部的铁架。想要拍到完美的同框照，这两个机位才是精华：",
      spots: [
        { icon: "📍", name: "西敏桥中段（Westminster Bridge）：新旧完美同框", desc: "走出 Westminster 地铁站后踏上西敏桥。站在桥的人行道上、往伦敦眼方向步行约一分钟。这里拥有最完美的视觉压缩感，你可以利用西敏桥古典的绿色铁栏杆和复古路灯作为前景，将庞大现代的伦敦眼完整地框入镜头，拍出新旧伦敦强烈对比的英伦风大片。" },
        { icon: "📍", name: "维多利亚堤岸步道（Victoria Embankment）：隔岸静谧全景", desc: "走到泰晤士河的对岸（大笨钟那一侧）沿着河岸步道往大桥方向散步。这里人潮相对稀少，你可以利用河岸的古老石墙和沿途延伸的英伦行道树作为构图。每到入夜后，对岸伦敦眼的彩色灯光完美倒影在波光粼粼的泰晤士河面上，拍出来的照片带有一种浪漫、深邃的欧式氛围。" },
      ],
    },
    sunset: {
      id: "sunset",
      title: "🌅 自由行金律：挑选最完美的「转动 30 分钟」",
      content: "伦敦眼转完一圈大约需要 <strong>30分钟</strong>。想要将这半小时发挥到极致，<strong>最完美的进场时间是「黄昏日落前 15 分钟」</strong>！这样一来，当你的太空舱缓缓升向最高点时，你刚好可以欣赏到整个伦敦被漫天粉橘色夕阳晚霞笼罩的温柔瞬间；而当太空舱开始后半段下降时，天色刚好步入蓝调（Blue Hour），大笨钟、国会大厦、西敏桥的暖黄色夜灯会在眼皮底下纷纷点亮。这 30 分钟，你同时体验到了白昼、黄昏与伦敦繁华的夜景，绝对值回票价！",
    },
    tips: {
      id: "tips",
      title: "💡 伦敦眼 旅游实用小贴士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "魔鬼排队守则：绝对要买「快速通关门票 (Fast Track)」！", desc: "伦敦眼长年高居伦敦排队最恐怖景点的分秒榜首。如果现场买普通票（Standard Ticket），旺季排队往往需要 1.5 至 2 小时。强烈建议多花十多英镑在官网或者旅游平台提前购买「Fast Track 快速通关定时门票」，有专用通道，基本上 10 分钟内就能进舱，省下的时间可以用来逛更多景点！" },
        { icon: "🎁", label: "推荐购买联票（Combo Tickets）：", desc: "伦敦眼与旁边的「伦敦地牢 (The London Dungeon)」、「伦敦水族馆」以及「杜莎夫人蜡像馆」属于同一个娱乐集团。如果你计划去其中几个，购买联票可以省下高达 30% 的门票费用，非常划算。" },
        { icon: "🛸", label: "太空舱内完全不晃，请放心：", desc: "许多恐高的朋友会担心安全。伦敦眼的太空舱采用了高科技的内置微电脑平衡液压系统，无论转到什么角度，座舱的地板都会<strong>百分之百保持水平且完全不会摇晃</strong>，舱内中央还设有舒适的木质长椅，非常安全舒服。" },
        { icon: "🚇", label: "交通方式：", desc: "搭乘伦敦地铁 Circle、District 或 Jubilee 线至 <strong>Westminster（西敏站）</strong>，出站后走过西敏桥，步行约 5 分钟即可抵达；或者搭到 <strong>Waterloo（滑铁卢站）</strong>，出站后顺着 South Bank（南岸）方向步行 5 分钟即达。" },
      ],
    },
    info: {
      title: "📊 景点资讯一览",
      items: [
        { label: "📍 地址", value: "Riverside Building, County Hall, London SE1 7PB" },
        { label: "🕐 开放时间", value: "10:00-18:00（季节性调整）" },
        { label: "💰 费用", value: "成人约 £30-40" },
        { label: "🚇 交通", value: "地铁 Westminster 站" },
      ],
    },
  },
  en: {
    meta: {
      tag: "🎡 Modern London · Thames Riverside",
      title: "Romance at the Millennium: London Eye",
      subtitle: "Ultimate Photo Spots & Sunset Viewing Guide",
      author: "Pure Traveler",
      date: "June 2026",
    },
    intro: {
      imageAlt: "London Eye",
      imageCaption: "▲ The world's first giant observation wheel, built for the millennium — standing 135 meters tall",
      p1: "If Big Ben and the Houses of Parliament represent London's composed, timeless classical soul, then the <strong>London Eye (also known as the Millennium Wheel)</strong>, standing opposite the Thames like a giant floating wheel, is the city's most modern, most magical contemporary eye. This 135-meter giant Ferris wheel was the world's largest when it opened in 2000. As it rotates slowly at 0.26 meters per second, lifting you above the Thames, London's entire skyline unfolds 360 degrees beneath your feet — the thrill and romance of that moment is simply incomparable.",
      p2: "Today, this blog takes you aboard this British super landmark, reveals fascinating numerical secrets, shares photographers' two premium photo spots, and provides a painless guide to beating the queues!",
    },
    sections: [
      {
        id: "history",
        title: "🔮 The Slowly Spinning Wheel: 3 Historical Secrets of the London Eye",
        funFact: {
          title: "🇬🇧 It Was Originally a 'Temp Worker' — Almost Demolished!",
          content: "It's hard to imagine that today's top-paid tourist attraction in London was originally planned as a <strong>'temporary structure' to be kept for only 5 years</strong>! The government simply wanted a landmark to celebrate the millennium, planning to dismantle it in 2005. But it became so incredibly popular with global visitors, drawing huge crowds daily and generating enormous tourism revenue, that the council decided to grant it a permanent license. The London Eye was saved and became an indispensable part of the Thames riverside.",
        },
        items: [
          {
            id: "capsules",
            subtitle: "1. The Mystery of the Missing '13' Capsule",
            content: "The London Eye has <strong>32</strong> iconic fully enclosed, aerodynamic glass 'capsules,' each accommodating about 25 passengers. But if you carefully check the numbering on each capsule, you'll be surprised to find there's a <strong>Number 33 but no Number 13</strong>! This is because Western culture considers \"13\" an extremely unlucky number. To respect passengers' feelings and beliefs, designers deliberately skipped 13, numbering the 13th capsule as 14 — a touching example of British consideration.",
          },
          {
            subtitle: "2. Why 32 Capsules Represent the Entire City of London?",
            content: "Why not 30 or 35 capsules, but precisely 32? There's a political geometry secret behind this: the number 32 perfectly represents <strong>London's 32 boroughs (London Boroughs)</strong>! Boarding a capsule is like ascending into the night sky carrying the glory of all London.",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
          alt: "London Eye and Westminster Bridge",
          caption: "▲ Westminster Bridge — the classic collision of old and new London symbols",
        },
      },
    ],
    photoSpots: {
      id: "photo-spots",
      title: "📸 Photographer's Secrets: How to Capture Stunning 'London Eye' Shots",
      intro: "The London Eye is enormous — standing directly beneath it on Jubilee Gardens often only captures a partial section of the structure. These two spots are where the magic happens:",
      spots: [
        { icon: "📍", name: "Westminster Bridge Mid-Section: Perfect Old Meets New", desc: "After exiting Westminster station, step onto Westminster Bridge. Walk about a minute along the pedestrian path toward the London Eye. This spot offers the perfect visual compression — use the bridge's classic green iron railings and vintage street lamps as foreground, framing the massive modern London Eye completely in shot, creating a dramatic British-style photo with striking contrast between old and new London." },
        { icon: "📍", name: "Victoria Embankment: Serene Panoramic View from Across", desc: "Cross to the opposite bank of the Thames (the Big Ben side) and stroll along the riverside walk toward the bridges. This side has fewer crowds. Use the ancient stone walls and British avenue trees along the bank for composition. At night, the colorful lights of the London Eye reflect perfectly on the shimmering Thames — the resulting photos have a romantic, profound European atmosphere." },
      ],
    },
    sunset: {
      id: "sunset",
      title: "🌅 Golden Rule: Choose the Perfect '30-Minute Spin'",
      content: "The London Eye takes approximately <strong>30 minutes</strong> for one full revolution. To make the most of this half hour, <strong>the perfect boarding time is '15 minutes before sunset'</strong>! This way, as your capsule slowly rises to the highest point, you get to witness all of London bathed in pink-orange twilight; and as the capsule begins its descent, the sky transitions to Blue Hour, with Big Ben, the Houses of Parliament, and Westminster Bridge's warm yellow lights flickering on below. In these 30 minutes, you experience daylight, dusk, and London's glamorous night view — absolutely worth the ticket!",
    },
    tips: {
      id: "tips",
      title: "💡 London Eye Travel Tips",
      items: [
        { icon: "🎟️", label: "Queue Horror Rule: ALWAYS Buy Fast Track Tickets!", desc: "The London Eye consistently tops London's most-horrific queues list. With a standard ticket purchased on-site, expect 1.5-2 hours of waiting during peak season. I strongly recommend spending just over ten pounds to pre-purchase 'Fast Track' timed entry tickets online — you'll use the dedicated lane and board within 10 minutes, saving time for more attractions!" },
        { icon: "🎁", label: "Get Combo Tickets:", desc: "The London Eye shares ownership with the adjacent 'London Dungeon,' 'Sea Life London Aquarium,' and 'Madame Tussauds.' If you're planning to visit several, Combo Tickets can save you up to 30% — fantastic value!" },
        { icon: "🛸", label: "Rest Assured: The Capsules Don't Sway!", desc: "Many acrophobes worry about safety. The London Eye's capsules use high-tech computer-balanced hydraulic systems — <strong>the floor stays perfectly level at all angles and doesn't sway at all</strong>. There's also a comfortable wooden bench in the center of each capsule. It's very safe and comfortable!" },
        { icon: "🚇", label: "Getting There:", desc: "Take the London Underground Circle, District, or Jubilee line to <strong>Westminster station</strong>. Cross Westminster Bridge and it's a 5-minute walk. Alternatively, take the train to <strong>Waterloo station</strong>, then walk 5 minutes following signs to the South Bank." },
      ],
    },
    info: {
      title: "📊 Quick Info",
      items: [
        { label: "📍 Address", value: "Riverside Building, County Hall, London SE1 7PB" },
        { label: "🕐 Hours", value: "10:00-18:00 (seasonal)" },
        { label: "💰 Price", value: "Adults approx £30-40" },
        { label: "🚇 Transport", value: "Westminster Underground" },
      ],
    },
  },
  yue: {
    meta: {
      tag: "🎡 英倫現代 · 泰晤士河畔",
      title: "轉動在千禧年的浪漫：倫敦眼",
      subtitle: "終極打卡與高空落日觀景攻略",
      author: "純粹旅人",
      date: "June 2026",
    },
    intro: {
      imageAlt: "倫敦眼",
      imageCaption: "▲ 為咗迎接千禧年而建、高達 135 米的全球首座巨型觀景摩天輪 —— 倫敦眼",
      p1: "如果話大笨鐘與國會大廈係倫敦沉穩、不朽的古典靈魂，咁麼佇立在泰晤士河正對岸、宛如一隻巨型懸浮車輪的<strong>倫敦眼（The London Eye / 又稱千禧之輪 Millennium Wheel）</strong>，就係呢座城市最摩登、最魔幻的現代眼睛。呢座高達 135 米的巨型摩天輪，在 2000 年落成時曾係全球最大的摩天輪。當佢以每秒 0.26 米的的速度緩緩轉動，帶你升上泰晤士河的上空，整個倫敦的天際線喺腳下 360 度無死角地慢慢鋪開，嗰一刻的震撼與浪漫，簡直無可比擬。",
      p2: "今日呢篇 Blog 就帶大家登上呢座英倫超級地標，解鎖佢背後啲非常有趣的數字冷知識，奉上攝影師私藏的兩大絕美拍照機位，並送上防排隊的無痛全攻略！",
    },
    sections: [
      {
        id: "history",
        title: "🔮 緩慢轉動的摩天輪：倫敦眼的 3 大歷史密碼",
        funFact: {
          title: "🇬🇧 居然係個「臨時工」？差啲被拆除的命運",
          content: "你很難想像，如今貴為倫敦第一大收費觀光景點的倫敦眼，<strong>當初居然被規劃為只保留 5 年的「臨時建築」</strong>！當時倫敦政府只是想建一座地標來慶祝千禧年的到來，打算喺 2005 年將其拆除。结果因為佢落成後太受全球旅客歡迎，每日門庭若市，更瘋狂為倫敦帶來旅遊收益。最後，地方政府喺強大輿論下決定比佢頒發永久許可證，倫敦眼呢先至得以永久保留，成為泰晤士河畔不可或缺的風景。",
        },
        items: [
          {
            id: "capsules",
            subtitle: "1. 消失的「13號」太空艙之謎",
            content: "倫敦眼一共有的 <strong>32個</strong> 標誌性的全玻璃封閉式流線型「太空艙（Capsules）」，每個太空艙可以容納約 25 名遊客。但如果你細心觀察每一隻太空艙上的編號，會驚奇地發現居然<strong>有 33 號，但係就搵唔到 13 號</strong>！呢係因為西方文化中認為 \"13\" 係一個極度不吉利的數字。為咗顧及遊客的心情與信仰，設計師特意跳過咗 13 號，將第 13 個座艙直接編為 14 號，呢都係英式幽默與貼心的一面。",
          },
          {
            subtitle: "2. 為何 32 個太空艙代表咗成個倫敦？",
            content: "點解唔係 30 個或 35 個，偏偏精準地設計成 32 個太空艙呢？呢背後其實隱藏著一個政治幾何學：32 呢個數字完美代表咗<strong>倫敦的 32 個行政區（London Boroughs）</strong>！坐上太空艙，就彷彿承載著成個倫敦的榮耀升上夜空。",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
          alt: "倫敦眼與西敏橋",
          caption: "▲ 西敏橋（Westminster Bridge）上，最經典的新舊倫敦符號碰撞視角",
        },
      },
    ],
    photoSpots: {
      id: "photo-spots",
      title: "📸 攝影師私藏：如何影出刷爆社交媒體的「倫敦眼大片」",
      intro: "倫敦眼體積極其龐大，站在佢正下方的草地上（Jubilee Gardens）往往只能影到一小段局部的鐵架。想影到完美的同框照，呢兩個機位先至係精華：",
      spots: [
        { icon: "📍", name: "西敏橋中段（Westminster Bridge）：新舊完美同框", desc: "走出 Westminster 地鐵站後踏上西敏橋。站在橋的行人路上、往倫敦眼方向步行約一分鐘。呢度擁有最完美的視覺壓縮感，你可以利用西敏橋古典的綠色鐵欄杆和復古路燈作為前景，將龐大現代的倫敦眼完整地框入鏡頭，影出新舊倫敦強烈對比的英倫風大片。" },
        { icon: "📍", name: "維多利亞堤岸步道（Victoria Embankment）：隔岸靜謐全景", desc: "走到泰晤士河的對岸（大笨鐘嗰一側）沿著河岸步道往大橋方向散步。呢度人潮相對稀少，你可以利用河岸的古老石牆和沿路延伸的英倫行道樹作為構圖。每到入夜後，對岸倫敦眼的彩色燈光完美倒影喺波光粼粼的泰晤士河面上，影出來的照片帶有一種浪漫、深邃的歐式氛圍。" },
      ],
    },
    sunset: {
      id: "sunset",
      title: "🌅 自由行金律：挑選最完美的「轉動 30 分鐘」",
      content: "倫敦眼轉完一圈大約需要 <strong>30分鐘</strong>。想將呢半小時發揮到極致，<strong>最完美的進場時間係「黃昏日落前 15 分鐘」</strong>！呢樣一來，當你的太空艙缓缓升向最高點時，你剛好可以欣賞到成個倫敦被漫天粉橘色夕陽晚霞籠罩的溫柔瞬間；而當太空艙開始後半段下降時，天色剛好步入藍調（Blue Hour），大笨鐘、國會大廈、西敏橋的暖黃色夜燈會喺眼皮底下紛紛點亮。呢 30 分鐘，你同時體驗到咗白晝、黃昏與倫敦繁華的夜景，絕對值回票價！",
    },
    tips: {
      id: "tips",
      title: "💡 倫敦眼 旅遊實用小貼士 (Travel Tips)",
      items: [
        { icon: "🎟️", label: "魔鬼排隊守則：絕對要買「快速通關門票 (Fast Track)」！", desc: "倫敦眼長年高居倫敦排隊最恐怖景點的分秒榜首。如果現場買普通票（Standard Ticket），旺季排隊往往需要 1.5 至 2 小時。強烈建議多花十多英鎊喺官網或者旅遊平台提前購買「Fast Track 快速通關定時門票」，有專用通道，基本上 10 分鐘內就能進艙，省下的時間可以用來逛更多景點！" },
        { icon: "🎁", label: "推薦購買聯票（Combo Tickets）：", desc: "倫敦眼與旁邊的「倫敦地牢 (The London Dungeon)」、「倫敦水族館」以及「杜莎夫人蠟像館」屬於同一個娛樂集團。如果你計劃去其中幾個，購買聯票可以省下高達 30% 嘅門票費用，非常划算。" },
        { icon: "🛸", label: "太空艙內完全不晃，請放心：", desc: "許多恐高的朋友會擔心安全。倫敦眼的太空艙採用了高科技的內置微電腦平衡液壓系統，無論轉到什麼角度，座艙的地板都會<strong>百分之百保持水平且完全不會搖晃</strong>，艙內中央仲設有舒適的木質長椅，非常安全舒服。" },
        { icon: "🚇", label: "交通方式：", desc: "乘搭倫敦地鐵 Circle、District 或 Jubilee 線至 <strong>Westminster（西敏站）</strong>，出站後走過西敏橋，步行約 5 分鐘即可抵達；或者搭到 <strong>Waterloo（滑鐵盧站）</strong>，出站後順著 South Bank（南岸）方向步行 5 分鐘即達。" },
      ],
    },
    info: {
      title: "📊 景點資訊一覽",
      items: [
        { label: "📍 地址", value: "Riverside Building, County Hall, London SE1 7PB" },
        { label: "🕐 開放時間", value: "10:00-18:00（季節性調整）" },
        { label: "💰 費用", value: "成人約 £30-40" },
        { label: "🚇 交通", value: "地鐵 Westminster 站" },
      ],
    },
  },
};

export default function LondonEyePage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const c = content[lang];
  const toc = tocItems[lang];
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} variant="minimal" />
      </div>

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-pink-900/95 to-purple-800/95 backdrop-blur-xl border border-pink-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-pink-500/10">
          <h3 className="text-sm font-bold text-pink-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-pink-200 hover:text-white hover:bg-pink-800/80"
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
          className="inline-flex items-center gap-2 text-pink-400 hover:text-white mb-8 transition-colors bg-pink-800/50 px-4 py-2 rounded-full hover:bg-pink-700/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-pink-500/30">
            {c.meta.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-rose-300 bg-clip-text text-transparent">
            {c.meta.title}
          </h1>
          <h2 className="text-xl text-pink-400 font-semibold mb-4">{c.meta.subtitle}</h2>
          <p className="text-pink-300">{c.meta.date} · 作者：{c.meta.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG"
            alt={c.intro.imageAlt}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-pink-300 text-sm mb-12">{c.intro.imageCaption}</p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="history" dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />

          {c.sections.map((section, sIdx) => (
            <div key={section.id}>
              <h2>{section.title}</h2>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 my-8">
                <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
                  {section.funFact.title}
                </h4>
                <p className="text-pink-100" dangerouslySetInnerHTML={{ __html: section.funFact.content }} />
              </div>

              {section.items.map((item, iIdx) => (
                <div key={iIdx}>
                  <h3 id={item.id}>{item.subtitle}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              ))}

              {section.image && (
                <div className="my-8">
                  <img src={section.image.src} alt={section.image.alt} className="w-full rounded-2xl" />
                  <p className="text-center text-pink-300 text-sm mt-4 mb-8">{section.image.caption}</p>
                </div>
              )}
            </div>
          ))}

          <h2 id={c.photoSpots.id}>{c.photoSpots.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.photoSpots.intro }} />
          <ul className="space-y-4 text-pink-100">
            {c.photoSpots.spots.map((spot, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-pink-400 text-xl">{spot.icon}</span>
                <span><strong>{spot.name}</strong><br/><span dangerouslySetInnerHTML={{ __html: spot.desc }} /></span>
              </li>
            ))}
          </ul>

          <h2 id={c.sunset.id}>{c.sunset.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.sunset.content }} />

          <div id={c.tips.id} className="bg-gradient-to-br from-pink-900/60 to-purple-900/50 border border-pink-400/30 rounded-2xl p-6 my-10">
            <h3 className="text-pink-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.tips.title}
            </h3>
            <ul className="space-y-3 text-pink-100">
              {c.tips.items.map((tip, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-pink-400">{tip.icon}</span>
                  <span><strong>{tip.label}</strong><br/><span dangerouslySetInnerHTML={{ __html: tip.desc }} /></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 my-6">
            {c.info.items.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-800/60 to-purple-800/60 rounded-xl p-4 border border-pink-700/50">
                <span className="text-pink-400 font-bold">{item.label}</span>
                <p className="text-pink-100 text-sm mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <Comments slug="london-eye" />
    </div>
  );
}
