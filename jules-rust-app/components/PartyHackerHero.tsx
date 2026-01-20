"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function PartyHackerHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Grid & Background Entry
        tl.to(".grid-line", {
            scaleX: 1,
            scaleY: 1,
            opacity: 0.4,
            duration: 1.5,
            stagger: 0.05,
            ease: "power2.out",
        });

        // 2. HUD Container Reveal
        tl.fromTo(".hud-container",
            { scale: 0.9, opacity: 0, filter: "blur(10px)" },
            { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
            "-=1.0"
        );

        // 3. Text Glitch Entry
        tl.fromTo(".hero-title",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2 },
            "-=0.5"
        );

        // Continuous Grid Movement
        gsap.to(".grid-overlay", {
            backgroundPosition: "0px 100px",
            duration: 20,
            repeat: -1,
            ease: "none",
        });

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center font-mono selection:bg-cyan-400 selection:text-black"
        >
            {/* Dynamic Cyber Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none perspective-500">
                <div className="grid-overlay absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/80 to-black" />
            </div>

            {/* Main HUD Interface */}
            <div className="hud-container z-10 relative w-[90vw] max-w-7xl border border-cyan-500/30 bg-black/80 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,255,255,0.05)] overflow-hidden">
                {/* Decorative Tech Corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                        <span className="text-xs text-cyan-300 font-bold uppercase tracking-widest font-mono">System_Online_v2.0</span>
                    </div>

                    <h1 className="hero-title font-unbounded text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] leading-none mb-2">
                        PARTY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">HACKER</span>
                    </h1>
                    <p className="hero-title text-sm md:text-base text-gray-400 uppercase tracking-[0.5em] font-bold" style={{ fontFamily: '"Press Start 2P", cursive' }}>
                        Where Retro Meets Future
                    </p>
                </div>

                {/* Split Content: Past & Future */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* The Past */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl opacity-20 group-hover:opacity-50 transition duration-500 blur-sm" />
                        <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border-2 border-yellow-500/50 group-hover:border-yellow-400 transition-all duration-300">
                            <Image
                                src="/images/party-hacker/past_v2.png"
                                alt="The Past"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ imageRendering: "pixelated" }}
                            />
                            <div className="absolute inset-0 bg-yellow-900/20 mix-blend-overlay" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl text-yellow-400 font-bold mb-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>THE_PAST</h3>
                                <p className="text-sm text-gray-300 font-mono leading-relaxed">
                                    Messy desks. CRT monitors. The sound of dial-up. Where code was raw and the pizza was cold.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Future */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 group-hover:opacity-50 transition duration-500 blur-sm" />
                        <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300">
                            <Image
                                src="/images/party-hacker/future_v2.png"
                                alt="The Future"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ imageRendering: "pixelated" }}
                            />
                            <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl text-cyan-400 font-bold mb-2" style={{ fontFamily: '"Press Start 2P", cursive' }}>The_Future</h3>
                                <p className="text-sm text-gray-300 font-mono leading-relaxed">
                                    Holographic displays. Neural links. Neon skylines. Code weaving the fabric of reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 animate-bounce text-cyan-500/50 text-xs font-mono tracking-widest">
                [ INITIALIZE_SEQUENCE ]
            </div>
        </div>
    );
}
