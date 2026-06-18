"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "世紀壁畫", emoji: "🎨" },
    { id: "genesis", title: "創世紀", emoji: "👆" },
    { id: "last-judgment", title: "最後審判", emoji: "⚖️" },
    { id: "rules", title: "鐵律禁忌", emoji: "🚨" },
    { id: "tips", title: "實用攻略", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "世纪壁画", emoji: "🎨" },
    { id: "genesis", title: "创世纪", emoji: "👆" },
    { id: "last-judgment", title: "最后审判", emoji: "⚖️" },
    { id: "rules", title: "铁律禁忌", emoji: "🚨" },
    { id: "tips", title: "实用攻略", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Renaissance Art", emoji: "🎨" },
    { id: "genesis", title: "Genesis", emoji: "👆" },
    { id: "last-judgment", title: "Last Judgment", emoji: "⚖️" },
    { id: "rules", title: "Strict Rules", emoji: "🚨" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "世紀壁畫", emoji: "🎨" },
    { id: "genesis", title: "創世紀", emoji: "👆" },
    { id: "last-judgment", title: "最後審判", emoji: "⚖️" },
    { id: "rules", title: "鐵律禁忌", emoji: "🚨" },
    { id: "tips", title: "實用攻略", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: "藝術朝聖 · 梵蒂岡密境",
    backText: "← 返回 Blog",
    title: "神之筆觸的震撼：西斯汀小堂米開朗基羅壁畫全攻略",
    subtitle: "Sistine Chapel",
    date: "May 2026 · 作者：純粹旅人",
    emoji: "🎨",
    heroCaption: "▲ 米開朗基羅獨自仰頭奮鬥四載完成的世紀天頂畫 —— 《創世紀》（Genesis）",
    intro: `如果說教宗駐地的梵蒂岡是天主教的心臟，那麼位於梵蒂岡博物館最深處的簡樸天主教小堂 —— <strong>西斯汀小堂（Cappella Sistina / Sistine Chapel）</strong>，就是整個人類藝術史上最璀璨的皇冠。這裏不僅是紅衣主教團秘密選舉新教宗（Conclave）的神聖場所，更因為文藝復興巨匠<strong>米開朗基羅（Michelangelo）</strong>留下的兩幅不朽壁畫神作，而成為全世界藝術愛好者一生必去一次的終極聖殿。`,
    intro2: "今日呢篇 Blog 就帶大家深度解讀壁畫背後的歷史與藝術密碼，傳授現場參觀的黃金聖經，並送上絕對不能踩雷的「魔鬼規則」指南！",
    historyTitle: "世紀天才的靈魂吶喊：2 大必看神級壁畫",
    section1Title: "穹頂畫《創世紀》—— 指尖相觸的永恆瞬間",
    section1Content: `西斯汀小堂最著名的莫過於天頂畫《創世紀》。公元 1508 年，原本是雕刻家的米開朗基羅被教宗強烈要求繪製這面長 40 米、寬 14 米的巨大穹頂。他拒絕了助手的幫忙，獨自一人在高聳的鷹架上，長年累月仰著頭、任憑顏料滴落在臉上，近乎失明地畫下了 9 幅聖經故事與 300 多個人物。最核心的一幅<strong>《創造亞當》 (The Creation of Adam)</strong>，上帝與亞當那即將觸碰卻留有微小縫隙的指尖，完美詮釋了生命與神性的誕生，震撼了後世五百年。`,
    section2Title: "祭壇畫《最後的審判》—— 悲壯與救贖的史詩",
    section2Content: `在畫完天頂畫 24 年後，歷經滄桑的米開朗基羅再度回到小堂，在祭壇正後方的整面大牆上創作了《最後的審判》(The Last Judgment)。畫面中基督威嚴地舉起手，決定人類的升天與下地獄。整幅畫充滿了動盪、力量與悲壯美。<strong>藝術細節：</strong>你可以細心尋找被剝皮的聖巴多羅買，他手上拿著的那張人皮面具，據說正是米開朗基羅當年在極度痛苦中畫下的自我肖像。`,
    internalCaption: "▲ 西斯汀小堂內部全景，仰望穹頂感受米開朗基羅筆下的神之國度",
    rulesTitle: "鐵律警告：西斯汀小堂內「兩大最高禁忌」！",
    rulesIntro: "西斯汀小堂的參觀規則全歐洲最為嚴厲，現場會有數十名保安極其嚴格地監督。進去前請務必將以下兩點刻進腦海，否則會被立刻驅逐出場：",
    rule1Title: "絕對嚴禁拍照與錄影（NO PHOTO）：",
    rule1Content: "無論是否開啟閃光燈、無論是用單反還是手機、甚至是偷偷拍一秒，都是<strong>絕對禁止</strong>的！這是為了保護脆弱的古老壁畫免受光線損害，同時保持宗教聖地的莊嚴。",
    rule2Title: "絕對保持徹底肅靜（SILENCE）：",
    rule2Content: "小堂內禁止任何交談、私語或導覽解說。保安會不停用擴音器嚴厲地發出 <em>\"Silence!\"</em> 同 <em>\"No photo!\"</em> 的警告。來到這裡，請用你的眼睛和心靈去感受藝術的震撼。",
    tipsTitle: "自由行金律：如何規劃最完美的「朝聖黃金路線」",
    tipsContent: `西斯汀小堂沒有獨立門票，它包含在<strong>梵蒂岡博物館 (Vatican Museums)</strong> 的門票之內。因為博物館面積龐大，如果沿著普通路線慢慢看，走到最深處的西斯汀小堂時往往已經精疲力竭、且人群爆滿。<strong>聰明人的黃金走法：</strong>早上進館後，直接無視沿途的其他展廳，順著指示牌上的 "Short Route to Sistine Chapel"（快捷路線）一路快步直奔小堂！趁旅行團大軍未到，在清靜的小堂內靜坐 20 分鐘，細細仰望天頂，才不虛此行。之後再倒回去慢慢參觀地圖廊和拉斐爾畫室。`,
    tipsPanelTitle: "西斯汀小堂 旅遊實用小貼士 (Travel Tips)",
    tip1Title: "服裝檢查（Dress Code）：",
    tip1Content: "與曼谷大皇宮類似，這裏同樣有嚴格的宗教服裝限制：肩膀和膝蓋絕對不能外露。嚴禁穿小背心、吊帶衫、超短裙或短褲進場。",
    tip2Title: "必須提前 1-2 個月官網預訂：",
    tip2Content: "現場排隊買票的隊伍往往長達數公里，圍繞著梵蒂岡城牆繞幾圈，夏天甚至會曬到中暑。請務必提前在梵蒂岡博物館官網預約「定時入場門票 (Timed Entrance Ticket)」。",
    tip3Title: "交通方式：",
    tip3Content: "乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong> 或 <strong>Cipro 站</strong>，出站後步行約 10 分鐘即可抵達梵蒂岡博物館的入口大門。",
    commentPrompt: "👇 留言分享：雖然現場完全不能留影，但你認為米開朗基羅用靈魂畫下的震撼，會永遠烙印在你的腦海中嗎？",
    tocTitle: "目錄導覽",
  },
  "zh-CN": {
    meta: "艺术朝圣 · 梵蒂冈密境",
    backText: "← 返回 Blog",
    title: "神之笔触的震撼：西斯汀小堂米开朗基罗壁画全攻略",
    subtitle: "Sistine Chapel",
    date: "May 2026 · 作者：纯粹旅人",
    emoji: "🎨",
    heroCaption: "▲ 米开朗基罗独自仰头奋斗四载完成的世纪天顶画 —— 《创世纪》（Genesis）",
    intro: `如果说教宗驻地的梵蒂冈是天主教的心脏，那么位于梵蒂冈博物馆最深处的简朴天主教小堂 —— <strong>西斯汀小堂（Cappella Sistina / Sistine Chapel）</strong>，就是整个人类艺术史上最璀璨的皇冠。这里不仅是红衣主教团秘密选举新教宗（Conclave）的神圣场所，更因为文艺复兴巨匠<strong>米开朗基罗（Michelangelo）</strong>留下的两幅不朽壁画神作，而成为全世界艺术爱好者一生必去一次的终极圣殿。`,
    intro2: "今天这篇 Blog 就带大家深度解读壁画背后的历史与艺术密码，传授现场参观的黄金圣经，并送上绝对不能踩雷的「魔鬼规则」指南！",
    historyTitle: "世纪天才的灵魂呐喊：2 大必看神级壁画",
    section1Title: "穹顶画《创世纪》—— 指尖相触的永恒瞬间",
    section1Content: `西斯汀小堂最著名的莫过于天顶画《创世纪》。公元 1508 年，原本是雕刻家的米开朗基罗被教宗强烈要求绘制这面长 40 米、宽 14 米的巨大穹顶。他拒绝了助手的帮忙，独自一人在高耸的鹰架上，长年累月仰着头、任凭颜料滴落在脸上，近乎失明地画下了 9 幅圣经故事与 300 多个人物。最核心的一幅<strong>《创造亚当》 (The Creation of Adam)</strong>，上帝与亚当那即将触碰却留有微小缝隙的指尖，完美诠释了生命与神性的诞生，震撼了后世五百年。`,
    section2Title: "祭坛画《最后的审判》—— 悲壮与救赎的史诗",
    section2Content: `在画完天顶画 24 年后，历经沧桑的米开朗基罗再度回到小堂，在祭坛正后方的整面大墙上创作了《最后的审判》(The Last Judgment)。画面中基督威严地举起手，决定人类的升天与下地狱。整幅画充满了动荡、力量与悲壮美。<strong>艺术细节：</strong>你可以细心寻找被剥皮的圣巴多罗买，他手上拿着的那张人皮面具，据说正是米开朗基罗当年在极度痛苦中画下的自我肖像。`,
    internalCaption: "▲ 西斯汀小堂内部全景，仰望穹顶感受米开朗基罗笔下的神之国度",
    rulesTitle: "铁律警告：西斯汀小堂内「两大最高禁忌」！",
    rulesIntro: "西斯汀小堂的参观规则全欧洲最为严厉，现场会有数十名保安极其严格地监督。进去前请务必将以下两点刻进脑海，否则会被立刻驱逐出场：",
    rule1Title: "绝对严禁拍照与录像（NO PHOTO）：",
    rule1Content: "无论是否开启闪光灯、无论是用单反还是手机、甚至偷偷拍一秒，都是<strong>绝对禁止</strong>的！这是为了保护脆弱的古老壁画免受光线损害，同时保持宗教圣地的庄严。",
    rule2Title: "绝对保持彻底肃静（SILENCE）：",
    rule2Content: "小堂内禁止任何交谈、私语或导览解说。保安会不停用扩音器严厉地发出 <em>\"Silence!\"</em> 和 <em>\"No photo!\"</em> 的警告。来到这里，请用你的眼睛和心灵去感受艺术的震撼。",
    tipsTitle: "自由行金律：如何规划最完美的「朝圣黄金路线」",
    tipsContent: `西斯汀小堂没有独立门票，它包含在<strong>梵蒂冈博物馆 (Vatican Museums)</strong> 的门票之内。因为博物馆面积庞大，如果沿着普通路线慢慢看，走到最深处的西斯汀小堂时往往已经精疲力竭、且人群爆满。<strong>聪明人的黄金走法：</strong>早上进馆后，直接无视沿途的其他展厅，顺着指示牌上的 "Short Route to Sistine Chapel"（快捷路线）一路快走直奔小堂！趁旅行团大军未到，在清静的小堂内静坐 20 分钟，细细仰望天顶，才不虚此行。之后再倒回去慢慢参观地图廊和拉斐尔画室。`,
    tipsPanelTitle: "西斯汀小堂 旅游实用小贴士 (Travel Tips)",
    tip1Title: "服装检查（Dress Code）：",
    tip1Content: "与曼谷大皇宫类似，这里同样有严格的宗教服装限制：肩膀和膝盖绝对不能外露。严禁穿小背心、吊带衫、超短裙或短裤进场。",
    tip2Title: "必须提前 1-2 个月官网预订：",
    tip2Content: "现场排队买票的队伍往往长达数公里，围绕着梵蒂冈城墙绕几圈，夏天甚至会晒到中暑。请务必提前在梵蒂冈博物馆官网预约「定时入场门票 (Timed Entrance Ticket)」。",
    tip3Title: "交通方式：",
    tip3Content: "乘坐罗马地铁 A 线（Linea A）至 <strong>Ottaviano 站</strong> 或 <strong>Cipro 站</strong>，出站后步行约 10 分钟即可抵达梵蒂冈博物馆的入口大门。",
    commentPrompt: "👇 留言分享：虽然现场完全不能留影，但你认为米开朗基罗用灵魂画下的震撼，会永远烙印在你的脑海中吗？",
    tocTitle: "目录导览",
  },
  en: {
    meta: "Art Pilgrimage · Vatican Secrets",
    backText: "← Back to Blog",
    title: "The Divine Touch: Complete Guide to Michelangelo's Sistine Chapel Frescoes",
    subtitle: "Sistine Chapel",
    date: "May 2026 · Author: Pure Traveler",
    emoji: "🎨",
    heroCaption: "▲ The ceiling fresco 'Genesis' that Michelangelo painted alone over four years, tilting his head upward",
    intro: `If Vatican City is the heart of Catholicism, then the modest chapel at the heart of the Vatican Museums — the <strong>Sistine Chapel (Cappella Sistina)</strong> — is the crown jewel of all human art history. This sacred space not only serves as the venue for the Conclave, where cardinals secretly elect new Popes, but also houses two immortal masterpieces by Renaissance giant <strong>Michelangelo</strong>, making it the ultimate pilgrimage site for art lovers worldwide.`,
    intro2: "Today this Blog takes you on a deep dive into the history and artistic secrets behind these frescoes, sharing the golden rules for visiting and the essential 'devils rules' you absolutely must not break!",
    historyTitle: "The Soul of a Genius: 2 Must-See Masterpieces",
    section1Title: "The Genesis Ceiling — The Eternal Moment of Touching Fingers",
    section1Content: `The Sistine Chapel is most famous for the ceiling fresco 'Genesis.' In 1508, Pope Julius II commissioned sculptor Michelangelo to paint this massive ceiling spanning 40 meters long and 14 meters wide. Refusing all helpers, Michelangelo worked alone on towering scaffolds, tilting his head upward for years, letting paint drip onto his face, nearly going blind. He painted 9 biblical scenes with over 300 figures. The centerpiece <strong>'The Creation of Adam'</strong> shows God and Adam about to touch fingertips with a tiny gap between them — perfectly capturing the birth of life and divinity,震撼ing viewers for 500 years.`,
    section2Title: "The Last Judgment — An Epic of Tragedy and Redemption",
    section2Content: `Twenty-four years after completing the ceiling, the weathered Michelangelo returned to create 'The Last Judgment' on the entire wall behind the altar. Christ威严地举起手，deciding humanity's salvation or damnation. The painting is filled with turmoil, power, and tragic beauty. <strong>Art Detail:</strong> Look carefully for Saint Bartholomew, depicted flayed. The human skin he holds is said to be Michelangelo's self-portrait, painted in his extreme suffering.`,
    internalCaption: "▲ Panoramic view inside the Sistine Chapel — gaze upward to experience Michelangelo's divine kingdom",
    rulesTitle: "Iron Rules: The 2 Ultimate Taboos Inside the Sistine Chapel!",
    rulesIntro: "The Sistine Chapel has the strictest visiting rules in all of Europe, with dozens of guards strictly monitoring visitors. Before entering, please engrave these two points in your mind, or you will be immediately escorted out:",
    rule1Title: "ABSOLUTELY NO PHOTOS OR VIDEO (NO PHOTO):",
    rule1Content: "Whether flash is on or off, whether using a DSLR or phone, even secretly snapping for one second is <strong>absolutely forbidden!</strong> This protects the fragile ancient frescoes from light damage and maintains the solemnity of this religious site.",
    rule2Title: "ABSOLUTE SILENCE (SILENCE):",
    rule2Content: "No talking, whispering, or guided commentary is allowed inside the chapel. Guards will constantly broadcast strict warnings of <em>\"Silence!\"</em> and <em>\"No photo!\"</em> through loudspeakers. Here, please feel the artistic震撼 with your eyes and heart.",
    tipsTitle: "Traveler's Golden Rules: Planning the Perfect 'Pilgrimage Route'",
    tipsContent: `The Sistine Chapel has no separate ticket — it is included with your <strong>Vatican Museums (Vatican Museums)</strong> ticket. Because the museum is vast, following the regular route means you'll be exhausted and crowds will be thick by the time you reach the chapel. <strong>The smart route:</strong> Upon entering in the morning, ignore all other galleries and follow the "Short Route to Sistine Chapel" signs straight to the chapel! Before the tour groups arrive, sit quietly for 20 minutes gazing at the ceiling — that's the real experience. Then go back to explore the Map Gallery and Raphael Rooms at your leisure.`,
    tipsPanelTitle: "Sistine Chapel Travel Tips",
    tip1Title: "Dress Code:",
    tip1Content: "Similar to Bangkok's Grand Palace, there are strict religious dress codes: shoulders and knees must be covered. Tank tops, spaghetti straps, miniskirts, and shorts are strictly prohibited.",
    tip2Title: "Book 1-2 Months in Advance:",
    tip2Content: "Walk-up ticket lines stretch for kilometers around Vatican walls, winding several loops. In summer, you might literally get heat stroke. Be sure to book 'Timed Entrance Tickets' on the Vatican Museums website in advance.",
    tip3Title: "Getting There:",
    tip3Content: "Take Rome Metro Line A to <strong>Ottaviano</strong> or <strong>Cipro</strong> stations, then walk about 10 minutes to the Vatican Museums entrance.",
    commentPrompt: "👇 Share Your Thoughts: While absolutely no photography is allowed, do you think Michelangelo's soul-stirring creation will forever be etched in your memory?",
    tocTitle: "Table of Contents",
  },
  yue: {
    meta: "藝術朝聖 · 梵蒂岡密境",
    backText: "← 返回 Blog",
    title: "神之筆觸的震撼：西斯汀小堂米開朗基羅壁畫全攻略",
    subtitle: "Sistine Chapel",
    date: "May 2026 · 作者：純粹旅人",
    emoji: "🎨",
    heroCaption: "▲ 米開朗基羅獨自仰頭奮鬥四載完成的世紀天頂畫 —— 《創世紀》（Genesis）",
    intro: `如果話教宗駐地嘅梵蒂岡係天主教嘅心臟，咁位於梵蒂岡博物館最深處嘅簡樸天主教小堂 —— <strong>西斯汀小堂（Cappella Sistina / Sistine Chapel）</strong>，就係整個人類藝術史上最璀璨嘅皇冠。呢度唔單止係紅衣主教團秘密選舉新教宗（Conclave）嘅神聖場所，更因為文藝復興巨匠<strong>米開朗基羅（Michelangelo）</strong>留下嘅兩幅不朽壁畫神作，而成為全世界藝術愛好者一生必去一次嘅終極聖殿。`,
    intro2: "今日呢篇 Blog 就帶大家深度解讀壁畫背後嘅歷史與藝術密碼，傳授現場參觀嘅黃金聖經，並送上絕對唔可以踩雷嘅「魔鬼規則」指南！",
    historyTitle: "世紀天才的靈魂吶喊：2 大必看神級壁畫",
    section1Title: "穹頂畫《創世紀》—— 指尖相觸的永恆瞬間",
    section1Content: `西斯汀小堂最著名嘅莫過於天頂畫《創世紀》。公元 1508 年，本來係雕刻家嘅米開朗基羅被教宗強烈要求繪製呢面長 40 米、寬 14 米嘅巨大穹頂。佢拒絕晒助手幫忙，獨自一人响高聳嘅鷹架上，長年累月仰住頭、任憑顏料滴落响塊面上，近乎失明地畫低咗 9 幅聖經故事與 300 幾個人物。最核心嘅一幅<strong>《創造亞當》 (The Creation of Adam)</strong>，上帝與亞當嗰即將觸碰卻留有微小縫隙嘅指尖，完全詮釋咗生命與神性嘅誕生，震撼咗後世五百年。`,
    section2Title: "祭壇畫《最後的審判》—— 悲壯與救贖的史詩",
    section2Content: `响畫完天頂畫 24 年後，歷經滄桑嘅米開朗基羅再度回到小堂，响祭壇正後方嘅整面大牆上創作咗《最後的審判》(The Last Judgment)。畫面中基督威嚴地举起隻手，決定人類嘅升天與落地獄。整幅畫充滿咗動盪、力量與悲壯美。<strong>藝術細節：</strong>你可以細心尋找被剝皮嘅聖巴多羅買，佢手上攞住嘅嗰張人皮面具，據說正係米開朗基羅當年响極度痛苦中畫下嘅自我肖像。`,
    internalCaption: "▲ 西斯汀小堂內部全景，仰望穹頂感受米開朗基羅筆下嘅神之國度",
    rulesTitle: "鐵律警告：西斯汀小堂內「兩大最高禁忌」！",
    rulesIntro: "西斯汀小堂嘅參觀規則全歐洲最為嚴厲，現場會有幾十名保安極其嚴格地監督。入去之前請務必將以下兩點刻進腦海，否則會被立刻驅逐出场：",
    rule1Title: "絕對嚴禁拍照與錄影（NO PHOTO）：",
    rule1Content: "無論係咪開啟閃光燈、無論係用單反定係手機、甚至偷偷影一秒，都係<strong>絕對禁止</strong>嘅！呢個係為咗保護脆弱嘅古老壁畫免受光線損害，同時保持宗教聖地嘅莊嚴。",
    rule2Title: "絕對保持徹底肅靜（SILENCE）：",
    rule2Content: "小堂內禁止任何交談、私語或導覽解說。保安會不停用擴音器嚴厲地發出 <em>\"Silence!\"</em> 同 <em>\"No photo!\"</em> 嘅警告。來到呢度，請用你嘅眼睛同心靈去感受藝術嘅震撼。",
    tipsTitle: "自由行金律：如何規劃最完美嘅「朝聖黃金路線」",
    tipsContent: `西斯汀小堂冇獨立門票，佢包含响<strong>梵蒂岡博物館 (Vatican Museums)</strong> 嘅門票之內。因為博物館面積龐大，如果沿住普通路線慢慢睇，行到最深處嘅西斯汀小堂時往往已經精疲力竭、且人群爆滿。<strong>聰明人嘅黃金走法：</strong>早上去到博物館之後，直接無視沿途嘅其他展廳，順住指示牌上嘅 "Short Route to Sistine Chapel"（快捷路線）一路快夾準直奔小堂！趁旅行團大軍未到，响清靜嘅小堂內靜坐 20 分鐘，細細仰望天頂，先至唔枉此行。之後再倒回去慢慢參觀地圖廊同拉斐爾畫室。`,
    tipsPanelTitle: "西斯汀小堂 旅遊實用小貼士 (Travel Tips)",
    tip1Title: "服裝檢查（Dress Code）：",
    tip1Content: "與曼谷大皇宮類似，呢度同樣有嚴格嘅宗教服裝限制：肩膀同膝蓋絕對唔可以外露。嚴禁着細背心、吊帶衫、超短裙或短褲進場。",
    tip2Title: "必須提前 1-2 個月官網預訂：",
    tip2Content: "現場排隊買票嘅隊伍往往長達幾公里，圍繞住梵蒂岡城牆繞幾圈，夏天甚至會曬到中暑。請務必提前响梵蒂岡博物館官網預約「定時入場門票 (Timed Entrance Ticket)」。",
    tip3Title: "交通方式：",
    tip3Content: "乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong> 或 <strong>Cipro 站</strong>，出站後步行約 10 分鐘即可抵達梵蒂岡博物館嘅入口大門。",
    commentPrompt: "👇 留言分享：雖然現場完全唔可以留影，但你認為米開朗基羅用靈魂畫下嘅震撼，會永遠烙印响你嘅腦海中嗎？",
    tocTitle: "目錄導覽",
  },
};

export default function SistineChapelPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("intro");

  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#2b2d42]">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f0e6ef] to-[#fcfaf7] backdrop-blur-xl border border-[#b392ac]/40 rounded-2xl p-5 w-60 shadow-2xl shadow-[#735d78]/10">
          <h3 className="text-sm font-bold text-[#735d78] mb-4 flex items-center gap-2">
            📋 {c.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#735d78] to-[#b392ac] text-white shadow-lg shadow-[#735d78]/30"
                      : "text-[#735d78]/70 hover:text-[#735d78] hover:bg-[#f0e6ef]"
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
          href="/blog"
          className="inline-flex items-center gap-2 text-[#735d78] hover:text-[#5d4780] mb-8 transition-colors bg-[#f0e6ef] px-4 py-2 rounded-full hover:bg-[#e6d8e6] border border-[#b392ac]/30"
        >
          {c.backText}
        </Link>

        <header className="text-center py-12 border-b-2 border-[#b392ac]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#735d78] to-[#b392ac] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#735d78]/30">
            {c.meta}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1d2d44] leading-tight">
            🏛️ {c.title}
          </h1>
          <h2 className="text-xl text-[#735d78] font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-[#8d99ae]">{c.date}</p>
        </header>

        {/* Manga Character */}
        <div className="flex justify-center -mt-4 mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl shadow-xl shadow-[#735d78]/30 border-4 border-[#b392ac]/40">
            {c.emoji}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#735d78]/20">
          <img
            src="https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#8d99ae] text-sm mb-12">
          {c.heroCaption}
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: c.intro }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro2 }} />

          <h2 id="genesis" className="text-[#1d2d44] text-2xl font-bold border-b-2 border-[#735d78] pb-2 mt-10 mb-4">
            {c.historyTitle}
          </h2>

          <h3 className="text-[#3d5a80] text-xl font-semibold border-l-4 border-[#1d2d44] pl-3 mt-6 mb-3">
            {c.section1Title}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: c.section1Content }} />

          <h3 id="last-judgment" className="text-[#3d5a80] text-xl font-semibold border-l-4 border-[#1d2d44] pl-3 mt-6 mb-3">
            {c.section2Title}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: c.section2Content }} />

          {/* Vatican Museums Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80"
              alt={c.title}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#8d99ae] text-sm mt-4 mb-8">
              {c.internalCaption}
            </p>
          </div>

          {/* Warning Box */}
          <div id="rules" className="bg-[#fff5f5] border-l-5 border-[#e63946] p-5 rounded-r-lg my-10">
            <h4 className="text-[#e63946] font-bold text-lg mb-3">{c.rulesTitle}</h4>
            <p className="mb-3">{c.rulesIntro}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>{c.rule1Title}</strong> {c.rule1Content}</li>
              <li><strong>{c.rule2Title}</strong> {c.rule2Content}</li>
            </ul>
          </div>

          <h2 id="tips" className="text-[#1d2d44] text-2xl font-bold border-b-2 border-[#735d78] pb-2 mt-10 mb-4">
            {c.tipsTitle}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: c.tipsContent }} />

          {/* Tips Panel */}
          <div className="bg-[#1d2d44] text-[#f1faee] p-6 rounded-lg my-10 shadow-xl">
            <h3 className="text-[#a8dadc] font-bold text-lg mb-4 border-b border-[#457b9d] pb-2">
              {c.tipsPanelTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>{c.tip1Title}</strong> {c.tip1Content}</li>
              <li><strong>{c.tip2Title}</strong> {c.tip2Content}</li>
              <li><strong>{c.tip3Title}</strong> {c.tip3Content}</li>
            </ul>
          </div>

          <p className="text-center font-bold text-[#1d2d44] text-lg mt-12 mb-8">
            {c.commentPrompt}
          </p>
        </article>
      </div>

      <Comments slug="sistine-chapel" />
    </div>
  );
}