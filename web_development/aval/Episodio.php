<?php

require_once("Midia.php");

class Episodio implements Midia
{
    public function __construct(
        protected int $numero,
        protected string $nome,
        protected int $duracao,
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
     * Get the value of nome
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     *
     * @return  self
     */
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
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
    public function setDuracao($duracao): void
    {
        $this->duracao = $duracao;
    }
}