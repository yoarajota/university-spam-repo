<!DOCTYPE html>
<html>
<head>
    <title>Saudação</title>
    <style>
        .green { color: green; }
        .red { color: red; }
        .blue { color: blue; }
    </style>
</head>
<body>
<?php
$hora = date('H');
if ($hora >= 6 && $hora < 12) {
    echo "<p class='green'>Bom dia!</p>";
} elseif ($hora >= 12 && $hora < 18) {
    echo "<p class='red'>Boa tarde!</p>";
} else {
    echo "<p class='blue'>Boa noite!</p>";
}

$numero_sorteado = rand(1, 15);
echo "Número sorteado: $numero_sorteado <br>";

$valor_atual = $numero_sorteado;
while ($valor_atual % 7 != 0) {
    echo $valor_atual . "<br>";
    $valor_atual += 1;
}
echo "$valor_atual é divisível por 7!";

function fahrenheitParaCelsius($fahrenheit) {
    return ($fahrenheit - 32) / 1.8;
}

echo "<br>";
echo "<br>";

$temperaturas_fahrenheit = array(90, 77, 52, 12);
foreach ($temperaturas_fahrenheit as $fahrenheit) {
    $celsius = fahrenheitParaCelsius($fahrenheit);
    echo "$fahrenheit °F é equivalente a $celsius °C <br>";
}

echo "<br>";
echo "<br>";

$ginastas[0]["nome"] = "Jade";
$ginastas[0]["nota"] = 12.95;
$ginastas[0]["pais"] = "Brasil";
$ginastas[1]["nome"] = "Shawn";
$ginastas[1]["nota"] = 13.50;
$ginastas[1]["pais"] = "EUA";
$ginastas[2]["nome"] = "Daiane";
$ginastas[2]["nota"] = 14.35;
$ginastas[2]["pais"] = "Brasil";
$ginastas[3]["nome"] = "Nadia";
$ginastas[3]["nota"] = 12.90;
$ginastas[3]["pais"] = "Romênia";

// A. Lista de nomes de todas as ginastas
echo "A. Lista de nomes de todas as ginastas: <br>";
foreach ($ginastas as $ginasta) {
    echo $ginasta["nome"] . "<br>";
}

// B. Média de notas
$total_notas = 0;
foreach ($ginastas as $ginasta) {
    $total_notas += $ginasta["nota"];
}
$media_notas = $total_notas / count($ginastas);
echo "B. Média de notas: $media_notas <br>";

// C. Lista de nomes das ginastas com nota acima de 13
echo "C. Lista de nomes das ginastas com nota acima de 13: <br>";
foreach ($ginastas as $ginasta) {
    if ($ginasta["nota"] > 13) {
        echo $ginasta["nome"] . "<br>";
    }
}

// D. Nome da ginasta com a nota mais alta
$nota_mais_alta = -1;
$nome_ginasta_nota_alta = "";
foreach ($ginastas as $ginasta) {
    if ($ginasta["nota"] > $nota_mais_alta) {
        $nota_mais_alta = $ginasta["nota"];
        $nome_ginasta_nota_alta = $ginasta["nome"];
    }
}
echo "D. Nome da ginasta com a nota mais alta: $nome_ginasta_nota_alta <br>";

echo "<br>";
echo "<br>";

$dia_atual = date('j');
for ($i = 1; $i <= 31; $i++) {
    if ($i != $dia_atual) {
        echo "$i <br>";
    }
}
?>
</body>
</html>