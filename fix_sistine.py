import re

with open('app/blog/sistine-chapel/page.tsx', 'r') as f:
    content = f.read()

# Fix the broken hero image section - there's a stray </header> and malformed div structure
old_hero = """        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#735d78]/20">
        </header>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#735d78]/20">
          <img
            src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=1200&q=80"
            alt="西斯汀小堂穹頂壁畫"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#8d99ae] text-sm mb-12">
          ▲ 米開朗基羅獨自仰頭奮鬥四載完成的世紀天頂畫 —— 《創世紀》（Genesis）
        </p>"""

new_hero = """        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-[#735d78]/20">
          <img
            src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=1200&q=80"
            alt="西斯汀小堂穹頂壁畫"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#8d99ae] text-sm mb-12">
          ▲ 米開朗基羅獨自仰頭奮鬥四載完成的世紀天頂畫 —— 《創世紀》（Genesis）
        </p>"""

if old_hero in content:
    content = content.replace(old_hero, new_hero)
    print("Fixed: Hero image section cleaned up")
else:
    print("Hero image pattern not found - checking current state...")
    if "</header>" in content[content.find("Hero Image"):content.find("Hero Image")+500]:
        print("  -> stray </header> found, trying alternate fix")

with open('app/blog/sistine-chapel/page.tsx', 'w') as f:
    f.write(content)

print("Done!")