import { deleteTaskById } from '../../services/tasks.js';

const deleteTaskByIdController = async (req, res) => {
  try {
     const task = await deleteTaskById(req.params.id);
     res.json(task);
  } catch (error) {
     console.error(error.message);
     res.status(500).send(error);
  }
}
export default deleteTaskByIdController;
