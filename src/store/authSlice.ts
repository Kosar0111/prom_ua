import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { instance } from '../api/api-clint'
import { userRegister } from '../helpers/user'
import { IUser } from '../model/interfaceUser'
interface IUserSlice {
  users: IUser
  loading: boolean
  regError: boolean
  authError: boolean
  register: boolean
  isAuthBool: boolean
  message: string
}

const initialState: IUserSlice = {
  loading: false,
  regError: false,
  authError: false,
  register: false,
  isAuthBool: false,
  message: '',
  users: {
    id: '',
    token: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  }
}

type ActionPayload = Record<string, string>

type FormModel = {
  email: string
  password: string
}

export const logIn = createAsyncThunk('users/getUsers', async (client: FormModel) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const auth = response.data.find(
    (user) => user.email === client.email && user.password === client.password
  )

  if (auth) return auth
  throw new Error(' Вы ввели не корректные данные')
})

export const registerUser = createAsyncThunk<IUser, ActionPayload>(
  'users/register',
  async (value) => {
    const response = await instance.get<IUser[]>('http://localhost:3001/users')
    const res = response.data.find((user) => user.email === value.email)

    if (!res) {
      const resp = await instance.post('http://localhost:3001/users', userRegister(value))
      await axios.post('http://localhost:3001/order', {
        id: resp.data.id,
        basket: []
      })
      return resp.data
    }
    throw new Error('Такой пользователь уже существует')
  }
)
export const isAuth = createAsyncThunk('isAuth/getUsers', async (cookie: string) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const userIsAuth: IUser = response.data.filter((el) => 'name=' + el.token === cookie)[0]

  return userIsAuth
})
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users = action.payload
    },
    userLog: (state, action) => {
      state.users = action.payload
    },
    logOut: (state) => {
      state.users = {
        id: '',
        token: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      }
      state.isAuthBool = false
      state.register = false
      state.loading = false
      document.cookie = 'name='
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      state.loading = true
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false
      authSlice.caseReducers.userLog(state, action)
      const token = action.payload.token
      document.cookie = `name=${token}`
      state.isAuthBool = true
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.rejected, (state) => {
      state.loading = false
      state.isAuthBool = false
      state.authError = true
      state.message = 'Что-то пошло не так'
    })

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true
      state.register = false
      state.regError = false
      state.message = ''
    })
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.loading = false
      state.register = true
      state.regError = false
      state.message = ''
      authSlice.caseReducers.register(state, action)
      document.cookie = `name=${action.payload.token}`
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false
      state.regError = true
      state.register = false
      state.message = 'Вы не можете зарегистрироваться , такой e-mail уже существует'
    })

    builder.addCase(isAuth.pending, (state) => {
      state.loading = true
    })
    builder.addCase(isAuth.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isAuthBool = true
      authSlice.caseReducers.userLog(state, action)
    })
    builder.addCase(isAuth.rejected, (state) => {
      state.loading = false
      state.isAuthBool = false
    })
  }
})
export const { register, logOut } = authSlice.actions
export default authSlice.reducer
