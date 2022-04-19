<script setup lang="ts">
import { PropType, watch } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
// import { Search } from '@/components/Search'
import { filterCrudSchema } from './helper'
// import { Table } from '@/components/Table'
// import { propTypes } from '@/utils/propTypes'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('crud')

const props = defineProps({
  // 主体结构，以 Table 的表头为主
  schema: {
    type: Array as PropType<CrudSchema[]>,
    default: () => []
  }
})

// 监听 props.schema 过滤出所有组件的主体结构数据
watch(
  () => props.schema,
  (crudSchema: CrudSchema[]) => {
    console.log(filterCrudSchema(crudSchema))
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<template>
  <div :class="`${prefixCls}-crud`">Crud</div>
</template>
