import type { Metadata } from "next";
import Image from "next/image";
import gisellaPhoto from "../../public/gisella-mountains-web.jpg";
import riverPhoto from "../../public/gisella-river.jpg";

export const metadata: Metadata = {
  title: "Translation & Interpretation — Eagle River Valley",
  description:
    "Professional English–Spanish translation and live interpretation led by Gisella Rounds, a native Peruvian Spanish speaker with 20+ years of cross-cultural experience. Serving the Eagle River Valley and Colorado mountain corridor.",
  alternates: {
    canonical: "/translation",
  },
  openGraph: {
    title: "Translation & Interpretation — Eagle River Valley | Doble AI",
    description:
      "Professional English–Spanish translation and live interpretation. Native-quality. Culturally grounded. Serving the Vail Valley, Roaring Fork Valley, and Colorado mountain corridor.",
    url: "https://dobleai.com/translation",
    images: [
      {
        url: "/gisella-mountains-web.jpg",
        width: 1200,
        height: 800,
        alt: "Gisella Rounds — Bilingual Translation & Interpretation, Eagle River Valley",
      },
    ],
  },
};

const translationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dobleai.com/#gisella-rounds",
      name: "Gisella Rounds",
      jobTitle: "Lead Translator & Interpretation Specialist",
      description:
        "Native Spanish speaker from Peru with 20+ years of cross-cultural experience across 30+ countries. Lead translator and live interpretation specialist at Doble AI, serving the Eagle River Valley and Colorado mountain corridor.",
      knowsLanguage: ["es", "en"],
      nationality: "Peruvian",
      worksFor: { "@id": "https://dobleai.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://dobleai.com/translation#translation-service",
      name: "English to Spanish Translation",
      description:
        "Professional English-to-Spanish translation for marketing copy, blog posts, event materials, outreach documents, and social content — delivered in authentic, native-quality Spanish.",
      provider: { "@id": "https://dobleai.com/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Eagle County, Colorado" },
        { "@type": "AdministrativeArea", name: "Pitkin County, Colorado" },
        { "@type": "AdministrativeArea", name: "Routt County, Colorado" },
        { "@type": "AdministrativeArea", name: "Summit County, Colorado" },
      ],
      availableLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Spanish" },
      ],
      url: "https://dobleai.com/translation",
    },
    {
      "@type": "Service",
      "@id": "https://dobleai.com/translation#interpretation-service",
      name: "Live Bilingual Interpretation",
      description:
        "On-site bilingual English–Spanish interpretation for events, corporate meetings, community gatherings, and nonprofit programs in the Eagle River Valley and Colorado mountain corridor.",
      provider: { "@id": "https://dobleai.com/#organization" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Eagle County, Colorado" },
        { "@type": "AdministrativeArea", name: "Pitkin County, Colorado" },
      ],
      availableLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Spanish" },
      ],
      url: "https://dobleai.com/translation",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dobleai.com" },
        { "@type": "ListItem", position: 2, name: "Translation & Interpretation", item: "https://dobleai.com/translation" },
      ],
    },
  ],
};

export default function TranslationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(translationSchema) }}
      />
      <Nav />
      <Hero />
      <Services />
      <GisellaSection />
      <CommunityTrust />
      <CTA />
      <SiteFooter />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          doble<span className="text-orange-500">AI</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/#work" className="hover:text-white transition-colors">Our Work</a>
          <a href="/translation" className="text-white transition-colors">Translation</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="/#contact"
          className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Free Audit
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-6 h-px bg-orange-500" />
          Translation &amp; Interpretation · Eagle River Valley
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-8">
          Your words in Spanish.<br />
          <span className="text-orange-500">Authentic.</span> Cultural. Human.
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12">
          Professional translation and live interpretation — led by a native Peruvian
          Spanish speaker with 20+ years of cross-cultural experience. Because the
          difference between technically correct and genuinely resonant is everything.
        </p>
        <a
          href="https://wa.me/19703762725?text=Hi%2C%20I%27d%20like%20to%20request%20a%20translation%20or%20interpretation%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
        >
          Request a Quote on WhatsApp
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      num: "01",
      name: "English → Spanish Translation",
      desc: "Blog posts, marketing copy, event materials, outreach documents, social content — translated into authentic, native-quality Spanish. Not AI-generated. Not textbook. The kind of Spanish that actually connects with your audience.",
      detail: "Documents · Blog · Marketing · Outreach",
      primary: true,
    },
    {
      num: "02",
      name: "Spanish → English Translation",
      desc: "Need incoming Spanish content translated for your team or records? We handle documents, correspondence, and communications in the other direction too.",
      detail: "Available on request",
      primary: false,
    },
    {
      num: "03",
      name: "Live Interpretation",
      desc: "On-site bilingual interpretation for events, corporate meetings, community gatherings, and nonprofit programs. From Bravo! Vail and GoPro Mountain Games to private corporate sessions — both John and Gisella are available.",
      detail: "Events · Corporate · Nonprofit · Community",
      primary: false,
    },
  ];

  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          What we offer
        </div>
        <h2 className="text-4xl font-bold leading-tight mb-16 max-w-lg">
          Three services. One standard.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.num}
              className={`${s.primary ? "bg-white/[0.06]" : "bg-white/[0.03]"} hover:bg-white/[0.07] border border-white/[0.08] rounded-2xl p-8 transition-colors`}
            >
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
                {s.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.name}</h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">{s.desc}</p>
              <div className="text-xs text-orange-500/70 font-medium">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GisellaSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-orange-500" />
              Led by Gisella Rounds
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Not just a translator.<br />A cultural bridge.
            </h2>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
              Gisella is a native Spanish speaker from Peru with deep roots in Latin
              American culture and 20+ years of experience bridging language across
              more than 30 countries. She knows the regional differences, the warmth,
              the humor — the things that make a translation feel like it was written
              for the reader, not just converted from English.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-10">
              For live events, both Gisella and John are available — bilingual
              by nature, not by necessity.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "20+", label: "Years experience" },
                { val: "30+", label: "Countries traveled" },
                { val: "Native", label: "Peruvian Spanish" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-orange-500 mb-1">{s.val}</div>
                  <div className="text-xs text-[#a3a3a3] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src={gisellaPhoto}
                alt="Gisella Rounds, lead translator at Doble AI"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src={riverPhoto}
                alt="Gisella Rounds in the Eagle River Valley"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityTrust() {
  const orgs = [
    "Vail Valley Foundation",
    "Bravo! Vail",
    "GoPro Mountain Games",
    "Walking Mountains Science Center",
    "Eagle Valley Community Foundation",
    "Habitat for Humanity",
    "Eagle County Fair",
    "Eagle County Health & Human Services",
  ];

  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Community trust
        </div>
        <h2 className="text-4xl font-bold mb-4">
          Trusted by organizations that shape our valley.
        </h2>
        <p className="text-[#a3a3a3] text-lg mb-12 max-w-2xl">
          From large-scale events to essential nonprofits — Gisella is available
          to provide live interpretation and translation services for the organizations
          and gatherings that define life in the Eagle River Valley.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {orgs.map((org) => (
            <div
              key={org}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm font-medium text-[#a3a3a3] hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {org}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Get started
        </div>
        <h2 className="text-4xl font-bold mb-4">Ready to connect with your audience?</h2>
        <p className="text-[#a3a3a3] text-lg mb-10">
          Tell us about your project — document translation, event interpretation,
          or something else. We&apos;ll get back to you quickly.
        </p>
        <a
          href="https://wa.me/19703762725?text=Hi%2C%20I%27d%20like%20to%20request%20a%20translation%20or%20interpretation%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
        >
          Message us on WhatsApp
        </a>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555]">
        <div>
          doble<span className="text-orange-500">AI</span> — Eagle River Valley, Colorado
        </div>
        <div className="flex gap-6">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/#work" className="hover:text-white transition-colors">Work</a>
          <a href="/translation" className="hover:text-white transition-colors">Translation</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} Doble AI LLC</div>
      </div>
    </footer>
  );
}
