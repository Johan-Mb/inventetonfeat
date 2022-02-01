<?php

namespace App\Model;

use PDO;

class AcapellaManager extends AbstractManager
{
    public const TABLE = 'acapella';

    public function getAll(): array
    {
        $statement = $this->pdo->query("SELECT * FROM acapella");
        $acapellas = $statement->fetchAll();

        return  $acapellas;
    }
}