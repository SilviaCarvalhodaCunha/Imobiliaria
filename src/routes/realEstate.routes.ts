import { Router } from "express";
import {
  createPropertyControllers,
  listAllPropertiesControllers,
} from "../controllers/realEstate.controllers";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkIsAdminMiddlewares from "../middlewares/checkIsAdmin.middlewares";
import checkAddressExistsMiddlewares from "../middlewares/checkAddressExists.middlewares";
import checkCategoryExistsMiddlewares from "../middlewares/checkCategoryExists.middlewares";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import { propertyRequestSchema } from "../schemas/realEstate.schemas";

const realEstateRoutes = Router();

realEstateRoutes.post(
  "",
  checkIsBodyValidMiddlewares(propertyRequestSchema),
  checkTokenIsValidMiddlewares,
  checkIsAdminMiddlewares,
  checkAddressExistsMiddlewares,
  checkCategoryExistsMiddlewares,
  createPropertyControllers
);

realEstateRoutes.get("", listAllPropertiesControllers);

export default realEstateRoutes;
