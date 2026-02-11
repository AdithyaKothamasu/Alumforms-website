import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
const pageUrl = new URL("/contact", siteUrl).toString();

export const metadata: Metadata = {
  title: "Contact Us | Aluminium Formwork Contractors in Hyderabad, Telangana | Alumforms",
  description: "Get in touch with leading aluminium formwork and Mivan shuttering contractors in Hyderabad, Telangana, India. Office and factory locations.",
  keywords: [
    "Aluminium formwork contractors",
    "Mivan shuttering contractors",
    "Formwork contractors Hyderabad",
    "Contact formwork manufacturers",
    "Aluminium formwork Telangana",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Contact Us | Aluminium Formwork Contractors in Hyderabad, Telangana | Alumforms",
    description: "Get in touch with leading aluminium formwork and Mivan shuttering contractors in Hyderabad, Telangana, India.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: new URL("/images/about/plant-clean.jpg", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Contact Alumforms - Aluminium Formwork Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aluminium Formwork Contractors in Hyderabad, Telangana",
    description: "Get in touch with leading aluminium formwork and Mivan shuttering contractors.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


