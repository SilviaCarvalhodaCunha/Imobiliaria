import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import registerUserServices from "../services/users/registerUser.services";
import listAllUsersServices from "../services/users/listAllUsers.services";
import updateUserServices from "../services/users/updateUser.services";
import deleteUserServices from "../services/users/deleteUser.services";

const registerUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser: TUserResponse = await registerUserServices(userData);
  return res.status(201).json(newUser);
};

const listAllUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listUsers: TUsersResponse = await listAllUsersServices();
  return res.status(200).json(listUsers);
};

const updateUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdateRequest = req.body;
  const id: number = parseInt(req.params.id);
  const updateData: TUserResponse = await updateUserServices(userData, id);
  return res.status(200).json(updateData);
};

const deleteUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  await deleteUserServices(id);

  return res.status(204).send();
};

export {
  registerUserControllers,
  listAllUsersControllers,
  updateUserControllers,
  deleteUserControllers,
};
