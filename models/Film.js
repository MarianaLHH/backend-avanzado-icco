import { Schema } from "mongoose";
//Constante que guardara el esquema Schema y le pasamos las propiedades
const filmSchema = new Schema({
  title: String,
  gender: String,
  description: String,
});

export default model("Film", filmSchema);
