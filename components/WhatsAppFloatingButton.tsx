"use client";

import { useEffect, useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const sentinel = document.getElementById("after-hero-sentinel");
//     if (!sentinel) return;

    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     for (const entry of entries) {
    //       setIsVisible(entry.isIntersecting);
    //     }
    //   },
    //   {
    //     root: null,
    //     threshold: 0,
    //   }
    // );

//     observer.observe(sentinel);
//     return () => observer.disconnect();
//   }, []);

  return (
    <a
      href="https://wa.me/919390158680?text=Hi%20I%27m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 flex items-center justify-center ${
        isVisible
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-2 pointer-events-none"
      }`}
    >
      <IconBrandWhatsapp className="w-6 h-6" />
    </a>
  );
}


