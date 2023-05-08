import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

// 创建实例
const req = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 创建实例
export const req2 = new Request({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,
  interceptors: {
    reqSuccessFn: (config) => {
      console.log('airbnb请求成功拦截器')
      return config
    },
    reqFailureFn: (err) => err,
    resSuccessFn: (res) => {
      console.log('airbnb响应成功拦截器')
      return res
    },
    resFailureFn: (err) => err
  }
})

export default req
