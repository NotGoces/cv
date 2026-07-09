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

// 👉 Edita/añade tus experiencias reales. Para añadir otra, copia un objeto
// y ponlo antes o después según el orden cronológico que quieras.
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
    // Igual que en Educación: calcula el margen de la línea horizontal
    // según el nº de items para que una el centro del primero con el último.
    const inset = 50 / EXPERIENCE.length;

    return (
        <section
            id="experiencia"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                    Experiencia
                </h2>

                <div className="relative mt-16 flex flex-col gap-14 md:flex-row md:gap-8">
                    {/* Línea vertical (mobile) */}
                    <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[#1d1d1f]/10 dark:bg-[#f5f5f7]/10 md:hidden" />

                    {/* Línea horizontal (desktop) — solo si hay más de 1 item */}
                    {EXPERIENCE.length > 1 && (
                        <div
                            className="absolute top-[7px] hidden h-px bg-[#1d1d1f]/10 dark:bg-[#f5f5f7]/10 md:block"
                            style={{ left: `${inset}%`, right: `${inset}%` }}
                        />
                    )}

                    {EXPERIENCE.map((item) => (
                        <div
                            key={`${item.role}-${item.company}`}
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
                                    {item.role}
                                </h3>
                                <span className="mt-0.5 text-sm text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50">
                                    {item.company}
                                </span>
                                {item.description && (
                                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#1d1d1f]/60 sm:text-base dark:text-[#f5f5f7]/60 md:max-w-[260px]">
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