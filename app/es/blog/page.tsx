import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../lib/posts";
import { pairs } from "../../lib/pairs";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

/* Only the posts that actually exist in Spanish. A Spanish reader arriving
   here should never be handed an English page, so an EN post with no ES twin
   simply is not listed. Newest first, by the post's own dateISO. */
const esPosts = pairs
  .flatMap(([enSlug, esSlug]) => {
    if (!esSlug) return [];
    const post = posts.find((p) => p.slug === esSlug);
    if (!post) return [];
    const enPost = posts.find((p) => p.slug === enSlug);
    return [{ post, enPost }];
  })
  .sort((a, b) => b.post.dateISO.localeCompare(a.post.dateISO));

const featured = esPosts[0];
const rest = esPosts.slice(1);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://dobleai.com/es/blog",
  name: "El blog de Doble AI",
  inLanguage: "es",
  description:
    "Guías prácticas sobre adopción de IA, presencia digital, estrategia competitiva y marketing bilingüe para negocios de Colorado. Escritas en español, no traducidas.",
  url: "https://dobleai.com/es/blog",
  publisher: { "@id": "https://dobleai.com/#organization" },
  blogPost: esPosts.map(({ post }) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://dobleai.com/blog/${post.slug}`,
    datePublished: post.dateISO,
    description: post.excerpt,
    inLanguage: "es",
  })),
};

export const metadata: Metadata = {
  title: "Blog en español",
  description:
    "Guías prácticas sobre IA, presencia digital y marketing bilingüe para negocios de Colorado. Escritas en español por una hablante nativa, no traducidas del inglés.",
  alternates: {
    canonical: "/es/blog",
    languages: {
      es: "https://dobleai.com/es/blog",
      en: "https://dobleai.com/blog",
      "x-default": "https://dobleai.com/blog",
    },
  },
  openGraph: {
    title: "El blog de Doble AI, en español",
    description:
      "Guías prácticas sobre IA, presencia digital y marketing bilingüe para negocios de Colorado. Escritas en español, no traducidas.",
    url: "https://dobleai.com/es/blog",
    locale: "es_ES",
    type: "website",
  },
};

export default function BlogIndexEs() {
  return (
    <main lang="es" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Nav lang="es" toggleHref="/blog" />

      {/* Encabezado */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <a
              href="/blog"
              lang="en"
              hrefLang="en"
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Read the blog in English →
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            Ideas
          </div>
          <h1 className="text-5xl font-bold mb-4">El blog de Doble AI</h1>
          <p className="text-[#a3a3a3] text-lg max-w-2xl">
            Guías prácticas sobre IA, presencia digital y marketing bilingüe
            para negocios de Colorado. Estos {esPosts.length} artículos están
            escritos en español, no traducidos del inglés. Los que todavía solo
            existen en inglés no aparecen aquí.
          </p>
        </div>
      </section>

      {/* El más reciente */}
      {featured && (
        <section className="pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="group flex flex-col md:flex-row bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden transition-colors">
              <Link
                href={`/blog/${featured.post.slug}`}
                className="md:w-[55%] shrink-0 md:aspect-auto aspect-[1200/630] overflow-hidden bg-[#0a0a0a] flex items-center"
              >
                <img
                  src={featured.post.coverImage}
                  alt={featured.post.coverAlt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-white bg-orange-500 rounded-full px-3 py-1 tracking-widest uppercase">
                    Lo más reciente
                  </span>
                  <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">
                    {featured.post.category}
                  </span>
                  <span className="text-[#555] text-xs">·</span>
                  <span className="text-[#555] text-xs">
                    {featured.post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${featured.post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 group-hover:text-orange-400 transition-colors">
                    {featured.post.title}
                  </h2>
                </Link>
                <p className="text-[#a3a3a3] leading-relaxed mb-6">
                  {featured.post.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/blog/${featured.post.slug}`}
                    className="text-orange-500 font-medium hover:translate-x-1 transition-transform"
                  >
                    Leer →
                  </Link>
                  {featured.enPost && (
                    <Link
                      href={`/blog/${featured.enPost.slug}`}
                      lang="en"
                      hrefLang="en"
                      className="text-[#a3a3a3] text-sm hover:text-orange-400 transition-colors"
                    >
                      Read in English →
                    </Link>
                  )}
                  <span className="text-[#555] text-xs ml-auto">
                    {featured.post.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* El resto */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {rest.map(({ post, enPost }) => (
            <div
              key={post.slug}
              className="group flex flex-col bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-8 pt-8 flex flex-col flex-1">
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
                </div>
              </Link>
              <div className="px-8 pb-8 flex items-center justify-between">
                <span className="text-[#555] text-xs">{post.date}</span>
                <div className="flex items-center gap-5">
                  {enPost && (
                    <Link
                      href={`/blog/${enPost.slug}`}
                      lang="en"
                      hrefLang="en"
                      className="text-[#a3a3a3] text-xs hover:text-orange-400 transition-colors"
                    >
                      Read in English
                    </Link>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-orange-500 text-sm font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Leer →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Los que faltan en español */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto border-t border-white/[0.06] pt-12">
          <p className="text-[#a3a3a3] leading-relaxed max-w-2xl">
            Hay algunos artículos que todavía solo existen en inglés. No los
            listamos aquí porque mandarte a una página en inglés desde un índice
            en español no es servicio bilingüe, es una traducción pendiente.
            Están en{" "}
            <a
              href="/blog"
              lang="en"
              hrefLang="en"
              className="text-orange-500 hover:text-orange-400"
            >
              el blog en inglés
            </a>{" "}
            si quieres verlos, y sus versiones en español van llegando.
          </p>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
