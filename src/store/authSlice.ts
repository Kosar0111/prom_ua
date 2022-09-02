import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' //PayloadAction
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

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

export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>('http://localhost:3001/users')
    return response.data
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.respons.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const registr = createAsyncThunk<IUser, ActionPayload>(
  'posts/addPosts',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/posts', {
        token: 'grgrggergregergergegggereggvvvsvsvfvrv',
        author: value.author.trim(),
        description: value.description.trim(),
        time: new Date().toLocaleString()
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
      state.users.push({
        token: uuidv4(),
        name: action.payload.name.trim(),
        lastName: action.payload.name.trim(),
        email: action.payload.name.trim(),
        password: action.payload.name.trim(),
        phone: action.payload.name
      })
    }
  }
  /*extraReducers: builder => {
    //builder.addCase(register.pending, state => {
      state.loading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.users = action.payload
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.message = action.payload
    })
  }*/
})

export const { register } = authSlice.actions
export default authSlice.reducer
