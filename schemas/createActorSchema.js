import joi from "joi";
//Validamos que re.body sea un objeto
export default joi.object({
  //name debe ser un strin con longitud entre 4 y 20 obligatorio
  name: joi.string().pattern(new RegExp("^[a-zA-Z]{4,20}$")).required(),
  //gender debe sert un strind obligatorio y sus valores deben ser ['male','female','other']
  gender: joi.string().valid("male", "female", "other").required(),
});
