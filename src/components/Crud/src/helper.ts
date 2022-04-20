import { reactive } from 'vue'
import { eachTree } from '@/utils/tree'
import { useDictStoreWithOut } from '@/store/modules/dict'
import { useI18n } from '@/hooks/web/useI18n'
// import { useAxios } from '@/hooks/web/useAxios'

const dictStore = useDictStoreWithOut()

const { t } = useI18n()

// const request = useAxios()

interface AllSchemas {
  searchSchema: FormSchema[]
  searchRequestTask: Array<Promise<void>>
}

// 过滤所有结构
export const filterCrudSchema = (crudSchema: CrudSchema[]): AllSchemas => {
  const allSchemas = reactive<AllSchemas>({
    searchSchema: filterSearchSchema(crudSchema).searchSchema || [],
    searchRequestTask: filterSearchSchema(crudSchema).searchRequestTask || []
  })

  return allSchemas
}

// 过滤 Search 结构
export const filterSearchSchema = (
  crudSchema: CrudSchema[]
): {
  searchSchema: FormSchema[]
  searchRequestTask: Array<Promise<void>>
} => {
  const searchSchema: FormSchema[] = []

  // 获取字典列表队列
  const searchRequestTask: Array<Promise<void>> = []

  eachTree(crudSchema, (schemaItem: CrudSchema) => {
    // 判断是否显示
    console.log(schemaItem)

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
      } else if (searchSchemaItem.dictUrl) {
        // console.log(searchSchemaItem.dictUrl)
        // const res = await request.get({ url: searchSchemaItem.dictUrl })
        // if (res) {
        //   console.log(res)
        //   // searchSchemaItem.componentProps!.options = filterOptions(
        //   //   res.data,
        //   //   searchSchemaItem.componentProps.optionsAlias?.labelField
        //   // )
        //   // allSchemas.
        // }
      }

      // 删除不必要的字段
      delete searchSchemaItem.show
      delete searchSchemaItem.dictName
      delete searchSchemaItem.dictUrl

      searchSchema.push(searchSchemaItem)
    }
  })
  return {
    searchSchema,
    searchRequestTask
  }
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
