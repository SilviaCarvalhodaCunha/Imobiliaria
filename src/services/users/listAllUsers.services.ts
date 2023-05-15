import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { usersResponseSchema } from "../../schemas/users.schemas";

const listAllUsersServices = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers = await userRepository.find();

  const users = usersResponseSchema.parse(findUsers);

  return users;
};

export default listAllUsersServices;
