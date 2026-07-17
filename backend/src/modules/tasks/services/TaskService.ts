import { ApiError } from "../../../core/errors/ApiError";
import { TaskRepository } from "../repositories/TaskRepository";
import { CreateTaskDto, UpdateTaskDto } from "../types/task.types";

export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(owner: string, data: CreateTaskDto) {
    return this.taskRepository.createTask(owner, data);
  }

  async getTasks(owner: string) {
    return this.taskRepository.findTasks(owner);
  }

  async updateTask(id: string, owner: string, data: UpdateTaskDto) {
    const task = await this.taskRepository.updateTask(id, owner, data);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    return task;
  }

  async deleteTask(id: string, owner: string) {
    const task = await this.taskRepository.deleteTask(id, owner);

    if (!task) {
      throw new ApiError(404, "Task not found");
    }

    return;
  }
}
