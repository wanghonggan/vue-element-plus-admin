import Crud from './src/Crud.vue'
import { Table, TableExpose } from '@/components/Table'

export interface CrudExpose {
  TableRef: typeof Table & TableExpose
}

export { Crud }
