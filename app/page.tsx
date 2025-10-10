"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
    Cloud,
    Database,
    Globe,
    Building2,
    BarChart3,
    Network,
    Shield,
    Users,
    Zap,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

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

const capabilities = [
    {
        icon: Database,
        title: "AI/ML & Data",
        description:
            "NLP chatbots, predictive analytics, document classification",
    },
    {
        icon: Globe,
        title: "Apps & Portals",
        description: "Web/mobile, accessibility, performance-first",
    },
    {
        icon: Cloud,
        title: "Cloud & Cybersecurity",
        description: "Migrations, DR, monitoring, hardening",
    },
    {
        icon: Building2,
        title: "E‑Governance Solutions",
        description:
            "Citizen services, workflow automation, identity integration",
    },
    {
        icon: BarChart3,
        title: "BI & Dashboards",
        description: "Executive views, operational KPIs",
    },
    {
        icon: Network,
        title: "Integration & IoT",
        description: "Sensors, telemetry, registry systems",
    },
];

const benefits = [
    {
        icon: CheckCircle2,
        title: "Proven delivery",
        description: "130+ projects since 2013 across Gov/PSU/Enterprise",
    },
    {
        icon: Shield,
        title: "Secure by design",
        description: "Cloud posture, DR, monitoring, compliance-first",
    },
    {
        icon: Users,
        title: "Citizen-first",
        description: "Accessible, multilingual, mobile-ready experiences",
    },
    {
        icon: Zap,
        title: "Scale and reliability",
        description: "From pilots to statewide rollouts with SLAs",
    },
    {
        icon: CheckCircle2,
        title: "Transparent engagement",
        description: "Clear milestones, artifacts, and outcomes",
    },
];

const featuredProjects = [
    {
        title: "SAMBAL, Govt. of MP",
        category: "Social welfare e‑governance",
        description:
            "Comprehensive social welfare platform for benefit delivery and citizen service management.",
        url: "https://sambal.mp.gov.in/",
        status: "Delivered",
    },
    {
        title: "WCD Rajasthan",
        category: "Department portal",
        description:
            "Women and Child Development Department portal for program management and citizen engagement.",
        url: "https://wcd.rajasthan.gov.in/home",
        status: "Delivered",
    },
    {
        title: "TN Forests",
        category: "Department portal",
        description:
            "Tamil Nadu Forest Department portal for forest management, conservation, and public services.",
        url: "https://www.forests.tn.gov.in/",
        status: "Delivered",
    },
];

export default function Home() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Background Gradients */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden contain-strict lg:block pointer-events-none"
                >
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                {/* Hero Section */}
                <section>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl lg:mt-16"
                                >
                                    Transforming governance. Empowering
                                    millions.
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground"
                                >
                                    Since 2013, we've partnered with governments
                                    and enterprises to modernize critical
                                    services—delivering 130+ projects that put
                                    citizens first.
                                </TextEffect>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={1}
                                    as="p"
                                    className="mt-6 text-xl font-semibold text-secondary md:text-2xl"
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
                                    className="mt-12 flex items-center gap-2"
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
                    </div>
                </section>

                {/* Credibility Strip */}
                <section className="bg-background pb-16 pt-16 md:pb-20 md:pt-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-3xl font-bold text-foreground">
                                    130+
                                </span>
                                <span className="text-muted-foreground">
                                    projects delivered
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-3xl font-bold text-foreground">
                                    10+
                                </span>
                                <span className="text-muted-foreground">
                                    years of expertise
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-3xl font-bold text-foreground">
                                    Multi
                                </span>
                                <span className="text-muted-foreground">
                                    lingual deployments
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-3xl font-bold text-foreground">
                                    Cloud
                                </span>
                                <span className="text-muted-foreground">
                                    + cybersecurity
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section
                    id="capabilities"
                    className="bg-background py-16 md:py-24"
                >
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Capabilities
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive solutions for modern digital
                                transformation
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.map((capability, index) => {
                                const Icon = capability.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="hover:shadow-lg transition-shadow duration-300 border-border/50"
                                    >
                                        <CardHeader>
                                            <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="size-6 text-primary" />
                                            </div>
                                            <CardTitle>
                                                {capability.title}
                                            </CardTitle>
                                            <CardDescription>
                                                {capability.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Partner Section */}
                <section id="why-gic" className="bg-muted/30 py-16 md:py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Why partner with GIC
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Trusted by governments and enterprises across
                                India
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:bg-background transition-colors duration-300"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                                <Icon className="size-5 text-secondary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Featured Work Section */}
                <section id="work" className="bg-background py-16 md:py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Featured Work
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Delivering impactful solutions for government
                                and public services
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProjects.map((project, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 flex flex-col"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-3">
                                            <Badge variant="secondary">
                                                {project.status}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-base">
                                            {project.category}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <p className="text-sm text-muted-foreground mb-6 flex-1">
                                            {project.description}
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="w-full"
                                        >
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Live
                                                <ArrowRight className="ml-2 size-4" />
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA Section */}
                <section
                    id="contact"
                    className="bg-primary text-primary-foreground py-16 md:py-24"
                >
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Let's modernize critical services—securely and at
                            scale
                        </h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Ready to transform your digital infrastructure? Get
                            in touch with our team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <a href="mailto:contact@guardianinfoconsultants.com">
                                    Talk to us
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                            >
                                <Link href="#work">View case studies</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
