import { getTasks } from '../../services/tasks.js';

const getTasksController = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (err) {
    console.log('tasks can\'t be fetched');
    res.status(500).send('Server error');
  }
}

export default getTasksController;
