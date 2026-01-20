"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NanobananaHero() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Initial intro animation
            const tl = gsap.timeline();

            tl.from(".panel", {
                yPercent: 100,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            })
                .from(".hero-text-word", {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)"
                }, "-=0.5");

            // Scroll interaction
            // Make the text move slightly on scroll
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                },
                y: 100,
                scale: 0.95
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden font-unbounded">
            {/* Three Colored Panels */}
            <div className="panel w-full md:w-1/3 h-1/3 md:h-full bg-nano-blue relative z-0"></div>
            <div className="panel w-full md:w-1/3 h-1/3 md:h-full bg-nano-green relative z-0"></div>
            <div className="panel w-full md:w-1/3 h-1/3 md:h-full bg-nano-pink relative z-0"></div>

            {/* Floating Text Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-80 md:mix-blend-normal md:opacity-100">
                {/* We duplicate text for mix-blend mode effects if needed, but for now simple overlay */}
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none p-4">
                <h1 ref={textRef} className="text-white text-5xl md:text-8xl font-black text-center leading-tight tracking-tighter uppercase drop-shadow-lg">
                    {/* Breaking text into words for animation */}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">The</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">Flow</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">Party</span></span>{" "}
                    <br className="hidden md:block" />
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">is</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">an</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">Inclusive</span></span>
                    <br className="hidden md:block" />
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">&</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">Fun</span></span>{" "}
                    <span className="inline-block overflow-hidden"><span className="hero-text-word inline-block">Space</span></span>
                </h1>
            </div>

            {/* Decorative element from the 'nanobanana' vibe - maybe a scrolling marquee at bottom */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden text-white font-bold text-xl z-30 opacity-70">
                <div className="animate-marquee whitespace-nowrap">
                    NANOBANANA /// ENJOY THE RIDE /// VIBRANT COLORS /// GSAP ANIMATIONS /// RUST IS COOL ///
                    NANOBANANA /// ENJOY THE RIDE /// VIBRANT COLORS /// GSAP ANIMATIONS /// RUST IS COOL ///
                </div>
            </div>
        </div>
    );
}
