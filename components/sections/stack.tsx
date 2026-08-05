import { STACK } from "@/lib/data";
import { StackIcon } from "@/components/stack-icons";
import { SectionHead } from "@/components/section-head";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-(--content-max) scroll-mt-24 px-5 py-14 sm:px-8 sm:py-18">
      <SectionHead title="Stack" />
      <ul className="m-0 list-none p-0">
        {STACK.map((t) => (
          <li
            key={t.name}
            className="hairline-b grid grid-cols-[32px_1fr] items-center gap-x-4 gap-y-1 px-1 py-5 transition-colors duration-(--dur-med) ease-(--ease-out) hover:bg-paper-raised sm:grid-cols-[36px_minmax(180px,260px)_1fr] sm:gap-5 sm:py-6"
          >
            <StackIcon name={t.icon} />
            <h3 className="font-display text-[clamp(1.2rem,2.6vw,1.9rem)] font-bold leading-none tracking-tight text-ink">
              {t.name}
            </h3>
            <p className="col-span-2 col-start-2 m-0 text-sm leading-relaxed text-ink-mute sm:col-span-1 sm:col-start-3" style={{ textWrap: "pretty" }}>
              {t.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
