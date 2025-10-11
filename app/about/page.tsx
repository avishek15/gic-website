import { Metadata } from "next";
import AboutPageClient from "./page-client";

export const metadata: Metadata = {
    title: "About Us | Guardian InfoConsultancy - Leadership & Expertise",
    description:
        "Meet the GIC team delivering 130+ AI and IT projects since 2013. Expert leadership in e-governance, cybersecurity, and digital transformation for governments worldwide.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us | Guardian InfoConsultancy - Leadership & Expertise",
        description:
            "Meet the GIC team delivering 130+ AI and IT projects since 2013. Expert leadership in e-governance, cybersecurity, and digital transformation for governments worldwide.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
