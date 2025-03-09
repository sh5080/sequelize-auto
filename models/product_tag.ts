import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './product';
import type { Tag, TagId } from './tag';

export interface ProductTagAttributes {
  productId: number;
  tagId: number;
}

export type ProductTagPk = "productId" | "tagId";
export type ProductTagId = ProductTag[ProductTagPk];
export type ProductTagCreationAttributes = ProductTagAttributes;

export class ProductTag extends Model<ProductTagAttributes, ProductTagCreationAttributes> implements ProductTagAttributes {
  productId!: number;
  tagId!: number;

  // ProductTag belongsTo Product via productId
  product!: Product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // ProductTag belongsTo Tag via tagId
  tag!: Tag;
  getTag!: Sequelize.BelongsToGetAssociationMixin<Tag>;
  setTag!: Sequelize.BelongsToSetAssociationMixin<Tag, TagId>;
  createTag!: Sequelize.BelongsToCreateAssociationMixin<Tag>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductTag {
    return ProductTag.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'Id'
      },
      field: 'ProductId'
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tag',
        key: 'Id'
      },
      field: 'TagId'
    }
  }, {
    sequelize,
    tableName: 'product_tag',
    timestamps: false
  });
  }
}
