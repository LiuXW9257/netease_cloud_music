// 歌词解析

import { ILyric } from '@/store/modules/player/type'

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function lyricParse(lyricString: string) {
  const lines: string[] = lyricString.split('\n')

  const lyric: ILyric[] = []
  // 因为存在时间为空的情况，所以我们这里使用 for 循环，可以有更多的操作
  for (const line of lines) {
    const results = timeRegExp.exec(line)

    if (!results) continue

    // 解析出时间
    const m = Number(results[1]) * 60 * 1000
    const s = Number(results[2]) * 1000
    const ms =
      results.length === 2 ? Number(results[3]) * 10 : Number(results[3])

    const time = m + s + ms

    // 解析出歌词
    const text = line.replace(timeRegExp, '')
    lyric.push({
      time,
      text
    })
  }
  return lyric
}
