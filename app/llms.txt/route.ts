export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const body = [
    "# LLMs crawling policy",
    "# This file communicates usage terms for AI crawlers and LLM data usage.",
    "User-Agent: *",
    "Allow: /",
    `Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}


