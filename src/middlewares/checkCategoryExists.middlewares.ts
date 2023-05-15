import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkCategoryExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryId = req.body.categoryId || req.params.id;

  const findCategory = await categoryRepository.findOneBy({ id: categoryId });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  res.locals.category = {
    id: findCategory.id,
    name: findCategory.name,
  };

  return next();
};

export default checkCategoryExistsMiddlewares;
