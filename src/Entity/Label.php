<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\LabelRepository")
 */
class Label
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"music", "album", "genre"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"music", "album", "genre"})
     */
    private $label;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Music", mappedBy="label")
     */
    private $musics;

    public function __construct()
    {
        $this->musics = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return Collection|Music[]
     */
    public function getMusics(): Collection
    {
        return $this->musics;
    }

    public function addMusic(Music $music): self
    {
        if (!$this->musics->contains($music)) {
            $this->musics[] = $music;
            $music->setLabel($this);
        }

        return $this;
    }

    public function removeMusic(Music $music): self
    {
        if ($this->musics->contains($music)) {
            $this->musics->removeElement($music);
            // set the owning side to null (unless already changed)
            if ($music->getLabel() === $this) {
                $music->setLabel(null);
            }
        }

        return $this;
    }
}
