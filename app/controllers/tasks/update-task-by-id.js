import { updateTaskById } from '../../services/tasks.js';

const updateTaskByIdController = async (req, res) => {
  try {
    const task = updateTaskById(req.params.id, req.body);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

export default updateTaskByIdController;
