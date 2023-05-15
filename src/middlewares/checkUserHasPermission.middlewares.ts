import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const checkUserHasPermissionMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.user.id;
  const userAdmin = res.locals.user.admin;
  const idParams = parseInt(req.params.id);

  if (!userAdmin && userId !== idParams) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default checkUserHasPermissionMiddlewares;
