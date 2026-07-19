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
    SiPython,
    SiLua,
    SiFigma,
    SiGithub,
    SiGit,
    SiAudacity,
    SiArduino,
    SiClaude,
    SiGooglegemini,
    SiJira,
} from "@icons-pack/react-simple-icons";
import { TbBrandAdobePremiere, TbBrandAdobePhotoshop } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaFileWord, FaFileExcel, FaJava, FaCar, FaMotorcycle } from "react-icons/fa6";
import { BrainCircuit, Users } from "lucide-react";
import { ES, GB } from "country-flag-icons/react/3x2";
import type { ComponentType } from "react";
import type { TranslationFn } from "../constants/translations";

interface Skill {
    name: string;
    icon: ComponentType<{ size?: number; color?: string; className?: string }>;
    brandColor?: string;
}

const FlagWrapper = (FlagComponent: ComponentType<{ className?: string }>) => {
    return function FlagIcon({ size = 30 }: { size?: number }) {
        const width = size;
        const height = Math.round(size * 0.66);

        return (
            <div 
                className="overflow-hidden"
                style={{ width: `${width}px`, height: `${height}px` }}
            >
                <FlagComponent className="h-full w-full object-cover" />
            </div>
        );
    };
};

const getSkills = (t: TranslationFn): Skill[] => [
    { name: t("skills.spanish"), icon: FlagWrapper(ES) }, 
    { name: t("skills.english"), icon: FlagWrapper(GB) }, 
    { name: t("skills.drivingLicenseB"), icon: FaCar },
    { name: t("skills.drivingLicenseA2"), icon: FaMotorcycle },
    { name: t("skills.teamWork"), icon: Users }, 

    { name: "React", icon: SiReact, brandColor: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },

    { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
    { name: "CSS3", icon: SiCss, brandColor: "#1572B6" },
    { name: "Python", icon: SiPython, brandColor: "#3776AB" },
    { name: "LUA", icon: SiLua, brandColor: "#00979D" },
    { name: "Java", icon: FaJava, brandColor: "#007396" },

    { name: t("skills.aiBigData"), icon: BrainCircuit },
    { name: "Claude", icon: SiClaude, brandColor: "#D97757" },
    { name: "Gemini", icon: SiGooglegemini, brandColor: "#4285F4" },
    { name: "Solidity", icon: SiSolidity },
    { name: t("skills.arduinoProcessing"), icon: SiArduino, brandColor: "#03989F" },

    { name: "Figma", icon: SiFigma, brandColor: "#F24E1E" },
    { name: t("skills.imageEditing"), icon: TbBrandAdobePhotoshop, brandColor: "#31A8FF" },
    { name: t("skills.videoEditing"), icon: TbBrandAdobePremiere, brandColor: "#E281FE" },
    { name: t("skills.audioProduction"), icon: SiAudacity, brandColor: "#0000E5" },
    { name: "vscode", icon: VscVscode, brandColor: "#0078D4" },

    { name: "GitHub", icon: SiGithub },
    { name: "Git", icon: SiGit, brandColor: "#F05032" },
    { name: "Jira", icon: SiJira, brandColor: "#0052CC" },
    { name: "Excel", icon: FaFileExcel, brandColor: "#217346" },
    { name: "Word", icon: FaFileWord, brandColor: "#2B579A" },
];

export default function Skills({ t }: { t: TranslationFn }) {
    const skills = getSkills(t);

    return (
        <section id="skills" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                    {t("skills.title")}
                </h2>

                <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {skills.map(({ name, icon: Icon, brandColor }) => (
                        <div
                            key={name}
                            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-theme bg-surface-muted px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-theme"
                        >
                            <div className="flex h-[30px] w-[30px] items-center justify-center">
                                <Icon
                                    size={30}
                                    color={brandColor ?? "currentColor"}
                                    className="text-muted"
                                />
                            </div>
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