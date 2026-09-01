import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Doble Presence: what is in the month",
  description:
    "The retainer that runs your site after the diagnostic: bilingual publishing, schema and structure kept correct for AI engines, monitoring, and the AI workspace that learns your business. From $2,500/month English, $3,500/month bilingual.",
  alternates: {
    canonical: "/doble-presence",
    languages: {
      en: "https://dobleai.com/doble-presence",
      es: "https://dobleai.com/es/doble-presence",
      "x-default": "https://dobleai.com/doble-presence",
    },
  },
  openGraph: {
    title: "Doble Presence: what is in the month | Doble AI",
    description:
      "We build or repair the site, then run it. Bilingual publishing, schema kept correct, monitoring, and the AI workspace that learns your business. From $2,500/month.",
    url: "https://dobleai.com/doble-presence",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doble Presence by Doble AI",
      },
    ],
  },
};

/* ── What the month is ──
   Ordered the way the work actually happens: the build or repair comes first
   because everything after it is publishing onto something. The workspace is
   listed last on purpose. It is how the month gets done, not a line item. */
const WORK = [
  {
    num: "01",
    name: "The build, or the repair",
    lede:
      "Month one is usually not publishing. It is fixing what the Findability Report found, or building the site that should have existed.",
    items: [
      ["The site itself", "We build it, or we repair yours. Server-rendered, fast, and structured so that the answers a buyer wants are in the HTML a crawler receives, not injected afterwards by JavaScript."],
      ["The structural fixes first", "Canonicals, redirects, indexation, orphaned pages, sitemap hygiene, hreflang reciprocity. The unglamorous half, and the half that decides whether anything published later gets seen."],
      ["Google Business Profile", "Claimed, completed, and made to agree with the site: address, hours, categories, service areas. A profile that contradicts your site weakens both."],
    ],
  },
  {
    num: "02",
    name: "The publishing",
    lede:
      "Then the site starts saying things. In one language or two, and if two, written twice rather than run through a translator.",
    items: [
      ["Real pairs, not translations", "Spanish content is written in Spanish by a native speaker, then checked against the English for meaning rather than wording. A page that reads like a translation gets treated like one."],
      ["Content AI engines can quote", "Service pages, FAQs, and guides that answer the questions your buyers actually ask, in the words they use, with the schema that lets an engine lift the answer cleanly."],
      ["Schema and structure, maintained", "FAQPage, Service, LocalBusiness, Article, and the hreflang graph, kept correct as the site grows. Structured data is a readability floor, not a ranking trick: it decides whether a machine can parse you at all."],
      ["Internal linking", "Every new page linked from somewhere that is already indexed. A page nothing indexed points at is a page nobody finds."],
    ],
  },
  {
    num: "03",
    name: "The monitoring",
    lede:
      "The failures that matter most are the ones that throw no error. The site loads, the form looks fine, and nothing arrives.",
    items: [
      ["Daily site health", "Uptime, redirects, canonical drift, sitemap validity, and the link graph. We built these checks for our own properties first, and most of them exist because something broke and nothing caught it."],
      ["Search Console and GA4", "Indexation and coverage watched per page rather than as a site-wide percentage, with traffic read against it so a drop has an explanation attached."],
      ["AI visibility, re-run", "The four-engine sweep from the Findability Report, run again so the score out of ten shows movement instead of sitting in a PDF."],
      ["Forms and phone", "The path from interested to reachable, tested rather than assumed."],
    ],
  },
  {
    num: "04",
    name: "The workspace underneath",
    lede:
      "This is how the month gets done. It is included in Presence and it is not quoted separately, because it is not a product you could run without us doing the work on top of it.",
    items: [
      ["Persistent memory", "Your clients, your standards, your brand voice, and the decisions already made, held between sessions. Nothing starts from zero and nothing gets re-litigated."],
      ["Accumulated workflows", "The playbook that ships your month has been sharpened on every build before it. You get that experience without paying for the ramp-up."],
      ["Bilingual agents", "The same system publishes and reviews in both languages, which is why the Spanish stays native rather than drifting into a translated register."],
      ["Where the month calls for it, a voice agent", "LUCI answers our own line at (970) 406-4630. Call it and you are hearing what a phone agent inside Presence sounds like. It is a demonstration, not a separate purchase."],
    ],
  },
];

const faqs = [
  {
    q: "What does Doble Presence cost?",
    a: "From $2,500 a month in English and from $3,500 a month bilingual. Pricing is fixed and stated up front, and we do not bill hourly. If you started with the Findability Report, its $1,500 is credited in full against your first month.",
  },
  {
    q: "Is the AI workspace a separate line item?",
    a: "No. The workspace is how the month runs, not something quoted next to it. It holds your business, your standards, and your voice, and it is why the work compounds instead of restarting. There is no version of Presence without it and no version of it sold on its own.",
  },
  {
    q: "Do I have to buy the Findability Report first?",
    a: "No, but most people should. The Report tells us what a month should be spent on, and its cost comes straight off your first month, so buying it first costs nothing extra. If your site is already in good shape and you know what you want built, we can start at Presence.",
  },
  {
    q: "What is LUCI, and is it included?",
    a: "LUCI is the bilingual AI voice agent that answers our own line at (970) 406-4630. It is a live demonstration of what Presence can put on a phone, not a product with its own price and not a receptionist service you subscribe to. Where a client's month calls for a phone agent, it is built inside Presence.",
  },
  {
    q: "Do I have to do the bilingual version?",
    a: "No. We do not force Spanish into a market that does not have a Spanish-speaking base, and we will tell you if yours does not. English-only Presence is the same work at $2,500 a month. Where the market is genuinely bilingual, the Spanish half is usually the least contested ground on the board.",
  },
  {
    q: "How long is the commitment?",
    a: "Presence is a monthly retainer and it compounds, so it is worth more in month nine than in month two. That is an argument for staying, not a lock-in clause. If you stop, the site, the content, and the Google profile are yours.",
  },
  {
    q: "Who actually does the work?",
    a: "We do. Doble AI is John and Gisella Rounds, in Gypsum, Colorado. Gisella is a native Peruvian Spanish speaker and leads the Spanish work and the cultural review, which is why the Spanish reads as though it was written in Spanish. Nothing is subcontracted to a content mill.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dobleai.com/doble-presence#service",
      name: "Doble Presence",
      serviceType: "Digital presence retainer and AI implementation",
      provider: { "@id": "https://dobleai.com/#organization" },
      url: "https://dobleai.com/doble-presence",
      description:
        "A monthly retainer: we build or repair the site, then run it. Bilingual publishing as real pairs, schema and structure kept correct for AI engines, site-health and search-visibility monitoring, and the AI workspace that learns the business. Includes the AI implementation; it is not quoted separately.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "2500",
          priceCurrency: "USD",
          unitCode: "MON",
        },
        description:
          "From $2,500/month in English, from $3,500/month bilingual. The $1,500 Findability Report is credited in full against the first month.",
      },
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://dobleai.com/doble-presence#faq",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function DoblePresence() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="/es/doble-presence"
              lang="es"
              hrefLang="es"
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Leer esta página en español →
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-6 h-px bg-orange-500" />
            The second product
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            Doble{" "}<br />
            <span className="text-orange-500">Presence.</span>
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed mb-10">
            The Findability Report tells you where you stand. Presence is what
            happens next: we build or repair the site, then run it, every month,
            in one language or two. This page is what is actually in the month,
            written out before you buy it.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#a3a3a3] mb-12">
            <span>
              <span className="text-orange-500 font-semibold">$2,500</span>/month,
              English
            </span>
            <span>
              <span className="text-orange-500 font-semibold">$3,500</span>/month,
              bilingual
            </span>
            <span>
              <span className="text-orange-500 font-semibold">AI workspace</span>{" "}
              included, not quoted
            </span>
            <span>
              <span className="text-orange-500 font-semibold">$1,500</span> Report
              credited to month one
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Start with a free snapshot
            </a>
            <a
              href="#month"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              What is in the month
            </a>
            <a
              href="/findability-report"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Start with the Report
            </a>
          </div>
        </div>
      </section>

      {/* ── Why a retainer ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-6">
            Why this is a month and not a project.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-5">
            A site is not a thing you finish. Google re-crawls it, the AI engines
            re-answer the question every time somebody asks, competitors publish,
            and a framework upgrade quietly moves a canonical. The build is the
            cheap part. Keeping it correct is where the return is, and that is
            work that only exists monthly.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            There is a second reason, and it is the one we care about more. The
            parts are cheap. The months of tuning underneath are not. Everything
            we know about your business accumulates in one place, and the month
            after next is better than this one because of what this one taught
            us. A project ends. This compounds.
          </p>
        </div>
      </section>

      {/* ── What is in the month ── */}
      <section id="month" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            What is in the month
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Four parts, and the last one is how the other three get done.
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mb-16 leading-relaxed">
            The build comes first because everything after it is publishing onto
            something. The workspace is listed last on purpose: it is included in
            Presence, and it is not a product you buy beside it.
          </p>

          <div className="space-y-16">
            {WORK.map((phase) => (
              <div key={phase.num}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-orange-500 font-bold tracking-widest text-sm">
                    {phase.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {phase.name}
                  </h3>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed mb-8 max-w-2xl">
                  {phase.lede}
                </p>
                <div className="space-y-px">
                  {phase.items.map(([name, detail]) => (
                    <div
                      key={name}
                      className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] p-6 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      <h4 className="font-semibold mb-2">{name}</h4>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The live demo ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/[0.08] border border-orange-500/20 rounded-2xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-6 h-px bg-orange-500" />
                Live demo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Hear the workspace answer a phone.
              </h2>
              <p className="text-[#a3a3a3] leading-relaxed max-w-md mb-2">
                LUCI answers our own line, 24/7. Lucy in English, Lucía in
                Spanish, switching mid-call.
              </p>
              <p className="text-[#a3a3a3] leading-relaxed max-w-md">
                This is how Doble Presence answers the phone. It is a
                demonstration you can dial, not a product with its own price.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-center gap-4 shrink-0">
              <a
                href="tel:+19704064630"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                (970) 406-4630
              </a>
              <p className="text-xs text-[#a3a3a3]">
                Free call · English &amp; Spanish · 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            What people ask before they sign.
          </h2>
          <div className="space-y-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-xl font-semibold mb-3">{q}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start with a free snapshot.</h2>
          <p className="text-[#a3a3a3] text-lg mb-10 leading-relaxed">
            One page on where you stand, back within two business days. Almost
            nobody should sign a retainer before seeing that page.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Request the free snapshot
            </a>
            <a
              href="tel:+19704064630"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Call (970) 406-4630
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
