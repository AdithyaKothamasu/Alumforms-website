"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#F6F4F3] text-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company & Social */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
              <Image
                src="/images/brand-assets/Alumforms-icon-transparent.png"
                alt="Alum Forms Logo"
                width={40}
                height={40}
                className="object-contain h-10 w-10"
                priority={false}
              />
              <Image
                src="/images/brand-assets/Alumforms-text-minimal.png"
                alt="Alum Forms Logo"
                width={200}
                height={200}
                className="object-contain h-15"
                priority={false}
              />
            </h3>
            {/* Social Links below logo/name */}
            <div className="flex gap-3 mb-8">
              <a aria-label="Facebook" className="p-2.5 rounded-md bg-black/5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#ECA72C]" href="https://www.facebook.com/profile.php?id=61578284707711" target="_blank" rel="noopener noreferrer">
                <IconBrandFacebook className="text-black" />
              </a>
              <a aria-label="Instagram" className="p-2.5 rounded-md bg-black/5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#ECA72C]" href="https://www.instagram.com/alum.forms/" target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram className="text-black" />
              </a>
              <a aria-label="LinkedIn" className="p-2.5 rounded-md bg-black/5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#ECA72C]" href="#" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin className="text-black" />
              </a>
            </div>
            {/* Legal row here instead of social, in column */}
            <div className="flex flex-col gap-2 text-sm text-black/70 mt-8">
              <p>Copyright © {new Date().getFullYear()} Alum Forms. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-black/80">
              <li><Link className="hover:text-[#ECA72C]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#ECA72C]" href="/about">About us</Link></li>
              <li><Link className="hover:text-[#ECA72C]" href="/services">Services</Link></li>
              <li><Link className="hover:text-[#ECA72C]" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Get in touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-5 text-black/80">
              <li className="flex items-start gap-3">
                <IconMapPin className="text-[#ECA72C] mt-1" />
                <div>
                  <p className="uppercase text-xs tracking-wider text-black/60">Office Location</p>
                  <p> Srinivasam, H.No. 16-11-743/37, Gaddiannaram, Dilsukhnagar, Hyderabad, 500060.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconMapPin className="text-[#ECA72C] mt-1" />
                <div>
                  <p className="uppercase text-xs tracking-wider text-black/60">Factory Location</p>
                  <p>5-22, Gowram Village, Pamulaparthy Road, Siddipet Dist 502279.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="text-[#ECA72C] mt-1" />
                <div>
                  <p>info@alumforms.com</p>
                  <p>sales@alumforms.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="text-[#ECA72C] mt-1" />
                <div>
                  <p>+91 9390158680</p>
                  <p>+91 9493200999</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Faded background logo */}
      <div className="w-full bg-[#F6F4F3] flex justify-center items-end min-h-[120px] overflow-hidden">
        <h1 className="text-center text-[min(12vw,12rem)] font-semibold bg-clip-text text-transparent bg-linear-to-b from-black/10 to-black/30 select-none mb-[-10px] lg:mb-[-20px] whitespace-nowrap tracking-[-0.04em] leading-[90.2%]">
          ALUM FORMS
        </h1>
      </div>
    </footer>
  );
}

