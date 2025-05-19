/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-object-type */
// models/Order.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';

interface OrderAttributes {
  id: number;
  user_id: number;
  total: number;
  status: string;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

// eslint-disable-next-line prettier/prettier
class Order extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes {
  public id!: number;
  public user_id!: number;
  public total!: number;
  public status!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL(10, 2),
    status: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
