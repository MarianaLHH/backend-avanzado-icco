import { Router } from "express";
import * as actorController from "../controllers/actorController.js";
import authenticated from "../middlewares/authenticated.js";
import validateBody from "../middlewares/validateBody.js";
import createActorSchema from "../schemas/createActorSchema.js";

const actorRouter = Router();
//RUTAS DE NUESTRO CRUD
actorRouter.use(authenticated);

actorRouter.get("/", authenticated, actorController.getList); //("/", Tiene que pasar algo por esa razon usamos actorController.js)
actorRouter.get("/:actorId", actorController.getById);
//Validamos el req.body con el schema
actorRouter.post("/", validateBody(createActorSchema), actorController.create);
actorRouter.put("/:actorId", actorController.update);
actorRouter.delete("/:actorId", actorController.remove);

export default actorRouter;
