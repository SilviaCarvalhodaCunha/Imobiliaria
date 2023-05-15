import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { AppError } from "../error";

const checkAddressExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (req.body.address) {
    const { street, zipCode, city, state } = req.body.address;
    const findAddress = await addressRepository.findOneBy({
      street: street,
      zipCode: zipCode,
      number: req.body.address.number ? req.body.address.number : null,
      city: city,
      state: state,
    });

    if (findAddress) {
      throw new AppError("Address already exists", 409);
    }
  }

  return next();
};

export default checkAddressExistsMiddlewares;
