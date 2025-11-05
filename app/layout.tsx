import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alum Forms | Aluminium Formwork Shuttering, Design, Installation and Supervision",
  description: "Aluminium Formwork Shuttering, Design, Installation and Supervision services provider based in Hyderabad, Telangana, India",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
  const logoUrl = new URL(
    "/images/brand-assets/Alumforms-logo-transparent.png",
    siteUrl
  ).toString();

  return (
    <html lang="en">
      <head>
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Alum Forms",
            url: siteUrl,
          })}
        </Script>
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Alum Forms",
            url: siteUrl,
            logo: logoUrl,
            telephone: "+919390158680",
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ backgroundColor: '#F6F4F3' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
