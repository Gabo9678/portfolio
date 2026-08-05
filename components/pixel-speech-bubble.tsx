"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MESSAGES = ["¡Bienvenido!", "¡Saludos!", "¡Hola!"];

export function PixelSpeechBubble({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/cloud.png"
        alt=""
        aria-hidden
        width={220}
        height={220}
        unoptimized
        className="block h-auto w-full"
        style={{ imageRendering: "pixelated" }}
      />
      <span
        role="img"
        aria-label={MESSAGES[index]}
        className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[14%] text-center font-mono text-[13px] font-bold uppercase leading-none tracking-[0.02em] text-[#17171b]"
      >
        {MESSAGES[index]}
      </span>
    </div>
  );
}
