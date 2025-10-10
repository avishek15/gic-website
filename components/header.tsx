"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";

const menuItems = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Our Work", href: "#work" },
    { name: "Why GIC", href: "#why-gic" },
    { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const { scrollYProgress } = useScroll();

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrolled(latest > 0.05);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <header>
            <nav
                data-state={menuState && "active"}
                className={cn(
                    "fixed z-20 w-full border-b transition-colors duration-150",
                    scrolled && "bg-background/50 backdrop-blur-3xl"
                )}
            >
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="relative z-40 flex items-center space-x-2"
                            >
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={
                                    menuState == true
                                        ? "Close Menu"
                                        : "Open Menu"
                                }
                                className="relative z-40 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:w-fit lg:gap-6 lg:items-center">
                            <ModeToggle size="sm" />
                            <Button asChild size="sm">
                                <Link href="#contact">
                                    <span>Get in touch</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Menu - Outside nav for proper z-index */}
            <div
                className={cn(
                    "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg transition-all duration-300 lg:hidden",
                    menuState ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                {/* Close button positioned at top right */}
                <button
                    onClick={() => setMenuState(false)}
                    aria-label="Close Menu"
                    className="absolute top-6 right-6 z-10 p-2 rounded-full hover:bg-accent transition-colors duration-150"
                >
                    <X className="size-6" />
                </button>

                <div className="flex flex-col items-center space-y-8">
                    <ul className="space-y-8 text-center">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuState(false)}
                                    className="text-2xl text-foreground hover:text-primary transition-colors duration-150"
                                >
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col items-center space-y-4 pt-8">
                        <ModeToggle size="sm" />
                        <Button asChild size="sm">
                            <Link
                                href="#contact"
                                onClick={() => setMenuState(false)}
                            >
                                <span>Get in touch</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
