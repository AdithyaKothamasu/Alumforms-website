"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ProjectMetric = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  location: string;
  sector: string;
  summary: string;
  metrics: ProjectMetric[];
  tags: string[];
  accent: string;
  accentSoft: string;
  images: string[];
};

const PLACEHOLDER_IMAGE = "/images/other-images/04-1.jpg";

const createPlaceholderSet = (count: number) => Array.from({ length: count }, () => PLACEHOLDER_IMAGE);

const projectImageSources: Record<string, string[]> = {
  skylineResidences: ["/images/jayabheri/jayabheri-block-b-scaled.webp", "/images/jayabheri/jayabheri-block-g-scaled.webp", "/images/jayabheri/jayabheri-block-d-scaled.webp", "/images/jayabheri/jayabheri-block-e-scaled.webp"],
  auroraTransitHub: createPlaceholderSet(6),
  verdantLivingCommunity: createPlaceholderSet(6),
  horizonLogisticsPark: createPlaceholderSet(6),
  pacificCivicCentre: createPlaceholderSet(6),
  solsticeWaterfrontVillas: createPlaceholderSet(6),
};

const projects: Project[] = [
  {
    title: "Skyline Residences, Tower B",
    location: "Dubai, UAE",
    sector: "High-Rise Residential",
    summary:
      "A 48-storey residential tower delivered on a compressed schedule with ultra-smooth concrete finishes and a repeatable floor cycle achieved in just 4.5 days.",
    metrics: [
      { label: "Delivery", value: "14 months" },
      { label: "Panels Deployed", value: "5,400+" },
      { label: "Floors", value: "48" },
      { label: "Rework Saved", value: "21%" },
    ],
    tags: ["Rapid Cycle", "Premium Finish", "Downtown Skyline"],
    accent: "#ECA72C",
    accentSoft: "#FFF4DA",
    images: projectImageSources.skylineResidences,
  },
  {
    title: "Aurora Transit Hub",
    location: "Doha, Qatar",
    sector: "Transport Infrastructure",
    summary:
      "A multi-level metro interchange designed for high passenger throughput, combining structural rigour with signature architectural curvature delivered through bespoke formwork modules.",
    metrics: [
      { label: "Modules", value: "312" },
      { label: "Cycle Time", value: "3 days" },
      { label: "Concrete Classes", value: "5" },
      { label: "Variance", value: "< 3mm" },
    ],
    tags: ["Transit Ready", "Curved Geometry", "Night Shift"],
    accent: "#D99128",
    accentSoft: "#FFE9C4",
    images: projectImageSources.auroraTransitHub,
  },
  {
    title: "Verdant Living Community",
    location: "Mumbai, India",
    sector: "Urban Housing",
    summary:
      "Clustered mid-rise towers configured around shared green decks. Modularised formwork allowed parallel casting across four cores without compromising façade articulation.",
    metrics: [
      { label: "Buildings", value: "12" },
      { label: "Cycle Efficiency", value: "+28%" },
      { label: "Green Decks", value: "6" },
      { label: "Waste Reduced", value: "18%" },
    ],
    tags: ["Community-Scale", "Parallel Casting", "Biophilic"],
    accent: "#C48522",
    accentSoft: "#FFE1B0",
    images: projectImageSources.verdantLivingCommunity,
  },
  {
    title: "Horizon Logistics Park",
    location: "Ahmedabad, India",
    sector: "Industrial Warehousing",
    summary:
      "A 1.2 million sq ft distribution park using adaptive aluminum formwork to achieve column-free spans and accelerated slab turnover for phased tenant handovers.",
    metrics: [
      { label: "Total Area", value: "1.2M sq ft" },
      { label: "Span Width", value: "32 m" },
      { label: "Crew Size", value: "28" },
      { label: "Handover", value: "Phased" },
    ],
    tags: ["Mega Floorplates", "Adaptive Bays", "Zero Downtime"],
    accent: "#B1731D",
    accentSoft: "#FAD9A2",
    images: projectImageSources.horizonLogisticsPark,
  },
  {
    title: "Pacific Civic Centre",
    location: "Singapore",
    sector: "Public Realm",
    summary:
      "A civic and cultural hub with cantilevered atria, executed through hybrid aluminium-slab solutions enabling slender edge beams and pristine exposed soffits.",
    metrics: [
      { label: "Cantilever", value: "11.5 m" },
      { label: "Slab Finish", value: "Class A" },
      { label: "Visitors", value: "6K daily" },
      { label: "Energy Gain", value: "12%" },
    ],
    tags: ["Civic Icon", "Hybrid Systems", "Signature Atria"],
    accent: "#F4B942",
    accentSoft: "#F6CF8D",
    images: projectImageSources.pacificCivicCentre,
  },
  {
    title: "Solstice Waterfront Villas",
    location: "Kochi, India",
    sector: "Luxury Residential",
    summary:
      "Terraced waterfront villas with alternating bay orientations. Bespoke form decks captured the architecture’s rhythm while keeping on-site labour lean and agile.",
    metrics: [
      { label: "Villa Count", value: "36" },
      { label: "Crew Savings", value: "-32%" },
      { label: "Orientation", value: "6 variants" },
      { label: "Client Satisfaction", value: "4.9/5" },
    ],
    tags: ["Waterfront", "Bespoke Decks", "Agile Build"],
    accent: "#E1A233",
    accentSoft: "#F2C57C",
    images: projectImageSources.solsticeWaterfrontVillas,
  },
];

function ProjectCarousel({ images, accentColor }: { images: string[]; accentColor: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [images.length, isPaused]);

  const shiftSlide = (direction: -1 | 1) => {
    setActiveIndex((prev) => (prev + direction + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl bg-[#131200] shadow-[0_28px_70px_rgba(19,18,0,0.28)] aspect-4/3 lg:aspect-video"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`absolute inset-0 transition-all duration-1200 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            index === activeIndex
              ? "opacity-100 scale-100 translate-x-0"
              : "pointer-events-none translate-x-6 scale-105 opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Project highlight"
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-contain"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-[#131200]/90 via-[#131200]/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-6 pt-4">
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="h-2 cursor-pointer rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                width: index === activeIndex ? "2.75rem" : "0.75rem",
                backgroundColor: index === activeIndex ? accentColor : "rgba(255, 255, 255, 0.38)",
                opacity: index === activeIndex ? 1 : 0.6,
                boxShadow: index === activeIndex ? `0 8px 20px ${accentColor}55` : "none",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => shiftSlide(-1)}
            className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={() => shiftSlide(1)}
            className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-[#F6F4F3]">
      <section className="relative overflow-hidden bg-linear-to-br from-[#131200] via-[#1C1A13] to-[#2E291E] text-white">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#ECA72C]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ECA72C]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-10 lg:pb-32 lg:pt-32">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6 lg:max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-[#ECA72C]">
                Portfolio Capsule
              </span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[3.5rem]">
                Structures that push the skyline forward.
              </h1>
              <p className="max-w-2xl text-base text-[#F6F4F3]/70 sm:text-lg">
                Dive into six flagship builds where aluminium formwork unlocked impossible timelines, expressive geometry, and zero-compromise finishes. Each case study features a live image carousel and metrics that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-1 -mt-16 pb-24 sm:-mt-20 lg:-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[28px] bg-white text-[#131200] shadow-[0_30px_80px_rgba(19,18,0,0.12)] transition-transform duration-500 hover:-translate-y-1.5"
                style={{
                  borderRadius: "30px",
                  border: `1px solid ${project.accent}33`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.accent}29 0%, rgba(255,255,255,0) 55%)`,
                  }}
                />

                <div className="relative grid gap-10 p-8 sm:p-10 lg:gap-14 lg:p-12">
                  <div className="flex flex-col gap-9">
                    <div className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#131200]/50">
                      <span>Case {String(index + 1).padStart(2, "0")}</span>
                      <div className="h-px flex-1 bg-[#131200]/10" />
                      <span>{project.sector}</span>
                    </div>

                    <ProjectCarousel images={project.images} accentColor={project.accent} />

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:items-start">
                      <div className="space-y-5">
                        <div className="space-y-3">
                          <h2 className="text-xl font-semibold leading-tight text-[#131200] sm:text-2xl lg:text-3xl">
                            {project.title}
                          </h2>
                          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#131200]/60">
                            <span>{project.location}</span>
                            <span className="h-3 w-px bg-[#131200]/20" />
                            <span>Alum Forms Delivery</span>
                          </div>
                        </div>

                        <p className="text-base leading-relaxed text-[#1F1B11]/80">
                          {project.summary}
                        </p>

                      </div>

                      <div className="flex flex-col gap-5 rounded-3xl bg-[#F6F4F3] p-6 shadow-inner">
                        <div className="space-y-2">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#131200]/50 sm:text-xs">
                            Project Snapshot
                          </span>
                          <p className="text-base font-semibold text-[#131200] sm:text-lg">
                            What success looked like
                          </p>
                        </div>

                        <div className="grid gap-3">
                          {project.metrics.map((metric) => (
                            <div
                              key={`${project.title}-${metric.label}`}
                              className="flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm font-semibold text-[#131200] shadow-sm"
                            >
                              <span className="text-[11px] uppercase tracking-[0.25em] text-[#131200]/50 sm:text-sm">
                                {metric.label}
                              </span>
                              <span className="text-sm font-semibold sm:text-base" style={{ color: project.accent }}>
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#131200]/10 bg-white p-10 text-center shadow-[0_25px_60px_rgba(19,18,0,0.08)]">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ECA72C]">
              Ready for Launch
            </span>
            <h2 className="text-2xl font-semibold text-[#131200] sm:text-[2.5rem]">
              Let’s engineer your next landmark together.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#1F1B11]/75 sm:text-base">
              From rapid residential cycles to ambitious civic statements, our aluminium systems adapt to every brief. Share your drawings and we will prototype a casting sequence that keeps your programme ahead of schedule.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="rounded-full bg-[#131200] px-8 py-3 cursor-pointer text-sm font-semibold uppercase tracking-[0.35em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#131200]/90"
                onClick={() => window?.open("/contact", "_self")}
              >
                Talk to Our Team
              </button>
              <button
                type="button"
                className="rounded-full border border-[#131200]/20 cursor-pointer bg-[#F6F4F3] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#131200] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#131200]/40"
                onClick={() => window?.open("/services", "_self")}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
