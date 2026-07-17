import { Router } from "express";

import { validate } from "../../../core/middlewares/validate";
import { authenticate } from "../../../core/middlewares/authenticate";

import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";

import { taskController } from "../index";

const router = Router();

router.use(authenticate);

router.get("/", taskController.getTasks);

router.post("/", validate(createTaskSchema), taskController.createTask);

router.patch("/:id", validate(updateTaskSchema), taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

export default router;
