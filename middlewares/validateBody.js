import joi from "joi";
//Validamos que re.body sea un objeto
const schema = joi.object({
  //name debe ser un strin con longitud entre 4 y 20 obligatorio
  name: joi.string().min(4).max(20).required(),
  //gender debe sert un strind obligatorio y sus valores deben ser ['male','female','other']
  gender: joi.string().valid("male", "female", "other").required(),
});
export default (req, res, next) => {
  //Extraemos los valores de value y error al ejecutar schema.validate
  //No s regres:value->chema validaddo y error->errores al validar
  const { value, error } = schema.validate(req.body);
  if (!error) {
    //Pasamos el request al controlador
    next();
  } else {
    //Si no regresamos un error
    return res.status(400).json({
      msg: "Body no cumple con el formato",
      errors: error,
    });
  }
};
