import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAllPropertiesServices = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findProperties = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return findProperties;
};

export default listAllPropertiesServices;
