// @ts-nocheck

import express from "express";
import mongoose, { Connection } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routes.js";

config();

// ----- SERVER -----

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ - Server running on port ${PORT}`);
});

// ----- DB -----

const MONGODB_URL = process.env.MONGODB_URL;

if (MONGODB_URL) {
  mongoose.connect(MONGODB_URL, { dbName: "db" });

  const db: Connection = mongoose.connection;
  mongoose.connection.on("error", function (err) {
    console.log("❌ - DB");
  });

  db.once("open", function () {
    console.log("✅ - DB");
  });
} else {
  console.log("❌ - MONGO DB KEY MISSING");
}
