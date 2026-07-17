import { Request, Response } from "express";
import { asyncHandler } from "../../../core/utils/asyncHandler";
import { AuthService } from "../services/AuthService";
import { ResponseBuilder } from "../../../core/responses/ResponseBuilder";

import { AuthRequest } from "../../../core/middlewares/authenticate";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  register = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.authService.register(req.body);

    return ResponseBuilder.success(
      res,
      user,
      "User registered successfully",
      201,
    );
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.authService.login(req.body);

    return ResponseBuilder.success(res, result, "Login successful");
  });

  me = asyncHandler(async (req: AuthRequest, res: Response) => {
    const user = await this.authService.getCurrentUser(req.userId);

    return ResponseBuilder.success(res, user);
  });
}
