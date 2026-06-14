"use client";

import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { languageInfo, TravelLanguage } from "../data/travelTranslations";

const STORAGE_KEY = "travel_blog_lang";

export default function TravelLanguageSelector() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as TravelLanguage;
    if (saved && languageInfo[saved]) {
      setLang(saved);
      // Dispatch a custom event so pages can react
      window.dispatchEvent(new CustomEvent("travel-lang-change", { detail: saved }));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (newLang: TravelLanguage) => {
    setLang(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
    setOpen(false);
    // Dispatch event so all pages listening can update
    window.dispatchEvent(new CustomEvent("travel-lang-change", { detail: newLang }));
  };

  const current = languageInfo[lang];

  return (
    <div ref={ref} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white px-3 py-2 rounded-full shadow-lg transition-all"
      >
        <Globe size={16} />
        <span className="text-sm">{current.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{current.native}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {(Object.values(languageInfo)).map((info) => (
            <button
              key={info.code}
              onClick={() => handleSelect(info.code)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors ${
                lang === info.code ? "bg-white/10" : ""
              }`}
            >
              <span className="text-xl">{info.flag}</span>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">{info.native}</div>
                <div className="text-white/50 text-xs">{info.label}</div>
              </div>
              {lang === info.code && <span className="text-green-400 text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Hook to use travel language in any component
export function useTravelLanguage(): [TravelLanguage, (lang: TravelLanguage) => void] {
  const [lang, setLangState] = useState<TravelLanguage>("zh-TW");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as TravelLanguage;
    if (saved && languageInfo[saved]) {
      setLangState(saved);
    }

    const handleLangChange = (e: any) => {
      setLangState(e.detail);
    };

    window.addEventListener("travel-lang-change", handleLangChange);
    return () => window.removeEventListener("travel-lang-change", handleLangChange);
  }, []);

  const setLang = (newLang: TravelLanguage) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new CustomEvent("travel-lang-change", { detail: newLang }));
  };

  return [lang, setLang];
}
