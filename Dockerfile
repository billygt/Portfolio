# Utilisez une image Node.js en tant qu'image de base
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Construisez l'application React pour la production
RUN npm run build

# Exposez le port sur lequel l'application réagit
EXPOSE 3000

# Commande pour exécuter l'application lors du démarrage du conteneur
CMD ["npm", "start"]
