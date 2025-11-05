import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/services", siteUrl).toString(),
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


