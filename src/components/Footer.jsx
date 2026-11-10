import { FiArrowUp, FiDownload, FiMail } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { navLinks, profile } from "../data/portfolio";
import { useSmoothScroll } from "../lib/scroll-context";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="container-page relative">
        <div className="grid gap-12 pb-14 pt-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          <div>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                scrollTo("home");
              }}
              className="inline-flex items-center gap-3"
              aria-label="Back to home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/25 to-accent-cyan/10 font-display text-[13px] font-bold text-white">
                AZ
              </span>
              <span className="font-display text-sm font-semibold text-white">
                Alimuzzaman Zamaddar
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Frontend developer in Dhaka. Mostly React and Next.js, sometimes
              WordPress, always fussing over spacing.
            </p>
            <p className="mt-4 -rotate-1 font-hand text-[1.4rem] leading-none text-slate-500">
              still learning. still building.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-button"
                aria-label="GitHub profile"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="icon-button"
                aria-label="Send an email"
              >
                <FiMail className="h-4 w-4" />
              </a>
              <a
                href={profile.resume}
                download="Md-Alimuzzaman-Zamaddar-CV.pdf"
                className="icon-button"
                aria-label="Download CV"
              >
                <FiDownload className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Get in touch
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 block break-all text-sm text-slate-300 transition-colors hover:text-accent-cyan"
            >
              {profile.email}
            </a>
            <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-lime" />
              </span>
              Open to work
            </div>
          </div>
        </div>

        <div className="relative select-none overflow-hidden border-t border-white/[0.05] pt-6 text-center font-display text-[clamp(2.6rem,11vw,9rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white/[0.035]" aria-hidden="true">
          ALIMUZZAMAN
          <span className="absolute bottom-[14%] right-[7%] -rotate-6 font-hand text-[clamp(1.7rem,4vw,3rem)] font-medium tracking-normal text-accent-soft/70">
            Alim
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-7 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            © {year} Md. Alimuzzaman Zamaddar
          </p>
          <p className="text-xs text-slate-500">
            Built in Dhaka, one commit at a time.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/50">
              <FiArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
