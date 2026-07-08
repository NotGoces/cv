import { Lang } from "../constants/translations";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  t: (key: any) => string;
  lang: Lang;
  setLang: (lang: Lang) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ t, lang, setLang, darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1d1d1f]/10 dark:border-[#f5f5f7]/10 bg-white/70 dark:bg-[#161617]/70 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6 text-xs font-normal tracking-tight text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">
        {/* ICONO NOMBRE */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="/" className="">
            {t("navbar.name")}
          </a>
        </div>
        {/* ENLACES DE NAVEGACIÓN */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="">
            {t("navbar.about")}
          </a>
          <a href="#experience" className="">
            {t("navbar.experience")}
          </a>
          <a href="#skills" className="">
            {t("navbar.skills")}
          </a>
          <a href="#projects" className="">
            {t("navbar.projects")}
          </a>
          <a href="#education" className="">
            {t("navbar.education")}
          </a>
          <a href="#contact" className="">
            {t("navbar.contact")}
          </a>
          {/* BOTONES DE IDIOMA Y TEMA Y DESCARGA */}
          <div className="">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className=""
            >
              {lang === "es" ? "en" : "es"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=""
              title={darkMode ? "Modo Claro" : "Modo Oscuro"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="/CV_Pablo_Abad.pdf"
              download="CV_Pablo_Abad.pdf"
              className=""
            >
              {t("navbar.downloadCV")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}