"use client";

import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import type { TranslationFn } from "../constants/translations";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer({ t }: { t: TranslationFn }) {
    return (
        <footer className="w-full border-t border-theme bg-surface transition-colors duration-300">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row">
                <span>{t("footer.copyright")}</span>

                <div className="flex items-center gap-5">
                    <a
                        href="https://www.linkedin.com/in/pabloabadgoldsmith/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors hover:text-theme"
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a
                        href="https://github.com/NotGoces"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors hover:text-theme"
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="mailto:gocesmusic@gmail.com"
                        aria-label="Email"
                        className="transition-colors hover:text-theme"
                    >
                        <Mail size={16} />
                    </a>
                    <a
                        href="https://wa.me/34681677511"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="transition-colors hover:text-theme"
                    >
                        <SiWhatsapp size={16} />
                    </a>
                </div>

                <button
                    onClick={scrollToTop}
                    aria-label={t("footer.backToTop")}
                    className="flex items-center gap-1 transition-colors hover:text-theme"
                >
                    <ArrowUp size={14} />
                </button>
            </div>
        </footer>
    );
}