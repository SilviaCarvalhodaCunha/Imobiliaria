import { Repository } from "typeorm";
import {
  TCategoryRequest,
  TCategory,
} from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categorySchema } from "../../schemas/categories.schemas";

const createCategoryServices = async (
  categoryData: TCategoryRequest
): Promise<TCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const returnCategory: TCategory = categorySchema.parse(category);

  return returnCategory;
};

export default createCategoryServices;
