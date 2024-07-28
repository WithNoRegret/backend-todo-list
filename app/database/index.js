import mongoose from 'mongoose';
import Task from './models/task.js';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => {
  console.log('connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB', error.message);
});

export { Task };
