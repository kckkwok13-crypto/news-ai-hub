"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "treasures", title: "鎮殿之寶", emoji: "⚜️" },
    { id: "climb", title: "登頂攻略", emoji: "🧗" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🏛️" },
    { id: "treasures", title: "镇殿之宝", emoji: "⚜️" },
    { id: "climb", title: "登顶攻略", emoji: "🧗" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🏛️" },
    { id: "treasures", title: "Treasures", emoji: "⚜️" },
    { id: "climb", title: "Dome Climb", emoji: "🧗" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "🏛️" },
    { id: "treasures", title: "鎮殿之寶", emoji: "⚜️" },
    { id: "climb", title: "登頂攻略", emoji: "🧗" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: "🏛️ 世紀建築 · 藝術朝聖",
    backText: "← 返回 Blog",
    title: "登臨信仰與藝術的最高峰：聖伯多祿大殿深度探秘與登頂攻略",
    subtitle: "St. Peter's Basilica",
    date: "May 2026 · 作者：純粹旅人",
    heroCaption: "▲ 站在大殿巨型穹頂之巔，俯瞰由貝尼尼設計、如兩隻巨大手臂環抱的「聖伯多祿廣場」鑰匙造型全景",
    intro: `無論你是否擁有天主教信仰，當你踏入<strong>聖伯多祿大殿（St. Peter's Basilica / 又稱聖彼得大教堂）</strong>的那一刻，那種直擊心靈的宏偉與神聖感，絕對會讓你目瞪口呆。這座歷時 120 年才建造完成、可容納超過六萬人的天主教朝聖狂熱中心，是全球面積最大、地位最神聖的教堂。這裏集合了文藝復興與巴洛克時期無數大師（布拉曼特、拉斐爾、米開朗基羅、貝尼尼）的畢生心血，是當之無愧的藝術與建築奇蹟。`,
    intro2: "今天呢篇 Blog 就帶大家走進這座宗教聖殿，解鎖三大「鎮殿之寶」的歷史細節，並送上完美的「登頂俯瞰上帝視角」超實用購票與排隊攻略！",
    treasuresTitle: "朝聖大師足跡：不可不知的三大鎮殿之寶",
    treasuresIntro: "穿過宏偉的大門步入大殿，高聳的穹頂、繁複的金箔與五彩斑斕的巨幅馬賽克壁畫交織在一起。在這裏，有三件殿堂級藝術品你一定要停下腳步細細品味：",
    treasure1Title: "米開朗基羅 24 歲神作 —— 《哀悼基督》（Pietà）",
    treasure1Content: `位於大殿右手邊的第一個小堂裏，護欄後保護著米開朗基羅最溫柔的雕刻傑作。他用堅硬的大理石，雕刻出聖母瑪利亞懷抱著剛從十字架上放下的基督。聖母神情悲傷而祥和，其衣服的褶皺與基督大理石肌肉的鬆弛感，細緻得如同真實肌膚。<strong>歷史祕辛：</strong>這也是米開朗基羅一生中**唯一一件有親筆簽名**的作品（簽在聖母胸前的衣帶上）。`,
    treasure2Title: "貝尼尼萬鈞雷霆之作 —— 《青銅華蓋》（Baldacchino）",
    treasure2Content: "正對著大殿正中央、位於祭壇上方的是高達 29 米（相當於 10 層樓高）的巨型青銅華蓋。這座由巴洛克大師貝尼尼設計的傑作，用了足足 37 噸青銅打造（材料甚至取自羅馬萬神殿）。它四根螺旋狀的巨柱直插雲霄，頂部雕刻著華麗的浮雕與天使，華蓋正下方就是聖伯多祿（聖彼得）的陵墓所在地，氣勢驚人。",
    treasure3Title: "聖伯多祿寶座（Cathedra Petri） —— 聖光下的榮耀",
    treasure3Content: "緊鄰華蓋後方的祭壇深處，同樣是由貝尼尼設計的聖伯多祿寶座。鍍金的青銅寶座被四位教會聖師高高托起，而最上方是一面極其精美的黃色透光彩色玻璃，中央雕刻著一隻象徵聖靈的白鴿。每當下午陽光穿透這面玻璃灑落在大殿內，金光四射，彷彿神蹟降臨。",
    internalCaption: "▲ 午後陽光形成巨大的「上帝之光」（耶穌光），從米開朗基羅設計的巨型天窗傾瀉而下",
    climbTitle: "終極冒險：挑戰 551 級樓梯！聖殿登頂指南",
    climbContent: `來到聖伯多祿大殿，除了在地面的大殿參拜，最精彩的體驗莫過於**「挑戰登頂 (Cupola Climb)」**！登頂分為兩個階段：你可以選擇乘搭電梯或者純步行先來到穹頂底部的內部看台，在這裡你可以近距離俯瞰大殿內部，並看清那些在地面看不清的巨幅馬賽克拼貼畫。接著，你必須踏上最後 320 級**越來越窄、甚至需要側身前行的傾斜迴旋石梯**。當你終於推開大門來到露天觀景台，眼前那一幅全無遮擋、向著羅馬無限延伸的壯麗全景，絕對會讓你覺得大汗淋漓的攀登完全物超所值！`,
    tipsTitle: "聖伯多祿大殿 旅遊實用小貼士 (Travel Tips)",
    tip1Title: "大殿免費！但必須提早排隊：",
    tip1Content: "聖伯多祿大殿本身是**完全免費參觀**的。但也正因如此，廣場上的安檢隊伍每天都人山人海，繞著廣場排幾圈。<strong>強烈建議在早上 7:00 至 7:30 抵達廣場</strong>，這時候幾乎不需要排隊，進場最無痛！",
    tip2Title: "服裝限制極度嚴格：",
    tip2Content: "與梵蒂岡博物館和西斯汀小堂一樣，短褲、迷你裙、吊帶背心一律不准入內。肩膀和膝蓋必須完全遮蓋，現場檢查非常嚴格。",
    tip3Title: "登頂購票須知：",
    tip3Content: "登頂是需要另外付費的（乘搭電梯至半山再爬樓梯約 10 歐元；全程純爬樓梯約 8 歐元）。登頂售票處位於進大殿安檢後的右手邊，目前現場只接受現金或部分信用卡。",
    tip4Title: "交通方式：",
    tip4Content: "乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong>，出站後跟著指示牌步行約 10-12 分鐘即可穿過協和大道抵達聖伯多祿廣場。",
    commentPrompt: "👇 留言分享：你更想欣賞米開朗基羅二十多歲時雕刻的《哀悼基督》，還是想挑戰那 551 級狹窄的登頂樓梯呢？",
    tocTitle: "目錄導覽",
  },
  "zh-CN": {
    meta: "🏛️ 世纪建筑 · 艺术朝圣",
    backText: "← 返回 Blog",
    title: "登临信仰与艺术的最高峰：圣伯多禄大殿深度探秘与登顶攻略",
    subtitle: "St. Peter's Basilica",
    date: "May 2026 · 作者：纯粹旅人",
    heroCaption: "▲ 站在大殿巨型穹顶之巅，俯瞰由贝尼尼设计、如两只巨大手臂环抱的「圣伯多禄广场」钥匙造型全景",
    intro: `无论你是否拥有天主教信仰，当你踏入<strong>圣伯多禄大殿（St. Peter's Basilica / 又称圣彼得大教堂）</strong>的那一刻，那种直击心灵的宏伟与神圣感，绝对会让你目瞪口呆。这座历时 120 年才建造完成、可容纳超过六万人的天主教朝圣狂热中心，是全球面积最大、地位最神圣的教堂。这里集合了文艺复兴与巴洛克时期无数大师（布拉曼特、拉斐尔、米开朗基罗、贝尼尼）的毕生心血，是当之无愧的艺术与建筑奇迹。`,
    intro2: "今天这篇 Blog 就带大家走进这座宗教圣殿，解锁三大「镇殿之宝」的历史细节，并送上完美的「登顶俯瞰上帝视角」超实用购票与排队攻略！",
    treasuresTitle: "朝圣大师足迹：不可不知的三大镇殿之宝",
    treasuresIntro: "穿过宏伟的大门步入大殿，高耸的穹顶、繁复的金箔与五彩斑斓的巨幅马赛克壁画交织在一起。在这里，有三件殿堂级艺术品你一定要停下脚步细细品味：",
    treasure1Title: "米开朗基罗 24 岁神作 —— 《哀悼基督》（Pietà）",
    treasure1Content: `位于大殿右手边的第一个小堂里，护栏后保护着米开朗基罗最温柔的雕刻杰作。他用坚硬的大理石，雕刻出圣母玛利亚怀抱刚从十字架上放下的基督。圣母神情悲伤而祥和，其衣服的褶皱与基督大理石肌肉的松弛感，细致得如同真实肌肤。<strong>历史秘辛：</strong>这也是米开朗基罗一生中**唯一一件有亲笔签名**的作品（签在圣母胸前的衣带上）。`,
    treasure2Title: "贝尼尼万钧雷霆之作 —— 《青铜华盖》（Baldacchino）",
    treasure2Content: "正对着大殿正中央、位于祭坛上方的是高达 29 米（相当于 10 层楼高）的巨型青铜华盖。这座由巴洛克大师贝尼尼设计的杰作，用了足足 37 吨青铜打造（材料甚至取自罗马万神殿）。它四根螺旋状的巨柱直插云霄，顶部雕刻着华丽的浮雕与天使，华盖正下方就是圣伯多禄（圣彼得）的陵墓所在地，气势惊人。",
    treasure3Title: "圣伯多禄宝座（Cathedra Petri） —— 圣光下的荣耀",
    treasure3Content: "紧邻华盖后方的祭坛深处，同样是由贝尼尼设计的圣伯多禄宝座。镀金的青铜宝座被四位教会圣师高高托起，而最上方是一面极其精美的黄色透光彩色玻璃，中央雕刻着一只象征圣灵的白鸽。每当下午阳光穿透这面玻璃洒落在大殿内，金光四射，仿佛神迹降临。",
    internalCaption: "▲ 午后阳光形成巨大的「上帝之光」（耶稣光），从米开朗基罗设计的巨型天窗倾泻而下",
    climbTitle: "终极冒险：挑战 551 级楼梯！圣殿登顶指南",
    climbContent: `来到圣伯多禄大殿，除了在地面的大殿参拜，最精彩的体验莫过于**「挑战登顶 (Cupola Climb)」**！登顶分为两个阶段：你可以选择搭乘电梯或者纯步行先来到穹顶底部的内部看台，在这里你可以近距离俯瞰大殿内部，并看清那些在地面看不清的巨幅马赛克拼贴画。接着，你必须踏上最后 320 级**越来越窄、甚至需要侧身前行的倾斜回旋石梯**。当你终于推开门来到露天观景台，眼前那一幅全无遮挡、向罗马无限延伸的壮丽全景，绝对会让你觉得大汗淋漓的攀登完全物超所值！`,
    tipsTitle: "圣伯多禄大殿 旅游实用小贴士 (Travel Tips)",
    tip1Title: "大殿免费！但必须提早排队：",
    tip1Content: "圣伯多禄大殿本身是**完全免费参观**的。但也正因如此，广场上的安检队伍每天都人山人海，绕着广场排几圈。<strong>强烈建议在早上 7:00 至 7:30 抵达广场</strong>，这时候几乎不需要排队，进场最轻松！",
    tip2Title: "服装限制极度严格：",
    tip2Content: "与梵蒂冈博物馆和西斯汀小堂一样，短裤、迷你裙、吊带背心一律不准入内。肩膀和膝盖必须完全遮盖，现场检查非常严格。",
    tip3Title: "登顶购票须知：",
    tip3Content: "登顶是需要另外付费的（搭乘电梯至半山再爬楼梯约 10 欧元；全程纯爬楼梯约 8 欧元）。登顶售票处位于进大殿安检后的右手边，目前现场只接受现金或部分信用卡。",
    tip4Title: "交通方式：",
    tip4Content: "乘坐罗马地铁 A 线（Linea A）至 <strong>Ottaviano 站</strong>，出站后跟着指示牌步行约 10-12 分钟即可穿过协和大道抵达圣伯多禄广场。",
    commentPrompt: "👇 留言分享：你更想欣赏米开朗基罗二十多岁时雕刻的《哀悼基督》，还是想挑战那 551 级狭窄的登顶楼梯呢？",
    tocTitle: "目录导览",
  },
  en: {
    meta: "🏛️ Century Architecture · Art Pilgrimage",
    backText: "← Back to Blog",
    title: "Scaling the Peak of Faith and Art: St. Peter's Basilica Deep Dive & Dome Climb Guide",
    subtitle: "St. Peter's Basilica",
    date: "May 2026 · Author: Pure Traveler",
    heroCaption: "▲ From the top of the massive dome, gaze upon Bernini's key-shaped St. Peter's Square stretching out like two giant arms",
    intro: `Whether or not you have Catholic faith, when you step into <strong>St. Peter's Basilica</strong>, that直击心灵的宏伟与神圣感 will leave you speechless. This cathedral, 120 years in the making and seating over 60,000, is the world's largest and most sacred church. It houses the life works of Renaissance and Baroque masters (Bramante, Raphael, Michelangelo, Bernini) — a true wonder of art and architecture.`,
    intro2: "Today this Blog takes you into this holy site, unlocking the historical details of three 'Treasures of the Basilica' and sharing the ultimate guide for climbing to the 'God's Eye View' from the dome!",
    treasuresTitle: "Following the Masters: 3 Must-See Treasures",
    treasuresIntro: "Passing through the grand doors into the basilica, towering domes, intricate gold leaf, and colorful mosaic frescoes交织在一起. Here are three masterpieces you must停下来细细品味：",
    treasure1Title: "Michelangelo's Masterpiece at 24 — 'Pietà'",
    treasure1Content: `In the first chapel on the right side of the basilica, protected behind a railing, sits Michelangelo's most tender sculpture. He carved from hard marble the Virgin Mary holding Christ just removed from the cross. Mary's sorrowful yet peaceful expression, the folds of her clothing, and Christ's relaxed marble muscles are so detailed they resemble real skin. <strong>Historical Secret:</strong> This is the <strong>only work Michelangelo ever signed</strong> — his signature appears on the sash across Mary's chest.`,
    treasure2Title: "Bernini's Thunderous Masterwork — 'Baldacchino'",
    treasure2Content: "Standing at the center of the basilica above the altar is the massive 29-meter (10-story tall) bronze canopy. This Baroque master Bernini's creation used a full 37 tons of bronze (material even sourced from Rome's Pantheon). Its four spiral columns soar skyward, topped with elaborate reliefs and angels. Directly beneath the canopy lies the tomb of Saint Peter, creating an breathtaking sight.",
    treasure3Title: "Cathedra Petri — Glory in Holy Light",
    treasure3Content: "Behind the canopy in the depths of the altar sits another Bernini design: theCathedra Petri. The gilded bronze throne is held high by four Church Fathers, with an exquisite yellow translucent stained glass above featuring a white dove symbolizing the Holy Spirit. When afternoon sunlight streams through this glass into the basilica, golden light scatters everywhere, as if a miracle is occurring.",
    internalCaption: "▲ Afternoon sun creates massive 'God Rays' pouring through Michelangelo's giant skylight",
    climbTitle: "The Ultimate Adventure: Conquer 551 Steps! Dome Climb Guide",
    climbContent: `Beyond visiting the basilica at ground level, the most exciting experience is the <strong>'Cupola Climb'</strong>! The climb has two phases: First, take the elevator or stairs to the inner observation deck at the base of the dome, where you can closely view the basilica interior and see the large mosaic artworks impossible to appreciate from below. Then, tackle the final 320 steps that become <strong>increasingly narrow, even requiring sideways shuffling</strong>. When you finally push open the door to the open-air observation deck, the unobstructed panoramic view stretching infinitely toward Rome will make every drop of sweat completely worthwhile!`,
    tipsTitle: "St. Peter's Basilica Travel Tips",
    tip1Title: "Basilica is FREE! But arrive early:",
    tip1Content: "St. Peter's Basilica itself is <strong>completely free to visit</strong>. But precisely because of this, security lines around the square are enormous daily, wrapping around several times. <strong>Strongly recommended to arrive at the square between 7:00-7:30 AM</strong> — you'll skip the queues entirely!",
    tip2Title: "Extremely strict dress code:",
    tip2Content: "Like the Vatican Museums and Sistine Chapel, shorts, miniskirts, and tank tops are strictly prohibited. Shoulders and knees must be completely covered. Security checks are very strict.",
    tip3Title: "Dome climb tickets:",
    tip3Content: "Dome climbing requires separate payment (elevator to halfway then stairs ~10 euros; stairs only ~8 euros). The ticket office is on the right side after entering through security. Currently only cash or some credit cards accepted.",
    tip4Title: "Getting there:",
    tip4Content: "Take Rome Metro Line A to <strong>Ottaviano</strong> station, then follow signs walking 10-12 minutes through Via della Conciliazione to St. Peter's Square.",
    commentPrompt: "👇 Share Your Thoughts: Would you rather admire Michelangelo's 'Pietà' carved when he was in his twenties, or challenge the 551 narrow dome steps?",
    tocTitle: "Table of Contents",
  },
  yue: {
    meta: "🏛️ 世紀建築 · 藝術朝聖",
    backText: "← 返回 Blog",
    title: "登臨信仰與藝術的最高峰：聖伯多祿大殿深度探秘與登頂攻略",
    subtitle: "St. Peter's Basilica",
    date: "May 2026 · 作者：純粹旅人",
    heroCaption: "▲ 站在大殿巨型穹頂之巔，俯瞰由貝尼尼設計、如兩隻巨大手臂環抱的「聖伯多祿廣場」鑰匙造型全景",
    intro: `無論你是否擁有天主教信仰，當你踏入<strong>聖伯多祿大殿（St. Peter's Basilica / 又稱聖彼得大教堂）</strong>嗰一刻，那種直擊心靈嘅宏偉與神聖感，完全會令你目定口呆。呢座歷時 120 年先至建成、容納超過六萬人嘅天主教朝聖狂熱中心，係全球面積最大、地位最神聖嘅教堂。呢度集合咗文藝復興與巴洛克時期無數大師（布拉曼特、拉斐爾、米開朗基羅、貝尼尼）嘅畢生心血，係當之無愧嘅藝術與建築奇蹟。`,
    intro2: "今日呢篇 Blog 就帶大家走進呢座宗教聖殿，解鎖三大「鎮殿之寶」嘅歷史細節，並送上完美嘅「登頂俯瞰上帝視角」超實用購票與排隊攻略！",
    treasuresTitle: "朝聖大師足跡：不可不知的三大鎮殿之寶",
    treasuresIntro: "穿過宏偉嘅大門步入大殿，高聳嘅穹頂、繁複嘅金箔與五彩斑斕嘅巨幅馬賽克壁畫交織响一起。响呢度，有三件殿堂級藝術品你一定要停下腳步細細品味：",
    treasure1Title: "米開朗基羅 24 歲神作 —— 《哀悼基督》（Pietà）",
    treasure1Content: `位於大殿右手邊嘅第一個小堂裏面，護欄後保護著米開朗基羅最溫柔嘅雕刻傑作。佢用堅硬嘅大理石，雕刻出聖母瑪利亞懷抱著剛從十字架上放低嘅基督。聖母神情悲傷而祥和，其衣服嘅褶皺與基督大理石肌肉嘅鬆弛感，細緻得如同真實肌膚。<strong>歷史祕辛：</strong>呢個亦都係米開朗基羅一生中**唯一一件有親筆簽名**嘅作品（簽响聖母胸前嘅衣帶上）。`,
    treasure2Title: "貝尼尼萬鈞雷霆之作 —— 《青銅華蓋》（Baldacchino）",
    treasure2Content: "正對著大殿正中央、位於祭壇上方嘅係高達 29 米（相等於 10 層樓高）嘅巨型青銅華蓋。呢座由巴洛克大師貝尼尼設計嘅傑作，用咗足足 37 噸青銅打造（材料甚至取自羅馬萬神殿）。佢四根螺旋狀嘅巨柱直插雲霄，頂部雕刻著華麗嘅浮雕與天使，華蓋正下方就係聖伯多祿（聖彼得）嘅陵墓所在地，氣勢驚人。",
    treasure3Title: "聖伯多祿寶座（Cathedra Petri） —— 聖光下的榮耀",
    treasure3Content: "緊鄰華蓋後方嘅祭壇深處，同樣係由貝尼尼設計嘅聖伯多祿寶座。鍍金嘅青銅寶座被四位教會聖師高高托起，而最上方係一面極其精美嘅黃色透光彩色玻璃，中央雕刻著一隻象徵聖靈嘅白鴿。每當下午陽光穿透呢面玻璃灑落响大殿內，金光四射，彷彿神蹟降臨。",
    internalCaption: "▲ 午後陽光形成巨大嘅「上帝之光」（耶穌光），從米開朗基羅設計嘅巨型天窗傾瀉而下",
    climbTitle: "終極冒險：挑戰 551 級樓梯！聖殿登頂指南",
    climbContent: `來到聖伯多祿大殿，除咗响地面嘅大殿參拜，最精彩嘅體驗莫過於**「挑戰登頂 (Cupola Climb)」**！登頂分為兩個階段：你可以選擇乘搭電梯或者純步行先來到穹頂底部嘅內部看台，响呢度你可以近距離俯瞰大殿內部，並看清嗰啲响地面睇唔清嘅巨幅馬賽克拼貼畫。跟著，你必須踏上最後 320 級**越來越窄、甚至需要側身前行的傾斜迴旋石梯**。當你終於推開大門來到露天觀景台，眼前嗰一幅全無遮擋、向著羅馬無限延伸的壯麗全景，完全會令你覺得大汗淋漓的攀登完全物超所值！`,
    tipsTitle: "聖伯多祿大殿 旅遊實用小貼士 (Travel Tips)",
    tip1Title: "大殿免費！但必須提早排隊：",
    tip1Content: "聖伯多祿大殿本身係**完全免費參觀**嘅。但亦都正因如此，廣場上嘅安檢隊伍每天都人山人海，繞著廣場排幾圈。<strong>強烈建議响早上 7:00 至 7:30 抵達廣場</strong>，呢個時候幾乎不需要排隊，進場最無痛！",
    tip2Title: "服裝限制極度嚴格：",
    tip2Content: "與梵蒂岡博物館和西斯汀小堂一樣，短褲、迷你裙、吊帶背心一律不准入內。肩膀和膝蓋必須完全遮蓋，現場檢查非常嚴格。",
    tip3Title: "登頂購票須知：",
    tip3Content: "登頂是需要另外付費的（乘搭電梯至半山再爬樓梯約 10 歐元；全程純爬樓梯約 8 歐元）。登頂售票處位於進大殿安檢後的右手邊，目前現場只接受現金或部分信用卡。",
    tip4Title: "交通方式：",
    tip4Content: "乘搭羅馬地鐵 A 線（Linea A）至 <strong>Ottaviano 站</strong>，出站後跟著指示牌步行約 10-12 分鐘即可穿過協和大道抵達聖伯多祿廣場。",
    commentPrompt: "👇 留言分享：你更想欣賞米開朗基羅二十幾歲時雕刻的《哀悼基督》，還是想挑戰那 551 級狹窄的登頂樓梯呢？",
    tocTitle: "目錄導覽",
  },
};

export default function StPetersBasilicaPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("intro");

  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2b2b2b]">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f1ea] to-[#faf9f6] backdrop-blur-xl border border-[#c5a059]/40 rounded-2xl p-5 w-60 shadow-2xl shadow-[#af8b44]/10">
          <h3 className="text-sm font-bold text-[#af8b44] mb-4 flex items-center gap-2">
            📋 {c.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#1a2530] to-[#c5a059] text-white shadow-lg shadow-[#c5a059]/30"
                      : "text-[#1a2530]/70 hover:text-[#1a2530] hover:bg-[#f4f1ea]"
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
          className="inline-flex items-center gap-2 text-[#af8b44] hover:text-[#8b7355] mb-8 transition-colors bg-[#f4f1ea] px-4 py-2 rounded-full hover:bg-[#ede5d5] border border-[#c5a059]/30"
        >
          {c.backText}
        </Link>

        <header className="text-center py-12 border-b-2 border-[#c5a059]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a2530] to-[#af8b44] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#c5a059]/30">
            {c.meta}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2530] leading-tight">
            ⚜️ {c.title}
          </h1>
          <h2 className="text-xl text-[#af8b44] font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-[#94a3b8]">{c.date}</p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#c5a059]/20">
          <img
            src="https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-[#5c6b73] text-sm mb-12">
          {c.heroCaption}
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" dangerouslySetInnerHTML={{ __html: c.intro }} />
          <p dangerouslySetInnerHTML={{ __html: c.intro2 }} />

          <h2 id="treasures" className="text-[#1a2530] text-2xl font-bold border-b-2 border-[#c5a059] pb-2 mt-10 mb-4">
            {c.treasuresTitle}
          </h2>
          <p>{c.treasuresIntro}</p>

          <div className="bg-[#f4f1ea] border-l-5 border-[#c5a059] p-5 rounded-r-lg my-8">
            <h4 className="text-[#1a2530] font-bold text-lg mb-3">{c.treasure1Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: c.treasure1Content }} />
          </div>

          <h3 className="text-[#34495e] text-xl font-semibold border-l-4 border-[#c5a059] pl-3 mt-6 mb-3">
            {c.treasure2Title}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: c.treasure2Content }} />

          <h3 className="text-[#34495e] text-xl font-semibold border-l-4 border-[#c5a059] pl-3 mt-6 mb-3">
            {c.treasure3Title}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: c.treasure3Content }} />

          {/* Interior Light Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80"
              alt={c.title}
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#5c6b73] text-sm mt-4 mb-8">
              {c.internalCaption}
            </p>
          </div>

          <h2 id="climb" className="text-[#1a2530] text-2xl font-bold border-b-2 border-[#c5a059] pb-2 mt-10 mb-4">
            🧗‍♂️ {c.climbTitle}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: c.climbContent }} />

          {/* Tips Panel */}
          <div id="tips" className="bg-[#1a2530] text-[#f8fafc] p-6 rounded-lg my-10 shadow-xl">
            <h3 className="text-[#c5a059] font-bold text-lg mb-4 border-b border-[#334155] pb-2">
              {c.tipsTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>{c.tip1Title}</strong> {c.tip1Content}</li>
              <li><strong>{c.tip2Title}</strong> {c.tip2Content}</li>
              <li><strong>{c.tip3Title}</strong> {c.tip3Content}</li>
              <li><strong>{c.tip4Title}</strong> {c.tip4Content}</li>
            </ul>
          </div>

          <p className="text-center font-bold text-[#af8b44] text-lg mt-12 mb-8">
            {c.commentPrompt}
          </p>
        </article>
      </div>

      <Comments slug="st-peters-basilica" />
    </div>
  );
}