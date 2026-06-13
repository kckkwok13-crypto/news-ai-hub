#!/bin/bash
set -e

echo "=== Step 1: Add pagination state and scroll to top ==="

# Add after line 892 (after isDataJournalism state)
sed -i '892a\
\
  // Pagination state\
  const [displayCount, setDisplayCount] = useState(6);\
\
  // Scroll to top state\
  const [showScrollTop, setShowScrollTop] = useState(false);\
\
  // Scroll event listener\
  useEffect(() => {\
    const handleScroll = () => {\
      setShowScrollTop(window.scrollY > 500);\
    };\
    window.addEventListener("scroll", handleScroll);\
    return () => window.removeEventListener("scroll", handleScroll);\
  }, []);\
\
  const scrollToTop = () => {\
    window.scrollTo({ top: 0, behavior: "smooth" });\
  };
' app/page.tsx

pnpm build 2>&1 | head -10
echo "=== Build test after Step 1 ==="