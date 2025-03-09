import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Order, OrderId } from './order';
import type { Product, ProductId } from './product';

export interface OrderItemAttributes {
  id: number;
  orderId: number;
  productId: number;
  unitPrice: number;
  quantity: number;
}

export type OrderItemPk = "id";
export type OrderItemId = OrderItem[OrderItemPk];
export type OrderItemOptionalAttributes = "id" | "unitPrice" | "quantity";
export type OrderItemCreationAttributes = Optional<OrderItemAttributes, OrderItemOptionalAttributes>;

export class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
  id!: number;
  orderId!: number;
  productId!: number;
  unitPrice!: number;
  quantity!: number;

  // OrderItem belongsTo Order via orderId
  order!: Order;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<Order>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<Order, OrderId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<Order>;
  // OrderItem belongsTo Product via productId
  product!: Product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof OrderItem {
    return OrderItem.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'Id'
      },
      field: 'OrderId'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'Id'
      },
      field: 'ProductId'
    },
    unitPrice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00,
      field: 'UnitPrice'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'Quantity'
    }
  }, {
    sequelize,
    tableName: 'order_item',
    timestamps: false
  });
  }
}
