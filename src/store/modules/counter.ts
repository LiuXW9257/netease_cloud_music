import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    name: 'tom'
  },
  reducers: {}
})

export default counterSlice.reducer
