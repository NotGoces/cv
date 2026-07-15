import locales from "./locales";

export type Lang = "es" | "en";
export type TranslationKeys = keyof typeof locales["es"];
export type TranslationFn = (key: string) => string;

const localeMap = locales as Record<Lang, Record<string, string>>;

export const createT = (lang: Lang): TranslationFn => {
  return (key: string): string => { 
    //descomentar la linea para modo debug de traducciones
    // return key;
    //comentar la linea para modo normal de traducciones
  return localeMap[lang][key] ?? localeMap.es[key] ?? key;
  };
};