import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 获取函数store.getState()的返回值类型
export type RootState = ReturnType<typeof store.getState>

export default store
