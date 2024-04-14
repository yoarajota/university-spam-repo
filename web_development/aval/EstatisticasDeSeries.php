<?php

class EstatisticasDeSeries
{
    public static function obterDuracaoTotalDaSerie(Serie $serie): int
    {
        $duracaoTotal = 0;
        foreach ($serie->getTemporadas() as $temporada) {
            foreach ($temporada->getEpisodios() as $episodio) {
                $duracaoTotal += $episodio->getDuracao();
            }
        }
        return $duracaoTotal;
    }

    public static function obterTotalDeEpisodios(Serie $serie): int
    {
        $totalEpisodios = 0;
        foreach ($serie->getTemporadas() as $temporada) {
            $totalEpisodios += count($temporada->getEpisodios());
        }
        return $totalEpisodios;
    }

    public static function obterPaisesAtoresPersonagens(Serie $serie): array
    {
        $paises = [];
        foreach ($serie->getPersonagens() as $personagem) {
            $ator = $personagem->getAtor();
            $pais = $ator->getPais();

            if (!isset($paises[$pais])) {
                $paises[$pais] = 0;
            }

            $paises[$pais] = $paises[$pais] + 1;
        }
        return $paises;
    }
}