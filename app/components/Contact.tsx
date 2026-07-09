// Objetivo: que te puedan escribir en 5 segundos.

// Formulario simple: nombre, email, mensaje (con backend en Node para enviarlo)
// Fila de iconos: email directo, LinkedIn, GitHub, teléfono si quieres compartirlo
// Nada de texto de relleno tipo "no dudes en contactarme" — el formulario ya lo dice

"use client";

import { useState } from "react";
import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const EMAIL = "gocesmusic@gmail.com";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 👉 Solución rápida sin backend: abre el cliente de correo con todo
        // precargado. Cuando quieras algo más pro, sustituye esto por una
        // llamada a un servicio como Resend, Formspree o una API route tuya.
        const subject = encodeURIComponent(`Contacto desde el portfolio — ${name}`);
        const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contacto"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 md:flex-row md:gap-20">
                {/* Info directa */}
                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                        Hablamos
                    </h2>
                    <p className="mt-5 max-w-sm text-base leading-relaxed text-[#1d1d1f]/60 sm:text-lg dark:text-[#f5f5f7]/60">
                        Si tienes un proyecto en mente, una oportunidad o
                        simplemente quieres saludar, aquí me encuentras.
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center gap-3 text-sm text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                        >
                            <Mail size={17} />
                            {EMAIL}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pabloabadgoldsmith/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                        >
                            <FaLinkedin size={17} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/NotGoces"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                        >
                            <SiGithub size={17} color="currentColor" />
                            GitHub
                        </a>
                        <a
                            href="https://wa.me/34XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                        >
                            <SiWhatsapp size={17} color="currentColor" />
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="name"
                            className="text-xs font-medium text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50"
                        >
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-lg border border-[#1d1d1f]/15 bg-transparent px-4 py-2.5 text-sm text-[#1d1d1f] outline-none transition-colors focus:border-[#1d1d1f]/40 dark:border-[#f5f5f7]/15 dark:text-[#f5f5f7] dark:focus:border-[#f5f5f7]/40"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="email"
                            className="text-xs font-medium text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border border-[#1d1d1f]/15 bg-transparent px-4 py-2.5 text-sm text-[#1d1d1f] outline-none transition-colors focus:border-[#1d1d1f]/40 dark:border-[#f5f5f7]/15 dark:text-[#f5f5f7] dark:focus:border-[#f5f5f7]/40"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="message"
                            className="text-xs font-medium text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="resize-none rounded-lg border border-[#1d1d1f]/15 bg-transparent px-4 py-2.5 text-sm text-[#1d1d1f] outline-none transition-colors focus:border-[#1d1d1f]/40 dark:border-[#f5f5f7]/15 dark:text-[#f5f5f7] dark:focus:border-[#f5f5f7]/40"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 self-start rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d1d1f]/85 dark:bg-[#f5f5f7] dark:text-[#1d1d1f] dark:hover:bg-[#f5f5f7]/85"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}