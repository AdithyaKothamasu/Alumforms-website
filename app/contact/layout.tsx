import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/contact", siteUrl).toString(),
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


