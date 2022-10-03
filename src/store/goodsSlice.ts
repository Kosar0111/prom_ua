import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IGood } from '../model/interfaceUser'

interface IGoodslice {
  goods: IGood[]
  loading: boolean
  error: boolean
  view: boolean
  message: string
}

const initialState: IGoodslice = {
  loading: false,
  error: false,
  view: false,
  message: '',
  goods: []
}
export const getGoods = createAsyncThunk('goods/getGoods', async (_) => {
  const response = await axios.get<IGood[]>('http://localhost:3001/goods')
  return response.data
})
const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    allGoods: (state, action) => {
      state.goods = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGoods.pending, (state) => {
      state.loading = true
      state.error = false
      state.view = false
      state.goods = []
    })
    builder.addCase(getGoods.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.view = true
      goodsSlice.caseReducers.allGoods(state, action)
    })
    builder.addCase(getGoods.rejected, (state) => {
      state.loading = false
      state.error = true
      state.view = false
      state.message = 'Что то пошло не так'
    })
  }
})

export const { allGoods } = goodsSlice.actions
export default goodsSlice.reducer
