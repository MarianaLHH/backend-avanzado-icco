import jwt from "jwt-simple";
export default (req, res, next) => {
  //Extraer token de las cabeceras Authorization
  const token = req.headers["authorization"]; //Se manda desde la cabecera de thunder

  //Validar que el token  no sea vacio
  if (!token) {
    return res.status(401).json({
      msg: "No se encontro el token",
    });
  }

  //Validar que el token sea creado por el servidor(firmado por mi)
  try {
    const payload = jwt.decode(token, process.env.TOKEN_KEY);
    console.log(payload);

    //Un midleware manda a llamar un controlador con next() solo si pasan todas las validaciones del token
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      msg: "Token invalido",
    });
  }
};
