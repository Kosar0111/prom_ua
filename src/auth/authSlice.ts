import { createSlice, createAsyncThunk /*PayloadAction */ } from '@reduxjs/toolkit'

//import authService from './authService'

//const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  //user: user ? user : null,
  loading: false,
  error: false,
  success: false,
  message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    // return await authService.register(user)
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.respons.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.loading = false
      state.error = false
      state.success = false
      state.message = ''
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        //state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = true
        // state.user = null
        //state.message = action.payload
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
