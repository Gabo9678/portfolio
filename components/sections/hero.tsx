import Image from "next/image";
import { FireflyParticles } from "@/components/firefly-particles";
import { PixelSpeechBubble } from "@/components/pixel-speech-bubble";

export function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-(--content-max) scroll-mt-24 px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
      <FireflyParticles />
      <div className="relative grid items-center gap-12 md:grid-cols-[1.25fr_auto]">
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
          <p className="max-w-[44ch] text-[15.5px] leading-relaxed text-ink-mute" style={{ textWrap: "pretty" }}>
            Especializado en React, Next.js y Angular. Construyo interfaces web escalables, accesibles y optimizadas para producción en el sector financiero y corporativo.
          </p>
        </div>
        <div className="hero-rise-late flex flex-col items-center justify-self-center md:justify-self-center">
          <div className="floaty relative">
            <PixelSpeechBubble className="absolute top-8 left-8 w-40 translate-x-[-38%]" />
            <Image
              src="/Gabriel.png"
              alt="Pixel art de Gabriel Molina"
              width={220}
              height={220}
              unoptimized
              className="h-auto w-[clamp(150px,18vw,220px)]"
              style={{ imageRendering: "pixelated" }}
              priority
            />
          </div>
        </div>
      </div>
      <div className="hairline-t mt-16 flex items-center justify-center pb-6 pt-4">
        <span aria-hidden className="bounce-down text-ink-mute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 3v11M4 9.5 9 14.5 14 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </section>
  );
}
