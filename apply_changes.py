#!/usr/bin/env python3
import re

# Read the file
with open('app/page.tsx', 'r') as f:
    content = f.read()

# Step 1: Add pagination state and scroll to top after isDataJournalism state
pattern1 = r"(const \[isDataJournalism, setIsDataJournalism\] = useState\(false\);)"
replacement1 = r'''\1

  // Pagination state - Mobile optimized
  const [displayCount, setDisplayCount] = useState(6);

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll event listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };'''

content = re.sub(pattern1, replacement1, content, count=1)
print("Step 1: Added pagination and scroll to top state")

# Step 2: Modify displayNews to add pagination
old_display = r"const displayNews = showSaved \? filteredNews\.filter\(n => savedIds\.has\(n\.title\)\) : \(filteredNews\.length > 0 \? filteredNews : SAMPLE_NEWS\);"
new_display = '''const allDisplayNews = showSaved ? filteredNews.filter(n => savedIds.has(n.title)) : (filteredNews.length > 0 ? filteredNews : SAMPLE_NEWS);
  const displayNews = allDisplayNews.slice(0, displayCount);
  const hasMoreNews = allDisplayNews.length > displayCount;'''

content = re.sub(old_display, new_display, content, count=1)
print("Step 2: Modified displayNews for pagination")

# Step 3: Add reset display count effect
old_effect = r"// Reset carousel when news changes\n  useEffect\(\(\) => \{\n    setCarouselIndex\(0\);\n  \}, \[category\]\);"
new_effect = '''// Reset carousel when news changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [category]);

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(6);
  }, [category]);'''

content = re.sub(old_effect, new_effect, content, count=1)
print("Step 3: Added reset display count effect")

# Step 4: Add Load More button INSIDE the conditional block
# Find the closing of the grid container and add Load More inside
old_close = r"(\})</div>\n        \{/\* Mobile Travel Blog CTA)"

# Actually, let's add it after the grid div closes but inside the conditional
# The pattern should be: flatMap ends, then grid div closes, then the conditional closes
# We need to add Load More between the grid div and the conditional closing

# Find the exact pattern
pattern4 = r"(\}\)\)}\n          </div>\n        )(\n\n        \{/\* Mobile Travel Blog CTA)"
replacement4 = r'''\1

          {/* Load More Button */}
          {hasMoreNews && (
            <div className="mt-8 text-center px-4">
              <button
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="w-full max-w-md mx-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                Load More ({allDisplayNews.length - displayCount} remaining)
              </button>
            </div>
          )}
        )\2'''

result = re.sub(pattern4, replacement4, content, count=1)
if result != content:
    content = result
    print("Step 4: Added Load More button")
else:
    print("Step 4: Could not find pattern for Load More button - will add manually later")

# Step 5: Add back-to-top button before footer
pattern5 = r"(<footer className=`\{`mt-12 py-10)"
replacement5 = r'''{/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
          title="Back to Top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <footer className={`mt-12 py-10'''

content = re.sub(pattern5, replacement5, content, count=1)
print("Step 5: Added back-to-top button")

# Write the file
with open('app/page.tsx', 'w') as f:
    f.write(content)

print("\nAll changes applied!")