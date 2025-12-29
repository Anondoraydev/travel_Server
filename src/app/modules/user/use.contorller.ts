/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import AppError from "../../errorHelpers/AppError";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // throw new Error("Something went wrong");
    // throw new AppError(httpStatus.BAD_REQUEST, "Facking error");

    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      message: "User created successfully",
      data: user,
    });
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

export const UserController = {
  createUser,
};
