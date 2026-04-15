import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const featured = {
  category: "Deep Dive",
  title: "The Art of Micro-Interactions: Elevating UX with Motion",
  excerpt:
    "Micro-interactions are the silent heroes of great digital products. In this deep-dive, I explore how carefully crafted motion design can transform mundane interfaces into memorable experiences that users actually love.",
  date: "Apr 10, 2025",
  readTime: "12 min read",
  icon: "✦",
  gradient: "from-accent/10 to-orange-900/5",
};

const articles = [
  {
    category: "Tutorial",
    title: "Building a Design System from Scratch with Tailwind CSS",
    excerpt:
      "Step-by-step guide to creating a scalable, themeable design system that grows with your team.",
    date: "Mar 28, 2025",
    readTime: "8 min read",
    icon: "🎯",
  },
  {
    category: "Opinion",
    title: "Why Server Components Changed Everything for React Developers",
    excerpt:
      "A pragmatic look at what React Server Components actually mean for the way we ship features.",
    date: "Mar 15, 2025",
    readTime: "6 min read",
    icon: "⚛️",
  },
  {
    category: "Performance",
    title: "Achieving 100 Lighthouse Scores in Production: Real Lessons",
    excerpt:
      "The techniques I actually used — not just theory — to get perfect scores on a high-traffic e-commerce site.",
    date: "Feb 22, 2025",
    readTime: "10 min read",
    icon: "🚀",
  },
];

function SmallCard({ article, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex gap-5 p-5 rounded-2xl border border-[#1f1f22] bg-[#111214]
                 hover:border-accent hover:-translate-y-1 hover:shadow-glow transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-[#0b0b0c] border border-[#1f1f22] flex items-center justify-center flex-shrink-0 text-xl group-hover:border-accent/40 transition-colors duration-300">
        {article.icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-accent font-[DM_Sans] tracking-wide uppercase">
          {article.category}
        </span>
        <h4 className="font-[Syne] font-600 text-white text-sm leading-tight mt-1 mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {article.title}
        </h4>
        <div className="flex items-center gap-3 text-xs text-gray-600 font-[DM_Sans]">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Articles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-accent" />
            <span className="text-accent text-sm font-[DM_Sans] tracking-widest uppercase">Writing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Syne] font-800 text-4xl md:text-5xl text-white"
          >
            Latest
            <br />
            <span className="text-gradient">Articles</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Large Card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`group relative rounded-2xl border border-[#1f1f22] bg-gradient-to-br ${featured.gradient}
                        bg-[#111214] overflow-hidden hover:border-accent hover:-translate-y-2 hover:shadow-glow
                        transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between min-h-[360px]`}
          >
            {/* Decorative */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs px-3 py-1 rounded-full border border-accent/30 text-accent font-[DM_Sans] tracking-wide uppercase">
                  {featured.category}
                </span>
                <span className="text-3xl">{featured.icon}</span>
              </div>
              <h3 className="font-[Syne] font-800 text-white text-2xl leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm font-[DM_Sans] leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-8">
              <div className="flex items-center gap-3 text-xs text-gray-600 font-[DM_Sans]">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </motion.article>

          {/* Small cards stack */}
          <div className="flex flex-col gap-4">
            {articles.map((article, i) => (
              <SmallCard key={i} article={article} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
