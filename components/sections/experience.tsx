import { JOBS } from "@/lib/data";
import { SectionHead } from "@/components/section-head";

// Timeline vertical — lógica de diegovz.com: línea conectora, un nodo por
// entrada, empresa + fechas arriba, rol destacado, bullets debajo.
export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead title="Experiencia" />
      <ol className="relative m-0 list-none p-0 pl-6 sm:pl-8">
        {/* línea conectora */}
        <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-line-strong sm:left-[7px]" />
        {JOBS.map((j, i) => (
          <li key={j.company} className={`relative ${i === JOBS.length - 1 ? "pb-2" : "pb-14"}`}>
            {/* nodo */}
            <span
              aria-hidden
              className={`absolute -left-6 top-[7px] h-[11px] w-[11px] rounded-full border sm:-left-8 ${
                i === 0 ? "border-ink bg-ink" : "border-line-strong bg-paper"
              }`}
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold leading-tight tracking-tight text-ink">
                    {j.company}
                  </h3>
                  <span className="mono-label text-[10px]">{j.place}</span>
                </div>
                <span className="font-mono text-[12px] tracking-[0.06em] text-ink-dim tabular-nums">
                  {j.period}
                </span>
              </div>
              <p className="m-0 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-mute">
                {j.role}
              </p>
              <ul className="m-0 flex max-w-[66ch] list-none flex-col gap-3 p-0">
                {j.points.map((pt) => (
                  <li key={pt} className="grid grid-cols-[14px_1fr] gap-2 text-sm leading-[1.7] text-ink-mute" style={{ textWrap: "pretty" }}>
                    <span aria-hidden className="text-ink-ghost">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
