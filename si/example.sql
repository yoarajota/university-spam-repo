CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(255)
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Fulano', 'fulano@email.com', 'senha1'),
('Beltrana', 'beltrana@email.com', 'senha2'),
('Ciclano', 'ciclano@email.com', 'senha3');