// Objetivo: demostrar trabajo real, con impacto.

// Tarjeta 1: Cofrico (2022-2024) — Frontend Developer. 3-4 iconos con lo que hiciste ahí (ej: ícono de componente = "desarrollo de UI", ícono de team = "trabajo en equipo")
// Tarjeta 2: Proyecto personal (2024-2025) — app de gestión económica/inventario de máquinas expendedoras. Trátalo como mini case-study: qué problema resolvía + stack usado + captura si tienes

"use client";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description?: string;
    current?: boolean;
}

const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Desarrollador Frontend",
        company: "Cofrico",
        period: "2022 — 2024",
        description:
            "Desarrollo de interfaces con React y JavaScript, colaborando en el mantenimiento y evolución de aplicaciones internas.",
    },
];

export default function Experience() {
    const inset = 50 / EXPERIENCE.length;

    return (
        <section id="experiencia" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                    Experiencia
                </h2>

                <div className="relative mt-16 flex flex-col gap-14 md:flex-row md:gap-8">
                    <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-theme/20 md:hidden" />

                    {EXPERIENCE.length > 1 && (
                        <div
                            className="absolute top-[7px] hidden h-px bg-theme/20 md:block"
                            style={{ left: `${inset}%`, right: `${inset}%` }}
                        />
                    )}

                    {EXPERIENCE.map((item) => (
                        <div
                            key={`${item.role}-${item.company}`}
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
                                <h3 className="mt-1.5 text-xl font-medium text-theme">{item.role}</h3>
                                <span className="mt-0.5 text-sm text-muted">{item.company}</span>
                                {item.description && (
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted sm:text-base md:max-w-[260px]">
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