import _ from 'lodash';
import { addTicks, DialectOptions, FKRow } from './dialect-options';

export const oracleOptions: DialectOptions = {
  name: 'oracle',
  hasSchema: true,

  /**
   * Generates an SQL query that returns all foreign keys of a table.
   *
   * @param  {String} tableName  The name of the table.
   * @param  {String} schemaName The name of the schema.
   * @return {String}            The generated sql query.
   */
  getForeignKeysQuery: (tableName: string, schemaName: string) => {
    const table = tableName ? tableName.toUpperCase() : '';
    const schema = schemaName ? schemaName.toUpperCase() : '';

    return `
      SELECT a.constraint_name,
             a.owner as source_schema,
             a.table_name as source_table,
             a.column_name as source_column,
             c.owner as target_schema,
             c.table_name as target_table,
             c.column_name as target_column,
             b.delete_rule as on_delete,
             b.delete_rule as on_update
      FROM all_cons_columns a
      JOIN all_constraints b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
      JOIN all_cons_columns c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
      WHERE b.constraint_type = 'R'
      AND a.table_name = '${table}'
      ${schema ? `AND a.owner = '${schema}'` : ''}`;
  },

  /**
   * Generates an SQL query that tells if this table has triggers or not.
   *
   * @param  {String} tableName  The name of the table.
   * @param  {String} schemaName The name of the schema.
   * @return {String}            The generated sql query.
   */
  countTriggerQuery: (tableName: string, schemaName: string) => {
    return `SELECT COUNT(*) as trigger_count
            FROM all_triggers
            WHERE table_name = ${addTicks(tableName)}
            AND table_owner = ${addTicks(schemaName)}`;
  },

  /**
   * Determines if record entry from the getForeignKeysQuery
   * results is an actual foreign key
   *
   * @param {Object} record The row entry from getForeignKeysQuery
   * @return {Bool}
   */
  isForeignKey: (record: FKRow) => {
    return _.isObject(record) && record.constraint_type === 'R';
  },

  /**
   * Determines if record entry from the getForeignKeysQuery
   * results is a unique key
   *
   * @param {Object} record The row entry from getForeignKeysQuery
   * @return {Bool}
   */
  isUnique: (record: FKRow) => {
    return _.isObject(record) && record.constraint_type === 'U';
  },

  /**
   * Determines if record entry from the getForeignKeysQuery
   * results is an actual primary key
   *
   * @param {Object} record The row entry from getForeignKeysQuery
   * @return {Bool}
   */
  isPrimaryKey: (record: FKRow) => {
    return _.isObject(record) && record.constraint_type === 'P';
  },

  /**
   * Determines if record entry is an actual serial/auto increment key
   * Oracle uses sequences instead of auto_increment
   *
   * @param {Object} record The row entry from getForeignKeysQuery
   * @return {Bool}
   */
  isSerialKey: (record: FKRow) => {
    return false;
  },

  showViewsQuery: (schemaName?: string) => {
    return `SELECT view_name as table_name
            FROM all_views
            WHERE owner = ${addTicks(schemaName)}`;
  },
};
