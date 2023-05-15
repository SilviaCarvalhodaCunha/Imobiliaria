import { Router } from "express";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import { schedulesRequestSchemas } from "../schemas/schedules.schemas";
import {
  listAllAppointmentsPropertyControllers,
  scheduleVisitPropertyControllers,
} from "../controllers/schedules.controllers";
import checkIsAdminMiddlewares from "../middlewares/checkIsAdmin.middlewares";
import checkUserExistsMiddlewares from "../middlewares/checkUserExists.middlewares";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  checkIsBodyValidMiddlewares(schedulesRequestSchemas),
  checkTokenIsValidMiddlewares,
  checkUserExistsMiddlewares,
  scheduleVisitPropertyControllers
);

schedulesRoutes.get(
  "/realEstate/:id",
  checkTokenIsValidMiddlewares,
  checkIsAdminMiddlewares,
  listAllAppointmentsPropertyControllers
);

export default schedulesRoutes;
