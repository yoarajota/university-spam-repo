<?php

$v = file_get_contents("voto.txt");

if (isset($_GET['voto'])) {
    // IF 22 THEN 13
    $v++;
    file_put_contents("voto.txt", $v);
}

echo "Total: $v";