import { mssqlOptions } from './mssql';
import { mysqlOptions } from './mysql';
import { postgresOptions } from './postgres';
import { sqliteOptions } from './sqlite';
import { oracleOptions } from './oracle';
import { DialectOptions } from './dialect-options';
import type { Dialect } from 'sequelize';

export const dialects: Partial<{ [name in Dialect]: DialectOptions }> = {
  mssql: mssqlOptions,
  mysql: mysqlOptions,
  mariadb: mysqlOptions,
  postgres: postgresOptions,
  sqlite: sqliteOptions,
  oracle: oracleOptions,
};
