<!DOCTYPE html>
<html>
<head>
    <title>Atividade</title>
</head>
<body>
    
<?php
function soma($a, $b) {
    return $a + $b;
}

function subtracao($a, $b) {
    return $a - $b;
}

function multiplicacao($a, $b) {
    return $a * $b;
}

function divisao($a, $b) {
    if ($b != 0) {
        return $a / $b;
    } else {
        return "Erro: divisão por zero";
    }
}

echo "A. Soma de 5 e 2: " . soma(5, 2) . "<br>";
echo "B. Subtração de 10 e 8: " . subtracao(10, 8) . "<br>";
echo "C. Multiplicação de 7 e 4: " . multiplicacao(7, 4) . "<br>";
echo "D. Divisão de 6 por 3: " . divisao(6, 3) . "<br>";

function bhaskara($a, $b, $c) {
    $delta = $b**2 - 4 * $a * $c;

    if ($delta < 0) {
        return "Não existem raízes reais para a equação";
    } elseif ($delta == 0) {
        $x = -$b / (2 * $a);
        return "Existe uma raiz real: $x";
    } else {
        $x1 = (-$b + sqrt($delta)) / (2 * $a);
        $x2 = (-$b - sqrt($delta)) / (2 * $a);
        return "Existem duas raízes reais: $x1 e $x2";
    }
}

echo "A. " . bhaskara(4, 2, -6) . "<br>";
echo "B. " . bhaskara(7, 3, 4) . "<br>";

echo "<ul>";
for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0) {
        echo "<li>$i</li>";
    }
}
echo "</ul>";

$funcionarios[0]["nome"] = "João";
$funcionarios[0]["salario"] = 2000;
$funcionarios[1]["nome"] = "Maria";
$funcionarios[1]["salario"] = 2500;
$funcionarios[2]["nome"] = "Pedro";
$funcionarios[2]["salario"] = 1800;

echo '<br>';
echo '<br>';

echo "A. Salário da Maria: " . $funcionarios[1]["salario"] . "<br>";

echo '<br>';
echo '<br>';

echo "B. Tabela de funcionários: <br>";
echo "<table border='1'>
        <tr>
            <th>Nome</th>
            <th>Salário</th>
        </tr>";
foreach ($funcionarios as $funcionario) {
    echo "<tr>
            <td>" . $funcionario["nome"] . "</td>
            <td>" . $funcionario["salario"] . "</td>
          </tr>";
}
echo "</table>";

$total_salarios = 0;
foreach ($funcionarios as $funcionario) {
    $total_salarios += $funcionario["salario"];
}
$media_salarios = $total_salarios / count($funcionarios);
echo "C. Média dos salários: $media_salarios <br>";

$soma_salarios = 0;
foreach ($funcionarios as $funcionario) {
    $soma_salarios += $funcionario["salario"];
}
echo "D. Soma dos salários: $soma_salarios <br>";

echo "E. Funcionários com salário maior ou igual a 2000: <br>";
foreach ($funcionarios as $funcionario) {
    if ($funcionario["salario"] >= 2000) {
        echo $funcionario["nome"] . "<br>";
    }
}

function tipoTriangulo($a, $b, $c) {
    if ($a + $b > $c && $a + $c > $b && $b + $c > $a) {
        if ($a == $b && $b == $c) {
            return "Equilátero (todos os lados com medidas iguais)";
        } elseif ($a == $b || $a == $c || $b == $c) {
            return "Isósceles (apenas dois dos três lados com medidas iguais)";
        } else {
            return "Escaleno (todos os lados com medidas diferentes)";
        }
    } else {
        return "Não é um triângulo válido";
    }
}

echo '<br>';
echo '<br>';

if (!empty($_GET)) {
    $a = $_GET["a"];
    $b = $_GET["b"];
    $c = $_GET["c"];

    echo "Tipo de triângulo para a=$a, b=$b, c=$c: " . tipoTriangulo($a, $b, $c);
}

echo "<form action='/' method='get'>
    <label for='a'>Valor A:</label>
    <input type='number' name='a' id='a'><br>
    <label for='b'>Valor B:</label>
    <input type='number' name='b' id='b'><br>
    <label for='b'>Valor C:</label>
    <input type='number' name='c' id='c'><br>
    <input type='submit' value='Calcular'>
</form>
<br>
";


if (!empty($_POST)) {
    $valor1 = $_POST["valor1"];
    $valor2 = $_POST["valor2"];
    $operacao = $_POST["operacao"];

    switch ($operacao) {
        case 'soma':
            echo "Resultado da soma: " . soma($valor1, $valor2);
            break;
        case 'subtracao':
            echo "Resultado da subtração: " . subtracao($valor1, $valor2);
            break;
        case 'multiplicacao':
            echo "Resultado da multiplicação: " . multiplicacao($valor1, $valor2);
            break;
        case 'divisao':
            echo "Resultado da divisão: " . divisao($valor1, $valor2);
            break;
        default:
            echo "Operação inválida";
            break;
    }
}
?>

<body>
    <form action="/" method="post">
        <label for="valor1">Valor 1:</label>
        <input type="number" name="valor1" id="valor1"><br>
        <label for="valor2">Valor 2:</label>
        <input type="number" name="valor2" id="valor2"><br>
        <label for="operacao">Operação:</label>
        <select name="operacao" id="operacao">
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
        </select><br>
        <input type="submit" value="Calcular">
    </form>
</body>
</html>