# Instructions d'Installation

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [pnpm](https://pnpm.io/) (vous pouvez l'installer en utilisant npm) :
  ```bash
  npm install -g pnpm
  ```

## Installation

1. **Clonez le dépôt** :

   Ouvrez un terminal et exécutez la commande suivante pour cloner le dépôt :

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. **Accédez au répertoire du projet** :

   ```bash
   cd repository-name
   ```

3. **Installez les dépendances** :

   Exécutez la commande suivante pour installer les dépendances du projet :

   ```bash
   pnpm install
   ```

4. **Configurez Tailwind CSS** (facultatif) :

   Si vous n'avez pas déjà configuré Tailwind CSS, exécutez les commandes suivantes :

   ```bash
   npx tailwindcss init
   ```

   Cela créera un fichier `tailwind.config.js` dans le répertoire racine du projet.

5. **Démarrez le serveur de développement** :

   Utilisez la commande suivante pour démarrer l'application :

   ```bash
   pnpm run dev
   ```

6. **Accédez à l'application** :

   Ouvrez votre navigateur et accédez à `http://localhost:5173`.
