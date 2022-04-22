<script setup lang="ts">
import { PropType, computed, ref, onMounted, unref } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { useFilterCrudSchema } from './helper'
// import { ContentWrap } from '@/components/ContentWrap'
import { Table, TableExpose } from '@/components/Table'
// import { useTable } from '@/hooks/web/useTable'
// import { propTypes } from '@/utils/propTypes'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('crud')

const props = defineProps({
  // 主体结构，以 Table 的表头为主
  schema: {
    type: Array as PropType<CrudSchema[]>,
    default: () => []
  },
  // search组件的props
  searchProps: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  }
  // 增删改查的接口
  // crudApi: {

  // }
})

const emit = defineEmits(['register'])

const allSchemas = computed(() => {
  return useFilterCrudSchema(props.schema)
})

// Table实例
const tableRef = ref<typeof Table & TableExpose>()

// 注册
onMounted(() => {
  emit('register', unref(tableRef), unref(tableRef)?.elTableRef)
})

// const { register, tableObject, methods } = useTable<
//   {
//     total: number
//     list: TableData[]
//   },
//   TableData
// >({
//   getListApi: getTableListApi,
//   delListApi: delTableListApi,
//   response: {
//     list: 'list',
//     total: 'total'
//   }
// })

// const { getList, setSearchParams } = methods
</script>

<template>
  <div :class="`${prefixCls}-crud`">
    <div>
      <slot name="search">
        <Search v-bind="searchProps" :schema="allSchemas.searchSchema" />
      </slot>
    </div>

    <div>
      <slot name="table">
        <Table ref="tableRef" :columns="allSchemas.tableColumns" border />
      </slot>
    </div>
  </div>
</template>
