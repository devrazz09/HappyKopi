import sequelize from "../config/db.config";
import User from "./user.model";
import ProductType from "./productTypes.model";
import MilkTea from "./milktea.model";
import IcedCoffee from "./icedCoffee.model";
import Frapuccino from "./frapuccino.model";
import FruitTea from "./fruitTea.model";
const db = { sequelize, User, ProductType, MilkTea, IcedCoffee, Frapuccino, FruitTea };

export default db;