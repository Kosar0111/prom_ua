import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IGood } from '../model/interfaceUser'
interface IGoodslice {
  userId: string
  items: IGood[]
  loading: boolean
  error: boolean
  message: string
}

type AddGoodsType = {
  idUser: string
  id: string
  count?: number
}

type DeleteGoodsType = {
  id: string
  idUser: string
}

const initialState: IGoodslice = {
  loading: false,
  error: false,
  message: '',
  userId: '',
  items: []
}
type Basket = {
  id: string
  basket: [
    {
      id: number
      count: number
    }
  ]
}

export const getOrder = createAsyncThunk('basket/getOrder', async (idUser: string) => {
  const response = await axios.get<Basket[]>(`http://localhost:3001/order/${idUser}`)
  return response.data[0].basket
})

export const addGoods = createAsyncThunk<Basket, AddGoodsType>(
  'basket/addGoods',
  async ({ idUser, id }) => {
    const response = await axios.get<Basket[]>(`http://localhost:3001/order?${idUser}`)
    const res = response.data[0].basket

    if (res.length < 1) {
      const resp = await axios.patch<Basket>(`http://localhost:3001/order/${idUser}`, {
        basket: [{ id: id, count: 1 }]
      })
      return resp.data
    } else if (res.length >= 1) {
      const newCount = res.find(el => el.id.toString() === id)

      if (newCount) {
        const respo = await axios.patch(`http://localhost:3001/order/${idUser}`, {
          basket: [
            ...res.filter(el => el.id !== newCount.id),
            {
              id: newCount.id,
              count: newCount.count + 1
            }
          ]
        })
        return respo.data
      } else {
        const response = await axios.patch(`http://localhost:3001/order/${idUser}`, {
          basket: [
            ...res,
            {
              id: id,
              count: 1
            }
          ]
        })
        return response.data
      }
    }
  }
)

export const deleteGood = createAsyncThunk<string, DeleteGoodsType>(
  'basket/deleteGood',
  async ({ id, idUser }) => {
    await axios.delete(`http://localhost:3001/order/${idUser}`)
    return id
  }
)
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    allOrder: (state, action) => {
      if (action.payload) {
        state.items = action.payload
        console.log(action.payload)
      } else return
    },
    addProduct: (state, action) => {
      console.log(action.payload)

      // const findItem = state.items.find(el => el.id === action.payload.id)
      // if (findItem) {
      //   findItem.count++
      // } else {
      //   const tempProduct = { ...action.payload, count: 1 }
      //   state.items.push(tempProduct)
      // }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload)
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
  },
  extraReducers: builder => {
    builder.addCase(getOrder.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      basketSlice.caseReducers.allOrder(state, action)
    })
    builder.addCase(getOrder.rejected, state => {
      state.loading = false
      state.error = true
      state.message = 'Something went wrong'
    })

    builder.addCase(addGoods.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(addGoods.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      // basketSlice.caseReducers.addProduct(state, action)
    })
    builder.addCase(addGoods.rejected, state => {
      state.loading = false
      state.error = true
      state.message = 'Something went wrong'
    })

    builder.addCase(deleteGood.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(deleteGood.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      basketSlice.caseReducers.removeProduct(state, action)
    })
    builder.addCase(deleteGood.rejected, state => {
      state.loading = false
      state.error = true
      state.message = 'Something went wrong'
    })
  }
})

export const { addProduct, removeProduct, increaseProduct, decreaseItem } = basketSlice.actions
export default basketSlice.reducer
