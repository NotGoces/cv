"use client";

import { useState } from "react";
import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { TranslationFn } from "../constants/translations";

const EMAIL = "gocesmusic@gmail.com";

export default function Contact({ t }: { t: TranslationFn }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contacto desde el portfolio — ${name}`);
        const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 md:flex-row md:gap-20">
                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        {t("contact.title")}
                    </h2>
                    <p className="mt-5 max-w-sm text-base leading-relaxed text-muted sm:text-lg">
                        {t("contact.description")}
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            aria-label={t("contact.emailLink")}
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <Mail size={17} />
                            {EMAIL}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pabloabadgoldsmith/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("contact.linkedinLink")}
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <FaLinkedin size={17} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/NotGoces"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("contact.githubLink")}
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <SiGithub size={17} color="currentColor" />
                            GitHub
                        </a>
                        <a
                            href="https://wa.me/34681677511"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("contact.whatsappLink")}
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <SiWhatsapp size={17} color="currentColor" />
                            WhatsApp
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-medium text-muted">
                            {t("contact.name")}
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-lg border border-theme bg-transparent px-4 py-2.5 text-sm text-theme outline-none transition-colors focus:border-theme"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-medium text-muted">
                            {t("contact.email")}
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border border-theme bg-transparent px-4 py-2.5 text-sm text-theme outline-none transition-colors focus:border-theme"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-medium text-muted">
                            {t("contact.message")}
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="resize-none rounded-lg border border-theme bg-transparent px-4 py-2.5 text-sm text-theme outline-none transition-colors focus:border-theme"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 self-start rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 
                        bg-blue-600 text-white hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-offset-slate-900"
                    >
                        {t("contact.submit")}
                    </button>
                </form>
            </div>
        </section>
    );
}