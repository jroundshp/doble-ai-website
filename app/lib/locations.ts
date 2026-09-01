// Per-town landing pages: 5 Eagle River Valley towns, each with an EN page and
// an ES twin (hreflang-linked, cross-linked in the UI). Modeled on the
// johntylerrealestate.com/neighborhoods pattern: locally specific copy per
// page, one URL per place. FAQ answers double as FAQPage schema text, so keep
// them plain prose (no markup).

export type TownPage = {
  slug: string;
  lang: "en" | "es";
  pairSlug: string;
  town: string;
  metaTitle: string;
  metaDescription: string;
  tags: [string, string, string];
  blurb: string;
  h1: string;
  intro: string[];
  servicesHeading: string;
  services: { phase: string; name: string; body: string }[];
  bilingualHeading: string;
  bilingual: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
};

export const townPages: TownPage[] = [
  // ─────────────────────────── VAIL ───────────────────────────
  {
    slug: "vail",
    lang: "en",
    pairSlug: "vail-espanol",
    town: "Vail",
    metaTitle: "Get found in Vail, CO: the Findability Report and Doble Presence",
    metaDescription:
      "Doble AI helps Vail businesses get found on Google and in AI search, tell their story to a global audience, and answer every call in English and Spanish.",
    tags: ["Resort economy", "Global visitors", "Hospitality"],
    blurb:
      "The valley's world stage. Vail businesses now compete for guests who plan their trips by asking AI.",
    h1: "AI and digital marketing for Vail businesses",
    intro: [
      "Vail is a world brand, and that cuts both ways for the businesses that operate here. Millions of guests arrive every year already knowing the mountain. Almost none of them arrive knowing your shop, your restaurant, or your guide service. They find those the week of the trip, on Google and, increasingly, by asking ChatGPT where to eat, who to book, and what to do.",
      "That second search is the one most Vail businesses are losing. AI assistants recommend businesses with complete profiles, current reviews, and published answers to real questions. In our audits of valley businesses, strong operations lose that contest to weaker competitors who simply wrote more down. Doble AI fixes the writing-it-down part.",
    ],
    servicesHeading: "What we do for Vail businesses",
    services: [
      {
        phase: "Product 01",
        name: "The Findability Report",
        body: "We check your Google Business Profile, your site structure, and your reviews against the searches Vail guests actually type, and we put five of those questions to four AI engines to see who gets named instead of you. Scored out of ten, delivered in writing in 5 to 7 days. $1,500, credited to your first month.",
      },
      {
        phase: "Product 02",
        name: "Doble Presence",
        body: "Then we build or repair the site and run it every month: guides, FAQs, and service pages that answer real guest questions in English and Spanish, so Google and the AI assistants have something of yours to cite when a visitor asks who to book. Monitoring catches what breaks. From $2,500/month English, $3,500/month bilingual.",
      },
    ],
    bilingualHeading: "Two languages, one guest experience",
    bilingual: [
      "Vail hosts guests from Mexico City, Monterrey, and across Latin America every season, and Spanish-speaking staff keep the town running. A website and a phone line that work in both languages is not a translation exercise. It is guest service, and it shows up in bookings.",
    ],
    faqHeading: "Vail business questions we hear most",
    faq: [
      {
        q: "Do AI assistants actually recommend specific Vail businesses?",
        a: "Yes. Ask ChatGPT or Perplexity for the best dinner in Vail Village or a ski tuning shop near Lionshead and they name real businesses, pulled from reviews, articles, and profiles published online. Businesses with a thin written presence simply never get named, no matter how good they are.",
      },
      {
        q: "What is GEO and why does it matter in a resort town?",
        a: "GEO (generative engine optimization) is the practice of making your business visible to AI assistants the way SEO makes you visible to Google. It matters more in Vail than almost anywhere, because visitors planning a trip from another city or country do their research entirely online before they arrive.",
      },
      {
        q: "We are fully booked all winter. Why invest in visibility?",
        a: "Peak winter fills itself. Visibility earns you the shoulder seasons, better staff applicants, stronger private-event and group business, and pricing power next winter. It also protects you the year a new competitor opens with a better profile than yours.",
      },
      {
        q: "Can you help us serve international and Spanish-speaking guests?",
        a: "That is our specialty. We are a bilingual firm: we build Spanish versions of your key pages, translate menus and guest materials with native quality, and where the month calls for it, Presence puts a bilingual voice agent on your line. Call ours at (970) 406-4630 to hear one working.",
      },
      {
        q: "What does it cost to get started?",
        a: "The audit is free. We review your digital presence, score it, and walk you through the findings in plain language. If you want our help after that, the full Findability Report is $1,500, credited in full against your first month of Doble Presence. Pricing is fixed and stated up front, never hourly. Nothing is owed to begin.",
      },
    ],
  },
  {
    slug: "vail-espanol",
    lang: "es",
    pairSlug: "vail",
    town: "Vail",
    metaTitle: "Que te encuentren en Vail: Findability Report y Doble Presence",
    metaDescription:
      "En Doble AI ayudamos a los negocios de Vail a aparecer en Google y en la búsqueda con IA, contar su historia y atender cada llamada en inglés y en español.",
    tags: ["Economía turística", "Visitantes globales", "Hospitalidad"],
    blurb:
      "El escenario mundial del valle. Los negocios de Vail compiten por huéspedes que ahora planean su viaje preguntándole a la IA.",
    h1: "IA y marketing digital para negocios de Vail",
    intro: [
      "Vail es una marca mundial, y eso tiene dos caras para quienes tienen un negocio aquí. Millones de huéspedes llegan cada año conociendo la montaña, pero casi ninguno llega conociendo tu tienda, tu restaurante o tu servicio. Eso lo buscan la semana del viaje, en Google y, cada vez más, preguntándole a ChatGPT dónde comer, a quién reservar y qué hacer.",
      "Esa segunda búsqueda es la que la mayoría de los negocios está perdiendo. Los asistentes de IA recomiendan negocios con perfiles completos, reseñas recientes y respuestas publicadas a preguntas reales. En Doble AI nos encargamos justamente de esa parte: poner tu negocio por escrito donde la IA y Google puedan encontrarlo.",
    ],
    servicesHeading: "Qué hacemos por los negocios de Vail",
    services: [
      {
        phase: "Producto 01",
        name: "El Findability Report",
        body: "Revisamos tu perfil de Google, la estructura de tu sitio y tus reseñas frente a lo que los huéspedes de Vail realmente buscan, y le hacemos 5 de esas preguntas a 4 motores de IA para ver a quién nombran en tu lugar. Con puntaje sobre 10 y entregado por escrito en 5 a 7 días. 1.500 dólares, acreditados a tu primer mes.",
      },
      {
        phase: "Producto 02",
        name: "Doble Presence",
        body: "Después construimos o reparamos el sitio y lo operamos cada mes: guías, preguntas frecuentes y páginas de servicio que responden dudas reales en español y en inglés, para que Google y los asistentes de IA tengan algo tuyo que citar. El monitoreo detecta lo que se rompe. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
      },
    ],
    bilingualHeading: "Dos idiomas, una sola experiencia",
    bilingual: [
      "Cada temporada llegan a Vail huéspedes de Ciudad de México, Monterrey y toda Latinoamérica, y el personal hispanohablante mantiene el pueblo funcionando. Un sitio web y una línea telefónica que funcionan en los 2 idiomas no son un lujo: son servicio al cliente, y se notan en las reservas.",
    ],
    faqHeading: "Preguntas frecuentes de negocios en Vail",
    faq: [
      {
        q: "¿Los asistentes de IA realmente recomiendan negocios de Vail?",
        a: "Sí. Pregúntale a ChatGPT o a Perplexity por la mejor cena en Vail Village y te nombran negocios reales, tomados de reseñas, artículos y perfiles publicados en internet. Un negocio con poca presencia escrita simplemente no aparece, por bueno que sea.",
      },
      {
        q: "¿Qué es GEO y por qué importa en un pueblo turístico?",
        a: "GEO (optimización para motores generativos) es hacer que tu negocio sea visible para los asistentes de IA, igual que el SEO te hace visible en Google. En Vail importa más que en casi cualquier otro lugar, porque el visitante planea todo su viaje en línea antes de llegar.",
      },
      {
        q: "Mi negocio se llena solo en invierno. ¿Para qué invertir en esto?",
        a: "La temporada alta se llena sola, pero la visibilidad te gana las temporadas intermedias, mejores candidatos para tu equipo, más eventos privados y mejor poder de precios el próximo invierno. También te protege el año en que abra un competidor con mejor perfil que el tuyo.",
      },
      {
        q: "¿Pueden ayudarme a atender clientes en español y en inglés?",
        a: "Es nuestra especialidad. Somos una firma bilingüe: creamos las versiones en español de tus páginas clave, traducimos menús y materiales con calidad nativa, y cuando el mes lo pide, Presence pone un agente de voz bilingüe en tu línea. Marca el nuestro, (970) 406-4630, para escuchar uno funcionando.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "La auditoría es gratuita. Revisamos tu presencia digital, le ponemos calificación y te explicamos los resultados en lenguaje claro. Si después quieres que te ayudemos, el Findability Report completo cuesta 1.500 dólares y te lo acreditamos completo al primer mes de Doble Presence. Los precios son fijos y se dicen desde el principio, nunca por hora. Empezar no te compromete a nada.",
      },
    ],
  },

  // ─────────────────────────── AVON ───────────────────────────
  {
    slug: "avon",
    lang: "en",
    pairSlug: "avon-espanol",
    town: "Avon",
    metaTitle: "Get found in Avon, CO: the Findability Report and Doble Presence",
    metaDescription:
      "Doble AI helps Avon businesses win both audiences: Beaver Creek guests and the year-round locals who shop, eat, and search in two languages.",
    tags: ["Beaver Creek's front door", "Main-street retail", "Bilingual community"],
    blurb:
      "Where the valley actually shops. Main-street businesses serving a community that lives in two languages.",
    h1: "AI and digital marketing for Avon businesses",
    intro: [
      "Avon is where the valley runs its errands, eats on a weeknight, and catches the gondola to Beaver Creek. Businesses here serve two audiences at once: resort guests coming down the mountain with money to spend, and the locals who keep the lights on the other nine months.",
      "Both audiences search before they show up, and a meaningful share of Avon's own community searches in Spanish. Almost nobody in the valley publishes anything for them. That gap is the single easiest advantage an Avon business can claim, and it is sitting unclaimed.",
    ],
    servicesHeading: "What we do for Avon businesses",
    services: [
      {
        phase: "Product 01",
        name: "The Findability Report",
        body: "We measure how you show up for both of your audiences: the Beaver Creek visitor searching from the chairlift and the local searching from the couch, in English and in Spanish. Google profile, site structure, reviews, competitors, and a four-engine AI sweep scored out of ten. $1,500, delivered in 5 to 7 days, credited to your first month.",
      },
      {
        phase: "Product 02",
        name: "Doble Presence",
        body: "Then we fix it and keep it fixed: service pages and FAQs that answer what Avon customers actually ask, in the words they use and in both languages, so search engines and AI assistants cite you instead of a competitor. From $2,500/month English, $3,500/month bilingual.",
      },
    ],
    bilingualHeading: "The bilingual main street",
    bilingual: [
      "A large share of Eagle County's community speaks Spanish at home, and much of it lives and shops in and around Avon. A menu, a booking page, or a phone greeting that works in Spanish is not a nice extra here. It is how you serve the neighborhood you are actually in, and it earns loyalty the resorts cannot.",
    ],
    faqHeading: "Avon business questions we hear most",
    faq: [
      {
        q: "Is a Spanish version of my website worth it in Avon?",
        a: "In Avon, more than almost anywhere in the valley. A big part of the local customer base is more comfortable in Spanish, and nearly zero local businesses publish in it. A Spanish services page plus a bilingual Google profile routinely reaches customers your competitors never see.",
      },
      {
        q: "How do I show up when someone searches in Spanish?",
        a: "Google matches the language of the query to the language of your content. If nothing on your site or profile exists in Spanish, you are invisible to those searches. We build the Spanish pages, descriptions, and review responses that put you in front of them.",
      },
      {
        q: "Do you machine-translate, or write real Spanish?",
        a: "We write it. Doble AI is led by a bilingual team that includes a native Peruvian Spanish speaker, and every Spanish page we publish is written to native quality. Machine translation reads as machine translation, and your Spanish-speaking customers can tell.",
      },
      {
        q: "What matters more for me, my website or my Google profile?",
        a: "For most Avon storefronts and services, the Google Business Profile wins short term: it is what appears when someone searches from a phone half a mile away. Reviews, photos, hours, and services there move the needle fastest. The website then converts the click and feeds AI search.",
      },
      {
        q: "What does it cost to get started?",
        a: "The audit is free, in English or Spanish, and we walk you through it in person or on a call. After that you get a prioritized roadmap with fixed quotes. Most Avon businesses start with the Google profile and review work, which is the least expensive item on the list.",
      },
    ],
  },
  {
    slug: "avon-espanol",
    lang: "es",
    pairSlug: "avon",
    town: "Avon",
    metaTitle: "Que te encuentren en Avon: Findability Report y Doble Presence",
    metaDescription:
      "En Doble AI ayudamos a los negocios de Avon a ganar sus 2 públicos: los huéspedes de Beaver Creek y la comunidad local que busca en español.",
    tags: ["La puerta de Beaver Creek", "Comercio local", "Comunidad bilingüe"],
    blurb:
      "Donde el valle hace sus compras. Negocios de barrio que atienden a una comunidad que vive en 2 idiomas.",
    h1: "IA y marketing digital para negocios de Avon",
    intro: [
      "Avon es donde el valle hace el mandado, cena entre semana y toma la góndola a Beaver Creek. Los negocios de aquí atienden a 2 públicos a la vez: los huéspedes del resort que bajan de la montaña y la comunidad local que sostiene el negocio los otros 9 meses del año.",
      "Los 2 públicos buscan en internet antes de llegar, y buena parte de la comunidad de Avon busca en español. Casi nadie en el valle publica nada para ellos. Si tienes un negocio aquí, esa es la ventaja más fácil de reclamar, y sigue libre.",
    ],
    servicesHeading: "Qué hacemos por los negocios de Avon",
    services: [
      {
        phase: "Producto 01",
        name: "El Findability Report",
        body: "Medimos cómo apareces ante tus 2 públicos: el visitante de Beaver Creek que busca desde la telesilla y el vecino que busca desde su casa, en inglés y en español. Perfil de Google, estructura del sitio, reseñas, competencia y un barrido de 4 motores de IA con puntaje sobre 10. 1.500 dólares, entregado en 5 a 7 días y acreditado a tu primer mes.",
      },
      {
        phase: "Producto 02",
        name: "Doble Presence",
        body: "Después lo arreglamos y lo mantenemos: páginas de servicios y preguntas frecuentes que responden lo que tus clientes realmente preguntan, con sus palabras y en los 2 idiomas, para que Google y la IA te citen a ti. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
      },
    ],
    bilingualHeading: "La calle principal bilingüe",
    bilingual: [
      "Gran parte de la comunidad del condado de Eagle habla español en casa, y mucha de esa comunidad vive y compra en Avon y sus alrededores. Un menú, una página de reservas o un saludo telefónico en español no es un detalle: es atender de verdad al vecindario donde estás, y genera una lealtad que los resorts no pueden comprar.",
    ],
    faqHeading: "Preguntas frecuentes de negocios en Avon",
    faq: [
      {
        q: "¿Vale la pena tener mi sitio web en español en Avon?",
        a: "En Avon, más que en casi cualquier otro pueblo del valle. Buena parte de la clientela local se siente más cómoda en español y casi ningún negocio publica en ese idioma. Una página de servicios en español y un perfil de Google bilingüe te ponen frente a clientes que tus competidores nunca ven.",
      },
      {
        q: "¿Cómo aparezco cuando alguien busca en español?",
        a: "Google empareja el idioma de la búsqueda con el idioma de tu contenido. Si nada en tu sitio o en tu perfil existe en español, eres invisible para esas búsquedas. Nosotros creamos las páginas, descripciones y respuestas a reseñas que te hacen aparecer.",
      },
      {
        q: "¿Traducen con máquina o escriben español de verdad?",
        a: "Lo escribimos nosotros. Doble AI es una firma bilingüe con una hablante nativa de español peruano en el equipo, y cada página que publicamos tiene calidad nativa. La traducción automática se nota, y tus clientes hispanohablantes la reconocen de inmediato.",
      },
      {
        q: "¿Qué importa más, mi sitio web o mi perfil de Google?",
        a: "Para la mayoría de los negocios de Avon, el perfil de Google gana a corto plazo: es lo que aparece cuando alguien busca desde su teléfono a media milla de tu puerta. Las reseñas, fotos, horarios y servicios son lo que más mueve la aguja. El sitio web convierte ese clic y alimenta la búsqueda con IA.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "La auditoría es gratuita, en español o en inglés, y te explicamos los resultados en persona o por llamada. Después recibes un plan priorizado con precios fijos. La mayoría empieza por el perfil de Google y las reseñas, que es lo más económico de la lista.",
      },
    ],
  },

  // ────────────────────────── EDWARDS ──────────────────────────
  {
    slug: "edwards",
    lang: "en",
    pairSlug: "edwards-espanol",
    town: "Edwards",
    metaTitle: "Get found in Edwards, CO: the Findability Report and Doble Presence",
    metaDescription:
      "Doble AI helps Edwards professionals and restaurants turn strong referrals into strong search presence, in English and Spanish.",
    tags: ["Professional services", "Riverwalk dining", "Family neighborhoods"],
    blurb:
      "The valley's unofficial downtown: medicine, law, real estate, and dinner on the Riverwalk.",
    h1: "AI and digital marketing for Edwards businesses",
    intro: [
      "Edwards is where the valley goes to see its doctor, sign its papers, and have a long dinner. It is the midpoint of the valley and its professional center, ringed by the neighborhoods and gated communities where many of its clients live.",
      "Professional businesses here run on referrals, and that is exactly why search matters: every referral now gets verified online before the first phone call. When a neighbor recommends you and your search results show an out-of-date site and three reviews, some share of those referrals quietly evaporates. Our audits of Edwards-area organizations keep finding the same thing: real reputations, thin digital proof.",
    ],
    servicesHeading: "What we do for Edwards businesses",
    services: [
      {
        phase: "Product 01",
        name: "The Findability Report",
        body: "We audit what a referred client sees in the first sixty seconds of searching your name: Google profile, reviews, site structure, the competitive set, and how four AI engines answer five questions a client would ask before choosing a practice. Scored out of ten. $1,500, delivered in 5 to 7 days, credited to your first month.",
      },
      {
        phase: "Product 02",
        name: "Doble Presence",
        body: "Then we repair the site and run it: plain-language pages on services, process, and pricing philosophy, plus the FAQs AI assistants pull from, published in English and Spanish and kept current. From $2,500/month English, $3,500/month bilingual.",
      },
    ],
    bilingualHeading: "Bilingual, where it earns its keep",
    bilingual: [
      "Edwards practices and restaurants serve Spanish-speaking clients and employ Spanish-speaking teams every day. Intake forms, service pages, and a phone line that work in Spanish remove real friction for real clients, and they signal a level of care that referrals repeat.",
    ],
    faqHeading: "Edwards business questions we hear most",
    faq: [
      {
        q: "My practice runs on referrals. Does search really matter?",
        a: "Referrals and search are now the same funnel. Nearly every referred client looks you up before calling, and what they find either confirms the recommendation or undermines it. Search presence does not replace referrals; it stops you from leaking them.",
      },
      {
        q: "What should a professional practice actually publish?",
        a: "Answers, not brochures. The questions clients ask in consultations, written up in plain language: what you treat or handle, what a first visit looks like, what things cost or how billing works, who is a fit and who is not. That content wins both Google and AI answers.",
      },
      {
        q: "How do reviews work for a professional practice?",
        a: "Carefully and consistently. We set up a simple, compliant ask that goes to satisfied clients at the right moment, and we draft professional responses to what comes in. A steady handful of recent reviews outperforms a wall of old ones.",
      },
      {
        q: "Can you help us serve Spanish-speaking clients?",
        a: "Yes, and natively rather than through machine translation. We build Spanish versions of your key pages and intake materials, and where the month calls for it, Presence puts a bilingual voice agent on your line, which matters for clients who would rather not navigate an English-only front desk. Ours answers at (970) 406-4630.",
      },
      {
        q: "What does it cost to get started?",
        a: "The audit is free. We score your digital presence the way a referred client experiences it and walk you through the findings. If you want help, you get a fixed-quote roadmap, ordered by what moves the needle first.",
      },
    ],
  },
  {
    slug: "edwards-espanol",
    lang: "es",
    pairSlug: "edwards",
    town: "Edwards",
    metaTitle: "Que te encuentren en Edwards: Findability Report y Doble Presence",
    metaDescription:
      "En Doble AI ayudamos a los profesionales y restaurantes de Edwards a convertir sus referencias en presencia digital sólida, en inglés y en español.",
    tags: ["Servicios profesionales", "Restaurantes del Riverwalk", "Barrios familiares"],
    blurb:
      "El centro no oficial del valle: medicina, abogados, bienes raíces y una buena cena en el Riverwalk.",
    h1: "IA y marketing digital para negocios de Edwards",
    intro: [
      "Edwards es donde el valle va al médico, firma sus documentos y se queda a cenar. Es el punto medio del valle y su centro profesional, rodeado de los vecindarios donde viven muchos de sus clientes.",
      "Los negocios profesionales de aquí viven de las referencias, y justo por eso importa la búsqueda: hoy toda referencia se verifica en internet antes de la primera llamada. Si un vecino te recomienda y tus resultados muestran un sitio desactualizado y 3 reseñas, una parte de esas referencias se evapora en silencio. Nuestras auditorías en la zona de Edwards encuentran siempre lo mismo: reputaciones reales con muy poca prueba digital.",
    ],
    servicesHeading: "Qué hacemos por los negocios de Edwards",
    services: [
      {
        phase: "Producto 01",
        name: "El Findability Report",
        body: "Auditamos lo que un cliente referido ve en el primer minuto de buscar tu nombre: perfil de Google, reseñas, estructura del sitio, la competencia real y cómo responden 4 motores de IA a 5 preguntas que alguien haría antes de elegir. Con puntaje sobre 10. 1.500 dólares, entregado en 5 a 7 días y acreditado a tu primer mes.",
      },
      {
        phase: "Producto 02",
        name: "Doble Presence",
        body: "Después reparamos el sitio y lo operamos: páginas en lenguaje claro sobre servicios, proceso y criterio de precios, más las preguntas frecuentes de donde citan los asistentes de IA, publicadas en español y en inglés y mantenidas al día. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
      },
    ],
    bilingualHeading: "Bilingüe, donde de verdad rinde",
    bilingual: [
      "Los consultorios y restaurantes de Edwards atienden clientes hispanohablantes y emplean equipos hispanohablantes todos los días. Formularios, páginas de servicio y una línea telefónica en español le quitan fricción real a clientes reales, y transmiten un nivel de atención que las referencias repiten.",
    ],
    faqHeading: "Preguntas frecuentes de negocios en Edwards",
    faq: [
      {
        q: "Mi negocio vive de referencias. ¿De verdad importa la búsqueda?",
        a: "Las referencias y la búsqueda ya son el mismo embudo. Casi todo cliente referido te busca antes de llamar, y lo que encuentra confirma la recomendación o la debilita. La presencia digital no reemplaza las referencias: evita que se te escapen.",
      },
      {
        q: "¿Qué debería publicar un negocio profesional?",
        a: "Respuestas, no folletos. Las preguntas que tus clientes hacen en consulta, escritas en lenguaje claro: qué atiendes, cómo es una primera visita, cómo funcionan los precios o la facturación, y para quién eres la opción correcta. Ese contenido gana en Google y en las respuestas de IA.",
      },
      {
        q: "¿Cómo funcionan las reseñas para un consultorio o despacho?",
        a: "Con cuidado y constancia. Configuramos una invitación simple que llega al cliente satisfecho en el momento correcto, y redactamos respuestas profesionales a lo que va llegando. Un goteo de reseñas recientes rinde más que un muro de reseñas viejas.",
      },
      {
        q: "¿Pueden ayudarme a atender clientes en español?",
        a: "Sí, y con calidad nativa, no con traducción automática. Creamos las versiones en español de tus páginas y materiales de ingreso, y cuando el mes lo pide, Presence pone un agente de voz bilingüe en tu línea, algo que tus clientes hispanohablantes agradecen desde la primera llamada. El nuestro contesta en el (970) 406-4630.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "La auditoría es gratuita. Calificamos tu presencia digital tal como la vive un cliente referido y te explicamos los hallazgos. Si quieres ayuda, recibes un plan con precios fijos, ordenado por lo que más impacto tiene primero.",
      },
    ],
  },

  // ─────────────────────────── EAGLE ───────────────────────────
  {
    slug: "eagle",
    lang: "en",
    pairSlug: "eagle-espanol",
    town: "Eagle",
    metaTitle: "Get found in Eagle, CO: the Findability Report and Doble Presence",
    metaDescription:
      "Doble AI helps Eagle contractors, trades, and local shops turn word-of-mouth reputations into search results that win the next decade of customers.",
    tags: ["County seat", "Trades & contractors", "Outdoor town"],
    blurb:
      "A working town that plays hard: contractors, trades, and singletrack out the back door.",
    h1: "AI and digital marketing for Eagle businesses",
    intro: [
      "Eagle is the valley's working town and its county seat, with trades and contractors who stay booked through word of mouth, and trailheads that fill every weekend. Most businesses here have more reputation than website, and for years that was fine.",
      "It stops being fine as the town grows. New residents arrive without a neighbor to ask, so they search first. In our audits of trades businesses across the valley, the pattern repeats: excellent operators with two-page websites and unclaimed Google profiles losing new arrivals to average competitors who have nine reviews and current photos. Booked solid today is not the same as found tomorrow.",
    ],
    servicesHeading: "What we do for Eagle businesses",
    services: [
      {
        phase: "Product 01",
        name: "The Findability Report",
        body: "We check whether your Google Business Profile is claimed and complete, whether your pages are indexed at all, who is ranking where you should be, and what four AI engines say when a homeowner asks who does your kind of work in Eagle. Scored out of ten. $1,500, delivered in 5 to 7 days, credited to your first month.",
      },
      {
        phase: "Product 02",
        name: "Doble Presence",
        body: "Then we build it out and run it: project photos with real descriptions, a service page per trade, and FAQs that answer what homeowners ask, in English and Spanish, with the review engine moving and the site watched for what breaks. From $2,500/month English, $3,500/month bilingual.",
      },
    ],
    bilingualHeading: "Bilingual on the job site",
    bilingual: [
      "The trades in this valley run on bilingual crews, and plenty of your customers are more comfortable in Spanish too. A bilingual phone line and a Spanish services page win you jobs and applicants that English-only competitors never hear about.",
    ],
    faqHeading: "Eagle business questions we hear most",
    faq: [
      {
        q: "I have more work than I can handle. Why would I invest in marketing?",
        a: "Because the backlog is not the business; the pipeline is. Visibility lets you pick better jobs instead of taking whatever calls, raises what you can charge, and carries you through the first slow season or the year a well-marketed competitor moves to town. It is also how you recruit, since workers search employers now too.",
      },
      {
        q: "What is the single highest-leverage fix for a trades business?",
        a: "A complete Google Business Profile with steady reviews. It is what appears when someone searches your trade plus Eagle, it costs nothing but attention, and in our audits it is the difference between the operators who get the calls and the ones who wonder why the phone is quiet.",
      },
      {
        q: "Do you build websites too, or just do audits?",
        a: "We build them. Fast, modern sites that load on a phone in the field, say clearly what you do and where, and feed Google and AI search properly. If your current site just needs repairs instead of replacement, the audit will say so.",
      },
      {
        q: "Can you help with Spanish-speaking customers and crews?",
        a: "Yes. We are a bilingual firm. We write real Spanish, not machine translation, for your services page and job ads, and where the month calls for it, Presence puts a bilingual voice agent on your line so no caller gets stuck. Ours answers at (970) 406-4630.",
      },
      {
        q: "What does it cost to get started?",
        a: "The audit is free and blunt. We score how findable you are, show you what the top competitor in your trade is doing, and give you a fixed-price list of fixes. Plenty of Eagle businesses start with just the Google profile work.",
      },
    ],
  },
  {
    slug: "eagle-espanol",
    lang: "es",
    pairSlug: "eagle",
    town: "Eagle",
    metaTitle: "Que te encuentren en Eagle: Findability Report y Doble Presence",
    metaDescription:
      "En Doble AI ayudamos a contratistas, oficios y comercios de Eagle a convertir su reputación de boca en boca en resultados de búsqueda que ganan clientes.",
    tags: ["Cabecera del condado", "Oficios y contratistas", "Pueblo de montaña"],
    blurb:
      "Un pueblo trabajador que también sabe jugar: contratistas, oficios y senderos saliendo del patio.",
    h1: "IA y marketing digital para negocios de Eagle",
    intro: [
      "Eagle es el pueblo trabajador del valle y la cabecera del condado, con oficios y contratistas que se mantienen ocupados de boca en boca, y senderos que se llenan cada fin de semana. La mayoría de los negocios de aquí tiene más reputación que sitio web, y durante años eso bastó.",
      "Deja de bastar cuando el pueblo crece. Los nuevos residentes llegan sin un vecino a quien preguntarle, así que buscan primero en internet. En nuestras auditorías de oficios en el valle se repite el patrón: operadores excelentes con sitios de 2 páginas y perfiles de Google sin reclamar, perdiendo a los recién llegados frente a competidores promedio con 9 reseñas y fotos recientes. Estar lleno hoy no es lo mismo que ser encontrado mañana.",
    ],
    servicesHeading: "Qué hacemos por los negocios de Eagle",
    services: [
      {
        phase: "Producto 01",
        name: "El Findability Report",
        body: "Revisamos si tu perfil de Google está reclamado y completo, si tus páginas están siquiera indexadas, quién aparece donde deberías aparecer tú y qué responden 4 motores de IA cuando un dueño de casa pregunta quién hace tu tipo de trabajo en Eagle. Con puntaje sobre 10. 1.500 dólares, entregado en 5 a 7 días y acreditado a tu primer mes.",
      },
      {
        phase: "Producto 02",
        name: "Doble Presence",
        body: "Después lo construimos y lo operamos: fotos de proyectos con descripciones reales, una página por servicio y preguntas frecuentes que responden lo que preguntan los dueños de casa, en español y en inglés, con el motor de reseñas andando y el sitio vigilado. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
      },
    ],
    bilingualHeading: "Bilingüe en la obra",
    bilingual: [
      "Los oficios de este valle funcionan con cuadrillas bilingües, y muchos de tus clientes también se sienten más cómodos en español. Una línea telefónica bilingüe y una página de servicios en español te ganan trabajos y candidatos de los que tus competidores nunca se enteran.",
    ],
    faqHeading: "Preguntas frecuentes de negocios en Eagle",
    faq: [
      {
        q: "Tengo más trabajo del que puedo atender. ¿Para qué invertir en marketing?",
        a: "Porque la carga de hoy no es el negocio: el negocio es la fila de mañana. La visibilidad te deja escoger mejores trabajos en lugar de aceptar lo que llegue, te permite cobrar mejor y te sostiene en la primera temporada lenta o el año en que llegue un competidor con buen marketing. También es como se recluta hoy, porque los trabajadores buscan a sus empleadores en internet.",
      },
      {
        q: "¿Cuál es el arreglo de mayor impacto para un negocio de oficios?",
        a: "Un perfil de Google completo con reseñas constantes. Es lo que aparece cuando alguien busca tu oficio más la palabra Eagle, no cuesta más que atención, y en nuestras auditorías es la diferencia entre quien recibe las llamadas y quien se pregunta por qué el teléfono no suena.",
      },
      {
        q: "¿También construyen sitios web o solo hacen auditorías?",
        a: "Los construimos. Sitios rápidos y modernos que cargan en un teléfono en la obra, dicen claramente qué haces y dónde, y alimentan bien a Google y a la búsqueda con IA. Si tu sitio actual solo necesita reparaciones, la auditoría te lo dirá.",
      },
      {
        q: "¿Pueden ayudarme con clientes y cuadrillas que hablan español?",
        a: "Sí. Somos una firma bilingüe. Escribimos español de verdad, no traducción automática, para tu página de servicios y tus anuncios de empleo, y cuando el mes lo pide, Presence pone un agente de voz bilingüe en tu línea para que ninguna llamada se pierda. El nuestro contesta en el (970) 406-4630.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "La auditoría es gratuita y directa. Calificamos qué tan fácil es encontrarte, te mostramos qué está haciendo el mejor competidor de tu oficio y te damos una lista de arreglos con precios fijos. Muchos negocios de Eagle empiezan solo con el trabajo del perfil de Google.",
      },
    ],
  },

  // ────────────────────────── GYPSUM ──────────────────────────
  {
    slug: "gypsum",
    lang: "en",
    pairSlug: "gypsum-espanol",
    town: "Gypsum",
    metaTitle: "Get found in Gypsum, CO: the Findability Report and Doble Presence",
    metaDescription:
      "Doble AI is based in Gypsum. We help our home town's trades, industry, and family businesses own the local search results while they are still cheap to own.",
    tags: ["Our home town", "Trades & industry", "Fastest growing"],
    blurb:
      "Where we live and work. The valley's workshop, growing faster than anywhere else in the county.",
    h1: "AI and digital marketing for Gypsum businesses",
    intro: [
      "Gypsum is our home town. Doble AI operates from here, so this page is less of a pitch and more of a neighborly observation: this is the fastest-growing end of the valley, the airport and the industry are here, the new neighborhoods are here, and almost none of it is visible online yet.",
      "We have audited Gypsum businesses, and the scores land near the bottom of the valley: unclaimed profiles, sites that have not changed in years, reviews in the single digits. That is not an insult. It is an opening. In a town where nobody has claimed the search results, the first business in each category to do the basics well owns them, cheaply, for years.",
    ],
    servicesHeading: "What we do for Gypsum businesses",
    services: [
      {
        phase: "Product 01",
        name: "The Findability Report",
        body: "We are in Gypsum, so we know how little is published here. We check your Google Business Profile, your site structure, and your reviews, then ask four AI engines the five questions a new Gypsum family or a customer flying into the airport would ask. Scored out of ten. $1,500, delivered in 5 to 7 days, credited to your first month.",
      },
      {
        phase: "Product 02",
        name: "Doble Presence",
        body: "Then we build it and run it: real photos, real project write-ups, and FAQs in plain language, published in English and Spanish. In a town with this little published content, even a modest page per service makes you the answer AI assistants find. From $2,500/month English, $3,500/month bilingual.",
      },
    ],
    bilingualHeading: "Bilingual, like the town itself",
    bilingual: [
      "Gypsum's workforce and a growing share of its families live in Spanish as much as English. We build Spanish service pages and job postings that reach them, written natively by our bilingual team, because we know these neighbors: they are ours too.",
    ],
    faqHeading: "Gypsum business questions we hear most",
    faq: [
      {
        q: "Does a Gypsum business really need digital marketing?",
        a: "Less than a Vail business needs it, and that is exactly the point. Here the basics are still unclaimed: a complete Google profile, twenty reviews, and one good page per service put you at the top of local results and keep you there, because almost no competitor in town is doing any of it.",
      },
      {
        q: "What did your audits of Gypsum businesses actually find?",
        a: "Scores in the bottom third of the valley: unclaimed or empty Google profiles, websites years out of date, strong businesses with almost no reviews, and zero content for Spanish speakers. Every one of those is fixable in weeks, not months.",
      },
      {
        q: "My customers are all word of mouth. Why change what works?",
        a: "Keep the word of mouth; it is your best asset. But Gypsum is adding new households faster than anywhere in the county, and new arrivals have no word of mouth to rely on. They search. Showing up well is how your reputation reaches people who have not met you yet.",
      },
      {
        q: "How would a voice agent work for a crew that is in the field all day?",
        a: "Call LUCI, the one that answers our own line at (970) 406-4630, and you will hear it. It answers any hour, in English or Spanish, asks the questions you would ask (what is the job, where, how soon), and emails you a clean summary with the callback number. You return one organized call instead of playing phone tag all week.",
      },
      {
        q: "What does it cost to get started?",
        a: "The audit is free, and since we are based in Gypsum we will happily do the walkthrough over coffee in town. After that, the full Findability Report is $1,500, credited in full against your first month of Doble Presence. For most Gypsum businesses the first fixes are also the cheapest ones on the list.",
      },
    ],
  },
  {
    slug: "gypsum-espanol",
    lang: "es",
    pairSlug: "gypsum",
    town: "Gypsum",
    metaTitle: "Que te encuentren en Gypsum: Findability Report y Doble Presence",
    metaDescription:
      "Doble AI tiene su base en Gypsum. Ayudamos a los oficios, la industria y los negocios familiares de nuestro pueblo a adueñarse de la búsqueda local.",
    tags: ["Nuestro pueblo", "Oficios e industria", "El que más crece"],
    blurb:
      "Donde vivimos y trabajamos. El taller del valle, creciendo más rápido que cualquier otro rincón del condado.",
    h1: "IA y marketing digital para negocios de Gypsum",
    intro: [
      "Gypsum es nuestro pueblo. Doble AI opera desde aquí, así que esta página es menos un discurso de venta y más una observación de vecino: este es el extremo del valle que más rápido crece, aquí están el aeropuerto y la industria, aquí están los vecindarios nuevos, y casi nada de eso es visible en internet todavía.",
      "Hemos auditado negocios de Gypsum y las calificaciones quedan cerca del fondo del valle: perfiles sin reclamar, sitios que no cambian en años, reseñas que se cuentan con una mano. Eso no es un insulto, es una oportunidad. En un pueblo donde nadie ha reclamado los resultados de búsqueda, el primer negocio de cada categoría que haga bien lo básico se queda con ellos, a bajo costo y por años.",
    ],
    servicesHeading: "Qué hacemos por los negocios de Gypsum",
    services: [
      {
        phase: "Producto 01",
        name: "El Findability Report",
        body: "Vivimos en Gypsum, así que sabemos lo poco que se publica aquí. Revisamos tu perfil de Google, la estructura de tu sitio y tus reseñas, y después le hacemos a 4 motores de IA las 5 preguntas que haría una familia nueva de Gypsum o un cliente que llega por el aeropuerto. Con puntaje sobre 10. 1.500 dólares, entregado en 5 a 7 días y acreditado a tu primer mes.",
      },
      {
        phase: "Producto 02",
        name: "Doble Presence",
        body: "Después lo construimos y lo operamos: fotos reales, proyectos reales y preguntas frecuentes en lenguaje claro, publicadas en español y en inglés. En un pueblo con tan poco contenido publicado, hasta una página modesta por servicio te convierte en la respuesta que la IA encuentra. Desde 2.500 dólares al mes en inglés y 3.500 bilingüe.",
      },
    ],
    bilingualHeading: "Bilingüe, como el pueblo mismo",
    bilingual: [
      "La fuerza laboral de Gypsum y una parte creciente de sus familias viven tanto en español como en inglés. Creamos páginas de servicios y anuncios de empleo en español que sí les llegan, escritos con calidad nativa por nuestro equipo bilingüe. Conocemos a estos vecinos: también son los nuestros.",
    ],
    faqHeading: "Preguntas frecuentes de negocios en Gypsum",
    faq: [
      {
        q: "¿Un negocio de Gypsum realmente necesita marketing digital?",
        a: "Menos que un negocio de Vail, y ese es justamente el punto. Aquí lo básico sigue libre: un perfil de Google completo, 20 reseñas y una buena página por servicio te ponen arriba en los resultados locales y te mantienen ahí, porque casi ningún competidor del pueblo lo está haciendo.",
      },
      {
        q: "¿Qué encontraron sus auditorías de negocios en Gypsum?",
        a: "Calificaciones en el tercio más bajo del valle: perfiles de Google vacíos o sin reclamar, sitios con años sin actualizarse, negocios sólidos casi sin reseñas y cero contenido en español. Todo eso se arregla en semanas, no en meses.",
      },
      {
        q: "Mis clientes llegan de boca en boca. ¿Para qué cambiar lo que funciona?",
        a: "Conserva la boca en boca: es tu mejor activo. Pero Gypsum suma hogares nuevos más rápido que cualquier otro pueblo del condado, y los recién llegados no tienen vecinos a quienes preguntar. Buscan en internet. Aparecer bien es la forma de que tu reputación alcance a quienes todavía no te conocen.",
      },
      {
        q: "¿Cómo funcionaría un agente de voz para una cuadrilla que pasa el día en el campo?",
        a: "Marca el (970) 406-4630 y escucha a LUCI, la que contesta nuestra propia línea. Contesta a cualquier hora, en inglés o en español, hace las preguntas que tú harías (qué trabajo es, dónde, para cuándo) y te envía por correo un resumen limpio con el número de contacto. Devuelves una sola llamada organizada en lugar de perseguir mensajes toda la semana.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "La auditoría es gratuita, y como vivimos en Gypsum, con gusto te explicamos los resultados con un café aquí en el pueblo. Después, el Findability Report completo cuesta 1.500 dólares y te lo acreditamos completo al primer mes de Doble Presence. Para la mayoría de los negocios de Gypsum, los primeros arreglos son también los más baratos de la lista.",
      },
    ],
  },
];

export function getTownPage(slug: string): TownPage | undefined {
  return townPages.find((t) => t.slug === slug);
}
