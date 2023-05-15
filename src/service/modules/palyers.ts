import req from '..'

// 获取音乐详情
export function getMusicDetail(ids: number) {
  return req.get({
    url: `/song/detail`,
    params: {
      ids
    }
  })
}

// 获取音乐歌词
export function getLyric(id: number) {
  return req.get({
    url: `/lyric`,
    params: {
      id
    }
  })
}
