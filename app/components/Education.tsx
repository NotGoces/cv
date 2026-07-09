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
    const inset = 50 / EDUCATION.length;

    return (
        <section id="educacion" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                    Educación
                </h2>

                <div className="relative mt-16 flex flex-col gap-14 md:flex-row md:gap-8">
                    <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-theme/20 md:hidden" />

                    <div
                        className="absolute top-[7px] hidden h-px bg-theme/20 md:block"
                        style={{ left: `${inset}%`, right: `${inset}%` }}
                    />

                    {EDUCATION.map((item) => (
                        <div
                            key={item.title}
                            className="relative flex flex-1 gap-8 pl-8 md:flex-col md:items-start md:gap-0 md:pl-0 md:pt-8"
                        >
                            <span
                                className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 md:left-1/2 md:top-0 md:-translate-x-1/2 ${
                                    item.current
                                        ? "border-theme bg-theme"
                                        : "border-theme bg-surface"
                                }`}
                            />

                            <div className="flex flex-1 flex-col md:items-center md:text-center">
                                <span className="font-mono text-xs text-muted/60">{item.period}</span>
                                <h3 className="mt-1.5 text-xl font-medium text-theme">{item.title}</h3>
                                <span className="mt-0.5 text-sm text-muted">{item.institution}</span>
                                {item.description && (
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted sm:text-base md:max-w-[220px]">
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