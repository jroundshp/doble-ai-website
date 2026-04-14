import React from "react";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  content: React.ReactNode;
};

const CTA = () => (
  <div className="mt-12 p-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-center">
    <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase mb-3">
      Ready to find out where you stand?
    </p>
    <h3 className="text-2xl font-bold mb-3">Get a free business audit.</h3>
    <p className="text-[#a3a3a3] mb-6 max-w-md mx-auto">
      We&apos;ll review your digital presence, competitive position, and where
      AI can make the biggest difference — at no charge.
    </p>
    <a
      href="/#contact"
      className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-full transition-colors"
    >
      Request your free audit
    </a>
  </div>
);

export const posts: Post[] = [
  {
    slug: "digital-presence-audit",
    title: "Your Digital Presence Is Your #1 Salesperson — Is It Doing Its Job?",
    excerpt:
      "Your website, Google listing, and reviews are working 24/7 — but most businesses have no idea what signals they're sending. Here's what a digital presence audit reveals.",
    date: "April 10, 2026",
    category: "Digital Strategy",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Laptop showing analytics and business growth charts",
    content: (
      <>
        <p>
          Right now, someone is searching for what your business offers. The
          question isn&apos;t whether they can find you — it&apos;s what they
          find when they do. A digital presence audit answers that question with
          specifics, not guesses.
        </p>

        <h2>What a Digital Presence Audit Actually Covers</h2>
        <p>
          A thorough audit looks at five areas that together determine whether
          your business converts online attention into actual customers:
        </p>
        <ol>
          <li>
            <strong>Your website</strong> — load speed, mobile experience,
            clarity of your offer, and whether visitors know what to do next.
          </li>
          <li>
            <strong>Local search visibility</strong> — how you rank in Google
            Maps and local search results for the terms your customers actually
            use.
          </li>
          <li>
            <strong>Reviews and reputation</strong> — volume, recency, sentiment,
            and how (or whether) you respond.
          </li>
          <li>
            <strong>Social presence</strong> — consistency, engagement, and
            whether your profiles support or undercut your brand.
          </li>
          <li>
            <strong>Competitive position</strong> — how you stack up against the
            businesses your customers compare you to.
          </li>
        </ol>

        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80"
          alt="Person reviewing business analytics on a smartphone"
          className="w-full rounded-xl my-8 object-cover"
          style={{ maxHeight: "420px" }}
        />

        <h2>The Gaps Most Businesses Don&apos;t Know About</h2>
        <p>
          In our experience auditing Colorado businesses, the most common
          findings aren&apos;t catastrophic failures — they&apos;re quiet leaks.
          A Google Business Profile that hasn&apos;t been updated in two years.
          A website that loads in 8 seconds on mobile. A competitor with 200
          more reviews who ranks above you for every relevant search term. None
          of these feels urgent until you see what they cost you.
        </p>
        <p>
          One thing that sets our audits apart: if you&apos;re curious whether
          the Spanish-speaking market is worth pursuing for your business, we can
          answer that question too. We&apos;ll show you what the opportunity
          actually looks like — search volume, competitive landscape, and what it
          would take to go after it. Some clients decide it&apos;s a priority.
          Others focus on the English-side growth first. Either way, you&apos;ll
          have the information to make that call with confidence.
        </p>

        <h2>How AI Makes Auditing Faster and Deeper</h2>
        <p>
          What used to require weeks of manual research can now be done in a
          fraction of the time. AI tools crawl your site for technical issues,
          analyze review sentiment across platforms, map competitor keyword
          rankings, and flag visibility gaps — all before a human expert
          interprets the findings and builds a prioritized action plan.
        </p>
        <p>
          The result is an audit that&apos;s more comprehensive than what most
          agencies delivered five years ago, delivered in days rather than
          months, and specific to your market — not a generic template.
        </p>

        <h2>What to Do With the Findings</h2>
        <p>
          A good audit doesn&apos;t just describe problems — it ranks them by
          impact and gives you a clear sequence for fixing them. Not everything
          needs to be fixed at once. The highest-value changes are usually
          straightforward: claiming and optimizing your Google Business Profile,
          fixing critical website performance issues, and closing the most
          obvious content gaps that competitors have already filled.
        </p>
        <p>
          The goal isn&apos;t a perfect digital presence. It&apos;s one that
          consistently wins the comparison when a potential customer is choosing
          between you and the business next to you in search results.
        </p>

        <CTA />
      </>
    ),
  },
  {
    slug: "ai-tools-for-business-growth",
    title: "5 AI Tools Every Small Business Should Be Using Right Now",
    excerpt:
      "AI isn't just for big companies. These five tools are practical, affordable, and giving small businesses a measurable edge — here's how to actually use them.",
    date: "April 7, 2026",
    category: "AI Tools",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Abstract AI technology visualization",
    content: (
      <>
        <p>
          The AI conversation often sounds like it&apos;s aimed at Fortune 500
          companies with dedicated data science teams. It isn&apos;t. The tools
          that are actually moving the needle for small businesses are practical,
          affordable, and available right now. Here are five worth your
          attention.
        </p>

        <h2>1. Claude or ChatGPT — for Content at Scale</h2>
        <p>
          The clearest ROI in AI for most small businesses is content creation.
          Blog posts, email sequences, social captions, service descriptions,
          FAQ pages — these take hours to write well and minutes to produce with
          a good AI model. The key is feeding it context: your voice, your
          customers, your specific market. A well-prompted AI doesn&apos;t
          produce generic content — it produces a first draft that sounds like
          you and just needs editing.
        </p>
        <p>
          And if you reach a point where pursuing the Spanish-speaking market
          makes sense for your business, these same tools become the foundation
          for a bilingual content strategy. We can build out authentic
          Spanish-language content — not translations, but content written for
          that audience — alongside a market strategy for reaching them. It&apos;s
          a separate conversation, but one we&apos;re well-equipped to have when
          you&apos;re ready for it.
        </p>

        <h2>2. Perplexity AI — for Market and Competitor Research</h2>
        <p>
          Perplexity is a research tool that synthesizes the web and cites its
          sources. Ask it what your competitors are known for, what customers are
          saying about your category, or what trends are emerging in your market.
          It surfaces intelligence in minutes that used to take hours of tab
          switching. Use it regularly and you&apos;ll never be surprised by what
          a competitor is doing.
        </p>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
          alt="Small business team working together on growth strategy"
          className="w-full rounded-xl my-8 object-cover"
          style={{ maxHeight: "420px" }}
        />

        <h2>3. Semrush or Ahrefs — for Search Visibility</h2>
        <p>
          Both tools now have robust AI features layered on top of their core
          SEO data. You can see exactly what search terms your competitors rank
          for, which ones they&apos;re winning, and where the gaps are. More
          importantly, the AI content tools in both platforms can help you build
          a content plan specifically designed to capture the traffic you
          currently aren&apos;t getting. This is the foundation of sustainable
          organic growth.
        </p>

        <h2>4. Canva AI — for Visual Content Without a Designer</h2>
        <p>
          Canva&apos;s AI features have matured into something genuinely useful:
          background removal, image generation, auto-resizing for every platform,
          and AI-assisted design suggestions. For a small business posting
          consistently to Instagram, Google Business, and email, Canva AI
          removes the bottleneck of needing design resources. Consistent,
          on-brand visuals are now a realistic standard for any business with a
          phone and an afternoon.
        </p>

        <h2>5. Zapier or Make — for Automation</h2>
        <p>
          The highest-value AI application for most businesses isn&apos;t a
          specific tool — it&apos;s connecting the tools you already have. Zapier
          and Make allow you to build automated workflows: a new form submission
          triggers a personalized email, a new Google review triggers a Slack
          notification, a new booking triggers a follow-up sequence. With AI
          actions now built into both platforms, these workflows are smarter than
          simple if-then rules. The result is a business that responds faster
          and drops fewer leads.
        </p>

        <h2>The Implementation Gap</h2>
        <p>
          The challenge with AI tools isn&apos;t access — it&apos;s
          implementation. Most business owners try a tool once, don&apos;t get
          immediate value, and move on. Getting real results requires setting up
          the tools correctly, integrating them with your existing workflow, and
          training your team. That&apos;s where consulting pays off: not in
          finding the tools, but in making them actually work for your specific
          business.
        </p>

        <CTA />
      </>
    ),
  },
  {
    slug: "competitive-analysis",
    title: "What a Competitive Analysis Reveals (And Why Most Businesses Skip It)",
    excerpt:
      "Most business owners know who their competitors are. Very few know what those competitors are actually doing well — or where the gaps are. A competitive analysis changes that.",
    date: "April 3, 2026",
    category: "Strategy",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Strategic chess pieces representing competitive business analysis",
    content: (
      <>
        <p>
          There&apos;s a difference between knowing your competitors exist and
          knowing what they&apos;re doing. Most businesses operate with the
          former — a general awareness that other people do what they do — and
          miss the specific intelligence that would actually change their
          decisions.
        </p>

        <h2>What a Competitive Analysis Actually Shows</h2>
        <p>
          A thorough competitive analysis maps four things your competitors are
          doing that you probably aren&apos;t tracking:
        </p>
        <ul>
          <li>
            <strong>Search visibility</strong> — Which keywords are they ranking
            for? Which ones are driving their traffic? Are there terms where no
            one dominates and you could win quickly?
          </li>
          <li>
            <strong>Review strategy</strong> — How many reviews do they have,
            how recent, and what do customers praise or criticize? This is
            unfiltered market research about your category, freely available.
          </li>
          <li>
            <strong>Content and messaging</strong> — What are they talking about?
            What problems are they positioning against? What language resonates
            with your shared audience?
          </li>
          <li>
            <strong>Digital gaps</strong> — Where are they weak? Slow websites,
            thin content, poor mobile experience, unanswered reviews — these are
            opportunities, not just failures of theirs.
          </li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
          alt="Business data analytics dashboard showing competitive metrics"
          className="w-full rounded-xl my-8 object-cover"
          style={{ maxHeight: "420px" }}
        />

        <h2>Why AI Changed What&apos;s Possible</h2>
        <p>
          Manual competitive research is slow and incomplete. You can
          visit websites, read reviews, and search for your competitors — but
          you&apos;re seeing a surface-level snapshot. AI-powered tools go
          deeper: crawling thousands of keywords, analyzing sentiment across
          hundreds of reviews, flagging content strategies, and identifying
          technical weaknesses — all automatically, and updated continuously.
        </p>
        <p>
          What used to take a consultant two weeks to assemble now takes two
          days to produce at higher depth. More importantly, the analysis is
          repeatable. You can run a fresh competitive snapshot quarterly and see
          exactly what&apos;s changed.
        </p>

        <h2>The Strategic Question It Answers</h2>
        <p>
          The real value of competitive analysis isn&apos;t in the data —
          it&apos;s in answering one question: <em>where should we focus?</em>{" "}
          Marketing budgets are limited. Attention is limited. The businesses
          that grow fastest aren&apos;t doing everything — they&apos;re doing
          the right things, which means the things their competitors
          aren&apos;t doing well.
        </p>
        <p>
          In our Colorado market audits, we consistently find white space:
          categories where local businesses have strong word-of-mouth but weak
          digital presence, leaving organic traffic for anyone willing to claim
          it. A competitive analysis finds that white space and turns it into a
          prioritized action plan.
        </p>

        <h2>The Cost of Not Knowing</h2>
        <p>
          Businesses that skip competitive analysis tend to make the same
          mistake: competing on what they think matters rather than what the
          market actually rewards. They invest in a website redesign when the
          issue is review volume. They create more social content when the
          opportunity is local SEO. The audit is cheap compared to six months
          of effort pointed in the wrong direction.
        </p>
        <p>
          For businesses that decide the Spanish-speaking market is worth
          pursuing, we can extend the competitive analysis to cover that
          landscape as well — Spanish-language search behavior, who&apos;s
          competing there, and where the real gaps are. Combined with an
          authentic Spanish content strategy, it becomes a complete playbook for
          entering that market. But that&apos;s a decision you should make based
          on data, not assumption — and the competitive analysis is how you get
          that data.
        </p>

        <CTA />
      </>
    ),
  },
  {
    slug: "bilingual-advantage-colorado",
    title: "The Bilingual Advantage: How to Reach the Other Half of Your Colorado Market",
    excerpt:
      "In the Vail and Roaring Fork Valleys, nearly half the population speaks Spanish as a first language. Most local businesses market to only half their potential customers. Here's what that costs — and how to fix it.",
    date: "March 28, 2026",
    category: "Bilingual Marketing",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Colorado mountain landscape representing the regional market",
    content: (
      <>
        <p>
          Walk through any neighborhood in Vail, Avon, Gypsum, Basalt,
          Steamboat Springs, or Breckenridge and the math becomes clear: a
          significant share of the people who could be your customers think,
          search, and talk in Spanish first. Most local businesses have a
          single-language presence — and quietly accept that as normal.
        </p>

        <h2>The Numbers Behind the Opportunity</h2>
        <p>
          In Eagle and Pitkin counties, Spanish-speaking residents make up 40–50%
          of the population. In Routt County (Steamboat Springs) and Summit
          County (Breckenridge), the numbers tell a similar story — Hispanic and
          Latino residents represent a substantial and growing share of the
          workforce and local population. These aren&apos;t recent arrivals —
          these are established community members who have spent decades building
          lives (and spending money) across the mountain corridor. They use
          contractors, restaurants, real estate agents, and service businesses
          like everyone else. The difference is that when they search Google,
          they often search in Spanish — and they almost never find results
          tailored to them.
        </p>

        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
          alt="Professional working on bilingual content strategy"
          className="w-full rounded-xl my-8 object-cover"
          style={{ maxHeight: "420px" }}
        />

        <h2>What Bilingual Marketing Actually Means</h2>
        <p>
          Translation is not bilingual marketing. Running your English website
          through Google Translate and calling it done misses the point — and
          often backfires. Authentic bilingual marketing means understanding how
          your Spanish-speaking customers describe their problems, what they
          trust, and what they respond to. It means creating content in Spanish
          that reflects cultural context, not just converted words.
        </p>
        <p>
          It also means claiming the search real estate that no one else in your
          market has bothered to optimize. The Spanish-language keywords relevant
          to your business are less competitive, less expensive to target, and
          underserved by nearly every local business — including your
          competitors. This is an open window.
        </p>

        <h2>How AI Makes It Affordable</h2>
        <p>
          Historically, bilingual marketing required either a bilingual team
          member or ongoing translation costs. Both created friction that led
          most businesses to deprioritize it. AI has changed the economics
          significantly. With the right setup, a bilingual AI workflow can
          produce high-quality Spanish content in parallel with English — same
          voice, appropriate tone, culturally grounded — at a fraction of
          traditional costs.
        </p>
        <p>
          What still matters: human review by someone who actually speaks the
          language. AI produces excellent first drafts, but native fluency
          catches the nuances that matter for trust. At Doble AI, that
          review is built into everything we produce — it&apos;s not a feature
          we bolt on.
        </p>

        <h2>Where to Start</h2>
        <p>
          The highest-impact bilingual moves for most Colorado businesses are
          straightforward: a Spanish-language version of your Google Business
          Profile, Spanish content on your highest-traffic website pages, and a
          bilingual social presence. These aren&apos;t expensive changes. They
          are, however, changes that immediately put you ahead of every
          competitor who hasn&apos;t made them — which, in most mountain
          corridor markets, is almost everyone.
        </p>
        <p>
          The businesses that move on this now will establish brand recognition
          and search authority in Spanish before the window closes. Across Vail,
          Steamboat Springs, Breckenridge, and the Roaring Fork Valley, that
          window is still wide open. The ones that wait will pay more to catch up
          later.
        </p>

        <CTA />
      </>
    ),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
