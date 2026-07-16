"use client";

import { useEffect, useRef, useState } from "react";
import type { TranslationFn } from "../constants/translations";

const TYPE_SPEED = 50;
const DELETE_SPEED = 40;
const HOLD_TIME = 1800;

function useTypewriter(words: string[]) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion.current) {
            setText(words[0]);
        }
    }, [words]);

    useEffect(() => {
        if (prefersReducedMotion.current) return;

        const current = words[wordIndex % words.length];
        let timeout: ReturnType<typeof setTimeout>;

        if (phase === "typing") {
            if (text.length < current.length) {
                timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
            } else {
                timeout = setTimeout(() => setPhase("holding"), HOLD_TIME);
            }
        } else if (phase === "holding") {
            timeout = setTimeout(() => setPhase("deleting"), HOLD_TIME);
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
            } else {
                timeout = setTimeout(() => {
                    setWordIndex((i) => (i + 1) % words.length);
                    setPhase("typing");
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, phase, wordIndex, words]);

    return text;
}

export default function Hero({ t }: { t: TranslationFn }) {
    const roles = [t("hero.roleFrontend"), t("hero.iaBigData"), t("hero.roleStack")];
    const typed = useTypewriter(roles);

    return (
        <section className="relative flex min-h-[40vh] w-full flex-col items-center justify-center bg-theme px-6 py-12 transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-start">
                <h1 className="text-4xl font-semibold tracking-tight text-theme xs:text-5xl sm:text-7xl">
                    {t("hero.name")}
                </h1>

                <div className="mt-5 flex items-start font-mono text-base text-muted sm:text-2xl sm:items-center">
                    <span className="mr-2 text-muted/60 shrink-0">&gt;</span>
                    <span className="break-words">{typed}</span>
                    <span
                        aria-hidden="true"
                        className="ml-1 inline-block h-[1.1em] w-[2px] shrink-0 animate-[blink_1s_steps(1)_infinite] bg-muted"
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%,
                    50% {
                        opacity: 1;
                    }
                    50.01%,
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
}