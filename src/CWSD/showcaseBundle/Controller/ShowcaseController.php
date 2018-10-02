<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 29/05/18
 * Time: 16:55
 */


namespace CWSD\showcaseBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;


class ShowcaseController extends Controller
{
    public function indexAction()

    {
        $content=$this
            ->get('templating')
            ->render('CWSDshowcaseBundle:Showcase:index.html.twig');

        return new Response($content);
    }

    public function devAction()

    {
        $content=$this
            ->get('templating')
            ->render('CWSDshowcaseBundle:Showcase:dev.html.twig');

        return new Response($content);
    }
}