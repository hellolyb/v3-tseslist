import { mengxueguUrl } from '@/service/beseUel'
export const getUsersListApi = (url: string, data: object) =>
  mengxueguUrl.ruquest({
    url,
    method: 'POST',
    data
  })
