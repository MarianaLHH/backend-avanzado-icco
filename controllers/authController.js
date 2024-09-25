import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import User from "../models/User.js";
export const register = async (req, res) => {
  try {
    //Sobreescribir el body.password con un password encriptado
    req.body.password = await bcrypt.hash(req.body.password, 10); //Sobreescrbiendo req.body.passwor para que este encriptado
    const user = await User.create(req.body);
    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al registrar usuario",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(400).json({
        msg: "User not found",
      });
    }
    //Comparando informacion del body con la encriptada
    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      return res.status(401).json({
        msg: "Credenciales Invalidas",
      });
    }
    //Generar  y mandar token
    const token = jwt.encode(
      {
        userId: user.id,
      },
      process.env.TOKEN_KEY
    );
    return res.json({
      msg: "Contraseña y correo validado",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al hacer login",
    });
  }
};
