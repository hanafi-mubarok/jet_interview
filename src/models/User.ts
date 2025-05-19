/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-object-type */
// models/User.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';

// 1. Tipe atribut
interface UserAttributes {
  id: number;
  name: string;
  email: string;
}

// 2. Tipe saat create (id optional karena auto increment)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// 3. Definisikan model dengan tipe
class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;

  // timestamps bisa ditambahkan jika diperlukan
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
