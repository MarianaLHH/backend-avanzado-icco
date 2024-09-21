import { Router } from "express";
import * as actorController from "../controllers/actorController.js";

const actorRouter = Router();
//RUTAS DE NUESTRO CRUD
actorRouter.get("/", actorController.getList); //("/", Tiene que pasar algo por esa razon usamos actorController.js)
actorRouter.get("/:actorId", actorController.getById);
actorRouter.post("/", actorController.create);
actorRouter.put("/:actorId", actorController.update);
actorRouter.delete("/:actorId", actorController.remove);

export default actorRouter;
