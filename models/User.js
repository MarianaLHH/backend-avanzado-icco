import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true, //unique :true para que la contraseña sea unica y no se repita
  },
  name: {
    type: String,
    required: true, // required:true para que el campo sea oblogatorio
  },
  password: {
    type: String,
    required: true,
  },
});
export default model("User", userSchema);
