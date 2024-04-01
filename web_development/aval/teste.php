<?php

require_once ("Ator.php");
require_once ("Personagem.php");
require_once ("Episodio.php");
require_once ("Temporada.php");
require_once ("Serie.php");
require_once ("Filme.php");
require_once ("Obra.php");
require_once ("Midia.php");
require_once ("EstatisticasDeSeries.php");

$ator1 = new Ator("Leonardo DiCaprio", 46, "Estados Unidos");
$ator2 = new Ator("Scarlett Johansson", 37, "Estados Unidos");

$personagem1 = new Personagem("Jack Dawson", $ator1, true, "Protagonista de Titanic");
$personagem2 = new Personagem("Natasha Romanoff", $ator2, true, "Protagonista de Vingadores");

$episodio1 = new Episodio(1, "Episódio 1", 45);
$episodio2 = new Episodio(2, "Episódio 2", 50);
$episodio3 = new Episodio(3, "Episódio 3", 47);

$temporada1 = new Temporada(1, 8.5, [$episodio1, $episodio2]);
$temporada2 = new Temporada(2, 9.0, [$episodio3]);

$serie = new Serie("Nome da Série", [$personagem1, $personagem2], [$temporada1, $temporada2]);

$episodioExtra = new Episodio(4, "Episódio Extra", 60);
$temporada2->addEpisodio($episodioExtra);

$temporada3 = new Temporada(3, 9.5, [new Episodio(1, "Episódio 1", 40), new Episodio(2, "Episódio 2", 42)]);
$serie->addTemporada($temporada3);

$personagem3 = new Personagem("Tony Stark", $ator1, true, "Protagonista de Homem de Ferro");
$personagem4 = new Personagem("Bruce Banner", $ator2, true, "Protagonista de Hulk");
$filme = new Filme("Vingadores", [$personagem3, $personagem4], 120, 8.0, "Ação");

echo "Nome da série: " . $serie->getNome() . "\n";
echo "Personagens da série:\n";
foreach ($serie->getPersonagens() as $personagem) {
    echo "- " . $personagem->getNome() . " (" . $personagem->getAtor()->getNome() . ")\n";
}
echo "Duração total da série: " . EstatisticasDeSeries::obterDuracaoTotalDaSerie($serie) . " minutos\n";
echo "Total de episódios da série: " . EstatisticasDeSeries::obterTotalDeEpisodios($serie) . "\n";
echo "Países dos atores dos personagens da série:\n";
foreach (EstatisticasDeSeries::obterPaisesAtoresPersonagens($serie) as $pais => $quantidade) {
    echo "- $quantidade ator(es) de $pais\n";
}
echo "Nota da série: " . $serie->obterNota() . "\n\n";

echo "Nome do filme: " . $filme->getNome() . "\n";
echo "Duração do filme: " . $filme->getDuracao() . " minutos\n";
echo "Gênero do filme: " . $filme->getGenero() . "\n";
echo "Personagens do filme:\n";
foreach ($filme->getPersonagens() as $personagem) {
    echo "- " . $personagem->getNome() . " (" . $personagem->getAtor()->getNome() . ") (Protagonista? " . ($personagem->isProtagonista() ? "Sim" : "Não") . ")\n";
}
echo "Nota do filme: " . $filme->obterNota() . "\n\n";

echo "\n";
echo "\n";
echo "\n";

$ator1 = new Ator("Tom Cruise", 59, "Estados Unidos");
$ator2 = new Ator("Emma Stone", 33, "Estados Desunidos");

$personagem1 = new Personagem("Ethan Hunt", $ator1, true, "Um doido muito louco");
$personagem2 = new Personagem("Mia Dolan", $ator2, true, "Uma louca muito doida");

$episodio1 = new Episodio(1, "Episódio 1", 50);
$episodio2 = new Episodio(2, "Episódio 2", 45);
$episodio3 = new Episodio(3, "Episódio 3", 55);

$temporada1 = new Temporada(1, 9.5, [$episodio1, $episodio2]);
$temporada2 = new Temporada(2, 9.0, [$episodio3]);

$serie = new Serie("Missão Impossível", [$personagem1, $personagem2], [$temporada1, $temporada2]);

$filme = new Filme("Thor: Ragnarok", [], 120, 8.0, "Ação");

$ator3 = new Ator("Chris Hemsworth", 38, "Austrália");
$ator4 = new Ator("Jota", 20, "Austrália");
$personagem3 = new Personagem("Thor", $ator3, true, "Protagonista de Thor");
$personagem4 = new Personagem("Jota", $ator4, false, "Personagem secundario mais bonito que o Chris Hemsworth");
$filme->addPersonagens($personagem3);
$filme->addPersonagens($personagem4);

echo "Nome da série: " . $serie->getNome() . "\n";
echo "Personagens da série:\n";
foreach ($serie->getPersonagens() as $personagem) {
    echo "- " . $personagem->getNome() . " (" . $personagem->getAtor()->getNome() . ")\n";
}
echo "Duração total da série: " . EstatisticasDeSeries::obterDuracaoTotalDaSerie($serie) . " minutos\n";
echo "Total de episódios da série: " . EstatisticasDeSeries::obterTotalDeEpisodios($serie) . "\n";
echo "Países dos atores dos personagens da série:\n";
foreach (EstatisticasDeSeries::obterPaisesAtoresPersonagens($serie) as $pais => $quantidade) {
    echo "- $quantidade ator(es) de $pais\n";
}
echo "Nota da série: " . $serie->obterNota() . "\n\n";


echo "Nome do filme: " . $filme->getNome() . "\n";
echo "Duração do filme: " . $filme->getDuracao() . " minutos\n";
echo "Gênero do filme: " . $filme->getGenero() . "\n";
echo "Personagens do filme:\n";
foreach ($filme->getPersonagens() as $personagem) {
    echo "- " . $personagem->getNome() . " (" . $personagem->getAtor()->getNome() . ") (Protagonista? " . ($personagem->isProtagonista() ? "Sim" : "Não") . "). É; " . $personagem->getDescricao() . "\n";
}
echo "Nota do filme: " . $filme->obterNota() . "\n\n";

?>