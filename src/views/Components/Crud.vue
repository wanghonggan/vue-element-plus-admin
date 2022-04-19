<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Crud } from '@/components/Crud'

const { t } = useI18n()

const crudSchema: CrudSchema[] = [
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
        label: t('tableDemo.author')
      },
      {
        field: 'display_time',
        label: t('tableDemo.displayTime')
      },
      {
        field: 'importance',
        label: t('tableDemo.importance')
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
]
</script>

<template>
  <ContentWrap :title="t('crudDemo.title')" :message="t('crudDemo.crudDes')">
    <Crud :schema="crudSchema" />
  </ContentWrap>
</template>
