"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export function Hero3DLogo() {
    const [isMobile, setIsMobile] = useState(false);
    const logoRef = useRef<HTMLDivElement>(null);

    // Smooth spring animations for mouse movement
    const springConfig = { damping: 20, stiffness: 100 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    // Transform mouse position to rotation values
    const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Detect mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        // Only enable mouse interaction on desktop
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!logoRef.current) return;

            const rect = logoRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate relative position (-0.5 to 0.5)
            const relativeX = (e.clientX - centerX) / (rect.width / 2);
            const relativeY = (e.clientY - centerY) / (rect.height / 2);

            x.set(relativeX);
            y.set(relativeY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [x, y, isMobile]);

    return (
        <div
            ref={logoRef}
            className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end lg:-mr-24 perspective-[1000px]"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative w-[700px] h-[700px] lg:w-[1000px] lg:h-[1000px] preserve-3d"
                style={
                    isMobile
                        ? {
                              transformStyle: "preserve-3d",
                          }
                        : {
                              rotateX,
                              rotateY,
                              transformStyle: "preserve-3d",
                          }
                }
                animate={
                    isMobile
                        ? {
                              rotateY: 360,
                              rotateZ: 360,
                          }
                        : {
                              rotateX: 360,
                          }
                }
                transition={
                    isMobile
                        ? {
                              rotateY: {
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "linear",
                              },
                              rotateZ: {
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                              },
                          }
                        : {
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                          }
                }
            >
                {/* Main logo */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transform: "translateZ(50px)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div className="relative">
                        <Image
                            src="/GIC-logo2.svg"
                            alt="GIC Logo"
                            width={800}
                            height={800}
                            className="opacity-20 dark:opacity-60 dark:invert drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                            style={{
                                filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.3))",
                            }}
                        />
                    </div>
                </motion.div>

                {/* Shadow layers for depth */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transform: "translateZ(0px)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <Image
                        src="/GIC-logo2.svg"
                        alt="GIC Logo Shadow"
                        width={800}
                        height={800}
                        className="opacity-10 dark:opacity-30 dark:invert blur-sm"
                    />
                </motion.div>

                {/* Back layer */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transform: "translateZ(-50px)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <Image
                        src="/GIC-logo2.svg"
                        alt="GIC Logo Back"
                        width={800}
                        height={800}
                        className="opacity-5 dark:opacity-15 dark:invert"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
