import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dobleai.com/#organization",
      name: "Doble AI",
      legalName: "Doble AI LLC",
      url: "https://dobleai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dobleai.com/logo.svg",
        width: 230,
        height: 50,
      },
      description:
        "One of Colorado's few bilingual AI consulting firms. We help Colorado businesses grow with AI strategy, competitive analysis, and bilingual marketing — in English and in Spanish.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Eagle",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Eagle County, Colorado" },
        { "@type": "AdministrativeArea", name: "Pitkin County, Colorado" },
        { "@type": "AdministrativeArea", name: "Routt County, Colorado" },
        { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
      ],
      telephone: "+19703762725",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
      },
      knowsLanguage: ["en", "es"],
      founder: [
        {
          "@type": "Person",
          "@id": "https://dobleai.com/#john-rounds",
          name: "John Rounds",
          jobTitle: "Founder & AI Consultant",
          description:
            "Bilingual AI consultant and business strategist with 20+ years of international experience across 50+ countries. Founder of Doble AI.",
          worksFor: { "@id": "https://dobleai.com/#organization" },
        },
        {
          "@type": "Person",
          "@id": "https://dobleai.com/#gisella-rounds",
          name: "Gisella Rounds",
          jobTitle: "Lead Translator & Cultural Consultant",
          description:
            "Native Spanish speaker from Peru with 20+ years of cross-cultural experience across 30+ countries. Lead translator and interpretation specialist at Doble AI.",
          worksFor: { "@id": "https://dobleai.com/#organization" },
        },
      ],
      sameAs: [
        "https://ervtranslation.com",
        "https://johnrounds.com",
        "https://x.com/dobleai_co",
        "https://instagram.com/dobleai_co",
        "https://www.facebook.com/profile.php?id=61572054159697",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dobleai.com/#website",
      url: "https://dobleai.com",
      name: "Doble AI",
      publisher: { "@id": "https://dobleai.com/#organization" },
      inLanguage: ["en-US", "es"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dobleai.com"),
  verification: {
    google: "FbzgIu5hqLKGg8G6o3M30NgrnefJomo9-lZZ6rNyis0",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  title: {
    default: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    template: "%s — Doble AI",
  },
  description:
    "Doble AI helps Colorado businesses grow with AI strategy, bilingual marketing, and digital presence — in English and in Spanish.",
  openGraph: {
    title: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    description:
      "One of Colorado's few bilingual AI consulting firms. AI strategy, competitive analysis, and brand growth — in English and Spanish.",
    url: "https://dobleai.com",
    siteName: "Doble AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    description:
      "One of Colorado's few bilingual AI consulting firms. AI strategy and bilingual marketing for Eagle River Valley businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
