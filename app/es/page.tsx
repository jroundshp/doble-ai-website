import type { Metadata } from "next";
import Image from "next/image";
import johnRoundsPhoto from "../../public/john-rounds.jpeg";
import johnGisellaPhoto from "../../public/john-gisella.jpeg";
import AuditForm from "../components/AuditForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Implementación de IA bilingüe para negocios de Colorado",
  description:
    "En Doble AI ayudamos a los negocios de Colorado a crecer con estrategia de IA, marketing bilingüe y presencia digital, en español y en inglés.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "https://dobleai.com/",
      es: "https://dobleai.com/es",
      "x-default": "https://dobleai.com/",
    },
  },
  openGraph: {
    title: "Doble AI: Implementación de IA bilingüe para negocios de Colorado",
    description:
      "Una de las pocas firmas bilingües de implementación de IA en Colorado. Estrategia de IA, análisis competitivo y crecimiento de marca, en español y en inglés.",
    url: "https://dobleai.com/es",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doble AI: Implementación de IA bilingüe para negocios de Colorado",
    description:
      "Estrategia de IA, análisis competitivo y crecimiento de marca para negocios de Colorado, en español y en inglés.",
  },
};

const faqs = [
  {
    q: "¿Qué hace Doble AI?",
    a: "Doble AI es una firma bilingüe de implementación de IA con base en el valle del río Eagle, Colorado. Construimos espacios de trabajo con IA que aprenden tu negocio: recuerdan a tus clientes, tus procesos y la voz de tu marca, y acumulan ese conocimiento con el tiempo. También auditamos tu presencia digital, mapeamos tu panorama competitivo y construimos estrategia de marca y ventas. Todo lo que hacemos está disponible en español y en inglés.",
  },
  {
    q: "¿Qué incluye la auditoría gratuita de negocio?",
    a: "Cubre tu presencia actual en línea, el estado de tu perfil de Google Business, el rendimiento de tu sitio web, el volumen y el tono de tus reseñas y una comparación competitiva de alto nivel. Entregamos un resumen escrito en 5–7 días con recomendaciones específicas y priorizadas. Sin presentaciones de venta y sin compromiso.",
  },
  {
    q: "¿Cuánto cuesta la implementación de IA?",
    a: "Los precios de Doble AI se ajustan a tu proyecto y a tus necesidades. Todo empieza con una auditoría gratuita. Los proyectos típicos de implementación de 90 días se cotizan después de la auditoría según el alcance. Contáctanos para una cotización clara y detallada.",
  },
  {
    q: "¿Qué hace diferente a Doble AI de otras firmas de IA?",
    a: "Dos cosas. Primero, no te entregamos una herramienta: construimos un espacio de trabajo con IA que aprende tu negocio. Recuerda a tus clientes, tus procesos, la voz de tu marca y las decisiones que ya tomaste, y cada sesión se acumula sobre la anterior. La mayoría de los negocios recibe una IA que se reinicia a cero cada día; nuestros clientes reciben una que se afila mientras más tiempo trabajamos juntos. Segundo, somos una de las pocas firmas bilingües de implementación de IA en Colorado, con estrategia y contenido en español de calidad nativa, llegando al 40–50% de los residentes del corredor de montaña de Colorado cuyo primer idioma es el español. Por separado, cada una es una ventaja real. Juntas, son una ventaja considerable.",
  },
  {
    q: "¿Necesito estar en el valle de Vail para trabajar con Doble AI?",
    a: "No. Aunque tenemos base en el valle del río Eagle y conocemos bien los mercados de Vail, Roaring Fork y Steamboat Springs, trabajamos con negocios en todo Colorado, a nivel nacional y en México. Si quieres llegar a mercados bilingües o implementar estrategia de IA, podemos ayudarte sin importar dónde estés.",
  },
  {
    q: "¿Con qué industrias trabaja Doble AI?",
    a: "Trabajamos con pequeños y medianos negocios de construcción y oficios, bienes raíces, hospitalidad, servicios profesionales y organizaciones sin fines de lucro, en especial negocios que atienden o quieren llegar a clientes hispanohablantes en las comunidades de montaña de Colorado.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomeEs() {
  return (
    <main lang="es" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav lang="es" />
      <Hero />
      <Problem />
      <Services />
      <HowWeWork />
      <VoiceDemo />
      <SampleWork />
      <Projects />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer lang="es" />
    </main>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-6 h-px bg-orange-500" />
          Valle del río Eagle, Colorado · Trabajando a través de fronteras
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-8">
          Haz crecer tu negocio<br />
          <span className="text-orange-500">con IA.</span><br />
          En español y en inglés.
        </h1>
        <p className="text-xl text-[#a3a3a3] max-w-2xl leading-relaxed mb-12">
          No te entregamos una herramienta: construimos un espacio de trabajo con
          IA que aprende tu negocio, tus clientes, tus procesos y tu voz. Lo
          recuerda todo y nunca empieza de cero, así que el trabajo se acumula
          mientras más tiempo trabajamos juntos. Bilingüe cuando tu mercado lo
          pide, excelente en cualquier caso. Una de las pocas firmas bilingües de
          implementación de IA en Colorado, trabajando a nivel local, nacional y
          del otro lado de la frontera.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Solicita tu auditoría gratuita
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Problem ── */
function Problem() {
  return (
    <section className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-6 h-px bg-orange-500" />
            La oportunidad
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Crecimiento con IA,<br />
            con una ventaja que<br />
            pocas firmas pueden ofrecer.
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed">
            Ayudamos a los negocios de Colorado a crecer con IA: mejor
            visibilidad en línea, mejor inteligencia competitiva y una estrategia
            clara para convertir eso en ingresos. A diferencia de la mayoría de
            las firmas de IA, podemos extender ese trabajo al mercado
            hispanohablante con fluidez nativa y contenido auténtico, no con
            traducciones. Para los negocios que lo quieren, es una ventaja
            importante. Para los que se enfocan en el mercado en inglés, la
            implementación de IA se sostiene por sí sola.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: "IA", label: "Herramientas para automatizar, amplificar y hacer crecer tu negocio" },
            { val: "90", label: "Días para resultados medibles" },
            { val: "5–7", label: "Días para entregar tu auditoría completa" },
            { val: "2x", label: "Alcance potencial para negocios que atienden a clientes en inglés y en español" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{s.val}</div>
              <div className="text-sm text-[#a3a3a3] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function Services() {
  const services = [
    {
      num: "01",
      name: "Auditoría de negocio",
      desc: "Un diagnóstico completo de tu presencia en línea, tus competidores y tus brechas, entregado como un informe escrito y detallado. Aquí empieza cada proyecto.",
      detail: "Entregada en 5–7 días",
    },
    {
      num: "02",
      name: "Análisis del panorama competitivo",
      desc: "Mapeamos tu entorno competitivo, identificamos dónde estás perdiendo terreno y encontramos el espacio libre que tus competidores todavía no reclaman.",
      detail: "Incluido con la auditoría o por separado",
    },
    {
      num: "03",
      name: "Implementación de IA",
      desc: "Construimos un espacio de trabajo con IA que aprende tu negocio: memoria persistente, flujos de trabajo acumulados y agentes de IA bilingües. No es una instalación de una sola vez, sino un sistema que se acumula mientras más trabajamos juntos.",
      detail: "Alcance a la medida de cada proyecto",
    },
    {
      num: "04",
      name: "Crecimiento de marca y ventas",
      desc: "Construcción de presencia digital, estrategia de contenido y un plan claro para convertir tu marca en un activo que genera ingresos. En español y en inglés, según el mercado que quieras hacer crecer.",
      detail: "Español · Inglés",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Qué hacemos
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl font-bold leading-tight max-w-lg">
            Cuatro servicios. Un resultado claro.
          </h2>
          <p className="text-[#a3a3a3] max-w-sm">
            Los precios se ajustan a tu proyecto. Todo empieza con una auditoría
            gratuita.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-8 transition-colors group"
            >
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
                {s.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.name}</h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">{s.desc}</p>
              <div className="text-xs text-orange-500/70 font-medium">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How We Work ── */
function HowWeWork() {
  const cards = [
    {
      title: "Nada empieza de cero",
      desc: "Cada detalle, estándar y lección de cada cliente vive en una memoria persistente. Retomamos exactamente donde quedamos, todas las veces.",
    },
    {
      title: "Afinado en cada proyecto",
      desc: "El método que entrega tu proyecto se ha afinado en todos los anteriores. Recibes toda esa experiencia sin pagar la curva de aprendizaje.",
    },
    {
      title: "Rápido donde importa",
      desc: "Una auditoría completa de negocio en 5–7 días. Contenido publicado en 2 idiomas. Sitios vigilados contra las fallas que no arrojan ningún error.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Cómo trabajamos
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-4xl font-bold leading-tight">
            Resultados de agencia,<br />sin la agencia.
          </h2>
          <div>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-4">
              La mayoría de las firmas de nuestro tamaño avanzan lento porque
              cada proyecto empieza desde cero. En Doble AI construimos nuestro
              propio sistema operativo con IA para que los nuestros no. Guarda
              todo lo que sabemos de tu negocio y aplica los estándares y métodos
              que hemos afinado en cada proyecto anterior.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              Obtienes la velocidad y consistencia de un equipo completo, con un
              socio senior que de verdad conoce tu cuenta. Desde el valle del
              río Eagle hasta Ajijic, México y el norte del estado de Nueva York.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Voice Demo ── */
function VoiceDemo() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-orange-500/[0.08] border border-orange-500/20 rounded-2xl px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-orange-500" />
              Demostración en vivo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Llama a nuestra recepcionista con IA.
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed max-w-md mb-2">
              Lucía contesta en español. Cambia a inglés y se convierte en Lucy,
              al instante. Disponible 24/7, sin esperas y sin salirse del guion.
            </p>
            <p className="text-[#a3a3a3] leading-relaxed max-w-md">
              Es el mismo sistema que construimos para nuestros clientes.
              Pruébala y luego pídenos una para tu negocio.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center gap-4 shrink-0">
            <a
              href="tel:+19705282835"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (970) 528-2835
            </a>
            <p className="text-xs text-[#a3a3a3]">Llamada gratuita · Español e inglés · 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sample Work ── */
function SampleWork() {
  const samples = [
    {
      href: "https://jroundshp.github.io/doble-ai-deliverables/rocky-mountain-finishes/",
      kind: "Auditoría de negocio · Abril 2026",
      name: "Negocio de oficios en Colorado",
      desc: "Noroeste de Colorado. Contratista especializado que atiende el corredor de lujo de montaña. Análisis competitivo completo, auditoría de presencia digital y recomendaciones de crecimiento.",
    },
    {
      href: "https://jroundshp.github.io/doble-ai-deliverables/vail-valley-real-estate/",
      kind: "Auditoría de negocio · Abril 2026",
      name: "Grupo inmobiliario del valle de Vail",
      desc: "Valle de Vail, Colorado. Equipo de bienes raíces de lujo con más de $850M en ventas de carrera. Auditoría de presencia digital, panorama competitivo y plan de crecimiento de 90 días.",
    },
    {
      href: "https://jroundshp.github.io/doble-ai-deliverables/sol-ramirez/",
      kind: "Auditoría de negocio · Abril 2026",
      name: "Agente inmobiliaria de la ribera de Chapala",
      desc: "Lago de Chapala, México. Agente bilingüe en un mercado con muchos compradores extranjeros. Auditoría de presencia digital, revisión de visibilidad en buscadores e IA, panorama competitivo y plan de crecimiento priorizado.",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Nuestro trabajo
        </div>
        <h2 className="text-4xl font-bold mb-4">Mira cómo es una auditoría.</h2>
        <p className="text-[#a3a3a3] text-lg mb-12 max-w-2xl">
          Antes de comprometerte con nada, mira la calidad del trabajo que
          entregamos. Estas son auditorías reales que hicimos para negocios con
          los que trabajamos, compartidas de forma anónima. Los informes están en
          inglés.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {samples.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] rounded-2xl overflow-hidden transition-colors"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                  {s.kind}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-[#a3a3a3] text-sm mb-6 flex-1">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                  Ver la auditoría completa →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Projects ── */
const projects = [
  {
    name: "John Tyler Real Estate",
    kind: "Proyecto de cliente · Bienes raíces de lujo · Vail y el valle del río Eagle, CO",
    step1Label: "Lo que reveló la auditoría",
    step1:
      "Un gerente de sucursal y agente de Slifer Smith & Frampton con más de $900M en ventas de carrera, y casi nada en línea que fuera realmente suyo. Su única presencia era una página de agente dentro del sitio corporativo, con sus propiedades y su historia enterradas en la MLS. No aparecía en Google con su propio nombre, herramientas de IA como ChatGPT y Grok no lo conocían, y no había nada en español en un valle donde buena parte de los compradores y residentes lo hablan.",
    step2Label: "Lo que construimos",
    step2:
      "Un sitio bilingüe completo construido alrededor del hombre, no de la corredora: su historia real (criado en Vail, una carrera internacional de negocios y el regreso a casa a los bienes raíces), 9 guías de vecindarios y comunidades de Vail a Gypsum, un blog creciente en inglés y español con análisis del mercado y guías para compradores, sus propiedades activas, reseñas reales de clientes y una forma clara de contactarlo en cada página. Todo el sitio está diseñado para SEO y GEO, así que aparece en las búsquedas de Google y en herramientas de IA como ChatGPT y Grok, y cada página tiene su gemela en español con calidad nativa.",
    domain: "johntylerrealestate.com",
    href: "https://johntylerrealestate.com",
    cta: "Visitar el sitio",
    tag: "Bienes raíces de lujo bilingüe",
    gradient: "linear-gradient(135deg, #14202d 0%, #1b2a3b 55%, #b8943f 125%)",
    image: "/work/john-tyler.jpg",
  },
  {
    name: "Alexander Estrada",
    kind: "Proyecto de cliente · Cine y fotografía de aventura · Denver–Boulder, CO",
    step1Label: "Lo que reveló la auditoría",
    step1:
      "Un cineasta, fotógrafo y piloto de dron con más de 10 años de trabajo y créditos reales: la serie de la BBC de Simon Reeve, Channel 4 News, ABC News, Natural Habitat Adventures. Su viejo sitio en WordPress no mostraba casi nada de eso. Un trabajo visual que debería llenar la pantalla vivía apretado en una plantilla anticuada, y años de escalada, expediciones y proyectos comerciales estaban dispersos y difíciles de recorrer.",
    step2Label: "Lo que construimos",
    step2:
      "Un portafolio bilingüe donde la imagen manda, inspirado en el de Jimmy Chin: casi negro, a pantalla completa, un solo acento rojo. La página de inicio abre con un solo cuadro y Films, Photos y About como puertas de entrada. Su reel y sus películas viven juntos, más de 200 fotos están organizadas en galerías fáciles de recorrer y un blog cuenta su historia de Cusco a Colorado en inglés y español. Todo el sitio está diseñado para SEO y GEO, y está construido para la forma en que la gente realmente mira el trabajo visual.",
    domain: "alexanderestral.com",
    href: "https://alexanderestral.com",
    cta: "Visitar el sitio",
    tag: "Cine y fotografía de aventura",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #5c0a14 60%, #c8102e 125%)",
    image: "/work/alexander-estrada.jpg",
  },
  {
    name: "Ellicottville Outside",
    kind: "Nuestro producto · Guía de destino al aire libre · Ellicottville, NY",
    step1Label: "La brecha que vimos",
    step1:
      "Ellicottville es un pueblo de esquí con 2 resorts y 4 temporadas (Holiday Valley y HoliMont), más de 140 millas de senderos de bicicleta de montaña, caminatas, pesca, kayak y el parque estatal Allegany justo al sur. Pero no existía un solo lugar independiente que lo reuniera todo. Locales y visitantes tenían que saltar entre los sitios de los 2 resorts, un directorio de la cámara de comercio y Facebook solo para saber qué ofrece el pueblo en cada temporada.",
    step2Label: "Lo que construimos",
    step2:
      "Un solo lugar para todo el pueblo: qué hacer en las 4 temporadas, la villa, directorios con 21 tiendas y 25 restaurantes, un calendario de eventos en vivo, el clima y una biblioteca creciente de guías locales. Este proyecto no pedía una versión bilingüe, pero recibió el mismo cuidado que nuestros sitios de clientes. Es rápido, está bien organizado y está diseñado para SEO y GEO, así que el pueblo aparece en Google y en herramientas de IA como ChatGPT y Grok. Un solo marcador en lugar de 6.",
    domain: "ellicottvilleoutside.com",
    href: "https://ellicottvilleoutside.com",
    cta: "Verlo en vivo",
    tag: "Todo lo outdoor en Ellicottville",
    gradient: "linear-gradient(135deg, #0c2a1a 0%, #1f5a3a 58%, #d4a029 125%)",
    image: "/work/ellicottville-outside.jpg",
  },
  {
    name: "Sol Ramirez Real Estate",
    kind: "Proyecto de cliente · Bienes raíces · Ajijic, México",
    step1Label: "Lo que reveló la auditoría",
    step1:
      "Una experta local respetada (con experiencia, certificaciones y un gran talento para lo que hace) sin presencia digital que lo demostrara. Sin sitio propio, con sus propiedades enterradas en la página de un bróker y en la MLS. No aparecía en las búsquedas de Google, y herramientas de IA como ChatGPT y Grok no sabían que existía. Para cualquiera que buscara en línea, era invisible.",
    step2Label: "Lo que hicimos",
    step2:
      "Construimos un sitio bilingüe completo: propiedades en venta más una sección de rentas sincronizada en vivo con la MLS de Chapala, guías de Ajijic y de la zona de Chapala, un blog para compradores extranjeros afinado para búsqueda, sus credenciales al frente y WhatsApp en cada página.",
    domain: "solramrealestate.com",
    href: "https://solramrealestate.com",
    cta: "Visitar el sitio",
    tag: "Bienes raíces bilingüe",
    gradient: "linear-gradient(135deg, #0f3d4a 0%, #1c6b6e 58%, #e8a13c 125%)",
    image: "/work/sol-ramirez.jpg",
  },
  {
    name: "CO Headwaters Report",
    kind: "Nuestro producto · Panel de datos en vivo",
    step1Label: "La brecha que vimos",
    step1:
      "Guías de río, operadores de pesca con mosca y aficionados locales saltaban entre media docena de fuentes para conocer los caudales actuales, la temperatura del agua y, para los guías de mosca en especial, la turbidez. Los datos existían, pero estaban dispersos y eran lentos de leer cuando las condiciones cambian cada hora.",
    step2Label: "Lo que construimos",
    step2:
      "Un solo lugar para revisar los puntos que importan entre el valle de Vail y el río Eagle y el valle de Roaring Fork: caudal, temperatura del agua y turbidez en vivo, en una sola vista limpia y en tiempo real. Un solo marcador en lugar de 6.",
    domain: "coheadwatersreport.com",
    href: "https://coheadwatersreport.com",
    cta: "Verlo en vivo",
    tag: "Datos de río en tiempo real",
    gradient: "linear-gradient(135deg, #0a2540 0%, #145e8c 100%)",
  },
  {
    name: "Vail Valley Report",
    kind: "Nuestro producto · Panel de datos en vivo",
    step1Label: "La brecha que vimos",
    step1:
      "Locales, visitantes y cualquiera que subiera a la montaña revisaban un sitio para la temperatura del pueblo, otro para la cima y la base del resort y otro más para el aeropuerto, solo para saber cómo se veía el día en el valle.",
    step2Label: "Lo que construimos",
    step2:
      "Un reporte en vivo de todo el valle de Vail: temperaturas actuales en la cima y la base de Vail y de Beaver Creek, el clima local y las condiciones del aeropuerto del condado de Eagle, todo en una sola pantalla. Un vistazo antes de manejar, volar o salir.",
    domain: "vailvalleyreport.com",
    href: "https://vailvalleyreport.com",
    cta: "Verlo en vivo",
    tag: "Condiciones en un solo lugar",
    gradient: "linear-gradient(135deg, #1a2238 0%, #5b7fb0 100%)",
  },
  {
    name: "LUCI: Recepcionista bilingüe con IA",
    kind: "Nuestro producto · IA bilingüe · En vivo en este sitio",
    step1Label: "El desafío",
    step1:
      "Los pequeños negocios pierden llamadas, y las pierden en 2 idiomas. Las llamadas fuera de horario y las de desborde quedan sin contestar, y mantener cobertura bilingüe las 24 horas con personal es caro.",
    step2Label: "Lo que construimos",
    step2:
      "LUCI contesta 24/7 (Lucía en español, Lucy en inglés), responde preguntas, dirige llamadas y te envía cada contacto por correo. Está en vivo en este mismo sitio: llámala y pruébala ahora.",
    domain: "dobleai.com",
    href: "tel:+19705282835",
    cta: "Llámala ahora · (970) 528-2835",
    tag: "Contesta en español y en inglés",
    gradient: "linear-gradient(135deg, #2a1505 0%, #b5560f 62%, #f97316 125%)",
  },
];

function ProjectVisual({
  domain,
  tag,
  name,
  gradient,
  image,
}: {
  domain: string;
  tag: string;
  name: string;
  gradient: string;
  image?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.06] border-b border-white/[0.08]">
        <span className="w-3 h-3 rounded-full bg-red-400/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <span className="w-3 h-3 rounded-full bg-green-400/60" />
        <div className="ml-3 flex-1 truncate rounded-md bg-black/30 px-3 py-1.5 text-xs text-[#a3a3a3]">
          {domain}
        </div>
      </div>
      {image ? (
        <img src={image} alt={`Vista previa de ${name}`} className="block w-full h-auto" />
      ) : (
        <div
          className="relative aspect-[16/10] flex flex-col items-center justify-center text-center px-8"
          style={{ background: gradient }}
        >
          <div className="text-[11px] font-semibold tracking-widest uppercase text-white/70 mb-3">
            {tag}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {name}
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Proyectos recientes
        </div>
        <h2 className="text-4xl font-bold mb-4">Negocios reales, en Colorado y más allá.</h2>
        <p className="text-[#a3a3a3] text-lg mb-16 max-w-2xl">
          No solo auditamos: construimos y publicamos. Aquí puedes ver qué
          encontramos, qué hicimos al respecto y el trabajo terminado. Cada
          enlace está en vivo, compruébalo tú mismo.
        </p>

        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <ProjectVisual
                  domain={p.domain}
                  tag={p.tag}
                  name={p.name}
                  gradient={p.gradient}
                  image={p.image}
                />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-3">
                  {p.kind}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{p.name}</h3>

                <div className="space-y-5 mb-7">
                  <div className="border-l-2 border-white/[0.12] pl-4">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-[#8a8a8a] mb-1.5">
                      {p.step1Label}
                    </div>
                    <p className="text-[#a3a3a3] leading-relaxed">{p.step1}</p>
                  </div>
                  <div className="border-l-2 border-orange-500/50 pl-4">
                    <div className="text-[11px] font-semibold tracking-widest uppercase text-orange-500/80 mb-1.5">
                      {p.step2Label}
                    </div>
                    <p className="text-[#cfcfcf] leading-relaxed">{p.step2}</p>
                  </div>
                </div>

                <a
                  href={p.href}
                  {...(p.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  {p.cta}
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
const testimonials = [
  {
    quote:
      "The bilingual team at Doble AI has completely reshaped how we approach our online digital presence. They captured almost five decades of my experience and market knowledge of the Vail and Eagle River Valley, and helped us take what we do day in and day out and showcase it online. In short, they underpromised and overdelivered.",
    name: "John Tyler",
    role: "John Tyler Real Estate · Valle de Vail, Colorado",
    lang: "en",
  },
  {
    quote:
      "El equipo de Doble AI captó perfectamente lo que hacemos y construyó una plataforma que refleja mi conocimiento y experiencia aquí en Chapala, Ajijic y toda la ribera. La tecnología no es lo mío, y me ayudaron a tomar lo que tenía en la cabeza y mostrarlo en línea de forma efectiva, en un formato bilingüe que ayuda a mis compradores y vendedores. 10 de 10.",
    name: "Sol Ramírez",
    role: "Sol Ramírez Real Estate · Ajijic, México",
    lang: "es",
  },
  {
    quote:
      "I have known the founder of Doble AI for almost ten years, and what he and Gisella have created with their agency is nothing short of incredible. They helped me take my life's work, present it digitally and bilingually, and gave me a way to communicate what I do effectively. Their cultural and language understanding of the Latin American and United States markets cannot be overstated. A 10/10 agency.",
    name: "Alexander Estrada",
    role: "Cineasta y fotógrafo · Colorado",
    lang: "en",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Palabras de clientes
        </div>
        <h2 className="text-4xl font-bold mb-4">En sus propias palabras. In their own words.</h2>
        <p className="text-[#a3a3a3] text-lg mb-14 max-w-2xl">
          3 clientes, 2 países, 2 idiomas. Sin editar más allá de la puntuación.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 flex flex-col"
            >
              <span aria-hidden="true" className="text-orange-500 text-5xl leading-none font-serif mb-4">
                &ldquo;
              </span>
              <blockquote
                lang={t.lang}
                className="text-[#d4d4d4] text-sm leading-relaxed flex-1"
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-[#a3a3a3] mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-orange-500" />
              Quiénes somos
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Pensamiento global.<br />Bilingües por naturaleza.<br />Con base en Colorado.
            </h2>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
              Doble AI fue fundada por John y Gisella Rounds en el valle del río
              Eagle. John aporta décadas de experiencia en desarrollo de negocios
              a nivel global, con trabajo y viajes en más de 50 países. Es
              bilingüe en inglés y español, y ha dedicado su carrera a ayudar a
              negocios a crecer en entornos complejos y multiculturales alrededor
              del mundo.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              Gisella es originaria de Perú. Su fluidez bilingüe y su profundo
              conocimiento cultural no son una función que agregamos después: son
              la base de cómo pensamos el mercado de cada cliente. Juntos
              combinamos experiencia intercultural genuina con las herramientas
              de IA más recientes para ayudar a los negocios de Colorado a llegar
              a más clientes y crecer más rápido.
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={johnRoundsPhoto}
              alt="John Rounds, fundador de Doble AI"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="mb-12 flex justify-center">
          <Image
            src={johnGisellaPhoto}
            alt="John y Gisella Rounds en Colorado"
            className="rounded-2xl object-cover"
            style={{ maxWidth: "500px", width: "100%", height: "auto" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Bilingües por naturaleza",
              desc: "El inglés y el español no son 2 idiomas para nosotros: son 2 formas de pensar tu mercado.",
            },
            {
              title: "Nativos en IA",
              desc: "Doble AI funciona por completo sobre el mismo espacio de trabajo con IA que construimos para nuestros clientes: memoria persistente, habilidades acumuladas y conocimiento que pasa de un proyecto al siguiente. No recomendamos nada que no usemos nosotros mismos.",
            },
            {
              title: "Con raíces, sin límites",
              desc: "Conocemos al detalle los mercados de Vail, Roaring Fork y Steamboat. Ese mismo sistema hoy entrega proyectos en todo el país y en México.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Preguntas comunes
        </div>
        <h2 className="text-4xl font-bold mb-12">Lo que la gente pregunta antes de escribirnos.</h2>
        <div className="space-y-0 divide-y divide-white/[0.06]">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="text-lg font-semibold group-open:text-orange-400 transition-colors">
                  {q}
                </span>
                <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#a3a3a3] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-6 h-px bg-orange-500" />
          Empieza hoy
        </div>
        <h2 className="text-4xl font-bold mb-4">Empieza con una auditoría gratuita.</h2>
        <p className="text-[#a3a3a3] text-lg mb-12">
          Revisaremos tu presencia actual en línea y te diremos exactamente dónde
          están las brechas. Sin compromiso y sin presentaciones de venta.
        </p>
        <AuditForm lang="es" />
        <p className="text-[#666] text-sm mt-6">
          ¿Prefieres hablar?{" "}
          <a href="https://wa.me/19703762725" className="text-orange-500 hover:underline">
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
