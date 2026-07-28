import type { Metadata } from "next";
import { Eyebrow, NextStep, PitchFooter, PitchNav } from "../ui";

export const metadata: Metadata = {
  title: "Digital Presence Audit: Dennis Burns | Doble AI",
  description:
    "A private digital presence audit for Dennis Burns, Snowmass Village, prepared by Doble AI.",
  robots: { index: false, follow: false },
};

export default function AspenAudit() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <PitchNav current="audit" />
      <Header />
      <Method />
      <Findings />
      <Scorecard />
      <HonestyNote />
      <NextStep
        href="/aspen/concept"
        label="See the concept"
        sub="The audit is the diagnosis. Part two is the fix, shown live."
      />
      <PitchFooter />
    </main>
  );
}

function Header() {
  return (
    <section className="pt-36 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Digital presence audit · July 2026</Eyebrow>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight max-w-4xl mb-8">
          An A-grade broker with{" "}
          <span className="text-orange-500">F-grade findability.</span>
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-3xl leading-relaxed">
          Twenty-five years in the valley. A buyer-side role in the sale that
          broke Colorado&apos;s price record. And a digital footprint that tells
          almost none of it. Here is what we found, search by search.
        </p>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>How we audited</Eyebrow>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl">
          We ran the searches a real buyer or seller would run, in July 2026:
          your name, with and without your market attached, plus the
          buyer-intent searches that decide who gets the first call. We
          recorded what ranked, what didn&apos;t, and who won each search
          instead. Everything below is reported exactly as we observed it.
          Where something did not surface, we say &quot;did not surface&quot;
          rather than &quot;does not exist,&quot; because an outside audit can
          only see what the open web shows it.
        </p>
      </div>
    </section>
  );
}

const findings = [
  {
    num: "01",
    title: "Searching your name",
    body: [
      "What ranks first for your name is a Sotheby's associate profile page. It is an asset the brokerage owns, in the brokerage's template, and its bio describes you as a broker of 17 years. The Aspen Times, covering the Owl Creek sale in April 2024, described you as a 23-year broker. Your primary online representation appears to be roughly six years out of date.",
      "Below it: thin directory listings showing zero reviews, a LinkedIn profile, and contact-scraper pages. What did not surface in any of our searches: a personal website, a Zillow or Realtor.com agent profile, any social media presence, or a single page of content under your own name.",
    ],
  },
  {
    num: "02",
    title: "The searches that decide the first call",
    body: [
      "“Best realtor Snowmass Village.” “Top real estate agent Snowmass.” These searches went to national directories (Yelp, FastExpert, HomeLight, US News) and to two local agents whose own websites rank: Matt Tate and Erik Berg. Both publish content; both show their production in their own words on pages they own.",
      "Your name did not appear in any result set we captured. A buyer who does not already know you cannot find their way to you through the searches buyers actually run.",
    ],
  },
  {
    num: "03",
    title: "The record sale, retold without you",
    body: [
      "The $77 million Owl Creek sale is the kind of credential most brokers never touch. But look at how the internet tells it: several industry write-ups led with the seller's agent and brokerage, and some barely mention your name. The Aspen Times quoted you; the aggregators mostly didn't.",
      "There is no page you own where that story is told your way. So the single strongest fact of your career is scattered across other people's websites, framed by other people's priorities.",
    ],
  },
  {
    num: "04",
    title: "The market-data searches",
    body: [
      "“Snowmass Village real estate market report” belongs to the Estin Report, with quarterly reports from Chris Klug and an annual Snowmass review from Stacey Kelly behind it. Even the CEO of your own brokerage, Andrew Ernemann, publishes market analysis under his personal name.",
      "Nobody, however, owns a dedicated Snowmass Village report the way Tim Estin owns Aspen. The category that turns a broker into the market's analyst of record is still open in your own backyard. Part two of this briefing comes back to that.",
    ],
  },
  {
    num: "05",
    title: "What the AI assistants say",
    body: [
      "45% of prospective buyers now use AI tools in the homebuying process, up from 37% a year ago. When those tools answer “who are the top brokers in Snowmass Village,” they assemble the answer from the sources above: owned websites, market reports, reviews, and press.",
      "You are absent from those sources, so you are absent from the answers. The brokers the AI names are the ones who wrote themselves into its source material. This is the compounding cost of the gaps in findings one through four: every new AI answer repeats them.",
    ],
  },
];

function Findings() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Findings</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-16">
          Five searches, one pattern.
        </h2>
        <div className="space-y-6">
          {findings.map((f) => (
            <div
              key={f.num}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
                Finding {f.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              {f.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[#a3a3a3] leading-relaxed mb-4 last:mb-0 max-w-3xl"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const grades = [
  {
    area: "Market credibility, offline",
    grade: "A+",
    note: "25 years in the valley and a role in Colorado's record-breaking sale. This is the asset everything else should be built on.",
    good: true,
  },
  {
    area: "Owned web presence",
    grade: "F",
    note: "No personal website surfaced. Your primary online representation is a brokerage template page with a stale bio.",
    good: false,
  },
  {
    area: "Search findability",
    grade: "D",
    note: "Your name search resolves, barely. Buyer-intent searches do not reach you at all.",
    good: false,
  },
  {
    area: "Reviews and social proof",
    grade: "F",
    note: "Zero client reviews visible anywhere we searched. A quarter century of happy clients, invisible.",
    good: false,
  },
  {
    area: "Market content and authority",
    grade: "F",
    note: "No market report, no guides, no content under your name. Competitors own the analyst position.",
    good: false,
  },
  {
    area: "AI visibility",
    grade: "D",
    note: "Absent from the source material AI assistants draw on, so absent from their answers.",
    good: false,
  },
];

function Scorecard() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Scorecard</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight mb-12">
          The grades, straight.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {grades.map((g) => (
            <div
              key={g.area}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex items-start gap-6"
            >
              <div
                className={`text-4xl font-bold shrink-0 w-16 ${
                  g.good ? "text-emerald-400" : "text-orange-500"
                }`}
              >
                {g.grade}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{g.area}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {g.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl mt-12">
          The pattern is the point. Nothing here says the business is weak. It
          says the business is invisible where buyers now look, and that every
          one of these grades is fixable, because the raw material (the track
          record, the story, the market knowledge) is already the strongest in
          the room.
        </p>
      </div>
    </section>
  );
}

function HonestyNote() {
  return (
    <section className="py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>A note on method</Eyebrow>
        <p className="text-[#a3a3a3] leading-relaxed max-w-3xl">
          This is an outside-in audit: it reports what the open web showed us
          in July 2026, and search results move. You may have assets we could
          not see from outside, such as a Google Business Profile or private
          channels that serve you well. If so, that changes the details, not
          the picture. We are glad to re-run any of this live, together, on a
          call.
        </p>
      </div>
    </section>
  );
}
