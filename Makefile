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
	
	
# Empty OS by default.
os :=
ifeq ($(shell uname),Darwin)
	os := -osx
endif

# Start the containers
# OSX is a bit different, it uses an NFS mount instead of the default bind mount
# It required the variable "MUSIKWALD_PATH" used in docker-compose-osx.yml.
docker-up:
	mkdir -p ~/.docker/var/lib/mysql/musikwald/ && \
	if [ `docker volume ls | grep 'musikwald_nfsmount'` ]; then \
		docker-compose down --volumes && docker volume rm musikwald_nfsmount; \
	fi && \
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml up

# Start an interactive shell on the web container
docker-bash-web:
	docker exec -it musikwald_web_1 bash

# Start an interactive shell on the db container
docker-bash-db:
	docker exec -it musikwald_db_1 bash

# Run the command given in variable cmd in the container musikwald_web_1
docker-cmd:
	if [ ! "${cmd}" ]; then echo "\033[0;31mUsage: make docker-cmd cmd='myCommand'\033[0m"; exit 1; fi && \
	docker exec -it musikwald_web_1 ${cmd}

# Build the container
docker-build:
	MUSIKWALD_PATH=$(shell pwd) docker-compose -f docker-compose${os}.yml build