"use client";

import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe2 } from "lucide-react";
import { useState } from "react";

const regions = [
    "North America",
    "Europe",
    "Singapore",
    "Israel",
    "India",
    "Other",
];

export default function ContactPageClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        region: "",
        message: "",
        consent: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - you can add your logic here
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));
    };

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Header Section */}
                <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
                            Let&apos;s Build Secure, Scalable Systems Together
                        </h1>
                        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                            Ready to modernize your digital infrastructure?
                            Guardian InfoConsultancy brings over a decade of
                            expertise in delivering government-grade AI and IT
                            solutions. Our team is available to engage with
                            clients across multiple time zones including US,
                            Europe, Singapore, and Israel. Share your
                            requirements, and we&apos;ll respond with a detailed
                            proposal within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="bg-muted/30 py-16 md:py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Column - Pitch */}
                            <div className="space-y-8">
                                <Card>
                                    <CardHeader>
                                        <h2 className="text-2xl font-bold mb-4">
                                            Get Started
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Tell us about your project goals.
                                            We&apos;ll respond with a concise
                                            plan outlining our approach,
                                            proposed timelines, resourcing, and
                                            budget ranges. Our team is ready to
                                            engage with clients across US,
                                            Europe, Singapore, and Israel time
                                            zones.
                                        </p>
                                    </CardHeader>
                                </Card>

                                {/* Direct Contact Info */}
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold mb-6">
                                            Direct Contact
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Mail className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm mb-1">
                                                        Email
                                                    </p>
                                                    <a
                                                        href="mailto:hello@guardianinfoconsultants.com"
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        hello@guardianinfoconsultants.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Phone className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm mb-1">
                                                        Phone
                                                    </p>
                                                    <a
                                                        href="tel:+918306946109"
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        +91 8306946109
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MapPin className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm mb-1">
                                                        Headquarters
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        India
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Globe2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm mb-1">
                                                        Global Reach
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        Serving clients across
                                                        US, Europe, Singapore,
                                                        and Israel time zones
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>

                            {/* Right Column - Contact Form */}
                            <Card>
                                <CardHeader>
                                    <h3 className="text-2xl font-semibold mb-2">
                                        Send Us a Message
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Work Email *
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="organization">
                                                Organization *
                                            </Label>
                                            <Input
                                                id="organization"
                                                name="organization"
                                                type="text"
                                                required
                                                value={formData.organization}
                                                onChange={handleChange}
                                                placeholder="Your organization name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="region">
                                                Region/Time Zone *
                                            </Label>
                                            <select
                                                id="region"
                                                name="region"
                                                required
                                                value={formData.region}
                                                onChange={handleChange}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">
                                                    Select your region
                                                </option>
                                                {regions.map((region) => (
                                                    <option
                                                        key={region}
                                                        value={region}
                                                    >
                                                        {region}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                Message *
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project goals and requirements..."
                                                rows={6}
                                                className="resize-none"
                                            />
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <input
                                                type="checkbox"
                                                id="consent"
                                                name="consent"
                                                required
                                                checked={formData.consent}
                                                onChange={handleChange}
                                                className="mt-1 size-4 rounded border-input"
                                            />
                                            <Label
                                                htmlFor="consent"
                                                className="text-sm font-normal cursor-pointer"
                                            >
                                                I agree to GIC&apos;s Privacy
                                                Policy and consent to being
                                                contacted about my inquiry.
                                            </Label>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Bottom Info Section */}
                <section className="bg-background py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            What Happens Next?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Our streamlined engagement process ensures rapid
                            response and clear next steps for your project.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">
                                    1
                                </div>
                                <h3 className="font-semibold mb-2">
                                    Initial Review
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    We review your inquiry and respond within 24
                                    hours
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">
                                    2
                                </div>
                                <h3 className="font-semibold mb-2">
                                    Discovery Call
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Schedule a discovery call to discuss your
                                    needs
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">
                                    3
                                </div>
                                <h3 className="font-semibold mb-2">
                                    Detailed Proposal
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Receive a detailed proposal with timelines
                                    and budget
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    );
}
