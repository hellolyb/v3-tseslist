import { mengxueguUrl } from '../../service/beseUel'
import { IAccount, IDataType, ILoginResult } from './type'
export const getLoginApi = (data: IAccount) =>
  mengxueguUrl.ruquest<IDataType<ILoginResult>>({
    url: '/login',
    method: 'POST',
    data
  })
export const getUserInfoById = (id: string | number) =>
  mengxueguUrl.ruquest<IDataType>({
    url: `/users/${id}`,
    method: 'GET',
    showLoading: false
  })
export const getUserMenu = (id: string | number) =>
  mengxueguUrl.ruquest<IDataType>({
    url: `/role/${id}/menu`,
    method: 'GET',
    showLoading: false
  })
