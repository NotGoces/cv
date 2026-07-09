import { Lang, TranslationFn } from "../constants/translations";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  t: TranslationFn;
  lang: Lang;
  setLang: (lang: Lang) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ t, lang, setLang, darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-theme bg-surface/70 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6 text-xs font-normal tracking-tight text-muted">
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-theme transition-colors hover:text-muted"
          >
            PAG
          </a>
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="transition-colors hover:text-theme">
            {t("navbar.about")}
          </a>
          <a href="#experience" className="transition-colors hover:text-theme">
            {t("navbar.experience")}
          </a>
          <a href="#skills" className="transition-colors hover:text-theme">
            {t("navbar.skills")}
          </a>
          <a href="#projects" className="transition-colors hover:text-theme">
            {t("navbar.projects")}
          </a>
          <a href="#education" className="transition-colors hover:text-theme">
            {t("navbar.education")}
          </a>
          <a href="#contact" className="transition-colors hover:text-theme">
            {t("navbar.contact")}
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="transition-colors hover:text-theme"
            >
              {lang === "es" ? "en" : "es"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="transition-colors hover:text-theme"
              title={darkMode ? t("navbar.lightMode") : t("navbar.darkMode")}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="/CV_Pablo_Abad.pdf"
              download="CV_Pablo_Abad.pdf"
              className="transition-colors hover:text-theme"
              title={t("navbar.downloadCV")}
            >
              {t("navbar.downloadCV")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}