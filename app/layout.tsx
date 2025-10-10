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
    title: "GIC - Global Investment Club",
    description:
        "Connect with visionary founders, strategic investors, and industry partners. Join the premier global investment community driving innovation and growth.",
    keywords: [
        "investment",
        "founders",
        "investors",
        "partners",
        "venture capital",
        "startup ecosystem",
        "global investment club",
    ],
    authors: [{ name: "GIC" }],
    creator: "GIC",
    publisher: "GIC",
    metadataBase: new URL("https://globalinvestmentclub.com"),
    openGraph: {
        title: "GIC - Global Investment Club",
        description:
            "Connect with visionary founders, strategic investors, and industry partners. Join the premier global investment community driving innovation and growth.",
        type: "website",
        locale: "en_US",
        siteName: "Global Investment Club",
    },
    twitter: {
        card: "summary_large_image",
        title: "GIC - Global Investment Club",
        description:
            "Connect with visionary founders, strategic investors, and industry partners. Join the premier global investment community.",
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
