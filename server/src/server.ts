import express, { type Request, type Response } from 'express';
import db from './model/index';
import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const port = process.env.PORT || 3000;
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