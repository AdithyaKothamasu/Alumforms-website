import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
const pageUrl = new URL("/projects", siteUrl).toString();

export const metadata: Metadata = {
  title: "Aluminium Formwork Projects | High-Rise Buildings & Residential Projects in Hyderabad | Alumforms",
  description: "Explore our portfolio of Mivan shuttering and aluminium formwork projects in Hyderabad, Telangana, and across India. High-rise buildings, residential apartments, and villas.",
  keywords: [
    "Aluminium formwork projects",
    "Mivan shuttering projects",
    "High-rise buildings Hyderabad",
    "Residential formwork projects",
    "Villa formwork projects",
    "Formwork projects Telangana",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Aluminium Formwork Projects | High-Rise Buildings & Residential Projects in Hyderabad | Alumforms",
    description: "Explore our portfolio of Mivan shuttering and aluminium formwork projects in Hyderabad, Telangana, and across India.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: new URL("/images/projects/jayabheri/jayabheri-new.jpeg", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Aluminium Formwork Projects - Alumforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Formwork Projects | High-Rise Buildings & Residential Projects",
    description: "Explore our portfolio of Mivan shuttering and aluminium formwork projects.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


