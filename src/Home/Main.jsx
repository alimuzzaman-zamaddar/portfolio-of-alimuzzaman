import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";
import ScrollProgress from "../components/ScrollProgress";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import { useSmoothScroll } from "../lib/scroll-context";

const sectionByPath = {
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/contact": "contact",
};

function DeepLink() {
  const { pathname, hash } = useLocation();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const target = sectionByPath[pathname] || hash.replace("#", "");
    if (!target) return undefined;

    const timeout = window.setTimeout(() => scrollTo(target), 380);
    return () => window.clearTimeout(timeout);
  }, [pathname, hash, scrollTo]);

  return null;
}

export default function Main() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <DeepLink />
        <main id="main-content">
          <Home />
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  );
}
