"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Component {
  name: string;
  image: string;
}

const components: Component[] = [
  {
    name: "Beam Panel",
    image: "/images/components-aluminium/Beam Panel.png",
  },
  {
    name: "Bolt Nut",
    image: "/images/components-aluminium/Bolt Nut 250x250.png",
  },
  {
    name: "Elevator Bracket",
    image: "/images/components-aluminium/Elevator Bracket.png",
  },
  {
    name: "End Beam",
    image: "/images/components-aluminium/End Beam.png",
  },
  {
    name: "Hole Bari",
    image: "/images/components-aluminium/Hole Bari Image.png",
  },
  {
    name: "Joint Bar",
    image: "/images/components-aluminium/Joint Bar Image.png",
  },
  {
    name: "L Pin",
    image: "/images/components-aluminium/l_pin 250x250.png",
  },
  {
    name: "Long Pin",
    image: "/images/components-aluminium/Long Pin Image.png",
  },
  {
    name: "Midbeam",
    image: "/images/components-aluminium/Midbeam Image 250x250.png",
  },
  {
    name: "Panel Puller",
    image: "/images/components-aluminium/Panel Puller 250x250.png",
  },
  {
    name: "Prop Head",
    image: "/images/components-aluminium/Prop Head Image 250x250.png",
  },
  {
    name: "Slab Incorner",
    image: "/images/components-aluminium/Slab Incorner.png",
  },
];

export default function ComponentsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  // Keep server and first client render identical; update after mount
  const [visibleCards, setVisibleCards] = useState<number>(4);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });

      // Stagger card animations
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Calculate visible cards based on viewport AFTER mount to avoid hydration mismatch
  useEffect(() => {
    const computeVisible = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      return 1; // use integer to simplify pagination and avoid fractional widths
    };
    setVisibleCards(computeVisible());
    const onResize = () => setVisibleCards(computeVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, components.length - visibleCards);

  // Clamp index when layout changes
  useEffect(() => {
    const max = Math.max(0, components.length - visibleCards);
    if (currentIndex > max) setCurrentIndex(max);
  }, [visibleCards, currentIndex]);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Touch/Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, maxIndex]);

  const translateX = -currentIndex * (100 / visibleCards);

  return (
    <div ref={sectionRef} className="bg-white overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Components
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            High-quality aluminium formwork components manufactured with precision and durability
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              ref={cardsRef}
              className="flex transition-transform mb-4 duration-500 ease-out"
              style={{
                transform: `translateX(${translateX}%)`,
              }}
            >
              {components.map((component, index) => (
                <div
                  key={component.name}
                  className="shrink-0 px-4"
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >
                  <ComponentCard component={component} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            aria-label="Previous component"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-900 hover:text-[#ECA72C] cursor-pointer hover:-translate-x-1 hover:scale-110"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next component"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-900 hover:text-[#ECA72C] cursor-pointer hover:-translate-x-1 hover:scale-110"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(components.length / visibleCards) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const target = index * visibleCards;
                    setCurrentIndex(target > maxIndex ? maxIndex : target);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visibleCards) === index
                      ? "bg-[#ECA72C] w-8"
                      : "bg-[#7A7978] hover:bg-[#ECA72C] cursor-pointer"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ComponentCardProps {
  component: Component;
}

function ComponentCard({ component }: ComponentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(image, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-shadow duration-300"
    >
      <div
        ref={imageRef}
        className="relative h-64 bg-[#F6F4F3] flex items-center justify-center p-8"
      >
        <Image
          src={component.image}
          alt={component.name}
          width={200}
          height={200}
          className="object-contain max-h-full max-w-full"
          loading="lazy"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-[#131200]">
          {component.name}
        </h3>
      </div>
    </div>
  );
}

