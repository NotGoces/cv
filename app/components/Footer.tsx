"use client";

import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "@icons-pack/react-simple-icons";

interface FooterProps {
    t: (key: any) => string;
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer({ t }: FooterProps) {
    return (
        <footer className="w-full border-t border-[#1d1d1f]/10 dark:border-[#f5f5f7]/10 bg-white dark:bg-[#161617] transition-colors duration-300">
            <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-[#1d1d1f]/60 dark:text-[#f5f5f7]/60">

                {/* Copyright */}
                <span>© 2026 Pablo Abad</span>

                {/* Iconos sociales */}
                <div className="flex items-center gap-5">
                    <a
                        href="https://www.linkedin.com/in/pabloabadgoldsmith/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors hover:text-black dark:hover:text-white"
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a
                        href="https://github.com/NotGoces"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors hover:text-black dark:hover:text-white"
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="mailto:gocesmusic@gmail.com"
                        aria-label="Email"
                        className="transition-colors hover:text-black dark:hover:text-white"
                    >
                        <SiGmail size={16} />
                    </a>
                    <a
                        href="https://wa.me/34681677511"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="transition-colors hover:text-black dark:hover:text-white"
                    >
                        <SiWhatsapp size={16} />
                    </a>
                </div>

                {/* Volver arriba */}
                <button
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    className="flex items-center gap-1 transition-colors hover:text-black dark:hover:text-white"
                >
                    <ArrowUp size={14} />
                </button>
            </div>
        </footer>
    );
}