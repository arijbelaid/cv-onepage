import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSecOps Portfolio — Arij Belaid (Next.js)",
  description: "Portfolio DevSecOps réalisé avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-mono font-bold text-cyan-400">&lt;AB/&gt;</span>
            <ul className="flex gap-6 text-sm">
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-900 text-slate-400 text-center p-6 text-sm border-t border-slate-800">
          © 2026 Arij Belaid — DevSecOps Portfolio (Next.js)
        </footer>
      </body>
    </html>
  );
}
