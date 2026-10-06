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

## 📸 Aperçu — Version DevSecOps Portfolio v3

![Capture d'écran du DevSecOps Portfolio](./screenshot.png)

## 🛠️ DevSecOps Skills (technologies du projet)

| Technologie | Rôle | Statut |
|---|---|---|
| **Git** | Version Control | ✅ Utilisé dans le projet |
| **Docker** | Containerization | ✅ Utilisé dans le projet |
| **Jenkins** | CI/CD | ✅ Utilisé dans le projet |
| **Kubernetes** | Orchestration | 📚 En apprentissage |
| **Ansible** | Configuration Management | 📚 En apprentissage |
| **Terraform** | Infrastructure as Code | 📚 En apprentissage |
| **Argo CD** | GitOps | 📚 En apprentissage |

Ces technologies couvrent l'ensemble de la chaîne DevSecOps :
`Code → Build → Test → Deploy → Orchestrate → IaC → GitOps`

## 🆕 Évolution des versions

| Version | Description |
|---|---|
| **v1 — Mini CV** | CV one page statique (Profil / Compétences / Formation) |
| **v2 — DevSecOps Portfolio** | + Navbar + Hero terminal + About/Skills/Projects/Experience/Contact + design dark + animations |
| **v3 — DevSecOps Skills** | + Section dédiée à la stack DevSecOps (Git, Docker, Jenkins, Kubernetes, Ansible, Terraform, Argo CD) + pipeline visuel |

## 🛠️ Stack technique du site

- **HTML5** — structure sémantique
- **CSS3** — variables, Grid, Flexbox, gradients, animations
- **JavaScript (ES6)** — IntersectionObserver, gestion événementielle
- **Git / GitHub** — versionnement + push via **SSH**
- **GitHub Pages** — hébergement statique

## 🔐 Push GitHub via SSH

```bash
# 1. Générer la clé
ssh-keygen -t ed25519 -C "aarijbelaid@gmail.com"

# 2. Ajouter la clé sur GitHub :
#    Settings → SSH and GPG keys → New SSH key

# 3. Tester
ssh -T git@github.com
# → Hi arijbelaid! You've successfully authenticated...

# 4. Configurer le remote en SSH
git remote set-url origin git@github.com:arijbelaid/cv-onepage.git

# 5. Pousser
git push -u origin main
