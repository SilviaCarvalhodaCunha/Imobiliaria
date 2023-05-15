import { NextFunction, Request, Response } from "express";
import { ILike, Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkNameCategoryExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const { name } = req.body;

  const findName = await categoryRepository.findOne({
    where: { name: ILike(name) },
  });

  if (findName) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default checkNameCategoryExistsMiddlewares;
