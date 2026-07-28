import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PitchFooter, PitchNav } from "./ui";

export const metadata: Metadata = {
  title: "Prepared for Dennis Burns | Doble AI",
  description:
    "A private briefing on digital presence in the Snowmass Village luxury market, prepared by Doble AI.",
  robots: { index: false, follow: false },
};

export default function AspenHub() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <PitchNav current="hub" />
      <Hero />
      <TheShift />
      <TeaserFinding />
      <TwoDoors />
      <WhoWeAre />
      <PitchFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Prepared for Dennis Burns · Snowmass Village, Colorado</Eyebrow>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight max-w-4xl mb-8">
          The record is yours.
          <br />
          <span className="text-orange-500">Online, the credit isn&apos;t.</span>
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-3xl leading-relaxed mb-6">
          In April 2024 you represented the buyer of 600 Owl Creek Ranch Road.
          At $77 million, it broke the all-time Colorado price record. Yet much
          of the coverage led with the seller&apos;s agent, and when a buyer
          searches for you today, there is almost nothing to find that you
          actually own.
        </p>
        <p className="text-xl text-[#a3a3a3] max-w-3xl leading-relaxed">
          That gap is fixable. This briefing shows exactly where you stand,
          and what a fix looks like, using a real one we built for a broker one
          valley over.
        </p>
      </div>
    </section>
  );
}

function TheShift() {
  const stats = [
    {
      val: "45%",
      label:
        "of prospective buyers now use AI tools in the homebuying process, up from 37% a year ago (Veterans United survey, Q2 2026)",
    },
    {
      val: "46%",
      label:
        "of buyers began their search without an agent (NAR 2025 Profile of Home Buyers and Sellers)",
    },
    {
      val: "$9.45M",
      label:
        "average single-family sale price in Snowmass Village, first half of 2025. One missed buyer is a seven-figure commission event.",
    },
    {
      val: "0",
      label:
        "client reviews of your work visible anywhere we searched. Your reputation lives entirely offline.",
    },
  ];
  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>What changed</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Luxury buyers still close with a broker. They no longer start with
            one.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-4">
            For twenty years, showing up online meant ranking in Google. That
            still matters. But a growing share of buyers now begin by asking an
            AI assistant: ChatGPT, Gemini, or the AI answer at the top of
            Google itself. Ask them who the top brokers in Snowmass Village
            are, and they answer with names.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            Those answers are assembled from what exists online: owned
            websites, market reports, reviews, press. Brokers with deep content
            get cited. Brokers without it are simply absent, no matter what
            they have closed. The industry calls this GEO, generative engine
            optimization, and in luxury real estate it is where the next decade
            of client discovery gets decided.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.val}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {s.val}
              </div>
              <div className="text-sm text-[#a3a3a3] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeaserFinding() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>What we found</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-6 max-w-3xl">
          We ran the searches a Snowmass buyer would run.
        </h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl mb-10">
          Best realtor in Snowmass Village. Top real estate agent Snowmass.
          Snowmass Village market report. Across every buyer-intent search we
          captured, the results went to national directories, to two other
          local agents with invested websites, and to market reports published
          under other brokers&apos; names. Your name did not appear in any of
          them. The one asset that consistently ranks for you is a brokerage
          profile page, and its bio appears to be years out of date.
        </p>
        <Link
          href="/aspen/audit"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
        >
          See the full audit
        </Link>
      </div>
    </section>
  );
}

function TwoDoors() {
  const doors = [
    {
      href: "/aspen/audit",
      kicker: "Part one",
      title: "The Audit",
      desc: "Where you stand today: what buyers find when they search for you, who is winning the searches you should own, and a straight scorecard. No padding.",
      cta: "Read the audit",
    },
    {
      href: "/aspen/concept",
      kicker: "Part two",
      title: "The Concept",
      desc: "What we would build, shown through what we already built for a $900M broker in the Vail Valley. A real site, live today, not a mockup.",
      cta: "See the concept",
    },
  ];
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>The briefing</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-12">
          Two parts. Ten minutes.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {doors.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-8 transition-colors group"
            >
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
                {d.kicker}
              </div>
              <h3 className="text-2xl font-bold mb-3">{d.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-6">{d.desc}</p>
              <span className="text-orange-500 font-semibold group-hover:underline underline-offset-4">
                {d.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Who prepared this</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-6 max-w-3xl">
          Doble AI builds digital presence for mountain-market luxury brokers.
        </h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl mb-8">
          We are a Colorado firm based in the Eagle River Valley. Our flagship
          real estate client is John Tyler, a Slifer Smith &amp; Frampton branch
          broker with more than $900 million in career sales, whose situation
          at the start of this year looked a lot like yours does today. We audited
          his presence, built him a platform he owns, and made him findable in
          both Google and the AI tools. His site, his words, and the full story
          are in part two of this briefing.
        </p>
        <a
          href="https://dobleai.com"
          className="inline-block border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
        >
          Visit dobleai.com
        </a>
      </div>
    </section>
  );
}
