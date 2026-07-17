import { TaskModel } from "../models/task.model";
import { CreateTaskDto, UpdateTaskDto } from "../types/task.types";

export class TaskRepository {
  async createTask(owner: string, data: CreateTaskDto) {
    return await TaskModel.create({
      ...data,
      owner,
    });
  }

  async findTasks(owner: string) {
    return await TaskModel.find({ owner }).sort({
      createdAt: -1,
    });
  }

  async findTaskById(id: string, owner: string) {
    return await TaskModel.findOne({
      _id: id,
      owner,
    });
  }

  async updateTask(id: string, owner: string, data: UpdateTaskDto) {
    return await TaskModel.findOneAndUpdate(
      {
        _id: id,
        owner,
      },
      data,
      {
        new: true,
      },
    );
  }

  async deleteTask(id: string, owner: string) {
    return await TaskModel.findOneAndDelete({
      _id: id,
      owner,
    });
  }
}
