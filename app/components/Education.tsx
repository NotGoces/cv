// Objetivo: timeline rápido, sin nombres completos de centros en pantalla.

// Timeline vertical: Bachillerato (2020-2022) → DAW (2022-2024) → Especialización IA/Big Data (2025-2026)
// Ícono por etapa (birrete, código, chip/IA)
// Cursos cortos (MoureDev, Marketing Digital, E-commerce) como línea pequeña al final del timeline o en un "+ ver más" colapsable

"use client";

interface EducationItem {
    title: string;
    institution: string;
    period: string;
    description?: string;
    current?: boolean;
}

// 👉 Edita estos datos con tus fechas e instituciones reales.
const EDUCATION: EducationItem[] = [
    {
        title: "Especialización en IA y Big Data",
        institution: "Nombre del centro",
        period: "2025 — Actualidad",
        description:
            "Ampliando conocimientos en inteligencia artificial y procesamiento de grandes volúmenes de datos.",
        current: true,
    },
    {
        title: "Desarrollo de Aplicaciones Web (DAW)",
        institution: "Nombre del centro",
        period: "2020 — 2022",
        description:
            "Formación en desarrollo frontend y backend, bases de datos y despliegue de aplicaciones web.",
    },
];

export default function Education() {
    // Para que la línea horizontal (desktop) una el centro del primer punto
    // con el centro del último, calculamos el margen en % según el nº de items.
    const inset = 50 / EDUCATION.length;

    return (
        <section
            id="educacion"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                    Educación
                </h2>

                <div className="relative mt-16 flex flex-col gap-14 md:flex-row md:gap-8">
                    {/* Línea vertical (mobile) */}
                    <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[#1d1d1f]/10 dark:bg-[#f5f5f7]/10 md:hidden" />

                    {/* Línea horizontal (desktop) */}
                    <div
                        className="absolute top-[7px] hidden h-px bg-[#1d1d1f]/10 dark:bg-[#f5f5f7]/10 md:block"
                        style={{ left: `${inset}%`, right: `${inset}%` }}
                    />

                    {EDUCATION.map((item) => (
                        <div
                            key={item.title}
                            className="relative flex flex-1 gap-8 pl-8 md:flex-col md:items-start md:gap-0 md:pl-0 md:pt-8"
                        >
                            {/* Punto */}
                            <span
                                className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 md:left-1/2 md:top-0 md:-translate-x-1/2 ${
                                    item.current
                                        ? "border-[#1d1d1f] bg-[#1d1d1f] dark:border-[#f5f5f7] dark:bg-[#f5f5f7]"
                                        : "border-[#1d1d1f]/30 bg-white dark:border-[#f5f5f7]/30 dark:bg-[#161617]"
                                }`}
                            />

                            <div className="flex flex-1 flex-col md:items-center md:text-center">
                                <span className="font-mono text-xs text-[#1d1d1f]/40 dark:text-[#f5f5f7]/40">
                                    {item.period}
                                </span>
                                <h3 className="mt-1.5 text-xl font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                                    {item.title}
                                </h3>
                                <span className="mt-0.5 text-sm text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50">
                                    {item.institution}
                                </span>
                                {item.description && (
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#1d1d1f]/60 sm:text-base dark:text-[#f5f5f7]/60 md:max-w-[220px]">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}