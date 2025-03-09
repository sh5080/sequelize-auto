import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OtherTag, OtherTagId } from './other_tag';
import type { Product, ProductId } from './product';
import type { ProductTag, ProductTagId } from './product_tag';

export interface TagAttributes {
  id: number;
  name: string;
}

export type TagPk = "id";
export type TagId = Tag[TagPk];
export type TagOptionalAttributes = "id";
export type TagCreationAttributes = Optional<TagAttributes, TagOptionalAttributes>;

export class Tag extends Model<TagAttributes, TagCreationAttributes> implements TagAttributes {
  id!: number;
  name!: string;

  // Tag hasMany OtherTag via tagId
  otherTags!: OtherTag[];
  getOtherTags!: Sequelize.HasManyGetAssociationsMixin<OtherTag>;
  setOtherTags!: Sequelize.HasManySetAssociationsMixin<OtherTag, OtherTagId>;
  addOtherTag!: Sequelize.HasManyAddAssociationMixin<OtherTag, OtherTagId>;
  addOtherTags!: Sequelize.HasManyAddAssociationsMixin<OtherTag, OtherTagId>;
  createOtherTag!: Sequelize.HasManyCreateAssociationMixin<OtherTag>;
  removeOtherTag!: Sequelize.HasManyRemoveAssociationMixin<OtherTag, OtherTagId>;
  removeOtherTags!: Sequelize.HasManyRemoveAssociationsMixin<OtherTag, OtherTagId>;
  hasOtherTag!: Sequelize.HasManyHasAssociationMixin<OtherTag, OtherTagId>;
  hasOtherTags!: Sequelize.HasManyHasAssociationsMixin<OtherTag, OtherTagId>;
  countOtherTags!: Sequelize.HasManyCountAssociationsMixin;
  // Tag belongsToMany Product via tagId and productId
  productIdProducts!: Product[];
  getProductIdProducts!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductIdProducts!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductIdProduct!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductIdProducts!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductIdProduct!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductIdProduct!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductIdProducts!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductIdProduct!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductIdProducts!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductIdProducts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Tag belongsToMany Product via tagId and productId
  productIdProductProductTags!: Product[];
  getProductIdProductProductTags!: Sequelize.BelongsToManyGetAssociationsMixin<Product>;
  setProductIdProductProductTags!: Sequelize.BelongsToManySetAssociationsMixin<Product, ProductId>;
  addProductIdProductProductTag!: Sequelize.BelongsToManyAddAssociationMixin<Product, ProductId>;
  addProductIdProductProductTags!: Sequelize.BelongsToManyAddAssociationsMixin<Product, ProductId>;
  createProductIdProductProductTag!: Sequelize.BelongsToManyCreateAssociationMixin<Product>;
  removeProductIdProductProductTag!: Sequelize.BelongsToManyRemoveAssociationMixin<Product, ProductId>;
  removeProductIdProductProductTags!: Sequelize.BelongsToManyRemoveAssociationsMixin<Product, ProductId>;
  hasProductIdProductProductTag!: Sequelize.BelongsToManyHasAssociationMixin<Product, ProductId>;
  hasProductIdProductProductTags!: Sequelize.BelongsToManyHasAssociationsMixin<Product, ProductId>;
  countProductIdProductProductTags!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Tag hasMany ProductTag via tagId
  productTags!: ProductTag[];
  getProductTags!: Sequelize.HasManyGetAssociationsMixin<ProductTag>;
  setProductTags!: Sequelize.HasManySetAssociationsMixin<ProductTag, ProductTagId>;
  addProductTag!: Sequelize.HasManyAddAssociationMixin<ProductTag, ProductTagId>;
  addProductTags!: Sequelize.HasManyAddAssociationsMixin<ProductTag, ProductTagId>;
  createProductTag!: Sequelize.HasManyCreateAssociationMixin<ProductTag>;
  removeProductTag!: Sequelize.HasManyRemoveAssociationMixin<ProductTag, ProductTagId>;
  removeProductTags!: Sequelize.HasManyRemoveAssociationsMixin<ProductTag, ProductTagId>;
  hasProductTag!: Sequelize.HasManyHasAssociationMixin<ProductTag, ProductTagId>;
  hasProductTags!: Sequelize.HasManyHasAssociationsMixin<ProductTag, ProductTagId>;
  countProductTags!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Tag {
    return Tag.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'tag',
    timestamps: false
  });
  }
}
