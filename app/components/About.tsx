// About (Sobre mí)
// Objetivo: contexto humano breve, no repetir el CV.

// 2-3 líneas: quién eres, qué te apasiona del frontend
// Fila de iconos con datos rápidos: idiomas (🇪🇸🇬🇧🇫🇷 con barra de nivel), carnets de conducir (ícono coche/moto), ubicación (A Coruña)
// Nada de bullets largos — esto es la sección más "ligera" de toda la página
"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
                <div className="w-full max-w-xs shrink-0 md:max-w-sm">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-theme bg-surface-muted">
                        <Image
                            src="/projects/pabloabad.jpg"
                            alt="Pablo Abad"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        Sobre mí
                    </h2>

                    <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                        <p>
                            Soy desarrollador frontend con cerca de dos años de
                            experiencia profesional, especializado en construir
                            interfaces limpias y cuidadas con React, Next.js y
                            TypeScript.
                        </p>
                        <p>
                            Me interesa entender no solo cómo se ve un producto,
                            sino cómo está construido por dentro — por eso
                            complemento el frontend con incursiones en
                            blockchain, ciberseguridad e IA, y ahora mismo estoy
                            ampliando conocimientos en Big Data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}