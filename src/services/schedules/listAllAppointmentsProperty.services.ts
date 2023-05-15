import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TPropertyResponse } from "../../interfaces/realEstate.interfaces";
import { AppError } from "../../error";

const listAllAppointmentsPropertyServices = async (realEstateId: number) => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const appointmentsFind = await realEstateRepository.findOne({
    where: { id: realEstateId },
    relations: { address: true, category: true, 
        schedule: { user: true }},
  });

  if (!appointmentsFind) {
    throw new AppError("RealEstate not found", 404);
  }

  return appointmentsFind
};

export default listAllAppointmentsPropertyServices;
