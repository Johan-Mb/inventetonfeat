<?php

namespace App\Model;

use PDO;

class BeatManager extends AbstractManager
{
    public const TABLE = 'beat';

    public function getAll(): array
    {
        $statement = $this->pdo->query("SELECT * FROM beat");
        $beats = $statement->fetchAll();

        return $beats;
    }
}