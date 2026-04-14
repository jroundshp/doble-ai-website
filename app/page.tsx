export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <SampleWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

/* ── Navigation ── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          doble<span className="text-orange-500">AI</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Our Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Free Audit
        </a>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-6 h-px bg-orange-500" />
          Eagle River Valley, Colorado
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-8">
          Grow your business<br />
          <span className="text-orange-500">with AI.</span><br />
          En inglés y en español.
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12">
          Colorado&apos;s only bilingual AI consulting firm. We help Colorado businesses
          understand, adopt, and implement artificial intelligence — and reach the
          customers your competitors are ignoring.
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
            Half your market speaks Spanish.<br />
            Most of your competitors don&apos;t.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            In the Vail and Roaring Fork Valleys, nearly 50% of residents are
            Spanish-speaking — established community members, loyal customers, and
            business owners. Mainstream marketing reaches only half your potential
            audience. We reach all of it.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: "50%", label: "Spanish-speaking residents in your market" },
            { val: "2x", label: "Reach with bilingual marketing" },
            { val: "AI", label: "Tools to automate and amplify your growth" },
            { val: "90", label: "Days to measurable results" },
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
      desc: "A full diagnostic of your online presence, competitors, and gaps — delivered as a detailed written report. This is where every engagement starts.",
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
      name: "AI Implementation",
      desc: "A tailored roadmap for integrating AI tools into your business — from automating repetitive tasks to using AI for content, outreach, and customer service.",
      detail: "Custom scope per engagement",
    },
    {
      num: "04",
      name: "Brand & Sales Growth",
      desc: "Bilingual content strategy, digital presence buildout, and a clear plan to turn your brand into a revenue-generating asset.",
      detail: "English + Spanish",
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
            Pricing is scoped to your project — it starts with a free audit.
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
          Before you commit to anything, see the quality of work we deliver. Here&apos;s
          a real audit we completed for a Colorado business.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
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
                Northwest Colorado — Specialty contractor serving the luxury mountain
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
                Vail Valley, Colorado — Luxury real estate team with $850M+ career
                volume. Digital presence audit, competitive landscape, and 90-day
                growth roadmap.
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

/* ── About ── */
function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
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
            John brings decades of global business development experience — having
            worked and traveled across more than 50 countries. He is bilingual in
            English and Spanish, and has spent his career helping businesses grow
            in complex, multicultural environments around the world.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            Gisella is originally from Peru. Her bilingual fluency and deep
            cultural knowledge aren&apos;t a feature we bolted on — they&apos;re
            the foundation of how we think about every client&apos;s market.
            Together, we combine genuine cross-cultural expertise with the latest
            AI tools to help Colorado businesses reach more customers and grow faster.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Natively Bilingual",
              desc: "English and Spanish aren't two languages to us — they're two ways of thinking about your market.",
            },
            {
              title: "AI-Amplified",
              desc: "We use the same AI tools we recommend, so our advice is grounded in real implementation experience.",
            },
            {
              title: "Colorado-Based",
              desc: "We know the Vail, Roaring Fork, and Steamboat markets. Your clients are our neighbors.",
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
          where the gaps are — no obligation, no pitch deck.
        </p>
        <form className="flex flex-col gap-4 text-left" action="#" method="POST">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Your business name"
            className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your business and what you're trying to grow..."
            className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors mt-2"
          >
            Request my free audit
          </button>
        </form>
        <p className="text-[#666] text-sm mt-6">
          Prefer to talk?{" "}
          <a href="https://wa.me/1XXXXXXXXXX" className="text-orange-500 hover:underline">
            Reach us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555]">
        <div>
          doble<span className="text-orange-500">AI</span> — Eagle River Valley, Colorado
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} Doble AI LLC</div>
      </div>
    </footer>
  );
}
