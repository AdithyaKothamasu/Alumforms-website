"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images - using available images from your project
  const carouselImages = [
    "/images/other-images/99855.jpg",
    "/images/other-images/3267.jpg",
    "/images/other-images/WhatsApp-Image-2024-05-15-at-12.00.09-PM.jpeg",
    "/images/other-images/hero-3.png",
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Carousel Background */}
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Main Hero Text */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold md:mb-6 mb-4 leading-tight">
            <span className="block font-semibold">Aluminium Formwork Solutions</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-md sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional aluminium formwork shuttering, design, installation and supervision services
          </p>
          <div className="flex justify-center">
          <button
            className="backdrop-blur-xl bg-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-300 px-8 py-3 rounded-full shadow-lg"
            onClick={() => window.location.href = '/contact'}
          >
            <span className="font-light text-sm uppercase tracking-wide sm:text-md" style={{ color: "inherit" }}>
              Discover More
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
