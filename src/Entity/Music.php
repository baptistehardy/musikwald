<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\MusicRepository")
 */
class Music
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="time")
     */
    private $duration;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Artist", inversedBy="musics")
     */
    private $artists;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\genre", inversedBy="musics")
     */
    private $genres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Album", inversedBy="musics")
     */
    private $album;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Label", inversedBy="musics")
     */
    private $label;

    public function __construct()
    {
        $this->Artists = new ArrayCollection();
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

    public function getDuration(): ?\DateTimeInterface
    {
        return $this->duration;
    }

    public function setDuration(\DateTimeInterface $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * @return Collection|Artist[]
     */
    public function getArtists(): Collection
    {
        return $this->Artists;
    }

    public function addArtist(Artist $artist): self
    {
        if (!$this->Artists->contains($artist)) {
            $this->Artists[] = $artist;
        }

        return $this;
    }

    public function removeArtist(Artist $artist): self
    {
        if ($this->Artists->contains($artist)) {
            $this->Artists->removeElement($artist);
        }

        return $this;
    }

    /**
     * @return Collection|genre[]
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    public function addGenre(genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres[] = $genre;
        }

        return $this;
    }

    public function removeGenre(genre $genre): self
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
}
