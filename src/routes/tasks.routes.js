import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;
