import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

// Génération statique des pages (SSG)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} — Arij Belaid`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link
        href="/projects"
        className="text-cyan-400 hover:underline font-mono text-sm"
      >
        ← Tous les projets
      </Link>

      <header className="mt-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">
            {project.year}
          </span>
          <span className="font-mono text-sm text-slate-500">
            /projects/{project.slug}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-slate-400 text-lg">{project.description}</p>
      </header>

      {project.longDescription && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-slate-700 pb-2">
            Description
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-slate-700 pb-2">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {project.link && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-slate-700 pb-2">
            Liens
          </h2>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            🔗 Voir le code sur GitHub
          </a>
        </section>
      )}

      <div className="mt-12 flex gap-4">
        <Link
          href="/projects"
          className="text-cyan-400 hover:underline font-mono text-sm"
        >
          ← Tous les projets
        </Link>
        <Link
          href="/"
          className="text-cyan-400 hover:underline font-mono text-sm"
        >
          🏠 Accueil
        </Link>
      </div>
    </div>
  );
}
