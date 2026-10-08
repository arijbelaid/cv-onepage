export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "Jenkins",
      "Git / GitHub",
      "CI/CD",
      "Linux (Ubuntu Server)",
    ],
  },
  {
    category: "Développement",
    items: [
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Python",
      "Java",
    ],
  },
];

