import { Router } from 'express';
import * as taskRepository from '../repository/task.js';
import { generateToken } from '../util/jwt.js';

const authController = Router();

authController.post('/', (req, res) => {
  try {
    let data = req.body;

    let token = generateToken(data);

    res.status(200).json({
      status: 200,
      message: 'user authenticated successfully',
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
});

export default authController;
