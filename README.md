# musikwald

[![pipeline status](https://gitlab.com/baptistehardy/musikwald/badges/master/pipeline.svg)](https://gitlab.com/baptistehardy/musikwald/commits/master)
[![coverage report](https://gitlab.com/baptistehardy/musikwald/badges/master/coverage.svg)](https://gitlab.com/baptistehardy/musikwald/commits/master)

### Prérequis

- PHP 7.3 >
- Composer
- Yarn
- [Symfony CLI](https://symfony.com/download)

### Installation classique

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

<br/>

Le site est alors disponible en [127.0.0.1:8000](http://127.0.0.1:8000).

### Installation docker

- Lancer le build des containers :
```bash
make docker  
```

- Patienter le tant que la compilation avec webpack soit complétement effectuée

Le serveur web est alors accessible en [0.0.0.0:7000](http://0.0.0.0:7000/)
L'interface PhpMyAdmin [0.0.0.0:7001](http://0.0.0.0:7001/)