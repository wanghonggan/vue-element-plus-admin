import { Crud, CrudExpose } from '@/components/Crud'
import { ref, nextTick, unref } from 'vue'
import { TableObject } from '@/hooks/web/useTable'
// import { Table, TableExpose } from '@/components/Table'
// import type { ElTable } from 'element-plus'

// interface useTableProps<T> {
//   elTableRef: ComponentRef<typeof ElTable>
//   tableObject: TableObject<T, AxiosConfig>
//   methods: TableMethods
// }

// K 代表列表数据
export const useCrud = <T>() => {
  // Crud 实例
  const crudRef = ref<typeof Crud & CrudExpose>()

  // 注册 crud
  const register = (ref: typeof Crud & CrudExpose) => {
    // crud 实例
    crudRef.value = ref
  }

  const methods = {
    // 获取 crud 实例
    getCrudRef: async (): Promise<typeof Crud & CrudExpose> => {
      await nextTick()
      return unref(crudRef) as typeof Crud & CrudExpose
    },
    // 获取 tableObject
    getTableObject: async (): Promise<TableObject<T, AxiosConfig>> => {
      const crudRef = await methods.getCrudRef()
      return crudRef.tableObject
    }
  }

  return {
    register,
    methods
  }
}
