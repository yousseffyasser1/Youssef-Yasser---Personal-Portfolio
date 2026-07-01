import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

function DetailList({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="border-t border-[#1f1f22] pt-8">
      <h2 className="mb-4 font-[Syne] text-2xl font-bold text-white">
        {title}
      </h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-[#1f1f22] bg-[#111214] px-4 py-3 text-sm leading-relaxed text-gray-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[16/9] w-full rounded-2xl border border-[#1f1f22] object-cover"
      />
    );
  }

  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#1f1f22] bg-gradient-to-br from-[#171819] to-[#0b0b0c] px-8 text-center">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <span className="relative font-[Syne] text-2xl font-bold text-white/80 md:text-4xl">
        {project.title}
      </span>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-[#ff7a18]"
        >
          &lt;- Back to Projects
        </Link>
        <div className="rounded-2xl border border-[#1f1f22] bg-[#111214] p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a18]">
            Project not found
          </p>
          <h1 className="mb-4 font-[Syne] text-4xl font-extrabold text-white">
            This case study is not available.
          </h1>
          <p className="text-sm leading-relaxed text-gray-500">
            The project link may be outdated, or the project has not been added
            yet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen bg-[#0b0b0c] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors duration-200 hover:text-[#ff7a18]"
        >
          &lt;- Back to Projects
        </Link>

        <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7a18]">
              {project.type}
            </span>
            <h1 className="font-[Syne] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {project.title}
            </h1>
          </div>
          <p className="text-sm leading-7 text-gray-500 md:text-base">
            {project.longDescription}
          </p>
        </div>

        <ProjectVisual project={project} />

        <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-2xl border border-[#1f1f22] bg-[#111214] p-6">
            <h2 className="mb-4 font-[Syne] text-2xl font-bold text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#1f1f22] bg-[#0b0b0c] px-2.5 py-1 text-xs text-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#1f1f22] bg-[#111214] p-6">
            <h2 className="mb-4 font-[Syne] text-2xl font-bold text-white">
              My Role
            </h2>
            <p className="text-sm leading-7 text-gray-500">{project.role}</p>
          </section>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#ff7a18] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#ff7a18] transition-colors duration-200 hover:bg-[#ff7a18] hover:text-white"
              >
                View Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1f1f22] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:border-[#ff7a18] hover:text-[#ff7a18]"
              >
                View GitHub Repo ↗
              </a>
            )}
          </div>
        )}

        <div className="mt-14 space-y-10">
          <DetailList title="Features" items={project.features} />
          <DetailList title="Challenges" items={project.challenges} />
          <DetailList title="Learnings" items={project.learnings} />
        </div>
      </div>
    </main>
  );
}
