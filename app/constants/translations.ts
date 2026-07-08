import locales from "./locales.json";

export type Lang = "es" | "en";
export type TranslationKeys = keyof typeof locales["es"];

export const createT = (lang: Lang) => {
  return (key: TranslationKeys): string => {
    return locales[lang][key] || locales["es"][key];
  };
};