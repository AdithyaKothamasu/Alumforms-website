import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL("/projects", siteUrl).toString(),
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}


