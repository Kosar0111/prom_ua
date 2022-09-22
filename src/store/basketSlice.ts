import { createSlice } from '@reduxjs/toolkit'

import { IGood } from '../model/interfaceUser'

interface IGoodslice {
  items: IGood[]
  totalPrice: number
  loading: boolean
  error: boolean
  message: string
}

const initialState: IGoodslice = {
  loading: false,
  error: false,
  message: '',
  totalPrice: 0,
  items: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload)
    }
  }
})
export const { addProduct, removeProduct } = basketSlice.actions
export default basketSlice.reducer
