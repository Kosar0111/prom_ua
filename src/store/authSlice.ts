import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from '../model/interfaceUser'

interface IUserSlice {
  token: string
  users: IUser[]
  loading: boolean
  error: boolean
  success: boolean
  message: string
}

const initialState: IUserSlice = {
  token: '',
  loading: false,
  error: false,
  success: false,
  message: '',
  users: []
}

type ActionPayload = Record<string, string>
const token = 'grgrggergregergergegggereggvvvsvsvfvrv'

export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>('http://localhost:3001/users', {
      headers: {
        'content-type': 'applcation/json',
        accept: 'aplication/json',
        Authorization: 'Bearer grgrggergregergergegggereggvvvsvsvfvrv'
      },
      withCredentials: true
    })
    return response.data
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.respons.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const registrUser = createAsyncThunk<IUser, ActionPayload>(
  'users/registr',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/posts', {
        token: token,
        name: value.name.trim(),
        lastName: value.name.trim(),
        email: value.name.trim(),
        password: value.name.trim(),
        phone: value.name
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue("You can't register")
    }
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      console.log(state)

      state.users.push({
        token: token,
        name: action.payload.name.trim(),
        lastName: action.payload.name.trim(),
        email: action.payload.name.trim(),
        password: action.payload.name.trim(),
        phone: action.payload.name
      })
    }
  },
  extraReducers: builder => {
    builder.addCase(registrUser.pending, state => {
      state.loading = true
    })
    builder.addCase(registrUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      console.log(state)
      state.loading = false
      state.success = true
      authSlice.caseReducers.register(state, action)
    })
    builder.addCase(registrUser.rejected, state => {
      state.loading = false
      state.error = true
      state.message = "You can't register"
    })
  }
})

export const { register } = authSlice.actions
export default authSlice.reducer
