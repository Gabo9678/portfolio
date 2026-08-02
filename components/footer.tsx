import Image from "next/image";
import { EMAIL } from "@/lib/data";

const LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export function Footer() {
  return (
    <footer className="hairline-t px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto flex max-w-(--content-max) flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex min-w-0 flex-col gap-4">
            <span className="mono-label">Escríbeme</span>
            <a
              href={`mailto:${EMAIL}`}
              className="min-w-0 break-all font-display text-[clamp(1.6rem,5.2vw,4.25rem)] font-bold leading-none tracking-tight text-ink transition-opacity duration-(--dur-med) hover:opacity-60"
              style={{ overflowWrap: "anywhere" }}
            >
              {EMAIL}
            </a>
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-mute" style={{ textWrap: "pretty" }}>
              Si tienes algo entre manos y quieres que alguien lo construya con
              cuidado, cuéntamelo. Respondo el mismo día, casi siempre con
              preguntas.
            </p>
          </div>
          <Image
            src="/Gabriel.png"
            alt="Pixel art de Gabriel Molina"
            width={96}
            height={96}
            unoptimized
            className="opacity-90"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div className="hairline-t flex flex-wrap items-center justify-between gap-x-7 gap-y-4 pt-5">
          <nav aria-label="Enlaces externos" className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="link-quiet font-mono text-[11px] uppercase tracking-[0.14em]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
