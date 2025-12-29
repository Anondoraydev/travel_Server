/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "./../config/env";

export const globalleErrorHandler =
  () => (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    const message = `Something went wrong ${err.message} `;
    res.status(statusCode).json({
      success: false,
      message,
      err,
      stack: err.envVars === "production" ? err.stack : null,
    });
  };
