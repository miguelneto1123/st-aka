<?php

namespace Starticket\AkaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/aka")
     */
    public function indexAction()
    {
        return $this->render('AkaBundle:Default:index.html.twig');
    }
}