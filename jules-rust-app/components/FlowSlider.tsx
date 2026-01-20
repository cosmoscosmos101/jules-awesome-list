"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EVENTS = [
    {
        title: "Flow Party On Demand",
        date: "15 FEB 24",
        type: "Announcement",
        color: "bg-flow-blue",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        title: "The Making of Pigeon's Mission",
        date: "22 MAR 24",
        type: "Game Design",
        color: "bg-flow-black",
        textColor: "text-white",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Slater App Judging",
        date: "14 SEPT 23",
        type: "Development",
        color: "bg-flow-green",
        textColor: "text-black",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Learning Lumos",
        date: "21 MAY 23",
        type: "Development",
        color: "bg-flow-pink",
        textColor: "text-black",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function FlowSlider() {
    const scrollContainer = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full py-20 bg-black text-green-500 overflow-hidden font-mono border-t-4 border-b-4 border-green-500">
            <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight" style={{ fontFamily: '"Press Start 2P", cursive' }}>
                        <span className="block text-white mb-4">EVENTS.LOG</span>
                        <span className="block text-green-500 text-2xl md:text-3xl">&gt; PAST & FUTURE</span>
                    </h2>
                </div>
                <div className="text-right max-w-md">
                    <p className="text-sm md:text-base text-green-500/80 mb-2 uppercase tracking-widest">
                        // COMMUNITY_NOTICE
                    </p>
                    <p className="text-lg md:text-xl text-white font-bold leading-tight" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem', lineHeight: '1.5' }}>
                        Hackers are welcome to contribute their ideas, we have GSAP.
                    </p>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainer}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-12 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {EVENTS.map((event, i) => (
                    <div
                        key={i}
                        className={`relative flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] snap-center overflow-hidden group cursor-pointer border-4 border-green-900 hover:border-green-400 transition-colors duration-300 bg-black`}
                        style={{ boxShadow: "8px 8px 0px 0px rgba(0, 255, 0, 0.2)" }}
                    >
                        {/* Image Background (Pixelated) */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                                style={{ imageRendering: "pixelated" }}
                            />
                            {/* CRT Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-10 opactiy-50" />
                            <div className="absolute inset-0 bg-green-900/30 mix-blend-overlay z-10" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <h3 className="text-lg md:text-xl font-bold uppercase leading-tight bg-black text-white inline-block px-2 py-1 border-2 border-white" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}>
                                        {event.title}
                                    </h3>
                                    <div className="text-xs font-mono block bg-green-900 text-green-300 inline-block px-2 py-1 border border-green-500">
                                        DATE_{event.date}
                                    </div>
                                </div>
                                <div className={`px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider border-2 border-current bg-black ${event.textColor?.includes('black') ? 'text-yellow-400 border-yellow-400' : 'text-cyan-400 border-cyan-400'}`} style={{ fontFamily: '"Press Start 2P", cursive' }}>
                                    {event.type}
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <span className="text-xs uppercase tracking-widest bg-black text-white px-2 py-1 border border-white hover:bg-white hover:text-black transition-colors">
                                        [ VIEW_LOGS ]
                                    </span>
                                </div>
                                <div className="bg-black border-2 border-green-500 text-green-500 p-2 transform transition-transform duration-300 group-hover:scale-110 active:scale-95">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
