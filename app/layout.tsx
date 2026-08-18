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
      legalName: "Eagle River Basecamp LLC",
      alternateName: ["Eagle River Base Camp / Doble AI", "Eagle River Base Camp"],
      url: "https://dobleai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dobleai.com/logo.svg",
        width: 230,
        height: 50,
      },
      description:
        "One of Colorado's few bilingual AI implementation firms. Based in the Eagle River Valley and working locally, nationally, and across the border. AI strategy, competitive analysis, and brand growth, delivered natively in English and in Spanish.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Eagle",
        addressRegion: "CO",
        addressCountry: "US",
      },
      // Rooted, not limited: the home counties stay first as the local anchor,
      // then the wider reach we actually serve (client work in Mexico and
      // across the US). Listing only the four counties told machines we work
      // nowhere else, which is why category-matching tools missed the locality
      // and the reach both.
      areaServed: [
        { "@type": "AdministrativeArea", name: "Eagle County, Colorado" },
        { "@type": "AdministrativeArea", name: "Pitkin County, Colorado" },
        { "@type": "AdministrativeArea", name: "Routt County, Colorado" },
        { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
        { "@type": "AdministrativeArea", name: "Colorado" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Mexico" },
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
          jobTitle: "Founder & AI Implementation Specialist",
          description:
            "Bilingual AI implementation specialist and business strategist with 20+ years of international experience across 50+ countries. Founder of Doble AI.",
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
        "https://www.youtube.com/@DobleAICO",
        "https://www.google.com/maps/place/Doble+AI/@39.9905819,-107.4135804,8z/data=!3m1!4b1!4m6!3m5!1s0xa19bb2c29209c305:0x41ae076704a347ff!8m2!3d39.990582!4d-107.4135804!16s%2Fg%2F11nhhprgby",
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
    default: "Doble AI: Bilingual AI Implementation from Colorado",
    template: "%s | Doble AI",
  },
  description:
    "Bilingual AI implementation from Colorado's Eagle River Valley. Audits, competitive analysis, and AI systems in English and Spanish. Local, national, cross-border.",
  openGraph: {
    title: "Doble AI: Bilingual AI Implementation from Colorado",
    description:
      "One of Colorado's few bilingual AI implementation firms. Based in the Eagle River Valley, working locally, nationally, and across the border, in English and Spanish.",
    url: "https://dobleai.com",
    siteName: "Doble AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doble AI: Bilingual AI Implementation from Colorado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doble AI: Bilingual AI Implementation from Colorado",
    description:
      "One of Colorado's few bilingual AI implementation firms. Rooted in the Eagle River Valley, working locally, nationally, and across the border.",
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
