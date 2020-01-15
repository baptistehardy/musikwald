<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(normalizationContext={"groups"={"music"}})
 * @ORM\Entity(repositoryClass="App\Repository\MusicRepository")
 */
class Music
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"music", "album", "artist", "genre"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"music", "album", "artist", "genre"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"music", "album", "artist", "genre"})
     */
    private $duration;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Artist", inversedBy="musics")
     * @Groups({"music", "album", "genre"})
     */
    private $artists;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Genre", inversedBy="musics")
     * @Groups({"music", "artist", "album"})
     */
    private $genres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Album", inversedBy="musics")
     * @Groups({"music", "genre", "artist_album_music"})
     */
    private $album;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Label", inversedBy="musics")
     * @Groups({"music", "album", "genre", "artist"})
     */
    private $label;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"music", "album", "artist", "genre"})
     */
    private $image;

    public function __construct()
    {
        $this->artists = new ArrayCollection();
        $this->genres = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * @return Collection|Artist[]
     */
    public function getArtists(): Collection
    {
        return $this->artists;
    }

    public function addArtist(Artist $artist): self
    {
        if (!$this->artists->contains($artist)) {
            $this->artists[] = $artist;
        }

        return $this;
    }

    public function removeArtist(Artist $artist): self
    {
        if ($this->artists->contains($artist)) {
            $this->artists->removeElement($artist);
        }

        return $this;
    }

    /**
     * @return Collection|Genre[]
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    public function addGenre(Genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres[] = $genre;
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        if ($this->genres->contains($genre)) {
            $this->genres->removeElement($genre);
        }

        return $this;
    }

    public function getAlbum(): ?Album
    {
        return $this->album;
    }

    public function setAlbum(?Album $album): self
    {
        $this->album = $album;

        return $this;
    }

    public function getLabel(): ?Label
    {
        return $this->label;
    }

    public function setLabel(?Label $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }
}
