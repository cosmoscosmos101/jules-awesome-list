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
        <div className="w-full py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                        <span className="block text-transparent text-stroke-white">Events</span>
                        <span className="block italic font-serif">Past & Future</span>
                    </h2>
                </div>
                <p className="hidden md:block max-w-xs text-right text-lg text-white/70">
                    Our virtual events feature the <span className="italic font-serif text-white">top talent</span> in the design & development <span className="italic font-serif text-white">space</span>.
                </p>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainer}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-12 scrollbar-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {EVENTS.map((event, i) => (
                    <div
                        key={i}
                        className={`relative flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/5] md:aspect-[4/3] snap-center rounded-3xl overflow-hidden group cursor-pointer border border-white/10`}
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold uppercase leading-tight bg-black/50 backdrop-blur-md inline-block px-3 py-1 rounded-lg">
                                        {event.title}
                                    </h3>
                                    <div className="text-sm font-mono block bg-white/10 backdrop-blur-md inline-block px-2 py-1 rounded">
                                        {event.date}
                                    </div>
                                </div>
                                <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${event.color} ${event.textColor || 'text-white'}`}>
                                    {event.type}
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="hidden group-hover:block transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                    <span className="text-sm uppercase tracking-widest border-b border-white">View Details</span>
                                </div>
                                <div className="bg-white text-black p-3 rounded-full transform transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
