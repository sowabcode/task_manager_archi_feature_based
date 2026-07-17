import { TaskController } from "./controllers/TaskController";
import { TaskRepository } from "./repositories/TaskRepository";
import { TaskService } from "./services/TaskService";

const taskRepository = new TaskRepository();

const taskService = new TaskService(taskRepository);

export const taskController = new TaskController(taskService);
