"use client";

import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
// import { useState } from "react"; // Will be used when filters are activated

const projects = [
    {
        name: "SAMBAL",
        client: "Government of Madhya Pradesh",
        sector: "e-Governance",
        context:
            "State platform for social welfare schemes, serving millions of citizens.",
        problem:
            "Manual processes and fragmented data hindered efficient scheme delivery and citizen access.",
        solution:
            "Modernized web portal with role-based workflows, integrated with state systems, and a multilingual user experience.",
        rollout:
            "Implemented across multiple districts, streamlining access to various social security benefits.",
        outcomes:
            "Significantly improved citizen access to schemes; enhanced departmental visibility and reporting.",
        url: "https://sambal.mp.gov.in/",
        status: "Delivered",
    },
    {
        name: "Women & Child Development",
        client: "Government of Rajasthan",
        sector: "e-Governance",
        context:
            "Departmental portal providing information and services for women and child welfare programs.",
        problem:
            "Outdated information architecture and limited accessibility made it difficult for citizens to find relevant schemes.",
        solution:
            "Redesigned public portal with accessibility-focused content, intuitive navigation, and a secure hosting posture.",
        rollout:
            "Comprehensive overhaul of the department's digital presence, serving a wide range of beneficiaries.",
        outcomes:
            "Clearer information pathways for citizens; improved discoverability and uptake of departmental schemes.",
        url: "https://wcd.rajasthan.gov.in/home",
        status: "Delivered",
    },
    {
        name: "Tamil Nadu Forest Department",
        client: "Tamil Nadu Forest Department",
        sector: "e-Governance",
        context:
            "Department portal offering services, permits, conservation information, and eco-tourism details.",
        problem:
            "Inefficient online processes for permits and fragmented information on forest resources and tourism.",
        solution:
            "Developed a responsive portal with structured content modules, performance optimization, and integrated analytics.",
        rollout:
            "Centralized digital hub for forest-related services, information, and public engagement.",
        outcomes:
            "Enhanced access to services and information for citizens, researchers, and tourism stakeholders.",
        url: "https://www.forests.tn.gov.in/",
        status: "Delivered",
    },
];

// Filter options - will be used when filters are activated
// const sectors = [
//     "All",
//     "e-Governance",
//     "Healthcare",
//     "Education",
//     "Agriculture",
//     "Justice",
//     "Smart Cities",
// ];
// const statuses = ["All", "Delivered", "Pilot", "Concept"];

export default function PortfolioPage() {
    // Filter state - commented out until filters are activated
    // const [selectedSector, setSelectedSector] = useState("All");
    // const [selectedStatus, setSelectedStatus] = useState("All");

    // Show all projects for now (filters hidden)
    const filteredProjects = projects;

    // Filtering logic - will be activated when filters are shown
    // const filteredProjects = projects.filter((project) => {
    //     const sectorMatch = selectedSector === "All" || project.sector === selectedSector;
    //     const statusMatch = selectedStatus === "All" || project.status === selectedStatus;
    //     return sectorMatch && statusMatch;
    // });

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Intro Section */}
                <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Our Impact: Delivered Projects
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                            A representative sample of our delivered work,
                            showcasing our capabilities across various sectors.
                            Detailed case studies with architecture and outcomes
                            are available upon request.
                        </p>
                    </div>
                </section>

                {/* Filters - Hidden for now, will be activated when more projects are added */}
                {/* <section className="bg-muted/30 py-8">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-semibold mb-3">Sector</label>
                                <div className="flex flex-wrap gap-2">
                                    {sectors.map((sector) => (
                                        <Badge
                                            key={sector}
                                            variant={selectedSector === sector ? "default" : "outline"}
                                            className="cursor-pointer hover:bg-primary/20 transition-colors"
                                            onClick={() => setSelectedSector(sector)}
                                        >
                                            {sector}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-semibold mb-3">Status</label>
                                <div className="flex flex-wrap gap-2">
                                    {statuses.map((status) => (
                                        <Badge
                                            key={status}
                                            variant={selectedStatus === status ? "default" : "outline"}
                                            className="cursor-pointer hover:bg-primary/20 transition-colors"
                                            onClick={() => setSelectedStatus(status)}
                                        >
                                            {status}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Project Cards */}
                <section className="bg-background py-16 md:py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        {filteredProjects.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-lg text-muted-foreground">
                                    No projects match your filters. Try
                                    selecting different options.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {filteredProjects.map((project, index) => (
                                    <Card
                                        key={index}
                                        className="hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-3">
                                                <Badge variant="secondary">
                                                    {project.status}
                                                </Badge>
                                                <Badge variant="outline">
                                                    {project.sector}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-2xl mb-2">
                                                {project.name}
                                            </CardTitle>
                                            <CardDescription className="text-base font-semibold">
                                                {project.client}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-1">
                                                    Context
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.context}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-1">
                                                    Problem
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-1">
                                                    Solution
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.solution}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-1">
                                                    Rollout & Scope
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.rollout}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-1">
                                                    Outcomes
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.outcomes}
                                                </p>
                                            </div>
                                            <div className="pt-4 mt-auto">
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
                                                        <ExternalLink className="ml-2 size-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground py-16 md:py-24">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            See how GIC can deliver for your organization
                        </h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Request detailed case studies with technical
                            architecture, implementation details, and measurable
                            outcomes.
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Request a Case Study Pack
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
