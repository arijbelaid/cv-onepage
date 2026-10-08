import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-mono font-bold text-cyan-400">
          &lt;AB/&gt;
        </Link>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/#about" className="hover:text-cyan-400">About</Link></li>
          <li><Link href="/#skills" className="hover:text-cyan-400">Skills</Link></li>
          <li><Link href="/projects" className="hover:text-cyan-400">Projects</Link></li>
          <li><Link href="/#experience" className="hover:text-cyan-400">Experience</Link></li>
          <li><Link href="/#contact" className="hover:text-cyan-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
