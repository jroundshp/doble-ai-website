import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Doble Presence: qué trae el mes",
  description:
    "El servicio mensual que opera tu sitio después del diagnóstico: publicación bilingüe, esquema y estructura correctos para los motores de IA, monitoreo y el espacio de trabajo con IA que aprende tu negocio. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
  alternates: {
    canonical: "/es/doble-presence",
    languages: {
      es: "https://dobleai.com/es/doble-presence",
      en: "https://dobleai.com/doble-presence",
      "x-default": "https://dobleai.com/doble-presence",
    },
  },
  openGraph: {
    title: "Doble Presence: qué trae el mes | Doble AI",
    description:
      "Construimos o reparamos el sitio, y después lo operamos. Publicación bilingüe, esquema correcto, monitoreo y el espacio de trabajo con IA que aprende tu negocio.",
    url: "https://dobleai.com/es/doble-presence",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doble Presence de Doble AI",
      },
    ],
  },
};

/* ── Qué trae el mes ──
   En el orden en que el trabajo pasa de verdad: la construcción o la
   reparación va primero porque todo lo demás se publica encima de algo. El
   espacio de trabajo va al final a propósito: así se hace el mes, no es una
   línea que se cotiza aparte. */
const WORK = [
  {
    num: "01",
    name: "La construcción, o la reparación",
    lede:
      "El primer mes casi nunca es publicar. Es arreglar lo que encontró el Findability Report, o construir el sitio que debió existir desde el principio.",
    items: [
      ["El sitio mismo", "Lo construimos, o reparamos el tuyo. Renderizado en el servidor, rápido y estructurado para que las respuestas que busca un comprador estén en el HTML que recibe un rastreador, no inyectadas después por JavaScript."],
      ["Primero los arreglos estructurales", "Canónicas, redirecciones, indexación, páginas huérfanas, higiene del sitemap, reciprocidad de hreflang. La mitad poco vistosa, y la que decide si algo de lo que publiques después llega a verse."],
      ["Perfil de Google Business", "Reclamado, completado y puesto de acuerdo con el sitio: dirección, horarios, categorías, áreas de servicio. Un perfil que contradice tu sitio debilita a los dos."],
    ],
  },
  {
    num: "02",
    name: "La publicación",
    lede:
      "Después el sitio empieza a decir cosas. En un idioma o en dos, y si son dos, escritas dos veces en lugar de pasadas por un traductor.",
    items: [
      ["Pares reales, no traducciones", "El contenido en español lo escribe en español una hablante nativa, y después se contrasta con el inglés por sentido y no por palabras. Una página que se lee como traducción termina tratada como traducción."],
      ["Contenido que los motores de IA pueden citar", "Páginas de servicio, preguntas frecuentes y guías que responden lo que tus compradores realmente preguntan, con sus palabras, y con el esquema que le permite a un motor extraer la respuesta limpia."],
      ["Esquema y estructura, mantenidos", "FAQPage, Service, LocalBusiness, Article y el grafo de hreflang, mantenidos correctos mientras el sitio crece. Los datos estructurados son una base de legibilidad, no un truco de posicionamiento: deciden si una máquina puede leerte siquiera."],
      ["Enlazado interno", "Cada página nueva enlazada desde algo que ya está indexado. Una página a la que solo apuntan páginas sin indexar es una página que nadie encuentra."],
    ],
  },
  {
    num: "03",
    name: "El monitoreo",
    lede:
      "Las fallas que más importan son las que no arrojan ningún error. El sitio carga, el formulario se ve bien, y no llega nada.",
    items: [
      ["Salud del sitio, a diario", "Disponibilidad, redirecciones, deriva de canónicas, validez del sitemap y el grafo de enlaces. Construimos estas revisiones primero para nuestras propias propiedades, y la mayoría existe porque algo se rompió y nada lo detectó."],
      ["Search Console y GA4", "Indexación y cobertura vigiladas por página y no como un porcentaje del sitio, con el tráfico leído contra eso para que una caída llegue con su explicación."],
      ["Visibilidad en IA, otra vez", "El barrido de 4 motores del Findability Report, que repetimos para que el puntaje sobre 10 muestre movimiento en lugar de quedarse en un PDF."],
      ["Formularios y teléfono", "El camino de interesado a contactable, probado en lugar de asumido."],
    ],
  },
  {
    num: "04",
    name: "El espacio de trabajo por debajo",
    lede:
      "Así se hace el mes. Va incluido en Presence y no se cotiza aparte, porque no es un producto que pudieras operar sin que nosotros hagamos el trabajo encima.",
    items: [
      ["Memoria persistente", "Tus clientes, tus estándares, la voz de tu marca y las decisiones ya tomadas, guardadas entre sesiones. Nada empieza de cero y nada se vuelve a discutir."],
      ["Flujos de trabajo acumulados", "El método que entrega tu mes se afinó en cada proyecto anterior. Recibes esa experiencia sin pagar la curva de aprendizaje."],
      ["Agentes bilingües", "El mismo sistema publica y revisa en los 2 idiomas, y por eso el español se mantiene nativo en lugar de irse deslizando hacia un registro traducido."],
      ["Cuando el mes lo pide, un agente de voz", "LUCI contesta nuestra propia línea en el (970) 406-4630. Llama y estás escuchando cómo suena un agente telefónico dentro de Presence. Es una demostración, no una compra aparte."],
    ],
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta Doble Presence?",
    a: "Desde 2.500 dólares al mes en inglés y desde 3.500 al mes bilingüe. Los precios son fijos y se dicen desde el principio, y no cobramos por hora. Si empezaste con el Findability Report, sus 1.500 dólares se acreditan completos a tu primer mes.",
  },
  {
    q: "¿El espacio de trabajo con IA se cobra aparte?",
    a: "No. El espacio de trabajo es la forma en que opera el mes, no algo que se cotiza al lado. Guarda tu negocio, tus estándares y tu voz, y es la razón por la que el trabajo se acumula en lugar de reiniciarse. No existe una versión de Presence sin él ni una versión de él que se venda sola.",
  },
  {
    q: "¿Tengo que comprar primero el Findability Report?",
    a: "No, pero a casi todos les conviene. El informe nos dice en qué debería gastarse un mes, y su costo se descuenta completo de tu primer mes, así que comprarlo primero no cuesta nada extra. Si tu sitio ya está bien y tienes claro qué quieres construir, podemos empezar directo en Presence.",
  },
  {
    q: "¿Qué es LUCI y viene incluida?",
    a: "LUCI es el agente de voz bilingüe con IA que contesta nuestra propia línea en el (970) 406-4630. Es una demostración en vivo de lo que Presence puede poner en un teléfono, no un producto con precio propio ni un servicio de recepción al que te suscribes. Cuando el mes de un cliente pide un agente telefónico, se construye dentro de Presence.",
  },
  {
    q: "¿Tengo que hacer la versión bilingüe?",
    a: "No. No metemos español a la fuerza en un mercado que no tiene base hispanohablante, y te lo decimos si el tuyo no la tiene. Presence solo en inglés es el mismo trabajo por 2.500 dólares al mes. Donde el mercado sí es bilingüe, la mitad en español suele ser el terreno menos disputado del tablero.",
  },
  {
    q: "¿De cuánto tiempo es el compromiso?",
    a: "Presence es un servicio mensual y se acumula, así que vale más en el mes nueve que en el mes dos. Eso es un argumento para quedarse, no una cláusula de permanencia. Si paras, el sitio, el contenido y el perfil de Google son tuyos.",
  },
  {
    q: "¿Quién hace el trabajo?",
    a: "Nosotros. Doble AI son John y Gisella Rounds, en Gypsum, Colorado. Gisella es peruana, hablante nativa de español, y dirige el trabajo en español y la revisión cultural, que es la razón por la que el español se lee como escrito en español. Nada se subcontrata a una fábrica de contenido.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dobleai.com/es/doble-presence#service",
      name: "Doble Presence",
      serviceType: "Servicio mensual de presencia digital e implementación de IA",
      provider: { "@id": "https://dobleai.com/#organization" },
      url: "https://dobleai.com/es/doble-presence",
      inLanguage: "es",
      description:
        "Un servicio mensual: construimos o reparamos el sitio y después lo operamos. Publicación bilingüe como pares reales, esquema y estructura correctos para los motores de IA, monitoreo de salud del sitio y visibilidad en buscadores, y el espacio de trabajo con IA que aprende el negocio. Incluye la implementación de IA; no se cotiza aparte.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "2500",
          priceCurrency: "USD",
          unitCode: "MON",
        },
        description:
          "Desde 2.500 dólares al mes en inglés y desde 3.500 bilingüe. Los 1.500 dólares del Findability Report se acreditan completos al primer mes.",
      },
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://dobleai.com/es/doble-presence#faq",
      inLanguage: "es",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function DoblePresenceEs() {
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
              href="/doble-presence"
              lang="en"
              hrefLang="en"
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Read this page in English →
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-6 h-px bg-orange-500" />
            El segundo producto
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            Doble{" "}<br />
            <span className="text-orange-500">Presence.</span>
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed mb-10">
            El Findability Report te dice dónde estás parado. Presence es lo que
            pasa después: construimos o reparamos el sitio y después lo
            operamos, mes a mes, en un idioma o en dos. Esta página es lo que de
            verdad trae el mes, escrito antes de que lo compres.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#a3a3a3] mb-12">
            <span>
              <span className="text-orange-500 font-semibold">2.500</span> dólares
              al mes, en inglés
            </span>
            <span>
              <span className="text-orange-500 font-semibold">3.500</span> dólares
              al mes, bilingüe
            </span>
            <span>
              <span className="text-orange-500 font-semibold">Espacio de trabajo</span>{" "}
              incluido, no cotizado aparte
            </span>
            <span>
              <span className="text-orange-500 font-semibold">1.500</span> del
              informe, acreditados al primer mes
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
              href="#month"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Qué trae el mes
            </a>
            <a
              href="/es/findability-report"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Empieza por el informe
            </a>
          </div>
        </div>
      </section>

      {/* ── Por qué un mes ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight mb-6">
            Por qué esto es un mes y no un proyecto.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-5">
            Un sitio no es algo que se termina. Google lo vuelve a rastrear, los
            motores de IA vuelven a responder la pregunta cada vez que alguien la
            hace, la competencia publica, y una actualización del framework mueve
            una canónica en silencio. Construir es la parte barata. Mantenerlo
            correcto es donde está el retorno, y ese trabajo solo existe mes a
            mes.
          </p>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            Hay una segunda razón, y nos importa más. Las piezas son baratas. Los
            meses de afinación por debajo no lo son. Todo lo que sabemos de tu
            negocio se acumula en un solo lugar, y de aquí a dos meses el
            trabajo sale mejor por lo que nos enseñó este. Un proyecto termina.
            Esto se acumula.
          </p>
        </div>
      </section>

      {/* ── Qué trae el mes ── */}
      <section id="month" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            Qué trae el mes
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Cuatro partes, y la última es cómo se hacen las otras tres.
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mb-16 leading-relaxed">
            La construcción va primero porque todo lo demás se publica encima de
            algo. El espacio de trabajo va al final a propósito: viene incluido
            en Presence y no es un producto que compres al lado.
          </p>

          <div className="space-y-16">
            {WORK.map((phase) => (
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
                  {phase.items.map(([name, detail]) => (
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

      {/* ── La demostración en vivo ── */}
      <section className="py-20 px-6 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/[0.08] border border-orange-500/20 rounded-2xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-6 h-px bg-orange-500" />
                Demostración en vivo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Escucha al espacio de trabajo contestar un teléfono.
              </h2>
              <p className="text-[#a3a3a3] leading-relaxed max-w-md mb-2">
                LUCI contesta nuestra propia línea, 24/7. Lucía en español, Lucy
                en inglés, cambiando a mitad de la llamada.
              </p>
              <p className="text-[#a3a3a3] leading-relaxed max-w-md">
                Así contesta el teléfono Doble Presence. Es una demostración que
                puedes marcar, no un producto con precio propio.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-center gap-4 shrink-0">
              <a
                href="tel:+19704064630"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                (970) 406-4630
              </a>
              <p className="text-xs text-[#a3a3a3]">
                Llamada gratuita · Español e inglés · 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Lo que la gente pregunta antes de firmar.
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
            Una página sobre dónde estás parado, de vuelta en 2 días hábiles.
            Casi nadie debería contratar un servicio mensual sin ver antes esa página.
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
