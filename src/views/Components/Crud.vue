<script setup lang="ts">
import { reactive } from 'vue'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Crud } from '@/components/Crud'
import { getDictOneApi } from '@/api/common'

const { t } = useI18n()

const crudSchema = reactive<CrudSchema[]>([
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index'
  },
  {
    field: 'content',
    label: t('tableDemo.header'),
    children: [
      {
        field: 'title',
        label: t('tableDemo.title'),
        search: {
          show: true
        }
      },
      {
        field: 'author',
        label: t('tableDemo.author'),
        search: {
          show: true,
          component: 'Select',
          api: getDictOneApi
        }
      },
      {
        field: 'display_time',
        label: t('tableDemo.displayTime')
      },
      {
        field: 'importance',
        label: t('tableDemo.importance'),
        search: {
          show: true,
          dictName: 'importance',
          component: 'Select'
        }
      },
      {
        field: 'pageviews',
        label: t('tableDemo.pageviews')
      }
    ]
  },
  {
    field: 'action',
    label: t('tableDemo.action')
  }
])
</script>

<template>
  <ContentWrap :title="t('crudDemo.title')" :message="t('crudDemo.crudDes')">
    <Crud :schema="crudSchema" />
  </ContentWrap>
</template>
