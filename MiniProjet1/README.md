# Mini-projet 1 : Authentification avec Passport-Local et Session

## Description du projet
Ce projet est une application web qui implémente un système d'authentification utilisateur utilisant **Passport.js** avec la stratégie **Passport-Local** et une gestion des sessions via cookies. Le but est de fournir une base solide pour des projets nécessitant une authentification sécurisée.

### Organisation du projet
Le projet est divisé en deux parties principales :

- **Backend** : Géré avec **Node.js** et **Express.js**, il gère l'authentification, la gestion des sessions et les interactions avec la base de données.
- **Frontend** : Développé avec **Vue.js**, il fournit une interface utilisateur pour l'inscription, la connexion et l'accès aux pages sécurisées.
- **Base de données** : Utilisation de **PostgreSQL** ou **MySQL** avec l'ORM **Sequelize** pour gérer les utilisateurs et les sessions.

### Fonctionnalités principales
- **Inscription des utilisateurs** : Création d'un compte avec un nom d'utilisateur et un mot de passe.
- **Connexion** : Validation des identifiants et gestion des sessions.
- **Page d'accueil sécurisée** : Accessible uniquement après authentification.
- **Sessions et cookies** : Stockage des sessions dans des cookies pour une navigation fluide et sécurisée.

## Instructions pour exécuter le projet

### Prérequis
Assurez-vous d'avoir les outils suivants installés sur votre machine :
- **Node.js** (version 16 ou supérieure recommandée)
- **npm** (généralement inclus avec Node.js)
- **Vue CLI** (si non installé, utilisez `npm install -g @vue/cli`)
- Une instance de **PostgreSQL** ou **MySQL** fonctionnelle

### Configuration
1. Clonez ce répertoire sur votre machine locale :
   ```bash
   git clone https://github.com/Lbourdi/Projets_service_web
   ```

2. Configurez le fichier `config.json` pour la base de données dans le dossier `./backend/config` :
   ```json
   {
       "development": {
           "username": "<VOTRE_UTILISATEUR>",
           "password": "<VOTRE_MOT_DE_PASSE>",
           "database": "<NOM_DE_VOTRE_BDD>",
           "host": "127.0.0.1",
           "dialect": "postgres"  // ou "mysql"
       }
   }
   ```

### Lancer le projet

#### Backend
1. Accédez au répertoire backend :
   ```bash
   cd ./backend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur backend :
   ```bash
   npm start
   ```

#### Frontend
1. Accédez au répertoire frontend :
   ```bash
   cd ./frontend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement frontend :
   ```bash
   npm run serve
   ```

### Accéder à l'application
- Backend : Par défaut, disponible sur `http://localhost:3000`
- Frontend : Par défaut, disponible sur `http://localhost:8080`

Naviguez vers l'interface utilisateur, inscrivez-vous ou connectez-vous pour accéder à la page d'accueil sécurisée.

## Technologies utilisées
- **Node.js**
- **Express.js**
- **Passport.js** (Passport-Local)
- **Vue.js**
- **Sequelize ORM**
- **PostgreSQL** ou **MySQL**

## Auteurs
Bourdin Lukas et Rémy Caruhel
---
