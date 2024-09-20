import mongoose from "mongoose";
import "dotenv/config";

//CREANDO EVENTO PARA VER LA CONEXION EXITOSA
mongoose.connection.on("connected", () => {
  console.log(`Conectado a base de datos`);
});
//CREANDO UN EVENTO PARA VER ERROR AL CONECTAR
mongoose.connection.on("error", () => {
  console.log(`Error en la conexion a la base de datos`);
});

//CONECTANDO A LA BASE DE DATOS
//mongoose.connect(process.env);
console.log(process.env.MONGO_URI); //Vemos todo lo que tiene
