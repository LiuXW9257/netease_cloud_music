import {
  getBanners,
  getHotRecommend,
  getNewAlbum
} from '@/service/mosules/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IBanner } from './type'

interface RecommendState {
  banners: IBanner[]
  hotRecommends: any[]
  newAlbums: any[]
}

// 初始化数据
const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}

// 初始化推荐页面数据
export const fetchRecommendData = createAsyncThunk(
  'fetctdata',
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
    }
  }
})

export const { updateBanners, updateHotRecommends, updateNewAlbums } =
  recommendSlice.actions

export default recommendSlice.reducer
