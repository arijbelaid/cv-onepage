/**
 * DevSecOps Portfolio — Arij Belaid
 * - Navbar dynamique au scroll
 * - Menu mobile
 * - Reveal animations au scroll
 * - Barres de compétences animées
 * - Année dynamique
 */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Année dynamique */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* 2. Navbar : effet au scroll */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    /* 3. Menu mobile */
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    /* 4. Reveal au scroll */
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

    /* 5. Barres de compétences animées */
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

    /* 6. Smooth scroll pour les ancres internes */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* 7. Signature console */
    console.log('%c🛡️  DevSecOps Portfolio — Arij Belaid',
        'color:#00d9ff;font-size:14px;font-weight:bold;');
    console.log('%cStack: Git · Docker · Jenkins · Kubernetes · Ansible · Terraform · Argo CD',
        'color:#7c3aed;font-size:12px;');
});
