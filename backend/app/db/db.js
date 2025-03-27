import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  host: 'localhost',
  port: '5432',
  database: 'mydb',
  user: 'fydhfzh',
  password: 'fydhfzh',
});

export default pool;
