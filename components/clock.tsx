"use client";

import { useEffect, useState } from "react";

function caracasTime() {
  return new Intl.DateTimeFormat("es-VE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Caracas",
  }).format(new Date());
}

export function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(caracasTime());
    const id = setInterval(() => setTime(caracasTime()), 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap ${className}`}>
      <span aria-hidden className="blink h-[5px] w-[5px] flex-none rounded-full bg-ink" />
      <span className="font-mono text-[11px] tracking-[0.06em] text-ink-dim tabular-nums">
        {time ?? "--:--"} · Caracas, VE
      </span>
    </span>
  );
}
