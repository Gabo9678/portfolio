// Contenido placeholder — todo lo que hay aquí es ficticio y se
// reemplaza cuando el diseño esté aprobado.

export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  line: string;
  stack: string[];
  body: string[];
  coverVariant: number;
};

export const PROJECTS: Project[] = [
  {
    slug: "cauce",
    name: "Cauce",
    year: "2026",
    role: "Frontend (solo)",
    line: "Los repartidores reportaban por WhatsApp; ahora todo el equipo ve la misma ruta en vivo.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Mapbox"],
    body: [
      "Una distribuidora de agua movía 60 entregas al día coordinándose por mensajes sueltos. Nadie sabía qué se entregó hasta el cierre del día, y la oficina llamaba una por una para confirmar.",
      "Armé un panel donde cada ruta es una fila y cada entrega un estado con hora. El repartidor marca desde el teléfono con un botón grande; la oficina lo ve en menos de dos segundos. Lo pensé mobile-first porque el 80% del uso pasa en la calle, con una barra de datos mala.",
      "El cierre diario pasó de 40 minutos de llamadas a una pantalla que ya está lista cuando el último camión vuelve.",
    ],
    coverVariant: 0,
  },
  {
    slug: "bodegon-mercurio",
    name: "Bodegón Mercurio",
    year: "2025",
    role: "Frontend + maquetado",
    line: "Catálogo de 900 productos que antes vivía en un PDF que nadie abría.",
    stack: ["Angular", "TypeScript", "SCSS"],
    body: [
      "El bodegón vendía por catálogo PDF y lista de precios en Excel. Cada cambio de precio significaba volver a exportar todo.",
      "Construí la tienda sobre un catálogo editable: búsqueda que responde mientras escribes, filtros por pasillo y un carrito que sobrevive al cierre del navegador.",
      "Lo más difícil no fue el carrito: fue lograr que 900 fotos de distinta calidad se vieran ordenadas en una sola grilla.",
    ],
    coverVariant: 1,
  },
  {
    slug: "radar-civico",
    name: "Radar Cívico",
    year: "2025",
    role: "Frontend / datos",
    line: "Convierte presupuestos municipales en algo que se entiende en un minuto.",
    stack: ["React", "D3", "Tailwind"],
    body: [
      "Un colectivo de periodistas publicaba tablas de presupuesto en hojas de cálculo. Técnicamente públicas, prácticamente ilegibles.",
      "Hice un visualizador donde eliges una parroquia y ves en qué se gastó, comparado con el año anterior. Sin animaciones de adorno: cada movimiento en pantalla existe para explicar un cambio de escala.",
      "Trabajé de cerca con la editora para escribir los textos de cada gráfico. La mitad del proyecto fue redacción.",
    ],
    coverVariant: 2,
  },
  {
    slug: "nota",
    name: "Nota",
    year: "2024",
    role: "Proyecto personal",
    line: "Editor de notas que funciona sin internet y no le manda nada a nadie.",
    stack: ["React", "IndexedDB", "CSS"],
    body: [
      "Quería escribir en el metro sin señal y sin cuenta de usuario. Todo lo que probé pedía login antes de dejarme escribir una línea.",
      "Nota guarda en el dispositivo, abre en menos de un segundo y tiene exactamente cuatro atajos de teclado. Nada más.",
      "Lo uso todos los días. Es el mejor termómetro que tengo: cada bug lo sufro yo primero.",
    ],
    coverVariant: 3,
  },
  {
    slug: "turno",
    name: "Turno",
    year: "2024",
    role: "Frontend",
    line: "Agenda para barberías, pensada para usarse con una mano y tijeras en la otra.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    body: [
      "Tres barberos compartían un cuaderno. Si alguien se equivocaba de página, dos clientes llegaban a la misma hora.",
      "La pantalla principal es el día de hoy, en columnas por barbero, con bloques que se arrastran. Botones de 56 px porque nadie va a apuntar bien con la mano ocupada.",
      "Añadí recordatorio por WhatsApp un día antes: las ausencias bajaron y esa fue la métrica que le importó al dueño.",
    ],
    coverVariant: 4,
  },
];

export type Job = {
  period: string;
  place: string;
  role: string;
  company: string;
  points: string[];
};

export const JOBS: Job[] = [
  {
    period: "2025 — hoy",
    place: "Remoto",
    role: "Frontend Developer",
    company: "Lumen Studio",
    points: [
      "Mantengo el front de tres productos con Next.js y una librería de componentes compartida.",
      "Reduje el tiempo de carga del panel principal reescribiendo cómo pedíamos los datos.",
      "Escribo la documentación de los componentes; ahora diseño y desarrollo discuten sobre lo mismo.",
    ],
  },
  {
    period: "2024 — 2025",
    place: "Caracas, VE",
    role: "Frontend Jr.",
    company: "Anticipa Digital",
    points: [
      "Maqueté nueve sitios de clientes con Angular y SCSS, del diseño a producción.",
      "Armé una plantilla base interna que le quitó una semana de trabajo repetido a cada proyecto nuevo.",
      "Me tocó hablar con clientes. Aprendí a traducir «que se vea más moderno» en decisiones concretas.",
    ],
  },
  {
    period: "2023 — 2024",
    place: "Caracas, VE",
    role: "Freelance y prácticas",
    company: "Por mi cuenta",
    points: [
      "Sitios para negocios del barrio: panadería, dos consultorios y una escuela de música.",
      "Aprendí a cobrar, a decir que no y a entregar algo que el cliente pueda editar solo.",
      "Publiqué mis primeros proyectos abiertos en GitHub y empecé a escribir sobre lo que rompía.",
    ],
  },
];

export type StackItem = {
  name: string;
  note: string;
  level: string;
  icon: "react" | "angular" | "js" | "css" | "tailwind";
};

export const STACK: StackItem[] = [
  {
    name: "Next.js / React",
    note: "Mi terreno por defecto. Componentes pequeños, estado donde de verdad hace falta.",
    level: "A diario",
    icon: "react",
  },
  {
    name: "Angular",
    note: "Lo aprendí en la agencia y le agarré cariño: estructura y tipos desde el minuto cero.",
    level: "En proyectos",
    icon: "angular",
  },
  {
    name: "JavaScript",
    note: "Antes de los frameworks. Sigo depurando con la consola abierta y sin pena.",
    level: "Base",
    icon: "js",
  },
  {
    name: "CSS",
    note: "Grid, capas y transiciones. La parte donde más tiempo pierdo a propósito.",
    level: "A diario",
    icon: "css",
  },
  {
    name: "Tailwind",
    note: "Para moverme rápido sin inventar un sistema nuevo en cada proyecto.",
    level: "A diario",
    icon: "tailwind",
  },
];

export const NAV_SECTIONS = [
  { id: "sobre", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiencia" },
];

export const EMAIL = "hola@gabrielmolina.dev";
