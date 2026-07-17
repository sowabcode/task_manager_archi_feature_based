import { JwtService } from "../../core/security/JwtService";
import { PasswordService } from "../../core/security/PasswordService";
import { AuthController } from "./controllers/AuthController";
import { AuthRepository } from "./repositories/AuthRepository";
import { AuthService } from "./services/AuthService";

const authRepository = new AuthRepository();

const passwordService = new PasswordService();

const jwtService = new JwtService();

const authService = new AuthService(
  authRepository,
  passwordService,
  jwtService,
);

const authController = new AuthController(authService);

export { authRepository, authService, authController };
