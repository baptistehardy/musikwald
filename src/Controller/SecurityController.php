<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    /**
     * @Route("/api/authenticated", name="app_authenticated")
     */
    public function isAllowed()
    {
        if($this->isGranted('ROLE_USER')) {
            return new JsonResponse(json_encode(['authenticated' => true, 'is_admin' => false]));
        }
        elseif ($this->isGranted('ROLE_ADMIN')){
            return new JsonResponse(json_encode(['authenticated' => true, 'is_admin' => true]));
        }
        else {
            return new JsonResponse(json_encode(['authenticated' => false, 'is_admin' => false]));
        }
    }
}
