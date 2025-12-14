import sequelize from "../config/db.config.ts";
import User from "./user.model.ts";

const db = { sequelize, User };

export default db;