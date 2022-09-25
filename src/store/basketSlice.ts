import { createSlice } from '@reduxjs/toolkit'

import { IGood } from '../model/interfaceUser'

interface IGoodslice {
  items: IGood[]
  totalPrice: number
  totalAmount: number
  loading: boolean
  error: boolean
  message: string
}

const initialState: IGoodslice = {
  loading: false,
  error: false,
  message: '',
  totalPrice: 0,
  totalAmount: 0,
  items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items') as string) : []
}
//
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findItem = state.items.find(el => el.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        const tempProduct = { ...action.payload, count: 1 }
        state.items.push(tempProduct)
      }
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload)
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    increaseProduct: (state, action) => {
      const findItem = state.items.find(el => el.id === action.payload)
      if (findItem) {
        findItem.count++
      }
    },
    decreaseItem: (state, action) => {
      const findItem = state.items.find(el => el.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    }
  }
})
export const { addProduct, removeProduct, increaseProduct, decreaseItem } = basketSlice.actions
export default basketSlice.reducer
