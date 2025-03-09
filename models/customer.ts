import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Order, OrderId } from './order';

export interface CustomerAttributes {
  id: number;
  firstName: string;
  lastName: string;
  city?: string;
  country?: string;
  phone?: string;
}

export type CustomerPk = "id";
export type CustomerId = Customer[CustomerPk];
export type CustomerOptionalAttributes = "id" | "city" | "country" | "phone";
export type CustomerCreationAttributes = Optional<CustomerAttributes, CustomerOptionalAttributes>;

export class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  id!: number;
  firstName!: string;
  lastName!: string;
  city?: string;
  country?: string;
  phone?: string;

  // Customer hasMany Order via customerId
  orders!: Order[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<Order>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<Order, OrderId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<Order, OrderId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<Order, OrderId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<Order>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<Order, OrderId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<Order, OrderId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<Order, OrderId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<Order, OrderId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Customer {
    return Customer.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    firstName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'FirstName'
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'LastName'
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'City'
    },
    country: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'Country'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Phone'
    }
  }, {
    sequelize,
    tableName: 'customer',
    hasTrigger: true,
    timestamps: false
  });
  }
}
