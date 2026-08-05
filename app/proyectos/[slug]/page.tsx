import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { ProjectCover } from "@/components/project-cover";
import { ProjectCarousel } from "@/components/project-carousel";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Gabriel Molina`,
    description: project.line,
  };
}

export default async function ProjectPage(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <main className="mx-auto max-w-[1050px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <Link
        href="/#proyectos"
        className="link-quiet mb-12 inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em]"
      >
        ← Volver al índice
      </Link>

      <header className="hairline-b flex flex-col gap-4 pb-8">
        <h1
          className="font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.03em] text-ink"
          style={{ overflowWrap: "anywhere" }}
        >
          {project.name}
        </h1>
        <p className="m-0 max-w-[60ch] text-[16px] leading-relaxed text-ink-mute" style={{ textWrap: "pretty" }}>
          {project.line}
        </p>
      </header>

      <dl className="fx hairline-b m-0 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-7 py-8">
        <div className="flex flex-col gap-2">
          <dt className="mono-label text-[10px]">Rol</dt>
          <dd className="m-0 text-[15px] text-ink-dim">{project.role}</dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className="mono-label text-[10px]">Año</dt>
          <dd className="m-0 text-[15px] text-ink-dim tabular-nums">{project.year}</dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className="mono-label text-[10px]">Stack</dt>
          <dd className="m-0 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="border border-line-strong px-2.5 py-1 font-mono text-[11px] tracking-[0.05em] text-ink-dim">
                {s}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="fx grid gap-8 py-12 md:grid-cols-[minmax(180px,0.45fr)_1fr] md:gap-14">
        <span className="mono-label">El problema y qué hice</span>
        <div className="flex max-w-[64ch] flex-col gap-5">
          {project.body.map((par) => (
            <p key={par} className="m-0 text-[15.5px] leading-[1.85] text-ink-mute" style={{ textWrap: "pretty" }}>
              {par}
            </p>
          ))}
        </div>
      </div>

      {project.screenshots ? (
        <ProjectCarousel images={project.screenshots} alt={project.name} />
      ) : (
        <div className="flex flex-col gap-10">
          {[0, 1].map((i) => (
            <figure key={i} className="fx m-0 flex flex-col gap-3">
              <div className="overflow-hidden border border-line">
                <ProjectCover variant={project.coverVariant + i} />
              </div>
              <figcaption className="mono-label text-[10px]">
                Captura {String(i + 1).padStart(2, "0")} · placeholder
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <Link
        href={`/proyectos/${next.slug}`}
        className="fx hairline-t group mt-20 flex flex-wrap items-baseline justify-between gap-4 pt-6"
      >
        <span className="mono-label transition-colors duration-(--dur-short) group-hover:text-ink">
          Siguiente caso
        </span>
        <span className="font-display text-[clamp(1.5rem,3.6vw,2.5rem)] font-bold tracking-tight text-ink transition-opacity duration-(--dur-med) group-hover:opacity-70">
          {next.name} →
        </span>
      </Link>
    </main>
  );
}
