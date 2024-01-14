# Basis-Image ist das offizielle Node.js-Image
FROM node:alpine

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Projektdateien in den Container kopieren
COPY . .

# Entfernen der .env-Datei
RUN rm -f .env.local

# Abhängigkeiten mit Yarn installieren
RUN yarn install

# Next.js-Projekt bauen
RUN yarn build

# Port freigeben
EXPOSE 3000

# Befehl zum Starten der App
CMD ["yarn", "start"]
