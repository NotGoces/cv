"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface Project {
    title: string;
    description: string;
    stack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const PROJECT: Project = {
    title: "Gestión de inventario / vending",
    description:
        "Aplicación personal para gestionar el inventario y las operaciones de una máquina expendedora.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NotGoces",
};

export default function Projects() {
    return (
        <section id="experience" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                        Experiencia y proyectos
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                        Un recorrido práctico, sin complicarlo demasiado
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                        He trabajado en productos reales y también he construido ideas propias, siempre con el foco en resolver problemas con código claro y mantenible.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-theme bg-surface p-6 shadow-sm">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted/70">
                            Experiencia
                        </p>
                        <h3 className="mt-3 text-xl font-semibold text-theme">
                            Desarrollador Frontend · Cofrico
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                            Desarrollo de interfaces con React y JavaScript, participando en el mantenimiento y evolución de aplicaciones internas.
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
                                Proyecto
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href={PROJECT.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted transition-colors hover:text-theme"
                                    aria-label="Ver código"
                                >
                                    <SiGithub size={16} color="currentColor" />
                                </a>
                                {PROJECT.liveUrl && (
                                    <a
                                        href={PROJECT.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted transition-colors hover:text-theme"
                                        aria-label="Ver demo"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="mt-3 text-xl font-semibold text-theme">
                            {PROJECT.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                            {PROJECT.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {PROJECT.stack.map((tech) => (
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
