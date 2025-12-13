import { Sequelize } from 'sequelize';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize( 
  process.env.DB_NAME as string, 
  process.env.DB_USER as string, 
  process.env.DB_PASSWORD as string, 
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
        ca : fs.readFileSync(process.env.DB_SSL_CA_PATH as string).toString(),
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
  logging: false,
  }
);


export default sequelize;