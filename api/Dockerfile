# Utilisation d'une image Node.js légère basée sur Alpine Linux
FROM node:22-alpine

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances (uniquement celles de production)
RUN npm install --production

# Copie du reste du code source de l'API
COPY . .

# Exposition du port 5000 utilisé par l'API
EXPOSE 5000

# Commande de démarrage de l'API
CMD ["node", "index.js"]
