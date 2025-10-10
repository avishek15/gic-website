"use client";

import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    CheckCircle2,
    Users,
    Clock,
    Shield,
    Globe2,
    FileText,
    TrendingUp,
} from "lucide-react";

const metrics = [
    { value: "130+", label: "projects delivered" },
    { value: "10+", label: "years of expertise" },
    { value: "3+", label: "Languages Live" },
    { value: "AI-first", label: "approach" },
];

const team = [
    {
        name: "Partha P. Roy Choudhary",
        role: "Founder & Strategic Advisor",
        bio: "Established GIC in 2013 with a vision to deliver world-class technology solutions. Provides critical governance, legal oversight, and investment strategy while guiding the company's long-term growth trajectory and stakeholder relationships.",
        image: "/team/parth.jpg", // Placeholder - will need actual photos
    },
    {
        name: "Nikhil Hakla",
        role: "Managing Director & Chief Executive Officer",
        bio: "Drives strategic vision, business development, and client outcomes across multi-agency programs. Leads organizational growth, partnership initiatives, and ensures alignment between client objectives and delivery execution.",
        image: "/team/nikhil.jpg", // Placeholder - will need actual photos
    },
    {
        name: "Avishek Majumder",
        role: "Lead AI Engineer & Chief Experience Officer",
        bio: "Wears multiple executive hats across technology, operations, and innovation. Spearheads AI-driven solution architecture, oversees platform security and delivery excellence, drives technical strategy, and ensures exceptional client experiences across all engagements.",
        image: "/team/avishek.jpg", // Placeholder - will need actual photos
    },
];

const deliverySteps = [
    {
        icon: Users,
        title: "Discovery",
        description: "Understanding your requirements and constraints",
    },
    {
        icon: FileText,
        title: "Architecture & Plan",
        description: "Designing scalable, secure solutions",
    },
    {
        icon: TrendingUp,
        title: "Pilot",
        description: "Validating approach with controlled deployment",
    },
    {
        icon: Globe2,
        title: "Scale",
        description: "Rolling out across your organization",
    },
    {
        icon: Shield,
        title: "Support",
        description: "Ongoing maintenance and enhancement",
    },
];

const qualityStandards = [
    { icon: CheckCircle2, text: "Rigorous code reviews" },
    { icon: CheckCircle2, text: "CI/CD pipelines" },
    { icon: CheckCircle2, text: "Robust observability" },
    { icon: CheckCircle2, text: "Performance budgeting" },
];

const globalReadiness = [
    {
        icon: Clock,
        title: "Time Zone Coverage",
        description:
            "India core hours with flexible overlap windows for US, Europe, Singapore, and Israel.",
    },
    {
        icon: FileText,
        title: "Contracting",
        description:
            "Flexible fixed-scope or dedicated team models; rapid NDA and SOW turnarounds.",
    },
    {
        icon: Shield,
        title: "Compliance-Ready",
        description:
            "Adherence to accessibility standards, privacy-by-design principles, and data residency requirements.",
    },
];

export default function AboutPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Intro Section */}
                <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            About GIC: Modernizing Systems for Global Impact
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                            GIC (Guardian InfoConsultancy) is a delivery-focused
                            AI and IT services firm established in 2013. We
                            design, build, and support secure digital systems
                            for governments and enterprises worldwide. Our
                            mission is to deliver reliable, scalable, and
                            citizen-centric solutions that drive measurable
                            outcomes.
                        </p>
                    </div>
                </section>

                {/* Key Metrics */}
                <section className="bg-muted/30 py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Team */}
                <section className="bg-background py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Leadership Team
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Meet the leaders driving GIC&apos;s vision and
                                delivery excellence
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="mb-4 mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                                            <Users className="size-12 text-muted-foreground" />
                                        </div>
                                        <CardTitle className="text-xl mb-2">
                                            {member.name}
                                        </CardTitle>
                                        <CardDescription className="text-sm font-semibold text-primary mb-3">
                                            {member.role}
                                        </CardDescription>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Approach */}
                <section className="bg-muted/30 py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Delivery Approach
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                A proven engagement model that ensures
                                successful project outcomes
                            </p>
                        </div>

                        {/* Engagement Model */}
                        <div className="mb-12">
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                Engagement Model
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                {deliverySteps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="text-center"
                                        >
                                            <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Icon className="size-8 text-primary" />
                                            </div>
                                            <h4 className="font-semibold mb-2">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Communication & Quality */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="mb-4">
                                        Communication
                                    </CardTitle>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>
                                                Dedicated delivery lead for your
                                                project
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>
                                                Weekly demos and progress
                                                reviews
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span>
                                                Transparent risk management and
                                                mitigation strategies
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="mb-4">
                                        Quality Standards
                                    </CardTitle>
                                    <ul className="space-y-3 text-muted-foreground">
                                        {qualityStandards.map(
                                            (standard, index) => {
                                                const Icon = standard.icon;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <Icon className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span>
                                                            {standard.text}
                                                        </span>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Global Readiness */}
                <section className="bg-background py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Global Readiness
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Equipped to serve clients worldwide with
                                flexible engagement models
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {globalReadiness.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <CardHeader>
                                            <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="size-6 text-primary" />
                                            </div>
                                            <CardTitle className="mb-3">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="leading-relaxed">
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground py-16 md:py-24">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Partner with a team committed to your success
                        </h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how GIC can help modernize your
                            systems and deliver measurable outcomes.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Book a Discovery Call</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
