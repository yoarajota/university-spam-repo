<?php

$h = 'localhost';
$u = 'root';
$n = 'si';

$user = $_POST['nome'];
$passw = $_POST['senha'];

$pdo = new PDO("mysql:host=$h;dbname=$n", $u, null);

// $sql = "SELECT * FROM usuarios where nome = '$user' and senha = '$passw'";

// $resultados = $pdo->query($sql);

$sql = "SELECT * FROM usuarios where nome = ? and senha = ?";

$resultados = $pdo->prepare($sql);

$resultados->bindValue(1, $user);
$resultados->bindValue(2, $passw);
$resultados->execute();

// print_r($resultados->fetchAll());
echo json_encode($resultados->fetchAll()[0]);