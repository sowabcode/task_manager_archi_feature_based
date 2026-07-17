import { Request, Response, NextFunction } from "express";
import z, { ZodSchema, ZodType } from "zod";
import { ApiError } from "../errors/ApiError";

export const validate =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(
        new ApiError(
          400,
          result.error.issues.map((issue) => issue.message).join(", "),
        ),
      );
    }

    // Très important : on remplace le body par les données transformées
    req.body = result.data;

    next();
  };
