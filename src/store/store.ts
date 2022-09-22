import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import basketSlice from './basketSlice'
import goodsSlice from './goodsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    goods: goodsSlice,
    basket: basketSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
