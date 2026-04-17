import { notFound } from "next/navigation";
import { posts, getPost } from "../../lib/posts";
import Footer from "../../components/Footer";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dobleai.com/blog/${slug}`,
      type: "article",
      publishedTime: post.dateISO,
      authors: ["John Rounds"],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://dobleai.com/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Person",
      "@id": "https://dobleai.com/#john-rounds",
      name: "John Rounds",
      jobTitle: "AI Consultant & Founder",
      url: "https://dobleai.com/#john-rounds",
    },
    publisher: { "@id": "https://dobleai.com/#organization" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dobleai.com/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://dobleai.com/blog",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dobleai.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://dobleai.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://dobleai.com/blog/${post.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Doble AI" className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/#work" className="hover:text-white transition-colors">Our Work</a>
            <a href="/translation" className="hover:text-white transition-colors">Translation</a>
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

      {/* Article */}
      <article className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-sm transition-colors mb-10"
          >
            ← All posts
          </a>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
              {post.category}
            </span>
            <span className="text-[#555] text-xs">·</span>
            <span className="text-[#555] text-xs">{post.readTime}</span>
            <span className="text-[#555] text-xs">·</span>
            <span className="text-[#555] text-xs">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="w-full object-cover"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Body */}
          <div className="prose-doble">{post.content}</div>

          {/* Author */}
          <div className="border-t border-white/[0.06] pt-8 mt-12 flex items-start gap-5">
            <img
              src="/john-rounds.jpeg"
              alt="John Rounds, founder of Doble AI"
              className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-white mb-1">John Rounds</p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Founder of Doble AI. Bilingual AI consultant and business strategist with 20+ years of
                international experience across 50+ countries. Works with Colorado businesses to implement
                AI strategy and grow in both English and Spanish markets.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
