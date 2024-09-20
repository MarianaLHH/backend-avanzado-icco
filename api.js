import express from "express";
import "./database.js";
import actorRouter from "./routes/actorRoutes.js";
const PORT = 8000;

const api = express();
api.use("/actors", actorRouter); //registrando las rutas de actorRouter ("/actors") es su prefijo ya que se repite en todas las rutas del crud

api.get("/test", (req, res) => {
  return res.json({
    msg: "API ruta/test ejecutada",
  });
});

api.listen(8000, () => {
  console.log(`Api corriendo en el puerto ${PORT}`);
});
