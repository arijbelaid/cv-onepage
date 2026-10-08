import { contactsData } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        <span className="text-cyan-400 font-mono text-xl">05.</span> Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactsData.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 transition"
          >
            <p className="text-slate-400 text-xs font-mono uppercase">
              {contact.label}
            </p>
            <p className="text-cyan-400">{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

