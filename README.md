# DevSecOps Portfolio — Arij Belaid

Application **one page** évolutive, réalisée en **HTML5 / CSS3 / JavaScript**,
présentant le profil, les compétences, la stack DevSecOps, les projets et
l'expérience d'une étudiante en **Master Pro DevOps & Cloud**.

## 👩‍💻 À propos

Étudiante en **Master Pro DevOps & Cloud**, titulaire d'une **Licence IT —
Développement de Systèmes d'Information**. Passionnée par l'automatisation,
la conteneurisation, la CI/CD, l'IaC et la sécurisation d'infrastructures Linux.

## 🌐 Démo en ligne

👉 **https://arijbelaid.github.io/cv-onepage/**

## 📸 Aperçu — Version DevSecOps Portfolio v4

![Capture d'écran du DevSecOps Portfolio](./screenshot.png)

## 🆕 Section Projects — Génération dynamique en JavaScript

La section **Projects** est générée dynamiquement en JavaScript à partir d'un
**tableau d'objets**. Aucune carte n'est écrite en HTML : le DOM est rempli au
chargement via `innerHTML`.

### Extrait du code JavaScript (`script.js`)

```javascript
/* Tableau d'objets — données des projets */
const projectsData = [
    {
        title: "Chaîne CI/CD complète sur Ubuntu Server",
        year: "2026",
        description: "Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins en services systemd...",
        tags: ["Ubuntu", "Docker", "Jenkins", "SSH", "UFW"],
        link: "https://github.com/arijbelaid/cv-onepage"
    },
    {
        title: "DevSecOps Portfolio (ce site)",
        year: "2026",
        description: "Application one page responsive développée en HTML5 / CSS3 / JS, versionnée avec Git et publiée sur GitHub Pages.",
        tags: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub Pages"],
        link: "https://github.com/arijbelaid/cv-onepage"
    },
    // ...
];

/* Génère le HTML d'une carte projet */
function createProjectCard(project) {
    const tagsHTML = project.tags
        .map(tag => `<li>${tag}</li>`)
        .join('');

    return `
        <article class="project-card">
            <div class="project-header">
                <span class="project-folder">📁</span>
                <span class="project-year">${project.year}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="project-tags">${tagsHTML}</ul>
        </article>
    `;
}

/* Injecte tous les projets dans le conteneur */
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projectsData.map(createProjectCard).join('');
}

renderProjects();
