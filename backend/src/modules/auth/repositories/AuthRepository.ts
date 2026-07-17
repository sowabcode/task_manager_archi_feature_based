import { ApiError } from "../../../core/errors/ApiError";
import { UserModel, User } from "../models/UserModel";
import { CreateUserData, RegisterDto } from "../types/auth.types";

export class AuthRepository {
  // constructor(private readonly authRepository: AuthRepository) {}

  async findUserById(id: string) {
    return UserModel.findById(id);
  }

  async findUserByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async findUserByEmailWithPassword(email: string) {
    return UserModel.findOne({
      email,
    }).select("+password");
  }

  async createUser(user: RegisterDto) {
    return UserModel.create(user);
  }

  async updateUser(id: string, data: Partial<User>) {
    return UserModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }
}
