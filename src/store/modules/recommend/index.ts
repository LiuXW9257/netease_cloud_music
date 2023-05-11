import { getBanners, getHotRecommend } from '@/service/mosules/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IBanner } from './type'

interface RecommendState {
  banners: IBanner[]
  hotRecommends: any[]
}

// 初始化数据
const initialState: RecommendState = {
  banners: [],
  hotRecommends: []
}

export const fetchRecommendData = createAsyncThunk(
  'fetctdata',
  (condition, { dispatch }) => {
    // 1. 获取顶部轮播图 banners
    getBanners().then((res) => {
      dispatch(updateBanners(res.banners))
    })
    // 2. 获取热门推荐
    getHotRecommend(8).then((res) => {
      console.log(res)
      dispatch(updateHotRecommends(res.result))
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
    }
  }
})

export const { updateBanners, updateHotRecommends } = recommendSlice.actions

export default recommendSlice.reducer
