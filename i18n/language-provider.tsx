"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Locale, defaultLocale } from "./config";
import zhTranslations from "./locales/zh.json";
import enTranslations from "./locales/en.json";

type Translations = typeof zhTranslations;

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
};

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "zh" || savedLocale === "en")) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    } else {
      document.documentElement.lang = defaultLocale;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  const t = (key: string): string => {
    const translation = getNestedValue(translations[locale], key);
    return translation || key;
  };

  // 在未挂载时也提供默认值
  const contextValue = mounted
    ? { locale, setLocale, t }
    : { locale: defaultLocale, setLocale: () => {}, t: (key: string) => key };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      locale: defaultLocale,
      setLocale: () => {
        console.warn("LanguageProvider not found, language switch disabled");
      },
      t: (key: string) => key,
    };
  }
  return context;
}

