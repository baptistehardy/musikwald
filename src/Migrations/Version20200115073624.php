<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200115073624 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__music AS SELECT id, name, duration, album_id, label_id FROM music');
        $this->addSql('DROP TABLE music');
        $this->addSql('CREATE TABLE music (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL COLLATE BINARY, album_id INTEGER DEFAULT NULL, label_id INTEGER DEFAULT NULL, duration INTEGER NOT NULL, image VARCHAR(255) DEFAULT NULL)');
        $this->addSql('INSERT INTO music (id, name, duration, album_id, label_id) SELECT id, name, duration, album_id, label_id FROM __temp__music');
        $this->addSql('DROP TABLE __temp__music');
        $this->addSql('CREATE TEMPORARY TABLE __temp__album AS SELECT id, name, release_year FROM album');
        $this->addSql('DROP TABLE album');
        $this->addSql('CREATE TABLE album (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL COLLATE BINARY, release_year INTEGER NOT NULL)');
        $this->addSql('INSERT INTO album (id, name, release_year) SELECT id, name, release_year FROM __temp__album');
        $this->addSql('DROP TABLE __temp__album');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__album AS SELECT id, name, release_year FROM album');
        $this->addSql('DROP TABLE album');
        $this->addSql('CREATE TABLE album (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, release_year VARCHAR(255) NOT NULL COLLATE BINARY)');
        $this->addSql('INSERT INTO album (id, name, release_year) SELECT id, name, release_year FROM __temp__album');
        $this->addSql('DROP TABLE __temp__album');
        $this->addSql('CREATE TEMPORARY TABLE __temp__music AS SELECT id, name, duration, album_id, label_id FROM music');
        $this->addSql('DROP TABLE music');
        $this->addSql('CREATE TABLE music (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, album_id INTEGER DEFAULT NULL, label_id INTEGER DEFAULT NULL, duration TIME NOT NULL)');
        $this->addSql('INSERT INTO music (id, name, duration, album_id, label_id) SELECT id, name, duration, album_id, label_id FROM __temp__music');
        $this->addSql('DROP TABLE __temp__music');
    }
}
