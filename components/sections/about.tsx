import Image from "next/image";
import { SectionHead } from "@/components/section-head";

const STATS = [
  { num: "1.5+", label: "años de experiencia frontend" },
  { num: "02", label: "empresas del sector financiero" },
  { num: "04+", label: "tecnologías clave (React, Next, Angular, MUI)" },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-14 sm:px-8 sm:py-18">
      <SectionHead title="Sobre mí" />
      <div className="grid items-start gap-12 md:grid-cols-[minmax(170px,0.45fr)_1fr] md:gap-16 lg:grid-cols-[minmax(200px,0.55fr)_1fr]">
        <figure className="fx m-0 flex w-full max-w-55 flex-col gap-3 md:max-w-none">
          <div
            aria-label="Foto de Gabriel Molina"
            className="overflow-hidden border border-line bg-paper-raised"
          >
            <Image
              src="/foto_carnet.jpg"
              alt="Foto carnet de Gabriel Molina"
              width={320}
              height={400}
              className="aspect-4/5 w-full object-cover"
              priority
            />
          </div>
          <figcaption className="mono-label text-[10px]">Caracas, 2026</figcaption>
        </figure>
        <div className="flex min-w-0 flex-col gap-10">
          <div className="fx flex max-w-[62ch] flex-col gap-5">
            <p className="text-(length:--text-sub) font-medium leading-snug tracking-[-0.01em] text-ink" style={{ textWrap: "pretty" }}>
              Frontend Developer con un año y medio de experiencia construyendo soluciones web para el sector bancario y corporativo.
            </p>
            <p className="leading-[1.8] text-ink-mute" style={{ textWrap: "pretty" }}>
              Inicié mi trayectoria en el área de Banca Web del Banco Mercantil trabajando con Angular en el desarrollo del módulo de Clave C2P para la plataforma web de Mercantil en Línea Personas. Posteriormente ingresé a Atenea Mercantil como Analista de QA y di el paso a desarrollo Frontend con Next.js y Material UI (MUI).
            </p>
            <p className="leading-[1.8] text-ink-mute" style={{ textWrap: "pretty" }}>
              Formé parte del equipo que desarrolló el portal en producción de MSFI (Mercantil Servicios Financieros Internacionales) y lideré la implementación frontend del proyecto MSF (Mercantil Servicios Financieros) sobre la misma arquitectura, aplicando rediseño en diferentes componentes.
            </p>
          </div>
          <dl className="hairline-t grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {STATS.map((s) => (
              <div key={s.label} className="fx hairline-b flex flex-col gap-2 py-5 pr-5">
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
