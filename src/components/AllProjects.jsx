import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import joLogo from "../assets/Futuristic YY logo design.png";
import { projects } from "../data/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function PageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-[#1f1f22] py-3" : "py-5"
      }`}
      style={{
        background: "rgba(11,11,12,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:text-[#ff7a18]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            &lt;-
          </span>
          Portfolio
        </Link>

        <Link to="/" className="flex items-center gap-2">
          <img
            src={joLogo}
            className="h-10 w-auto object-contain md:h-12 lg:h-16"
            alt="Youssef"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-xs uppercase tracking-[0.14em] text-gray-400 transition-colors duration-200 hover:text-[#ff7a18]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ff7a18] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#1f1f22] md:hidden"
            style={{
              background: "rgba(11,11,12,0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col gap-5 px-8 py-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-gray-300 transition-colors duration-200 hover:text-[#ff7a18]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#171819] to-[#0b0b0c] px-8 text-center">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative font-[Syne] text-2xl font-bold text-white/80">
        {project.title}
      </span>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const isLeft = index % 2 === 1;
  const hasExternalLinks = project.liveUrl || project.githubUrl;

  return (
    <motion.div
      {...fadeUp(0.05 * index)}
      className="grid items-center gap-0 border-b border-[#1f1f22] py-16 md:grid-cols-2 md:py-24"
    >
      <div
        className={`group relative overflow-hidden rounded-2xl ${
          isLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-[#1f1f22]">
          <ProjectImage project={project} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "0 0 60px rgba(255,122,24,0.08)" }}
        />
      </div>

      <div
        className={`flex flex-col justify-center gap-6 pt-8 md:pt-0 ${
          isLeft ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"
        }`}
      >
        <div>
          <span
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a18]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {project.type}
          </span>
          <h2
            className="mb-4 font-bold leading-tight text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(24px, 3vw, 40px)",
            }}
          >
            {project.title}
          </h2>
          <p
            className="text-sm leading-relaxed text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-[#1f1f22] bg-[#111214] px-2.5 py-1 text-xs text-gray-500 transition-all duration-200 hover:border-[#ff7a18] hover:text-[#ff7a18]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex w-fit items-center gap-2 border-b border-[#1f1f22] pb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:border-[#ff7a18] hover:text-[#ff7a18]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Case Study
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>

          {hasExternalLinks && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-[#ff7a18]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Live Demo ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-[#ff7a18]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0b0b0c] text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <PageNavbar />

      <div className="mx-auto max-w-7xl border-b border-[#1f1f22] px-8 pb-4 pt-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-bold leading-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(48px, 7vw, 96px)",
              }}
            >
              <span className="block text-white">All</span>
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #3a3a3a",
                }}
              >
                Projects
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xs text-sm leading-relaxed text-gray-500 md:text-right"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A focused collection of real projects spanning full-stack builds,
            frontend collaboration, and developer branding.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#1f1f22] px-8 py-6 md:flex-row">
        <span
          className="text-xs text-gray-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          (c) 2026 Youssef Yasser. All Rights Reserved.
        </span>
        <span
          className="text-xs text-gray-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Designed with Precision - Coded with Passion
        </span>
      </footer>
    </div>
  );
}
