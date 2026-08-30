import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "The Findability Report: what we check and why",
  description:
    "The full method behind our $1,500 findability diagnostic: every structural check we run, a four-engine AI visibility sweep scored out of ten, Google Business Profile, and competitive landscape. Published in full.",
  alternates: {
    canonical: "/findability-report",
  },
  openGraph: {
    title: "The Findability Report: what we check and why | Doble AI",
    description:
      "Every structural check we run, a four-engine AI visibility sweep scored out of ten, Google Business Profile, and competitive landscape. The whole method, published.",
    url: "https://dobleai.com/findability-report",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Findability Report by Doble AI",
      },
    ],
  },
};

/* ── The method ──
   Ordered the way it runs, which is also the order the problems block each
   other. There is no point scoring how AI answers a question about a business
   whose answers are not in the served HTML, so the readability floor comes
   first and everything downstream is gated on it. */
const PHASES = [
  {
    num: "01",
    name: "Can machines read you at all?",
    lede:
      "A zero on AI visibility means one of two completely different things: the engines read your site and picked someone else, or the engines could not read your site. The fix list is wrong if we cannot tell those apart, so this is settled first.",
    checks: [
      ["Server-rendered answers", "We fetch your pages the way a crawler does and confirm your service copy and FAQ answers are actually in the returned HTML, not injected later by JavaScript. One site we audited had 114 of 114 FAQ answers missing from the fetched document."],
      ["Indexation, page by page", "Every URL in your sitemap checked against Search Console. Not a site-wide percentage, a per-page verdict."],
      ["Canonical mismatch", "Your sitemap URL compared byte for byte against the canonical the page serves. A single trailing slash made one site report 19% coverage when the truth was 93%."],
      ["Marooned pages", "Pages that are not indexed and whose only inbound links come from pages that are also not indexed. Inbound link count alone says they are fine. Only crossing the link graph with index status finds them."],
      ["Duplicate hosts and URL forms", "Whether apex and www both answer, and whether a page is served at both slash forms with no redirect between them."],
      ["Redirect chains, loops, and 302s", "Multi-hop redirects that bleed link equity, temporary redirects where a permanent one is meant, and URLs that never resolve at all."],
      ["hreflang integrity", "For bilingual sites: whether language alternates point back at each other, whether they point at URLs your sitemap lists, and whether an x-default exists. Google discards a non-reciprocal alternate silently."],
      ["Core Web Vitals", "Largest Contentful Paint, layout shift, and blocking time from PageSpeed Insights."],
      ["Bing verification", "Checked separately from Google, because ChatGPT grounds its search on Bing's index. A practice that watches only Google is half blind."],
    ],
  },
  {
    num: "02",
    name: "Can people find you?",
    lede:
      "Structural discovery. Most of what we find here is not broken, it is unlinked, unsubmitted, or duplicated, which is why nobody notices until someone crawls the whole link graph.",
    checks: [
      ["Orphans and thin linking", "Pages with no inbound internal links, or exactly one. A $191M contractor we audited had 28 orphaned pages, including every case study."],
      ["Sitemap hygiene", "Non-200s in the sitemap, noindex pages being submitted, pages linked internally but never submitted, and lastmod dates that are stale or in the future."],
      ["Titles and descriptions", "Missing, duplicated, or truncated, checked against what the server actually returns rather than what the template appears to set. Framework inheritance quietly fills these in on child pages and a generic crawler reports them as present."],
      ["Thin content", "Pages under 350 words that are being asked to rank."],
      ["Page-two opportunities", "Queries you already rank between position four and twenty on, with real impressions and almost no clicks. The cheapest win in search, because the page already ranks and no new content is required."],
      ["Cannibalisation", "One query, two of your own pages competing. Google picks one, often the weaker."],
      ["Google Business Profile", "Whether it exists, whether it is claimed, and whether the address, hours, categories, and service areas agree with your site. Mismatched details across platforms weaken the whole local signal."],
    ],
  },
  {
    num: "03",
    name: "Do AI engines recommend you?",
    lede:
      "The part nobody else runs. Five questions a real buyer would ask, put to four engines in clean sessions, scored, and screenshotted. The hero artifact is usually the screenshot of an engine recommending your competitor.",
    checks: [
      ["Five buyer-intent prompts", "Category and location, problem intent, use-case recommendation, a direct brand check, and a real pre-purchase question. Plus a Spanish version where the market is genuinely bilingual, and not where it is not."],
      ["Four engines", "ChatGPT, Google AI Overviews, Perplexity, and Grok. Clean sessions, no signed-in personalisation."],
      ["Scored out of ten", "Every prompt and engine pair rated absent, mentioned, or recommended. Twenty cells, forty points, one number you can track month over month."],
      ["Who gets recommended instead", "We record the competitors that appear when you do not. That list is usually the most uncomfortable page in the report."],
      ["Citation source mapping", "Which third-party sources each engine cites: directories, local news, review sites, Reddit, chamber pages. Aggregated into a ranked list of the sources AI already trusts in your market, which becomes a concrete off-site plan rather than a vague instruction to build authority."],
      ["Brand mentions, not just citations", "A mention with no link still counts, and unlinked mentions are the highest-weighted AI visibility signal reported by practitioners."],
      ["Stability re-runs", "AI answers are probabilistic. Every prompt that scores is run twice, and anything that only appears once is flagged as unstable rather than banked as a win."],
    ],
  },
  {
    num: "04",
    name: "Who is beating you, and where is the gap?",
    lede:
      "The competitive half. Not a list of competitors you already know about, but the specific ground they hold and the ground nobody holds yet.",
    checks: [
      ["Real competitive set", "Who actually ranks and gets recommended for your buyers' questions, which is frequently not who you think you compete with."],
      ["Where you are losing", "Query by query, page by page, with the reason attached."],
      ["Unclaimed white space", "The questions your market asks that neither you nor your competitors answer. This is where the content plan comes from."],
    ],
  },
];

const faqs = [
  {
    q: "How is this different from a free SEO audit tool?",
    a: "Automated tools report what a crawler can see on one page at a time. Most of what we find is relational: a page that is fine on its own but linked only from pages Google has not indexed, or a canonical that differs from the sitemap by one character, or a set of FAQ answers that exist in the browser but not in the served HTML. Those defects are invisible to a page-by-page scan and they are the ones actually suppressing the site. The AI visibility sweep has no free equivalent at all.",
  },
  {
    q: "Why do you check Bing separately from Google?",
    a: "Because ChatGPT grounds its search results on Bing's index. If your site is invisible to Bing, it is invisible inside the tool a growing share of your buyers now ask first, no matter how well you rank on Google. Most audits never look.",
  },
  {
    q: "What do I actually receive?",
    a: "A written report, delivered as a private web page rather than a PDF, so the screenshots are legible and the links work. It contains every finding, the evidence behind it, a score out of ten for AI visibility, and a prioritised fix list that says what to do first and why. No pitch deck. You can hand it to whoever manages your site and they can act on it without us.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Five to seven days, and $1,500. If you continue with Doble Presence, the full $1,500 is credited against your first month, so the diagnostic effectively costs nothing if you decide to work with us. If you would rather take the report to another team, that is a legitimate outcome and there is no lock-in.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. The free snapshot is a single page covering whether your site is indexed, whether your Google Business Profile is claimed and complete, and the obvious structural problems. It comes back within two business days and there is no obligation. It is a genuine answer to the question 'is anything badly wrong', not a teaser.",
  },
  {
    q: "Do you do this in Spanish?",
    a: "Yes, and it is not a translation of the English report. Where your market is genuinely bilingual, the AI visibility sweep is run in Spanish as well, against the questions Spanish-speaking buyers actually type, and the report is written in Spanish. Where your market is not bilingual, we do not pretend otherwise and we do not charge you for it.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dobleai.com/findability-report#service",
      name: "The Findability Report",
      serviceType: "Digital presence and AI visibility audit",
      provider: { "@id": "https://dobleai.com/#organization" },
      description:
        "A full findability diagnostic: structural and indexation checks, a four-engine AI visibility sweep scored out of ten with screenshots, Google Business Profile review, and competitive landscape analysis. Delivered in writing in 5 to 7 days.",
      offers: {
        "@type": "Offer",
        price: "1500",
        priceCurrency: "USD",
        description:
          "Credited in full against the first month of Doble Presence if the engagement continues.",
      },
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://dobleai.com/findability-report#faq",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const CHECK_COUNT = PHASES.reduce((n, p) => n + p.checks.length, 0);

export default function FindabilityReport() {
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
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-6 h-px bg-orange-500" />
            The method, published in full
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            The Findability{" "}<br />
            <span className="text-orange-500">Report.</span>
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed mb-10">
            Most businesses we audit are excellent and effectively invisible.
            Being good and being findable are separate problems, and only one of
            them shows up in your revenue. This is every check we run to tell
            you which one you have, published so you can see exactly what
            $1,500 buys before you spend it.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#a3a3a3] mb-12">
            <span>
              <span className="text-orange-500 font-semibold">{CHECK_COUNT}</span>{" "}
              checks
            </span>
            <span>
              <span className="text-orange-500 font-semibold">4</span> AI engines
            </span>
            <span>
              <span className="text-orange-500 font-semibold">5&ndash;7</span> days
            </span>
            <span>
              <span className="text-orange-500 font-semibold">$1,500</span>,
              credited to your first month
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
              href="#method"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Read the method
            </a>
          </div>
        </div>
      </section>

      {/* ── Why publish it ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-6">
            Why publish the whole method?
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-5">
            Because &ldquo;a full diagnostic&rdquo; is a claim and a list of
            checks is evidence. Every firm in this category says it audits your
            site. Almost none of them will tell you what that means before you
            pay.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            There is a second reason. We built these checks for ourselves
            first, to run against our own sites and our clients&rsquo;, and
            most of them exist because something broke and nothing caught it.
            The trailing-slash canonical, the marooned page, the FAQ answers
            missing from the served HTML: each one is in the list because it
            cost somebody real traffic before anyone thought to look.
          </p>
        </div>
      </section>

      {/* ── The method ── */}
      <section id="method" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            What we check
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Four phases, in this order.
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mb-16 leading-relaxed">
            The order matters as much as the list. Each phase gates the next,
            so a problem in phase one makes every measurement after it
            meaningless until it is fixed.
          </p>

          <div className="space-y-16">
            {PHASES.map((phase) => (
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
                  {phase.checks.map(([name, detail]) => (
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

      {/* ── What you get ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-8">
            What you actually receive.
          </h2>
          <ul className="space-y-5 text-[#a3a3a3] text-lg leading-relaxed">
            <li className="flex gap-4">
              <span className="text-orange-500 mt-1">&mdash;</span>
              <span>
                A written report as a private web page, not a PDF, so the
                screenshots are readable and every link works.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-500 mt-1">&mdash;</span>
              <span>
                Every finding with the evidence attached. We report what is
                visible and verify it at the source. If something cannot be
                seen, the report says &ldquo;not visible,&rdquo; never
                &ldquo;does not exist.&rdquo;
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-500 mt-1">&mdash;</span>
              <span>
                An AI visibility score out of ten, with the screenshots behind
                it, that can be re-run monthly to show movement.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-500 mt-1">&mdash;</span>
              <span>
                A prioritised fix list written for whoever manages your site,
                including the ones you can do without us.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            What people ask before they buy.
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
          <h2 className="text-4xl font-bold mb-4">
            Start with a free snapshot.
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-10 leading-relaxed">
            One page on where you stand, back within two business days. If it
            turns up something worth the full report, we will say so. If it
            does not, we will say that too.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Request the free snapshot
            </a>
            <a
              href="https://wa.me/19703762725"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
