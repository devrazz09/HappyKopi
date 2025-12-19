 import sequelize from "../config/db.config";
 import { Model, DataTypes } from "sequelize";
 import type { 
   InferAttributes, 
   InferCreationAttributes, 
   CreationOptional 
 } from "sequelize";
 
 class Frapuccino extends Model<InferAttributes<Frapuccino>, InferCreationAttributes<Frapuccino>>{
   declare id: CreationOptional<number>;
   declare name: string;
   declare price: number;
 }
 
 Frapuccino.init(
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
     tableName: "Frapuccinos"
   }
 )
 
 export default Frapuccino;