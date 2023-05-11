import req from '..'

// 获取轮播图
export function getBanners() {
  return req.get({ url: '/banner' })
}

// 获取热门推荐
export function getHotRecommend(limit: number) {
  return req.get({
    url: `/personalized?limit=${limit}`
  })
}
