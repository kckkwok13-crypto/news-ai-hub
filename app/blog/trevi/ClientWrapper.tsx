"use client";
import Comments from "../../../components/Comments";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { TravelLanguage } from "../../data/travelTranslations";
import Link from "next/link";
import { useState } from "react";

const tocItems = {
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "⛲" },
    { id: "architecture", title: "巴洛克美學", emoji: "🔱" },
    { id: "wishing", title: "許願傳說", emoji: "🔮" },
    { id: "photo-spot", title: "拍攝攻略", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "⛲" },
    { id: "architecture", title: "巴洛克美学", emoji: "🔱" },
    { id: "wishing", title: "许愿传说", emoji: "🔮" },
    { id: "photo-spot", title: "拍摄攻略", emoji: "📸" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "⛲" },
    { id: "architecture", title: "Baroque Art", emoji: "🔱" },
    { id: "wishing", title: "Wishing Legend", emoji: "🔮" },
    { id: "photo-spot", title: "Photo Guide", emoji: "📸" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
  yue: [
    { id: "intro", title: "介紹", emoji: "⛲" },
    { id: "architecture", title: "巴洛克美學", emoji: "🔱" },
    { id: "wishing", title: "許願傳說", emoji: "🔮" },
    { id: "photo-spot", title: "拍攝攻略", emoji: "📸" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
};

const content = {
  "zh-TW": {
    meta: "⛲ 歐洲浪漫行 · 羅馬地標",
    backText: "← 返回 Blog",
    title: "把心願留給羅馬：特萊維噴泉深度打卡與完美許願全攻略",
    subtitle: "全球最著名的巴洛克式許願池",
    date: "May 2026 · 作者：純粹旅人",
    heroCaption: "▲ 電影《羅馬假期》（Roman Holiday）的浪漫縮影 —— 全球最著名的巴洛克式許願池",
    intro: `如果說羅馬鬥獸場展現了歷史的殘酷與史詩，那麼隱藏在錯綜複雜小巷中的<strong>特萊維噴泉（Fontana di Trevi / 俗稱羅馬許願池）</strong>，則承載了這座城市所有的浪漫與溫柔。這座落成於 1762 年的巨型巴洛克風格噴泉，高 26 米、寬 49 米，氣勢磅礡。當你穿過狹窄的街道，耳邊傳來隆隆的水聲，眼前的視野突然豁然開朗，那一面如交響樂般震撼的大理石群雕與湛藍清澈的泉水，絕對會讓你屏住呼吸。`,
    intro2: "今日呢篇 Blog 就帶大家深度鑑賞這座藝術巔峰之作，傳授最正宗的「投幣許願大法」，並送上避開人潮與防範小偷的超強自由行秘笈！",
    archTitle: "🔱 巴洛克美學：3 大必看雕像歷史密碼",
    arch1Title: "1. 正中央的主角 —— 威風凜凜的「海神」",
    arch1Content: "整個噴泉的背景是宏偉的波利宮（Palazzo Poli）凱旋門，而站在正中央宮殿神龕裏的，就是古羅馬神話中的<strong>海神涅普頓 (Neptune)</strong>。他身披戰袍，右手揮舞，神態威嚴，彷彿正在指揮著前方澎湃咆哮的泉水，展現出巴洛克藝術最核心的「動態美感」。",
    arch2Title: "2. 左右兩側的馴馬神職 —— 象徵海洋的兩種性格",
    arch2Content: "在海神腳下，有兩位手拉著帶翼海馬的半人半魚神職。細心觀察會發現：左邊的那匹海馬桀驁不馴，神職正竭力馴服它，這象徵著<strong>暴風雨中波濤洶湧的海洋</strong>；而右邊的那匹海馬則溫順乖巧，象徵著<strong>風平浪靜、祥和的海洋</strong>。這對比極具戲劇張力。",
    internalCaption: "▲ 夕陽西下，噴泉亮起淡黃色夜燈，主角背對鏡頭站在許願池最前排的石階邊，右手正準備向後拋出硬幣的側影",
    wishingTitle: "🔮 浪漫傳說：正宗「羅馬許願池」投幣三部曲",
    wishingIntro: "據說只要按照正確的方法在特萊維噴泉許願，願望就一定會實現。傳說中的投幣規則非常有趣：",
    coin1Title: "第一枚硬幣：",
    coin1Content: "必須背對噴泉，右手拿著硬幣，從<strong>左肩膀上方</strong>往後投入池中。這代表著「你此生一定會再次回到羅馬」。",
    coin2Title: "第二枚硬幣：",
    coin2Content: "如果你想祈求愛情，投下第二枚硬幣，代表你將會「遇見一段浪漫的義大利戀情，或與心上人修成正果」。",
    coin3Title: "第三枚硬幣：",
    coin3Content: "代表著「希望能順利結婚或離婚」（笑）。",
    coinNote: "💡 小貼士：據統計，許願池每天能撈出高達 3000 歐元的硬幣！這些錢全部分分秒秒由羅馬市政府收集，用作慈善用途（資助當地的流浪漢與貧困家庭），所以你的許願同時也在做善事喔！",
    photoTitle: "📸 避坑防牛：如何拍出無人的「包場」神級大片",
    photoContent: "因為許願池不收門票且 24 小時開放，從中午到深夜這裡永遠擠得水洩不通、連站腳的地方都沒有。想要拍到像電影《羅馬假期》那樣乾淨純粹的畫面，唯一的秘籍就是<strong>「清晨 6:30 至 7:30 前來」</strong>！這時候羅馬剛甦醒，白色的雕像在晨光下顯得格外聖潔，而且完全沒有人，你可以在最前排肆意變換姿勢拍照！",
    gelatoTitle: "🍦 順道必吃：百年冰淇淋名店",
    gelatoContent: "來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 買一杯正宗的義大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！",
    tipsTitle: "特萊維噴泉 旅遊實用小貼士 (Travel Tips)",
    tip1: "<strong className=\"text-[#90cdf4]\">嚴防扒手與坐姿限制：</strong>這裡人潮極度密集，是全羅馬小偷、扒手最喜歡下手的地方，許願和拍照時請務必看管好財物。另外，為了保護古蹟，<strong>絕對不可以坐在噴泉的白色大理石邊沿</strong>，周邊隨時有警察吹哨子警告或罰款，請大家注意喔！",
    tip2: "<strong className=\"text-[#90cdf4]\">順道必吃 Gelato：</strong>來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 買一杯正宗的義大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！",
    tip3: "<strong className=\"text-[#90cdf4]\">交通方式：</strong>乘搭羅馬地鐵 A 線（Linea A）至 <strong>Barberini 站</strong>，出站後跟著指示牌步行約 8-10 分鐘穿過幽靜小巷即可抵達。",
    info1Label: "📍 地址",
    info1Content: "Piazza di Trevi, Rome",
    info2Label: "🕐 開放時間",
    info2Content: "24小時開放",
    info3Label: "💰 費用",
    info3Content: "免費（許願需硬幣）",
    info4Label: "⭐ 評分",
    info4Content: "4.7/5.0（76,543 評論）",
    info5Label: "🚇 交通",
    info5Content: "Metro A線 Barberini站",
    info6Label: "⏱️ 建議遊覽",
    info6Content: "30分鐘",
    tocTitle: "目錄導覽",
  },
  "zh-CN": {
    meta: "⛲ 欧洲浪漫行 · 罗马地标",
    backText: "← 返回 Blog",
    title: "把心愿留给罗马：特莱维喷泉深度打卡与完美许愿全攻略",
    subtitle: "全球最著名的巴洛克式许愿池",
    date: "May 2026 · 作者：纯粹旅人",
    heroCaption: "▲ 电影《罗马假期》（Roman Holiday）的浪漫缩影 —— 全球最著名的巴洛克式许愿池",
    intro: `如果说罗马斗兽场展现了历史的残酷与史诗，那么隐藏在错综复杂小巷中的<strong>特莱维喷泉（Fontana di Trevi / 俗称罗马许愿池）</strong>，则承载了这座城市所有的浪漫与温柔。这座落成于 1762 年的巨型巴洛克风格喷泉，高 26 米、宽 49 米，气势磅礴。当你穿过狭窄的街道，耳畔传来隆隆的水声，眼前的视野突然豁然开朗，那一面如交响乐般震撼的大理石群雕与湛蓝清澈的泉水，绝对会让你屏住呼吸。`,
    intro2: "今天这篇 Blog 就带大家深度鉴赏这座艺术巅峰之作，传授最正宗的「投币许愿大法」，并送上避开人潮与防范小偷的超级自由行秘笈！",
    archTitle: "🔱 巴洛克美学：3 大必看雕像历史密码",
    arch1Title: "1. 正中央的主角 —— 威风凛凛的「海神」",
    arch1Content: "整个喷泉的背景是宏伟的波利宫（Palazzo Poli）凯旋门，而站在正中央宫殿神龛里的，就是古罗马神话中的<strong>海神涅普顿 (Neptune)</strong>。他身披战袍，右手挥舞，神态威严，仿佛正在指挥着前方澎湃咆哮的泉水，展现出巴洛克艺术最核心的「动态美感」。",
    arch2Title: "2. 左右两侧的驯马神职 —— 象征海洋的两种性格",
    arch2Content: "在海神脚下，有两位手拉着带翼海马的半人半鱼神职。细心观察会发现：左边的那匹海马桀骜不驯，神职正竭力驯服它，这象征着<strong>暴风雨中波涛汹涌的海洋</strong>；而右边的那匹海马则温顺乖巧，象征着<strong>风平浪静、祥和的海洋</strong>。这对比极具戏剧张力。",
    internalCaption: "▲ 夕阳西下，喷泉亮起淡黄色夜灯，主角背对镜头站在许愿池最前排的石阶边，右手正准备向后抛出硬币的侧影",
    wishingTitle: "🔮 浪漫传说：正宗「罗马许愿池」投币三部曲",
    wishingIntro: "据说只要按照正确的方法在特莱维喷泉许愿，愿望就一定会实现。传说中的投币规则非常有趣：",
    coin1Title: "第一枚硬币：",
    coin1Content: "必须背对喷泉，右手拿着硬币，从<strong>左肩膀上方</strong>往后投入池中。这代表着「你此生一定会再次回到罗马」。",
    coin2Title: "第二枚硬币：",
    coin2Content: "如果你想祈求爱情，投下第二枚硬币，代表你将会「遇见一段浪漫的意大利恋情，或与心上人修成正果」。",
    coin3Title: "第三枚硬币：",
    coin3Content: "代表着「希望能顺利结婚或离婚」（笑）。",
    coinNote: "💡 小贴士：据统计，许愿池每天能捞出高达 3000 欧元的硬币！这些钱时时刻刻由罗马市政府收集，用作慈善用途（资助当地的流浪汉与贫困家庭），所以你的许愿同时也在做善事喔！",
    photoTitle: "📸 避坑防牛：如何拍出无人的「包场」神级大片",
    photoContent: "因为许愿池不收门票且 24 小时开放，从中午到深夜这里永远挤得水泄不通、连站脚的地方都没有。想要拍到像电影《罗马假期》那样干净纯粹的画面的唯一秘籍就是<strong>「清晨 6:30 至 7:30 前来」</strong>！这时候罗马刚苏醒，白色的雕像在晨光下显得格外圣洁，而且完全没有，你可以在最前排肆意变换姿势拍照！",
    gelatoTitle: "🍦 顺道必吃：百年冰淇淋名店",
    gelatoContent: "来到许愿池，一定要去旁边的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 买一杯正宗的意大利手工冰淇淋（Gelato），推荐试试开心果（Pistachio）或开心果混松露巧克力口味，超级浓郁！",
    tipsTitle: "特莱维喷泉 旅游实用小贴士 (Travel Tips)",
    tip1: "<strong className=\"text-[#90cdf4]\">严防扒手与坐姿限制：</strong>这里人潮极度密集，是全罗马小偷、扒手最喜欢下手的地方，许愿和拍照时请务必看管好财物。另外，为了保护古迹，<strong>绝对不可以坐在喷泉的白色大理石边沿</strong>，周边随时有警察吹哨子警告或罚款，请大家注意喔！",
    tip2: "<strong className=\"text-[#90cdf4]\">顺道必吃 Gelato：</strong>来到许愿池，一定要去旁边的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 买一杯正宗的意大利手工冰淇淋（Gelato），推荐试试开心果（Pistachio）或开心果混松露巧克力口味，超级浓郁！",
    tip3: "<strong className=\"text-[#90cdf4]\">交通方式：</strong>乘坐罗马地铁 A 线（Linea A）至 <strong>Barberini 站</strong>，出站后跟着指示牌步行约 8-10 分钟穿过幽静小巷即可抵达。",
    info1Label: "📍 地址",
    info1Content: "Piazza di Trevi, Rome",
    info2Label: "🕐 开放时间",
    info2Content: "24小时开放",
    info3Label: "💰 费用",
    info3Content: "免费（许愿需硬币）",
    info4Label: "⭐ 评分",
    info4Content: "4.7/5.0（76,543 评论）",
    info5Label: "🚇 交通",
    info5Content: "Metro A线 Barberini站",
    info6Label: "⏱️ 建议游览",
    info6Content: "30分钟",
    tocTitle: "目录导览",
  },
  en: {
    meta: "⛲ European Romance · Rome Landmark",
    backText: "← Back to Blog",
    title: "Leave Your Wish in Rome: Complete Trevi Fountain Guide",
    subtitle: "The World's Most Famous Baroque Wishing Fountain",
    date: "May 2026 · Author: Pure Traveler",
    heroCaption: "▲ The romantic essence of Roman Holiday — the world's most famous Baroque wishing fountain",
    intro: `While the Colosseum showcases history's cruelty and grandeur, the <strong>Trevi Fountain (Fontana di Trevi)</strong> hidden in Rome's maze-like streets carries all this city's romance and tenderness. This massive Baroque fountain, completed in 1762, stands 26 meters high and 49 meters wide. When you emerge from a narrow street to the thundering rush of water, the breathtaking marble sculptures and crystal-clear azure water will literally take your breath away.`,
    intro2: "Today this Blog takes you on a deep appreciation of this artistic masterpiece, teaching the authentic 'coin wishing ritual,' and sharing survival tips for avoiding crowds and pickpockets!",
    archTitle: "🔱 Baroque Aesthetics: 3 Must-See Statue Secrets",
    arch1Title: "1. The Central Hero — The Majestic 'Sea God'",
    arch1Content: "The fountain's backdrop is the magnificent Palazzo Poli triumphal arch, with <strong>Neptune</strong>, the sea god from Roman mythology, standing in the central shrine. Clad in battle armor and raising his right hand, his majestic appearance seems to command the surging waters ahead, showcasing Baroque art's core 'dynamic beauty.'",
    arch2Title: "2. Winged Horses on Both Sides — Two Faces of the Ocean",
    arch2Content: "At Neptune's feet stand two Triton figures holding winged seahorses. Look closely: the left horse is wild and untamed, the Triton struggling to control it — symbolizing the <strong>ocean during stormy chaos</strong>. The right horse is gentle and cooperative — symbolizing the <strong>calm, peaceful ocean</strong>. The dramatic contrast is compelling.",
    internalCaption: "▲ At sunset, the fountain lights up in soft yellow — the protagonist stands at the front steps, right hand about to toss a coin over their shoulder",
    wishingTitle: "🔮 Authentic Ritual: The 3-Step Trevi Coin Wishing",
    wishingIntro: "Legend says if you follow the correct method, your wish at the Trevi Fountain will definitely come true. The traditional coin ritual:",
    coin1Title: "First Coin:",
    coin1Content: "Stand with your back to the fountain, hold the coin in your right hand, and toss it over your <strong>left shoulder</strong> into the pool. This means 'You will definitely return to Rome someday.'",
    coin2Title: "Second Coin:",
    coin2Content: "If you wish for love, toss a second coin, representing 'You will meet a romantic Italian love or reunite with your soulmate.'",
    coin3Title: "Third Coin:",
    coin3Content: "Represents 'Hope for a successful marriage or divorce' (laughs).",
    coinNote: "💡 Did you know? The fountain collects up to €3,000 in coins daily! Rome's city government uses all of it for charity (supporting homeless people and struggling families), so your wish is also an act of kindness!",
    photoTitle: "📸 How to Capture Empty Fountain Shots Like a Movie",
    photoContent: "The Trevi Fountain is free and open 24 hours, so it's ALWAYS packed from noon to midnight. To capture clean shots like Roman Holiday, the only secret is <strong>'Come at 6:30-7:30 AM!'</strong>. Rome is just waking up, white statues look especially sacred in morning light, completely empty — you can pose freely at the front row!",
    gelatoTitle: "🍦 Must-Try: Century-Old Gelato Shops",
    gelatoContent: "After the fountain, definitely visit nearby century-old ice cream shops like <strong>\"Giolitti\"</strong> or <strong>\"Gelateria San Crispino\"</strong> for authentic Italian gelato. Try Pistachio or Pistachio-Truffle chocolate flavors — incredibly rich!",
    tipsTitle: "Trevi Fountain Travel Tips",
    tip1: "<strong className=\"text-[#90cdf4]\">Beware Pickpockets & Sitting Rules:</strong> With extreme crowds, this is where Rome's pickpockets love to operate. Guard your belongings carefully! Also, <strong>sitting on the white marble edge is strictly prohibited</strong> to protect the monument — police will fine you!",
    tip2: "<strong className=\"text-[#90cdf4]\">Must-Try Gelato:</strong> Don't miss nearby century-old ice cream shops <strong>\"Giolitti\"</strong> or <strong>\"Gelateria San Crispino\"</strong> for authentic Italian gelato. Pistachio or Pistachio-Truffle flavors are incredible!",
    tip3: "<strong className=\"text-[#90cdf4]\">Getting There:</strong> Take Rome Metro Line A to <strong>Barberini station</strong>, then walk 8-10 minutes following signs through quiet alleys.",
    info1Label: "📍 Address",
    info1Content: "Piazza di Trevi, Rome",
    info2Label: "🕐 Hours",
    info2Content: "24 hours",
    info3Label: "💰 Price",
    info3Content: "Free (coins for wishing)",
    info4Label: "⭐ Rating",
    info4Content: "4.7/5.0 (76,543 reviews)",
    info5Label: "🚇 Transport",
    info5Content: "Metro A Barberini",
    info6Label: "⏱️ Visit",
    info6Content: "30 minutes",
    tocTitle: "Table of Contents",
  },
  yue: {
    meta: "⛲ 歐洲浪漫行 · 羅馬地標",
    backText: "← 返回 Blog",
    title: "把心願留給羅馬：特萊維噴泉深度打卡與完美許願全攻略",
    subtitle: "全球最著名的巴洛克式許願池",
    date: "May 2026 · 作者：純粹旅人",
    heroCaption: "▲ 電影《羅馬假期》（Roman Holiday）的浪漫縮影 —— 全球最著名的巴洛克式許願池",
    intro: `如果話羅馬鬥獸場展現咗歷史的殘酷與史詩，咁隱藏在錯綜複雜小巷中的<strong>特萊維噴泉（Fontana di Trevi / 俗稱羅馬許願池）</strong>，則承載咗呢座城市所有的浪漫與溫柔。呢座落成於 1762 年的巨型巴洛克風格噴泉，高 26 米、寬 49 米，氣勢磅礡。當你穿過狹窄的街道，耳邊傳來隆隆的水聲，眼前嘅視野突然豁然開朗，嗰一面如交響樂般震撼的大理石群雕與湛藍清澈的泉水，絕對會令你屏住呼吸。`,
    intro2: "今日呢篇 Blog 就帶大家深度鑑賞呢座藝術巔峰之作，傳授最正宗的「投幣許願大法」，並送上避開人潮與防範小偷的超強自由行秘笈！",
    archTitle: "🔱 巴洛克美學：3 大必看雕像歷史密碼",
    arch1Title: "1. 正中央的主角 —— 威風凜凜的「海神」",
    arch1Content: "整個噴泉的背景是宏偉的波利宮（Palazzo Poli）凱旋門，而站在正中央宮殿神龕裏的，就係古羅馬神話中的<strong>海神涅普頓 (Neptune)</strong>。佢身披戰袍，右手揮舞，神態威嚴，彷彿正在指揮著前方澎湃咆哮的泉水，展現出巴洛克藝術最核心的「動態美感」。",
    arch2Title: "2. 左右兩側的馴馬神職 —— 象徵海洋的兩種性格",
    arch2Content: "响海神腳下，有兩位手拉著帶翼海馬的半人半魚神職。細心觀察會發現：左邊嗰匹海馬桀驁不馴，神職正竭力馴服佢，呢個象徵著<strong>暴風雨中波濤洶湧的海洋</strong>；而右邊嗰匹海馬則溫順乖巧，象徵著<strong>風平浪靜、祥和的海洋</strong>。呢對比極具戲劇張力。",
    internalCaption: "▲ 夕陽西下，噴泉亮起淡黃色夜燈，主角背對鏡頭站在許願池最前排的石階邊，右手正準備向後拋出硬幣的側影",
    wishingTitle: "🔮 浪漫傳說：正宗「羅馬許願池」投幣三部曲",
    wishingIntro: "據說只要按照正確的方法响特萊維噴泉許願，願望就一定會實現。傳說中的投幣規則非常有趣：",
    coin1Title: "第一枚硬幣：",
    coin1Content: "必須背對噴泉，右手拿著硬幣，從<strong>左肩膀上方</strong>往後投入池中。呢個代表著「你此生一定會再次回到羅馬」。",
    coin2Title: "第二枚硬幣：",
    coin2Content: "如果你想祈求愛情，投下第二枚硬幣，代表你將會「遇見一段浪漫的意大利戀情，或與心上人修成正果」。",
    coin3Title: "第三枚硬幣：",
    coin3Content: "代表著「希望能順利結婚或離婚」（笑）。",
    coinNote: "💡 小貼士：據統計，許願池每天能撈出高達 3000 歐元的硬幣！呢啲錢全部由羅馬市政府收集，用作慈善用途（資助當地的流浪漢與貧困家庭），所以你的許願同時也在做善事喔！",
    photoTitle: "📸 避坑防牛：如何影出無人的「包場」神級大片",
    photoContent: "因為許願池不收門票且 24 小時開放，從中午到深夜呢度永遠擠得水洩不通、連站腳的地方都冇。想要影到像電影《羅馬假期》咁乾淨純粹的畫面，唯一的秘籍就係<strong>「清晨 6:30 至 7:30 前來」</strong>！呢個時候羅馬剛甦醒，白色的雕像响晨光下顯得格外聖潔，而且完全冇人，你可以在最前排肆意變換姿勢影相！",
    gelatoTitle: "🍦 順道必吃：百年冰淇淋名店",
    gelatoContent: "來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 買一杯正宗的意大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！",
    tipsTitle: "特萊維噴泉 旅遊實用小貼士 (Travel Tips)",
    tip1: "<strong className=\"text-[#90cdf4]\">嚴防扒手與坐姿限制：</strong>呢度人潮極度密集，係全羅馬小偷、扒手最喜歡下手的地方，許願和影相時請務必看管好財物。另外，為咗保護古蹟，<strong>絕對不可以坐在噴泉的白色大理石邊沿</strong>，周邊隨時有警察吹哨子警告或罰款，請大家注意喔！",
    tip2: "<strong className=\"text-[#90cdf4]\">順道必吃 Gelato：</strong>來到許願池，一定要去旁邊的百年冰淇淋名店 <strong>\"Giolitti\"</strong> 或者 <strong>\"Gelateria San Crispino\"</strong> 買一杯正宗的意大利手工冰淇淋（Gelato），推薦試試開心果（Pistachio）或開心果混松露朱古力口味，超級濃郁！",
    tip3: "<strong className=\"text-[#90cdf4]\">交通方式：</strong>乘搭羅馬地鐵 A 線（Linea A）至 <strong>Barberini 站</strong>，出站後跟著指示牌步行約 8-10 分鐘穿過幽靜小巷即可抵達。",
    info1Label: "📍 地址",
    info1Content: "Piazza di Trevi, Rome",
    info2Label: "🕐 開放時間",
    info2Content: "24小時開放",
    info3Label: "💰 費用",
    info3Content: "免費（許願需硬幣）",
    info4Label: "⭐ 評分",
    info4Content: "4.7/5.0（76,543 評論）",
    info5Label: "🚇 交通",
    info5Content: "Metro A線 Barberini站",
    info6Label: "⏱️ 建議遊覽",
    info6Content: "30分鐘",
    tocTitle: "目錄導覽",
  },
};

export default function TreviFountainPage() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [activeSection, setActiveSection] = useState("intro");

  const c = content[lang];
  const toc = tocItems[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7fbe] text-[#2c3e50]">
      <LanguageSwitcher currentLang={lang} onLangChange={setLang} />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#e6f2ff] to-[#f7fbe] backdrop-blur-xl border border-[#3a86c8]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#3a86c8]/10">
          <h3 className="text-sm font-bold text-[#3a86c8] mb-4 flex items-center gap-2">
            📋 {c.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#3a86c8] to-[#5a9fd4] text-white shadow-lg shadow-[#3a86c8]/30"
                      : "text-[#2c3e50]/70 hover:text-[#1a365d] hover:bg-[#e6f2ff]"
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
          className="inline-flex items-center gap-2 text-[#3a86c8] hover:text-[#1a365d] mb-8 transition-colors bg-[#e6f2ff] px-4 py-2 rounded-full hover:bg-[#d0e8ff] border border-[#3a86c8]/20"
        >
          {c.backText}
        </Link>

        <header className="text-center py-12 border-b-2 border-[#3a86c8]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a86c8] to-[#5a9fd4] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#3a86c8]/30">
            {c.meta}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a365d]">
            {c.title}
          </h1>
          <h2 className="text-xl text-[#3a86c8] font-semibold mb-4">{c.subtitle}</h2>
          <p className="text-[#94a3b8]">{c.date}</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#3a86c8]/20">
          <img
            src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80"
            alt={c.title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1607028693938-e63250910b2d?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#4a5568] text-sm mb-12">
          {c.heroCaption}
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.intro }} />
          <p className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.intro2 }} />

          <h2 id="architecture" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            {c.archTitle}
          </h2>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#3a86c8] pl-4">
            {c.arch1Title}
          </h3>
          <p className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.arch1Content }} />

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8 mb-4 border-l-4 border-[#3a86c8] pl-4">
            {c.arch2Title}
          </h3>
          <p className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.arch2Content }} />

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1607028693938-e63250910b2d?w=1200&q=80"
              alt={c.title}
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1660864112847-f34b0ef9c27a?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#4a5568] text-sm mt-4 mb-8">
              {c.internalCaption}
            </p>
          </div>

          <div className="bg-[#f0f7ff] border border-[#b3d7ff] p-6 my-10 rounded-xl">
            <h4 className="text-[#1a365d] font-bold mb-4 text-xl flex items-center gap-2">
              {c.wishingTitle}
            </h4>
            <p className="text-[#2c3e50] text-lg leading-9 mb-4">
              {c.wishingIntro}
            </p>
            <ol className="text-[#2c3e50] text-lg leading-9 space-y-3 pl-6 list-decimal list-inside">
              <li><strong>{c.coin1Title}</strong>{c.coin1Content}</li>
              <li><strong>{c.coin2Title}</strong>{c.coin2Content}</li>
              <li><strong>{c.coin3Title}</strong>{c.coin3Content}</li>
            </ol>
            <p className="text-[#4a5568] text-sm mt-4 italic">
              {c.coinNote}
            </p>
          </div>

          <h2 id="wishing" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            {c.photoTitle}
          </h2>
          <p className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.photoContent }} />

          <h2 id="photo-spot" className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">
            {c.gelatoTitle}
          </h2>
          <p className="text-[#2c3e50] text-justify text-lg leading-9" dangerouslySetInnerHTML={{ __html: c.gelatoContent }} />

          <div className="bg-[#1a365d] text-[#f7fafc] p-6 my-10 rounded-xl shadow-2xl">
            <h3 className="text-[#cbd5e0] font-bold mb-4 text-xl border-b border-[#2b6cb0] pb-2">
              {c.tipsTitle}
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="border-b border-[#2b6cb0] pb-3" dangerouslySetInnerHTML={{ __html: c.tip1 }} />
              <li className="border-b border-[#2b6cb0] pb-3" dangerouslySetInnerHTML={{ __html: c.tip2 }} />
              <li dangerouslySetInnerHTML={{ __html: c.tip3 }} />
            </ul>
          </div>

          <h2 className="text-[#1a365d] text-2xl font-bold border-b-2 border-[#3a86c8] pb-2 mt-10 mb-6">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info1Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info1Content}</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info2Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info2Content}</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info3Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info3Content}</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info4Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info4Content}</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info5Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info5Content}</p>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-4 border border-[#b3d7ff]">
              <span className="text-[#3a86c8] font-bold">{c.info6Label}</span>
              <p className="text-[#2c3e50] text-sm mt-1">{c.info6Content}</p>
            </div>
          </div>
        </article>
      </div>

      <Comments slug="trevi" />
    </div>
  );
}