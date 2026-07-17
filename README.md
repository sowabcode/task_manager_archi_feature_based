Here is my README.md

# 📋 Handbook - Task Management Application

Application Full Stack développée avec **React**, **Express**, **MongoDB**, **TanStack Query** et **Zustand**.

## 📁 Structure du projet

```text
handbook/
│
├── backend/      # API REST Express + MongoDB
├── frontend/     # Application React
└── README.md
```

---

# 🚀 Démarrage du projet

## Prérequis

Assurez-vous d'avoir installé les outils suivants :

- Node.js >= 22
- npm >= 10
- MongoDB
- Git

---

# Backend

Se placer dans le dossier :

```bash
cd backend
```

Installer les dépendances :

```bash
npm install
```

Configurer les variables d'environnement :

Créer un fichier `.env`

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/task-manager

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

Lancer le serveur :

```bash
npm run dev
```

Le serveur démarre sur :

```
http://localhost:5000
```

---

# Frontend

Se placer dans le dossier :

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

Créer le fichier `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Lancer l'application :

```bash
npm run dev
```

Application disponible sur :

```
http://localhost:5173
```

---

# 🔐 Authentification

L'API utilise une authentification JWT.

Après connexion :

- le **Access Token** est sauvegardé dans le Local Storage
- chaque requête protégée ajoute automatiquement

```
Authorization: Bearer <token>
```

---

# 📚 Documentation des endpoints

Base URL

```
http://localhost:5000/api
```

---

## Auth

### Inscription

```
POST /auth/register
```

Body

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "password123"
}
```

Réponse

```json
{
  "success": true,
  "message": "User created successfully"
}
```

---

### Connexion

```
POST /auth/login
```

Body

```json
{
  "email": "john@gmail.com",
  "password": "password123"
}
```

Réponse

```json
{
  "success": true,
  "data": {
    "accessToken": "..."
  }
}
```

---

### Utilisateur connecté

```
GET /auth/me
```

Headers

```
Authorization: Bearer <token>
```

Réponse

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

---

# Tasks

Toutes les routes suivantes nécessitent un token JWT.

---

## Liste des tâches

```
GET /tasks
```

Headers

```
Authorization: Bearer <token>
```

Réponse

```json
[
  {
    "_id": "...",
    "title": "Faire les courses",
    "description": "Acheter du lait",
    "completed": false
  }
]
```

---

## Créer une tâche

```
POST /tasks
```

Headers

```
Authorization: Bearer <token>
```

Body

```json
{
  "title": "Nouvelle tâche",
  "description": "Description de la tâche"
}
```

---

## Modifier une tâche

```
PUT /tasks/:id
```

Headers

```
Authorization: Bearer <token>
```

Body

```json
{
  "title": "Titre modifié",
  "description": "Nouvelle description",
  "completed": true
}
```

---

## Supprimer une tâche

```
DELETE /tasks/:id
```

Headers

```
Authorization: Bearer <token>
```

---

# 🏗️ Stack technique

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Zod

## Frontend

- React 19
- Vite
- React Router
- TanStack Query v5
- Zustand
- React Hook Form
- Tailwind CSS v4

---

# 📂 Architecture

## Backend

```text
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── types/
├── utils/
└── server.js
```

---

## Frontend

```text
src/
│
├── core/
├── design-system/
├── features/
├── router/
├── shared/
└── lib/
```

---

# ✨ Fonctionnalités

- Authentification JWT
- Gestion des utilisateurs
- CRUD des tâches
- Routes protégées
- Gestion du cache avec TanStack Query
- État global avec Zustand
- Validation avec Zod
- Architecture modulaire (Feature-Based)

---

# 👨‍💻 Auteur

**Abdoulaye Bademba SOW**

Frontend Engineer | React | TypeScript | Node.js
