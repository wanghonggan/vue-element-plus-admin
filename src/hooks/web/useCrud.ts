import { Crud, CrudExpose } from '@/components/Crud'
import { ref } from 'vue'

export const useCrud = () => {
  // Crud 实例
  const crudRef = ref<typeof Crud & CrudExpose>()

  const register = (ref: typeof Crud & CrudExpose) => {
    crudRef.value = ref
  }

  return {
    register
  }
}
