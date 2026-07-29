// Placeholder de pixel art hecho a mano — el único elemento con color del
// sitio. Se sustituye por el pixel art real de Gabriel cuando exista.

const PALETTE: Record<string, string> = {
  h: "#241d18", // pelo
  b: "#241d18", // cejas
  s: "#e3a97c", // piel
  S: "#c98e60", // sombra de piel
  e: "#17171b", // pupila
  w: "#f6f1e8", // brillo del ojo
  m: "#a4573f", // boca
  t: "#d9552f", // franela — el golpe de color
};

const GRID = [
  "....hhhhhhhh....",
  "...hhhhhhhhhh...",
  "..hhhhhhhhhhhh..",
  "..hhhsssssshhh..",
  "..hhsssssssshh..",
  "..hssssssssssh..",
  "..hsbbssssbbsh..",
  "..hsewssssewsh..",
  "..hssssSSssssh..",
  "..hssssssssssh..",
  "..hssSmmmmSssh..",
  "...hssssssssh...",
  "......ssss......",
  "....tttttttt....",
  "..tttttttttttt..",
  "..tttttttttttt..",
];

export function PixelFace({ size = 220, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art de Gabriel Molina (placeholder)"
      className={className}
    >
      {GRID.flatMap((row, y) =>
        row.split("").map((ch, x) => {
          const fill = PALETTE[ch];
          if (!fill) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />;
        }),
      )}
    </svg>
  );
}
