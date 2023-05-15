import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyric, getMusicDetail } from '@/service/modules/palyers'
import { ILyric } from './type'
import { lyricParse } from '@/utils/lyric-parse'
import { RootState } from '@/store'
import { stat } from 'fs'

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '我记得',
      id: 1974443814,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: '赵雷',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 150127127,
        name: '署前街少年',
        picUrl:
          'https://p2.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg',
        tns: [],
        pic_str: '109951167805892385',
        pic: 109951167805892380
      },
      dt: 329891,
      h: {
        br: 320000,
        fid: 0,
        size: 13198150,
        vd: -50155,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7918907,
        vd: -47545,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5279286,
        vd: -45763,
        sr: 44100
      },
      sq: {
        br: 1581400,
        fid: 0,
        size: 65211331,
        vd: -50153,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 0,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2708856,
      mv: 0,
      publishTime: 1661702400000
    },
    {
      name: '画',
      id: 202369,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: '赵雷',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007908521',
      fee: 8,
      v: 48,
      crbt: null,
      cf: '',
      al: {
        id: 20339,
        name: '赵小雷',
        picUrl:
          'https://p2.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg',
        tns: [],
        pic_str: '18876415625841069',
        pic: 18876415625841068
      },
      dt: 228133,
      h: {
        br: 320000,
        fid: 0,
        size: 9128272,
        vd: -50401,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5476981,
        vd: -50401,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3651335,
        vd: -50401,
        sr: 44100
      },
      sq: {
        br: 851000,
        fid: 0,
        size: 24267686,
        vd: -50401,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 48,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1400821,
      mv: 0,
      publishTime: 1312646400007
    },
    {
      name: '成都',
      id: 436514312,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: '赵雷',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 53,
      crbt: null,
      cf: '',
      al: {
        id: 34930257,
        name: '成都',
        picUrl:
          'https://p2.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg',
        tns: [],
        pic: 2946691234868155
      },
      dt: 328362,
      h: {
        br: 320000,
        fid: 0,
        size: 13137546,
        vd: -49980,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7882545,
        vd: -47363,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5255044,
        vd: -45595,
        sr: 44100
      },
      sq: {
        br: 795310,
        fid: 0,
        size: 32643787,
        vd: -49996,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 0,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 53,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 1400821,
      rtype: 0,
      rurl: null,
      mv: 5619601,
      publishTime: 1477238400007
    }
  ],
  playSongIndex: 0
}

export const fetchCurrentSong = createAsyncThunk<
  void,
  number,
  { state: RootState }
>('fetchCurrentSong', (id, { dispatch, getState }) => {
  // 判断该音乐是否属于该歌单
  const player = getState().player
  const songList = player.playSongList
  const index = songList.findIndex((item) => item.id === id)
  console.log(index)

  if (index === -1) {
    // 1.获取音乐详情
    getMusicDetail(id).then((res: any) => {
      const newSong = res.songs[0]
      dispatch(updateCurrentSong(newSong))
      dispatch(updatePlaySongList([...songList, newSong]))
      dispatch(updatePlaySongIndex(songList.length))
    })
  } else {
    dispatch(updateCurrentSong(songList[index]))
    dispatch(updatePlaySongIndex(index))
  }

  // 2.获取音乐歌词
  getLyric(id).then((res: any) => {
    // 解析歌词
    const lyric = lyricParse(res.lrc.lyric)
    dispatch(updateLyric(lyric))
  })
})

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateCurrentSong(state, { payload }) {
      state.currentSong = payload
    },
    updateLyric(state, { payload }) {
      state.lyrics = payload
    },
    updateLyricIndex(state, { payload }) {
      state.lyricIndex = payload
    },
    updatePlaySongIndex(state, { payload }) {
      state.playSongIndex = payload
    },
    updatePlaySongList(state, { payload }) {
      state.playSongList = payload
    }
  }
})
export const {
  updateCurrentSong,
  updateLyric,
  updateLyricIndex,
  updatePlaySongIndex,
  updatePlaySongList
} = playerSlice.actions
export default playerSlice.reducer
