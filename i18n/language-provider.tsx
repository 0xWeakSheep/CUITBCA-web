"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { defaultLanguage, getMessages, type Language, type Messages } from "./config";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: Messages;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, messages: getMessages(language) }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
