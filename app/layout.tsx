import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeprovider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GIC - Guardian InfoConsultancy",
    description:
        "GIC (Guardian InfoConsultancy) is a delivery-focused AI and IT services firm established in 2013. We design, build, and support secure digital systems for governments and enterprises worldwide.",
    keywords: [
        "AI services",
        "IT consulting",
        "digital transformation",
        "government IT solutions",
        "enterprise software",
        "secure digital systems",
        "Guardian InfoConsultancy",
        "GIC",
    ],
    authors: [{ name: "Guardian InfoConsultancy" }],
    creator: "Guardian InfoConsultancy",
    publisher: "Guardian InfoConsultancy",
    openGraph: {
        title: "GIC - Guardian InfoConsultancy",
        description:
            "GIC is a delivery-focused AI and IT services firm established in 2013. We design, build, and support secure digital systems for governments and enterprises worldwide.",
        type: "website",
        locale: "en_US",
        siteName: "Guardian InfoConsultancy",
    },
    twitter: {
        card: "summary_large_image",
        title: "GIC - Guardian InfoConsultancy",
        description:
            "Delivery-focused AI and IT services firm. Designing secure digital systems for governments and enterprises worldwide since 2013.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
