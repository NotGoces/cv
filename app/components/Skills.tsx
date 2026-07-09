// Objetivo: grid visual de tecnologías, cero texto largo.

// Logos: React, Node, Tailwind, JavaScript/TypeScript, HTML5, CSS3, Git
// Subgrupo opcional más pequeño: Solidity (por tu proyecto de token GCC)
// Cada ícono con su nombre debajo, sin descripciones

"use client";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiSolidity,
} from "@icons-pack/react-simple-icons";
import { ShieldCheck, BrainCircuit } from "lucide-react";
import type { ComponentType } from "react";

interface Skill {
    name: string;
    icon: ComponentType<{ size?: number; color?: string; className?: string }>;
    brandColor?: string;
}

const SKILLS: Skill[] = [
    { name: "React", icon: SiReact, brandColor: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },
    { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
    { name: "CSS3", icon: SiCss, brandColor: "#1572B6" },
    { name: "Solidity", icon: SiSolidity },
    { name: "Ciberseguridad", icon: ShieldCheck },
    { name: "IA & Big Data", icon: BrainCircuit },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                    Skills
                </h2>

                <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {SKILLS.map(({ name, icon: Icon, brandColor }) => (
                        <div
                            key={name}
                            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-theme bg-surface-muted px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-theme"
                        >
                            <Icon
                                size={30}
                                color={brandColor ?? "currentColor"}
                                className="text-muted"
                            />
                            <span className="text-center text-xs font-medium text-muted">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}