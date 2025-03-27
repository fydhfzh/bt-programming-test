import { Router } from 'express';
import * as taskRepository from '../repository/task.js';

const taskController = Router();

taskController.post('/', (req, res) => {
  try {
    let description = req.body.description;
    let result = taskRepository.saveTask(description);
    result.then((result) => {
      if (result.rowCount > 0) {
        res.status(201).json({
          status: 201,
          message: 'task added successfully',
        });
        return;
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
});

taskController.get('/', (req, res) => {
  try {
    let result = taskRepository.getAllTasks();
    result.then((result) => {
      if (result.rowCount > 0) {
        res.status(201).json({
          status: 201,
          message: 'tasks retrieved successfully',
          data: result.rows,
        });
        return;
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
});

taskController.get('/:id', (req, res) => {
  try {
    let id = req.params.id;
    let result = taskRepository.getTaskById(id);
    result.then((result) => {
      if (result.rowCount > 0) {
        res.status(201).json({
          status: 201,
          message: 'task retrieved successfully',
          data: result.rows[0],
        });
        return;
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
});

export default taskController;
