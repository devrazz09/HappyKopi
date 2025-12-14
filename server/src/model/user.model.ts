
import sequelize from "../config/db.config.ts";
import { Model, DataTypes } from "sequelize";
import type { 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional 
} from "sequelize";


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare profilePicture: string | null;
  declare firstName: string;
  declare lastName: string;
  declare phoneNumber: string
  declare email: string;
  declare userName: string;
  declare password: string
  declare roles: 'client' | 'admin';
}

User.init(
  {
    id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9+\-() ]+$/i
    }
  },
  email : {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  userName:{
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  roles : {
    type: DataTypes.ENUM('client', 'admin'),
    allowNull: false,
    defaultValue: 'client'
  }
  },{
    sequelize,
    tableName: 'users'
  }
)

export default User;