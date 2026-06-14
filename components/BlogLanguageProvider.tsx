"use client";
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Globe } from "lucide-react";

type Language = "yue" | "zh-TW" | "zh-CN" | "en";

const languages: { code: Language; label: string; native: string; flag: string }[] = [
  { code: "yue", label: "Cantonese", native: "廣東話", flag: "🇭🇰" },
  { code: "zh-TW", label: "Traditional Chinese", native: "繁體中文", flag: "🇹🇼" },
  { code: "zh-CN", label: "Simplified Chinese", native: "简体中文", flag: "🇨🇳" },
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Simple translation hook
function createTranslator(lang: Language, translations: Record<string, Record<string, string>>) {
  return (key: string): string => {
    return translations[lang]?.[key] || translations["zh-TW"]?.[key] || key;
  };
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function LanguageProvider({
  children,
  translations,
  defaultLang = "zh-TW" as Language
}: {
  children: ReactNode;
  translations: Record<string, Record<string, string>>;
  defaultLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(defaultLang);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("blogLang") as Language;
    if (saved && languages.some(l => l.code === saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("blogLang", newLang);
    window.dispatchEvent(new CustomEvent("blogLangChange", { detail: newLang }));
  };

  const t = createTranslator(lang, translations);
  const currentLanguage = languages.find(l => l.code === lang) || languages[1];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      <div className="min-h-screen">
        {/* Language Selector - Fixed Position */}
        <div className="fixed top-20 right-6 z-50">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 hover:border-blue-400 hover:text-blue-300 transition-all shadow-xl backdrop-blur-sm"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.native}</span>
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
        </div>

        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export { languages, type Language };