import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OrderItem, OrderItemId } from './order_item';
import type { OtherTag, OtherTagId } from './other_tag';
import type { ProductTag, ProductTagId } from './product_tag';
import type { RelatedProduct, RelatedProductId } from './related_product';
import type { Supplier, SupplierId } from './supplier';
import type { Tag, TagId } from './tag';

export interface ProductAttributes {
  id: number;
  productName: string;
  supplierId: number;
  altSupplierId?: number;
  unitPrice?: number;
  package?: string;
  isDiscontinued: boolean;
}

export type ProductPk = "id";
export type ProductId = Product[ProductPk];
export type ProductOptionalAttributes = "id" | "altSupplierId" | "unitPrice" | "package" | "isDiscontinued";
export type ProductCreationAttributes = Optional<ProductAttributes, ProductOptionalAttributes>;

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  id!: number;
  productName!: string;
  supplierId!: number;
  altSupplierId?: number;
  unitPrice?: number;
  package?: string;
  isDiscontinued!: boolean;

  // Product hasMany OrderItem via productId
  orderItems!: OrderItem[];
  getOrderItems!: Sequelize.HasManyGetAssociationsMixin<OrderItem>;
  setOrderItems!: Sequelize.HasManySetAssociationsMixin<OrderItem, OrderItemId>;
  addOrderItem!: Sequelize.HasManyAddAssociationMixin<OrderItem, OrderItemId>;
  addOrderItems!: Sequelize.HasManyAddAssociationsMixin<OrderItem, OrderItemId>;
  createOrderItem!: Sequelize.HasManyCreateAssociationMixin<OrderItem>;
  removeOrderItem!: Sequelize.HasManyRemoveAssociationMixin<OrderItem, OrderItemId>;
  removeOrderItems!: Sequelize.HasManyRemoveAssociationsMixin<OrderItem, OrderItemId>;
  hasOrderItem!: Sequelize.HasManyHasAssociationMixin<OrderItem, OrderItemId>;
  hasOrderItems!: Sequelize.HasManyHasAssociationsMixin<OrderItem, OrderItemId>;
  countOrderItems!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany OtherTag via productId
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
  // Product hasMany ProductTag via productId
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
  // Product hasMany RelatedProduct via productId
  relatedProducts!: RelatedProduct[];
  getRelatedProducts!: Sequelize.HasManyGetAssociationsMixin<RelatedProduct>;
  setRelatedProducts!: Sequelize.HasManySetAssociationsMixin<RelatedProduct, RelatedProductId>;
  addRelatedProduct!: Sequelize.HasManyAddAssociationMixin<RelatedProduct, RelatedProductId>;
  addRelatedProducts!: Sequelize.HasManyAddAssociationsMixin<RelatedProduct, RelatedProductId>;
  createRelatedProduct!: Sequelize.HasManyCreateAssociationMixin<RelatedProduct>;
  removeRelatedProduct!: Sequelize.HasManyRemoveAssociationMixin<RelatedProduct, RelatedProductId>;
  removeRelatedProducts!: Sequelize.HasManyRemoveAssociationsMixin<RelatedProduct, RelatedProductId>;
  hasRelatedProduct!: Sequelize.HasManyHasAssociationMixin<RelatedProduct, RelatedProductId>;
  hasRelatedProducts!: Sequelize.HasManyHasAssociationsMixin<RelatedProduct, RelatedProductId>;
  countRelatedProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Product hasMany RelatedProduct via relatedProductId
  relatedProductRelatedProducts!: RelatedProduct[];
  getRelatedProductRelatedProducts!: Sequelize.HasManyGetAssociationsMixin<RelatedProduct>;
  setRelatedProductRelatedProducts!: Sequelize.HasManySetAssociationsMixin<RelatedProduct, RelatedProductId>;
  addRelatedProductRelatedProduct!: Sequelize.HasManyAddAssociationMixin<RelatedProduct, RelatedProductId>;
  addRelatedProductRelatedProducts!: Sequelize.HasManyAddAssociationsMixin<RelatedProduct, RelatedProductId>;
  createRelatedProductRelatedProduct!: Sequelize.HasManyCreateAssociationMixin<RelatedProduct>;
  removeRelatedProductRelatedProduct!: Sequelize.HasManyRemoveAssociationMixin<RelatedProduct, RelatedProductId>;
  removeRelatedProductRelatedProducts!: Sequelize.HasManyRemoveAssociationsMixin<RelatedProduct, RelatedProductId>;
  hasRelatedProductRelatedProduct!: Sequelize.HasManyHasAssociationMixin<RelatedProduct, RelatedProductId>;
  hasRelatedProductRelatedProducts!: Sequelize.HasManyHasAssociationsMixin<RelatedProduct, RelatedProductId>;
  countRelatedProductRelatedProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Product belongsToMany Tag via productId and tagId
  tagIdTags!: Tag[];
  getTagIdTags!: Sequelize.BelongsToManyGetAssociationsMixin<Tag>;
  setTagIdTags!: Sequelize.BelongsToManySetAssociationsMixin<Tag, TagId>;
  addTagIdTag!: Sequelize.BelongsToManyAddAssociationMixin<Tag, TagId>;
  addTagIdTags!: Sequelize.BelongsToManyAddAssociationsMixin<Tag, TagId>;
  createTagIdTag!: Sequelize.BelongsToManyCreateAssociationMixin<Tag>;
  removeTagIdTag!: Sequelize.BelongsToManyRemoveAssociationMixin<Tag, TagId>;
  removeTagIdTags!: Sequelize.BelongsToManyRemoveAssociationsMixin<Tag, TagId>;
  hasTagIdTag!: Sequelize.BelongsToManyHasAssociationMixin<Tag, TagId>;
  hasTagIdTags!: Sequelize.BelongsToManyHasAssociationsMixin<Tag, TagId>;
  countTagIdTags!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsToMany Tag via productId and tagId
  tagIdTagProductTags!: Tag[];
  getTagIdTagProductTags!: Sequelize.BelongsToManyGetAssociationsMixin<Tag>;
  setTagIdTagProductTags!: Sequelize.BelongsToManySetAssociationsMixin<Tag, TagId>;
  addTagIdTagProductTag!: Sequelize.BelongsToManyAddAssociationMixin<Tag, TagId>;
  addTagIdTagProductTags!: Sequelize.BelongsToManyAddAssociationsMixin<Tag, TagId>;
  createTagIdTagProductTag!: Sequelize.BelongsToManyCreateAssociationMixin<Tag>;
  removeTagIdTagProductTag!: Sequelize.BelongsToManyRemoveAssociationMixin<Tag, TagId>;
  removeTagIdTagProductTags!: Sequelize.BelongsToManyRemoveAssociationsMixin<Tag, TagId>;
  hasTagIdTagProductTag!: Sequelize.BelongsToManyHasAssociationMixin<Tag, TagId>;
  hasTagIdTagProductTags!: Sequelize.BelongsToManyHasAssociationsMixin<Tag, TagId>;
  countTagIdTagProductTags!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Product belongsTo Supplier via supplierId
  supplier!: Supplier;
  getSupplier!: Sequelize.BelongsToGetAssociationMixin<Supplier>;
  setSupplier!: Sequelize.BelongsToSetAssociationMixin<Supplier, SupplierId>;
  createSupplier!: Sequelize.BelongsToCreateAssociationMixin<Supplier>;
  // Product belongsTo Supplier via altSupplierId
  altSupplier!: Supplier;
  getAltSupplier!: Sequelize.BelongsToGetAssociationMixin<Supplier>;
  setAltSupplier!: Sequelize.BelongsToSetAssociationMixin<Supplier, SupplierId>;
  createAltSupplier!: Sequelize.BelongsToCreateAssociationMixin<Supplier>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Product {
    return Product.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'ProductName'
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supplier',
        key: 'Id'
      },
      field: 'SupplierId'
    },
    altSupplierId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'supplier',
        key: 'Id'
      },
      field: 'AltSupplierId'
    },
    unitPrice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true,
      defaultValue: 0.00,
      field: 'UnitPrice'
    },
    package: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Package'
    },
    isDiscontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'IsDiscontinued'
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false
  });
  }
}
