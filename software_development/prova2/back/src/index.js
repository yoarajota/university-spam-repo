import express from "express";
import router from "./router.js";
import mongoose from "mongoose";

const app = express();

router(app);
// Cria uma aplicação Express
mongoose.connect(process.env.MONGODB_URL, { dbName: "db_IFRS" });

const db = mongoose.connection;
mongoose.connection.on("error", function (err) {
  console.log("Erro na conexão Mongoose padrão: " + err);
});
//A conexão foi feita com sucesso
db.once("open", function () {
  console.log("Estamos conectados no banco de dados!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("👍 - Server Running");
});
