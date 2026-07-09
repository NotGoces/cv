// About (Sobre mí)
// Objetivo: contexto humano breve, no repetir el CV.

// 2-3 líneas: quién eres, qué te apasiona del frontend
// Fila de iconos con datos rápidos: idiomas (🇪🇸🇬🇧🇫🇷 con barra de nivel), carnets de conducir (ícono coche/moto), ubicación (A Coruña)
// Nada de bullets largos — esto es la sección más "ligera" de toda la página
"use client";

import Image from "next/image";
import type { TranslationFn } from "../constants/translations";

export default function About({ t }: { t: TranslationFn }) {
    return (
        <section id="about" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-5xl flex-row items-center gap-6 sm:gap-8 md:gap-12">
                <div className="w-full max-w-[140px] shrink-0 sm:max-w-[180px] md:max-w-[220px]">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-theme bg-surface-muted">
                        <Image
                            src="/projects/pabloabad.jpg"
                            alt={t("about.imageAlt")}
                            fill
                            sizes="(max-width: 768px) 100vw, 240px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-start">
                    <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        {t("about.title")}
                    </h2>

                    <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                        <p>{t("about.paragraph1")}</p>
                        <p>{t("about.paragraph2")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}