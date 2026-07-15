"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import type { TranslationFn } from "../constants/translations";

interface Project {
    title: string;
    description: string;
    stack: string[];
    githubUrl?: string;
    liveUrl?: string;
    bscScanUrl?: string;
}

const getProjects = (t: TranslationFn): Project[] => [
    {
        title: t("projects.projectTitle"),
        description: t("projects.projectDescription"),
        stack: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/NotGoces",
    },
    {
        // Proyecto de Solidity (2022)
        title: t("projects.tokenTitle") || "BEP-20 Smart Contract Token", 
        description: t("projects.tokenDescription") || "Desarrollo, testeo y despliegue de un token personalizado (Smart Contract) en la red Binance Smart Chain (BSC) utilizando Solidity en 2022.",
        stack: ["Solidity", "Smart Contracts", "BSC"],
        bscScanUrl: "https://bscscan.com/token/0x9d6cF9CD0a28fbbC954C253AF6d870E6407909c3",
    }
];

export default function Projects({ t }: { t: TranslationFn }) {
    const projects = getProjects(t);

    return (
        <section id="experience" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                        {t("projects.sectionLabel")}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        {t("projects.title")}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                        {t("projects.intro")}
                    </p>
                </div>

                {/* Grid de 2 columnas en pantallas grandes */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
                    
                    {/* COLUMNA IZQUIERDA: Experiencia Profesional (Ocupa el alto equivalente a las dos tarjetas de la derecha si es necesario) */}
                    <div className="rounded-2xl border border-theme bg-surface p-6 shadow-sm flex flex-col justify-between h-full min-h-[340px] lg:min-h-[420px]">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                                {t("projects.experienceLabel")}
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-theme">
                                {t("projects.experienceTitle")}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                                {t("projects.experienceDescription")}
                            </p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'UI'].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-theme px-2.5 py-1 text-xs text-muted"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Contenedor flex para apilar de forma limpia tus dos proyectos */}
                    <div className="flex flex-col gap-6">
                        {projects.map((proj, idx) => (
                            <div 
                                key={idx} 
                                className="rounded-2xl border border-theme bg-surface p-6 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                                            {idx === 0 ? t("projects.projectLabel") : (t("projects.blockchainLabel") || "Web3 / Solidity")}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            {proj.githubUrl && (
                                                <a
                                                    href={proj.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted transition-colors hover:text-theme"
                                                    aria-label={t("projects.codeLink")}
                                                >
                                                    <SiGithub size={16} color="currentColor" />
                                                </a>
                                            )}
                                            {(proj.liveUrl || proj.bscScanUrl) && (
                                                <a
                                                    href={proj.liveUrl || proj.bscScanUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted transition-colors hover:text-theme"
                                                    aria-label={proj.bscScanUrl ? "BscScan" : t("projects.demoLink")}
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="mt-3 text-xl font-semibold text-theme">
                                        {proj.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                                        {proj.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {proj.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-theme px-2.5 py-1 text-xs text-muted"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}