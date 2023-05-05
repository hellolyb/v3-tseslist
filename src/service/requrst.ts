import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequsetInterceptors, RequestConfig } from './type'
class Reeuest {
  instance: AxiosInstance // axiso 实例
  interceptors: RequsetInterceptors | undefined // 拦截器配置
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requests,
      this.interceptors?.requesterr
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responses,
      this.interceptors?.responseserr
    )
  }
  ruquest<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
export default Reeuest
