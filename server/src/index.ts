import express, { type Request, type Response } from 'express';
import sequelize from './config/db.config.ts';
import dotenv from 'dotenv';
import User from './model/user.model.ts';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Test route to check database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
   
    await sequelize.sync({alter: true});
    console.log("tables synchronized");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});