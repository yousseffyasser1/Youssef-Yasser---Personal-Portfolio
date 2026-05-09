import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const education = [
  {
    period: "2025 / 07",
    degree: "Computer Science — Information Systems",
    institution: "Suez Canal University",
    location: "Ismailia, Egypt",
    icon: "🎓",
  },
];

const internships = [
  {
    period: "Apr 2024 – Oct 2024",
    title: "Digital Egypt Pioneers Scholarship",
    company: "MCIT",
    description:
      "Sponsored by MCIT, covering technical front-end skills, English language, soft skills, and freelancing. Included a capstone project and mentorship.",
    icon: "🏛️",
  },
  {
    period: "Jul 2024",
    title: "Advanced Front-End Development (React.js)",
    company: "ITI — Ismailia Branch",
    description: "Summer training focused on advanced React.js development patterns and best practices.",
    icon: "⚛️",
  },
  {
    period: "Aug 2023",
    title: "Front-End Internship",
    company: "ITI — Ismailia Branch",
    description: "Summer training covering core front-end fundamentals including HTML, CSS, and JavaScript.",
    icon: "💻",
  },
];

const skills = [
  "HTML5", "CSS3", "JavaScript","TypeScript", "React","Redux", "Tailwind CSS",
  "Bootstrap","Framer Motion", "SASS", "Responsive Design","Node.js","Express.js","REST APIs","Authentication & JWT","MVC Architecture","MongoDB","Mongoose","Git","GitHub","Postman","Vite","Figma"
];

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-[#111214] border border-[#1f1f22] flex items-center justify-center text-lg flex-shrink-0 z-10 group-hover:border-[#ff7a18] transition-colors duration-300">
          {item.icon}
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#1f1f22] to-transparent min-h-[32px]" />
        )}
      </div>

      {/* Card */}
      <div className="group pb-8 flex-1">
        <div className="bg-[#111214] border border-[#1f1f22] rounded-2xl p-5 hover:border-[#ff7a18] hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,122,24,0.1)] transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h4
                className="text-white font-semibold text-sm leading-tight mb-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.title || item.degree}
              </h4>
              <p className="text-[#ff7a18] text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.company || item.institution}
                {item.location && (
                  <span className="text-gray-600 font-normal"> · {item.location}</span>
                )}
              </p>
            </div>
            <span
              className="text-xs text-gray-600 bg-[#0b0b0c] border border-[#1f1f22] px-3 py-1 rounded-full flex-shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.period}
            </span>
          </div>
          {item.description && (
            <p
              className="text-gray-500 text-xs leading-relaxed mt-3"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative bg-[#0b0b0c]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff7a18]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-[#ff7a18]" />
            <span
              className="text-[#ff7a18] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Education &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff7a18, #ff9d4d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            My academic journey and hands-on training that shaped my skills as a
            front-end developer.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-lg">🎓</span>
              <h3
                className="text-white text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Education
              </h3>
            </motion.div>

            <div>
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} isLast={true} />
              ))}
            </div>

            {/* Skills block sits under education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg">⚡</span>
                <h3
                  className="text-white text-sm font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#111214] border border-[#1f1f22] text-gray-400 hover:border-[#ff7a18] hover:text-[#ff7a18] transition-all duration-200 cursor-default"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Internships */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-lg">💼</span>
              <h3
                className="text-white text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Internships
              </h3>
            </motion.div>

            <div>
              {internships.map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  index={i}
                  isLast={i === internships.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}