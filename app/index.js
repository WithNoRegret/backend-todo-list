import express from 'express';
import bodyParser from 'body-parser';

import taskRouter from './routes/tasks.js';

const app = express();
// Middlewares
app.use(bodyParser.json());
app.use('/api/tasks', taskRouter);

export default app;
