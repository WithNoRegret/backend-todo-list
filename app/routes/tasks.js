import { Router } from 'express';
import {
  getTasksController,
  getTaskByIdController,
  createTaskController,
  deleteTaskByIdController,
  updateTaskByIdController
} from '../controllers/tasks/index.js';

const taskRouter = Router();

taskRouter.get('/', getTasksController);

taskRouter.get('/:id', getTaskByIdController);

taskRouter.post('/', createTaskController);

taskRouter.put('/:id', updateTaskByIdController);

taskRouter.delete('/:id', deleteTaskByIdController);

export default taskRouter;
