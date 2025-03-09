import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './product';
import type { Tag, TagId } from './tag';

export interface OtherTagAttributes {
  productId: number;
  tagId: number;
}

export type OtherTagPk = "productId" | "tagId";
export type OtherTagId = OtherTag[OtherTagPk];
export type OtherTagCreationAttributes = OtherTagAttributes;

export class OtherTag extends Model<OtherTagAttributes, OtherTagCreationAttributes> implements OtherTagAttributes {
  productId!: number;
  tagId!: number;

  // OtherTag belongsTo Product via productId
  product!: Product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // OtherTag belongsTo Tag via tagId
  tag!: Tag;
  getTag!: Sequelize.BelongsToGetAssociationMixin<Tag>;
  setTag!: Sequelize.BelongsToSetAssociationMixin<Tag, TagId>;
  createTag!: Sequelize.BelongsToCreateAssociationMixin<Tag>;

  static initModel(sequelize: Sequelize.Sequelize): typeof OtherTag {
    return OtherTag.init({
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
    tableName: 'other_tag',
    timestamps: false
  });
  }
}
