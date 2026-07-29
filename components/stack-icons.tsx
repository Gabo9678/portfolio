// Iconos de stack dibujados a mano (trazo 1.3, un solo idioma visual) —
// portados del diseño base.

import type { StackItem } from "@/lib/data";

const STROKE = "var(--ink-dim)";

export function StackIcon({ name }: { name: StackItem["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: STROKE,
    strokeWidth: 1.3,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "react":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="2.4" fill={STROKE} stroke="none" />
          <ellipse cx="16" cy="16" rx="13" ry="5.2" />
          <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(120 16 16)" />
        </svg>
      );
    case "angular":
      return (
        <svg {...common} strokeLinejoin="round">
          <path d="M16 3 L28 7.5 L26 24 L16 29 L6 24 L4 7.5 Z" />
          <path d="M11.5 21 L16 10 L20.5 21" />
          <path d="M13.4 17.6 L18.6 17.6" />
        </svg>
      );
    case "js":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="24" height="24" />
          <path d="M14 11 L14 20.5 C14 22.2 12.7 23 11.4 23 C10.2 23 9.4 22.4 9 21.4" />
          <path d="M23.4 12.4 C22.8 11.4 21.9 11 20.8 11 C19.3 11 18.2 11.9 18.2 13.2 C18.2 16 23.6 15.3 23.6 18.9 C23.6 21.2 22 23 19.9 23 C18.4 23 17.2 22.3 16.6 21.1" />
        </svg>
      );
    case "css":
      return (
        <svg {...common} strokeLinejoin="round">
          <path d="M6 4 L26 4 L23.6 25 L16 28.4 L8.4 25 Z" />
          <path d="M21.5 10 L12 10 L12.6 15 L20.8 15 L20.2 21.4 L16 22.8 L11.9 21.4 L11.6 18.4" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...common} strokeWidth={1.4} strokeLinecap="round">
          <path d="M3 14 C5.5 8 8.5 6.6 12 8.4 C14.4 9.6 15.2 11.6 17.6 12.8 C21 14.6 24 13.2 26.5 8" />
          <path d="M3 23.6 C5.5 17.6 8.5 16.2 12 18 C14.4 19.2 15.2 21.2 17.6 22.4 C21 24.2 24 22.8 26.5 17.6" />
        </svg>
      );
  }
}
