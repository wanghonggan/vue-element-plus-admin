import Crud from './src/Crud.vue'
import { Table, TableExpose } from '@/components/Table'
import type { TableObject, TableMethods } from '@/hooks/web/useTable'

export interface CrudExpose<K = any, L = any> {
  tableRef: typeof Table & TableExpose
  tableObject: TableObject<K, L>
  tableMethods: TableMethods
}

export { Crud }
