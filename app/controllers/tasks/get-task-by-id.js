import { getTaskById } from '../../services/tasks.js';

const getTaskByIdController = async (req, res) => {
  try {
    const task = await getTaskById(req.params.id);
    res.json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error);
  }
}

export default getTaskByIdController;
