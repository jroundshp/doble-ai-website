import Link from "next/link";

/* Shared UI for the private /aspen pitch pages (hub, audit, concept).
   These pages are noindex and deliberately absent from the sitemap and site nav. */

export function PitchNav({ current }: { current: "hub" | "audit" | "concept" }) {
  const tabs = [
    { key: "hub", label: "Overview", href: "/aspen" },
    { key: "audit", label: "The Audit", href: "/aspen/audit" },
    { key: "concept", label: "The Concept", href: "/aspen/concept" },
  ] as const;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="https://dobleai.com"
          className="text-lg font-bold tracking-tight"
          title="Doble AI"
        >
          doble<span className="text-orange-500">AI</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {tabs.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              className={
                t.key === current
                  ? "text-sm font-semibold text-white bg-white/[0.08] px-4 py-2 rounded-full"
                  : "text-sm text-[#a3a3a3] hover:text-white px-4 py-2 rounded-full transition-colors"
              }
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
      <span className="w-6 h-px bg-orange-500" />
      {children}
    </div>
  );
}

export function PitchFooter() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555]">
        <div>
          doble<span className="text-orange-500">AI</span> · Eagle River Valley,
          Colorado ·{" "}
          <a
            href="https://dobleai.com"
            className="hover:text-[#a3a3a3] transition-colors underline underline-offset-4"
          >
            dobleai.com
          </a>
        </div>
        <div className="text-center md:text-right">
          Prepared privately for Dennis Burns. This page is not indexed and not
          linked from anywhere public.
        </div>
      </div>
    </footer>
  );
}

export function NextStep({
  href,
  label,
  sub,
}: {
  href: string;
  label: string;
  sub: string;
}) {
  return (
    <section className="py-20 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#a3a3a3] mb-6">{sub}</p>
        <Link
          href={href}
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
