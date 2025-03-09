import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './product';

export interface RelatedProductAttributes {
  id: number;
  productId: number;
  relatedProductId: number;
}

export type RelatedProductPk = "id";
export type RelatedProductId = RelatedProduct[RelatedProductPk];
export type RelatedProductOptionalAttributes = "id";
export type RelatedProductCreationAttributes = Optional<RelatedProductAttributes, RelatedProductOptionalAttributes>;

export class RelatedProduct extends Model<RelatedProductAttributes, RelatedProductCreationAttributes> implements RelatedProductAttributes {
  id!: number;
  productId!: number;
  relatedProductId!: number;

  // RelatedProduct belongsTo Product via productId
  product!: Product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // RelatedProduct belongsTo Product via relatedProductId
  relatedProduct!: Product;
  getRelatedProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setRelatedProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createRelatedProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RelatedProduct {
    return RelatedProduct.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
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
    relatedProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'Id'
      },
      field: 'RelatedProductId'
    }
  }, {
    sequelize,
    tableName: 'related_product',
    timestamps: false
  });
  }
}
