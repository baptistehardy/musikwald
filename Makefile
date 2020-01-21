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
	make db

# Variables afin de détecter l'OS
os :=

# Pas d'OS par défaut
os :=
ifeq ($(shell uname),Darwin)
	os := -osx
endif

docker:
	make docker-build && make docker-up

# Build the container
docker-build:
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml build

# Démarre les containers
# Configuration différente si utilisation d'OSX (montage NFS qui ralenti fortement Docker)
# Utilisation de MUSIKWALD_PATH du docker-compose-old.yml
docker-up:
	mkdir -p ~/.docker/var/lib/mysql/musikwald/ && \
	if [ `docker volume ls | grep 'musikwald_nfsmount'` ]; then \
		docker-compose down --volumes && docker volume rm musikwald_nfsmount; \
	fi && \
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml up

# Lance un terminal interactif sur le container web
docker-bash-web:
	docker exec -it musikwald_web_1 bash

# Lance un terminal interactif sur le container MySQL
docker-bash-db:
	docker exec -it musikwald_db_1 bash