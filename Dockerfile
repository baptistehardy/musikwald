# Ce fichier créer et configurer les containers
# Utilise les images de PHP 7.4 & apache
FROM php:7.4-apache

# Dossier de travail pour l'installation
WORKDIR /var/www/html/

# Expose le port 80 pour Apache
EXPOSE 80

# Installation de libirairies nécessaires
RUN apt-get update -y -qq && \
    apt-get install -qq -y zip unzip wget git vim zlib1g-dev libmemcached-dev \
    mailutils libpng-dev libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev \
    libfreetype6-dev dmtx-utils

# Configuration de MySQL par défaut pour se connecter automatiquement
# RUN echo "\n\n[mysql]\nhost=db\nuser=root\npassword=u4HV3iiiwRf5GKwyBFDGQ\ndatabase=musikwald" >> /etc/mysql/my.cnf

# Installe Composer
RUN mkdir -p /root/bin/
RUN cd /root/bin/ && \
    wget  https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer -O ./composer-setup.php -q && php ./composer-setup.php --quiet && mv composer.phar composer && rm composer-setup.php


# Extrait les sources PHP
RUN docker-php-source extract

# Autorise les vhosts en modifiant le fichier de conf d'apache
RUN cd /etc/apache2 && sed -ri '169,175s/(AllowOverride) None/\1 All/' apache2.conf && \
    sed -ri '168,175s_(Directory /var/www)_\1/html_' apache2.conf

RUN a2enmod rewrite

# Creation d'un virtual host
RUN cd /etc/apache2/sites-available && cp 000-default.conf musikwald.conf && \
    sed -ri 's/#(ServerName) .+/\1 musikwald.local/'  musikwald.conf && \
    sed -ri 's_(DocumentRoot) .+_\1 /var/www/html/musikwald/public_' musikwald.conf && \
    rm -rf /etc/apache2/sites-enabled/000-default.conf && \
    a2ensite musikwald.conf

WORKDIR /var/www/html/musikwald/public