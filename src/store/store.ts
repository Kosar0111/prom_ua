import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import goodsSlice from './goodsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    goods: goodsSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
