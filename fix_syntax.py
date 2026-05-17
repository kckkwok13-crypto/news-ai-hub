import re

with open('app/api/news-feed/route.ts', 'r') as f:
    content = f.read()

# Fix Trevi Fountain - it was cut off after description_zh, missing the rest of fields and closing brace
# Find the pattern where Trevi Fountain entry is incomplete
old_trevi = """{ name: 'Trevi Fountain', name_zh: '特萊維噴泉', blog_slug: 'trevi', description_zh: '羅馬最大嘅巴洛克風格噴泉，許願池',
              { name: 'Sistine Chapel'"""

new_trevi = """{ name: 'Trevi Fountain', name_zh: '特萊維噴泉', blog_slug: 'trevi', description_zh: '羅馬最大嘅巴洛克風格噴泉，許願池', type: 'attraction', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800', address: 'Piazza di Trevi, Rome', hours: '24小時', rating: '4.7', review_count: '76,543', best_time: '夜晚', duration: '30分鐘', cost_level: 'free', transit: 'Metro A線 Barberini站', tips: ['擲硬幣許願', '清晨人少啲', '小心小偷'], tags: ['打卡', '浪漫', '地標'] },
              { name: 'Sistine Chapel'"""

if old_trevi in content:
    content = content.replace(old_trevi, new_trevi)
    print("Fixed: Trevi Fountain entry restored")
else:
    print("Trevi Fountain pattern not found")

with open('app/api/news-feed/route.ts', 'w') as f:
    f.write(content)

print("Done!")