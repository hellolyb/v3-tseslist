import { mengxueguUrl } from './beseUel'
export const getmemberApi = () =>
  mengxueguUrl.ruquest({
    url: '/member/list/search/1/20',
    method: 'POST'
  })
