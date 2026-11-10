import { RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { process } from "../data/portfolio";

export default function Process() {
  return (
    <section className="section border-t border-white/[0.05]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              A clear path from idea{" "}
              <span className="text-gradient">to launch.</span>
            </>
          }
          description="A simple, collaborative process. You'll always know what I'm working on and what comes next."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent lg:block"
          />
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
            {process.map((step) => (
              <RevealItem key={step.step}>
                <div className="group relative">
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.1] bg-ink text-slate-300 transition-all duration-500 group-hover:border-accent/50 group-hover:text-accent-cyan">
                      <step.icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
