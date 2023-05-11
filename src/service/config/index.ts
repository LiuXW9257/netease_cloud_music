// 1. 手动切换
// export const BASE_URL = 'http://codercba.com:9002'
// const BASE_URL = 'http://localhost:3000'
export const TIME_OUT = 10000

// 2. 利用webpack根据当前依赖环境进行判断
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   BASE_URL = 'http://codercba.com:9001'
// }
// export { BASE_URL }

// 3. 配置文件动态加载
// console.log(process.env.REACT_APP_BASE_URL)
const BASE_URL = process.env.REACT_APP_BASE_URL
export { BASE_URL }
