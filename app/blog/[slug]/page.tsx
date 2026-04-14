import { notFound } from "next/navigation";
import { posts, getPost } from "../../lib/posts";

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
    title: `${post.title} — Doble AI`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
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

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight">
            doble<span className="text-orange-500">AI</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/#work" className="hover:text-white transition-colors">Our Work</a>
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
        </div>
      </article>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555]">
          <div>
            doble<span className="text-orange-500">AI</span> — Eagle River Valley, Colorado
          </div>
          <div className="flex gap-6">
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/#work" className="hover:text-white transition-colors">Work</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Doble AI LLC</div>
        </div>
      </footer>
    </main>
  );
}
