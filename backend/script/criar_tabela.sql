-- Executar conectado ao banco banco_caio
-- CREATE DATABASE banco_caio;

CREATE TABLE IF NOT EXISTS pessoa (
    pes_id   SERIAL PRIMARY KEY,
    pes_nome VARCHAR(100) NOT NULL
);
