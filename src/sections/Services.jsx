import { FiArrowUpRight } from "react-icons/fi";
import { RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/portfolio";
import { useSmoothScroll } from "../lib/scroll-context";

export default function Services() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                How I can help{" "}
                <span className="text-gradient">your team.</span>
              </>
            }
            description="From a single landing page to a full-stack feature — I plug in where the work needs me."
          />
          <RevealGroup className="shrink-0">
            <RevealItem>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo("contact");
                }}
                className="btn-outline"
              >
                Start a conversation
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            </RevealItem>
          </RevealGroup>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {services.map((service, index) => (
            <RevealItem key={service.title} className="h-full">
              <div className="group relative h-full overflow-hidden bg-ink p-6 transition-colors duration-500 hover:bg-[#0C111C] sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent-cyan to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-accent-soft transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-cyan">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <span className="number-label">0{index + 1}</span>
                </div>

                <h3 className="mt-7 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
