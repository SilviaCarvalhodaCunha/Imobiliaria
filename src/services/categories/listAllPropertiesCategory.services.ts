import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAllPropertiesCategoryServices = async (id: number) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const propertiesCategory = await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });

  return propertiesCategory;
};

export default listAllPropertiesCategoryServices;
