"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FORM_LABELS = {
  en: {
    thanksTitle: "Thank you, we'll be in touch.",
    thanksBody:
      "Your free audit request came through. We'll review your business and reach out within 1–2 business days with what we find.",
    redirecting: "Taking you back to the home page…",
    name: "Your name",
    email: "Email address",
    business: "Your business name",
    message: "Tell us about your business and what you're trying to grow...",
    sending: "Sending…",
    submit: "Request my free audit",
    home: "/",
  },
  es: {
    thanksTitle: "¡Gracias! Estaremos en contacto.",
    thanksBody:
      "Tu solicitud de auditoría gratuita llegó bien. Revisaremos tu negocio y te contactaremos en 1–2 días hábiles con lo que encontremos.",
    redirecting: "Regresando a la página principal…",
    name: "Tu nombre",
    email: "Correo electrónico",
    business: "El nombre de tu negocio",
    message: "Cuéntanos sobre tu negocio y qué quieres hacer crecer...",
    sending: "Enviando…",
    submit: "Solicitar mi auditoría gratuita",
    home: "/es",
  },
} as const;

export default function AuditForm({ lang = "en" }: { lang?: "en" | "es" }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const t = FORM_LABELS[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mnjopzbw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    setSubmitting(false);

    setTimeout(() => {
      router.push(t.home);
    }, 4000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{t.thanksTitle}</h3>
          <p className="text-[#a3a3a3]">{t.thanksBody}</p>
        </div>
        <p className="text-[#555] text-sm">{t.redirecting}</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder={t.name}
          className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t.email}
          className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
        />
      </div>
      <input
        type="text"
        name="business"
        placeholder={t.business}
        className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors"
      />
      <textarea
        rows={4}
        name="message"
        placeholder={t.message}
        className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-[#666] focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-full transition-colors mt-2"
      >
        {submitting ? t.sending : t.submit}
      </button>
    </form>
  );
}
