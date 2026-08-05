// Datos reales de Gabriel Molina extraídos de audios de voz

export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  line: string;
  stack: string[];
  body: string[];
  coverVariant: number;
  screenshots?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "msf-mercantil",
    name: "MSF — Mercantil Servicios Financieros",
    year: "2026",
    role: "Frontend Lead",
    line: "Lideré el desarrollo frontend de la nueva plataforma corporativa MSF, actualmente finalizada a la espera de pase a producción.",
    stack: ["Next.js", "TypeScript", "Material UI", "Headless CMS"],
    body: [
      "Lideré la implementación del frontend para la nueva plataforma corporativa de Mercantil Servicios Financieros (MSF), tomando como base la arquitectura construida previamente en MSFI.",
      "Estuve a cargo del rediseño de componentes e implementación en Next.js y Material UI (MUI), garantizando consistencia visual, diseño responsive y consumo directo del CMS Headless.",
      "El proyecto se encuentra totalmente culminado y listo a la espera del despliegue oficial a producción.",
    ],
    coverVariant: 0,
    screenshots: ["/msf-one.webp", "/msf-two.webp", "/msf-three.webp"],
  },
  {
    slug: "msfi-mercantil",
    name: "MSFI — Mercantil Servicios Financieros Internacionales",
    year: "2026",
    role: "Frontend Developer (Jr.)",
    line: "Portal corporativo internacional desarrollado para Atenea Mercantil, actualmente activo en producción.",
    stack: ["Next.js", "TypeScript", "Material UI", "Headless CMS"],
    body: [
      "Formé parte del equipo de desarrollo frontend del portal público institucional de Mercantil Servicios Financieros Internacionales (MSFI) bajo Atenea Mercantil.",
      "Construí componentes de interfaz dinámicos y adaptables utilizando Next.js y Material UI (MUI), maquetando los diseños desde Figma e integrando características clave como el Modo Oscuro (Dark Mode).",
      "Conecté componentes con el backend mediante un Headless CMS y colaboré estrechamente en el control de calidad previo al lanzamiento a producción.",
    ],
    coverVariant: 1,
    screenshots: ["/msfi-one.webp", "/MSFI-two.webp", "/msfi-three.webp"],
  },
  {
    slug: "clave-c2p-banca-web",
    name: "Generación de Clave C2P — Banca Web",
    year: "2025",
    role: "Frontend Developer (Pasante)",
    line: "Módulo en Mercantil en Línea Personas para la generación de clave dinámica C2P de cobros y pagos a comercios.",
    stack: ["Angular", "TypeScript", "RxJS", "SCSS", "Postman"],
    body: [
      "Durante mi pasantía en el área de Banca Web del Banco Mercantil, desarrollé la funcionalidad para la generación de la Clave C2P (Comercio a Persona) dentro de la plataforma web de Mercantil en Línea Personas.",
      "En lugar de crear componentes desde cero, aproveché y adapté la librería de componentes reutilizables existente en la arquitectura de la banca por internet. Validé y probé las APIs del backend con Postman para asegurar la correcta estructura de respuesta y mapeo de datos en el frontend.",
      "Implementé el flujo completo de validación en Angular, incluyendo el manejo de excepciones transaccionales en tiempo real y el diseño de páginas de error específicas para garantizar la seguridad y experiencia del usuario.",
    ],
    coverVariant: 2,
  },
];

export type Job = {
  period: string;
  place: string;
  role: string;
  company: string;
  logo?: string;
  points: string[];
};

export const JOBS: Job[] = [
  {
    period: "2025",
    place: "Caracas, VE",
    role: "Frontend Developer (Pasante)",
    company: "Grupo Mercantil — Banca Web",
    logo: "/banco_mercantil_logo.webp",
    points: [
      "Desarrollé en la plataforma web de Mercantil en Línea Personas el módulo de generación de Clave C2P para cobros y pagos a comercios afiliados.",
      "Reutilicé y adapté la librería de componentes existente en la banca en línea e integré las APIs probadas previamente en Postman.",
      "Implementé el mapeo de datos transaccionales, manejo de errores en tiempo real y vistas de contingencia/error en Angular.",
    ],
  },
    {
    period: "2026",
    place: "Caracas, VE",
    role: "Frontend Developer",
    company: "Atenea Mercantil",
    logo: "/atenea_mercantil_logo.webp",
    points: [
      "Lideré el desarrollo frontend del nuevo portal corporativo MSF (Mercantil Servicios Financieros), adaptando el rediseño de componentes sobre la arquitectura previa de MSFI (proyecto culminado, listo para producción).",
      "Participé como Frontend Developer Jr. en la construcción del portal MSFI (Mercantil Servicios Financieros Internacionales), activo en producción.",
      "Desarrollé componentes responsive en Next.js y Material UI (MUI), maquetando prototipos desde Figma e implementando Modo Oscuro.",
      "Inicié en la empresa como Analista de QA y transicioné a desarrollo Frontend, aportando un fuerte enfoque en calidad de software y prevención de errores.",
    ],
  },
];

export type StackItem = {
  name: string;
  note: string;
  icon: "react" | "angular" | "js" | "css" | "tailwind";
};

export const STACK: StackItem[] = [
  {
    name: "Next.js / React",
    note: "Mi stack principal. Creación de portales y web apps con renderizado del lado del servidor y arquitectura limpia.",
    icon: "react",
  },
  {
    name: "Angular",
    note: "Experiencia en banca en línea (Grupo Mercantil). Tipado estricto, servicios y RxJS para aplicaciones complejas.",
    icon: "angular",
  },
  {
    name: "Tailwind CSS & MUI",
    note: "Maquetación responsive desde Figma, diseño en modo oscuro y desarrollo con librerías de componentes UI.",
    icon: "tailwind",
  },
  {
    name: "JavaScript / TypeScript",
    note: "Base sólida para escribir código frontend mantenible, seguro y escalable.",
    icon: "js",
  },
  {
    name: "CSS & Design Systems",
    note: "Transformación de prototipos visuales en código con atención al detalle y transiciones fluidas.",
    icon: "css",
  },
];

export const NAV_SECTIONS = [
  { id: "sobre", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiencia" },
];

export const EMAIL = "molinagabriel9678@gmail.com";
