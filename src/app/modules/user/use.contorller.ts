/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { int } from "zod";
import { catchAsync } from "../../utils/catsAsync";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user,
    });
  }
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserServices.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: "All User Retrieved Successfully!!",
      data: users,
    });
  }
);

export const UserController = {
  createUser,
  getAllUsers,
};
