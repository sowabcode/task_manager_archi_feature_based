import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { JwtPayload as JwtPayloadType } from "jsonwebtoken";

export interface JwtPayload extends JwtPayloadType {
  id: string;
}

export class JwtService {
  generateAccessToken(userId: string) {
    return jwt.sign({ id: userId }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });
  }

  generateRefreshToken(userId: string) {
    return jwt.sign({ id: userId }, env.JWT_REFRESH_SECRET, {
      expiresIn: env.JWT_REFRESH_EXPIRES_IN,
    });
  }

  verifyAccessToken(token: string): JwtPayload {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  }

  verifyRefreshToken(token: string): JwtPayload {
    return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
  }
}
