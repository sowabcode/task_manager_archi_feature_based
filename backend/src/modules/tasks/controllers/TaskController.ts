import { Request, Response } from "express";

import { asyncHandler } from "../../../core/utils/asyncHandler";
import { ResponseBuilder } from "../../../core/responses/ResponseBuilder";

import { TaskService } from "../services/TaskService";

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  getTasks = asyncHandler(async (req: Request, res: Response) => {
    const tasks = await this.taskService.getTasks(req.userId);

    return ResponseBuilder.success(res, tasks);
  });

  createTask = asyncHandler(async (req: Request, res: Response) => {
    const task = await this.taskService.createTask(req.userId, req.body);

    return ResponseBuilder.success(res, task, "Task created successfully", 201);
  });

  updateTask = asyncHandler(async (req: Request, res: Response) => {
    const task = await this.taskService.updateTask(
      req.params.id,
      req.userId,
      req.body,
    );

    return ResponseBuilder.success(res, task, "Task updated successfully");
  });

  deleteTask = asyncHandler(async (req: Request, res: Response) => {
    await this.taskService.deleteTask(req.params.id, req.userId);

    return ResponseBuilder.success(res, null, "Task deleted successfully");
  });
}
