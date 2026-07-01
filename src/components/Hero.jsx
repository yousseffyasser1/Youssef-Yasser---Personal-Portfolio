import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const skills = ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-900/10 blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-[DM_Sans] tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl font-[Syne] font-800 leading-[1.05] tracking-tight text-white mb-4"
          >
            Youssef
            <br />
            <span className="text-gradient">Yasser</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-gray-400 font-[DM_Sans] text-lg font-300 italic">
              MERN Stack Developer | React.js Specialist
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 font-[DM_Sans] text-base leading-relaxed max-w-md mb-10"
          >
            I build responsive full-stack web applications using React, Node.js,
            Express.js, and MongoDB, with a focus on clean UI, scalable
            architecture, authentication flows, REST API integration, and real
            user experience.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="group px-7 py-3 rounded-2xl bg-accent text-white font-[Syne] font-600 text-sm hover:bg-orange-500 transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              View Projects
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-2xl border border-[#1f1f22] text-gray-300 font-[Syne] font-600 text-sm hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Skills Row */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#111214] border border-[#1f1f22] text-gray-400 font-[DM_Sans] hover:border-accent hover:text-accent transition-all duration-200"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#1f1f22] animate-spin-slow" style={{ animation: "spin 20s linear infinite" }} />
            {/* Glow ring */}
            <div className="absolute inset-4 rounded-full border border-accent/20" />

            {/* Avatar placeholder */}
            <div className="absolute inset-8 rounded-full bg-[#111214] border border-[#1f1f22] overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-orange-700 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-4xl font-[Syne] font-800 text-white">YY</span>
                </div>
                <span className="text-xs text-gray-500 font-[DM_Sans]">MERN Developer</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 glass border border-[#1f1f22] rounded-xl px-3 py-2 text-xs font-[DM_Sans]"
            >
              <span className="text-accent font-600">3+</span>
              <span className="text-gray-400 ml-1">Years exp</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-4 glass border border-[#1f1f22] rounded-xl px-3 py-2 text-xs font-[DM_Sans]"
            >
              <span className="text-accent font-600">20+</span>
              <span className="text-gray-400 ml-1">Projects done</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 font-[DM_Sans] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
