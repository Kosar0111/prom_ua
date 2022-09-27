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
  city: string
  price: number
  img: string
  title: string
  nameShop: string
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

export const getOrder = createAsyncThunk('basket/getOrder', async (id: string) => {
  const response = await axios.get<IGood[]>(`http://localhost:3001/order?${id}`)

  return response.data
})
export const addGoods = createAsyncThunk<IGood[], AddGoodsType>(
  'basket/addGoods',
  async ({ idUser, id, city, price, nameShop, img, title }) => {
    const response = await axios.get<IGood[]>(`http://localhost:3001/order?${idUser}`)
    const res = response.data.find(el => el.id === id)

    if (!res) {
      const resp = await axios.post(`http://localhost:3001/order?${idUser}`, {
        id: id,
        city: city,
        price: price,
        nameShop: nameShop,
        img: img,
        title: title,
        count: 1
      })
      return resp.data
    } else {
      const respPut = await axios.patch(`http://localhost:3001/order?${idUser}`)
      res.count++
      return respPut.data
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
      state.items = action.payload
    },
    addProduct: (state, action) => {
      const findItem = state.items.find(el => el.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        const tempProduct = { ...action.payload, count: 1 }
        state.items.push(tempProduct)
      }
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
      basketSlice.caseReducers.addProduct(state, action)
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
