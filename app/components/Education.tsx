"use client";

import type { TranslationFn } from "../constants/translations";
import { GraduationCap, Code2, Cpu, BookOpen } from "lucide-react";

interface EducationItem {
    title: string;
    institution?: string;
    period: string;
    description?: string;
    current?: boolean;
    icon: React.ComponentType<{ className?: string }>;
}

interface ShortCourseItem {
    title: string;
    platform: string;
    year: string;
}

export default function Education({ t }: { t: TranslationFn }) {
    const education: EducationItem[] = [
        {
            title: t("education.specializationTitle"),
            period: "2025 - 2026",
            description: t("education.specializationDescription"),
            institution: t("education.specializationInstitution"),
            current: true,
            icon: Cpu,
        },
        {
            title: t("education.dawTitle"),
            period: "2022 - 2024",
            description: t("education.dawDescription"),
            institution: t("education.dawInstitution"),
            icon: Code2,
        },
        {
            title: t("education.highSchoolTitle"),
            period: "2020 - 2022",
            description: t("education.highSchoolDescription"),
            institution: t("education.highSchoolInstitution"),
            icon: GraduationCap,
        },
    ];

    const shortCourses: ShortCourseItem[] = [
        { title: t("education.shortCourse1Title"), platform: t("education.shortCourse1Platform"), year: "2016 - 2019" },
        { title: t("education.shortCourse2Title"), platform: t("education.shortCourse2Platform"), year: "2012 - 2016" },
        { title: t("education.shortCourse3Title"), platform: t("education.shortCourse3Platform"), year: "2024" },
        { title: t("education.shortCourse4Title"), platform: t("education.shortCourse4Platform"), year: "2023" },
        { title: t("education.shortCourse5Title"), platform: t("education.shortCourse5Platform"), year: "2023" },
    ];

    return (
        <section id="education" className="w-full bg-theme px-6 py-24 transition-colors duration-300">
            <div className="mx-auto w-full max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight text-theme sm:text-4xl">
                    {t("education.title")}
                </h2>
                <div className="relative mt-16 flex flex-col gap-12 pl-4 sm:pl-6">
                    <div className="absolute left-[21px] top-3 h-[calc(100%-1rem)] w-px bg-theme/20 sm:left-[25px]" />

                    {education.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="relative flex gap-6 sm:gap-8">
                                <div
                                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${item.current
                                        ? "border-primary bg-primary text-white scale-105"
                                        : "border-theme bg-surface text-muted"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="flex flex-col pt-1">
                                    <span className="font-mono text-xs font-medium tracking-wider text-muted/60">
                                        {item.period}
                                    </span>
                                    <h3 className="mt-1 text-lg font-semibold text-theme sm:text-xl">
                                        {item.title}
                                    </h3>
                                    {item.institution && (
                                        <span className="mt-0.5 text-sm text-muted/80">{item.institution}</span>
                                    )}
                                    {item.description && (
                                        <p className="mt-2 text-sm leading-relaxed text-muted max-w-xl">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    <div className="relative flex flex-col gap-6 mt-4">
                        <div className="relative flex gap-6 sm:gap-8 items-center">
                            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-theme/30 bg-surface text-muted/40">
                                <BookOpen className="h-4 w-4" />
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-muted/50 pt-1">
                                {t("education.extraCoursesTitle") || "Cursos y Certificaciones"}
                            </h4>
                        </div>

                        {shortCourses.map((course, idx) => (
                            <div key={idx} className="relative flex gap-6 sm:gap-8 pl-[14px] sm:pl-[18px]">
                                <div className="relative z-10 mt-2 h-3 w-3 shrink-0 rounded-full border border-theme/40 bg-surface" />

                                <div className="flex flex-1 flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <div className="flex flex-col">
                                        <h5 className="text-sm font-medium text-theme/90">{course.title}</h5>
                                        <span className="text-xs text-muted">{course.platform}</span>
                                    </div>
                                    <span className="font-mono text-xs text-muted/40 sm:text-right shrink-0">{course.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}