import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ArrowRight } from "lucide-react";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export default function HeroSection() {
    return (
        <section>
            <div className="relative pt-28 md:pt-32">
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center lg:text-left sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl lg:mt-16 mx-auto lg:mx-0"
                        >
                            Transforming governance. Empowering millions.
                        </TextEffect>
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground mx-auto lg:mx-0"
                        >
                            Since 2013, we've partnered with governments and
                            enterprises to modernize critical
                            services—delivering 130+ projects that put citizens
                            first.
                        </TextEffect>

                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={1}
                            as="p"
                            className="mt-6 text-xl font-semibold text-secondary md:text-2xl mx-auto lg:mx-0"
                        >
                            Built once. Serving millions.
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 1.5,
                                        },
                                    },
                                },
                                item: transitionVariants.item,
                            }}
                            className="mt-12 flex items-center gap-2 justify-center lg:justify-start"
                        >
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base"
                                >
                                    <Link href="#contact">
                                        <span className="text-nowrap">
                                            Get in touch
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5 text-base"
                            >
                                <Link href="#work">
                                    <span className="text-nowrap">
                                        View our work
                                    </span>
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>
                {/* <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        item: transitionVariants.item,
                    }}
                >
                    <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                            <Image
                                className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                src="/mail2.png"
                                alt="app screen"
                                width="2700"
                                height="1440"
                            />
                            <Image
                                className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                src="/mail2-light.png"
                                alt="app screen"
                                width="2700"
                                height="1440"
                            />
                        </div>
                    </div>
                </AnimatedGroup> */}
            </div>
        </section>
    );
}
