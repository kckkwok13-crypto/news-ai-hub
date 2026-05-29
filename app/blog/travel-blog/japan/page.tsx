export const metadata = {
  title: '日本旅行攻略 - NewsKingdom',
  description: '東京、大阪、京都美食之旅完整攻略',
}

export default function JapanBlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-6xl">🗾</span>
          <h1 className="text-4xl font-bold mt-4 mb-2">日本：東京、大阪、京都美食之旅</h1>
          <p className="text-gray-400">2026年5月 · 7日行程</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">行程概覽</h2>
            <ul className="space-y-2 text-gray-300">
              <li>🗼 Day 1-2: 東京 — 淺草、澀谷、新宿</li>
              <li>🍜 Day 3: 日光 — 世界文化遺產</li>
              <li>🏯 Day 4-5: 京都 — 伏見稻荷、清水寺</li>
              <li>🦞 Day 6-7: 大阪 — 道頓堀、心齋橋</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">東京美食推薦</h2>
            <p className="text-gray-300 mb-4">
              作為美食之都，東京有太多野可以試。以下係我哋今次食過最正嘅幾間：
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>🍣 築地市場 — 清晨既海鮮飯同玉子燒</li>
              <li>🍜 一蘭拉麵 — 豚骨湯底極度濃郁</li>
              <li>🥩 敘敘苑 — 午市和牛燒肉，CP值超高</li>
              <li>🍰 HARBS — 水果千層蛋糕必試</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">京都體驗</h2>
            <p className="text-gray-300 mb-4">
              京都是日本文化的心臟。著和服漫步花見小路，去嵐山坐小火車，夜晚喺祇園睇藝妓...呢d體驗真係金都買唔到。
            </p>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="text-yellow-400 font-semibold">⚠️ 小提示：</p>
              <p className="text-gray-400 text-sm mt-1">清水寺周圍既遊客非常多，建議清晨6點就去，可以影到空無一人大片</p>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">大阪：吃貨天堂</h2>
            <p className="text-gray-300 mb-4">
              「大阪唔會餓死」呢句說話完全冇錯！道頓堀既街頭美食多到你唔知點揀。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>🦀 蟹道樂 — 螃蟹宴既終極體驗</li>
              <li>🍢 串炸 — 心齋橋既串炸天王</li>
              <li>🥞 章魚小丸子 — 艇屋賣既最正</li>
              <li>🍖 御座侯 — 入口即化既牛肉燒</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">💰 預算參考（每人）</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-800/50 p-3 rounded-xl">
                <div className="text-gray-400">機票</div>
                <div className="text-xl font-bold">HKD 3,000</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-xl">
                <div className="text-gray-400">住宿（7晚）</div>
                <div className="text-xl font-bold">HKD 4,500</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-xl">
                <div className="text-gray-400">交通費</div>
                <div className="text-xl font-bold">HKD 1,200</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-xl">
                <div className="text-gray-400">美食/門票</div>
                <div className="text-xl font-bold">HKD 3,000</div>
              </div>
            </div>
            <div className="mt-4 text-center text-2xl font-bold text-green-400">
              總計：約 HKD 11,700
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">⚠️ 編輯觀點，僅供參考。價格可能有所變動，請以當時實際情況為準。</p>
        </div>
      </article>
    </main>
  )
}
