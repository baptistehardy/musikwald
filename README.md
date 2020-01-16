# musikwald

### Prérequis

- PHP 7.3 >
- Composer
- Yarn
- [Symfony CLI](https://symfony.com/download)

### Installation

#### Avec `make`

- Télécharger toutes les dépendances et créer la base de données populée :

```bash
make install
```

- Lancer la compilation du front-end et le serveur Symfony :
```bash
make serve
```

#### Sans `make`

- Installer les dépendances de Composer et Yarn :

```bash
composer install
yarn install
```

- Créer et populer la base de données :

```bash
php bin/console make:migration
php bin/console doctrine:migration:migrate
php bin/console doctrine:fixtures:load
```

- Lancer la compilation du client avec Webpack :
```bash
yarn run encore dev
```

- Lancer le serveur Symfony :
```bash
symfony serve
```

Le site est alors disponible en [127.0.0.1:8000](http://127.0.0.1:8000).