import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { ProjectCover } from "@/components/project-cover";
import { SectionHead } from "@/components/section-head";

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead title="Proyectos" />
      <ul className="grid list-none grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-px border border-line bg-line p-0">
        {PROJECTS.map((p) => (
          <li key={p.slug} className="min-w-0">
            <Link
              href={`/proyectos/${p.slug}`}
              className="group flex h-full flex-col gap-5 bg-paper p-5 transition-colors duration-(--dur-med) hover:bg-paper-raised focus-visible:bg-paper-raised"
            >
              <div className="overflow-hidden">
                <ProjectCover
                  variant={p.coverVariant}
                  className="opacity-80 transition-[transform,opacity] duration-(--dur-long) ease-(--ease-out) group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">{p.name}</h3>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-ink-mute tabular-nums">{p.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-mute" style={{ textWrap: "pretty" }}>
                  {p.line}
                </p>
                <span className="mono-label mt-1 text-[10px] transition-colors duration-(--dur-short) group-hover:text-ink">
                  Ver el caso →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
