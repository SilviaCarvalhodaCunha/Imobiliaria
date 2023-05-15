import { Repository } from "typeorm";
import { TShedulesRequest } from "../../interfaces/schedules.interfaces"
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const scheduleVisitPropertyServices = async (scheduleData: TShedulesRequest, userId: number): Promise<object> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({id:userId})

    const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);


    const realEstate = await realEstateRepository.findOneBy({id:scheduleData.realEstateId})

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
      }

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule = scheduleRepository.create({
        ...scheduleData,
        user: user!,
        realEstate: realEstate
    })

    await scheduleRepository.save(schedule)
    

    return{ message: 'Schedule created' }

}

export default scheduleVisitPropertyServices