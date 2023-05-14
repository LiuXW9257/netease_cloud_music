// 格式化函数库

// 格式化数字 大于1000000的显示为 ~万
export function formatCount(count: number) {
  if (count > 1000000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count + ''
  }
}

// 优化图片获取路径
export function formatGetImg(url: string, width: number, height = width) {
  return url + `?param=${width}y${height}`
}

// 事件格式化 time 单位是毫秒
export function formatTime(time: number) {
  const minutes = Math.floor(time / 1000 / 60)
  // 秒 取整后 mod 60
  const seconds = Math.floor(time / 1000) % 60

  const m = String(minutes).padStart(2, '0')
  const s = String(seconds).padStart(2, '0')

  return m + ':' + s
}
