# CV One Page — Arij Belaid

Mini CV one page responsive développé en **HTML5**, **CSS3** et **JavaScript**,
dans le cadre d'un projet DevOps & Cloud.

## 👩‍💻 Profil

Étudiante en **Master Pro DevOps & Cloud**, titulaire d'une **Licence IT —
Développement de Systèmes d'Information**.

## 📸 Aperçu

![Capture d'écran du CV](screenshot.png)

## 🛠️ Stack technique

- **HTML5** — structure sémantique
- **CSS3** — Flexbox, Grid, variables CSS, animations
- **JavaScript (ES6)** — IntersectionObserver, DOM, effet typing
- **Git / GitHub** — versionnement et publication

## 🔐 Activation des push GitHub via SSH

### 1. Génération de la clé SSH

\`\`\`bash
ssh-keygen -t ed25519 -C "aarijbelaid@gmail.com"
cat ~/.ssh/id_ed25519.pub
\`\`\`

Clé publique générée :
\`\`\`
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIfeNBGqKovV1Z1ttYTiE18Jf2jPGyzG8c+cJ2qhPJml aarijbelaid@gmail.com
\`\`\`

### 2. Ajout de la clé sur GitHub

- GitHub → Settings → SSH and GPG keys → New SSH key
- Titre : `VM Ubuntu DevOps`
- Key : (coller la clé publique ci-dessus)
- Add SSH key

### 3. Test de la connexion

\`\`\`bash
ssh -T git@github.com
# → Hi arijbelaid! You've successfully authenticated...
\`\`\`

### 4. Configuration du dépôt local pour utiliser SSH

\`\`\`bash
git remote set-url origin git@github.com:arijbelaid/cv-onepage.git
git remote -v
git push -u origin main
\`\`\`

## 🚀 Lancer le projet en local

\`\`\`bash
git clone git@github.com:arijbelaid/cv-onepage.git
cd cv-onepage
python3 -m http.server 8000
\`\`\`

Puis ouvrir : [http://localhost:8000](http://localhost:8000)

## 👤 Auteur

**Arij Belaid**
- GitHub : [@arijbelaid](https://github.com/arijbelaid)
- Email : aarijbelaid@gmail.com

## 📄 Licence

Projet personnel — libre d'utilisation à des fins pédagogiques.
