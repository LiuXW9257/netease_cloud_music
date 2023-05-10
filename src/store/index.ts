import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './modules/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})
type GetStateFnType = typeof store.getState
export type DispatchType = typeof store.dispatch

// 获取函数store.getState()的返回值类型
export type RootState = ReturnType<GetStateFnType>

export default store
