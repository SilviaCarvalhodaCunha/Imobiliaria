import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkUserExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userId: number = parseInt(req.params.id) || res.locals.user.id

  const findUser = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default checkUserExistsMiddlewares;
