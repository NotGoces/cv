import locales from "./locales.json";

export type Lang = "es" | "en";
export type TranslationKeys = keyof typeof locales["es"];
export type TranslationFn = (key: string) => string;

const localeMap = locales as Record<Lang, Record<string, string>>;

export const createT = (lang: Lang): TranslationFn => {
  return (key: string): string => {
    return localeMap[lang][key] ?? localeMap.es[key] ?? key;
  };
};