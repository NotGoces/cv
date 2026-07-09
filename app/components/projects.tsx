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
}

const getProject = (t: TranslationFn): Project => ({
    title: t("projects.projectTitle"),
    description: t("projects.projectDescription"),
    stack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NotGoces",
});

export default function Projects({ t }: { t: TranslationFn }) {
    const project = getProject(t);

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

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-theme bg-surface p-6 shadow-sm">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                            {t("projects.experienceLabel")}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold text-theme">
                            {t("projects.experienceTitle")}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                            {t("projects.experienceDescription")}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
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

                    <div className="rounded-2xl border border-theme bg-surface p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                                {t("projects.projectLabel")}
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted transition-colors hover:text-theme"
                                    aria-label={t("projects.codeLink")}
                                >
                                    <SiGithub size={16} color="currentColor" />
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted transition-colors hover:text-theme"
                                        aria-label={t("projects.demoLink")}
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="mt-3 text-xl font-semibold text-theme">
                            {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-theme px-2.5 py-1 text-xs text-muted"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
