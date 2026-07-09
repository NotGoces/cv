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

        const subject = encodeURIComponent(`Contacto desde el portfolio — ${name}`);
        const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contacto" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 md:flex-row md:gap-20">
                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        Hablamos
                    </h2>
                    <p className="mt-5 max-w-sm text-base leading-relaxed text-muted sm:text-lg">
                        Si tienes un proyecto en mente, una oportunidad o
                        simplemente quieres saludar, aquí me encuentras.
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <Mail size={17} />
                            {EMAIL}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pabloabadgoldsmith/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <FaLinkedin size={17} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/NotGoces"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-theme"
                        >
                            <SiGithub size={17} color="currentColor" />
                            GitHub
                        </a>
                        <a
                            href="https://wa.me/34XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            Nombre
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
                            Email
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
                            Mensaje
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
                        className="mt-2 self-start rounded-full bg-theme px-6 py-3 text-sm font-medium text-theme transition-colors"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}