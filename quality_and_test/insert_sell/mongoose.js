import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB conectado");
  } catch (error) {
    throw new Error("Erro ao conectar");
  }
};

export default connect;
