"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
import { JOBS, type Job } from "@/lib/data";
import { SectionHead } from "@/components/section-head";

// Timeline vertical con nodo central: el riel se llena a medida que se hace
// scroll, la tarjeta de cada empresa alterna de lado y entra de abajo hacia
// arriba al aparecer en viewport.

function monogram(company: string) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Progreso 0→1 del riel: se llena hasta la mitad de la ventana.
function useRailFill(ref: RefObject<HTMLElement | null>) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const measure = () => {
      const { top, height } = el.getBoundingClientRect();
      const advanced = window.innerHeight * 0.55 - top;
      setFill(Math.min(1, Math.max(0, advanced / height)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return fill;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function Row({ job, index }: { job: Job; index: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  // pares: tarjeta a la derecha · impares: tarjeta a la izquierda
  const cardRight = index % 2 === 0;

  const enter = `transition-[opacity,transform] duration-700 ease-out ${
    shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

  return (
    <li
      ref={ref}
      className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-x-5 gap-y-4 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:gap-x-10"
    >
      {/* nodo — fila 1, columna central en desktop */}
      <div className="col-start-1 row-start-1 sm:col-start-2">
        <div
          aria-hidden
          className={`flex h-11 w-11 items-center justify-center border border-line-strong bg-paper-raised font-mono text-[11px] font-bold tracking-[0.08em] text-ink-dim transition-[opacity,transform] duration-500 ease-out overflow-hidden ${
            shown ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {job.logo ? (
            <Image
              src={job.logo}
              alt={job.company}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          ) : (
            monogram(job.company)
          )}
        </div>
      </div>

      {/* etiqueta empresa + periodo, al lado opuesto de la tarjeta */}
      <div
        className={`col-start-2 row-start-1 flex flex-col gap-1 pt-1 ${enter} ${
          cardRight ? "sm:col-start-1 sm:row-start-1 sm:items-end sm:text-right" : "sm:col-start-3 sm:row-start-1"
        }`}
      >
        <h3 className="font-display text-[clamp(1.15rem,2vw,1.5rem)] font-bold leading-tight tracking-tight text-ink">
          {job.company}
        </h3>
        <span className="font-mono text-[12px] tracking-[0.06em] text-ink-dim tabular-nums">{job.period}</span>
        <span className="mono-label text-[10px]">{job.place}</span>
      </div>

      {/* tarjeta */}
      <div
        className={`col-start-2 row-start-2 ${enter} delay-75 ${
          cardRight ? "sm:col-start-3 sm:row-start-1" : "sm:col-start-1 sm:row-start-1"
        }`}
      >
        <div className="relative border border-line bg-paper-raised p-6 sm:p-7">
          {/* pico que apunta al riel */}
          <span
            aria-hidden
            className={`absolute top-4.5 hidden h-2.5 w-2.5 rotate-45 border-line bg-paper-raised sm:block ${
              cardRight ? "-left-1.5 border-b border-l" : "-right-1.5 border-r border-t"
            }`}
          />
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-dim">{job.role}</p>
          <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
            {job.points.map((pt) => (
              <li
                key={pt}
                className="grid max-w-[54ch] grid-cols-[14px_1fr] gap-2 text-sm leading-[1.7] text-ink-mute"
                style={{ textWrap: "pretty" }}
              >
                <span aria-hidden className="text-ink-ghost">
                  —
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const fill = useRailFill(railRef);

  return (
    <section id="experiencia" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead title="Experiencia" />
      <div ref={railRef} className="relative">
        {/* riel guía */}
        <span
          aria-hidden
          className="absolute bottom-0 left-5.5 top-0 w-px bg-line sm:left-1/2 sm:-translate-x-1/2"
        />
        {/* relleno que avanza con el scroll */}
        <span
          aria-hidden
          className="absolute left-5.5 top-0 w-px origin-top bg-ink sm:left-1/2 sm:-translate-x-1/2"
          style={{ height: `${fill * 100}%` }}
        />
        <ol className="relative m-0 flex list-none flex-col gap-16 p-0 sm:gap-20">
          {JOBS.map((j, i) => (
            <Row key={j.company} job={j} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
