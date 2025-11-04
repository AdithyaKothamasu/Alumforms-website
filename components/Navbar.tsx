"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-gray-200 ${
      isScrolled 
        ? "mx-4 mt-4 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border" 
        : "bg-white/95 backdrop-blur-sm border-b"
    }`}>
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
            {/* <Image
              src="/images/brand-assets/Alumforms-icon-transparent.png"
              alt="Alumforms Icon"
              width={300}
              height={300}
              className="h-10 w-auto"
              /> */}
              <Image
                src="/images/brand-assets/Alumforms-text-transparent.png"
                alt="Alumforms Text"
                width={280}
                height={280}
                className="h-8 w-auto"
                />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#ECA72C] px-3 py-2 text-sm lg:text-lg font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#ECA72C] px-3 py-2 text-sm lg:text-lg font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-[#ECA72C] px-3 py-2 text-sm lg:text-lg font-medium transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#ECA72C] px-3 py-2 text-sm lg:text-lg font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ECA72C] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-2xl border-t border-gray-200 ${
            isScrolled ? "bg-white/70" : "bg-white"
          }`}>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#ECA72C] block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#ECA72C] block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/components"
              className="text-gray-700 hover:text-[#ECA72C] block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-[#ECA72C] block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#ECA72C] block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
