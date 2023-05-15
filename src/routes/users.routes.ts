import { Router } from "express";
import {
  listAllUsersControllers,
  registerUserControllers,
  updateUserControllers,
} from "../controllers/users.controllers";
import checkEmailExistsMiddlewares from "../middlewares/checkEmailExists.middlewares";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import { userRequestSchema, userRequestUpdate } from "../schemas/users.schemas";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkIsAdminMiddlewares from "../middlewares/checkIsAdmin.middlewares";
import checkUserExistsMiddlewares from "../middlewares/checkUserExists.middlewares";
import checkUserHasPermissionMiddlewares from "../middlewares/checkUserHasPermission.middlewares";
import { deleteUserControllers } from "../controllers/users.controllers";

const usersRoutes = Router();

usersRoutes.post(
  "",
  checkIsBodyValidMiddlewares(userRequestSchema),
  checkEmailExistsMiddlewares,
  registerUserControllers
);

usersRoutes.get(
  "",
  checkTokenIsValidMiddlewares,
  checkIsAdminMiddlewares,
  listAllUsersControllers
);

usersRoutes.patch(
  "/:id",
  checkIsBodyValidMiddlewares(userRequestUpdate),
  checkTokenIsValidMiddlewares,
  checkUserHasPermissionMiddlewares,
  checkUserExistsMiddlewares,
  checkEmailExistsMiddlewares,
  updateUserControllers
);

usersRoutes.delete(
  "/:id",
  checkTokenIsValidMiddlewares,
  checkUserExistsMiddlewares,
  checkIsAdminMiddlewares,
  deleteUserControllers
);

export default usersRoutes;
