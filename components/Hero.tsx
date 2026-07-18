"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mediaPath } from "../lib/media";

const slides = [
  {
    src: mediaPath("/images/landing/hero/hero-5.jpg"),
    alt: "Alumforms specialist manufacturing aluminium formwork at the Hyderabad factory",
    position: "object-[52%_center] md:object-center",
  },
  {
    src: mediaPath("/images/landing/hero/hero-10.jpg"),
    alt: "Complete aluminium formwork system assembled for inspection at the Alumforms factory",
    position: "object-[55%_center] md:object-center",
  },
  {
    src: mediaPath("/images/projects/sharadchandrika/sc-1.jpeg"),
    alt: "Aluminium formwork in use at the Sharadchandrika Infra Projects construction site",
    position: "object-[58%_center] md:object-center",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentMotionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let animationFrame = 0;
    const updateScrollMotion = () => {
      animationFrame = 0;
      const hero = heroRef.current;
      if (!hero) return;

      const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight * 0.85), 0), 1);

      if (mediaRef.current) {
        mediaRef.current.style.transform = `scale(${1 + progress * 0.04})`;
      }

      if (contentMotionRef.current) {
        contentMotionRef.current.style.opacity = String(1 - progress * 0.72);
        contentMotionRef.current.style.transform = `translate3d(0, ${progress * 28}px, 0)`;
      }
    };

    const requestScrollUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative h-[88svh] min-h-[640px] max-h-[840px] w-full overflow-hidden bg-[#11110D] text-white"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out motion-reduce:transition-none ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={index === currentSlide ? slide.alt : ""}
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className={`object-cover ${slide.position} ${index === currentSlide ? "hero-image-active" : ""}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/48 md:bg-transparent md:bg-linear-to-r md:from-black/92 md:via-black/58 md:to-black/8" />
      <div className="absolute inset-0 bg-linear-to-t from-black/36 via-transparent to-black/5" />

      <div
        ref={contentMotionRef}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 pt-28 will-change-[opacity,transform] sm:px-10 md:items-center md:pb-12 md:pt-24 lg:px-12"
      >
        <div className="w-full max-w-2xl">
          <p className="hero-reveal hidden text-xs font-semibold uppercase text-[#F2B441] md:block sm:text-sm">
            Designed and manufactured in Hyderabad
          </p>

          <h1
            id="hero-heading"
            className="hero-reveal max-w-[16ch] text-4xl font-semibold leading-[1.08] sm:text-5xl md:mt-4 lg:text-[3.5rem]"
            style={{ animationDelay: "100ms" }}
          >
            Aluminium Formwork Manufacturer in India
          </h1>

          <p
            className="hero-reveal mt-4 max-w-xl text-base leading-relaxed text-white/82 sm:mt-5 sm:text-lg lg:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Premium Mivan shuttering and aluminium formwork systems, designed and manufactured in
            Hyderabad for projects across India.
          </p>

          <div
            className="hero-reveal mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ECA72C] px-6 py-3 text-sm font-semibold text-[#131200] transition-colors hover:bg-[#F4BC53] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="hidden min-h-12 items-center justify-center gap-2 rounded-md border border-white/45 bg-black/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/75 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImageDrift {
          from {
            transform: scale(1.035);
          }
          to {
            transform: scale(1);
          }
        }

        .hero-reveal {
          opacity: 0;
          animation: heroReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-image-active {
          animation: heroImageDrift 8s linear both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1;
            animation: none;
          }

          .hero-image-active {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
