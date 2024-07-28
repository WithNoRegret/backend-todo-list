import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
