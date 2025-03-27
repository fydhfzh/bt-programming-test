import * as uuid from 'uuid';
import pool from '../db/db.js';

const getTaskById = async (id) => {
  return await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
};

const getAllTasks = () => {
  return pool.query('SELECT * FROM tasks');
};

const saveTask = async (description) => {
  let id = uuid.v4();
  return await pool.query('INSERT INTO tasks VALUES($1,$2)', [id, description]);
};

export { getTaskById, getAllTasks, saveTask };
