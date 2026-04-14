import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Doble AI — Bilingual AI Consulting for Colorado Businesses",
  description:
    "Doble AI helps Colorado businesses grow with AI strategy, bilingual marketing, and digital presence — in English and in Spanish.",
  openGraph: {
    title: "Doble AI",
    description: "AI consulting. Bilingual. Built for Colorado.",
    url: "https://dobleai.com",
    siteName: "Doble AI",
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
        {children}
      </body>
    </html>
  );
}
