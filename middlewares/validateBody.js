//Le pasamos el paramero(schema)para que trabaje con el
export default (schema) => (req, res, next) => {
  //Extraemos los valores de value y error al ejecutar schema.validate
  //No s regres:value->chema validaddo y error->errores al validar
  const { value, error } = schema.validate(req.body);
  if (!error) {
    //Pasamos el request al controlador
    next();
  } else {
    //Si no regresamos un error
    // console.error(error);
    // return res.status(500).json({
    //   msg: "Error al crear actor",
    // });

    return res.status(400).json({
      msg: "Body no cumple con el formato",
      errors: error,
    });
  }
};
