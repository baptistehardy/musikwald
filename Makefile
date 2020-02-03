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

os :=
ifeq ($(shell uname),Darwin)
	os := -osx
endif

docker-build:
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml build

docker-up:
	mkdir -p ~/.docker/var/lib/mysql/musikwald/ && \
	if [ `docker volume ls | grep 'musikwald_nfsmount'` ]; then \
		docker-compose down --volumes && docker volume rm musikwald_nfsmount; \
	fi && \
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml up

docker-bash-web:
	docker exec -it musikwald_web_1 bash

docker-bash-db:
	docker exec -it musikwald_db_1 bash

docker:
	make docker-build
	make docker-up