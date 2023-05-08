import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequsetInterceptors, RequestConfig } from './type'
import { loading, loadingStatus } from './Loading'
class Reeuest {
  instance: AxiosInstance // axiso 实例
  interceptors?: RequsetInterceptors // 拦截器配置
  Loading?: boolean
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.Loading = config.showLoading ?? loadingStatus
    // 局部拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requests,
      this.interceptors?.requesterr
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responses,
      this.interceptors?.responseserr
    )
    // ------ 全局拦截器
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        if (this.Loading) {
          loading.open()
        }
        return config
      },
      (error) => {
        // 对请求错误做些什么
        loading.close()
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        loading.close()
        return response.data
      },
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        loading.close()
        return Promise.reject(error)
      }
    )
  }
  // request 配置请求
  ruquest<T>(config: RequestConfig): Promise<T> {
    if (config.showLoading === false) {
      this.Loading = config.showLoading
    }
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
  // git 请求
  get<T>(config: RequestConfig): Promise<T> {
    return this.ruquest({ ...config, method: 'GET' })
  }
  // post 请求
  post<T>(config: RequestConfig): Promise<T> {
    return this.ruquest({ ...config, method: 'POST' })
  }
  // put 请求
  put<T>(config: RequestConfig): Promise<T> {
    return this.ruquest({ ...config, method: 'PUT' })
  }
  // delete 请求
  delete<T>(config: RequestConfig): Promise<T> {
    return this.ruquest({ ...config, method: 'DELETE' })
  }
}
export default Reeuest
