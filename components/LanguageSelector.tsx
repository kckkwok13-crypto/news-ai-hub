"use client";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

type Language = "zh-TW" | "zh-CN" | "en" | "yue";

const languages: { code: Language; label: string; native: string }[] = [
  { code: "yue", label: "Cantonese", native: "廣東話" },
  { code: "zh-TW", label: "Traditional Chinese", native: "繁體中文" },
  { code: "zh-CN", label: "Simplified Chinese", native: "简体中文" },
  { code: "en", label: "English", native: "English" },
];

export default function LanguageSelector({
  onLanguageChange
}: {
  onLanguageChange?: (lang: Language) => void
}) {
  const [currentLang, setCurrentLang] = useState<Language>("zh-TW");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("blogLang") as Language;
    if (saved && languages.some(l => l.code === saved)) {
      setCurrentLang(saved);
    }
  }, []);

  const handleChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("blogLang", lang);
    setShowDropdown(false);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    // Trigger re-render by dispatching custom event
    window.dispatchEvent(new CustomEvent("blogLangChange", { detail: lang }));
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 hover:border-blue-400 transition-all"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage.native}</span>
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-2 shadow-2xl min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChange(lang.code)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3 ${
                  currentLang === lang.code
                    ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-lg">
                  {lang.code === "yue" && "🇭🇰"}
                  {lang.code === "zh-TW" && "🇹🇼"}
                  {lang.code === "zh-CN" && "🇨🇳"}
                  {lang.code === "en" && "🇬🇧"}
                </span>
                <span>{lang.native}</span>
                {currentLang === lang.code && (
                  <span className="ml-auto text-blue-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { languages, type Language };