import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import joLogo from "../assets/Futuristic YY logo design.png";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About",    href: "/#about"    },
  { label: "Blogs",    href: "/#articles" },
  { label: "Contact",  href: "/#contact"  },
];

const projects = [
  {
    id: 1,
    category: "FULL-STACK",
    title: "Nile Elite Education Platform",
    description:
      "A full-stack Arabic e-learning platform for the Egyptian market connecting teachers, students, guardians, and admins — with courses, books, quizzes, payments, and full RTL Arabic UI.",
    stack: ["React.js", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Shadcn/UI", "React Hook Form", "Zod", "AWS S3", "Payment", "JWT"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=Nile+Elite+Education",
    imageLeft: false,
  },
  {
    id: 2,
    category: "FULL-STACK",
    title: "Social Media App",
    description:
      "A feature-rich Next.js social media platform with dual-feed, real-time messaging, rich post creation, and secure multi-provider authentication.",
    stack: ["React.js", "TypeScript", "TailwindCSS", "ShadcnUI", "Prisma", "Firebase", "React Query", "Stream Chat", "Lucia Auth", "Zod", "React Hook Form", "UploadThing"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=Social+Media+App",
    imageLeft: true,
  },
  {
    id: 3,
    category: "FULL-STACK",
    title: "Work Board — Job Finder",
    description:
      "A performant job listing platform with advanced filtering, job posting with admin approval flow, and Clerk-based authentication.",
    stack: ["React.js", "TypeScript", "TailwindCSS", "Shadcn/UI", "Clerk", "Zod", "React Hook Form", "Xata Pro"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=WorkBoard+Job+Finder",
    imageLeft: false,
  },
  {
    id: 4,
    category: "FULL-STACK",
    title: "Realtor — Real Estate Platform",
    description:
      "A dynamic real estate platform where users can list, browse, edit, and manage properties for sale or rent, with smart address verification and map display.",
    stack: ["React", "TailwindCSS", "Firebase"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=Realtor+Real+Estate",
    imageLeft: true,
  },
  {
    id: 5,
    category: "FULL-STACK",
    title: "Budget Tracker",
    description:
      "A personal finance tracker with multi-currency support, custom income/expense categories, visual charts, and CSV data export.",
    stack: ["React.js", "TypeScript", "TailwindCSS", "ShadcnUI", "Clerk", "Neon", "TanStack", "Zod", "Recharts", "date-fns", "React Hook Form"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=Budget+Tracker",
    imageLeft: false,
  },
  {
    id: 6,
    category: "FULL-STACK",
    title: "Fullstack E-Commerce",
    description:
      "A complete e-commerce platform with an admin dashboard for product and order management, and a full customer shopping experience including cart, checkout, and reviews.",
    stack: ["React", "Redux Toolkit", "TailwindCSS", "MongoDB", "Material UI", "Firebase", "Stripe"],
    link: "#",
    image: "https://placehold.co/680x420/111214/ff7a18?text=Fullstack+E-Commerce",
    imageLeft: true,
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 border-b border-[#1f1f22]"
          : "py-5"
      }`}
      style={{
        background: "rgba(11,11,12,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Left — back link */}
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-[#ff7a18] transition-colors duration-200 text-xs tracking-widest uppercase group"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </motion.span>
          Portfolio
        </Link>

        {/* Center — logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M4 6 L16 26 L28 6" stroke="#ff7a18" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M10 6 L16 16" stroke="#ff7a18" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </svg> */}
        <img src={joLogo} className="h-10 md:h-12 lg:h-16 w-auto object-contain" alt="Yousef" />
        </Link>

        {/* Right — nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-xs text-gray-400 hover:text-[#ff7a18] transition-colors duration-200 tracking-[0.14em] uppercase group"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff7a18] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#1f1f22]"
            style={{ background: "rgba(11,11,12,0.95)", backdropFilter: "blur(20px)" }}
          >
            <ul className="flex flex-col px-8 py-5 gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-[#ff7a18] transition-colors duration-200 text-sm tracking-widest uppercase"
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

// ─── Single project row ───────────────────────────────────────────────────────
function ProjectRow({ project, index }) {
  const isLeft = project.imageLeft;

  return (
    <motion.div
      {...fadeUp(0.05 * index)}
      className="grid md:grid-cols-2 gap-0 border-b border-[#1f1f22] py-16 md:py-24 items-center"
    >
      {/* Image */}
      <div className={`relative group overflow-hidden rounded-2xl ${isLeft ? "md:order-1" : "md:order-2"}`}>
        <div className="overflow-hidden rounded-2xl border border-[#1f1f22]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "0 0 60px rgba(255,122,24,0.08)" }}
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center gap-6 ${isLeft ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"}`}>
        <div>
          <span
            className="text-[#ff7a18] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {project.category}
          </span>
          <h2
            className="text-white font-bold leading-tight mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            {project.title}
          </h2>
          <p
            className="text-gray-500 text-sm leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {project.description}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-[#111214] border border-[#1f1f22] text-gray-500 hover:border-[#ff7a18] hover:text-[#ff7a18] transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-[#ff7a18] transition-colors duration-200 border-b border-[#1f1f22] hover:border-[#ff7a18] pb-1 w-fit"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          View Project
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AllProjects() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-8 pt-36 pb-4 border-b border-[#1f1f22]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-bold leading-none"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(48px, 7vw, 96px)" }}
            >
              <span className="text-white block">All</span>
              <span
                className="block"
                style={{ color: "transparent", WebkitTextStroke: "1px #3a3a3a" }}
              >
                Projects
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A full collection of projects spanning design, engineering, and everything in between.
          </motion.p>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-8">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1f1f22] max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-gray-600 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
          © 2026 Youssef Yasser. All Rights Reserved.
        </span>
        <span className="text-gray-600 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
          Designed with Precision · Coded with Passion
        </span>
      </footer>
    </div>
  );
}