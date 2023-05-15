import { Repository } from "typeorm";
import { TCategories } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesResponseSchema } from "../../schemas/categories.schemas";

const listAllCategoriesServices = async (): Promise<TCategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategories = await categoryRepository.find();

  const categories = categoriesResponseSchema.parse(findCategories);

  return categories;
};

export default listAllCategoriesServices;
