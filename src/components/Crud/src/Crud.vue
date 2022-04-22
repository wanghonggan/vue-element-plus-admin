<script setup lang="ts">
import { PropType, computed, ref, onMounted, getCurrentInstance } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { useFilterCrudSchema } from './helper'
// import { ContentWrap } from '@/components/ContentWrap'
import { Table, TableExpose } from '@/components/Table'
import { useTable } from '@/hooks/web/useTable'
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
  },
  // table组件的props
  tableProps: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  }
})

const emit = defineEmits(['register'])

const allSchemas = computed(() => {
  return useFilterCrudSchema(props.schema)
})

// Table实例
const tableRef = ref<typeof Table & TableExpose>()
const { register: tableRegister, tableObject, elTableRef, methods } = useTable()

// 注册
onMounted(() => {
  emit('register', getCurrentInstance())
})

defineExpose({
  tableObject,
  elTableRef,
  tableMethods: methods
})
</script>

<template>
  <div ref="crudRef" :class="`${prefixCls}-crud`">
    <div>
      <slot name="search">
        <Search v-bind="searchProps" :schema="allSchemas.searchSchema" />
      </slot>
    </div>

    <div>
      <slot name="table">
        <Table
          ref="tableRef"
          v-bind="tableProps"
          :columns="allSchemas.tableColumns"
          border
          @register="tableRegister"
        />
      </slot>
    </div>
  </div>
</template>
