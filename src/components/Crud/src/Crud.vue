<script setup lang="ts">
import { PropType, computed } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { useFilterCrudSchema } from './helper'
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

const allSchemas = computed(() => {
  return useFilterCrudSchema(props.schema)
})
</script>

<template>
  <div :class="`${prefixCls}-crud`">
    <ContentWrap>
      <slot name="search">
        <Search v-bind="searchProps" :schema="allSchemas.searchSchema" />
      </slot>
    </ContentWrap>
  </div>
</template>
