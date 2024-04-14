<?php

require_once ("Obra.php");
require_once ("Temporada.php");

class Serie extends Obra
{
    protected array $temporadas;

    public function __construct(
        $nome,
        $personagens,
        $temporadas
    ) {
        parent::__construct($nome, $personagens);
        $this->temporadas = $temporadas;
    }

    /**
     * Get the value of temporadas
     */
    public function getTemporadas()
    {
        return $this->temporadas;
    }

    public function addTemporada(Temporada $temporadada)
    {
        $this->temporadas[] = $temporadada;
    }

    public function obterNota(): float
    {
        $nota = 0;
        foreach ($this->temporadas as $temporadada) {
            $nota += $temporadada->getNota();
        }

        return $nota / count($this->getTemporadas());
    }
}