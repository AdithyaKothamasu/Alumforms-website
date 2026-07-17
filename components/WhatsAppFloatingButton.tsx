"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919390158680?text=Hi%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-white opacity-100 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
    >
      <IconBrandWhatsapp className="w-6 h-6" />
    </a>
  );
}

