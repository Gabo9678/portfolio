"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_SECTIONS } from "@/lib/data";
import { Clock } from "./clock";

const RING_R = 7;
const RING_C = 2 * Math.PI * RING_R;

// Anillo de progreso por sección — firma del diseño base que conservamos.
function Ring({ progress }: { progress: number }) {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" aria-hidden className="flex-none overflow-visible">
      <circle cx="10" cy="10" r={RING_R} fill="none" stroke="var(--line-strong)" strokeWidth="1.4" />
      <circle
        cx="10"
        cy="10"
        r={RING_R}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        transform="rotate(-90 10 10)"
        strokeDasharray={RING_C}
        strokeDashoffset={RING_C * (1 - progress)}
      />
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [progress, setProgress] = useState<number[]>(() => NAV_SECTIONS.map(() => 0));
  const [menuOpen, setMenuOpen] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const measure = () => {
      raf.current = null;
      const y = window.scrollY;
      const vh = window.innerHeight;
      setProgress((prev) => {
        const next = NAV_SECTIONS.map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return 0;
          return Math.max(0, Math.min(1, (y + vh * 0.55 - el.offsetTop) / el.offsetHeight));
        });
        return next.some((v, i) => Math.abs(v - prev[i]) > 0.004) ? next : prev;
      });
    };
    const onScroll = () => {
      if (raf.current == null) raf.current = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [isHome]);

  const goTo = (id: string) => (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", id === "inicio" ? "/" : `/#${id}`);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-(--content-max) items-center justify-between gap-x-6 px-5 py-3 sm:px-8">
        <Link
          href="/"
          scroll={!isHome}
          onClick={goTo("inicio")}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink"
        >
          Gabriel Molina
        </Link>

        <nav aria-label="Secciones" className="hidden items-center gap-6 sm:flex">
          {NAV_SECTIONS.map((s, i) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              scroll={!isHome}
              onClick={goTo(s.id)}
              className="link-quiet flex items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em]"
            >
              {isHome && <Ring progress={progress[i]} />}
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Clock className="hidden md:inline-flex" />
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-8 w-8 flex-none flex-col items-center justify-center gap-1.25 sm:hidden"
          >
            <span
              aria-hidden
              className={`h-px w-5 bg-ink transition-transform duration-(--dur-short) ${menuOpen ? "translate-y-0.75 rotate-45" : ""}`}
            />
            <span
              aria-hidden
              className={`h-px w-5 bg-ink transition-transform duration-(--dur-short) ${menuOpen ? "-translate-y-0.75 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Secciones"
          className="hairline-t flex flex-col gap-1 bg-paper px-5 pb-4 pt-2 sm:hidden"
        >
          {NAV_SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              scroll={!isHome}
              onClick={goTo(s.id)}
              className="link-quiet flex items-center py-2.5 font-mono text-[12px] uppercase tracking-widest"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
