import type { Metadata } from "next";
import { townPages } from "../lib/locations";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SITE = "https://dobleai.com";

export const metadata: Metadata = {
  title: "Where We Work: AI & Digital Marketing Across the Eagle River Valley",
  description:
    "Doble AI works town by town across the Eagle River Valley: Vail, Avon, Edwards, Eagle, and Gypsum. Local pages in English and Spanish for each community we serve.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Where We Work | Doble AI",
    description:
      "AI and digital marketing help for Vail, Avon, Edwards, Eagle, and Gypsum businesses, in English and Spanish.",
    url: `${SITE}/locations`,
    type: "website",
  },
};

const enTowns = townPages.filter((t) => t.lang === "en");

const hubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE}/locations`,
      name: "Where We Work: Eagle River Valley",
      description:
        "Doble AI serves businesses town by town across the Eagle River Valley, Colorado, in English and Spanish.",
      url: `${SITE}/locations`,
      isPartOf: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "ItemList",
      itemListElement: enTowns.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.town,
        url: `${SITE}/locations/${t.slug}`,
      })),
    },
  ],
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      <Nav />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase mb-4">
            Where we work · Dónde trabajamos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            One valley, five towns, two languages.
          </h1>
          <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-2xl mb-14">
            Every town in the Eagle River Valley runs on a different economy, and its
            businesses get found in different ways. We work with each one on its own
            terms, with a page for every community in English and in Spanish.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {enTowns.map((t) => (
              <div
                key={t.slug}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-orange-500 tracking-widest uppercase border border-orange-500/30 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.town}</h2>
                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 flex-1">
                  {t.blurb}
                </p>
                <div className="flex items-center gap-5 text-sm font-medium">
                  <a
                    href={`/locations/${t.slug}`}
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Explore →
                  </a>
                  <a
                    href={`/locations/${t.pairSlug}`}
                    lang="es"
                    hrefLang="es"
                    className="text-[#a3a3a3] hover:text-white transition-colors"
                  >
                    En español →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
