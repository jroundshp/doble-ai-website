import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        url: "https://dobleai.com/gisella-mountains-web.jpg",
      },
      description:
        "Colorado's only bilingual AI consulting firm. We help Colorado businesses grow with AI strategy, competitive analysis, and bilingual marketing — in English and in Spanish.",
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
      sameAs: ["https://ervtranslation.com", "https://johnrounds.com"],
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
  title: {
    default: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    template: "%s — Doble AI",
  },
  description:
    "Doble AI helps Colorado businesses grow with AI strategy, bilingual marketing, and digital presence — in English and in Spanish.",
  openGraph: {
    title: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    description:
      "Colorado's only bilingual AI consulting firm. AI strategy, competitive analysis, and brand growth — in English and Spanish.",
    url: "https://dobleai.com",
    siteName: "Doble AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/gisella-mountains-web.jpg",
        width: 1200,
        height: 800,
        alt: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
    description:
      "Colorado's only bilingual AI consulting firm. AI strategy and bilingual marketing for Eagle River Valley businesses.",
    images: ["/gisella-mountains-web.jpg"],
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
      </body>
    </html>
  );
}
