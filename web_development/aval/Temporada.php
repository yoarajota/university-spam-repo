<?php

class Temporada
{
    public function __construct(
        protected int $numero,
        protected float $nota,
        protected array $episodios,
    ) {

    }

    /**
     * Get the value of numero
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * Set the value of numero
     *
     * @return  self
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get the value of nota
     */
    public function getNota()
    {
        return $this->nota;
    }

    /**
     * Set the value of nota
     *
     * @return  self
     */
    public function setNota($nota)
    {
        $this->nota = $nota;

        return $this;
    }

    /**
     * Get the value of episodios
     */
    public function getEpisodios()
    {
        return $this->episodios;
    }

    public function addEpisodio(Episodio $episodio)
    {
        $this->episodios[] = $episodio;
    }
}