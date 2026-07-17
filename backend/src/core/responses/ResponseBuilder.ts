import { Response } from "express";

export class ResponseBuilder {
  static success(
    res: Response,
    data: unknown,
    message: string = "Success",
    statusCode: number = 200,
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      statusCode,
    });
  }
}
