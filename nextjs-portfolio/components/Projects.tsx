import Link from "next/link";
import { projectsData } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        <span className="text-cyan-400 font-mono text-xl">03.</span> Projects
      </h2>
      <div className="space-y-4">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition group"
          >
            <h3 className="font-semibold text-lg group-hover:text-cyan-400 transition">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/projects"
          className="text-cyan-400 hover:underline font-mono text-sm"
        >
          Voir tous les projets →
        </Link>
      </div>
    </section>
  );
}
