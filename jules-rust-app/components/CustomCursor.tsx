"use client";

import { useEffect, useState } from "react";



type Particle = {
    id: number;
    x: number;
    y: number;
    life: number;
    size: number;
};

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [particleId, setParticleId] = useState(0);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Spawn particle
            if (Math.random() > 0.3) { // Increased spawn rate
                const newParticle = {
                    id: Date.now() + Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                    life: 1.0,
                    size: Math.random() * 6 + 4, // Bigger: 4-10px
                };
                setParticles(prev => [...prev.slice(-30), newParticle]); // More particles
            }

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const clickable =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(!!clickable);
        };

        window.addEventListener("mousemove", updatePosition);

        // Hide default cursor
        document.body.style.cursor = "none";
        const links = document.querySelectorAll("a, button");
        links.forEach(link => {
            (link as HTMLElement).style.cursor = "none";
        });

        const observer = new MutationObserver(() => {
            // Re-apply cursor none for dynamic elements if simplest approach fails
            // But for now, using global CSS might be better. 
            // We'll trust the component to render the custom cursor.
        });

        const animateParticles = () => {
            setParticles(prev =>
                prev
                    .map(p => ({ ...p, life: p.life - 0.05, y: p.y + 1 })) // Fall down slightly
                    .filter(p => p.life > 0)
            );
            requestAnimationFrame(animateParticles);
        };

        const particleLoop = requestAnimationFrame(animateParticles);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.body.style.cursor = "auto";
            cancelAnimationFrame(particleLoop);
        };
    }, []);

    return (
        <>
            {/* Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="fixed pointer-events-none z-[9998] rounded-full bg-gradient-to-t from-accent-orange via-accent-yellow to-white shadow-[0_0_5px_rgba(255,165,0,0.8)]"
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        opacity: p.life,
                        transform: `translate(-50%, -50%) scale(${p.life})`,
                    }}
                />
            ))}

            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: "translate(-10%, -10%)", // Slight offset to align tip
                }}
            >
                <div className={`relative transition-all duration-200 ${isHovering ? "scale-125" : "scale-100"}`}>
                    {/* Soft Light / Glow */}
                    <div className="absolute inset-0 bg-accent-cyan rounded-full blur-xl opacity-60 animate-pulse"></div>

                    {/* Spinning UFO */}
                    <div
                        className="text-4xl animate-spin"
                        style={{
                            animationDuration: '3s',
                            textShadow: '0 0 20px rgba(0, 245, 255, 0.8)'
                        }}
                    >
                        🛸
                    </div>
                </div>
            </div>
        </>
    );
}
