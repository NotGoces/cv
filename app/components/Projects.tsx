// Objetivo: el "portfolio" dentro del portfolio.

// Proyecto de inventario/gestión económica (destacado, con imagen grande si tienes capturas)
// Tu token GCC en Solidity/BEP-20 — aquí puedes lucir el lado blockchain sin que compita con el frontend
// Cada proyecto: imagen + título + 1 línea + stack usado (con iconos) + link a repo si es público


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

// 👉 Edita/añade tus proyectos reales. Deja githubUrl o liveUrl vacíos
// (undefined) si no aplica y ese enlace no se mostrará.
const PROJECTS: Project[] = [
    {
        title: "Gestión de inventario / vending",
        description:
            "Aplicación personal para gestionar el inventario y las operaciones de una máquina expendedora.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/NotGoces",
    },
    {
        title: "Nombre del proyecto",
        description: "Breve descripción de qué hace y qué problema resuelve.",
        stack: ["Next.js", "TypeScript"],
        githubUrl: "https://github.com/NotGoces",
        liveUrl: "https://tu-demo.com",
    },
    {
        title: "Nombre del proyecto",
        description: "Breve descripción de qué hace y qué problema resuelve.",
        stack: ["React", "Solidity"],
        githubUrl: "https://github.com/NotGoces",
    },
];

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                    Proyectos
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-[#1d1d1f]/10 bg-white transition-colors duration-300 hover:border-[#1d1d1f]/20 dark:border-[#f5f5f7]/10 dark:bg-[#1d1d1f] dark:hover:border-[#f5f5f7]/20"
                        >
                            {/* Imagen / captura */}
                            <div className="relative flex aspect-video w-full items-center justify-center bg-[#1d1d1f]/[0.03] dark:bg-[#f5f5f7]/[0.05]">
                                {/*
                                    👉 Cuando tengas una captura, sustituye este bloque por:
                                    <img
                                        src="/projects/tu-proyecto.png"
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                    />
                                */}
                                <span className="font-mono text-xs text-[#1d1d1f]/30 dark:text-[#f5f5f7]/30">
                                    16:9
                                </span>
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                                    {project.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1d1d1f]/60 dark:text-[#f5f5f7]/60">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-[#1d1d1f]/10 px-2.5 py-1 text-xs text-[#1d1d1f]/60 dark:border-[#f5f5f7]/10 dark:text-[#f5f5f7]/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Enlaces */}
                                {(project.githubUrl || project.liveUrl) && (
                                    <div className="mt-5 flex items-center gap-4 border-t border-[#1d1d1f]/10 pt-4 dark:border-[#f5f5f7]/10">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                                            >
                                                <SiGithub size={14} color="currentColor" />
                                                Código
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-[#f5f5f7]"
                                            >
                                                <ExternalLink size={14} />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}