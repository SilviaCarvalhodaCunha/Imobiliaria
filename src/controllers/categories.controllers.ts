import { Request, Response } from "express";
import {
  TCategories,
  TCategory,
  TCategoryRequest,
} from "../interfaces/categories.interfaces";
import createCategoryServices from "../services/categories/createCategory.services";
import listAllCategoriesServices from "../services/categories/listAllCategories.services";
import listAllPropertiesCategoryServices from "../services/categories/listAllPropertiesCategory.services";

const createCategoryControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCategoryRequest = req.body;
  const newCategory: TCategory = await createCategoryServices(categoryData);
  return res.status(201).json(newCategory);
};

const listAllCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listCategories: TCategories = await listAllCategoriesServices();
  return res.status(200).json(listCategories);
};

const listAllPropertiesCategoryControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const propertiesCategory = await listAllPropertiesCategoryServices(id);
  return res.status(200).json(propertiesCategory);
};

export {
  createCategoryControllers,
  listAllCategoriesControllers,
  listAllPropertiesCategoryControllers,
};
