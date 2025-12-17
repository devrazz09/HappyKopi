import sequelize from "../config/db.config.ts";
import User from "./user.model.ts";
import ProductType from "./productTypes.model.ts";
import MilkTea from "./milktea.model.ts";
import IcedCoffee from "./icedCoffee.model.ts";
import Frapuccino from "./frapuccino.model.ts";
import FruitTea from "./fruitTea.model.ts";
const db = { sequelize, User, ProductType, MilkTea, IcedCoffee, Frapuccino, FruitTea };

export default db;