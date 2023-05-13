import { createSlice } from '@reduxjs/toolkit'

interface PlayerState {
  currentSong: any
}

const initialState: PlayerState = {
  currentSong: {
    name: '海阔天空',
    id: 346089,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 11127,
        name: 'Beyond',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '600902000004240302',
    fee: 8,
    v: 49,
    crbt: null,
    cf: '',
    al: {
      id: 34110,
      name: 'Beyond 25th Anniversary',
      picUrl:
        'https://p2.music.126.net/zZtUDuWk6qIe3ezMt4UMjg==/109951165796417308.jpg',
      tns: [],
      pic_str: '109951165796417308',
      pic: 109951165796417310
    },
    dt: 322560,
    h: {
      br: 320000,
      fid: 0,
      size: 12905578,
      vd: -49200,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 7743364,
      vd: -46622,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 5162257,
      vd: -44981,
      sr: 44100
    },
    sq: {
      br: 870405,
      fid: 0,
      size: 35094811,
      vd: -49193,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '03',
    no: 6,
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
    version: 49,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mv: 5501497,
    mst: 9,
    cp: 7002,
    publishTime: 1205164800000
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateCurrentSong(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { updateCurrentSong } = playerSlice.actions
export default playerSlice.reducer
