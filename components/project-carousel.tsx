"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  const go = (next: number) => setIndex((next + images.length) % images.length);

  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className="relative aspect-16/10 overflow-hidden border border-line bg-paper-raised">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} — captura ${i + 1}`}
            fill
            sizes="(min-width: 1050px) 1050px, 100vw"
            className={`object-cover transition-opacity duration-(--dur-med) ${i === index ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
            loading={i === 0 ? undefined : "eager"}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Captura anterior"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-line bg-paper/80 text-ink backdrop-blur-sm transition-colors duration-(--dur-short) hover:bg-paper-raised"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Siguiente captura"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-line bg-paper/80 text-ink backdrop-blur-sm transition-colors duration-(--dur-short) hover:bg-paper-raised"
            >
              →
            </button>
          </>
        )}
      </div>
      <div className="flex items-center justify-between gap-3">
        <figcaption className="mono-label text-[10px]">
          Captura {String(index + 1).padStart(2, "0")} de {String(images.length).padStart(2, "0")}
        </figcaption>
        {images.length > 1 && (
          <div className="flex items-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Ir a captura ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 border border-ink transition-colors duration-(--dur-short) ${
                  i === index ? "bg-ink" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </figure>
  );
}
