 import sequelize from "../config/db.config.ts";
 import { Model, DataTypes } from "sequelize";
 import type { 
   InferAttributes, 
   InferCreationAttributes, 
   CreationOptional 
 } from "sequelize";
 
 class MilkTea extends Model<InferAttributes<MilkTea>, InferCreationAttributes<MilkTea>>{
   declare id: CreationOptional<number>;
   declare name: string;
   declare price: number;
 }
 
 MilkTea.init(
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
     tableName: "MilkTeas"
   }
 )
 
 export default MilkTea;