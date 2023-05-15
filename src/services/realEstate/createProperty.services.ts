import { Repository } from "typeorm";
import {
  TPropertyRequest,
  TPropertyResponse,
} from "../../interfaces/realEstate.interfaces";
import { Address, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  propertyResponseSchema
} from "../../schemas/realEstate.schemas";

const createPropertyServices = async (
  propertyData: TPropertyRequest,
  category: any
): Promise<TPropertyResponse> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address: Address = addressRepository.create(propertyData.address);

  await addressRepository.save(address);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = realEstateRepository.create({
    ...propertyData,
    address,
    category: category,
  });

  await realEstateRepository.save(realEstate);

  const newProperty = propertyResponseSchema.parse(realEstate);

  return newProperty;
};

export default createPropertyServices;
