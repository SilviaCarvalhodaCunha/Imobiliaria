import { Repository } from "typeorm";
import Tlogin from "../../interfaces/login.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createSessionServices = async (loginData: Tlogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email: loginData.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user.id),
    }
  );

  return token;
};

export default createSessionServices;
