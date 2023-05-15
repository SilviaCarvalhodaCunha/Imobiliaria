import { Request, Response } from "express";
import { TPropertyRequest } from "../interfaces/realEstate.interfaces";
import createPropertyServices from "../services/realEstate/createProperty.services";
import listAllPropertiesServices from "../services/realEstate/listAllProperties.services";
import { RealEstate } from "../entities";

const createPropertyControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const propertyData: TPropertyRequest = req.body;
  const category = res.locals.category;
  const newProperty = await createPropertyServices(propertyData, category);

  return res.status(201).json(newProperty);
};

const listAllPropertiesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listProperties: RealEstate[] = await listAllPropertiesServices();
  return res.status(200).json(listProperties);
};

export { createPropertyControllers, listAllPropertiesControllers };
