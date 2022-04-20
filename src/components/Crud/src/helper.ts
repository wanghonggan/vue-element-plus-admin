import { eachTree } from '@/utils/tree'

interface AllSchemas {
  searchSchema: FormSchema[]
}

// 过滤所有结构
export const filterCrudSchema = (crudSchema: CrudSchema[]): AllSchemas => {
  const searchSchema = filterSearchSchema(crudSchema) || []
  return {
    searchSchema
  }
}

// 过滤 Search 结构
export const filterSearchSchema = (crudSchema: CrudSchema[]): FormSchema[] => {
  const searchSchema: FormSchema[] = []
  eachTree(crudSchema, (schemaItem: CrudSchema) => {
    // 判断是否显示
    if (schemaItem?.search?.show) {
      const searchSchemaItem = {
        // 默认为 input
        component: schemaItem.search.component || 'Input',
        ...schemaItem.search,
        field: schemaItem.field,
        label: schemaItem.label
      }

      // 删除不必要的字段
      delete searchSchemaItem.show

      searchSchema.push(searchSchemaItem)
    }
  })
  return searchSchema
}
