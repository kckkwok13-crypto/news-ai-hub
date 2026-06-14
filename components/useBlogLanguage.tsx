"use client";
import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from "react";
import { Globe } from "lucide-react";

type Language = "yue" | "zh-TW" | "zh-CN" | "en";

interface LanguageOption {
  code: Language;
  label: string;
  native: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: "yue", label: "Cantonese", native: "廣東話", flag: "🇭🇰" },
  { code: "zh-TW", label: "Traditional Chinese", native: "繁體中文", flag: "🇹🇼" },
  { code: "zh-CN", label: "Simplified Chinese", native: "简体中文", flag: "🇨🇳" },
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
];

interface BlogTranslations {
  [key: string]: {
    [lang in Language]?: string;
  };
}

interface BlogLanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  languages: LanguageOption[];
  translations: BlogTranslations;
}

const LanguageContext = createContext<BlogLanguageContextType | null>(null);

export function useBlogLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useBlogLanguage must be used within BlogLanguageWrapper");
  }
  return context;
}

// Language Selector Component
export function BlogLanguageSelector() {
  const { lang, setLang, languages } = useBlogLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const currentLang = languages.find(l => l.code === lang) || languages[1];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 hover:border-blue-400 hover:text-blue-300 transition-all shadow-xl backdrop-blur-sm"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang.flag} {currentLang.native}</span>
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 top-full mt-3 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-2 shadow-2xl min-w-[180px]">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setShowDropdown(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3 ${
                  lang === l.code
                    ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-xl">{l.flag}</span>
                <span className="flex-1">{l.native}</span>
                {lang === l.code && (
                  <span className="text-blue-400 font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Wrapper Component
export function BlogLanguageWrapper({
  children,
  translations,
  defaultLang = "zh-TW" as Language,
  className = ""
}: {
  children: ReactNode;
  translations: BlogTranslations;
  defaultLang?: Language;
  className?: string;
}) {
  const [lang, setLangState] = useState<Language>(defaultLang);

  useEffect(() => {
    const saved = localStorage.getItem("blogLang") as Language;
    if (saved && languages.some(l => l.code === saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("blogLang", newLang);
    window.dispatchEvent(new CustomEvent("blogLangChange", { detail: newLang }));
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[lang] || translations[key]?.["zh-TW"] || translations[key]?.["en"] || key;
  }, [lang, translations]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages, translations }}>
      <div className={className}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export type { Language, BlogTranslations };