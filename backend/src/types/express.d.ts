import { JwtPayload } from "../core/security/JwtService";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export {};
