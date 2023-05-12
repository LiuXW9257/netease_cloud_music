import req from '..'

// 获取轮播图
export function getBanners() {
  return req.get({ url: '/banner' })
}

// 获取热门推荐
export function getHotRecommend(limit = 8) {
  return req.get({
    url: `/personalized?limit=${limit}`
  })
}

// 新碟上架
export function getNewAlbum() {
  return req.get({
    url: '/album/newest'
  })
}
