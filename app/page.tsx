import type { Metadata } from "next";
import Image from "next/image";
import johnRoundsPhoto from "../public/john-rounds.jpeg";
import johnGisellaPhoto from "../public/john-gisella.jpeg";
import AuditForm from "./components/AuditForm";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "https://dobleai.com/",
      es: "https://dobleai.com/es",
      "x-default": "https://dobleai.com/",
    },
  },
};

const faqs = [
  {
    q: "What does Doble AI do?",
    a: "Doble AI is an AI-native, bilingual implementation firm based in the Eagle River Valley, Colorado. We build AI workspaces that learn your business, remembering your clients, your workflows, and your brand voice, and compounding that knowledge over time. We also audit your digital presence, map your competitive landscape, and build brand and sales strategy. Everything we do is available in both English and Spanish.",
  },
  {
    q: "What is included in a free business audit?",
    a: "Our free business audit covers your current online presence, Google Business Profile status, website performance, review volume and sentiment, and a high-level competitive comparison. We deliver a written summary within 5–7 days with specific, prioritized recommendations. No pitch deck, no obligation.",
  },
  {
    q: "How much does AI implementation cost?",
    a: "Doble AI pricing is scoped to your specific project and needs. Every engagement starts with a free audit. Typical 90-day implementation engagements are quoted after the audit based on scope. Contact us for a clear, itemized quote.",
  },
  {
    q: "What makes Doble AI different from other AI firms?",
    a: "Two things. First, we don't hand you a tool. We build an AI workspace that learns your business. It remembers your clients, your workflows, your brand voice, and the decisions you've already made. Every session compounds on the last. Most businesses get AI that resets to zero every day; our clients get AI that gets sharper the longer we work together. Second, we're one of Colorado's few bilingual AI implementation firms, delivering strategy and content in native-quality Spanish as well as English, reaching the 40–50% of Colorado mountain corridor residents whose first language is Spanish. Separately, each is a meaningful edge. Together, they're a significant one.",
  },
  {
    q: "Do I need to be located in the Vail Valley to work with Doble AI?",
    a: "No. While we are based in the Eagle River Valley and know the Vail, Roaring Fork, and Steamboat Springs markets well, we work with businesses across Colorado and nationally. If you want to reach bilingual markets or implement AI strategy, we can help regardless of location.",
  },
  {
    q: "What industries does Doble AI work with?",
    a: "We work with small to mid-size businesses across construction and trades, real estate, hospitality, professional services, and nonprofits, especially businesses serving or looking to reach Spanish-speaking customers in Colorado mountain communities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <HowWeWork />
      <VoiceDemo />
      <SampleWork />
      <Projects />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-6 h-px bg-orange-500" />
          Eagle River Valley, Colorado · Working across borders
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-8">
          Grow your business<br />
          <span className="text-orange-500">with AI.</span><br />
          En inglés y en español.
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12">
          We don&apos;t hand you a tool. We build an AI workspace that learns your
          business: your clients, your workflows, your voice. It remembers
          everything and never starts from zero, so the work compounds the longer
          we&apos;re together. Bilingual when your market calls for it, excellent
          either way. One of Colorado&apos;s few bilingual AI implementation firms,
          working locally, nationally, and across the border.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Get a free audit
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Problem ── */
function Problem() {
  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            The opportunity
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            AI-powered growth,<br />
            with a competitive edge<br />
            most firms can&apos;t offer.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            We help Colorado businesses grow with AI: sharper online visibility,
            better competitive intelligence, and a clear strategy for turning
            that into revenue. And unlike most AI firms, we can extend
            that work into the Spanish-speaking market with native fluency and
            authentic content, not translations. For businesses that want it,
            that&apos;s a significant edge. For those focused on the English
            market, the AI implementation stands on its own.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: "AI", label: "Tools to automate, amplify, and grow your business" },
            { val: "90", label: "Days to measurable results" },
            { val: "5–7", label: "Days to deliver your full business audit" },
            { val: "2x", label: "Potential reach for businesses that serve both English and Spanish-speaking markets" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{s.val}</div>
              <div className="text-sm text-[#a3a3a3] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function Services() {
  const services = [
    {
      num: "01",
      name: "Business Audit",
      desc: "A full diagnostic of your online presence, competitors, and gaps, delivered as a detailed written report. This is where every engagement starts.",
      detail: "Delivered in 5–7 days",
    },
    {
      num: "02",
      name: "Competitive Landscape Analysis",
      desc: "We map your competitive environment, identify where you're losing ground, and find the white space your competitors haven't claimed yet.",
      detail: "Included with audit or standalone",
    },
    {
      num: "03",
      name: "Brand & Sales Growth",
      desc: "Digital presence buildout, content strategy, and a clear plan to turn your brand into a revenue-generating asset. Available in English, with Spanish for businesses ready to grow that market.",
      detail: "English · Spanish optional",
    },
    {
      num: "04",
      name: "AI Implementation",
      desc: "We build an AI workspace that learns your business: persistent memory, accumulated workflows, bilingual AI agents. Not a one-time setup. A system that compounds the longer we work together.",
      detail: "Custom scope per engagement",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          What we do
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl font-bold leading-tight max-w-lg">
            Four services. One clear outcome.
          </h2>
          <p className="text-[#a3a3a3] max-w-sm">
            Pricing is scoped to your project. It starts with a free audit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-8 transition-colors group"
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

/* ── How We Work ── */
function HowWeWork() {
  const cards = [
    {
      title: "Nothing starts from zero",
      desc: "Every client detail, standard, and lesson lives in a persistent memory. We pick up exactly where we left off, every time.",
    },
    {
      title: "Refined across every build",
      desc: "The playbook that ships your project has been sharpened on every one before it. You get all of that experience with none of the ramp-up.",
    },
    {
      title: "Fast where it counts",
      desc: "A full business audit in 5–7 days. Content published in two languages. Sites watched for the failures that don't throw an error.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          How we work
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-4xl font-bold leading-tight">
            Agency-level output,<br />without the agency.
          </h2>
          <div>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-4">
              Most firms our size move slowly because every project starts from
              scratch. We built our own AI operating system so ours don&apos;t. It
              holds everything we know about your business and applies the
              standards and playbooks we&apos;ve refined across every build
              we&apos;ve done.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              You get the speed and consistency of a full team, from a senior
              partner who actually knows your account. From the Eagle River Valley
              to Ajijic, Mexico to upstate New York.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Voice Demo ── */
function VoiceDemo() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-orange-500/[0.08] border border-orange-500/20 rounded-2xl px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-orange-500" />
              Live demo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Call our AI receptionist.
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed max-w-md mb-2">
              Lucy answers in English. Switch to Spanish and she becomes Lucía, instantly. Available 24/7, never on hold, never off script.
            </p>
            <p className="text-[#a3a3a3] leading-relaxed max-w-md">
              This is the same system we build for our clients. Try it, then ask us to build one for your business.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center gap-4 shrink-0">
            <a
              href="tel:+19705282835"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (970) 528-2835
            </a>
            <p className="text-xs text-[#a3a3a3]">Free call · English &amp; Spanish · 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sample Work ── */
function SampleWork() {
  return (
    <section id="work" className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Our work
        </div>
        <h2 className="text-4xl font-bold mb-4">See what an audit looks like.</h2>
        <p className="text-[#a3a3a3] text-lg mb-12 max-w-2xl">
          Before you commit to anything, see the quality of work we deliver. Here are
          real audits we&apos;ve completed for the businesses we work with, shared anonymously.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="https://jroundshp.github.io/doble-ai-deliverables/rocky-mountain-finishes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] rounded-2xl overflow-hidden transition-colors"
          >
            <div className="p-8 flex flex-col flex-1">
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                Business Audit · April 2026
              </div>
              <h3 className="text-xl font-semibold mb-2">Colorado Trade Business</h3>
              <p className="text-[#a3a3a3] text-sm mb-6 flex-1">
                Northwest Colorado. Specialty contractor serving the luxury mountain
                corridor. Full competitive analysis, digital presence audit, and
                growth recommendations.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                View the full audit →
              </span>
            </div>
          </a>
          <a
            href="https://jroundshp.github.io/doble-ai-deliverables/vail-valley-real-estate/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] rounded-2xl overflow-hidden transition-colors"
          >
            <div className="p-8 flex flex-col flex-1">
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                Business Audit · April 2026
              </div>
              <h3 className="text-xl font-semibold mb-2">Vail Valley Real Estate Group</h3>
              <p className="text-[#a3a3a3] text-sm mb-6 flex-1">
                Vail Valley, Colorado. Luxury real estate team with $850M+ career
                volume. Digital presence audit, competitive landscape, and 90-day
                growth roadmap.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                View the full audit →
              </span>
            </div>
          </a>
          <a
            href="https://jroundshp.github.io/doble-ai-deliverables/sol-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] rounded-2xl overflow-hidden transition-colors"
          >
            <div className="p-8 flex flex-col flex-1">
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                Business Audit · April 2026
              </div>
              <h3 className="text-xl font-semibold mb-2">Chapala Lakeside Realtor</h3>
              <p className="text-[#a3a3a3] text-sm mb-6 flex-1">
                Lake Chapala, Mexico. Bilingual real estate agent serving an
                expat-heavy market. Digital presence audit, search and AI-visibility
                check, competitive landscape, and a prioritized growth roadmap.
              </p>
              <span className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                View the full audit →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Projects ──
   Live builds we've shipped. Each row tells the same story: what we found / the
   gap we saw → what we did → proof you can click.

   IMAGERY: each project's visual is a browser-frame mock (branded gradient panel)
   so the section ships with no extra assets. To use a real screenshot instead,
   drop a file at public/work/<slug>.png and pass `image="/work/<slug>.png"` on the
   project below — ProjectVisual will render it in the frame in place of the panel. */
const projects = [
  {
    name: "John Tyler Real Estate",
    kind: "Client build · Luxury real estate · Vail & the Eagle River Valley, CO",
    step1Label: "The audit revealed",
    step1:
      "A Slifer Smith & Frampton branch manager and broker with more than $900M in career sales, and almost nothing online he actually owned. His only real presence was a brokerage agent page inside a corporate site, with his listings and his story buried in the MLS. He wasn't surfacing on his own name in Google, AI tools like ChatGPT and Grok didn't know him, and there was nothing in Spanish in a valley where a large share of buyers and residents speak it.",
    step2Label: "What we built",
    step2:
      "A full bilingual site built around the man, not the brokerage: his real story (raised in Vail, an international business career, then home to real estate), nine neighborhood and community guides from Vail to Gypsum, a growing English and Spanish blog of market updates and buyer guides, his active listings, real client reviews, and a clear way to reach him on every page. The whole site is architected for SEO and GEO, so he surfaces in regular Google searches and in AI tools like ChatGPT and Grok, and every page has a native-quality Spanish twin.",
    domain: "johntylerrealestate.com",
    href: "https://johntylerrealestate.com",
    cta: "Visit the site",
    tag: "Bilingual luxury real estate",
    gradient: "linear-gradient(135deg, #14202d 0%, #1b2a3b 55%, #b8943f 125%)",
    image: "/work/john-tyler.jpg",
  },
  {
    name: "Alexander Estrada",
    kind: "Client build · Adventure film & photography · Denver–Boulder, CO",
    step1Label: "The audit revealed",
    step1:
      "A filmmaker, photographer, and drone pilot with ten-plus years of work and real credits: Simon Reeve's BBC series, Channel 4 News, ABC News, Natural Habitat Adventures. His old WordPress site showed almost none of it. Image-first work that should fill the screen sat cramped in a dated template, and years of climbing, expedition, and commercial shoots were scattered and hard to browse.",
    step2Label: "What we built",
    step2:
      "An image-first, bilingual portfolio inspired by Jimmy Chin's: near-black, full-bleed, one red accent. The homepage opens on a single frame with Films, Photos, and About as the way in. His showreel and films live together, 200-plus photos are sorted into browsable galleries, and a blog tells his Cusco-to-Colorado story in English and Spanish. The whole site is architected for SEO and GEO, so he surfaces in regular Google searches and in AI tools like ChatGPT and Grok, and it's built for the way people actually look at visual work.",
    domain: "alexanderestral.com",
    href: "https://alexanderestral.com",
    cta: "Visit the site",
    tag: "Adventure film & photography",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #5c0a14 60%, #c8102e 125%)",
    image: "/work/alexander-estrada.jpg",
  },
  {
    name: "Ellicottville Outside",
    kind: "Our product · Outdoor destination guide · Ellicottville, NY",
    step1Label: "The gap we saw",
    step1:
      "Ellicottville is a two-resort, four-season ski village (Holiday Valley and HoliMont) with 140-plus miles of mountain-bike trail, hiking, fishing, paddling, and Allegany State Park just to the south. But there was no single, independent place that pulled it all together. Locals and visitors alike had to bounce between two resort sites, a chamber directory, and Facebook just to figure out what the town actually offers across a given season.",
    step2Label: "What we built",
    step2:
      "One place locals and visitors can go for the whole town: things to do across all four seasons, the village, directories of 21 shops and 25 restaurants, a live events calendar, weather, and a growing library of local guides. This project didn't call for a bilingual build, but it got the same care our client sites do. It's fast, thoughtfully organized, and engineered for SEO and GEO, so the town surfaces in Google and in AI tools like ChatGPT and Grok. One bookmark instead of six.",
    domain: "ellicottvilleoutside.com",
    href: "https://ellicottvilleoutside.com",
    cta: "See it live",
    tag: "All things outdoor in Ellicottville",
    gradient: "linear-gradient(135deg, #0c2a1a 0%, #1f5a3a 58%, #d4a029 125%)",
    image: "/work/ellicottville-outside.jpg",
  },
  {
    name: "Sol Ramirez Real Estate",
    kind: "Client build · Real estate · Ajijic, Mexico",
    step1Label: "The audit revealed",
    step1:
      "A respected local expert (experienced, certified, and genuinely great at what she does) with almost no digital presence to show for it. No personal website, listings buried in a broker page and the MLS. She wasn't surfacing in Google searches, and AI tools like ChatGPT and Grok didn't know she existed. To anyone searching online, she was invisible.",
    step2Label: "What we did",
    step2:
      "Built a full bilingual site: for-sale plus a dedicated rentals section synced live from the Chapala MLS, Ajijic and Chapala area guides, a foreign-buyer blog tuned for search, her credentials front and center, and WhatsApp on every page.",
    domain: "solramrealestate.com",
    href: "https://solramrealestate.com",
    cta: "Visit the site",
    tag: "Bilingual real estate",
    gradient: "linear-gradient(135deg, #0f3d4a 0%, #1c6b6e 58%, #e8a13c 125%)",
    image: "/work/sol-ramirez.jpg",
  },
  {
    name: "CO Headwaters Report",
    kind: "Our product · Live data dashboard",
    step1Label: "The gap we saw",
    step1:
      "River guides, fly-fishing outfitters, and local river enthusiasts were bouncing between half a dozen sources to get current, accurate flows, water temperatures, and, for the fly guides especially, turbidity. The data existed, but it was scattered and slow to read when conditions change by the hour.",
    step2Label: "What we built",
    step2:
      "One place to check the spots that matter across the Vail–Eagle River Valley and the Roaring Fork Valley: live flow, water temperature, and turbidity in a single, clean, real-time view. One bookmark instead of six.",
    domain: "coheadwatersreport.com",
    href: "https://coheadwatersreport.com",
    cta: "See it live",
    tag: "Real-time river data",
    gradient: "linear-gradient(135deg, #0a2540 0%, #145e8c 100%)",
  },
  {
    name: "Vail Valley Report",
    kind: "Our product · Live data dashboard",
    step1Label: "The gap we saw",
    step1:
      "Locals, visitors, and anyone heading up the mountain were checking one site for the temperature in town, another for the top and base of the resort, and yet another for the airport, just to figure out what the day actually looked like across the valley.",
    step2Label: "What we built",
    step2:
      "A one-stop live report for the Vail Valley: current temps at the top and base of both Vail and Beaver Creek, local weather, and Eagle County Airport conditions, all on a single screen. One glance before you drive up, fly in, or head out.",
    domain: "vailvalleyreport.com",
    href: "https://vailvalleyreport.com",
    cta: "See it live",
    tag: "One-stop conditions",
    gradient: "linear-gradient(135deg, #1a2238 0%, #5b7fb0 100%)",
  },
  {
    name: "LUCI: Bilingual AI Receptionist",
    kind: "Our product · Bilingual AI · Live on this site",
    step1Label: "The challenge",
    step1:
      "Small businesses miss calls, and miss them in two languages. After-hours and overflow calls go unanswered, and round-the-clock bilingual coverage is expensive to staff.",
    step2Label: "What we built",
    step2:
      "LUCI answers 24/7 (Lucy in English, Lucía in Spanish), handles questions, routes calls, and emails you every lead. She's live on this very site: call and try her right now.",
    domain: "dobleai.com",
    href: "tel:+19705282835",
    cta: "Call her now · (970) 528-2835",
    tag: "Answers in English & Spanish",
    gradient: "linear-gradient(135deg, #2a1505 0%, #b5560f 62%, #f97316 125%)",
  },
];

function ProjectVisual({
  domain,
  tag,
  name,
  gradient,
  image,
}: {
  domain: string;
  tag: string;
  name: string;
  gradient: string;
  image?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/40">
      {/* browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.06] border-b border-white/[0.08]">
        <span className="w-3 h-3 rounded-full bg-red-400/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <span className="w-3 h-3 rounded-full bg-green-400/60" />
        <div className="ml-3 flex-1 truncate rounded-md bg-black/30 px-3 py-1.5 text-xs text-[#a3a3a3]">
          {domain}
        </div>
      </div>
      {/* preview — branded panel, or a real screenshot if `image` is provided */}
      {image ? (
        <img src={image} alt={`${name} preview`} className="block w-full h-auto" />
      ) : (
        <div
          className="relative aspect-[16/10] flex flex-col items-center justify-center text-center px-8"
          style={{ background: gradient }}
        >
          <div className="text-[11px] font-semibold tracking-widest uppercase text-white/70 mb-3">
            {tag}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {name}
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Recent projects
        </div>
        <h2 className="text-4xl font-bold mb-4">Real businesses, in Colorado and beyond.</h2>
        <p className="text-[#a3a3a3] text-lg mb-16 max-w-2xl">
          We don&apos;t just audit. We build and ship. Here&apos;s a look at what
          we found, what we did about it, and the work itself. Every link below is
          live: see for yourself.
        </p>

        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* visual — alternates sides on desktop */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <ProjectVisual
                  domain={p.domain}
                  tag={p.tag}
                  name={p.name}
                  gradient={p.gradient}
                  image={p.image}
                />
              </div>

              {/* story */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                  {p.kind}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{p.name}</h3>

                <div className="space-y-5 mb-7">
                  <div className="border-l-2 border-white/[0.12] pl-4">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-[#8a8a8a] mb-1.5">
                      {p.step1Label}
                    </div>
                    <p className="text-[#a3a3a3] leading-relaxed">{p.step1}</p>
                  </div>
                  <div className="border-l-2 border-orange-500/50 pl-4">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-orange-500/80 mb-1.5">
                      {p.step2Label}
                    </div>
                    <p className="text-[#cfcfcf] leading-relaxed">{p.step2}</p>
                  </div>
                </div>

                <a
                  href={p.href}
                  {...(p.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  {p.cta}
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
const testimonials = [
  {
    quote:
      "The bilingual team at Doble AI has completely reshaped how we approach our online digital presence. They captured almost five decades of my experience and market knowledge of the Vail and Eagle River Valley, and helped us take what we do day in and day out and showcase it online. In short, they underpromised and overdelivered.",
    name: "John Tyler",
    role: "John Tyler Real Estate · Vail Valley, Colorado",
    lang: "en",
  },
  {
    quote:
      "El equipo de Doble AI captó perfectamente lo que hacemos y construyó una plataforma que refleja mi conocimiento y experiencia aquí en Chapala, Ajijic y toda la ribera. La tecnología no es lo mío, y me ayudaron a tomar lo que tenía en la cabeza y mostrarlo en línea de forma efectiva, en un formato bilingüe que ayuda a mis compradores y vendedores. 10 de 10.",
    name: "Sol Ramírez",
    role: "Sol Ramírez Real Estate · Ajijic, México",
    lang: "es",
  },
  {
    quote:
      "I have known the founder of Doble AI for almost ten years, and what he and Gisella have created with their agency is nothing short of incredible. They helped me take my life's work, present it digitally and bilingually, and gave me a way to communicate what I do effectively. Their cultural and language understanding of the Latin American and United States markets cannot be overstated. A 10/10 agency.",
    name: "Alexander Estrada",
    role: "Filmmaker & Photographer · Colorado",
    lang: "en",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Client words
        </div>
        <h2 className="text-4xl font-bold mb-4">In their own words. En sus propias palabras.</h2>
        <p className="text-[#a3a3a3] text-lg mb-14 max-w-2xl">
          Three clients, two countries, two languages. Unedited beyond punctuation.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 flex flex-col"
            >
              <span aria-hidden="true" className="text-orange-500 text-5xl leading-none font-serif mb-4">
                &ldquo;
              </span>
              <blockquote
                lang={t.lang}
                className="text-[#d4d4d4] text-sm leading-relaxed flex-1"
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-[#a3a3a3] mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: bio + John headshot */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-orange-500" />
              Who we are
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Global thinkers.<br />Bilingual by nature.<br />Colorado-based.
            </h2>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
              Doble AI was founded by John and Gisella Rounds in the Eagle River Valley.
              John brings decades of global business development experience, having
              worked and traveled across more than 50 countries. He is bilingual in
              English and Spanish, and has spent his career helping businesses grow
              in complex, multicultural environments around the world.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              Gisella is originally from Peru. Her bilingual fluency and deep
              cultural knowledge aren&apos;t a feature we bolted on. They&apos;re
              the foundation of how we think about every client&apos;s market.
              Together, we combine genuine cross-cultural expertise with the latest
              AI tools to help Colorado businesses reach more customers and grow faster.
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={johnRoundsPhoto}
              alt="John Rounds, founder of Doble AI"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Couple photo — centered portrait */}
        <div className="mb-12 flex justify-center">
          <Image
            src={johnGisellaPhoto}
            alt="John and Gisella Rounds in Colorado"
            className="rounded-2xl object-cover"
            style={{ maxWidth: "500px", width: "100%", height: "auto" }}
          />
        </div>

        {/* Bottom: feature cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Natively Bilingual",
              desc: "English and Spanish aren't two languages to us. They're two ways of thinking about your market.",
            },
            {
              title: "AI-Native",
              desc: "Doble AI runs entirely on the same compounding AI workspace we build for clients: persistent memory, accumulated skills, knowledge that carries from one project to the next. We don't recommend what we haven't built on.",
            },
            {
              title: "Rooted, not limited",
              desc: "We know the Vail, Roaring Fork, and Steamboat markets cold. That same system now ships projects across the country and into Mexico.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Common questions
        </div>
        <h2 className="text-4xl font-bold mb-12">What people ask before they reach out.</h2>
        <div className="space-y-0 divide-y divide-white/[0.06]">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group py-6"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="text-lg font-semibold group-open:text-orange-400 transition-colors">
                  {q}
                </span>
                <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#a3a3a3] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Get started
        </div>
        <h2 className="text-4xl font-bold mb-4">Start with a free audit.</h2>
        <p className="text-[#a3a3a3] text-lg mb-12">
          We&apos;ll take a look at your current online presence and tell you exactly
          where the gaps are. No obligation, no pitch deck.
        </p>
        <AuditForm />
        <p className="text-[#666] text-sm mt-6">
          Prefer to talk?{" "}
          <a href="https://wa.me/19703762725" className="text-orange-500 hover:underline">
            Reach us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
