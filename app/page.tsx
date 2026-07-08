"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Lang, createT } from "./constants/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const t = createT(lang);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

 return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {/* <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Education t={t} />
        <Contact t={t} /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}