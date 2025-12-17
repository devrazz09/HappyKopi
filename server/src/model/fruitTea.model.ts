 import sequelize from "../config/db.config.ts";
 import { Model, DataTypes } from "sequelize";
 import type { 
   InferAttributes, 
   InferCreationAttributes, 
   CreationOptional 
 } from "sequelize";
 
 class FruitTea extends Model<InferAttributes<FruitTea>, InferCreationAttributes<FruitTea>>{
   declare id: CreationOptional<number>;
   declare name: string;
   declare price: number;
 }
 
 FruitTea.init(
   {
     id: {
       type: DataTypes.INTEGER.UNSIGNED,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
     },
     name: {
       type: DataTypes.STRING(100),
       allowNull: false,
       unique: true
     },
     price: {
       type: DataTypes.FLOAT.UNSIGNED,
       allowNull: false
     }
   },
   {
     sequelize,
     tableName: "FruitTeas"
   }
 )
 
 export default FruitTea;