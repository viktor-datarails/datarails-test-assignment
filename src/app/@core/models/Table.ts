export interface ITable {
  id: number,
  name: string,
  userEmail: string,
  fields: ITableField[],
  lastUpdateTime?: number,
}

export interface ITableField {
  name: string,
  type: TableFieldType,
}

export enum TableFieldType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  BOOLEAN = 'boolean',
}
