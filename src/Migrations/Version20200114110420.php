<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200114110420 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TABLE label (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, label VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE music (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, duration TIME NOT NULL, album_id INTEGER DEFAULT NULL, label_id INTEGER DEFAULT NULL)');
        $this->addSql('CREATE TABLE music_artist (music_id INTEGER NOT NULL, artist_id INTEGER NOT NULL, PRIMARY KEY(music_id, artist_id))');
        $this->addSql('CREATE TABLE music_genre (music_id INTEGER NOT NULL, genre_id INTEGER NOT NULL, PRIMARY KEY(music_id, genre_id))');
        $this->addSql('CREATE TABLE album (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, release_year VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE album_artist (album_id INTEGER NOT NULL, artist_id INTEGER NOT NULL, PRIMARY KEY(album_id, artist_id))');
        $this->addSql('CREATE TABLE genre (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, label VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE artist (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP TABLE label');
        $this->addSql('DROP TABLE music');
        $this->addSql('DROP TABLE music_artist');
        $this->addSql('DROP TABLE music_genre');
        $this->addSql('DROP TABLE album');
        $this->addSql('DROP TABLE album_artist');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE artist');
    }
}
