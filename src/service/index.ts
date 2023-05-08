import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

// 创建实例
const req = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    reqSuccessFn: (config) => {
      return config
    }
  }
})

export default req
