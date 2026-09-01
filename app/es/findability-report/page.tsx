import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "El Findability Report: qué revisamos y por qué",
  description:
    "El método completo detrás de nuestro diagnóstico de 1.500 dólares: cada revisión estructural que hacemos, un barrido de 4 motores de IA con puntaje sobre 10, perfil de Google Business y panorama competitivo. Publicado entero.",
  alternates: {
    canonical: "/es/findability-report",
    languages: {
      es: "https://dobleai.com/es/findability-report",
      en: "https://dobleai.com/findability-report",
      "x-default": "https://dobleai.com/findability-report",
    },
  },
  openGraph: {
    title: "El Findability Report: qué revisamos y por qué | Doble AI",
    description:
      "Cada revisión estructural que hacemos, un barrido de 4 motores de IA con puntaje sobre 10, perfil de Google Business y panorama competitivo. El método entero, publicado.",
    url: "https://dobleai.com/es/findability-report",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "El Findability Report de Doble AI",
      },
    ],
  },
};

/* ── El método ──
   En el orden en que corre, que es también el orden en que los problemas se
   bloquean entre sí. No tiene sentido calificar cómo responde la IA sobre un
   negocio cuyas respuestas no están en el HTML servido, así que la base de
   legibilidad va primero y todo lo demás depende de él. */
const PHASES = [
  {
    num: "01",
    name: "¿Las máquinas pueden leerte?",
    lede:
      "Un cero en visibilidad de IA significa una de dos cosas completamente distintas: los motores leyeron tu sitio y eligieron a otro, o los motores no pudieron leer tu sitio. La lista de arreglos sale mal si no distinguimos esas dos, así que esto se resuelve primero.",
    checks: [
      ["Respuestas en el HTML servido", "Pedimos tus páginas como lo hace un rastreador y confirmamos que el texto de tus servicios y tus preguntas frecuentes de verdad esté en el HTML que vuelve, y no inyectado después por JavaScript. Un sitio que auditamos tenía 114 de 114 respuestas ausentes del documento servido."],
      ["Indexación, página por página", "Cada URL de tu sitemap contrastada con Search Console. No un porcentaje del sitio, un veredicto por página."],
      ["Canónica que no coincide", "La URL de tu sitemap comparada carácter por carácter contra la canónica que sirve la página. Una sola diagonal al final hizo que un sitio reportara 19% de cobertura cuando la verdad era 93%."],
      ["Páginas varadas", "Páginas sin indexar cuyos únicos enlaces entrantes vienen de páginas que tampoco están indexadas. Contar enlaces entrantes dice que están bien. Solo cruzar el grafo de enlaces con el estado de indexación las encuentra."],
      ["Hosts y formas de URL duplicados", "Si el dominio con y sin www responden los dos, y si una página se sirve con y sin diagonal final sin redirección entre ambas."],
      ["Cadenas de redirección, bucles y 302", "Redirecciones de varios saltos que sangran autoridad, redirecciones temporales donde debería haber una permanente, y URLs que nunca resuelven."],
      ["Integridad de hreflang", "Para sitios bilingües: si las alternativas de idioma se apuntan entre sí, si apuntan a URLs que tu sitemap lista, y si existe un x-default. Google descarta en silencio una alternativa que no es recíproca."],
      ["Core Web Vitals", "Largest Contentful Paint, desplazamiento de diseño y tiempo de bloqueo, tomados de PageSpeed Insights."],
      ["Verificación en Bing", "Se revisa aparte de Google, porque ChatGPT apoya su búsqueda en el índice de Bing. Una práctica que solo mira Google está medio ciega."],
    ],
  },
  {
    num: "02",
    name: "¿La gente puede encontrarte?",
    lede:
      "Descubrimiento estructural. Casi nada de lo que aparece aquí está roto: está sin enlazar, sin enviar o duplicado, y por eso nadie lo nota hasta que alguien recorre el grafo de enlaces completo.",
    checks: [
      ["Páginas huérfanas y enlazado pobre", "Páginas sin ningún enlace interno entrante, o con exactamente uno. Un contratista de 191 millones de dólares que auditamos tenía 28 páginas huérfanas, incluidos todos sus casos de éxito."],
      ["Higiene del sitemap", "URLs que no devuelven 200, páginas noindex enviadas de todos modos, páginas enlazadas internamente pero nunca enviadas, y fechas lastmod viejas o en el futuro."],
      ["Títulos y descripciones", "Faltantes, duplicados o cortados, revisados contra lo que el servidor de verdad devuelve y no contra lo que la plantilla parece poner. La herencia del framework los rellena en silencio en las páginas hijas y un rastreador genérico los reporta como presentes."],
      ["Contenido delgado", "Páginas de menos de 350 palabras a las que se les está pidiendo posicionar."],
      ["Oportunidades de segunda página", "Consultas donde ya apareces entre la posición 4 y la 20, con impresiones reales y casi ningún clic. Es la ganancia más barata en búsqueda, porque la página ya posiciona y no hay que escribir nada nuevo."],
      ["Canibalización", "Una consulta, dos páginas tuyas compitiendo. Google elige una, muchas veces la más débil."],
      ["Perfil de Google Business", "Si existe, si está reclamado, y si la dirección, los horarios, las categorías y las áreas de servicio coinciden con tu sitio. Los datos que no cuadran entre plataformas debilitan toda la señal local."],
    ],
  },
  {
    num: "03",
    name: "¿Los motores de IA te recomiendan?",
    lede:
      "La parte que nadie más corre. Cinco preguntas que haría un comprador real, puestas a 4 motores en sesiones limpias, calificadas y con captura de pantalla. La pieza más útil suele ser la captura donde un motor recomienda a tu competencia.",
    checks: [
      ["Cinco preguntas de intención de compra", "Categoría y ubicación, intención de problema, recomendación por caso de uso, una revisión directa de marca y una pregunta real previa a la compra. Más la versión en español donde el mercado es de verdad bilingüe, y no donde no lo es."],
      ["Cuatro motores", "ChatGPT, las vistas generales de IA de Google, Perplexity y Grok. Sesiones limpias, sin personalización de una cuenta."],
      ["Puntaje sobre 10", "Cada par de pregunta y motor se califica como ausente, mencionado o recomendado. Veinte casillas, cuarenta puntos, un número que puedes seguir mes con mes."],
      ["A quién recomiendan en tu lugar", "Anotamos los competidores que aparecen cuando tú no. Esa lista suele ser la página más incómoda del informe."],
      ["Mapeo de fuentes citadas", "Qué fuentes de terceros cita cada motor: directorios, prensa local, sitios de reseñas, Reddit, páginas de la cámara de comercio. Se agregan en una lista ordenada de las fuentes en las que la IA ya confía en tu mercado, y eso se convierte en un plan concreto fuera del sitio en lugar de una instrucción vaga de construir autoridad."],
      ["Menciones de marca, no solo citas", "Una mención sin enlace también cuenta, y las menciones sin enlace son la señal de visibilidad en IA con más peso según quienes miden esto a diario."],
      ["Repeticiones de estabilidad", "Las respuestas de IA son probabilísticas. Cada pregunta que puntúa se corre dos veces, y lo que aparece una sola vez se marca como inestable en lugar de contarse como una victoria."],
    ],
  },
  {
    num: "04",
    name: "¿Quién te está ganando y dónde está el hueco?",
    lede:
      "La mitad competitiva. No una lista de competidores que ya conoces, sino el terreno concreto que ocupan y el terreno que todavía no ocupa nadie.",
    checks: [
      ["Tu competencia real", "Quién de verdad aparece y recibe la recomendación para las preguntas de tus compradores, que muchas veces no es con quien crees que compites."],
      ["Dónde estás perdiendo", "Consulta por consulta, página por página, con el motivo anotado."],
      ["Espacio sin reclamar", "Las preguntas que hace tu mercado y que ni tú ni tu competencia responden. De ahí sale el plan de contenido."],
    ],
  },
];

const faqs = [
  {
    q: "¿En qué se diferencia esto de una herramienta gratuita de auditoría SEO?",
    a: "Las herramientas automáticas reportan lo que un rastreador ve en una página a la vez. Casi todo lo que encontramos es relacional: una página que está bien por sí sola pero solo recibe enlaces de páginas que Google no indexó, una canónica que difiere del sitemap por un carácter, o respuestas de preguntas frecuentes que existen en el navegador pero no en el HTML servido. Esos defectos son invisibles para un escaneo página por página y son justo los que están frenando el sitio. El barrido de visibilidad en IA no tiene equivalente gratuito.",
  },
  {
    q: "¿Por qué revisan Bing aparte de Google?",
    a: "Porque ChatGPT apoya sus resultados de búsqueda en el índice de Bing. Si tu sitio es invisible para Bing, es invisible dentro de la herramienta que cada vez más compradores consultan primero, por bien que aparezcas en Google. Casi ninguna auditoría lo mira.",
  },
  {
    q: "¿Qué recibo exactamente?",
    a: "Un informe escrito, entregado como página web privada y no como PDF, para que las capturas se lean y los enlaces funcionen. Trae cada hallazgo, la evidencia detrás, un puntaje sobre 10 de visibilidad en IA y una lista de arreglos por prioridad que dice qué hacer primero y por qué. Sin presentación de ventas. Puedes entregárselo a quien administre tu sitio y trabajarlo sin nosotros.",
  },
  {
    q: "¿Cuánto tarda y cuánto cuesta?",
    a: "De 5 a 7 días, y 1.500 dólares. Si continúas con Doble Presence, esos 1.500 se acreditan completos a tu primer mes, así que el diagnóstico termina saliendo gratis si decides trabajar con nosotros. Si prefieres llevarte el informe a otro equipo, es un resultado legítimo y no hay ninguna atadura.",
  },
  {
    q: "¿Hay una versión gratuita?",
    a: "Sí. El diagnóstico gratuito es una sola página que cubre si tu sitio está indexado, si tu perfil de Google Business está reclamado y completo, y los problemas estructurales evidentes. Llega en 2 días hábiles y no compromete a nada. Es una respuesta de verdad a la pregunta de si hay algo gravemente mal, no un anzuelo.",
  },
  {
    q: "¿El informe se hace en español?",
    a: "Sí, y no es una traducción del informe en inglés. Donde tu mercado es de verdad bilingüe, el barrido de visibilidad en IA también se corre en español, contra las preguntas que los compradores hispanohablantes escriben de verdad, y el informe se escribe en español. Donde tu mercado no es bilingüe, no fingimos lo contrario y no te lo cobramos.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dobleai.com/es/findability-report#service",
      name: "El Findability Report",
      serviceType: "Auditoría de presencia digital y visibilidad en IA",
      provider: { "@id": "https://dobleai.com/#organization" },
      inLanguage: "es",
      url: "https://dobleai.com/es/findability-report",
      description:
        "Diagnóstico completo de visibilidad: revisiones estructurales y de indexación, un barrido de 4 motores de IA con puntaje sobre 10 y capturas de pantalla, revisión del perfil de Google Business y análisis del panorama competitivo. Entregado por escrito en 5 a 7 días.",
      offers: {
        "@type": "Offer",
        price: "1500",
        priceCurrency: "USD",
        description:
          "Acreditado completo al primer mes de Doble Presence si el trabajo continúa.",
      },
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://dobleai.com/es/findability-report#faq",
      inLanguage: "es",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const CHECK_COUNT = PHASES.reduce((n, p) => n + p.checks.length, 0);

export default function FindabilityReportEs() {
  return (
    <main lang="es" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav lang="es" />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="/findability-report"
              lang="en"
              hrefLang="en"
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Read this page in English →
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-6 h-px bg-orange-500" />
            El método, publicado entero
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            El Findability{" "}<br />
            <span className="text-orange-500">Report.</span>
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed mb-10">
            Casi todos los negocios que auditamos son excelentes y en la
            práctica invisibles. Ser bueno y ser encontrable son dos problemas
            distintos, y solo uno de los dos aparece en tus ingresos. Esto es
            cada revisión que hacemos para decirte cuál de los dos tienes,
            publicada para que veas exactamente qué compras con 1.500 dólares
            antes de gastarlos.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#a3a3a3] mb-12">
            <span>
              <span className="text-orange-500 font-semibold">{CHECK_COUNT}</span>{" "}
              revisiones
            </span>
            <span>
              <span className="text-orange-500 font-semibold">4</span> motores de IA
            </span>
            <span>
              <span className="text-orange-500 font-semibold">5&ndash;7</span> días
            </span>
            <span>
              <span className="text-orange-500 font-semibold">1.500</span> dólares,
              acreditados a tu primer mes
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/es#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Empieza con el diagnóstico gratuito
            </a>
            <a
              href="#method"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Leer el método
            </a>
            <a
              href="/es/doble-presence"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Qué es Doble Presence
            </a>
          </div>
        </div>
      </section>

      {/* ── Por qué publicarlo ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-6">
            ¿Por qué publicar el método completo?
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-5">
            Porque &ldquo;un diagnóstico completo&rdquo; es una afirmación y una
            lista de revisiones es evidencia. Todas las firmas de esta categoría
            dicen que auditan tu sitio. Casi ninguna te dice qué significa eso
            antes de que pagues.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            Hay una segunda razón. Construimos estas revisiones primero para
            nosotros, para correrlas contra nuestros propios sitios y los de
            nuestros clientes, y la mayoría existe porque algo se rompió y nada
            lo detectó. La canónica con diagonal de más, la página varada, las
            respuestas ausentes del HTML servido: cada una está en la lista
            porque le costó tráfico real a alguien antes de que a nadie se le
            ocurriera mirar.
          </p>
        </div>
      </section>

      {/* ── El método ── */}
      <section id="method" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            Qué revisamos
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Cuatro fases, en este orden.
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mb-16 leading-relaxed">
            El orden importa tanto como la lista. Cada fase condiciona la
            siguiente, así que un problema en la fase uno deja sin sentido toda
            medición posterior hasta que se arregle.
          </p>

          <div className="space-y-16">
            {PHASES.map((phase) => (
              <div key={phase.num}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-orange-500 font-bold tracking-widest text-sm">
                    {phase.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {phase.name}
                  </h3>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed mb-8 max-w-2xl">
                  {phase.lede}
                </p>
                <div className="space-y-px">
                  {phase.checks.map(([name, detail]) => (
                    <div
                      key={name}
                      className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] p-6 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      <h4 className="font-semibold mb-2">{name}</h4>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué recibes ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-8">
            Qué recibes exactamente.
          </h2>
          <ul className="space-y-5 text-[#a3a3a3] text-lg leading-relaxed list-disc pl-5 marker:text-orange-500">
            <li>
              Un informe escrito como página web privada, no como PDF, para que
              las capturas se lean y cada enlace funcione.
            </li>
            <li>
              Cada hallazgo con su evidencia. Reportamos lo que está visible y lo
              verificamos en la fuente. Si algo no se puede ver, el informe dice
              &ldquo;no visible&rdquo;, nunca &ldquo;no existe&rdquo;.
            </li>
            <li>
              Un puntaje de visibilidad en IA sobre 10, con las capturas que lo
              respaldan, que se puede volver a correr cada mes para ver el
              movimiento.
            </li>
            <li>
              Una lista de arreglos por prioridad, escrita para quien administre
              tu sitio, incluidos los que puedes hacer sin nosotros.
            </li>
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Lo que la gente pregunta antes de comprar.
          </h2>
          <div className="space-y-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-xl font-semibold mb-3">{q}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Empieza con el diagnóstico gratuito.
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-10 leading-relaxed">
            Una página sobre dónde estás parado, de vuelta en 2 días hábiles. Si
            aparece algo que amerite el informe completo, te lo decimos. Si no,
            también te lo decimos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/es#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Solicitar el diagnóstico gratuito
            </a>
            <a
              href="tel:+19704064630"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Llamar al (970) 406-4630
            </a>
          </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
