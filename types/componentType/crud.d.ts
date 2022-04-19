declare type CrudSchema = Omit<TableColumn, 'children'> & {
  search?: CrudSearchParams
  children?: CrudSchema[]
}

declare type CrudSearchParams = {
  // 是否显示在查询项
  show?: boolean
} & Omit<FormSchema, 'field'>
