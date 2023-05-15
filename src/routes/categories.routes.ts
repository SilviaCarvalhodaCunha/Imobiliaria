import { Router } from "express";
import {
  createCategoryControllers,
  listAllCategoriesControllers,
  listAllPropertiesCategoryControllers,
} from "../controllers/categories.controllers";
import checkIsAdminMiddlewares from "../middlewares/checkIsAdmin.middlewares";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import { categoryRequestSchema } from "../schemas/categories.schemas";
import checkNameCategoryExistsMiddlewares from "../middlewares/checkNameCategoryExists.middlewares";
import checkCategoryExistsMiddlewares from "../middlewares/checkCategoryExists.middlewares";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  checkIsBodyValidMiddlewares(categoryRequestSchema),
  checkTokenIsValidMiddlewares,
  checkIsAdminMiddlewares,
  checkNameCategoryExistsMiddlewares,
  createCategoryControllers
);

categoriesRoutes.get("", listAllCategoriesControllers);

categoriesRoutes.get(
  "/:id/realEstate",
  checkCategoryExistsMiddlewares,
  listAllPropertiesCategoryControllers
);

export default categoriesRoutes;
