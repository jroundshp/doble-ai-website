import { notFound } from "next/navigation";
import { townPages, getTownPage } from "../../lib/locations";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const SITE = "https://dobleai.com";

export async function generateStaticParams() {
  return townPages.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const town = getTownPage(slug);
  if (!town) return {};
  const pairUrl = `${SITE}/locations/${town.pairSlug}`;
  const selfUrl = `${SITE}/locations/${slug}`;
  return {
    title: town.metaTitle,
    description: town.metaDescription,
    alternates: {
      canonical: `/locations/${slug}`,
      languages: {
        [town.lang]: selfUrl,
        [town.lang === "en" ? "es" : "en"]: pairUrl,
        "x-default": town.lang === "en" ? selfUrl : pairUrl,
      },
    },
    openGraph: {
      title: `${town.metaTitle} | Doble AI`,
      description: town.metaDescription,
      url: selfUrl,
      type: "website",
      locale: town.lang === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${town.metaTitle} | Doble AI`,
      description: town.metaDescription,
    },
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const town = getTownPage(slug);
  if (!town) notFound();

  const es = town.lang === "es";
  const selfUrl = `${SITE}/locations/${town.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${selfUrl}#service`,
        name: town.metaTitle,
        description: town.metaDescription,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: { "@type": "Place", name: `${town.town}, Colorado` },
        availableLanguage: ["en", "es"],
        inLanguage: town.lang,
        url: selfUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${selfUrl}#faq`,
        inLanguage: town.lang,
        mainEntity: town.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: es ? "Ubicaciones" : "Locations",
            item: `${SITE}/locations`,
          },
          { "@type": "ListItem", position: 3, name: town.town, item: selfUrl },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      <article className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <a
            href="/locations"
            className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-sm transition-colors mb-10"
          >
            ← {es ? "Todas las ubicaciones" : "All locations"}
          </a>

          {/* Language pair cross-link */}
          <div className="mb-8">
            <a
              href={`/locations/${town.pairSlug}`}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
              lang={es ? "en" : "es"}
              hrefLang={es ? "en" : "es"}
            >
              {es ? "Read this page in English →" : "Leer esta página en español →"}
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {town.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold text-orange-500 tracking-widest uppercase border border-orange-500/30 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
            {town.h1}
          </h1>

          {town.intro.map((p, i) => (
            <p key={i} className="text-[#d4d4d4] text-lg leading-relaxed mb-5">
              {p}
            </p>
          ))}

          {/* Services */}
          <h2 className="text-2xl font-bold mt-12 mb-6">{town.servicesHeading}</h2>
          <div className="grid gap-4">
            {town.services.map((s) => (
              <div
                key={s.name}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
              >
                <p className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
                  {s.phase}
                </p>
                <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Bilingual angle */}
          <h2 className="text-2xl font-bold mt-12 mb-4">{town.bilingualHeading}</h2>
          {town.bilingual.map((p, i) => (
            <p key={i} className="text-[#d4d4d4] leading-relaxed mb-5">
              {p}
            </p>
          ))}

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-12 mb-6">{town.faqHeading}</h2>
          <div className="grid gap-3">
            {town.faq.map((f) => (
              <details
                key={f.q}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-4 group"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-orange-500 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-[#a3a3a3] text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-center">
            <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase mb-3">
              {es ? "Auditoría gratuita" : "Free audit"}
            </p>
            <h3 className="text-2xl font-bold mb-3">
              {es
                ? `Descubre dónde está parado tu negocio en ${town.town}.`
                : `Find out where your ${town.town} business stands.`}
            </h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 max-w-md mx-auto">
              {es
                ? `En Doble AI auditamos tu presencia digital frente a lo que tus clientes en ${town.town} realmente buscan, gratis y explicado en lenguaje claro.`
                : `We audit your digital presence against what customers in ${town.town} actually search. Free, and explained in plain language.`}
            </p>
            <a
              href="/#contact"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              {es ? "Solicitar mi auditoría gratuita" : "Request my free audit"}
            </a>
            <p className="text-[#777] text-xs mt-4">
              {es
                ? "O llama a LUCI, nuestra recepcionista bilingüe con IA: (970) 528-2835"
                : "Or call LUCI, our bilingual AI receptionist: (970) 528-2835"}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
