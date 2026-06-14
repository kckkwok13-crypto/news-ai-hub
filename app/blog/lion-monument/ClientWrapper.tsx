"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState, useEffect } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";
import TravelLanguageSelector from "../../components/TravelLanguageSelector";
import { getTranslation, TravelLanguage } from "../../data/travelTranslations";

const tocItems = {
  yue: [
    { id: "intro", title: "介紹", emoji: "🦁" },
    { id: "history", title: "1792年悲劇", emoji: "📊" },
    { id: "experience", title: "實地遊覽", emoji: "🌲" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-TW": [
    { id: "intro", title: "介紹", emoji: "🦁" },
    { id: "history", title: "1792年悲劇", emoji: "📊" },
    { id: "experience", title: "實地遊覽", emoji: "🌲" },
    { id: "tips", title: "實用提示", emoji: "💡" },
  ],
  "zh-CN": [
    { id: "intro", title: "介绍", emoji: "🦁" },
    { id: "history", title: "1792年悲剧", emoji: "📊" },
    { id: "experience", title: "实地游览", emoji: "🌲" },
    { id: "tips", title: "实用提示", emoji: "💡" },
  ],
  en: [
    { id: "intro", title: "Introduction", emoji: "🦁" },
    { id: "history", title: "1792 Tragedy", emoji: "📊" },
    { id: "experience", title: "Visit Experience", emoji: "🌲" },
    { id: "tips", title: "Travel Tips", emoji: "💡" },
  ],
};

const tContent = {
  yue: {
    title: "世界上最悲傷嘅石頭",
    subtitle: "瑞士琉森獅子紀念碑（Löwendenkmal）深度遊覽攻略",
    region: "🇨🇭 瑞士 · 琉森",
    author: "作者：純粹旅人",
    heroCaption: "▲ 隱藏喺琉森舊城森林幽谷中嘅垂死獅子紀念碑，馬克·吐溫稱其為「世界上最令人心碎嘅雕塑」",
    tags: ["琉森", "瑞士", "獅子紀念碑", "歷史"],
    introQuote: "「馬克·吐溫話，呢個係世界上最令人心碎、最感人嘅一塊石頭；而當你企喺呢面被幽靜森林環繞嘅巨型花崗岩崖壁前，望住嗰隻利箭穿心、神態痛苦卻死死用身軀護住波旁王朝盾牌嘅巨獅，你至會明白：呢個唔係一尊冰冷嘅雕塑，而係一曲用鮮血同絕對忠誠譜寫嘅長眠哀歌。」",
    introP1: "如果話卡貝爾橋展現咗琉森（Lucerne）溫柔繾綣嘅湖畔風情，噉隱藏喺老街背後、掩映喺蔥鬱樹林入面嘅<strong>垂死獅子紀念碑（Lion Monument / Löwendenkmal）</strong>，無疑就係呢座瑞士山城最沉重、最直擊靈魂嘅歷史圖騰。呢座完全喺一面巨型砂岩採石場崖壁上<strong>純手工鑿刻而成</strong>嘅巨幅雕塑，長 10 米，高 6 米，落成於 1821 年。佢唔單止係一件卓越嘅藝術品，更加係一座記錄咗 1792 年法國大革命期間，一場震驚歐洲嘅血腥大屠殺嘅紀念碑。",
    experienceTitle: "🌲 第一身沉浸實感：喺萬樹沙沙同綠池如淚間凝望不朽",
    imgCaption: "▲ 近距離觀看垂死獅子雕像，可見其痛苦神情與盾牌上的百合花紋章",
    para1: "從小城熱鬧嘅低岸天鵝廣場步行約 10 分鐘，拐入一條幽靜嘅林蔭小巷，四周嘅市井喧囂瞬間退去，取而代之嘅係阿爾卑斯松樹林沙沙嘅葉浪聲。一抬頭，嗰一整面高聳、斑駁、帶住千年地質層理嘅花崗岩巨型崖壁便排山倒海般喺眼前鋪開。呢座係隱藏喺城市中心嘅綠色幽谷。",
    para2: "崖壁中央，嗰隻被純手工一鑿一斧雕刻出嚟嘅巨獅喺深邃嘅石窟中默默瞓住，背部嗰根折斷嘅矛狠狠刺入骨血，佢緊鎖嘅眉頭、微張嘅嘴巴、以及眼角下彷彿乾涸咗嘅淚痕線條，將瀕死之際嘅痛苦、不甘與無上忠誠展現得淋漓盡致，強烈嘅視覺衝擊力會令你嘅靈魂瞬間被死死揪住。",
    para3: "雕塑下方係一汪如鏡面般平靜、半透明嘅翡翠碧綠色水池，池水清澈得能看見掉落嘅松針。呢汪水池被當地人悲情地稱為「全瑞士最深沉嘅淚水」。當黃昏時分，一縷金色嘅夕陽斜斜地穿透密密嘅樹冠，正好投射喺巨獅嗰泛白嘅石質身軀上，周邊嘅綠池倒影流光溢彩。",
    historyTitle: "📊 1792年鐵血悲歌：杜樂麗宮保衛戰大數據",
    historyP1: "呢尊悲傷巨獅背後，隱藏住一段令人毛骨悚然嘅真實大屠殺大數據。喺 1792 年 8 月 10 日法國大革命風暴中，憤怒嘅起義暴民瘋狂圍攻巴黎杜樂麗宮（Tuileries）。當時懦弱嘅法國國王路易十六早已棄宮逃跑，並下達咗「唔准向平民開槍」嘅荒謬命令。然而，負責守衛皇宮嘅 <strong>1,100 多名瑞士雇傭兵（Swiss Guards）</strong>，出於對契約與職業操守嘅極致忠誠，死守陣地絕不投降，最終幾乎全軍覆沒。",
    statTitle: "傷亡統計",
    stat1: "戰死與被屠殺 (71.5%)",
    stat2: "死裡逃生 (28.5%)",
    statNote: "呢場慘劇直接催生咗日後瑞士堅決中立嘅國策 —— 瑞士從此不再向外輸出雇傭兵。",
    wildBoarTitle: "🎨 歷史大解密：托瓦爾森嘅「憤怒野豬」黑色幽默",
    wildBoarP1: "呢尊莊嚴嘅雕像背後，隱藏住一段令人啼笑皆非嘅故事：丹麥大師托瓦爾森（Bertel Thorvaldsen）完成咗完美嘅黏土模型設計後，琉森當地嘅發起人卻因為資金短缺，<strong>嚴重拖欠咗大師嘅一大筆雕刻尾款</strong>。",
    wildBoarP2: "脾氣古怪嘅大師嘴上冇講，卻喺純手工雕刻石窟外廓時進行咗天才般嘅暗中復仇：如果你而家企得稍遠少少，仔細觀察包裹住巨獅嘅嗰個巨型石窟外沿線條，你會驚覺：<strong>成個石窟嘅外形竟然被精確地雕刻成一咗隻巨大嘅「野豬」輪廓！</strong>",
    tipsTitle: "💡 精明自遊：獅子紀念碑完美避坑隨身手札",
    tip1: "<strong>100% 完全免費：</strong>獅子紀念碑係一座全開放式嘅公共歷史公園，<strong>完全免費、無須任何門票、且 24 小時全天候對外開放</strong>！",
    tip2: "<strong>攝影師私藏機位：</strong>最佳拍照點係企喺池塘正前方嘅右側觀景台。將鏡頭拉長焦至 50mm-85mm，將大樹嘅綠葉作為天然嘅微焦框邊，能拍出極具大氣嘅電影分鏡畫面。",
    tip3: "<strong>交通方式：</strong>從琉森火車站乘搭 <strong>1 號、19 號、22 號或 23 號公共大巴</strong>，喺 <strong>Löwenplatz 站</strong> 下車，下車後步行 1 分鐘即可抵達。",
    tip4: "<strong>最佳遊覽時間：</strong>清晨九點前與傍晚六點後最能體會原著嘅史詩感，呢兩個時段遊客稀少，光線柔和，最適合靜靜沉思。",
    tip5: "<strong>共同維護歷史莊嚴：</strong>呢度唔係熱鬧嘅嬉戲遊樂場，而係一座存放住 786 名忠魂靈魂嘅精神公墓。請務必保持輕聲細語，嚴禁大聲喧嘩或嬉戲打鬧。",
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    hours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    duration: "⏱️ 建議遊覽",
    addressValue: "Denkmalstrasse 4, 6006 Luzern, Switzerland",
    hoursValue: "24小時全天候開放<br/>免費參觀",
    feeValue: "完全免費<br/>無須門票",
    ratingValue: "4.8/5.0（28,432 評論）",
    transportValue: "巴士至 Löwenplatz 站",
    durationValue: "1-2小時",
    ratingTitle: "⭐ 俾呢個景點評分",
    shareTitle: "📤 分享畀朋友",
    favoriteText: "加入心願清單：",
    bottomQuote: "歷史鐫刻於砂岩，忠誠長留於森林。願每位造訪這片綠色幽谷的旅人，都能在琉森的巨獅眼淚中找到屬於自己的思辨夢。",
    shareText: "🦁 世界上最悲傷的石頭：瑞士琉森獅子紀念碑深度遊覽攻略",
  },
  "zh-TW": {
    title: "世界上最悲傷的石頭",
    subtitle: "瑞士琉森獅子紀念碑（Löwendenkmal）深度遊覽攻略",
    region: "🇨🇭 瑞士 · 琉森",
    author: "作者：純粹旅人",
    heroCaption: "▲ 隱藏在琉森舊城森林幽谷中的垂死獅子紀念碑，馬克·吐溫稱其為「世界上最令人心碎的雕塑」",
    tags: ["琉森", "瑞士", "獅子紀念碑", "歷史"],
    introQuote: "「馬克·吐溫說，這是世界上最令人心碎、最感人的一塊石頭；而當你站在這面被幽靜森林環繞的巨型花崗岩崖壁前，看著那隻利箭穿心、神態痛苦卻死死用身軀護著波旁王朝盾牌的巨獅，你才會明白：這不是一尊冰冷的雕塑，而是一曲用鮮血與絕對忠誠譜寫的長眠哀歌。」",
    introP1: "如果說卡貝爾橋展現了琉森（Lucerne）溫柔繾綣的湖畔風情，那麼隱藏在老街背後、掩映在蔥鬱樹林之中的<strong>垂死獅子紀念碑（Lion Monument / Löwendenkmal）</strong>，無疑就是這座瑞士山城最沉重、最直擊靈魂的歷史圖騰。這座完全在一面巨型砂岩採石場崖壁上<strong>純手工鑿刻而成</strong>的巨幅雕塑，長 10 米，高 6 米，落成於 1821 年。它不僅是一件卓越的藝術品，更是一座記錄了 1792 年法國大革命期間，一場震驚歐洲的血腥大屠殺的紀念碑。",
    experienceTitle: "🌲 第一身沉浸實感：在萬樹沙沙與綠池如淚間凝望不朽",
    imgCaption: "▲ 近距離觀看垂死獅子雕像，可見其痛苦神情與盾牌上的百合花紋章",
    para1: "從小城熱鬧的低岸天鵝廣場步行約 10 分鐘，拐進一條幽靜的林蔭小巷，四周的市井喧囂瞬間退去，取而代之的是阿爾卑斯松樹林沙沙的葉浪聲。一抬頭，那一整面高聳、斑駁、帶著千年地質層理的花崗岩巨型崖壁便排山倒海般在眼前鋪開。這是一座隱藏在城市中心的綠色幽谷。",
    para2: "崖壁中央，那隻被純手工一鑿一斧雕刻出來的巨獅在深邃的石窟中默默躺著，背部那根折斷的矛狠狠刺入骨血，它緊鎖的眉頭、微張的嘴巴、以及眼角下彷彿乾涸了的淚痕線條，將瀕死之際的痛苦、不甘與無上忠誠展現得淋漓盡致，強烈的視覺衝擊力會讓你的靈魂瞬間被死死揪住。",
    para3: "雕塑下方是一汪如鏡面般平靜、半透明的翡翠碧綠色水池，池水清澈得能看見掉落的松針。這汪水池被當地人悲情地稱為「全瑞士最深沉的淚水」。當黃昏時分，一縷金色的夕陽斜斜地穿透密密的樹冠，正好投射在巨獅那泛白的石質身軀上，周邊的綠池倒影流光溢彩。",
    historyTitle: "📊 1792年鐵血悲歌：杜樂麗宮保衛戰大數據",
    historyP1: "這尊悲傷巨獅背後，隱藏著一段令人头皮发麻的真實大屠殺大數據。在 1792 年 8 月 10 日法國大革命風暴中，憤怒的起義暴民瘋狂圍攻巴黎杜樂麗宮（Tuileries）。當時懦弱的法國國王路易十六早已棄宮逃跑，並下達了「不准向平民開槍」的荒謬命令。然而，負責守衛皇宮的 <strong>1,100 多名瑞士雇傭兵（Swiss Guards）</strong>，出於對契約與職業操守的極致忠誠，死守陣地絕不投降，最終幾乎全軍覆沒。",
    statTitle: "傷亡統計",
    stat1: "戰死與被屠殺 (71.5%)",
    stat2: "死裡逃生 (28.5%)",
    statNote: "這場慘劇直接催生了日後瑞士堅決中立的國策 —— 瑞士從此不再向外輸出雇傭兵。",
    wildBoarTitle: "🎨 歷史大解密：托瓦爾森的「憤怒野豬」黑色幽默",
    wildBoarP1: "這尊莊嚴的雕像背後，隱藏著一段令人啼笑皆非的故事：丹麥大師托瓦爾森（Bertel Thorvaldsen）完成了完美的黏土模型設計後，琉森當地的發起人卻因為資金短缺，<strong>嚴重拖欠了大師的一大筆雕刻尾款</strong>。",
    wildBoarP2: "脾氣古怪的大師嘴上沒說，卻在純手工雕刻石窟外廓時進行了天才般的暗中復仇：如果你現在站得稍遠一點，仔細觀察包裹著巨獅的那個巨型石窟外沿線條，你會驚覺：<strong>整個石窟的外形竟然被精確地雕刻成了一隻巨大的「野豬」輪廓！</strong>",
    tipsTitle: "💡 精明自遊：獅子紀念碑完美避坑隨身手札",
    tip1: "<strong>100% 完全免費：</strong>獅子紀念碑是一座全開放式的公共歷史公園，<strong>完全免費、無須任何門票、且 24 小時全天候對外開放</strong>！",
    tip2: "<strong>攝影師私藏機位：</strong>最佳拍照點是站在池塘正前方的右側觀景台。將鏡頭拉長焦至 50mm-85mm，將大樹的綠葉作為天然的微焦框邊，能拍出極具大氣的電影分鏡畫面。",
    tip3: "<strong>交通方式：</strong>從琉森火車站乘搭 <strong>1 號、19 號、22 號或 23 號公共大巴</strong>，在 <strong>Löwenplatz 站</strong> 下車，下車後步行 1 分鐘即可抵達。",
    tip4: "<strong>最佳遊覽時間：</strong>清晨九點前與傍晚六點後最能體會原著的史詩感，這兩個時段遊客稀少，光線柔和，最適合靜靜沉思。",
    tip5: "<strong>共同維護歷史莊嚴：</strong>這裏不是熱鬧的嬉戲遊樂場，而是一座存放著 786 名忠魂靈魂的精神公墓。請務必保持輕聲細語，嚴禁大聲喧嘩或嬉戲打鬧。",
    infoTitle: "📊 景點資訊一覽",
    address: "📍 地址",
    hours: "🕐 開放時間",
    fee: "💰 費用",
    rating: "⭐ 評分",
    transport: "🚇 交通",
    duration: "⏱️ 建議遊覽",
    addressValue: "Denkmalstrasse 4, 6006 Luzern, Switzerland",
    hoursValue: "24小時全天候開放<br/>免費參觀",
    feeValue: "完全免費<br/>無須門票",
    ratingValue: "4.8/5.0（28,432 評論）",
    transportValue: "巴士至 Löwenplatz 站",
    durationValue: "1-2小時",
    ratingTitle: "⭐ 給這個景點評分",
    shareTitle: "📤 分享給朋友",
    favoriteText: "加入心願清單：",
    bottomQuote: "歷史鐫刻於砂岩，忠誠長留於森林。願每位造訪這片綠色幽谷的旅人，都能在琉森的巨獅眼淚中找到屬於自己的思辨夢。",
    shareText: "🦁 世界上最悲傷的石頭：瑞士琉森獅子紀念碑深度遊覽攻略",
  },
  "zh-CN": {
    title: "世界上最悲伤的石头",
    subtitle: "瑞士卢塞恩狮子纪念碑（Löwendenkmal）深度游览攻略",
    region: "🇨🇭 瑞士 · 卢塞恩",
    author: "作者：纯粹旅人",
    heroCaption: "▲ 隐藏在卢塞恩旧城森林幽谷中的垂死狮子纪念碑，马克·吐温称其为「世界上最令人心碎的雕塑」",
    tags: ["卢塞恩", "瑞士", "狮子纪念碑", "历史"],
    introQuote: "「马克·吐温说，这是世界上最令人心碎、最感人的一块石头；而当你站在这面被幽静森林环绕的巨型花岗岩崖壁前，看着那只利箭穿心、神态痛苦却死死用身躯护着波旁王朝盾牌的巨狮，你才会明白：这不是一尊冰冷的雕塑，而是一曲用鲜血与绝对忠诚谱写的长眠哀歌。」",
    introP1: "如果说卡贝尔桥展现了卢塞恩（Lucerne）温柔缱绻的湖畔风情，那么隐藏在老街背后、掩映在葱郁树林之中的<strong>垂死狮子纪念碑（Lion Monument / Löwendenkmal）</strong>，无疑就是这座瑞士山城最沉重、最直击灵魂的历史图腾。这座完全在一面巨型砂岩采石场崖壁上<strong>纯手工凿刻而成</strong>的巨幅雕塑，长 10 米，高 6 米，落成于 1821 年。它不仅是一件卓越的艺术品，更是一座记录了 1792 年法国大革命期间，一场震惊欧洲的血腥大屠杀的纪念碑。",
    experienceTitle: "🌲 第一身沉浸实感：在万树沙沙与绿池如泪间凝望不朽",
    imgCaption: "▲ 近距离观看垂死狮子雕像，可见其痛苦神情与盾牌上的百合花纹章",
    para1: "从小城热闹的低岸天鹅广场步行约 10 分钟，拐进一条幽静的林荫小巷，四周的人间喧嚣瞬间退去，取而代之的是阿尔卑斯松树林沙沙的叶浪声。一抬头，那一整面高耸、斑驳、带着千年地质层理的花岗岩巨型崖壁便排山倒海般在眼前铺开。这是一座隐藏在城市中心的绿色幽谷。",
    para2: "崖壁中央，那只被纯手工一凿一斧雕刻出来的巨狮在深邃的石窟中默默躺着，背部那根折断的矛狠狠刺入骨血，它紧锁的眉头、微张的嘴巴、以及眼角下仿佛干涸了的泪痕线条，将濒死之际的痛苦、不甘与无上忠诚展现得淋漓尽致，强烈的视觉冲击力会让你的灵魂瞬间被死死揪住。",
    para3: "雕塑下方是一汪如镜面般平静、半透明的翡翠碧绿色水池，池水清澈得能看见掉落的松针。这汪水池被当地人悲情地称为「全瑞士最深沉的泪水」。当黄昏时分，一缕金色的夕阳斜斜地穿透密密的树冠，正好投射在巨狮那泛白的石质身躯上，周边的绿池倒影流光溢彩。",
    historyTitle: "📊 1792年铁血悲歌：杜乐丽宫保卫战大数据",
    historyP1: "这尊悲伤巨狮背后，隐藏着一段令人毛骨悚然的真实大屠杀大数据。在 1792 年 8 月 10 日法国大革命风暴中，愤怒的起义暴民疯狂围攻巴黎杜乐丽宫（Tuileries）。当时懦弱的法国国王路易十六早已弃宫逃跑，并下达了「不准向平民开枪」的荒谬命令。然而，负责守卫皇宫的 <strong>1,100 多名瑞士雇佣兵（Swiss Guards）</strong>，出于对契约与职业操守的极致忠诚，死守阵地绝不投降，最终几乎全军覆没。",
    statTitle: "伤亡统计",
    stat1: "战死与被屠杀 (71.5%)",
    stat2: "死里逃生 (28.5%)",
    statNote: "这场惨剧直接催生了日后瑞士坚决中立的国策 —— 瑞士从此不再向外输出雇佣兵。",
    wildBoarTitle: "🎨 历史大解密：托瓦尔森的「愤怒野猪」黑色幽默",
    wildBoarP1: "这尊庄严的雕像背后，隐藏着一段令人啼笑皆非的故事：丹麦大师托瓦尔森（Bertel Thorvaldsen）完成了完美的黏土模型设计后，卢塞恩当地的发起人却因为资金短缺，<strong>严重拖欠了大师的一大笔雕刻尾款</strong>。",
    wildBoarP2: "脾气古怪的大师嘴上没说，却在纯手工雕刻石窟外廓时进行了天才般的暗中复仇：如果你现在站得稍远一点，仔细观察包裹着巨狮的那个巨型石窟外沿线条，你会惊觉：<strong>整个石窟的外形竟然被精确地雕刻成了一只巨大的「野猪」轮廓！</strong>",
    tipsTitle: "💡 精明自游：狮子纪念碑完美避坑随手札",
    tip1: "<strong>100% 完全免费：</strong>狮子纪念碑是一座全开放式的公共历史公园，<strong>完全免费、无须任何门票、且 24 小时全天候对外开放</strong>！",
    tip2: "<strong>摄影师私藏机位：</strong>最佳拍照点是站在池塘正前方的右侧观景台。将镜头拉长焦至 50mm-85mm，将大树的绿叶作为天然的微焦框边，能拍出极具大气的电影分镜画面。",
    tip3: "<strong>交通方式：</strong>从卢塞恩火车站搭乘 <strong>1 号、19 号、22 号或 23 号公共大巴</strong>，在 <strong>Löwenplatz 站</strong> 下车，下车后步行 1 分钟即可抵达。",
    tip4: "<strong>最佳游览时间：</strong>清晨九点前与傍晚六点后最能体会原著的史诗感，这两个时段游客稀少，光线柔和，最适合静静沉思。",
    tip5: "<strong>共同维护历史庄严：</strong>这里不是热闹的嬉戏游乐场，而是一座存放着 786 名忠魂灵魂的精神公墓。请务必保持轻声细语，严禁大声喧哗或嬉戏打闹。",
    infoTitle: "📊 景点资讯一览",
    address: "📍 地址",
    hours: "🕐 开放时间",
    fee: "💰 费用",
    rating: "⭐ 评分",
    transport: "🚇 交通",
    duration: "⏱️ 建议游览",
    addressValue: "Denkmalstrasse 4, 6006 Luzern, Switzerland",
    hoursValue: "24小时全天候开放<br/>免费参观",
    feeValue: "完全免费<br/>无须门票",
    ratingValue: "4.8/5.0（28,432 评论）",
    transportValue: "巴士至 Löwenplatz 站",
    durationValue: "1-2小时",
    ratingTitle: "⭐ 给这个景点评分",
    shareTitle: "📤 分享给朋友",
    favoriteText: "加入心愿清单：",
    bottomQuote: "历史镌刻于砂岩，忠诚长留于森林。愿每位造访这片绿色幽谷的旅人，都能在卢塞恩的巨狮眼泪中找到属于自己的思辨梦。",
    shareText: "🦁 世界上最悲伤的石头：瑞士卢塞恩狮子纪念碑深度游览攻略",
  },
  en: {
    title: "The World's Saddest Stone",
    subtitle: "Lucerne Lion Monument (Löwendenkmal) In-Depth Travel Guide",
    region: "🇨🇭 Switzerland · Lucerne",
    author: "Author: Pure Traveler",
    heroCaption: "▲ The Dying Lion of Lucerne hidden in the forest valley of the old town — Mark Twain called it 'the most mournful and touching piece of stone in the world'",
    tags: ["Lucerne", "Switzerland", "Lion Monument", "History"],
    introQuote: `"Mark Twain said this is the saddest and most touching piece of stone in the world; and when you stand before this massive granite cliff surrounded by tranquil forest, looking at the lion with an arrow piercing its heart, agonized yet desperately shielding the Bourbon dynasty shield with its body, you'll understand: this is not a cold sculpture, but a lullaby of blood and absolute loyalty."`,
    introP1: `If the Chapel Bridge showcases Lucerne's gentle lakeside charm, then the <strong>Dying Lion Monument (Löwendenkmal)</strong> hidden behind the old town and nestled within lush forests is undoubtedly the heaviest and most soul-stirring historical symbol of this Swiss mountain city. This massive sculpture, <strong>entirely hand-carved</strong> into a giant sandstone quarry cliff face, measures 10 meters long and 6 meters high, completed in 1821. It's not only a masterpiece of art but also a monument recording the shocking bloodbath during the 1792 French Revolution.`,
    experienceTitle: "🌲 Immersive Experience: Contemplating Eternity Amid Whispering Trees and Tear-Like Pools",
    imgCaption: "▲ Close-up view of the Dying Lion sculpture showing its agonized expression and the fleur-de-lis on the shield",
    para1: `From the bustling lakeside Schwanenplatz (Swan Square) in town, it's about a 10-minute walk to a quiet tree-lined alley. The city noise fades instantly, replaced by the rustling of Alpine pine forests. Looking up, the entire towering, mottled granite cliff face with millennia of geological strata unfolds before you like a tidal wave. This is a green valley hidden in the city center.`,
    para2: `In the center of the cliff face, the lion hand-carved凿刻 one chisel at a time lies silently in the deep stone grotto. The broken spear pierces its bones and blood from behind, its furrowed brow, slightly open mouth, and seemingly dried tear marks beneath its eyes display the agony, defiance, and supreme loyalty of its dying moments with stunning intensity, instantly gripping your soul.`,
    para3: `Below the sculpture lies a mirror-like calm, semi-transparent emerald green pool so clear you can see fallen pine needles. Locals tragically call this "Switzerland's most profound tear." At dusk, a golden strand of sunset filtering through the dense canopy falls precisely on the lion's whitish stone body, while the green pool reflections shimmer brilliantly.`,
    historyTitle: "📊 1792 Iron-Blood Tragedy: Tuileries Defense Battle Statistics",
    historyP1: `Behind this sorrowful lion lies a chilling real massacre data. On August 10, 1792, during the French Revolution storm, angry insurgents violently besieged the Tuileries Palace in Paris. The cowardly King Louis XVI had already fled the palace and issued the absurd order "do not fire at civilians." However, the <strong>over 1,100 Swiss mercenaries (Swiss Guards)</strong> guarding the palace, out of supreme loyalty to their contract and professional integrity, defended their position to the death and were nearly annihilated.`,
    statTitle: "Casualty Statistics",
    stat1: "Killed in Action (71.5%)",
    stat2: "Escaped (28.5%)",
    statNote: "This tragedy directly birthed Switzerland's policy of armed neutrality — Switzerland never again exported mercenaries.",
    wildBoarTitle: "🎨 Historical Secret: Thorvaldsen's 'Angry Boar' Dark Humor",
    wildBoarP1: `Behind this solemn statue lies a hilarious story: After Danish master Bertel Thorvaldsen completed the perfect clay model design, the local Lucerne sponsors <strong>severely defaulted on a large sum of carving fees</strong> due to funding shortages.`,
    wildBoarP2: `The eccentric master said nothing, but exacted genius-level covert revenge while hand-carving the grotto exterior: If you step back a bit and carefully observe the outline of the giant grotto surrounding the lion, you'll be amazed: <strong>the entire grotto was precisely carved into the shape of a massive "boar"!</strong>`,
    tipsTitle: "💡 Smart Travel Tips: Complete Guide to the Lion Monument",
    tip1: "<strong>100% Completely Free:</strong> The Lion Monument is a fully open public historical park, <strong>completely free, no tickets required, open 24 hours</strong>!",
    tip2: "<strong>Photographer's Secret Spot:</strong> The best photo spot is the viewing platform on the right side of the pond. Use a 50-85mm telephoto lens with tree foliage as natural frames for cinematic compositions.",
    tip3: "<strong>Transportation:</strong> From Lucerne train station, take <strong>bus 1, 19, 22, or 23</strong> to <strong>Löwenplatz stop</strong>, then walk 1 minute to the monument.",
    tip4: "<strong>Best Time to Visit:</strong> Before 9 AM or after 6 PM best captures the original epic feeling. These times have fewer tourists and soft light, perfect for quiet contemplation.",
    tip5: "<strong>Respect the Sacred Site:</strong> This is not a lively amusement park but a spiritual cemetery holding 786 loyal souls. Please maintain silence and avoid loud talking or playing.",
    infoTitle: "📊 Attraction Information",
    address: "📍 Address",
    hours: "🕐 Opening Hours",
    fee: "💰 Fee",
    rating: "⭐ Rating",
    transport: "🚇 Transport",
    duration: "⏱️ Suggested Visit",
    addressValue: "Denkmalstrasse 4, 6006 Luzern, Switzerland",
    hoursValue: "24 hours daily<br/>Free admission",
    feeValue: "Completely free<br/>No tickets required",
    ratingValue: "4.8/5.0 (28,432 reviews)",
    transportValue: "Bus to Löwenplatz stop",
    durationValue: "1-2 hours",
    ratingTitle: "⭐ Rate this attraction",
    shareTitle: "📤 Share with friends",
    favoriteText: "Add to wishlist:",
    bottomQuote: "History is carved in sandstone, loyalty endures in the forest. May every traveler who visits this green valley find their own contemplative dream in the lion's tears of Lucerne.",
    shareText: "🦁 The World's Saddest Stone: Lucerne Lion Monument In-Depth Guide",
  },
};

const currentTags = ["琉森", "瑞士", "獅子紀念碑", "歷史"];

export default function LionMonumentPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900/50 to-zinc-900/30 text-white">
      <ReadingProgress />
      <TravelLanguageSelector />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-gray-800/95 to-slate-800/95 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-gray-500/10">
          <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
            {t.tocTitle}
          </h3>
          <ul className="space-y-1">
            {toc.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg shadow-gray-500/30"
                      : "text-gray-300/70 hover:text-white hover:bg-gray-700/50"
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
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors bg-gray-800/30 px-4 py-2 rounded-full hover:bg-gray-700/50"
        >
          {t.backHome}
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-400 mb-8 ml-6 transition-colors"
        >
          {t.blog}
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 to-slate-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-gray-500/30">
            {tc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-slate-300 bg-clip-text text-transparent">
            {tc.title}
          </h1>
          <h2 className="text-xl text-gray-400 font-semibold mb-4">{tc.subtitle}</h2>
          <p className="text-gray-600">June 2026 · {tc.author}</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Lion_Monument.jpg"
            alt="琉森垂死獅子紀念碑"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-gray-600 text-sm mb-12">
          {tc.heroCaption}
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/40 border border-gray-600/30 rounded-2xl p-6 my-8">
            <p className="text-gray-300 text-lg italic leading-relaxed border-l-4 border-yellow-500/50 pl-6" dangerouslySetInnerHTML={{ __html: tc.introQuote }} />
          </div>

          <p id="intro" dangerouslySetInnerHTML={{ __html: tc.introP1 }} />

          <div id="history" className="bg-gradient-to-br from-gray-900/50 to-slate-900/40 border border-gray-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.historyTitle}
            </h3>

            <p className="text-gray-100/80 mb-4" dangerouslySetInnerHTML={{ __html: tc.historyP1 }} />

            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 border border-red-700/30 rounded-xl p-5 my-6">
              <h4 className="text-red-400 font-bold mb-4 text-lg">{tc.statTitle}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-500">786</p>
                  <p className="text-red-300/70 text-sm">{tc.stat1}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-400">350</p>
                  <p className="text-gray-400/70 text-sm">{tc.stat2}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-100/80 text-sm">
              {tc.statNote}
            </p>
          </div>

          <h2 id="experience">{tc.experienceTitle}</h2>

          <div className="my-8">
            <img
              src="/images/travel/lion-monument-detail.jpg"
              alt="琉森獅子紀念碑特寫"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-center text-gray-600 text-sm mt-4 mb-8">
              {tc.imgCaption}
            </p>
          </div>

          <p>{tc.para1}</p>
          <p>{tc.para2}</p>
          <p>{tc.para3}</p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              {tc.wildBoarTitle}
            </h3>
            <p className="text-gray-100/80 mb-3" dangerouslySetInnerHTML={{ __html: tc.wildBoarP1 }} />
            <p className="text-gray-100/80" dangerouslySetInnerHTML={{ __html: tc.wildBoarP2 }} />
          </div>

          <h2 id="tips">{tc.tipsTitle}</h2>

          <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/40 border border-gray-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-gray-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span dangerouslySetInnerHTML={{ __html: tc.tip1 }} />
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">📸</span>
                <span dangerouslySetInnerHTML={{ __html: tc.tip2 }} />
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🚌</span>
                <span dangerouslySetInnerHTML={{ __html: tc.tip3 }} />
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🌅</span>
                <span dangerouslySetInnerHTML={{ __html: tc.tip4 }} />
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🙏</span>
                <span dangerouslySetInnerHTML={{ __html: tc.tip5 }} />
              </li>
            </ul>
          </div>

          <h2>{tc.infoTitle}</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.address}</span>
              <p className="text-gray-100/80 text-sm mt-1">{tc.addressValue}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.hours}</span>
              <p className="text-gray-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.hoursValue }} />
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.fee}</span>
              <p className="text-gray-100/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: tc.feeValue }} />
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.rating}</span>
              <p className="text-gray-100/80 text-sm mt-1">{tc.ratingValue}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.transport}</span>
              <p className="text-gray-100/80 text-sm mt-1">{tc.transportValue}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">{tc.duration}</span>
              <p className="text-gray-100/80 text-sm mt-1">{tc.durationValue}</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-gray-900/30 to-zinc-900/20 border border-gray-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2 text-xl">
              {tc.ratingTitle}
            </h3>
            <StarRating slug="lion-monument" />
          </div>

          <div className="bg-gray-900/30 rounded-2xl p-6 my-10 border border-gray-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">{tc.shareTitle}</h3>
            <SocialShare title={tc.shareText} />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/30 flex items-center gap-4">
              <span className="text-gray-100/80">{tc.favoriteText}</span>
              <FavoriteButton slug="lion-monument" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-gray-700/30 pt-8 mt-8">
            <p className="text-gray-400 italic text-center">
              {tc.bottomQuote}
            </p>
          </div>

          <RelatedPosts currentSlug="lion-monument" currentTags={tc.tags} />
        </article>
      </div>

      <Comments slug="lion-monument" />
    </div>
  );
}