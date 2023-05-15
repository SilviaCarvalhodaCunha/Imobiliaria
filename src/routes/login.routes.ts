import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import loginSchema from "../schemas/login.schemas";
import { createSessionControllers } from "../controllers/login.controllers";

const loginRoutes = Router();

loginRoutes.post(
  "",
  checkIsBodyValidMiddlewares(loginSchema),
  createSessionControllers
);

export default loginRoutes;
