import { Router } from "express";
import * as actorController from "../controllers/actorController.js";

const actorRouter = Router();
//RUTAS DE NUESTRO CRUD
actorRouter.get("/", actorController.getList); //("/", Tiene que pasar algo por esa razon usamos actorController.js)
actorRouter.get("/:id", actorController.getById);
actorRouter.post("/", actorController.create);
actorRouter.put("/:id", actorController.update);
actorRouter.delete("/:id", actorController.remove);

export default actorRouter;
