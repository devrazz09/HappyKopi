import express, { type Request, type Response } from 'express';
import db from './model/index.ts';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Test route to check database connection
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await db.sequelize.sync({alter: true});
    console.log("tables synchronized");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});