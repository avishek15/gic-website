"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
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
        title: "AI/ML & Data Analytics",
        description:
            "Advanced artificial intelligence and machine learning solutions including natural language processing chatbots, predictive analytics engines, automated document classification, and data-driven decision support systems tailored for government operations.",
    },
    {
        icon: Globe,
        title: "Web & Mobile Applications",
        description:
            "User-centric web and mobile application development with focus on accessibility compliance (WCAG), performance optimization, responsive design, and seamless integration with existing government infrastructure.",
    },
    {
        icon: Cloud,
        title: "Cloud & Cybersecurity",
        description:
            "Comprehensive cloud migration strategies, disaster recovery planning, continuous security monitoring, infrastructure hardening, and compliance management to protect sensitive government data and ensure service availability.",
    },
    {
        icon: Building2,
        title: "E‑Governance Solutions",
        description:
            "End-to-end digital governance platforms including citizen service portals, workflow automation systems, identity and access management integration (Aadhaar, DigiLocker), and inter-departmental coordination tools.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence & Dashboards",
        description:
            "Real-time data visualization dashboards, executive information systems, operational KPI tracking, and custom reporting solutions that transform raw data into actionable insights for policy makers and administrators.",
    },
    {
        icon: Network,
        title: "System Integration & IoT",
        description:
            "Seamless integration of legacy systems with modern platforms, IoT sensor networks for smart governance, telemetry data collection, and inter-agency registry systems for unified data management.",
    },
];

const benefits = [
    {
        icon: CheckCircle2,
        title: "Proven Track Record",
        description:
            "Over 130 successfully delivered projects since 2013 spanning government departments, public sector undertakings, and enterprise clients. Our portfolio includes state-level e-governance implementations serving millions of citizens daily.",
    },
    {
        icon: Shield,
        title: "Security-First Approach",
        description:
            "Comprehensive security framework including cloud security posture management, disaster recovery protocols, 24/7 infrastructure monitoring, and strict compliance with government security standards (ISO 27001, CERT-In guidelines).",
    },
    {
        icon: Users,
        title: "Citizen-Centric Design",
        description:
            "Inclusive digital solutions with multilingual support, WCAG accessibility compliance, mobile-first responsive design, and intuitive user interfaces that work seamlessly across diverse user demographics and devices.",
    },
    {
        icon: Zap,
        title: "Enterprise Scale & Reliability",
        description:
            "Proven capability to scale from pilot projects to statewide deployments handling millions of transactions. Our solutions are built with high availability architecture, performance SLAs, and robust failover mechanisms.",
    },
    {
        icon: CheckCircle2,
        title: "Transparent Collaboration",
        description:
            "Agile project management with clearly defined milestones, regular stakeholder reviews, comprehensive documentation, knowledge transfer sessions, and measurable outcome tracking throughout the engagement lifecycle.",
    },
];

const featuredProjects = [
    {
        title: "SAMBAL, Govt. of MP",
        category: "Social Welfare E‑Governance Platform",
        description:
            "A comprehensive statewide social welfare management system for Madhya Pradesh government enabling seamless benefit delivery, beneficiary tracking, scheme management, and real-time monitoring of welfare programs serving millions of citizens.",
        url: "https://sambal.mp.gov.in/",
        status: "Live in Production",
    },
    {
        title: "WCD Rajasthan",
        category: "Department Portal & Management System",
        description:
            "Integrated web portal and backend management system for Rajasthan's Women and Child Development Department, facilitating program implementation, citizen engagement, grievance redressal, and inter-departmental coordination.",
        url: "https://wcd.rajasthan.gov.in/home",
        status: "Live in Production",
    },
    {
        title: "TN Forests Department",
        category: "Natural Resource Management Portal",
        description:
            "Comprehensive digital platform for Tamil Nadu Forest Department covering forest resource management, wildlife conservation tracking, public service delivery, permit processing, and environmental data management.",
        url: "https://www.forests.tn.gov.in/",
        status: "Live in Production",
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

                {/* Intro Section */}
                <section className="bg-background py-12 md:py-16">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Guardian InfoConsultancy (GIC) is a trusted
                                partner in digital transformation for government
                                and enterprise organizations across India. Since
                                our founding in 2013, we&apos;ve specialized in
                                delivering mission-critical AI, data analytics,
                                and e-governance solutions that serve millions
                                of citizens. Our expertise spans artificial
                                intelligence, cloud infrastructure,
                                cybersecurity, and citizen-centric application
                                development. We combine deep technical knowledge
                                with an understanding of public sector
                                requirements to build scalable, secure, and
                                accessible digital systems that drive real-world
                                impact.
                            </p>
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
                                            <h3 className="text-xl font-semibold mb-2">
                                                {capability.title}
                                            </h3>
                                            <CardDescription className="text-sm">
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
                                Why Partner with GIC
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
                                            <h3 className="text-xl font-semibold mb-2">
                                                {benefit.title}
                                            </h3>
                                            <CardDescription className="text-sm">
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
                                Featured Projects
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Real-world implementations delivering impactful
                                digital governance solutions across India
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
                                        <h3 className="text-xl font-semibold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm font-medium text-primary mb-2">
                                            {project.category}
                                        </p>
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
                                                View Live Site
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
                            Ready to Transform Your Digital Services?
                        </h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Partner with us to modernize critical infrastructure
                            securely and at scale. Our team brings proven
                            expertise in delivering government-grade digital
                            solutions that serve millions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                            >
                                <Link href="/portfolio">Explore Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
