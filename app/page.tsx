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
import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import StatsSection from "@/components/stats";
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
                <HeroSection />

                {/* Stats Section */}
                <StatsSection />

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
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
                                                {benefit.title}
                                            </CardTitle>
                                            <CardDescription>
                                                {benefit.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
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
                            Let&apos;s modernize critical services—securely and
                            at scale
                        </h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Ready to transform your digital infrastructure? Get
                            in touch with our team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Talk to us</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                            >
                                <Link href="/portfolio">View case studies</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
