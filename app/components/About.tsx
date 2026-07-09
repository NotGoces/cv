// About (Sobre mí)
// Objetivo: contexto humano breve, no repetir el CV.

// 2-3 líneas: quién eres, qué te apasiona del frontend
// Fila de iconos con datos rápidos: idiomas (🇪🇸🇬🇧🇫🇷 con barra de nivel), carnets de conducir (ícono coche/moto), ubicación (A Coruña)
// Nada de bullets largos — esto es la sección más "ligera" de toda la página

"use client";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
                {/* Foto 1:1 */}
                <div className="w-full max-w-xs shrink-0 md:max-w-sm">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#1d1d1f]/10 bg-[#1d1d1f]/[0.03] dark:border-[#f5f5f7]/10 dark:bg-[#f5f5f7]/[0.05]">
                        {/*
                            👉 Cuando tengas la foto, sustituye este bloque por:
                            <img
                                src="/profile.jpg"
                                alt="Pablo Abad Goldsmith"
                                className="h-full w-full object-cover"
                            />
                        */}
                        <div className="flex h-full w-full items-center justify-center">
                            <span className="font-mono text-xs text-[#1d1d1f]/30 dark:text-[#f5f5f7]/30">
                                1:1
                            </span>
                        </div>
                    </div>
                </div>

                {/* Texto */}
                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                        Sobre mí
                    </h2>

                    <div className="mt-6 space-y-4 text-base leading-relaxed text-[#1d1d1f]/70 sm:text-lg dark:text-[#f5f5f7]/70">
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