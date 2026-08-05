export function SectionHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="fx hairline-b mb-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-4">
      <h2 className="font-display text-(length:--text-title) font-bold tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {meta && <span className="mono-label">{meta}</span>}
    </div>
  );
}
