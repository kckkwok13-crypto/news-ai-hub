import { NextRequest, NextResponse } from 'next/server'

const MODEL_RESPONSES = {
  greeting: [
    '👋 你好！我是阿傑，NewsKingdom 的 AI 分析師。你可以問我關於任何新聞嘅問題，我會盡力幫你分析！',
    '你好！歡迎來到 NewsKingdom！我係阿傑，有咩我可以幫你分析嘅？',
    '👋 早晨！我係阿傑，今日有咩新聞想了解多啲？',
    '嗨！歡迎使用 NewsKingdom AI 分析助手。我係阿傑，有任何新聞相關嘅問題都可以問我！',
    '你好呀！我係阿傑，你嘅新聞分析助手。有咩想知嘅？',
    '👋 Hello! 歡迎來到 NewsKingdom！有咩我可以幫你分析嘅，儘管問！',
    '早晨！你今日想關注邊類型嘅新聞？我可以幫你分析市場、加密、經濟等範疇。',
    '你好！我係阿傑，NewsKingdom 嘅 AI 分析師。請問有咩我可以幫你？',
    '👋 您好！我是阿傑，很高興為你服務。有任何問題請隨時提出！'
  ],
  market: [
    '📈 市場分析建議：\n\n1. 留意央行政策走向\n2. 關注主要指數表現\n3. 注意資金流向板塊\n4. 控制倉位，做好風險管理',
    '💹 對比上年同期，目前市場氣氛偏向觀望。建議：\n• 分散投資\n• 設止蝕位\n• 關注宏觀經濟數據',
    '📊 市場走勢分析：\n近期波動加劇，建議投資者保持謹慎，多做功課再入市。',
    '📉 現時市場情緒偏向保守，建議控制倉位比例，唔好過度集中喺單一行業。',
    '📈 留意美股三大指數走勢，納指表現喺科技股帶動下相對強勢。',
    '💰 港股今日受外圍因素影響，波動幅度擴大，建議密切關注北水流向。',
    '📊 A股近期表現牛皮，市場觀望情緒濃，建議保持觀望態度。',
    '📈 道指期货小幅上涨，市场关注今晚美国CPI数据公布。',
    '💹 日經指数今日继续走高，受惠于日元走弱出口股造好。',
    '📊 欧洲股市普遍向上，德国DAX指数领涨。'
  ],
  crypto: [
    '₿ 加密貨幣觀點：\n\n加密市場波動大，請注意以下幾點：\n• 比特幣ETF流入流出\n• 宏觀經濟影響\n• 監管政策變化\n• 技術面支持位',
    '🔐 加密貨幣分析：\n呢個範疇風險較高，建議了解項目基本面，先做好風險管理再考慮入場。',
    '₿ 比特幣近期走勢受到 ETF 資金流向同減半預期影響，建議密切關注機構持倉變化。',
    '📈 比特幣ETF淨流入持續，機構投資者佔比提升，短線有利比特幣價格。',
    '₿ 加密市場情緒指數回暖，但需要注意大戶地址變化，可能存在洗倉風險。',
    '🔒 比特幣現貨ETF獲批後，機構採用率持續提升，建議中長線持有。',
    '₿ 以太坊升級進展順利，Layer 2 生態持續擴展，關注TVL變化。',
    '📊 加密恐慌與貪婪指數目前處於「中性」區間，市場情緒穩定。',
    '₿ 比特幣減半周期臨近，歷史數據顯示減半後價格通常有正面表現。',
    '🔐 加密貨幣市場資金持續流入，但需注意宏觀利率環境影響。'
  ],
  tech: [
    '💻 科技行業動態：\n\nAI 發展迅速，以下範疇值得關注：\n• 生成式 AI 應用\n• 晶片需求\n• 雲端服務增長',
    '🤖 科技股分析：\n大型科企嘅 AI 投資可能影響未來幾年估值，建議關注佢哋嘅研發開支同產品路線圖。',
    '💡 科技趨勢：\n半導體需求回暖，AI 相關個股繼續係市場焦點。',
    '💻 AI 晶片需求持續旺盛，NVIDIA 產能成為市場關注焦點。',
    '🤖 OpenAI、Google、Meta 等科企喺 AI 領域嘅競爭加劇，投資者需關注邊個能率先突圍。',
    '💻 Apple Vision Pro 开售，AR/VR 市場關注度提升，但普及需時。',
    '📱 智能手機市場復甦乏力，折疊屏成為增量突破口。',
    '☁️ 雲端服務市場增長穩健，AWS、Azure、Google Cloud 三強格局穩定。',
    '💻 半導體行業庫存調整接近尾聲，預期下半年需求回暖。',
    '🤖 AI 應用場景持續擴展，从內容生成到醫療診斷，想像空間巨大。'
  ],
  economy: [
    '📊 宏觀經濟分析：\n\n通脹同利率係關鍵變數：\n• 各國央行政策取向\n• 就業數據\n• GDP 增長\n• 消費者信心',
    '🏛️ 經濟數據：\n留意通脹走勢，如果降溫訊號明確，可能影響央行減息預期。',
    '💰 宏觀經濟觀點：\n全球經濟放緩但通脹黏性依然較高，投資者需要喺成長同防御之間做平衡。',
    '📉 美聯儲利率政策影響全球流動性，密切關注官員言論。',
    '📊 美國非農就業數據出爐，市場解讀為經濟軟著陸訊號。',
    '💰 中國人民銀行維持利率不變，政策倾向稳增长。',
    '📈 歐元區通脹回落速度快過預期，歐央行減息預期升溫。',
    '🏛️ 日本央行政策正常化成為焦點，日圓走勢影響廣泛。',
    '📊 全球供應鏈壓力緩解，通脹見頂回落但服務類通脹仍高。',
    '💹 美元指數走弱，非美貨幣有機會反彈。'
  ],
  political: [
    '🏛️ 政策影響分析：\n\n地緣政治同貿易政策可以影響市場：\n• 大選年政策走向\n• 國際關係變化\n• 行業監管政策',
    '🌍 地緣政治因素：\n國際關係變化可能影響特定行業，建議關注相關新聞並評估影響。',
    '📜 政策解讀：\n政府政策對特定行業有直接影響，例如新能源、科技監管等範疇需要特別留意。',
    '🏛️ 美國大選年股市通常波動較大，政策不確定性影響投資信心。',
    '🌍 中美貿易關係變化影響全球供應鏈，同時影響科技行業估值。',
    '📜 歐盟碳中和政策加速，新能源行業長期受益。',
    '🏛️ 香港金融監管政策持續優化，國際金融中心地位穩固。',
    '🌍 地緣政治風險升溫，黃金、美元等避險資產受青睞。',
    '📜 中國政策支持民營經濟，民企信心有所恢復。',
    '🏛️ 美國科技監管加劇，巨型科企面臨更多限制。'
  ],
  thanks: [
    '唔客氣！如果有任何其他問題，隨時問我！',
    '👍 有咩再問我啦，我隨時幫你分析！',
    '😊 希望你覺得有幫助！有其他問題記得問我！',
    '不客气！有任何问题欢迎再来问我！',
    '👍 帮到你就好！继续保持关注新闻！',
    '😊 很高兴能帮到你！下次再见！',
    '🙂 不客气，祝你投资顺利！',
    '👍 有需要再问，我随时待命！',
    '😊 祝你睇新聞愉快！有咩再聯繫我！'
  ],
  general: [
    '📰 對於呢個話題，建議你：\n\n1. 查看多個消息來源\n2. 了解事情背景\n3. 評估各方觀點\n4. 獨立思考判斷',
    '🔍 分析建議：\n遇到重要新聞，最好交叉睇幾個唔同立場嘅媒體，咁樣可以得到更全面嘅睇法。',
    '💭 作為分析師，我建議你保持批判性思維，唔好輕信單一消息來源，要學會自己判斷消息嘅可靠性。',
    '📋 建议保持每日阅读财经新闻的习惯，建立自己的分析框架。',
    '💡 分析新闻时要注意区分事实和观点，避免被情绪化报道影响判断。',
    '📚 多关注权威财经媒体的数据和分析师观点，形成自己的投资逻辑。',
    '🔎 学会从不同角度看待新闻事件，宏观经济、行业趋势、公司基本面都要了解。',
    '📊 做好新闻信息分类，区分短期噪音和长期趋势。',
    '💭 建立自己的投资决策框架，不要盲目跟风。',
    '📈 持续学习宏观经济知识，提升新闻解读能力。'
  ],
  news_tip: [
    '📋 睇新聞嘅小貼士：\n\n1. 標題黨要小心\n2. 睇下消息來源係咪可靠\n3. 留意數據係咪有根據\n4. 了解上下文好重要',
    '🔎 建議你參考多個資訊來源，特別係主流財經媒體，咁樣可以得到更全面嘅資訊。',
    '📚 了解事情最好從多個角度出發，唔好單睇一個媒體嘅報道。可以的話，查看官方資料同數據。',
    '⚠️ 新闻标题有时会误导，请仔细阅读正文内容。',
    '📰 建议关注财经通讯社的原始报道，避免二手信息失真。',
    '🔍 使用多个新闻平台交叉验证重要信息。',
    '📊 学会识别新闻中的数据来源和样本量。',
    '💡 重要新闻要多角度看，不要只看单一媒体。',
    '📋 养成记录新闻要点的习惯，方便后续追踪。',
    '🔎 关注新闻发布的时间，避免阅读过时的信息。'
  ],
  // New categories
  stocks: [
    '📈 股票投資建議：\n\n1. 關注公司基本面\n2. 分散投資組合\n3. 設定止蝕位\n4. 長期持有優質股',
    '💹 個股分析要點：\n• 營收增長趨勢\n• 毛利率變化\n• 現金流狀況\n• 管理層質素',
    '📊 美股七大巨頭近期承壓，AI 投資回報成關注焦點。',
    '📈 港股藍籌業績期，關注騰訊、阿里巴巴等重磅股表現。',
    '💹 A股白馬股估值修復中，外資流入情況值得關注。',
    '📊 半導體股估值偏高，宜等待回調機會。',
    '💰 派息股喺低息環境下具吸引力，電訊、公用事業板塊值得關注。',
    '📉 零售股受消費降級影響，高中檔品牌需謹慎。',
    '💹 醫藥股估值合理，創新藥、生物科技為長線看好板塊。',
    '📈 新能源汽車競爭加劇，龍頭車廠份額持續提升。'
  ],
  forex: [
    '💱 外匯市場分析：\n\n美元走勢受以下因素影響：\n• 美聯儲利率政策\n• 經濟數據表現\n• 地緣政治風險',
    '📊 美匯指數近期走勢偏強，非美貨幣普遍承壓。',
    '💹 歐元區經濟數據轉弱，歐元/美元有機會測試支撐位。',
    '📈 日圓持續走弱，日本央行干預風險升溫。',
    '💱 離岸人民幣變動影響港股表現，密切關注人行政策。',
    '📊 英鎊受英國經濟放緩影響，走勢偏弱。',
    '💹 澳元受大宗商品價格影響，与中国需求高度相关。',
    '📈 加元受油價波動影響，走勢與能源板塊相關。',
    '💱 新興市場貨幣波動加劇，注意風險管理。',
    '📊 外匯期權市場顯示美元短期內維持強勢。'
  ],
  gold: [
    '🥇 黃金走勢分析：\n\n影響金價嘅因素：\n• 美元走勢\n• 實際利率\n• 避險需求\n• 各國央行儲備',
    '📈 通脹預期升溫支持金價，但美元走強抑制升幅。',
    '💰 地緣政治風險升溫，黃金避險需求增加。',
    '📊 各國央行持續增持黃金儲備，長期利好金價。',
    '🥇 技術面睇，金價守住 $2000 關口，中線仍然看好。',
    '📈 金礦股表現落後現貨金價，估值有修復空間。',
    '💹 美債收益率回升抑制金價，但逢低有買盤承接。',
    '📊 白銀跟隨黃金走強，工業需求復甦提供額外支持。',
    '🥇 ETF持倉量回升，機構投資者重新關注黃金。',
    '📈 央行增黃金抛美債的趨勢持續，長線利好金價。'
  ],
  energy: [
    '⛽ 能源市場動態：\n\n油價影響因素：\n• OPEC+產量政策\n• 全球需求變化\n• 庫存數據\n• 地緣政治',
    '📊 原油供需趨於平衡，油價高位震盪。',
    '⛽ OPEC+維持減產立場，支撐油價低位。',
    '📈 電動車普及影響長期石油需求，但短期油價仍受供應約束。',
    '💰 天然氣價格回落，歐洲能源危機緩解。',
    '📊 美國頁岩油產量創新高，抑制油價升幅。',
    '⛽ 中國需求復甦速度影響油價走勢。',
    '📈 太陽能、風電投資加快，傳統能源股估值受壓。',
    '💹 煉油毛利率回升，油服公司業績改善。',
    '📊 潔淨能源轉型加速，能源股需要重新定位。',
    '⛽ 伊朗供應恢復預期影響油價，地緣政治風險加劇波動。'
  ],
  realestate: [
    '🏠 房地產市場分析：\n\n樓價影響因素：\n• 利率環境\n• 人口結構\n• 供需關係\n• 政府政策',
    '📈 香港樓市近期成交回升，但價格仍處於調整週期。',
    '💰 高息環境抑制樓價上升，剛需用家可考慮入市。',
    '📊 中國房地產復甦緩慢，民企發展商仍面臨壓力。',
    '🏠 美國樓價因為庫存低企保持堅挺，但利率上升影響需求。',
    '📈 租金回報率吸引力回升，收租股估值修復中。',
    '💹 商業地產受在家工作趨勢影響，寫字樓空置率上升。',
    '📊 深圳、上海豪宅市場活躍，資金配置需求支持價格。',
    '🏠 內地樓市政策邊際放鬆，但復甦力度仍待觀察。',
    '📈 工業地產、物流倉庫需求持續旺盛。',
    '💰 海外樓市美元計價資產受追捧，注意匯率風險。'
  ],
  healthcare: [
    '🏥 醫藥行業動態：\n\n關注範疇：\n• 創新藥研發\n• 醫保談判\n• 人口老齡化\n• 政策變化',
    '💊 創新藥審批加速，利好生物科技板塊。',
    '📈 AI藥物研發成為新趨勢，提高藥物發現效率。',
    '🏥 人口老齡化支持醫藥行業長期增長。',
    '💹 醫保靈魂談判壓低藥價，創新藥仍有定價空間。',
    '📊 中藥股受政策扶持，但估值已經偏高。',
    '💊 全球CRO市場持續擴張中國企業份額提升。',
    '🏥 民營醫療機構發展空間大，但競爭加劇。',
    '📈 疫苗行業進入成熟期，呼吸道相關產品需求穩定。',
    '💹 醫療器械國產替代加快，相關企業受益。',
    '📊 互聯網醫療滲透率提升，但盈利模式待驗證。'
  ],
  commodities: [
    '🌾 大宗商品動態：\n\n主要商品：\n• 農產品\n• 金屬\n• 能源\n• 原材料',
    '📈 農產品價格受天氣影響，近期走勢分化。',
    '💰 銅價受到電動車需求支持，但中國需求放緩壓抑升幅。',
    '📊 鋰價持續下跌，電動車成本壓力緩解。',
    '🌾 俄羅斯穀物出口恢復，壓低小麥價格。',
    '💹 鐵礦石需求回暖，但供應壓力仍在。',
    '📈 鋁價受環保減產支持，成本上升支撐價格。',
    '🌾 大豆、玉米價格受到美國種植面積預期影響。',
    '💰 稀土供應緊張，新能源需求支撐價格。',
    '📊 咖啡、糖價格波動，天氣因素影響明顯。',
    '💹 木材價格受到房屋建築活動放緩影響。'
  ],
  usstock: [
    '📈 美股投資策略：\n\n1. 關注美聯儲政策\n2. 留意通脹數據\n3. 選擇優質藍籌\n4. 控制估值風險',
    '💹 標普500指數高位震盪，AI概念股仍係市場焦點。',
    '📊 納斯達克100指數估值偏高，注意回調風險。',
    '📈 道指成分股業績穩健，但增長放緩需要注意。',
    '💹 FAANG股票估值修復中，AI投入影響未來盈利。',
    '📊 美股二線股開始跑贏大市，資金輪動迹象明顯。',
    '📈 小型股羅素2000落後大市，經濟放緩憂慮影響。',
    '💹 半導體股估值偏高，等候回調再考慮增持。',
    '📊 零售股財報好壞參半，消費者支出放緩跡象明显。',
    '💰 金融股受惠於利率環境，但信貸質量需要關注。'
  ],
  hkstock: [
    '📈 港股投資建議：\n\n1. 關注北水流向\n2. 留意業績期表現\n3. 控制藍籌比重\n4. 關注新經濟股',
    '💹 騰訊業績符預期，遊戲版號恢復支持股價。',
    '📊 阿里巴巴雲業務增長放緩，但電商基本盤穩健。',
    '📈 港股估值吸引，外資持續低配但有機會反彈。',
    '💹 科技股監管邊際放鬆，估值修復行情延續。',
    '📊 港股IPO市場回暖，新股認購氣氛改善。',
    '💰 科網股盈利預期下調，但估值已反映悲觀情緒。',
    '📈 港匯偏弱但未见走資壓力，市場關注企業業績。',
    '💹 電車股估值合理，高息吸引收息投资者。',
    '📊 港股沽空比率回落，技術性反彈可能延續。',
    '💹 新股上市審批加快，市場活力恢復中。'
  ],
  startup: [
    '🚀 初創企業動態：\n\n關注領域：\n• 人工智能\n• 金融科技\n• 醫療健康\n• 綠色科技',
    '💰 AI 初創估值回落，優質標的迎來入場機會。',
    '📈 金融科技監管沙盒持續，為創新提供空間。',
    '🚀 獨角獸企業上市步伐放緩，但長期估值仍受關注。',
    '💹 Web3 行業調整，區塊鏈應用落地為關鍵。',
    '📊 ESG 初創受青睞，綠色金融支持力度加大。',
    '💰 晶片設計初創受中美關係影響，但需求仍然旺盛。',
    '🚀 初創融資環境收緊，現金為王成為主調。',
    '📈 生物科技初創IPO回暖，但二級市場估值壓力大。',
    '💹 教育科技調整完成，優質企業重新出發。',
    '📊 半導體設備初創受制於出口管制，區域化成趨勢。'
  ],
  tips: [
    '💡 投資小提示：分散投資可以降低風險，唔好把所有資金放在同一個籃子。',
    '📋 睇財報時要注意：營收增長、毛利率、經營現金流係核心指標。',
    '💹 設定投資目標時要現實，唔好期望年年翻倍，穩健增長更重要。',
    '🔎 學會等待，優質股票有時需要耐心持有幾年先有回報。',
    '📊 關注宏觀經濟周期，不同行業喺不同周期表現各異。',
    '💰 緊急儲蓄要預留3-6個月生活費，呢個係投資嘅前提。',
    '📈 定期檢視投資組合，根據市場變化適時調整。',
    '💡 避免情緒化交易，恐慌時唔好沽出，貪婪時唔好追入。',
    '📋 了解自己嘅風險承受能力，選擇適合自己嘅投資策略。',
    '💹 關注公司治理，管理層誠信同能力影響企業長期發展。'
  ],
  daily: [
    '📅 今日市場要點：密切關注美國CPI數據，可能影響美聯儲政策預期。',
    '📊 開市前提示：港股ADR普遍低開，預計恒指今日區間震盪。',
    '💹 美股收市：三大指數小幅上漲，市場氣氛謹慎樂觀。',
    '📈 亞太市場：日經指數再創新高，資金持續流入日本股市。',
    '💰 外匯市場：美元指數回落，非美貨幣反彈。',
    '📊 大宗商品：黃金守住 $2000 關口，油價高位整理。',
    '📈 加密市場：比特幣 ETF 持續錄得淨流入，價格區間上移。',
    '💹 港股期貨：夜期低水約50點，預計今日A股影響港股表現。',
    '📋 財經日曆：今晚關注美國失業率數據，可能影響聯儲政策預期。',
    '💰 利率市場：聯邦基金期貨顯示年內減息預期降溫。'
  ],
  // New categories for quick topics
  analysis: [
    '📊 今日市場形勢分析：\n\n1. 美股走勢偏強，納指表現較好\n2. 港股受外圍影響，區間震盪\n3. 比特幣 ETF 資金持續流入\n4. 建議控制倉位，關注宏觀數據',
    '💹 市場分析要點：\n\n• 央行政策影響流動性\n• 通脹數據影響加息預期\n• 資金輪動明顯\n• 關注估值合理嘅優質股',
    '📈 綜合分析：\n\n目前市場氣氛偏向觀望，但唔少板塊仍有結構性機會。建議關注：\n1. AI 相關科技股\n2. 比特幣 ETF 概念股\n3. 業績符合預期嘅藍籌',
    '🔍 形勢評估：\n\n全球宏觀環境複雜，但有些領域值得注意：\n• 各國央行政策分歧\n• 地緣政治風險\n• 技術創新加速\n\n建議保持多元化配置。'
  ],
  news_summary: [
    '📰 今日重點新聞摘要：\n\n1. 美國CPI數據即將出爐，市場氣氛謹慎\n2. 比特幣 ETF 持續獲機構青睞\n3. AI 晶片需求依然旺盛\n4. 各國央行政策走向影響全球市場',
    '📋 今日財經要聞：\n\n• 美股财报季進行中，多間大型科企公佈業績\n• 比特幣價格喺 ETF 資金支持下區間上移\n• 日圓持續走弱，日本央行干預風險升溫\n• 中國經濟數據顯示復甦態勢',
    '📊 今日市場重點：\n\n1. 聯儲官員言論影響利率預期\n2. 歐元區通脹數據影響減息預期\n3. 比特幣減半周期臨近，市場關注\n4. AI 產業持續高速發展',
    '🔴 今日重要消息：\n\n• 全球央行年會閉幕，政策指引大致明確\n• 比特幣現貨 ETF 獲批後，機構採用率提升\n• 半導體行業庫存調整接近尾聲\n• 黃金價格受到多重因素影響'
  ],
  investment_tips: [
    '💡 投資策略建議：\n\n1. 分散投資：唔好將所有資金放在同一個籃子\n2. 設定止蝕：每筆交易都要有明確止蝕位\n3. 長期視角：優質資產值得耐心持有\n4. 關注現金流：選擇有穩定現金流嘅公司',
    '📊 投資提醒：\n\n• 做好功課先好入市\n• 了解自己嘅風險承受能力\n• 唔好被情緒影響決定\n• 定期檢視投資組合',
    '💰 投資心得：\n\n1. 機會處處，但需要有耐心\n2. 危機中往往孕育機會\n3. 分散投資降低風險\n4. 持續學習提升認知',
    '🎯 投資原則：\n\n• 唔好預測市場，學會應對\n• 設定合理預期，穩健增長\n• 關注公司基本面\n• 保持獨立思考'
  ],
  sector_analysis: [
    '📈 板塊分析：\n\n科技板塊：\n• AI 應用場景持續擴展\n• 半導體需求回暖\n• 雲端服務增長穩健\n\n建議關注大型科企同 AI 概念股。',
    '💹 金融板塊：\n\n• 利率環境有利銀行股\n• 數字金融發展迅速\n• 保險行業復甦\n\n留意資產質量同估值。',
    '🏥 醫藥板塊：\n\n• 創新藥審批加速\n• 人口老齡化支持長期需求\n• 醫療器械國產替代\n\n關注研發實力強嘅企業。',
    '✈️ 旅遊休閒板塊：\n\n• 出行需求持續恢復\n• 酒店、航空受益\n• 消費升級趨勢\n\n關注恢復確定性高嘅龍頭。'
  ],
  risk_management: [
    '🛡️ 風險管理建議：\n\n1. 倉位控制：每個倉位唔好超過總資金10-15%\n2. 分散配置：唔同行業、不同資產類別\n3. 設定止蝕：每筆交易都要有止蝕位\n4. 現金儲備：預留10-20%現金應對突發情況',
    '⚠️ 風險提示：\n\n• 加密貨幣波動大，謹慎配置\n• 高估值股票注意回調風險\n• 地緣政治隨時影響市場\n• 保持流動性應對波動',
    '💼 資產配置建議：\n\n• 股票：50-60%（分散不同板塊）\n• 債券/黃金：20-30%（穩定倉位）\n• 現金：10-20%（靈活應對）\n• 另類投資：5-10%（可選）',
    '📋 風控檢查清單：\n\n□ 每筆交易有止蝕位\n□ 單一持倉不超15%\n□ 預留足夠現金\n□ 定期檢視組合\n□ 關注宏觀風險'
  ]
}

function getResponse(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase()

  // Check for specific keywords - more comprehensive matching
  if (lowerPrompt.includes('hello') || lowerPrompt.includes('你好') || lowerPrompt.includes('早晨') || lowerPrompt.includes('hi') || lowerPrompt.includes('喂') || lowerPrompt.includes('hi there')) {
    return MODEL_RESPONSES.greeting[Math.floor(Math.random() * MODEL_RESPONSES.greeting.length)]
  }

  if (lowerPrompt.includes('比特') || lowerPrompt.includes('btc') || lowerPrompt.includes('crypto') || lowerPrompt.includes('以太') || lowerPrompt.includes('eth') || lowerPrompt.includes('區塊鏈') || lowerPrompt.includes('比特幣')) {
    return MODEL_RESPONSES.crypto[Math.floor(Math.random() * MODEL_RESPONSES.crypto.length)]
  }

  if (lowerPrompt.includes('股票') || lowerPrompt.includes('股市') || lowerPrompt.includes('投資') || lowerPrompt.includes('美股') || lowerPrompt.includes('港股') || lowerPrompt.includes('a股')) {
    if (lowerPrompt.includes('美') || lowerPrompt.includes('nasdaq') || lowerPrompt.includes('spy') || lowerPrompt.includes('標普')) {
      return MODEL_RESPONSES.usstock[Math.floor(Math.random() * MODEL_RESPONSES.usstock.length)]
    }
    if (lowerPrompt.includes('港') || lowerPrompt.includes('恒生') || lowerPrompt.includes('hk')) {
      return MODEL_RESPONSES.hkstock[Math.floor(Math.random() * MODEL_RESPONSES.hkstock.length)]
    }
    return MODEL_RESPONSES.market[Math.floor(Math.random() * MODEL_RESPONSES.market.length)]
  }

  if (lowerPrompt.includes('科技') || lowerPrompt.includes('ai') || lowerPrompt.includes('nvidia') || lowerPrompt.includes('apple') || lowerPrompt.includes('google') || lowerPrompt.includes('meta') || lowerPrompt.includes('微软')) {
    return MODEL_RESPONSES.tech[Math.floor(Math.random() * MODEL_RESPONSES.tech.length)]
  }

  if (lowerPrompt.includes('經濟') || lowerPrompt.includes('通脹') || lowerPrompt.includes('利率') || lowerPrompt.includes('gdp') || lowerPrompt.includes('加息') || lowerPrompt.includes('減息')) {
    return MODEL_RESPONSES.economy[Math.floor(Math.random() * MODEL_RESPONSES.economy.length)]
  }

  if (lowerPrompt.includes('政治') || lowerPrompt.includes('政府') || lowerPrompt.includes('政策') || lowerPrompt.includes('戰爭') || lowerPrompt.includes('大選')) {
    return MODEL_RESPONSES.political[Math.floor(Math.random() * MODEL_RESPONSES.political.length)]
  }

  if (lowerPrompt.includes('thanks') || lowerPrompt.includes('多謝') || lowerPrompt.includes(' thx') || lowerPrompt.includes('thank')) {
    return MODEL_RESPONSES.thanks[Math.floor(Math.random() * MODEL_RESPONSES.thanks.length)]
  }

  if (lowerPrompt.includes('點睇') || lowerPrompt.includes('點解') || lowerPrompt.includes('點評') || lowerPrompt.includes('分析')) {
    return MODEL_RESPONSES.general[Math.floor(Math.random() * MODEL_RESPONSES.general.length)]
  }

  if (lowerPrompt.includes('外匯') || lowerPrompt.includes('美元') || lowerPrompt.includes('歐元') || lowerPrompt.includes('日圓') || lowerPrompt.includes('英鎊') || lowerPrompt.includes('匯率')) {
    return MODEL_RESPONSES.forex[Math.floor(Math.random() * MODEL_RESPONSES.forex.length)]
  }

  if (lowerPrompt.includes('黃金') || lowerPrompt.includes('gold') || lowerPrompt.includes('金價') || lowerPrompt.includes('白銀')) {
    return MODEL_RESPONSES.gold[Math.floor(Math.random() * MODEL_RESPONSES.gold.length)]
  }

  if (lowerPrompt.includes('油') || lowerPrompt.includes('能源') || lowerPrompt.includes('天然氣') || lowerPrompt.includes('opec')) {
    return MODEL_RESPONSES.energy[Math.floor(Math.random() * MODEL_RESPONSES.energy.length)]
  }

  if (lowerPrompt.includes('樓') || lowerPrompt.includes('房地產') || lowerPrompt.includes('地產') || lowerPrompt.includes('樓市')) {
    return MODEL_RESPONSES.realestate[Math.floor(Math.random() * MODEL_RESPONSES.realestate.length)]
  }

  if (lowerPrompt.includes('醫') || lowerPrompt.includes('藥') || lowerPrompt.includes('health') || lowerPrompt.includes('製藥')) {
    return MODEL_RESPONSES.healthcare[Math.floor(Math.random() * MODEL_RESPONSES.healthcare.length)]
  }

  if (lowerPrompt.includes('大宗商品') || lowerPrompt.includes('銅') || lowerPrompt.includes('鋁') || lowerPrompt.includes('鐵') || lowerPrompt.includes('農產品')) {
    return MODEL_RESPONSES.commodities[Math.floor(Math.random() * MODEL_RESPONSES.commodities.length)]
  }

  if (lowerPrompt.includes('初創') || lowerPrompt.includes('startup') || lowerPrompt.includes('創投') || lowerPrompt.includes('獨角獸')) {
    return MODEL_RESPONSES.startup[Math.floor(Math.random() * MODEL_RESPONSES.startup.length)]
  }

  if (lowerPrompt.includes('提示') || lowerPrompt.includes('建議') || lowerPrompt.includes('小貼士') || lowerPrompt.includes('tips')) {
    return MODEL_RESPONSES.tips[Math.floor(Math.random() * MODEL_RESPONSES.tips.length)]
  }

  if (lowerPrompt.includes('今日') || lowerPrompt.includes('今天') || lowerPrompt.includes('daily') || lowerPrompt.includes('每日')) {
    return MODEL_RESPONSES.daily[Math.floor(Math.random() * MODEL_RESPONSES.daily.length)]
  }

  // New category keyword detection for quick topics
  if (lowerPrompt.includes('分析一下') || lowerPrompt.includes('形勢') || lowerPrompt.includes('走勢') || lowerPrompt.includes('市況')) {
    return MODEL_RESPONSES.analysis[Math.floor(Math.random() * MODEL_RESPONSES.analysis.length)]
  }

  if (lowerPrompt.includes('有咩新聞') || lowerPrompt.includes('重要新聞') || lowerPrompt.includes('今日有咩') || lowerPrompt.includes('頭條')) {
    return MODEL_RESPONSES.news_summary[Math.floor(Math.random() * MODEL_RESPONSES.news_summary.length)]
  }

  if (lowerPrompt.includes('策略') || lowerPrompt.includes('投資') && (lowerPrompt.includes('建議') || lowerPrompt.includes('點做好') || lowerPrompt.includes('點樣'))) {
    return MODEL_RESPONSES.investment_tips[Math.floor(Math.random() * MODEL_RESPONSES.investment_tips.length)]
  }

  if (lowerPrompt.includes('板塊') || lowerPrompt.includes('板塊分析') || lowerPrompt.includes('邊個板塊') || lowerPrompt.includes('咩版塊')) {
    return MODEL_RESPONSES.sector_analysis[Math.floor(Math.random() * MODEL_RESPONSES.sector_analysis.length)]
  }

  if (lowerPrompt.includes('風險') || lowerPrompt.includes('止蝕') || lowerPrompt.includes('倉位') || lowerPrompt.includes('配置')) {
    return MODEL_RESPONSES.risk_management[Math.floor(Math.random() * MODEL_RESPONSES.risk_management.length)]
  }

  // Default to news tips
  return MODEL_RESPONSES.news_tip[Math.floor(Math.random() * MODEL_RESPONSES.news_tip.length)]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt } = body

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    // Return a smart response based on keywords
    const response = getResponse(prompt)

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error('AI API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}