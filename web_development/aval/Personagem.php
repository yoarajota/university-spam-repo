<?php

class Personagem
{
    public function __construct(
        protected string $nome,
        protected Ator $ator,
        protected bool $protagonista,
        protected string $descricao
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
     * Get the value of ator
     */
    public function getAtor()
    {
        return $this->ator;
    }

    /**
     * Set the value of ator
     *
     * @return  self
     */
    public function setAtor($ator)
    {
        $this->ator = $ator;

        return $this;
    }

    /**
     * Get the value of protagonista
     */
    public function isProtagonista()
    {
        return $this->protagonista;
    }

    /**
     * Set the value of protagonista
     *
     * @return  self
     */
    public function setProtagonista($protagonista)
    {
        $this->protagonista = $protagonista;

        return $this;
    }

    /**
     * Get the value of descricao
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * Set the value of descricao
     *
     * @return  self
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;

        return $this;
    }
}