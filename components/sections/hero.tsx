import { PixelFace } from "@/components/pixel-face";

export function Hero() {
  return (
    <section className="mx-auto max-w-(--content-max) px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_auto]">
        <div className="hero-rise flex min-w-0 flex-col gap-6">
          <h1
            className="font-display text-(length:--text-display) font-bold leading-[0.95] tracking-[-0.03em] text-ink"
            style={{ overflowWrap: "anywhere" }}
          >
            Gabriel
            <br />
            Molina
          </h1>
          <p className="font-mono text-[13px] leading-relaxed tracking-[0.02em] text-ink-dim">
            Frontend developer — Caracas
          </p>
          <p className="max-w-[44ch] text-[15.5px] leading-relaxed text-ink-mute" style={{ textWrap: "pretty" }}>
            Escribo interfaces desde Caracas. Me gusta el detalle que nadie nota
            hasta que falta.
          </p>
        </div>
        <div className="hero-rise-late flex flex-col items-center gap-4 justify-self-center md:justify-self-end">
          <div className="relative border border-line p-5">
            <PixelFace size={200} className="floaty h-auto w-[clamp(150px,18vw,220px)]" />
            <span aria-hidden className="absolute -left-px -top-px h-2 w-2 border-l border-t border-ink" />
            <span aria-hidden className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-ink" />
          </div>
          <span className="mono-label text-[10px]">
            16 × 16 px · el único color del sitio
          </span>
        </div>
      </div>
      <div className="hairline-t mt-16 flex items-end justify-between gap-6 pb-6 pt-4">
        <span className="mono-label">Baja para leer</span>
        <span className="mono-label">MMXXVI</span>
      </div>
    </section>
  );
}
