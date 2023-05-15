import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyric, getMusicDetail } from '@/service/modules/palyers'
import { ILyric } from './type'
import { lyricParse } from '@/utils/lyric-parse'

interface PlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
}

const initialState: PlayerState = {
  currentSong: {
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
  lyrics: [],
  lyricIndex: -1
}

export const fetchCurrentSong = createAsyncThunk(
  'fetchCurrentSong',
  (id: number, { dispatch }) => {
    // 1.获取音乐详情
    getMusicDetail(id).then((res: any) => {
      dispatch(updateCurrentSong(res.songs[0]))
    })
    // 2.获取音乐歌词
    getLyric(id).then((res: any) => {
      // 解析歌词
      const lyric = lyricParse(res.lrc.lyric)
      dispatch(updateLyric(lyric))
    })
  }
)

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
    }
  }
})
export const { updateCurrentSong, updateLyric, updateLyricIndex } =
  playerSlice.actions
export default playerSlice.reducer
