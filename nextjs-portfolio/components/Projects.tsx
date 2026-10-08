const projectsData = [
  {
    title: "Chaîne CI/CD complète sur Ubuntu Server",
    description: "Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins.",
  },
  {
    title: "DevSecOps Portfolio (ce site)",
    description: "Application one-page responsive développée en Next.js 16 et Tailwind CSS.",
  },
  {
    title: "Application web de gestion",
    description: "Développement d'une application de gestion avec base de données MySQL (PHP/JS).",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        <span className="text-cyan-400 font-mono text-xl">03.</span> Projects
      </h2>
      <div className="space-y-4">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
