<?php

require_once ("Filme.php");

abstract class Obra
{
    public function __construct(
        protected string $nome,
        protected array $personagens,
    ) {
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
     * Get the value of personagens
     */
    public function getPersonagens()
    {
        return $this->personagens;
    }

    public function addPersonagens($personagem)
    {
        $this->personagens[] = $personagem;
    }

    public function obterProtagonista()
    {
        $protas = [];

        foreach ($this->personagens as $personagem) {
            if ($personagem->isProtagonista) {
                $protas[] = $personagem;
            }
        }

        return $protas;
    }

    public abstract function obterNota(): float;
}