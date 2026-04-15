"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { pt, en, Dictionary, SupportedLanguage } from "@/i18n/dictionaries";

interface LanguageContextProps {
  language: SupportedLanguage;
  dict: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("pt");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem("app-lang") as SupportedLanguage;
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang === "pt" ? "pt-BR" : "en";
    } else {
      const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
      setLanguage(browserLang);
      document.documentElement.lang = browserLang === "pt" ? "pt-BR" : "en";
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "pt" ? "en" : "pt";
      localStorage.setItem("app-lang", newLang);
      document.documentElement.lang = newLang === "pt" ? "pt-BR" : "en";
      return newLang;
    });
  };

  const dict = language === "pt" ? pt : en;

  // Render children normally to avoid hydration mismatch blocking,
  // but if you want strict hydration parity, you could return null if !isMounted
  return (
    <LanguageContext.Provider value={{ language, dict, toggleLanguage }}>
      <div style={{ visibility: isMounted ? "visible" : "hidden" }} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
