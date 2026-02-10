"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Seeded random function for deterministic values
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Floating particles - floaty little stars
function FloatingParticles({ count = 40 }: { count?: number }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const seed = i + 1;
            return {
                id: i,
                left: Math.round(seededRandom(seed * 1) * 100),
                top: Math.round(seededRandom(seed * 2) * 100),
                size: Math.round(seededRandom(seed * 3) * 3 + 2),
                opacity: Math.round(seededRandom(seed * 4) * 60 + 30) / 100,
                duration: Math.round(seededRandom(seed * 5) * 15 + 10),
                delay: Math.round(seededRandom(seed * 6) * -15),
                driftX: Math.round(seededRandom(seed * 7) * 120 - 60),
                driftY: Math.round(seededRandom(seed * 8) * 120 - 60),
                driftX2: Math.round(seededRandom(seed * 9) * 80 - 40),
                driftY2: Math.round(seededRandom(seed * 10) * 80 - 40),
            };
        });
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        boxShadow: `0 0 ${particle.size + 2}px rgba(255, 255, 255, 0.3)`,
                    }}
                    animate={{
                        x: [0, particle.driftX, particle.driftX2, 0],
                        y: [0, particle.driftY2, particle.driftY, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}

// Animated Gradient Mesh Orbs - Stripe/Linear style (subtle)
function GradientMeshOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large primary orb - top right - very subtle blue */}
            <motion.div
                className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    top: '-25%',
                    right: '-15%',
                }}
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -25, 20, 0],
                    scale: [1, 1.05, 0.98, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary orb - bottom left - subtle navy */}
            <motion.div
                className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(30, 64, 115, 0.2) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    bottom: '-30%',
                    left: '-20%',
                }}
                animate={{
                    x: [0, -25, 35, 0],
                    y: [0, 30, -20, 0],
                    scale: [1, 0.95, 1.03, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Accent orb - center right - very subtle lighter blue */}
            <motion.div
                className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    top: '40%',
                    right: '10%',
                }}
                animate={{
                    x: [0, 40, -30, 0],
                    y: [0, -35, 25, 0],
                    scale: [1, 1.08, 0.95, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

interface AnimatedBackgroundProps {
    showParticles?: boolean;
    showOrbs?: boolean;
    particleCount?: number;
}

export default function AnimatedBackground({
                                               showParticles = true,
                                               showOrbs = true,
                                               particleCount = 40
                                           }: AnimatedBackgroundProps) {
    return (
        <>
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-navy to-brand-blue" />

            {/* Gradient mesh orbs */}
            {showOrbs && <GradientMeshOrbs />}

            {/* Floating particles */}
            {showParticles && <FloatingParticles count={particleCount} />}

            {/* Decorative glow effects */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-brand-lightblue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        </>
    );
}