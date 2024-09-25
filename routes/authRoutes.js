import { Router } from "express";
//import { register } from "../controllers/authController.js"; primera forma
import * as authController from "../controllers/authController.js"; //Segunda forma

const authRouter = Router();
//Metodos http
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
export default authRouter;
