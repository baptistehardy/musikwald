# This file is used by Docker to build and configure a container
# It's supposed to create a PhpMyAdmin ready to use and configured to work
# on a MySQL server called "db".
# It's also supposed to create an musikwald vhost based on the current source.

# Based on the PHP 5.6 and Apache image.
FROM php:7.4-apache

# Since most of the work during the install happens in the html/ directory we
# place the working dir here.
WORKDIR /var/www/html/

# Apache will run in the container so we need to expose the port 80.
EXPOSE 80


# Install zip, wet, git, vim, memcached library, mail utils, image manipulation
# libraries, mysql client, mysql utilities, qrcode utilities, bar code utilities
RUN apt-get update -y -qq && \
    apt-get install -qq -y zip unzip wget git vim zlib1g-dev libmemcached-dev \
    mailutils libpng-dev libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev \
    libfreetype6-dev dmtx-utils

# Configure MySQL settings my default to connect automatically
RUN echo "\n\n[mysql]\nhost=db\nuser=root\npassword=u4HV3iiiwRf5GKwyBFDGQ\ndatabase=musikwald" >> /etc/mysql/my.cnf

# Set PHP configuration
# Allow uploaded file size 50M
RUN cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini && \
        sed -ri "s/(upload_max_filesize =) 2M/\1 500M/" /usr/local/etc/php/php.ini && \
        sed -ri "s/(post_max_filesize =) 2M/\1 500M/" /usr/local/etc/php/php.ini

# Install Composer
RUN mkdir -p /root/bin/
RUN cd /root/bin/ && \
    wget  https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer -O ./composer-setup.php -q && php ./composer-setup.php --quiet && mv composer.phar composer && rm composer-setup.php


# Extract PHP source
RUN docker-php-source extract

# Allows .htaccess in our vhost.
# To do so we update apache2.conf file.

RUN cd /etc/apache2 && sed -ri '169,175s/(AllowOverride) None/\1 All/' apache2.conf && \
    sed -ri '168,175s_(Directory /var/www)_\1/html_' apache2.conf

RUN a2enmod rewrite

# Create virtual hosts

RUN cd /etc/apache2/sites-available && cp 000-default.conf musikwald.conf && \
    sed -ri 's/#(ServerName) .+/\1 musikwald.local/'  musikwald.conf && \
    sed -ri 's_(DocumentRoot) .+_\1 /var/www/html/musikwald/public_' musikwald.conf && \
    a2ensite musikwald.conf

# Install imagemagick
RUN apt-get update -yqq && apt-get install -yqq imagemagick

WORKDIR /var/www/html/musikwald