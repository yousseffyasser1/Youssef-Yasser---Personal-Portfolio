import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import joLogo from "../assets/Futuristic YY logo design.png";

const links = ["Projects", "About", "Contact"];

export default function Navbar() {
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
          ? "py-3 glass border-b border-[#1f1f22]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          {/* <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 6 L16 26 L28 6"
              stroke="#ff7a18"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M10 6 L16 16"
              stroke="#ff7a18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            className="text-white text-lg tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Yousef<span className="text-[#ff7a18]">.</span>
          </span> */}
          <img src={joLogo} className="h-10 md:h-12 lg:h-16 w-auto object-contain" alt="Youssef" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs text-gray-400 hover:text-[#ff7a18] transition-colors duration-200 relative group tracking-[0.14em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff7a18] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-xs px-5 py-2 rounded-full border border-[#ff7a18] text-[#ff7a18] hover:bg-[#ff7a18] hover:text-white transition-all duration-300 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#1f1f22] glass"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-[#ff7a18] transition-colors duration-200 text-sm tracking-widest uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-sm px-5 py-2 rounded-full border border-[#ff7a18] text-[#ff7a18] tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
