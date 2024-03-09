// Importar módulos necessários
import { Schema, model } from "mongoose";

// Define o schema do Curso
const schm = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Registra o model Course em nossa aplicação informando seu schema
const Course = model("Course", schm);

export default Course