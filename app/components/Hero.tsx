"use client";

import { useEffect, useRef, useState } from "react";

// 👉 Cambia estos roles por los tuyos reales — se escriben en bucle en el prompt.
const ROLES = [
    "Frontend Developer",
    "React + Typescript + Tailwind",
];

const TYPE_SPEED = 50; // ms por caracter al escribir
const DELETE_SPEED = 40; // ms por caracter al borrar
const HOLD_TIME = 1800; // ms que se queda la frase completa antes de borrarse

function useTypewriter(words: string[]) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
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
                timeout = setTimeout(
                    () => setText(current.slice(0, text.length + 1)),
                    TYPE_SPEED
                );
            } else {
                timeout = setTimeout(() => setPhase("holding"), HOLD_TIME);
            }
        } else if (phase === "holding") {
            timeout = setTimeout(() => setPhase("deleting"), HOLD_TIME);
        } else {
            if (text.length > 0) {
                timeout = setTimeout(
                    () => setText(current.slice(0, text.length - 1)),
                    DELETE_SPEED
                );
            } else {
                setWordIndex((i) => (i + 1) % words.length);
                setPhase("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [text, phase, wordIndex, words]);

    return text;
}

export default function Hero() {
    const typed = useTypewriter(ROLES);

    return (
        <section className="relative flex min-h-[92vh] w-full flex-col items-center justify-center bg-white px-6 transition-colors duration-300 dark:bg-[#161617]">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-start">
                {/* Nombre */}
                <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-7xl dark:text-[#f5f5f7]">
                    Pablo Abad Goldsmith
                </h1>

                {/* Prompt con typing effect */}
                <div className="mt-5 flex items-center font-mono text-lg text-[#1d1d1f]/70 sm:text-2xl dark:text-[#f5f5f7]/70">
                    <span className="mr-2 text-[#1d1d1f]/30 dark:text-[#f5f5f7]/30">&gt;</span>
                    <span>{typed}</span>
                    <span
                        aria-hidden="true"
                        className="ml-1 inline-block h-[1.1em] w-[2px] animate-[blink_1s_steps(1)_infinite] bg-[#1d1d1f]/70 dark:bg-[#f5f5f7]/70"
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