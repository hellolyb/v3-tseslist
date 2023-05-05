import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElLoading } from 'element-plus'
let loadingInstance: any
export const BASE_URL = {
  baseURL: 'http://vue.mengxuegu.com/pro-api',
  timeout: 50000,
  interceptors: {
    requests(config: InternalAxiosRequestConfig<any>) {
      // 请求拦截器
      config.headers.aa = '123456'
      loadingInstance = ElLoading.service({
        text: '加载中',
        background: 'rgb(240, 128, 128, 0.2)'
      })
      return config
    },
    requesterr(err: any) {
      loadingInstance.close()

      // 请求错误拦截器
      return err
    },
    responses(config: AxiosResponse<any>) {
      loadingInstance.close()
      // 响应拦截器
      return config
    },
    responseserr(err: any) {
      loadingInstance.close()
      // 响应错误拦截器
      return err
    }
  }
}
