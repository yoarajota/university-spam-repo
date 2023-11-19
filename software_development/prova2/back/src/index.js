import express from "express";
import router from "./router.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from 'cors'

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
router(app);

app.listen(8000, () => {
  console.log("✅ - Server");
});

mongoose.connect(process.env.MONGODB_URL, { dbName: "db" });
const db = mongoose.connection;
mongoose.connection.on("error", function (err) {
  console.log("❌ - DB");
});

db.once("open", function () {
  console.log("✅ - DB");
});
