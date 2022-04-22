declare type CrudSchema = Omit<TableColumn, 'children'> & {
  search?: CrudSearchParams
  table?: CrudTableParams
  children?: CrudSchema[]
}

declare type CrudSearchParams = {
  // 是否显示在查询项
  show?: boolean
  // 字典名称，会去取全局的字典
  dictName?: string
  // 接口路径
  dictUrl?: string
} & Omit<FormSchema, 'field'>

declare type CrudTableParams = {
  // 是否显示表头
  show?: boolean
} & Omit<FormSchema, 'field'>
