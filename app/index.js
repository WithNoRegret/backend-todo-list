import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import taskRouter from './routes/tasks.js';

const app = express();
// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks', taskRouter);

export default app;
