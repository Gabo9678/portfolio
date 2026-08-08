import Image from "next/image";
import { FireflyParticles } from "@/components/firefly-particles";
import { PixelSpeechBubble } from "@/components/pixel-speech-bubble";
import { EMAIL } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex w-full scroll-mt-24 flex-col overflow-hidden"
    >
      <FireflyParticles />
      <div className="mx-auto flex w-full max-w-(--content-max) flex-col px-5 pb-2 pt-24 sm:px-8 sm:pt-28">
        <div className="relative mb-10 grid items-center gap-12 md:grid-cols-[1.25fr_auto]">
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
            Frontend Developer — 1.5+ años de experiencia
          </p>
          <p
            className="max-w-[44ch] text-[15.5px] leading-relaxed text-ink-mute"
            style={{ textWrap: "pretty" }}
          >
            Especializado en React, Next.js y Angular. Construyo interfaces web
            escalables, accesibles y optimizadas para producción en el sector
            financiero y corporativo.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2.5 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-opacity duration-(--dur-short) hover:opacity-80"
            >
              Ver proyectos
              <svg
                aria-hidden
                width="13"
                height="13"
                viewBox="0 0 18 18"
                fill="none"
                className="flex-none transition-transform duration-(--dur-short) group-hover:translate-y-0.5"
              >
                <path
                  d="M9 3v11M4 9.5 9 14.5 14 9.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 border border-line-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-(--dur-short) hover:bg-paper-raised"
            >
              Escríbeme
              <svg
                aria-hidden
                width="13"
                height="13"
                viewBox="0 0 18 18"
                fill="none"
                className="flex-none transition-transform duration-(--dur-short) group-hover:translate-x-0.5"
              >
                <path
                  d="M4 9h10M9.5 4.5 14 9l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* margen negativo, no translate: las animaciones floaty/rise pisan cualquier transform */}
        <div className="hero-rise-late flex flex-col items-center justify-self-center md:-mt-8 md:justify-self-center lg:-mt-12">
          <div className="floaty relative">
            {/* sprites a escala entera (4× / 5× / 6×) para que el pixel art no interpole */}
            {/* la nube va en flujo, encima del personaje: la vertical se ajusta con
                translate-y (un `top` en % no aplica, el contenedor es de altura auto) */}
            <PixelSpeechBubble className="left-[14%] w-32 translate-x-[-38%] translate-y-[30%] md:w-40 lg:w-48" />
            <Image
              src="/Gabriel.png"
              alt="Pixel art de Gabriel Molina"
              width={288}
              height={288}
              unoptimized
              className="h-auto w-48 md:w-60 lg:w-72"
              style={{ imageRendering: "pixelated" }}
              priority
            />
          </div>
        </div>
      </div>
      <div className="hairline-t mt-8 flex items-center justify-center pb-2 pt-4">
        <span aria-hidden className="bounce-down text-ink-mute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 3v11M4 9.5 9 14.5 14 9.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      </div>
    </section>
  );
}
