import express, { type Request, type Response } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});