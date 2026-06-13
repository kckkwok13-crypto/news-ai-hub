"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";

const blogData: Record<string, any> = {
  "shibuya-crossing": {
    title: "走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    date: "May 2026",
    heroImage: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    heroCaption: "俯瞰澀谷十字路口——繁忙時段每次轉燈就有約2,500人同時橫過",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "spot1", title: "SHIBUYA SKY", emoji: "🏔️" },
      { id: "spot2", title: "星巴克窗口位", emoji: "☕" },
      { id: "spot3", title: "聯絡通道秘境", emoji: "🚶" },
    ],
    activeColor: "blue",
    content: [
      { type: "p", id: "intro", text: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，<strong>澀谷十字路口（Shibuya Crossing）</strong>絕對當之無愧！每次綠燈一亮，成千上萬的人潮從四面八方湧入，卻又能神奇地錯身而過、亂中有序。" },
      { type: "p", text: "不論你是第一次去東京，還是已經去過無數次，這個十字路口都有種讓人百看不厭的魔力。今天這篇Blog就帶大家全方位解鎖澀谷十字路口，還會附上最頂級的打卡拍照位！" },
      { type: "h2", text: "終極打卡位推薦" },
      { type: "h3", text: "1. SHIBUYA SKY（澀谷上空）—— 終極上帝視角" },
      { type: "p", id: "spot1", text: "目前東京最紅的觀景台。你可以從離地約229米的露天平台，徹底俯瞰整個澀谷十字路口，甚至還能遠眺富士山。一定要提前在網上預約黃昏時段的門票，那時的色溫拍起來最美！" },
      { type: "h3", text: "2. 星巴克澀谷 tsutaya 店 —— 經典二樓窗口位" },
      { type: "image", src: "https://images.unsplash.com/photo-1737639824682-60b7edf3dd3d?w=1200&q=80", alt: "澀谷夜景霓虹燈光", caption: "夜晚的澀谷，霓虹燈光與人潮交織成賽博朋克風情" },
      { type: "h3", text: "3. 澀谷車站聯絡通道 —— 免費的在地人秘境" },
      { type: "image", src: "https://images.unsplash.com/photo-1603666659847-43cffb58a176?w=1200&q=80", alt: "澀谷十字路口繁忙場面", caption: "人潮湧動的澀谷十字路口全景" },
      { type: "p", id: "spot3", text: "連接JR澀谷站和井之頭線的行人通道，有一整面大玻璃。這裡不用花一分錢，就能拍到非常壯觀的十字路口全景。" },
    ],
    infoCards: [
      { label: "📍 地址", value: "Shibuya, Tokyo" },
      { label: "🕐 開放時間", value: "24小時" },
      { label: "💰 費用", value: "免費" },
      { label: "⭐ 評分", value: "4.7/5.0 (52,389 評論)" },
      { label: "🚇 交通", value: "JR山手線 澀谷站 B3出口" },
      { label: "⏱️ 建議遊覽", value: "30分鐘至1小時" },
    ],
  },
  "meiji-shrine": {
    title: "東京市中心的森林秘境：明治神宮深度半日遊攻略",
    date: "May 2026 · 作者：純粹旅人",
    heroImage: "https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg",
    heroCaption: "矗立於參道入口、極具震撼力的台灣檜木大鳥居，高12米、寬17米",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "torii", title: "大鳥居", emoji: "⛩️" },
      { id: "sake", title: "酒桶牆", emoji: "🍶" },
      { id: "well", title: "清正之井", emoji: "💧" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "green",
    content: [
      { type: "p", id: "intro", text: "緊鄰著潮流發源地原宿與竹下通，很難想像只要走過一條橋，就能瞬間從喧囂的都市切換到蟬鳴鳥叫的原始森林。這裏就是<strong>明治神宮（Meiji Jingu）</strong>。它不僅是東京必去的景點，更是供奉明治天皇與昭憲皇太后靈位、地位崇高的神道教聖地。" },
      { type: "p", text: "今天這篇Blog就帶大家深入走訪這座佔地高達 70 公頃的人造神祕森林，解鎖那些走過路過極易錯過的隱藏亮點與旅行故事！" },
      { type: "h2", text: "隱藏在參道上的 3 個歷史秘密" },
      { type: "h3", text: "1. 全日本最大的木造鳥居 —— 來自台灣的緣分" },
      { type: "p", id: "torii", text: "進入神宮後，最引人注目的就是位於南參道與北參道交會處的「大鳥居」。這座鳥居高 12 米、寬 17 米，是全日本最大的木造明神鳥居。值得一提的是，這座巨大的鳥居所使用的木材，是源自台灣阿里山高達 1200 年樹齡的巨型檜木，來到這裏不妨抬頭感受它的莊嚴與歷史厚重感。" },
      { type: "h3", text: "2. 百年不對稱的秘密：傳說中的 88 度彎道" },
      { type: "p", text: "當你漫步在碎石參道時，會發現路線並不是一條直線。在接近正殿時，參道會有一個接近直角的轉彎。據說這個彎道精準地測量為 <strong>88度</strong>（而非90度），在漢字中「八」代表著四面八方、開闊與吉利。設計師故意不弄成直角，是為了讓信眾在轉彎時能漸漸調適心情，懷著崇敬的心迎接神明。" },
      { type: "image", src: "https://dashboard.japantravel.com/photo/poi-8-214215/1440x960!/tokyo-meiji-jingu-shrine-214215.webp", alt: "清酒桶與葡萄酒桶牆", caption: "代表和洋折衷、極具文化特色的清酒與葡萄酒桶牆" },
      { type: "h3", text: "3. 東西文化交融：清酒桶與西洋葡萄酒桶" },
      { type: "p", id: "sake", text: "在南參道兩旁，一邊排列著各個酒廠奉納、色彩斑斕的日本清酒菰樽（Kodotaru）；而對面居然罕見地出現了法國勃艮第產區的西洋葡萄酒桶！這是因為明治天皇在位時极力推行「明治維新」，積極吸收西方文化，他本身也非常喜愛飲用葡萄酒，因此這裡才留下了這幅和洋並存的獨特奇觀。" },
      { type: "highlight", title: "🕊️ 幸運限定：你有機會遇見「神前結婚式」嗎？", text: "明治神宮是日本年輕人舉辦傳統婚禮的夢幻聖地。如果運氣好，在週末的上午前往，你很有機會在正殿前的廣場目睹一場傳統的「神前結婚式」—— 新娘身穿純白的「白無垢」，在神職人員與巫女的引領下緩步前行。現場氣氛極其莊重肅穆，是非常珍貴的文化體驗。" },
      { type: "h2", text: "內苑散策：清正之井與明治神宮御苑" },
      { type: "p", id: "well", text: "如果你有額外的時間，非常推薦花 500 日圓門票進入「明治神宮御苑」。這裡在江戶時代曾是加藤家和伊伊家的庭園。裡面隱藏著全東京最知名的開運能量景點 —— <strong>「清正之井」</strong>（Kiyomasa's Well）。這是一口由名將加藤清正挖掘的古井，泉水四季不斷，據說將井水照片設為手機桌布能帶來好運呢！" },
      { type: "tips", title: "💡 明治神宮 旅遊實用小貼士 (Travel Tips)", items: ["<strong>開放時間：</strong>明治神宮的開門與關門時間是跟隨「太陽升落」而每個月變動的。基本上日出開門、日落關門，去之前記得先上官網確認當月時間。", "<strong>參拜禮儀：</strong>走在參道上時，記得走兩側。因為參道的正中央（稱為「正中」）是留給神明通行的。經過大鳥居時，也可以微微鞠躬以示敬意。", "<strong>交通方式：</strong>搭乘 JR 山手線至「原宿站」或東京地下鐵至「明治神宮前站」，出站步行 1 分鐘即可到達神宮入口（神宮橋）。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "1-1 Yoyogikamizonocho, Shibuya, Tokyo" },
      { label: "🕐 開放時間", value: "日出至日落（每季不同）" },
      { label: "💰 費用", value: "免費（御苑另需 ¥500）" },
      { label: "⭐ 評分", value: "4.8/5.0（41,205 評論）" },
      { label: "🚇 交通", value: "JR山手線 原宿站 步行1分鐘" },
      { label: "⏱️ 建議遊覽", value: "1-2小時" },
    ],
  },
  "sensoji": {
    title: "東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    date: "May 2026 · 作者：純粹旅人",
    heroImage: "https://live.staticflickr.com/6552/6972841610_e3c87b77f4_b.jpg",
    heroCaption: "寫著「雷門」二字的巨大紅燈籠，是無數旅客對東京的第一印象",
    tocItems: [
      { id: "intro", title: "介紹", emoji: "📖" },
      { id: "kaminarimon", title: "雷門", emoji: "🏮" },
      { id: "nakamise", title: "仲見世通", emoji: "🍡" },
      { id: "hondo", title: "本堂", emoji: "⛩️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "red",
    content: [
      { type: "p", id: "intro", text: "如果想在現代化的東京尋找一抹傳統的江戶風情，<strong>淺草寺（Sensō-ji）</strong>絕對是不可錯過的第一站。創建於公元 628 年的淺草寺，是東京都內最古老的寺廟。這裡常年香火鼎盛，無論是莊嚴的佛教建築，還是充滿下町活力的商店街，都讓人彷彿穿越時空，回到了數百年前的江戶時代。" },
      { type: "p", text: "今天這篇Blog就為大家整理了淺草寺的經典必看亮點、傳統參拜與求籤流程，帶你玩轉這個東京最經典的地標！" },
      { type: "h2", text: "淺草寺經典散策路線：從雷門走到本堂" },
      { type: "h3", text: "1. 第一站：震撼力十足的「雷門」與巨大燈籠" },
      { type: "p", id: "kaminarimon", text: "淺草寺的正門就是大名鼎鼎的「雷門」（正式名稱為風雷神門）。門的右側供奉著風神，左側則是雷神。而正中央懸掛著那個重達 700 公斤的巨大紅燈籠，是由松下電器（Panasonic）創辦人松下幸之助在病癒後奉納的。<strong>拍照小貼士：</strong>走到燈籠正下方抬頭看，底部雕刻了一條栩栩如生的飛龍，非常精緻！" },
      { type: "h3", text: "2. 第二站：好吃好逛的「仲見世通」商店街" },
      { type: "p", id: "nakamise", text: "穿過雷門，迎接你的是一條長約 250 米的「仲見世通」。這是日本最古老的商店街之一，兩旁開滿了售賣傳統手工藝品、紀念品以及各式江戶小食的店舖。在這裡，你可以品嚐到現烤的<strong>人形燒</strong>、香脆的<strong>仙貝</strong>以及色彩繽紛的<strong>吉備糰子</strong>。" },
      { type: "image", src: "https://live.staticflickr.com/7372/9096936531_e3c87b77f4_b.jpg", alt: "仲見世通與寶藏門", caption: "宏偉的寶藏門與左側高聳的五重塔互相輝映" },
      { type: "h3", text: "3. 第三站：本堂參拜與常香爐的神秘力量" },
      { type: "p", id: "hondo", text: "穿過第二道大門「寶藏門」後，就會看到供奉本尊聖觀音菩薩的「本堂」（大殿）。在進入本堂前，你會經過一個煙霧繚繞的<strong>常香爐</strong>。日本信眾相信，將香爐排出的煙霧撥到自己身上，能夠驅除百病、帶來智慧與健康。來到這裡記得學著當地人，把福氣「撥」向自己喔！" },
      { type: "highlight", title: "🔮 實用教學：淺草寺「觀音靈籤」求籤步驟", text: "淺草寺的「觀音靈籤」非常有名，據說這裡抽到「凶」的機率相對比較高，但不用擔心，這才是最真實的指引！求籤流程如下：1. 在心裡默默向觀音菩薩許願、詢問你想請教的事情。2. 投入 100 日圓硬幣到油錢箱。3. 拿起木製籤筒，誠心搖晃直到其中一根籤「御籤」從小孔掉出。4. 看清楚數字，到對應的小木櫃抽屜中拿取你的籤詩。5. 如果是吉：把喜悅帶回家；如果是凶：別擔心！將籤詩摺好，綁在寺廟專用的鐵架上，代表將厄運留在寺廟，由神明為你化解。" },
      { type: "h2", text: "隱藏加碼：新舊交織的絕佳拍照位" },
      { type: "p", text: "在淺草寺境內，你可以拍到一個非常奇妙的畫面 —— 古色古香的<strong>五重塔</strong>與現代科技感十足的<strong>東京晴空塔（Tokyo Skytree）</strong>同框！這種歷史與現代在空中交匯的強烈對比，是淺草獨有的浪漫景致，千萬不要錯過這個構圖。" },
      { type: "tips", title: "💡 淺草寺 旅遊實用小貼士 (Travel Tips)", items: ["<strong>開放時間：</strong>淺草寺境內是 24 小時免費開放的。不過本堂的開門時間為每日早上 6:00（10月至3月為6:30）至傍晚 17:00。", "<strong>強烈推薦夜遊：</strong>每天日落後至晚上 23:00，雷門、寶藏門、五重塔和本堂都會亮起金黃色的燈光。此時遊客散去，散步起來非常舒服，拍起照來更有一種神祕而莊嚴的美感！", "<strong>交通方式：</strong>搭乘東京地下鐵銀座線、都營淺草線或東武晴空塔線至「淺草站」，步行約 5 分鐘即可抵達雷門。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "2-3-1 Asakusa, Taito City, Tokyo" },
      { label: "🕐 開放時間", value: "境內24小時 / 本堂 6:00-17:00" },
      { label: "💰 費用", value: "免費" },
      { label: "⭐ 評分", value: "4.6/5.0（89,432 評論）" },
      { label: "🚇 交通", value: "東京Metro 淺草站 步行5分鐘" },
      { label: "⏱️ 建議遊覽", value: "1-2小時" },
    ],
  },
  "keukenhof": {
    title: "狂歡大自然的調色盤：荷蘭庫肯霍夫花園700萬株鬱金香極致賞花全攻略",
    date: "April 2026 · 作者：花癡旅人",
    heroImage: "https://i0.wp.com/tulipfestivalamsterdam.com/wp-content/uploads/2020/02/bigstock-Aerial-Drone-Shot-View-Of-Tuli-333213211-scaled.jpg?ssl=1",
    heroCaption: "航拍視角下的庫肯霍夫彩虹花田——700萬株球根花卉編織的春日史詩",
    tocItems: [
      { id: "intro", title: "序言", emoji: "🌷" },
      { id: "scale", title: "花田規模", emoji: "📊" },
      { id: "pavilions", title: "四大展館", emoji: "🏛️" },
      { id: "timing", title: "賞花時機", emoji: "📈" },
      { id: "spots", title: "打卡位", emoji: "📸" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "pink",
    content: [
      { type: "p", id: "intro", text: "如果說荷蘭的冬天是一幅沉穩的單色水墨畫，那麼當每年三月下旬<strong>庫肯霍夫花園（Keukenhof）</strong>的大門徐徐開啟，整片荷蘭大地就像是被打翻了造物主的終極調色盤！這座位於利瑟（Lisse）小鎮、名列<strong>全球最大規模春季花卉公園</strong>的聖地，每年僅僅對外開放短短的 8 星期。" },
      { type: "p", text: "<em>「世界上如果有一個地方，能將春天所有的色彩一次過燃燒殆盡，那絕對是庫肯霍夫。當你站在32公頃鋪天蓋地的花毯中央，看著紅的似火、黃的如金、紫的若霞的鬱金香瘋狂綻放，你才會明白：大自然才是最偉大、最放肆的抽象派畫家。」</em>" },
      { type: "p", text: "今日這篇Blog，我將帶上最絢麗的色彩與精確的數據，帶大家深度走入這片驚艷全球的七彩夢境！" },
      { type: "h2", text: "700萬株花卉：王國的數字密碼" },
      { type: "p", id: "scale", text: "庫肯霍夫最震撼人心的是其量化規模。每年秋天，園藝師全手工種下高達 <strong>700 萬株</strong> 的球根花卉。這些花卉的精確種類比例如下：" },
      { type: "highlight", title: "🌷 700萬株球根花卉量化分佈", text: "• <strong>經典鬱金香 (Tulips) — 60%</strong>（約 4,200,000 株，涵蓋 800 多個品種）<br/>• <strong>金黃水仙花 (Daffodils) — 20%</strong>（約 1,400,000 株，春天的耀眼先鋒）<br/>• <strong>浪漫風信子 (Hyacinths) — 15%</strong>（約 1,050,000 株，全園香氣的靈魂）<br/>• <strong>其他珍稀球根花卉 — 5%</strong>（如百合、藏紅花、鳶尾花等）" },
      { type: "h2", text: "四大王室室內展館：風雨無阻的繁花盛宴" },
      { type: "p", id: "pavilions", text: "庫肯霍夫花園佔地高達 <strong>32 公頃（約 79 英畝）</strong>，擁有長達 15 公里的步行道！園區內巧妙設計了四個以荷蘭王室成員命名的巨型室內主題展館，即使不幸遇上春雨，館內依舊繁花似錦：" },
      { type: "h3", text: "1. Willem-Alexander Pavilion — 皇家鬱金香大展" },
      { type: "p", text: "以現任國王命名，館內有高達 <strong>10 萬株</strong> 鬱金香室內齊放，蔚為奇觀。這裡展示了最稀有、最珍貴的鬱金香品種，包括傳說中的黑色鬱金香「夜后」！" },
      { type: "image", src: "https://media-01.imu.nl/storage/flowertoursholland.com/3141/flower-tours-holland-keukenhof-pavilions-2560x1100.jpg", alt: "庫肯霍夫室內展館", caption: "室內展館的精密溫室控制系統，確保珍稀花卉在最佳狀態展示" },
      { type: "h3", text: "2. Beatrix Pavilion — 蘭花與紅掌奇境" },
      { type: "p", text: "以著名女王命名，充滿<strong>熱帶浪漫風情</strong>。數千株蘭花、紅掌與熱帶植物爭奇鬥艷，全場最受女士歡迎，是打卡拍照的夢幻場景！" },
      { type: "h3", text: "3. Oranje Nassau Pavilion — 時尚花藝設計秀" },
      { type: "p", text: "以王室家族命名，每週更換不同花藝主題，展示<strong>最新花卉藝術潮流</strong>。專業花藝師現場表演，遊客可以近距離觀摩大師技藝。" },
      { type: "h3", text: "4. Juliana Pavilion — 鬱金香歷史博物館" },
      { type: "p", text: "講述17世紀荷蘭瘋狂的<strong>「鬱金香狂熱」</strong>歷史——那是人類歷史上第一個金融泡沫，單顆稀有鬱金香球莖曾經價值連城，堪比黃金！" },
      { type: "h2", text: "賞花黃金期：4月中下旬的滿開奇蹟" },
      { type: "p", id: "timing", text: "很多旅人滿懷期待前來，卻因為選錯了時間，只能看到滿地綠葉或殘花。根據多年氣象與花卉數據統計，<strong>第 5 至第 6 星期（即 4 月中旬至 4 月下旬）是全園高達 95% 以上花卉同時滿開的極致黃金期</strong>！" },
      { type: "highlight", title: "📅 最佳賞花時機指南", text: "• <strong>3月底至4月初</strong>：初綻期，水仙花率先開放<br/>• <strong>4月中旬至下旬</strong>：🌟 黃金滿開期！所有花卉同步綻放<br/>• <strong>5月初至中旬</strong>：尾聲階段，部分花卉開始凋謝<br/><br/>💡 <strong>建議避開 10:30-15:30 的旅行團高峰時段</strong>，選擇早上8:00開園第一波或下午16:00後的黃昏場，人少花美體驗佳！" },
      { type: "image", src: "https://media.gettyimages.com/id/1807311371/photo/elevated-view-of-three-traditional-dutch-windmill-in-a-multi-coloured-tulip-fields-blooming.jpg?s=612x612&w=0&k=20&c=cS2F7Hr0cte_VGrbbEeUCVxRY-RHCCf72G_l-m2DL4s=", alt: "庫肯霍夫風車與彩虹花田", caption: "傳統荷蘭風車與彩虹鬱金香花田的經典荷蘭風情畫面" },
      { type: "h2", text: "3大必去打卡位：視覺與感官的双重狂歡" },
      { type: "p", id: "spots", text: "庫肯霍夫處處是風景，但以下三個地方絕對是你不容錯過的經典中的經典：" },
      { type: "h3", text: "1. 歷史復古大風車（The Windmill）" },
      { type: "p", text: "位於花園東側，這座落成於 <strong>1892 年</strong>的巨大傳統荷蘭風車，周邊被密密麻麻、呈放射狀排列的巨型彩色鬱金香花田環繞。走上風車觀景台往外拍，可以將蔚藍的天空、轉動的風車同彩色花毯完美定格，空間壓縮感極強！" },
      { type: "image", src: "https://thumbs.dreamstime.com/b/colorful-tulips-keukenhof-public-flower-garden-traditional-dutch-windmill-background-196370727.jpg", alt: "庫肯霍夫風車與彩色鬱金香", caption: "站在風車觀景台俯瞰——人間最美的春日畫卷" },
      { type: "h3", text: "2. 名人花園（Inspirational Gardens）" },
      { type: "p", text: "園區每年都會用不同顏色的風信子與鬱金香，在草坪上 1:1 拼貼出<strong>巨幅名人肖像或世界地標花毯</strong>，色彩層次分明得讓人歎為觀止。去年是以荷蘭國花鬱金香拼出的梵高自畫像，藝術與自然完美融合！" },
      { type: "h3", text: "3. 浪漫運河花舟（Whisper Boat Cruise）" },
      { type: "p", text: "坐在平緩的電動木船上，雙手划過清澈的運河水，兩岸是高低錯落、如彩虹般向後延伸幾公里的<strong>鬱金香梯田</strong>，聽著水鳥啼鳴，享受最奢侈的浪漫午後。這是庫肯霍夫最獨特、最愜意的遊覽方式！" },
      { type: "highlight", title: "🌈 拍照秘笈：如何拍出明信片級別的花海大片", text: "• <strong>光線選擇</strong>：清晨8-10點或下午4-6點的側光最能展現花瓣質感<br/>• <strong>構圖技巧</strong>：低角度拍攝可以將花田延伸感最大化<br/>• <strong>服裝搭配</strong>：白色或淺粉色裙子與彩虹花海形成完美對比<br/>• <strong>必備道具</strong>：草帽、編織籃、相機——田園風格的標配三件套" },
      { type: "tips", title: "庫肯霍夫花園「無痛避開人海」生存指南 (Travel Tips)", items: ["<strong>100% 嚴格網上定時預約制：</strong>庫肯霍夫現在取消了現場實體售票處！所有門票（成人約 €20）必須提前在官方網站實名預訂，否則大老遠來到只能吃閉門羹。", "<strong>推薦購買 Combiticket 套票：</strong>包含「阿姆斯特丹 ─> 花園直達穿梭巴士」的套票，巴士有專用公交車道，能省下至少 1 小時排隊時間。852、858號線直達。", "<strong>穿著裝備：</strong>32公頃的公園全靠雙腿漫步，且荷蘭春季海風極大。務必穿著<strong>防滑舒適的運動鞋</strong>，隨身帶備<strong>防風外套</strong>。", "<strong>餐飲建議：</strong>園區內餐廳價格偏貴，建議自備簡便午餐在花田中野餐，體驗不一樣的田園風情！", "<strong>最佳遊覽時間：</strong>避開週末和復活節假期，平日遊客少一半，拍照體驗完全不同。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "Stationsweg 166A, 2161 AM Lisse, Netherlands" },
      { label: "🕐 開放時間", value: "2026年3月20日 - 5月11日 每日 8:00-19:00" },
      { label: "💰 費用", value: "€20（成人）/ €10（兒童）/ €35（Combiticket套票）" },
      { label: "⭐ 評分", value: "4.7/5.0（89,432 評論）" },
      { label: "🚇 交通", value: "阿姆斯特丹乘坐852/858號巴士直達（約45分鐘）" },
      { label: "⏱️ 建議遊覽", value: "4-6小時（建議一早進園）" },
    ],
  },
  "anne-frank-house": {
    title: "走進那段不能被遺忘的歷史：阿姆斯特丹安妮之家深度遊記",
    date: "June 2026 · 作者：歷史旅人",
    heroImage: "https://www.annefrank.org/media/filer_public_thumbnails/filer_public/dd/61/dd614ecb-14e6-4c74-b345-ff0bb16685d4/001_012_010_voorkant_carel_blazer.jpg__1536x1536_q85_subject_location-1601%2C2511_subsampling-2.jpg",
    heroCaption: "安妮之家外觀——這棟看似普通的運河房屋，藏著一段震撼世界的歷史",
    tocItems: [
      { id: "intro", title: "序言", emoji: "📖" },
      { id: "history", title: "歷史背景", emoji: "🏠" },
      { id: "diary", title: "安妮日記", emoji: "✍️" },
      { id: "visit", title: "參觀指南", emoji: "🕯️" },
      { id: "tips", title: "實用提示", emoji: "💡" },
    ],
    activeColor: "amber",
    content: [
      { type: "p", id: "intro", text: "在阿姆斯特丹市中心王子運河畔，有一棟外表低調的褐色磚樓。這裏曾是一個猶太女孩的秘密藏身之所，也是一座讓世人永遠記住二戰暴行的紀念館。這就是<strong>安妮之家（Anne Frank House）</strong>——一個承載著希望、恐懼、勇氣與悲傷的地方。" },
      { type: "p", text: "<em>「我希望我能死後繼續活著。」</em> —— 安妮·弗蘭克，《安妮日記》" },
      { type: "p", text: "這句話在她短暫的一生中或許只是少女的願望，但如今，安妮·弗蘭克確實以另一種方式「活」在了全世界每個人的心中。" },
      { type: "highlight", title: "安妮·弗蘭克的一生", text: "1929年出生於德國法蘭克福，1934年隨家人移民荷蘭，1942年躲入秘密側樓，1944年被納粹逮捕，1945年死於集中營。她的一生雖然短暫（1929-1945），但她留下的《安妮日記》成為了二十世紀最具影響力的書籍之一，被翻譯成超過70種語言。" },
      { type: "h2", text: "走進安妮之家" },
      { type: "h3", text: "歷史背景" },
      { type: "p", id: "history", text: "安妮·弗蘭克生於1929年的德國法蘭克福。由於納粹德國對猶太人的迫害，1934年，年僅5歲的安妮隨家人移民到荷蘭阿姆斯特丹。然而，1940年5月德軍佔領荷蘭後，猶太人的處境日益艱難。" },
      { type: "highlight", title: "⚠️ 歷史瞬間", text: "1942年7月，安妮的姐姐 Margot 收到了納粹黨衛軍的召集令。這成為弗蘭克一家躲入秘密側樓的導火線。在接下來的兩年多時間裏，他們與范佩斯一家四口，共同藏身於這座不起眼的運河房屋中。" },
      { type: "h3", text: "秘密側樓的秘密" },
      { type: "p", text: "1942年7月至1944年8月間，弗蘭克一家四口，加上范佩斯夫婦和彼得·范佩斯，共8人藏身於 Otto Frank 公司辦公室樓上的秘密側樓（Achterhuis）。" },
      { type: "image", src: "https://www.annefrank.org/media/filer_public_thumbnails/filer_public/65/c8/65c8eea7-2f82-4726-b3d2-94f647ff220d/056_-_bovenberg_keuken_-_kitchen.jpg__2160x895_q85_crop_subsampling-2_upscale.jpg", alt: "安妮之家內部廚房", caption: "秘密側樓的廚房——安妮一家和范佩斯一家在這裏共同生活了兩年多" },
      { type: "p", text: "這裏沒有自來水、沒有衛生間，只有昏暗的閣樓和小小的天窗。8個人在這裏度過了整整兩年又25天的隱匿生活。每一個聲響、每一次敲門，都可能是納粹的搜查。" },
      { type: "h2", text: "安妮日記：少女的心靈鏡像" },
      { type: "h3", text: "日記的由來" },
      { type: "p", id: "diary", text: "1942年6月12日，安妮收到了一份生日禮物——一本紅白相間的格紋日記本。她給這本日記取名「基蒂」（Kitty），並開始向她傾訴自己的秘密。" },
      { type: "image", src: "https://www.annefrank.org/media/filer_public_thumbnails/filer_public/18/c4/18c4eff1-84a1-48bf-9f28-2a61af14a331/cam_afh_tafeltjeanne0000.jpg__1280x960_q85_crop_subsampling-2_upscale.jpg", alt: "安妮的書桌", caption: "安妮的書桌——她就是在這張桌子上寫下了不朽的《安妮日記》" },
      { type: "h3", text: "日記中的安妮" },
      { type: "p", text: "透過日記，我們看到的不僅是一個躲在密室的猶太女孩，更是一個渴望成長、追求愛情、探索自我的普通少女。她寫下了：對父親 Otto Frank 的複雜情感、與母親 Edith 的緊張關係、對彼得的朦朧暗戀、對寫作的熱愛與成為作家的夢想，以及對人性善惡的深刻思考。" },
      { type: "highlight", title: "安妮的經典語錄", text: "<em>「雖然我經常陷入絕望，但我從未失去對人性的信任。」<br/><br/>「作為一個作家，我最大的願望是死後仍能活在人們心中。」<br/><br/>「我發現我內心的這種渴望——這個渴望已經在我身上存在很長時間——是去著手做一些有意義的事情。」</em>" },
      { type: "h2", text: "參觀指南" },
      { type: "h3", text: "基本資訊" },
      { type: "p", id: "visit", text: "安妮之家位於阿姆斯特丹市中心王子運河畔，如今是一座免費對公眾開放的博物館。這裏保留了秘密側樓的原貌，並展示了大量歷史文物與安妮的親筆日記。" },
      { type: "h3", text: "參觀重點" },
      { type: "p", text: "<strong>1. 入口與電梯</strong>——建議乘坐電梯直達頂層，然後從上往下遊覽，這樣可以避開人群。<br/><br/><strong>2. 展覽區</strong>——了解安妮·弗蘭克的生平、二戰歷史、以及大屠殺的背景。<br/><br/><strong>3. 秘密側樓</strong>——實際走進安妮一家曾經躲藏的空間，感受那份壓抑與絕望。<br/><br/><strong>4. 安妮日記原本</strong>——博物館保存著安妮日記的原稿，展示她作為作家的才華。" },
      { type: "image", src: "https://cdn.360stories.com/image/eyJidWNrZXQiOiJjZG4uMzYwc3Rvcmllcy5jb20iLCJrZXkiOiJ1cGxvYWRzXC9waWN0dXJlc1wvMTUzMjUyNjA4OWE4NGY0YzYzMWE1NzkyNWQ3MWY2Njk0NDIzNjhlOWM3LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=", alt: "安妮之家運河畔風光", caption: "安妮之家所在的王子運河畔，風景優美卻承載著沉重的歷史" },
      { type: "h2", text: "參觀感受" },
      { type: "p", text: "走進安妮之家，你會發現這裏的樓梯狹窄、光線昏暗、空氣中似乎還殘留著75年前的緊張氣息。每一面牆、每一扇窗、每一級台階，都在默默訴說著那段不能被遺忘的歷史。" },
      { type: "highlight", title: "🕊️ 歷史的警示", text: "安妮之家不僅是一座博物館，更是一座人性的燈塔。它提醒我們：戰爭、歧視、仇恨的代價，往往由最無辜的人承擔。願這段歷史永遠被人們記住，願世界再無種族滅絕的悲劇。" },
      { type: "h2", text: "延伸閱讀推薦" },
      { type: "p", text: "如果你被安妮的故事深深觸動，以下書籍值得一讀：<br/><br/>• <strong>《安妮日記》</strong> - 安妮·弗蘭克著<br/>• <strong>《安妮·弗蘭克：戰爭中成長的少女》</strong> - 詳細記錄安妮的一生<br/>• <strong>《秘密側樓的最後日子》</strong> - 描繪安妮被捕前的最後時光" },
      { type: "tips", title: "安妮之家 旅遊實用小貼士 (Travel Tips)", items: ["<strong>強烈建議提前預訂：</strong>門票經常售罄，強烈建議在官方網站提前預訂門票。現場購票往往需要排隊3小時以上。", "<strong>選擇參觀時段：</strong>早上9點或傍晚最後一場人流最少。建議選擇下午時段，可以避開團體遊客。", "<strong>語音導覽：</strong>提供多種語言包括中文的語音導覽，非常建議租用，能更深入了解歷史背景。", "<strong>保持安靜：</strong>這是一個莊嚴的紀念場所，請保持肅穆，尊重歷史。", "<strong>寄存行李：</strong>博物館提供免費行李寄存服務，方便攜帶大件行李的遊客。", "<strong>建議遊覽時間：</strong>1.5-2小時，請預留足夠時間。"] },
    ],
    infoCards: [
      { label: "📍 地址", value: "Prinsengracht 263-267, Amsterdam" },
      { label: "🕐 開放時間", value: "每日 9:00-22:00（夏季）" },
      { label: "💰 費用", value: "€20（線上預訂）" },
      { label: "⭐ 評分", value: "4.8/5.0（68,234 評論）" },
      { label: "🚇 交通", value: "地鐵 Nieuwezijds Kolk 站步行5分鐘" },
      { label: "⏱️ 建議遊覽", value: "1.5-2小時" },
    ],
  },
};

export default function BlogContent({ slug }: { slug: string }) {
  const [activeSection, setActiveSection] = useState("intro");
  const blog = blogData[slug];

  useEffect(() => {
    if (!blog) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    blog.tocItems.forEach(({ id }: { id: string }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blog]);

  // Initialize Google AdSense
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.log('AdSense initialization skipped');
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const colorClasses: Record<string, { active: string; default: string; gradient: string; glow: string; border: string }> = {
    blue: {
      active: "bg-blue-600 text-white",
      default: "text-zinc-400 hover:text-white hover:bg-zinc-800",
      gradient: "from-blue-600/20 via-transparent to-transparent",
      glow: "shadow-blue-500/20",
      border: "border-blue-500/30"
    },
    green: {
      active: "bg-green-600 text-white",
      default: "text-zinc-400 hover:text-white hover:bg-zinc-800",
      gradient: "from-green-600/20 via-transparent to-transparent",
      glow: "shadow-green-500/20",
      border: "border-green-500/30"
    },
    red: {
      active: "bg-red-600 text-white",
      default: "text-zinc-400 hover:text-white hover:bg-zinc-800",
      gradient: "from-red-600/20 via-transparent to-transparent",
      glow: "shadow-red-500/20",
      border: "border-red-500/30"
    },
    amber: {
      active: "bg-amber-600 text-white",
      default: "text-zinc-400 hover:text-white hover:bg-zinc-800",
      gradient: "from-amber-600/20 via-transparent to-transparent",
      glow: "shadow-amber-500/20",
      border: "border-amber-500/30"
    },
    pink: {
      active: "bg-pink-600 text-white",
      default: "text-zinc-400 hover:text-white hover:bg-zinc-800",
      gradient: "from-pink-600/20 via-transparent to-transparent",
      glow: "shadow-pink-500/20",
      border: "border-pink-500/30"
    },
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">← 返回 Blog</Link>
        </div>
      </div>
    );
  }

  const colors = colorClasses[blog.activeColor] || colorClasses.blue;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-5 w-60 shadow-2xl ${colors.glow}">
          <h3 className="text-sm font-bold text-zinc-300 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-700/50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            目錄導覽
          </h3>
          <ul className="space-y-1.5">
            {blog.tocItems.map(({ id, title, emoji }: { id: string; title: string; emoji: string }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-300 flex items-center gap-2.5 ${activeSection === id ? `${colors.active} shadow-lg` : colors.default}`}
                >
                  <span className="text-base">{emoji}</span>
                  <span className="font-medium">{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-10 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">返回 Blog</span>
        </Link>

        {/* Enhanced Header */}
        <header className="relative py-12 mb-8">
          {/* Decorative Elements */}
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} -z-10 rounded-3xl`} />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-10" />

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${colors.active} shadow-lg ${colors.glow}`}>
              {blog.tocItems[0]?.emoji} 遊記攻略
            </span>
            <span className="text-zinc-500 text-sm">{blog.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center gap-4">
            <div className={`h-1 w-20 bg-gradient-to-r ${colors.active} rounded-full`} />
            <div className="h-1 w-8 bg-zinc-700 rounded-full" />
            <div className="h-1 w-4 bg-zinc-600 rounded-full" />
          </div>
        </header>

        {/* Hero Image with Enhanced Display */}
        <div className="relative mb-6 group">
          {/* Glow Effect */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl ${colors.glow}">
            <img
              src={blog.heroImage}
              alt={blog.title}
              className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Caption with decorative elements */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className={`h-px w-12 bg-gradient-to-r from-transparent to-${blog.activeColor}-500/50`} />
          <p className="text-zinc-500 text-sm font-medium text-center px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800">
            {blog.heroCaption}
          </p>
          <div className={`h-px w-12 bg-gradient-to-l from-transparent to-${blog.activeColor}-500/50`} />
        </div>

        {/* Ad Banner - After Hero */}
        <div className="my-10 flex justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '728px', height: '90px' }}
            data-ad-client="ca-pub-4745583996243741"
            data-ad-slot="7843298765"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          {blog.content.map((item: any, index: number) => {
            switch (item.type) {
              case "p":
                return (
                  <div key={index} className="mb-6">
                    <p id={item.id} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                );
              case "h2":
                return (
                  <div key={index} className="relative my-12 py-8">
                    {/* Decorative Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl -z-10`} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-full" />

                    {/* Section Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${colors.active} text-lg font-bold shadow-lg ${colors.glow}`}>
                        {index > 0 ? (index).toString().padStart(2, '0') : '01'}
                      </span>
                      <div className={`h-1 flex-1 bg-gradient-to-r ${colors.active} to-transparent rounded-full opacity-30`} />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {item.text}
                    </h2>
                  </div>
                );
              case "h3":
                return (
                  <div key={index} className="relative my-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${colors.active} shadow-lg ${colors.glow}`} />
                      <h3 id={item.id} className="text-xl md:text-2xl font-bold text-zinc-100">
                        {item.text}
                      </h3>
                    </div>
                    <div className={`ml-5 mt-2 h-px bg-gradient-to-r ${colors.border} to-transparent`} />
                  </div>
                );
              case "image":
                return (
                  <div key={index} className="relative my-10 group">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 shadow-2xl">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />

                      {/* Corner Decorations */}
                      <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 ${colors.border} rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 ${colors.border} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 ${colors.border} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 ${colors.border} rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>

                    {/* Enhanced Caption */}
                    <div className="flex items-center justify-center mt-4 gap-4">
                      <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-${blog.activeColor}-500/30 to-transparent`} />
                      <p className="text-zinc-500 text-sm font-medium px-4 py-2 bg-zinc-900/30 backdrop-blur-sm rounded-full border border-zinc-800/50">
                        {item.caption}
                      </p>
                      <div className={`h-px flex-1 bg-gradient-to-l from-transparent via-${blog.activeColor}-500/30 to-transparent`} />
                    </div>
                  </div>
                );
              case "highlight":
                return (
                  <div key={index} className="relative my-10">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-xl`} />

                    <div className={`relative bg-gradient-to-br from-zinc-900/95 to-zinc-900/80 backdrop-blur-xl border ${colors.border} rounded-2xl p-6 md:p-8 shadow-xl`}>
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.active} flex items-center justify-center shadow-lg ${colors.glow}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className={`text-lg md:text-xl font-bold bg-gradient-to-r ${colors.active} bg-clip-text text-transparent pt-2`}>
                          {item.title}
                        </h4>
                      </div>

                      {/* Content */}
                      <div className={`text-zinc-300 leading-relaxed pl-16`}>
                        <p dangerouslySetInnerHTML={{ __html: item.text }} />
                      </div>
                    </div>
                  </div>
                );
              case "tips":
                return (
                  <div key={index} className="relative my-10">
                    {/* Decorative Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20 rounded-3xl`} />

                    <div className={`relative bg-zinc-900/90 backdrop-blur-xl border border-amber-700/30 rounded-2xl p-6 md:p-8 shadow-xl`}>
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-amber-700/30">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-amber-400">{item.title}</h3>
                          <p className="text-zinc-500 text-sm">讓你的旅程更加順利</p>
                        </div>
                      </div>

                      {/* Tips List */}
                      <ul className="space-y-4">
                        {item.items.map((tip: string, i: number) => (
                          <li key={i} className="flex gap-4 group">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mt-1 group-hover:bg-amber-500/30 transition-colors">
                              <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-zinc-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: tip }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}

          {/* Ad Banner - Before Info Cards */}
          <div className="my-10 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* Enhanced Info Section */}
          <div className="relative my-12 py-8">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-zinc-900/80 rounded-3xl border border-zinc-800/50 -z-10" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-gradient-to-r from-white/10 to-transparent rounded-r-full" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-gradient-to-l from-white/10 to-transparent rounded-l-full" />

            <div className="text-center mb-6">
              <h2 className="inline-flex items-center gap-3 text-2xl font-bold text-white">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                景點資訊一覽
              </h2>
              <div className="flex items-center justify-center gap-4 mt-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-700" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {blog.infoCards.map((card: { label: string; value: string }, index: number) => (
                <div key={index} className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-zinc-600/50 hover:bg-zinc-800/70 transition-all duration-300">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${colors.active} bg-clip-text text-transparent`}>
                      {card.label}
                    </span>
                    <p className="text-zinc-300 text-sm mt-2 leading-relaxed">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Banner - After Info Cards */}
          <div className="my-10 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
        </article>

        {/* Enhanced Related Posts / Back to Blog */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col items-center gap-6">
            {/* Decorative Element */}
            <div className="flex items-center gap-3">
              <div className={`w-12 h-px bg-gradient-to-r from-transparent to-${blog.activeColor}-500/50`} />
              <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className={`w-12 h-px bg-gradient-to-l from-transparent to-${blog.activeColor}-500/50`} />
            </div>

            <Link
              href="/blog"
              className={`group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${colors.active} text-white font-semibold shadow-lg ${colors.glow} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>探索更多精彩遊記</span>
            </Link>

            <p className="text-zinc-500 text-sm">發現更多東京旅遊景點與深度攻略</p>
          </div>
        </div>
      </div>
    </div>
  );
}
