import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";
import { ReCaptchaProvider } from "@/providers/recaptcha-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Guardian InfoConsultancy | AI & IT Services for Government",
    description:
        "Delivery-focused AI & IT firm modernizing government services. 130+ projects delivered since 2013 across India.",
    keywords: [
        "AI services",
        "IT consulting",
        "digital transformation",
        "government IT solutions",
        "e-governance",
        "enterprise software",
        "secure digital systems",
        "Guardian InfoConsultancy",
        "GIC",
        "government modernization",
        "citizen services",
        "India IT services",
    ],
    authors: [{ name: "Guardian InfoConsultancy" }],
    creator: "Guardian InfoConsultancy",
    publisher: "Guardian InfoConsultancy",
    metadataBase: new URL("https://www.guardianinfoconsultants.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Guardian InfoConsultancy | AI & IT Services for Government",
        description:
            "Delivery-focused AI & IT firm modernizing government services. 130+ projects delivered since 2013 across India.",
        type: "website",
        locale: "en_US",
        url: "https://www.guardianinfoconsultants.com",
        siteName: "Guardian InfoConsultancy",
    },
    twitter: {
        card: "summary_large_image",
        title: "Guardian InfoConsultancy | AI & IT Services for Government",
        description:
            "Delivery-focused AI & IT firm modernizing government services. 130+ projects delivered since 2013 across India.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Guardian InfoConsultancy",
        alternateName: "GIC",
        url: "https://www.guardianinfoconsultants.com",
        logo: "https://www.guardianinfoconsultants.com/GIC-Logo.svg",
        description:
            "Delivery-focused AI & IT firm modernizing government services. 130+ projects delivered since 2013 across India.",
        foundingDate: "2013",
        address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
        },
        sameAs: [],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Business Inquiries",
            url: "https://www.guardianinfoconsultants.com/contact",
        },
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ReCaptchaProvider>
                        {children}
                        <WhatsAppButton phoneNumber="+91 82095 37316" />
                    </ReCaptchaProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
