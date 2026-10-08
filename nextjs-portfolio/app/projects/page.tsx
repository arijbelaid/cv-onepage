import Link from "next/link";
import { projectsData } from "@/data";

export const metadata = {
  title: "Projets — Arij Belaid",
  description: "Liste de mes projets DevSecOps",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-12">
        <p className="font-mono text-cyan-400 text-sm mb-2">// Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mes <span className="text-cyan-400">Projets</span>
        </h1>
        <p className="text-slate-400">
          {projectsData.length} projets — cliquez sur un projet pour voir les détails.
        </p>
      </header>

      <div className="space-y-4">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition group"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                {project.title}
              </h2>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                {project.year}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-cyan-400 hover:underline font-mono text-sm"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
