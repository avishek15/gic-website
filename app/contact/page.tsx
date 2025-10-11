import { Metadata } from "next";
import ContactPageClient from "./page-client";

export const metadata: Metadata = {
    title: "Contact Us | Guardian InfoConsultancy - Get Started Today",
    description:
        "Contact GIC for your e-governance and IT modernization needs. Expert team ready to deliver secure, scalable solutions. Serving US, Europe, Singapore, and Israel time zones.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Us | Guardian InfoConsultancy - Get Started Today",
        description:
            "Contact GIC for your e-governance and IT modernization needs. Expert team ready to deliver secure, scalable solutions. Serving US, Europe, Singapore, and Israel time zones.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
