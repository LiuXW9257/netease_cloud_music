import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    name: 'tom'
  },
  reducers: {
    updateName(state, { payload }) {
      state.name = payload
    }
  }
})

export const { updateName } = counterSlice.actions

export default counterSlice.reducer
