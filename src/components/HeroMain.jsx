import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroMain() {
  return (
    <section
      className="relative min-h-screen bg-[#0b0b0c] overflow-hidden flex items-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Full-bleed portrait — right side */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto w-full md:w-[70%] pointer-events-none select-none">
        {/* Grayscale tinted placeholder portrait */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #444 0%, #2a2a2a 40%, #1a1a1a 100%)",
            filter: "grayscale(60%)",
            opacity: 0.6,
          }}
        />

        {/* Photo */}
        <img
          src="/src/assets/jo 3.png"
          alt="Yousef Yasser"
          className="w-full h-full object-cover object-[75%_top] md:object-right-top lg:object-right"
          style={{ filter: "grayscale(50%)" }}
        />

        {/* Bottom fade to bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, #0b0b0c 100%)",
          }}
        />
        {/* Left fade — blends text side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0b0b0c 0%, rgba(11,11,12,0.6) 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Content — left column */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex items-center min-h-screen py-32">
        <div className="max-w-xl">
          {/* Label */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-[#ff7a18] text-xs font-semibold tracking-[0.22em] uppercase mb-8"
          >
            Full-Stack Developer
          </motion.p>

          {/* Giant name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="leading-[0.9] tracking-tighter mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="block text-white"
              style={{ fontSize: "clamp(72px, 10vw, 140px)", fontWeight: 800 }}
            >
              YOUSEF
            </span>
            <span
              className="block text-white/90"
              style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
              }}
            >
              YASSER
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-gray-400 text-base leading-relaxed max-w-sm mb-12"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Full-stack engineer turning complex problems into clean, scalable
            products. I care deeply about performance, clarity, and great UX.
          </motion.p>

          {/* Download CV button */}
          <motion.div {...fadeUp(0.48)}>
            <a
              href="/Youssef-Yasser-Mohamed-Gamal.pdf"
              download="Youssef-Yasser-CV.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#ff7a18] text-[#ff7a18] text-sm font-semibold tracking-widest uppercase hover:bg-[#ff7a18] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#ff7a18]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
