import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Product, ProductId } from './product';

export interface SupplierAttributes {
  id: number;
  companyName: string;
  contactName?: string;
  contactTitle?: string;
  city?: string;
  country?: string;
  phone?: string;
  fax?: string;
}

export type SupplierPk = "id";
export type SupplierId = Supplier[SupplierPk];
export type SupplierOptionalAttributes = "id" | "contactName" | "contactTitle" | "city" | "country" | "phone" | "fax";
export type SupplierCreationAttributes = Optional<SupplierAttributes, SupplierOptionalAttributes>;

export class Supplier extends Model<SupplierAttributes, SupplierCreationAttributes> implements SupplierAttributes {
  id!: number;
  companyName!: string;
  contactName?: string;
  contactTitle?: string;
  city?: string;
  country?: string;
  phone?: string;
  fax?: string;

  // Supplier hasMany Product via supplierId
  products!: Product[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<Product>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<Product, ProductId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<Product, ProductId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<Product, ProductId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<Product>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<Product, ProductId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<Product, ProductId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<Product, ProductId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<Product, ProductId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Supplier hasMany Product via altSupplierId
  altSupplierProducts!: Product[];
  getAltSupplierProducts!: Sequelize.HasManyGetAssociationsMixin<Product>;
  setAltSupplierProducts!: Sequelize.HasManySetAssociationsMixin<Product, ProductId>;
  addAltSupplierProduct!: Sequelize.HasManyAddAssociationMixin<Product, ProductId>;
  addAltSupplierProducts!: Sequelize.HasManyAddAssociationsMixin<Product, ProductId>;
  createAltSupplierProduct!: Sequelize.HasManyCreateAssociationMixin<Product>;
  removeAltSupplierProduct!: Sequelize.HasManyRemoveAssociationMixin<Product, ProductId>;
  removeAltSupplierProducts!: Sequelize.HasManyRemoveAssociationsMixin<Product, ProductId>;
  hasAltSupplierProduct!: Sequelize.HasManyHasAssociationMixin<Product, ProductId>;
  hasAltSupplierProducts!: Sequelize.HasManyHasAssociationsMixin<Product, ProductId>;
  countAltSupplierProducts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Supplier {
    return Supplier.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    companyName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'CompanyName'
    },
    contactName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'ContactName'
    },
    contactTitle: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'ContactTitle'
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
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Phone'
    },
    fax: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Fax'
    }
  }, {
    sequelize,
    tableName: 'supplier',
    timestamps: false
  });
  }
}
