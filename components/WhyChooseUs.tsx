"use client";

import Image from "next/image";
import { IconSearch, IconShieldCheck, IconSettings, IconBulb } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Expertise",
    description:
      "Benefit from our extensive experience and expertise in aluminum formwork systems, design, and engineering services.",
    icon: IconSearch,
  },
  {
    title: "Quality Assurance",
    description:
      "Our commitment to quality ensures that every product and service we deliver meets the highest industry standards.",
    icon: IconShieldCheck,
  },
  {
    title: "Customization",
    description:
      "We offer tailored solutions to suit the unique requirements of each project, ensuring optimal efficiency and cost-effectiveness.",
    icon: IconSettings,
  },
  {
    title: "Innovation",
    description:
      "Stay ahead of the curve with our cutting-edge technology and innovative solutions designed to streamline your construction processes and maximize productivity.",
    icon: IconBulb,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll("[data-why-card]");
      gsap.from(cards, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/landing/construction.jpg"
          alt="Construction background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-[#ECA72C]">Why choose us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F6F4F3] leading-tight max-w-4xl">
            We present work from skilled hands to perfection.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 p-8">
          {items.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              data-why-card
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full flex items-center justify-center bg-[#F6F4F3] shadow ring-4 ring-black/10">
                <Icon className="text-[#ECA72C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#F6F4F3] mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-[#F6F4F3]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


