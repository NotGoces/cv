"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import type { TranslationFn } from "../constants/translations";

interface CardItem {
    label: string;
    title: string;
    description: string;
    stack: string[];
    githubUrl?: string;
    bscScanUrl?: string;
}

const getCards = (t: TranslationFn): CardItem[] => [
    {
        label: t("projects.experienceLabel"),
        title: t("projects.experienceTitle"),
        description: t("projects.experienceDescription"),
        stack: ["React", "TypeScript", "UI", "Tailwind CSS", "HTML"],
        githubUrl: "https://github.com/pabadcofrico",
    },
    {
        label: t("projects.projectLabel"),
        title: t("projects.projectTitle"),
        description: t("projects.projectDescription"),
        stack: ["HTML", "CSS", t("projects.webDesign"), t("projects.responsive")],
        githubUrl: "https://github.com/NotGoces/Maquinas",
    },
    {
        label: t("projects.blockchainLabel"),
        title: t("projects.tokenTitle"),
        description: t("projects.tokenDescription"),
        stack: ["Solidity", t("projects.smartContracts"), "BSC", "BEP-20"],
        bscScanUrl: "https://bscscan.com/token/0x9d6cF9CD0a28fbbC954C253AF6d870E6407909c3",
    },
    {
        label: t("projects.cvProjectLabel"),
        title: t("projects.cvProjectTitle"),
        description: t("projects.cvProjectDescription"),
        stack: ["TypeScript", "React", "Tailwind CSS", t("projects.deployment"), t("projects.responsive")],
        githubUrl: "https://github.com/NotGoces/cv",
    }
];

export default function Projects({ t }: { t: TranslationFn }) {
    const cards = getCards(t);

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

                <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 items-stretch">
                    {cards.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-theme bg-surface p-6 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                                        {item.label}
                                    </p>

                                    {/* Iconos de enlaces con condicionales independientes */}
                                    <div className="flex items-center gap-3">
                                        {item.githubUrl && (
                                            <a
                                                href={item.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted transition-colors hover:text-theme"
                                                aria-label={t("projects.codeLink")}
                                                title={t("projects.codeLink")}
                                            >
                                                <SiGithub size={16} color="currentColor" />
                                            </a>
                                        )}
                                        {item.bscScanUrl && (
                                            <a
                                                href={item.bscScanUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted transition-colors hover:text-theme"
                                                aria-label={t("projects.bscScanLink")}
                                                title={t("projects.bscScanLink")}
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="mt-3 text-xl font-semibold text-theme">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {item.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-blue-600 dark:bg-blue-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}