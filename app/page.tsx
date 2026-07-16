"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { Lang, createT } from "./constants/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const t = createT(lang);

  useEffect(() => {
    const savedLang = window.localStorage.getItem("lang") as Lang | null;
    if (savedLang === "es" || savedLang === "en") {
      setLang(savedLang);
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setDarkMode(savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 w-full">
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}