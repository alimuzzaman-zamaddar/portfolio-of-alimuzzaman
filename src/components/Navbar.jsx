import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { navLinks, profile } from "../data/portfolio";
import { useSmoothScroll } from "../lib/scroll-context";

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollTo, lenisRef } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);

      const probe = window.innerHeight * 0.34;
      let current = "home";

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element && element.getBoundingClientRect().top <= probe) {
          current = link.id;
        }
      });

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const lenis = lenisRef.current;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, lenisRef]);

  const handleNav = (event, id) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => scrollTo(id), open ? 90 : 0);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page">
        <div
          className={`relative z-50 mt-3 flex h-16 items-center justify-between rounded-2xl border px-2.5 transition-all duration-500 sm:px-3 ${
            scrolled || open
              ? "border-white/[0.08] bg-ink/80 shadow-lift backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            onClick={(event) => handleNav(event, "home")}
            className="group flex items-center gap-3 rounded-xl py-1 pl-1 pr-2"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-accent/25 via-white/[0.04] to-accent-cyan/10 font-display text-[13px] font-bold tracking-tight text-white">
              AZ
              <span className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[13px] font-semibold tracking-[-0.01em] text-white">
                Alimuzzaman
              </span>
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">
                Frontend Developer
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex"
          >
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNav(event, link.id)}
                  className="nav-link"
                  data-active={isActive}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-white/[0.09] bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(event) => handleNav(event, "contact")}
              className="hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 sm:inline-flex"
            >
              Say hello
              <FiArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="icon-button lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" />
            <div
              aria-hidden="true"
              className="absolute inset-0 dot-grid opacity-[0.18] mask-fade"
            />

            <div className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-28">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) => handleNav(event, link.id)}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.05 + index * 0.05, ease: EASE }}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
                        0{index + 1}
                      </span>
                      <span className="font-display text-3xl font-medium tracking-[-0.04em] text-slate-200 transition-colors group-hover:text-white">
                        {link.label}
                      </span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-10 space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-lime" />
                  </span>
                  {profile.availability}
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href={`mailto:${profile.email}`} className="btn-outline !py-2.5 text-xs">
                    {profile.email}
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon-button"
                    aria-label="GitHub profile"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
