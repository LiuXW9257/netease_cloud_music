import req from '..'

// 获取轮播图
export function getBanners() {
  return req.get({ url: '/banner' })
}
