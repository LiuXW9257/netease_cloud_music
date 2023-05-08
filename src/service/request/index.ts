import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig } from './type'

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class Request {
  instance: AxiosInstance

  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功的拦截')
        return res.data
      },
      (err) => {
        console.log('全局响应失败的拦截')
        return err
      }
    )

    // 针对特定的Request请求实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.reqSuccessFn,
      config.interceptors?.reqFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.resSuccessFn,
      config.interceptors?.resFailureFn
    )
  }

  // 封装网络请求的方法
  // 某个请求中的拦截器不能添加到实例身上，如果加到实例身上，其他请求也会有这个拦截器
  request<T = any>(config: RequestConfig<T>) {
    // 判断后，自己执行请求拦截器
    if (config.interceptors?.reqSuccessFn) {
      config = config.interceptors.reqSuccessFn(config)
    }
    // 手动返回一个新的 Promise， 在Promise中判断并执行拦截器
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.resSuccessFn) {
            // 判断后，自己执行响应拦截器
            res = config.interceptors.resSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
