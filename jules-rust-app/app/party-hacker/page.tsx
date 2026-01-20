"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PartyHackerHero from "@/components/PartyHackerHero";
import FlowSlider from "@/components/FlowSlider";
import BentoCard from "@/components/BentoCard";

gsap.registerPlugin(ScrollTrigger);

const CHALLENGES = [
    {
        title: "Generative Art",
        description: "Create a piece of art that evolves over time using noise algorithms.",
        difficulty: "Hard",
        grid: "col-span-1 md:col-span-2 lg:col-span-2",
        tags: ["p5.js", "Noise", "Canvas"],
        icon: "🎨"
    },
    {
        title: "Glitch Effect",
        description: "Simulate a digital glitch effect on hover or scroll.",
        difficulty: "Medium",
        grid: "col-span-1",
        tags: ["CSS", "Filters"],
        icon: "👾"
    },
    {
        title: "Particle System",
        description: "Build a physics-based particle system that reacts to mouse input.",
        difficulty: "Hard",
        grid: "col-span-1",
        tags: ["Physics", "Canvas"],
        icon: "✨"
    },
    {
        title: "Typography",
        description: "Kinetic typography experiments using GSAP.",
        difficulty: "Easy",
        grid: "col-span-1 md:col-span-2",
        tags: ["GSAP", "Text"],
        icon: "📝"
    }
];

export default function PartyHackerPage() {
    const mainRef = useRef<HTMLElement>(null);
    const whoRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!whoRef.current || !containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%", // Pin for 300% of the viewport height (long scroll)
                pin: true,
                scrub: 1, // Smooth scrubbing effect (1 second catch-up)
                anticipatePin: 1,
            }
        });

        // 1. Initial State: WHO is visible (or fades in immediately), WE and ARE are hidden
        // We assume "WHO" starts visible or fades in at 0% scroll

        // 2. Reveal "WE"
        tl.fromTo(".text-we",
            { x: -100, opacity: 0, scale: 0.8 },
            { x: 0, opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
        )

            // 3. Reveal "ARE" (slightly overlapping or sequential)
            .fromTo(".text-are",
                { x: -100, opacity: 0, scale: 0.8 },
                { x: 0, opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
                "-=0.5" // Start slightly before "WE" finishes
            )

            // 4. Reveal Description Paragraph (Slide up)
            .fromTo(".text-desc",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
            )

            // 5. Enhance visuals - emphasize/highlight words
            .to(".text-who", { color: "white", duration: 1 }, "-=1")
            .to(".text-we", { color: "white", duration: 1 }, "-=1")
            .to(".text-are", { color: "white", duration: 1 }, "-=1");


    }, { scope: mainRef });

    return (
        <main ref={mainRef} className="bg-black min-h-screen selection:bg-flow-pink selection:text-white overflow-x-hidden">

            {/* 1. Hero Section */}
            <PartyHackerHero />

            {/* 2. Events Slider */}
            <section id="events" className="relative z-20 bg-black -mt-20 pt-20 rounded-t-[3rem] pb-20">
                <FlowSlider />
            </section>

            {/* 3. Who We Are / Intro (Pinned Section) */}
            <div ref={containerRef} className="relative h-screen bg-[#17E668] text-black w-full z-10">
                <div ref={whoRef} className="h-full w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 overflow-hidden">

                    {/* Giant Stacked Text */}
                    <div className="flex-1 flex flex-col justify-center items-start z-10">
                        <h2 className="text-[15vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter">
                            <div className="text-who text-flow-black">WHO</div>
                            <div className="text-we opacity-0 text-flow-black">WE</div>
                            <div className="text-are opacity-0 text-flow-black">ARE</div>
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="flex-1 mt-8 md:mt-0 flex items-center z-10">
                        <p className="text-desc opacity-0 text-xl md:text-4xl font-medium leading-tight max-w-xl text-flow-black">
                            The Flow Party is a <span className="font-serif italic bg-white px-2">safe</span>, inclusive, and fun space for website developers and designers.
                            <br /><br />
                            We work hard but always in a <span className="font-serif italic bg-white px-2">Party Mood</span>.
                        </p>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-flow-blue/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 mix-blend-multiply" />

                </div>
            </div>

            {/* 4. Challenges Grid */}
            <section className="py-32 bg-black text-white relative z-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-col md:flex-row items-baseline justify-between gap-4">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                            <span className="text-transparent text-stroke-white">Party</span> <span className="italic font-serif text-flow-pink">Challenges</span>
                        </h2>
                        <p className="text-white/60 max-w-md text-right">
                            Sharpen your skills with our weekly creative coding challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {CHALLENGES.map((challenge, i) => (
                            <div key={i} className="group-card">
                                <BentoCard {...challenge} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Connect */}
            <section className="py-20 bg-flow-blue text-white text-center relative z-20">
                <h2 className="text-4xl md:text-8xl font-bold mb-8 tracking-tighter">
                    JOIN THE <br /> <span className="italic font-serif">PARTY</span>
                </h2>
                <button className="px-8 py-4 bg-white text-flow-blue rounded-full text-xl font-bold hover:scale-105 transition-transform">
                    Discord Community
                </button>
            </section>
        </main>
    );
}
