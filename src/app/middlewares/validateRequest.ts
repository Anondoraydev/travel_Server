import { NextFunction, Request, Response } from "express";
import { ZodTypeAny, ZodError } from "zod";

export const validateRequest =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (err) {
      // Wrap ZodError to prevent unhandled error
      next(
        err instanceof ZodError
          ? Object.assign(new Error("Validation failed"), {
              issues: err.issues,
            })
          : err
      );
    }
  };
