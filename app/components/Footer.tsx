const FOOTER_LABELS = {
  en: {
    tagline: "Eagle River Valley, Colorado",
    entity: "A service of Eagle River Base Camp / Doble AI",
    base: "/",
    services: "Services",
    work: "Work",
    findability: "/findability-report",
    report: "Findability Report",
    presenceHref: "/doble-presence",
    presence: "Doble Presence",
    blogHref: "/blog",
    translation: "Translation",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    google: "Doble AI on Google",
  },
  es: {
    tagline: "Valle del río Eagle, Colorado",
    entity: "Un servicio de Eagle River Base Camp / Doble AI",
    base: "/es",
    services: "Servicios",
    work: "Trabajo",
    findability: "/es/findability-report",
    report: "Findability Report",
    presenceHref: "/es/doble-presence",
    presence: "Doble Presence",
    blogHref: "/es/blog",
    translation: "Traducción",
    blog: "Blog",
    about: "Nosotros",
    contact: "Contacto",
    google: "Doble AI en Google",
  },
} as const;

export default function Footer({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = FOOTER_LABELS[lang];
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#555]">
        <div>
          doble<span className="text-orange-500">AI</span> · {t.tagline}
          <span className="block text-xs text-[#444] mt-1">
            {t.entity}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`${t.base}#services`} className="hover:text-white transition-colors">{t.services}</a>
          <a href={`${t.base}#work`} className="hover:text-white transition-colors">{t.work}</a>
          <a href={t.findability} className="hover:text-white transition-colors">{t.report}</a>
          <a href={t.presenceHref} className="hover:text-white transition-colors">{t.presence}</a>
          {/* Translation is still English-only; it stays out until it has a twin */}
          {lang === "en" && (
            <a href="/translation" className="hover:text-white transition-colors">{t.translation}</a>
          )}
          <a href={t.blogHref} className="hover:text-white transition-colors">{t.blog}</a>
          <a href={`${t.base}#about`} className="hover:text-white transition-colors">{t.about}</a>
          <a href={`${t.base}#contact`} className="hover:text-white transition-colors">{t.contact}</a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.google.com/maps/place/Doble+AI/@39.9905819,-107.4135804,8z/data=!3m1!4b1!4m6!3m5!1s0xa19bb2c29209c305:0x41ae076704a347ff!8m2!3d39.990582!4d-107.4135804!16s%2Fg%2F11nhhprgby" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label={t.google}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
            </svg>
          </a>
          <a href="https://x.com/dobleai_co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://instagram.com/dobleai_co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61572054159697" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@DobleAICO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
