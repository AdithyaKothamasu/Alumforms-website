"use client";

import Image from "next/image";
import { Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F6F4F3]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Empowering Construction Excellence, Every Step of the Way
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              We at Alum Forms are innovators, problem solvers, and collaborators in your construction journey. We are more than just a supplier of manufacturing and construction solutions.
            </p>
            
            {/* Three Sub-sections */}
            <div className="space-y-6">
              {/* Expert Team */}
              <div className="flex items-center space-x-4">
                <div className="shrink-0 w-12 h-12 bg-[#ECA72C] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    The personnel in our team are driven and committed to exceeding the limits of traditional construction methods.
                  </p>
                </div>
              </div>
              
              {/* Commitment to Quality */}
              <div className="flex items-center space-x-4">
                <div className="shrink-0 w-12 h-12 bg-[#ECA72C] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Commitment to Quality</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Our steadfast dedication to quality, innovation, and client happiness is what makes us unique.
                  </p>
                </div>
              </div>
              
              {/* Innovation-Driven */}
              <div className="flex items-center space-x-4">
                <div className="shrink-0 w-12 h-12 bg-[#ECA72C] flex items-center justify-center">
                  {/* Using Lucide-React for the light bulb icon */}
                  <Lightbulb className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Innovation-Driven</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Motivated by our ambition to revolutionize the construction industry, we continuously invest in research, development, and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="hidden md:block relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/landing/about.jpg"
                alt="Construction site with workers and equipment"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
