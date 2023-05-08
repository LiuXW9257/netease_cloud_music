import req from '..'
import { req2 } from '..'

export function testFetch() {
  req
    .request({
      url: '/top/mv'
    })
    .then((res) => {
      console.log(res)
    })
}

export function testFetch2() {
  req2
    .request({
      url: '/entire/list'
    })
    .then((res) => {
      console.log(res)
    })
}

interface IHighScoreData {
  list: any[]
  subtitle: string
  title: string
}

export function testFetch3() {
  req2
    .request<IHighScoreData>({
      url: '/home/highscore',
      interceptors: {
        reqSuccessFn: (config) => {
          console.log('高分房源 /home/highscore 请求成功拦截器')
          return config
        },
        resSuccessFn: (res) => {
          console.log('高分房源 /home/highscore 响应成功拦截器')
          return res
        }
      }
    })
    .then((res) => {
      console.log(res)
    })
}
