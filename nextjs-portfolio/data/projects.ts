export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    title: "Chaîne CI/CD complète sur Ubuntu Server",
    description:
      "Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins en services systemd.",
    tags: ["Ubuntu", "Docker", "Jenkins", "SSH", "UFW"],
    year: "2026",
    link: "https://github.com/arijbelaid/cv-onepage",
  },
  {
    title: "DevSecOps Portfolio (ce site)",
    description:
      "Application one-page responsive développée en Next.js 16 et Tailwind CSS, avec composants réutilisables.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: "2026",
    link: "https://github.com/arijbelaid/cv-onepage",
  },
  {
    title: "Application web de gestion",
    description:
      "Développement d'une application de gestion avec base de données MySQL, front-end HTML/CSS/JS et back-end PHP.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    year: "2025",
  },
];
