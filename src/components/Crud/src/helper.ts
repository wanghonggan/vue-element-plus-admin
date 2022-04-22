import { reactive } from 'vue'
import { eachTree, treeMap, filter } from '@/utils/tree'
import { findIndex } from '@/utils'
import { useDictStoreWithOut } from '@/store/modules/dict'
import { useI18n } from '@/hooks/web/useI18n'
import type { AxiosPromise } from 'axios'

const dictStore = useDictStoreWithOut()

const { t } = useI18n()

interface AllSchemas {
  searchSchema: FormSchema[]
  tableColumns: TableColumn[]
}

// 过滤所有结构
export const useFilterCrudSchema = (crudSchema: CrudSchema[]): AllSchemas => {
  // 所有结构数据
  const allSchemas = reactive<AllSchemas>({
    searchSchema: [],
    tableColumns: []
  })

  const searchSchema = filterSearchSchema(crudSchema, allSchemas)
  allSchemas.searchSchema = searchSchema || []

  const tableColumns = filterTableSchema(crudSchema)
  allSchemas.tableColumns = tableColumns || []

  return allSchemas
}

// 过滤 Search 结构
const filterSearchSchema = (crudSchema: CrudSchema[], allSchemas: AllSchemas): FormSchema[] => {
  const searchSchema: FormSchema[] = []

  // 获取字典列表队列
  const searchRequestTask: Array<() => Promise<void>> = []

  eachTree(crudSchema, (schemaItem: CrudSchema) => {
    // 判断是否显示
    if (schemaItem?.search?.show) {
      const searchSchemaItem = {
        // 默认为 input
        component: schemaItem.search.component || 'Input',
        componentProps: {},
        ...schemaItem.search,
        field: schemaItem.field,
        label: schemaItem.label
      }

      if (searchSchemaItem.dictName) {
        // 如果有 dictName 则证明是从字典中获取数据
        const dictArr = dictStore.getDictObj[searchSchemaItem.dictName]
        searchSchemaItem.componentProps!.options = filterOptions(dictArr)
      } else if (searchSchemaItem.api) {
        searchRequestTask.push(async () => {
          const res = await (searchSchemaItem.api as () => AxiosPromise)()
          if (res) {
            const index = findIndex(allSchemas.searchSchema, (v: FormSchema) => {
              return v.field === searchSchemaItem.field
            })
            if (index !== -1) {
              allSchemas.searchSchema[index]!.componentProps!.options = filterOptions(
                res.data,
                searchSchemaItem.componentProps.optionsAlias?.labelField
              )
            }
          }
        })
      }

      // 删除不必要的字段
      delete searchSchemaItem.show
      delete searchSchemaItem.dictName

      searchSchema.push(searchSchemaItem)
    }
  })

  for (const task of searchRequestTask) {
    task()
  }

  return searchSchema
}

// 过滤 table 结构
const filterTableSchema = (crudSchema: CrudSchema[]): TableColumn[] => {
  const tableColumns = treeMap<CrudSchema>(crudSchema, {
    conversion: (schema: CrudSchema) => {
      if (schema?.table?.show !== false) {
        return {
          ...schema.table,
          field: schema.field,
          label: schema.label
        }
      }
    }
  })

  // 第一次过滤会有 undefined 所以需要二次过滤
  return filter<TableColumn>(tableColumns as TableColumn[], (data) => {
    if (data.children === void 0) {
      delete data.children
    }
    return !!data.field
  })
}

// 给options添加国际化
const filterOptions = (options: Recordable, labelField?: string) => {
  return options.map((v: Recordable) => {
    if (labelField) {
      v['labelField'] = t(v.labelField)
    } else {
      v['label'] = t(v.label)
    }
    return v
  })
}
