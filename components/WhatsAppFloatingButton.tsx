"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919390158680?text=Hi%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1FBA57] focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 md:top-1/2 md:bottom-auto md:-translate-y-1/2"
    >
      <IconBrandWhatsapp className="w-6 h-6" />
    </a>
  );
}
