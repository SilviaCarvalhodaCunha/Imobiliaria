import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const checkIsAdminMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin = res.locals.user.admin;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default checkIsAdminMiddlewares;
