import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import RecommerceImage from "../assets/R e-shop 1.png";
import SanadImage from "../assets/Sanda Project .jpeg";
import MathTeac from "../assets/Math teacher.png";
import NewsImage from "../assets/موقع اخباري .jpeg";

const projects = [
  {
    id: 1,
    category: "Web App",
    title: "FinTrack Dashboard",
    description:
      "A real-time financial analytics platform with interactive charts, budget tracking, and predictive insights powered by AI.",
    stack: ["React", "TypeScript", "Recharts", "Supabase"],
    // gradient: "from-blue-900/40 to-indigo-900/20",
    icon: "📊",
    image: RecommerceImage,
  },
  {
    id: 2,
    category: "E-Commerce",
    title: "Luxe Store",
    description:
      "Premium e-commerce experience with 3D product previews, fluid animations, and a seamless checkout flow.",
    stack: ["Next.js", "Framer Motion", "Stripe", "Prisma"],
    gradient: "from-rose-900/40 to-pink-900/20",
    icon: "🛍️",
    image: SanadImage,
  },
  {
    id: 3,
    category: "SaaS",
    title: "TaskFlow Pro",
    description:
      "Collaborative project management tool with drag-and-drop boards, real-time sync, and smart sprint planning.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    gradient: "from-emerald-900/40 to-teal-900/20",
    icon: "✅",
    image: MathTeac,
  },
  {
    id: 4,
    category: "Portfolio",
    title: "Artisan Agency",
    description:
      "Award-winning creative agency website with immersive scroll-triggered animations and WebGL backgrounds.",
    stack: ["Next.js", "GSAP", "Three.js", "Tailwind"],
    gradient: "from-amber-900/40 to-orange-900/20",
    icon: "🎨",
    image: NewsImage,
  },
  {
    id: 5,
    category: "Mobile App",
    title: "PulseHealth",
    description:
      "Health & fitness tracker with AI-powered workout recommendations, nutrition logging, and progress analytics.",
    stack: ["React Native", "Expo", "FastAPI", "PostgreSQL"],
    gradient: "from-purple-900/40 to-violet-900/20",
    icon: "💪",
    image: RecommerceImage,
  },
  {
    id: 6,
    category: "Tool",
    title: "CodeSnap CLI",
    description:
      "Developer tool that generates beautiful code screenshots with syntax highlighting and custom themes.",
    stack: ["Node.js", "Puppeteer", "TypeScript", "CLI"],
    gradient: "from-cyan-900/40 to-sky-900/20",
    icon: "⚡",
    image: RecommerceImage,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-[#111214] border border-[#1f1f22] rounded-2xl overflow-hidden
                 hover:border-accent hover:-translate-y-2 hover:scale-[1.01] hover:shadow-glow
                 transition-all duration-300 cursor-pointer"
    >
      {/* Card image area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs px-3 py-1 rounded-full bg-[#0b0b0c]/70 border border-[#1f1f22] text-gray-400 font-[DM_Sans]">
            {project.category}
          </span>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-4 right-4 w-7 h-7 rounded-full border border-[#1f1f22] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent">
          <span className="text-xs text-white">→</span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="font-[Syne] font-700 text-white text-lg mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm font-[DM_Sans] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-[#0b0b0c] border border-[#1f1f22] text-gray-500 font-[DM_Sans]
                         group-hover:border-accent/30 group-hover:text-gray-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-accent" />
            <span className="text-accent text-sm font-[DM_Sans] tracking-widest uppercase">
              Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Syne] font-800 text-4xl md:text-5xl text-white"
          >
            Selected
            <br />
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-[DM_Sans] mt-4 max-w-md text-sm leading-relaxed"
          >
            A curated collection of projects showcasing my craft in building
            modern, performant web applications.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-14"
        >
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors duration-200 font-[DM_Sans] border border-[#1f1f22] hover:border-accent rounded-2xl px-8 py-3"
          >
            View all projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
