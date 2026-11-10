import { RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/portfolio";

const allTech = Array.from(
  new Map(skillGroups.flatMap((group) => group.items).map((item) => [item.name, item])).values()
);

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              The tools I keep{" "}
              <span className="text-gradient">coming back to.</span>
            </>
          }
          description="No percentage bars. Just the things I actually use to take an idea from a sketch to something people can click."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.1}>
          {skillGroups.map((group, index) => (
            <RevealItem key={group.title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-surface/40 p-6 transition-all duration-500 hover:border-white/[0.14] sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: group.accent }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.03]"
                    style={{ color: group.accent }}
                  >
                    <group.icon className="h-5 w-5" />
                  </span>
                  <span className="number-label">0{index + 1}</span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {group.description}
                </p>

                <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group/item flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-ink/40 px-3 py-2.5 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                    >
                      <item.icon
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                        style={{ color: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-[12.5px] text-slate-300">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="relative mt-14 overflow-hidden rounded-2xl border-y border-white/[0.06] py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
          />
          <div className="group flex w-max">
            <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused]">
              {[...allTech, ...allTech].map((tech, index) => (
                <span
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-2.5 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500"
                  aria-hidden={index >= allTech.length ? "true" : undefined}
                >
                  <tech.icon className="h-4 w-4" style={{ color: tech.color }} />
                  {tech.name}
                  <span className="ml-6 h-1 w-1 rounded-full bg-slate-700" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
