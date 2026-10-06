/**
 * DevSecOps Portfolio — Arij Belaid
 * - Section Projects générée dynamiquement depuis un tableau d'objets
 * - Navbar dynamique au scroll
 * - Menu mobile
 * - Reveal animations au scroll
 * - Barres de compétences animées
 * - Année dynamique
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. Année dynamique
       ============================================================ */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ============================================================
       2. Tableau d'objets — Projects (généré dynamiquement)
       ============================================================ */
    const projectsData = [
        {
            title: "Chaîne CI/CD complète sur Ubuntu Server",
            year: "2026",
            description: "Installation et durcissement d'un serveur Ubuntu Server 26.04, déploiement de Docker et Jenkins en services systemd, configuration d'un accès SSH sécurisé par clé ED25519 et gestion du pare-feu UFW.",
            tags: ["Ubuntu", "Docker", "Jenkins", "SSH", "UFW"],
            link: "https://github.com/arijbelaid/cv-onepage"
        },
        {
            title: "DevSecOps Portfolio (ce site)",
            year: "2026",
            description: "Application one page responsive développée en HTML5 / CSS3 / JS, versionnée avec Git et publiée sur GitHub Pages. Design inspiré des portfolios DevOps modernes.",
            tags: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub Pages"],
            link: "https://github.com/arijbelaid/cv-onepage"
        },
        {
            title: "Application web de gestion",
            year: "2025",
            description: "Développement d'une application de gestion avec base de données MySQL, front-end HTML/CSS/JS et back-end PHP. Projet de fin de Licence IT.",
            tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
            link: "#"
        },
        {
            title: "Automatisation de déploiement avec Ansible",
            year: "2026",
            description: "Écriture de playbooks Ansible pour automatiser la configuration de serveurs Linux (utilisateurs, paquets, services) dans un contexte DevOps.",
            tags: ["Ansible", "Linux", "YAML", "Automation"],
            link: "#"
        },
        {
            title: "Infrastructure as Code avec Terraform",
            year: "2026",
            description: "Provisionnement d'infrastructure cloud déclarative avec Terraform (HCL) : réseaux, VMs et ressources versionnées dans un dépôt Git.",
            tags: ["Terraform", "IaC", "Cloud", "HCL"],
            link: "#"
        }
    ];

    /**
     * Génère une carte projet HTML à partir d'un objet projet.
     * @param {Object} project - Données du projet
     * @returns {string} Balisage HTML de la carte
     */
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

    /**
     * Injecte les projets dans le conteneur #projectsGrid
     */
    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;
        grid.innerHTML = projectsData.map(createProjectCard).join('');
    }

    // Appel au rendu
    renderProjects();

    /* ============================================================
       3. Navbar : effet au scroll
       ============================================================ */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    /* ============================================================
       4. Menu mobile
       ============================================================ */
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    /* ============================================================
       5. Reveal au scroll (après injection des projets)
       ============================================================ */
    // On laisse un micro-délai pour que renderProjects() termine
    setTimeout(() => {
        const revealEls = document.querySelectorAll(
            '.section, .skill-card, .project-card, .timeline-item, .contact-card, .about-card, .devsecops-card, .devsecops-pipeline'
        );

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }, 50);

    /* ============================================================
       6. Barres de compétences animées
       ============================================================ */
    const skillBars = document.querySelectorAll('.skill-bar');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar   = entry.target;
                const fill  = bar.querySelector('.skill-bar-fill');
                const level = bar.dataset.level || 0;
                fill.style.width = level + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    /* ============================================================
       7. Smooth scroll
       ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ============================================================
       8. Signature console
       ============================================================ */
    console.log('%c🛡️  DevSecOps Portfolio — Arij Belaid',
        'color:#00d9ff;font-size:14px;font-weight:bold;');
    console.log('%cStack: Git · Docker · Jenkins · Kubernetes · Ansible · Terraform · Argo CD',
        'color:#7c3aed;font-size:12px;');
    console.log('%c📦 ' + projectsData.length + ' projets chargés dynamiquement depuis un tableau JS',
        'color:#22c55e;font-size:12px;');
});
