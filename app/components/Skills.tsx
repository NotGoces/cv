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
    brandColor?: string; // color de marca opcional, en light mode
}

// 👉 Añade/quita skills libremente. Si el icono es de marca, importa el
// "Si..." correspondiente de simple-icons; si no existe, usa uno genérico
// de lucide-react como hice con Ciberseguridad y IA/Big Data.
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
        <section
            id="skills"
            className="w-full bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#161617]"
        >
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
                    Skills
                </h2>

                <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {SKILLS.map(({ name, icon: Icon, brandColor }) => (
                        <div
                            key={name}
                            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#1d1d1f]/10 bg-[#1d1d1f]/[0.02] px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1d1d1f]/20 hover:bg-[#1d1d1f]/[0.04] dark:border-[#f5f5f7]/10 dark:bg-[#f5f5f7]/[0.03] dark:hover:border-[#f5f5f7]/20 dark:hover:bg-[#f5f5f7]/[0.06]"
                        >
                            <Icon
                                size={30}
                                color={brandColor ?? "currentColor"}
                                className="text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70"
                            />
                            <span className="text-center text-xs font-medium text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}