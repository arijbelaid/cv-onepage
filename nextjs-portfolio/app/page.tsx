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

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
          <span className="text-cyan-400 font-mono text-xl">01.</span> About
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Passionnée par l'automatisation, les systèmes Linux et les architectures cloud.
          Solide expérience pratique en <strong className="text-cyan-400">conteneurisation (Docker)</strong>,
          <strong className="text-cyan-400"> intégration continue (Jenkins)</strong> et
          administration de serveurs Ubuntu.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
          <span className="text-cyan-400 font-mono text-xl">02.</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 text-cyan-400">DevOps & Cloud</h3>
            <ul className="space-y-1 text-slate-300">
              <li>▸ Docker</li>
              <li>▸ Jenkins</li>
              <li>▸ Git / GitHub</li>
              <li>▸ CI/CD</li>
              <li>▸ Linux (Ubuntu Server)</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3 text-cyan-400">Développement</h3>
            <ul className="space-y-1 text-slate-300">
              <li>▸ HTML5 / CSS3</li>
              <li>▸ JavaScript / TypeScript</li>
              <li>▸ React / Next.js</li>
              <li>▸ Python</li>
              <li>▸ Java</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
          <span className="text-cyan-400 font-mono text-xl">03.</span> Projects
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg">Chaîne CI/CD complète sur Ubuntu Server</h3>
            <p className="text-slate-400 text-sm mt-2">
              Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 transition">
            <h3 className="font-semibold text-lg">DevSecOps Portfolio (ce site)</h3>
            <p className="text-slate-400 text-sm mt-2">
              Application one-page responsive développée en Next.js 16 et Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
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

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
          <span className="text-cyan-400 font-mono text-xl">05.</span> Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="mailto:aarijbelaid@gmail.com"
             className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 transition">
            <p className="text-slate-400 text-xs font-mono uppercase">Email</p>
            <p className="text-cyan-400">aarijbelaid@gmail.com</p>
          </a>
          <a href="https://github.com/arijbelaid" target="_blank"
             className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 transition">
            <p className="text-slate-400 text-xs font-mono uppercase">GitHub</p>
            <p className="text-cyan-400">@arijbelaid</p>
          </a>
        </div>
      </section>

    </div>
  );
}
