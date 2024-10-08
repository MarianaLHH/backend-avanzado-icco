//Para crear entidades a modelos de mongoose para ello necesitamos : schema y name
// Schema es una clase
//import { required } from "joi"; OFICIAL
import Joi from "joi"; //Lo cambie
import { Schema, model } from "mongoose";
const actorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//Cosas necesarias para hacer un modelo em mongoose
//Nota.-Los nombres de los modelos deben ser en singular y que inicien con mayuscula
export default model("Actor", actorSchema); //Funcion model
