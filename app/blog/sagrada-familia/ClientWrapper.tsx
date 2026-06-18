"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "forest", title: "仿生森林", emoji: "🌲" },
    { id: "facades", title: "兩大立面", emoji: "⚔️" },
    { id: "light-show", title: "光影魔術", emoji: "🎨" },
    { id: "photo-spots", title: "拍照機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "forest", title: "仿生森林", emoji: "🌲" },
    { id: "facades", title: "两大立面", emoji: "⚔️" },
    { id: "light-show", title: "光影魔术", emoji: "🎨" },
    { id: "photo-spots", title: "拍照机位", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "forest", title: "Organic Forest", emoji: "🌲" },
    { id: "facades", title: "Two Facades", emoji: "⚔️" },
    { id: "light-show", title: "Light Show", emoji: "🎨" },
    { id: "photo-spots", title: "Photo Spots", emoji: "📸" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "forest", title: "仿生森林", emoji: "🌲" },
    { id: "facades", title: "兩大立面", emoji: "⚔️" },
    { id: "light-show", title: "光影魔術", emoji: "🎨" },
    { id: "photo-spots", title: "拍照機位", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: "🦎 西班牙加泰隆尼亞 · 高第瘋狂美學",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "上帝的建築巨作",
    subtitle: "巴塞隆納聖家堂（Sagrada Família）百年未完工的奇幻光影全攻略",
    date: "June 2026 · 作者：純粹旅人",
    heroCaption: "▲ 始建於 1882 年、人類歷史上唯一一座「未完工」就被列入世界文化遺產的傳奇奇蹟 —— 聖家堂",
    intro: `如果世界建築是一座浩瀚的星空，那麼加泰隆尼亞建築鬼才安東尼·高第（Antoni Gaudí）無疑就是其中最瘋狂、最耀眼的那顆彗星；而他傾注了 43 年心血、甚至連遺體都安葬於此的終極神作，就是矗立在巴塞隆納市中心的<strong>聖家堂（Sagrada Família / 聖家族大教堂）</strong>。這座已經建造了 140 多年、至今仍未完全竣工的魔幻聖殿，徹底顛覆了所有人對「教堂」的刻板印象。高第曾說：「直線屬於人類，而曲線屬於上帝。」當你親自站在這座沒有直線、佈滿奇異仿生雕刻的巨作面前，那種超脫現實的視覺震撼，絕對會讓你头皮发麻。`,
    intro2: "今日呢篇 Blog 就帶大家深度走入這個上帝的建築夢境，解鎖兩大經典立面的藝術秘密，傳授大殿內「彩色交響樂」的夢幻拍攝時刻，並送上絕對要提早搶票的生存指南！",
    forestTitle: "🌲 東方奇幻森林：大殿內不可思議的立體仿生學",
    forestContent: "走進聖家堂大殿內部，你不會看到傳統歐洲教堂那種沉重、壓抑的十字石柱；相反，映入眼簾的是一片無邊無際的<strong>石頭原始森林</strong>！高第巧妙地模仿了自然界的樹木，大殿內無數根粗壯的石柱在頂端如同樹枝般分叉伸展，穩穩地托起上方如繁星點點的交錯穹頂。走在其中，就彷彿漫步在一個充滿神聖禪意的巨型熱帶雨林，人類的想像力在這裡被發揮到了極致。",
    lightTitle: "🎨 絕美點燈騷：當「上帝之光」打翻了造物主的調色盤",
    lightIntro: "聖家堂內部的靈魂，絕對是兩側鋪天蓋地的馬賽克彩色玻璃窗。高第是一位天才的光影魔術師，他將玻璃窗設計成不對稱的色彩光譜：",
    light1Emoji: "🌅",
    light1Title: "東側（誕生立面一側）：",
    light1Content: "採用了清爽的<strong>藍、綠、青色調</strong>玻璃，每當清晨太陽升起，冷色調的光線傾瀉而下，象徵著生命的誕生、晨曦與希望。",
    light2Emoji: "🌇",
    light2Title: "西側（受難立面一側）：",
    light2Content: "則採用了濃烈的<strong>橘、紅、黃色調</strong>玻璃。每當黃昏落日餘暉穿透玻璃，整座大殿瞬間被點燃成一片火紅與溫暖的金黃交織。<strong>最佳參觀時間：</strong>強烈建議預約<strong>下午 15:30 至 17:30 之間</strong>進場，這時候的日落西斜角度最完美，陽光會將繽紛的玻璃色彩 1:1 投影在白色的石柱與地面上，整座森林流光溢彩，美得讓人想落淚！",
    facadesTitle: "⚔️ 生死兩重天：深度解讀 2 大標誌性立面",
    facadesIntro: "聖家堂的外觀由三個宏偉的立面組成，目前已完工並開放參觀的有兩大截然相反的靈魂：",
    facade1Title: "① 誕生立面（Nativity Façade）—— 繁複熱烈的生命頌歌",
    facade1Content: "位於東側，這是唯一在高第生前親自監督完成的立面。外牆的雕刻極其繁複、厚重，遠看就像是用泥土堆砌、正在溶化的奇異城堡；但近看會發現佈滿了栩栩如生的動植物、聖經故事人物以及繁盛的常春藤。這裡充滿了加泰隆尼亞大自然的朝氣，歌頌著基督的降生與萬物的繁衍。",
    facade2Title: "② 受難立面（Passion Façade）—— 冰冷痛苦的幾何線條",
    facade2Content: "位於西側，由後世藝術家接手打造。與誕生立面的繁複熱烈完全相反，這裡採用了大量簡潔、粗獷、甚至帶有稜角的<strong>現代幾何學立體線條</strong>。雕像神情悲壯、骨瘦如柴，完美刻畫了耶穌受難時的痛苦、沉重與死亡的冰冷氣氛。外牆上還刻有一個奇妙的「16宮格數學魔方」，無論橫、直、斜加起來的數字都是 33，正好代表耶穌受難去世時的年齡，細思極恐。",
    interiorCaption: "▲ 聖家堂大殿內部的仿生石柱森林，如繁星般的交錯穹頂",
    photoTitle: "📸 攝影師指南：如何拍出最完整的「聖家堂全景」",
    photoContent: "由於聖家堂體積無比龐大且高聳入雲，站在教堂正下方的馬路上哪怕用廣角鏡頭也只能拍到局部。想要拍到驚艷朋友圈的完美全景，唯一的私藏機位就在大門正對面的<strong>高第廣場（Plaça de Gaudí）</strong>。走到花園小湖水池的對岸，將相機放低貼近水面，利用平靜的湖水作為天然的鏡面，你就可以將整座宏偉的聖家堂和它五彩斑斕的夜燈倒影完美拍入同一個畫面，如夢似幻。",
    tipsTitle: "💡 聖家堂 旅遊實用小貼士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "魔鬼搶票守則：必須提前 3-4 星期官網預訂！",
    tip1Content: "聖家堂**現場是不設任何實體售票處的**，所有門票必須提前在聖家堂官方 App 或網站上實名預約。如果你想體驗「登塔 (Tower Visit)」，名額更加是極少，旺季往往提前一個月就被瘋狂搶空！如果行程定了，請立馬去官網搶票。",
    tip2Emoji: "🏔️",
    tip2Title: "選擇哪一個塔樓登頂？",
    tip2Content: "推薦選擇<strong>「誕生立面塔樓 (Nativity Tower)」</strong>。一來這是高第大師的親手遺作，二來登頂後，你可以走過連接雙塔的狹窄石橋，近距離看清外牆那些精美的水果馬賽克裝飾，最後順著高第標誌性的「仿生蝸牛螺旋石梯」步行下塔，體驗非常奇妙。",
    tip3Emoji: "📱",
    tip3Title: "免費導覽 App 記得下載：",
    tip3Content: "購買門票時已自動包含官方語音導覽（包含非常標準的粵語/國語/英語解說）。進場前置好响手機下載好官方 \"Sagrada Família\" App，並帶備耳機。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "搭乘巴塞隆納地鐵 L2（紫線）或 L5（藍線）直接在 <strong>Sagrada Família 站</strong> 出站，一走出地鐵口抬頭，這座百年魔幻巨作就會直接震撼地聳立在你眼前！",
    info1Label: "📍 地址",
    info1Content: "Carrer de Mallorca, 401, Barcelona",
    info2Label: "🕐 開放時間",
    info2Content: "9:00-20:00（季節性調整）",
    info3Label: "💰 費用",
    info3Content: "成人約 €26-40",
    info4Label: "🚇 交通",
    info4Content: "地鐵 L2/L5 Sagrada Família",
    tocTitle: "目錄導覽",
  },
  "zh-CN": {
    meta: "🦎 西班牙加泰罗尼亚 · 高第疯狂美学",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "上帝的建筑巨作",
    subtitle: "巴塞罗那圣家堂（Sagrada Família）百年未完工的奇幻光影全攻略",
    date: "June 2026 · 作者：纯粹旅人",
    heroCaption: "▲ 始建于 1882 年、人类历史上唯一一座「未完工」就被列入世界文化遗产的传奇奇迹 —— 圣家堂",
    intro: `如果世界建筑是一座浩瀚的星空，那么加泰罗尼亚建筑鬼才安东尼·高第（Antoni Gaudí）无疑就是其中最疯狂、最耀眼的那颗彗星；而他倾注了 43 年心血、甚至连遗体都安葬于此的终极神作，就是矗立在巴塞罗那市中心的<strong>圣家堂（Sagrada Família / 圣家族大教堂）</strong>。这座已经建造了 140 多年、至今仍未完全竣工的魔幻圣殿，彻底颠覆了所有人对「教堂」的刻板印象。高第曾说：「直线属于人类，而曲线属于上帝。」当你亲自站在这座没有直线、布满奇异仿生雕刻的巨作面前，那种超脱现实的视觉震撼，绝对会让你头皮发麻。`,
    intro2: "今天这篇 Blog 就带大家深度走入这个上帝的建筑梦境，解锁两大经典立面的艺术秘密，传授大殿内「彩色交响乐」的梦幻拍摄时刻，并送上绝对要提前抢票的生存指南！",
    forestTitle: "🌲 东方奇幻森林：大殿内不可思议的立体仿生学",
    forestContent: "走进圣家堂大殿内部，你不会看到传统欧洲教堂那种沉重、压抑的十字石柱；相反，映入眼帘的是一片无边无际的<strong>石头原始森林</strong>！高第巧妙地模仿了自然界的树木，大殿内无数根粗壮的石柱在顶端如同树枝般分叉伸展，稳稳地托起上方如繁星点点的交错穹顶。走在其中，就仿佛漫步在一个充满神圣禅意的巨型热带雨林，人类的想象力在这里被发挥到了极致。",
    lightTitle: "🎨 绝美点灯骚：当「上帝之光」打翻了造物主的调色盘",
    lightIntro: "圣家堂内部的灵魂，绝对是两侧铺天盖地的马赛克彩色玻璃窗。高第是一位天才的光影魔术师，他将玻璃窗设计成不对称的色彩光谱：",
    light1Emoji: "🌅",
    light1Title: "东侧（诞生立面一侧）：",
    light1Content: "采用了清爽的<strong>蓝、绿、青色调</strong>玻璃，每当清晨太阳升起，冷色调的光线倾泻而下，象征着生命的诞生、晨曦与希望。",
    light2Emoji: "🌇",
    light2Title: "西侧（受难立面一侧）：",
    light2Content: "则采用了浓烈的<strong>橘、红、黄色调</strong>玻璃。每当黄昏落日余晖穿透玻璃，整座大殿瞬间被点燃成一片火红与温暖的金黄交织。<strong>最佳参观时间：</strong>强烈建议预约<strong>下午 15:30 至 17:30 之间</strong>进场，这时候的日落西斜角度最完美，阳光会将缤纷的玻璃色彩 1:1 投影在白色的石柱与地面上，整座森林流光溢彩，美得让人想落泪！",
    facadesTitle: "⚔️ 生死两重天：深度解读 2 大标志性立面",
    facadesIntro: "圣家堂的外观由三个宏伟的立面组成，目前已完工并开放参观的有两大截然相反的灵魂：",
    facade1Title: "① 诞生立面（Nativity Façade）—— 繁复热烈的生命颂歌",
    facade1Content: "位于东侧，这是唯一在高第生前亲自监督完成的立面。外墙的雕刻极其繁复、厚重，远看就像是用泥土堆砌、正在溶化的奇异城堡；但近看会发现布满了栩栩如生的动植物、圣经故事人物以及繁盛的常春藤。这里充满了加泰罗尼亚大自然的朝气，歌颂着基督的降生与万物的繁衍。",
    facade2Title: "② 受难立面（Passion Façade）—— 冰冷痛苦的几何线条",
    facade2Content: "位于西侧，由后世艺术家接手打造。与诞生立面的繁复热烈完全相反，这里采用了大量简洁、粗犷、甚至带有棱角的<strong>现代几何学立体线条</strong>。雕像神情悲壮、骨瘦如柴，完美刻画了耶稣受难时的痛苦、沉重与死亡的冰冷气氛。外墙上还刻有一个奇妙的「16宫格数学魔方」，无论横、直、斜加起来的数字都是 33，正好代表耶稣受难去世时的年龄，细思极恐。",
    interiorCaption: "▲ 圣家堂大殿内部的仿生石柱森林，如繁星般的交错穹顶",
    photoTitle: "📸 摄影师指南：如何拍出最完整的「圣家堂全景」",
    photoContent: "由于圣家堂体积无比庞大且高耸入云，站在教堂正下方的马路上哪怕用广角镜头也只能拍到局部。想要拍到惊艳朋友圈的完美全景，唯一的私藏机位就在大门正对面的<strong>高第广场（Plaça de Gaudí）</strong>。走到花园小湖水池的对岸，将相机放低贴近水面，利用平静的湖水作为天然的镜面，你就可以将整座宏伟的圣家堂和它五彩斑斓的夜灯倒影完美拍入同一个画面，如梦似幻。",
    tipsTitle: "💡 圣家堂 旅游实用小贴士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "魔鬼抢票守则：必须提前 3-4 星期官网预订！",
    tip1Content: "圣家堂**现场是不设任何实体售票处的**，所有门票必须提前在圣家堂官方 App 或网站上实名预约。如果你想体验「登塔 (Tower Visit)」，名额更是极少，旺季往往提前一个月就被疯狂抢空！如果行程定了，请立马去官网抢票。",
    tip2Emoji: "🏔️",
    tip2Title: "选择哪一个塔楼登顶？",
    tip2Content: "推荐选择<strong>「诞生立面塔楼 (Nativity Tower)」</strong>。一来这是高第大师的亲手遗作，二来登顶后，你可以走过连接双塔的狭窄石桥，近距离看清外墙那些精美的水果马赛克装饰，最后顺着高第标志性的「仿生蜗牛螺旋石梯」步行下塔，体验非常奇妙。",
    tip3Emoji: "📱",
    tip3Title: "免费导览 App 记得下载：",
    tip3Content: "购买门票时已自动包含官方语音导览（包含非常标准的粤语/国语/英语解说）。进场前请先在手机下载好官方 \"Sagrada Família\" App，并带备耳机。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "乘坐巴塞罗那地铁 L2（紫线）或 L5（蓝线）直接在 <strong>Sagrada Família 站</strong> 出站，一走出地铁口抬头，这座百年魔幻巨作就会直接震撼地耸立在你眼前！",
    info1Label: "📍 地址",
    info1Content: "Carrer de Mallorca, 401, Barcelona",
    info2Label: "🕐 开放时间",
    info2Content: "9:00-20:00（季节性调整）",
    info3Label: "💰 费用",
    info3Content: "成人约 €26-40",
    info4Label: "🚇 交通",
    info4Content: "地铁 L2/L5 Sagrada Família",
    tocTitle: "目录导览",
  },
  en: {
    meta: "🦎 Spain Catalonia · Gaudí's Crazy Aesthetics",
    backText: "← Back to Newsflow",
    blogText: "| Blog",
    title: "God's Architectural Masterpiece",
    subtitle: "Barcelona Sagrada Família: The Eternal Unfinished Fantasy Light Show Guide",
    date: "June 2026 · Author: Pure Traveler",
    heroCaption: "▲ Built since 1882, the only 'unfinished' building ever to become a UNESCO World Heritage Site",
    intro: `If world architecture is a vast starry sky, then Catalan architectural genius Antoni Gaudí is undoubtedly the wildest, most dazzling comet; and his ultimate masterpiece, where he devoted 43 years of his life and even had his body buried, is the <strong>Sagrada Família</strong> standing in downtown Barcelona. This magical cathedral, over 140 years in construction and still unfinished, completely subverts everyone's perception of a 'church.' Gaudí once said: 'Straight lines belong to humans, but curves belong to God.' When you stand before this work with no straight lines and bizarre organic carvings, that otherworldly visual shock will absolutely make your scalp tingle.`,
    intro2: "Today this Blog takes you deep into God's architectural dream, unlocking the artistic secrets of two classic facades, teaching the dream-like photography moments of the 'colorful symphony' inside the cathedral, and sharing survival tips for booking tickets way in advance!",
    forestTitle: "🌲 Eastern Fantasy Forest: The Incredible 3D Biomimicry Inside",
    forestContent: "Inside the Sagrada Família, you won't see the heavy, oppressive cross-shaped stone pillars of traditional European churches; instead, what meets your eyes is an endless <strong>stone primeval forest</strong>! Gaudí cleverly mimicked nature's trees — countless sturdy stone pillars branch out at the top like tree branches, firmly supporting the starry intersecting domes above. Walking inside feels like wandering through a giant tropical rainforest full of sacred zen, where human imagination has been pushed to the extreme.",
    lightTitle: "🎨 Stunning Light Show: When 'God's Light' Spills the Creator's Palette",
    lightIntro: "The soul of the Sagrada Família's interior is definitely the overwhelming mosaic stained glass windows on both sides. Gaudí was a genius light-and-shadow magician who designed the windows as asymmetric color spectra:",
    light1Emoji: "🌅",
    light1Title: "East Side (Nativity Facade side):",
    light1Content: "Features refreshing <strong>blue, green, and cyan tones</strong>. When the morning sun rises, cool-toned light pours in, symbolizing the birth of life, dawn, and hope.",
    light2Emoji: "🌇",
    light2Title: "West Side (Passion Facade side):",
    light2Content: "Uses intense <strong>orange, red, and yellow tones</strong>. When sunset glow penetrates the glass, the entire cathedral is instantly ignited into a blend of fiery red and warm golden hues. <strong>Best visiting time:</strong> Strongly recommend booking entry between <strong>3:30-5:30 PM</strong> — the sunset angle is most perfect then, projecting the colorful glass patterns 1:1 onto white pillars and floors, making the entire forest glow beautifully.",
    facadesTitle: "⚔️ Life and Death: Deep Dive into 2 Iconic Facades",
    facadesIntro: "The Sagrada Família's exterior consists of three grand facades, with two dramatically different souls completed and open for visit:",
    facade1Title: "① Nativity Façade — Complex, Passionate Hymn of Life",
    facade1Content: "On the east side, this is the only facade personally supervised by Gaudí during his lifetime. The carvings are extremely intricate and heavy — from afar it looks like a strange castle built from mud and melting; but closer inspection reveals lifelike plants and animals, biblical figures, and flourishing ivy. Full of Catalan nature's vitality, it celebrates Christ's birth and the proliferation of all things.",
    facade2Title: "② Passion Façade — Cold, Painful Geometric Lines",
    facade2Content: "On the west side, created by later artists. Completely opposite to the Nativity Facade's complexity and warmth, it uses large amounts of simple, rough, even angular <strong>modern geometric three-dimensional lines</strong>. The emaciated, tragic-looking statues perfectly depict the pain, heaviness, and cold atmosphere of Jesus' suffering. There's also a fascinating '16-grid mathematical magic square' carved into the wall — every row, column, and diagonal adds up to 33, representing Christ's age at death — terrifying when you think about it.",
    interiorCaption: "▲ The biomimetic stone pillar forest inside the Sagrada Família, with starry intersecting domes",
    photoTitle: "📸 Photographer's Guide: How to Capture the Complete 'Sagrada Família Panorama'",
    photoContent: "Due to the Sagrada Família's enormous size, standing on the street below even with a wide-angle lens only captures a fraction. The only secret photo spot for a stunning panoramic shot is <strong>Plaça de Gaudí</strong> directly opposite the main entrance. Walk to the far side of the small garden lake, place your camera low near the water surface, using the calm lake as a natural mirror — you can capture the entire magnificent Sagrada Família and its colorful night light reflection in one frame, like a dream.",
    tipsTitle: "💡 Sagrada Família Travel Tips",
    tip1Emoji: "🎟️",
    tip1Title: "Devil's Ticket Rules: Book 3-4 Weeks in Advance!",
    tip1Content: "The Sagrada Família <strong>has NO physical ticket counter</strong>. All tickets must be pre-booked with real names on the official app or website. If you want the 'Tower Visit' experience, spots are even rarer — peak season sells out a month in advance! Once your dates are set, book immediately.",
    tip2Emoji: "🏔️",
    tip2Title: "Which Tower to Climb?",
    tip2Content: "Recommend the <strong>'Nativity Tower'</strong>. First, it's Gaudí's original creation. Second, after climbing, you can walk across the narrow stone bridge connecting the twin towers, seeing close-up the exquisite fruit mosaic decorations on the exterior. Finally, descend via Gaudí's iconic 'organic snail spiral stone stairs' — a unique experience.",
    tip3Emoji: "📱",
    tip3Title: "Download the Free Guide App:",
    tip3Content: "Your ticket automatically includes official audio guide (with excellent Cantonese/Mandarin/English narration). Before entering, download the official 'Sagrada Família' app on your phone and bring earphones.",
    tip4Emoji: "🚇",
    tip4Title: "Getting There:",
    tip4Content: "Take Barcelona Metro L2 (purple line) or L5 (blue line) directly to <strong>Sagrada Família station</strong>. The moment you exit the subway and look up, this century-old magical masterpiece will stand breathtakingly before you!",
    info1Label: "📍 Address",
    info1Content: "Carrer de Mallorca, 401, Barcelona",
    info2Label: "🕐 Hours",
    info2Content: "9:00-20:00 (seasonal)",
    info3Label: "💰 Price",
    info3Content: "Adults approx €26-40",
    info4Label: "🚇 Transport",
    info4Content: "Metro L2/L5 Sagrada Família",
    tocTitle: "Table of Contents",
  },
  yue: {
    meta: "🦎 西班牙加泰隆尼亞 · 高第瘋狂美學",
    backText: "← 返回 Newsflow",
    blogText: "| Blog",
    title: "上帝的建築巨作",
    subtitle: "巴塞隆納聖家堂（Sagrada Família）百年未完工的奇幻光影全攻略",
    date: "June 2026 · 作者：純粹旅人",
    heroCaption: "▲ 始建於 1882 年、人類歷史上唯一一座「未完工」就被列入世界文化遺產的傳奇奇蹟 —— 聖家堂",
    intro: `如果世界建築是一座浩瀚的星空，咁加泰隆尼亞建築鬼才安東尼·高第（Antoni Gaudí）無疑就係其中最瘋狂、最耀眼嘅嗰顆彗星；而佢傾注咗 43 年心血、甚至連遺體都安葬於此的終極神作，就係矗立在巴塞隆納市中心的<strong>聖家堂（Sagrada Família / 聖家族大教堂）</strong>。呢座已經建造咗 140 幾年、至今仍未完全竣工的魔幻聖殿，完全顛覆咗所有人對「教堂」的刻板印象。高第曾經話：「直線屬於人類，而曲線屬於上帝。」當你親自站在呢座冇直線、佈滿奇異仿生雕刻的巨作面前，那種超脫現實的視覺震撼，完全會令你头皮发麻。`,
    intro2: "今日呢篇 Blog 就帶大家深度走入呢個上帝的建築夢境，解鎖兩大經典立面的藝術秘密，傳授大殿內「彩色交響樂」的夢幻拍攝時刻，並送上絕對要提早搶票的生存指南！",
    forestTitle: "🌲 東方奇幻森林：大殿內不可思議的立體仿生學",
    forestContent: "走進聖家堂大殿內部，你唔會睇到傳統歐洲教堂嗰種沉重、壓抑的十字石柱；相反，映入眼簾的是一片無邊無際的<strong>石頭原始森林</strong>！高第巧妙地模仿咗自然界的樹木，大殿內無數根粗壯的石柱在頂端如同樹枝般分叉伸展，穩穩地托起上方如繁星點點的交錯穹頂。行响其中，就彷彿漫步响一個充滿神聖禪意的巨型熱帶雨林，人類的想像力响呢度被發揮到咗極致。",
    lightTitle: "🎨 絕美點燈騷：當「上帝之光」打翻咗造物主的調色盤",
    lightIntro: "聖家堂內部的靈魂，絕對係兩側鋪天蓋地的馬賽克彩色玻璃窗。高第係一位天才的光影魔術師，佢將玻璃窗設計成不對稱的色彩光譜：",
    light1Emoji: "🌅",
    light1Title: "東側（誕生立面一側）：",
    light1Content: "採用咗清爽的<strong>藍、綠、青色調</strong>玻璃，每當清晨太陽升起，冷色調的光線傾瀉而下，象徵著生命的誕生、晨曦與希望。",
    light2Emoji: "🌇",
    light2Title: "西側（受難立面一側）：",
    light2Content: "則採用咗濃烈的<strong>橘、紅、黃色調</strong>玻璃。每當黃昏落日餘暉穿透玻璃，整座大殿瞬間被點燃成一片火紅與溫暖的金黃交織。<strong>最佳參觀時間：</strong>強烈建議預約<strong>下午 15:30 至 17:30 之間</strong>進場，呢個時候的日落西斜角度最完美，陽光會將繽紛的玻璃色彩 1:1 投影响白色的石柱與地面上，整座森林流光溢彩，美得令人想喊！",
    facadesTitle: "⚔️ 生死兩重天：深度解讀 2 大標誌性立面",
    facadesIntro: "聖家堂的外觀由三個宏偉的立面組成，目前已完工並開放參觀的有兩大截然相反的靈魂：",
    facade1Title: "① 誕生立面（Nativity Façade）—— 繁複熱烈的生命頌歌",
    facade1Content: "位於東側，呢個係唯一响高第生前親自監督完成的立面。外牆的雕刻極其繁複、厚重，遠睇就好似用泥土堆砌、正在溶化的奇異城堡；但近睇會發現佈滿咗栩栩如生的動植物、聖經故事人物以及繁盛的常春藤。呢度充滿咗加泰隆尼亞大自然的朝氣，歌頌著基督的降生與萬物的繁衍。",
    facade2Title: "② 受難立面（Passion Façade）—— 冰冷痛苦的幾何線條",
    facade2Content: "位於西側，由後世藝術家接手打造。與誕生立面的繁複熱烈完全相反，呢度採用咗大量簡潔、粗獷、甚至帶有稜角的<strong>現代幾何學立體線條</strong>。雕像神情悲壯、骨瘦如柴，完全刻畫咗耶穌受難時的痛苦、沉重與死亡的冰冷氣氛。外牆上仲刻有一個奇妙的「16宮格數學魔方」，無論橫、直、斜加起來的數字都係 33，正好代表耶穌受難去世時的年齡，細思極恐。",
    interiorCaption: "▲ 聖家堂大殿內部的仿生石柱森林，如繁星般的交錯穹頂",
    photoTitle: "📸 攝影師指南：如何影出最完整的「聖家堂全景」",
    photoContent: "由於聖家堂體積極其龐大且高聳入雲，站在教堂正下方的馬路上哪怕用廣角鏡頭都只能影到局部。想要影到驚艷朋友圈的完美全景，唯一的私藏機位就在大門正對面的<strong>高第廣場（Plaça de Gaudí）</strong>。走到花園小湖水池的對岸，將相機放低貼近水面，利用平靜的湖水作為天然的鏡面，你就可以將整座宏偉的聖家堂和佢五彩斑斕的夜燈倒影完美影入同一個畫面，如夢似幻。",
    tipsTitle: "💡 聖家堂 旅遊實用小貼士 (Travel Tips)",
    tip1Emoji: "🎟️",
    tip1Title: "魔鬼搶票守則：必須提前 3-4 星期官網預訂！",
    tip1Content: "聖家堂**現場係唔設任何實體售票處的**，所有門票必須提前响聖家堂官方 App 或網站上實名預約。如果你想體驗「登塔 (Tower Visit)」，名額更加係極少，旺季往往提前一個月就被瘋狂搶空！如果行程定咗，請立即去官網搶票。",
    tip2Emoji: "🏔️",
    tip2Title: "選擇哪一個塔樓登頂？",
    tip2Content: "推薦選擇<strong>「誕生立面塔樓 (Nativity Tower)」</strong>。一來呢個係高第大師的親手遺作，二來登頂後，你可以行過連接雙塔的狹窄石橋，近距離睇清外牆嗰啲精美嘅水果馬賽克裝飾，最後順著高第標誌性的「仿生蝸牛螺旋石梯」步行落塔，體驗非常奇妙。",
    tip3Emoji: "📱",
    tip3Title: "免費導覽 App 記得下載：",
    tip3Content: "購買門票時已自動包含官方語音導覽（包含非常標準的粵語/國語/英語解說）。進場前置好响手機下載好官方 \"Sagrada Família\" App，並帶備耳機。",
    tip4Emoji: "🚇",
    tip4Title: "交通方式：",
    tip4Content: "搭乘巴塞隆納地鐵 L2（紫線）或 L5（藍線）直接响 <strong>Sagrada Família 站</strong> 出站，一走出地鐵口抬頭，呢座百年魔幻巨作就會直接震撼地聳立响你眼前！",
    info1Label: "📍 地址",
    info1Content: "Carrer de Mallorca, 401, Barcelona",
    info2Label: "🕐 開放時間",
    info2Content: "9:00-20:00（季節性調整）",
    info3Label: "💰 費用",
    info3Content: "成人約 €26-40",
    info4Label: "🚇 交通",
    info4Content: "地鐵 L2/L5 Sagrada Família",
    tocTitle: "目錄導覽",
  },
};

export default function SagradaFamiliaPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("forest");

  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-amber-50/95 to-orange-100/95 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-700 mb-4 flex items-center gap-2">
            📋 {c.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-200/50"
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
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors bg-amber-100 px-4 py-2 rounded-full hover:bg-amber-200"
        >
          {c.backText}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-8 ml-6 transition-colors"
        >
          {c.blogText}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            {c.meta}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            {c.title}
          </h1>
          <h2 className="text-xl text-amber-700 font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-stone-500">{c.date}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="/images/sagrada-familia-hero.jpg"
            alt={c.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-stone-500 text-sm mb-12">
          {c.heroCaption}
        </p>

        <article className="prose prose-stone prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: c.intro }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro2 }} />

          <h2 id="forest">{c.forestTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.forestContent }} />

          <div id="light-show" className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-orange-600 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.lightTitle}
            </h4>
            <p className="text-stone-700">
              {c.lightIntro}
            </p>
            <ul className="space-y-3 text-stone-700 mt-4">
              <li className="flex gap-3">
                <span className="text-blue-500 text-xl">{c.light1Emoji}</span>
                <span><strong>{c.light1Title}</strong>{c.light1Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 text-xl">{c.light2Emoji}</span>
                <span><strong>{c.light2Title}</strong>{c.light2Content}</span>
              </li>
            </ul>
          </div>

          <h2 id="facades">{c.facadesTitle}</h2>
          <p>{c.facadesIntro}</p>

          <div className="bg-stone-100 border border-stone-300 rounded-2xl p-6 my-6">
            <h3 className="text-amber-700 font-bold mb-3">{c.facade1Title}</h3>
            <p className="text-stone-700" dangerouslySetInnerHTML={{ __html: c.facade1Content }} />
          </div>

          <div className="bg-stone-100 border border-stone-300 rounded-2xl p-6 my-6">
            <h3 className="text-stone-700 font-bold mb-3">{c.facade2Title}</h3>
            <p className="text-stone-700" dangerouslySetInnerHTML={{ __html: c.facade2Content }} />
          </div>

          <div className="my-8">
            <img
              src="/images/sagrada-familia-interior.jpg"
              alt={c.title}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-stone-500 text-sm mt-4 mb-8">
              {c.interiorCaption}
            </p>
          </div>

          <h2 id="photo-spots">{c.photoTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: c.photoContent }} />

          <div id="tips" className="bg-gradient-to-br from-stone-800 to-stone-900 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {c.tipsTitle}
            </h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex gap-3">
                <span className="text-amber-400">{c.tip1Emoji}</span>
                <span><strong>{c.tip1Title}</strong><br/>{c.tip1Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">{c.tip2Emoji}</span>
                <span><strong>{c.tip2Title}</strong><br/>{c.tip2Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">{c.tip3Emoji}</span>
                <span><strong>{c.tip3Title}</strong>{c.tip3Content}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">{c.tip4Emoji}</span>
                <span><strong>{c.tip4Title}</strong>{c.tip4Content}</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">{c.info1Label}</span>
              <p className="text-stone-700 text-sm mt-1">{c.info1Content}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">{c.info2Label}</span>
              <p className="text-stone-700 text-sm mt-1">{c.info2Content}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">{c.info3Label}</span>
              <p className="text-stone-700 text-sm mt-1">{c.info3Content}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-300">
              <span className="text-amber-700 font-bold">{c.info4Label}</span>
              <p className="text-stone-700 text-sm mt-1">{c.info4Content}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="sagrada-familia" />
    </div>
  );
}