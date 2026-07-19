"use client";
import { useState } from "react";

const LABELS = {
  en: {
    services: "Services",
    work: "Our Work",
    projects: "Projects",
    translation: "Translation",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    cta: "Free Audit",
    toggle: "ES",
    toggleHref: "/es",
    toggleTitle: "Ver este sitio en español",
    base: "/",
  },
  es: {
    services: "Servicios",
    work: "Nuestro trabajo",
    projects: "Proyectos",
    translation: "Traducción",
    blog: "Blog",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Auditoría gratuita",
    toggle: "EN",
    toggleHref: "/",
    toggleTitle: "View this site in English",
    base: "/es",
  },
} as const;

export default function Nav({ lang = "en" }: { lang?: "en" | "es" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const t = LABELS[lang];

  const links = [
    { href: `${t.base}#services`, label: t.services },
    { href: `${t.base}#work`, label: t.work },
    { href: `${t.base}#projects`, label: t.projects },
    { href: "/translation", label: t.translation },
    { href: "/blog", label: t.blog },
    { href: `${t.base}#about`, label: t.about },
    { href: `${t.base}#contact`, label: t.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={t.base} className="flex items-center">
          <img src="/logo.svg" alt="Doble AI" className="h-8 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a3a3a3]">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={t.toggleHref}
            hrefLang={lang === "en" ? "es" : "en"}
            lang={lang === "en" ? "es" : "en"}
            title={t.toggleTitle}
            className="border border-white/20 hover:border-orange-500/60 hover:text-white text-[#a3a3a3] text-sm font-semibold px-3 py-2 rounded-full transition-colors"
          >
            {t.toggle}
          </a>
          <a
            href={`${t.base}#contact`}
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            {t.cta}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4 text-sm text-[#a3a3a3]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className="hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={t.toggleHref}
            hrefLang={lang === "en" ? "es" : "en"}
            lang={lang === "en" ? "es" : "en"}
            onClick={close}
            className="hover:text-white transition-colors py-1 font-semibold"
          >
            {lang === "en" ? "Español →" : "English →"}
          </a>
        </div>
      )}
    </nav>
  );
}
