import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

import { instance } from '../api/api-clint'

import { IUser } from '../model/interfaceUser'

interface IUserSlice {
  token: string
  users: IUser[]
  loading: boolean
  regError: boolean
  authError: boolean
  register: boolean
  isAuth: boolean
  regMessage: string
  authMessage: string
}

const initialState: IUserSlice = {
  token: document.cookie,
  loading: false,
  regError: false,
  authError: false,
  register: false,
  isAuth: false,
  regMessage: '',
  authMessage: '',
  users: []
}

type ActionPayload = Record<string, string>

type FormModel = {
  email: string
  password: string
}

export const logIn = createAsyncThunk('users/getUsers', async (client: FormModel) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const auth = response.data.filter(
    user => user.email === client.email && user.password === client.password
  )
  if (auth.length > 0) return auth

  throw new Error(' You entered incorreced data')
})

export const registrUser = createAsyncThunk<IUser, ActionPayload>('users/registr', async value => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const res = response.data.filter(user => user.email === value.email)

  if (res.length === 0) {
    const resp = await instance.post('http://localhost:3001/users', {
      token: uuidv4(),
      id: uuidv4(),
      name: value.name.trim(),
      lastName: value.lastName.trim(),
      email: value.email.trim(),
      password: value.password.trim(),
      phone: value.phone
    })
    return resp.data
  }
  throw new Error('Such user has already exist')
})
export const isAuth = createAsyncThunk('isAuth/getUsers', async (cookie: string) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const userIsAuth = response.data.filter(el => el.token === cookie)
  return userIsAuth
})
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push({
        token: uuidv4(),
        id: uuidv4(),
        name: action.payload.name.trim(),
        lastName: action.payload.lastName.trim(),
        email: action.payload.email.trim(),
        password: action.payload.password.trim(),
        phone: action.payload.phone
      })
    }
  },
  extraReducers: builder => {
    builder.addCase(logIn.pending, state => {
      state.loading = true
      state.isAuth = false
      state.authError = false
      state.authMessage = ''
    })
    builder.addCase(logIn.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.loading = false
      state.users = action.payload
      const token = action.payload.map(el => el.token)
      document.cookie = `name=${token}`
      state.isAuth = true
      state.authError = false
      state.authMessage = ''
    })
    builder.addCase(logIn.rejected, state => {
      state.loading = false
      state.isAuth = false
      state.authError = true
      state.authMessage = 'Somthing went wrong'
    })

    builder.addCase(registrUser.pending, state => {
      state.loading = true
      state.register = false
      state.regError = false
      state.regMessage = ''
    })
    builder.addCase(registrUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.loading = false
      state.register = true
      state.regError = false
      state.regMessage = ''
      authSlice.caseReducers.register(state, action)
      document.cookie = `name=${action.payload.token}`
    })
    builder.addCase(registrUser.rejected, state => {
      state.loading = false
      state.regError = true
      state.register = false
      state.regMessage = 'You cant register, such email has already exists'
    })

    builder.addCase(isAuth.pending, state => {
      state.loading = true
    })
    builder.addCase(isAuth.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.isAuth = true

      state.users = action.payload
    })
    builder.addCase(isAuth.rejected, state => {
      state.loading = false
    })
  }
})
export const { register } = authSlice.actions
export default authSlice.reducer
