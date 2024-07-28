import { createTask } from '../../services/tasks.js';

const createTaskController = async (req, res) => {
  try {
    const task = await createTask(req.body);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('cant create user');
  }
}

export default createTaskController;
