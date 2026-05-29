import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI 搶工潮：這個時代我們如何自救？',
  description: '當ChatGPT、Midjourney、Claude改變了遊戲規則，打工族、freelancer、創業者要怎麼辦？從翻譯員、設計師到客服，誰最受威脅？又誰最難被取代？',
}

export default function AIJobRevolution() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">科技評論</span>
            <span>Reading time: 12 min</span>
            <span>May 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI 搶工潮：這個時代我們如何自救？
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            老實講，寫呢篇文嗰陣，我自己都有些少「生存焦慮」。如果你都係，唔好怕，你唔係我一個人。
          </p>
        </div>

        {/* Intro - Personal Hook */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-8 border border-blue-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            三個月前，我個朋友阿強突然搵我食飯。佢係香港某大翻譯公司做咗八年資深翻譯員，月薪四萬幾，係親戚眼中嘅「專業人士」。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            佢話：「公司準備引入AI翻譯系統，話可以取代七成人手。我唔知自己係咪就係嗰七成。」
          </p>
          <p className="text-gray-700 leading-relaxed">
            食完呢頓飯，我失眠咗成晚。我自己係做文字工作，唔通真係等到淘汰先嚟後悔？
          </p>
        </div>

        {/* Section 1: What happened */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">一、AI到底搞邊個行業？</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          好多人以為AI只係「幫你揾資料」或者「陪你聊天」嘅工具。但係如果你係以下呢啲行業，可能已經感受到寒意：
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-red-50 p-5 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-700 mb-3">🚨 高危行業</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• 翻譯員（特別係文件翻譯）</li>
              <li>• 基礎平面設計（logo、海報）</li>
              <li>• 客服（電話/文字）</li>
              <li>• 基礎程式員（CRUD types）</li>
              <li>• 內容編輯（洗稿、偽原創）</li>
              <li>• 資料輸入員</li>
            </ul>
          </div>
          <div className="bg-green-50 p-5 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-700 mb-3">✅ 相對安全</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• 心理輔導員、治療師</li>
              <li>• 專業律師（複雜案件談判）</li>
              <li>• 醫生（診斷需要人味）</li>
              <li>• 教師（互動教育）</li>
              <li>• 創業者、管理層</li>
              <li>• 維修技師、水電工</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Real stories */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">二、佢哋點解走過嚟？</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">👩‍💻</span>
              <div>
                <p className="font-bold text-gray-900">May（以前係Freelance翻譯員）</p>
                <p className="text-sm text-gray-500">32歲，freelance譚粗為生</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「以前一個月穩穩陣陣接十幾單，夠生活。但係舊年開始，客人問我：『AI翻譯一千字先收我十文，你收我幾多？』我真係答唔到。原來我哋同一個軟件比較緊。」
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              不過佢後來轉型做「AI翻譯校對」，幫公司審核AI譯文嘅質量，收費仲高過以前。「唔係AI取代我，而係懂用AI嘅翻譯員取代咗唔識用嘅我。」
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">👨‍🎨</span>
              <div>
                <p className="font-bold text-gray-900">阿Ken（視覺設計師）</p>
                <p className="text-sm text-gray-500">28歲，廣告公司做咗四年</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「我老世同我哋開會，show咗幾張AI生成嘅logo，問我哋：『你觉得AI可否做到你哋70%嘅工作？』我嗰晚真係瞓唔着。」
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              佢最後選擇自學AI工具，而家唔單止未被取代，仲升咗做創意總監：「而家我哋team係用AI做初稿，人係做最後把關。你要識喺上游游水，唔係喺下游等水流走。」
            </p>
          </div>
        </div>

        {/* Section 3: Why human still matters */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">三、點解AI始終取代唔到人？</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          我曾經問過一個AI研究學者：「究竟AI幾時可以完全取代人類？」佢笑住答我：「你想問嘅可能係：『幾時冇老師、冇醫生、冇你哋呢啲麻撧嘢？』答案是：唔會。」
        </p>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-8">
          <h3 className="font-bold text-yellow-800 mb-4">🤔 AI做唔到的三件事</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-1">1. 真正嘅關係建立</p>
              <p className="text-gray-700 text-sm">你阿婆入院，佢想見嘅係姑娘陪佢坐下吹水，唔係AI話「你血壓有少少高」。人需要被理解，唔係被分析。</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">2. 喺模糊地帶做判斷</p>
              <p className="text-gray-700 text-sm">法律、道德、商業決定——好多時唔係對與錯，而係「邊個取捨比較少」。呢個需要價值判斷，而價值係人訂嘅。</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">3. 真正嘅創意（而唔係 recombination）</p>
              <p className="text-gray-700 text-sm">AI係將世界上已有嘅野重新combination。但係「從未有人諗過」呢個moment，暫時只有人可以製造。</p>
            </div>
          </div>
        </div>

        {/* Section 4: Practical advice */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">四、具體可以點做？</h2>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl flex-shrink-0">1️⃣</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">立即開始用AI工具</p>
              <p className="text-gray-700 text-sm">唔好再等。你今日用ChatGPT做嘢唔係偷懶，係為將來裝備自己。無論你做咩行業，試下將你10%嘅工作AI化。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl flex-shrink-0">2️⃣</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">专注「人」嘅技能</p>
              <p className="text-gray-700 text-sm">談判、教學、輔導、銷售、建立關係——呢啲AI做唔好，或者做起嚟好假。多啲投資喺呢啲技能。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl flex-shrink-0">3️⃣</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">做 T-shaped 人才</p>
              <p className="text-gray-700 text-sm">一個範疇好專業（深度），但係闊度要夠——要知其他領域做緊乜嘢。純做一樣野，好危險。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl flex-shrink-0">4️⃣</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">建立自己嘅個人品牌</p>
              <p className="text-gray-700 text-sm">如果個客係搵「你」做嘢，AI再掂都唔關事。但係如果你只係一個可取代嘅單位，幾時被Cut都唔出奇。</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl flex-shrink-0">5️⃣</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">保持學習，但唔好焦慮</p>
              <p className="text-gray-700 text-sm">資訊接受得太多，反而會原地踏步。揀一兩個範疇，深耕就係。用「每個月學一樣新嘢」取代「每日追蹤所有AI新聞」。</p>
            </div>
          </div>
        </div>

        {/* Section 5: My reflection */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">五、寫俾我自己，也寫俾你</h2>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            坦白講，寫呢篇文之前，我自己去傾偈咗幾個唔同行業嘅朋友。有做保險嘅、有做教師嘅、有做廚師嘅。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            佢哋共同嘅擔心就係：「究竟我係咪下一個？」
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            我唔想呃你話「放心，AI唔會取代你」。因為老實講，某些工作消失係必然嘅。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            但係我想話你知：「人」嘅價值從來都唔係因為你做嘢幾快幾平。而係因為你有感受、會關心人、會喺適當時候做啱嘅決定。
          </p>
          <p className="text-gray-700 leading-relaxed">
            AI係工具，我哋係用家。將來唔會屬於AI，會屬於識用AI嘅人。
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600 mt-8">
          <p><strong>編輯觀點：</strong>本文祇代表作者個人觀察同反思，唔構成任何專業建議。每個人嘅情況唔同，請自行判斷適合你嘅路。</p>
        </div>

        {/* Author box */}
        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
            ✍️
          </div>
          <div>
            <p className="font-semibold text-gray-900">NewsFlow 編輯部</p>
            <p className="text-sm text-gray-500">專注科技觀察，同你一齊思考時代轉變</p>
          </div>
        </div>
      </article>
    </main>
  )
}
