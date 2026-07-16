import { Lang, TranslationFn } from "../constants/translations";
import { Sun, Moon, FileDownIcon } from "lucide-react";

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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 text-xs font-normal tracking-tight text-muted">
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://github.com/notgoces"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme transition-colors hover:text-muted font-medium tracking-wider text-sm"
            title={t("navbar.viewOnGitHub")}
          >
            PAG
          </a>
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden sm:flex items-center gap-6 sm:gap-8">
          {["about", "experience", "skills", "education", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="transition-colors hover:text-theme"
            >
              {t(`navbar.${section}`)}
            </a>
          ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="transition-colors hover:text-theme"
              title={lang === "es" ? t("navbar.english") : t("navbar.spanish")}
              aria-label="Toggle language"
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
              href="/projects/Cv_PabloAbad.pdf"
              download="Cv_PabloAbad.pdf"
              className="transition-colors hover:text-theme flex items-center justify-center"
              title={t("navbar.downloadCV")}
              aria-label={t("navbar.downloadCV")}
            >
              <FileDownIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
