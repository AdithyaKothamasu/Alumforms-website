import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  return (
    <html lang="en">
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
