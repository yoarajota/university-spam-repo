// Importando as dependências do projeto
import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";
import cors from "cors";

// dotenv
import dotenv from "dotenv";
dotenv.config();

// Cria uma aplicação Express
const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { dbName: "db_IFRS" });
const db = mongoose.connection;

//trata os erros da conexão
mongoose.connection.on("error", function (err) {
  console.log("Erro na conexão Mongoose padrão: " + err);
});

//A conexão foi feita com sucesso
db.once("open", function () {
  console.log("Estamos conectados no banco de dados!");
});

// Inicia o servidor na porta '3000'
app.listen(3000, () => {
  console.log("Exemplo de aplicativo ouvindo a porta 3000.");
});

app.use(express.json());

app.use(cors());

app.use('/api', routes);