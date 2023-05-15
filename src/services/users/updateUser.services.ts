import { Repository } from "typeorm";
import {
  TUserRequestUpdate,
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/users.schemas";

const updateUserServices = async (
  userData: TUserUpdateRequest,
  id: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: User | null = await userRepository.findOneBy({ id: id });

  const user: User = userRepository.create({
    ...findUsers,
    ...userData,
  });

  await userRepository.save(user);

  const updateUser = userResponseSchema.parse(user);

  return updateUser;
};

export default updateUserServices;
