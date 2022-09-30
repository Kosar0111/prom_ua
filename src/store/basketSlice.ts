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
      id: string
      count: number
    }
  ]
}

export const getOrder = createAsyncThunk('basket/getOrder', async (idUser: string) => {
  const response = await axios.get<Basket[]>(`http://localhost:3001/order/${idUser}`)
  const idGood = response.data[0].basket

  const listGood = idGood.map(async el => {
    return await axios.get<IGood>(`http://localhost:3001/goods/${el.id}`).then(res => res.data)
  })

  const resultListGood = await Promise.all(listGood)
  resultListGood.map(x =>
    idGood.map(y => {
      if (y.id === x.id) {
        x.count = y.count
      }
      return x
    })
  )
  return resultListGood
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
        const responseUpdate = await axios.patch(`http://localhost:3001/order/${idUser}`, {
          basket: [
            ...res,
            {
              id: id,
              count: 1
            }
          ]
        })
        return responseUpdate.data
      }
    }
  }
)

export const increaseGood = createAsyncThunk<string, DeleteGoodsType>(
  'basket/increaseGood',
  async ({ id, idUser }) => {
    const response = await axios.get<Basket[]>(`http://localhost:3001/order?${idUser}`)
    const res = response.data[0].basket
    const newCount = res.find(el => el.id.toString() === id)

    if (newCount) {
      await axios.patch(`http://localhost:3001/order/${idUser}`, {
        basket: [
          ...res.filter(el => el.id !== newCount.id),
          {
            id: newCount.id,
            count: newCount.count + 1
          }
        ]
      })
    }
    return id
  }
)

export const decreaseGood = createAsyncThunk<string, DeleteGoodsType>(
  'basket/decreaseGood',
  async ({ id, idUser }) => {
    const response = await axios.get<Basket[]>(`http://localhost:3001/order?${idUser}`)
    const res = response.data[0].basket
    const newCount = res.find(el => el.id.toString() === id)

    if (newCount) {
      await axios.patch(`http://localhost:3001/order/${idUser}`, {
        basket: [
          ...res.filter(el => el.id !== newCount.id),
          {
            id: newCount.id,
            count: newCount.count - 1
          }
        ]
      })
    }
    return id
  }
)

export const deleteGood = createAsyncThunk<string, DeleteGoodsType>(
  'basket/deleteGood',
  async ({ id, idUser }) => {
    const response = await axios.get<Basket[]>(`http://localhost:3001/order?${idUser}`)
    const res = response.data[0].basket
    await axios.patch(`http://localhost:3001/order/${idUser}`, {
      basket: [...res.filter(el => el.id !== id)]
    })
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
      } else return
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
    decreaseProduct: (state, action) => {
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

    builder.addCase(increaseGood.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(increaseGood.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      basketSlice.caseReducers.increaseProduct(state, action)
    })
    builder.addCase(increaseGood.rejected, state => {
      state.loading = false
      state.error = true
      state.message = 'Something went wrong'
    })

    builder.addCase(decreaseGood.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(decreaseGood.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      basketSlice.caseReducers.decreaseProduct(state, action)
    })
    builder.addCase(decreaseGood.rejected, state => {
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

export const { addProduct, removeProduct, increaseProduct, decreaseProduct } = basketSlice.actions
export default basketSlice.reducer
