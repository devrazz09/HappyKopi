import sequelize from "../config/db.config";
import { Model, DataTypes } from "sequelize";
import type { 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional 
} from "sequelize";

class ProductType extends Model<InferAttributes<ProductType>, InferCreationAttributes<ProductType>>{
  declare id: CreationOptional<number>;
  declare typeName: string;
}

ProductType.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },
    typeName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    tableName: "productTypes"
  }
)

export default ProductType;