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
  auth: boolean
  regMessage: string
  authMessage: string
}

const initialState: IUserSlice = {
  token: document.cookie,
  loading: false,
  regError: false,
  authError: false,
  register: false,
  auth: false,
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
  const res = response.data.filter(
    user => user.email === client.email && user.password === client.password
  )
  const tok = res[0].token
  document.cookie = `name=${tok}`

  return res
})

export const registrUser = createAsyncThunk<IUser, ActionPayload>('users/registr', async value => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const res = response.data.filter(user => user.email === value.email)
  const tok = res[0].token
  document.cookie = `name=${tok}`

  if (res.length > 0) {
    const resp = await instance.post('http://localhost:3001/users', {
      token: uuidv4(),
      id: uuidv4(),
      name: value.name.trim(),
      lastName: value.lastName.trim(),
      email: value.email.trim(),
      password: value.password.trim(),
      phone: value.phone
    })
    document.cookie = `name=${resp.data.token}`
    return resp.data
  }

  return new Error('hhghh')
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
      state.auth = false
      state.authError = false
      state.authMessage = ''
    })
    builder.addCase(logIn.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.loading = false
      state.users = action.payload
      state.auth = true
      state.authError = false
      state.authMessage = ''
    })
    builder.addCase(logIn.rejected, state => {
      state.loading = false
      state.auth = false
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
    })
    builder.addCase(registrUser.rejected, state => {
      state.loading = false
      state.regError = true
      state.register = false
      state.regMessage = 'You cant register'
    })
  }
})

export const { register } = authSlice.actions
export default authSlice.reducer
