import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: new URL("/services", siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/projects", siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/about", siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: new URL("/contact", siteUrl).toString(),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}


