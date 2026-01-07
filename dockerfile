# 1️⃣ Image Node (version stable)
FROM node:18

# 2️⃣ Dossier de travail dans le conteneur
WORKDIR /app

# 3️⃣ Copier package.json et package-lock.json
COPY package*.json ./

# 4️⃣ Installer les dépendances
RUN npm install

# 5️⃣ Copier tout le projet
COPY . .

# 6️⃣ Exposer le port de Vue
EXPOSE 8080

# 7️⃣ Lancer l'application
CMD ["npm", "run", "serve"]
