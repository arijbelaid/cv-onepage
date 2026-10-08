import { skillsData } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        <span className="text-cyan-400 font-mono text-xl">02.</span> Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="bg-slate-900 border border-slate-800 rounded-lg p-6"
          >
            <h3 className="font-semibold text-lg mb-3 text-cyan-400">
              {group.category}
            </h3>
            <ul className="space-y-1 text-slate-300">
              {group.items.map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
