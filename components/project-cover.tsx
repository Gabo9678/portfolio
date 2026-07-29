// Covers placeholder en SVG — composiciones geométricas en grises, una
// variante distinta por proyecto. Se reemplazan por capturas reales.

const INK = "var(--ink)";
const LINE = "var(--line-strong)";

function Variant({ n }: { n: number }) {
  switch (n % 5) {
    case 0: // filas de ruta: panel de entregas
      return (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="24" y={26 + i * 26} width="112" height="14" fill="none" stroke={LINE} />
              <circle cx="31" cy={33 + i * 26} r="2.5" fill={INK} opacity={0.7 - i * 0.1} />
              <rect x="40" y={31 + i * 26} width={64 - i * 8} height="4" fill={INK} opacity="0.35" />
            </g>
          ))}
          <rect x="148" y="26" width="68" height="118" fill="none" stroke={LINE} />
          <path d="M158 118 L172 86 L186 102 L200 58" fill="none" stroke={INK} strokeWidth="1.5" opacity="0.6" />
        </>
      );
    case 1: // grilla de catálogo
      return (
        <>
          {[0, 1, 2, 3].map((c) =>
            [0, 1, 2].map((r) => (
              <rect key={`${c}-${r}`} x={26 + c * 48} y={28 + r * 40} width="40" height="32" fill="none" stroke={LINE} />
            )),
          )}
          <rect x={26} y={28} width="40" height="32" fill={INK} opacity="0.18" />
          <rect x={122} y={68} width="40" height="32" fill={INK} opacity="0.12" />
        </>
      );
    case 2: // barras de presupuesto
      return (
        <>
          {[58, 92, 40, 110, 74, 96, 30].map((h, i) => (
            <rect key={i} x={30 + i * 27} y={140 - h} width="16" height={h} fill={INK} opacity={0.18 + (i % 3) * 0.14} />
          ))}
          <line x1="24" y1="140" x2="216" y2="140" stroke={LINE} />
        </>
      );
    case 3: // líneas de texto: editor
      return (
        <>
          <rect x="52" y="24" width="136" height="122" fill="none" stroke={LINE} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="64" y={40 + i * 16} width={i === 2 ? 60 : 112 - (i % 3) * 18} height="4" fill={INK} opacity="0.3" />
          ))}
          <rect x="64" y="130" width="8" height="6" fill={INK} opacity="0.8" />
        </>
      );
    default: // columnas de agenda
      return (
        <>
          {[0, 1, 2].map((c) => (
            <g key={c}>
              <rect x={30 + c * 62} y="24" width="52" height="122" fill="none" stroke={LINE} />
              <rect x={34 + c * 62} y={34 + c * 18} width="44" height={26 + (c % 2) * 12} fill={INK} opacity="0.2" />
              <rect x={34 + c * 62} y={80 + c * 10} width="44" height="20" fill={INK} opacity="0.12" />
            </g>
          ))}
        </>
      );
  }
}

export function ProjectCover({ variant, className = "" }: { variant: number; className?: string }) {
  return (
    <svg viewBox="0 0 240 170" aria-hidden className={`block h-auto w-full bg-paper-raised ${className}`}>
      <Variant n={variant} />
    </svg>
  );
}
