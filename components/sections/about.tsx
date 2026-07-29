import { SectionHead } from "@/components/section-head";

// Cifras placeholder — se cambian por las reales antes de publicar.
const STATS = [
  { num: "02", label: "años escribiendo interfaces" },
  { num: "14", label: "proyectos en producción" },
  { num: "05", label: "tecnologías de cada semana" },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead title="Sobre mí" />
      <div className="grid items-start gap-12 md:grid-cols-[minmax(200px,0.55fr)_1fr] md:gap-16">
        <figure className="m-0 flex flex-col gap-3">
          {/* Retrato placeholder — se cambia por foto real en grises */}
          <div
            aria-label="Retrato (placeholder)"
            role="img"
            className="grid aspect-4/5 w-full place-items-center border border-line bg-paper-raised"
          >
            <span className="mono-label text-ink-ghost">foto pendiente</span>
          </div>
          <figcaption className="mono-label text-[10px]">Caracas, 2026</figcaption>
        </figure>
        <div className="flex min-w-0 flex-col gap-10">
          <div className="flex max-w-[62ch] flex-col gap-5">
            <p className="text-(length:--text-sub) font-medium leading-snug tracking-[-0.01em] text-ink" style={{ textWrap: "pretty" }}>
              Empecé maquetando la página de la panadería de mi tía y todavía no
              me quito el vicio de acomodar cosas hasta que encajan.
            </p>
            <p className="leading-[1.8] text-ink-mute" style={{ textWrap: "pretty" }}>
              Llevo dos años trabajando en frontend: interfaces que cargan
              rápido, se leen bien y no se rompen en el teléfono de nadie. Vengo
              del lado del diseño, así que me obsesionan el tipo de letra, el
              ritmo del espacio y esas transiciones de 200 ms que uno solo nota
              cuando están mal.
            </p>
            <p className="leading-[1.8] text-ink-mute" style={{ textWrap: "pretty" }}>
              Prefiero entender el problema antes de abrir el editor. Pregunto
              mucho, borro más de lo que escribo y me llevo bien con la gente de
              backend. Fuera de la pantalla: café colado, pixel art y caminar
              sin rumbo por Los Palos Grandes.
            </p>
          </div>
          <dl className="hairline-t grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {STATS.map((s) => (
              <div key={s.label} className="hairline-b flex flex-col gap-2 py-5 pr-5">
                <dd className="order-2 mono-label leading-relaxed normal-case tracking-[0.08em]">{s.label}</dd>
                <dt className="order-1 font-display text-4xl font-bold leading-none tracking-tight text-ink tabular-nums">
                  {s.num}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
