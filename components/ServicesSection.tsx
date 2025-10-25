"use client";

import Image from "next/image";

export default function ServicesSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="hidden md:block relative order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src="/images/other-images/04-1.jpg"
                alt="Aluminium formwork panels and construction materials"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Small Heading */}
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              OUR SERVICES
            </h3>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Transforming Concepts into Concrete Reality
            </h2>
            
            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our comprehensive range of innovative products and services tailored to elevate your construction projects. From advanced aluminium formwork systems to expert design and engineering solutions, we're here to empower your vision. Discover excellence, efficiency, and reliability with Alum Forms.
            </p>
            
            {/* Call to Action Button */}
            <div className="pt-4">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 hover:text-white text-gray-800 font-light underline cursor-pointer uppercase text-sm tracking-wide px-8 py-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/services'}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
