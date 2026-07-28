import type { Metadata } from "next";
import Image from "next/image";
import johnTylerSite from "../../../public/work/john-tyler.jpg";
import { Eyebrow, PitchFooter, PitchNav } from "../ui";

export const metadata: Metadata = {
  title: "The Concept: Snowmass Village | Doble AI",
  description:
    "What Doble AI would build for Dennis Burns, shown through the live platform built for John Tyler in the Vail Valley.",
  robots: { index: false, follow: false },
};

export default function AspenConcept() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <PitchNav current="concept" />
      <Header />
      <CaseStudy />
      <Transfer />
      <WhyItHolds />
      <TheAsk />
      <PitchFooter />
    </main>
  );
}

function Header() {
  return (
    <section className="pt-36 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>The concept · Part two</Eyebrow>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight max-w-4xl mb-8">
          Not a theory.
          <br />
          <span className="text-orange-500">A site you can visit tonight.</span>
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-3xl leading-relaxed">
          Earlier this year we took a Vail Valley broker whose audit read
          almost exactly like yours and built him the platform his career
          deserved. It is live, it is his, and it is the clearest way to show
          you what we would build in Snowmass.
        </p>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Case study · John Tyler Real Estate</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-12 max-w-3xl">
          $900M in career sales. Until this year, nothing online he owned.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h3 className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
              Where he started
            </h3>
            <p className="text-[#a3a3a3] leading-relaxed mb-8">
              John Tyler is a Slifer Smith &amp; Frampton branch broker, raised
              in Vail, with more than $900 million in career sales. His only
              real presence was an agent page inside the brokerage&apos;s
              corporate site. He wasn&apos;t surfacing on his own name in
              Google, AI tools didn&apos;t know him, his story lived nowhere,
              and his listings were buried in the MLS. Sound familiar?
            </p>
            <h3 className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
              What we built
            </h3>
            <p className="text-[#a3a3a3] leading-relaxed">
              A full platform built around the man, not the brokerage: his real
              story, nine neighborhood guides covering his valley, a growing
              blog of market updates and buyer guides, his active listings,
              real client reviews, and a clear way to reach him on every page.
              The whole site is architected for SEO and for the AI engines, so
              he surfaces in Google and in tools like ChatGPT. And because his
              valley has a large Spanish-speaking market, every page has a
              native-quality Spanish twin, which no other luxury broker there
              offers.
            </p>
          </div>
          <div>
            <a
              href="https://johntylerrealestate.com"
              className="block rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.2] transition-colors"
              title="Visit johntylerrealestate.com"
            >
              <div className="bg-white/[0.06] px-4 py-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="text-xs text-[#a3a3a3] ml-2">
                  johntylerrealestate.com
                </span>
              </div>
              <Image
                src={johnTylerSite}
                alt="The live johntylerrealestate.com homepage"
                className="w-full h-auto"
              />
            </a>
            <p className="text-sm text-[#555] mt-3 text-center">
              Live now. Click through and judge it yourself.
            </p>
          </div>
        </div>
        <blockquote className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 max-w-3xl">
          <p className="text-lg leading-relaxed mb-4">
            &quot;The bilingual team at Doble AI has completely reshaped how we
            approach our online digital presence. They captured almost five
            decades of my experience and market knowledge of the Vail and Eagle
            River Valley, and helped us take what we do day in and day out and
            showcase it online. In short, they underpromised and
            overdelivered.&quot;
          </p>
          <footer className="text-sm text-[#a3a3a3]">
            John Tyler · John Tyler Real Estate · Vail Valley, Colorado
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

const pillars = [
  {
    num: "01",
    title: "A platform built around you",
    desc: "Your domain, your story, your record. The Owl Creek sale told your way, above the fold, on a page you own. Twenty-five years in the valley presented the way the Aspen Times told it, not the way a stale template does.",
  },
  {
    num: "02",
    title: "The Snowmass Village Report",
    desc: "Tim Estin turned a recurring market report into the strongest personal brand in Aspen real estate. Nobody has done it for Snowmass Village specifically. A dated, recurring report under your name makes you the market's analyst of record, and it is the single strongest magnet for both search engines and AI answers.",
  },
  {
    num: "03",
    title: "Neighborhood depth",
    desc: "Owl Creek, Wood Road and Base Village, Two Creeks, The Divide, Horse Ranch, Old Snowmass. Real guides with real knowledge, the kind only a 25-year local can write, and the kind AI engines cite.",
  },
  {
    num: "04",
    title: "Answers, not just pages",
    desc: "Every key page built to answer the questions buyers actually ask, in the format AI assistants draw from. This is how a site earns its way into the answers 45% of buyers are now reading.",
  },
  {
    num: "05",
    title: "A review engine",
    desc: "A quarter century of satisfied clients is your deepest untapped asset. We build the pipeline that turns them into visible, credible proof, review by review.",
  },
  {
    num: "06",
    title: "The bilingual option",
    desc: "Aspen and Snowmass draw serious buyers from Mexico City, Monterrey, and across Latin America. No top broker in either valley has a fully bilingual, findable site. For John Tyler this made him a category of one. It can do the same in Snowmass, and it is optional, not required.",
  },
];

function Transfer() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>The Snowmass edition</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-6 max-w-3xl">
          Same model. Built for your market, your record, your name.
        </h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl mb-16">
          This is not a template we re-skin. It is a model we proved one valley
          over, customized to the openings your audit exposed. Six pillars:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
                {p.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItHolds() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Why this holds up</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-6 max-w-3xl">
          The parts are cheap. The months of tuning underneath are not.
        </h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl">
          Anyone can buy a website template. What makes this work is the system
          behind it: an AI workspace that learns your business and never starts
          from zero, so every market report, every guide, and every page
          compounds on the last. We maintain it, we publish with you, and the
          asset grows while you sell real estate. That is what John Tyler is
          paying for, and it is why his presence keeps widening months after
          launch.
        </p>
      </div>
    </section>
  );
}

function TheAsk() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto text-center">
        <Eyebrow>The next step</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          One conversation.
        </h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Thirty minutes, by phone or in person in Snowmass. We will walk the
          audit together, answer anything, and if it&apos;s not a fit, you will
          still leave knowing exactly where you stand online. Fair trade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+19703762725"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Call John Rounds · (970) 376-2725
          </a>
          <a
            href="https://dobleai.com/#contact"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Or write to us at dobleai.com
          </a>
        </div>
      </div>
    </section>
  );
}
