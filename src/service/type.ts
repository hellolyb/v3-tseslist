import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
export interface RequsetInterceptors {
  requests?: (
    config: InternalAxiosRequestConfig<any>
  ) =>
    | InternalAxiosRequestConfig<any>
    | Promise<InternalAxiosRequestConfig<any>>
  requesterr?: (err: any) => any
  responses?: (
    config: AxiosResponse<any>
  ) => AxiosResponse<any> | Promise<AxiosResponse<any>>
  responseserr?: (err: any) => any
}
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequsetInterceptors
}
