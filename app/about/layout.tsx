import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
const pageUrl = new URL("/about", siteUrl).toString();

export const metadata: Metadata = {
  title: "About Us | Mivan Shuttering Manufacturers in Hyderabad, Telangana | Alumforms",
  description: "30+ years of expertise in Mivan shuttering and aluminium formwork manufacturing in Hyderabad, Telangana, India. Quality formwork systems for construction excellence.",
  keywords: [
    "Mivan shuttering manufacturers",
    "Aluminium formwork manufacturers",
    "Mivan shuttering Hyderabad",
    "Aluminium formwork Telangana",
    "Formwork manufacturers India",
    "About Alumforms",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About Us | Mivan Shuttering Manufacturers in Hyderabad, Telangana | Alumforms",
    description: "30+ years of expertise in Mivan shuttering and aluminium formwork manufacturing in Hyderabad, Telangana, India.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: new URL("/images/about/plant.jpg", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Alumforms Manufacturing Plant - Mivan Shuttering Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mivan Shuttering Manufacturers in Hyderabad, Telangana",
    description: "30+ years of expertise in Mivan shuttering and aluminium formwork manufacturing.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


