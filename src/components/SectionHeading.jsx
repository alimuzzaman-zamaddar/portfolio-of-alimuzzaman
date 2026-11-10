import { Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  note,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="eyebrow">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-cyan" />
              {eyebrow}
            </p>
            {note ? (
              <span className="inline-block -rotate-2 font-hand text-xl leading-none text-slate-500 sm:text-2xl">
                {note}
              </span>
            ) : null}
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2 className="section-title mt-5 text-slate-50">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-[17px]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
