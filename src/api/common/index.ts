import { useAxios } from '@/hooks/web/useAxios'

const request = useAxios()

// 获取所有字典
export const getDictApi = () => {
  return request.get<Recordable>({ url: '/dict/list' })
}
