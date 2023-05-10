import { getBanners } from '@/service/mosules/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IBanner } from './type'

interface RecommendState {
  banners: IBanner[]
}

// 初始化数据
const initialState: RecommendState = {
  banners: []
}

export const fetchRecommendData = createAsyncThunk(
  'fetctdata',
  (condition, { dispatch }) => {
    // 1. 获取顶部banners
    getBanners().then((res) => {
      console.log('fetchRecommendData')
      console.log(res)

      dispatch(updateBanners(res.banners))
    })
  }
)

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    updateBanners(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { updateBanners } = recommendSlice.actions

export default recommendSlice.reducer
