serve:
	yarn run encore dev
	symfony serve

encoredev:
	yarn run encore dev --watch

db:
	php bin/console make:migration -n
	php bin/console doctrine:migration:migrate -n
	php bin/console doctrine:fixtures:load -n

install:
	composer install
	yarn install
	php bin/console doctrine:database:create
	make db