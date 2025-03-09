import type { Sequelize } from "sequelize";
import { Customer as _Customer } from "./customer";
import type { CustomerAttributes, CustomerCreationAttributes } from "./customer";
import { Order as _Order } from "./order";
import type { OrderAttributes, OrderCreationAttributes } from "./order";
import { OrderItem as _OrderItem } from "./order_item";
import type { OrderItemAttributes, OrderItemCreationAttributes } from "./order_item";
import { OtherTag as _OtherTag } from "./other_tag";
import type { OtherTagAttributes, OtherTagCreationAttributes } from "./other_tag";
import { Product as _Product } from "./product";
import type { ProductAttributes, ProductCreationAttributes } from "./product";
import { ProductTag as _ProductTag } from "./product_tag";
import type { ProductTagAttributes, ProductTagCreationAttributes } from "./product_tag";
import { RelatedProduct as _RelatedProduct } from "./related_product";
import type { RelatedProductAttributes, RelatedProductCreationAttributes } from "./related_product";
import { Supplier as _Supplier } from "./supplier";
import type { SupplierAttributes, SupplierCreationAttributes } from "./supplier";
import { Tag as _Tag } from "./tag";
import type { TagAttributes, TagCreationAttributes } from "./tag";

export {
  _Customer as Customer,
  _Order as Order,
  _OrderItem as OrderItem,
  _OtherTag as OtherTag,
  _Product as Product,
  _ProductTag as ProductTag,
  _RelatedProduct as RelatedProduct,
  _Supplier as Supplier,
  _Tag as Tag,
};

export type {
  CustomerAttributes,
  CustomerCreationAttributes,
  OrderAttributes,
  OrderCreationAttributes,
  OrderItemAttributes,
  OrderItemCreationAttributes,
  OtherTagAttributes,
  OtherTagCreationAttributes,
  ProductAttributes,
  ProductCreationAttributes,
  ProductTagAttributes,
  ProductTagCreationAttributes,
  RelatedProductAttributes,
  RelatedProductCreationAttributes,
  SupplierAttributes,
  SupplierCreationAttributes,
  TagAttributes,
  TagCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Customer = _Customer.initModel(sequelize);
  const Order = _Order.initModel(sequelize);
  const OrderItem = _OrderItem.initModel(sequelize);
  const OtherTag = _OtherTag.initModel(sequelize);
  const Product = _Product.initModel(sequelize);
  const ProductTag = _ProductTag.initModel(sequelize);
  const RelatedProduct = _RelatedProduct.initModel(sequelize);
  const Supplier = _Supplier.initModel(sequelize);
  const Tag = _Tag.initModel(sequelize);

  Product.belongsToMany(Tag, { as: 'tagIdTags', through: OtherTag, foreignKey: "productId", otherKey: "tagId" });
  Product.belongsToMany(Tag, { as: 'tagIdTagProductTags', through: ProductTag, foreignKey: "productId", otherKey: "tagId" });
  Tag.belongsToMany(Product, { as: 'productIdProducts', through: OtherTag, foreignKey: "tagId", otherKey: "productId" });
  Tag.belongsToMany(Product, { as: 'productIdProductProductTags', through: ProductTag, foreignKey: "tagId", otherKey: "productId" });
  Order.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(Order, { as: "orders", foreignKey: "customerId"});
  OrderItem.belongsTo(Order, { as: "order", foreignKey: "orderId"});
  Order.hasMany(OrderItem, { as: "orderItems", foreignKey: "orderId"});
  OrderItem.belongsTo(Product, { as: "product", foreignKey: "productId"});
  Product.hasMany(OrderItem, { as: "orderItems", foreignKey: "productId"});
  OtherTag.belongsTo(Product, { as: "product", foreignKey: "productId"});
  Product.hasMany(OtherTag, { as: "otherTags", foreignKey: "productId"});
  ProductTag.belongsTo(Product, { as: "product", foreignKey: "productId"});
  Product.hasMany(ProductTag, { as: "productTags", foreignKey: "productId"});
  RelatedProduct.belongsTo(Product, { as: "product", foreignKey: "productId"});
  Product.hasMany(RelatedProduct, { as: "relatedProducts", foreignKey: "productId"});
  RelatedProduct.belongsTo(Product, { as: "relatedProduct", foreignKey: "relatedProductId"});
  Product.hasMany(RelatedProduct, { as: "relatedProductRelatedProducts", foreignKey: "relatedProductId"});
  Product.belongsTo(Supplier, { as: "supplier", foreignKey: "supplierId"});
  Supplier.hasMany(Product, { as: "products", foreignKey: "supplierId"});
  Product.belongsTo(Supplier, { as: "altSupplier", foreignKey: "altSupplierId"});
  Supplier.hasMany(Product, { as: "altSupplierProducts", foreignKey: "altSupplierId"});
  OtherTag.belongsTo(Tag, { as: "tag", foreignKey: "tagId"});
  Tag.hasMany(OtherTag, { as: "otherTags", foreignKey: "tagId"});
  ProductTag.belongsTo(Tag, { as: "tag", foreignKey: "tagId"});
  Tag.hasMany(ProductTag, { as: "productTags", foreignKey: "tagId"});

  return {
    Customer: Customer,
    Order: Order,
    OrderItem: OrderItem,
    OtherTag: OtherTag,
    Product: Product,
    ProductTag: ProductTag,
    RelatedProduct: RelatedProduct,
    Supplier: Supplier,
    Tag: Tag,
  };
}
