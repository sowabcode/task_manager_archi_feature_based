import { Request, Response, NextFunction } from "express";
import { JwtService } from "../security/JwtService";
import { ApiError } from "../errors/ApiError";

const jwtService = new JwtService();

export interface AuthRequest extends Request {
  userId: string;
}

export const authenticate = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next(new ApiError(401, "Unauthorized"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwtService.verifyAccessToken(token);
    req.userId = payload.id;
    next();
  } catch (error) {
    console.error(error);
    next(error);
    // next(new ApiError(401, "Invalid token"));
  }
};
