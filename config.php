<?php

use Doctrine\ORM\Tools\Setup as DoctrineSetup;
use Doctrine\Common\Annotations\AnnotationRegistry;

return [
    'db.host' => DI\env('DATABASE_PORT_5432_TCP_ADDR'),
    'db.port' => DI\env('DATABASE_PORT_5432_TCP_PORT'),

    'Doctrine\ORM\EntityManager' => DI\factory(function(DI\Container $c) {
        return Doctrine\ORM\EntityManager::create(
            [
                'driver' => 'pdo_pgsql',
                'host' => $c->get('db.host'),
                'port' => $c->get('db.port'),
                'user' => 'postgres',
                'dbname' => 'myproject'
            ],
            $c->get('Doctrine\ORM\Configuration')
        );
    })
];
