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
## 🔗 Publication sur GitHub via SSH (Question 14)

### Lien du dépôt GitHub

👉 **https://github.com/arijbelaid/cv-onepage**

### Commandes Git utilisées

#### Configuration initiale (déjà faite)

\`\`\`bash
git init
git config --global user.name "Arij Belaid"
git config --global user.email "aarijbelaid@gmail.com"
git branch -M main
git remote add origin git@github.com:arijbelaid/cv-onepage.git
\`\`\`

#### Workflow de publication

\`\`\`bash
# 1. Vérifier l'état des fichiers
git status

# 2. Ajouter toutes les modifications à l'index
git add .

# 3. Créer un commit avec un message descriptif
git commit -m "feat: description des modifications"

# 4. Pousser vers GitHub via SSH (sans mot de passe)
git push
\`\`\`

#### Vérification

\`\`\`bash
# Vérifier que le remote est bien en SSH
git remote -v
# → origin  git@github.com:arijbelaid/cv-onepage.git (fetch)
# → origin  git@github.com:arijbelaid/cv-onepage.git (push)

# Tester la connexion SSH à GitHub
ssh -T git@github.com
# → Hi arijbelaid! You've successfully authenticated...

# Voir l'historique des commits
git log --oneline
\`\`\`

### Historique des commits publiés

\`\`\`
3834006 feat(v8): déploiement avec Docker Compose + healthcheck healthy
ae7aa99 feat(v7): exécution du conteneur cv-docker + accès depuis la machine physique
2e21e37 feat(v5): Dockerfile Nginx + capture du portfolio conteneurisé
10d1e68 feat(v4): section Projects générée dynamiquement en JavaScript
1a281bf feat(v3): ajout section DevSecOps Skills (Git/Docker/Jenkins/K8s/Ansible/Terraform/Argo CD) + capture
f57ce9e feat(v2): évolution DevSecOps Portfolio + capture d'écran
a05a1e6 docs: ajout README avec commandes SSH et capture
a5ebb1b feat: CV one page Arij Belaid - HTML5/CSS3/JS
\`\`\`

### Publication via SSH (sans mot de passe)

La clé SSH ED25519 est utilisée pour l'authentification à GitHub :

\`\`\`bash
# Clé publique (à ajouter sur https://github.com/settings/keys)
cat ~/.ssh/id_ed25519.pub

# Test de connexion
ssh -T git@github.com
\`\`\`

**Résultat** : tous les commits sont poussés sans saisie de mot de passe ni token.
