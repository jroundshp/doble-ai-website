// Canonical EN/ES pairing for blog posts. The blog index renders pairs side by
// side in array order; the post page uses the same data for hreflang alternates
// and the visible cross-language link. A post absent from this array is
// invisible on the blog index.
export const pairs: [string, string?][] = [
  ["rebuilding-your-business-around-ai", "reestructurando-tu-negocio-con-ia"],
  ["human-plus-ai-is-the-magic", "humano-mas-ia-es-la-magia"],
  ["your-business-is-great-nobody-knows-it-exists", "tu-negocio-es-excelente-nadie-lo-sabe"],
  ["your-ai-should-know-your-business-by-now", "tu-ia-ya-deberia-conocer-tu-negocio"],
  ["why-ai-needs-human-context", "ia-escala-nosotros-contexto"],
  ["bilingual-ai-receptionist-small-business", "recepcionista-ia-bilingue-pequenos-negocios"],
  ["google-business-profile-ai-asset", "perfil-google-business-activo-ia"],
  ["ai-traffic-converts-better-than-paid-search", "trafico-ia-convierte-mejor-que-busqueda-pagada"],
  ["peruvian-spanish-the-neutral-accent-advantage", "espanol-peruano-la-ventaja-del-acento-neutro"],
  ["bilingual-marketing-why-translation-is-not-enough", "marketing-bilingue-por-que-la-traduccion-no-es-suficiente"],
  ["vail-real-estate-mexican-buyers-ai-search", "mercado-latino-mexicano-montana-colorado-ia"],
  ["geo-vs-seo", "geo-vs-seo-espanol"],
  ["competitive-analysis", "analisis-competitivo"],
  ["digital-presence-audit", "presencia-digital-vendedor"],
  ["bilingual-advantage-colorado"],
  ["claude-code-vs-cowork"],
  ["ai-learning-curve"],
  ["ai-roadmap-business-owners"],
];

const enToEs = new Map<string, string>();
const esToEn = new Map<string, string>();
for (const [en, es] of pairs) {
  if (es) {
    enToEs.set(en, es);
    esToEn.set(es, en);
  }
}

export function getLang(slug: string): "en" | "es" {
  return esToEn.has(slug) ? "es" : "en";
}

export function getTranslation(
  slug: string
): { slug: string; lang: "en" | "es" } | null {
  const es = enToEs.get(slug);
  if (es) return { slug: es, lang: "es" };
  const en = esToEn.get(slug);
  if (en) return { slug: en, lang: "en" };
  return null;
}
