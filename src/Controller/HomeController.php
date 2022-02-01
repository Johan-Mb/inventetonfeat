<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\BeatManager;
use App\Model\AcapellaManager;
use App\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        return $this->twig->render('Home/index.html.twig');
    }

    public function list(): string
    {
        $acappelaManager = new AcapellaManager();
        $beatManager = new BeatManager();

        $acapellas = $acappelaManager->getAll();
        shuffle($acapellas);


        $beats = $beatManager->getAll();
        shuffle($beats);

        return $this->twig->render('Home/index.html.twig', ['acapellas' => $acapellas, 'beats' => $beats]);
    }

}
