"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Seeded random function for deterministic values
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Floating particles - floaty little stars
function FloatingParticles({ count = 60 }: { count?: number }) {
    // Generate particles with deterministic values based on index
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

// Hook to get viewport dimensions
function useViewportDimensions() {
    const [dimensions, setDimensions] = useState({
        width: 1200,  // Default values for SSR
        height: 800,
    });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Set initial dimensions
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { ...dimensions, hasMounted };
}

// Breakpoint helper
function getBreakpoint(width: number) {
    if (width < 640) return "xs";      // Mobile
    if (width < 768) return "sm";      // Large mobile / small tablet
    if (width < 1024) return "md";     // Tablet
    if (width < 1280) return "lg";     // Small desktop
    return "xl";                        // Large desktop
}

export default function Intro() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { width, height, hasMounted } = useViewportDimensions();
    const breakpoint = getBreakpoint(width);
    const isMobile = breakpoint === "xs" || breakpoint === "sm";
    const isTablet = breakpoint === "md";

    // Fallback for SSR/pre-hydration - starts at 0 (initial scroll state)
    const fallbackScrollProgress = useMotionValue(0);

    // Always call useScroll (Rules of Hooks), but handle unhydrated state
    const { scrollYProgress: realScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Use fallback until mounted, then switch to real scroll tracking
    const scrollYProgress = hasMounted ? realScrollProgress : fallbackScrollProgress;

    /* ---------------- SCROLL PHASES ---------------- */
    const PHASE_BRAND_END = 0.18;
    const PHASE_PHONE_RISE_END = 0.55;
    const PHASE_PHONE_ROTATE_END = 0.8;

    /* ---------------- RESPONSIVE VALUES ---------------- */
    // Calculate responsive values based on viewport
    const artXEnd = isMobile ? -width * 0.3 : isTablet ? -width * 0.35 : -width * 0.3;
    const artYEnd = isMobile ? height * 0.2 : isTablet ? height * 0.25 : height * 0.35;
    const artScaleEnd = isMobile ? 0.5 : isTablet ? 0.4 : 0.35;

    const titleYEnd = isMobile ? -height * 0.15 : isTablet ? -height * 0.2 : -height * 0.28;
    const titleScaleEnd = isMobile ? 0.65 : isTablet ? 0.6 : 0.55;

    const sloganXOffset = isMobile ? 60 : isTablet ? 100 : 140;

    const phoneYStart = isMobile ? height * 0.5 : height * 0.6;

    // On mobile: no scroll animation, just a single viewport hero
    // On tablet/desktop: tall section for scroll-driven animation
    const sectionHeight = isMobile ? "100vh" : isTablet ? "500vh" : "600vh";

    /* ---------------- ART BACKGROUND ---------------- */
    const artScale = useTransform(scrollYProgress, [0, 0.6], [1, artScaleEnd]);
    const artX = useTransform(scrollYProgress, [0, 0.6], [0, artXEnd]);
    const artY = useTransform(scrollYProgress, [0, 0.6], [0, artYEnd]);
    const artOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0.9]);

    /* ---------------- TITLE (CENTER → TOP) ---------------- */
    const titleScale = useTransform(
        scrollYProgress,
        [0, PHASE_PHONE_RISE_END],
        [1, titleScaleEnd]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0, PHASE_PHONE_RISE_END],
        [0, titleYEnd]
    );

    /* ---------------- SLOGANS (IN → SETTLE → STAY) ---------------- */
    const sloganLeftX = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [-sloganXOffset, 0]
    );

    const sloganRightX = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [sloganXOffset, 0]
    );

    const sloganOpacity = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END],
        [0, 1]
    );

    /* ---------------- PHONE ANIMATIONS ---------------- */
    // Desktop: Full animation with rotation and zoom
    const phoneY = useTransform(scrollYProgress, [0.15, 0.45], [phoneYStart, 0]);
    const phoneRotate = useTransform(
        scrollYProgress,
        [0.45, PHASE_PHONE_ROTATE_END],
        [0, isMobile ? -12 : isTablet ? -45 : -90]
    );

    const phoneScale = useTransform(
        scrollYProgress,
        isMobile
            ? [0.55, 0.75, 0.85, 0.92]
            : [0.55, 0.75, 0.85, 0.92],
        isMobile
            ? [1, 1.5, 6, 20]  // Smaller zoom on mobile
            : isTablet
                ? [1, 1.8, 10, 30]  // Medium zoom on tablet
                : [1, 2, 12, 40]    // Full zoom on desktop
    );

    const phoneOpacity = useTransform(
        scrollYProgress,
        [PHASE_BRAND_END, PHASE_PHONE_RISE_END, 0.88, 0.92],
        [0, 1, 1, 0]
    );

    /* ---------------- SCENE FADEOUT ---------------- */
    const sceneOpacity = useTransform(
        scrollYProgress,
        [0, 0.85, 0.95],
        [1, 1, 0]
    );

    /* ---------------- SCROLL BUTTON ---------------- */
    const scrollButtonOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const handleScrollClick = () => {
        const whySavifySection = document.getElementById("why-savify");
        if (whySavifySection) {
            whySavifySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Responsive phone positioning - using right/left values for initial off-screen position
    // On mobile: center horizontally, start below screen
    // On tablet/desktop: offset positioning with transforms
    const getPhonePosition = () => {
        if (isMobile) {
            // Center the phone horizontally on mobile
            return "left-0 right-0 mx-auto top-[40%]";
        }
        if (isTablet) {
            return "top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2";
        }
        return "top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2";
    };

    // Responsive phone width
    const getPhoneWidth = () => {
        if (isMobile) return "w-[65vw] max-w-[260px]";
        if (isTablet) return "w-[50vw] max-w-[400px]";
        return "w-[clamp(320px,35vw,700px)]";
    };

    // Always render same structure to prevent hydration mismatch
    // Use fallback values for SSR, real values after mount
    // Mobile: static hero with no scroll animation
    if (isMobile && hasMounted) {
        return (
            <section className="relative h-screen overflow-hidden text-white">
                {/* GRADIENT BACKGROUND */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-charcoal via-brand-navy to-brand-blue" />

                {/* FLOATING PARTICLES */}
                <div className="absolute inset-0 z-10">
                    <FloatingParticles count={40} />
                </div>

                {/* Decorative glow effects */}
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-brand-lightblue/10 rounded-full blur-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-brand-blue/10 rounded-full blur-3xl z-10" />

                {/* CONTENT */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center">
                    {/* TITLE */}
                    <div className="flex items-center px-4">
                        <Image
                            src="/images/full-logo-no-bg.png"
                            alt="Savify"
                            width={450}
                            height={750}
                            priority
                            className="mx-auto w-[220px] sm:w-[280px] h-auto"
                        />
                    </div>

                    {/* SLOGANS */}
                    <div className="mt-6 text-center px-4 w-full max-w-4xl">
                        <p className="text-lg xs:text-xl sm:text-2xl font-semibold tracking-tight text-white">
                            Simplify your finances
                        </p>
                        <p className="mt-1 text-xs xs:text-sm sm:text-base font-medium tracking-wide text-white/65">
                            Savify your future
                        </p>
                    </div>

                    {/* SCROLL INDICATOR BUTTON */}
                    <button
                        onClick={handleScrollClick}
                        className="
                            absolute bottom-4 xs:bottom-5 sm:bottom-6
                            left-1/2 -translate-x-1/2
                            z-40
                            p-2 sm:p-3
                            rounded-full
                            bg-white/10 backdrop-blur-sm
                            border border-white/20
                            hover:bg-white/20
                            active:bg-white/30
                            transition-all
                            animate-bounce
                            touch-manipulation
                        "
                        aria-label="Scroll to next section"
                    >
                        <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                </div>
            </section>
        );
    }

    // Tablet & Desktop: full scroll-driven animation
    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: sectionHeight }}
        >
            {/* Sticky Scene */}
            <motion.div
                style={{ opacity: sceneOpacity }}
                className="sticky top-0 h-screen relative overflow-hidden text-white"
            >
                {/* ART BACKGROUND */}
                <motion.div
                    style={{ scale: artScale, x: artX, y: artY, opacity: artOpacity }}
                    className="
                        absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 z-0
                        w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]
                        h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]
                        origin-bottom-left
                        will-change-transform
                    "
                >
                    <Image
                        src="/art.svg"
                        alt="Savify abstract background"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* GRADIENT BACKGROUND */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-charcoal via-brand-navy to-brand-blue" />

                {/* FLOATING PARTICLES */}
                <div className="absolute inset-0 z-10">
                    <FloatingParticles count={40} />
                </div>

                {/* Decorative glow effects - responsive sizing */}
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-lightblue/10 rounded-full blur-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-blue/10 rounded-full blur-3xl z-10" />

                {/* CONTENT */}
                <div className="relative z-20 h-full">
                    {/* TITLE */}
                    <motion.div
                        style={{ scale: titleScale, y: titleY }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none pt-12 sm:pt-16 md:pt-20 lg:pt-24"
                    >
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-[6px] px-4">
                            <Image
                                src="/images/full-logo-no-bg.png"
                                alt="Savify"
                                width={450}
                                height={750}
                                className="mx-auto w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* SLOGANS */}
                    <div className="absolute top-[55%] xs:top-[56%] sm:top-[57%] md:top-[58%] left-1/2 -translate-x-1/2 text-center px-4 sm:px-6 w-full max-w-4xl">
                        <motion.p
                            style={{ x: sloganLeftX, opacity: sloganOpacity }}
                            className="
                                text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl
                                font-semibold
                                tracking-tight
                                text-white
                            "
                        >
                            Simplify your finances
                        </motion.p>

                        <motion.p
                            style={{ x: sloganRightX, opacity: sloganOpacity }}
                            className="
                                mt-1 sm:mt-2
                                text-xs xs:text-sm sm:text-base md:text-lg
                                font-medium
                                tracking-wide
                                text-white/65
                            "
                        >
                            Savify your future
                        </motion.p>
                    </div>

                    {/* PHONE - Tablet & Desktop only */}
                    {isTablet ? (
                        <div className="absolute inset-x-0 top-[38%] flex justify-center z-30">
                            <motion.div
                                style={{
                                    y: phoneY,
                                    rotate: phoneRotate,
                                    scale: phoneScale,
                                    opacity: phoneOpacity,
                                }}
                                className={`
                                    ${getPhoneWidth()}
                                    will-change-transform origin-center
                                `}
                            >
                                <Image
                                    src="/phone.png"
                                    alt="Savify app preview"
                                    width={2000}
                                    height={2000}
                                    priority
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>
                    ) : (
                        <motion.div
                            style={{
                                y: phoneY,
                                rotate: phoneRotate,
                                scale: phoneScale,
                                opacity: phoneOpacity,
                            }}
                            className={`
                                absolute
                                z-30
                                will-change-transform origin-center
                                ${getPhoneWidth()}
                                ${getPhonePosition()}
                            `}
                        >
                            <Image
                                src="/phone.png"
                                alt="Savify app preview"
                                width={2000}
                                height={2000}
                                priority
                                className="w-full h-auto"
                            />
                        </motion.div>
                    )}

                    {/* SCROLL INDICATOR BUTTON */}
                    <motion.button
                        style={{ opacity: scrollButtonOpacity }}
                        onClick={handleScrollClick}
                        className="
                            absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8
                            left-1/2 -translate-x-1/2
                            z-40
                            p-2 sm:p-3
                            rounded-full
                            bg-white/10 backdrop-blur-sm
                            border border-white/20
                            hover:bg-white/20
                            active:bg-white/30
                            transition-all
                            animate-bounce
                            touch-manipulation
                        "
                        aria-label="Scroll to next section"
                    >
                        <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}
