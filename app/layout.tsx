import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alumforms.com";
const priceValidUntil = "2027-12-31";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aluminium Formwork Manufacturer & Supplier in India | Alumforms",
    template: "%s | Alumforms"
  },
  description: "Alumforms is a leading aluminium formwork manufacturer and supplier in India, offering high-quality shuttering systems, fast delivery, and competitive pricing. Contact us today.",
  keywords: [
    "Mivan shuttering",
    "Aluminium formwork",
    "Aluminium shuttering system",
    "Mivan formwork system",
    "Aluminium formwork manufacturers",
    "Aluminium shuttering manufacturers",
    "Mivan shuttering manufacturers in India",
    "Aluminium formwork suppliers",
    "Mivan shuttering for high-rise buildings",
    "Aluminium formwork for residential projects",
    "Aluminium formwork for villas",
    "Aluminium formwork contractor",
    "Hyderabad",
    "Telangana",
    "India"
  ],
  authors: [{ name: "Alumforms" }],
  creator: "Alumforms",
  publisher: "Alumforms",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Alumforms",
    title: "Mivan Shuttering & Aluminium Formwork Manufacturers in Hyderabad, Telangana | Alumforms",
    description: "Leading Mivan shuttering and aluminium formwork manufacturers in Hyderabad, Telangana, India. Expert design, installation, and supervision services for high-rise buildings, residential projects, and villas.",
    images: [
      {
        url: new URL("/images/brand-assets/Alumforms-logo-transparent.png", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Alumforms - Mivan Shuttering & Aluminium Formwork Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mivan Shuttering & Aluminium Formwork Manufacturers in Hyderabad, Telangana | Alumforms",
    description: "Leading Mivan shuttering and aluminium formwork manufacturers in Hyderabad, Telangana, India.",
    images: [new URL("/images/brand-assets/Alumforms-logo-transparent.png", siteUrl).toString()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = new URL(
    "/images/brand-assets/Alumforms-logo-transparent.png",
    siteUrl
  ).toString();

  // Structured Data Schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alumforms",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alumforms",
    url: siteUrl,
    logo: logoUrl,
    telephone: "+919390158680",
    email: "info@alumforms.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LH No. 16-11-740/3/37, Gaddiannaram, Dilsukhnagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500060",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61559667550127",
      "https://x.com/alumforms2",
      "https://www.linkedin.com/in/alumforms-alumforms-928ba030a/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Alumforms",
    image: logoUrl,
    url: siteUrl,
    telephone: "+919390158680",
    email: "info@alumforms.com",
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        name: "Office",
        streetAddress: "LH No. 16-11-740/3/37, Gaddiannaram, Dilsukhnagar",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500060",
        addressCountry: "IN",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.3676,
          longitude: 78.5180,
        },
      },
      {
        "@type": "PostalAddress",
        name: "Factory",
        streetAddress: "5-22, Gowraram Village, Pamulaparthy Road",
        addressLocality: "Siddipet",
        addressRegion: "Telangana",
        postalCode: "502279",
        addressCountry: "IN",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.7712,
          longitude: 78.6605,
        },
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aluminium Formwork Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mivan Shuttering",
            description: "Mivan shuttering system for high-rise buildings and residential projects",
            serviceType: "Construction Formwork",
            areaServed: ["Hyderabad", "Telangana", "India"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aluminium Formwork",
            description: "Aluminium formwork design, manufacturing, installation and supervision",
            serviceType: "Construction Formwork",
            areaServed: ["Hyderabad", "Telangana", "India"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aluminium Shuttering System",
            description: "Complete aluminium shuttering system solutions",
            serviceType: "Construction Formwork",
            areaServed: ["Hyderabad", "Telangana", "India"],
          },
        },
      ],
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aluminium Formwork System",
    description: "High-quality aluminium formwork and Mivan shuttering systems for construction projects",
    image: new URL("/images/brand-assets/Alumforms-logo-transparent.png", siteUrl).toString(),
    brand: {
      "@type": "Brand",
      name: "Alumforms",
    },
    category: "Construction Equipment",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      // Quote-based pricing; Google requires a numeric price for validation
      price: "0",
      priceValidUntil,
      areaServed: ["Hyderabad", "Telangana", "India"],
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
      // shippingDetails omitted: cost is project-dependent, not fixed
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="ld-json-localbusiness" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script id="ld-json-product" type="application/ld+json">
          {JSON.stringify(productSchema)}
        </Script>
        <Script id="ld-json-breadcrumb" type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ backgroundColor: '#F6F4F3' }}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
