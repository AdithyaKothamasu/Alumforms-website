import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
const pageUrl = new URL("/services", siteUrl).toString();

export const metadata: Metadata = {
  title: "Aluminium Formwork Services | Design, Manufacturing & Installation in Hyderabad | Alumforms",
  description: "Comprehensive aluminium formwork and Mivan shuttering services in Hyderabad, Telangana. Design, manufacturing, installation, and supervision for residential and commercial projects.",
  keywords: [
    "Aluminium formwork services",
    "Mivan shuttering services",
    "Formwork design Hyderabad",
    "Aluminium formwork installation",
    "Formwork contractors Telangana",
    "Construction formwork services",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Aluminium Formwork Services | Design, Manufacturing & Installation in Hyderabad | Alumforms",
    description: "Comprehensive aluminium formwork and Mivan shuttering services in Hyderabad, Telangana.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: new URL("/images/services/services-hero-2.jpg", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Aluminium Formwork Services - Alumforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Formwork Services | Design, Manufacturing & Installation in Hyderabad",
    description: "Comprehensive aluminium formwork and Mivan shuttering services.",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


