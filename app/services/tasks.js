import { Task } from '../database/index.js';

const getTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error('Can\'t get tasks', error);
  }
};

const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    throw new Error('Can\'t get task', id, error);
  }
};

const createTask = async (taskData) => {
  try {
    const task = new Task(taskData);
    await task.save();
    return task;
  } catch (error) {
    throw new Error('Can\'t save new task', error);
  }
}

const updateTaskById = async (id, taskData) => {
  try {
    const task = await Task.findByIdAndUpdate(id, taskData, { new: "true"});
    return task;
  } catch (error) {
    throw new Error('Can\'t update task', id, error);
  }
}

const deleteTaskById = async (id) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    return task;
  } catch (error) {
    throw new Error('Can\'t delete task', id, error);
  }
}

export { 
  getTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
