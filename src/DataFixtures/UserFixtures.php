<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setEmail('admin@gmail.com');
        $admin->setPassword($this->passwordEncoder->encodePassword($admin,'admin'));
        $roles = ['ROLE_USER','ROLE_ADMIN'];
        $admin->setRoles($roles);
        $manager->persist($admin);

        $user = new User();
        $user->setEmail('user@gmail.com');
        $user->setPassword($this->passwordEncoder->encodePassword($user, 'user'));
        $manager->persist($user);

        $manager->flush();
    }
}
