import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface Interceptors<T> {
  reqSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  reqFailureFn?: (err: any) => any
  resSuccessFn?: (res: T) => T
  resFailureFn?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
}
