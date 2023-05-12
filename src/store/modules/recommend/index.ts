import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getRankingList
} from '@/service/mosules/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IBanner } from './type'

interface RecommendState {
  banners: IBanner[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
}

// 初始化数据
const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

// 初始化推荐页面数据
export const fetchRecommendData = createAsyncThunk(
  'fetchRecommendData',
  (condition, { dispatch }) => {
    // 1. 获取顶部轮播图 banners
    getBanners().then((res) => {
      dispatch(updateBanners(res.banners))
    })
    // 2. 获取热门推荐
    getHotRecommend(8).then((res) => {
      dispatch(updateHotRecommends(res.result))
    })
    // 3. 获取新碟上架
    getNewAlbum().then((res) => {
      // console.log(res)
      dispatch(updateNewAlbums(res.albums))
    })
  }
)

const rankMap = {
  upRanking: 19723756, // 飙升榜
  newSongsRanking: 3779629, // 新歌榜
  originalRanking: 2884035 // 原创榜
}

// 获取榜单数据
// 将三个榜单数据放在一个数组中
// 1. 全部回来以后再 dispatch
// 2. 保证数据顺序 upRanking、newSongsRanking、originalRanking
export const fetchRecommendRankingData = createAsyncThunk(
  'fetchRecommendRankingData',
  (_, { dispatch }) => {
    const promise: Promise<any>[] = []
    Object.values(rankMap).forEach((id) => {
      promise.push(getRankingList(id))
    })
    Promise.all(promise).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(updateRankings(playlists))
    })
  }
)

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    updateBanners(state, { payload }) {
      state.banners = payload
    },
    updateHotRecommends(state, { payload }) {
      state.hotRecommends = payload
    },
    updateNewAlbums(state, { payload }) {
      state.newAlbums = payload
    },
    updateRankings(state, { payload }) {
      state.rankings = payload
    }
  }
})

export const {
  updateBanners,
  updateHotRecommends,
  updateNewAlbums,
  updateRankings
} = recommendSlice.actions

export default recommendSlice.reducer
