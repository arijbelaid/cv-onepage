/**
 * CV One Page — Arij Belaid
 * Interactions :
 *  - Animation d'apparition des cartes au scroll
 *  - Année dynamique dans le footer
 *  - Effet de "typing" sur le tagline
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------------
       1. Année dynamique
       ------------------------------------------------ */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ------------------------------------------------
       2. Animation au scroll (IntersectionObserver)
       ------------------------------------------------ */
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Petit délai progressif pour un effet cascade
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));

    /* ------------------------------------------------
       3. Effet "typing" sur la tagline
       ------------------------------------------------ */
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const fullText = tagline.textContent;
        tagline.textContent = '';
        let i = 0;

        const type = () => {
            if (i < fullText.length) {
                tagline.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        };
        setTimeout(type, 300);
    }

    /* ------------------------------------------------
       4. Signature console
       ------------------------------------------------ */
    console.log('%c👋 Hello, curious developer!', 'color:#38bdf8;font-size:14px;font-weight:bold;');
    console.log('%cCV One Page — Arij Belaid | HTML5 / CSS3 / JS', 'color:#a78bfa;font-size:12px;');
});
