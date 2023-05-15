export interface ILyric {
  time: number
  text: string
}

export enum IPlayModel {
  listLoop = 0, // 顺序循环播放
  ListRandom = 1, // 歌单随机播放
  singleLoop = 2 // 单曲循环
}
