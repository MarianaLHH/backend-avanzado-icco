//import Joi from "joi";
import { Schema, model } from "mongoose";
//Constante que guardara el esquema Schema y le pasamos las propiedades
const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genere: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //actors es un arreglo de objectid
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});
//Para aplicar una llave foranea en mongo se usa referencias
export default model("Film", filmSchema);
