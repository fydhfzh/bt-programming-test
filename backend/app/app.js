import express from 'express';
import taskController from './controller/task.js';
import authMiddleware from './middleware/auth.js';
import authController from './controller/auth.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', authMiddleware, taskController);
app.use('/auth', authController);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
