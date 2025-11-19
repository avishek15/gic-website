"use client";

import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    className?: string;
}

export function WhatsAppButton({
    phoneNumber,
    message = "Hello, I'd like to get in touch with Guardian InfoConsultancy.",
    className,
}: WhatsAppButtonProps) {
    // Format phone number for WhatsApp URL (remove spaces, +, and special chars)
    const formattedPhone = phoneNumber.replace(/[\s+\-()]/g, "");
    const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-50 flex items-center justify-center",
                "size-14 rounded-full bg-[#25D366] text-white",
                "shadow-lg shadow-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/60",
                "transition-all duration-300 hover:scale-110",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
                "dark:shadow-[#25D366]/30 dark:hover:shadow-[#25D366]/40",
                className
            )}
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="size-7" />
            <span className="sr-only">Contact us on WhatsApp</span>
        </a>
    );
}

