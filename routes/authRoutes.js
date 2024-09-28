import { Router } from "express";
//import { register } from "../controllers/authController.js"; primera forma
import * as authController from "../controllers/authController.js"; //Segunda forma
import validateBody from "../middlewares/validateBody.js";
import createUserSchema from "../schemas/createUserSchema.js";

const authRouter = Router();
//Metodos http
authRouter.post(
  "/register",
  validateBody(createUserSchema),
  authController.register
);
authRouter.post("/login", authController.login);
export default authRouter;
