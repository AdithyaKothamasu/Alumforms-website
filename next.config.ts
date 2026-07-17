import type { NextConfig } from "next";

const remoteImagePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: "https",
    hostname: "media.alumforms.com",
  },
  {
    protocol: "https",
    hostname: "**.r2.dev",
  },
];

if (process.env.NEXT_PUBLIC_MEDIA_BASE_URL) {
  const mediaUrl = new URL(process.env.NEXT_PUBLIC_MEDIA_BASE_URL);

  if (!remoteImagePatterns.some((pattern) => pattern.hostname === mediaUrl.hostname)) {
    remoteImagePatterns.push({
      protocol: mediaUrl.protocol.replace(":", "") as "http" | "https",
      hostname: mediaUrl.hostname,
    });
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImagePatterns,
  },
};

export default nextConfig;
