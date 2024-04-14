<?php

class Filme extends Obra
{
    protected int $duracao;
    protected float $nota;
    protected string $genero;

    public function __construct(
        $nome,
        $personagem,
        $duracao,
        $nota,
        $genero
    ) {
        parent::__construct($nome, $personagem);
        $this->duracao = $duracao;
        $this->nota = $nota;
        $this->genero = $genero;
    }

    /**
     * Get the value of duracao
     */
    public function getDuracao(): int
    {
        return $this->duracao;
    }

    /**
     * Set the value of duracao
     *
     * @return  self
     */
    public function setDuracao(int $duracao): void
    {
        $this->duracao = $duracao;
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
     * Get the value of genero
     */
    public function getGenero()
    {
        return $this->genero;
    }

    public function obterNota(): float
    {
        return $this->getNota();
    }
}