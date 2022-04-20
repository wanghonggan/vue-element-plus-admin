<script setup lang="ts">
import { PropType, watch, ref } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { filterCrudSchema } from './helper'
import { ContentWrap } from '@/components/ContentWrap'
// import { Table } from '@/components/Table'
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
})

const searchSchema = ref<FormSchema[]>([])

// 监听 props.schema 过滤出所有组件的主体结构数据
watch(
  () => props.schema,
  (crudSchema: CrudSchema[]) => {
    console.log(crudSchema)
    const schemas = filterCrudSchema(crudSchema)
    searchSchema.value = schemas.searchSchema
    // Promise.allSettled(schemas.searchRequestTask).then((res) => {
    //   console.log(res)
    // })
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<template>
  <div :class="`${prefixCls}-crud`">
    <ContentWrap>
      <slot name="search">
        <Search v-bind="searchProps" :schema="searchSchema" />
      </slot>
    </ContentWrap>
  </div>
</template>
