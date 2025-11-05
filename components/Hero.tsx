"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeading, setCurrentHeading] = useState(0);
  
  // Carousel images - using available images from your project
  const carouselImages = [
    // "/images/landing/hero/hero-6.jpg",
    // "/images/landing/hero/hero-3.jpg",
    // "/images/landing/hero/pallette.jpg",
    "/images/landing/hero/hero-9-up.jpg",
    "/images/landing/hero/hero-10.jpg",
    "/images/landing/hero/hero-7.jpg",
    "/images/landing/hero/hero-8-up.png",
    "/images/landing/hero/hero-5.jpg",

  ];

  const headings = [
    "Trusted Aluminium Formwork Partner",
    "From Design to Delivery, Excellence in Every Form",
    "Shaping Structures with Precision and Performance",
  ];

  const prevHeadingRef = useRef(0);
  useEffect(() => {
    prevHeadingRef.current = currentHeading;
  }, [currentHeading]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Auto-advance headings
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 5000); // Change heading every 5 seconds

    return () => clearInterval(timer);
  }, [headings.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Carousel Background */}
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="text-white px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            {/* Main Hero Text with Animation */}
            <div className="h-20 md:h-24 relative overflow-visible">
              {headings.map((heading, index) => {
                const isActive = index === currentHeading;
                const isLeaving = index === prevHeadingRef.current && prevHeadingRef.current !== currentHeading;
                return (
                  <h1
                    key={index}
                    className={`absolute text-2xl md:text-3xl lg:text-5xl font-bold leading-tight heading-anim ${
                      isActive
                        ? 'flip-in opacity-100 z-10'
                        : isLeaving
                        ? 'flip-out opacity-0 z-0'
                        : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <span className="block font-semibold">{heading}</span>
                  </h1>
                );
              })}
            </div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl md:mt-6 mt-2 mb-4 sm:mb-0 text-gray-200 max-w-2xl leading-relaxed">
              Professional aluminium formwork shuttering, design, installation and supervision services
            </p>

            {/* Button for mobile/tablet - only show on small screens */}
            <div className="flex justify-center md:hidden">
              <button
                className="group relative backdrop-blur-xl cursor-pointer bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all duration-300 px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                onClick={() => window.location.href = '/contact'}
              >
                {/* Shine effect on hover */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative font-light text-sm uppercase tracking-wide sm:text-md flex items-center gap-2">
                  Discover More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Button for desktop - only show on md screens or larger */}
          <div className="hidden md:flex">
            <button
              className="group relative backdrop-blur-xl cursor-pointer bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all duration-300 px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden whitespace-nowrap"
              onClick={() => window.location.href = '/contact'}
            >
              {/* Shine effect on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative font-light text-sm uppercase tracking-wide sm:text-md flex items-center gap-2">
                Discover More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .heading-anim {
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform, opacity, filter;
        }
        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(-90deg) translateY(20px) scale(0.98);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes flipOut {
          0% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: perspective(1000px) rotateX(90deg) translateY(-20px) scale(0.98);
            filter: blur(4px);
          }
        }
        .flip-in {
          animation: flipIn 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .flip-out {
          animation: flipOut 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </div>
  );
}
