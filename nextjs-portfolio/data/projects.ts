export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  year: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    slug: "cicd-ubuntu-server",
    title: "Chaîne CI/CD complète sur Ubuntu Server",
    description:
      "Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins en services systemd.",
    longDescription:
      "Ce projet consiste à mettre en place une chaîne CI/CD complète sur un serveur Ubuntu Server 26.04 hébergé dans une VM. Il couvre l'installation, le durcissement SSH (clé ED25519, désactivation du mot de passe), le déploiement de Docker et Jenkins en services systemd, ainsi que la gestion du pare-feu UFW.",
    tags: ["Ubuntu", "Docker", "Jenkins", "SSH", "UFW"],
    year: "2026",
    link: "https://github.com/arijbelaid/cv-onepage",
  },
  {
    slug: "devsecops-portfolio-nextjs",
    title: "DevSecOps Portfolio (ce site)",
    description:
      "Application one-page responsive développée en Next.js 16 et Tailwind CSS, avec composants réutilisables.",
    longDescription:
      "Portfolio DevSecOps construit avec Next.js 16 (App Router), React 19, TypeScript et Tailwind CSS v4. Le code est organisé en composants réutilisables (Header, About, Skills, Projects, Contact, Footer) et les données sont séparées dans un dossier data/ avec typage TypeScript strict.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: "2026",
    link: "https://github.com/arijbelaid/cv-onepage",
  },
  {
    slug: "application-gestion-php",
    title: "Application web de gestion",
    description:
      "Développement d'une application de gestion avec base de données MySQL, front-end HTML/CSS/JS et back-end PHP.",
    longDescription:
      "Application web de gestion développée en PHP avec une base de données MySQL. Le front-end utilise HTML5, CSS3 et JavaScript vanilla. Ce projet a été réalisé dans le cadre de la Licence IT — Développement de Systèmes d'Information.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    year: "2025",
  },
];
