import en from "./locales/en.json";
import zh from "./locales/zh.json";

export const languages = ["en", "zh"] as const;
export type Language = (typeof languages)[number];
export type Messages = typeof en;
export const defaultLanguage: Language = "zh";

const messages: Record<Language, Messages> = {
  en,
  zh,
};

export function getMessages(locale: Language) {
  return messages[locale] ?? messages[defaultLanguage];
}
