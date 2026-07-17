import { ApiError } from "../../../core/errors/ApiError";
import { JwtService } from "../../../core/security/JwtService";
import { PasswordService } from "../../../core/security/PasswordService";
import { AuthRepository } from "../repositories/AuthRepository";
import { LoginDto, RegisterDto } from "../types/auth.types";

export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const existingUser = await this.authRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new ApiError(409, "Email already exists");
    }

    const hashedPassword = await this.passwordService.hash(data.password);

    const user = await this.authRepository.createUser({
      ...data,
      password: hashedPassword,
    });

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }

  async login(data: LoginDto) {
    const user = await this.authRepository.findUserByEmailWithPassword(
      data.email,
    );

    if (!user) {
      throw new ApiError(401, "Invalid email or password");
    }

    const isValidPassword = await this.passwordService.compare(
      data.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new ApiError(401, "Invalid email or password");
    }

    const accessToken = this.jwtService.generateAccessToken(
      user._id.toString(),
    );

    const refreshToken = this.jwtService.generateRefreshToken(
      user._id.toString(),
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  }

  async getCurrentUser(userId: string) {
    const user = await this.authRepository.findUserById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }
}
