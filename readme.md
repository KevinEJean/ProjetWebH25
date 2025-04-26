# Frontend - React Application

## Description

Cette application web frontend développée avec React offre aux utilisateurs la possibilité d'accéder a des informations sur des film et de se connecter, d'administrer leur profil et d'utiliser des fonctionnalités associées à l'authentification. L'application interagit avec un serveur backend par le biais d'APIs afin de transférer et de recevoir des informations concernant les utilisateur.

## Fonctionnalités

- **Connexion utilisateur** : Les utilisateurs ont la possibilité de se connecter en utilisant leur identifiant et mot de passe.

- **Gestion de profil** : Une fois connectés, les utilisateurs peuvent voir et modifier leur profil.

- **Route protégée** : Certaines routes (par exemple, le profil) sont protégées et nécessitent que l'utilisateur soit connecté.

- **Réinitialisation de mot de passe** : Les utilisateurs peuvent accéder à une page pour réinitialiser leur mot de passe en cas d'oubli.

- **Favourit List** : les utilisateur pourront ajouter leur film favorit dans leur FavoritList en parcourant les divers films disponible de l'app
 ## Technologies Utilisées

- **React** : Librairie JavaScript pour construire l'interface utilisateur.

- **React Router dom** : Pour la gestion des routes et la navigation dans l'application.

- **Axios** : Pour les requêtes HTTP vers le backend.

- **Material Icons** : Pour les icônes de l'interface.

- **SessionStorage** : Pour stocker les informations de l'utilisateur après la connexion.

## Prérequis

- Node.js
- npm

## Installation

1. Clonez ce repository :
   ```bash
   git clone <url-du-repository>
1. Installation des dépendances :
   ```bash
    npm i 
1. Start le projet :
   ```bash
    npm run dev