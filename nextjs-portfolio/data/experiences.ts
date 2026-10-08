export interface Experience {
  title: string;
  place: string;
  period: string;
  bullets: string[];
}

export const experiencesData: Experience[] = [
  {
    title: "Projet académique — DevOps & Cloud",
    place: "Master Pro DevOps & Cloud",
    period: "2026 — en cours",
    bullets: [
      "Mise en place d'une chaîne CI/CD complète (Jenkins + Docker)",
      "Durcissement d'un serveur Ubuntu (SSH, UFW)",
      "Versionnement et publication sur GitHub via SSH",
    ],
  },
  {
    title: "Licence IT — Développement de Systèmes d'Information",
    place: "Formation universitaire",
    period: "2023 — 2026",
    bullets: [
      "Programmation (Java, Python, PHP)",
      "Bases de données (MySQL, modélisation)",
      "Génie logiciel, réseaux et systèmes",
    ],
  },
];
