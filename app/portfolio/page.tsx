import { Metadata } from "next";
import PortfolioPageClient from "./page-client";

export const metadata: Metadata = {
    title: "Portfolio | Guardian InfoConsultancy - Delivered Projects",
    description:
        "Explore GIC's portfolio of 130+ successfully delivered e-governance projects across India including SAMBAL MP, WCD Rajasthan, and TN Forest Department.",
    openGraph: {
        title: "Portfolio | Guardian InfoConsultancy - Delivered Projects",
        description:
            "Explore GIC's portfolio of 130+ successfully delivered e-governance projects across India including SAMBAL MP, WCD Rajasthan, and TN Forest Department.",
    },
};

export default function PortfolioPage() {
    return <PortfolioPageClient />;
}
