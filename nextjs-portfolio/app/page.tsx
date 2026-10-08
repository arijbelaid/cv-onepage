import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-20">
      {/* HERO */}
      <section id="hero" className="text-center py-16">
        <p className="font-mono text-cyan-400 text-sm mb-4">
          // DevSecOps & Cloud Engineer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Arij <span className="text-cyan-400">Belaid</span>
        </h1>
        <p className="text-xl text-slate-300 mb-2">
          Étudiante en <strong>Master Pro DevOps & Cloud</strong>
        </p>
        <p className="text-slate-400">
          Licence IT — Développement de Systèmes d'Information
        </p>
      </section>

      <About />
      <Skills />
      <Projects />

      {/* EXPERIENCE (peut rester inline ou devenir un composant) */}
      <section id="experience" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
          <span className="text-cyan-400 font-mono text-xl">04.</span> Experience
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="font-semibold text-lg">Projet académique — DevOps & Cloud</h3>
            <p className="text-sm text-cyan-400 font-mono">2026 — en cours | Master Pro DevOps & Cloud</p>
            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
              <li>Mise en place d'une chaîne CI/CD complète (Jenkins + Docker)</li>
              <li>Durcissement d'un serveur Ubuntu (SSH, UFW)</li>
            </ul>
          </div>
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="font-semibold text-lg">Licence IT — Développement de Systèmes d'Information</h3>
            <p className="text-sm text-cyan-400 font-mono">2023 — 2026 | Formation universitaire</p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
