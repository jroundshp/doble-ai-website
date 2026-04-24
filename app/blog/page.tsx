import Link from "next/link";
import { posts } from "../lib/posts";
import Footer from "../components/Footer";

const pinnedSlugs = [
  "bilingual-ai-receptionist-small-business",
  "recepcionista-ia-bilingue-pequenos-negocios",
  "ai-traffic-converts-better-than-paid-search",
  "trafico-ia-convierte-mejor-que-busqueda-pagada",
];
const pinned = pinnedSlugs.map((s) => posts.find((p) => p.slug === s)).filter(Boolean) as typeof posts;
const rest = posts.filter((p) => !pinnedSlugs.includes(p.slug));
const displayPosts = [...pinned, ...rest];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://dobleai.com/blog",
  name: "The Doble AI Blog",
  description:
    "Practical guides on AI adoption, digital presence, competitive strategy, and bilingual marketing for Colorado businesses.",
  url: "https://dobleai.com/blog",
  publisher: { "@id": "https://dobleai.com/#organization" },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://dobleai.com/blog/${p.slug}`,
    datePublished: p.dateISO,
    description: p.excerpt,
  })),
};

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on AI adoption, digital presence, competitive strategy, and bilingual marketing for Colorado businesses.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "The Doble AI Blog",
    description:
      "Practical guides on AI adoption, digital presence, competitive strategy, and bilingual marketing for Colorado businesses.",
    url: "https://dobleai.com/blog",
  },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
            <a href="/blog" className="text-white">Blog</a>
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

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            Insights
          </div>
          <h1 className="text-5xl font-bold mb-4">The Doble AI Blog</h1>
          <p className="text-[#a3a3a3] text-lg max-w-2xl">
            Practical guides on AI, digital presence, and bilingual marketing for
            Colorado businesses.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-[#555] text-xs">·</span>
                  <span className="text-[#555] text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold leading-snug mb-3 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#a3a3a3] text-sm leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#555] text-xs">{post.date}</span>
                  <span className="text-orange-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
