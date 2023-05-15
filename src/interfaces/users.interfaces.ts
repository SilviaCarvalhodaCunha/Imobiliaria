import { z } from "zod";
import {
  userRequestSchema,
  userRequestUpdate,
  userResponseSchema,
  userSchema,
  usersResponseSchema,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userRequestSchema>;

type TUserResponse = z.infer<typeof userResponseSchema>;

type TUsersResponse = z.infer<typeof usersResponseSchema>;

type TUserRequestUpdate = z.infer<typeof userRequestUpdate>;

type TUserUpdateRequest = DeepPartial<TUserRequest>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUsersResponse,
  TUserUpdateRequest,
  TUserRequestUpdate,
};
