'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, FileText, BookOpen, Stethoscope, TrendingUp, Utensils } from "lucide-react";
import { foodPosts } from "../data/foodData";
import { healthPosts } from "../data/healthData";
import { financePosts } from "../data/financeData";
import { aiToolPosts } from "../data/aiToolsData";

type SearchResult = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryName: string;
  categoryIcon: string;
  path: string;
};

const CATEGORY_CONFIG: Record<string, { icon: string; name: string; color: string; path: string }> = {
  food: { icon: "🍜", name: "美食天地", color: "from-orange-500 to-amber-600", path: "/food" },
  health: { icon: "🏥", name: "健康養生", color: "from-green-500 to-emerald-600", path: "/health" },
  finance: { icon: "💰", name: "財經投資", color: "from-yellow-500 to-amber-600", path: "/finance" },
  ai: { icon: "🤖", name: "AI科技", color: "from-rose-500 to-pink-600", path: "/ai-tools" },
};

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Gather all posts
  const allPosts: SearchResult[] = [
    ...foodPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category || "food",
      categoryName: "美食天地",
      categoryIcon: "🍜",
      path: `/food/${p.slug}`,
    })),
    ...healthPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category || "health",
      categoryName: "健康養生",
      categoryIcon: "🏥",
      path: `/health/${p.slug}`,
    })),
    ...financePosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category || "finance",
      categoryName: "財經投資",
      categoryIcon: "💰",
      path: `/finance/${p.slug}`,
    })),
    ...aiToolPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category || "ai",
      categoryName: "AI科技",
      categoryIcon: "🤖",
      path: `/ai-tools/${p.slug}`,
    })),
  ];

  // Search function
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.categoryName.toLowerCase().includes(searchQuery)
    );
    setResults(filtered.slice(0, 10));
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[selectedIndex]) {
        window.location.href = results[selectedIndex].path;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      inputRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Open with Ctrl+K or Cmd+K
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, []);

  const getCategoryConfig = (category: string) => {
    if (category === "diet" || category === "sleep" || category === "exercise" || category === "mental" || category === "tcm" || category === "heart" || category === "office" || category === "immunity" || category === "disease") {
      return CATEGORY_CONFIG.health;
    }
    if (category === "etf" || category === "retirement" || category === "passive" || category === "stocks" || category === "crypto" || category === "planning" || category === "insurance" || category === "mpf" || category === "risk" || category === "savings") {
      return CATEGORY_CONFIG.finance;
    }
    if (category === "chatgpt" || category === "productivity" || category === "image" || category === "assistant" || category === "workflow" || category === "video") {
      return CATEGORY_CONFIG.ai;
    }
    return CATEGORY_CONFIG.food;
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white border border-slate-700/50"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">搜尋文章...</span>
        <kbd className="hidden sm:inline text-xs bg-slate-700 px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div
            ref={searchRef}
            className="relative w-full max-w-2xl mx-4 bg-slate-900 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-700/50">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋文章、分類..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-lg"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 hover:bg-slate-800 rounded"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded hover:bg-slate-700"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => {
                    const config = getCategoryConfig(result.category);
                    return (
                      <Link
                        key={result.slug}
                        href={result.path}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className={`flex items-start gap-3 px-4 py-3 hover:bg-slate-800/50 transition-colors ${
                          index === selectedIndex ? "bg-slate-800/50" : ""
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center text-lg flex-shrink-0`}>
                          {result.categoryIcon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium truncate">{result.title}</h4>
                          <p className="text-slate-400 text-sm line-clamp-1 mt-0.5">{result.excerpt}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500">{config.name}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : query.length >= 2 ? (
                <div className="py-12 text-center text-slate-500">
                  <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>未找到相關文章</p>
                  <p className="text-sm mt-1">嘗試其他關鍵詞</p>
                </div>
              ) : (
                <div className="py-6 px-4">
                  <p className="text-slate-500 text-sm mb-3">熱門分類</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
                      <Link
                        key={key}
                        href={config.path}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br ${config.color} hover:opacity-90 transition-opacity`}
                      >
                        <span className="text-2xl">{config.icon}</span>
                        <span className="text-white font-medium">{config.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-slate-700/50 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">↑↓</kbd> 導航
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Enter</kbd> 選擇
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">ESC</kbd> 關閉
                </span>
              </div>
              <span>共 {allPosts.length} 篇文章</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
