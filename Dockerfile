# Fichier utilisé par Docker pour construire et configurer un container
# Permet de créer et configurer un PhpMyAdmin configuré sur un serveur MySQL "db"
# Permet aussi de créer un vhost musikwald

# Utilise la dernière version de PHP
From php:7.4-apache

# Répertoire de travail courant pendant l'installation
WORKDIR /var/www/html/

# Exposer le port 80 car Apache fonctionnera dans le container
EXPOSE 80

# Installation de vim et d'utilitaires MySQL
RUN apt-get update -y -qq && \
    apt-get install -qq -y wget vim mariadb-client

# Configuration automatique MySQL
RUN echo "\n\n[mysql]\nhost=db\nuser=root\npassword=password\ndatabase=musikwald" >> /etc/mysql/my.cnf

# Installation de Composer
RUN mkdir -p /root/bin/
RUN cd /root/bin/ && \
    wget  https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer -O ./composer-setup.php -q && \
    php ./composer-setup.php --quiet &&  \
    mv composer.phar composer && \
    rm composer-setup.php

# Extraction des sources PHP
RUN docker-php-source extract

# Installe les extensions PHP
RUN apt-get update -yqq && apt-get install -yqq libmcrypt-dev && docker-php-ext-install mysqli pdo_mysql

# Installe les extensions lib ICU & PHP intl
RUN apt-get update -yqq && apt-get install -yqq libicu-dev && docker-php-ext-configure intl \
&& docker-php-ext-install intl

# Autorise les fichiers .htaccess dans le vhost
# Mise à jour du fichier apache2.conf

RUN cd /etc/apache2 && sed -ri '169,175s/(AllowOverride) None/\1 All/' apache2.conf && \
    sed -ri '168,175s_(Directory /var/www)_\1/html_' apache2.conf

RUN a2enmod rewrite

# Création de virtual hosts
RUN cd /etc/apache2/sites-available && cp 000-default.conf musikwald.conf && \
    sed -ri 's/#(ServerName) .+/\1 musikwald.local/'  musikwald.conf && \
    sed -ri 's_(DocumentRoot) .+_\1 /var/www/html/musikwald/public_' musikwald.conf && \
    a2ensite musikwald.conf

# Installation des dépendances du projet

WORKDIR /var/www/html/musikwald
