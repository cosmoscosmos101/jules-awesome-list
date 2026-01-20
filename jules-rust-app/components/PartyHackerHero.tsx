"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PartyHackerHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const decorationsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Background Grid Entry
        tl.fromTo(
            ".grid-line",
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 0.3, duration: 1.5, stagger: 0.1, ease: "power3.out" }
        );

        // 2. Glitch Text Entry
        tl.fromTo(
            ".hero-char",
            { opacity: 0, y: 50, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: { amount: 0.5, from: "random" },
                ease: "back.out(1.7)",
            },
            "-=1"
        );

        // 3. Decorations Entry
        tl.fromTo(
            ".hud-element",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "steps(4)" },
            "-=0.5"
        );

        // Continuous Animation
        gsap.to(".floating-shape", {
            y: 15,
            rotation: 5,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: 1,
        });

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[80vh] bg-black overflow-hidden flex flex-col items-center justify-center font-mono selection:bg-cyan-500 selection:text-black"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute w-full h-[1px] bg-cyan-500 top-1/4 grid-line origin-left" />
                <div className="absolute w-full h-[1px] bg-purple-500 top-2/4 grid-line origin-right" />
                <div className="absolute w-full h-[1px] bg-cyan-500 top-3/4 grid-line origin-left" />
                <div className="absolute h-full w-[1px] bg-purple-500 left-1/4 grid-line origin-top" />
                <div className="absolute h-full w-[1px] bg-cyan-500 left-3/4 grid-line origin-bottom" />

                {/* Radial Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-transparent to-transparent opacity-50" />
            </div>

            {/* Floating Shapes */}
            <div className="absolute top-20 left-20 w-16 h-16 border border-cyan-500/30 rounded-full floating-shape blur-sm" />
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/30 rotate-45 floating-shape blur-sm" />

            {/* Main Content */}
            <div className="z-10 text-center relative p-8 border-l-2 border-r-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm hud-element">
                {/* Top Bracket */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-cyan-500 text-xs tracking-[0.5em] hud-element">
                    [ SYSTEM_READY ]
                </div>

                <h1
                    ref={textRef}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                >
                    <div className="flex justify-center overflow-hidden">
                        {"PARTY".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char}</span>
                        ))}
                    </div>
                    <div className="flex justify-center overflow-hidden mt-[-10px] md:mt-[-20px]">
                        {"HACKER".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char}</span>
                        ))}
                    </div>
                </h1>

                <div className="mt-6 flex items-center justify-center gap-4 text-cyan-300/80 text-sm md:text-base font-bold tracking-widest uppercase">
                    <span className="hud-element opacity-50">&lt; CODE &gt;</span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="hud-element opacity-50">&lt; CREATE &gt;</span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="hud-element opacity-50">&lt; CONQUER &gt;</span>
                </div>

                {/* Bottom Decoration */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent hud-element" />
            </div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
        </div>
    );
}
