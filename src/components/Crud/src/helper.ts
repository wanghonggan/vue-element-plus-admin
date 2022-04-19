import { eachTree } from '@/utils/tree'

interface AllSchema {
  searchSchema: FormSchema[]
}

// 过滤所有结构
export const filterCrudSchema = (crudSchema: CrudSchema[]): AllSchema => {
  const searchSchema = filterSearchSchema(crudSchema)
  return {
    searchSchema
  }
}

// 过滤 Search 结构
export const filterSearchSchema = (crudSchema: CrudSchema[]): FormSchema[] => {
  const searchSchema: FormSchema[] = []
  eachTree(crudSchema, (schemaItem: CrudSchema) => {
    if (schemaItem?.search?.show) {
      const searchSchemaItem = {
        ...schemaItem.search,
        field: schemaItem.field,
        label: schemaItem.label
      }

      delete searchSchemaItem.show

      searchSchema.push(searchSchemaItem as FormSchema)
    }
  })
  return searchSchema
}
