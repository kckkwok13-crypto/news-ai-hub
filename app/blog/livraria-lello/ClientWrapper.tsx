'use client';

import Link from 'next/link';

export default function ClientWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-red-950 to-blue-950">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>返回 NewsFlow</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-red-500/30">
            📚 全球第三美書店 ── 魔法靈魂載體
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-yellow-300 bg-clip-text text-transparent">
            通往霍格華茲的魔幻階梯
          </h1>
          <h2 className="text-xl text-white/80 font-semibold mb-4">葡萄牙萊羅書店（Livraria Lello）百年書香大數據與深度慢活攻略</h2>
          <p className="text-white/60">July 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Livraria_Lello_Bookshop%2C_staircase%2C_skylight_and_bookcases%2C_Porto_%2838218323992%29.jpg/1280px-Livraria_Lello_Bookshop%2C_staircase%2C_skylight_and_bookcases%2C_Porto_%2838218323992%29.jpg"
            alt="萊羅書店內部"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-white/60 text-sm mb-12">
          ▲ 萊羅書店的標誌性猩紅色迴旋階梯，彩繪玻璃天窗折射出斑斕的光影魔法
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-red-900/50 to-stone-900/40 border border-red-500/30 rounded-2xl p-6 my-8">
            <p className="text-white text-lg italic leading-relaxed border-l-4 border-yellow-500 pl-6">
              「J.K. 羅琳說，波爾圖的夜充斥著咖啡與魔幻的香氣；而當你踏上萊羅書店那座蜿蜒交織、如紅色緞帶般的天堂階梯，看著陽光穿透頂層 8 米長的彩繪玻璃天窗，你才會明白：這不單止是一間書店，更是人類用石膏、木雕與文字築起的一座實體魔法聖殿。」
            </p>
          </div>

          <p id="intro">
            如果說路易一世大橋（Dom Luís I Bridge）連接著波爾圖杜羅河兩岸的醇厚酒香，那麼隱藏在老城核心獅子廣場旁的<strong>萊羅書店（Livraria Lello）</strong>，無疑就是這座葡萄牙古城最具魔幻色彩的精神桂冠。這座落成於 1906 年、融匯了極致新哥德式與新藝術運動風格的百年書海聖地，被 Lonely Planet 評為<strong>「全球第三美書店」</strong>。更因其與風靡全球的《哈利波特》有著千絲萬縷的「靈魂交織」而聲名大噪！
          </p>

          <h2 id="structure" className="text-white">📊 魔法迷的空間地理學 ── 萊羅書店四大核心展區</h2>

          <p>
            萊羅書店內部空間極其精巧、錯落有致，在短短兩層高的空間內塞滿了令人歎為觀止的古典雕刻與藝術圖騰。以下是這座世界文化地標的 4 大核心展區：
          </p>

          <div className="bg-slate-800/50 border border-red-500/30 rounded-2xl p-6 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-5">
                <h3 className="text-red-400 font-bold text-lg mb-3">🔴 天堂迴旋紅階梯</h3>
                <p className="text-white/80 text-sm mb-2">【書店絕對的靈魂】</p>
                <p className="text-white/60 text-sm">如流動液體般蜿蜒，外側純白石膏，內側鋪滿極震撼的猩紅色。</p>
              </div>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-5">
                <h3 className="text-blue-400 font-bold text-lg mb-3">🔵 巨幅彩繪玻璃天窗</h3>
                <p className="text-white/80 text-sm mb-2">【8米長的上帝光芒】</p>
                <p className="text-white/60 text-sm">2F天頂。純手工琉璃拼貼，刻有書店店訓「Decus in Labore」（勞動光榮）。</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-5">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">🟡 哈利波特靈魂牆</h3>
                <p className="text-white/80 text-sm mb-2">【霍格華茲的起點】</p>
                <p className="text-white/60 text-sm">1F角落。陳列各語種首版哈利波特書籍與四大學院主題魔法周邊。</p>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-5">
                <h3 className="text-green-400 font-bold text-lg mb-3">🟢 卡蒙斯絕版密室</h3>
                <p className="text-white/80 text-sm mb-2">【無價的文學孤本】</p>
                <p className="text-white/60 text-sm">2F後方玻璃櫃。存放包括《盧濟塔尼亞人之歌》首版在內的絕版文學古籍。</p>
              </div>
            </div>
          </div>

          <h2 id="architecture" className="text-white">📐 石頭與木紋的黑色幽默 ── 萊羅神殿三大驚人「偽裝大數據」</h2>

          <p>
            萊羅書店最讓人歎為觀止的不僅是它的美貌，更是 120 年前葡萄牙工匠登峰造極的<strong>「視覺偽裝術」</strong>。當你步入其中，會被漫天繁複的哥德式浮雕、拱頂與書架橫樑深深震撼。但現代文物保護大數據測量卻揭開了一個好玩的秘密：<strong>你眼睛所看到的一切，幾乎全都是「假的」！</strong>
          </p>

          <div className="bg-gradient-to-br from-yellow-900/30 to-stone-900/30 border border-yellow-600/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold mb-4">萊羅書店全店裝飾材質精確結構數據</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">石膏偽裝實木</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-stone-600 h-full rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">50%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">石膏偽裝花崗岩</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-gray-500 h-full rounded-full" style={{width: '30%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">30%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-white/80 text-sm">真正的松木與鋼骨</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full" style={{width: '20%'}}></div>
                </div>
                <div className="w-16 text-white text-sm">20%</div>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-4">這種天才的工藝在120年前完美解決了昂貴木材與結構承重的極限難題</p>
          </div>

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Exterior_of_the_Lello_Bookstore_in_Porto_-_Apr_2011.jpg/1280px-Exterior_of_the_Lello_Bookstore_in_Porto_-_Apr_2011.jpg"
              alt="萊羅書店外觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-white/60 text-sm mt-4 mb-8">
              ▲ 萊羅書店的外部建築，帶有文藝復興式雙層尖頂拱窗與手繪新藝術運動壁畫
            </p>
          </div>

          <h2 id="experience" className="text-white">📖 第一身沉浸實感：在猩紅階梯與漫天萬卷書香間看見奇蹟</h2>

          <p>
            走出波爾圖著名的卡爾莫教堂步行街，順著平坦的獅子廣場石磚路踱步前進，那一整面極其精美、帶有文藝復興式雙層尖頂拱窗與手繪新藝術運動壁畫（象徵著科學與藝術）的純白色新哥德式店面，便排山倒海般在眼前鋪開。這是一座隱藏在市中心的文學神殿。
          </p>

          <p>
            最震撼全場的，無疑是正中央那座名震全球的<strong>「天堂迴旋紅色階梯」</strong>。這座階梯沒有一根直線，如同一條充滿生命力的猩紅色液體綢帶，在半空中優雅地打著圈、盤旋交織向上延伸。當下午 18:15 左右，斜陽正好穿透頂層巨幅彩繪玻璃上那句「勞動光榮」，無數種由紅、藍，金、紫拼接而成的斑斕丁達爾光暈，如夢似幻地潑灑在扶手上。
          </p>

          <p>
            慢步走到 1 樓後方的<strong>「哈利波特靈魂牆」</strong>前。相傳九十年代初，窮困潦倒的 J.K. 羅琳在波爾圖當英文老師時，每天黃昏最愛坐在萊羅書店 2 樓的咖啡座寫作。霍格華茲那座會動的樓梯、以及魔法學校制服那標誌性的黑色長袍（正是葡萄牙波爾圖大學學生的傳統校服 <em>Traje Académico</em>），靈魂與美學的雛形完全誕生於此！
          </p>

          <div className="bg-gradient-to-br from-red-900/40 to-stone-900/40 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">🥞 慢活手信延伸：萊羅書店周邊2大殿堂級物超所值舌尖發現</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-red-400 font-semibold mb-2">葡萄牙地道「Francesinha（濕答答三文治）」</h4>
                <p className="text-white/80">波爾圖最標誌性的平民美食大排檔！用厚厚的烘焙包夾著牛扒、火腿、新鮮香腸，表面覆蓋一層完全融化的厚起司，最後浸泡在熱氣騰騰，用啤酒與番茄特製的香辣醬汁中，鑊氣十足。</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">波爾圖百年甜酒手信 (Port Wine)</h4>
                <p className="text-white/80">臨行回家前，打車前往加亞新城河岸的老酒窖（如 Sandeman 或 Taylor's），買一瓶最具本土生命力的「波特酒（特製加烈甜紅酒）」。口感醇厚、帶有濃郁的黑巧克力與橡木桶香氣。</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-900/50 to-slate-900/60 border border-stone-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">💡 精明自遊 ‧ 萊羅書店完美防坑與搶票隨身手札</h3>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">提前2-4星期預訂「折抵門票代金券」</h4>
                <p className="text-white/70 text-sm">萊羅書店實施<strong>「全網上實名定時限流制」</strong>，現場不設任何實體售票處！普通代金券門票約 8 歐元，<strong>在店內購買任何一本實體書籍時可以 100% 全額折抵現金</strong>！</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">📸 避開大軍的「兩頭甜」卡位智慧</h4>
                <p className="text-white/70 text-sm">旅行團最密集的死亡時間是 11:00-16:00。<strong>最聰明的避堵玩法</strong>是：搶預訂每天早上 09:00 的第一班頭班車門票，或者買傍晚 18:00 之後的夕陽場。</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-white font-semibold mb-2">📚 「買書防坑」精明小貼士</h4>
                <p className="text-white/70 text-sm">1樓正中央最顯眼的位置擺滿了萊羅書店獨家限量複刻出版的<strong>經典文學名著</strong>。這些書籍封面全部採用極具波爾圖彩繪瓷磚風的精裝浮雕設計，定價在 15-20 歐元左右。</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">👟 鞋履與背包安全嚴格警告</h4>
                <p className="text-white/70 text-sm">店內<strong>嚴格禁止攜帶大型雙肩背包、自拍桿或大件行李箱</strong>進場。同時，波爾圖老城區全是由極其高低起伏、光滑的碎石斜坡組成，請務必穿著高抓地力、厚底的防滑運動健步鞋！</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 py-8 border-t border-white/20">
            <p className="text-white/60 italic">
              ─ 歲月定格於文字，魔幻沉醉於階梯。願每位造訪這片文學神殿的旅人，都能在萊羅的猩紅光影中，找到內心久違的童心與詩意。 ─
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
