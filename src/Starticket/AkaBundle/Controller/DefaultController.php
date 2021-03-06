<?php

namespace Starticket\AkaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $obj = array(
            'name' => 'John Doe',
            'age' => 35,
            'address' => 'Main St. 35'
        );
        return $this->render('AkaBundle:Default:index.html.twig', array(
            'event' => "Schulungsevent",
            'info' => json_encode($obj)
        ));
    }
}
